# Common n8n Patterns & Best Practices

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

Documented patterns for solving recurring challenges in n8n workflows. Use these as building blocks for complex automations.

**What's in This Guide:**
1. [Fan-Out / Fan-In Pattern](#1-fan-out--fan-in-pattern)
2. [State Management](#2-state-management)
3. [Retry Logic](#3-retry-logic)
4. [Parallel Execution](#4-parallel-execution)
5. [Conditional Routing](#5-conditional-routing)
6. [Loop & Batch Processing](#6-loop--batch-processing)
7. [Error Recovery](#7-error-recovery)
8. [Data Transformation Pipeline](#8-data-transformation-pipeline)

---

## 1. Fan-Out / Fan-In Pattern

### What It Is

**Fan-Out:** One input spawns multiple parallel operations
**Fan-In:** Multiple results are collected back into one stream

### When to Use

- Processing one lead through multiple parallel actions (create CRM, send email, post Slack, log DB)
- Branching logic that reconverges
- Multiple API calls that can run simultaneously

### Visual Flow

```
Input (one lead)
    → Create CRM Record (parallel 1)
    → Send Email (parallel 2)
    → Post Slack (parallel 3)
    → Log Analytics (parallel 4)
        ↓
        All complete
        ↓
    Merge results
        ↓
    Output (completed)
```

### Implementation

**In n8n, this happens naturally:**

1. Create one node after classification (e.g., "Classify Lead")
2. Connect multiple nodes to that single source
3. Each connected node runs in parallel
4. Use a Merge node to reconverge

**Configuration:**

```
Node: Classify Lead (OpenAI)
    
    → Node: Airtable - Create CRM Record
          ↓
          → Merge node (input: Airtable output)
    
    → Node: Gmail - Send Email
          ↓
          → Merge node (input: Gmail output)
    
    → Node: Slack - Post Message
          ↓
          → Merge node (input: Slack output)
    
    → Node: PostgreSQL - Log Analytics
           ↓
           → Merge node (input: PostgreSQL output)

All ↓ merge results together
```

**Merge Node Configuration:**

```
Node: Merge
 Input: Data from all 4 action nodes
 Output: Array of results
 Mode: Merge all inputs
```

### Result Structure (After Merge)

```javascript
// Before merge, each node's output is separate
// After merge, you get an array of all results

[
  {
    // From Airtable node
    "json": { "id": "rec123...", "created": true }
  },
  {
    // From Gmail node
    "json": { "message_id": "msg456...", "sent": true }
  },
  {
    // From Slack node
    "json": { "ts": "1234567890.123456", "posted": true }
  },
  {
    // From PostgreSQL node
    "json": { "rows_affected": 1, "logged": true }
  }
]
```

### Practical Example: Lead Processing Workflow

```javascript
// After all parallel actions complete, verify all succeeded
// Function node after Merge

const results = $json; // array of 4 action results

return [{
  json: {
    all_actions_succeeded: results.every(r => r.json.success || r.json.created),
    crm_created: results[0].json.created,
    email_sent: results[1].json.sent,
    slack_posted: results[2].json.posted,
    analytics_logged: results[3].json.logged,
    completed_at: new Date().toISOString()
  }
}];
```

### Troubleshooting

**Problem:** One parallel action fails, others continue (expected)
**Solution:** Use error handling on each node or in a downstream Function

**Problem:** Merge node doesn't combine results
**Solution:** Ensure all action nodes are connected to the same Merge node

**Best Practice:** Add error handling to each parallel action:
```
Action Node (with error handling)
 On error: Add custom error to output
 On success: Add success flag
 Result passed to Merge regardless
```

---

## 2. State Management

### What It Is

Storing workflow progress/data in an external system (database) so you can:
- Resume from checkpoints if errors occur
- Track multi-step processes over days/weeks
- Share state between multiple workflow instances

### When to Use

- Multi-step processes that span hours/days
- Complex workflows with many decision points
- Need to retry specific steps
- Multiple workflows accessing same data
- Regulatory/audit requirements (track every step)

### Pattern: Database State Table

**PostgreSQL Schema:**

```sql
CREATE TABLE workflow_state (
  id SERIAL PRIMARY KEY,

  -- Identity
  workflow_id VARCHAR(255) UNIQUE NOT NULL,
  trigger_id VARCHAR(255) NOT NULL,
  trace_id VARCHAR(255) NOT NULL,

  -- Progress
  current_step VARCHAR(50),
  step_sequence TEXT[],        -- completed steps
  last_checkpoint TIMESTAMP,
  retry_count INT DEFAULT 0,

  -- Data
  input_data JSONB,
  normalized_data JSONB,
  decisions_made JSONB,
  actions_completed JSONB,
  error_log JSONB,

  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_workflow_id ON workflow_state(workflow_id);
CREATE INDEX idx_current_step ON workflow_state(current_step);
```

### Workflow Pattern

```
1. Trigger received
    ↓
2. Load State (database)
    → If exists: Resume from last checkpoint
    → If new: Initialize state
    ↓
3. INTAKE BLOCK
     Normalize data
     Update state: current_step = 'intake'
     Continue to decision
    ↓
4. DECISION BLOCK
     Classify
     Update state: current_step = 'decision'
     Continue to actions
    ↓
5. ACTION BLOCK
     Execute all actions in parallel
     Update state: current_step = 'action'
     Continue to completion
    ↓
6. Completion
     Update state: current_step = 'complete'
     Archive state
```

### Node Configuration: Load State

**Node Type:** PostgreSQL

```sql
SELECT * FROM workflow_state
WHERE workflow_id = $1
LIMIT 1;

-- Parameters:
-- $1: {{ $json.workflow_id }}
```

### Node Configuration: Save Checkpoint

**Node Type:** PostgreSQL

```sql
INSERT INTO workflow_state (
  workflow_id, trace_id, trigger_id,
  current_step, step_sequence, input_data, normalized_data
) VALUES ($1, $2, $3, $4, $5, $6, $7)
ON CONFLICT (workflow_id) DO UPDATE SET
  current_step = $4,
  step_sequence = $5,
  normalized_data = $7,
  last_checkpoint = NOW(),
  updated_at = NOW()
RETURNING id;

-- Parameters:
-- $1: {{ $json.workflow_id }}
-- $2: {{ $json.trace_id }}
-- $3: {{ $json.trigger_id }}
-- $4: 'intake'  (or 'decision', 'action', etc.)
-- $5: ARRAY['webhook_received', 'normalized']
-- $6: {{ JSON.stringify($json.input_data) }}
-- $7: {{ JSON.stringify($json.normalized_data) }}
```

### Resume Logic

**Node: Switch (after loading state)**

```
Condition 1: $json.state.current_step === 'complete'
  → Route to: "Already Processed" node (skip)

Condition 2: $json.state.current_step === 'decision'
  → Route to: Decision Block (skip intake)

Condition 3: $json.state.current_step === 'action'
  → Route to: Action Block (skip intake + decision)

Condition 4: Default (new or 'intake')
  → Route to: Intake Block
```

### Example: Resume After Error

```javascript
// If action fails, store error and mark for retry
const state = $json.state;
const error = $json.error;

return [{
  json: {
    workflow_id: state.workflow_id,
    current_step: 'action',  // stay at action, don't advance
    retry_attempt: state.retry_count + 1,
    last_error: {
      message: error.message,
      occurred_at: new Date().toISOString(),
      node_name: error.node_name
    },
    status: 'needs_retry'
  }
}];

// In PostgreSQL update:
// UPDATE workflow_state
// SET retry_count = retry_count + 1,
//     error_log = array_append(error_log, $1),
//     updated_at = NOW()
// WHERE workflow_id = $2
```

### Benefits

- **Resilience:** Restart failed workflows from last checkpoint
- **Auditability:** Complete history of all steps
- **Debugging:** See exactly where workflows fail
- **Scaling:** Handle multi-step processes without timeouts

---

## 3. Retry Logic

### Pattern 1: Automatic Retry (Node Configuration)

**Simplest approach:** Configure retry on the problematic node

**Node Settings:**
```
Node: HTTP Request (or any action node)
 Error handling: Retry
 Max Retries: 3
 Backoff Type: Exponential
 Initial Delay: 1 second
```

**Result:**
- 1st attempt: fails
- Wait 1 second
- 2nd attempt: fails
- Wait 2 seconds
- 3rd attempt: fails
- Wait 4 seconds
- 4th attempt: gives up, error handler triggered

### Pattern 2: Custom Retry Logic (Function)

**For more control:**

```javascript
// Track retry attempts
const attempt = $json.retry_attempt || 1;
const max_retries = 3;
const backoff_base_ms = 1000; // 1 second

// Calculate delay: exponential backoff
const delay_ms = backoff_base_ms * Math.pow(2, attempt - 1);
// attempt 1: 1000ms (1s)
// attempt 2: 2000ms (2s)
// attempt 3: 4000ms (4s)

if (attempt > max_retries) {
  return [{
    json: {
      ...$items(0).json,
      final_error: 'Max retries exceeded',
      should_alert: true,
      alert_message: `Failed after ${max_retries} attempts: ${$json.error}`
    }
  }];
}

return [{
  json: {
    ...$items(0).json,
    should_retry: true,
    next_attempt: attempt + 1,
    wait_ms: delay_ms,
    reason: $json.error || 'Unknown error'
  }
}];
```

### Pattern 3: Exponential Backoff with Jitter

**More sophisticated:** Prevent thundering herd (all retries at same time)

```javascript
const attempt = $json.retry_attempt || 1;
const max_retries = 3;

// Exponential: 1s, 2s, 4s
const exponential_ms = 1000 * Math.pow(2, attempt - 1);

// Add random jitter: 0-50% of delay
const jitter_ms = Math.random() * (exponential_ms * 0.5);
const total_delay_ms = exponential_ms + jitter_ms;

return [{
  json: {
    ...$items(0).json,
    next_retry_in_ms: total_delay_ms,
    formula: `exponential (${exponential_ms}ms) + jitter (${jitter_ms}ms)`
  }
}];
```

### Complete Retry Flow

```
Try Operation (HTTP Request)
    ↓
    Fails → Catch Error
    ↓
Function: Calculate Backoff
 If attempt <= 3:
    Calculate delay
    Set retry_attempt = attempt + 1
    Set should_retry = true

 If attempt > 3:
     Set should_alert = true
     Set should_retry = false
    ↓
Switch: Should Retry?
 YES: Wait node ({{ $json.wait_ms }})
   ↓
   Try Operation again (connects back to same HTTP node)

 NO: Error Handler
     Log to database
     Alert team (Slack)
```

### Common Retry Scenarios

| Scenario | Error Code | Retry? | Max Attempts | Strategy |
|----------|-----------|--------|--------------|----------|
| Timeout | ECONNREFUSED | Yes | 3 | Exponential |
| Rate limited | 429 | Yes | 5 | Exponential + jitter |
| Bad request | 400 | No | 1 | Fail immediately |
| Auth failed | 401 | No | 1 | Alert & stop |
| Server error | 500 | Yes | 3 | Exponential |
| Not found | 404 | No | 1 | Fail immediately |

---

## 4. Parallel Execution

### Pattern: Parallel vs. Sequential

**Parallel:** Multiple operations run simultaneously (faster)
**Sequential:** One after another (simpler control flow)

### When to Use Parallel

- Multiple API calls that don't depend on each other
- Batch processing many items
- Multiple action nodes after decision

### When to Use Sequential

- Steps depend on previous output
- Need to maintain order
- Resource constraints

### Parallel Pattern (Built-in)

```
Classify Lead
    
    → Action 1 (Airtable) 
    → Action 2 (Email) → Merge
    → Action 3 (Slack) 
    → Action 4 (Database) 

All 4 run at same time
```

**Why it works:** In n8n, when multiple nodes point to the same source, they execute in parallel

### Manual Parallel (Loop Node)

**For processing many items:**

```
Input: Array of 100 leads
    ↓
Loop node: Iterate over each lead
     Process lead 1
     Process lead 2 (simultaneously if parallel enabled)
     Process lead 3 (simultaneously if parallel enabled)
    ...
     Process lead 100
    ↓
Collect all results
```

**Loop Node Configuration:**

```
Node: Loop
 Items: {{ $json.leads }}
 Mode: Sequential (simple)
        OR Parallel (fast, but uses more resources)
 Max parallel: 5 (if parallel mode)
```

### Result Collection

```javascript
// After loop completes, results array contains all outputs

const results = $json.processed_items;

return [{
  json: {
    total_processed: results.length,
    successful: results.filter(r => r.success).length,
    failed: results.filter(r => !r.success).length,
    success_rate: (results.filter(r => r.success).length / results.length * 100).toFixed(2) + '%'
  }
}];
```

---

## 5. Conditional Routing

### Pattern 1: Simple IF/THEN (Switch Node)

**Simplest branching:**

```
Input
    ↓
Switch: Check condition
     Branch 1: Condition true → Do A
     Branch 2: Default (false) → Do B
```

**Configuration:**

```
Node: Switch
 Condition 1: {{ $json.decision.warmth === 'Hot' }}
   → True branch: Route to "Priority Queue"
   → False branch: Continue to next condition

 Condition 2: {{ $json.decision.warmth === 'Warm' }}
   → True branch: Route to "Nurture Sequence"
   → False branch: Continue to next condition

 Default
    → Route to "Archive"
```

### Pattern 2: Complex Logic (Multiple Conditions with AND/OR)

```javascript
// In Function node before Switch

const decision = {
  is_hot_enterprise: $json.decision.warmth === 'Hot' && $json.company_size > 500,
  is_hot_smb: $json.decision.warmth === 'Hot' && $json.company_size <= 500,
  is_warm: $json.decision.warmth === 'Warm',
  is_cold: $json.decision.warmth === 'Cold'
};

return [{
  json: {
    ...$items(0).json,
    route: Object.entries(decision)
      .find(([_, value]) => value)?.[0] || 'archive'
  }
}];
```

**Then Switch on `route`:**

```
Switch: {{ $json.route }}
 'is_hot_enterprise' → Senior Sales Rep
 'is_hot_smb' → Junior Sales Rep
 'is_warm' → Nurture Sequence
 'is_cold' → Archive
```

### Pattern 3: Nested Conditions

```
Outer Switch: Is message long?
 YES (> 50 words)
   → Inner Switch: Is company large?
       YES (> 1000): route A
       NO: route B
   
   → Continue

 NO (≤ 50 words)
    → Mark as low quality
    → Archive
```

---

## 6. Loop & Batch Processing

### Pattern: Loop Over Array

**Input:** Array of items
**Output:** Process each, collect results

```javascript
// Input: $json.leads = [lead1, lead2, lead3, ...]
// Loop iterates over each

// Inside loop, process one lead at a time
// Access current item: $json (it's the current lead)

// After loop completes, $json contains all results
```

**Configuration:**

```
Node: Loop
 Input: {{ $json.leads }}
 Mode: Sequential
 [Inside Loop]
    Nodes: (process, send, log, etc.)
```

### Pattern: Batch Processing

**For large datasets, split into batches:**

```javascript
// Split 1000 items into 10 batches of 100

const items = $json.items; // 1000 items
const BATCH_SIZE = 100;
const batches = [];

for (let i = 0; i < items.length; i += BATCH_SIZE) {
  batches.push({
    batch_number: Math.floor(i / BATCH_SIZE) + 1,
    items: items.slice(i, i + BATCH_SIZE)
  });
}

return [{
  json: {
    batches: batches,
    total_batches: batches.length
  }
}];
```

**Then loop over batches:**

```
Loop over batches
     Loop over items in batch
        Process item
        Collect result
     Wait 1 second (rate limit)
     Move to next batch
```

### Benefits

- **Resilience:** If batch 3 fails, batch 1-2 already processed
- **Rate limiting:** Can pause between batches
- **Monitoring:** Track batch progress

---

## 7. Error Recovery

### Pattern: Graceful Degradation

**Don't crash on errors. Instead:**

```javascript
// Try to enrich data, but don't require it
try {
  const enrichment = await callEnrichmentAPI();
  return enriched_data;
} catch {
  // Return original data without enrichment
  return original_data;
}
```

**In n8n:**

```
Enrich Company Data (HTTP)
    ↓
Switch: Did it succeed?
 YES: Use enriched data
 NO: Use original data (without enrichment fields)
    ↓
Continue normally
```

### Pattern: Partial Failure Handling

```javascript
// Some actions may fail, others succeed
// Process anyway, report what failed

const results = {
  crm_created: false,  // failed
  email_sent: true,    // succeeded
  slack_posted: true   // succeeded
};

return [{
  json: {
    overall_success: true,  // 2 of 3 is ok
    partial_failure: {
      failed_actions: Object.entries(results)
        .filter(([_, v]) => !v)
        .map(([name, _]) => name),
      alert_message: 'CRM creation failed, but email and Slack completed'
    }
  }
}];
```

---

## 8. Data Transformation Pipeline

### Pattern: Multi-Stage Transformation

```
Input (raw JSON)
    ↓ Stage 1: Normalize
Raw → Cleaned (lowercase, trimmed, etc.)
    ↓ Stage 2: Enrich
Cleaned → Enriched (add company size, industry)
    ↓ Stage 3: Transform
Enriched → Transformed (reshape for downstream)
    ↓ Stage 4: Validate
Transformed → Validated (check quality)
    ↓
Output (ready for action)
```

### Implementation

**Stage 1: Normalize**

```javascript
// Function node: Normalize Lead
return [{
  json: {
    name: ($json.name || '').trim(),
    email: ($json.email || '').trim().toLowerCase(),
    company: ($json.company || 'Unknown').trim(),
    message: ($json.message || '').trim()
  }
}];
```

**Stage 2: Enrich**

```
Function (normalize)
    ↓
HTTP (company lookup API)
    ↓
Function (merge enrichment)
```

**Stage 3: Transform**

```javascript
// Function node: Transform to Standard Format
return [{
  json: {
    lead: {
      personal: { name, email },
      company: { name, size, industry },
      engagement: { message, message_length }
    }
  }
}];
```

**Stage 4: Validate**

```javascript
// Function node: Validate
const required = ['name', 'email', 'company.name'];
const has_all = required.every(f => {
  const val = eval(`$json.${f}`);
  return !!val;
});

return [{
  json: {
    ...$items(0).json,
    is_valid: has_all,
    ready_for_action: has_all
  }
}];
```

---

## Quick Reference: Which Pattern When?

| Problem | Pattern | Complexity |
|---------|---------|------------|
| Multiple parallel actions | Fan-Out/Fan-In | Low |
| Multi-step process over days | State Management | High |
| API timeout | Retry Logic | Medium |
| Process 100 items | Loop + Batch | Medium |
| Route based on conditions | Switch | Low |
| Fix data issues | Transform Pipeline | Medium |
| Handle missing enrichment | Graceful Degradation | Low |

---

## Common Mistakes to Avoid

 **Don't:** Create separate branches for each condition (gets complex)
 **Do:** Use Switch node to centralize routing

 **Don't:** Retry indefinitely without exponential backoff
 **Do:** Use exponential backoff + jitter to prevent overload

 **Don't:** Process all 1000 items at once
 **Do:** Use batching and parallel limits

 **Don't:** Crash if enrichment API fails
 **Do:** Graceful degradation (continue without enrichment)

 **Don't:** Store everything in workflow (no persistence)
 **Do:** Use database for state + checkpoint

---

## Testing Patterns

**Always test patterns in isolation:**

1. **Test Loop:** Send array of 5 items, verify all processed
2. **Test Retry:** Mock API failure, verify retries happen
3. **Test Switch:** Send different conditions, verify routing
4. **Test Parallel:** Verify all 4 actions complete in parallel
5. **Test State:** Fail workflow, resume, verify checkpoint resume

---

**For detailed examples**, refer to:
- Node_Configuration_Snippets.md (code snippets)
- Testing_Checklist.md (how to test patterns)
- n8n_Workflow_Starter_Template.json (working example)

For questions, see 9_Automations_Guide.md.
