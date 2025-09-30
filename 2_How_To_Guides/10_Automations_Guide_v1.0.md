# 9. Automations Guide: Building in n8n

**Created:** 2026-02-08
**Last Updated:** 2026-02-08
**Purpose:** Implement orchestrations in n8n with node-by-node guidance
**Version:** v1.0
**Status:** Final
**Difficulty:** Intermediate to Advanced
**Prerequisites:** Workflows Guide, understanding of triggers and actions

---

## You Are Here

**Phase 3: Complex Task Creation → Automations Guide → Technical Implementation**

**Navigation:** [Start Here](../1_Toolkit_Documentation/1_Start_Here.md) → [How-To Guides](README.md) → Automations Guide

---

**Phase:** 3 - Complex Task Creation
**Prerequisites:** Phases 1-2, Sections 7-8 (Frameworks & Workflows)
**Time to Complete:** 4-6 hours
**Estimated Reading Time:** 28 minutes
**Audience:** Engineers and technical PMs (hands-on implementation)

---

## What You'll Learn

By the end of this guide, you'll be able to:
- Build orchestration workflows in n8n node-by-node
- Configure triggers, intake, decisions, actions, and review blocks
- Connect AI nodes (OpenAI, Anthropic) to your workflow
- Implement state management for multi-step processes
- Handle errors gracefully with retry logic and fallbacks
- Test and debug workflows before production
- Scale from one lead to hundreds with proper concurrency
- Migrate workflows between n8n and other platforms

**Key Principle:** n8n is a visual tool. You don't write code; you drag nodes, set conditions, and configure APIs. Think of it as Zapier's more powerful cousin.

---

## Table of Contents

1. [n8n Fundamentals & Architecture](#1-n8n-fundamentals--architecture)
2. [Building Block 1: Triggers](#2-building-block-1-triggers)
3. [Building Block 2: Intake & Normalization](#3-building-block-2-intake--normalization)
4. [Building Block 3: Decision Logic](#4-building-block-3-decision-logic)
5. [Building Block 4: Actions](#5-building-block-4-actions)
6. [Building Block 5: Review & Learning](#6-building-block-5-review--learning)
7. [State Management in n8n](#7-state-management-in-n8n)
8. [Alex in n8n: Complete Build](#8-alex-in-n8n-complete-build)
9. [Testing & Debugging](#9-testing--debugging)
10. [Other Platforms & Migration](#10-other-platforms--migration)

---

## 1. n8n Fundamentals & Architecture

### What Is n8n?

n8n is a **visual workflow automation platform** that lets you:
- Connect 400+ apps and APIs without code
- Build complex workflows with decision trees
- Use AI integration for intelligent steps
- Deploy self-hosted or cloud
- Execute millions of workflows at scale

**When to use n8n:**
- Building the Alex workflow (lead processing)
- Multi-step automations with branching logic
- Workflows requiring state persistence
- Complex integrations between 3+ systems
- Anything more complex than "trigger → action"

**When to use simpler tools (Zapier, IFTTT):**
- "If form submitted, send email" (one trigger, one action)
- Simple two-step automations
- No need for complex logic or state

### The n8n Graph Model

n8n works with a **directed acyclic graph (DAG)** of nodes:

```text
javascript
Node A (Trigger)
    ↓
Node B (Process)
    → Node C (If true)
           ↓
       Node D (Action)
    
    → Node E (If false)
            ↓
        Node F (Alternative action)
```python
javascript

**Key concepts:**
- **Nodes:** Individual steps (trigger, action, decision, transform)
- **Edges:** Connections showing data flow
- **Execution:** Starts at trigger, flows through connected nodes
- **Data:** Passed between nodes in JSON format
- **Context:** Each node can reference output from all previous nodes

### Node Types You'll Use

| Type | Purpose | Examples |
|------|---------|----------|
| **Trigger** | Start the workflow | Webhook, Cron (scheduled), Manual |
| **Input/Output** | Receive or send data | HTTP Request, Write to DB, Send Email |
| **Process** | Transform or check data | Function, Switch (if/then), Set |
| **AI/LLM** | Use AI for decisions | OpenAI, Anthropic, Cohere |
| **Integration** | Connect external systems | CRM, Email, Slack, Database |
| **Control Flow** | Route execution | Switch, Merge, Wait |

### The Execution Model

**Single execution:**
```text
javascript
Workflow triggers once
    ↓ passes input through nodes
    ↓ accumulates outputs at each step
    ↓ final output stored or sent somewhere
```markdown

**Batch execution (processing many items):**
```text
javascript
Trigger gets 100 leads
    ↓ Loop node iterates through each
    ↓ For each lead, execute sub-workflow
    ↓ Store all results
    ↓ Optional: parallel execution (process 5 at a time)
```python
javascript

### Key n8n Concepts

**Item**: The data passing through a node
- Single execution = one item
- Batch = multiple items (can loop or parallel)

**Expression**: Reference to data from previous nodes
- `{{ $json.field_name }}` - access field from current node input
- `{{ $items(0).json.field_name }}` - access output from node 0
- Supports JavaScript for calculations

**Credentials**: Secure API keys and secrets
- Store once in n8n, reference in nodes
- Not exposed in workflow export
- Example: OpenAI API key, Gmail password

**Data Mapping**: Connect output from one node to input of next
- Usually automatic (previous node's output is next node's input)
- Can be explicit with "Set" or "Map" nodes

---

## 2. Building Block 1: Triggers

### What Triggers Do

A trigger **starts your workflow**. Without it, nothing happens.

**n8n trigger nodes:**
- **Webhook:** HTTP request arrives
- **Cron:** Time-based (daily, hourly, specific times)
- **Manual:** User clicks "Execute" button
- **App Trigger:** Event from connected app (new Slack message, form submission via Zapier, etc.)

### Webhook Trigger (Most Common)

**What it is:** n8n generates a unique URL that receives data when events happen

**Example configuration:**

```text
javascript
Node: Webhook
 HTTP Method: POST
 Path: /leads
  (Full URL: https://your-n8n-instance.com/webhook/leads)
 Authentication: None (or API key if you want security)
 Response: Auto (n8n responds with "OK" to sender)
```markdown
json

**How data arrives:**

Someone's app (your website form, another workflow, external service) POSTs JSON to the webhook:

```json
{
  "name": "Sarah Chen",
  "email": "sarah.chen@techcorp.com",
  "company": "TechCorp Inc",
  "message": "Looking for a solution for our scaling team"
}
```markdown

**In n8n, access it:**
```text
json
{{ $json.name }}           → "Sarah Chen"
{{ $json.email }}          → "sarah.chen@techcorp.com"
{{ $json.message }}        → "Looking for..."
```markdown
javascript

**Best practice:** Webhook + Static content
- Webhook receives the trigger
- First node after webhook validates and normalizes
- Example: "Did we get all required fields?"

### Cron Trigger (Scheduled)

**What it is:** Trigger runs on a schedule

**Example configuration:**

```text
javascript
Node: Cron
 Trigger Time Interval: Daily
 Time: 7:00 AM
 Timezone: US/Eastern
```markdown
json

**When to use:**
- Weekly analytics reports
- Daily lead digest emails
- Scheduled data syncs
- Batch processing at off-peak hours

**Expression for current time:**
```javascript
{{ new Date().toISOString() }}
→ "2026-02-08T14:32:00Z"
```python
markdown

### Manual Trigger

**What it is:** User clicks "Execute" button to start workflow

**Use cases:**
- Testing during development
- One-off processing (e.g., "send this to 50 people")
- Approval workflows (human clicks "approve")

**Example:** Manual trigger → Generate report → Send email

---

## 3. Building Block 2: Intake & Normalization

### Purpose

**Convert messy input into clean, structured data** that downstream nodes expect.

### Key Tasks

1. **Validate:** Required fields present?
2. **Clean:** Trim whitespace, fix formatting
3. **Normalize:** Convert to standard schema
4. **Enrich:** Add missing data from APIs
5. **Check:** Decide if data is ready for next step

### Using a Function Node

**n8n Function node:** Write JavaScript to process data

```javascript
// Function node: Prepare Lead Payload

return [
  {
    json: {
      basic_info: {
        name: ($json.name || '').trim(),
        email: ($json.email || '').trim().toLowerCase(),
        company: ($json.company || 'Unknown'),
        source: $json.source || 'form'
      },
      message: {
        raw: $json.message || '',
        length: ($json.message || '').length,
        summary: ($json.message || '').substring(0, 100)
      },
      metadata: {
        received_at: new Date().toISOString(),
        webhook_source: $json.source_platform || 'unknown'
      }
    }
  }
];
```python
javascript

**How it works:**
- Input: Raw JSON from webhook
- Process: JavaScript transforms it
- Output: Standardized JSON
- Accessible in next node as `{{ $json.basic_info.name }}`

### Validation Node (Using Switch)

**Purpose:** Decide if data is valid; route bad data elsewhere

```text
javascript
Node: Switch
 Condition 1: $json.email contains '@'
   True branch: Continue to next step

 Condition 2: Default
    False branch: Go to "Log Error" node
```markdown
javascript

**In practice:**

```javascript
// Function node: Validate Required Fields
const required = ['name', 'email', 'message'];
const missing = required.filter(field => !$json[field]);

return [
  {
    json: {
      is_valid: missing.length === 0,
      missing_fields: missing,
      reason: missing.length > 0
        ? `Missing: ${missing.join(', ')}`
        : 'All required fields present'
    }
  }
];
```python
markdown

**Then Switch on `is_valid`:**
- If true: Proceed
- If false: Alert human

### Enrichment: Add Data from APIs

**Example:** Customer submitted form with company name, but we need company size

```text
javascript
Function node: Extract Company
  ↓
HTTP Request node: Call company lookup API
  ↓
Function node: Merge enriched data
```markdown
javascript

**HTTP Request node configuration:**

```text
javascript
Node: HTTP Request
 Method: GET
 URL: https://api.company-db.com/search
  Query params:
   q: {{ $json.company }}
   api_key: {{ $secret.COMPANY_API_KEY }}
 Response: { "company_size": 2500, "industry": "SaaS" }
```markdown
javascript

**Merge in next Function node:**

```javascript
// Merge enriched data
const enrichedCompany = JSON.parse($json.data);

return [
  {
    json: {
      ...($items(0).json),  // Original data
      company_size: enrichedCompany.company_size,
      industry: enrichedCompany.industry,
      enriched_at: new Date().toISOString()
    }
  }
];
```markdown

### Error Handling in Intake

**Best practice:** Catch errors early, log them, don't crash

```text
Try block: Validate and enrich
  ↓ If error
Catch block: Log error with trace ID
  ↓
Switch: Is error critical?
   YES: Alert human
   NO: Continue with degraded data
```markdown
javascript

**Function node with error handling:**

```javascript
try {
  const email = $json.email.toLowerCase();

  if (!email.includes('@')) {
    throw new Error('Invalid email format');
  }

  return [{
    json: {
      email,
      valid: true
    }
  }];
} catch (error) {
  return [{
    json: {
      email: $json.email || null,
      valid: false,
      error: error.message,
      needs_review: true
    }
  }];
}
```markdown
javascript

---

## 4. Building Block 3: Decision Logic

### Rule-Based Decisions (Switch Node)

**Most common pattern:** If field X equals/contains/is-greater-than value Y, go to branch Z

**Switch node example:**

```text
javascript
Node: Switch
 Input data: message length
 Condition 1: $json.message.length > 10
   Branch A: Continue to AI classification

 Condition 2: $json.message.length >= 5
   Branch B: Light touch path

 Condition 3: Default
    Branch C: Mark as low quality, skip
```markdown

**Multiple conditions with AND/OR:**

```text
javascript
Node: Switch
 Condition 1:
  ($json.company_size > 500)
  AND ($json.warmth === 'Hot')
   Route to: senior_sales_rep

 Condition 2:
  ($json.company_size <= 500)
  AND ($json.warmth === 'Hot')
   Route to: junior_sales_rep

 Condition 3: Default
    Route to: nurture_sequence
```markdown
javascript

### AI-Based Decisions (LLM Node)

**When to use:** Need judgment, classification, or synthesis

**n8n LLM Nodes:**
- **OpenAI node:** Use GPT-4, GPT-3.5-turbo
- **Anthropic node:** Use Claude
- **Custom HTTP:** Any LLM API

### OpenAI Node Configuration

```text
javascript
Node: OpenAI
 Credentials: Your OpenAI API key
 Model: gpt-4-turbo or gpt-3.5-turbo
 System message: "You are a lead classifier..."
 User message:
  {
    "lead_profile": {{ JSON.stringify($json) }},
    "message": "{{ $json.message }}"
  }
 Response format: JSON (parse as JSON)
```markdown

**Example: Lead Warmth Classification**

**System message:**
```markdown
text
You are a B2B lead classifier.

Classify this lead's warmth as one of: Hot, Warm, Cold

Use this rubric:
- Hot (8-10): Specific problem mentioned, urgency signals, clear ICP fit
- Warm (5-7): Interested, some alignment, needs nurture
- Cold (0-4): Generic inquiry, not a fit, just browsing

Return ONLY valid JSON:
{
  "warmth": "Hot" | "Warm" | "Cold",
  "confidence": 0.0-1.0,
  "reasoning": "brief explanation",
  "fit_score": 0-10
}
```markdown

**User message:**
```text
Lead Name: Sarah Chen
Company: TechCorp Inc
Message: Hi, we're looking at your platform for our scaling team. Can we talk?

Classify this lead.
```markdown
javascript

**Processing the response:**

```javascript
// Function node: Parse AI Classification
const classification = JSON.parse($json.data);

return [{
  json: {
    warmth: classification.warmth,
    confidence: classification.confidence,
    fit_score: classification.fit_score,
    reasoning: classification.reasoning,
    ai_decision_at: new Date().toISOString(),

    // Flag low-confidence decisions for human review
    needs_review: classification.confidence < 0.7
  }
}];
```markdown

### Hybrid Decision (Rule + AI)

**Pattern:** Pre-screen with rules, use AI only when needed

```text
javascript
Switch node: Is message long enough?
 YES (> 10 words)
   ↓
   OpenAI node: Classify warmth
   ↓
   Switch: Confidence > 0.7?
    YES: Use classification
    NO: Flag for human review

 NO (≤ 10 words)
    ↓
    Function node: Mark as low quality
```markdown
javascript

**Saves money:** Only call LLM when worth it

---

## 5. Building Block 4: Actions

### Parallel Actions

**n8n pattern:** Multiple nodes connected to same source = parallel execution

```text
javascript
Classify Lead (node 2)
    → Create CRM Record (node 3)
    → Send Email to Lead (node 4)
    → Notify Sales Rep (Slack) (node 5)
    → Log to Database (node 6)
```markdown

**All four actions execute simultaneously** (not sequentially)

### Create CRM Record

**Using Airtable (common choice):**

```text
javascript
Node: Airtable
 Operation: Create record
 Base ID: {{ $secret.AIRTABLE_BASE_ID }}
 Table: Leads
 Fields:
   Name: {{ $json.basic_info.name }}
   Email: {{ $json.basic_info.email }}
   Company: {{ $json.basic_info.company }}
   Warmth: {{ $json.decision.warmth }}
   Fit Score: {{ $json.decision.fit_score }}
   Created At: {{ new Date().toISOString() }}
   Workflow ID: {{ $json.workflow_id }}
 Return Fields: record_id
```markdown

**Using SQL Database (PostgreSQL):**

```sql
javascript
Node: PostgreSQL
 Operation: Execute
 Query:
   INSERT INTO leads (
     name, email, company, warmth, fit_score, created_at
   ) VALUES (
     $1, $2, $3, $4, $5, $6
   )
 Query Parameters:
   $1: {{ $json.basic_info.name }}
   $2: {{ $json.basic_info.email }}
   $3: {{ $json.basic_info.company }}
   $4: {{ $json.decision.warmth }}
   $5: {{ $json.decision.fit_score }}
   $6: {{ new Date().toISOString() }}
 Return: Rows affected, last insert ID
```markdown

### Send Email

**Using Gmail/SMTP:**

```text
javascript
Node: Gmail
 Credentials: Your Gmail account
 Operation: Send email
 To: {{ $json.basic_info.email }}
 Subject: {{ $json.email_draft.subject }}
 Message (HTML):
   <p>Hi {{ $json.basic_info.name }},</p>
   {{ $json.email_draft.body }}
   <p>Best,<br>Your Team</p>
 Attachment: None (or include if needed)
 Return: Message ID, timestamp
```text
markdown

### Send Slack Notification

```python
javascript
Node: Slack
 Credentials: Your Slack workspace
 Operation: Send message
 Channel: #new-leads
 Message:
   New lead from {{ $json.basic_info.company }}
    {{ $json.basic_info.name }} ({{ $json.basic_info.email }})
    Warmth: {{ $json.decision.warmth }}
    Fit: {{ $json.decision.fit_score }}/10
    View: https://airtable.com/...
 Blocks: (optional formatted blocks for rich formatting)
```markdown

### AI-Generated Email Content

**Before sending, generate the email content:**

```text
javascript
Node: OpenAI (before "Send Email" node)
 System: "You are a sales email writer..."
 User message:
   Draft a personalized first-touch email for:
   - Name: {{ $json.basic_info.name }}
   - Company: {{ $json.basic_info.company }}
   - Their message: {{ $json.message }}
   - Our tone: Direct, helpful, no hype

   Return JSON:
   {
     "subject": "string",
     "body": "string"
   }
 Output: email_draft (parsed as JSON)
```markdown
javascript

**Then reference in email node:**
```text
Subject: {{ $json.email_draft.subject }}
Body: {{ $json.email_draft.body }}
```markdown

### Error Handling in Actions

**Retry failed actions:**

```text
javascript
Node: Gmail (with error handling)
 On error: Retry
 Max retries: 3
 Backoff: Exponential (1s, 2s, 4s)
 If still fails: Go to "Log Error" node
 Then: Alert human via Slack
```markdown

**n8n configuration:**
```text
javascript
Node settings → Error handling
 Retry mode: On error
 Max retries: 3
 Backoff type: Exponential
 Catch node: (optional, for custom error logic)
```markdown
javascript

---

## 6. Building Block 5: Review & Learning

### Logging Everything

**Comprehensive logging node:**

```text
javascript
Node: Function - Log Full Execution
 Output: Write to analytics database
```text
yaml

```javascript
// Capture everything for debugging and analysis
return [{
  json: {
    // Identifiers
    workflow_id: $json.workflow_id || 'unknown',
    trace_id: $json.trace_id || $json.trigger_id,
    execution_id: $execution.id,

    // Input
    input: {
      name: $json.basic_info.name,
      email: $json.basic_info.email,
      company: $json.basic_info.company
    },

    // Decisions made
    decisions: {
      warmth: $json.decision.warmth,
      confidence: $json.decision.confidence,
      fit_score: $json.decision.fit_score
    },

    // Actions completed
    actions: {
      crm_record_created: !!($json.airtable_id),
      email_sent: !!($json.email_message_id),
      slack_notified: !!($json.slack_ts)
    },

    // Timing
    started_at: $json.created_at,
    completed_at: new Date().toISOString(),
    duration_ms: new Date($json.created_at) - new Date(),

    // Quality metrics
    ai_confidence: $json.decision.confidence,
    needs_review: $json.decision.confidence < 0.7,
    error_count: $execution.hasOwnProperty('errors') ? 1 : 0
  }
}];
```text
markdown

### Write to Analytics Database

```python
javascript
Node: PostgreSQL
 Operation: Execute
 Query:
   INSERT INTO workflow_analytics (
     workflow_id, trace_id, input_data, decisions,
     actions, started_at, completed_at, duration_ms
   ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
 Parameters: (mapped from Function node output)
```markdown
javascript

### Quality Checks (Sampling)

**Flag a percentage for human review:**

```javascript
// Function node: Determine if needs review
const confidence = $json.decision.confidence;
const random = Math.random();

return [{
  json: {
    needs_review: confidence < 0.7 || random < 0.05, // < 70% confidence OR 5% sample
    reason: confidence < 0.7
      ? 'Low confidence'
      : 'Random QA sample',
    reviewer_message: `
      Lead: ${$json.basic_info.name}
      Warmth: ${$json.decision.warmth} (${confidence} confidence)
      Message: ${$json.message.substring(0, 100)}...

      Does this classification look correct?
    `
  }
}];
```markdown

### Weekly Analytics Report

**Separate workflow triggered by Cron:**

```sql
javascript
Node: Cron (Monday 7am)
    ↓
Node: PostgreSQL - Fetch weekly data
    SQL: SELECT * FROM workflow_analytics
         WHERE completed_at > NOW() - INTERVAL 7 day
    ↓
Node: Function - Aggregate metrics
    Calculate: leads_processed, success_rate,
    avg_latency, error_rate, confidence_avg
    ↓
Node: OpenAI - Generate narrative report
    Inputs: metrics, sample_events, patterns
    ↓
Node: Email - Send to team
    Recipient: leadership@company.com
    Subject: "Weekly Lead Processing Report"
    Body: AI-generated report
```markdown

**Report template:**

```text
WEEKLY REPORT: Lead Processing Pipeline
Week of Feb 8, 2026

METRICS
 Leads processed: 247
 Success rate: 94.3%
 Avg time per lead: 3m 12s
 Hot leads: 31 (12.6%)
 Errors: 14 (5.7%)
 Cost per lead: $0.08

TOP PATTERNS
 Most common source: LinkedIn (67%)
 Best-performing warmth: Hot leads got 42% response rate
 Peak processing time: Tuesday 10-11am

QUALITY NOTES
 AI classification confidence: 87% average
 Flagged for review: 8 leads (low confidence)
 Manual overrides: 2 (both correct, AI was slightly off)
 Recommendation: Refine "industry" classification rules

ALERTS
  Response rate dipped 5% week-over-week (investigate)
```python
javascript

---

## 7. State Management in n8n

### The Challenge

**Simple workflows:** Data flows through nodes in seconds, no state needed

**Complex workflows:**
- Process might pause/resume over days
- Need to track progress ("Which leads have we emailed?")
- Need to retry from checkpoint, not restart

### State Storage Options

| Storage | Best For | Trade-offs |
|---------|----------|-----------|
| **n8n Internal** | Simple workflows, < 1 hour | Limited persistence, not ideal for resumption |
| **Database (PostgreSQL, MySQL)** | Complex workflows, state tracking | Most reliable, requires DB setup |
| **Airtable** | Team-visible, easy to query | Slower, API rate limits |
| **Google Sheets** | Simple, shareable | Very slow, not recommended for high volume |

### Database State Schema

**Example PostgreSQL table:**

```sql
CREATE TABLE workflow_state (
  -- Identity
  id SERIAL PRIMARY KEY,
  workflow_id VARCHAR(255) UNIQUE NOT NULL,
  trigger_id VARCHAR(255) NOT NULL,
  trace_id VARCHAR(255) NOT NULL,

  -- Progress tracking
  current_step VARCHAR(50),           -- 'intake' | 'decision' | 'action' | 'complete'
  step_sequence TEXT,                 -- JSON array of completed steps
  last_checkpoint TIMESTAMP,
  retry_count INT DEFAULT 0,
  has_failed BOOLEAN DEFAULT false,

  -- Data
  input_data JSONB,
  normalized_data JSONB,
  decisions_made JSONB,
  actions_completed JSONB,
  next_actions JSONB,
  error_log JSONB,

  -- Metadata
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```markdown

### Reading State

**After trigger, immediately check if resuming:**

```sql
javascript
Node: PostgreSQL - Load State
 Query:
   SELECT * FROM workflow_state
   WHERE workflow_id = $1
 If found: Load progress
 If not found: Initialize new state

    ↓

Node: Switch - Where to resume?
 If current_step = 'intake': Start at intake
 If current_step = 'decision': Jump to decision
 If current_step = 'action': Jump to action
 If complete: Alert human (duplicate?)
```sql

### Updating State

**After each major block, update database:**

```sql
javascript
Node: PostgreSQL - Update State
 After intake completes:
   UPDATE workflow_state SET
     normalized_data = $1,
     current_step = 'decision',
     last_checkpoint = NOW()
   WHERE workflow_id = $2

 After decision completes:
   UPDATE workflow_state SET
     decisions_made = $1,
     current_step = 'action',
     next_actions = $2,
     last_checkpoint = NOW()
   WHERE workflow_id = $3

 After all actions complete:
   UPDATE workflow_state SET
     actions_completed = $1,
     current_step = 'complete',
     has_failed = false
   WHERE workflow_id = $4
```python
markdown

### Resuming from Checkpoint

**If action fails midway:**

```python
javascript
Node: HTTP Request - Send email (with error handling)
    ↓ Fails
Node: Catch error
    ↓
Node: PostgreSQL - Mark state for retry
    UPDATE workflow_state SET
      has_failed = true,
      error_log = array_append(error_log, $1),
      retry_count = retry_count + 1
    WHERE workflow_id = $2
    ↓
Node: Alert human (Slack)
    Message: "Lead process failed at step X. Can retry when issue fixed."

---

When human fixes issue and clicks "Retry":
Node: Manual trigger
    ↓
Node: PostgreSQL - Load state
    ↓
Node: Switch - current_step?
     If 'action': Jump to action block
     If 'decision': Recalculate from decision
```text
markdown

---

## 8. Alex in n8n: Complete Build

### Architecture Overview

```text
Webhook: Lead submitted
    ↓
INTAKE BLOCK:
 Validate form data
 Normalize to standard schema
 Look up company size
 Save checkpoint

    ↓
DECISION BLOCK:
 Rule: Message length > 10?
 AI: Classify warmth (Hot/Warm/Cold)
 Rule: Route based on company + warmth
 Save checkpoint

    ↓
ACTION BLOCK (Parallel):
 Create CRM record
 Generate & send email
 Notify Slack
 Log to database
 Save checkpoint

    ↓
REVIEW BLOCK:
 Log full execution
 Aggregate metrics
 Flag for human review if needed
```markdown
javascript

### Full Node-by-Node Configuration

**Node 1: Webhook Trigger**
```text
json
Type: Webhook
 HTTP Method: POST
 Path: /alex-leads
 Response: { "status": "received" }
 Output: Raw form data
```markdown
javascript

**Node 2: Prepare Lead Payload (Function)**
```javascript
return [{
  json: {
    workflow_id: `lead-${Date.now()}`,
    trace_id: `trace-${$execution.id}`,
    created_at: new Date().toISOString(),

    input: {
      name: ($json.name || '').trim(),
      email: ($json.email || '').trim().toLowerCase(),
      company: ($json.company || 'Unknown').trim(),
      message: ($json.message || '').trim()
    }
  }
}];
```markdown
javascript

**Node 3: Validate Required Fields (Switch)**
```text
javascript
Input: $json.input
Condition 1: $json.input.email.includes('@')
   True → Continue
Condition 2: Default
   False → Go to "Mark Invalid" node
```markdown
javascript

**Node 4: Enrich Company Data (HTTP Request)**
```text
json
Method: GET
URL: https://api.company-insight.io/search
Query params:
   q: {{ $json.input.company }}
   api_key: {{ $secret.COMPANY_API_KEY }}
Response: { "company_size": 2500, "industry": "SaaS" }
```markdown
javascript

**Node 5: Normalize with Enrichment (Function)**
```javascript
const enrichment = JSON.parse($json.data);

return [{
  json: {
    ...$items(0).json,
    normalized_data: {
      name: $items(0).json.input.name,
      email: $items(0).json.input.email,
      company: $items(0).json.input.company,
      company_size: enrichment.company_size || null,
      industry: enrichment.industry || null,
      message: $items(0).json.input.message,
      message_length: $items(0).json.input.message.length,
      ready_for_decision: true
    }
  }
}];
```markdown
javascript

**Node 6: Classify Lead Warmth (OpenAI)**
```text
System message:
"You are a B2B lead classifier. Classify this lead's warmth
as Hot/Warm/Cold using the provided rubric. Return ONLY JSON."

User message: {{ JSON.stringify($json.normalized_data) }}

Response format: Parse as JSON
```markdown
javascript

**Node 7: Parse AI Classification (Function)**
```javascript
const classification = JSON.parse($json.data);

return [{
  json: {
    ...$items(0).json,
    decision: {
      warmth: classification.warmth,
      confidence: classification.confidence,
      fit_score: classification.fit_score,
      reasoning: classification.reasoning,
      made_at: new Date().toISOString()
    }
  }
}];
```markdown
javascript

**Node 8: Route Decision (Switch)**
```text
Condition 1: $json.decision.warmth === 'Hot' AND
             $json.normalized_data.company_size > 500
   Output: "senior_rep"

Condition 2: $json.decision.warmth === 'Hot' AND
             $json.normalized_data.company_size <= 500
   Output: "junior_rep"

Condition 3: $json.decision.warmth === 'Warm'
   Output: "nurture"

Condition 4: Default
   Output: "light_touch"
```markdown
javascript

**Node 9: Generate Email Draft (OpenAI)**
```text
json
System message: "Draft a personalized sales email..."

User message:
Lead: {{ $json.normalized_data.name }}
Company: {{ $json.normalized_data.company }}
Message: {{ $json.normalized_data.message }}
Warmth: {{ $json.decision.warmth }}

Response: { "subject": "...", "body": "..." }
```markdown
javascript

**Node 10: Create CRM Record (Airtable)**
```text
Operation: Create record
Base: {{ $secret.AIRTABLE_BASE_ID }}
Table: Leads
Fields:
   Name: {{ $json.normalized_data.name }}
   Email: {{ $json.normalized_data.email }}
   Company: {{ $json.normalized_data.company }}
   Warmth: {{ $json.decision.warmth }}
   Confidence: {{ $json.decision.confidence }}
   Workflow ID: {{ $json.workflow_id }}
```markdown
javascript

**Node 11: Send Email (Gmail)**
```text
To: {{ $json.normalized_data.email }}
Subject: {{ $json.email_draft.subject }}
Message: {{ $json.email_draft.body }}
```markdown
javascript

**Node 12: Notify Sales Rep (Slack)**
```text
json
Channel: #new-leads
Message:
 NEW {{ $json.decision.warmth }} LEAD
{{ $json.normalized_data.name }}
{{ $json.normalized_data.company }}
Fit Score: {{ $json.decision.fit_score }}/10
 View: airtable.com/[link]
```markdown
javascript

**Node 13: Log Analytics (PostgreSQL)**
```sql
INSERT INTO workflow_analytics (
  workflow_id, trace_id, input_data, decisions,
  actions, duration_ms
) VALUES (
  $1, $2, $3, $4, $5, $6
)
```markdown
javascript

**Node 14: Complete (Set)**
```markdown
json
Set final output:
{
  "status": "success",
  "workflow_id": {{ $json.workflow_id }},
  "lead_name": {{ $json.normalized_data.name }},
  "warmth": {{ $json.decision.warmth }},
  "actions_taken": ["crm_record", "email_sent", "slack_notified"]
}
```markdown
javascript

---

## 9. Testing & Debugging

### Unit Testing Individual Nodes

**Test the "Prepare Lead Payload" function:**

1. Create test input:
```json
{
  "name": "Sarah Chen",
  "email": "SARAH.CHEN@EXAMPLE.COM",
  "company": "  TechCorp Inc  ",
  "message": "Looking for a solution"
}
```text
javascript

2. Run node, check output:
```json
{
  "workflow_id": "lead-1707425000123",
  "trace_id": "trace-e4b2f1a0",
  "input": {
    "name": "Sarah Chen",
    "email": "sarah.chen@example.com",  ← trimmed & lowercase
    "company": "TechCorp Inc",          ← trimmed
    "message": "Looking for a solution"
  }
}
```markdown
javascript

3. Verify:  Email lowercase,  spaces trimmed,  all fields present

### Integration Testing (Multi-node)

**Test intake → decision → action flow:**

1. Send webhook request to n8n
2. Let workflow execute completely
3. Check all outputs:
   - Did CRM record create? (Check Airtable)
   - Did email send? (Check Gmail)
   - Did Slack message arrive? (Check #new-leads)
   - Is data in analytics DB? (Query PostgreSQL)

**Use n8n's "Execute Workflow" button:**
```text
javascript
Webhook → Debug → View input/output at each node
                  Watch data transform through pipeline
                  Spot where things break
```markdown
json

### Error Scenarios to Test

**Test 1: Missing required field (email)**
```json
{
  "name": "John Doe",
  "email": "",
  "company": "Acme",
  "message": "Hi"
}
```markdown
javascript
Expected: Catch error in Node 3 (Validate), route to error handler, alert human

**Test 2: Invalid email format**
```json
{
  "name": "John Doe",
  "email": "notanemail",
  "company": "Acme",
  "message": "Hi"
}
```markdown
javascript
Expected: Node 3 rejects, workflow stops safely

**Test 3: API failure (company lookup)**
Mock API to return 500 error
Expected: Graceful degradation, continue without company_size, log warning

**Test 4: AI timeout (OpenAI)**
Mock OpenAI to timeout
Expected: Retry up to 3 times, if still fails, flag for human review, don't crash

### Debug Logs

**Enable detailed logging:**

n8n dashboard → Execution History → Click execution → View logs

**Look for:**
- Input/output at each node
- Error messages
- Duration (spot slow nodes)
- API response codes

**Add custom debug logs:**

```javascript
// In Function node
const debugData = {
  step: "normalize",
  input_fields: Object.keys($json.input),
  email_valid: $json.input.email.includes('@'),
  message_length: $json.input.message.length
};

// This will appear in logs
console.log(JSON.stringify(debugData));

return [{
  json: {
    ...$json,
    debug: debugData
  }
}];
```markdown

### Production Testing (Before Scaling)

**Phase 1: Manual testing (5-10 leads)**
- Submit test form data
- Verify all outputs
- Check CRM, email, Slack
- Inspect database logs

**Phase 2: Limited release (100 leads over 1 week)**
- Monitor error rate (should be < 1%)
- Check email open rates
- Sample 5 CRM records for accuracy
- Review Slack notifications for noise

**Phase 3: Full scale (all incoming leads)**
- Turn on in production
- Set up monitoring dashboard
- Weekly reports
- Quarterly optimization

---

## 10. Other Platforms & Migration

### When to Use Other Platforms

| Platform | Best For | Not Good For |
|----------|----------|------------|
| **n8n** | Complex workflows, AI integration, self-hosted | Simple automations, large scale |
| **Zapier** | Simple 1-2 step automations, large user base | Complex branching, custom logic |
| **Make (formerly Integromat)** | Mid-complexity, many integrations | Very complex workflows |
| **Custom Code (Node.js, Python)** | Full control, custom logic, scale | Team without eng resources |
| **Temporal** | Long-running orchestration, reliability | Simple workflows, overhead |

### Alex on Zapier (Simplified)

Zapier has limitations (can't do as much AI/logic), but possible:

```text
yaml
Trigger: Form submission (Zapier form or webhook)
  ↓
Action 1: Create record in CRM
Action 2: Send email
Action 3: Post to Slack

Limitations:
- No AI classification (would need external API call)
- No complex routing logic
- Can't do parallel + sequential mix as easily
```markdown

**Best practice:** Use Zapier for simple, use n8n for Alex-level complexity

### Alex on Make

Make is closer to n8n in capability:

```text
javascript
Webhook trigger (same as n8n)
  ↓
HTTP Request to OpenAI API (same logic)
  ↓
Router: Route based on classification (same as Switch node)
  ↓
Parallel modules:
   Create Airtable record
   Send email
   Slack notification
```markdown
javascript

**Key difference:** Make UI is more visual, less code-like than n8n

### Alex on Custom Code (Node.js)

For engineering teams wanting full control:

```javascript
// index.js - Alex workflow in Node.js

const express = require('express');
const { OpenAI } = require('openai');
const airtable = require('airtable');
const slack = require('@slack/client');

app.post('/webhook/leads', async (req, res) => {
  const lead = req.body;

  // INTAKE
  const normalized = normalizeLead(lead);
  const enriched = await enrichCompanyData(normalized);

  // DECISION
  const classification = await classifyWithAI(enriched);
  const route = decideRoute(enriched, classification);

  // ACTIONS (parallel)
  await Promise.all([
    createCRMRecord(enriched, classification),
    sendEmail(enriched, classification),
    postSlack(enriched, classification),
    logAnalytics(enriched, classification)
  ]);

  res.json({ status: 'success' });
});

async function classifyWithAI(lead) {
  const client = new OpenAI();
  const response = await client.chat.completions.create({
    model: 'gpt-4',
    system_prompt: CLASSIFICATION_PROMPT,
    messages: [{ role: 'user', content: JSON.stringify(lead) }],
    response_format: { type: 'json_object' }
  });
  return JSON.parse(response.choices[0].message.content);
}
```python
markdown

**Advantages:**
- Full control
- Custom logic
- Can optimize for cost
- Scale infinitely

**Disadvantages:**
- Requires engineers
- More complex monitoring
- More maintenance

### Migrating from n8n to Another Platform

**If you outgrow n8n:**

1. **Document current workflow:**
   - Export workflow JSON from n8n
   - Document all nodes, conditions, integrations
   - Test one more time

2. **Reimplement:**
   - In Zapier: Rebuild with their interface (might lose some logic)
   - In Make: Translate each n8n node to Make equivalent
   - In custom code: Translate to TypeScript/Python with same logic

3. **Parallel run:**
   - Run both old (n8n) and new (custom code) simultaneously
   - Compare outputs for 1-2 weeks
   - Switch fully once confident

4. **Validate:**
   - Error rate same or better?
   - Same # of leads processed?
   - Cost comparable?
   - Monitoring equally good?

### Cost Considerations

**n8n (self-hosted on $5/month server):**
- Fixed cost: ~$5/month
- Per-execution: ~$0 (you own the server)
- For 10,000 leads/month: ~$5 total

**n8n (cloud):**
- $10-$200+/month depending on scale
- For 10,000 leads/month: ~$50/month

**Zapier:**
- $19.99/month for 2,000 tasks → $100+/month for 10,000

**Make:**
- Similar pricing to Zapier: $10-50+/month

**Custom code on AWS Lambda:**
- Very cheap per request (~$0.0000002/execution)
- For 10,000 leads: ~$0.002 + API costs
- But engineering time to build/maintain

**Best value:** n8n self-hosted or custom code

---

## When to Use This Section

Use this Automations guide when you need to:
-  Build orchestration workflows in n8n
-  Configure nodes step-by-step
-  Implement state management
-  Integrate with databases, APIs, CRM
-  Test workflows before production
-  Implement the Alex workflow
-  Debug failing workflows

**Don't use this section when:**
-  You're designing (go to Section 8: Workflows)
-  You're optimizing a live system (go to Section 10: Orchestration)
-  You just need a simple one-step automation (use Zapier)
-  You need custom code (different guide)

---

## Personal Notes

**Use this section to capture your insights, questions, and discoveries as you work through this guide.**

### Implementation Insights
*What was most challenging or surprising about building in n8n?*

```text
json
[Your notes here]
```text
javascript

### Node Configuration Details
*Document the critical node configurations you used*

```text
javascript
[Your node configurations here]
```python
markdown

### Testing Results
*What did you learn from testing your workflow?*

```text
json
[Your testing notes here]
```text
markdown

### Debugging Discoveries
*What issues did you encounter and how did you solve them?*

```text
json
[Your debugging discoveries here]
```text
markdown

### Performance Observations
*How fast is your workflow? What's the bottleneck?*

```text
json
[Your performance notes here]
```python
markdown

---

## Progress & Next Steps

### Completion Checklist

- [ ] **Build n8n triggers** - Webhooks, scheduled, or event-based
- [ ] **Configure intake block** - Normalize incoming data
- [ ] **Implement decision logic** - Rules and AI classification
- [ ] **Set up action block** - CRM, email, database updates
- [ ] **Add review block** - Monitoring and human feedback
- [ ] **Manage state** - Data persistence across steps
- [ ] **Configure error handling** - Retries and fallbacks
- [ ] **Test complete workflow** - End-to-end validation
- [ ] ** I've completed this guide** *(Check when done)*

### Reflection Questions

Before moving to optimization, ask yourself:

1. Does your workflow run reliably from start to finish?
2. Are errors caught and logged properly?
3. Is the data flowing correctly at each step?
4. Can you scale from 10 leads to 1,000 leads?
5. Are you ready to monitor and optimize?

### Your Implementation Status

- Workflow Name: ________________________
- n8n Instance: Self-hosted / Cloud
- Total Nodes: ______
- Average Execution Time: ______
- Error Rate: ______

---

## Next Steps

**You've completed Section 9: Automations!**

You now understand:
-  n8n fundamentals and the node-based execution model
-  How to build each of the 5 blocks (trigger, intake, decision, action, review)
-  How to configure AI nodes for classification and generation
-  How to handle errors and retry with exponential backoff
-  How to manage state for long-running processes
-  How to implement the complete Alex workflow in n8n
-  How to test and debug before production
-  When to use n8n vs. other platforms

**Your workflow now goes:**
```text
Designed (Section 8) → Built (Section 9) → Optimized (Section 10)
```markdown

**Next:** Section 10 - Orchestration Guide

Operate and optimize your live workflow:
- Monitoring dashboards
- Performance metrics
- Cost optimization
- Scaling to 10,000+ leads/month
- Weekly reporting and iteration

[→ Continue to Section 10: Orchestration Guide](10_Orchestration_Guide_v1.0.md)

---

## Quick Reference: Node Patterns

**Common n8n patterns you'll reuse:**

**Pattern 1: Validate & Route**
```text
Input → Switch (condition) → Branch A
                          → Branch B
```markdown

**Pattern 2: Transform & Enrich**
```text
Input → Function (clean) → HTTP (enrich) → Function (merge)
```markdown

**Pattern 3: AI Decision**
```text
Input → OpenAI → Function (parse) → Switch (route)
```markdown

**Pattern 4: Parallel Actions**
```text
Decision → → Create CRM
          → Send Email
          → Slack
          → Database Log
```markdown

**Pattern 5: State Management**
```sql
Trigger → Load State (DB) → [Process] → Update State (DB)
```javascript

---

## Troubleshooting Checklist

| Problem | Solution |
|---------|----------|
| Webhook not receiving data | Check URL is public, firewall allows POST |
| Data not flowing to next node | Check output format matches input expectation |
| AI node returning invalid JSON | Add Function node after to parse/validate |
| Email not sending | Check email credentials, recipient valid format |
| Slow workflow | Check for unnecessary API calls, parallelize actions |
| Errors not being caught | Add error handling to each node prone to failure |
| Database connection failing | Check credentials, firewall, database online |

---

**Related Guides:**
- 7_Frameworks_Guide_v1.0.md - Understand orchestration concepts
- 8_Workflows_Guide_v1.0.md - Design complete workflows
- 10_Orchestration_Guide_v1.0.md - Monitor and optimize

**Related Resources:**
- n8n Documentation: https://docs.n8n.io/
- n8n Templates: https://n8n.io/workflows
- Alex Complete Design (from Section 8)
