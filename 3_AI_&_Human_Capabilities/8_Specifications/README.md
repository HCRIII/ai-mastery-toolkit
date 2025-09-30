# 8. Specifications

**Created:** 2026-02-28
**Last Updated:** 2026-02-28
**Purpose:** Overview, navigation, and context for the 8_Specifications capability folder
**Status:** Final

---

## What This Folder Is

This folder contains the standard-setting documents, templates, and examples for creating Specification Documents in the AI Mastery Toolkit. It is the working library for **Guide 8: Specifications** — the precision layer between Frameworks (Guide 7) and Workflows (Guide 9).

**Specifications are the document class that turns conceptual understanding into precise, executable requirements.** Before any workflow is designed, any automation is built, or any orchestration is configured, the system or deliverable it operates on must be specified: scoped, constrained, described in testable terms, reviewed, verified, validated, and baselined.

---

## Position in the Learning Path

```
[7_Frameworks]  →  [8_Specifications]  →  [9_Workflows]  →  [10_Automations]  →  [11_Orchestration]
  Think                 Define                  Build              Schedule              Coordinate
```

- **Frameworks (7)** give you mental models and vocabulary for AI coordination.
- **Specifications (8)** give you precise requirements for what you are coordinating.
- **Workflows (9)** give you step-by-step procedures for building it.

You cannot reliably build a workflow against an unspecified system. You cannot validate an orchestration against undefined success criteria. The specification is the contract that all downstream execution points back to.

---

## Contents

### Standard

**[Specification_Document_Standard_SCHEMA.md](Specification_Document_Standard_SCHEMA.md)**
The canonical definition of what every specification in this toolkit must contain. Includes all required sections, field-by-field definitions, quality criteria, and phase-gate requirements for moving from Define through Baseline. Read this once; reference it when reviewing specifications for completeness.

### Template

**[Specification_Document_TEMPLATE.md](Specification_Document_TEMPLATE.md)**
A blank, fill-in-the-blank version of the schema. Copy this as the starting point for every new specification. All fields are required in a baselined specification; the template makes clear which sections belong to which phase of the 6-phase lifecycle.
**Use this:** At the start of any specification project.

### Examples

**[Specification_Companion_Course_EXAMPLE.md](Specification_Companion_Course_EXAMPLE.md)**
A complete, worked specification for the AI Mastery Toolkit Companion Course — an active project in this toolkit. Shows all six phases populated with real decisions, real constraints, and real stakeholder requirements rather than illustrative placeholders.
**Use this:** As a reference when filling in your own template for the first time.

---

## The 6-Phase Specification Lifecycle

Every specification in this folder is produced through a consistent 6-phase lifecycle:

| Phase | Name | Purpose | Output |
|-------|------|---------|--------|
| 1 | Define | Scope, objectives, stakeholders, constraints | Scope definition |
| 2 | Research | Requirements gathering, system analysis | Structured findings |
| 3 | Specify | Write all requirements as testable statements | Draft specification |
| 4 | Review & Refine | Completeness, consistency, feasibility checks | Refined specification |
| 5 | Verify & Validate | Quality of the document + fitness of the requirements | Verification + validation reports |
| 6 | Baseline | Approve, version, place under change control | Baselined specification |

**Verification** asks: "Did we write the specification correctly?"
**Validation** asks: "Did we write the right specification?"
Both must pass before a specification is baselined.

---

## Related Guide

See **[8. Specifications Guide](../../2_How_To_Guides/8_Specifications_Guide_v1.0.md)** for complete documentation on the specification philosophy, the 4-stage AI mastery path, the 6-phase lifecycle in depth, and guidance on when to write a spec vs. proceed directly to a workflow.
