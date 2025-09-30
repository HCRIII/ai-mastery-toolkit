# Spec-Driven Development Specification

---

**Title:** Spec-Driven Development
**Document Type:** Specification
**Version:** v1.0
**Status:** Baselined
**Created:** 2026-02-28
**Last Updated:** 2026-02-28
**Author:** [User] "[User]" [Framework Author] III + Claude
**Phase Gate Reached:** 6-Baselined
**Related Workflow:** `3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/`
**Note:** SDD has no standalone Framework document in `7_Frameworks/` — the workflow folder is the framework. This specification governs the workflow folder (v3 current version) and all profiles it defines.

---

## Section 2: Purpose & Problem Statement

Without a governing methodology for how documents, offerings, and projects are created and maintained, each new artifact is built ad hoc. Quality standards are implicit rather than explicit. Alignment between levels of the business is assumed rather than verified. Foundation documents — which govern everything else — drift without anyone noticing, and their stale assumptions propagate to all six levels simultaneously. Content produced at Level 6 can be strategically misaligned with Level 1 identity anchors that were never updated.

Spec-Driven Development resolves this by imposing a structured lifecycle on every artifact in the system, across all six Context File levels. The lifecycle runs through seven defined phases (0–6): Define, Research, Specify, Refine, Verify, and Close (or, for living documents, Version). Every artifact is traceable to a phase. Compliance gaps are visible as missing phase artifacts, not as invisible drift.

Version 3 is the critical extension: SDD is no longer a production workflow (Level 6 only) — it is a full-business operating system. Every layer of the business — Foundation, Strategy, Portfolio, Offering Specs, Content Strategy, and Production — runs through the same rigorous, documented, compound-building process. The upward alignment chain means that a production project at Level 6 inherits definitions from the offering spec at Level 4, which inherits direction from the strategy at Level 2, which inherits identity from the foundation at Level 1. Alignment is structural, not a separate check.

The intended outcome is a business where every document knows what it is, why it exists, when it was last verified, and whether it is aligned with the level above it — and where compliance failures are visible as gaps in the phase record, not as invisible assumptions.

---

## Section 3: Scope Definition

**In Scope:**

- The three compliance profiles and their applicability by Context File level: Living Document (Levels 1–3), Offering Spec (Levels 4–5), Production (Level 6)
- The seven SDD phases (0–6) and their phase gate artifacts for each compliance profile
- The Human-in-Loop operating mode: definition, requirements, release criteria
- The Pertinent Summary Format: structure, two-category taxonomy (active constraints vs. preparation required), and forward gate tagging rules
- The upward alignment chain (Levels 1–6) and the principle that alignment is structural
- The Living Document protocol: header standard, review ritual, currency verification, versioning convention, backfill protocol
- The compliance scoring table format used by `toolkit-accelerator`
- The principle that SDD now governs all toolkit specifications, including those produced in `8_Specifications/` — each specification produced in that folder is a SDD Living Document project at the framework layer

**Out of Scope:**

- The prompt implementations within the workflow folder (those are the operational artifacts; this specification governs what they must produce, not how they are written)
- The content of any individual Phase 0–6 artifact — this specification governs the process, not the deliverable content
- Levels 4–5 Offering Spec and Level 6 Production artifact details — those are fully specified in `15_level-profiles.md` and `02_phase-0-project-definition.md` through `13_phase-6-delivery-archive.md`; this specification governs the framework-level behavior
- The `toolkit-accelerator` prompt implementation — governed by its own operation file; this specification defines the compliance scan format that `toolkit-accelerator` must produce

**Boundary Conditions:**

- This specification is itself a SDD Living Document project at the meta-level — it governs the SDD framework that governs it. This is a designed structural property: all specifications in `8_Specifications/` must comply with SDD Living Document protocol.
- Human-in-Loop mode governs how the SDD workflow executes in practice; this specification defines the mode's requirements, including what triggers release

---

## Section 4: Stakeholder Register

| Stakeholder | Role | Primary Need | Success Looks Like |
|---|---|---|---|
| [User] (human operator) | Owner of all SDD compliance decisions; human-in-loop confirming authority | A business where every artifact at every level is traceable, aligned, and currency-verified; compliance failures visible as phase gaps, not invisible drift | No SDD compliance gap older than 90 days at Levels 1–3; all active Level 6 projects in active phases; all Level 4–5 specs at Phase 5 or later for active offerings |
| Claude (AI agent) | SDD workflow executor; compliance scanner; Living Document maintainer | Unambiguous phase gate artifacts for each profile; clear stopping conditions for human-in-loop confirmation; explicit forward gate tagging so gate identification is rule-governed, not inferred | Each SDD session proceeds phase-by-phase with confirmed human gates; forward gates are reported only when explicitly tagged in source documents |
| Future toolkit users (downstream) | Receive a clean, portable toolkit with SDD compliance built in | A framework that is documented well enough to be adopted by practitioners who did not build it | Toolkit version of SDD framework (this specification + workflow README + phase files) is self-contained and learnable from documentation alone |

---

## Section 5: Constraints

| Constraint | Type | Source | Impact |
|---|---|---|---|
| Human-in-Loop is the default operating mode | Behavioral | README Section: Human-in-Loop Operating Mode | No SDD session step proceeds without explicit human confirmation; "proceed" or equivalent is required; AI does not advance autonomously |
| Forward gates are rule-governed, not AI-inferred | Behavioral | README v3.2 changelog | Forward gates are reported only when the source document contains an explicit `[FORWARD GATE: Step N]` tag; AI inference does not produce forward gates — this was a root-cause failure in the v3.1 test trace |
| Pertinent Summary Format is not a document summary | Behavioral | README Section: Pertinent Summary Format | If a document contains 50 rules and 3 apply to this session's asset, report the 3 — not all 50; reciting all found content is a format violation |
| SDD governs all levels, not just production | Architectural | README v3.0 extension | Level 1–3 documents are Living Document projects — the highest priority SDD projects in the system; a stale Level 1 document propagates stale assumptions to all six levels |
| Human-in-Loop release requires demonstrated reliability | Behavioral | README Section: When to Release | Release requires: one complete production run, no missed steps, no gaps at any layer, assets placed correctly, no corrections required — and an explicit session statement from [User] |

---

## Section 6: Research Findings

*Research conducted 2026-02-28 against SDD Workflow v3.3 (current). Workflow is the framework in this case — no separate framework document exists.*

**Finding R-01 — SDD is the meta-framework: it governs how all other frameworks are maintained.** Every document in `3_AI_&_Human_Capabilities/` — including all specifications in `8_Specifications/` — is a SDD Living Document project. This means SDD specifications must themselves comply with Living Document protocol. The implication: this specification, once baselined, requires a review frequency, a Last Reviewed date, and a version stamp. It is not a static artifact.

**Finding R-02 — The compliance profile distinction is the v3 innovation.** v1–v2 were production workflows. v3's extension to Levels 1–3 (Living Document) and Levels 4–5 (Offering Spec) is what makes SDD a full-business operating system. The three profiles are not variations of the same thing — they are different compliance regimes for documents of fundamentally different natures (permanent infrastructure vs. defined deliverables vs. production output).

**Finding R-03 — Human-in-Loop mode was introduced in v3.1 after a test trace failure.** The v3.1 changelog records the root cause: "Phase 2 Test Trace executed without step-by-step human confirmation, producing outputs that missed critical requirements." This is a documented failure mode, not a design preference. Human-in-Loop is the system's quality gate. Every step requires confirmation because the test proved that AI operating without it misses requirements in ways that compound downstream.

**Finding R-04 — Forward gate tagging is a precision tool that prevents two distinct failure modes.** The v3.2 changelog records the first: forward gates identified by AI inference (not from tagged rules) introduce unreliable signal. The v3.3 changelog records the second: surfacing all "things that will matter later" at Step 0 creates noise that crowds out genuinely actionable items. The solution — explicit `[FORWARD GATE: Step N]` tagging required in source documents — eliminates both failure modes simultaneously. Forward gates are now rule-governed and preparation-specific, not inference-based or verification-announcing.

**Finding R-05 — The upward alignment chain makes compliance failures traceable.** The README states: "When all six levels run SDD, a compliance failure at Level 6 often traces back to an unresolved question at Level 2 or 3 — making the root cause visible instead of symptomatic." This is the architectural value of extending SDD to all levels: what previously appeared as a production gap (Level 6) now surfaces as a strategy gap (Level 2) or identity gap (Level 1) — where the root cause actually lives.

**Finding R-06 — The Living Document header block IS Phase 0 for Levels 1–3.** The living-document-protocol states explicitly: "The header IS Phase 0 for a Living Document — it defines the document's identity and maintenance schedule." This is not incidental — it means documents without the standard header block fail Phase 0 during compliance scans. No separate project-overview artifact is required for Levels 1–3; the header block in the document itself carries the Phase 0 function.

**Finding R-07 — Currency verification is lighter than full review and more frequent.** The four-question currency check (Is this still true? Still relevant? Still complete? Still aligned with the level above?) is the Phase 5 analog for Living Documents. It runs more frequently than the full review ritual and produces a `Last Verified` date stamp. A document that passes currency verification but is overdue for a full review is flagged as ⚠️ Partial at Phase 3 during compliance scans — not as a full failure, but as a gap that needs scheduling.

---

## Section 7: Functional Requirements

*Requirements use "shall" for mandatory behaviors. Requirements prefixed REQ-F are functional.*

### Three Compliance Profiles

**REQ-F-01:** Every artifact in the toolkit shall be classified under one of three SDD compliance profiles:
- (a) **Living Document** — applies to Levels 1–3 (Foundation, Strategy, Portfolio); nature is continuously alive, versioned, not closed
- (b) **Offering Spec** — applies to Levels 4–5 (Offering Specs, Content Strategy); nature is defined and deliverable, has a "spec complete" state
- (c) **Production** — applies to Level 6 (Asset Production); full SDD v2 — all seven phases, all artifacts, complete delivery package

**REQ-F-02:** The compliance profile shall determine which phase artifacts are required and what "completion" means for that document or project.

### Phase Gate Artifacts by Profile

**REQ-F-03:** Living Document compliance artifacts shall include:

| Phase | Artifact | Standard |
|---|---|---|
| Ph0 — Defined | Standard header block in the document itself | Purpose, scope, update frequency, last reviewed date present |
| Ph1 — Researched | Evidence base | Assertions backed by data, research, or documented rationale |
| Ph2 — Specified | Success criteria block | "This document is doing its job when..." — written and present |
| Ph3 — Reviewed | Last-reviewed date + reviewer notes | Run within the document's defined update frequency |
| Ph5 — Verified | Currency verification | Four-question check: still true, still relevant, still complete, still aligned |
| Ph6 — Versioned | Version stamp + changelog | Changes dated and described; current version reflects last substantive change |

**REQ-F-04:** Offering Spec compliance artifacts shall include project-overview.md (Ph0), research-synthesis.md (Ph1), spec.md + success-criteria.md (Ph2), interview/decision log (Ph3), verification against success criteria (Ph5), and delivery-notes.md or README with completion status (Ph6). Full artifact specifications are in `15_level-profiles.md`.

**REQ-F-05:** Production compliance artifacts shall follow the full SDD v2 phase sequence documented in files `02_phase-0-project-definition.md` through `13_phase-6-delivery-archive.md`.

### Living Document Standard Header

**REQ-F-06:** Every Living Document (Levels 1–3) shall contain a standard header block as the first content in the document. The header shall include: title, Created date, Last Updated date, version, purpose (one sentence), status (Active | Under Review | Pending Update), update frequency, Last Reviewed date, and Review Notes. A document without this header fails Phase 0 of SDD compliance.

### Human-in-Loop Operating Mode

**REQ-F-07:** Human-in-Loop mode is the default operating mode for all SDD workflow sessions. It shall remain active until explicitly released by [User] following a demonstrated end-to-end reliable production run.

**REQ-F-08:** In Human-in-Loop mode, at every step the AI shall:
- (a) Perform the step (read documents, scan directories, produce artifacts)
- (b) Report findings using the Pertinent Summary Format
- (c) Stop and wait for explicit human confirmation before proceeding to the next step

**REQ-F-09:** "Proceed," "confirmed," "yes," or equivalent shall be required before advancing past each step. The AI shall not advance autonomously.

**REQ-F-10:** Human-in-Loop mode shall be released only when: (a) at least one complete production run has been completed end-to-end; (b) no steps were missed; (c) no gaps were found at any governance layer; (d) all assets were placed correctly; (e) no corrections were required after session close. Release requires an explicit session statement from [User]. Release is not inferred from performance.

### Pertinent Summary Format

**REQ-F-11:** At every workflow step, findings shall be reported using the Pertinent Summary Format:

```
STEP [N] — [Layer/Phase Name]
Documents checked: [file names and versions]
Status: PASS / GAP FOUND
Active constraints (apply now):
- [Rule or standard that directly governs how this session operates]
Preparation required (before Step X):
- [Resource or action that must be in place before Step X — does not yet exist or is not yet confirmed]
Confirmation required before Step [N+1].
```

**REQ-F-12:** The Pertinent Summary Format shall include only what is pertinent to the production of the current asset. If a document contains 50 rules and 3 apply to this session, report the 3. The other 47 are confirmed present but not reported.

**REQ-F-13:** Pertinent Summary content shall fall into exactly two categories:
- (a) **Active constraints** — rules that govern how the current session runs; apply immediately and unconditionally
- (b) **Preparation required** — resources, artifacts, or actions that must be in place before a specific future step can proceed, and which are not guaranteed to already exist

**REQ-F-14:** Verification requirements are not preparation requirements. Verification requirements are surfaced naturally at their own step. They shall not be reported as preparation requirements at earlier steps.

### Forward Gate Tagging

**REQ-F-15:** A forward gate shall be reported in the Pertinent Summary only when the source document contains an explicit `[FORWARD GATE: Step N]` tag on that rule. AI inference shall not generate forward gates.

**REQ-F-16:** Any governance rule that requires a resource to be ready before a specific step shall be tagged inline in the source document: `[FORWARD GATE: Step N]`. This tag is the activation condition for forward gate reporting.

### Upward Alignment Chain

**REQ-F-17:** SDD shall govern all six Context File levels. No level is exempt.

**REQ-F-18:** The upward alignment chain shall be maintained: Level 1 (Foundation) defines → Level 2 (Strategy) governs → Level 3 (Portfolio) specifies → Level 4 (Offering Specs) plans → Level 5 (Content Strategy) produces → Level 6 (Production). A Level 6 compliance failure shall be investigated for root causes at Levels 1–5 before being treated as a Level 6 issue.

### Compliance Scoring

**REQ-F-19:** Compliance scans shall produce a unified scoring table in the following format:

```
SDD V3 COMPLIANCE SCAN — [date]

| Item | Level | Profile | Defined | Researched | Specified | Refined | Verified | Closed | Score |
```

**REQ-F-20:** Each scoring column shall be populated according to the compliance profile of the item being scored (as specified in the column-meaning-by-profile table in the README).

### Living Document Review Protocol

**REQ-F-21:** Living Document review shall follow the five-step review ritual:
1. Read top-to-bottom with fresh eyes — check accuracy, internal contradictions, and visible gaps
2. Check alignment with the level above
3. Check alignment with the level below — determine whether mismatches require updating this document or correcting the lower level
4. Update, version, and date — make changes inline, update all header fields, write Review Notes
5. Echo to SuperContext if priorities shifted — run upward flow scan if any changes affect priorities, moats, positioning, or strategy

**REQ-F-22:** Currency verification (Phase 5 for Living Documents) shall ask of each major section: (a) Is this still true? (b) Is this still relevant? (c) Is this still complete? (d) Does this still align with the current level above it? A verified document shall have `Last Verified: YYYY-MM-DD` added to its header.

**REQ-F-23:** A Living Document that has passed currency verification but has not had a full review within its defined update frequency shall be scored ⚠️ Partial at Phase 3 during compliance scans.

### Living Document Versioning

**REQ-F-24:** Living Documents shall version in-place using the following convention:
- Patch (x.x.1): typo fixes, formatting, minor clarifications — no substantive change
- Minor (x.1): content updates, new sections, updated data, refined positioning
- Major (1.0): structural redesign, fundamental repositioning, scope change

**REQ-F-25:** Version history shall be maintained as a brief log at the end of the document. No separate history files.

**REQ-F-26:** Previous-year versions and prior major versions shall not be deleted. They are historical data.

### Backfill Protocol

**REQ-F-27:** For existing Level 1–3 documents that predate SDD v3, backfill compliance in the following priority order:
1. Ph0 (Defined): add header block
2. Ph6 (Versioned): add version history log and current version number
3. Ph2 (Specified): write success criteria block
4. Ph3 (Reviewed): run review ritual
5. Ph1 (Researched) and Ph5 (Verified): assess during review

**REQ-F-28:** Backfill shall prioritize Level 1 documents first, then Level 2, then Level 3.

---

## Section 8: Non-Functional Requirements

*Requirements prefixed REQ-NF are non-functional.*

**REQ-NF-01:** SDD is the meta-framework. It governs how all other frameworks, workflows, and specifications are maintained. Treating SDD compliance as optional for any artifact — including framework documents and specifications — undermines the alignment chain that makes the system function.

**REQ-NF-02:** The Human-in-Loop operating mode is a quality gate, not overhead. The test trace failure that introduced it (v3.1 root cause) demonstrated that AI operating without step-by-step confirmation misses requirements in ways that compound downstream. The mode exists because the alternative has been tested and failed.

**REQ-NF-03:** Forward gate tagging is a precision instrument. It exists to prevent two failure modes simultaneously: (a) AI inference producing unreliable forward gate signals, and (b) noise from over-surfacing all "things that will matter later." The tagging rule — explicit `[FORWARD GATE: Step N]` in source documents — is the minimum viable precision mechanism.

**REQ-NF-04:** Level 1–3 Living Documents are the highest-priority SDD projects in the system. A stale Level 1 document propagates stale assumptions to all six levels simultaneously. Foundation and strategy documents are not "set and forget" — they are the most consequential SDD maintenance targets.

**REQ-NF-05:** "Pertinent" means pertinent to the current asset. The Pertinent Summary Format is not a documentation practice — it is a production practice. Its value is that the human confirming each step sees only what governs this session's work, not a recitation of all discovered documents. This is what makes the human-in-loop confirmation efficient rather than burdensome.

**REQ-NF-06:** The three compliance profiles are not a simplification — they are a structural recognition that Living Documents, Offering Specs, and Production artifacts have fundamentally different natures and different maintenance needs. Applying the Production profile to a Living Document (or vice versa) produces the wrong artifacts and the wrong definition of "done."

---

## Section 9: Success Criteria

| Criterion | Measurement Method | Acceptable Threshold |
|---|---|---|
| Level 1–3 compliance currency | All Level 1–3 documents have a standard header block (Ph0) and a Last Reviewed date within their defined update frequency | 100% have header blocks; no document overdue for review by more than 30 days beyond its defined frequency |
| Human-in-Loop confirmation compliance | Every SDD session step receives explicit human confirmation before proceeding | 100% — no step advances without confirmed "proceed" or equivalent |
| Forward gate sourcing accuracy | All reported forward gates traceable to explicit `[FORWARD GATE: Step N]` tags in source documents | Zero AI-inferred forward gates |
| Pertinent Summary discipline | Pertinent Summary reports only what governs the current session's asset | Zero recitations of full document contents; zero verification requirements reported as forward gates |
| Compliance scan currency | `toolkit-accelerator` compliance scans run at least quarterly | Scan run within 90 days |
| Level 6 project phase currency | No Level 6 project in active status has been static (no phase advance) for more than 60 days | Zero stale active Level 6 projects |
| Backfill completion | All pre-SDD-v3 Level 1–3 documents backfilled to Ph3 minimum | Ph3 (reviewed) complete for all Level 1–3 documents |

---

## Section 10: Assumptions & Dependencies

| Item | Type | Description | If Wrong or Missing |
|---|---|---|---|
| SDD Workflow v3.3 is current | Dependency | This specification governs v3.3; future versions require specification update | If workflow is updated without specification update: specification governs; workflow must be realigned to specification |
| `toolkit-accelerator` produces compliance scan | Dependency | REQ-F-19/20 defines the scan format; `toolkit-accelerator` must implement it | If not implemented: compliance scanning is manual; scan format requirements define the correct output |
| All Level 1–3 documents are identified and accessible | Dependency | Backfill protocol (REQ-F-27/28) requires knowing all Level 1–3 documents | If new Level 1–3 documents are added without SDD onboarding: they enter the system without phase compliance; Living Document protocol requires immediate Ph0 application |
| Forward gate tags are maintained in source documents | Dependency | REQ-F-15/16 — forward gates only from tagged rules | If tags are absent from source documents: no forward gates will be surfaced; session may reach a step without required preparation; the solution is to add tags when writing or updating governance documents |
| Human-in-Loop mode is not released prematurely | Assumption | Release requires one demonstrated end-to-end production run with no corrections | If released prematurely: quality gate is removed before the system has demonstrated reliable autonomous execution; risk of compounding errors returns |
| SuperContext is updated after Living Document reviews | Dependency | REQ-F-21 Step 5 requires upward flow scan if priorities shift | If not updated: strategic changes in Level 1–3 documents don't propagate to session state; AI operates on stale assumptions |

---

## Section 11: Review Log

*Phase 4 — Review. Completed 2026-02-28.*

| Finding | Description | Resolution |
|---|---|---|
| R-01 | Initial draft referred to the SDD Framework document as if it were in `7_Frameworks/` alongside the other framework documents. No such standalone file exists — the workflow folder IS the framework. | Added explicit note to document header; Section 3 Scope notes the workflow folder's dual role; Research Finding R-01 addresses this structural property. |
| R-02 | REQ-F-07 initial draft said Human-in-Loop "should remain active." Reviewers noted the intent is mandatory, not advisory — the v3.1 test trace failure that introduced the mode makes it a quality gate, not a preference. | Revised to "shall remain active." Added REQ-NF-02 explaining the failure mode that makes it mandatory. |
| R-03 | The Success Criteria table initially included only process metrics (compliance scan currency, session gate compliance). Reviewers noted that outcome metrics for Living Document maintenance were missing — a compliance scan that runs but finds all documents stale would pass the process metric while the system is degrading. | Added outcome metrics: Level 1–3 compliance currency row (header blocks present, review dates current) and Level 6 project phase currency row. |
| R-04 | REQ-F-15 initially said "forward gates shall not be reported by AI inference" without specifying the positive rule: what does produce a valid forward gate. The negative-only framing left the positive case ambiguous. | Revised to pair REQ-F-15 (negative: only from tagged rules) with REQ-F-16 (positive: what the tag must be and where it goes). The pair together is unambiguous. |

---

## Section 12: Verification Report

*Phase 5 — Verify. Completed 2026-02-28.*

**Verification method:** Structured cross-check of all functional and non-functional requirements against source documents (Workflow v3.3 README, living-document-protocol.md) and against internal consistency.

**Completeness check:**

| Source element | Covered by requirement | Status |
|---|---|---|
| Three compliance profiles | → REQ-F-01/02 | ✅ All three profiles defined with applicability |
| Phase gate artifacts by profile | Living Document → REQ-F-03; Offering Spec → REQ-F-04; Production → REQ-F-05 | ✅ All three profiles' artifacts formalized (Level 6 by reference) |
| Human-in-Loop mode | → REQ-F-07/08/09/10 | ✅ Mode, operation, and release criteria all formalized |
| Pertinent Summary Format | → REQ-F-11/12/13/14 | ✅ Format structure and two-category taxonomy formalized |
| Forward gate tagging | → REQ-F-15/16 | ✅ Negative and positive rules paired |
| Upward alignment chain | → REQ-F-17/18 | ✅ Chain direction and compliance failure tracing formalized |
| Compliance scoring table | → REQ-F-19/20 | ✅ Format and column meaning by profile formalized |
| Living Document header standard | → REQ-F-06 | ✅ Header fields and Phase 0 gate formalized |
| Living Document review ritual | → REQ-F-21 | ✅ Five-step sequence formalized |
| Currency verification | → REQ-F-22/23 | ✅ Four-question check and partial credit rule formalized |
| Versioning convention | → REQ-F-24/25/26 | ✅ Three-level convention and archive rule formalized |
| Backfill protocol | → REQ-F-27/28 | ✅ Priority order formalized |

**Internal consistency check:**

- REQ-F-14 (verification requirements not reported as forward gates) and REQ-F-15 (forward gates only from tagged rules) are consistent: REQ-F-14 excludes a class; REQ-F-15 restricts the remaining class to tagged sources. Together they are a clean two-level filter. No conflict.
- REQ-F-07 (Human-in-Loop default) and REQ-F-10 (release criteria) are consistent: REQ-F-07 establishes the default; REQ-F-10 defines the only valid exit. No conflict.
- REQ-F-23 (⚠️ Partial for overdue reviews) and REQ-F-22 (currency verification) are consistent: currency verification is a lighter check; it produces a Last Verified date but does not substitute for a full review at its defined frequency. Partial scoring reflects the gap. No conflict.

**Gap check:** No source document elements identified as missing from requirements.

**Verification result: Pass.** All source elements covered, no internal conflicts, no gaps.

---

## Section 13: Validation Confirmation

*Phase 6 — Validate. Completed 2026-02-28.*

**Validation question:** Does this specification, as written, correctly govern the Spec-Driven Development framework so that a practitioner executing against it will produce a system where every artifact at every level is traceable, aligned, and currency-verified — with compliance failures visible as phase gaps rather than invisible drift?

**Validation findings:**

- The three-profile structure (REQ-F-01/02) is the correct formalization of v3's central innovation. By classifying every artifact under one of three profiles and deriving compliance requirements from the profile, the specification makes it impossible to accidentally apply Production-level artifacts to a Living Document or vice versa.

- The Human-in-Loop requirements (REQ-F-07–10) are correctly derived from the v3.1 and v3.2 failure traces. The mode is mandatory (not advisory), the release criteria are specific (not qualitative), and the release is explicit (not inferred). This is the correct level of precision for a quality gate.

- The Pertinent Summary Format requirements (REQ-F-11–14) correctly operationalize the two-category taxonomy and the forward gate filtering rules. The pairing of REQ-F-15 (negative: no inference) with REQ-F-16 (positive: tag required) makes the forward gate rule unambiguous and bi-directional.

- The upward alignment chain (REQ-F-17/18) establishes that Level 6 compliance failures must be investigated for Level 1–5 root causes. This is the specification-level articulation of SDD v3's architectural value: making root causes visible rather than symptomatic.

- The meta-property noted in Finding R-01 — that SDD governs itself, including this specification — is captured in Section 3 boundary conditions and REQ-NF-01. This is the correct treatment: the specification should acknowledge that it is subject to the framework it describes.

- Success Criteria include both process metrics (gate compliance, scan currency) and outcome metrics (document review currency, Level 6 project activity). Both are necessary: process metrics alone allow the system to look compliant while the artifacts degrade.

- [User] confirmed the backfill priority order (Level 1 → Level 2 → Level 3) as the correct sequencing — Foundation misalignment propagates most broadly; it should be resolved first.

**Validation result: Valid.** This specification governs the Spec-Driven Development framework correctly. It is ready for baseline.

---

## Section 14: Baseline Record

**Baseline status:** Baselined
**Baseline date:** 2026-02-28
**Baseline authority:** [User] "[User]" [Framework Author] III

**Canonical path:** `3_AI_&_Human_Capabilities/8_Specifications/10_Spec_Driven_Development_Specification_v1.0.md`

**Governed artifacts:**
- `3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/` — entire v3 workflow folder governed by this specification; current version is v3.3
- All Level 1–3 documents (Living Document profile): compliance with REQ-F-03, REQ-F-06, REQ-F-21–26 required
- All Level 4–5 Offering Spec projects: compliance with REQ-F-04 required
- All Level 6 Production projects: compliance with REQ-F-05 required

**Meta-note:** This specification is itself a Living Document project under SDD. It shall comply with REQ-F-03 by maintaining a Last Reviewed date and review frequency.

| Living Document Header for this specification | |
|---|---|
| Update Frequency | Annually, or when SDD workflow version increments |
| Last Reviewed | 2026-02-28 |
| Review Notes | Initial specification — all sections authored 2026-02-28 against SDD Workflow v3.3 |

**Change protocol:** Version increment required for any change to functional requirements (Section 7), non-functional requirements (Section 8), or success criteria (Section 9). Required when SDD workflow advances to a new major version. Editorial changes to non-normative sections do not require version increment.

**Next review trigger:** When SDD workflow advances to v4, or when operational experience surfaces a Human-in-Loop or forward gate failure mode not covered by current requirements.

---

*AI Mastery Toolkit v4 — 3_AI_&_Human_Capabilities / 8_Specifications*
*Spec-Driven Development Specification v1.0 — Baselined 2026-02-28*
