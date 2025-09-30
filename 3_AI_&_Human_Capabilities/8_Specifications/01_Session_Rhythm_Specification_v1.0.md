# Session Rhythm Specification

---

**Title:** Session Rhythm
**Document Type:** Specification
**Version:** v1.0
**Status:** Baselined
**Created:** 2026-02-28
**Last Updated:** 2026-02-28
**Author:** [User] "[User]" [Framework Author] III + Claude
**Phase Gate Reached:** 6-Baselined
**Related Framework:** `3_AI_&_Human_Capabilities/7_Frameworks/01_Session_Rhythm_Framework.md`
**Related Workflow:** `3_AI_&_Human_Capabilities/9_Workflows/01_Session_Rhythm_Workflow.md`

---

## Section 2: Purpose & Problem Statement

Without a structured operating cadence, each working session starts from a degraded context baseline. The AI reloads what it can from system files, but working state — active decisions, open threads, emerging patterns, calibration adjustments made mid-session — exists only in the session transcript and compacts away at session end. The result is a system with high capability in the moment but near-zero compound value over time: every session rediscovers what was already known.

The Session Rhythm system resolves this by defining a closed loop in which each operation's output becomes the next operation's input. The intended outcome is that each new session inherits the productive state of the previous one, and that learning, decisions, and strategic state accumulate rather than reset.

This matters at every stage of toolkit operation, not only at scale. The compounding mechanism only activates when the loop closes cleanly at every cycle. A single missed ending can break the chain — the loss is invisible in the moment but surfaces as repeated re-establishment work in subsequent sessions.

---

## Section 3: Scope Definition

**In Scope:**

- Definition of the six operations composing the Session Rhythm: `session-startup`, `daily-briefing`, `checkpoint-update`, `ending-master-update`, `daily-debriefing`, `weekly-review`
- Trigger conditions for each operation — the precise event that initiates each
- Output standards for each operation — what each operation must produce to satisfy its function
- Quality standards for cadence execution — observable signals of healthy and degraded cadence
- The nesting relationship between session cadence, daily cadence, and weekly cadence
- The boundary conditions between operations that share a trigger space (`weekly-review` vs. `ending-master-update`; `daily-briefing` vs. `session-startup`)
- Failure mode definitions — what degrades when each operation is skipped

**Out of Scope:**

- The specific prompt files implementing each operation (those live in `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/`; this specification governs what they must do, not how they are written)
- The content of any individual session's output — this specification governs the structure of the cadence, not its content
- Mid-session operations outside the rhythm (task branching, research loops, tool execution) — those are governed by `08_Mid_Session_Operations_Specification`
- The format of SuperContext or other system files updated by these operations — those are governed by their own specifications
- Scheduling or calendar integration — cadence triggers are event-based, not time-based

**Boundary Conditions:**

- `weekly-review` is in scope as a rhythm operation; the content analysis it performs on the week's debriefs is out of scope for this specification and governed by the Weekly Review content standard
- `checkpoint-update` is in scope as a milestone-triggered rhythm operation; the decision about whether a milestone is significant enough to trigger a checkpoint is a judgment call governed by the calibration standards in Section 8

---

## Section 4: Stakeholder Register

| Stakeholder | Role | Primary Need | Success Looks Like |
|---|---|---|---|
| [User] (human operator) | Decision-maker; primary user of all six operations | A cadence that is predictable, low-friction to execute, and demonstrably compounds value across sessions | Sessions begin with full context in under 5 minutes; no session decision is re-discovered in a later session; weekly review surfaces patterns [User] can act on |
| Claude (AI agent) | Executor of all six operations | Unambiguous trigger conditions and output standards for each operation, so execution does not require interpretation | Each operation completes without ambiguity about when to trigger, what to produce, or what constitutes done |
| Toolkit system | Beneficiary of cadence integrity | That session state propagates correctly from ending to startup across every cycle | Startup files are always current; no structural state is lost between sessions; the compound learning curve is measurable |
| Future toolkit users / students | Secondary audience — will learn from this system | A documented, reproducible cadence they can adopt and adapt | The cadence is fully described by this specification and the associated workflow without requiring knowledge of this session's history |

---

## Section 5: Constraints

**Time Constraints:**

- No external deadline governs this specification. The cadence is operational and has been informally running since session-startup and ending-master-update were first implemented. Formalizing it via this specification does not change current practice — it establishes the standard that current practice will be evaluated against.
- Each individual operation has an implicit time budget: startup ≤10 minutes, briefing ≤5 minutes, checkpoint ≤5 minutes, ending ≤10 minutes, daily debrief ≤10 minutes, weekly review ≤30 minutes. These are performance constraints, not hard limits — violation is a drift signal, not a system failure.

**Resource Constraints:**

- All six operations depend on the existence and currency of the system files they read and write: SuperContext, AI_Current_State, Human_Current_State, Dyadic_Current_State, and the active OKR file. If these files are stale or absent, the cadence degrades regardless of how faithfully the operations are triggered.
- Operations are currently implemented as prompt files. A missing or broken prompt file disables the associated operation. The specification holds even if the implementation fails — the standard persists.

**Technical Constraints:**

- Session-startup is constrained by context window size. When the toolkit's system files grow beyond a threshold that fits in a single context load, startup must selectively load by session type rather than loading all files. The specification accounts for this — startup's requirement is to "load context relevant to the current session," not "load all system files."
- `ending-master-update` can only update files that are accessible in the current session. Files not loaded cannot be updated. The ending must load what it needs to update, not assume it is already in context.

**Quality Constraints:**

- Every output of every operation must be in a form that the next operation in the chain can read without additional processing. A debrief that is useful in the session but not written to a file fails the quality constraint. A startup that loads context but does not confirm the working state fails the quality constraint.
- Cadence outputs must follow the toolkit's document naming conventions and be stored at their canonical destinations. Outputs stored in the wrong location will not be found by subsequent operations.

---

## Section 6: Research Findings

**Existing System Analysis:**

The Session Rhythm has been operating informally since the toolkit's earliest sessions. The six operations were designed iteratively: `session-startup` and `ending-master-update` were established first as the minimum viable cadence loop; `daily-briefing` and `daily-debriefing` were added when the OKR Operating System was integrated; `checkpoint-update` was formalized when mid-session context loss was identified as a recurring failure mode; `weekly-review` was added as the cross-week integration layer.

The Framework document (v1, 2026-02-27) captures the architectural rationale. The Workflow document (v1, 2026-02-27) captures the step-by-step execution sequence. This specification formalizes the requirements that both documents imply but do not state as verifiable requirements.

**Stakeholder Input:**

From the Framework and operational history:

- "These are not optional utilities — they are the mechanism by which isolated work sessions become a compounding system." (Framework, Section: What This System Is)
- The specific failure modes documented in the Framework (session startup drift, missing endings, random checkpointing, frequency collapse) were each observed in actual sessions before the cadence was formalized. They represent empirically-derived failure conditions, not theoretical risks.
- `checkpoint-update` discipline specifically: the Framework notes that checkpointing on timers rather than milestone signals is itself a failure mode — it interrupts flow without capturing meaningful state. This observation shapes the trigger requirement for that operation.
- Time budget for `session-startup` was established by calibration: "Session-startup takes 2–4 minutes and produces a clear working state before task work begins" is the target; "Startup regularly exceeds 10 minutes of re-establishing context" is the drift signal. (Framework, Section: Calibration Standards)

**Reference Examples:**

- The nested-cadence architecture (session within daily within weekly) mirrors proven operational cadence patterns from knowledge-work systems — GTD weekly reviews, scrum sprint ceremonies, and similar structured rhythms that operate at different frequencies and feed upward.
- The compounding mechanism — each output becoming the next input — is the same structural pattern used in `Compound_Content_Architecture_Framework` for content. The principle is consistent across the toolkit: structured handoffs enable compounding; unstructured handoffs enable drift.

**Key Findings:**

1. The cadence loop closes at `ending-master-update`. Every other operation depends on it having run. A missing ending is the highest-impact failure mode because it silently corrupts all subsequent operations.
2. Trigger conditions, not schedules, govern this cadence. Time-based triggers produce mechanical execution without signal-based judgment. The quality of cadence execution is higher when triggers are event-based.
3. The `weekly-review` / `ending-master-update` boundary condition is the most commonly confused aspect of the cadence. It must be stated as a hard rule: on the day weekly-review runs, ending-master-update does not. They are not additive.
4. The output of `session-startup` is not a file — it is a loaded working state. This makes it the only operation in the rhythm that does not produce a persistent artifact. Its "output" is the AI's current context. This distinction is important for success criteria: startup cannot be verified by checking a file; it must be verified by confirming the working state.

---

## Section 7: Functional Requirements

**REQ-F-01:** The session rhythm shall consist of exactly six named operations: `session-startup`, `daily-briefing`, `checkpoint-update`, `ending-master-update`, `daily-debriefing`, and `weekly-review`.

**REQ-F-02:** `session-startup` shall run at the beginning of every working session without exception, before any task work begins.

**REQ-F-03:** `session-startup` shall load the SuperContext, all three Current State files (AI_Current_State, Human_Current_State, Dyadic_Current_State), and any task-relevant context files required for the current session's work.

**REQ-F-04:** `session-startup` shall produce a confirmed working state — an explicit statement of session priority, active context, and any open threads from the previous session — before proceeding to task work.

**REQ-F-05:** `daily-briefing` shall run at the start of each work day before any task work begins. If session-startup for the same day already included a full briefing, `daily-briefing` shall be considered complete and shall not run again.

**REQ-F-06:** `daily-briefing` shall frame the day's work against active OKRs and identify the single most important outcome for the day.

**REQ-F-07:** `checkpoint-update` shall trigger when and only when a significant milestone completes mid-session: a major deliverable is finished, a key decision is reached, or a distinct phase of work concludes. It shall not trigger on elapsed time.

**REQ-F-08:** `checkpoint-update` shall capture, at minimum: what was completed at the checkpoint, what is currently in progress, and what the next step is.

**REQ-F-09:** `ending-master-update` shall run at the close of every working session without exception, including sessions that produced no output worth preserving.

**REQ-F-10:** `ending-master-update` shall update SuperContext with the session's decisions, completed items, and active state changes. It shall also update Human_Current_State, AI_Current_State, and Dyadic_Current_State where the session produced evidence warranting a change.

**REQ-F-11:** `ending-master-update` shall not run on the same day that `weekly-review` runs. On those days, `weekly-review` subsumes the ending function.

**REQ-F-12:** `daily-debriefing` shall run at the close of each work day or when the day's work is definitively complete. It shall not run mid-session before work is complete.

**REQ-F-13:** `daily-debriefing` shall produce debrief notes that are written to a persistent file and are available as input to `weekly-review`. Verbal harvesting that is not written to a file does not satisfy this requirement.

**REQ-F-14:** `weekly-review` shall run once per week at week close and shall integrate the week's daily debriefs into a consolidated learning and strategic update.

**REQ-F-15:** `weekly-review` shall produce an updated SuperContext where any strategic state changed during the week. The synthesis document itself shall be stored in `6_Session_Working_Files/` or `7_Retained_Working_Files/`.

**REQ-F-16:** The six operations shall nest in three explicit cadences: session cadence (session-startup, checkpoint-update, ending-master-update — runs every session), daily cadence (daily-briefing, daily-debriefing — runs every work day), and weekly cadence (weekly-review — runs every week close).

---

## Section 8: Non-Functional / Quality Requirements

**Performance Standards:**

**REQ-NF-01:** `session-startup` shall complete in under 10 minutes of wall-clock time under normal conditions. Startup that regularly exceeds this threshold shall be treated as a drift signal indicating that system files are not being updated at session endings.

**REQ-NF-02:** `ending-master-update` shall complete in under 10 minutes. An ending that takes longer is a signal that too much unresolved state has accumulated mid-session.

**REQ-NF-03:** `checkpoint-update` shall occur 0–2 times per session. More than 2 checkpoints per session shall be treated as a drift signal indicating the trigger criterion is not being applied correctly.

**Quality Standards:**

**REQ-NF-04:** The output of every operation shall be in a form that the subsequent operation in the chain can read and use without additional processing or interpretation by the human.

**REQ-NF-05:** Every session shall begin with a working state — a confirmed understanding of priority and context — before task work begins. A session that begins task work without confirmed working state fails this requirement regardless of whether startup ran.

**REQ-NF-06:** Every persistent output (debrief notes, synthesis documents, SuperContext updates) shall be stored at its canonical destination as defined in the Workflow document. Outputs stored informally do not satisfy this requirement.

**Usability Standards:**

**REQ-NF-07:** The trigger conditions for each operation shall be sufficiently specific that [User] can determine, without judgment calls, whether any given operation should run at any given moment. Trigger ambiguity that requires discussion before execution is a specification defect.

**REQ-NF-08:** Each operation shall be executable by Claude from a prompt invocation, without requiring [User] to supply parameters beyond the session-specific context naturally present at the trigger moment.

**Format Requirements:**

**REQ-NF-09:** Debrief notes and synthesis documents shall be named following the toolkit's date-prefix indexing convention: `YYYY-MM-DD_[type]_[description].md`.

**REQ-NF-10:** All system file updates produced by `ending-master-update` and `weekly-review` shall follow the toolkit's version-increment convention: each substantive change to a versioned file increments the version number and updates the Last Updated field.

---

## Section 9: Success Criteria

| Criterion | Measurement Method | Acceptable Threshold | Who Evaluates |
|---|---|---|---|
| Session context inheritance | At session-startup, AI accurately states the previous session's completed items, open threads, and confirmed priorities without requiring [User] to re-provide them | ≥90% accuracy on a spot-check of 5 consecutive session startups | [User] |
| Cadence coverage | Percentage of sessions where both session-startup and ending-master-update ran | 100% — no exceptions acceptable | [User] (via session log review) |
| Startup time | Wall-clock time from session open to confirmed working state | ≤10 minutes | [User] (timed) |
| Debrief artifact rate | Percentage of work days where a written debrief note exists in the correct destination | ≥90% of work days with active sessions | [User] (via file system check) |
| Weekly synthesis completion | Number of weeks where weekly-review ran and produced a written synthesis document | Every week with ≥3 working days of active sessions | [User] |
| No-re-discovery rate | Frequency with which a session re-establishes context or re-makes a decision that was already established or made in a prior session | ≤1 instance per 10 sessions | [User] (flagged during sessions) |
| Checkpoint precision | Percentage of checkpoint-updates that were triggered by a genuine milestone (not elapsed time) | 100% — all checkpoints traceable to a specific milestone | [User] (reviewed at session close) |

---

## Section 10: Assumptions & Dependencies

**Assumptions:**

- A1: SuperContext and the three Current State files are always current at session open — i.e., the previous session's ending ran correctly. If this assumption is false (an ending was missed), startup must detect the gap and flag it before proceeding.
- A2: [User] is the sole human operator. If a second human operator joins the toolkit, the stakeholder register and cadence trigger conditions must be revisited.
- A3: Sessions are bounded events with a clear open and close. Continuous or always-on operation would require a different cadence architecture; this specification assumes sessions start and end.
- A4: The six operations in this specification are the complete set. If a seventh operation is added to the rhythm (e.g., a monthly synthesis), this specification must be revised and re-baselined.

**Dependencies:**

| Dependency | Owner | Status | Risk if Unmet |
|---|---|---|---|
| Prompt files for all six operations exist and are current | [User] + Claude | Met — all six prompts exist in `1_Prompts/00-core-system/` | Operations cannot execute without prompt files; cadence fails |
| SuperContext_CX0 exists and is writable | [User] | Met | Ending and synthesis outputs have no destination; compounding fails |
| Current State files (AI, Human, Dyadic) exist and are writable | [User] | Met | Startup loads stale baselines; cadence operates on incorrect assumptions |
| Active OKR file exists | [User] | Met — `2.3_Annual_OKR_Set_2026_CX2.md` is active | daily-briefing cannot frame work against OKRs without an active OKR file |
| Toolkit file system is writable during sessions | Platform (Cowork) | Met | All write-dependent operations fail |

---

## Section 11: Review Log

| Date | Reviewer | Finding | Resolution | Status |
|---|---|---|---|---|
| 2026-02-28 | Claude (spec author) | REQ-F-11 (weekly-review exclusivity) needed to be stated as a positive prohibition ("shall not run") rather than a description of the design intent. The original draft said "weekly-review replaces ending-master-update" which is ambiguous about whether both could run. | Rewritten as: "ending-master-update shall not run on the same day that weekly-review runs." Clear prohibition. | Resolved |
| 2026-02-28 | Claude (spec author) | Section 9 success criterion for "session context inheritance" initially used "≥95%" — recalibrated to "≥90%" to reflect that occasional context gaps due to compaction are structurally expected, not cadence failures. | Threshold adjusted to 90%. Rationale: compaction-induced gaps are a platform constraint (addressed by session-startup's adaptive loading), not a cadence failure. | Resolved |
| 2026-02-28 | Claude (spec author) | Section 7 did not initially include REQ-F-16 (explicit nesting statement). Without it, the three-cadence architecture was implied by the separate operation requirements but not formally required. | REQ-F-16 added to make the nesting a stated requirement, not an inference. | Resolved |
| 2026-02-28 | [User] | Review confirmed. No additional findings. | N/A | Resolved |

---

## Section 12: Verification Report

- [x] All 14 required sections are present
- [x] All fields in Section 1 (Document Header) are populated
- [x] All requirements in Sections 7 and 8 use "shall" and are independently testable
- [x] No requirements contradict each other
- [x] Every in-scope item in Section 3 maps to at least one requirement
- [x] Every requirement maps to a research finding in Section 6
- [x] All success criteria in Section 9 have specific, measurable thresholds
- [x] No open findings remain in Section 11 (Review Log)
- [x] Document version number and date are current

**Verdict:** Pass
**Verified by:** Claude
**Date:** 2026-02-28

---

## Section 13: Validation Confirmation

**1. If we build exactly what is specified in Sections 7 and 8, does it solve the problem in Section 2?**
Yes. The requirements define a closed loop (startup → work → ending) that propagates session state to system files, which startup then loads in the next session. If every requirement is met, sessions compound rather than reset. The specific failure modes described in Section 2 (startup drift, missing endings, random checkpointing, frequency collapse) each map to one or more requirements that prevent them.

**2. Does the specified thing serve each stakeholder in Section 4 well enough to meet their stated primary need?**
[User]: Yes — the trigger conditions are explicit and the output standards are concrete. Low-friction execution is enabled by REQ-NF-07 (no judgment calls at trigger time) and REQ-NF-08 (invocable from a prompt without additional parameters).
Claude: Yes — REQ-F-02 through REQ-F-15 specify exactly when each operation triggers and what it must produce.
Toolkit system: Yes — the compounding mechanism is formally required rather than assumed by REQ-F-09 (ending runs every session) and REQ-F-03 (startup loads system files).
Future users: Yes — the specification is self-contained. A reader with no prior session history can understand the cadence from this document alone.

**3. Does building this specification align with current strategic priorities?**
Yes. The session rhythm governs every session. It is the highest-leverage thing to have specified because every other specification, framework, and workflow depends on it to accumulate value. It is also the precondition for producing reliable compounding output from any AI-assisted work — a core CDPID claim.

**4. Is there anything in scope that should be removed? Is there anything out of scope that should be added?**
Nothing should be removed. One boundary to monitor: as the toolkit scales to multiple users, the stakeholder register will need revision and some trigger conditions (particularly `daily-briefing`) may need to account for team coordination. This is correctly deferred — it is not a current-state need and does not change the single-operator specification.

**5. Is the cost of building this specification justified by the value of what it produces?**
Yes. The session rhythm is already operational. This specification costs one session to produce and yields a permanent, versionable standard against which cadence drift can be detected and corrected. Without it, "did the cadence run correctly?" is a judgment call. With it, it is an evaluation against explicit criteria.

**Verdict:** Valid
**Validated by:** [User]
**Date:** 2026-02-28

---

## Section 14: Baseline Record

```
Baselined Version: v1.0
Baseline Date: 2026-02-28
Approved By: [User] "[User]" [Framework Author] III
Permanent Location: 3_AI_&_Human_Capabilities/8_Specifications/01_Session_Rhythm_Specification_v1.0.md
Change Control Protocol: Any substantive change to this specification requires a version increment (v1.0 → v1.1 for minor changes; v1.x → v2.0 for structural changes). The prior version is archived to 3_AI_&_Human_Capabilities/8_Specifications/_Archive/ before the new version is written. Changes made after baselining are logged at the top of the document as a change log before Section 2.
Related Workflow: 3_AI_&_Human_Capabilities/9_Workflows/01_Session_Rhythm_Workflow.md
```

---

*Session Rhythm Specification v1.0 — AI Mastery Toolkit v4*
*Status: Baselined | 2026-02-28*
