# Spec-Driven Development (SDD) Workflow

**Purpose:** Systematic methodology for evaluating, refining, and implementing projects through structured phases that prevent drift and ensure strategic alignment.

**When to use:** Any project requiring evaluation of existing work, refinement of specifications, or systematic development of new initiatives.

---

## Core Principle

SDD prevents building the wrong thing by front-loading discovery, research, and specification before implementation. Each phase builds on the previous, creating a compounding foundation of clarity.

**The fundamental insight:** Most project failures come from building precisely what was asked for—when what was asked for wasn't actually what was needed. SDD surfaces that misalignment early.

---

## Project Setup (REQUIRED FIRST STEP)

**Before starting any SDD evaluation, you MUST complete project setup:**

### Step 1: Ask for Project Information
**DO NOT create any folders or files until you have confirmed:**

1. **Project Name/Title:**
   - Ask: "What would you like to name this SDD project?"
   - Suggest: "[Topic]_SDD_Evaluation" format
   - Confirm the exact name before proceeding

2. **Directory Location:**
   - Ask: "Where should I create the project folder?"
   - Default recommendation: `/mnt/Claude Cowork/AI Mastery Toolkit v3/6_Session_Working_Files/`
   - Alternative: User-specified location
   - Confirm the exact path before proceeding

### Step 2: Create Folder Structure
**Only after receiving confirmation, create:**

```
[Project_Name]/
├── Phase_0_Intent_Expression/
├── Phase_1_Research/
├── Phase_2_Interviews/
├── Phase_3_Design/
└── Supporting_Materials/
```

### Step 3: Confirm Setup
Display to user:
- Project name: [confirmed name]
- Location: [confirmed path]
- Folder structure created
- Ready to begin Phase 0

**CRITICAL:** Never skip this step. Always ask before creating folders.

---

## The Four-Phase Structure

### Phase 0: Intent Expression
**Goal:** Document what exists now vs. what should exist
**Output:** Intent Expression document

**Activities:**
1. Locate and understand the project/system being evaluated
2. Document current state comprehensively
3. Review strategic documents and context
4. Identify initial observations of misalignments
5. Define success criteria for the evaluation
6. Frame open questions for resolution

**Key Questions:**
- What exists today?
- What do strategic documents say should exist?
- What prompted this evaluation?
- What would success look like?

**Deliverable:** Phase 0 Intent Expression document capturing:
- Current state (what's live/built)
- Strategic foundation (what docs say)
- Initial misalignment observations
- Evaluation scope and success criteria
- Open questions to resolve

---

### Phase 1: Research
**Goal:** Understand WHY misalignments exist and explore implications
**Output:** Research Analysis document

**Activities:**
1. Deep analysis of strategic documents
2. Comparison of current state vs. strategic intent
3. Investigation of root causes for discrepancies
4. Research of best practices and standards
5. Documentation of what's working vs. what's misaligned
6. Categorization of findings (foundational vs. flexible)

**Key Questions:**
- Why do these misalignments exist?
- What are the implications of each approach?
- Which elements are foundational (must keep) vs. flexible (can change)?
- What does research/best practices suggest?
- What additional context is needed?

**Research Methods:**
- Read relevant strategic documents
- Use Task agents for parallel research
- Review industry best practices
- Analyze existing implementations
- Compare alternative approaches

**Deliverable:** Phase 1 Research Analysis with:
- Comprehensive findings for each misalignment
- Root cause analysis
- Implications and tradeoffs
- Foundational vs. flexible categorization
- Recommendations for Phase 2 questions

---

### Phase 2: Interviews
**Goal:** Clarify strategic decisions and resolve ambiguities
**Output:** Interview Questions document + Completed Answers

**Activities:**
1. Generate detailed interview questions organized by category
2. Present options with clear tradeoffs
3. Surface decision points requiring user input
4. Validate assumptions from research
5. Clarify which direction to take on conflicting approaches
6. Identify quick wins vs. strategic pivots

**Question Categories (typical):**
1. Brand Identity & Positioning
2. Target Audience Definition
3. Strategic Emphasis & Differentiation
4. Framework & Methodology Integration
5. Pricing & Business Model
6. Operational Reality & Readiness
7. Strategic Evolution & Authority

**Question Format:**
- Multiple choice with clear options where helpful
- Open-ended where thinking is needed
- Options present tradeoffs explicitly
- Build progressively (early answers inform later questions)
- Include "Other" options for flexibility

**Deliverable:** Phase 2 Interview Questions document with:
- Organized question categories
- Clear option presentations
- Tradeoff articulation
- Space for user responses
- Integration questions connecting categories

---

### Phase 3: Design
**Goal:** Synthesize findings into actionable recommendations
**Output:** Design Recommendations + Prioritized Action Plan

**Activities:**
1. Synthesize Phase 0, 1, and 2 findings
2. Create specific recommendations for each misalignment
3. Present remaining options with tradeoffs for user decision
4. Prioritize changes (quick wins vs. strategic pivots)
5. Sequence implementation with dependencies
6. Create timeline and resource estimates

**Recommendation Structure:**
- **Quick Wins** (0-7 days, low effort, high clarity)
- **Short-term Refinements** (1-4 weeks, moderate effort)
- **Strategic Pivots** (1-3 months, high effort, foundational changes)
- **Long-term Evolution** (3+ months, ongoing refinement)

**For Each Recommendation:**
- Current state
- Recommended change
- Rationale (why this matters)
- Implementation approach
- Dependencies
- Estimated effort
- Expected impact

**Deliverable:** Phase 3 Design document with:
- Executive summary of findings
- Specific recommendations organized by priority
- Prioritized action plan with sequencing
- Implementation roadmap with timelines
- Success metrics and validation approach

---

## Working File Structure

**Default Location:** `/mnt/Claude Cowork/AI Mastery Toolkit v3/6_Session_Working_Files/`

**IMPORTANT:** Complete Project Setup step BEFORE creating this structure. Ask user for project name and confirm directory location.

Create organized working folders for each phase:

```
[User-Confirmed-Project-Name]/
├── Phase_0_Intent_Expression/
│   └── Phase_0_Intent_Expression.md
├── Phase_1_Research/
│   └── Phase_1_Research_Analysis.md
├── Phase_2_Interviews/
│   └── Phase_2_Interview_Questions.md
├── Phase_3_Design/
│   └── Phase_3_Design_Recommendations.md
│   └── Action_Plan.md
└── Supporting_Materials/
    └── (any additional research, screenshots, etc.)
```

**Remember:** Never create folders until user confirms project name and location.

---

## Best Practices

### 1. Use Parallel Agents for Research
When multiple research tasks are independent, launch parallel Task agents to speed up Phase 1:
```
Agent 1: Read strategic document A
Agent 2: Read strategic document B
Agent 3: Analyze current implementation
Agent 4: Research best practices
Agent 5: Review competitive landscape
```

### 2. Don't Skip Phases
Each phase builds on the previous. Skipping Phase 1 to jump to recommendations creates poorly-informed decisions.

### 3. Update Strategic Documents Upstream
When work reveals strategic evolution (Phase 2 decisions differ from Phase 1 docs), **update the source strategic documents immediately**. This ensures documents remain the source of truth.

### 4. Distinguish Foundational vs. Flexible
In Phase 1, clearly categorize what MUST remain (foundational to vision) vs. what CAN change (implementation details). This prevents wasting time debating non-negotiables.

### 5. Present Options, Not Just Recommendations
In Phases 2 and 3, when multiple valid paths exist, present options with clear tradeoffs rather than forcing a single recommendation. Let the user choose based on their values and constraints.

### 6. Capture Quick Wins Early
In Phase 2, explicitly ask about quick wins (what can be fixed in days with minimal effort). Don't wait until Phase 3 to identify easy improvements.

### 7. Use Real Examples
When presenting options, use real examples or analogies ("like Tim Ferriss Community" vs. "like Y Combinator") to make abstract choices concrete.

---

## Common Pitfalls to Avoid

### ❌ Starting with Solutions
Don't jump to "here's what you should do" before understanding current state and strategic intent.

### ❌ Skipping Root Cause Analysis
Don't just identify misalignments—understand WHY they exist. The reason often reveals the right solution.

### ❌ Treating All Misalignments Equally
Some are critical (wrong brand name), some are strategic (positioning emphasis), some are minor (visual tweaks). Prioritize accordingly.

### ❌ Ignoring Operational Reality
Don't recommend changes that ignore current capabilities, resources, or constraints. Phase 1 should assess readiness.

### ❌ Creating Analysis Paralysis
SDD is about clarity for action, not endless research. Time-box each phase. Move forward with best available information.

### ❌ Forgetting to Update Source Docs
If Phase 2 clarifies that strategy has evolved, update strategic documents immediately. Don't let drift accumulate.

---

## Example Use Cases

### Use Case 1: Website Evaluation
- **Phase 0:** Document current site vs. strategic positioning docs
- **Phase 1:** Research why misalignments exist, what works vs. what doesn't
- **Phase 2:** Interview about brand, audience, positioning decisions
- **Phase 3:** Recommend site updates, create implementation plan

### Use Case 2: Product Feature Development
- **Phase 0:** Express intent for new feature, current state without it
- **Phase 1:** Research user needs, technical constraints, competitive landscape
- **Phase 2:** Interview about priorities, tradeoffs, must-haves vs. nice-to-haves
- **Phase 3:** Design feature spec, create development roadmap

### Use Case 3: Framework Refinement
- **Phase 0:** Document current framework vs. how it's being used
- **Phase 1:** Research what's working, what's causing friction, best practices
- **Phase 2:** Interview about core principles, flexibility points, evolution direction
- **Phase 3:** Refine framework, create rollout plan for changes

### Use Case 4: Strategic Alignment Audit
- **Phase 0:** Assess current operations vs. stated strategy
- **Phase 1:** Research root causes of drift, implications of approaches
- **Phase 2:** Interview to clarify current strategy, validate assumptions
- **Phase 3:** Create realignment plan, prioritize changes

---

## Integration with Other Workflows

### With Session Startup/Ending
- Start SDD evaluation at beginning of session after loading context
- Track progress in TodoWrite
- Save all phase documents to Session Working Files
- Update strategic documents in session ending workflow

### With Deliberate Practice
- SDD workflow IS deliberate practice for strategic thinking
- Track what works in Practice Tracker
- Refine SDD approach based on effectiveness

### With Documentation Standards
- Apply generation standards to all SDD documents
- Use consistent structure across phases
- Make documents skimmable and actionable

---

## Success Metrics

**You know SDD worked when:**

✅ Misalignments are surfaced early, not discovered during implementation
✅ Strategic decisions are made with full context and clear tradeoffs
✅ Implementation has clear specifications, not vague direction
✅ Team understands WHY decisions were made, not just WHAT to do
✅ Quick wins are identified and executed immediately
✅ Strategic pivots are sequenced properly with dependencies mapped
✅ Source documents are updated to reflect evolved strategy
✅ Project delivers what was actually needed, not just what was asked for

---

## Workflow Summary

```
Start
  ↓
Project Setup (REQUIRED)
  - Ask for project name
  - Ask for directory location
  - Create folder structure
  - Confirm setup with user
  ↓
Phase 0: Intent Expression
  - Document current state
  - Review strategic docs
  - Identify misalignments
  - Define success criteria
  ↓
Phase 1: Research
  - Deep analysis
  - Root cause investigation
  - Best practices research
  - Foundational vs. flexible categorization
  ↓
Phase 2: Interviews
  - Generate detailed questions
  - Present options with tradeoffs
  - Clarify strategic decisions
  - Identify quick wins
  ↓
Phase 3: Design
  - Synthesize all findings
  - Create recommendations
  - Prioritize action plan
  - Sequence implementation
  ↓
Implementation
  - Execute quick wins immediately
  - Update strategic documents
  - Follow phased roadmap
  - Validate and refine
```

---

## Template Documents

See the `templates/` subfolder for:
- Phase 0 Intent Expression template
- Phase 1 Research Analysis template
- Phase 2 Interview Questions template
- Phase 3 Design Recommendations template

---

**Remember:** The goal of SDD is not perfect specifications—it's preventing the waste of building the wrong thing. Better to spend 20% of time in discovery/research and build the right thing, than spend 100% of time building the wrong thing perfectly.

**The SDD Mantra:** "Slow down to speed up. Front-load clarity to compress execution."
