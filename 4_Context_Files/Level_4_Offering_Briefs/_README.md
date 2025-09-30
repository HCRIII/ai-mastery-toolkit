# Level 4: Offering Briefs

**Last Updated:** 2026-02-28
**What lives here:** Intelligence dossiers for each individual offering. One subfolder per offering.
**Organization:** By offering name. Each offering gets its own folder.
**Update frequency:** As needed when offering strategy evolves. These are living documents, not gated by a formal lifecycle.

---

## What an Offering Brief Is

An **Offering Brief** is a multi-file intelligence dossier that provides working context about a specific offering — its strategic positioning, structure, research basis, success criteria, and production decisions. Offering Briefs are CX4-level authority files.

**Offering Briefs are distinct from Specifications (8_Specifications/).** A Specification is a formal 14-section document produced through the 6-phase SDD lifecycle, ending in a Baselined status under change control. An Offering Brief is a living intelligence file with no formal phase gate. The CX4 suffix on files like `Community-Entry_Brief_CX4.md` disambiguates them from formal Specification documents in any loaded context.

When both types might appear in the same session:
- `Community-Entry_Brief_CX4.md` — Offering Brief (CX4 intelligence file, this folder)
- `Companion_Course_Specification_v1.0.md` — Formal Specification (8_Specifications/, Baselined)

---

## Folder Structure (one per offering)

```
Level_4_Offering_Briefs/
  1_Community-Entry/
    Community-Entry_Brief_CX4.md     ← primary intelligence file
    Project_Overview_CX4.md
    Research_Synthesis_CX4.md
    Success_Criteria_CX4.md
    Decision_Log_CX4.md
    Delivery_Notes_CX4.md
    [phase subfolders for SDD workflow work]
```

Use `_OFFERING_BRIEF_TEMPLATE/` as the starting point when creating a new offering folder.

---

## What Each Offering Brief Contains

**Primary file (`[Offering]_Brief_CX4.md`):**
- Strategic positioning (problem solved, who it's for, transformation promise, UVP, pricing)
- Offering structure (modules/sessions, delivery method, timeline)
- Success metrics (outcomes, business impact)

**Companion files:**
- `Project_Overview_CX4.md` — High-level project identity and current status
- `Research_Synthesis_CX4.md` — Summarized research findings informing the offering
- `Success_Criteria_CX4.md` — Measurable outcomes defining completion
- `Decision_Log_CX4.md` — Key decisions and their rationale
- `Delivery_Notes_CX4.md` — Operational notes for production and delivery

---

## Note on Lifecycle

Offering Briefs are living reference documents. Version numbers track evolution; no formal Baseline gate applies. If a offering reaches the point of requiring a formal specification (e.g., before building a Workflow), that Specification lives in `3_AI_&_Human_Capabilities/8_Specifications/` — not here.
