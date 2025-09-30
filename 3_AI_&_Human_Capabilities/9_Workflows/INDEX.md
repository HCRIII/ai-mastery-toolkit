# Workflows — INDEX
**AI Mastery Toolkit v4**
**Last updated:** 2026-02-27

---

## Purpose

Workflow files are the procedural guides for each operational cluster — step sequences, trigger conditions, inputs, outputs, and failure modes. Every workflow has a paired framework in `7_Frameworks/` that provides the conceptual foundation. The same `##_` prefix connects paired files across both folders.

---

## Core System Workflows (01–08)

| File | Covers | Framework Pair |
|------|--------|---------------|
| [01_Session_Rhythm_Workflow.md](01_Session_Rhythm_Workflow.md) | Session, daily, and weekly cadence execution | `7_Frameworks/01_Session_Rhythm_Framework.md` |
| [02_Context_Architecture_Workflow.md](02_Context_Architecture_Workflow.md) | Diagnosis and response for three context failure modes | `7_Frameworks/02_Context_Architecture_Framework.md` |
| [03_New_Tool_Evaluation_Workflow.md](03_New_Tool_Evaluation_Workflow.md) | Five-step quality gate for proposed new tools | `7_Frameworks/03_Toolkit_Integrity_Framework.md` |
| [04_Toolkit_Evolution_Workflow.md](04_Toolkit_Evolution_Workflow.md) | Full pattern lifecycle: capture → assess → formalize → deploy | `7_Frameworks/04_Toolkit_Evolution_Framework.md` |
| [05_Strategic_Navigation_Workflow.md](05_Strategic_Navigation_Workflow.md) | Strategic chain execution by frequency (annual/quarterly/on-demand) | `7_Frameworks/05_Strategic_Navigation_Framework.md` |
| [06_OKR_Operating_System_Workflow.md](06_OKR_Operating_System_Workflow.md) | Mode selection and execution for all four okr-builder modes | `7_Frameworks/06_OKR_Operating_System_Framework.md` |
| [07_Compound_Content_Architecture_Workflow.md](07_Compound_Content_Architecture_Workflow.md) | Pre-production sequence and production session for content-vector | `7_Frameworks/07_Compound_Content_Architecture_Framework.md` |
| [08_Mid_Session_Operations_Workflow.md](08_Mid_Session_Operations_Workflow.md) | Signal-to-operation decision table and integration guidance | `7_Frameworks/08_Mid_Session_Operations_Framework.md` |

---

## Production and Asset Workflows (10–11)

| File | Covers | Notes |
|------|--------|-------|
| [10_Spec_Driven_Development_Workflow_v3/](10_Spec_Driven_Development_Workflow_v3/) | Spec-driven development process | Active version; v1 and v2 archived to `_Archive/`. |
| [11_Asset_Management_Workflow.md](11_Asset_Management_Workflow.md) | Asset management across the toolkit | — |

---

## Templates and Reference (90–93)

| File | Type |
|------|------|
| [90_TEMPLATE_Workflow_Design_Document_Template.md](90_TEMPLATE_Workflow_Design_Document_Template.md) | Template — workflow design document |
| [91_TEMPLATE_Prompt_Library_Template.md](91_TEMPLATE_Prompt_Library_Template.md) | Template — prompt library structure |
| [92_Asset_Index_Template.md](92_Asset_Index_Template.md) | Template — asset index |
| [93_State_Schema_Examples.md](93_State_Schema_Examples.md) | Reference — state schema examples |

---

## Archive

| Location | Contents |
|----------|----------|
| [_Archive/](\_Archive/) | `Spec_Driven_Development_Workflow_v1/` (legacy), `Spec_Driven_Development_Workflow_v2/` (legacy) |

---

## Naming Convention

- All workflow files: `##_TitleCase_Name_Workflow.md`
- Prefix range `01–08`: core system workflows (paired with `7_Frameworks/` counterpart at matching prefix)
- Prefix range `10–19`: production and asset workflows (no framework pair required)
- Prefix range `90–99`: templates and reference material (sort to bottom)
- The paired framework file is named in the workflow's **Framework Document** section; the workflow file is named in the framework's **Procedural Counterpart** section
