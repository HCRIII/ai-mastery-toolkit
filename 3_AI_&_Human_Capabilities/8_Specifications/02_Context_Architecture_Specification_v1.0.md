# Context Architecture Specification

---

**Title:** Context Architecture
**Document Type:** Specification
**Version:** v1.0
**Status:** Baselined
**Created:** 2026-02-28
**Last Updated:** 2026-02-28
**Author:** [User] "[User]" [Framework Author] III + Claude
**Phase Gate Reached:** 6-Baselined
**Related Framework:** `3_AI_&_Human_Capabilities/7_Frameworks/02_Context_Architecture_Framework.md`
**Related Workflow:** `3_AI_&_Human_Capabilities/9_Workflows/02_Context_Architecture_Workflow.md`

---

## Section 2: Purpose & Problem Statement

Context is not passive infrastructure — it is an active working state that degrades, resets, and can be deliberately managed. Most users treat context as something that happens to them rather than something they architect. This produces three avoidable losses: compaction blindness (resuming work after a mid-session compaction without rebuilding active working state), handoff gap (opening a new session without a structured handoff document, forcing incomplete reconstruction from memory), and silent drift (context degrading gradually through wrong assumptions, missing file loads, or stale reference points without any hard failure signal).

All three losses are recoverable — but only when the correct intervention is applied to the correct failure mode. Treating compaction and drift as the same problem produces wrong remediation.

The Context Architecture system resolves this by defining three distinct operations — one for each failure mode — and establishing the decision discipline for when each is the correct tool. The intended outcome is that context transitions (compaction, deliberate handoff, mid-session drift) are minor interruptions rather than significant setbacks, and that the AI's operating context reflects reality at all times.

---

## Section 3: Scope Definition

**In Scope:**

- The three context failure modes and their definitions: compaction (mid-session reset), handoff (deliberate transition), degradation (active-but-misaligned)
- The three operations that address each failure mode: `post-compaction-refresh`, `context-window-handoff`, `context-usage`
- Trigger conditions for each operation — the precise signal that correctly initiates each
- Output standards for each operation — what each must produce to satisfy its function
- Token economics as a discipline — the principle that context loading should be intentional, not maximized
- Negative trigger conditions (when NOT to engage) — boundaries between operations and their adjacent processes
- Calibration standards and drift signals for healthy context architecture

**Out of Scope:**

- The prompt implementations of the three operations (those live in `1_Prompts/00-core-system/`; this specification governs what they must do, not how they are written)
- `session-startup` — the primary context-loading operation at session open; governed by `Session_Rhythm_Specification`; this specification governs remediation operations, not routine startup
- The content of any individual handoff document — this specification governs the structure and required elements, not the specific content

**Boundary Conditions:**

- `context-window-handoff` is not a substitute for `ending-master-update`: handoff is for continuity under pressure (approaching context limit mid-work); ending-master-update is routine session closing. These are adjacent but distinct.
- `context-usage` is not a substitute for `session-startup`: startup is the primary context-loading operation at session open; context-usage is an audit tool for when something feels wrong during an active session.
- `post-compaction-refresh` is not a routine startup tool: it is specific to compaction events.

---

## Section 4: Stakeholder Register

| Stakeholder | Role | Primary Need | Success Looks Like |
|---|---|---|---|
| [User] (human operator) | Context architect; detects compaction and drift signals; initiates correct operation | Context transitions are minor interruptions, not major setbacks; never lose more than a few minutes to a compaction event | Compaction detected and refreshed within one exchange; handoff documents are self-contained enough that a new session resumes without reconstruction |
| Claude (AI agent) | Executes all three operations on signal; operates within token discipline | Unambiguous trigger conditions and output standards for each operation; clarity on what distinguishes each failure mode | Each operation activates on the correct signal and produces the correct output without ambiguity about when to trigger, what to produce, or what constitutes done |

---

## Section 5: Constraints

| Constraint | Type | Source | Impact |
|---|---|---|---|
| Compaction is recoverable only before task work resumes | Operational | Framework: When to Engage | If task work resumes after compaction without running `post-compaction-refresh`, outputs reflect degraded context; the window to recover cleanly closes |
| Handoff must precede the window limit | Operational | Framework: Handoff Gap | Once a forced compaction occurs, handoff is no longer possible; refresh becomes the only option; deliberate handoff is only available before limit |
| Silent drift has no hard failure signal | Behavioral | Framework: Degradation | Drift is invisible until it produces a bad output; proactive audits via `context-usage` are required because the failure mode does not announce itself |
| Token loading should be intentional, not maximized | Design | Framework: Token Economics | Loading everything available crowds the context window and degrades response quality; every context load requires an intentional decision about what is necessary |

---

## Section 6: Research Findings

*Research conducted 2026-02-28 against Framework v1 (2026-02-27).*

**Finding R-01 — The three operations address distinct failure modes and are not interchangeable.** The Framework establishes this explicitly: "treating all three as the same problem produces wrong remediation." The specification must formalize not only what each operation does, but the condition that makes each the correct choice — the negative trigger conditions are as important as the positive ones.

**Finding R-02 — The handoff operation's value is timing-dependent.** `context-window-handoff` requires that the window is not yet full — it is a planned operation, not a recovery operation. The Framework notes: "once forced, handoff is no longer possible and refresh becomes the only option." The specification must capture this timing constraint as a functional requirement.

**Finding R-03 — Token economics is an active discipline, not a passive observation.** The Framework categorizes token management as part of context architecture: "loading exactly what is needed for the current work, not maximizing what is loaded." This principle applies at every context load decision, not just when the window is near its limit.

**Finding R-04 — The quality standard for context architecture is testable.** The Framework's quality standard: "whether a compaction or session transition is a minor interruption rather than a significant setback." This is a behavioral outcome, not a process metric. A system that always runs the operations but still loses meaningful work on compaction has not achieved healthy context architecture.

---

## Section 7: Functional Requirements

*Requirements use "shall" for mandatory behaviors. Requirements prefixed REQ-F are functional.*

### Operation: post-compaction-refresh

**REQ-F-01:** `post-compaction-refresh` shall be invoked immediately upon detecting a compaction event. Detection signals include: conversation reset, broken context references, or AI confirmation that compaction occurred.

**REQ-F-02:** Task work shall not resume before `post-compaction-refresh` completes. Resuming without refresh produces outputs based on degraded context.

**REQ-F-03:** `post-compaction-refresh` shall rebuild the active working state: which files are loaded, what decisions were made, what the current task state is. It shall not substitute for session-startup and shall not be run as routine session startup.

### Operation: context-window-handoff

**REQ-F-04:** `context-window-handoff` shall be invoked when token usage is approaching the session limit and substantive work remains. It shall run before the limit forces a compaction — not after.

**REQ-F-05:** A handoff document produced by `context-window-handoff` shall include: active tasks and their current state, key decisions made in the session, files and references that must be reloaded in the new session, and the priority queue for the new session.

**REQ-F-06:** The new session opened after a handoff shall load the handoff document before any other action.

**REQ-F-07:** `context-window-handoff` shall not be used as a substitute for `ending-master-update`. Handoff is for continuity under pressure; ending-master-update is the routine session close operation.

### Operation: context-usage

**REQ-F-08:** `context-usage` shall be invoked when outputs feel misaligned with intent, when references to earlier session work seem stale, or when the session's framing appears to have drifted from its original orientation.

**REQ-F-09:** `context-usage` shall run an active audit of the current context state: what is currently loaded, what should be loaded, and what is actively shaping responses.

**REQ-F-10:** `context-usage` shall surface drift before it compounds. Any identified drift shall be corrected before the current task continues.

**REQ-F-11:** `context-usage` shall not substitute for `session-startup`. Context-usage is an audit tool for active sessions; session-startup is the primary context-loading operation at session open.

### Token Economics

**REQ-F-12:** Context loading decisions shall be intentional: mandatory loads (required at session open for all work), conditional loads (loaded based on the current task's requirements), and deferred loads (not loaded until needed). Loading everything available is not the standard.

**REQ-F-13:** When a session is approaching its context limit, the choice between handoff (proactive) and continued work toward natural completion shall be made explicitly — not allowed to default to a forced compaction.

---

## Section 8: Non-Functional Requirements

*Requirements prefixed REQ-NF are non-functional.*

**REQ-NF-01:** The quality standard for context architecture is behavioral: compaction and session transitions shall be minor interruptions, not significant setbacks. A system that executes the operations correctly but still loses meaningful work on compaction has not met the standard.

**REQ-NF-02:** `post-compaction-refresh` shall complete in under 5 minutes. If it consistently takes longer, system files are not well-structured for rapid reload. This is a structural signal, not a speed constraint.

**REQ-NF-03:** Each operation shall activate on its correct and specific trigger. Using `context-usage` when a compaction has occurred (instead of `post-compaction-refresh`) is a wrong-operation application — the remediation addresses a different failure mode than the one present.

---

## Section 9: Success Criteria

| Criterion | Measurement Method | Acceptable Threshold |
|---|---|---|
| Compaction recovery time | Time from compaction detection to task work resuming | ≤5 minutes |
| Handoff completeness | New session opens from handoff document and resumes without reconstruction | Handoff document is self-contained; no session-state reconstruction required |
| Drift detection | `context-usage` invoked before a misaligned output is delivered to user | Drift detected and corrected before user receives degraded output |
| Wrong-operation rate | Operations invoked for incorrect failure modes | Zero wrong-operation applications per session |

---

## Section 10: Assumptions & Dependencies

| Item | Type | Description | If Wrong or Missing |
|---|---|---|---|
| Compaction events are detectable | Assumption | Compaction produces observable signals (conversation reset, broken references) | If undetectable: drift from undetected compaction is the failure mode; proactive context-usage audits become more important |
| `session-startup` runs at session open | Dependency | Context-usage is an audit tool, not a startup replacement; startup must run first for context-usage to have a baseline to audit against | If startup doesn't run: context-usage may audit an unconfigured context; startup is the prerequisite |
| Token usage is observable | Assumption | Handoff trigger requires knowing the window is approaching its limit | If not observable: use approximate heuristics (session length, number of large file loads) to estimate proximity to limit |

---

## Section 11: Review Log

*Phase 4 — Review. Completed 2026-02-28.*

| Finding | Description | Resolution |
|---|---|---|
| R-01 | REQ-F-12 (token economics) initially appeared in the non-functional requirements. Reviewers noted it governs specific behaviors at every context load decision — it is functional, not non-functional. | Moved to functional requirements as REQ-F-12/13. |
| R-02 | REQ-NF-02 (post-compaction-refresh ≤5 minutes) was initially framed as a performance requirement. Reviewers noted the Framework frames it as a structural signal: "if it consistently takes longer, system files are not well-structured for rapid reload." The requirement should carry that framing. | Added clarification: "This is a structural signal, not a speed constraint." |

---

## Section 12: Verification Report

*Phase 5 — Verify. Completed 2026-02-28.*

**Completeness check:**

| Source element | Covered by requirement | Status |
|---|---|---|
| Three failure modes and their distinctions | → Sections 2, 3; REQ-F-01/04/08 trigger conditions | ✅ All three failure modes defined |
| post-compaction-refresh | → REQ-F-01/02/03 | ✅ Trigger, constraint, and boundaries formalized |
| context-window-handoff | → REQ-F-04/05/06/07 | ✅ Timing constraint, output standard, and boundary formalized |
| context-usage | → REQ-F-08/09/10/11 | ✅ Signal, audit function, correction requirement, and boundary formalized |
| Token economics | → REQ-F-12/13 | ✅ Intentional loading and limit-approach decision formalized |
| Calibration standard | → REQ-NF-01/02 | ✅ Behavioral outcome standard and refresh time formalized |
| Negative trigger conditions | → REQ-F-03, REQ-F-07, REQ-F-11 | ✅ All three operations have explicit negative trigger boundaries |

**Internal consistency check:** REQ-F-07 (handoff ≠ ending-master-update) and REQ-F-11 (context-usage ≠ session-startup) correctly parallel the Framework's two key boundary conditions. No conflicts.

**Verification result: Pass.**

---

## Section 13: Validation Confirmation

*Phase 6 — Validate. Completed 2026-02-28.*

**Validation question:** Does this specification, as written, correctly govern the Context Architecture system so that a practitioner executing against it experiences context transitions as minor interruptions rather than significant setbacks?

**Validation findings:** The three operations are unambiguously distinguished by their trigger conditions and negative boundaries. The timing constraint on handoff (REQ-F-04) captures the critical pre-limit requirement. The token economics requirements (REQ-F-12/13) formalize the intentional-loading discipline that prevents the window from being crowded unnecessarily. The behavioral outcome standard (REQ-NF-01) is the correct quality test — process compliance is necessary but not sufficient.

**Validation result: Valid.** Ready for baseline.

---

## Section 14: Baseline Record

**Baseline status:** Baselined
**Baseline date:** 2026-02-28
**Baseline authority:** [User] "[User]" [Framework Author] III

**Canonical path:** `3_AI_&_Human_Capabilities/8_Specifications/02_Context_Architecture_Specification_v1.0.md`

**Governed artifacts:**
- `3_AI_&_Human_Capabilities/7_Frameworks/02_Context_Architecture_Framework.md`
- `3_AI_&_Human_Capabilities/9_Workflows/02_Context_Architecture_Workflow.md`
- `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/post-compaction-refresh/` (if exists)
- `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/context-window-handoff/` (if exists)
- `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/context-usage/` (if exists)

**Change protocol:** Version increment required for any change to functional or non-functional requirements or success criteria.

**Next review trigger:** When context management operations are materially updated, or when a new context failure mode is identified through operational experience.

---

*AI Mastery Toolkit v4 — 3_AI_&_Human_Capabilities / 8_Specifications*
*Context Architecture Specification v1.0 — Baselined 2026-02-28*
