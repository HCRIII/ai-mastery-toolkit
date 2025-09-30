# 8. Workflows Guide: Designing Orchestration Workflows

**Created:** 2026-02-08
**Last Updated:** 2026-02-08
**Purpose:** Design complete orchestration workflows before building them
**Version:** v1.0
**Status:** Final
**Difficulty:** Intermediate
**Prerequisites:** Prompts Guide, Commands Guide, Skills Guide

---

## You Are Here

**Phase 3: Complex Task Creation → Workflows Guide → Workflow Design**

**Navigation:** [Start Here](../1_Toolkit_Documentation/1_Start_Here.md) → [How-To Guides](README.md) → Workflows Guide

---

**Phase:** 3 - Complex Task Creation
**Prerequisites:** Phases 1-2, Section 7 (Frameworks Guide)
**Time to Complete:** 2-3 hours
**Estimated Reading Time:** 30 minutes
**Audience:** Everyone (non-technical welcome)

---

## What You'll Learn

By the end of this guide, you'll be able to:
- Design state schemas that track workflow progress over time
- Engineer prompts for orchestration (not just single interactions)
- Map all decision points: which are rules, which are AI
- Build error handling strategies that recover gracefully
- Define monitoring and observability for your workflows
- Complete a full workflow design document (like Alex's)
- Use templates to design your own workflows

**Key Principle:** A complete workflow design is your blueprint before you build. It specifies exactly what data flows where, what decisions happen when, and how the system recovers from failures.

---

## Table of Contents

1. [State Schema Design](#1-state-schema-design)
2. [Prompt Engineering for Orchestration](#2-prompt-engineering-for-orchestration)
3. [Decision Logic Mapping](#3-decision-logic-mapping)
4. [Error Handling Strategy](#4-error-handling-strategy)
5. [Monitoring Requirements](#5-monitoring-requirements)
6. [Alex Workflow: Complete Design](#6-alex-workflow-complete-design)
7. [Workflow Design Template](#7-workflow-design-template)

---

## 1. State Schema Design

### What Is State?

**State is the "memory" your workflow needs.** It's all the information that persists between steps and over time. Without state, your workflow forgets what happened.

**Example:** A lead goes through 5 steps over 3 days. Each step needs to know:
- "Have we already enriched this lead?"
- "What classification did we give them?"
- "When was the last email sent?"
- "How many times have we tried and failed?"

**State lives in:** Your database, CRM, or persistent storage system. It's the single source of truth.

### State Schema Structure

A state schema is the JSON shape of your workflow's memory. Every field serves a purpose.

**Three categories of state fields:**

**1. Identity & Metadata**

| Field | Type | Purpose |
|-------|------|---------|
| workflow_id | String | Unique identifier for this workflow instance |
| trigger_id | String | What started this workflow (webhook, form, etc.) |
| created_at | Timestamp | When the workflow started |
| updated_at | Timestamp | Last time state changed |
| trace_id | String | For logging and debugging all related actions |

**2. Progress & Checkpoints**

| Field | Type | Purpose |
|-------|------|---------|
| current_step | String | Where we are (intake, decision, action, review) |
| step_sequence | Array | List of steps already completed |
| last_successful_checkpoint | Timestamp | Last point we can safely resume from |
| retry_count | Number | How many times we've retried current step |
| has_failed | Boolean | Did this workflow encounter a fatal error? |

**3. Data & Context**

| Field | Type | Purpose |
|-------|------|---------|
| input_data | Object | Raw data that came in (unmodified) |
| normalized_data | Object | Cleaned, structured data ready for decisions |
| decisions_made | Object | All decisions and their outputs with reasoning |
| actions_completed | Array | List of actions successfully completed |
| next_actions | Array | Queue of pending actions to execute |

### Example: Alex Lead State Schema

Here's what we store for every lead:

```json
{
  "workflow_id": "lead-20260208-001",
  "trigger_id": "form-submission-webhook-47291",
  "created_at": "2026-02-08T14:32:00Z",
  "updated_at": "2026-02-08T14:32:45Z",
  "trace_id": "alex-trace-47291",

  "current_step": "action",
  "step_sequence": ["intake", "decision"],
  "last_successful_checkpoint": "decision @ 2026-02-08T14:32:30Z",
  "retry_count": 0,
  "has_failed": false,

  "input_data": {
    "name": "Sarah Chen",
    "email": "sarah.chen@techcorp.com",
    "company": "TechCorp Inc",
    "message": "Hi, we're looking at your platform for our scaling team. Can we talk?"
  },

  "normalized_data": {
    "name": "Sarah Chen",
    "email": "sarah.chen@techcorp.com",
    "company": "TechCorp Inc",
    "message_length": 75,
    "company_size": 2500,
    "industry": "SaaS",
    "message_summary": "Evaluating platform for scaling team"
  },

  "decisions_made": {
    "quality_check": {
      "decision": "pass",
      "reason": "message_length > 10"
    },
    "warmth_classification": {
      "classification": "Hot",
      "reasoning": "Specific company need, evaluating our product, professional tone",
      "confidence": 0.92
    },
    "routing_decision": {
      "assigned_to": "senior_sales_rep",
      "reason": "Hot + large company (2500 employees)"
    }
  },

  "actions_completed": [],
  "next_actions": [
    {
      "action": "create_crm_record",
      "status": "pending",
      "priority": "high"
    },
    {
      "action": "send_notification",
      "status": "pending",
      "target": "slack:#new-leads"
    },
    {
      "action": "draft_personalized_email",
      "status": "pending",
      "depends_on": "decision completed"
    }
  ]
}
```python
markdown

### Designing Your Own Schema

**Process:**

1. **List every piece of information you need to track**
   - What does each step need to know?
   - What do you need to remember for monitoring?
   - What's necessary to resume if something fails?

2. **Organize into three categories** (identity, progress, data)

3. **For each field, define:**
   - **Name:** Descriptive and consistent (snake_case)
   - **Type:** String, Number, Boolean, Object, Array, or Timestamp
   - **Required:** Is this field mandatory or optional?
   - **When set:** At what workflow step does this get populated?
   - **How used:** Which downstream steps need to read this?

4. **Test your schema:**
   -  Can you resume from any checkpoint?
   -  Can you debug by reading the state?
   -  Does it capture everything you need to monitor?
   -  Would a new team member understand this?

### State Lifecycle: From Empty to Complete

```markdown
json
Workflow starts:
{
  "workflow_id": "...",
  "created_at": "...",
  "current_step": "intake"
}
    ↓
After intake completes:
{
  ...(all above)...
  "normalized_data": {...},
  "current_step": "decision",
  "last_successful_checkpoint": "intake @ ..."
}
    ↓
After decision completes:
{
  ...(all above)...
  "decisions_made": {...},
  "current_step": "action",
  "next_actions": [...]
}
    ↓
After all actions complete:
{
  ...(all above)...
  "actions_completed": [...],
  "current_step": "review"
}
```markdown
yaml

---

## 2. Prompt Engineering for Orchestration

### Orchestration Prompts Are Different

**Single-turn prompts** (Section 2):
- Goal: "Do this task"
- Context: What you tell me in the message
- Output: Answer

**Orchestration prompts** (this section):
- Goal: "Do this part of a larger workflow"
- Context: Includes state + input + schema + instructions for error cases
- Output: Structured data that feeds the next step

### The Anatomy of an Orchestration Prompt

```text
text

   SYSTEM INSTRUCTION      "You are a lead scorer"

   CONTEXT & SCHEMA        "Here's what you know about our ICP"
                           "Here's the input schema you'll receive"
                           "Here's the output schema you must produce"

   TASK DESCRIPTION        "Score this lead 0-10"

   INPUT DATA              Lead profile JSON

   ERROR HANDLING          "If field X is missing, assume Y"

   OUTPUT FORMAT           Exact JSON structure required

```python
markdown

### Core Orchestration Prompt Types

#### Type 1: Intake & Normalization Prompts

**Purpose:** Convert messy input into clean, structured data

| Aspect | Details |
|--------|---------|
| **Input** | Raw data (form submission, email, etc.) |
| **Output** | Normalized, structured data in valid JSON |
| **Key Rule** | Always return valid JSON; never invent data |

**Critical Rules:**
- Return ONLY valid JSON (no explanations)
- If a required field is missing, set to null
- Never make up data; mark as null if not provided
- Preserve original language and tone in text fields

**Output Structure:**

| Section | Fields | Purpose |
|---------|--------|---------|
| **basic_info** | name, email, company, source | Contact details and where they came from |
| **message_details** | text, word_count, key_phrases | Content analysis |
| **data_quality** | missing_fields, validation_errors, quality_score | Data fitness assessment |

**Template:**
```text
text
System: You are an intake processor for [domain].
Your job: Convert raw input into a standardized, clean format.

CRITICAL RULES:
- Return valid JSON only
- Set missing required fields to null (don't invent)
- Preserve original text and tone
- Extract key phrases that matter for decisions

USER INPUT:
[raw data here]
```python
markdown

#### Type 2: Classification & Scoring Prompts

**Purpose:** Evaluate and assign scores/categories

| Aspect | Details |
|--------|---------|
| **Input** | Normalized data from intake step |
| **Output** | Scores, categories, and confidence levels |
| **Key Rule** | Use consistent rubrics; confidence scores are critical |

**Fit Score Scale (0-10):**

| Score | Meaning | What It Means |
|-------|---------|---------------|
| 9-10 | Perfect Match | Ideal customer fit, high priority |
| 7-8 | Strong Alignment | Good fit, qualified prospect |
| 5-6 | Possible Fit | Interesting but needs more info |
| 3-4 | Weak Alignment | Not a strong match |
| 0-2 | Not a Fit | Not right for us now |

**Intent Categories:**

| Category | Meaning |
|----------|---------|
| Product_inquiry | Actively looking for a solution |
| Information_gathering | Just researching, early stage |
| Budget_inquiry | Asking about pricing/cost |
| Other | Doesn't fit above categories |

**Template:**
```text
yaml
System: You are a lead classifier for [your industry].
Score leads based on fit rubrics and intent signals.

TASK: Evaluate this lead's fit score and intent.
- Use the scoring rubric consistently
- Assess your confidence (0.0 to 1.0)
- Note any red flags or concerns

REQUIRED INPUT:
- name, company, message

RETURN: JSON with fit_score, reasoning, intent, confidence, red_flags
```sql
markdown

#### Type 3: Generation Prompts (Email, Drafts, Content)

**Purpose:** Create content based on context

| Aspect | Details |
|--------|---------|
| **Input** | Lead profile + decision context |
| **Output** | Email/message ready for review or sending |
| **Key Rule** | Match brand voice exactly; flag missing context in alerts |

**What You Provide:**

- Recipient info (name, company, situation)
- Context (fit score, segment, key concern)
- Constraints (word limit, tone preference)

**Quality Checklist:**
1.  Reflects their situation in their language (personalized)
2.  Offers one valuable insight (not generic)
3.  Clear, low-pressure call-to-action
4.  Matches your brand voice exactly
5.  No placeholder text (no [INSERT NAME])
6.  Alerts field notes missing info

**Template:**
```text
json
System: You are an email writer for [organization].

BRAND VOICE:
[Your specific guidelines - e.g., "Professional but warm,
direct and honest, no corporate jargon"]

TASK: Draft a personalized first-touch email for this lead:
1. Reference their specific situation
2. Include one valuable insight relevant to them
3. Clear, low-pressure CTA
4. Match our voice exactly

RETURN: JSON with subject, body, and alerts for any missing context

CRITICAL: Don't use placeholder text. If critical info is missing,
note in alerts field and we'll get more context.
```python
markdown

#### Type 4: Analytics & Summarization Prompts

**Purpose:** Extract insights from aggregated data

| Aspect | Details |
|--------|---------|
| **Input** | Logs, metrics, events from a time period |
| **Output** | Narrative summary with recommendations |
| **Key Rule** | Cite specific examples, be actionable, avoid over-interpretation |

**Report Structure:**

| Section | Purpose |
|---------|---------|
| **Headline Metrics** | Key numbers at a glance |
| **Top Patterns** | What repeated? What changed? |
| **Concrete Examples** | 2-3 specific cases (anonymized) |
| **Risks & Concerns** | What needs attention? |
| **Recommendations** | 1-2 high-impact improvements |

**Writing Style:**
- Conversational and direct (no jargon)
- Cite specific numbers and examples
- Focus on actionable next steps
- Assume reader is non-technical

**Template:**
```text
yaml
System: You are an analytics summarizer for [domain].

TASK: Analyze the provided logs and metrics for [date range].
Produce a brief narrative report.

REPORT STRUCTURE:
1. Headline Metrics - key numbers
2. Top Patterns - what you noticed
3. Concrete Examples - cite 2-3 specific cases
4. Risks & Concerns - what needs attention
5. Recommendations - 1-2 high-impact improvements

STYLE: Clear, direct, numbers-driven, actionable
```markdown
markdown

### Best Practices for Orchestration Prompts

1. **Be explicit about schema** - The AI must know exactly what JSON structure to return
2. **Include error handling** - What should it do if data is missing or invalid?
3. **Use scoring guidelines** - Make rules clear and quantified
4. **Reference context** - Remind it of your ICP, values, goals
5. **Test with sample data** - Does it produce the right output format?
6. **Version control** - Track changes to prompts (small tweaks can affect output)

---

## 3. Decision Logic Mapping

### Two Types of Decisions

**Deterministic (Rules):** Simple if/then logic, no AI needed
```text
text
IF message_length < 10 THEN quality_flag = "low"
IF company_size > 500 AND warmth = "Hot" THEN route_to = "senior_rep"
IF email_invalid THEN ready_for_next_step = false
```markdown
markdown

**Dynamic (AI):** Requires understanding, judgment, classification
```python
text
Classify lead warmth as Hot/Warm/Cold based on message content
Score lead fit 0-10 based on our ICP match
Determine urgency from tone and language signals
```markdown
markdown

### Mapping Your Decision Points

**Step 1: List every decision in your workflow**

For Alex:
1. Is message long enough? (rule)
2. What's the lead's urgency? (AI)
3. What's their primary goal? (AI)
4. Do they match our ICP? (blend)
5. Which sales rep should handle this? (rule)
6. What should the first email say? (AI)

**Step 2: For each decision, determine the type**

Use this decision tree:

```text
text
Does it require understanding context or nuance?
   NO (simple comparison, lookup, pattern match)
     → RULE (use deterministic logic)
  
   YES (requires judgment, classification, synthesis)
      → AI (use prompt-based decision)
```markdown
markdown

**Step 3: Define the decision point in your state**

| Decision Name | Type | Rule/Prompt | Output | Made At |
|---------------|------|------------|--------|---------|
| message_quality_check | Rule | message_length > 10 | Pass/Fail | Intake step |
| warmth_classification | AI | lead_scorer_prompt_v2 | Hot/Warm/Cold + confidence | Decision step |
| routing_decision | Rule | IF warmth=Hot AND company_size>500 THEN senior_rep | Rep name | Decision step |

### Building a Decision Tree

For complex workflows, visualize all decisions as a tree:

```text
json
New Lead Received
    ↓
[RULE] Message long enough?
     NO → Mark as "low_quality" → Light touch path
    
     YES
        ↓
    [AI] Classify warmth (Hot/Warm/Cold)
         HOT
            [RULE] Company size > 500?
               YES → Senior rep
               NO → Junior rep
           → Send call invite email
        
         WARM
           → Enroll in nurture sequence
        
         COLD
            → Add to newsletter only
```markdown
markdown

### Error Paths in Decision Logic

**Always define what happens when a decision fails:**

```text
json
[RULE] Valid email format?
     YES → Continue
    
     NO
         [ACTION] Mark invalid_email = true
         [ACTION] Add to "follow_up_for_contact" queue
         [ACTION] Send gentle "we need a valid email" message
         [STATE] ready_for_next_step = false
```markdown
markdown

### Anatomy of a Decision Point

Every decision has three parts:

**INPUT** (What data triggers this?) → **LOGIC** (Rule/AI/Hybrid?) → **OUTPUT** (What paths are possible?)

### Decision Mapping Template

For each decision point:

```text
yaml
DECISION: [Name]


PURPOSE: [What does this accomplish?]

INPUT DATA:
- Field 1: [Description and source]
- Field 2: [Description and source]

LOGIC TYPE:  Rule  AI  Hybrid

IF RULE:
  Rule 1: If [condition], then [outcome]
  Rule 2: If [condition], then [outcome]
  Default: [fallback if no rules match]

IF AI:
  Prompt: [Reference to prompt, or inline]
  Confidence required: [0.0-1.0]
  If confidence low: [Do we escalate to human?]

POSSIBLE OUTCOMES:
  Option A: [Description] → [Next action]
  Option B: [Description] → [Next action]
  Option C: [Description] → [Next action]

EDGE CASES:
  If required data missing: [Action]
  If AI and rules disagree: [Which wins?]
```text
markdown

### Example: Lead Fit Scoring Decision

```python
yaml
DECISION: Lead Fit Assessment


PURPOSE: Determine if lead matches our ICP and route to correct path

INPUT DATA:
- Normalized lead profile (from intake)
- Company enrichment data (size, industry)
- Original message content

LOGIC TYPE:  AI (with rule-based routing)

AI LOGIC:
- Use Lead Scoring Prompt (Section 3)
- Confidence threshold: ≥0.70
- If confidence < 0.70: Flag for human review

POSSIBLE OUTCOMES:

  Score 8-10 (High Fit):
  → Segment: "hot_lead"
  → Action: Immediate call invite
  → Assign: Senior sales rep
  → Email: Personalized urgency-focused draft
  → CRM: Tag as "ready_for_call"

  Score 6-7 (Medium Fit):
  → Segment: "warm_lead"
  → Action: Nurture sequence
  → Assign: Automation (no human)
  → Email: Personalized, educational tone
  → CRM: Tag as "qualified_lead"

  Score 3-5 (Low Fit):
  → Segment: "cold_lead"
  → Action: Light touch only
  → Assign: None (automation)
  → Email: None (newsletter only)
  → CRM: Tag as "possible_future"

  Score 0-2 (Not a Fit):
  → Segment: "archived"
  → Action: No outreach
  → Assign: None
  → CRM: No record created

EDGE CASES:
  Missing email: → Stop, alert human
  Missing company: → Proceed with degraded confidence
  AI confidence < 0.70: → Flag for human review, don't auto-send
```python
markdown

---

## 4. Error Handling Strategy

### Why Error Handling Matters

Workflows fail. Networks time out, APIs return errors, edge cases occur. Without error handling:
- Your workflow stops cold
- You don't know why
- You have to restart from the beginning
- You might send duplicate emails or miss leads

**With error handling:**
- System retries automatically
- Falls back gracefully
- Logs what happened
- Resumes from where it left off
- Alerts you to issues

### Three-Layer Error Strategy

**Layer 1: Prevent errors (inputs & validation)**
```text
text
Before running decision:
- Check all required fields exist
- Validate formats (email, phone, JSON)
- Test API connectivity
- If validation fails: mark state, alert, don't proceed
```python
markdown

**Layer 2: Recover from errors (retry & fallback)**
```text
text
When an action fails:
- Retry with exponential backoff (wait 1s, 2s, 4s, 8s...)
- Try alternative approach (fallback)
- If all retries fail: pause workflow, alert human
```markdown
markdown

**Layer 3: Observe errors (logging & monitoring)**
```text
text
Log every error:
- What failed (step, action, decision)
- Why it failed (error message, code)
- When it failed (timestamp)
- What we tried (retries, fallbacks)
- Alert if error rate spikes
```markdown
markdown

### Building an Error Handling Plan

**For each step in your workflow, define:**

```text
text
Step: [Draft personalized email]
 What can go wrong?
    AI API timeout
    AI returns invalid JSON
    Lead has incomplete data needed for personalization
    Email body too long

 How do we prevent it?
    Validate all required fields before calling AI
    Test with sample data before production
    Set reasonable timeouts

 If it happens, what do we do?
    AI timeout → Retry up to 3 times with exponential backoff
    Invalid JSON → Alert human, don't proceed
    Missing data → Use defaults (generic email), flag for review
    Email too long → Truncate intelligently, preserve key info

 How do we know it happened?
     Log error to database with full context
     Alert: if more than 10% of emails fail to generate
     Weekly report: "X emails needed manual intervention"
```markdown
markdown

### Example: Alex Error Handling

**Step: AI Warmth Classification**

| Error | Prevention | Recovery | Fallback | Logging |
|-------|-----------|----------|----------|---------|
| API timeout | Set 15s timeout, validate message text | Retry 3x with exponential backoff (1s, 2s, 4s) | Classify as "Warm" (conservative), flag for review | Log error, trace_id, retry count |
| Invalid JSON response | Prompt has explicit output schema | Request response matching schema | Use previous classification, mark as "needs_review" | Log response, trace_id, flagged output |
| Message too short | Intake marks if < 10 words | Skip AI classification, use rule-based | Route to light touch path | Log as "low_quality" decision |

### Categories of Errors

| Category | What It Is | Examples |
|----------|-----------|----------|
| **Data Errors** | Bad input data | Missing required fields, Invalid format, Corrupted data |
| **Integration Errors** | External systems failed | API timeout, Service down, Authentication failed |
| **Logic Errors** | Workflow logic broke | Decision returned null, Invalid state transition, Prompt bad JSON |
| **Resource Errors** | System constraints | Rate limit exceeded, Cost limit exceeded, Timeout hit |

### Error Handling Patterns

#### Pattern 1: Retry with Backoff

Use for: Transient API failures

```text
text
Attempt 1: Immediate
  ↓ fails
Wait 1 second, Attempt 2
  ↓ fails
Wait 4 seconds, Attempt 3
  ↓ fails
Wait 16 seconds, Attempt 4
  ↓ fails
Move to: Error state, alert human
```text
markdown

#### Pattern 2: Graceful Degradation

Use for: Missing optional data

```python
text
Ideal path: Get company size from API
  ↓ API fails
Degraded path: Estimate from email domain
  ↓ Can't estimate
Minimal path: Proceed without company size
```text
markdown

#### Pattern 3: Human Handoff

Use for: Decisions requiring judgment

```text
text
Detect low confidence or missing data
  ↓
Create task for human
  ↓
Send Slack/email notification
  ↓
Move to "awaiting_review" state
  ↓
Wait for human decision
  ↓
Resume workflow
```text
markdown

#### Pattern 4: Kill Switch

Use for: Systematic failures

```text
text
Monitor: Error rate per hour
  ↓
If error_rate > 20% for 30 minutes:
  → Pause all new entries
  → Alert team
  → Don't auto-resume
```text
markdown

### Error Handling Template

For each failure point:

```text
yaml
ERROR: [Type]


DETECTION: [What condition indicates this error?]

IMPACT: [Does it block workflow? Critical vs. medium vs. low?]

RECOVERY: [Which pattern: Retry / Degrade / Handoff / Kill?]

IMPLEMENTATION: [Specific steps]

FALLBACK: [If recovery fails, what happens?]
```markdown
markdown

---

## 5. Monitoring Requirements

### What to Monitor

**Real-time observability:**
- Is the workflow running right now?
- How many are in progress?
- Are there errors happening?

**Performance metrics:**
- Success rate (% of workflows that complete successfully)
- Average latency (how long does a workflow take?)
- Cost per run (how much does each workflow cost in API calls?)
- Error rate (% that fail)

**Quality metrics:**
- AI confidence (are decisions confident?)
- Human review rate (% flagged for review)
- Downstream conversion (e.g., % of leads that reply to email)

### Metrics for Alex

**Real-Time Status**

| Metric | Value | What It Means |
|--------|-------|---------------|
| Leads in progress | 3 | Currently being processed |
| Leads waiting for action | 2 | Completed decision, awaiting email send |
| Current errors | 0 | No active failures |
| Avg time in system | 2m 30s | Typical lead processing time |

**Daily Summary**

| Metric | Value | Target |
|--------|-------|--------|
| Leads processed | 47 | On track |
| Success rate | 94% | 90%+  |
| Average latency | 3m 12s | < 5 min  |
| Cost per lead | $0.08 | < $0.10  |
| Error rate | 6% | < 10%  |

**Quality Metrics**

| Metric | Value | What It Means |
|--------|-------|---------------|
| AI classification confidence | 0.87 | High confidence (target: 0.80+) |
| Leads flagged for review | 3 | Need human check |
| Email open rate | 62% | Good engagement |
| Email reply rate | 14% | Decent conversion |

**Downstream Results**

| Category | Result | Conversion Rate |
|----------|--------|-----------------|
| Hot leads booked calls | 8 | 42% booking rate |
| Warm leads opened nurture | 12 | 57% engagement rate |

### Monitoring Dashboard (What to Display)

**Top section: Real-time status**
```text
text
Leads Processing    Errors Today    Success Rate    Avg Time
       12               1              95%          3m 40s
```markdown
markdown

**Middle section: Daily trends**
```text
text
Processed    Hot    Warm    Cold    Cost Today    Revenue Opps
   47         8      18      21       $3.76         $127k
```markdown
markdown

**Bottom section: Flags & alerts**
```python
text
 Classification confidence dropped to 0.81 (usually 0.87)
 Reply rate down 5% from last week
 No errors in last 6 hours
```markdown
markdown

### Observability in State

Store monitoring data with each workflow instance:

**Timing Breakdown**

| Step | Duration |
|------|----------|
| Intake (extract & normalize) | 1.2 seconds |
| Decision (classification) | 3.45 seconds |
| Action (email + CRM) | 8.9 seconds |
| **Total workflow time** | **13.55 seconds** |

**Cost & Resource Usage**

| Metric | Value |
|--------|-------|
| API calls made | 4 |
| Tokens used | 2,847 |
| Estimated cost | $0.087 |

**Quality Signals**

| Check | Result |
|-------|--------|
| AI classification confidence | 0.92 (high) |
| Flagged for human review? | No |
| Manual review needed? | No |

---

## 6. Alex Workflow: Complete Design

Here's the complete, ready-to-implement design for the Alex lead generation workflow.

### Alex Overview

**Purpose:** Process inbound B2B sales leads through intake → decision → action in < 15 minutes

**Trigger:** Lead submits contact form on website

**Outcome:** Personalized email sent to lead, CRM record created, sales rep notified

**Success metric:** All hot leads get personalized call invite within 5 minutes of submission

### Alex State Schema (Complete)

**Main Sections:**

| Section | Purpose | Contains |
|---------|---------|----------|
| **Metadata** | Identify this workflow | workflow_id, trigger_id, created_at, trace_id |
| **Progress** | Track where we are | current_step, step_sequence, last_checkpoint, retry_count |
| **Input Data** | What came in | Raw form data (name, email, company, message) |
| **Normalized Data** | Cleaned data | Structured, validated, summary fields |
| **Decisions Made** | All decisions | Quality check, warmth classification, routing decision |
| **Actions** | What happened | Completed actions list, next actions queue |
| **Error Log** | What went wrong | Errors, retries, recovery status |
| **Metrics** | Performance | Duration, API calls, cost, human review flag |

**IMPORTANT: Keep this JSON structure in your database because:**
- It shows the actual data flow (you'll see real values like this in production)
- The nested structure matters for querying and debugging
- Engineers building this need to understand the exact schema

For design purposes, the table above is enough. But when you implement in n8n/Make, your system will produce JSON exactly like this structure.

### Alex Decision Logic

```text
json
New Lead Submitted (Webhook)
    ↓ INTAKE STEP
[RULE] Extract form data + validate required fields
[AI] Normalize + summarize lead information
[RULE] Message length > 10 words?
     NO → Mark quality="low" → go to light_touch path
    
     YES
        ↓ DECISION STEP
    [AI] Classify warmth: Hot/Warm/Cold
         Low confidence (< 0.6)?
            Flag for human review
        
         HOT (confidence > 0.7)
            [RULE] Company size > 500?
               YES → Route to senior_rep
               NO → Route to junior_rep
            Path: call_invite
        
         WARM (confidence > 0.7)
            [RULE] Check fit score (AI output)
            Path: nurture_sequence
        
         COLD (confidence > 0.7)
             Path: light_touch

    ↓ ACTION STEP (Parallel)
[ACTION] Create CRM record with lead + classification
[ACTION] Generate personalized email (AI) → wait for human approval
[ACTION] Send Slack notification to assigned rep
[ACTION] Log to analytics database
[ACTION] Add to appropriate email sequence
```python
markdown

### Alex Prompts (Ready to Use)

**Prompt 1: Lead Normalization (Intake)**

**Purpose:** Extract and clean raw lead data from the form

**Step-by-step:**
1. Extract: name, email, company, message
2. Clean: trim whitespace, fix formatting
3. Summarize: 1-2 sentence overview
4. Count: message length in words
5. Flag: any missing required fields
6. Assess: is this ready for AI decision?

**You need to provide:** Raw form submission
**You will get back:** Cleaned, structured data ready for decisions

**Prompt 2: Lead Classification (Decision)**

**Purpose:** Score lead warmth (Hot/Warm/Cold) based on ICP fit

**Scoring Rules:**
- **Hot (8-10):** Specific problem mentioned, urgency signals, matches ICP (50-5000 people, scaling teams)
- **Warm (5-7):** Interested, some fit, needs more nurturing
- **Cold (0-4):** Not a fit now, just browsing, wrong industry

**You need to provide:** Cleaned lead data + their message
**You will get back:** Warmth score, confidence level (0.0-1.0), reasoning, fit score (0-10)

**Prompt 3: Personalized Email Draft (Action)**

**Purpose:** Write a first-touch email tailored to this specific lead

**Requirements:**
- Subject: Specific and personal, 5-8 words max
- Body: 150-250 words, 2-3 short paragraphs
- Include one valuable insight relevant to their situation
- CTA: Low-pressure ("Schedule 15-min conversation")
- Tone: Direct, helpful, no corporate hype

**You need to provide:** Lead name, company, what they're looking for, warmth classification
**You will get back:** Subject line, email body, call-to-action text

### Alex Implementation Checklist

Before you build Alex in your automation tool (n8n, Make, etc.), verify:

**Design & Data**
- [ ] State schema covers all data you need to track
- [ ] All input data requirements clear (what fields from the form?)
- [ ] All output data clear (what goes to CRM, email, Slack?)

**Prompts**
- [ ] All 3 prompts tested with 5+ sample leads
- [ ] Prompts produce valid, expected output format
- [ ] Confidence thresholds set (when to flag for human)

**Workflow Logic**
- [ ] Error handling defined for each step
- [ ] Success metrics defined (e.g., "hot leads get email within 5 min")
- [ ] Human approval step for emails (before sending)
- [ ] Retry logic for API failures documented

**Integration**
- [ ] CRM connected and mapped
- [ ] Email sending tool connected and tested
- [ ] Slack integration for notifications
- [ ] Analytics/logging database ready

**Testing & Launch**
- [ ] Tested end-to-end with 10-20 real leads
- [ ] Monitoring dashboard set up (Slack alerts, spreadsheet, etc.)
- [ ] Weekly review process documented
- [ ] Escalation path clear (who handles errors?)

---

## 7. Workflow Design Template

Use this template to design your own workflow.

### Section A: Workflow Basics

```text
text
Workflow Name: [What is this called?]
Phase: [Intake | Decision | Nurture | Conversion | Support | Other]
Trigger: [What starts this workflow?]
Outcome: [What's the end state?]
Success Metric: [How do we know it worked?]
Expected Duration: [How long should it take?]
```markdown
markdown

### Section B: State Schema

**Worksheet for your workflow:**

**Identity & Metadata** (required fields)
```text
text
workflow_id: [unique id for this instance]
trigger_id: [what started this - webhook/form/email?]
created_at: [when it started]
trace_id: [for debugging all related actions]
```markdown
markdown

**Progress Tracking** (how to restart if it fails)
```text
text
current_step: [list possible steps: intake, decision, action, review]
step_sequence: [which steps have completed so far?]
last_checkpoint: [last safe point to resume from]
retry_count: [how many times have we retried?]
```markdown
markdown

**Data Fields** (what information flows through this workflow)
| Field Name | Type | Required? | When Set | How Used |
|------------|------|-----------|----------|----------|
| | | | | |
| | | | | |

**Decisions** (rule-based and AI decisions)
| Decision Name | Rule or AI? | Input Data | Output |
|---------------|------------|-----------|--------|
| | | | |
| | | | |

**Quality/Metrics** (what to observe)
```text
json
[metric]: [what it measures]
[metric]: [what it measures]
```text
markdown

### Section C: Decision Logic

```text
text
Trigger Event: [What starts this]
    ↓
Step 1: [RULE|AI] Decision/Action
     Outcome A: ...
     Outcome B: ...

Step 2: [RULE|AI] Decision/Action
     Outcome A: ...
     Outcome B: ...

[Continue mapping all steps and branches]
```text
markdown

### Section D: Prompts

For each AI decision/action:

```text
json
[Name] Prompt
 When: [What step, under what condition?]
 Input: [What data does it receive?]
 Output: [Exact JSON schema]
 Instructions: [Key rules and constraints]
 Tested: [With what sample data?]
 Version: [Track changes]
```markdown
markdown

### Section E: Error Handling

**For each step, define what can go wrong:**

| Step | Error Type | Prevention | Recovery | Fallback |
|------|-----------|-----------|----------|----------|
| [step] | [error] | [how to prevent] | [how to recover] | [if all else fails] |
| [step] | [error] | [how to prevent] | [how to recover] | [if all else fails] |

**Logging & Alerts**

For each error type:
- **Log:** What info to record (error message, timestamp, trace_id, step)
- **Alert:** When to notify the team (immediately? after 3 retries? daily summary?)

### Section F: Monitoring

**Real-time Metrics** (display on dashboard, refresh every 5 min)

| Metric | What It Measures | Target/Alert |
|--------|-----------------|--------------|
| Workflows in progress | How many running now? | Alert if > [X] |
| Errors in last hour | How many failures? | Alert if > [X] |
| Average processing time | How long per instance? | Alert if > [X] seconds |
| Workflow backlog | How many waiting? | Alert if > [X] |

**Quality Metrics** (review daily)

| Metric | What It Measures | Target/Alert |
|--------|-----------------|--------------|
| Success rate | % that complete without error | Target: > 95% |
| AI confidence average | How confident are decisions? | Target: > 0.80 |
| Human review rate | % flagged for human check | Track trend |

**Alerts to Set Up**

| Trigger | Action | Who |
|---------|--------|-----|
| Error rate > 10% for 30 min | Pause new entries, notify team | [Person] |
| Any API timeout | Retry 3x, then escalate | [Person] |
| Success rate < 90% | Send daily summary | [Team] |
| Zero activity for 1 hour | Health check | [Person] |

**Dashboard View** (minimum)
- Top: Real-time status (processing, errors, avg time)
- Middle: Daily trends (processed, success rate, cost)
- Bottom: Recent alerts and human review queue

---

## When to Use This Section

Use this Workflows section when you need to:
-  Design a workflow before building it
-  Document what data flows where
-  Specify exactly what prompts to use
-  Plan error handling and recovery
-  Set up monitoring and observability
-  Brief a technical team on implementation

**Don't use this section when:**
-  You're building (Section 9: Automations covers that)
-  You're optimizing a live system (Section 10: Orchestration)
-  You're learning concepts (Section 7: Frameworks)

---

## Next Steps

**You've completed Section 8: Workflows!**

You now understand:
-  How to design state schemas that track everything you need
-  How to write prompts for orchestration (not just single turns)
-  How to map all decision points: which are rules, which are AI
-  How to build error handling that recovers gracefully
-  What to monitor and how to see it
-  How to design complete workflows (like Alex)

**Next:** Section 9 - Automations Guide

Implement your workflow design in n8n, Make, or your chosen platform:
- Node-by-node workflow construction
- Connecting tools and APIs
- Testing and error handling
- Deploying to production
- Running your first batch of leads

**From here, your workflow goes:**
```text
text
Designed (Section 8) → Built (Section 9) → Optimized (Section 10)
```markdown
markdown

---

## Personal Notes

**Use this section to capture your insights, questions, and discoveries as you work through this guide.**

### Key Takeaways
*What are the most important design principles you'll use?*

```text
json
[Your notes here]
```text
markdown

### Questions & Clarifications
*What needs more exploration or clarification?*

```text
json
[Your questions here]
```text
markdown

### Your Workflow Design
*Summarize the workflow you designed in this guide*

```text
json
[Your workflow summary here]
```text
markdown

### State Schema Design
*Document the data structure you created for your workflow*

```text
json
[Your state schema here]
```text
markdown

### Decision Points
*List the key decisions in your workflow (rules vs. AI)*

```text
json
[Your decision logic here]
```markdown

---

## Progress & Next Steps

### Completion Checklist

- [ ] **Design state schema** - Data that persists across steps
- [ ] **Engineer orchestration prompts** - Not just single interactions
- [ ] **Map decision logic** - Rules vs. AI judgment
- [ ] **Build error handling** - Graceful recovery from failures
- [ ] **Define monitoring** - What metrics matter
- [ ] **Complete workflow design** - Full blueprint ready to build
- [ ] ** I've completed this guide** *(Check when done)*

### Reflection Questions

Before moving to implementation, ask yourself:

1. Is your state schema complete and testable?
2. Do your prompts include full orchestration context?
3. Are all decision points clearly documented?
4. Does your error handling cover critical failures?
5. Can you explain your entire workflow to a colleague?

### Next: Automations Guide

You're ready to build when you can answer "yes" to the reflection questions above. Section 9 shows how to implement your design in n8n with node-by-node guidance.

[→ Continue to Section 9: Automations Guide](9_Automations_Guide_v1.0.md)

---

**Related Guides:**
- 7_Frameworks_Guide_v1.0.md - Understand orchestration concepts
- 9_Automations_Guide_v1.0.md - Build in n8n or Make
- 10_Orchestration_Guide_v1.0.md - Monitor and optimize

**Related Examples:**
- Alex workflow (lead generation) - complete design in this section
- Reference prompts - use in your tools
- State schema template - adapt for your workflow
