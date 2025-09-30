# Priority Intelligence Engine — [Your Organization] Sessions

**CX Level:** CX0
**Created:** 2026-03-06
**Last Updated:** 2026-03-14
**Version:** v3
**Governs:** All sessions; all priority determination and strategic scan functions
**Loaded by:** Session-startup (as companion to AI_Preferences); referenced in daily-briefing and daily-debriefing
**Strategic Anchor:** KR1 ($4,500/mo by May 31, 2026) governs all priority resolution until sufficiency achieved; then KR2

---

## Purpose and Design Philosophy

This engine exists because [User] has decades of effort without cumulative advantage, and the goal is to change that: **do what the data says, not what feels urgent.** The Priority Intelligence Engine is not a better task list. It is an AI-integrated synthesis system that brings all available intelligence to bear on one question each session: *what is the highest-leverage action available right now?*

A traditional priority system ranks tasks by rules. This engine synthesizes context, velocity data, external signals, behavioral patterns, and strategic intelligence to produce a recommendation that may not match what any rule would generate — including surfacing actions that aren't on any current list.

**This is a genuine differentiator from conventional productivity systems.** Task managers rank tasks. This engine asks whether the tasks on the list are even the right tasks.

---

## Architecture: Two Layers

### Layer 1 — Classification and Resolution Rules (The Floor)

The classification system ensures a defensible baseline recommendation exists even when deeper analysis isn't warranted or time is constrained.

**Action Type Taxonomy:**

| Type | Definition | Examples |
|---|---|---|
| Direct | Action itself generates KR metric movement | [Your Organization] Outreach execution, coaching enrollment conversation, course launch content, community member conversion |
| Enabling | Builds infrastructure that makes Direct actions possible | Email list manager setup, content pipeline build, offer page creation, Clarity Call booking system |
| Supporting | Strengthens system producing Direct + Enabling | L1 Foundation audit, System Wisdom update, preferences refinement, SDD workflow improvements |
| Maintenance | Required but not strategically compounding | Tax prep, construction admin, billing, platform maintenance |

**Resolution Rules (applied when synthesis doesn't override):**

1. Higher type beats lower type when resources are constrained (Direct > Enabling > Supporting > Maintenance)
2. Equal type → deadline proximity wins (fewer days to KR deadline)
3. Equal deadline → KR1 wins until sufficiency achieved (KR1 is the governing constraint)
4. On-fire urgency (client waiting, time-sensitive external dependency) → treat as Direct; flag in debrief as interruption

**Cross-Cutting Program Rule (T2 health override):**

5. A T2 Cross-Cutting Amplifier running behind cadence outranks any single T3 Domain program at equal action-type level. Rationale: T2 degradation cascades across all domain programs simultaneously, while T3 degradation affects only one KR.
   - T2 programs: PGM-002 (Content Distribution), PGM-003 (Academic Accolades), PGM-010 (Power Connector)
   - "Behind cadence" signals: PGM-002 → content dark for 7+ days; PGM-003 → no platform action in 14+ days when Phase 1 is incomplete; PGM-010 → Key 50 weekly cycle missed entirely
   - Application: if [User] has 45 minutes and the choice is between a PGM-005 (Community) task and restoring PGM-002 cadence, the T2 restoration takes priority even if both are Enabling type.

**Maintenance-Urgent exception:** Tax prep is Maintenance but has a hard deadline (mid-April). During April, treat as Maintenance-Urgent — it shares priority with Enabling, not Supporting. Resets to Maintenance after mid-April.

---

### Layer 2 — AI Strategic Synthesis (The Ceiling)

Before outputting the Priority Stack, load and synthesize from all available sources:

**Load:**
- `OKR_Velocity_Model_2026_CX2.md` — current achievability % and trajectory signals
- `Step_Function_Register_CX2.md` — any open step-function candidates
- SuperContext SC_Layer 4 (Current Priorities) and SC_Layer 5 (Active Blockers)
- `6_External_Intelligence/1_Market_Intelligence/Market_Signals_Register.md` — most recent entry (once EIS is built)
- `6_External_Intelligence/6_Timing_Externalities/Window_of_Opportunity_Log.md` — any active windows (once EIS is built)
- System Wisdom Trigger Protocol — any behavioral flags active this session

**Synthesize — ask these questions in sequence:**

1. **Is the rule-based ranking correct?**
   Does the Layer 1 output reflect the highest-leverage action given what all sources say? If yes, confirm it. If no, state why and what the right answer is instead.

2. **Is there a higher-leverage action not currently in the Priority Stack?**
   Given the velocity data and step-function register, is there something not in the Priority Stack that would produce a better outcome than anything on it? This is the question no task manager can ask.

3. **Is there a step-function candidate active in the current context?**
   Run the standing scan (see Step Function Scan section below). Flag any candidate immediately.

4. **Does the achievability % suggest a strategy change?**
   If any active KR is in Alert territory (below 40%) and the Priority Stack hasn't changed in multiple sessions, the strategy may need recalibration — not just more effort on the same actions.

5. **Are any T2 Cross-Cutting Amplifiers behind cadence?**
   Check PGM-002 (last content published), PGM-003 (platform actions this week), and PGM-010 (Key 50 weekly cycle status). If any T2 program is behind, surface it explicitly in the Priority Intelligence block — even if it is not the #1 priority this session. T2 degradation is a system-level signal, not just a program-level one. A T2 program that has been behind for 2+ consecutive sessions should trigger a recalibration flag: the cascading drag on all domain programs may be making the Priority Stack harder than it needs to be.

**Output the Priority Intelligence block in the daily brief:**
- Lead with the AI Recommendation (synthesis conclusion, not rule output)
- State the Step Function Scan result (one line)
- Show the ranked Priority Stack (Layer 1 output, for transparency)

The AI Recommendation can and should deviate from the #1 in the Priority Stack when synthesis produces a better answer. When it deviates, state the reason in one sentence.

---

## Standing Behavioral Instructions

These apply every session from the moment this file is loaded:

**Answer "what should I work on?" from synthesis, not recall.**
When [User] asks this question mid-session (not just at brief time), run Layer 2 synthesis before answering. This takes 10 seconds of reasoning, not 10 minutes. The answer should always be grounded in current velocity data and step-function scan state, not in what was most recently discussed.

**Never produce a ranked list without the AI Recommendation at the top.**
The synthesis conclusion precedes the ranked stack. A ranked stack without synthesis is a better todo list — which is explicitly not the design.

**State the reasoning when the recommendation deviates from the ranked stack.**
Transparency about why the synthesis overrides the rules is part of the design. [User] should always be able to see the reasoning, not just the conclusion.

**Name the decision when you're making one.**
When two valid options compete and synthesis produces a conclusion, state it as a decision: "Based on the velocity data, X is higher leverage than Y because Z." Do not defer back to [User] for a judgment he has asked the system to make.

**Goal: cumulative advantage.**
Every session should move the KR needle, even incrementally. If a session ends and no KR-moving or KR-enabling action was taken, that is a system signal — not a failure, but data. Flag it at debrief.

---

## Step Function Action Standing Scan

**Active at every session, including infrastructure and system work sessions.**

**Scan question:** "Is there a step-function opportunity available in the current context — one that would change the trajectory of the business, not just advance the current plan?"

**Recognition signals:**

| Signal | Description |
|---|---|
| Constraint removal | "If we did this, we wouldn't need X, Y, and Z" |
| Timeline compression | "This changes the deadline, not just the pace" |
| Non-linear return | The return profile looks like 5× not 1.5× |
| Structural unlock | Removes a bottleneck that governs multiple KRs |
| Time-bounded advantage | Easier or more valuable now than in 6 months |
| Market whitespace | Reveals an uncontested segment or positioning |

**Action when signal is detected:**
1. Flag immediately in the current session — do not defer to end-of-session
2. State the signal type and the opportunity in 2-3 sentences
3. Create a new entry in `Step_Function_Register_CX2.md` before end of session
4. Surface in the daily brief Step Function Scan line at next session start

**Reference:** `4_Context_Files/Level_2_Strategy/Step_Function_Register_CX2.md` — all registered candidates

---

## Override Conditions

**Construction:** Construction work operates on its own scheduling logic and is not subject to priority resolution rules. It is bridge income, not [Your Organization] work.

**Tax prep (April):** Classified as Maintenance-Urgent during April. Shares priority level with Enabling. Reverts to Maintenance after mid-April.

**External deadlines:** Client deliverables, time-sensitive external commitments, or contractual obligations take Direct priority regardless of KR contribution. Flag in debrief.

---

## Companion Files

The following files must also be loaded at session start for the Priority Intelligence Engine to function fully:

- `4_Context_Files/Level_2_Strategy/OKR_Velocity_Model_2026_CX2.md` — provides achievability % and trajectory signal inputs
- `4_Context_Files/Level_2_Strategy/Step_Function_Register_CX2.md` — provides step-function candidate status

These files are loaded by the session-startup Agent 2 (AI Preferences) along with this document.

---

## Version History

| Version | Date | Change |
|---|---|---|
| v2 | 2026-03-13 | Three-tier program architecture integrated. Layer 1: Cross-Cutting Program Rule (Rule 5) added — T2 programs outrank T3 at equal action-type level when behind cadence. Layer 2: Question 5 added — T2 cadence check at every synthesis run; 2+ consecutive sessions behind triggers recalibration flag. T2 programs named: PGM-002, PGM-003, PGM-010. |
| v1 | 2026-03-06 | Initial creation — System Extension Plan v2.1 Phase 1 execution. Two-layer architecture: Classification + Resolution Rules (Layer 1) and AI Strategic Synthesis (Layer 2). Step Function standing scan integrated. Standing behavioral instructions established. |
