# n8n Workflow Testing Checklist

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

Comprehensive testing guide for validating n8n workflows before and after production deployment.

**Audience:** Engineers and technical PMs deploying workflows
**Time Required:** 2-4 hours for full workflow testing
**Prerequisites:** Section 9 Automations Guide, working n8n instance

---

## Overview

A complete testing strategy covers:
1. **Unit tests** - Individual nodes in isolation
2. **Integration tests** - Multi-node flows working together
3. **Error scenarios** - Expected failures handled gracefully
4. **Production testing** - Phased rollout to catch real-world issues

---

## Part 1: Unit Testing (Individual Nodes)

### Test Strategy

For each node, test:
- **Happy path:** Valid input → Expected output
- **Edge cases:** Boundary values, empty data, special characters
- **Error handling:** Invalid input → Graceful failure

### Node 1: Webhook Trigger

**Purpose:** Receive form data from website/app

**Test Cases:**

| Test | Input | Expected Output | Pass? |
|------|-------|-----------------|-------|
| Valid webhook data | `{"name": "John", "email": "john@example.com", "company": "Acme", "message": "Hello"}` | Received and passed to next node |  |
| Missing field | `{"name": "John"}` | Still passes (validation happens later) |  |
| Extra fields | `{..., "extra_field": "value"}` | Extra field preserved/ignored |  |
| Special characters | `{"message": "Hello\nWorld\t!"}` | Data preserved as-is |  |
| Large payload | `{"message": "Lorem ipsum..." (5000 chars)}` | Successfully ingested |  |

**How to test:**
1. In n8n, click webhook node → "Webhooks" tab
2. Copy webhook URL
3. Use curl or Postman to POST test data:
   ```bash
   curl -X POST https://your-instance.com/webhook/alex-leads \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com",...}'
   ```
4. Check execution history for success

### Node 2: Function - Prepare Lead Payload

**Purpose:** Normalize and structure raw input

**Test Data:**

```javascript
// Test Case 1: Normal input
const input1 = {
  name: "Sarah Chen",
  email: "SARAH.CHEN@EXAMPLE.COM",
  company: "  TechCorp Inc  ",
  message: "Looking for a solution"
};

// Expected output:
{
  workflow_id: "lead-1707425000123", //  exists
  trace_id: "trace-...",              //  exists
  input: {
    name: "Sarah Chen",               //  unchanged
    email: "sarah.chen@example.com",  //  lowercased & trimmed
    company: "TechCorp Inc",          //  trimmed
    message: "Looking for a solution" //  unchanged
  }
}
```

**Manual Test in n8n:**
1. Click the Function node
2. Click "Test the node"
3. Paste test input JSON
4. Click "Execute" and verify output

**Verification Checklist:**
- [ ] Email is lowercase
- [ ] Spaces are trimmed (` TechCorp Inc ` → `TechCorp Inc`)
- [ ] workflow_id exists and is unique
- [ ] trace_id exists and is unique
- [ ] created_at uses ISO format

### Node 3: Switch - Validate Required Fields

**Purpose:** Check if email is valid before proceeding

**Test Cases:**

| Email | Expected Behavior | Pass? |
|-------|-------------------|-------|
| `sarah@example.com` | Continue (valid) |  |
| `sarah@example` | Continue (missing extension, but .includes('@') is true) |  |
| `sarah@` | Continue (still has @) |  |
| `sarah` | Reject (no @) |  |
| `` (empty) | Reject (no @) |  |
| `  @example.com` | Continue (@ exists, even with spaces) |  |

**How to test:**
1. Create multiple test webhook posts with different emails
2. Check execution history for routing (does it go to branch 1 or branch 2?)
3. Mark each result

### Node 4: HTTP Request - Enrich Company Data

**Purpose:** Look up company size via external API

**Test Cases:**

| Company | Expected | Actual | Pass? |
|---------|----------|--------|-------|
| `"TechCorp Inc"` | Returns `{company_size: 2500, industry: "SaaS"}` | |  |
| `"Unknown Corp XYZ"` | API returns 404 or empty | Should handle gracefully |  |
| Empty string `""` | API error or null | Should not crash |  |

**How to test:**
1. In the HTTP node, enable "Output" to see response
2. Create test data with various company names
3. Check if API returns expected structure
4. Verify error handling if API is down:
   - Does workflow halt or continue gracefully?

**Debugging:**
- Click node → "Test the node" → enter test input
- Check "Response" tab to see actual API response
- If failing, check API credentials and endpoint URL

### Node 5: Function - Classify with OpenAI

**Purpose:** Use AI to classify lead warmth

**Test Cases:**

| Input | Expected Warmth | Expected Confidence | Pass? |
|-------|-----------------|-------------------|-------|
| `"Hi, we're looking for a solution for our scaling team"` | Hot | 0.8-1.0 |  |
| `"Just checking out your product"` | Warm | 0.5-0.8 |  |
| `"What's your pricing?"` | Cold | 0.2-0.7 |  |
| `"..."` (very short) | Cold | 0.3-0.6 |  |

**How to test:**
1. Before running full workflow, test OpenAI node independently
2. Create test lead object with various messages
3. Run node and verify JSON response
4. Check that confidence score makes sense
5. Check for errors in parsing response

**Common Issues:**
- OpenAI returns non-JSON text → Add Function node after to handle
- Timeout (takes >30s) → May need error handling
- Rate limited → Check API credits and limits

---

## Part 2: Integration Testing (Multi-Node Flows)

### Test Scenario 1: Happy Path (Start to Finish)

**Objective:** Verify the entire workflow completes successfully

**Setup:**
1. Create a "test" label/tag in your CRM for test records
2. Create test email account (e.g., `test@your-domain.com`)
3. Note the Slack test channel

**Test Data:**
```json
{
  "name": "Integration Test User",
  "email": "integration-test@example.com",
  "company": "Test Corp",
  "message": "We are looking for a solution to help our team scale our operations efficiently."
}
```

**Steps:**
1. Send webhook POST with test data
2. Wait for workflow to complete (observe in Execution tab)
3. Verify each output:

**Verification Checklist:**

- [ ] **Webhook received:** Execution shows successful trigger
- [ ] **Data normalized:** Trace through to see cleaned data
- [ ] **Validation passed:** Email format accepted
- [ ] **Enrichment worked:** Company size populated
- [ ] **AI classification completed:** Warmth assigned (should be "Hot" for this message)
- [ ] **CRM record created:**
  - [ ] Check Airtable (or your CRM)
  - [ ] Record has name, email, company, warmth, fit_score
  - [ ] Workflow ID matches
- [ ] **Email sent:**
  - [ ] Check email inbox (or verify in Gmail logs)
  - [ ] Subject looks reasonable
  - [ ] Body is personalized (mentions company name)
- [ ] **Slack notification:**
  - [ ] Posted to correct channel
  - [ ] Shows lead name, company, warmth, fit score
- [ ] **Analytics logged:**
  - [ ] Check PostgreSQL (if configured)
  - [ ] Query: `SELECT * FROM workflow_analytics WHERE workflow_id = '...'`
  - [ ] Record shows all fields

**Expected Timing:**
- Full workflow: 5-15 seconds (depends on API response times)
- If >30 seconds: Check for slow nodes (use Execution History logs)

---

### Test Scenario 2: Warm Lead (Partial Response)

**Objective:** Verify workflow routes correctly for different classifications

**Test Data:**
```json
{
  "name": "Warm Prospect",
  "email": "warm@example.com",
  "company": "Mid-Size Corp",
  "message": "Interesting product, would like to know more about pricing and features."
}
```

**Expected Behavior:**
- Classification: Warm (0.6-0.8 confidence)
- Email: Personalized but nurture-focused (not aggressive closing)
- CRM: Marked as Warm
- Slack: Posted as " WARM LEAD" (not  HOT)

**Verification:**
- [ ] Warmth = "Warm" in CRM
- [ ] Email tone is consultative, not pushy
- [ ] Slack message uses correct emoji

---

### Test Scenario 3: Cold Lead (Low Engagement)

**Objective:** Verify system handles cold/low-quality leads

**Test Data:**
```json
{
  "name": "Casual Browser",
  "email": "browser@example.com",
  "company": "Random Corp",
  "message": "What?"
}
```

**Expected Behavior:**
- Classification: Cold (0.3-0.5 confidence)
- System may flag for manual review (confidence < 0.7)
- Email: Generic or auto-sequence
- CRM: Marked as Cold
- No Slack notification (optional based on config)

**Verification:**
- [ ] Warmth = "Cold"
- [ ] If confidence < 0.7, check "needs_manual_review" flag
- [ ] Email still sends (system doesn't skip cold leads)
- [ ] CRM record created anyway

---

## Part 3: Error Scenario Testing

### Test 1: Missing Required Field (No Email)

**Setup:**
```json
{
  "name": "No Email Person",
  "email": "",
  "company": "Acme",
  "message": "Hi there"
}
```

**Expected:** Workflow should catch error at validation node and route to error handler

**Verification Checklist:**
- [ ] Validation node catches missing email
- [ ] Execution stops at Switch node (doesn't proceed to enrichment)
- [ ] Error handler node receives signal
- [ ] Alert sent to team (Slack or email)
- [ ] No CRM record created (good!)
- [ ] No email sent to invalid address
- [ ] Error logged in database with reason

**What to avoid:**
-  Sending email to empty address
-  Crashing entire workflow
-  Silently skipping the record

---

### Test 2: Invalid Email Format

**Setup:**
```json
{
  "name": "Invalid Email",
  "email": "not-an-email",
  "company": "Acme",
  "message": "Hello"
}
```

**Expected:** Catch at validation and route to error handler

**Verification:**
- [ ] Validation node rejects (no @ symbol)
- [ ] Error logged with "invalid_email" reason
- [ ] CRM record NOT created
- [ ] No email sent to invalid address

---

### Test 3: Enrichment API Down

**Setup:** Same as happy path, but:
1. Temporarily disable/mock the company enrichment API
2. Make it return 500 error

**Expected:** Workflow should degrade gracefully

**Verification:**
- [ ] Error caught at HTTP Request node
- [ ] Retry logic engages (should retry 2-3 times)
- [ ] If still fails, Function node handles gracefully
- [ ] Workflow continues with `company_size: null`
- [ ] Message logged: "Enrichment API failed, continuing with degraded data"
- [ ] CRM record created anyway (empty company_size field)
- [ ] AI classification still happens (doesn't need company_size)

**Success Metric:** Workflow completes despite API failure

---

### Test 4: OpenAI API Timeout

**Setup:**
1. Configure OpenAI node with a very short timeout (1 second)
2. Or mock API to delay response

**Expected:** Error handling and retry

**Verification:**
- [ ] First attempt times out
- [ ] Retry logic triggers (exponential backoff: 1s, 2s, 4s)
- [ ] If retries exhaust, workflow doesn't crash
- [ ] Instead, record is flagged for manual review
- [ ] Error logged with "openai_timeout" reason
- [ ] Slack alert sent to team
- [ ] CRM record created with `confidence: null` or `confidence: 0` and `needs_manual_review: true`

---

### Test 5: Database Connection Failure

**Setup:**
1. Disconnect from PostgreSQL (or use wrong credentials)
2. Let workflow run

**Expected:** Graceful failure

**Verification:**
- [ ] PostgreSQL node fails to connect
- [ ] Error handler catches it
- [ ] Slack alert sent: "Database connection failed"
- [ ] Execution completes (doesn't hang)
- [ ] CRM record created (Airtable still works if separate)
- [ ] Email still sent
- [ ] Log shows retry attempts

**What should NOT happen:**
-  Workflow stuck waiting for database forever
-  User not notified

---

### Test 6: Duplicate Lead (Same Email)

**Setup:**
1. Send two webhooks with identical email address
2. Expected behavior: Handle gracefully

**Verification:**
- [ ] First lead creates CRM record
- [ ] Second lead: Either
  - [ ] Creates duplicate (then merge later), OR
  - [ ] Updates existing record (if using UPSERT), OR
  - [ ] Alerts team about duplicate
- [ ] No errors or crashes
- [ ] Both emails sent (or only one, depending on design)

---

## Part 4: Performance & Load Testing

### Test: Single Lead Processing Time

**Objective:** Measure workflow speed

**Steps:**
1. Send a single test webhook
2. Note start time (from Execution History)
3. Note end time
4. Calculate duration

**Expected:** 5-15 seconds for full workflow (depending on APIs)

**Acceptable Ranges:**
- < 5 seconds: Excellent
- 5-10 seconds: Good
- 10-20 seconds: Acceptable
- 20+ seconds: Investigate slow nodes

**If slow:**
1. Check Execution History → logs for each node
2. Identify slowest node (usually AI or enrichment API)
3. Add caching or parallel execution if possible

---

### Test: Batch Processing (50 Leads)

**Objective:** Verify system can handle moderate load

**Setup:**
1. Create 50 test leads (with varied content)
2. Send all 50 webhooks in rapid succession
3. Monitor execution

**Verification:**
- [ ] All 50 complete successfully
- [ ] No timeout errors
- [ ] CRM has 50 new records
- [ ] Slack doesn't get spammed (consider batching notifications)
- [ ] Database doesn't show errors
- [ ] Average time per lead: < 10 seconds

---

### Test: Rate Limiting

**Objective:** Ensure system respects API limits

**Scenario:** OpenAI API has rate limit of 100 requests/minute

**Setup:**
1. Configure rate limiter in workflow
2. Send 150 test leads
3. Monitor execution

**Verification:**
- [ ] First 100 process immediately
- [ ] Next 50 queue up (wait for next minute)
- [ ] All 150 eventually complete
- [ ] No 429 (Too Many Requests) errors
- [ ] Error logs show "rate_limited" status for deferred items

---

## Part 5: Production Testing (Phased Rollout)

### Phase 1: Manual Testing (5-10 leads)

**Timeline:** 1-2 hours

**Steps:**
1. Manually send test webhook data
2. Verify all outputs (CRM, email, Slack)
3. Check database logs
4. Inspect error handling

**Acceptance Criteria:**
- [ ] All happy path tests pass
- [ ] All error scenarios handled
- [ ] No unexpected behaviors
- [ ] Performance acceptable

**Go/No-Go Decision:** If all pass, proceed to Phase 2

---

### Phase 2: Limited Release (Real Users, Controlled)

**Timeline:** 1 week

**Setup:**
1. Enable workflow for subset of traffic (e.g., 10% of leads)
2. Use feature flag or URL parameter to route
3. Monitor closely

**Daily Checks:**
- [ ] Error rate < 1%
- [ ] Average processing time acceptable
- [ ] All leads created in CRM
- [ ] All emails sent
- [ ] No database issues
- [ ] Slack notifications reasonable

**Weekly Review:**
- [ ] Sample 10 CRM records for accuracy
- [ ] Review Slack messages for tone/content
- [ ] Check email delivery (inbox vs. spam)
- [ ] Run analytics query: `SELECT COUNT(*), AVG(ai_confidence) FROM workflow_analytics WHERE created_at > NOW() - INTERVAL 7 day`
- [ ] Interview team: "Any issues with workflow?"

**Go/No-Go Decision:** If metrics acceptable, proceed to Phase 3

---

### Phase 3: Full Production

**Timeline:** Ongoing

**Setup:**
1. Enable workflow for all incoming leads
2. Remove feature flags
3. Set up continuous monitoring

**Monitoring Dashboard (Create in n8n or external tool):**

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Success Rate | > 95% | |  |
| Avg Processing Time | < 10s | |  |
| Error Rate | < 2% | |  |
| AI Confidence Avg | > 0.85 | |  |
| CRM Records/Hour | Expected rate | |  |
| Emails Sent/Hour | Expected rate | |  |
| Database Errors | 0 | |  |

**Weekly Review Process:**
1. Run analytics query (provided below)
2. Generate report (AI-assisted)
3. Send to leadership
4. Identify optimization opportunities
5. Plan improvements for next sprint

**Monthly Optimization:**
- Review sample CRM records
- Evaluate AI classification accuracy
- Test new features or refinements
- Benchmark against previous month

---

## Regression Testing Checklist

**When should you re-test the entire workflow?**
- [ ] Before deploying any code changes
- [ ] After changing credentials
- [ ] After updating node versions
- [ ] Monthly (spot check)
- [ ] After extending workflow (new nodes)

**Quick Regression Test (30 minutes):**
1. Happy path test 
2. Error scenario test 
3. Check all output systems (CRM, email, Slack) 
4. Spot-check 5 recent executions for accuracy 

---

## Analytics Queries for Testing

### Query 1: Execution Summary

```sql
SELECT
  COUNT(*) as total_executions,
  SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as successful,
  SUM(CASE WHEN status = 'error' THEN 1 ELSE 0 END) as failed,
  ROUND(100.0 * SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) / COUNT(*), 2) as success_rate,
  AVG(duration_ms) as avg_duration_ms,
  MIN(duration_ms) as min_duration_ms,
  MAX(duration_ms) as max_duration_ms
FROM workflow_analytics
WHERE created_at > NOW() - INTERVAL 24 HOUR;
```

### Query 2: AI Classification Distribution

```sql
SELECT
  decisions->>'warmth' as warmth,
  COUNT(*) as count,
  ROUND(AVG((decisions->>'confidence')::NUMERIC), 3) as avg_confidence,
  MIN((decisions->>'confidence')::NUMERIC) as min_confidence
FROM workflow_analytics
WHERE created_at > NOW() - INTERVAL 7 DAYS
GROUP BY decisions->>'warmth'
ORDER BY count DESC;
```

### Query 3: Error Rate by Node

```sql
SELECT
  jsonb_object_keys(error_log) as error_source,
  COUNT(*) as occurrences,
  ROUND(100.0 * COUNT(*) / (SELECT COUNT(*) FROM workflow_analytics WHERE created_at > NOW() - INTERVAL 7 DAYS), 2) as percentage
FROM workflow_analytics
WHERE error_log IS NOT NULL
  AND created_at > NOW() - INTERVAL 7 DAYS
GROUP BY jsonb_object_keys(error_log)
ORDER BY occurrences DESC;
```

---

## Testing Sign-Off Template

**Use this before marking workflow as "production-ready":**

```
TESTING SIGN-OFF
================

Workflow: Alex Lead Processing
Date: _________
Tester: _________

UNIT TESTS
[ ] Webhook trigger
[ ] Function - Prepare Lead Payload
[ ] Switch - Validate Fields
[ ] HTTP - Enrich Company
[ ] Function - Parse Enrichment
[ ] OpenAI - Classify Warmth
[ ] Function - Parse Classification
[ ] Switch - Route Decision
[ ] OpenAI - Generate Email
[ ] Airtable - Create Record
[ ] Gmail - Send Email
[ ] Slack - Post Notification
[ ] Function - Log Analytics
[ ] PostgreSQL - Save Analytics

INTEGRATION TESTS
[ ] Happy path (valid lead, Hot classification)
[ ] Warm lead classification
[ ] Cold lead classification
[ ] Missing email field
[ ] Invalid email format
[ ] Enrichment API failure
[ ] OpenAI timeout
[ ] Database connection failure
[ ] Duplicate lead handling
[ ] Single lead performance (< 10s)
[ ] Batch processing (50 leads)

PRODUCTION READINESS
[ ] Phase 1: Manual testing (5-10 leads) - OK
[ ] Phase 2: Limited release (7 days) - OK
[ ] Team sign-off: _________ (name)
[ ] Go-live approval: _________ (name)

NOTES:
_______________________________
_______________________________

SIGN-OFF:
Engineer: ___________ Date: ___
Manager: ___________ Date: ___
```

---

## Quick Troubleshooting

| Problem | Check | Solution |
|---------|-------|----------|
| Workflow not triggering | Webhook URL correct? | Copy webhook URL and test with curl |
| Data not flowing to next node | Output format correct? | Check previous node's output structure |
| AI returning non-JSON | Response format set to JSON? | Add Function node to parse/validate |
| Email not sending | Credentials valid? | Test Gmail separately, check email format |
| Workflow slow | Which node is slowest? | Check Execution History logs, identify bottleneck |
| Errors not being caught | Error handler connected? | Ensure Switch or Catch node is positioned |
| Rate limited errors | API limit reached? | Check API dashboard, implement throttling |

---

## Summary Checklist for "Go Live"

Before deploying to production:

- [ ] All unit tests passing
- [ ] All integration tests passing
- [ ] All error scenarios handled gracefully
- [ ] Performance acceptable (< 10s per lead)
- [ ] Load tested (50+ concurrent leads)
- [ ] Manual testing approved
- [ ] Phase 1 limited release approved
- [ ] Monitoring dashboard set up
- [ ] Error alerting configured (Slack/Email)
- [ ] Team trained on using/monitoring workflow
- [ ] Rollback plan documented
- [ ] Weekly reporting process established

**When all boxes checked: Ready for production!**

---

**Next Steps:**
- Monitor daily for first week
- Run weekly analytics report
- Schedule monthly optimization review
- Plan Phase 2 enhancements

For questions, refer to 9_Automations_Guide.md Section 9: Testing & Debugging.
