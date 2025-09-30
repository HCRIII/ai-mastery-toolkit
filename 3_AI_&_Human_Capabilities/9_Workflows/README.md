# 9. Workflows

**Created:** 2026-02-13
**Last Updated:** 2026-02-28
**Purpose:** Overview and navigation for 9_Workflows capabilities
**Status:** Final

---

**Supplementary materials for Section 12: Workflows Guide**

This folder contains ready-to-use templates, examples, and libraries for designing orchestration workflows. Use these resources before building your workflow in n8n, Make, or any automation platform.

## Contents

### Templates

**[Workflow_Design_Document_Template.md](Workflow_Design_Document_Template.md)**
- Complete template for designing any workflow
- Sections: Overview, State Schema, Decision Logic, Prompts, Error Handling, Monitoring, Success Criteria
- Use markdown tables (no JSON) for non-technical designers
- Implementation checklist to verify design completeness
- **Use this:** Before building any workflow, fill this out completely

**[Prompt_Library_Template.md](Prompt_Library_Template.md)**
- Template for documenting each orchestration prompt in your workflow
- Sections: Purpose, Input/Output Requirements, Complete Prompt Text, Testing Samples, Edge Cases, Version History
- Includes complete worked example: Lead Warmth Classification Prompt
- Quality checks and confidence thresholds
- **Use this:** Create one document per AI decision in your workflow

### Examples

**[State_Schema_Examples.md](State_Schema_Examples.md)**
- Three complete, real-world state schema examples:
  - **Lead Processing Workflow** - Intake, classify, route B2B leads
  - **Content Creation Pipeline** - Generate, review, approve, publish content
  - **Customer Onboarding Process** - Multi-step setup over 5-7 days
- All shown in markdown tables (not JSON)
- Includes sample "complete state" showing actual data flowing through
- **Use this:** Pick the closest pattern and adapt for your workflow

### Complete Workflows

**[Spec_Driven_Development_Workflow_v1/](Spec_Driven_Development_Workflow_v1/)**
- **Purpose:** Continuous parallel production system for creating content at scale (courses, toolkits, lead magnets)
- **Key Innovation:** AI orchestrates multiple generation agents while you simultaneously review outputs, create media, and publish to platforms
- **Vision:** Build once, replicate 20x - create 20 courses simultaneously
- **Core Files:**
  - `README.md` - Overview and quick start
  - `phase-1-research.md` - Parallel research with reference implementations
  - `phase-2-spec-creation.md` - Comprehensive spec folder structure
  - `phase-3-interview-refinement.md` - Interview patterns and standards alignment
  - `phase-4-parallel-production.md` -  THE KEY FILE - Continuous parallel work
  - `phase-5-verification-feedback.md` - Quality gates and upward feedback to business IP
  - `production-queue-structure.md` - Folder setup and status tracking
  - `standards-integration.md` - How standards ensure quality at scale
  - `upward-feedback-protocol.md` - How project learnings refine business strategy
  - `orchestrator-prompts.md` - Complete prompt library for all phases
- **Integration:** Combines original SDD workflow + agent-os standards system + continuous parallel production model
- **Best For:** Large-scale content creation (5+ deliverables), multi-module courses, quality-critical work going to customers
- **Use this when:** You want to create 20 courses/modules/lead magnets simultaneously while maintaining quality through standards

## How to Use This Folder

### For Workflow Design

1. **Start with your workflow idea:** What problem does it solve?
2. **Pick a similar example:** Review State_Schema_Examples.md
3. **Design completely:** Fill in Workflow_Design_Document_Template.md
4. **Document each prompt:** Create one Prompt_Library_Template.md per AI decision
5. **Review with team:** Get buy-in before building

### For Implementation

- Use your completed design documents as spec sheet for engineers
- Reference the examples when explaining state structure to team
- Test each prompt separately before connecting to workflow

### For Maintenance

- Update Workflow_Design_Document_Template.md as you add steps
- Version control all prompts using Prompt_Library_Template.md
- Review State_Schema_Examples.md when troubleshooting state issues

## Structure Guide

**All files use markdown tables and structured text** (no JSON) because:
- Non-technical designers can read and understand
- Easier to compare different workflows
- Works with Google Docs, Notion, spreadsheets
- Actual JSON state lives in your database/automation platform

When your workflow runs in n8n/Make, it creates actual JSON state like the examples show. These templates help you design what that JSON should contain.

## Related Guide

**[9. Workflows Guide](../../2_How_To_Guides/9_Workflows_Guide.md)** - Complete conceptual guide covering:
- State schema design concepts
- Prompt engineering for orchestration
- Decision logic mapping
- Error handling strategies
- Monitoring & observability
- Alex workflow (complete worked example)

**Use the guide to understand concepts, use these templates to build workflows.**

## Key Sections in Each Template

### Workflow Design Document
- A. Workflow Basics (name, trigger, outcome, success metric)
- B. State Schema Design (identity, progress, data, decisions, metrics)
- C. Decision Logic Mapping (rules vs AI, decision tree)
- D. Prompts (one section per AI decision)
- E. Error Handling (failure points, prevention, recovery, fallbacks)
- F. Monitoring (real-time metrics, quality metrics, alerts)
- G. Success Criteria (must-have, should-have, nice-to-have)
- H. Implementation Checklist (before building)

### State Schema Examples
- Identity & Metadata fields (workflow_id, trigger_id, trace_id)
- Progress & Checkpoints (current_step, last_successful_checkpoint)
- Input/Output Data fields
- Decisions Made (classifications, scores, reasoning)
- Actions Taken (completed and pending)
- Metrics & Observability (cost, duration, tokens)

### Prompt Library Template
- Basic information (prompt ID, purpose, owner)
- Input requirements (what data is needed)
- Output requirements (exact JSON structure)
- Complete prompt text (copy-paste ready)
- Testing samples (3+ test cases with expected outputs)
- Quality checks and confidence thresholds
- Edge cases & fallbacks
- Performance metrics
- Version history
- Usage notes

## Quick Start

**New to workflow design?**
1. Read [9. Workflows Guide](../../2_How_To_Guides/9_Workflows_Guide.md) sections 1-3 (State, Prompts, Decisions)
2. Pick a similar example in State_Schema_Examples.md
3. Start filling in Workflow_Design_Document_Template.md

**Have a workflow idea?**
1. Adapt the closest example state schema
2. Complete the design document completely
3. Create one prompt library document per AI decision
4. Review with your team before building

**Building in n8n/Make?**
1. Use your completed design as specification
2. Reference state schema to understand data structure
3. Copy prompts from Prompt_Library_Template.md
4. Test error handling cases listed in design document

## Standards

**What makes a good workflow design?**
-  All state fields have clear purpose
-  Every decision is mapped (rule vs AI)
-  Prompts are tested with 5+ sample cases
-  Error handling covers all failure points
-  Monitoring metrics are defined
-  Success criteria are measurable
-  Implementation checklist is complete

**What indicates a design needs more work?**
-  Unclear what data needs to be tracked
-  Decisions are ambiguous
-  Prompts haven't been tested
-  No error handling plan
-  Can't measure success
-  Team doesn't understand state flow

## Related Sections

- **7. Frameworks** - Concepts behind workflow orchestration
- **10. Automations** - How to build in n8n/Make
- **11. Orchestration** - How to monitor & optimize live workflows

