# 01_Session_Rhythm
## Workflow Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Execute the operating cadence that makes learning compound across sessions — session open, daily orientation, milestone capture, daily close, and weekly integration.
**Status:** Final
**Version:** v1
**Framework document:** `01_Session_Rhythm_Framework.md`

---

## Workflow Overview

This workflow governs the full operating cadence for every working session and day. It covers six operations across three nested frequencies: session cadence (every session), daily cadence (every work day), and weekly cadence (every week close). The cadence is not optional overhead — it is the mechanism by which isolated sessions become a compounding system.

**Who runs it:** Human initiates each operation; AI executes based on loaded context. Both operate to the standard.

**When it triggers:** Session open, daily open, milestone completion, daily close, week close. Each trigger is defined below.

---

## Inputs Required

- SuperContext (current version) — required for session-startup and ending-master-update
- Human_Current_State, AI_Current_State, Dyadic_Current_State — required for session-startup
- Active OKR file — required for daily-briefing
- Previous day's debriefing notes (if applicable) — optional input for weekly-review
- Previous week's synthesis (if applicable) — context for weekly-review

---

## Step Sequence

### Session Cadence (every working session)

**Step 1 — Session Open: `session-startup`**
Trigger: Beginning of any working session.
Action: Load SuperContext, current state files, and task-relevant context files. Establish active working state. Confirm priority for this session.
Produces: Loaded context, confirmed session orientation, session-specific task queue.
Standard: Non-negotiable. No task work begins before startup completes.

**Step 2 — Work**
Normal task execution. Mid-session operations available on signal (see `08_Mid_Session_Operations_Workflow.md`).

**Step 3 — Milestone Capture: `checkpoint-update`** *(conditional)*
Trigger: A significant milestone completes mid-session — major deliverable finished, key decision reached, phase of work concluded.
Action: Capture current state: what was completed, what is in progress, what the next step is. Update relevant system files if the checkpoint surfaces a structural decision.
Produces: State capture document or SuperContext update.
Standard: Triggered by milestone signal, not by elapsed time. 0–2 per session is the healthy range.

**Step 4 — Session Close: `ending-master-update`**
Trigger: End of any working session.
Action: Update SuperContext with session decisions, completed items, and active state changes. Update Human_Current_State, AI_Current_State, and Dyadic_Current_State where warranted. Flag any IHVNAs for the queue.
Produces: Updated system files reflecting the session's output.
Standard: Non-negotiable. Required even for short sessions. If the session produced nothing worth preserving, the ending still runs to maintain cadence integrity.

---

### Daily Cadence (every work day)

**Step A — Day Open: `daily-briefing`**
Trigger: Start of each work day, before task work begins.
Action: Frame the day's priorities against active OKRs. Identify the single most important outcome for today. Surface any high-priority items from the previous day's debrief.
Produces: Day's priority framing — one primary outcome, supporting tasks, flagged blockers.
Standard: Runs before task work. If the session-startup already ran and included a full briefing, this step is complete. Do not run twice.

**Step B — Day Close: `daily-debriefing`**
Trigger: Close of each work day, or when the day's work is definitively complete.
Action: Harvest what was learned today. What was completed vs. intended? What unexpected insights emerged? What carries forward? What warrants an IHVNA entry? What would you do differently?
Produces: Debrief notes stored for weekly-review input. IHVNA entries flagged to SuperContext if warranted.
Standard: Runs at a natural close point — not mid-session, not before work is complete for the day.

---

### Weekly Cadence (every week close)

**Step W — Week Close: `weekly-review`**
Trigger: Close of each work week (Sunday, or the last working day of the week).
Action: Integrate the week's daily debriefs into a consolidated learning and strategic update. What patterns emerged across the week? What should change next week? How did the week map to active OKRs? Update strategic state accordingly.
Produces: Weekly synthesis document. Updated SuperContext where strategic state changed.
Standard: Replaces `ending-master-update` on the day it runs — do not run both. Weekly-synthesis subsumes the ending function.

---

## Output + Destination

| Operation | Primary Output | Destination |
|-----------|---------------|-------------|
| `session-startup` | Loaded working context | Active session |
| `daily-briefing` | Priority framing | Active session |
| `checkpoint-update` | State capture | SuperContext or working notes |
| `ending-master-update` | Updated system files | `4_Context_Files/Level_0_Map_&_Preferences/` |
| `daily-debriefing` | Debrief notes + IHVNAs | SuperContext IHVNA queue |
| `weekly-review` | Weekly synthesis doc + state update | `6_Session_Working_Files/` or `7_Retained_Working_Files/`; SuperContext |

---

## Failure Mode Reference

| Skipped operation | What degrades |
|------------------|---------------|
| `session-startup` | Session begins without loaded context; AI operates on degraded or stale assumptions |
| `ending-master-update` | Session decisions do not propagate to system files; next session re-discovers resolved issues |
| `daily-briefing` | Day's work disconnects from active OKR priorities |
| `daily-debriefing` | Weekly synthesis has no material to integrate; learning from the day is lost |
| `checkpoint-update` (when signal is present) | Work-in-progress state is lost if session is interrupted at or after that milestone |
| `weekly-review` | Cross-week patterns and learning arcs are never integrated; strategic adaptation lags |

---

## Framework Document

The conceptual foundation for this workflow — why the cadence exists, what each operation locks in, and what the compounding mechanism requires — lives in:

**`01_Session_Rhythm_Framework.md`** → `3_AI_&_Human_Capabilities/7_Frameworks/`
