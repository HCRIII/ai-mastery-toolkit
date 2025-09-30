# Spec-Driven Development Workflow v3

**Created:** 2026-02-22
**Last Updated:** 2026-03-04
**Purpose:** Full-business operating system — SDD applied across all six Context File levels
**Status:** Final
**Supersedes:** Spec_Driven_Development_Workflow_v2

---

## What This Is

Spec-Driven Development v3 extends the SDD framework from Level 6 production projects to all six Context File levels. Every layer of the business — Foundation, Strategy, Portfolio, Offering Specs, Content Strategy, and Production — now runs through the same rigorous, documented, and compound-building process.

**The shift from v2:** In v2, SDD governed production output. In v3, SDD governs the entire business. Every document, every offering, every strategy, and every piece of production is defined, researched, spec'd, refined, verified, and closed. The business and the person are treated as a living, constantly align-able project.

**Why this matters:** When every level follows SDD, alignment is structural — not a separate check. A production project (Level 6) that runs SDD automatically inherits definitions from the offering spec (Level 4) that inherits direction from the strategy (Level 2) that inherits identity from the foundation (Level 1). Gaps in alignment become visible as compliance failures, not invisible drift.

---

## v3 vs v2: What Changed

v2 proved the model for Level 6 production projects. v3 extends the model to the entire business.

**The single core change:** SDD now has three compliance profiles, each matched to a layer of the business:

| Profile | Applies To | Nature |
|---------|-----------|--------|
| **Living Document** | Levels 1–3 (Foundation, Strategy, Portfolio) | Continuously alive; versioned, not closed |
| **Offering Spec** | Levels 4–5 (Offering Specs, Content Strategy) | Defined and deliverable; lighter production phase |
| **Production** | Level 6 (Asset Production) | Full SDD v2 — all seven phases |

The seven phases (0–6) are the same across all profiles. What changes is which artifacts are required and what "completion" means at each level.

---

## The Three Compliance Profiles

### Profile 1: Living Document (Levels 1–3)

**Nature:** These documents are the business's permanent intellectual infrastructure. They don't close — they evolve. A Living Document project is never "done" in the Phase 6 sense; it is kept current, versioned, and aligned.

**What qualifies as a project:** Any named document or document cluster at Levels 1–3 that governs a meaningful scope. Examples:
- `Business_Strategy_Document.md` — a Level 1 project
- `1_Business_Foundation/` folder cluster — a Level 1 project set
- `2.1_Business_Alignment_and_Positioning_CX2.md` — a Level 2 project
- `Offering_Portfolio_Map_CX3.md` (when created) — a Level 3 project

**Compliance artifacts:**

| Phase | Artifact | Requirement |
|-------|----------|-------------|
| Ph0 — Defined | Header block in the document itself | Purpose, scope, what good looks like, update frequency |
| Ph1 — Researched | Evidence base | Assertions backed by data, research, or documented rationale |
| Ph2 — Specified | Success criteria block | What does a complete, useful version of this document look like? |
| Ph3 — Reviewed | Last-reviewed date + reviewer notes | Alignment check against current reality; at minimum annually |
| Ph5 — Verified | Currency verification | Is this still accurate, strategic, and aligned with current priorities? |
| Ph6 — Versioned | Version stamp + changelog | Document is versioned in-place; changes are dated and described |

**What "closed" means for Living Documents:** Not Phase 6 closure — instead, a Living Document is "current" when it has been reviewed within its update frequency window and its version stamp reflects the last substantive change.

---

### Profile 2: Offering Spec (Levels 4–5)

**Nature:** Offering specs define what the business produces and sells. Content strategy defines how it reaches people. These are definable and deliverable — they have a "spec complete" state even if the offering itself continues evolving.

**What qualifies as a project:** Any offering folder at Level 4 or content strategy folder at Level 5. Examples:
- `Level_4_Offering_Briefs/Community-Site/` — an Offering Spec project
- `Level_4_Offering_Briefs/CDPID-Publication/` — an Offering Spec project
- `Level_5_Content_Strategy/Community-Site/` — a Content Strategy project

**Compliance artifacts:**

| Phase | Artifact | Requirement |
|-------|----------|-------------|
| Ph0 — Defined | `project-overview.md` in the offering folder | What is this offering, who is it for, what does it deliver |
| Ph1 — Researched | `research-synthesis.md` or equivalent | Market context, audience validation, competitive position |
| Ph2 — Specified | `spec.md` + `success-criteria.md` | What the offering/content strategy contains; pre-defined success |
| Ph3 — Refined | Interview/decision log or equivalent | Key decisions documented, open questions resolved |
| Ph5 — Verified | Verification against success-criteria.md | Does the spec fulfill its purpose? Is it executable? |
| Ph6 — Closed | `delivery-notes.md` or README with completion status | Offering spec is complete and referenced by Level 5 and Level 6 |

---

### Profile 3: Production (Level 6)

**Nature:** This is SDD v2 in full. Level 6 projects are the output engine — the place where content, courses, and assets are actually produced and shipped.

**What qualifies as a project:** Any subfolder in `Level_6_Asset_Production/` that is actively being worked (does not have a Phase 6 Complete marker).

**Compliance artifacts:** Full SDD v2 — see `02_phase-0-project-definition.md` through `13_phase-6-delivery-archive.md`. All seven phases, all artifacts, complete delivery package.

---

## The Upward Alignment Chain

SDD v3's structural power is the alignment chain. Each level's output becomes the next level's input:

```
Level 1 (Foundation) — identity, values, mission, moats
    ↓ defines
Level 2 (Strategy) — positioning, priorities, integration plan
    ↓ governs
Level 3 (Portfolio) — offering portfolio map, client journey
    ↓ specifies
Level 4 (Offering Specs) — individual offering definitions
    ↓ plans
Level 5 (Content Strategy) — content per offering per channel
    ↓ produces
Level 6 (Production) — actual assets, courses, content
```

When all six levels run SDD, a compliance failure at Level 6 often traces back to an unresolved question at Level 2 or 3 — making the root cause visible instead of symptomatic.

---

## Compliance Scoring in v3

The toolkit-accelerator prompt uses a single unified scoring table across all six levels:

```
SDD V3 COMPLIANCE SCAN — [date]

| Item | Level | Profile | Defined | Researched | Specified | Refined | Verified | Closed | Score |
|------|-------|---------|---------|-----------|-----------|---------|----------|--------|-------|
```

**Column meaning by profile:**

| Column | Living Doc (1–3) | Offering Spec (4–5) | Production (6) |
|--------|-----------------|--------------------|--------------------|
| Defined | Header block with purpose/scope present | project-overview.md exists | Phase 0 artifacts complete |
| Researched | Evidence base in document | research-synthesis.md exists | Phase 1 complete |
| Specified | Success criteria written | spec.md + success-criteria.md | Phase 2 complete |
| Refined | Last-reviewed date + notes | Decision log exists | Phase 3 complete |
| Verified | Currency check run | Spec verified vs. criteria | Phase 5 run |
| Closed | Version stamp current | delivery-notes.md exists | Phase 6 complete |

---

## Human-in-Loop Operating Mode

**Current status: ACTIVE.** This mode remains in effect until [User] explicitly releases it.

The SDD workflow requires human confirmation at every phase transition and every governance layer check. No step proceeds until the human has confirmed the findings from the current step. This is not a formality — it is the primary mechanism for catching errors, gaps, and misalignments before they compound downstream.

### What This Means in Practice

At every step — L0 through L6, Phase 0 through Phase 6 — the AI:

1. Performs the step (reads documents, scans directories, produces artifacts)
2. Reports findings using the **Pertinent Summary Format** (see below)
3. Stops and waits for explicit human confirmation before proceeding

**The AI does not proceed to the next step until the human confirms.** "Confirmed," "yes," "proceed," or equivalent is required. If the human identifies a problem, it is fixed before confirmation is given. If the human has a question, it is answered before proceeding.

### Pertinent Summary Format

When reporting findings at any step, report only what is pertinent to the production of the current asset. Do not recite document contents. Do not summarize everything found. Extract and state only what governs or informs what is being built.

**Format:**

```
STEP [N] — [Layer/Phase Name]
Documents checked: [file names and versions]
Status: PASS / GAP FOUND
Active constraints (apply now):
- [Rule or standard that directly governs how this session operates]
- [Any gap found and fix applied]
Preparation required (before Step X):
- [Resource or action that must be in place before Step X — does not yet exist or is not yet confirmed]
Confirmation required before Step [N+1].
```

**Two categories of pertinent information:**

**Active constraints** are rules that govern how the current session runs — behavioral standards, standing instructions, session-level requirements. They apply immediately and unconditionally.

**Forward gates are preparation requirements only.** A forward gate is a resource, artifact, or action that must be in place *before* a specific future step can proceed — and which is not guaranteed to already exist. The value of noting it early is that preparation can begin before the workflow reaches the step that needs it, preventing a mid-workflow stoppage. Forward gates are not verification announcements — every step verifies its own governing documents naturally. A requirement that will simply be discovered and checked at its own step is not a forward gate.

**Example:** At Step 0, discovering that L6 production requires a channel guideline that does not yet exist is a forward gate — it must be created before Step 6 can proceed. Noting it at Step 0 allows it to be built before the workflow arrives there.

**Explicit tagging required.** A forward gate is only reported if the source document contains the tag `[FORWARD GATE: Step N]` on that rule. AI does not self-identify preparation requirements by inference. When writing any governance rule that requires a resource to be ready before a specific step, tag it inline: `[FORWARD GATE: Step N]`.

**Why this distinction matters:** Verification requirements are not forward gates — they are handled at their own step. Surfacing all "things that will matter later" as forward gates at Step 0 creates noise that crowds out the genuinely actionable items and implies that later steps do not need their own checks.

**What "pertinent" means:** If the document contains 50 rules and 3 apply to this session's asset, report the 3. The other 47 are confirmed present but not relevant to this production run. This keeps the human-in-loop process efficient — the human is confirming that the right constraints have been identified, not reviewing every document in full.

### When to Release Human-in-Loop Mode

[User] releases this mode when the system has demonstrated reliable end-to-end execution across at least one complete production run with no missed steps, no gaps found at any layer, all assets placed correctly, and no corrections required. Release is explicit — a session statement from [User] that human-in-loop is no longer required. Until then, every step requires confirmation.

---

## Key Principles

All v2 principles (1–10) carry forward. Three additions for v3:

### 11. All-Levels Alignment
Every Level 6 production project traces back to a Level 4 offering spec, which traces back to a Level 2 strategy decision, which traces back to a Level 1 identity anchor. Alignment is structural. Drift is visible as a compliance gap.

### 12. Living Documents Are Active Projects
Foundation and strategy documents are not "set and forget." They are the most important SDD projects in the business — because every other level inherits from them. A stale Level 1 document propagates stale assumptions to all six levels simultaneously.

### 13. Human-in-Loop Until Released
The workflow runs in human-in-loop mode by default. The AI confirms findings with the human at every step before proceeding. This is the quality gate that catches what automated checks miss. It is released only when end-to-end reliability has been demonstrated.

---

## File Structure (v3 Additions to v2 Base)

All v2 files remain valid for Level 6 production. New files in v3:

- **15_level-profiles.md** — Full artifact specifications for all three profiles with field-level detail
- **16_living-document-protocol.md** — How to maintain, review, and version Level 1–3 documents
- **17_alignment-chain-protocol.md** — How to verify and repair cross-level alignment

---

## When to Use This Workflow

### All six levels — always:
- Starting a new document, offering, or project at any level → begin at Phase 0
- Inheriting an existing document with no SDD history → run compliance scan, then backfill gaps
- Reviewing quarterly or annually → run Living Document currency verification

### Level 6 — full production:
- Follow the full v2 phase sequence (files 02–13)

### Levels 1–3 — Living Document protocol:
- Follow `16_living-document-protocol.md`

### Levels 4–5 — Offering Spec profile:
- Use `15_level-profiles.md` for artifact checklist

---

## Version History

**v1.0 (2026-02-08):** Initial workflow
**v1.1–v1.2 (2026-02-08–10):** Phase 5, standards, production queue, upward feedback
**v2.0 (2026-02-22):** Phase 0, success-criteria.md, Phase 6, Visual Design Sub-Workflow, Context Files integration
**v3.0 (2026-02-22):** Extended to all six Context File levels; three compliance profiles (Living Document, Offering Spec, Production); alignment chain defined; SDD graduates from production workflow to full-business operating system and proprietary IP (IHVNA 1)
**v3.1 (2026-02-27):** Added Human-in-Loop Operating Mode (Principle 13) and Pertinent Summary Format. Root cause: Phase 2 Test Trace executed without step-by-step human confirmation, producing outputs that missed critical requirements (no image prompt, wrong asset location, no per-step verification). Human-in-loop mode is now the default until explicitly released by [User] following a successful end-to-end production run.
**v3.2 (2026-02-27):** Added explicit `[FORWARD GATE: Step N]` tagging requirement to Pertinent Summary Format. Root cause: During Phase 2 Test Trace Step 0, the Two-Document L6 requirement was surfaced as a forward gate via AI inference from SC_Layer 4 (prunable Recent Learnings) — not from an explicitly tagged rule in any governance document. Forward gates are now only reported when the source document contains the explicit tag. AI judgment does not produce forward gates.
**v3.4 (2026-03-04):** Added `CX Level:` as a required field in the Living Document Ph0 header standard (`16_living-document-protocol.md`, `15_level-profiles.md`). Added Audit Meta-Block as a Ph0 artifact for documents that have completed the Phase 2 Substance Audit — compact single-line record of audit steps completed, verdict, and re-validate trigger, placed after header block and before document body. Ph0 pass condition updated in `15_level-profiles.md` to require `CX Level:` designation.
**v3.3 (2026-02-27):** Narrowed forward gate definition to preparation requirements only (resources or actions that must be in place before a future step — not verification announcements). Renamed template row from "Forward gates" to "Preparation required." Root cause: verification requirements are surfaced naturally at their own step; forward-announcing them adds noise and implies later steps do not need their own checks.

---

**Next:** For Level 1–3 work, see `16_living-document-protocol.md`. For Level 4–5 work, see `15_level-profiles.md`. For Level 6 production, begin at `02_phase-0-project-definition.md`.
