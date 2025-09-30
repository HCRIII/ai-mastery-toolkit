# Strategic Navigation Specification

---

**Title:** Strategic Navigation
**Document Type:** Specification
**Version:** v1.0
**Status:** Baselined
**Created:** 2026-02-28
**Last Updated:** 2026-02-28
**Author:** [User] "[User]" [Framework Author] III + Claude
**Phase Gate Reached:** 6-Baselined
**Related Framework:** `3_AI_&_Human_Capabilities/7_Frameworks/05_Strategic_Navigation_Framework.md`
**Related Workflow:** `3_AI_&_Human_Capabilities/9_Workflows/05_Strategic_Navigation_Workflow.md`
**Note:** Two operations within this chain have individual framework documents and specifications: `okr-builder` is governed by `OKR_Operating_System_Specification`; `content-vector` is governed by `Compound_Content_Architecture_Specification`. This specification governs the meta-level: how all four operations form a connected chain.

---

## Section 2: Purpose & Problem Statement

Strategic work has a sequencing problem. Without a defined upstream chain, four failure modes emerge: production without strategy (content produced in response to immediate demands rather than as deliberate strategic deployments), strategy without activation (OKRs set but not connected to IP or content decisions), IP without placement (valuable intellectual property identified but never formally assessed or deployed), and orientation loss (the connection between current work and active strategic priorities weakens as operational demands accelerate).

The Strategic Navigation chain resolves all four by establishing a clear directional flow: identify → assess → place → deploy. Four operations compose the chain — `ip-assessment`, `assess-hvna`, `okr-builder`, `content-vector` — each with a defined input, a defined output, and a defined handoff to the next link. When the chain runs correctly, everything produced in the deployment step has a traceable line back to a strategic decision. Nothing is deployed without being placed. Nothing is placed without being assessed.

This specification governs the meta-level: the chain as a connected system, the handoffs between operations, the IHVNA holding layer, and the quality test for whether the chain is intact.

---

## Section 3: Scope Definition

**In Scope:**

- The four-operation chain and its directional flow: `ip-assessment` → `assess-hvna` → `okr-builder` → `content-vector`
- The handoffs between operations: what each operation receives as input and produces as output for the next link
- The IP tier classification model: Tier 1 (unique, core to competitive positioning), Tier 2 (valuable, supports Tier 1), Tier 3 (useful, largely replicable)
- The IHVNA holding layer: its role in the chain, its relationship to `assess-hvna`, and the failure modes it prevents
- The three assessment outcomes for IHVNAs: activation, deferral, refinement
- Chain-level calibration standards and drift signals
- The quality test: whether a randomly selected piece of current work can be traced to an active OKR

**Out of Scope:**

- `okr-builder` individual mode behavior — governed by `OKR_Operating_System_Specification`
- `content-vector` production session execution — governed by `Compound_Content_Architecture_Specification`
- The `capability-evolution` pathway for IHVNAs representing toolkit capabilities — governed by `Toolkit_Evolution_Specification`
- `toolkit-accelerator` and `toolkit-integrity-update` — governed by `Toolkit_Integrity_Specification`

**Boundary Conditions:**

- This specification governs the chain; the individual operations' internal behavior is governed by their own specifications
- `assess-hvna` governs IHVNAs representing both strategic initiatives (which flow into the OKR structure) and toolkit capabilities (which flow into `capability-evolution`); this specification covers only the strategic-initiative pathway
- `content-vector` requires an OKR address — this is a chain-level constraint that this specification establishes; its enforcement is documented here even though execution is governed by `Compound_Content_Architecture_Specification`

---

## Section 4: Stakeholder Register

| Stakeholder | Role | Primary Need | Success Looks Like |
|---|---|---|---|
| [User] (human operator) | Strategic chain initiator; IP assessor; IHVNA capturer | All active content production traces to an OKR; no IP sits unassessed; no IHVNA sits unreviewed for more than two cycles | A randomly selected piece of current work traces to an active KR; no content deployment without a strategic address |
| Claude (AI agent) | Chain executor; IP assessment facilitator; IHVNA evaluation partner; OKR placement partner | Clear handoff standards between operations; unambiguous criteria for each IHVNA assessment outcome | Each `assess-hvna` session produces an unambiguous activation/deferral/refinement decision for each IHVNA reviewed |

---

## Section 5: Constraints

| Constraint | Type | Source | Impact |
|---|---|---|---|
| `content-vector` requires an OKR address | Structural | Framework: When NOT to Engage | Content deployed without a strategic address is production without strategy — the primary chain failure mode |
| `assess-hvna` is a formal evaluation session, not a quick check | Behavioral | Framework: When NOT to Engage | Running assess-hvna mid-session with a small queue produces insufficient depth; it is a strategic session, typically quarterly |
| The IHVNA holding layer must clear on cadence | Behavioral | Framework: IHVNA as Holding Layer | A queue that only grows produces strategic noise, not clarity; IHVNAs unreviewed for more than two cycles are at risk of becoming stale or blocking activation of high-value opportunities |
| IP assessment happens proactively, not retroactively | Behavioral | Framework: When to Engage | Assessing IP after significant development investment loses the opportunity to protect it early; assessment trigger: "if you've thought 'this might be something we own,' run the assessment" |

---

## Section 6: Research Findings

*Research conducted 2026-02-28 against Framework v1 (2026-02-27).*

**Finding R-01 — The chain's value is in the handoffs, not the operations individually.** The Framework establishes that `okr-builder` and `content-vector` each have individual framework documents — but the Strategic Navigation framework exists to document the chain-level: "how all four operations form a connected chain, what the chain produces, and why running them in isolation produces less than running them in sequence." This specification must govern the chain properties, not duplicate the individual operation specifications.

**Finding R-02 — The IHVNA holding layer prevents two failure modes simultaneously.** Premature action (acting on an observation before it is understood well enough to act on correctly) and observation loss (noting something interesting and losing it to compaction before it can be evaluated). The holding layer is only as useful as the evaluation gate — IHVNAs must be reviewed regularly. This dual-prevention function makes the IHVNA mechanism a first-class structural requirement, not just a documentation convention.

**Finding R-03 — The IP tier model has placement implications.** The Framework specifies: Tier 1 — formalize and protect; Tier 2 — develop as supporting material; Tier 3 — use freely, don't over-invest. These are not just labels — they are placement recommendations that flow directly into the OKR structure. A Tier 1 IP assessment finding should generate an OKR placement; a Tier 3 finding should not consume strategic development resources.

**Finding R-04 — The quality test is a single question.** The Framework's quality standard: "The test of healthy strategic navigation is whether a randomly selected piece of work from the past month can be traced to an active OKR. If the connection exists and is clear, the chain is working. If the connection must be constructed retroactively — if the strategic rationale is invented after the fact — the chain has broken." This is operationally testable and should be a Success Criterion.

---

## Section 7: Functional Requirements

*Requirements use "shall" for mandatory behaviors. Requirements prefixed REQ-F are functional.*

### Chain-Level Requirements

**REQ-F-01:** The Strategic Navigation chain shall operate in the following directional sequence: IP identified → `ip-assessment` (tier classification and placement recommendation) → `assess-hvna` (activation/deferral/refinement decision) → `okr-builder` (strategic placement in OKR structure) → `content-vector` (deployment through content cycle).

**REQ-F-02:** All active content production shall trace to an initiative in the OKR structure. `content-vector` shall not be used without an initiative vector that includes a valid OKR address.

**REQ-F-03:** IP assessments from `ip-assessment` and activated IHVNAs from `assess-hvna` shall find their placement in the OKR structure through `okr-builder`. Strategic work that has been assessed and not yet placed in the OKR structure is incomplete — the chain has not closed.

### Operation: ip-assessment

**REQ-F-04:** `ip-assessment` shall be invoked when a potential IP asset is identified — a framework, method, diagnostic tool, or proprietary process — that might represent defensible, unique intellectual property. Threshold for invocation: "if you've thought 'this might be something we own,' run the assessment."

**REQ-F-05:** `ip-assessment` shall classify the IP asset into one of three tiers:
- (a) **Tier 1** — Unique, high-value, core to competitive positioning: formalize and protect
- (b) **Tier 2** — Valuable, defensible, supports Tier 1: develop as supporting material
- (c) **Tier 3** — Useful, largely replicable, commodity: use freely, do not over-invest

**REQ-F-06:** `ip-assessment` shall produce a placement recommendation: which initiative does this IP asset serve, and does it belong in the OKR structure?

**REQ-F-07:** Tier 1 IP assessment findings shall generate an OKR placement action (into `okr-builder`). Tier 3 findings shall not consume strategic development resources.

### Operation: assess-hvna

**REQ-F-08:** `assess-hvna` shall run at each formal strategic session — typically quarterly in alignment with OKR cycles — and any time the IHVNA queue has accumulated enough entries to warrant a dedicated review.

**REQ-F-09:** `assess-hvna` shall not run as a mid-session check when the queue is small. It is a formal evaluation session.

**REQ-F-10:** Each IHVNA reviewed in `assess-hvna` shall receive one of three assessment outcomes:
- (a) **Activation** — begin formal development; routes to `capability-evolution` (toolkit capability) or `okr-builder` (strategic initiative)
- (b) **Deferral** — not yet; revisit in a future cycle with stated conditions for reconsideration
- (c) **Refinement** — more observation needed before a decision; captured for re-review at next session

**REQ-F-11:** No IHVNA entry shall remain unassessed for more than two review cycles.

### IHVNA Holding Layer

**REQ-F-12:** The IHVNA section of SuperContext shall function as the intentional holding layer between observing a potential pattern and acting on it. It prevents premature action (acting before an observation is well understood) and observation loss (losing an observation to compaction before it can be evaluated).

**REQ-F-13:** IHVNA entries shall be captured when an observation might be worth evaluating — not only when confidence in the observation is high. The capture threshold is low; the evaluation gate (assess-hvna) is where quality control happens.

### Integration with OKR and content-vector

**REQ-F-14:** Activated IHVNAs representing strategic initiatives shall be placed in the OKR structure via `okr-builder` Full Build or Quarterly Refresh. They shall not remain as activated IHVNAs without an OKR address.

**REQ-F-15:** `content-vector` shall only deploy initiatives that have an OKR address. Per `Compound_Content_Architecture_Specification` REQ-F-02(d), the initiative vector must include a named active KR. This is a chain-level constraint enforced at the `content-vector` trigger point.

---

## Section 8: Non-Functional Requirements

*Requirements prefixed REQ-NF are non-functional.*

**REQ-NF-01:** The strategic chain shall be assessed for integrity at each quarterly session. The quality test: can a randomly selected piece of work from the past month be traced to an active OKR? If the strategic rationale must be constructed retroactively, the chain has broken.

**REQ-NF-02:** IP assessment happens proactively when something potentially unique is identified — not retroactively after significant development investment. Reactive IP assessment after substantial work has been invested is too late to capture the protection value.

**REQ-NF-03:** The IHVNA queue shall not only grow — it must clear. An `assess-hvna` session that reviews IHVNAs and produces only deferral and refinement outcomes without any activation decisions may indicate the queue contains low-value entries. This is a signal to raise the capture threshold, not to defer the queue permanently.

**REQ-NF-04:** `okr-builder` mode selection applies within the Strategic Navigation chain. `okr-builder` Full Build mode is for cycle-open IP and IHVNA placement events; Quarterly Refresh is for recalibration. Running Full Build to place activated IHVNAs or IP assessments mid-cycle is a mode violation — the correct mode is Quarterly Refresh with IP/IHVNA placement as an agenda item.

---

## Section 9: Success Criteria

| Criterion | Measurement Method | Acceptable Threshold |
|---|---|---|
| Strategic traceability | Randomly select any piece of work from the past month; trace it to an active OKR | 100% of selected work has a direct OKR trace |
| content-vector OKR address compliance | Each `content-vector` session has an initiative vector with a valid OKR address | 100% — zero content-vector sessions without OKR address |
| IHVNA review cadence | `assess-hvna` runs quarterly; no IHVNA entry unassessed for more than two cycles | Quarterly sessions completed; zero entries exceeding two-cycle unassessed limit |
| IP placement rate | Tier 1 IP assessment findings generate OKR placement actions | 100% of Tier 1 findings placed in OKR structure within one cycle |
| Chain closure rate | Activated IHVNAs representing strategic initiatives placed in OKR structure | Placement within same session as activation or next `okr-builder` session |

---

## Section 10: Assumptions & Dependencies

| Item | Type | Description | If Wrong or Missing |
|---|---|---|---|
| Active OKR set is current | Dependency | REQ-F-02/15 require valid OKR addresses; OKR set must be current | If OKR file is stale: content-vector cannot obtain valid addresses; all content production lacks strategic traceability until OKR is updated |
| `assess-hvna` runs quarterly | Dependency | REQ-F-08/11 require quarterly review cadence | If assess-hvna doesn't run: IHVNAs accumulate unreviewed; activated opportunities are delayed by one or more cycles |
| SuperContext IHVNA section is actively maintained | Dependency | REQ-F-12/13 require the holding layer to function | If IHVNA entries are not captured: observation loss failure mode is not prevented; valuable patterns are lost to compaction |
| `okr-builder` Quarterly Refresh is the correct mode for mid-cycle placements | Assumption | REQ-NF-04 — placement of activated IHVNAs/IP uses Quarterly Refresh, not Full Build | If Full Build is incorrectly used: overhead without benefit; annual structure is unnecessarily disrupted |

---

## Section 11: Review Log

*Phase 4 — Review. Completed 2026-02-28.*

| Finding | Description | Resolution |
|---|---|---|
| R-01 | Initial draft included detailed `okr-builder` mode behavior in the functional requirements. Reviewers noted these are governed by `OKR_Operating_System_Specification` and should not be duplicated here — only chain-level constraints belong. | Removed mode behavior detail from functional requirements; retained REQ-NF-04 as a chain-level mode-selection constraint. |
| R-02 | The IHVNA two-pathway split (strategic initiatives → OKR structure vs. toolkit capabilities → capability-evolution) was initially missing from scope. Reviewers noted this boundary condition is important — assess-hvna serves both pathways, but this specification only covers one. | Added to Scope (boundary condition) and REQ-F-10 (routing language specifies which path each activation outcome takes). |

---

## Section 12: Verification Report

*Phase 5 — Verify. Completed 2026-02-28.*

**Completeness check:**

| Source element | Covered by requirement | Status |
|---|---|---|
| Four-operation chain and directional flow | → REQ-F-01 | ✅ Chain sequence formalized |
| content-vector OKR address requirement | → REQ-F-02/15 | ✅ Chain-level enforcement formalized |
| ip-assessment: tier model | → REQ-F-05 | ✅ Three tiers with outcomes formalized |
| ip-assessment: placement recommendation | → REQ-F-06/07 | ✅ Tier 1 placement action required |
| assess-hvna: cadence and session type | → REQ-F-08/09 | ✅ Quarterly formal session requirement |
| assess-hvna: three outcomes | → REQ-F-10/11 | ✅ Activation/deferral/refinement with two-cycle limit |
| IHVNA holding layer: dual prevention | → REQ-F-12/13 | ✅ Premature action and observation loss prevention formalized |
| Chain-level quality test | → REQ-NF-01; Success Criteria row 1 | ✅ OKR traceability test formalized |

**Verification result: Pass.**

---

## Section 13: Validation Confirmation

*Phase 6 — Validate. Completed 2026-02-28.*

**Validation question:** Does this specification correctly govern the Strategic Navigation chain so that all active content production traces to a strategic decision, IP is assessed proactively, and the IHVNA holding layer clears on cadence?

**Validation findings:** The four chain failure modes identified in the Framework (production without strategy, strategy without activation, IP without placement, orientation loss) are each addressed by specific requirements. REQ-F-02 closes production without strategy. REQ-F-03 closes strategy without activation. REQ-F-04/06/07 close IP without placement. REQ-NF-01 and the traceability success criterion close orientation loss. The scope boundary correctly delegates individual operation behavior to their own specifications while governing the chain-level handoffs and integrity here.

**Validation result: Valid.** Ready for baseline.

---

## Section 14: Baseline Record

**Baseline status:** Baselined
**Baseline date:** 2026-02-28
**Baseline authority:** [User] "[User]" [Framework Author] III

**Canonical path:** `3_AI_&_Human_Capabilities/8_Specifications/05_Strategic_Navigation_Specification_v1.0.md`

**Governed artifacts:**
- `3_AI_&_Human_Capabilities/7_Frameworks/05_Strategic_Navigation_Framework.md`
- `3_AI_&_Human_Capabilities/9_Workflows/05_Strategic_Navigation_Workflow.md`

**Change protocol:** Version increment required for any change to functional or non-functional requirements or success criteria.

**Next review trigger:** When any of the four chain operations is materially updated in ways that affect handoffs, or when a new chain failure mode is identified through operational experience.

---

*AI Mastery Toolkit v4 — 3_AI_&_Human_Capabilities / 8_Specifications*
*Strategic Navigation Specification v1.0 — Baselined 2026-02-28*
