# 8_Specifications — Index

**Last Updated:** 2026-02-28
**Total Files:** 14
**Purpose:** Quick-scan index for the 8_Specifications capability folder. Includes the living specification register — all baselined toolkit specifications with their status, governed artifacts, and next review triggers.

---

## Navigation

- `README.md` — Folder overview, position in the learning path, and the 6-phase lifecycle summary

---

## Standard

- `Specification_Document_Standard_SCHEMA.md` — Canonical schema defining all required sections, field definitions, and quality gates for every specification in the toolkit

---

## Template

- `Specification_Document_TEMPLATE.md` — Blank fill-in template conforming to the schema; copy this as the starting point for every new specification

---

## Examples

- `Specification_Companion_Course_EXAMPLE.md` — Fully worked specification for the AI Mastery Toolkit Companion Course; use as a reference when building your first specification

---

## Baselined Specifications — Living Register

*All specifications listed below are at Phase 6 (Baselined) as of their baseline date. This register is updated when: a new specification is baselined, an existing specification increments version, or a specification's status changes.*

| File | Version | Baseline Date | Governed Framework | Governed Workflow | Next Review Trigger |
|---|---|---|---|---|---|
| `01_Session_Rhythm_Specification_v1.0.md` | v1.0 | 2026-02-28 | `7_Frameworks/01_Session_Rhythm_Framework.md` | `9_Workflows/01_Session_Rhythm_Workflow.md` | When session operations are materially updated |
| `02_Context_Architecture_Specification_v1.0.md` | v1.0 | 2026-02-28 | `7_Frameworks/02_Context_Architecture_Framework.md` | `9_Workflows/02_Context_Architecture_Workflow.md` | When context operations are materially updated |
| `03_Toolkit_Integrity_Specification_v1.0.md` | v1.0 | 2026-02-28 | `7_Frameworks/03_Toolkit_Integrity_Framework.md` | `9_Workflows/03_New_Tool_Evaluation_Workflow.md` | When audit operations are updated or gate requires a new category |
| `04_Toolkit_Evolution_Specification_v1.0.md` | v1.0 | 2026-02-28 | `7_Frameworks/04_Toolkit_Evolution_Framework.md` | `9_Workflows/04_Toolkit_Evolution_Workflow.md` | When capability-evolution is updated or three-output standard is extended |
| `05_Strategic_Navigation_Specification_v1.0.md` | v1.0 | 2026-02-28 | `7_Frameworks/05_Strategic_Navigation_Framework.md` | `9_Workflows/05_Strategic_Navigation_Workflow.md` | When any chain operation's handoffs change |
| `06_OKR_Operating_System_Specification_v1.0.md` | v1.0 | 2026-02-28 | `7_Frameworks/06_OKR_Operating_System_Framework.md` | `9_Workflows/06_OKR_Operating_System_Workflow/` | When okr-builder is updated or a new annual cycle begins |
| `07_Compound_Content_Architecture_Specification_v1.0.md` | v1.0 | 2026-02-28 | `7_Frameworks/07_Compound_Content_Architecture_Framework.md` | `9_Workflows/07_Compound_Content_Architecture_Workflow.md` | When content-vector Operation is materially updated |
| `08_Mid_Session_Operations_Specification_v1.0.md` | v1.0 | 2026-02-28 | `7_Frameworks/08_Mid_Session_Operations_Framework.md` | `9_Workflows/08_Mid_Session_Operations_Workflow.md` | When any mid-session operation is updated or drift threshold is revised |
| `10_Spec_Driven_Development_Specification_v1.0.md` | v1.0 | 2026-02-28 | *(SDD workflow IS the framework)* | `9_Workflows/10_Spec_Driven_Development_Workflow_v3/` | When SDD workflow advances to v4 |

---

## Register Maintenance Protocol

This register is a living artifact. Update it when:

1. **New specification baselined** — add a row with all columns populated
2. **Specification version incremented** — update the Version column and note the change in the specification's own Review Log
3. **Specification status changes** — if a specification is deprecated or superseded, update its row and add a note; do not delete rows

The register does not require a separate session — it is updated as part of the `ending-master-update` in the session that baselines or updates the specification.

---

## Related

- **Guide:** [2_How_To_Guides/8_Specifications_Guide_v1.0.md](../../2_How_To_Guides/8_Specifications_Guide_v1.0.md)
- **Upstream:** [7_Frameworks/](../7_Frameworks/) — Conceptual models that inform specification scope
- **Downstream:** [9_Workflows/](../9_Workflows/) — Procedural design built from baselined specifications
