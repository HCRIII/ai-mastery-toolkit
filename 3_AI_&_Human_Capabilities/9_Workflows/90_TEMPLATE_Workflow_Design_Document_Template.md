# Workflow Design Document Template

**Created:** 2026-02-13
**Last Updated:** 2026-02-27
**Purpose:** Multi-step workflow pattern for standardized processes
**Status:** Final

---

**Use this template to design and document any orchestration workflow before building it.**

---

## A. Workflow Basics

| Field | Your Input |
|-------|-----------|
| **Workflow Name** | What is this workflow called? (e.g., "Lead Processing Pipeline") |
| **Description** | 2-3 sentence overview of what this workflow does |
| **Phase** | Intake / Decision / Nurture / Conversion / Support / Other |
| **Trigger** | What starts this workflow? (e.g., form submission, webhook, scheduled time) |
| **Primary Outcome** | What's the end state? (e.g., "Hot leads routed to sales, others in nurture") |
| **Success Metric** | How do you measure success? (e.g., "95% of leads receive response within 15 min") |
| **Expected Duration** | How long should one instance take? (e.g., "2-5 minutes") |
| **Audience/Owner** | Who owns this workflow? |
| **Framework Document** | Does this workflow implement a conceptual methodology? If yes: name the `TitleCase_Underscore` Framework document in `7_Frameworks/` that this workflow operationalizes. If no: write "None — standalone workflow." |
| **Output Destination** | Where do the outputs of this workflow live? Specify the full toolkit path (e.g., `4_Context_Files/Level_2_Strategy/`) |

### Toolkit Placement Rule (Required Reading Before Filing)

Every workflow and its associated artifacts belong in distinct layers. Conflating these layers degrades the system.

| What It Is | Where It Lives | Naming Convention |
|------------|---------------|-------------------|
| Conceptual methodology, philosophy, calibration standards | `3_AI_&_Human_Capabilities/7_Frameworks/` | `TitleCase_Underscore.md` |
| Procedural implementation (this document and its prompt) | `3_AI_&_Human_Capabilities/8_Workflows/` or `1_Prompts/` | `TitleCase_Underscore/` or `kebab-case/` |
| User-specific outputs produced by running the workflow | `4_Context_Files/[appropriate level]/` | Per Context Files naming conventions |

**Bidirectional correlation requirement:** If this workflow implements a Framework, both documents must name each other explicitly:
- This workflow's README: "Implements Framework: `[Framework_Name].md`"
- The Framework document: "Procedural counterpart: `[workflow-name]`"

No third correlation file is needed. The source files point to each other directly.

---

## B. State Schema Design

### Identity & Metadata (Required)

Every workflow instance needs unique identification:

| Field | Type | Purpose | When Set |
|-------|------|---------|----------|
| workflow_id | String | Unique identifier for this instance | At start |
| trigger_id | String | What triggered this (webhook, form, schedule) | At start |
| created_at | Timestamp | When workflow started | At start |
| updated_at | Timestamp | Last time state changed | After each step |
| trace_id | String | For logging and debugging all related actions | At start |

### Progress & Checkpoints

Track where you are and enable recovery:

| Field | Type | Purpose | When Set |
|-------|------|---------|----------|
| current_step | String | Where we are now (intake, decision, action, review) | At each transition |
| step_sequence | Array/List | Steps already completed (e.g., "intake, decision") | After each step |
| last_successful_checkpoint | Timestamp | Last point we can safely resume from | After each step completes |
| retry_count | Number | How many times have we retried current step? | On retry |
| has_failed | Boolean | Did this workflow encounter a fatal error? | If error occurs |
| error_recovery_status | String | Current recovery status (recovering, paused, resolved) | During error handling |

### Data & Context

What information flows through your workflow:

| Field Name | Type | Required? | When Set | How Used | Notes |
|------------|------|-----------|----------|----------|-------|
| | | Yes/No | | | Add rows for each data field |
| | | Yes/No | | | |
| | | Yes/No | | | |

**Examples of common fields:**
- input_data (Object) - Raw data that came in, unmodified
- normalized_data (Object) - Cleaned, structured data ready for decisions
- decisions_made (Object) - All decisions and their reasoning
- actions_completed (Array) - List of successfully completed actions
- next_actions (Array) - Queue of pending actions to execute
- error_log (Array) - Record of any errors that occurred

---

## C. Decision Logic Mapping

### List All Decisions

Fill in every decision point in your workflow:

| Decision Name | Input Data | Rule or AI? | Output Format | Confidence Required? |
|---------------|-----------|-----------|----------------|---------------------|
| | | Rule / AI / Hybrid | | Yes / No / Threshold |
| | | Rule / AI / Hybrid | | Yes / No / Threshold |
| | | Rule / AI / Hybrid | | Yes / No / Threshold |

### Decision Flow Diagram

Map the complete flow from trigger to outcome:

```
[Trigger Event]
    ↓
[Step 1: Decision/Action]
     Outcome A: [Description] → [Next step]
     Outcome B: [Description] → [Next step]

[Step 2: Decision/Action]
     Outcome A: [Description] → [Next step]
     Outcome B: [Description] → [Next step]

[Continue for all steps...]

[Final Outcome]
```

### Detailed Decision Specifications

For each decision, fill in one section:

#### Decision 1: [Name]

**Purpose:** What does this decision accomplish?

**Decision Type:**  Rule (Simple if/then)  AI (Requires judgment)  Hybrid (Both)

**Input Data Required:**
- Field 1: [Name and source]
- Field 2: [Name and source]
- Field 3: [Name and source]

**If Rule-Based:**

| Condition | Then | Next Step |
|-----------|------|-----------|
| If [condition], | [set state/decision], | go to [step] |
| If [condition], | [set state/decision], | go to [step] |
| Default/Otherwise | [set state/decision], | go to [step] |

**If AI-Based:**

| Aspect | Details |
|--------|---------|
| **Prompt Used** | Reference the prompt or embed it below |
| **Output Format** | What structure do you expect back? |
| **Confidence Threshold** | Minimum confidence (0.0-1.0) to proceed |
| **If Low Confidence** | Escalate to human? Use fallback? |

**Possible Outcomes:**

| Outcome | Description | Next Step | State Changes |
|---------|-------------|-----------|---------------|
| | | | |
| | | | |
| | | | |

**Edge Cases & Error Handling:**

| Edge Case | What We Do |
|-----------|-----------|
| Required data missing | |
| AI confidence too low | |
| Multiple conditions true | |
| Unexpected output | |

---

## D. Prompts for Orchestration

For each AI decision or action in your workflow, document the prompt:

### Prompt 1: [Name - e.g., "Lead Normalization"]

**Purpose:** What is this prompt's job in the workflow?

**When Used:** At which step? Under what conditions?

**Input Data Required:**

| Field | Type | Required? | Example |
|-------|------|-----------|---------|
| | | Yes/No | |
| | | Yes/No | |

**Output Format Required:**

| Field | Type | Required? | Possible Values |
|-------|------|-----------|-----------------|
| | | Yes/No | |
| | | Yes/No | |

**Prompt Text:**

```
[Paste the full prompt here, structured as:
- System instruction (what role)
- Context & schema (what you know, what you'll receive)
- Task description (what to do)
- Error handling rules (what if...)
- Output format (exact JSON structure required)
]
```

**Testing Notes:**

- Tested with [X sample cases]
- Expected output matches: [Yes/No/Mostly]
- Issues encountered: [None/List issues]

---

### Prompt 2: [Name]

[Repeat the above structure for each prompt]

---

## E. Error Handling Plan

### Potential Failure Points

| Step/Decision | What Can Go Wrong? | Severity | Prevention | Recovery | Fallback |
|---------------|-------------------|----------|-----------|----------|----------|
| | | High/Med/Low | | | |
| | | High/Med/Low | | | |

### Error Handling Patterns

Select which patterns apply to your workflow:

-  **Retry with Backoff** - For transient API failures (wait 1s, 2s, 4s, then escalate)
-  **Graceful Degradation** - Proceed without optional data
-  **Human Handoff** - Escalate to human for judgment
-  **Kill Switch** - Pause workflow if error rate spikes
-  **Fallback Path** - Use simplified/default action instead

### Logging & Alerting

For each error type:

| Error Type | What to Log | When to Alert | Who to Alert |
|-----------|------------|---------------|-------------|
| | Error message, timestamp, trace_id, step | Immediately / After N retries / Daily | |
| | | | |

**Alert Thresholds:**

| Condition | Action |
|-----------|--------|
| Error rate > [X]% for [Y minutes] | Pause new entries, notify [person] |
| API timeout on [specific step] | Retry 3x, then escalate |
| Any critical error | Immediate notification |

---

## F. Monitoring & Observability

### Real-Time Metrics (Update every 5 minutes)

| Metric | What It Measures | Current Target | Alert When |
|--------|-----------------|--------|-----------|
| Workflows in progress | How many running now? | | > [X] |
| Current errors | How many failures right now? | | > [X] |
| Average processing time | How long per instance? | | > [X] seconds |
| Success rate (last hour) | % completing without error | | < [X]% |

### Daily Quality Metrics

| Metric | What It Measures | Target | How Often Reviewed |
|--------|-----------------|--------|-------------------|
| Success rate | % of instances completed successfully | > 95% | Daily |
| AI confidence average | Average confidence of AI decisions | > 0.80 | Daily |
| Human review rate | % flagged for human review | Track trend | Daily |
| Cost per instance | Average API cost per workflow run | [Your target] | Daily |

### Key Signals to Monitor

| Signal | What It Indicates | Action If True |
|--------|-----------------|----------------|
| Accuracy of AI decisions | Are decisions correct? | Review prompts, adjust training |
| Downstream conversion | Do outputs lead to desired result? | Trace back to decision quality |
| Error patterns | Are same errors repeating? | Fix root cause, update prevention |
| Performance degradation | Is speed declining? | Check API usage, optimize |

### Dashboard Display

**Recommended Dashboard Layout:**

```
TOP SECTION: Real-Time Status (updates live)

In Progress  Errors Today  Avg Time  Success Rate
    [X]          [Y]       [Z min]     [A]%

MIDDLE SECTION: Daily Summary (refresh every hour)

Processed  Hot/Warm/Cold  Cost Today  Revenue Impact
   [X]       [Y] [Z] [W]    $[Cost]      $[Impact]

BOTTOM SECTION: Alerts & Queue (refresh every 5 min)

 Recent alerts and conditions needing attention
 Human review queue with priority
 System health status
```

### Metrics to Export/Report

Monthly review should include:

- Total instances processed
- Success rate and trend
- Top errors and frequency
- Cost breakdown by decision type
- Quality metrics (confidence, accuracy)
- Human review rate and reasons
- Downstream outcomes (conversions, engagement)

---

## G. Success Criteria

Define what "done" looks like:

### Must Have (Baseline)

-  [Criteria 1: e.g., "All workflows complete within 15 minutes"]
-  [Criteria 2: e.g., "90%+ success rate (no critical errors)"]
-  [Criteria 3: e.g., "All required state fields populated"]

### Should Have (Good Performance)

-  [Criteria 4: e.g., "95%+ success rate"]
-  [Criteria 5: e.g., "AI confidence > 0.85 on average"]
-  [Criteria 6: e.g., "Cost per instance < $0.10"]

### Nice to Have (Optimization)

-  [Criteria 7: e.g., "Average processing time < 3 minutes"]
-  [Criteria 8: e.g., "Human review rate < 5%"]

### Measuring Success

| Success Criterion | How to Measure | Frequency | Owner |
|------------------|----------------|-----------|-------|
| | | Daily/Weekly/Monthly | |
| | | | |

---

## H. Implementation Checklist

Before building this workflow:

### Design Review

-  All state fields have clear purpose
-  All input requirements documented
-  All output specifications clear
-  Decision logic is unambiguous
-  Error handling covers all failure points

### Prompt Testing

-  All prompts tested with 5+ sample cases
-  Prompts produce valid output format
-  Confidence thresholds set appropriately
-  Error handling rules in each prompt
-  Sample outputs reviewed for quality

### Integration Planning

-  All APIs/integrations identified
-  Authentication/credentials ready
-  Endpoints tested and documented
-  Data mapping specifications written
-  Error responses documented

### Testing & Launch

-  End-to-end testing with real data (20+ instances)
-  Error scenarios tested (API down, missing data, etc.)
-  Monitoring dashboard built and tested
-  Alert triggers verified
-  Runbook written for common issues
-  Team trained on workflow
-  Escalation path documented

---

## I. Related Documentation

**Reference these when building:**

- State Schema Examples: See `State_Schema_Examples.md` for common patterns
- Prompt Library: See `TEMPLATE_Prompt_Library_Template.md` for reusable prompts
- Decision Mapping: See decision logic examples in guide
- Error Handling: See playbook examples in guide
- SDD Workflow: See `Spec_Driven_Development_Workflow_v3/` for production workflow standard

**Update this document when:**

- You add a new decision point
- You change a prompt
- You discover a new error condition
- You adjust thresholds or alerts
- You implement learnings from monitoring

---

## J. Toolkit Placement Checklist

Before filing this workflow, confirm all placement decisions:

- [ ] Framework document created in `7_Frameworks/` (if this workflow implements a methodology) OR "None" explicitly declared in Section A
- [ ] If Framework exists: this workflow's README names the Framework document
- [ ] If Framework exists: the Framework document names this workflow as its procedural counterpart
- [ ] Output destination confirmed and recorded in Section A
- [ ] Output destination path verified with `ls` before any file writes (never write from memory)
- [ ] This workflow file lives in `8_Workflows/` (complex multi-step) or `1_Prompts/` (session operation) — not in `4_Context_Files/`
- [ ] Context Index (`_AI_Context_Index.md`) updated if this workflow produces outputs that should be loadable at session start

---

**Status:**  Draft  Ready to Build  In Production

**Last Updated:** [Date]
**Owner:** [Name]
**Version:** 1.0

