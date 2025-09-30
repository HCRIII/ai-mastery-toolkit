# Standards Integration in SDD Workflow

**Created:** 2026-02-13
**Last Updated:** 2026-02-28
**Purpose:** Multi-step workflow pattern for standardized processes
**Status:** Final

---

## Executive Summary

Standards are the foundation of autonomous generation at scale. They encode tribal knowledge, patterns from best work, and quality benchmarks into structured, reusable specifications. By extracting standards once from exemplary work and injecting them into agent context, the SDD workflow enables consistent, high-quality autonomous content generation with minimal human intervention.

## 1. Purpose: Standards Enable Quality at Scale

### The Core Problem
When autonomous agents generate content (courses, articles, lead magnets) without standards:
- Quality varies wildly
- Brand voice inconsistency
- Repeated mistakes across generations
- Lack of pattern recognition from successful work
- Manual review becomes overwhelming

### Standards as Solution
Standards solve these problems by:
- **Capturing excellence**: Extract patterns from your best work (top-performing courses, viral articles, effective lead magnets)
- **Enabling consistency**: All agents follow identical quality benchmarks
- **Reducing review burden**: ~80% fewer issues caught in Phase 5 verification
- **Supporting autonomy**: Agents generate confidently without constant human supervision
- **Building IP**: Standards become your organizational knowledge base

## 2. What Are Standards?

### Definition
Standards are **encoded tribal knowledge** extracted from exemplary work that define quality, consistency, and best practices for a content category.

### Characteristics
- **Extracted, not invented**: Derived from analysis of your actual successful work
- **Pattern-based**: Identify recurring elements that distinguish good work from great work
- **Concrete and specific**: Include examples, not vague guidelines
- **Testable**: Can be verified against during Phase 5
- **Minimal**: Focused on what matters most, not comprehensive rulebooks

### Real Examples
```
STANDARD (Module Structure)
Every course module contains:
  - Clear learning objective (1-2 sentences, action verb)
  - Context hook (why this matters to learner)
  - 3-5 core concepts (bite-sized, related)
  - 2-3 detailed examples from different domains
  - One "aha moment" concept that shifts perspective
  - Actionable exercise with success criteria

STANDARD (Writing Style)
- Conversational tone, 2nd person ("you")
- Sentence length: 10-18 words average
- One idea per sentence
- Avoid: jargon without definition, passive voice, abstract nouns
- Include: specific examples, vivid verbs, direct address
- Paragraph length: 2-4 sentences max

STANDARD (Voice/Tone)
- Confident but not arrogant
- Educational without condescension
- Direct without harshness
- Empathetic acknowledgment of struggle
- Examples: Use "this is tricky because..." vs "this is complex"
```

## 3. How Standards Integrate with SDD Workflow

### Phase 0: Standards Extraction (Prerequisite)
Before workflow begins, extract standards from exemplary work:

1. **Identify your best work** (top 10% in each category)
2. **Analyze patterns** using agent-os `discover-standards` tool
3. **Document standards** in concise, testable format
4. **Review with domain experts** for accuracy
5. **Version and maintain** in standards library

**Timing**: One-time investment (2-4 hours per content type), then continuous refinement

### Phase 1: Research → Standards Context
- Standards inform scope definition
- Identify relevant standards for content type
- Share standards in research briefings
- Establish baseline quality expectations

### Phase 2: Spec Creation → Standards Constraints
- Specs explicitly reference applicable standards
- Define spec success criteria using standards language
- Include "standards compliance" as acceptance criterion
- Link to specific standards files

### Phase 4: Parallel Production → Standards Injection
**Critical integration point**: Inject standards into agent context before generation

```yaml
Agent Prompt Pattern:
---
Task: Generate [content type]

Standards to follow:
- [Reference standards file path]
- [Key standard excerpts relevant to this task]

Success criteria (all must be met):
1. [Content-specific criterion]
2. [Standards compliance criterion]
3. [Brand consistency criterion]

Example from your standards:
[Specific example from standards]
```

### Phase 5: Verification → Standards Validation
- Reviewers check against standards (not subjective preference)
- Use standards as objective verification criteria
- Log violations in -ISSUES.md files
- Generate feedback loop data

### Continuous: Refinement Cycle
Standards improve based on generation data:
1. **Violations logged** → Most common issues identified
2. **Patterns emerge** → Root causes understood
3. **Standards updated** → Address gaps or refine guidance
4. **Agents retrained** → New context applied

## 4. Types of Standards for Content Production

### Essential Standard Files

#### A. Course/Module Structure Standards
**Location**: `standards/courses/module-structure.md`

```yaml
Sections:
- Learning objectives (format, quantity, language)
- Module introduction (length, tone, context)
- Concept explanations (depth, structure, examples per concept)
- Activities/exercises (type, difficulty progression)
- Summary (reinforcement approach)
- Glossary terms (definition format)
- Related modules (linking logic)
```

#### B. Writing Style Standards
**Location**: `standards/content/writing-style.md`

```yaml
Grammar & Mechanics:
- Sentence structure patterns
- Vocabulary level (Flesch-Kincaid grade target)
- Technical term usage
- Acronym definition requirements

Clarity Markers:
- Paragraph structure
- Transition phrases
- List formatting
- Emphasis techniques

Voice-specific Patterns:
- First/second/third person usage
- Active/passive voice ratio
- Question usage
- Conversational markers
```

#### C. Brand Voice & Tone Standards
**Location**: `standards/branding/voice-tone.md`

```yaml
Voice Elements:
- Perspective and persona
- Values reflected in language
- Attitude/personality
- Authority level (expert, peer, guide)

Tone Variations:
- By audience (beginner, advanced, executive)
- By context (learning, troubleshooting, inspirational)
- By emotion (encouraging, serious, playful)

Prohibited Language:
- Jargon or terms to avoid
- Clichés
- Overly casual/formal expressions
```

#### D. Quality Review Checklist Standards
**Location**: `standards/quality/review-checklist.md`

```yaml
Content Quality:
- Accuracy verification process
- Completeness check
- Example relevance criteria
- Exercise effectiveness criteria

Structural Quality:
- Organization logic
- Flow assessment
- Pacing evaluation
- Visual hierarchy

Brand Quality:
- Voice consistency
- Tone appropriateness
- Value alignment
- Audience connection
```

#### E. Format-Specific Standards
Create for your primary content types:
- `standards/courses/lesson-template.md`
- `standards/content/blog-post-structure.md`
- `standards/content/lead-magnet-elements.md`
- `standards/content/email-sequence-style.md`
- `standards/content/landing-page-copy.md`

## 5. How to Extract Standards

### Using agent-os `discover-standards` Tool

#### Step 1: Prepare Exemplary Work Collection
```bash
# Collect your top-performing content
/exemplary-work/
   courses/
      best-course-1.md
      best-course-2.md
      best-course-3.md
   articles/
      viral-article-1.md
      viral-article-2.md
      viral-article-3.md
   lead-magnets/
       top-lead-magnet-1.md
       top-lead-magnet-2.md
```

#### Step 2: Run Discovery
```
agent discover-standards \
  --source /exemplary-work/ \
  --category courses \
  --output /standards/courses/discovered.md \
  --analysis-depth detailed
```

#### Step 3: Manual Refinement
The agent generates candidates; you:
1. Review for accuracy (vs your brand)
2. Prioritize (most impactful first)
3. Make concise (remove verbosity)
4. Add examples (illustrate the standard)
5. Test against counter-examples

#### Step 4: Domain Expert Review
- Share with team members who create this content type
- Collect feedback on missing standards
- Validate that standards reflect actual practice
- Refine language for clarity

### Manual Extraction (Without agent-os Tools)

If not using agent-os, follow this structured approach:

```markdown
## Standard: [Name]

### Pattern Observed
[What did you notice across best work?]

### Specific Examples
1. Example from [work A]
2. Example from [work B]
3. Example from [work C]

### Actionable Guidance
[What should agents do differently?]

### How to Verify
[Test for compliance]

### Why This Matters
[Business impact of following this standard]
```

## 6. How to Inject Standards into Generation Agents

### Method 1: Direct Inclusion in System Prompt

```markdown
You are a course creation specialist. Your task is to generate course modules.

CRITICAL: You MUST follow these standards. They define quality for this organization.

## Standards Reference
- Source: /standards/courses/module-structure.md
- Every module must have clear, measurable learning objectives
- Follow the structure: Objective → Context → Concepts → Examples → Exercise
- Use conversational tone from /standards/branding/voice-tone.md

[Include key excerpts here - see below for structure]
```

### Method 2: Standards Reference File Pattern

Create a minimal reference file injected with each task:

**File**: `_standards-context-for-generation.md`
```markdown
# Standards Context for [Agent Task]

## Applicable Standards

### Module Structure
- Reference: /standards/courses/module-structure.md
- Key requirement: Each module = 1 clear objective + 3-5 concepts + 2 examples min

### Writing Style
- Reference: /standards/content/writing-style.md
- Key requirement: Conversational, 2nd person, 10-18 word sentences

### Voice/Tone
- Reference: /standards/branding/voice-tone.md
- Key examples: [List 2-3 voice patterns from your standards]

## Success Criteria Using Standards

 Module learning objective clearly defined
 Examples provided for each concept
 Writing style matches brand voice
 Exercise has success criteria
```

### Method 3: Structured Context Format

```yaml
STANDARDS_CONTEXT:
  course_modules:
    - file: /standards/courses/module-structure.md
      critical_elements:
        - clear_learning_objectives
        - examples_per_concept_minimum: 2
        - exercise_with_success_criteria
    - file: /standards/content/writing-style.md
      critical_elements:
        - tone: conversational
        - perspective: second_person
        - sentence_length_target: 10-18_words
    - file: /standards/branding/voice-tone.md
      critical_elements:
        - confident_not_arrogant
        - educational_without_condescension

  verification_checklist:
    - name: Standards Compliance Check
      file: /standards/quality/review-checklist.md
```

## 7. Standards File Structure & Conciseness

### Optimal Format

```markdown
# [Standard Name]

## What This Means
[1-2 sentences defining the standard]

## Looks Like
[Show 1-2 positive examples]

## Doesn't Look Like
[Show 1-2 negative examples]

## How to Check
[Specific, testable verification method]

## Why It Matters
[1-2 sentences on business impact]
```

### Conciseness Requirements

**Target length per standard**: 150-250 words max

**Eliminate**:
- Lengthy explanations (link to courses instead)
- Philosophical discussions
- Multiple edge cases (focus on core pattern)
- Irrelevant context

**Keep**:
- Core pattern/requirement
- Concrete examples (positive and negative)
- Verification method
- Business rationale

### Example: Concise Standards Format

```markdown
# Learning Objective Clarity

## What This Means
Every module starts with 1-2 learning objectives using action verbs.
Learner should know exactly what they'll be able to DO by module end.

## Looks Like
 "Create a user research plan using interviews and surveys"
 "Evaluate AI model performance using accuracy, precision, and recall"

## Doesn't Look Like
 "Understanding user research"
 "Learn about model evaluation"

## How to Check
1. Find learning objectives (usually top of module)
2. Does each start with action verb (create, evaluate, design, analyze)?
3. Can learner demonstrate the skill? (not just "know about")

## Why It Matters
Clear objectives reduce learner confusion, improve completion rates,
and make it easier to design targeted exercises.
```

## 8. Example Standards for Common Content Types

### Example 1: Course Module Standards

**File**: `standards/courses/module-structure.md`

```markdown
# Course Module Structure

## Section: Learning Objectives
**Standard**: Modules begin with 1-2 measurable learning objectives using action verbs.

 Example: "Analyze campaign performance data using spreadsheet dashboards"
 Example: "Understand digital marketing concepts"

How to verify: Each objective contains action verb + skill + context.

---

## Section: Context Hook
**Standard**: First paragraph (2-3 sentences) explains why this matters to the learner.

 Example: "Most marketing dashboards overwhelm with data.
This module teaches you to focus on metrics that actually predict revenue,
so you can spend less time in spreadsheets."

 Example: "Marketing dashboards are important tools. Let's learn about them."

How to verify: Opening paragraph answers "Why does the learner need this?"

---

## Section: Concept Explanations
**Standard**: Break each concept into bite-sized chunks (150-300 words).
Include 2+ examples per concept from different domains.

 Structure per concept:
  - Definition (1 sentence)
  - Why it matters (1-2 sentences)
  - How it works (2-3 sentences)
  - Example 1 (specific scenario)
  - Example 2 (different domain/context)

---

## Section: Exercise Design
**Standard**: Every module includes 1 exercise with clear success criteria.
Exercise should be completable in 5-15 minutes.

 Elements:
  - Clear task description (what to do)
  - Required inputs (what they start with)
  - Success criteria (how to know if they succeeded)
  - One extension challenge (optional difficulty increase)

---

## Section: Module Summary
**Standard**: End with 3-4 sentence summary reinforcing key concepts
and previewing next module.

How to verify: Summary is rewarding (reinforces learning) not repetitive.
```

### Example 2: Blog Post Standards

**File**: `standards/content/blog-post-structure.md`

```markdown
# Blog Post Structure

## Hook Opening
**Standard**: First 2-3 sentences create curiosity or identification.
Reader should feel "this is about me" or "I need to know this."

 Example: "You've spent 3 hours perfecting your product description.
Your conversion rate still hasn't moved.
What if the problem isn't your words, but your timing?"

---

## Headline
**Standard**: 8-12 words, specific benefit, curiosity or specificity element.

 Examples:
  - "How to Write Product Descriptions That Convert 23% Better"
  - "The Single Email Mistake Losing You 40% of Signups"

 Examples:
  - "Writing Better Copy"
  - "Email Marketing Tips and Tricks"

---

## Body Structure
**Standard**: Follow [Situation → Complication → Resolution → Payoff]

- Situation: Problem they recognize
- Complication: Why it's harder than they thought
- Resolution: What worked for us
- Payoff: What they can achieve

---

## Proof Elements
**Standard**: Include 2-3 concrete proof points per article.

 Includes:
  - Specific metrics (not "significant improvement," but "23% increase")
  - Real example (client story or case study excerpt)
  - Process transparency (show your work)

---

## Call to Action
**Standard**: One clear CTA at end, specific and benefit-focused.

 Examples:
  - "Download our product description template (gets 34% conversion lift)"
  - "Book 15-min research call to assess your copy"

 Examples:
  - "Let us know what you think"
  - "Subscribe to our newsletter"
```

### Example 3: Lead Magnet Standards

**File**: `standards/content/lead-magnet-elements.md`

```markdown
# Lead Magnet Quality Standards

## Core Utility
**Standard**: Magnet solves 1 specific problem. Reader gets value in <10 minutes.

 Examples:
  - Template (ready to use immediately)
  - Checklist (audit their work right now)
  - Mini-course email (sequence they start today)
  - Quick assessment (learn one thing about themselves)

---

## Promise Clarity
**Standard**: Promise is specific and time-bound.

 Examples:
  - "Get the 23-point email template that got 41% opens"
  - "Checklist: 12 setup mistakes losing you half your conversions"

 Examples:
  - "Free marketing guide"
  - "Email templates"

---

## Positioning in Funnel
**Standard**: Lead magnet positions for next logical offer, not competing offer.

 Example:
  Magnet = "Email template checklist"
  → Next offer = "Email copywriting course" (natural progression)

 Example:
  Magnet = "Email template"
  → Next offer = "WordPress plugin" (unrelated)

---

## Design Accessibility
**Standard**: Magnet works as PDF, web page, and email. No fancy formatting required.

How to verify: Can reader access and use in email, browser, and PDF?
```

## 9. Standards Violation Handling

### Logging Violations in Phase 5

When reviewers find content that violates standards, document in `-ISSUES.md` files:

**File Structure**: `[content-name]-ISSUES.md`

```markdown
# Issues: [Generated Content Title]

## Standards Violations

### VIOLATION #1: Writing Style
**Standard**: Writing style must use conversational tone, 2nd person perspective
**Location**: Module 2, "Understanding Dashboards" section
**Issue**: "The data analyst is responsible for creating dashboards"
**Should be**: "You create dashboards to focus on metrics that matter"
**Severity**: Medium (3+ instances found)

---

### VIOLATION #2: Learning Objective Format
**Standard**: Learning objectives must start with action verb
**Location**: Module 3 objective
**Current**: "Learning about data visualization"
**Should be**: "Create interactive dashboards using [tool]"
**Severity**: High (blocks learner understanding)

---

## Non-Standards Issues
[Other quality issues that aren't standards-related]
```

### Violation Categorization

```yaml
Severity Levels:
  Critical:
    - Incorrect information
    - Brand values violated
    - Makes content unusable
    - Example: "We believe in inclusive language" but content uses gendered examples

  High:
    - Multiple standard violations
    - Impacts effectiveness
    - Example: Learning objectives don't have action verbs (5 instances)

  Medium:
    - Isolated standard violation
    - Noticeable inconsistency
    - Example: One section uses 3rd person instead of 2nd person

  Low:
    - Stylistic preference
    - Minimal impact
    - Example: Inconsistent capitalization in subheadings
```

## 10. Refinement Cycle: Continuous Standards Evolution

### The Cycle

```
Generation
    ↓
[Agent creates content using standards]
    ↓
Violation Detection
    ↓
[Phase 5 reviewer logs violations in -ISSUES.md]
    ↓
Pattern Analysis
    ↓
[Team identifies common violation patterns]
    ↓
Feedback Generation
    ↓
[Determine if standard is unclear, too strict, or agent misunderstood]
    ↓
Standard Update
    ↓
[Revise standard or add clarification]
    ↓
Retraining
    ↓
[Inject updated standard into next generation batch]
    ↓
Generation [Improved]
```

### Example Refinement Scenario

**Week 1**: Generate 10 course modules using standards
- Reviewer logs in -ISSUES.md: "7/10 modules don't include preview of next module"

**Week 2**: Team analyzes
- Standard says "preview next module" but doesn't explain HOW
- Decision: Standard is unclear, not agent error

**Week 3**: Standard update
```markdown
# Module Summary (UPDATED)

**Standard**: End with 2 sentences previewing next module.

BEFORE (unclear):
"Module summary should preview the next module"

AFTER (clear):
"After module summary, add: 'Next, we'll learn [specific topic name],
which lets you [specific capability learner will gain].'"

 Example:
"Next, we'll learn A/B testing fundamentals, which lets you optimize
your conversion rates before scaling campaigns."
```

**Week 4**: New generation batch uses clarified standard → violations drop to 1/10

### Refinement Frequency
- **Daily**: Log violations during review
- **Weekly**: Analyze patterns
- **Bi-weekly**: Update standards if pattern emerges
- **Monthly**: Full standards health review

## 11. Upward Feedback: How Standards Become Business IP

### The Virtuous Cycle

Standards don't just improve generation quality—they build your organizational knowledge base:

```
Best Work → Standards Extracted
    ↓
Standards Guide Agents
    ↓
Agents Generate Quality Content
    ↓
Violations Reveal Gaps
    ↓
Refinement Data Captures New Patterns
    ↓
Standards Improve (Tribal Knowledge Encoded)
    ↓
Team Knowledge Increases
    ↓
Higher-Quality Work from Everyone (including humans)
    ↓
New Best Work Examples
    ↓
[Cycle Continues - IP Deepens]
```

### Knowledge Capture Methods

#### A. Violation Patterns → Innovation Insights
```
Question: What do violations reveal?

Example: 80% of generated modules lack memorable "aha moments"
Action: Create new standard for aha-moment design
Outcome: All future content includes transformative insights
Result: Business IP: "Proven aha-moment structure" → can train humans using it
```

#### B. Refinement Requests → Process Improvements
```
Question: What standards improvements get requested most?

Example: Agents struggle with "conversational tone" standard
Action: Develop tone-training module with before/after examples
Outcome: Better agent generation AND human writers improve
Result: Business IP: "Tone training curriculum" → licensing/consulting value
```

#### C. Standard Success Rates → Competitive Advantage
```
Question: Which standards correlate with content success?

Example: "Clear learning objectives + concrete examples" = 3x engagement lift
Action: Make this standard mandatory, deepen training
Outcome: All content benefits from this pattern
Result: Business IP: "Engagement multiplier methodology" → differentiation
```

### Capturing and Sharing Knowledge

Create a living knowledge repository:

```
/your-ip-library/
   standards/ (extracted tribal knowledge)
   patterns/ (what correlates with success)
   refinements/ (how standards evolved)
   case-studies/ (before/after generation examples)
   training-materials/ (how to teach humans these standards)
```

This becomes your competitive moat—standards others haven't discovered yet.

## 12. Prompt Patterns for Standards-Aware Generation

### Pattern 1: Minimal Reference (Concise)

Use when standards are well-established and agent is experienced:

```markdown
You are a course module creator.

STANDARDS TO FOLLOW:
- /standards/courses/module-structure.md
- /standards/content/writing-style.md
- /standards/branding/voice-tone.md

Generate a module for: [topic]

Verify your output against:
 Learning objective uses action verb
 Includes 3+ examples from different domains
 Writing is conversational, 2nd person
 Includes exercise with success criteria
```

### Pattern 2: Full Context (Safe for New Tasks)

Use for new content types, complex standards, or agent training:

```markdown
You are a course module creator for [organization].

Your goal is to create exceptional learning experiences that follow proven patterns.

STANDARDS CONTEXT:

## Module Structure
Reference: /standards/courses/module-structure.md

Every module MUST include:
1. Learning objective (action verb, specific outcome)
    "Design a user research plan using interviews"
    "Understanding user research"

2. Context hook (why learner needs this, 2-3 sentences)
    "Most user research wastes time. This module teaches..."
    "User research is important..."

3. 3-5 core concepts, each with 2+ examples from different domains

4. One memorable "aha moment" that shifts perspective

5. Exercise with clear success criteria, completable in 10-15 minutes

6. Summary (2-3 sentences) + preview of next module

## Writing Style
Reference: /standards/content/writing-style.md

- Tone: Conversational, helpful, direct
- Perspective: Second person ("you")
- Sentence length: 10-18 words average (test yourself)
- Avoid: jargon without definition, passive voice, abstract nouns
- Include: specific examples, vivid action verbs, direct address

Example of good style:
"You probably think A/B testing is complicated.
Actually, it's a simple 3-step process you can run today."

Example of poor style:
"A/B testing represents a methodological approach to optimization
where practitioners implement simultaneous variants and measure efficacy."

## Voice & Tone
Reference: /standards/branding/voice-tone.md

- Be confident without being arrogant
- Be educational without condescension
- Be direct without harshness
- Acknowledge learner's struggle genuinely

Examples of correct voice:
"This is genuinely tricky because..."
"Most people get this wrong at first, which is totally normal..."

Examples of incorrect voice:
"This is extremely complex for beginners..."
"Obviously, you need to understand..."

TASK:
Create a module about: [specific topic]

TARGET LEARNER: [who are they?]

SUCCESS CRITERIA:
 Follows all structure elements above
 Learning objective passes the action-verb test
 Includes minimum 2 examples per concept, different domains
 Writing passes the sentence-length test (10-18 words avg)
 Includes one clear aha-moment
 Exercise is specific and measurable
 Voice is confident but not arrogant

BEFORE YOU SUBMIT:
Review your module against each success criterion above.
If any criterion isn't clearly met, revise before submitting.
```

### Pattern 3: Verification-Focused (Phase 5 Preparation)

Use as agent reflection prompt before submission:

```markdown
STANDARDS VERIFICATION CHECKLIST

Before submitting your generated module, verify against these standards:

## Module Structure (Reference: /standards/courses/module-structure.md)
 Learning objective present? (Check: does it start with action verb?)
 Context hook explains why learner needs this?
 3-5 core concepts included?
 Each concept has 2+ examples from different domains?
 One memorable "aha moment" concept?
 Exercise has clear success criteria?
 Summary + next module preview included?

## Writing Style (Reference: /standards/content/writing-style.md)
 Conversational tone throughout?
 Second person perspective ("you")?
 Sentence length test: Count words in 5 random sentences. Average 10-18?
 No undefined jargon?
 Active voice dominant?
 Specific examples, not abstract?

## Voice & Tone (Reference: /standards/branding/voice-tone.md)
 Confident but not arrogant?
 Helpful, not condescending?
 Direct and clear?
 Genuinely acknowledges learner struggle?

## Quality Standards (Reference: /standards/quality/review-checklist.md)
 Information is accurate?
 Examples are relevant to learner's goals?
 Pacing allows space to absorb content?
 Flow from concept to concept feels natural?

If ANY checkbox is unchecked, revise before submitting.
Flag any that you're unsure about with a comment.
```

### Pattern 4: Feedback-Loop Integration

Use in Phase 5 to agents about what needs refinement:

```markdown
VIOLATION FEEDBACK - STANDARDS UPDATE

Your generated module had the following standards violations:

VIOLATION #1: Learning Objective Clarity
Standard: /standards/courses/module-structure.md
Your version: "Learn about A/B testing"
Should be: [action verb] [specific skill]
Example: "Design and run an A/B test using our platform"

Why this matters: Learners need to know exactly what they'll be able to DO,
not just what topic they'll learn about.

REVISION:
[ ] Rewrite all learning objectives to start with action verb
[ ] List what learner will be able to do by end of module

---

VIOLATION #2: Example Diversity
Standard: /standards/courses/module-structure.md requires 2+ examples per concept
from different domains

Your module: SaaS company examples only

Why this matters: When examples are all from one domain, learners think "this
applies to SaaS only." Multiple domains show the principle is universal.

REVISION:
[ ] Add second example from different industry (ecommerce, nonprofits, etc.)
[ ] Verify each concept has 2+ examples

---

NEXT GENERATION:
Use this feedback to improve. These violations should be ZERO on your next batch.
```

## Integration Checklist: Implementing Standards in Your SDD

- [ ] Phase 0: Extract standards from best work (use discover-standards or manual process)
- [ ] Phase 0: Organize standards in /standards/ directory with category structure
- [ ] Phase 0: Have domain experts review standards for accuracy
- [ ] Phase 1: Include applicable standards files in research briefing
- [ ] Phase 2: Link to standards in spec acceptance criteria
- [ ] Phase 4: Inject standards into agent system prompts before generation
- [ ] Phase 4: Use appropriate prompt pattern (minimal, full, or verification-focused)
- [ ] Phase 5: Create -ISSUES.md files documenting all violations
- [ ] Phase 5: Categorize violations by severity and pattern
- [ ] Weekly: Analyze violation patterns to identify standards gaps
- [ ] Bi-weekly: Update standards based on refinement feedback
- [ ] Monthly: Review standards health and effectiveness metrics
- [ ] Continuous: Build knowledge repository and train humans on standards

## 13. Toolkit Document Naming Standards

*Added 2026-02-28 — aligns SDD with the Document Type Registry and Foundation Standards. Updated 2026-03-04 — CX Level designation and Audit Meta-Block added.*

### CX Level Designation

All Level 1–3 Living Documents must include a `**CX Level:**` field in their Ph0 header block (e.g., `CX Level: CX1`). This identifies which Context File hierarchy level governs the document. It is required for compliance scans and session context loading to function accurately. See `16_living-document-protocol.md` for the full header standard.

### Audit Meta-Block

After a Living Document completes the Phase 2 Substance Audit, an Audit Meta-Block is written immediately after the Ph0 header block. Format and valid values are defined in `16_living-document-protocol.md`. This block is a Ph0 compliance artifact for post-audit documents (see `15_level-profiles.md`).

When SDD produces or references files, the following naming standards apply. These are governed by `3_AI_&_Human_Capabilities/0_Documentation_Standards/Document_Type_Registry.md` and `1_Foundation_Standards_v2.2.md`.

### File Type Suffixes (Not Prefixes)

Document type markers are **suffixes** placed after the descriptive name and before the version number. Pattern: `Descriptive_Name_TYPE_vX.md`

**Process document types (SDD output files):**
- `Offering_Title_Specification_v1.0.md` — formal specification document (8_Specifications SCHEMA)
- `Content_Topic_Framework_v1.0.md` — framework document
- `Production_Process_Workflow_v1.0.md` — workflow document

**Content output types:**
- `Issue_12_Newsletter.md`, `Topic_Blog_v1.0.md`, `Topic_LI-Post.md`, etc.

**Special-purpose file types (suffix form):**
- `Name_TEMPLATE_vX.md` (NOT `TEMPLATE_Name_vX.md`)
- `Name_SCHEMA_vX.md` (NOT `SCHEMA_Name_vX.md`)
- `Name_EXAMPLE.md` (NOT `EXAMPLE_Name.md`)

### Specification Document Lifecycle Status

When Phase 6 (Baseline) of the SDD spec creation workflow is complete, the correct status for a Specification document is **Baselined** — not "Final." The distinction matters:

- **Final** — applies to content documents (Newsletter, Blog, Email) when ready for publication
- **Baselined** — applies to Specification documents when approved and locked under change control

A Baselined Specification is frozen: changes require a versioned amendment with rationale. This is different from a Final content document, which can be superseded by the next issue.

**Metadata header for a Baselined Specification:**
```
Status: Baselined (Version: v1.0, Approved By: [name], Date: YYYY-MM-DD)
```

### 8_Specifications Governing Documents

When SDD Phase 2 produces a Specification document, the canonical governing standards are:

- **Schema (definition of what every specification must contain):** `3_AI_&_Human_Capabilities/8_Specifications/Specification_Document_Standard_SCHEMA.md`
- **Template (blank starting point):** `3_AI_&_Human_Capabilities/8_Specifications/Specification_Document_TEMPLATE.md`
- **Worked example:** `3_AI_&_Human_Capabilities/8_Specifications/Specification_Companion_Course_EXAMPLE.md`

The 8_Specifications SCHEMA is the authority on section requirements. The TEMPLATE is the mandatory starting point. Do not begin specification writing from a blank document.

---

## Conclusion

Standards are the bridge between human excellence and autonomous generation at scale. By extracting patterns from your best work and injecting them into agent context, you achieve:

- **Consistency**: All agents follow identical quality benchmarks
- **Autonomy**: Agents generate confidently without constant supervision
- **Learning**: Violations drive standards refinement and knowledge capture
- **Scale**: Quality remains high as volume increases
- **IP**: Standards become organizational knowledge asset

The SDD workflow makes standards-driven generation systematic and sustainable.
