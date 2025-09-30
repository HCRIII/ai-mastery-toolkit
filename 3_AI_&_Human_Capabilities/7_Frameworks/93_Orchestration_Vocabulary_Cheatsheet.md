# Orchestration Vocabulary Cheatsheet

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Structured thinking framework for analysis and decision-making
**Status:** Final

---

Quick reference for key orchestration terms from Section 7.

---

## The 5-Block Model

| Block | What It Does | Key Question |
|-------|--------------|--------------|
| **Trigger** | Starts the process | What event initiates this? |
| **Intake & Normalization** | Cleans and structures data | What data arrives and how do we standardize it? |
| **Decision** | Determines what to do | What choices need to be made? |
| **Action** | Executes the work | What tasks get performed? |
| **Review & Learning** | Captures outcomes | What do we track for improvement? |

---

## Two Axes of Orchestration

### Horizontal Axis: Deterministic ↔ Dynamic

| Term | Meaning | Example |
|------|---------|---------|
| **Deterministic** | Rule-based logic, no AI | "If invoice > $5000, tag as VIP" |
| **Dynamic** | AI makes judgments | "Classify lead warmth based on message content" |
| **Hybrid/Blended** | Mix of both | Rules for structure, AI for judgment |

**When to use each:**
- **Deterministic:** Fast, cheap, predictable, clear logic
- **Dynamic:** Context matters, judgment needed, handles variation
- **Blended:** Most powerful - rules handle structure, AI handles judgment

### Vertical Axis: Simple ↔ Complex

| Term | Meaning | Example |
|------|---------|---------|
| **Simple** | Single-step, completes in seconds | "Form submitted → Send email" |
| **Complex** | Multi-step, long-running, stateful | "Research 50 sources over 3 hours with checkpoints" |

**Complexity indicators:**
- State management needed
- Runs over hours/days/weeks
- Multiple parallel processes
- Checkpoints and resumption required
- Monitoring dashboards needed

---

## State & Memory

| Term | Definition | Example |
|------|------------|---------|
| **State** | The "memory" of an orchestration | `{leads_processed: 45, current_stage: "classification"}` |
| **Checkpoint** | Saved snapshot of progress | "After every 10 items, save state" |
| **Persistence** | Saving data so it survives restarts | Store in database, not just memory |
| **Context** | Information needed to make decisions | Lead warmth considers message + company size + industry |

---

## Coordination Patterns

| Term | Definition | Example |
|------|------------|---------|
| **Sequential** | Must happen in order | Draft → Review → Approve → Publish |
| **Parallel** | Can happen simultaneously | Send email + Create CRM record + Log to database |
| **Fan-out** | Split one workflow into many branches | Research 10 sources simultaneously |
| **Fan-in** | Wait for all branches, then combine | After all 10 sources done, synthesize findings |
| **Handoff** | Transfer work between components | AI drafts → Human reviews → System sends |

---

## Agent Types

| Type | Role | Example |
|------|------|---------|
| **Producer** | Creates output | AI that drafts email responses |
| **Reviewer** | Evaluates quality | Human reviews AI-drafted emails |
| **Publisher** | Executes final action | System sends email after approval |

---

## Error Handling

| Term | Definition | Example |
|------|------------|---------|
| **Retry** | Try again after failure | If API fails, retry 3 times with exponential backoff |
| **Fallback** | Alternative action when something fails | If enrichment API fails, proceed with basic data |
| **Graceful degradation** | Continue with reduced functionality | If AI classification fails, use rule-based default |
| **Idempotent** | Safe to run multiple times (same result) | Creating record with unique ID won't create duplicates |

---

## Monitoring & Optimization

| Term | Definition | Example |
|------|------------|---------|
| **Trace ID** | Unique identifier for one execution | "Show me everything that happened in run #47291" |
| **Latency** | How long something takes | P50: 4.2s, P95: 8.7s, P99: 15.3s |
| **Throughput** | Volume processed | 240 leads/day |
| **Success rate** | % that complete successfully | 987 of 1000 = 98.7% success rate |
| **Error rate** | % that fail | 13 of 1000 = 1.3% error rate |
| **Cost per run** | Total cost ÷ number of runs | $0.37 per lead processed |

---

## Long-Running Orchestration

| Term | Definition | When Needed |
|------|------------|-------------|
| **Stopping conditions** | When to end | "After 50 items OR 2 hours OR $25 spent" |
| **Concurrency** | How many at once | "Process 5 leads simultaneously" |
| **Rate limiting** | Max operations per time | "Max 10 API calls per second" |
| **Resumption** | Restart from checkpoint | "Continue from item 23 after failure" |

---

## Quick Decision Guide

**Use Deterministic (Rules) when:**
- Logic is clear and unambiguous
- Same input always → same output
- Speed and cost matter
- Easy debugging important

**Use Dynamic (AI) when:**
- Context matters
- Judgment needed
- Handling variation
- Natural language involved

**Use Simple (Single-step) when:**
- Workflow naturally completes fast
- No dependencies
- Don't need progress tracking
- Just starting out

**Use Complex (Multi-step/Long-running) when:**
- Process takes significant time
- Multiple agents coordinate
- State must persist
- Monitoring critical
- Failure recovery needed

---

**See Section 7 (Frameworks Guide) for complete explanations and examples.**
