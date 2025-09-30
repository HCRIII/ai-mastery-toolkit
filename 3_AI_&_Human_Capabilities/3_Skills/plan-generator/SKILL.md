---
name: plan-generator
description: Generate structured, decision-ready plans and proposals saved as readable markdown documents. Use when the user requests a plan, proposal, implementation plan, strategy document, or asks "what should we do about X" expecting a structured analysis. Triggers include "create a plan", "give me a proposal", "generate a plan for", "what's your implementation plan", "help me decide between", or any request for structured decision-making support. Always creates a markdown file in 6_Session_Working_Files/ rather than just responding conversationally.
---

# Plan Generator

## Overview

The Plan Generator skill creates structured, decision-ready planning documents saved as markdown files. When users request plans or proposals, this skill generates comprehensive documents with clear sections, options analysis, and actionable recommendations—not just conversational responses.

**Key principle:** Plans are documents, not conversations. Always create a file in `6_Session_Working_Files/` with a descriptive name.

## When This Skill Triggers

Activate this skill when the user requests:
- "Create a plan for [topic]"
- "Give me a proposal for [initiative]"
- "What's your implementation plan?"
- "Help me decide between [options]"
- "Generate a strategy for [goal]"
- "How should we approach [problem]?"
- Any request that needs structured decision-making support

**Do NOT use for:** Simple questions with direct answers, conversational advice, or when user explicitly wants a quick discussion.

## Core Workflow

### Step 1: Clarify Scope

Before generating the plan, understand:
- What decision needs to be made?
- Who is the audience? (technical team, executive, client, etc.)
- What options are being considered?
- What constraints exist? (time, budget, technical, etc.)
- What level of detail is needed?

Ask 2-3 focused clarifying questions if the request is ambiguous.

### Step 2: Generate Structured Plan

**IMPORTANT: What NOT to Include**

Do NOT include these sections in generated plans:
- ❌ **Implementation Plans** - All phases implemented after review, not phase-by-phase
- ❌ **Timeline Estimates** - Cannot accurately estimate implementation time
- ❌ **Week-by-week schedules** - Unnecessary detail
- ❌ **Day-by-day breakdowns** - False precision

**Rationale:** User prefers immediate execution after plan approval (all phases done together). Timeline estimates are consistently inaccurate. Focus on structure and options, not scheduling.

**Exception:** "Estimated Reading Time" for documents is acceptable (e.g., "12-minute read").

---

Create a markdown document in `6_Session_Working_Files/` with this structure:

```markdown
# [Plan Title]

**Date:** YYYY-MM-DD
**Status:** Proposal/Draft/Final
**For:** [Audience]

---

## Executive Summary

[2-4 sentences capturing the essence: What decision is needed, your recommendation, and why]

---

## Context & Analysis

[Background information, problem statement, current situation]

### Key Considerations
- [Consideration 1]
- [Consideration 2]
- [Consideration 3]

---

## Options

### Option A: [Name]

**Description:** [What this option entails]

**Pros:**
- [Benefit 1]
- [Benefit 2]

**Cons:**
- [Drawback 1]
- [Drawback 2]

**Estimated Effort:** [Time/resources required]

### Option B: [Name]

[Same structure as Option A]

### Option C: [Name] (if applicable)

[Same structure as Option A]

---

## Recommendation

**Recommended Approach:** [Which option and why]

**Rationale:**
[Clear explanation of why this option is best given the context and constraints]

**Key Success Factors:**
- [Factor 1]
- [Factor 2]
- [Factor 3]

---

## Risks & Mitigation

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| [Risk 1] | [H/M/L] | [H/M/L] | [Strategy] |
| [Risk 2] | [H/M/L] | [H/M/L] | [Strategy] |

---

## Next Steps

1. **Immediate:** [Action to take right away]
2. **Short-term:** [Action within days/week]
3. **Long-term:** [Action within weeks/months]

---

## Questions & Considerations

[Any open questions, dependencies, or items needing clarification]
```

### Step 3: Name the File Descriptively

**Naming convention:** `[Topic]_[Type]_Plan.md`

**Examples:**
- `Phase_3_Implementation_Plan.md`
- `Database_Migration_Proposal.md`
- `Marketing_Strategy_Decision.md`
- `Feature_Rollout_Plan.md`

### Step 4: Present to User

After creating the file:
1. Provide a computer:// link to the file
2. Give a 2-3 sentence summary of the recommendation
3. Keep it brief—the plan speaks for itself

**Example:**
```
[View your Phase 3 Implementation Plan](computer:///path/to/file.md)

I recommend Option A (Conservative approach with Frameworks + Workflows only) to maintain
accessibility. The plan includes full analysis of all options, rationale, and implementation
timeline.
```

## Plan Types & Adaptations

### Implementation Plans
- Focus on: phasing, dependencies, timeline
- Include: detailed steps, resource estimates, milestones
- Example: Software feature rollout, system migration

### Decision Proposals
- Focus on: options comparison, trade-offs, recommendation
- Include: evaluation criteria, scoring if applicable
- Example: Technology choice, vendor selection, approach decision

### Strategy Documents
- Focus on: goals, approach, success metrics
- Include: market analysis, competitive position, roadmap
- Example: Product strategy, marketing plan, growth strategy

### Problem Analysis
- Focus on: root cause, impact, solutions
- Include: problem statement, analysis, recommended fixes
- Example: Bug investigation, performance issue, process breakdown

**Adapt the template sections based on plan type** while maintaining the core structure: Context → Options → Recommendation → Next Steps.

## Best Practices

### Clarity Over Completeness
- Be concise but comprehensive
- Use bullet points for scannability
- Include only relevant information
- Avoid unnecessary detail

### Decision-Ready Format
- Clear recommendation (don't bury it)
- Explicit trade-offs stated
- Next steps are actionable
- Audience-appropriate language

### Structured Thinking
- Break complex problems into components
- Present options objectively before recommending
- Show your reasoning transparently
- Acknowledge uncertainties and risks

### Visual Organization
- Use headers consistently
- Include tables for comparisons
- Use emphasis (bold) for key points
- Add horizontal rules for section breaks

## Common Patterns

### When Multiple Stakeholders
Include "Stakeholder Impact" section showing how each option affects different groups.

### When Highly Technical
Add "Technical Details" section or reference document for implementation specifics.

### When Budget-Sensitive
Include cost comparison table and ROI analysis.

### When Timeline-Critical
Add Gantt chart representation or detailed timeline with milestones.

## Examples

See `references/example_plans.md` for complete examples of:
- Implementation plan (software feature)
- Decision proposal (technology choice)
- Strategy document (product roadmap)
- Problem analysis (performance issue)

## Integration Notes

**Works well with:**
- `/skills` - Can be part of larger workflows
- Agents - Can spawn agents to research options before planning
- Connectors - Can pull data from external sources for analysis

**Save location:**
Always `6_Session_Working_Files/` for easy user access and session cleanup.
