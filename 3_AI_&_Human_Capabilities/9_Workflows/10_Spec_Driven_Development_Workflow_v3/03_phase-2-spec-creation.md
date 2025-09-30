# Phase 2: Spec Creation

**Created:** 2026-02-13
**Last Updated:** 2026-02-28 (v3: added governing documents for SCHEMA-compliant Specification creation)
**Purpose:** Multi-step workflow pattern for standardized processes
**Status:** Final

---
## Building Your Persistent Source of Truth

---

## Overview

Phase 2 transforms your research insights into a **structured specification** that serves as the authoritative source of truth for implementation. Rather than jumping directly into building, you create a comprehensive spec folder following the agent-os pattern—ensuring clarity, consistency, and a reference point for all stakeholders.

This phase bridges research and implementation by documenting:
- What you're building (product/content specifications)
- Why you're building it (shaping decisions and context)
- How it should work (implementation plans and standards)
- Where to find validation (references and examples)
- When it's done (production queue tracking)

---

## Purpose

The spec folder serves three critical functions:

### 1. **Persistent Source of Truth**
A single location where all stakeholders can find definitive answers:
- What are the requirements?
- What decisions have been made?
- Why were those decisions made?
- What are the implementation constraints?

### 2. **Onboarding & Collaboration Hub**
New team members, contractors, or future maintainers have one folder to review instead of hunting through emails, Slack, or multiple documents.

### 3. **Quality Assurance Gate**
Prevents the common pattern of "building first, speccing later." When spec comes first:
- Fewer surprises during implementation
- Clearer feedback loops
- Easier to spot conflicts or inconsistencies
- Better change management (specs are easier to modify than half-built systems)

---

## Governing Documents for Specification Creation

*Added 2026-02-28 — links Phase 2 to the 8_Specifications standard.*

When Phase 2 produces a **Specification Document** (a formal 14-section document under the AI Mastery Toolkit standard), the following documents govern its structure and process:

| Document | Purpose | Path |
|----------|---------|------|
| **Specification_Document_Standard_SCHEMA.md** | Defines all required sections, field requirements, and quality gates | `3_AI_&_Human_Capabilities/8_Specifications/Specification_Document_Standard_SCHEMA.md` |
| **Specification_Document_TEMPLATE.md** | Blank fill-in template; mandatory starting point for every specification | `3_AI_&_Human_Capabilities/8_Specifications/Specification_Document_TEMPLATE.md` |
| **Specification_Companion_Course_EXAMPLE.md** | Fully worked example showing all 6 phases populated with real content | `3_AI_&_Human_Capabilities/8_Specifications/Specification_Companion_Course_EXAMPLE.md` |

**Naming rule:** The completed Specification document uses suffix convention: `Offering_Title_Specification_v1.0.md` (not `Specification_Offering_Title_v1.0.md`).

**Completion status:** When Phase 6 (Baseline) is complete, the document status is **Baselined** — not "Final." Baselined specifications are locked under change control.

**Note on vocabulary:** Formal Specification documents (per the SCHEMA above) are distinct from Offering Briefs in `4_Context_Files/Level_4_Offering_Briefs/`. Do not call Offering Brief files "specs" or "specifications" — reserve that vocabulary for SCHEMA-compliant Specification documents.

---

## When to Use Phase 2

**Trigger conditions:**
- Research phase (Phase 1) is complete
- Key insights have been documented
- You have clarity on what problems you're solving
- You're ready to move from "learning" to "planning"

**Not appropriate when:**
- Still in active research or exploration
- Key decisions remain unmade
- Requirements are fundamentally uncertain
- You're doing a quick prototype to validate direction (use Phase 1 extended instead)

---

## Transition Gate: Phase 1 → Phase 2

Before creating the spec, verify that Phase 1 produced a clear product identity. This prevents the most expensive workflow error: building a spec for the wrong product.

```
PHASE 1 → PHASE 2 TRANSITION CHECK

[ ] Identity statement captured from Phase 1:
    "I am building [PRODUCT] for [AUDIENCE] because [REASON]"

[ ] Research validated this identity (or we updated it based on findings)

[ ] Identity is still accurate right now — confirm before proceeding

If identity shifted during research:
[ ] Updated identity statement written
[ ] Research summary explains why it shifted
[ ] Any Phase 1 findings that contradict the new identity are noted
```

**Why this gate exists:** In one real case, a spec was built around "Seven Pillars health-first executive transformation" when the actual product was "AI Mastery Toolkit companion course." The audience, pricing, and structure were all wrong — 13 files had to be rewritten. This 2-minute check prevents that.

> **If you cannot clearly state what you're building, for whom, and why — stop.** Return to Phase 1. A spec without a clear identity is a spec that produces wrong content at scale.

---

## Spec Folder Structure

Based on agent-os shape-spec pattern, create the following structure:

```
specs/YYYY-MM-DD-HHMM-{project-name}/
 plan.md              # Implementation plan & roadmap
 shape.md             # Shaping decisions & context
 standards.md         # Technology standards & compliance
 references.md        # Reference implementations & examples
 success-criteria.md  # Pre-production definition of done — written before Phase 4 (v2)
 production-queue.md  # Status & task tracking
 visuals/             # Mockups, wireframes, screenshots
     mockup-homepage.png
     wireframe-flow.png
     screenshot-reference.png
 design/              # Visual design specs (if Visual Design Sub-Workflow activated)
     design-tokens.md
     layout-spec.md
     sections/
         [section-name]-spec.md
```

### Directory Naming Convention

**Format:** `YYYY-MM-DD-HHMM-{project-slug}`

**Examples:**
- `2025-02-10-1430-course-platform`
- `2025-02-10-1645-lead-magnet-sequence`
- `2025-02-10-1520-toolkit-restructure`

**Rationale:**
- Timestamp sorts naturally (newest first)
- Project slug is human-readable
- Single directory per project prevents confusion
- Timestamp allows multiple specs for same project over time

---

## What Goes in Each File

### 1. **plan.md** — Implementation Roadmap

**Purpose:** Break down what needs to be built into actionable phases.

**Structure:**
```markdown
# Implementation Plan: [Project Name]

## Phase Breakdown

### Phase 1: [Foundation/Core]
- Task 1.1: [specific deliverable]
- Task 1.2: [specific deliverable]
- Task 1.3: [specific deliverable]
**Estimated effort:** X days
**Dependencies:** None

### Phase 2: [Feature Set A]
- Task 2.1: [specific deliverable]
- Task 2.2: [specific deliverable]
**Estimated effort:** X days
**Dependencies:** Phase 1 completion

### Phase 3: [Polish/Testing]
- Task 3.1: [specific deliverable]
**Estimated effort:** X days
**Dependencies:** Phase 2 completion

## Success Criteria
- [ ] All tasks completed
- [ ] Acceptance criteria met
- [ ] Testing passed
- [ ] Documentation complete

## Risk Register
| Risk | Mitigation | Owner |
|------|-----------|-------|
| [Risk] | [Plan] | [Person] |

## Timeline
**Start date:** YYYY-MM-DD
**Target completion:** YYYY-MM-DD
**Buffer:** X days
```

**What to include:**
- Logical phase breakdown (not arbitrary)
- Realistic time estimates
- Clear dependencies
- Acceptance criteria for each phase
- Identified risks and mitigation
- Owner assignments

---

### 2. **shape.md** — Shaping Decisions & Context

**Purpose:** Document the thinking behind what you're building, not just the specifications.

**Structure:**
```markdown
# Shaping Document: [Project Name]

## Identity Statement
> "I am building [SPECIFIC PRODUCT NAME] for [SPECIFIC AUDIENCE]
> because [SPECIFIC PROBLEM OR OUTCOME]"

**Confirmed:** [YES / NO]
**Last Confirmed:** [DATE]
**Source:** Phase 1 Research → Phase 2 Transition Gate

Every decision in this document should serve this identity. If a
decision contradicts it, either the decision is wrong or the identity
needs updating — resolve which one before proceeding.

---

## Problem Statement
[Clear articulation of the problem you're solving — must align with
the "because" in the identity statement above]

## Target Audience
- **Primary:** [Who benefits most — must match the identity statement]
- **Secondary:** [Who also benefits]
- **Personas:** [Specific user archetypes — be specific, not categorical.
  Instead of "mid-career professionals," describe a real person:
  "Someone with 5-8 years in tech who just downloaded the toolkit
  and thought 'where do I start?'"]

## Core Principles
1. **[Principle]:** [Explanation of why this matters]
2. **[Principle]:** [Explanation]
3. **[Principle]:** [Explanation]

## Non-Goals
[Explicitly state what you're NOT doing and why]

## Solution Overview
[High-level description of your approach]

## Key Decisions & Rationale
| Decision | Rationale | Alternatives Considered |
|----------|-----------|------------------------|
| [Decision] | [Why this choice] | [What else we considered] |

## Constraints & Assumptions
| Constraint | Impact | Notes |
|-----------|--------|-------|
| [Constraint] | [How it affects scope] | [Additional context] |

## Success Metrics
- **Metric 1:** [How we measure success]
- **Metric 2:** [How we know it worked]
- **Metric 3:** [Quantifiable target]

## Open Questions [CLARIFY]
- [ ] [CLARIFY] Question 1 - Resolution needed by [date]
- [ ] [CLARIFY] Question 2 - Resolution needed by [date]

Note: [CLARIFY] tags are not failures. They mark decisions that Phase 3
will resolve through structured interview. A spec with documented
ambiguities is far more valuable than a spec with hidden assumptions.
```

**What to include:**
- Problem statement (even if obvious to you now, future readers need it)
- Explicit non-goals (prevents scope creep)
- Decision rationale (why THIS approach over others)
- Constraints you're working within
- Success metrics that matter
- Any outstanding questions

---

### 3. **standards.md** — Technology & Quality Standards

**Purpose:** Ensure consistency by defining which standards, frameworks, and practices apply.

**Structure:**
```markdown
# Standards & Compliance: [Project Name]

## Technology Stack
| Category | Standard | Version | Rationale |
|----------|----------|---------|-----------|
| Language | [Lang] | [Version] | [Why chosen] |
| Framework | [Framework] | [Version] | [Why chosen] |
| Database | [DB] | [Version] | [Why chosen] |
| Deployment | [Platform] | [Version] | [Why chosen] |

## Code Standards
- **Code style guide:** [Link/Reference]
- **Linting config:** [Tool & config]
- **Testing framework:** [Framework]
- **Minimum test coverage:** [%]
- **Documentation standard:** [Standard]

## Architecture & Design
- **Pattern:** [Architecture pattern used]
- **Scalability requirements:** [Description]
- **Performance targets:** [Specific metrics]
- **Security standards:** [OWASP/ISO/etc]

## Accessibility & Compliance
- **WCAG level:** [A/AA/AAA]
- **Regulatory compliance:** [GDPR/HIPAA/etc if applicable]
- **Browser support:** [Versions]
- **Mobile first:** [Yes/No]

## Content Standards
- **Tone of voice:** [Description]
- **Brand guidelines:** [Link]
- **Image requirements:** [Dimensions, formats]
- **SEO requirements:** [Specific targets]

## DevOps & Deployment
- **CI/CD pipeline:** [Tool & config]
- **Monitoring:** [Tools & metrics]
- **Backup strategy:** [Description]
- **Disaster recovery:** [RTO/RPO targets]

## Quality Gates
**Code must pass before deployment:**
- [ ] All tests passing
- [ ] Code review approved
- [ ] Security scan passed
- [ ] Performance targets met
- [ ] Documentation complete
```

**What to include:**
- Technology choices and WHY
- Code quality standards
- Accessibility & compliance requirements
- Architecture patterns
- Performance & security targets
- Quality gates before deployment

---

### 4. **references.md** — Examples & Inspiration

**Purpose:** Point to real-world implementations, competitor analysis, and proven patterns.

**Structure:**
```markdown
# References & Examples: [Project Name]

## Directly Relevant Examples
### Example 1: [Name/Product]
- **URL:** [Link]
- **Why relevant:** [What we can learn]
- **Specific features to note:** [List]
- **What we're doing differently:** [List]

### Example 2: [Name/Product]
- **URL:** [Link]
- **Why relevant:** [What we can learn]
- **Specific features to note:** [List]
- **What we're doing differently:** [List]

## Inspiration Sources
- [Source 1] - [What we learned]
- [Source 2] - [What we learned]
- [Source 3] - [What we learned]

## Competitor Analysis
| Competitor | Strengths | Weaknesses | Our Advantage |
|-----------|-----------|-----------|---------------|
| [Name] | [Strengths] | [Gaps] | [How we're better] |

## Design Patterns & Best Practices
- **Pattern 1:** [Link to explanation] - Applied to [context]
- **Pattern 2:** [Link to explanation] - Applied to [context]

## Research & Articles
- [Article] by [Author] - Key insight: [One sentence]
- [Article] by [Author] - Key insight: [One sentence]

## Previous Attempts & Lessons
- **What we tried before:** [Description]
- **What worked:** [Positive learnings]
- **What didn't work:** [Failures and why]
- **Applying those lessons:** [How we're different now]
```

**What to include:**
- Real implementations you're inspired by (with differentiation)
- Competitor features and gaps you're filling
- Design patterns and where they apply
- Academic or practical research
- Lessons from previous attempts

---

### 5. **success-criteria.md** — Pre-Production Definition of Done *(v2 addition)*

**Purpose:** Explicitly state what "done" looks like before Phase 4 production begins. This document is the verification contract — Phase 5 checks actual output against it. Writing it before production ensures verification measures intent, not just completion.

**Why this matters:** Phase 5 without pre-written success criteria verifies that things exist, not that they're right. This closes the gap.

**When to write it:** At the end of Phase 2, before Phase 3 interview refinement. Update if Phase 3 changes scope.

**Structure:**
```markdown
# Success Criteria: [Project Name]

**Created:** YYYY-MM-DD
**Status:** Active — governs Phase 5 verification

---

## Identity Criteria (What Makes This This)

These criteria define whether the project delivered what Phase 0 defined.
If these fail, the project has drifted — output may be high quality but wrong.

- [ ] The deliverable serves the identity statement audience as defined in
      project-overview.md (not a broader audience, not a different one)
- [ ] The problem solved matches the problem statement — not an adjacent problem
- [ ] Non-goals from project-overview.md are not present in the deliverable

---

## Completeness Criteria (What Must Be Present)

From project-roadmap.md — every component must be accounted for:

| Component | Deliverable | Acceptance Standard |
|-----------|-------------|---------------------|
| [Component 1] | [What specifically] | [What makes it acceptable] |
| [Component 2] | [What specifically] | [What makes it acceptable] |
| [Component 3] | [What specifically] | [What makes it acceptable] |

---

## Quality Criteria (What Standard Each Piece Must Meet)

| Dimension | Criterion | How to Verify |
|-----------|-----------|--------------|
| Tone | [Specific standard — reference brand voice doc] | [Read X items and assess] |
| Format | [Specific structural requirements] | [Check against standards.md] |
| Depth | [Minimum content standard — word count, coverage, etc.] | [Measure] |
| Accuracy | [Factual or methodological accuracy standard] | [Verify against references.md] |
| [Dimension] | [Criterion] | [How to verify] |

---

## Standards Compliance Criteria

- [ ] All items follow standards defined in standards.md
- [ ] Brand voice is consistent throughout (reference 01_Brand_Guidelines_CX1.md)
- [ ] Format conventions match the format-specific standards
- [ ] No violations that weren't documented and resolved

---

## User Experience Criteria

Written from the perspective of the end user receiving this deliverable:

- [ ] [User can do X without Y friction]
- [ ] [User understands Z without additional explanation]
- [ ] [User arrives at [outcome] having completed this]

---

## Phase 5 Verification Instructions

When Phase 5 verification runs, this document is the checklist. Verify in this order:
1. Identity criteria first — if these fail, stop and report before checking anything else
2. Completeness criteria — confirm all components are present
3. Quality criteria — spot-check minimum 20% of items per dimension
4. Standards compliance — run automated standards check per 06_phase-5-verification-feedback.md
5. User experience criteria — read as the target user would

**Pass threshold:** All identity criteria met + all completeness criteria met +
no quality or standards criteria failing at unacceptable severity. See
`06_phase-5-verification-feedback.md` for severity definitions.
```

**What to include:**
- Identity criteria that verify the project didn't drift from Phase 0
- Completeness criteria pulled directly from Phase 0 project-roadmap.md
- Quality criteria that are measurable (not "it should be good")
- Explicit verification instructions so Phase 5 can run without ambiguity

---

### 6. **production-queue.md** — Status & Task Tracking

**Purpose:** Central place to track what's being built, what's done, what's blocked.

**Structure:**
```markdown
# Production Queue: [Project Name]

**Spec Created:** YYYY-MM-DD HH:MM
**Implementation Started:** YYYY-MM-DD (or TBD)
**Target Completion:** YYYY-MM-DD
**Current Status:** [Planning/In Progress/Testing/Blocked/Complete]

---

## Task Tracking

### Phase 1: [Phase Name]
**Status:** [Planning/In Progress/Complete]
**Progress:** X% complete

| Task ID | Description | Owner | Status | Start | Est. End | Actual | Notes |
|---------|-----------|-------|--------|-------|----------|--------|-------|
| 1.1 | [Task description] | [Person] | [Status] | [Date] | [Date] | [Date] | [Notes] |
| 1.2 | [Task description] | [Person] | [Status] | [Date] | [Date] | [Date] | [Notes] |

### Phase 2: [Phase Name]
**Status:** [Pending/In Progress/Complete]
**Progress:** X% complete

| Task ID | Description | Owner | Status | Start | Est. End | Actual | Notes |
|---------|-----------|-------|--------|-------|----------|--------|-------|
| 2.1 | [Task description] | [Person] | [Status] | [Date] | [Date] | [Date] | [Notes] |

---

## Blockers & Dependencies

| Blocker | Impact | Resolution | Owner | Target Date |
|---------|--------|-----------|-------|------------|
| [Issue] | [Which tasks blocked] | [Plan to resolve] | [Person] | [Date] |

---

## Completed Deliverables

| Deliverable | Date Complete | Link/Notes |
|-------------|---------------|-----------|
| [Deliverable] | [Date] | [Location in repo] |

---

## Changes & Decisions Log

| Date | Change | Reason | Owner | Impact |
|------|--------|--------|-------|--------|
| [Date] | [What changed] | [Why] | [Person] | [Effect on timeline] |

---

## Review & Sign-Off Checklist

- [ ] All acceptance criteria met
- [ ] All tasks complete
- [ ] Testing passed (if applicable)
- [ ] Documentation updated
- [ ] Stakeholders reviewed
- [ ] Ready for production/launch

**Sign-off:**
- [ ] PM approved by: _________________ Date: _______
- [ ] Tech lead approved by: _________________ Date: _______
- [ ] Product owner approved by: _________________ Date: _______
```

**What to include:**
- Clear status at all times (Planning/In Progress/Complete/Blocked)
- Task-level tracking with owners and dates
- Blocker identification and resolution plans
- Change log (what changed and why)
- Final sign-off checklist

---

### 6. **visuals/** — Supporting Images

**Purpose:** Store mockups, wireframes, screenshots, and diagrams.

**Include:**
- UI mockups (Figma exports, screenshots)
- User flow diagrams
- System architecture diagrams
- Feature wireframes
- Reference screenshots (from competitors or inspiration)
- Process flows

**Naming:** `descriptive-name.png` (e.g., `homepage-mockup.png`, `user-flow-v2.png`)

---

## Prompt Patterns for Spec Creation

Use these Claude prompts to efficiently create your specs:

### Pattern 1: Shape Document from Research
```
You've completed research on [topic]. Create a comprehensive shape.md that documents:
- Problem statement
- Target audience
- Core principles (3-4)
- Non-goals (what we're NOT doing)
- Key decisions and rationale
- Success metrics

Based on this research: [paste research summary]
Format as a markdown file ready to use.
```

### Pattern 2: Implementation Plan from Requirements
```
Create a detailed implementation plan (plan.md) for [project].

Requirements:
[Paste requirements from shape.md]

Break this into logical phases with:
- Specific, actionable tasks
- Realistic effort estimates
- Clear dependencies
- Acceptance criteria per phase
- Key risks and mitigation

Format as markdown, ready to use.
```

### Pattern 3: Standards Document
```
Create a standards.md document for a [project type] project using:
- Stack: [tech stack]
- Constraints: [any specific requirements]
- Target audience: [who uses this]

Include sections for:
- Technology stack rationale
- Code standards & tools
- Architecture patterns
- Quality gates
- Deployment & monitoring

Format as markdown, ready to use.
```

### Pattern 4: References & Inspiration
```
Create a references.md document for [project type].

Find and document:
- 3-4 direct competitors or inspiration sources
  (for each: strengths, weaknesses, what we do differently)
- 2-3 design patterns relevant to this project
- Key research or articles in this space
- Analysis of what others do well and what gaps exist

Format as markdown, ready to use.
```

---

## Real-World Examples

### Example 1: Course Development Spec

```
specs/2025-02-10-1430-ai-mastery-course/
 plan.md
    Phase 1: Research & curriculum design (3 weeks)
    Phase 2: Module creation (5 weeks)
    Phase 3: Recording & editing (6 weeks)
    Phase 4: Launch preparation (2 weeks)

 shape.md
    Problem: Busy professionals lack structured AI education
    Solution: 8-week structured course with hands-on projects
    Non-goals: Not a beginner Python course, not certification prep
    Success metric: 1000+ enrollments, 4.5+ rating

 standards.md
    Video: 1080p, MP4, captions required
    Platforms: Teachable + YouTube + GitHub
    Tone: Practical, direct, zero fluff
    Accessibility: All videos captioned

 references.md
    Competitor: Coursera AI courses
    Inspiration: Andrew Ng's ML course structure
    Success model: Fast.ai approach

 production-queue.md
    Tracks each module creation and launch phases

 visuals/
     course-structure.png
     module-flow.png
     homepage-mockup.png
```

---

### Example 2: Lead Magnet Spec

```
specs/2025-02-10-1645-ai-prompt-library/
 plan.md
    Phase 1: Content creation & curation (2 weeks)
    Phase 2: Lead page design & setup (1 week)
    Phase 3: Email sequence & delivery (1 week)
    Phase 4: Launch & optimization (ongoing)

 shape.md
    Problem: Busy professionals don't know how to structure AI prompts
    Solution: Free 50-prompt library for common use cases
    Non-goals: Not comprehensive, not training (just reference)
    Success metric: 5000+ downloads in first month

 standards.md
    Format: PDF + searchable web version
    Content: Real prompts, actual results, clear context
    Tone: Practical, high-quality, immediately usable
    Brand: Matches AI Mastery visual identity

 references.md
    Similar: Nat Friedman's prompt collection
    Pattern: Swipe file approach (proven to convert)
    Research: Prompt engineering best practices

 production-queue.md
    Content creation, design, email sequence, launch

 visuals/
     lead-page-mockup.png
     pdf-preview.png
```

---

### Example 3: Toolkit Restructure Spec

```
specs/2025-02-10-1520-toolkit-restructure/
 plan.md
    Phase 1: Audit current toolkit (1 week)
    Phase 2: Design new information architecture (2 weeks)
    Phase 3: Content reorganization (3 weeks)
    Phase 4: Technical implementation (2 weeks)
    Phase 5: Testing & launch (1 week)

 shape.md
    Problem: Current toolkit is confusing, hard to navigate
    Solution: Clear hierarchy, workflow-based organization
    Core principle: Workflows come first, tools second
    Non-goals: Not adding tons of new content, just reorganizing
    Success metric: 30% increase in content engagement

 standards.md
    Structure: YAML-based config + markdown content
    Navigation: Breadcrumbs + workflow guides
    Search: Full-text search required
    Accessibility: WCAG 2.1 AA minimum

 references.md
    Inspiration: Stripe Docs information architecture
    Pattern: Workflow-based organization
    Success: Linear.app's knowledge base

 production-queue.md
    Content auditing, IA design, reorganization, testing

 visuals/
     current-structure.png
     proposed-structure.png
     navigation-mockup.png
```

---

## Integration with Production Queue

The **production-queue.md** file is the single source of truth for implementation tracking.

### Update Cycle
- **Weekly:** Update task status, note blockers
- **Per task completion:** Mark done, update progress %
- **When changes occur:** Log in "Changes & Decisions" section
- **Final stage:** Complete sign-off checklist before launch

### Using the Queue to Drive Implementation
1. **Phase starts:** All tasks move to "In Progress"
2. **Task gets assigned:** Add owner and start date
3. **Task work begins:** Owner provides daily/weekly updates
4. **Task completes:** Move to "Complete," update actual end date
5. **Blocker emerges:** Add to "Blockers" section with mitigation plan
6. **Change needed:** Log in "Changes log" with justification
7. **Everything done:** All sign-offs required before marking Complete

---

## Task 1 Principle: Always Save Spec First

**Core rule:** Never skip to implementation without a spec.

### Why This Matters
- **Prevents rework:** Spec catches issues before coding
- **Clarifies thinking:** Writing forces you to resolve ambiguity
- **Enables collaboration:** Everyone reads the spec, not your head
- **Creates reference:** Future you won't remember all these decisions

### Common Objections Addressed

**"But I'm moving fast, specs slow me down"**
- Specs prevent 10x the rework of "quick" implementations
- 2-3 hours speccing saves 20+ hours in confusion and rework

**"I already know what to build"**
- Your knowledge isn't accessible to your team
- Details you think are obvious often aren't
- Writing reveals gaps in your thinking

**"Specs get outdated"**
- Yes, but they're a checkpoint, not a prison
- Update specs when implementation reveals new info
- Still better than no baseline

**"Isn't this waterfall?"**
- No: spec doesn't lock you in, it gives you a baseline
- You iterate on specs (Phase 1 research → Phase 2 spec → Phase 3 implementation)
- Agile teams also benefit from clear specs before building

### How to Think About Specs
- **Not a contract:** Flexible, can change with good reason
- **Not a prison:** Implementation can adapt, but with visibility
- **Your friend:** Prevents meetings where everyone discovers they had different ideas

---

## Quick Reference: Spec Checklist

Before moving to Phase 3 (Implementation), verify:

### plan.md
- [ ] All work is broken into phases
- [ ] Each phase has concrete tasks (not vague)
- [ ] Time estimates are realistic
- [ ] Dependencies are clear
- [ ] Acceptance criteria exist for each phase
- [ ] Risks are identified with mitigation

### shape.md
- [ ] Problem statement is clear
- [ ] Target audience is specific
- [ ] Principles are articulated
- [ ] Non-goals are explicit
- [ ] Key decisions have rationale
- [ ] Success metrics are measurable
- [ ] Open questions are resolved or documented

### standards.md
- [ ] Technology choices are justified
- [ ] Code standards are clear
- [ ] Quality gates are defined
- [ ] Performance targets are specific
- [ ] Security/compliance requirements are listed

### references.md
- [ ] Competitors are analyzed
- [ ] Inspiration sources are documented
- [ ] Your differentiation is clear
- [ ] Design patterns are identified
- [ ] Key research is linked

### production-queue.md
- [ ] Status is up-to-date
- [ ] All tasks have owners
- [ ] Progress is tracked
- [ ] Blockers (if any) have mitigation plans
- [ ] Sign-off process is defined

### visuals/
- [ ] Key mockups exist
- [ ] Diagrams are clear
- [ ] Screenshots are labeled
- [ ] Files are organized logically

---

## Specificity Checklist: Are Your Answers Sharp Enough?

Before moving to Phase 3, test whether your spec is specific enough to produce good content. Vague specs produce generic content; specific specs produce targeted content.

**Audience Specificity:**
- [ ] Can you describe your ideal user in 2-3 sentences with concrete details? (Not "professionals" — a real person with a real situation)
- [ ] Can you name one specific pain point they have, with an example scenario?
- [ ] Do you know what they've already tried, and why it didn't work?

**Product Specificity:**
- [ ] Are time estimates in exact numbers? (Not "reasonable length" — "90 minutes")
- [ ] Are quantities specific? (Not "several exercises" — "3 exercises per module")
- [ ] Can you picture what the user sees when they open this product?

**Decision Specificity:**
- [ ] Does every decision include a "why"? (Not just what you chose, but why you chose it)
- [ ] Are alternatives documented? (What you didn't choose, and why not)
- [ ] Could someone who's never met you understand these decisions?

> **If you can't be specific, mark it `[CLARIFY]`.** A `[CLARIFY]` tag is not a failure — it's the entire purpose of Phase 3. Phase 3 exists to resolve ambiguities surfaced here. What you should never do is write something vague and hope nobody notices. That's how 13 files get rewritten.
>
> See `12_answer-quality-guide.md` for the full Specificity Ladder with examples at each level.

---

## Common Mistakes to Avoid

### Mistake 1: Over-Speccing
**Problem:** Specs become 50-page documents that nobody reads
**Solution:** Keep specs concise, link to details rather than including everything
**Target:** Each file 2-5 pages of focused content

### Mistake 2: Incomplete Planning
**Problem:** Plan.md has phases but no actual tasks
**Solution:** Break work into tasks a person could actually do (1-3 day chunks)
**Target:** Each task is specific and actionable

### Mistake 3: Forgetting Non-Goals
**Problem:** Scope creeps because "wouldn't it be nice to also..."
**Solution:** Explicitly list what you're NOT doing
**Target:** 2-3 non-goals for clarity

### Mistake 4: Stale Specs
**Problem:** Spec is written once, never updated
**Solution:** Update specs as implementation reveals new info
**Cadence:** Review specs weekly or whenever major change happens

### Mistake 5: No Visuals
**Problem:** Impossible to know what final product should look like
**Solution:** Create or link mockups, wireframes, reference screenshots
**Minimum:** At least one visual showing main experience

---

## Next Steps After Phase 2

Once your specs are complete:

1. **Review & Feedback**
   - Share with stakeholders
   - Collect feedback on specs (not implementation yet)
   - Update based on feedback
   - Get sign-off if needed

2. **Move to Phase 3: Implementation**
   - Use plan.md to guide your work
   - Reference shape.md when questions arise
   - Follow standards.md
   - Update production-queue.md as work progresses
   - Use visuals/ as reference while building

3. **Keep Specs Alive**
   - Update when reality differs from plan
   - Log changes in production-queue.md
   - Keep as living document, not archived artifact

---

## Summary

**Phase 2 transforms research into structure:**
- Creates persistent source of truth (spec folder)
- Documents decisions and rationale (shape.md)
- Plans implementation clearly (plan.md)
- Sets standards for quality (standards.md)
- Provides reference points (references.md)
- Tracks progress (production-queue.md)

**Core principle:** Always spec first, implement second. The 3-5 hours spent on comprehensive specs prevents 20+ hours of rework.

**Timeline:** 1-2 weeks depending on project complexity
**Output:** Complete spec folder ready for Phase 3 implementation
**Success:** Team alignment, clear acceptance criteria, implementable plan
