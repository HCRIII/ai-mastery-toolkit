# Phase 1: Research with Parallel Agents

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Multi-step workflow pattern for standardized processes
**Status:** Final

---

**Spec-Driven Development Workflow v1.1**

**Version:** 1.0
**Created:** 2026-02-10
**Purpose:** Deep guide to Phase 1 of SDD workflow—gathering comprehensive understanding through parallel research execution

---

## Overview

Phase 1 is where every successful SDD project begins. Before you write specifications, define implementations, or create deliverables, you need **comprehensive understanding** of your domain, audience, existing solutions, and success criteria.

Traditional approach: You think through the problem sequentially, potentially missing important aspects.

**SDD Phase 1 approach**: Spawn multiple research agents working in parallel, each investigating a different dimension of your project, then synthesize their findings into unified understanding.

### Core Principle

> "Gather comprehensive understanding first. Research is cheap; rework is expensive. Better to spend 20 minutes exploring unknowns than 6 hours implementing wrong assumptions."

---

## Purpose: Why Phase 1 Matters

Phase 1 accomplishes three critical objectives before any implementation begins:

### 1. **Reduces Implementation Risk**

When research agents investigate multiple dimensions simultaneously:
- **Gap identification**: What don't you know? What should you know?
- **Audience insights**: Who is this for? What do they actually need?
- **Existing patterns**: How have others solved similar problems?
- **Best practices**: What separates good solutions from great ones?

Result: Spec is written with confidence based on evidence, not guesswork.

### 2. **Enables Parallelization**

Traditional sequential research:
1. You investigate frameworks
2. You analyze competitor products
3. You review existing assets
4. You synthesize findings
= **2-4 hours of sequential work**

SDD parallel research:
1. Agent A investigates frameworks
2. Agent B analyzes competitors
3. Agent C reviews assets
4. Agent D identifies patterns
5. Agent E synthesizes findings
= **~30 minutes of parallel work**

### 3. **Creates Shared Context**

Research phase generates:
- **Research report**: Unified understanding artifact
- **Synthesis insights**: Consolidated findings across all agents
- **References document**: Source materials for spec refinement
- **Discovery artifacts**: Examples, patterns, templates to reference

This shared context becomes the foundation for Phase 2 (Spec Creation) and reference material for Phase 4 (Implementation).

---

## When to Use Phase 1

###  Definitely Use Phase 1 When:

**Understanding External Systems**
- Learning a new domain while implementing (e.g., "How do successful AI courses structure modules?")
- Analyzing competitor products or frameworks
- Reviewing multiple existing approaches before deciding yours
- Investigating best practices from authoritative sources

**Project Requires Multiple Perspectives**
- You need to understand different stakeholder viewpoints (instructor, student, administrator)
- Multiple research dimensions exist (market analysis, technical feasibility, design patterns)
- Your project involves synthesizing multiple information sources

**Learning While Building**
- You're implementing something you've never done before
- Best practices aren't immediately obvious to you
- Domain has evolved since you last worked in it

**High-Stakes Deliverables**
- Lead magnets, courses, or resources going to paying customers
- Community-facing content where quality directly affects trust
- Projects requiring significant resource investment
- Deliverables that set a template for future work

###  Conditional Use (Quick Assessment)

**You might skip Phase 1 if:**
- You have deep domain expertise and requirements are crystal clear
- Project is experimental or low-stakes
- Extremely time-constrained (though Phase 1 is usually faster than rework)
- You've recently completed similar research on adjacent projects

Even then, consider: "Would 15 minutes of parallel research catch assumptions I'm making?"

###  Definitely Skip Phase 1 When:

- Single document or small edit to existing content
- Quick experiments or drafts (use for learning, not final products)
- Well-defined simple tasks with established patterns
- Iterative refinements of already-researched projects

---

## How Phase 1 Works: The Collaborative Approach

Phase 1 operates as a collaborative dialogue between you and Claude, with subagents executing the research work.

### Step 1: You Express Intent (Including Product Identity)

You provide Claude with:
- **Identity Statement**: What are you building, for whom, and why? This is the most important input in the entire workflow.
- **Goal**: What are you trying to understand? (e.g., "How do successful AI courses structure modules for beginners?")
- **Context**: Any relevant background (e.g., "We're building a course on AI fundamentals, targeting non-technical learners")
- **Sources**: Where should agents look? (e.g., "We have competitor courses saved in Google Drive; research these + general best practices")
- **Success criteria**: What counts as comprehensive understanding? (optional but helpful)

**The Identity Statement — Required Before Research Begins:**

Before any research agents are spawned, state your product identity:

```
"I am building [SPECIFIC PRODUCT] for [SPECIFIC AUDIENCE]
because [SPECIFIC PROBLEM OR OUTCOME]"
```

**Examples of good identity statements:**
- "I am building an AI Mastery Toolkit companion course for mid-career professionals who purchased the toolkit because they need guided instruction to actually use what they bought."
- "I am building a community site homepage for coaches exploring AI because they need to see quickly whether this community is for them."

**Examples of vague identity statements (fix these before proceeding):**
- "I am building a course about AI" → For whom? Why would they care?
- "I am building something for professionals" → What product? What kind of professionals?
- "I am building a website" → What website? For whom? What problem does it solve?

The AI will echo your identity statement back for confirmation:

```
AI: "So I'm helping you research for: [YOUR IDENTITY STATEMENT].
     Is this correct before we design the research plan?"
```

If you say "no" or "not quite," we fix the identity before any research begins. Every research agent will receive this identity statement as context, so their findings are relevant to YOUR specific product — not generic.

### Step 2: Claude Proposes Research Plan

Claude doesn't immediately spawn agents. Instead, Claude **proposes** a research plan:

```
Based on your goal to understand how successful AI courses structure modules,
I propose the following research plan:

Agent 1: Analyze [course A] module structure, pacing, and progression
Agent 2: Research [course B] learning objectives and assessment strategy
Agent 3: Research [course C] engagement techniques and interactivity
Agent 4: Analyze your existing course materials to identify gaps
Agent 5: Synthesize findings and identify best practices across all sources

Does this research plan capture what you need to understand? Should I adjust
the focus areas, add additional agents, or change the approach?
```

**Why propose first?**
- Ensures research focuses on YOUR priorities (not agent assumptions)
- Gives you chance to catch obvious gaps or add focus areas
- Makes the research direction transparent and collaborative
- Avoids wasted effort on misaligned investigations

### Step 3: You Approve or Refine

You review the proposed plan and either:
- **Approve**: "Yes, this is perfect. Proceed with the research."
- **Add focus**: "Good plan. Also have Agent 6 research student feedback patterns from course reviews."
- **Adjust focus**: "I don't need Agent 2. Instead, have Agent 2 focus on video vs. text balance in module delivery."
- **Redirect**: "Actually, I'm more interested in industry certification alignment. Adjust accordingly."

This step is crucial: Research is only valuable if it answers YOUR questions.

### Step 4: Parallel Research Execution

Once approved, Claude spawns the approved agents simultaneously:
- Each agent gets fresh context window (100% available resources)
- Each agent investigates independently
- Agents work in parallel (not competing, not waiting for each other)
- Each agent compiles findings into mini-reports

Typical execution time: 15-30 minutes depending on research depth.

### Step 5: Synthesis and Report

After all agents complete their investigations, Claude synthesizes findings:

1. **Unified Research Report**: Single document combining all findings with section for each research dimension
2. **Key Insights**: Distilled patterns and best practices across all sources
3. **Recommendations for Spec**: Early thinking about what the spec should address
4. **References Document**: Sources, quotes, examples, templates to reference during spec creation
5. **Open Questions**: Ambiguities discovered during research that will need clarification in Phase 3 (Interview)

The research report becomes the source material for Phase 2 (Spec Creation).

### Step 6: Identity Validation Checkpoint (Before Phase 2)

Before moving to Phase 2, the synthesis agent explicitly addresses whether research validated or challenged the product identity:

```
IDENTITY VALIDATION

Original identity statement:
"I am building [PRODUCT] for [AUDIENCE] because [REASON]"

Research findings:
[ ] VALIDATED — Research confirms this identity is well-targeted
[ ] REFINED — Research suggests adjustments (see below)
[ ] CHALLENGED — Research reveals significant concerns (see below)

If REFINED or CHALLENGED:
- What changed: [specific findings that affect identity]
- Suggested update: "I am building [UPDATED PRODUCT] for [UPDATED AUDIENCE]
  because [UPDATED REASON]"
- User must confirm updated identity before Phase 2 begins
```

**Why this checkpoint matters:** Research sometimes reveals that your initial assumptions about the product or audience are off. Maybe the audience is narrower than you thought, or the problem is different than you assumed. Catching this here — before you write a spec — is the difference between a 15-minute conversation and a 13-file rewrite.

> **If research challenged your identity and you're not sure how to update it, that's fine.** Mark it `[CLARIFY]` and bring it into Phase 3 as the very first interview question. What you should NOT do is proceed with an identity you suspect is wrong.

---

## Integration with agent-os: Reference Implementation Patterns

If you're using agent-os (or planning to), Phase 1 research naturally maps to agent ecosystem patterns.

### Pattern 1: Research Coordinator Agent

```
Your role: Research coordinator for [project goal]

You will spawn multiple specialized research agents. Each agent independently
investigates one dimension. You synthesize all findings into unified report.

Dimensions to investigate:
[user-provided list from approval step]

Coordinate research, monitor completion, synthesize findings into single
comprehensive report with clear structure, key insights, and recommendations
for next phase (spec creation).
```

### Pattern 2: Parallel Execution with Dependency Tracking

Research agent template:
```
Your role: Research [specific dimension]

Focus: [Specific research question from approved plan]
Sources: [Agent-specific data locations]
Output format: [Section for unified report]
Quality gates: [Depth required, minimum findings]

Complete your research independently. Report findings in the specified format.
Assume other agents are investigating these dimensions simultaneously:
[List other agent focuses for context]
```

### Pattern 3: Synthesis Agent

```
Your role: Synthesize research findings

You have received mini-reports from [N] research agents, each investigating
a different dimension of [project goal].

Consolidate findings into:
1. Unified research report (per-dimension sections)
2. Key insights and patterns (cross-dimensional)
3. Preliminary recommendations for spec creation
4. References document (sources, quotes, examples, patterns)
5. Open questions for refinement phase

Create a report that could be handed to a spec-writer with confidence.
```

### Reference Implementation: agent-os Orchestration

If using agent-os task system:
```bash
# Initialize research phase
claude-code task create --phase research --goal "[your goal]"

# Spawn research agents (example with agent-os)
claude-code agent spawn --role researcher --dimension "[dimension A]"
claude-code agent spawn --role researcher --dimension "[dimension B]"
claude-code agent spawn --role researcher --dimension "[dimension C]"

# Coordinate and synthesize
claude-code agent spawn --role synthesizer --input-agents [list] --output-format report
```

The key is: **parallelization is automatic if structured properly**. Agents don't wait for each other; each investigates independently.

---

## Prompt Patterns for Different Research Scenarios

Use these patterns as templates. Adapt to your specific context.

### Pattern 1: Collaborative Research (Propose First)

Use when: You have a clear goal but aren't sure exactly what to research or how many agents you need.

```
You have access to [sources: competitor courses saved in Drive, existing course
materials, industry articles]. Your goal is to write a comprehensive research
report on [topic: how to structure AI courses for maximum learner engagement].

First, propose a research plan. Identify:
- How many research agents you'd spawn
- What each agent would investigate
- Why that research dimension matters to the final goal

Wait for my approval on the research plan before spawning agents.
```

**Claude's output**: Structured proposal with agent breakdown
**Your role**: Review, adjust, approve
**Next step**: "Yes, proceed with the research" or "Adjust as follows..."

### Pattern 2: Explicit Research (You Specify Agents)

Use when: You already know exactly what research dimensions matter and want to move fast.

```
You have access to [sources]. Your goal is to write a comprehensive research
report on [topic]. Spin up multiple research agents immediately, with each
investigating a different aspect:

- Agent 1: [Specific investigation]
- Agent 2: [Specific investigation]
- Agent 3: [Specific investigation]
- Agent 4: [Specific investigation]
- Agent 5: Synthesize findings and distill best practices

Provide each agent with focused guidance on their specific dimension.
Execute in parallel. Then synthesize all findings into unified research report.
```

**Claude's output**: Immediate agent spawning
**Execution time**: Faster (no proposal phase)
**Trade-off**: Less collaborative; assumes you have it right

### Pattern 3: Course Development Research

Use when: Building structured educational content and need to understand successful course design.

```
You have access to [source materials]:
- Our existing course modules (location)
- Top 3 competitor AI courses (saved in Google Drive)
- Student feedback from our beta tests (location)
- Industry standards documentation (links)

Your goal: Write a comprehensive research report on effective AI course
structure for [target audience] learners.

Propose a research plan with agents investigating:
- Course progression and module sequencing
- Learning objectives and assessment alignment
- Engagement techniques and interactivity strategies
- Student feedback patterns and pain points
- Best practices synthesis

Wait for approval before spawning agents.
```

**Claude's output**: Detailed proposal identifying what works in successful courses
**Research output**: Report identifying gaps in current approach + proven patterns
**Feeds into Phase 2**: Spec includes specific module structure, pacing, assessment strategy

### Pattern 4: Toolkit Creation Research

Use when: Building comprehensive resource libraries and need to understand structure/organization.

```
You have access to [sources]:
- Draft toolkit content pieces (location)
- Successful toolkit examples (Google Drive links)
- User feedback on toolkit navigation (spreadsheet)
- Topic mapping and cross-references (document)

Your goal: Write a comprehensive research report on how to structure these
pieces into a cohesive, navigable toolkit that maximizes user value and
minimizes confusion.

Propose a research plan with agents investigating:
- Mental models and thematic connections across pieces
- Navigation patterns from successful toolkits
- Cross-reference and linking strategies
- Gap identification in coverage
- Optimal organizational structure

Wait for approval before spawning agents.
```

**Claude's output**: Proposal for understanding toolkit architecture
**Research output**: Report on information hierarchy, navigation, gaps
**Feeds into Phase 2**: Spec includes folder structure, cross-linking strategy, completeness checklist

### Pattern 5: Lead Magnet Extraction Research

Use when: Extracting standalone lead magnets from larger content and need to understand extraction strategy.

```
You have access to [sources]:
- Complete AI Mastery Toolkit (content directory)
- Existing lead magnets that converted well (Google Drive)
- Audience pain point interviews (document)
- Lead magnet platform benchmarks (article)

Your goal: Write a comprehensive research report on which toolkit sections
could become effective standalone lead magnets and what extraction/adaptation
is needed.

Propose a research plan with agents investigating:
- Self-contained sections in toolkit (could stand alone?)
- Audience pain points mapped to toolkit content
- Successful lead magnet formats and structures
- Extraction requirements (what stays, what's removed?)
- Adaptation strategy (from comprehensive to focused)

Wait for approval before spawning agents.
```

**Claude's output**: Proposal for understanding extraction opportunities
**Research output**: Report mapping 5-10 toolkit sections to specific lead magnet types
**Feeds into Phase 2**: Spec includes extraction plan with format, audience, adaptation per magnet

---

## Output Structure: What Phase 1 Produces

After research completes, you'll have three key deliverables:

### Deliverable 1: Research Report

**Purpose**: Unified understanding from all parallel agents
**Format**: Markdown document with clear sections
**Contents**:
```
# Research Report: [Project Name]

## Executive Summary
[1-paragraph synthesis of key findings]

## Research Dimensions

### Dimension 1: [Agent 1 focus]
[Key findings from Agent 1 investigation]
[Patterns observed]
[Recommendations emerging from this dimension]

### Dimension 2: [Agent 2 focus]
[Key findings from Agent 2 investigation]
[Patterns observed]
[Recommendations emerging from this dimension]

[Repeat for each research dimension]

## Cross-Dimensional Patterns
[Insights that emerged from comparing multiple dimensions]
[Contradictions or tensions to resolve]
[Best practices that appear across sources]

## Gaps and Open Questions
[Things we don't know yet, to clarify in Phase 3]
[Assumptions that need validation]

## Preliminary Recommendations for Spec
[Early thinking about what spec should address based on research]
```

**Example research report**: If researching course structure, report might be:
- Section 1: How competitor courses structure modules
- Section 2: Industry consensus on pacing for beginners
- Section 3: Assessment and evaluation patterns
- Section 4: Engagement techniques across platforms
- Section 5: Cross-patterns and emerging recommendations
- Section 6: Gaps in current understanding

### Deliverable 2: References Document

**Purpose**: Citable sources and examples for spec writer to reference
**Format**: Structured markdown with:
- Source citations (name, type, location)
- Key quotes or findings per source
- Examples or templates discovered
- Patterns you might replicate

**Example structure**:
```
# Research References: [Project Name]

## Sources Analyzed

### Source: [Course A Name]
- Type: Competitor course
- URL/Location: [Link]
- Key finding: [1-2 sentence summary]
- Quote: "[Specific relevant quote, <15 words]"
- Replicable pattern: [Specific thing we might adapt]

### Source: [Course B Name]
[Same structure]

## Patterns Across Sources
- Pattern A: [Description + which sources show this]
- Pattern B: [Description + which sources show this]

## Templates Worth Replicating
- Template A: [Description + source]
- Template B: [Description + source]
```

### Deliverable 3: Synthesis Artifacts (Optional)

Depending on research, agents might generate:
- **Comparative tables**: Side-by-side analysis of competitor approaches
- **Visual maps**: Mind maps showing connections between concepts
- **Checklist templates**: Things successful courses/toolkits include
- **Example excerpts**: Specific good examples to reference

These artifacts become reference material during spec creation and provide concrete examples for subagents to follow during implementation.

---

## Examples from the Original SDD Workflow

### Example 1: Building a 6-Module Course

**Phase 1 Execution** (15 minutes):

Research proposal:
```
Agent 1: Analyze our existing course structure - progression, pacing, content types
Agent 2: Research competitor Course A - module breakdown, learning objectives
Agent 3: Research competitor Course B - engagement techniques, interactivity
Agent 4: Research competitor Course C - assessment methods and depth
Agent 5: Synthesize findings - identify best practices across all sources
```

**Research output includes**:
- Current state gaps (where our course is weak compared to competitors)
- Module pacing patterns (typical length, content density)
- Best practices for learning objectives and assessments
- Engagement techniques that appear in multiple successful courses
- Preliminary recommendations: "Our course needs exercises in modules 2-5, our assessments should test application not just recall"

**Feeds into Phase 2**: Spec includes specific module structure with exercises, assessment types, engagement strategy

### Example 2: Extracting Lead Magnets from Toolkit

**Phase 1 Execution** (10 minutes):

Research proposal:
```
Agent 1: Analyze toolkit structure - identify self-contained sections
Agent 2: Research audience pain points - what would resonate as lead magnet?
Agent 3: Research successful lead magnet formats - PDF, video, spreadsheet?
Agent 4: Map sections to pain points - which toolkit pieces address which needs?
Agent 5: Synthesis - recommend 5-10 lead magnets with extraction strategy
```

**Research output includes**:
- 10 toolkit sections that work as standalone content
- Pain point-to-section mappings (e.g., "Beginners struggle with mental models → extract Mental Models Toolkit as lead magnet")
- Best performing lead magnet formats for audience
- Extraction requirements per magnet (what context to preserve, what to remove)
- Preliminary recommendations: "Recommend 5 lead magnets: Mental Models PDF, Prompt Library, Quick Start video, Deliberate Practice tracker, Case Studies compilation"

**Feeds into Phase 2**: Spec includes extraction plan for each lead magnet with format, audience focus, adaptation needs

### Example 3: Migrating Toolkit Structure

**Phase 1 Execution** (20 minutes):

Research proposal:
```
Agent 1: Audit current structure - identify broken links, missing sections, navigation issues
Agent 2: Map all cross-references - which pieces reference each other?
Agent 3: Research navigation patterns - how do successful toolkits organize for discovery?
Agent 4: Analyze user flow - what's the typical path through the toolkit?
Agent 5: Synthesis - propose migration strategy addressing all gaps
```

**Research output includes**:
- Current state assessment (47 broken links, 12 orphaned sections, navigation confusing)
- Cross-reference mapping (shows dependencies between sections)
- Navigation patterns from successful toolkits (tag-based, folder-based, hybrid)
- User flow gaps (users can't discover 30% of content)
- Preliminary recommendations: "Migrate to folder-based structure with tag overlay, fix all cross-references, add progress tracking"

**Feeds into Phase 2**: Spec includes 5-phase migration plan with specific fixes per phase, cross-reference map, new navigation structure

---

## Tips for Effective Phase 1 Research

### Tip 1: Propose Before Spawning

Don't jump straight to spawning agents. Always propose first (unless you're experienced and time-constrained). This extra 2 minutes ensures research is aligned with your actual needs.

**Good**: "Claude, propose a research plan first. Wait for approval."
**Risky**: "Spin up agents to research X" without approval step (might be researching wrong thing)

### Tip 2: Provide Clear Sources

Agents are most effective when they know exactly where to look.

**Good**: "Agent 1: Analyze the three courses we've saved in Google Drive (links provided)"
**Unclear**: "Agent 1: Research how other courses structure content" (agent might get distracted)

### Tip 3: Make Dimensions Specific

Research dimensions should be specific enough to guide investigation, but not so prescriptive that you're doing the thinking for agents.

**Good**: "Agent 2: Investigate how competitor courses balance theory with practical exercises"
**Too vague**: "Agent 2: Look at competitor courses"
**Too prescriptive**: "Agent 2: Count the exact ratio of theory to exercises in competitor course A, then do the same for B and C"

### Tip 4: Include Synthesis Agent

Always have at least one agent whose job is to synthesize cross-dimensional findings. This is where the real value emerges.

**Pattern**: Last agent (or dedicated synthesis step) distills patterns across all investigations.

### Tip 5: Document Open Questions

Research will surface ambiguities and open questions. Document these explicitly. They become the focus of Phase 3 (Interview).

**Good**: "Research indicates module length varies (2-6 hours). Open question: What's optimal for our audience?"
**Missing**: Not documenting where judgment calls are needed

### Tip 6: Reference Reports During Spec Creation

Phase 1 research report becomes primary input to Phase 2. Reference it explicitly when writing spec.

**Prompt for Phase 2**: "Based on the research report, write a spec. Reference findings from [research dimension] when defining [spec section]."

### Tip 7: Keep Research Artifacts

Research generates artifacts (patterns, templates, examples, comparative tables). Keep these accessible during Phase 4 (Implementation) so subagents can reference them.

**Structure**:
- `/research-report.md` - Main synthesis
- `/research-references.md` - Citable sources
- `/research-artifacts/` - Templates, examples, comparisons

### Tip 8: Use Research to Validate Assumptions

Research should challenge your assumptions, not just confirm them.

**Good mindset**: "What if the research shows we've been wrong about X?"
**Confirmation bias**: Only paying attention to research that confirms what you already believe

### Tip 9: Limit Research Scope

Phase 1 shouldn't be 8-hour deep dive into every possible dimension. Limit research to 15-30 minutes typically.

**Time box**: "Spend 20 minutes on parallel research. Aim for 70% understanding, not 100% perfection."
**Signal**: When you have enough understanding to write a spec, you're done researching.

### Tip 10: Make Research Collaborative

Research phase involves dialogue with Claude, not passive output consumption.

**Engage**: Review proposals, ask Claude to adjust focus, challenge preliminary recommendations
**Passive**: Just running agents and accepting output without engagement

---

## Common Research Scenarios and Recommended Approaches

### Scenario 1: You Have Domain Expertise

**Situation**: You've built courses before; you know what works

**Approach**: Use explicit research (Pattern 2). Specify exact agents/dimensions. Move fast.

**Research time**: 10-15 minutes
**Focus**: Validate assumptions, catch emerging best practices you might have missed

### Scenario 2: You're New to Domain

**Situation**: First time building course/toolkit/product in this space

**Approach**: Use collaborative research (Pattern 1). Propose first, ask Claude to recommend dimensions.

**Research time**: 20-30 minutes
**Focus**: Understand landscape, identify patterns, learn from others

### Scenario 3: You Have Specific Sources

**Situation**: You have 3 competitor courses, industry report, expert articles

**Approach**: Direct agents to analyze specific sources. One agent per source typically.

**Research plan**:
```
Agent 1: Analyze Source A - focus on X
Agent 2: Analyze Source B - focus on Y
Agent 3: Analyze Source C - focus on Z
Agent 4: Synthesis - what's common across all three?
```

### Scenario 4: You're Synthesizing Conflicting Approaches

**Situation**: Different sources recommend different strategies (e.g., some say "module-based", others say "topic-based")

**Research approach**: Explicitly have agents investigate trade-offs.

**Research plan**:
```
Agent 1: Investigate module-based organization - when does it work well?
Agent 2: Investigate topic-based organization - when does it work well?
Agent 3: Investigate hybrid approaches - how to combine both?
Agent 4: Synthesis - when to choose each approach?
```

**Research output**: Not a single recommendation, but nuanced understanding of trade-offs

### Scenario 5: You're Under Time Pressure

**Situation**: You need to move fast; can't spend 30 minutes on research

**Approach**:
1. Skip full research phase (risky)
2. OR do abbreviated research (10 minutes, 2-3 agents only)
3. OR do research + interview in same session to catch risks early

**Abbreviated research**:
```
Agent 1: What are top 3 patterns in successful [category]?
Agent 2: What are common gaps/failures in [category]?
Agent 3: Synthesis - what should we definitely do and definitely avoid?
```

---

## Transitioning from Phase 1 to Phase 2

When Phase 1 research completes, you have:

1. **Research Report**: Comprehensive findings document
2. **References**: Sources and examples to cite
3. **Synthesis**: Key patterns and preliminary recommendations
4. **Open Questions**: Ambiguities to clarify in Phase 3

**Next action**: Move to Phase 2 (Spec Creation)

**Prompt to Claude**:
```
Phase 1 research is complete. Based on the research report and findings,
write a comprehensive specification for [project]. Include:
- Part 1: Research findings summary
- Part 2: Current state analysis
- Part 3: Implementation plan with phases
- Part 4: Completion checklist with all deliverables

Save to [location]. Reference the research report when defining key decisions.
```

The spec now has evidence-based foundation from Phase 1.

---

## Troubleshooting Phase 1

### Problem: Agents Didn't Research What You Needed

**Symptom**: Research report is missing critical dimensions

**Solutions**:
1. **Propose phase didn't work**: Next time, be more explicit in your proposal approval
2. **Agents misunderstood**: Ask Claude to re-run specific agents with clearer guidance
3. **Sources were inadequate**: Did agents have access to right sources? Provide additional sources and re-run

### Problem: Research Took Too Long

**Symptom**: Parallel research took 45+ minutes

**Solutions**:
1. **Too many agents**: Reduce from 6 agents to 4. Fewer dimensions, same coverage
2. **Agents went too deep**: Specify "focus on top 3 patterns, not exhaustive analysis"
3. **Sources were too large**: Give agents specific sections to analyze, not entire documents

### Problem: Research Seems Shallow

**Symptom**: Report feels like surface-level summary, not deep understanding

**Solutions**:
1. **Increase research time**: Tell agents "spend more time investigating"
2. **Add focus**: Add agents for specific dimensions you feel need deeper coverage
3. **Change sources**: Research is only as good as sources. Better sources → better research

### Problem: Agents Contradicted Each Other

**Symptom**: Different agents reached different conclusions

**Solutions**:
1. **This is normal**: Conflicting findings are actually valuable (shows nuance)
2. **Synthesis agent should address**: Make sure synthesis agent explicitly discusses contradictions
3. **Clarify in Phase 3**: Add as open question for interview phase

---

## Advanced: Multi-Dimensional Research

For complex projects, you might need research across multiple dimensions beyond just competitive analysis.

### Example: Full-Stack Toolkit Project

```
Agent 1: Competitive analysis - how do successful toolkits organize content?
Agent 2: User research - what do our users need? What confuses them?
Agent 3: Technical feasibility - what's required to implement proposed structure?
Agent 4: Market positioning - how does our toolkit fit in the landscape?
Agent 5: Sustainability - how do we maintain and update this long-term?
Agent 6: Synthesis - integrate findings across all dimensions
```

Each dimension contributes to spec, but requires different type of analysis.

**Research time**: 25-35 minutes (more agents, but still parallel)
**Output richness**: Much more comprehensive foundation for spec

---

## Measuring Phase 1 Success

Phase 1 is successful when:

1. **You understand the landscape**: Could you explain to someone else how others solve this problem?
2. **Assumptions are tested**: Did research challenge any of your initial assumptions?
3. **Gaps are visible**: Do you know what you don't know? (Open questions documented)
4. **Patterns are clear**: Could you articulate 3-5 best practices from the research?
5. **Confidence is high**: You're ready to write spec knowing what you're building and why

**Red flag**: If you finish research and feel no more informed than when you started, Phase 1 didn't work. Re-run with different agents or sources.

---

## Phase 1 in the Full SDD Context

Phase 1 is the **research and discovery** phase:

```
Phase 1: Research with Parallel Agents
    ↓
    (produces: research report + references)
    ↓
Phase 2: Spec Creation
    (uses: research report as foundation)
    ↓
Phase 3: Spec Refinement via Interview
    (clarifies: ambiguities identified in Phase 1)
    ↓
Phase 4: Implementation with Task Delegation
    (references: spec created from Phase 1 research)
    ↓
Phase 5: Verification and Quality Assurance
    (ensures: implementation matches spec, which was based on Phase 1 research)
```

Phase 1's research foundation enables all subsequent phases to execute effectively.

---

## Next Steps

1. **Review** this guide and the main SDD workflow document
2. **Identify** a project where Phase 1 research would be valuable
3. **Run** your first Phase 1 research using the collaborative approach (propose first)
4. **Evaluate** the research output - did it answer your questions?
5. **Iterate** - adjust approach based on what worked

Start with collaborative research (Pattern 1: propose first). Once comfortable, adapt to explicit research (Pattern 2: specify agents directly) for faster execution on familiar domains.

---

## References

- **Main Workflow**: Spec_Driven_Development_Workflow_v1.md
- **Agent Coordination Patterns**: Based on agent-os orchestration principles
- **Research Synthesis**: Borrowed from research methodology and discovery practices

---

*This is a living document. As you use Phase 1 in real projects, capture what works and what doesn't. Update with your learnings.*
