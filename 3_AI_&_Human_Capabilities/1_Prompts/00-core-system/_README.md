# 00-core-system

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Proven prompt pattern with examples and usage guidance
**Status:** Final

---

**Purpose:** Session management and system workflows
**Total:** 25 prompts across 4 subcategories (flat structure)

---

## Overview

Core_System contains prompts for managing AI sessions, accelerating workflows, and executing multi-step processes. These are the foundational prompts that support your deliberate practice and systematic workflow.

**Key Principle:** This category contains ONLY system operations prompts. Domain-specific prompts (client work, academy, business) are in their respective categories.

---

## Structure

### Session Operation Prompts (17 active prompts)
Session lifecycle management from start to finish — all prompts are at the `00-core-system/` level (flat structure).

**Beginning:**
- `session-startup` - Comprehensive session initialization with full context loading  START HERE
- `beginning-document-review-and-implementation` - Start with document review and implementation planning
- `daily-briefing` - Daily session briefing with current priorities

**Mid-Session:**
- `context-usage` - Quick check of current context window usage
- `mid-challenge-my-thinking` - Request critical evaluation of your approach
- `mid-iterate-on-output` - Refine and improve generated content
- `mid-reusable-asset-creation` - Extract reusable components from work
- `mid-system-change-with-rationale` - Document system changes with reasoning
- `responding-to-user-corrections` - Behavioral pattern for overcomplicated feedback

**Ending & Maintenance:**
- `daily-debriefing` - Session debrief with coaching feedback  **FIRST at end**
- `ending-master-update` - Comprehensive update of all tracking systems (end second)
- `checkpoint-update` - Mid-session or milestone checkpoint capture
- `weekly-review` - Weekly pattern extraction
- `context-window-handoff` - Transfer to new context window
- `post-compaction-refresh` - Recovery protocol after context compaction
- `assess-hvna` - High-value next action assessment
- `ip-assessment` - IP uniqueness verification and refinement roadmap

**Slash Commands:** `/session-startup`, `/daily-briefing`, `/mid-iterate-on-output`, `/daily-debriefing`, `/ending-master-update`, `/weekly-review`

---

### efficiency/ (2 prompts)
Workflow acceleration and optimization.

**Prompts:**
- `01-compound-approval-with-options` - Multiple decisions in single request
- `02-workflow-acceleration` - Speed through trusted patterns

**Pattern Integration:** Both implement Stage 3 patterns (Pre-structured Option Selection, Workflow Acceleration After Trust)

**Slash Commands:** `/compound-approval`, `/workflow-acceleration`

---

### workflow-chains/ (5 prompts)
Multi-step workflows combining prompts from multiple categories.

**Workflows:**
- `01-research-deep-dive-workflow` - Comprehensive research process
- `02-content-creation-pipeline-workflow` - Research to publication
- `03-client-project-lifecycle-workflow` - Project management workflow
- `05-iterative-document-approval` - Document refinement process
- `weekly-review` - GTD weekly review (60-90 min to 4-5 hours)

**Slash Commands:** `/research-deep-dive`, `/content-creation-pipeline`, `/client-project-lifecycle`, `/iterative-document-approval`, `/weekly-review`

---

### official-pattern-template/ (1 prompt)
Template for documenting systematic patterns.

**Purpose:** Create consistent documentation for Stage 3 patterns
**Integration:** Works with Human_Patterns_Capture system
**Slash Command:** `/official-pattern-template`

---

### suggest-pattern/ (1 prompt)
Identify and suggest emerging patterns from work.

**Purpose:** Extract patterns from practice for systematic reuse
**Integration:** Feeds into Pattern Index and Practice Tracker
**Slash Command:** `/suggest-pattern`

---

## Integration Points

### With Tracking Systems
Core_System prompts update these systems:
- **7_Daily_Session_Debriefs/** - Coaching feedback and observations  NEW
- **2_Super_Context_History/** - Context and progress tracking
- **3_Practice_Tracker_History/** - Prompt effectiveness and patterns
- **4_Session_Summaries_History/** - Session documentation
- **1_Personal_Preferences_History/** - Working preferences
- **Human_Patterns_Capture/** - Pattern documentation

### With Rest of Library
Workflow chains reference prompts from:
- `01-analysis/` - Research and evaluation prompts
- `02-creation/` - Content generation prompts
- `03-extraction/` - Insight extraction prompts
- `04-summarization/` - Summary prompts
- `14-client-work/` - Client deliverable prompts
- `15-academy/` - Academy content prompts

---

## Usage Guidelines

### Every Session
1. **Start:** Use a `beginning-*` prompt
2. **Work:** Use mid-session prompts as needed
3. **End:** Use `ending-master-update` or `ending-quick-update`

### Weekly
- **Friday/Sunday:** Run `weekly-review`
- Review patterns and update Context Card

### As Needed
- **Efficiency prompts:** When you have trusted patterns
- **Workflow chains:** For complex multi-step projects
- **Pattern prompts:** When extracting reusable practices

---

## Naming Convention

All prompts follow kebab-case naming for consistency with slash commands:
- Folders: `efficiency/`, `workflow-chains/` (session operation prompts are at the top level — flat structure)
- Prompts: `beginning-quick-start/`, `ending-master-update/`, `weekly-review/`
- Slash commands: `/beginning-quick-start`, `/ending-master-update`, `/weekly-review`

This enables direct 1:1 translation from folder name to slash command.

---

## What Does NOT Belong Here

**Not in Core_System:**
- Client-specific prompts → `14-client-work/`
- Academy content prompts → `15-academy/`
- Analysis prompts → `01-analysis/`
- Content creation prompts → `02-creation/`
- Business strategy prompts → `12-business-strategy/`

**Guideline:** If it's domain-specific rather than system-operational, it belongs in a functional category, not Core_System.

---

**Last Updated:** 2026-02-25
**Total Prompts:** 23 (17 session ops + 2 efficiency + 5 workflows + 1 pattern template)
**Convention:** kebab-case for slash command compatibility