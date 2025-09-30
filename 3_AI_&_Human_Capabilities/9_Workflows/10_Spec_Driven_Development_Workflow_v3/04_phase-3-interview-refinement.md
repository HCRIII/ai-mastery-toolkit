# Phase 3: Interview & Refinement

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Multi-step workflow pattern for standardized processes
**Status:** Final

---

**The Clarification Gate: Surfacing Ambiguities Before Production**

---

## Purpose

Phase 3 prevents costly rework by surfacing ambiguities, design decisions, and edge cases **before** agents begin generation. Using structured interview questions, you and the AI collaboratively refine the spec while aligning with:

- **Product context** (mission, audience, tone from agent-os/product/)
- **Brand standards** (guidelines, voice, visual style)
- **Reference implementations** (proven patterns from your existing work)

**Output:** A refined spec with all major decisions captured and ready for autonomous agent work.

---

## When to Use Phase 3

### Entry Criteria
- **Phase 2 Complete**: You have a comprehensive spec folder with plan.md, shape.md, standards.md, and references.md
- **Ambiguities Identified**: Spec contains sections marked with `[CLARIFY]` or `[DECISION NEEDED]`
- **Before Implementation**: Never start Phase 4 (Parallel Production) without completing this phase

### Exit Criteria
- **Identity confirmed**: Identity statement validated (or updated) at start of interview
- All `[CLARIFY]` and `[UNSURE]` sections have been resolved with evidence-based answers
- All design decisions documented in shape.md with rationale
- **Consistency verified**: No contradictions between identity, audience, pricing, and design decisions
- Product context alignment verified
- Standards injection review completed
- Reference implementations approved as appropriate

---

## How Phase 3 Works: The Interview Flow

### Step 0: Identity Confirmation (Do This First — Every Time)

Before asking a single design question, confirm what you're building. This prevents the most expensive error in the entire workflow: **identity drift** — where the spec silently shifts away from the actual product.

**The AI will present this at the start of every Phase 3 interview:**

```
IDENTITY CONFIRMATION

In Phase 1, we captured this identity statement:

  "I am building [PRODUCT] for [AUDIENCE] because [REASON]"

Before we make any design decisions, let's confirm this is still accurate.

A) Yes, this is exactly what we're building
B) Mostly right, but I'd adjust it slightly
C) This has shifted — let me restate it

If B or C: What's different?
```

**Why this matters:** Every answer you give in this interview will be shaped by who this product is for and what it does. If the identity is wrong, every answer downstream will be wrong too — even if each answer sounds reasonable on its own.

**What happens if identity has shifted:**
1. Rewrite the identity statement together
2. Update shape.md with the new identity before proceeding
3. Quickly scan existing spec for anything that contradicts the new identity
4. Then proceed with the interview using the corrected identity

> **Real example of what happens without this step:** A course spec was built around "Seven Pillars health-first executive transformation" when the actual product was "AI Mastery Toolkit companion course." The audience, pricing, module structure, and personas were all wrong — not because the answers were bad, but because they were answering for the wrong product. This single identity error required rewriting 13 files.

---

### Step 1: Prepare Interview Questions

Extract ambiguities from your spec and organize by category:

```
Topics to Interview:
 Content Structure & Organization
    How granular should units be?
    What's the expected time-to-completion per module?
    Should content be sequential or browseable?
 User Experience & Tone
    Formal vs conversational tone?
    Use humor, analogies, or stay academic?
    Accessibility requirements?
 Deliverables & Formats
    Text-based, video-embedded, both?
    Exercise format (code, essays, projects)?
    Assessment strategy (self-graded, peer, automated)?
 Product Context Alignment
    How does this serve your ideal client?
    Where does this fit in product roadmap?
    What's the success metric?
 Standards Alignment
     Writing style consistent with brand guidelines?
     Visual formatting match existing work?
     Navigation patterns align with toolkit standards?
```

### Step 2: Use AskUserQuestion Tool

Present questions in grouped sets, prioritizing high-impact decisions:

**Example Interview Block:**

```
## Interview: [Project Name] - Design Decisions

IDENTITY CONFIRMED: "I am building [PRODUCT] for [AUDIENCE] because [REASON]"

We've built a comprehensive spec. Before agents start generation,
let's clarify key design decisions. Keep your identity statement in
mind as you answer — every decision should serve THAT product for
THAT audience.

### Block 1: Content Structure (5 min)

ANSWER QUALITY COACHING:
When answering these questions, think about your specific user —
not "professionals" in general, but the actual person sitting down
with your product. What does THEIR day look like? What do THEY need?

  Example of a vague answer:  "Modules should be a reasonable length"
  Example of a specific answer: "90 minutes — our audience has
    evening study windows after kids go to bed, and 90 minutes
    is the max they can sustain before fatigue"

**Question 1:** This toolkit has 8 modules. Should each module:
A) Be completable in 30 mins or less
B) Take 1-2 hours (deeper dive)
C) Variable (some quick, some deep)
D) [UNSURE] I need to think about this or do research first

**Question 2:** Module navigation - should users:
A) Follow strict sequence (Module 1 → 2 → 3)
B) Jump to any module (non-linear)
C) Recommended path with optional deep-dives
D) [UNSURE] I'm not sure what's best for my audience

**Question 3:** Exercises per module - how many?
A) 1-2 simple applied exercises
B) 3-5 varied exercises (code, writing, project)
C) 1 capstone project per module
D) [UNSURE] I'd like to see what works in similar products

→ Your answers will shape how agents structure content

IDENTITY CHECK: Do the answers you just gave make sense for
"[IDENTITY STATEMENT]"? If something feels off, say so now —
it's much cheaper to catch it here than in Phase 4.
```

### When Someone Selects [UNSURE]

Selecting [UNSURE] is not a failure — it's one of the most valuable things you can do. A confident wrong answer gets baked into the spec and produces wrong content across every module. An [UNSURE] flag gets resolved with evidence.

**What happens when you select [UNSURE]:**

```
YOU SELECTED [UNSURE] on: "[Question]"

Great. Let's figure this out together. A few options:

1. QUICK RESEARCH (10-15 min): I'll investigate how similar products
   handle this and come back with 2-3 evidence-based options.

2. REFRAME THE QUESTION: Sometimes the question itself is the problem.
   Let me ask it differently: "If your ideal user sat down with this
   product tonight, what would they expect to happen?"

3. DEFER WITH DOCUMENTED ASSUMPTION: We pick the safest default,
   document it as "[ASSUMPTION - NOT CONFIRMED]", and flag it for
   Phase 5 testing. Production continues, but we know to validate.

4. SPLIT THE DECISION: "I'm unsure because it depends on [X]."
   We create two spec variants and test both in Phase 5.

Which approach feels right for this question?
```

### Step 3: Capture Answers in shape.md

As users respond, update the spec's `shape.md` file with decisions:

```markdown
## Refined Design Decisions

### Content Structure (Refined from Interview)
- **Module Duration**: 1-2 hours per module (user chose option B)
- **Rationale**: Depth matters more than speed for this audience
- **Impact**: Agents will create comprehensive modules with multiple examples

### Navigation Model
- **Strategy**: Non-linear with recommended path (user chose option B)
- **Rationale**: Advanced users need flexibility; beginners need guidance
- **Impact**: Include "Next Steps" in each module, not forced sequence

### Exercises
- **Count**: 3-5 per module with mix of difficulty (user chose option B)
- **Types**: Code examples, reflection prompts, mini-projects
- **Rationale**: Mixed modalities support different learning styles
- **Impact**: Each module needs exercise template variation

### Tone & Voice (Refined)
- **Style**: Conversational but professional (not casual, not academic)
- **User**: Experienced developers learning new AI paradigms
- **Impact**: Use "we" language, reference real problems, avoid jargon without explanation
```

### Step 4: Standards Alignment Check

Verify spec aligns with your established standards:

```
Standards Alignment Checklist:
 Writing Style: Check against brand guidelines from agent-os/
 Visual Formatting: Verify heading levels, emphasis, code blocks match patterns
 Voice & Tone: Aligned with Key Message Platform?
 Navigation: Use existing toolkit patterns?
 Accessibility: Meets your accessibility standards?
 Module Length: Consistent with existing courses?
 Exercise Format: Matches proven patterns from reference implementations?
```

### Step 5: Product Context Alignment

Connect spec to your broader business:

```
Product Context Check:
 Mission Alignment
    Does this course serve your core mission?
    Who is the ideal client for this?
    How does this move them toward transformation?
 Roadmap Positioning
    Where does this fit in your product roadmap?
    Does it fill a gap or complement existing offerings?
    Launch sequence (first? second? alongside other courses?)
 Business Objectives
    Lead magnet? Paid product? Free resource?
    Expected completion rate target?
    Success metric (completion, skill gain, confidence)?
 Feedback Loop
     What learnings from this project refine your ICP?
     How should this inform future course development?
     What patterns should flow back to brand guidelines?
```

### Step 6: Reference Implementation Approval

Review specifications against proven patterns:

```
Reference Implementation Validation:
- Is the chosen module structure like Existing Course X?
   Yes, proven with 95% completion rate
  → Copy that structure pattern

- Exercise format matches Toolkit Y?
   Yes, learners preferred multi-format exercises
  → Use that template set

- Navigation approach like Product Z?
   Different, new experiment
  → Flag for additional testing, careful review in Phase 5
```

---

## Integration Points: Alignment in Practice

### 1. Check Product Context (agent-os/product/)

Before confirming design decisions, verify alignment with:

```
agent-os/product/
 brand-guidelines.md       → Tone, voice, visual style
 key-message-platform.md   → Core messaging, positioning
 ideal-client-profiles.md  → Who this is for, their needs
 product-roadmap.md        → Where this fits, launch sequence
 success-metrics.md        → How we measure impact
```

**Interview Question Informed by Product Context:**

```
"Your Ideal Client Profile says your audience is 'experienced
engineers learning AI strategy.' Should we:

A) Assume technical knowledge (skip basics, focus on application)
B) Provide optional technical review sections
C) Assume mixed technical backgrounds (full explanations)

Your brand guidelines say 'practical, not theoretical.' So the answer
should reflect that preference. What's your pick?"
```

### 2. Inject & Review Relevant Standards

Extract standards from agent-os and reference during interview:

```
From agent-os/standards/courses/:
- Module Template: 3,000-4,000 words, structured as [Concept → Example → Application → Exercise]
- Exercise Types: Code implementation, reflection prompt, case study analysis
- Navigation Pattern: "What You'll Learn" → Content → "Key Takeaways" → Exercises → "Next Module Preview"
- Assessment: Optional knowledge checks, not required
- Tone: Second-person ("you"), conversational, use contractions

Question for User:
"Do these standards match your intentions? Should we adjust any of them
for this specific project? (e.g., longer/shorter modules, different exercise types)"
```

### 3. Verify Reference Implementations

Ensure chosen patterns are grounded in your existing successes:

```
Reference Implementations:
 Module structure → Similar to AI Fundamentals Course (established, proven)
 Exercise format → Mix of coding + reflection from Toolkit v2 (successful)
 Assessment → Light touch like Strategy Course (users appreciated optional nature)
 Navigation → New "topic-based" structure (different from sequential courses)
  → Flag for closer review in Phase 5, test with pilot users
```

### 4. Update shape.md with Refined Decisions

Create a permanent record of what was decided and why:

```markdown
# Refined Decisions from Interview

[Date]: [User] approved designs for [Project]

## Major Design Decisions Captured

### 1. Module Structure
- **Decision**: 1-2 hours per module, 3,500 words average
- **Reasoning**: Matches ICP (experienced engineers) who prefer depth
- **Standard Applied**: course-module-template from standards/courses/
- **Reference**: Similar to "AI Fundamentals Course" (95% completion)

### 2. Exercise Format
- **Decision**: 3-5 per module: 1 coding, 2 reflection, 1 mini-project
- **Reasoning**: Supports multiple learning styles, matches brand preference for "practical"
- **Standard Applied**: mixed-modality-exercises from standards/courses/
- **Reference**: Validated in Toolkit v2 (most popular exercises were mixed format)

### 3. Navigation Model
- **Decision**: Non-linear with "recommended path" sidebar
- **Reasoning**: ICP includes self-directed learners who want flexibility
- **Standard Applied**: Extends existing toolkit navigation patterns
- **Reference**: New pattern, flagged for Phase 5 testing

### 4. Assessment Strategy
- **Decision**: Optional knowledge checks, no mandatory assessment
- **Reasoning**: Aligns with brand (respects user autonomy) and ICP (experienced)
- **Standard Applied**: light-touch-assessment from standards/courses/
- **Reference**: Validated in Strategy Course (users preferred optional)

### 5. Tone & Voice
- **Decision**: Conversational, second-person, practical, no jargon without explanation
- **Reasoning**: Matches Key Message Platform, appeals to ICP
- **Standard Applied**: brand-voice from standards/writing/
- **Reference**: Consistent with existing course library

## Product Context Alignment

- **Mission**:  Serves core mission of "enabling AI fluency"
- **ICP**:  Designed specifically for experienced engineers
- **Roadmap**:  Fills "application layer" gap in Q2 roadmap
- **Launch**:  Tier 1 priority, supports lead generation
- **Success Metric**: 85% completion rate target (based on similar courses)

## Standards Alignment

-  Writing style matches brand guidelines
-  Module structure follows template (with approved variation)
-  Exercise format proven in existing work
-  Navigation extends existing patterns
-  Assessment approach is lighter touch (flag for testing)

## Known Constraints & Decisions

- Module order: Recommended but not enforced (user choice)
- Examples: Use Python and Go (user preference, reflects ICP tooling)
- Accessibility: WCAG AA level (matches brand standard)
- Time-to-build: Estimated 40 agent-hours (based on module complexity)
```

---

## Prompt Patterns for Interview Phase

> **Three Practices for Every Question:** All prompt patterns below embed three practices that prevent costly errors:
> 1. **Identity Anchoring** — Every question block references the identity statement
> 2. **Specificity Coaching** — Good/vague answer examples teach users to give useful answers
> 3. **Uncertainty as Strength** — Every question includes [UNSURE] as a valid, encouraged option
>
> See `11_identity-anchoring-guide.md` and `12_answer-quality-guide.md` for the full teaching guides.

### Pattern 1: Clarifying Ambiguity

```
REMINDER: We are building "[IDENTITY STATEMENT]"

I've identified an ambiguity in the spec that will affect how agents
structure content. Here's the issue:

[Context from spec showing ambiguity]

Three possible interpretations:
A) [Option A with implications]
B) [Option B with implications]
C) [Option C with implications]
D) [UNSURE] I need more information before deciding

SPECIFICITY COACHING:
When answering, think about your specific user in a specific moment.
Not "what sounds good in general" but "what does my user need when
they hit this part of the product?"

Which aligns best with your vision? And why?

(The "why" matters — it helps agents understand the intent, not just
the choice. If you can't explain why, that's a sign you might want
to select [UNSURE] and research first.)
```

### Pattern 2: Standards Alignment Question

```
REMINDER: We are building "[IDENTITY STATEMENT]"

Your established standards say [standard rule], but the spec could
also work with [alternative approach].

Examples in your existing work:
- Course X uses approach [Standard approach] → Result: [outcome]
- Course Y used approach [Alternative] → Result: [different outcome]

For THIS project ("[IDENTITY STATEMENT]"), which approach serves
your specific audience better?

A) Follow the standard (proven, consistent)
B) Use the alternative (different context may need different approach)
C) [UNSURE] I'd like to see more evidence before deciding

If you choose B, should we update standards for future projects too,
or keep this as a one-time exception?
```

### Pattern 3: Product Context Alignment

```
REMINDER: We are building "[IDENTITY STATEMENT]"

I'm checking this against your product context:

Your Ideal Client Profile says [specific traits]. The spec currently
[describes approach]. Should we:

A) Adjust the design to better serve this ICP?
B) Keep the design and note it serves a different segment?
C) Create variations for different ICP segments?
D) [UNSURE] I need to think about how this product fits my ICP

SPECIFICITY COACHING:
Picture your ideal user BY NAME if you can. What would [specific
persona] expect when they open this product? Does the current
design match that expectation?

How should this project position within your product roadmap?
```

### Pattern 4: Reference Implementation Validation

```
REMINDER: We are building "[IDENTITY STATEMENT]"

Your similar project [Reference Project] achieved [outcome] using
[approach]. This spec proposes [similar/different approach].

Should we:
A) Replicate the proven approach (lower risk)
B) Use this approach as a base with adaptations (moderate risk)
C) Try the new approach (higher risk, valuable learning)
D) [UNSURE] I'm not sure how comparable these projects really are

What's your preference given the project goals?
```

### Pattern 5: Batch Decision Interview

```
REMINDER: We are building "[IDENTITY STATEMENT]"

Let me group related questions to streamline this. For each topic,
think specifically about YOUR user in YOUR product — not what
sounds good in general.

### Topic: Content Granularity & Depth
- How long should each unit be?
- How technical should explanations be?
- Should there be optional advanced sections?
- [UNSURE] on any of the above? Flag it — we'll research.

### Topic: User Experience
- How should users navigate?
- What's the intended tone?
- Should content feel academic or conversational?
- [UNSURE] on any of the above? That's fine — say which one.

Let's tackle these, and I'll map your answers into the spec.

IDENTITY CHECK after this block: Do these decisions, taken together,
create the right experience for "[IDENTITY STATEMENT]"?
```

---

## Example Clarifying Questions by Project Type

### Course Development

```
STRUCTURE & PROGRESSION:
1. "Should modules build on each other (prerequisites) or be independent?"
   - Impacts: ordering, complexity ramp, navigation design

2. "What's your target time-to-completion for the entire course?"
   - Impacts: module count, depth, exercise count

3. "Should this course stand alone or integrate with others?"
   - Impacts: cross-references, prerequisites, positioning

LEARNING DESIGN:
4. "What's the learner's primary goal? (Job skill? Career shift? Project knowledge?)"
   - Impacts: content focus, examples, exercises, assessment

5. "How should learners demonstrate mastery?"
   - Impacts: exercise format, assessment type, capstone design

6. "What's the maximum student load per cohort?"
   - Impacts: scalability needs, community features, support design

DELIVERY FORMAT:
7. "Should this be self-paced, cohort-based, or hybrid?"
   - Impacts: timing guidance, discussion requirements, support model

8. "How much video vs text? Should video be required or supplementary?"
   - Impacts: production scope, accessibility, bandwidth requirements

9. "Should there be live instructor time or fully asynchronous?"
   - Impacts: scheduling, responsiveness, community building
```

### Toolkit or Resource Creation

```
NAVIGATION & ORGANIZATION:
1. "How should users find what they need? (Search? Browse? Guided path?)"
   - Impacts: information architecture, naming conventions, index structure

2. "Should users see the full toolkit or progressive disclosure?"
   - Impacts: complexity management, onboarding approach, search design

3. "What's the typical use case? (Reference? Learning journey? Problem-solving?)"
   - Impacts: organization logic, navigation patterns, example prominence

DEPTH & COMPREHENSIVENESS:
4. "Is this entry-level, intermediate, or advanced?"
   - Impacts: explanation depth, example complexity, prerequisite assumptions

5. "Should there be extensive cross-referencing or minimize links?"
   - Impacts: information architecture, keyword strategy, maintenance burden

6. "How often will this need updating? (Rapidly changing field or stable?)"
   - Impacts: modular design, version control, archival strategy

INTERACTIVITY & ENGAGEMENT:
7. "Should users be passive readers or active participants?"
   - Impacts: exercise inclusion, community features, feedback mechanisms

8. "What's the expected user expertise level?"
   - Impacts: jargon usage, explanation depth, assumed knowledge

9. "Should this have built-in progression/completion tracking?"
   - Impacts: interactive features, platform requirements, analytics needs
```

### Content Production (Blog, Newsletter, Social)

```
FORMAT & STYLE:
1. "What's your preferred article length? (500 words? 2,000? Variable?)"
   - Impacts: depth, scanning friendliness, production time

2. "How technical should the writing be for your audience?"
   - Impacts: explanation depth, jargon, accessible examples

3. "What's your voice? (Authoritative? Conversational? Provocative?)"
   - Impacts: word choice, structure, personality in examples

CONTENT STRATEGY:
4. "What's the primary goal? (Lead generation? Authority building? Entertainment?)"
   - Impacts: CTA style, topic selection, evidence/proof requirements

5. "How does this fit your broader content strategy?"
   - Impacts: SEO keywords, topic clustering, cross-promotion approach

6. "Should this be evergreen or timely?"
   - Impacts: example choices, trend references, update frequency

PLATFORM & DISTRIBUTION:
7. "Which platforms is this for? (Blog? LinkedIn? Twitter? Email?)"
   - Impacts: format, length, formatting style, hashtag strategy

8. "How much formatting/customization do you need?"
   - Impacts: asset requirements, design needs, production workflow

9. "What's your posting cadence and batch size?"
   - Impacts: production volume, automation opportunities, scheduling
```

---

## Advanced Pattern: Domain Research During Interview

When interviews reveal knowledge gaps, conduct lightweight domain research before finalizing decisions:

### The Pattern

```
You reveal a decision requirement in an unfamiliar area:
 I identify the knowledge gap
 Conduct 15-minute research on best practices
 Surface 2-3 options with evidence
 Present back to you with context
 You decide, now informed by evidence
```

### Example

```
You: "What exercises work best for teaching AI safety?"

I note: This is a design question where domain expertise matters.

Research (15 min):
- Examine reference implementations (your AI Fundamentals course)
- Check your standards (exercise templates)
- Light web research on safety exercise types (case studies, scenario analysis, red-teaming)

Report back:
"Your course library uses scenario-based exercises successfully. For safety
specifically, the evidence suggests adding red-teaming exercises where learners
identify failure modes. Three options:

A) Scenario only (proven in your work, comfortable for learners)
B) Scenario + light red-teaming (extends existing pattern, moderate difficulty)
C) Red-teaming focus (cutting-edge, requires more facilitation)

Based on your ICP (engineers, self-directed), which approach?"
```

---

## Output: Refined Spec + Captured Decisions

When Phase 3 completes, your spec folder contains:

```
0-specs/
 plan.md                     # Original project plan (unchanged)
 shape.md                    #  NOW REFINED with all decisions
 standards.md                #  Referenced and validated
 references.md               #  Approved implementations noted
 interview-summary.md        # NEW: What was asked, what you answered
 design-decisions.md         # NEW: Why each decision was made
 production-queue.md         # Ready for Phase 4
```

### shape.md Evolution

**Before Interview (Phase 2):**
```markdown
## Content Structure

The course will have modules covering [topics]. Each module will have:
- Content explaining concepts
- Exercises for practice
- Assessment component (TBD)

[CLARIFY] What exactly should exercises be?
[CLARIFY] Should modules be sequential?
[DECISION NEEDED] How long should each module take?
```

**After Interview (Phase 3):**
```markdown
## Content Structure (Refined from Interview)

Modules are non-linear, 1-2 hours each, ~3,500 words.

### Exercise Strategy
- Format: 3-5 per module, mixed modalities (code, reflection, project)
- Rationale: Supports learning styles, aligns with brand preference for practical
- Standard: mixed-modality-exercises from standards/courses/
- Reference: Validated in Toolkit v2

### Module Organization
- Strategy: Recommended path with optional branches
- Sequential: Not enforced, but linear reading order suggested
- Time Budget: 8-10 hours total (8 modules × 1-2 hours each)
- Rationale: ICP (experienced engineers) prefer flexibility; pathway guides beginners

### Assessment
- Approach: Optional knowledge checks, no mandatory assessment
- Rationale: Respects user autonomy (matches brand), suits ICP
- Reference: Validated in Strategy Course (users appreciated optional)
```

### interview-summary.md (NEW)

```markdown
# Interview Summary

**Project**: [Project Name]
**Date**: 2026-02-10
**Participants**: [User], Claude
**Duration**: 45 minutes

## Questions Asked & Answers

### Block 1: Content Structure (25 min)

Q1: Target module duration?
A: 1-2 hours each. Depth matters more than speed for this audience.

Q2: Module navigation model?
A: Non-linear with recommended path. Flexibility for advanced users, guidance for beginners.

Q3: Exercises per module?
A: 3-5 mixed-modality exercises. Code + reflection + projects.

### Block 2: Tone & Experience (15 min)

Q4: Formal or conversational tone?
A: Conversational but professional. We're talking to experienced engineers.

Q5: Use humor/analogies?
A: Some analogies (good for clarity), minimal humor (keep it professional).

Q6: Accessibility priorities?
A: WCAG AA level minimum, like all our work.

### Block 3: Product Fit (5 min)

Q7: Product roadmap positioning?
A: Tier 1 priority for Q2. Fills "application layer" gap, supports lead gen.

Q8: Success metrics?
A: 85% completion rate (based on similar courses).

## Decisions Made

-  Module duration: 1-2 hours (confirmed)
-  Navigation: Non-linear with recommended path (confirmed)
-  Exercise format: 3-5 mixed-modality per module (confirmed)
-  Tone: Conversational, professional (confirmed)
-  Assessment: Optional knowledge checks (confirmed)

## No Ambiguities Remaining

All major design decisions have been clarified and captured in shape.md.
```

### design-decisions.md (NEW)

```markdown
# Design Decision Rationale

This document explains the "why" behind each major decision, useful for:
- Agents understanding decision context
- Future modifications (why was this chosen?)
- Feedback loops (did this decision prove correct?)

## Decision 1: Non-Linear Navigation with Recommended Path

**Decision**: Users can browse any module, but we suggest a learning sequence.

**Rationale**:
- ICP includes "self-directed learners" who want autonomy
- Also includes "beginners" who appreciate structure
- Serves both with recommendation + flexibility

**Alternative Considered**: Strict linear (modules 1→2→3)
- **Advantage**: Simpler learning design, guaranteed prerequisite coverage
- **Disadvantage**: Frustrates advanced users, doesn't match ICP preference for autonomy
- **Rejected Because**: ICP research showed flexibility was highly valued

**Impact on Generation**:
- Each module must have "Prerequisites: [modules]" optional info
- Navigation includes "Recommended Next" prompts, not requirements
- Glossary and index important for non-linear browsing

**Validation Plan** (Phase 5):
- Track which modules users visit in what order
- Survey 10 users on navigation experience
- Adjust if linear works better than expected

## Decision 2: 3-5 Mixed-Modality Exercises Per Module

**Decision**: Each module includes code exercises, reflection prompts, and mini-projects.

**Rationale**:
- ICP diversity: Some learn by doing code, others by reflecting
- Brand value: "Practical" means hands-on + thinking
- Evidence: Toolkit v2 showed mixed exercises were most popular

**Alternative Considered**: Single exercise type per module
- **Advantage**: Simpler content generation, consistent module structure
- **Disadvantage**: Doesn't serve diverse learning preferences
- **Rejected Because**: Your data showed learners wanted variety

**Impact on Generation**:
- Exercise templates must support 3 types: code, reflection, project
- Each module needs 1 coding, 2 reflection prompts, 1 mini-project
- Time budget: exercises should take 30-40% of module time

**Validation Plan** (Phase 5):
- Track exercise completion rates by type
- Identify which types correlate with high comprehension
- Refine mix in future courses

## Decision 3: Optional Assessment (No Mandatory Tests)

**Decision**: Knowledge checks available but not required for completion.

**Rationale**:
- Brand value: Respect learner autonomy
- ICP trait: Experienced engineers, self-motivated
- Evidence: Strategy Course learners preferred optional assessment

**Alternative Considered**: Required quizzes after each module
- **Advantage**: Ensures knowledge retention, easier completion tracking
- **Disadvantage**: Creates friction, drops completion rates with autonomous ICP
- **Rejected Because**: Your data showed optional was more effective with this audience

**Impact on Generation**:
- Include optional knowledge checks in module structure
- Checks should be 3-5 questions, quick to complete
- Include answer explanations, not just right/wrong

**Validation Plan** (Phase 5):
- Track voluntary completion rate of knowledge checks
- Survey users: does optional feel better than required?
- Evaluate learning outcomes (optional vs required knowledge check takers)

[Continue for each major decision...]
```

---

## Checklist: Phase 3 Complete

**Identity & Consistency:**
- [ ] Identity statement confirmed (or updated) at interview start
- [ ] Final identity statement matches all design decisions
- [ ] No contradictions between audience, pricing, depth, tone, and identity
- [ ] All [UNSURE] items resolved with evidence (not guesses)

**Decisions & Documentation:**
- [ ] All ambiguities from spec have been addressed
- [ ] Design decisions documented in shape.md with rationale
- [ ] interview-summary.md created with Q&A
- [ ] design-decisions.md created with rationale
- [ ] All CLARIFY and DECISION NEEDED tags removed from spec

**Alignment:**
- [ ] Standards alignment verified (writing, structure, voice, navigation)
- [ ] Product context alignment confirmed (mission, ICP, roadmap, metrics)
- [ ] Reference implementations reviewed and noted

**Readiness:**
- [ ] Spec is internally consistent (no contradictions)
- [ ] Team (if applicable) has approved refined spec
- [ ] production-queue.md is ready for Phase 4

---

## What Happens Next: Phase 4

Once Phase 3 is complete, agents have everything they need:

```
Phase 4 Ready State:
  Comprehensive spec with all decisions made
  Standards clearly stated (injected from agent-os)
  Reference implementations approved
  Product context documented
  Rationale for decisions captured
  No ambiguities remaining

Agents now:
 Read spec folder (plan, shape, standards, references)
 Understand design decisions and why
 Generate content aligned with all decisions
 Output to production queue autonomously
 Flag only true issues (not design questions)
```

**Next**: Move to `phase-4-parallel-production.md` to launch continuous generation.

---

## Troubleshooting: When Phase 3 Gets Stuck

### Problem: Too Many Ambiguities

**Symptom**: Interview keeps revealing new clarifications needed.

**Cause**: Spec was underdeveloped in Phase 2. Too much TBD.

**Fix**:
1. Go back to Phase 2 briefly (don't restart)
2. Complete research on unclear areas
3. Return to Phase 3 with more complete spec
4. Schedule shorter, focused interview sessions (30 min max each)

### Problem: Decisions Keep Changing

**Symptom**: You approve a design, then change your mind.

**Cause**: Usually indicates underlying uncertainty about project direction.

**Fix**:
1. Step back—what's the root uncertainty?
2. Return to product context questions
3. Revisit ICP definition (who is this for?)
4. Confirm business goal (why build this now?)
5. Make one final decision and lock it in shape.md

### Problem: Standards Conflict with Decisions

**Symptom**: Your decision contradicts established standards.

**Cause**: This project needs a different approach than your usual work.

**Fix**:
1. Explicitly document the exception in design-decisions.md
2. Note why this project is different
3. Flag for Phase 5 evaluation (is the exception justified?)
4. Decide: update standards if you want this to become new default, OR keep it as project-specific variant

### Problem: Can't Get Clear Answers

**Symptom**: User is uncertain or gives vague responses.

**Cause**: Could mean several things — and each has a different fix:

**Diagnosis & Fix:**

1. **The question is too abstract.** Reframe around the specific user: "If Sarah (your ideal user) sat down with this product tonight, what would she expect to happen?"

2. **The user is answering for "business in general" not "this specific product."** Bring it back to identity: "Remember, we're building [IDENTITY STATEMENT]. For THAT specific product, what makes sense?"

3. **The user genuinely doesn't know yet.** This is valuable information — use [UNSURE]:
   - Flag the question as `[UNSURE]`
   - Run quick research (10-15 min) to surface evidence-based options
   - Come back with 2-3 options grounded in data, not opinion
   - User decides with better information

4. **The decision doesn't matter much.** Some decisions are low-stakes. If the user can't choose between two similar options: pick the simpler one, document it as `[DEFAULT - LOW STAKES]`, and move on.

5. **The wrong person is answering.** If the question requires domain expertise the user doesn't have, note it and schedule a quick domain research session.

> **The core principle: [UNSURE] is always better than a confident wrong answer.** A wrong answer gets baked into the spec and produces wrong content across every deliverable. An [UNSURE] flag gets resolved with evidence and produces right content. Uncertainty is information — use it.

### Problem: Answers Seem Inconsistent Across Questions

**Symptom**: User says the audience is "beginners" but pricing is "$1,497," or says "self-paced" but wants "cohort discussion."

**Cause**: Identity drift during the interview — answers are pulling from different mental models of the product.

**Fix**:
1. Stop and read back the inconsistency: "You said [X] earlier but just said [Y]. These point in different directions."
2. Return to identity statement: "For [IDENTITY STATEMENT], which one is right?"
3. If identity itself is conflicted, pause the interview and resolve identity first
4. Update all affected answers once identity is re-confirmed

---

## Templates: Copy & Modify for Your Projects

### Interview Session Template

```markdown
# Interview Session: [Project Name]

**Date**: [Date]
**Duration**: [planned time, e.g., 45 min]
**Topics**: [what will be covered]

## Questions & Answers

[Add Q&A blocks as you go through interview]

## Decisions Made

[Track decisions captured]

## Follow-ups

[Any questions that need research before finalizing]

## Next Steps

- [ ] Update shape.md with decisions
- [ ] Update design-decisions.md with rationale
- [ ] Standards alignment check
- [ ] Final sign-off before Phase 4
```

### Standards Alignment Checklist

```markdown
# Standards Alignment Review

**Project**: [Name]
**Date**: [Date]
**Reviewer**: [You/Team]

## Writing & Tone
- [ ] Voice matches brand guidelines (agent-os/standards/writing/)
- [ ] Tone is [approved-tone] (formal/conversational/etc)
- [ ] Vocabulary level appropriate for ICP
- [ ] No jargon without explanation (per brand standard)

## Structure & Navigation
- [ ] Module structure follows course-module-template
- [ ] Exercise formats align with established patterns
- [ ] Navigation approach consistent with existing work
- [ ] Information architecture matches navigation standards

## Visual & Format
- [ ] Heading hierarchy correct (H1, H2, H3 nesting)
- [ ] Code blocks, callouts, emphasis use standard formatting
- [ ] Color and visual conventions match brand
- [ ] Accessibility standards (WCAG AA minimum)

## Completeness & Consistency
- [ ] No internal contradictions in spec
- [ ] All [CLARIFY] sections resolved
- [ ] Design rationale documented
- [ ] Reference implementations noted

## Sign-Off

- [ ] Spec is ready for Phase 4
- [ ] All parties have reviewed and approved
- [ ] Any exceptions to standards documented and justified
```

---

## Key Takeaway

Phase 3 prevents the most expensive type of rework: discovering mid-generation that a core design assumption was wrong. Three practices make this phase work:

1. **Identity Anchoring** — Confirm what you're building before answering any questions. If the identity is wrong, every answer will be wrong, even if each answer sounds reasonable on its own.

2. **Specificity Over Categories** — Answer for your specific user in a specific moment, not for "professionals" or "learners" in general. The more concrete your mental picture, the sharper your spec.

3. **Uncertainty as Strength** — [UNSURE] is always better than a confident wrong answer. Flag what you don't know, research it, then decide with evidence.

**The interview phase is not a delay — it's an acceleration. Thirty minutes now saves hours of rework later.**

---

**Next**: Read `phase-4-parallel-production.md` to launch continuous generation with your refined spec.
