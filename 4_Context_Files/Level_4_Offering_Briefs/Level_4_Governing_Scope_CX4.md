audit: v1.0 | 2026-03-06 | placement ✓ | boundary definition ✓ | roles table ✓ | verdict: ACTIVE
re-validate: if the standard offering spec file structure changes; if the governing relationship between L4 and L5/L6 changes structurally

# Level 4 — Governing Scope Declaration

**Created:** 2026-03-06
**Last Updated:** 2026-03-13
**Version:** v1.1
**CX Level:** CX4
**Purpose:** Defines the governing authority, downstream scope, and boundary definition for the entire Level 4 Offering Specs layer. All Level 4 documents point here rather than declaring individual file-specific governing scope. This makes adding new Level 4 documents maintenance-free — new files inherit scope by pointing here; no downstream dependency tracking is required per file.
**Status:** Active
**Update Frequency:** Event-driven — only when the governing relationship between Level 4 and adjacent levels changes structurally. Updating individual offering specs, adding new offerings, or revising delivery details does NOT trigger a change here.

---

## L4 Boundary Definition

**Primary question this layer answers:** "What exactly does each offering contain, how is it structured and delivered, and what are the complete production and delivery requirements?"

L4 documents define the offering specification layer — the detailed architecture of each individual offering: its modules, sessions, delivery process, production components, pricing logic, success criteria, and design decisions. L4 content is offering-specific and changes when the offering itself changes structurally. It is more stable than L6 production assets (which are produced and archived) but less stable than L3 portfolio registration (which only changes when portfolio architecture changes).

### The L4 Test — all three conditions must hold

A document belongs at Level 4 if:

1. **Offering-specificity primacy** — the document's primary content describes the structure, delivery architecture, or components of a specific named offering. It answers "what exactly does this offering include and how does it work?" — not "what's in the portfolio at the tier level?" (L3) or "what content should we create for this offering's promotion?" (L5).

2. **Spec depth** — the document contains detail that would be premature or out of scope at L3: module sequences, session counts, curriculum outlines, exact pricing and packaging logic, delivery processes, production components, or success criteria. Alternatively, it establishes the governing framework (Ph0-A anchoring) and project status for an offering spec project — even before spec details are populated.

3. **Structural containment** — the document belongs to a single named offering's spec project. Its content changes when that offering's structure, delivery process, or production requirements change. It does not change because the portfolio architecture changes (that's L3) or because a specific content asset for the offering is produced (that's L6).

### L3 Signals — a document does NOT belong at L4 if it contains

- Portfolio registration only — offering name, tier, grid position, status, investment range, and a pointer to the L4 folder
- Ascension path descriptions without any delivery architecture detail
- Content that would remain unchanged when the offering's module structure or session count is revised
- Content whose primary purpose is "this offering exists and here is its portfolio context" rather than "this is how the offering is built and delivered"

### L5 Signals — a document does NOT belong at L4 if it contains

- Channel-level content strategy for the offering (which platforms, which formats, which posting cadence)
- Content calendar or editorial planning documents for the offering
- Channel-specific messaging strategy for a single offering without also specifying what the offering delivers
- Stage-specific content asset planning for promotional or awareness content

### L4/L5 Split Test

**The most common confusion point — delivery spec vs. content strategy:**
- "The Companion Course delivers 12 modules live on YouTube, then archives behind Moodle paywall; enrolled members receive permanent access; Module 01 covers Documentation Standards" = **L4**
- "LinkedIn content strategy for the Companion Course uses awareness-level posts at Stage 1 and consideration-level posts at Stage 3; posting frequency is 3×/week" = **L5**
- A document containing both = **must be split before placement**

---

## What This Layer Governs

All Level 4 Offering Spec documents collectively govern decisions at Levels 5 and 6. The governing relationship is **structural and role-based**, not enumerative. Level 4 authority applies to all current and future documents in those levels without requiring explicit naming.

Level 4 defines the offering architecture — what each offering contains, how it's delivered, and what success looks like. No Level 5 content strategy or Level 6 production project should contradict or operate independently of the offering's L4 spec.

### Level 5 — Content Strategy

Level 4 governs: that every L5 content strategy document for a specific offering is consistent with the ICP, delivery format, journey stages, and positioning defined in that offering's L4 brief; that content strategy decisions serve an offering that has a registered L4 spec (not a gap cell or a planned-but-unspecified offering); that channel and asset planning reflects the offering's current SDD phase status (an offering in Ph0 has different content needs than one in Ph4 production).

### Level 6 — Asset Production

Level 4 governs: that every L6 production project references its governing L4 offering spec and is consistent with the spec's content architecture, ICP definition, and delivery format; that production sequencing aligns with the SDD phase status recorded in the offering's `Project_Overview_CX4.md`; that production assets do not extend or contradict the offering's defined scope without a corresponding update to the L4 spec.

---

## Document Roles Within This Layer

Each Level 4 offering folder contains a standard set of files. The role name for each file type appears in any `## Governs` block within L4 documents.

### Standard File Roles (apply to all offering folders)

| Role Name | What It Governs | File |
|-----------|----------------|------|
| Project Overview | Ph0-A governing alignment (L1–L3 sources + rationale), SDD phase status, offering identity — the governance anchor for the entire offering spec project | `Project_Overview_CX4.md` |
| Offering Brief | Strategic positioning, offering structure, success metrics — the primary intelligence file for the offering | `[Offering]_Brief_CX4.md` |
| Research Synthesis | Summarized research findings (audience, competitive landscape, market signals) that inform the offering spec | `Research_Synthesis_CX4.md` |
| Success Criteria | Measurable outcomes defining what "done" and "working" look like for this offering | `Success_Criteria_CX4.md` |
| Decision Log | Key design decisions, their rationale, and alternatives considered — the governance trail for the spec | `Decision_Log_CX4.md` |
| Delivery Notes | Post-delivery observations, operational notes, and performance documentation | `Delivery_Notes_CX4.md` |

### Offering Folder Index

| Grid Cell | Offering Name | Status | Folder |
|-----------|--------------|--------|--------|
| Community — Entry | Cognitive Architecture Community | Pre-Launch | `1_Community-Entry/` |
| Community — Core | (Gap — not yet defined) | Gap | `2_Community-Core/` |
| Community — Premium | (Gap — not yet defined) | Gap | `3_Community-Premium/` |
| Courses — Entry | (Primer Courses — names TBD) | Gap | `4_Courses-Entry/` |
| Courses — Core | AI Mastery Toolkit Companion Course | Cold Start | `5_Courses-Core/AI-Mastery-Toolkit-Companion-Course/` |
| Courses — Premium | Cognitive Architecture Foundations | Development | `6_Courses-Premium/Cognitive-Architecture-Foundations/` |
| Coaching — Entry | Cognitive Architecture Intensive | Active | `7_Coaching-Entry/` |
| Coaching — Core | Elite Transformation Partnership | Active | `8_Coaching-Core/` (see note below) |
| Coaching — Premium | Apex / Strategic Partnership | Active | `9_Coaching-Premium/` |
| Public Offerings | CDPID Research Publication | Active (published) | `10_Public_Offerings/CDPID-Publication/` |

**[Owner's Publication Program] Field Architecture Note (2026-03-13):** Under the first principle of AI-Integrated Psychology of Longevity Science, each offering in this grid has a dual role: (1) service delivery (how it serves clients) and (2) field architecture (what component of the [Owner's Publication Program] field it constitutes). These interpretations run in parallel — no operational changes are required. The field architecture interpretation: Community = the practitioner cohort of an emerging field; Courses = the first formal curriculum in AI-Integrated Psychology of Longevity Science; Coaching = applied research at the individual level generating case evidence for the field; CDPID = the foundational published methodology. When updating offering descriptions, taglines, and value propositions, longevity framing opportunities should be reviewed and incorporated where natural. The [Your Organization] name and offering names are unchanged — this framing applies to descriptions, positioning language, and outcome statements only.

**Note on gap cells (2_, 3_, 4_):** Offering folders for gap cells contain only a `_README.md` until the offering is defined. No spec work is initiated for gap cells; the folder is a placeholder for future registration.

**Note on Coaching-Core (8_):** The Elite Transformation Partnership spec shares the `7_Coaching-Entry/` folder's `Project_Overview_CX4.md` until the two coaching specs diverge sufficiently to warrant separate folder structures. The `8_Coaching-Core/Project_Overview_CX4.md` is a routing stub pointing to the joint overview. See `7_Coaching-Entry/Project_Overview_CX4.md` for the governing Ph0-A anchoring for both Grid 7 and Grid 8 offerings.

---

## How Agents Use This Document

When any content strategy, production, or delivery agent needs to verify Level 4 alignment for a downstream decision:

1. Read this document to identify which offering folder is relevant to the task and confirm it has an active spec (not a gap cell)
2. Load and read the `Project_Overview_CX4.md` for that offering (Ph0-A governing alignment + current SDD phase status)
3. Load the `[Offering]_Brief_CX4.md` for the full spec
4. Verify the downstream decision is consistent with the governing context established in those files

**Minimum required Level 4 loads for production sessions:**
- `Project_Overview_CX4.md` (to confirm current SDD phase and Ph0-A governing docs)
- `[Offering]_Brief_CX4.md` (to confirm the offering spec governs the production work)

---

## Standard Pointer Block for Level 4 Documents

Every Level 4 document contains the following `## Governs` block. The only variable is the role name.

```markdown
## Governs
**Layer:** Level 4 — Offering Specs | **Role:** [Role Name from Level_4_Governing_Scope_CX4.md]
**Scope:** Defined in `Level_4_Offering_Briefs/Level_4_Governing_Scope_CX4.md` — this document governs downstream Levels 5–6 per the scope and role defined there. No per-file dependency tracking required.
```

**Note on existing L4 documents:** Governs blocks will be added to all existing L4 documents during the L4 substance audit. For newly created L4 documents, include the Governs block from the outset.

---

## Version History

- v1.0 (2026-03-06): Initial governing scope declaration — L4 Boundary Definition (primary question, three-condition L4 Test, L3/L5 signals, L4/L5 split test), downstream scope (L5–L6), standard file roles table, offering folder index, agent usage protocol, standard pointer block. Pre-L4-audit prerequisite per System Development Plan Pending Items.
