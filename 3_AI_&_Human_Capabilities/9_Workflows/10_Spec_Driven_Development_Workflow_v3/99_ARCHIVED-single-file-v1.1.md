# Spec-Driven Development Workflow v1.1

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Multi-step workflow pattern for standardized processes
**Status:** Final

---

**Version:** 1.1
**Created:** 2026-02-08
**Updated:** 2026-02-08 (Interview refinements)
**Purpose:** Orchestrate large-scale content creation and development projects using parallel subagents, persistent specs, and systematic refinement

---

## Overview

Spec-Driven Development is a **5-phase workflow** for managing complex projects that involve multiple files, unclear requirements, or require research into external systems. Instead of treating Claude as a solo implementer, you act as **Product Owner**, Claude acts as **Tech Lead/Orchestrator**, and subagents act as **Developers**.

### Core Principle

> "Write the spec first, refine through interview, then implement with isolated subagents referencing the spec as source of truth."

This workflow excels at:
- **Course development**: Creating multi-module courses with interconnected content
- **Toolkit creation**: Building comprehensive resource libraries with cross-references
- **Lead magnet generation**: Extracting and repurposing content at scale
- **Content migrations**: Updating existing materials with new frameworks or structures
- **Research synthesis**: Analyzing multiple sources to create unified resources

---

## The Five Phases

### Phase 1: Research with Parallel Subagents

**Goal:** Gather comprehensive understanding before making decisions

**When to use:**
- You need to understand external systems (frameworks, existing courses, competitor content)
- The project requires analyzing multiple sources simultaneously
- You're learning a new domain while implementing

**How it works (Collaborative Approach):**
1. **Claude proposes research plan**: Based on your goal, Claude identifies research areas and proposes which subagents to spawn
2. **You approve or refine**: Review the plan, adjust focus areas, confirm approach
3. **Parallel research execution**: Claude spawns approved subagents, each investigating independently
4. **Synthesis and report**: Each agent reports findings, Claude consolidates into unified understanding

**Prompt Pattern (Collaborative):**
```
You have access to [source materials]. Your goal is to write a comprehensive
report on [topic]. First, propose a research plan: how many subagents, what
each will investigate, and why. Wait for my approval before spawning agents.
```

**Alternative Pattern (If you want to specify):**
```
You have access to [source materials]. Your goal is to write a comprehensive
report on [topic]. Spin up multiple subagents for your research task, with
each agent investigating a different aspect: [aspect 1], [aspect 2], etc.
```

**Example for Course Development:**
```
You have access to our existing course materials and the top 3 competitor courses
I've saved. Your goal is to write a report on effective AI course structure for
beginners. Spin up multiple subagents for research:
- Agent 1: Analyze our existing course structure and progression
- Agent 2: Research competitor course A's module breakdown and pacing
- Agent 3: Research competitor course B's engagement techniques
- Agent 4: Analyze competitor course C's assessment methods
- Agent 5: Synthesize best practices across all sources
```

**Example for Toolkit Creation:**
```
You have access to the draft content pieces I've created. Your goal is to write
a report on how to structure these into a cohesive toolkit. Spin up subagents:
- Agent 1: Analyze the mental models and identify themes
- Agent 2: Map dependencies between pieces
- Agent 3: Research navigation patterns from successful toolkits
- Agent 4: Identify gaps in coverage
- Agent 5: Propose organizational structure
```

---

### Phase 2: Spec Creation

**Goal:** Create persistent source of truth before any implementation

**When to use:**
- After research phase completes
- Before making any files or changes
- When you need a recovery point if context gets polluted

**How it works:**
1. Claude synthesizes research into comprehensive spec document
2. Spec includes: architecture overview, implementation phases, file structure, dependencies
3. Saved to working files or project docs
4. Becomes reference for all subagents during implementation

**Prompt Pattern:**
```
Based on the research, write a comprehensive specification document for [project].
Save it to [location]. Include:
- Part 1: [Research findings summary]
- Part 2: [Current state analysis]
- Part 3: [Implementation plan with phases]
- Part 4: [Completion checklist with all deliverables]
```

**Example for Course Development:**
```
Based on the research, write a comprehensive course development specification
for "AI Mastery for Beginners". Save it to 6_Session_Working_Files. Include:
- Part 1: Best practices synthesis from research
- Part 2: Current course asset inventory
- Part 3: Module-by-module development plan (6 phases)
- Part 4: Completion checklist with all module files, assessments, and resources
```

**Example for Lead Magnet Creation:**
```
Based on the toolkit analysis, write a specification for extracting 5 lead
magnets from our AI Mastery Toolkit. Save it to 6_Session_Working_Files. Include:
- Part 1: Content mapping (what toolkit sections map to which lead magnets)
- Part 2: Target audience and value proposition for each magnet
- Part 3: Extraction and adaptation plan (5 phases, one per magnet)
- Part 4: Checklist of all deliverables (PDFs, landing pages, email sequences)
```

---

### Phase 3: Spec Refinement via Interview

**Goal:** Surface ambiguities and design decisions before they become problems

**When to use:**
- After spec is created but before implementation begins
- When requirements are unclear or could go multiple directions
- To align on quality standards, tone, depth, or technical approach

**How it works:**
1. You request Claude use AskUserQuestion tool to interview you about the spec
2. Claude asks clarifying questions (e.g., conflict resolution strategies, target audience assumptions, scope boundaries)
3. You answer questions
4. Claude updates spec with refined decisions
5. Repeat if needed for additional research or refinement

**Prompt Pattern:**
```
Use the AskUserQuestion tool. Review @[spec-file] and ask me clarifying
questions before we implement. Focus on [areas of uncertainty]. We want
to improve the spec to avoid issues during implementation.
```

**Example for Course Development:**
```
Use the AskUserQuestion tool. Review @course-spec.md and ask clarifying questions:
- Should we include hands-on exercises in every module or only key modules?
- What's the target completion time per module?
- Should assessments be knowledge checks or applied projects?
- What tone should we use (casual vs. professional)?
```

**Example for Toolkit Creation:**
```
Use the AskUserQuestion tool. Review @toolkit-spec.md and ask about:
- Should navigation be folder-based, tag-based, or both?
- What's the balance between comprehensive coverage vs. quick wins?
- Should we optimize for linear progression or random access?
- How much cross-referencing is too much?
```

**Advanced Pattern - Domain Research:**
```
We want to use best practices from [external system]. You have access to
[source repo/documentation]. Spin up multiple subagents to research how
they solve [specific problem], then update the spec with those patterns.
```

---

### Phase 4: Implementation with Task Delegation

**Goal:** Execute the spec with parallel subagents while keeping main context lean

**When to use:**
- After spec is finalized and questions answered
- For projects with 5+ independent deliverables
- When you want persistent progress tracking across sessions

**How it works:**
1. Main agent (Claude as orchestrator) delegates each task to a subagent
2. Each subagent gets fresh context window focused only on its specific task
3. Subagent reads spec + relevant files, implements, returns
4. Main agent tracks progress and manages dependencies
5. (Optional) Atomic commits after each task for rollback capability

**Prompt Pattern:**
```
Implement @[spec-file]. Use the Task tool [if available] and delegate each
deliverable to a subagent. You are the main agent/orchestrator, and your
subagents are your developers. Ensure each subagent references the spec
for consistency.
```

**For Cowork Mode (using TodoWrite):**
```
Implement @[spec-file]. Create a todo list with all deliverables. Execute
using parallel subagents where possible, sequential for dependencies.
Mark each task complete as subagents finish.
```

**Example for Course Development:**
```
Implement @ai-course-spec.md. Create a todo list with all 6 modules. Use
parallel subagents to develop modules that don't depend on each other:
- Subagent 1: Module 1 content, exercises, assessment
- Subagent 2: Module 2 content, exercises, assessment
- Subagent 3: Module 3 content, exercises, assessment
After completion, use sequential subagents for dependent modules.
```

**Example for Lead Magnet Creation:**
```
Implement @lead-magnet-spec.md. Create todo list with 5 lead magnets.
Use parallel subagents to create all 5 simultaneously:
- Subagent 1: "10 AI Prompts for Beginners" PDF
- Subagent 2: "AI Mental Models Cheat Sheet" PDF
- Subagent 3: "Deliberate Practice Tracker" spreadsheet
- Subagent 4: "SuperContext Quick Start" guide
- Subagent 5: "Prompt Library Starter Pack"
```

---

### Phase 5: Verification and Quality Assurance

**Goal:** Ensure deliverables meet quality standards before human review

**When to use:**
- After implementation phase completes
- For user-facing deliverables (courses, lead magnets, public toolkits)
- When consistency across outputs is critical
- Before final delivery to stakeholders

**How it works:**
1. Spawn a dedicated verification subagent
2. Subagent checks deliverables against spec and quality criteria
3. Creates verification report identifying issues
4. If issues found, create focused fix tasks for implementation subagents
5. Re-verify after fixes

**What verification subagent checks:**
- **Completeness**: All spec checklist items delivered?
- **Consistency**: Tone, terminology, formatting uniform across deliverables?
- **Quality**: Content meets standards (no typos, broken links, missing sections)?
- **Spec adherence**: Deliverables match spec requirements?
- **Cross-references**: All internal links work? Cross-references accurate?
- **User experience**: Navigation clear? Content flows logically?

**Prompt Pattern:**
```
All implementation tasks are complete. Spawn a verification subagent to check
deliverables against @[spec-file]. The subagent should create a verification
report covering: completeness, consistency, quality, and spec adherence.
If issues are found, create fix tasks.
```

**Example for Course Verification:**
```
All 6 modules are complete. Spawn a verification subagent to check:
- All learning objectives from spec are covered
- Exercises align with module content
- Assessments test the right concepts
- Tone and difficulty are consistent across modules
- All cross-references between modules work
- Resource lists are complete

Create a verification report. If issues found, prioritize by severity.
```

**Example for Lead Magnet Verification:**
```
All 5 lead magnets are complete. Spawn a verification subagent to check:
- Each magnet is truly standalone (no broken references)
- Formatting is professional and consistent
- All CTAs and links are present and correct
- File sizes are appropriate for download
- Branding is consistent across all magnets

Report any issues and suggest fixes.
```

**Why this matters:**
- **Catches inconsistencies** that arise when multiple subagents work in parallel
- **Reduces human review time** by filtering out issues before you see deliverables
- **Maintains standards** across large projects where quality can drift
- **Provides confidence** that deliverables are ready for use

**Cost-benefit:**
- Time investment: 5-10 minutes for verification
- Issues caught: Typically 3-8 per large project
- Time saved: 30-60 minutes of manual review and rework

---

## Orchestrator Role (Your Responsibility)

As the human orchestrator, you:

1. **Set Direction**: Define the high-level goal and success criteria
2. **Provide Context**: Share source materials, audience insights, quality standards
3. **Answer Questions**: Respond to interview questions in Phase 3
4. **Make Decisions**: Choose between approaches when subagents surface options
5. **Quality Control**: Review deliverables and request refinements
6. **Course Correct**: Adjust spec if implementation reveals new requirements

**You do NOT:**
- Write detailed prompts for every step (the spec handles that)
- Review every file change (trust the process, spot-check outputs)
- Micromanage subagent work (let them reference spec and work independently)

---

## Main Agent Role (Claude as Tech Lead)

As orchestrator, Claude:

1. **Spawns Research Agents**: Delegates parallel investigation in Phase 1
2. **Synthesizes Research**: Creates unified spec from agent findings
3. **Conducts Interview**: Uses AskUserQuestion to surface ambiguities
4. **Manages Tasks**: Creates task list and delegates to subagents
5. **Tracks Progress**: Monitors dependencies and completion status
6. **Ensures Consistency**: Verifies all subagents reference the spec
7. **Reports Status**: Summarizes what was completed, not implementation details

**Main agent does NOT:**
- Implement everything alone (defeats the purpose)
- Accumulate full context (stays lean by delegating)
- Make unilateral decisions on ambiguities (interviews you first)

---

## Subagent Role (Developers)

Each subagent:

1. **Starts Fresh**: Gets clean context window for focused work
2. **Reads Spec**: References specification as source of truth
3. **Reads Relevant Files**: Only loads what's needed for its specific task
4. **Implements**: Creates or modifies deliverables per spec
5. **Returns**: Reports completion to orchestrator

**Subagents do NOT:**
- Access full project context (too expensive)
- Make architectural decisions (spec already defined these)
- Work on multiple tasks (one task per subagent for isolation)

---

## When to Use This Workflow

###  Excellent For:

**Large content projects** (5+ deliverables)
- Multi-module courses
- Comprehensive toolkits
- Content library migrations
- Multi-format lead magnet suites

**Research-heavy projects**
- Analyzing competitor content
- Synthesizing multiple frameworks
- Learning new domain while creating

**Unclear requirements**
- You know the goal but not the exact approach
- Multiple valid paths exist
- Audience needs aren't fully defined yet

**Quality-critical work**
- Deliverables going to paying customers
- Community-facing resources
- Lead magnets for acquisition

###  Overkill For:

- Single document creation
- Small edits to existing content
- Well-defined simple tasks
- Quick experiments or drafts

---

## Comparison: Traditional vs Spec-Driven

| Aspect | Traditional Prompting | Spec-Driven Development |
|--------|----------------------|------------------------|
| **Flow** | Prompt → Output → Edit → Repeat | Research → Spec → Interview → Parallel Implementation |
| **Context** | Fills with iterations | Main thread stays lean |
| **Memory** | Lost between sessions | Spec persists as truth |
| **Parallelization** | Sequential bottleneck | True parallel execution |
| **Quality** | Inconsistent between outputs | Spec ensures consistency |
| **Recovery** | Start over if derailed | Return to spec document |
| **Completion** | Ambiguous stopping point | Clear checklist |

---

## Prompt Library: Essential Patterns

### Starting Phase 1 (Research)
```
You have access to [sources]. Your goal is to write a comprehensive report
on [topic]. Spin up multiple subagents for your research task, with each
investigating: [list specific aspects].
```

### Deepening Research
```
Research longer and improve the [report/spec]. Focus especially on [area].
```

### Starting Phase 2 (Spec Creation)
```
Based on the research, write a comprehensive specification for [project].
Save to 6_Session_Working_Files/[name]-spec.md. Include [required sections].
```

### Starting Phase 3 (Interview)
```
Use the AskUserQuestion tool. Review @[spec] and ask clarifying questions
before we implement. Focus on [uncertainty areas].
```

### Domain-Specific Research During Interview
```
We want to use patterns from [external source]. You have access to [location].
Spin up subagents to research how they solve [problem], then update the spec.
```

### Starting Phase 4 (Implementation)
```
Implement @[spec]. Create a todo list with all deliverables. Use parallel
subagents where possible. You are the orchestrator; subagents are developers.
```

### Starting Phase 5 (Verification)
```
All implementation tasks complete. Spawn a verification subagent to check
deliverables against @[spec]. Report: completeness, consistency, quality,
spec adherence. If issues found, create fix tasks and prioritize by severity.
```

### Requesting Summary (Not Details)
```
Summarize what you completed. Don't give me verbose explanations of every
change—just report what was done.
```

---

## Context Management Strategy

### Main Thread Token Budget

Target: Keep main orchestrator thread under 60% context

**What lives in main thread:**
- High-level project goal
- Spec document (pinned/referenced)
- Task list and status updates
- User answers from interview phase
- Brief completion summaries from subagents

**What stays OUT of main thread:**
- Full source code unless reviewing
- Detailed implementation explanations
- Verbose file-by-file descriptions
- Error traces (unless blocking progress)

### Subagent Token Budget

Each subagent starts fresh: 100% available context

**What subagent loads:**
- The spec document (referenced via @spec)
- Specific files needed for its task (2-5 typically)
- Any dependencies from completed tasks
- User guidance relevant to its deliverable

**Result:** Main thread orchestrates 10-20 subagents while staying under 70% context usage

---

## Real-World Examples

### Example 1: Building a 6-Module Course

**Phase 1 - Research (15 min)**
- 4 parallel agents analyze competitor courses + your existing materials
- Output: Research report identifying gaps, pacing issues, engagement patterns

**Phase 2 - Spec Creation (10 min)**
- Claude writes course-spec.md with module breakdown, learning objectives, assessment strategy

**Phase 3 - Interview (10 min)**
- Claude asks: Exercise frequency? Video vs text? Depth per module?
- You answer, spec updates with decisions

**Phase 4 - Implementation (45 min)**
- 6 parallel subagents create modules simultaneously
- Each produces: content doc, exercise sheet, assessment, resources list
- Main thread tracks progress, stays at 55% context

**Total: ~90 minutes for complete 6-module course** vs. 6-8 hours traditional sequential approach

---

### Example 2: Extracting 10 Lead Magnets from Toolkit

**Phase 1 - Research (10 min)**
- 3 parallel agents: analyze toolkit structure, identify self-contained sections, map to audience pain points

**Phase 2 - Spec Creation (5 min)**
- Claude writes lead-magnet-extraction-spec.md mapping 10 toolkit sections to standalone magnets

**Phase 3 - Interview (5 min)**
- Claude asks: Format preferences? Landing page needed per magnet? Email sequence length?

**Phase 4 - Implementation (30 min)**
- 10 parallel subagents extract and adapt content simultaneously
- Each produces: PDF, social media copy, landing page outline
- Main thread: 50% context while coordinating 10 agents

**Total: ~50 minutes for 10 lead magnets** vs. 5-8 hours sequential

---

### Example 3: Migrating Toolkit Structure

**Phase 1 - Research (20 min)**
- 5 parallel agents audit current structure, identify broken links, map cross-references, analyze navigation patterns

**Phase 2 - Spec Creation (15 min)**
- Claude writes migration-spec.md with 5 phases: link integrity, cross-references, navigation, completeness, formatting

**Phase 3 - Interview (10 min)**
- Claude asks: Should we add progress tracking? Estimated reading times? How much cross-linking?

**Phase 4 - Implementation (60 min)**
- 5 parallel subagents execute each phase
- 621 improvements across 30+ files
- Main thread orchestrates at 65% context

**Total: ~105 minutes for comprehensive migration** vs. multiple days sequential

*(Note: This is the V3 Integration we just completed)*

---

## Advanced: Multi-Session Projects

For projects spanning multiple days:

1. **Create Spec First Day**: Research + Spec + Interview phases
2. **Pin the Spec**: Reference it at start of each new session
3. **Resume with Context**: "We're implementing @[spec]. Here's where we left off: [completed tasks]. Continue with: [next phase]."
4. **Spec as Recovery**: If session derails, start fresh with spec pinned

**Future Enhancement:** Claude Code's Task System allows:
```bash
CLAUDE_CODE_TASK_LIST_ID=project-name claude
```
Tasks persist to `.claude/tasks/` as JSON, enabling true multi-day coordination with dependency tracking.

---

## Quality Control: Backpressure Mechanisms

### Automated Validation (If using git + hooks)

```bash
# .husky/pre-commit (example)
npm run lint && npm run test && npm run build
```

When subagent tries to commit:
1. Hook runs automatically
2. Tests/linting catch issues
3. Commit rejected if failures
4. Subagent sees errors, self-corrects
5. Only successful work proceeds

**Result:** You focus on strategy; system validates quality

### Manual Spot-Checking (For content projects)

Instead of reviewing every file:
1. Check 1-2 deliverables from each subagent
2. If quality is good, trust the rest (spec ensures consistency)
3. If quality is off, refine spec and re-run that agent
4. Spot-check final outputs for user-facing polish

---

## Common Pitfalls and Solutions

### Pitfall 1: Skipping Phase 3 (Interview)

**Symptom:** Subagents make inconsistent assumptions, outputs need rework

**Solution:** Always use AskUserQuestion to surface ambiguities before implementation. 10 minutes of interview saves hours of rework.

---

### Pitfall 2: Main Agent Doing Implementation

**Symptom:** Main thread context fills up, agent starts missing requirements

**Solution:** Explicitly state "delegate each task to a subagent" and "you are the orchestrator, not implementer"

---

### Pitfall 3: Vague Spec

**Symptom:** Subagents ask clarifying questions mid-implementation, breaking flow

**Solution:** Spec should include: what to build, quality standards, file locations, dependencies, examples of desired output

---

### Pitfall 4: Over-Parallelization

**Symptom:** Dependent tasks start before prerequisites complete, causing errors

**Solution:** Identify dependencies in spec. Use "parallel where possible, sequential where dependencies exist"

---

### Pitfall 5: No Recovery Plan

**Symptom:** Session derails, context pollutes, lose progress

**Solution:** Spec document IS the recovery plan. Start new session, pin spec, resume from last completed task.

---

## Measuring Success

### Primary Metric: Scalability
- **Project scope enabled:** Can you now complete projects that would have been impossible manually?
- **Deliverable count:** How many parallel outputs can you orchestrate simultaneously? (5? 10? 20?)
- **Sustained throughput:** Can you maintain this pace across multiple large projects without burning out?
- **Complexity handling:** Can you tackle multi-phase projects with 15+ interconnected files?

### Efficiency Metrics
- **Time to completion:** Compare to sequential approach (typically 3-5x faster)
- **Context usage:** Main thread should stay under 70% even for large projects
- **Rework rate:** Percentage of subagent outputs that need refinement (target: <20%)

### Quality Metrics
- **Consistency:** Do all deliverables feel like they're from the same source?
- **Completeness:** Does the spec's checklist match final deliverables?
- **Verification effectiveness:** How many issues caught in Phase 5 before human review?
- **User satisfaction:** Do deliverables solve the original problem?

### Process Metrics
- **Interview effectiveness:** Did Phase 3 surface issues before implementation?
- **Spec accuracy:** Did subagents successfully follow spec without clarification?
- **Recovery capability:** Could you resume work in a new session using the spec?

---

## Next Steps: Building This Skill

### Stage 1: Understanding (Conceptual)
-  Read this workflow document
-  Understand the 5 phases
-  See examples relevant to your work

### Stage 2: Guided Practice (With Support)
- Try the workflow on a medium project (3-5 deliverables)
- Claude guides you through each phase explicitly
- Debrief after: what worked, what was confusing

### Stage 3: Independent Use (Systematic)
- Use the workflow on large projects without prompting
- Adapt patterns to new project types
- Refine your personal prompt library

### Stage 4: Teaching Others (Mastery)
- Document your variations
- Create case studies from your projects
- Build training materials for the academy

---

## Refinement Log

**v1.0 (2026-02-08):** Initial workflow based on [alexop.dev article](https://alexop.dev/posts/spec-driven-development-claude-code-in-action/), adapted for content creation, course development, and toolkit building use cases.

**v1.1 (2026-02-08):** Refined through interview process. Key changes:
-  Expanded from 4 phases to **5 phases** - added Phase 5: Verification and Quality Assurance
-  Updated Phase 1 to **Collaborative approach** - Claude proposes research plan before spawning agents
-  Clarified primary success metric: **Scalability** (handling projects impossible manually)
-  Confirmed use cases: Full courses, toolkits, and lead magnet extraction/creation
-  Added cost-benefit analysis for verification phase
-  Enhanced prompt patterns with collaborative variants

**Next:** Use on real project to validate workflow and capture learnings

---

## Interview Answers (v1.1 Refinement)

*Completed using AskUserQuestion tool:*

1. [] **Project types**: Full courses (multi-module), Toolkits and resource libraries, Lead magnet extraction/creation
2. [] **Phase 1 approach**: Collaborative - Claude proposes research plan first, waits for approval
3. [ ] **Spec location**: TBD - to be determined through practice (default: 6_Session_Working_Files)
4. [] **Verification phase**: Yes - Added as Phase 5 with quality gates for consistency, completeness, and spec adherence
5. [ ] **Edge cases**: TBD - will refine threshold guidance through practice
6. [] **Success metric**: Scalability (enabling projects that would be impossible manually)

---

*This workflow is a living document. As you use it, capture what works and what doesn't. Update this doc with your learnings.*
