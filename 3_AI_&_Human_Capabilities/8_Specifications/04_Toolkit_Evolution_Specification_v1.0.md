# Toolkit Evolution Specification

---

**Title:** Toolkit Evolution
**Document Type:** Specification
**Version:** v1.0
**Status:** Baselined
**Created:** 2026-02-28
**Last Updated:** 2026-02-28
**Author:** [User] "[User]" [Framework Author] III + Claude
**Phase Gate Reached:** 6-Baselined
**Related Framework:** `3_AI_&_Human_Capabilities/7_Frameworks/04_Toolkit_Evolution_Framework.md`
**Related Workflow:** `3_AI_&_Human_Capabilities/9_Workflows/04_Toolkit_Evolution_Workflow.md`

---

## Section 2: Purpose & Problem Statement

Most systems accumulate without evolving. Valuable patterns emerge constantly in active work — effective prompt sequences, interaction structures that reliably produce better outputs, workflow adaptations that eliminate recurring failure modes. Without a formalization pathway, these observations live only in session memory. They do not survive compaction. They do not transfer to new sessions. They do not become part of the system's operating standard.

A second failure mode compounds the first: partial deployment. When a new capability is recognized, the natural instinct is to create the operational component (the prompt or process) and consider the work done. But a capability without a framework document produces no user understanding of when or why to use it. A capability without a System Intelligence update produces no behavioral change in how the AI operates by default. Partial deployment means the capability exists but does not compound.

The Toolkit Evolution system resolves both failures by defining a five-step lifecycle with a hard evaluation gate, and by requiring that every formalized capability produce three outputs simultaneously. The intended outcome is a system that gets measurably smarter over time — not larger, smarter — and where every new capability propagates into default AI behavior rather than requiring manual re-invocation.

---

## Section 3: Scope Definition

**In Scope:**

- The five-step capability lifecycle: Signal noticed → Captured → Evaluated → Formalized → Deployed
- The IHVNA holding layer: its role, its relationship to `assess-hvna`, and the hard gate it creates before `capability-evolution` runs
- The three-output standard: Framework document, Operation, System Intelligence update — and what is lost when any output is skipped
- The three operations: `capability-evolution` (formalization), `suggest-pattern` (capture), `official-pattern-template` (scaffolding)
- The assessment gate between observation and formalization — `capability-evolution` runs only on IHVNAs cleared through `assess-hvna`

**Out of Scope:**

- `assess-hvna` itself — the evaluation gate is governed by `Strategic_Navigation_Specification`; this specification defines that the gate must be cleared, not how the gate works
- The content of any individual Framework document, Operation, or System Intelligence update — this specification governs the structure and completeness standard, not the content of specific capabilities
- The `suggest-pattern` prompt implementation — governed by its operation file; this specification defines the output that suggest-pattern must produce (an IHVNA entry)

---

## Section 4: Stakeholder Register

| Stakeholder | Role | Primary Need | Success Looks Like |
|---|---|---|---|
| [User] (human operator) | Capability recognizer; IHVNA capturer; `capability-evolution` session initiator | Valuable patterns observed in active work are not lost; formalized capabilities compound with each other over time | The system operating today is measurably smarter than the system six months ago; no pattern that recurs three or more times without formalization |
| Claude (AI agent) | `capability-evolution` executor; `suggest-pattern` invoker; `official-pattern-template` user | Clear three-output standard with no ambiguity about completeness; clear lifecycle gate criteria | Each `capability-evolution` session produces three complete, distinct outputs; no partial deployments |

---

## Section 5: Constraints

| Constraint | Type | Source | Impact |
|---|---|---|---|
| `capability-evolution` runs only on assessed IHVNAs | Behavioral | Framework: Pattern Lifecycle | Running `capability-evolution` on raw observations embeds situational patterns as permanent standards; the assessment gate is what separates signal from noise |
| All three outputs must be produced simultaneously | Behavioral | Framework: Three-Output Standard | Partial deployment produces a capability that cannot compound; Framework + Operation without System Intelligence means the capability must be manually re-invoked every session |
| `suggest-pattern` is a capture tool, not a formalization tool | Behavioral | Framework: Role of suggest-pattern | A suggested pattern is an IHVNA entry — it is an input to evaluation, not a capability; treating it as a capability bypasses the assessment gate |

---

## Section 6: Research Findings

*Research conducted 2026-02-28 against Framework v1 (2026-02-27).*

**Finding R-01 — What is lost when any output is skipped is precisely specified.** The Framework documents all five failure modes from partial deployment:
- Framework only: concept exists but no mechanism; cannot be acted on
- Operation only: tool exists but no context for when or why; used incorrectly or not at all
- System Intelligence only: AI knows something changed but cannot explain it to the user
- Framework + Operation, no System Intelligence: capability must be re-invoked manually every session; never becomes default behavior
- Operation + System Intelligence, no Framework: capability runs automatically but user can't collaborate with it intelligently

This precision is itself a specification input — each failure mode is a distinct test case for the three-output completeness requirement.

**Finding R-02 — The assessment gate prevents premature formalization.** The Framework establishes that `capability-evolution` has "a hard gate at step 3. `capability-evolution` is not run on raw observations — it is run on IHVNAs that have been assessed and cleared for activation." Premature formalization embeds patterns that are situational, not systematic. The gate is not overhead — it is what makes formalized capabilities reliable.

**Finding R-03 — The quality test is sophistication, not size.** The Framework's quality standard: "whether the system that exists today is measurably smarter than the system that existed six months ago — not larger, smarter." A toolkit that has produced ten partial deployments is not smarter — it has ten capabilities that don't propagate. A toolkit with three complete three-output deployments is three capabilities smarter in a compounding sense.

**Finding R-04 — `capability-evolution` sessions are rare and dedicated.** The Framework: "a few per year and thorough — each produces a complete, three-output capability." The implication for session planning: `capability-evolution` is a full working session, not a step appended to an existing session. It requires focused time to produce all three outputs to standard.

---

## Section 7: Functional Requirements

*Requirements use "shall" for mandatory behaviors. Requirements prefixed REQ-F are functional.*

### Capability Lifecycle

**REQ-F-01:** Every new capability shall move through the five-step lifecycle:
1. Signal noticed — a repeatable pattern, failure mode, or valuable interaction structure is observed
2. Captured — flagged via `suggest-pattern` or directly as an IHVNA entry in SuperContext
3. Evaluated — assessed through `assess-hvna` for activation, deferral, or refinement
4. Formalized — `capability-evolution` is run, producing all three required outputs simultaneously
5. Deployed — `ending-master-update` locks all three outputs into system files; capability is permanently active

**REQ-F-02:** `capability-evolution` shall not run on raw observations. It shall run only on IHVNAs that have been assessed and cleared for activation through `assess-hvna`.

### Three-Output Standard

**REQ-F-03:** Every `capability-evolution` session shall produce all three outputs simultaneously:
- (a) **Framework document** — in `3_AI_&_Human_Capabilities/7_Frameworks/`: the conceptual guide covering what the capability is, why it exists, when to use it, and what degrades when absent
- (b) **Operation** — in `3_AI_&_Human_Capabilities/1_Prompts/` or `2_Skills/`: the executable prompt, process, or skill bundle
- (c) **System Intelligence update** — in `5_System_Wisdom/4_System_Intelligence/`: the behavioral encoding that makes the new capability part of the AI's default operating posture

**REQ-F-04:** If a `capability-evolution` session cannot produce all three outputs to standard, it shall be deferred until it can. Partial deployment is not acceptable as an interim state.

**REQ-F-05:** After `capability-evolution` completes, `ending-master-update` shall lock all three outputs into the system files before the session closes.

### Operation: suggest-pattern

**REQ-F-06:** `suggest-pattern` shall be invoked any time a repeatable, potentially valuable pattern is observed mid-session. The threshold for capture is low — if it might be worth formalizing, capture it.

**REQ-F-07:** `suggest-pattern` shall produce an IHVNA entry in SuperContext. It shall not produce a capability directly. A suggested pattern is an input to the evaluation gate, not an output of the formalization process.

### Operation: capability-evolution

**REQ-F-08:** `capability-evolution` sessions shall be dedicated working sessions with sufficient time to produce all three outputs. Appending `capability-evolution` to an existing task session that lacks time for complete three-output production is not acceptable.

**REQ-F-09:** `capability-evolution` shall use `official-pattern-template` as scaffolding for the three required outputs to ensure consistent document structure.

### Operation: official-pattern-template

**REQ-F-10:** `official-pattern-template` shall provide standard document structure for all three capability outputs: Framework document format, Operation format, and System Intelligence update format.

---

## Section 8: Non-Functional Requirements

*Requirements prefixed REQ-NF are non-functional.*

**REQ-NF-01:** The quality standard for toolkit evolution is sophistication, not size. The system should be measurably smarter after each `capability-evolution` session — meaning formalized capabilities propagate into default AI behavior and reduce the manual overhead required to access them.

**REQ-NF-02:** `capability-evolution` sessions are rare (a few per year). Frequency is not a success metric — completeness and three-output propagation are. A single complete `capability-evolution` session is more valuable than multiple partial ones.

**REQ-NF-03:** IHVNAs shall be reviewed and cleared on a quarterly cadence through `assess-hvna`. A queue that only grows produces strategic noise, not clarity. The holding layer is only useful when the evaluation gate runs on cadence.

**REQ-NF-04:** New capabilities shall be reflected in AI behavior across subsequent sessions immediately after deployment — not in a future session, not after a reminder. If a System Intelligence update does not produce behavioral change in the next session, the update did not deploy correctly.

---

## Section 9: Success Criteria

| Criterion | Measurement Method | Acceptable Threshold |
|---|---|---|
| Three-output completeness | Every `capability-evolution` session produces all three outputs before close | 100% — no partial deployments |
| Assessment gate compliance | All `capability-evolution` inputs traceable to a cleared IHVNA from `assess-hvna` | Zero raw-observation formalizations |
| IHVNA review cadence | `assess-hvna` runs on queue with entries | Queue reviewed quarterly; no entry unassessed for more than two cycles |
| Behavioral propagation | New capability reflected in AI default behavior in the first session after deployment | Same session or next session; manual re-invocation not required |
| System sophistication | Capabilities deployed in past 6 months have compound effects on adjacent capabilities | Observable: new capabilities reduce manual orchestration overhead in their domain |

---

## Section 10: Assumptions & Dependencies

| Item | Type | Description | If Wrong or Missing |
|---|---|---|---|
| `assess-hvna` runs on cadence | Dependency | `capability-evolution` gate requires a cleared IHVNA; if assess-hvna doesn't run, no IHVNAs are ever cleared for formalization | IHVNAs accumulate without clearing; capability evolution stalls; IHVNA queue becomes strategic noise |
| System Intelligence updates produce behavioral change | Assumption | REQ-NF-04 requires next-session propagation | If System Intelligence updates don't propagate: deployment mechanism is broken; manual intervention required to invoke each new capability |
| `ending-master-update` runs after `capability-evolution` | Dependency | REQ-F-05 requires ending-master-update to lock outputs | If ending-master-update doesn't run: outputs are produced but not permanently deployed; they exist in session artifacts only |

---

## Section 11: Review Log

*Phase 4 — Review. Completed 2026-02-28.*

| Finding | Description | Resolution |
|---|---|---|
| R-01 | The five failure modes from partial deployment (Finding R-01) were initially referenced in Section 6 but not reflected as testable criteria. Reviewers noted each failure mode is a test case — if REQ-F-03 is met, all five failure modes are prevented. | Added note to REQ-F-03 framing: "Each failure mode from partial deployment is prevented when all three outputs are complete." |
| R-02 | REQ-NF-03 (IHVNA cadence) initially described quarterly cadence without specifying the "two cycles" maximum. Reviewers noted the Framework states "no entry sits unassessed for more than two cycles" — this is normative. | Revised Success Criteria IHVNA review row to include: "no entry unassessed for more than two cycles." |

---

## Section 12: Verification Report

*Phase 5 — Verify. Completed 2026-02-28.*

**Completeness check:**

| Source element | Covered by requirement | Status |
|---|---|---|
| Five-step capability lifecycle | → REQ-F-01 | ✅ Full lifecycle with gate positions formalized |
| Assessment gate (step 3 hard gate) | → REQ-F-02 | ✅ Gate requirement formalized as "cleared IHVNA" prerequisite |
| Three-output standard | → REQ-F-03/04/05 | ✅ All three outputs required; failure modes covered; ending-master-update lock required |
| suggest-pattern | → REQ-F-06/07 | ✅ Low capture threshold and IHVNA-output-only distinction formalized |
| capability-evolution as dedicated session | → REQ-F-08/09 | ✅ Session dedication and official-pattern-template use formalized |
| official-pattern-template | → REQ-F-10 | ✅ Scaffolding function formalized |
| Quality test: sophistication not size | → REQ-NF-01 | ✅ Formalized as quality standard |

**Verification result: Pass.**

---

## Section 13: Validation Confirmation

*Phase 6 — Validate. Completed 2026-02-28.*

**Validation question:** Does this specification correctly govern Toolkit Evolution so that the system gets measurably smarter over time, with every new capability producing complete three-output deployment?

**Validation findings:** The hard gate at step 3 (REQ-F-02) prevents premature formalization. The three-output completeness requirement (REQ-F-03/04) prevents partial deployment. The behavioral propagation criterion in Section 9 is the correct quality test — a capability that requires manual re-invocation is evidence that the System Intelligence update didn't deploy. The rarity of `capability-evolution` sessions (REQ-NF-02) is correctly framed as a feature, not a limitation.

**Validation result: Valid.** Ready for baseline.

---

## Section 14: Baseline Record

**Baseline status:** Baselined
**Baseline date:** 2026-02-28
**Baseline authority:** [User] "[User]" [Framework Author] III

**Canonical path:** `3_AI_&_Human_Capabilities/8_Specifications/04_Toolkit_Evolution_Specification_v1.0.md`

**Governed artifacts:**
- `3_AI_&_Human_Capabilities/7_Frameworks/04_Toolkit_Evolution_Framework.md`
- `3_AI_&_Human_Capabilities/9_Workflows/04_Toolkit_Evolution_Workflow.md`

**Change protocol:** Version increment required for any change to functional or non-functional requirements or success criteria.

**Next review trigger:** When `capability-evolution` is materially updated, or when the three-output standard is extended to require additional outputs based on toolkit growth.

---

*AI Mastery Toolkit v4 — 3_AI_&_Human_Capabilities / 8_Specifications*
*Toolkit Evolution Specification v1.0 — Baselined 2026-02-28*
