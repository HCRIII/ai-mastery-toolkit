# Spec-Driven Development Workflow: Orchestrator Prompts Library

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Proven prompt pattern with examples and usage guidance
**Status:** Final

---

A comprehensive, copy-pasteable prompt library for orchestrating the SDD workflow across all five phases. Each prompt is production-ready and includes integration points for seamless workflow execution.

---

## PHASE 1: RESEARCH & DISCOVERY

### 1.1 Start Collaborative Research

**When to use:** Begin investigation of a new domain or topic with human-AI collaboration

**Prompt:**
```
I need to start collaborative research on [TOPIC/DOMAIN].

Research direction: [SPECIFIC FOCUS AREA]
Constraints: [TIME/SCOPE/RESOURCES]
Target audience: [WHO WILL USE FINDINGS]

Please start by:
1. Identifying key research questions we should explore
2. Suggesting 3-5 parallel research paths we could pursue
3. Recommending collaborative research methods (where I research some aspects, you research others)
4. Proposing how to synthesize findings

Let's structure this as an iterative dialogue where you share findings, I provide context/corrections, and we build a shared understanding together.
```

**Expected output:**
- 4-6 key research questions
- Parallel research paths with rationales
- Suggested collaboration structure
- Synthesis approach

**Common variations:**
- "Start with domain history, then move to current state"
- "Focus first on user perspectives, then technical requirements"
- "Emphasize contrarian viewpoints and alternatives"

**Integration points:**
- Next phase: Use findings as input to explicit research phase
- Standards: Check if findings align with existing standards
- Interview: Bring questions as discussion prompts

---

### 1.2 Start Explicit Research

**When to use:** Conduct structured, evidence-based research on a specific area

**Prompt:**
```
I need explicit research on: [SPECIFIC TOPIC]

Research scope:
- Primary focus: [MAIN QUESTION]
- Secondary questions: [2-3 RELATED QUESTIONS]
- Evidence types needed: [e.g., peer-reviewed, case studies, practitioner reports]
- Time period: [e.g., last 3 years, historical]

Please research by:
1. Finding the strongest evidence FOR this approach
2. Finding the strongest evidence AGAINST this approach
3. Identifying gaps in current knowledge
4. Summarizing the state of consensus (if any)
5. Flagging areas of legitimate disagreement

Format findings as: [Evidence type] | [Source/Authority] | [Key finding] | [Implications]
```

**Expected output:**
- Evidence matrix with sources
- For/against analysis
- Knowledge gaps identified
- Consensus summary
- Disagreement landscape

**Common variations:**
- "Focus only on experimental/empirical evidence"
- "Include expert opinion pieces and white papers"
- "Prioritize recent implementations over theoretical work"

**Integration points:**
- Comparison: Cross-reference with collaborative research
- Phase 2: Input to specification creation
- Standards: Check evidence quality and recency

---

### 1.3 Deepen Research on Specific Area

**When to use:** Investigate identified gaps or explore discovered sub-topics in detail

**Prompt:**
```
Based on our research so far, I want to deepen exploration of: [SPECIFIC AREA]

Current understanding: [1-2 SENTENCE SUMMARY]
Gap identified: [WHAT WE NEED TO KNOW]
Target depth: [e.g., practitioner-level, academic rigor, comparative analysis]

Please investigate:
1. Root causes and foundational concepts
2. Historical development and evolution
3. Current best practices and emerging alternatives
4. Common mistakes and lessons learned
5. Connection points to adjacent topics

Synthesize into: [1-2 page deep-dive summary with actionable insights]
```

**Expected output:**
- Deep-dive summary (1,000-1,500 words)
- Foundational concepts explained
- Evolution timeline
- Best practices with trade-offs
- Common pitfalls and lessons
- Connection map to related topics

**Common variations:**
- "Focus on implementation details and practical challenges"
- "Emphasize theoretical foundations"
- "Highlight emerging or contrarian approaches"

**Integration points:**
- Phase 2: Feeds directly into specification decisions
- Interview: Use as reference material
- Standards: Extract best practices for standards definition

---

### 1.4 Request Research Synthesis

**When to use:** Consolidate multiple research streams into coherent framework

**Prompt:**
```
Synthesize research findings into a coherent framework.

Research streams completed:
1. [STREAM 1] - [1-2 SENTENCE SUMMARY]
2. [STREAM 2] - [1-2 SENTENCE SUMMARY]
3. [STREAM 3] - [1-2 SENTENCE SUMMARY]

Integration requirement: [HOW SHOULD STREAMS CONNECT]
Synthesis depth: [OVERVIEW vs COMPREHENSIVE]
Target format: [e.g., framework diagram, decision tree, comparison matrix]

Please create:
1. Unified framework showing how findings connect
2. Synthesis narrative explaining the relationships
3. Identified tensions or contradictions and how to resolve them
4. Ready-to-use insights for specification creation
5. Questions still unanswered (for Phase 2 refinement)
```

**Expected output:**
- Unified framework document
- Synthesis narrative (1-2 pages)
- Contradiction resolution
- Actionable insights list
- Remaining questions captured

**Common variations:**
- "Create a decision tree from the synthesis"
- "Emphasize practical applications"
- "Highlight strategic implications"

**Integration points:**
- Next phase: Direct input to Phase 2
- Archive: Save as research deliverable
- Interview: Reference during clarification

---

## PHASE 2: SPECIFICATION & QUEUE CREATION

### 2.1 Create Spec Folder from Research

**When to use:** Transition research findings into structured specification

**Prompt:**
```
Create specification folder structure from our research.

Research summary: [KEY FINDINGS - 2-3 PARAGRAPHS]
Domain: [DOMAIN NAME]
Scope: [CLEAR BOUNDARIES]
Audience: [PRIMARY USERS/STAKEHOLDERS]

Create a /specs/[DOMAIN] folder containing:
1. index.md - Overview and quick navigation
2. shape.md - Core decisions and architecture (we'll refine this next)
3. constraints.md - Scope boundaries and limitations
4. standards-checklist.md - Relevant standards to maintain
5. glossary.md - Domain-specific terminology

For each file, include:
- Clear purpose statement
- 3-5 opening sections ready for development
- Placeholder sections for interview findings
- Cross-reference points to other files
- Status tracking fields
```

**Expected output:**
- Folder structure created
- Five template files ready for editing
- Navigation guide
- Placeholder content with guidance

**Common variations:**
- "Use existing spec as template"
- "Add domain-specific additional files"
- "Create public vs internal version structure"

**Integration points:**
- Phase 3: Use shape.md as interview reference
- Phase 4: Reference throughout production
- Standards: Link to standards-integration.md

---

### 2.2 Generate Production Queue Template

**When to use:** Set up the work breakdown structure for parallel production

**Prompt:**
```
Generate production queue structure for: [DOMAIN/SPEC]

Specification summary: [1-2 PARAGRAPHS]
Team size: [NUMBER OF AGENTS/WORKERS]
Timeline: [DEADLINE/DURATION]
Quality standard: [e.g., production-ready, draft, experimental]

Create /queue folder with:
1.  queue-index.md - Central dashboard
2.  inbox/ - New items awaiting processing
3.  in-progress/ - Active work items
4.  completed/ - Finished and verified work
5.  batch-operations.md - Instructions for bulk actions

For queue-index.md include:
- Current status summary
- Work items by priority
- Team member assignments
- Blockers and dependencies
- Completion percentage

For each queue item, template with:
- Item ID and title
- Acceptance criteria
- Estimated complexity
- Dependencies
- Status tracking fields
```

**Expected output:**
- Queue folder structure
- Dashboard template (queue-index.md)
- Item template with metadata
- Batch operations guide
- Status tracking setup

**Common variations:**
- "Create priority-based queue structure"
- "Add skill/specialty-based lanes"
- "Include SLA/deadline tracking"

**Integration points:**
- Phase 4: Execute against this queue
- Standards: Link to quality standards
- Feedback: Connect to upward-flow protocol

---

### 2.3 Create shape.md with Decisions

**When to use:** Document core architectural and design decisions

**Prompt:**
```
Create shape.md documenting core specification decisions.

Research synthesis: [PROVIDE SYNTHESIS FROM PHASE 1]
Key trade-offs identified: [2-3 MAJOR DECISION POINTS]
Constraints: [SCOPE/RESOURCE/TIMELINE CONSTRAINTS]

shape.md should contain:

1. ARCHITECTURE DECISIONS
   - Core structure chosen (with alternatives considered)
   - Rationale for selection
   - Trade-offs accepted

2. DESIGN PRINCIPLES
   - 3-5 primary design principles
   - Decision rules derived from principles
   - Consistency checks

3. SCOPE BOUNDARIES
   - What's included (with examples)
   - What's explicitly excluded (with why)
   - Gray areas and how to handle them

4. DEPENDENCY MAP
   - What this depends on
   - What depends on this
   - Integration points

5. SUCCESS CRITERIA
   - How we'll know this is done
   - Quality metrics
   - Verification approach

6. DECISION LOG
   - [Date] | [Decision] | [Rationale] | [Alternatives considered]

Each section should be decision-focused (not descriptive). Include timestamps and versions.
```

**Expected output:**
- shape.md file with 6 sections
- Decision log started
- Rationale for each choice
- Trade-offs documented
- Integration points mapped

**Common variations:**
- "Emphasize technical architecture decisions"
- "Focus on user experience decisions"
- "Highlight business/strategic decisions"

**Integration points:**
- Phase 3: Use as interview reference material
- Phase 4: Reference during production conflicts
- Phase 5: Verify all work aligns with decisions

---

## PHASE 3: INTERVIEW & REFINEMENT

> **Three Practices Embedded in All Phase 3 Prompts:**
> Every prompt below includes identity anchoring, [UNSURE] as a valid response option, and specificity coaching. These prevent the most expensive workflow errors. See `11_identity-anchoring-guide.md` and `12_answer-quality-guide.md`.

### 3.1 Conduct Interview for Clarification

**When to use:** Engage stakeholder to clarify ambiguities and gather tacit knowledge

**Prompt:**
```
Conduct structured interview for specification refinement.

Specification domain: [DOMAIN]
Interview subject: [STAKEHOLDER ROLE/EXPERTISE]
Focus areas: [2-3 AREAS NEEDING CLARIFICATION]

Interview structure:
0. IDENTITY CONFIRMATION (2 min) — DO THIS FIRST
   - Read identity statement from shape.md:
     "I am building [PRODUCT] for [AUDIENCE] because [REASON]"
   - Ask: "Is this still accurate? Has anything shifted?"
   - If shifted: update identity before proceeding
   - If confirmed: keep visible throughout interview

1. CONTEXT SETTING (2 min)
   - Explain what we're building (referencing confirmed identity)
   - Show current specification summary
   - Ask for initial reactions/concerns

2. DEEP DIVES (8-10 min each focus area)
   - For each focus area:
     * Ask: "What's critical for success here?"
     * Ask: "What mistakes have you seen?"
     * Ask: "What would failure look like?"
     * Ask: "What are we likely missing?"

3. PRIORITY & TRADE-OFFS (5 min)
   - "If we could only do three things, what would they be?"
   - "What can we safely defer?"
   - "Where would you be most concerned about shortcuts?"

4. VALIDATION (5 min)
   - "Does this summary capture your thinking?"
   - "What should we definitely NOT do?"
   - "Who else should we talk to?"

5. IDENTITY CHECK (2 min)
   - Read back all decisions made during interview
   - Ask: "Do these decisions, taken together, serve our identity:
     '[IDENTITY STATEMENT]'?"
   - Flag any inconsistencies between decisions and identity

IMPORTANT — For every question in this interview:
- Include [UNSURE] as a valid answer option
- When stakeholder selects [UNSURE]:
  * Acknowledge it positively ("Good — uncertainty flagged is better
    than a confident wrong answer")
  * Offer: quick research, reframe, defer with assumption, or split
  * Document as [UNSURE - PENDING RESOLUTION] in shape.md
- Coach specificity: "Think about your specific user in a specific
  moment, not what sounds good in general"

After interview, create:
- Clarification document with Q&A
- Updated shape.md decisions (with identity statement confirmed)
- New queue items discovered
- Follow-up questions list
- List of [UNSURE] items with resolution plan
```

**Expected output:**
- Interview transcript/notes with identity confirmation at top
- Clarifications document
- Updated shape.md with new decisions and confirmed identity
- New work items identified
- Follow-up questions documented
- [UNSURE] resolution tracker

**Common variations:**
- "Expert elicitation format for tacit knowledge"
- "Rapid-fire format for busy stakeholders"
- "Iterative depth-first approach"
- "Identity-focused interview (when identity has been shifting)"

**Integration points:**
- Update shape.md immediately (identity statement first)
- Create new queue items for discoveries
- Schedule follow-up interviews if needed
- Proceed to Phase 2 if major changes needed
- Resolve all [UNSURE] items before Phase 4 transition gate

---

### 3.2 Check Standards Alignment

**When to use:** Verify specification meets applicable standards and best practices

**Prompt:**
```
Check specification alignment with relevant standards.

Specification file: /specs/[DOMAIN]/shape.md
Domain: [DOMAIN]
Applicable standards/frameworks: [e.g., ISO 9001, WCAG 2.1, REST standards]

For each applicable standard:
1. Load the standard requirements
2. Check if our shape.md addresses each requirement
3. If addressed: note how and document evidence
4. If missing: assess impact (critical/important/nice-to-have)
5. If conflicting: document the conflict and rationale for our choice

Create standards-alignment-report.md containing:
- Standards reviewed
- Requirements checklist
- Coverage percentage
- Critical gaps identified
- Conscious deviations and why
- Recommendations for shape.md updates

If gaps exist, suggest shape.md updates to address critical/important items.
```

**Expected output:**
- Standards alignment report
- Requirements checklist
- Gap analysis
- Coverage metrics
- Recommended shape.md updates

**Common variations:**
- "Check technical standards only"
- "Include compliance and regulatory standards"
- "Compare against best practice frameworks"

**Integration points:**
- Update shape.md with standards findings
- Create queue items for gap coverage
- Reference in Phase 5 verification

---

### 3.3 Verify Product Context Alignment

**When to use:** Ensure specification fits within broader product/organizational context

**Prompt:**
```
Verify product context alignment for this specification.

Specification: [DOMAIN/SCOPE]
Product context: [BRIEF PRODUCT/ORGANIZATION DESCRIPTION]
Strategic goals: [ORGANIZATIONAL OBJECTIVES THIS SERVES]
Adjacent specifications/systems: [RELATED WORK]

Verification checklist:
1. STRATEGIC ALIGNMENT
   - Does this spec serve stated strategic goals?
   - Are there unintended strategic implications?
   - How does this advance product vision?

2. TECHNICAL INTEGRATION
   - Does this integrate cleanly with adjacent systems?
   - Are there data/API contracts defined?
   - What dependencies exist?

3. RESOURCE ALIGNMENT
   - Do estimated resources match available capacity?
   - Are required skills available?
   - Is timeline realistic?

4. MARKET/USER ALIGNMENT
   - Does this match user needs/expectations?
   - Are we building something users actually want?
   - Are there market timing considerations?

5. RISK ASSESSMENT
   - What could go wrong?
   - What's our mitigation strategy?
   - What's acceptable risk level?

Create product-alignment-report.md with:
- Traffic light status for each area
- Key findings and risks
- Recommended shape.md adjustments
- Stakeholder sign-off tracking
```

**Expected output:**
- Product alignment report
- Status across 5 dimensions
- Risk assessment
- Recommended adjustments
- Sign-off checklist

**Common variations:**
- "Focus on technical integration"
- "Emphasize user and market fit"
- "Assess organizational readiness"

**Integration points:**
- Update shape.md with findings
- Escalate high-risk items
- Create additional queue items if scope changes
- Prepare for Phase 4 with full context

---

### 3.4 Request Domain Research During Interview

**When to use:** Uncover and immediately research unexpected knowledge gaps

**Prompt:**
```
During interview, we discovered gaps in: [DISCOVERED GAPS]

Research needed on: [SPECIFIC TOPICS]
Integration point: [HOW FINDINGS SHOULD INFLUENCE SPEC]
Timeline: [WHEN FINDINGS NEEDED]

Please conduct rapid research on:
1. [GAP 1] - why this matters, current best practice
2. [GAP 2] - implementation approaches, trade-offs
3. [GAP 3] - lessons learned, common mistakes

Research should answer:
- What's the current consensus approach?
- What are the main alternatives?
- What's the learning curve/implementation cost?
- How does this connect to our existing decisions?

Deliver as:
- 500-word summary for each gap
- Decision tree for approach selection
- Input recommendations for shape.md
- Implementation considerations

Make findings immediately actionable for interview discussion.
```

**Expected output:**
- 3x rapid research summaries
- Decision tree for approach selection
- Shape.md input ready
- Implementation considerations
- Ready for immediate interview discussion

**Common variations:**
- "Focus on implementation details"
- "Emphasize theoretical foundations"
- "Highlight vendor/tool options"

**Integration points:**
- Feed back into current interview
- Update shape.md immediately
- Create targeted queue items
- May trigger additional interviews

---

## PHASE 4: PARALLEL PRODUCTION (MOST IMPORTANT)

### 4.1 Start Continuous Production

**When to use:** Begin parallel generation of specification components

**Prompt:**
```
START CONTINUOUS PRODUCTION FOR [DOMAIN SPEC]

=== CONTEXT ===
Specification: /specs/[DOMAIN]/shape.md
Queue: /queue/queue-index.md
Standards: /specs/[DOMAIN]/standards-checklist.md
Previous work: [REFERENCE ANY COMPLETED ITEMS]

=== YOUR ROLE ===
You are a production agent. Your job is to:
1. Take work items from the /queue/inbox/ folder
2. Produce high-quality output per the specification
3. Update queue status as you work
4. Handle dependencies and blockers
5. Verify output against standards before completing

=== OPERATING PATTERN ===
STARTUP:
  1. Check queue-index.md for current status
  2. Load shape.md to understand decisions/constraints
  3. Load standards-checklist.md for quality criteria
  4. Identify your first work item (follow priority)

WORKING LOOP (repeat until directed to pause):
  1. Read work item in detail from /queue/inbox/
  2. Check dependencies: are all prerequisites complete?
  3. If blocked: note blocker in queue, move to next item
  4. If ready: begin production per acceptance criteria
  5. Verify output against standards-checklist
  6. Move completed item to /queue/completed/ with completion note
  7. Update queue-index.md with new status
  8. Identify next item and loop

DECISION POINTS:
  - If standards conflict with shape.md: follow shape.md
  - If item is ambiguous: ask clarifying questions in queue comments
  - If you need research: request it explicitly
  - If queue is empty: report full completion and ask for next direction

=== ACCEPTANCE CRITERIA ===
Your output must:
- Conform to shape.md decisions
- Meet all applicable standards
- Include clear rationale/documentation
- Be production-ready or explicitly marked as draft
- Include integration points to related work

=== START NOW ===
[Acknowledge startup complete and provide status summary]
```

**Expected output:**
- Acknowledgment of startup
- Status summary of queue
- First work item identified and begun
- Production continues until directed to pause

**Common variations:**
- "Start only with priority=critical items"
- "Process in order, skip dependencies initially"
- "Focus on [SPECIFIC CATEGORY] only"

**Integration points:**
- Continuous loop until "Pause generation" command
- Status updates via "Update production status" prompt
- Dependency management via queue structure
- Standards verification throughout

---

### 4.2 Resume Production After Break

**When to use:** Continue production after interruption or context switch

**Prompt:**
```
RESUME PRODUCTION FOR [DOMAIN SPEC]

=== CONTEXT RESTORATION ===
Specification: /specs/[DOMAIN]/shape.md
Queue current status: /queue/queue-index.md
Last status: [YOUR PREVIOUS STATUS SUMMARY]
Time elapsed: [SINCE LAST SESSION]

=== YOUR ROLE ===
Resume your production role (as described in "Start Continuous Production")

=== RESUMPTION PROCESS ===
1. Review queue-index.md to understand current state
2. Check for new items added to /queue/inbox/
3. Check for blocked items that may now be unblocked
4. Review completed items and lessons learned
5. Continue working loop from where you left off

=== WHAT'S CHANGED? ===
New items added: [IF ANY]
Blocking items now resolved: [IF ANY]
New standards/decisions: [IF ANY]
New constraints: [IF ANY]

=== CONTINUE NOW ===
[Load current state and provide resumption summary]
[Identify next work item]
[Continue production loop]
```

**Expected output:**
- Resumption summary with state context
- New items identified
- Lesson review from last session
- Next work item in progress
- Production continues

**Common variations:**
- "Resume with focus on [CATEGORY]"
- "Prioritize items that unblocked"
- "Review and consolidate findings first"

**Integration points:**
- Automatic continuation of work loop
- Status updates via queue management
- May need "Request research" if new blockers discovered
- Can transition to "Spawn generation agent" if scaling needed

---

### 4.3 Spawn Generation Agent (Template)

**When to use:** Delegate specific work item to parallel agent for parallel production

**Prompt:**
```
SPAWN GENERATION AGENT FOR [WORK ITEM ID]

=== WORK ITEM ===
Item ID: [ID]
Title: [TITLE]
Description: [FULL DESCRIPTION]
Acceptance criteria: [CRITERIA]
Complexity: [SIMPLE/MEDIUM/COMPLEX]
Estimated effort: [TIME]

=== CONTEXT FOR AGENT ===
Specification shape.md: [PROVIDE KEY DECISIONS RELEVANT TO THIS ITEM]
Related standards: [RELEVANT STANDARDS]
Dependencies: [WHAT MUST BE DONE FIRST]
Integration points: [HOW THIS CONNECTS TO OTHER WORK]

=== AGENT INSTRUCTIONS ===
1. Read this work item carefully
2. Review the specification context provided above
3. Produce output per the acceptance criteria
4. Verify against standards before completing
5. Return output with:
   - Completed work
   - Verification checklist
   - Any questions or blockers encountered
   - Integration notes

=== EXPECTED OUTPUT ===
[SPECIFIC FORMAT, e.g., "Markdown document with sections: Introduction, Analysis, Recommendations, Implementation"]

=== START NOW ===
Produce the work item as specified above.
```

**Expected output:**
- Completed work item per acceptance criteria
- Verification checklist
- Questions/blockers if any
- Integration notes

**Common variations:**
- Pass full specification context vs summary
- Include examples of similar completed work
- Specify research depth required
- Include explicit constraints or edge cases

**Integration points:**
- Main orchestrator updates queue status
- Can spawn 5-10 agents in parallel
- Agents return work to be integrated
- Main orchestrator verifies and consolidates

---

### 4.4 Update Production Status

**When to use:** Track progress and communicate state to stakeholders

**Prompt:**
```
UPDATE PRODUCTION STATUS FOR [DOMAIN SPEC]

Current queue state: /queue/queue-index.md

IDENTITY REMINDER (include in every status update):
"We are building: [IDENTITY STATEMENT from shape.md]"
All progress below should serve this identity.

Provide status report:
1. PROGRESS SUMMARY
   - Items completed: [N]
   - Items in progress: [N]
   - Items remaining: [N]
   - Overall completion %: [X%]

2. BY CATEGORY
   For each major category:
   - Category name
   - Items completed
   - Items in progress
   - Items remaining
   - Any category-specific risks

3. BLOCKERS & RISKS
   - Current blockers: [LIST]
   - Mitigation in progress: [HOW]
   - Risks to timeline: [WHAT]
   - Escalations needed: [IF ANY]

4. QUALITY METRICS
   - Standards compliance: [%]
   - Rework rate: [%]
   - Average completion time per item: [TIME]
   - Quality issues found and fixed: [COUNT]

5. NEXT STEPS & ETA
   - Next priorities: [TOP 3]
   - Estimated completion: [DATE/TIME]
   - Resource needs: [IF ANY]
   - Recommended actions: [IF ANY]

6. LEARNINGS & ADJUSTMENTS
   - What's working well: [INSIGHTS]
   - What we'd adjust: [IMPROVEMENTS]
   - Queue structure feedback: [IF ANY]
   - Standards feedback: [IF ANY]

Format as: status-report-[timestamp].md in /queue/ folder
```

**Expected output:**
- Status report saved to queue folder
- Progress metrics and percentages
- Risk assessment
- Quality metrics
- Next steps with ETA
- Learnings documented

**Common variations:**
- "Focus on high-risk items only"
- "Compare to original timeline estimate"
- "Highlight unexpected learnings"

**Integration points:**
- Saved in queue folder for reference
- Can trigger management decisions (add resources, adjust timeline)
- May require new interviews if risks identified
- Feeds into Phase 5 completion handoff

---

### 4.5 Check Queue and Continue

**When to use:** Verify queue state and determine next production action

**Prompt:**
```
CHECK QUEUE AND CONTINUE PRODUCTION

Load and analyze: /queue/queue-index.md

1. QUEUE STATE ANALYSIS
   - Items in inbox awaiting assignment: [COUNT]
   - Items in progress: [COUNT] - list each
   - Items completed: [COUNT]
   - Items blocked: [COUNT] - list blockers
   - Current bottlenecks: [IF ANY]

2. DEPENDENCY CHECK
   For each blocked item:
   - Item: [ID]
   - Blocker: [WHAT'S BLOCKING]
   - Unblock by: [WHEN/HOW]
   - Workaround available: [YES/NO]

3. PRIORITY ANALYSIS
   What should be worked on next?
   - Highest priority unstarted item: [ID] - [REASON]
   - Most impactful to unblock: [ID] - [REASON]
   - Recommended sequence: [SEQUENCE]

4. CAPACITY CHECK
   - Your capacity right now: [AVAILABLE TIME]
   - Next item complexity: [SIMPLE/MEDIUM/COMPLEX]
   - Can you complete next item in available time: [YES/NO]

5. NEXT ACTION
   - Recommended action: [PAUSE/CONTINUE/ESCALATE/RESEARCH]
   - Next item if continuing: [ID & TITLE]
   - New issues file if needed: [IF APPLICABLE]

BASED ON ANALYSIS:
[Provide recommended action and proceed accordingly]
```

**Expected output:**
- Queue state analysis
- Dependency mapping
- Priority recommendation
- Capacity assessment
- Next action decision with reasoning

**Common variations:**
- "Prioritize items that unblock others"
- "Focus on [SPECIFIC CATEGORY]"
- "Calculate optimal sequence for efficiency"

**Integration points:**
- Informs continuation of "Start Continuous Production" loop
- May trigger spawn of additional agents
- Can identify need for research or clarification
- Updates queue-index.md with findings

---

### 4.6 Pause Generation

**When to use:** Stop production to wait for decision, input, or escalation

**Prompt:**
```
PAUSE GENERATION FOR [DOMAIN SPEC]

=== CONTEXT ===
Current item in progress: [ITEM ID & TITLE]
Current status: [BRIEF SUMMARY]
Work location: [e.g., /specs/[DOMAIN]/section.md]

=== PAUSE REASON ===
[Choose reason or describe]:
  - Awaiting stakeholder input
  - Awaiting research completion
  - Awaiting dependency resolution
  - Quality concern needing review
  - New information requiring shape.md update
  - Other: [DESCRIBE]

=== CAPTURE STATE ===
1. Current work in progress: [SAVE STATE]
2. Work completed this session: [ITEMS COMPLETED]
3. Status to update in queue: [MOVE ITEM TO APPROPRIATE FOLDER]
4. Questions awaiting answer: [LIST]
5. Blockers to resolve: [LIST]

=== UPDATE QUEUE ===
Update /queue/queue-index.md with:
- Current date/time
- Pause reason
- Items completed since last status
- Current work item status
- Next intended action
- Awaiting: [WHAT WE'RE WAITING FOR]

=== PREPARE FOR RESUMPTION ===
Create pause-context.md with:
- Current item details
- Work in progress state
- Questions needing answers
- Input required
- When to resume

[Confirm pause, save state, ready for resumption]
```

**Expected output:**
- Current work saved to queue
- Queue-index.md updated with pause state
- pause-context.md created for quick resumption
- Clear explanation of what's paused and why
- List of blockers/questions awaiting answers

**Common variations:**
- "Pause with pending review requested"
- "Pause and prepare summary for stakeholder"
- "Pause after completion of specific milestone"

**Integration points:**
- Can resume with "Resume production after break"
- May need stakeholder action before resumption
- Questions in pause-context drive next interview
- Research requests trigger Phase 1 research prompts

---

### 4.7 Resume Generation

**When to use:** Restart production after pause

**Prompt:**
```
RESUME GENERATION FOR [DOMAIN SPEC]

=== RESUMPTION CONTEXT ===
Previous pause reason: [FROM PAUSE NOTATION]
Time since pause: [DURATION]
Queue file: /queue/queue-index.md
Pause context: /queue/pause-context.md

=== RESTORATION PROCESS ===
1. Load pause-context.md
2. Verify no shape.md updates required
3. Resolve or work around blockers if possible
4. Identify status of input/research awaited

=== UPDATED INFORMATION ===
[If any, provide]:
- New shape.md decisions
- Resolved blockers
- Input received
- Research completed
- New constraints
- Changed timeline

=== CONTINUE PRODUCTION ===
Current item: [FROM PAUSE CONTEXT]
Next action: [RESUME WORK / MOVE TO DIFFERENT ITEM / OTHER]
Continue work loop until: [NEW PAUSE CONDITION / COMPLETION]

[Load context and resume work]
```

**Expected output:**
- Quick context restoration
- Confirmation of current item
- Decision on continuing same item or moving to next
- Immediate return to production work loop

**Common variations:**
- "Resume with priority shift to [CATEGORY]"
- "Resume after major scope change"
- "Resume with new agent joining production"

**Integration points:**
- Direct continuation of work loop
- Status updates via "Update production status"
- May require "Check queue and continue"
- Completion measured toward Phase 5

---

### 4.8 Handle Auto-Compact and Continue

**When to use:** Consolidate and organize queue as it grows, maintain efficiency

**Prompt:**
```
AUTO-COMPACT QUEUE FOR [DOMAIN SPEC]

=== CURRENT QUEUE STATE ===
Queue location: /queue/
Current structure status: [CLEAN / NEEDS ORGANIZATION]
Items in various states: [COUNT AND SUMMARY]

=== AUTO-COMPACT PROCESS ===

1. CONSOLIDATE COMPLETED ITEMS
   - Archive completed items older than [TIME PERIOD] to /queue/completed/archive/
   - Keep recent completed items (last week) visible
   - Create completed-summary.md with:
     * Items completed
     * Completion rate metrics
     * Quality notes
     * Lessons captured

2. ORGANIZE IN-PROGRESS ITEMS
   - Review each in-progress item:
     * Still active? Keep in /queue/in-progress/
     * Stalled? Move to /queue/inbox/ or escalate
     * Nearly done? Note expected completion
   - Update ownership/assignment if needed

3. TRIAGE INBOX ITEMS
   - Review inbox for duplicates and consolidate
   - Add missing metadata (priority, complexity, dependencies)
   - Sort by: dependencies first, then priority, then complexity
   - Identify items that are too vague, request clarification

4. UPDATE INDICES
   - Regenerate queue-index.md with:
     * Current accurate counts
     * Updated priority ordering
     * Clearer dependency visualization
     * Performance metrics (completion rate, avg time)

5. IDENTIFY PATTERNS
   - What categories have highest completion rate?
   - What categories have stalled items?
   - Are there dependency bottlenecks?
   - Should we spawn more agents for fast items?

=== CONTINUE PRODUCTION ===
After compacting:
- Identify next 3 high-priority items
- Confirm no blockers
- Resume production immediately
- Report on post-compact state

Create auto-compact-report.md with:
- Items reorganized
- Patterns identified
- Recommendations
- Performance metrics
- Next steps

[Complete auto-compact and continue production]
```

**Expected output:**
- Reorganized queue structure
- Completed-summary.md created
- queue-index.md updated with accurate state
- auto-compact-report.md with insights
- Immediate resumption of production
- Updated performance metrics

**Common variations:**
- "Aggressive archive (archive anything older than 1 week)"
- "Conservative archive (keep all in-progress visible)"
- "Rebuild entire queue index for clarity"

**Integration points:**
- Improves efficiency of future "Check queue and continue"
- Patterns feed into "Update production status"
- May identify items for additional research
- Performance metrics inform resource decisions

---

## PHASE 5: VERIFICATION & FEEDBACK

### 5.1 Verify Deliverable Against Standards

**When to use:** Ensure completed specification meets all standards and requirements

**Prompt:**
```
VERIFY SPECIFICATION DELIVERABLE AGAINST STANDARDS

Deliverable: /specs/[DOMAIN]/ (complete specification)
Standards reference: /specs/[DOMAIN]/standards-checklist.md
Shape.md: /specs/[DOMAIN]/shape.md

=== VERIFICATION PROCESS ===

1. COMPLETENESS CHECK
   - All required sections present: [YES/NO]
   - All acceptance criteria met: [YES/NO]
   - All decision rationale documented: [YES/NO]
   - All integration points defined: [YES/NO]

2. STANDARDS ALIGNMENT
   For each applicable standard:
   - Load standard from standards-checklist.md
   - Check each requirement against deliverable
   - Rate:  Full compliance /  Partial /  Missing
   - Document evidence for compliance
   - Note any waivers or conscious deviations

3. DECISION CONSISTENCY
   - Load shape.md
   - Verify deliverable reflects all decisions
   - Check for contradictions or deviations
   - Document any intentional variance

4. QUALITY ASSESSMENT
   - Clarity: Can reader understand clearly?
   - Completeness: Are there obvious gaps?
   - Consistency: Is terminology consistent?
   - Usability: Can someone use this to build?
   - Maintenance: Is it maintainable long-term?

5. INTEGRATION VALIDATION
   - Cross-references correct and working
   - Dependencies properly documented
   - Integration points clearly defined
   - Related specifications properly linked

=== OUTPUT ===
Create verification-report.md containing:
- Overall compliance percentage
- Section-by-section audit
- Standards coverage matrix
- Quality assessment details
- Gap list (if any)
- Sign-off readiness assessment

Issues found:
- Critical issues: [MUST FIX BEFORE SIGN-OFF]
- Important issues: [SHOULD FIX]
- Nice-to-have improvements: [CAN DEFER]

Recommendation: [READY FOR SIGN-OFF / REQUIRES REWORK / NEEDS RESEARCH]
```

**Expected output:**
- Comprehensive verification report
- Standards compliance matrix
- Quality assessment with scores
- Gap identification with severity levels
- Clear recommendation for sign-off
- Required rework list if needed

**Common variations:**
- "Spot-check critical sections only"
- "Deep audit of all sections"
- "Compare against external benchmark spec"

**Integration points:**
- If issues found: create work items for rework
- If pass: proceed to "Generate verification report"
- If major gaps: escalate for Phase 3 interview
- Feeds into Phase 5 feedback process

---

### 5.2 Generate Verification Report

**When to use:** Document verification findings for stakeholder review

**Prompt:**
```
GENERATE VERIFICATION REPORT FOR [DOMAIN SPEC]

Verification findings: [FROM VERIFICATION CHECKLIST]
Specification: /specs/[DOMAIN]/
Deliverable status: [IN REVIEW / READY / NEEDS REWORK]

=== REPORT STRUCTURE ===

1. EXECUTIVE SUMMARY
   - Overall status: [GREEN / YELLOW / RED]
   - Compliance percentage: [%]
   - Critical issues: [COUNT]
   - Key findings: [2-3 BULLET POINTS]
   - Recommendation: [APPROVE / CONDITIONAL APPROVAL / RETURN FOR REWORK]

2. COMPLIANCE SUMMARY
   Create table:
   | Standard | Requirement Count | Compliant | Partial | Missing | Coverage % |
   | [Standard] | [N] | [N] | [N] | [N] | [%] |

3. DETAILED FINDINGS
   For each issue found:
   - Section: [WHERE]
   - Issue: [WHAT]
   - Severity: [CRITICAL / IMPORTANT / NICE-TO-HAVE]
   - Recommendation: [HOW TO FIX]
   - Effort to fix: [SMALL / MEDIUM / LARGE]

4. QUALITY ASSESSMENT
   | Dimension | Score | Evidence |
   | Clarity | [1-5] | [EXAMPLES] |
   | Completeness | [1-5] | [GAPS IF ANY] |
   | Consistency | [1-5] | [ISSUES IF ANY] |
   | Usability | [1-5] | [EVIDENCE] |
   | Maintainability | [1-5] | [EVIDENCE] |

5. REWORK SUMMARY (if needed)
   - Items needing rework: [LIST]
   - Estimated effort: [HOURS/DAYS]
   - Priority sequence: [ORDER]
   - Dependencies: [IF ANY]
   - Recommended approach: [HOW TO TACKLE]

6. SIGN-OFF READINESS
   - All critical issues resolved: [YES/NO]
   - All standards compliant: [YES/NO]
   - Ready for production use: [YES/NO]
   - Recommended next step: [SIGN-OFF / REWORK / ESCALATION]

7. APPROVAL TRACKING
   - [ ] Technical review approved
   - [ ] Standards compliance approved
   - [ ] Product owner approval
   - [ ] Final sign-off

Save as: verification-report-[date].md in /specs/[DOMAIN]/
```

**Expected output:**
- Executive summary with clear status
- Detailed standards compliance matrix
- Issue list with severity and remediation
- Quality assessment with scores and evidence
- Rework plan if needed
- Clear sign-off readiness statement
- Approval tracking

**Common variations:**
- "Executive summary only for leadership"
- "Detailed technical report for implementation team"
- "Comparative report against similar specs"

**Integration points:**
- Determines if specification is ready
- If issues: creates rework tasks
- If pass: proceed to feedback capture
- Sign-off gates the final deliverable

---

### 5.3 Capture Feedback for Upward Flow

**When to use:** Document learnings that should improve future specifications

**Prompt:**
```
CAPTURE FEEDBACK FOR UPWARD FLOW

Completed specification: /specs/[DOMAIN]/
Feedback source: [e.g., verification report, team observations, standards review]
Feedback type: [PROCESS / CONTENT / STANDARDS / INTEGRATION]

=== FEEDBACK CAPTURE PROCESS ===

1. IDENTIFY LEARNINGS
   What did we learn that applies broadly?
   - Unexpected insights about the domain
   - Process improvements discovered
   - Standards gaps or improvements
   - Integration patterns that worked well
   - Anti-patterns to avoid
   - Tools or techniques that were valuable

2. CATEGORIZE BY UPWARD FLOW LEVEL
   - IMMEDIATE: Update next similar specification
   - TEAM: Share with team for next projects
   - ORGANIZATIONAL: Suggest for process improvement
   - STANDARDS: Recommend for standards/framework updates
   - TOOLS: Improvement to workflow tooling

3. DOCUMENTATION
   For each learning:
   - Context: Where did this learning come from?
   - Insight: What's the actual learning?
   - Applicability: Where/when can we use this?
   - Priority: How important is this?
   - Owners: Who should know about this?

4. UPWARD FLOW FILING
   Create feedback-learnings-[domain].md with:
   - Key insights (5-10 main learnings)
   - Surprising discoveries
   - Process improvements
   - Standards recommendations
   - Team recommendations
   - Tool improvements

5. PROPAGATION PLAN
   - Immediate updates to team: [LIST]
   - Next spec updates: [HOW TO APPLY]
   - Standards improvement recommendations: [DETAILS]
   - Process documentation updates: [WHAT/WHERE]

=== STRUCTURED FEEDBACK TEMPLATE ===

**Learning:** [TITLE]
**Source:** [FROM VERIFICATION, INTERVIEW, PRODUCTION, ETC]
**Context:** [SITUATION WHERE DISCOVERED]
**Insight:** [ACTUAL LEARNING]
**Evidence:** [WHY WE BELIEVE THIS]
**Application:** [WHERE/HOW TO USE]
**Priority:** [HIGH / MEDIUM / LOW]
**Owner:** [WHO SHOULD DRIVE NEXT STEPS]

Create: /specs/[DOMAIN]/feedback-learnings.md
```

**Expected output:**
- Feedback capture document with 5-10 key learnings
- Categorization by upward flow level
- Structured insights with context and evidence
- Propagation plan with owners and timelines
- Clear action items for knowledge dissemination

**Common variations:**
- "Focus on standards improvements only"
- "Capture process learnings for team"
- "Document unexpected insights"

**Integration points:**
- Feeds "Update standards from learnings" prompt
- Informs next specification creation
- Propagates to team via process updates
- May trigger standards or framework updates

---

### 5.4 Update Standards from Learnings

**When to use:** Improve organizational standards based on specification learnings

**Prompt:**
```
UPDATE STANDARDS FROM LEARNINGS

Specification: /specs/[DOMAIN]/
Feedback document: /specs/[DOMAIN]/feedback-learnings.md
Current standards: /standards-integration.md or equivalent

=== STANDARDS IMPROVEMENT PROCESS ===

1. REVIEW LEARNINGS
   Load feedback-learnings.md and identify items marked:
   - STANDARDS: [These suggest standards improvements]

2. ANALYZE IMPACT
   For each standards-relevant learning:
   - What standard/framework should this update?
   - Is this widely applicable?
   - Does this change our requirements?
   - Is this a new requirement we missed?
   - Does this improve clarity?

3. RECOMMEND UPDATES
   For each applicable standard:

   Standard: [NAME]
   Current requirement: [CURRENT TEXT]
   Proposed update: [REVISED TEXT]
   Rationale: [WHY THIS CHANGE HELPS]
   Scope: [WHO/WHAT AFFECTED]
   Effective date: [WHEN TO APPLY]

   Type of change:
   - [ ] Clarification of existing requirement
   - [ ] New requirement based on learning
   - [ ] Removal of outdated requirement
   - [ ] Emphasis shift

4. IMPLEMENTATION PLAN
   - Updated standard document: [UPDATE IN STANDARDS FILE]
   - Communication plan: [HOW TO INFORM TEAMS]
   - Transition period: [IF NEEDED]
   - Retroactive application: [TO WHICH PREVIOUS SPECS]

5. DOCUMENT DECISION
   Create standards-update-log entry:

   [Date] | [Standard] | [Change] | [Rationale] | [Effective]

=== UPDATE STANDARDS FILE ===
Edit /standards-integration.md (or equivalent) with:
- Updated requirements
- New clarifications
- Deprecated requirements marked [DEPRECATED - use X instead]
- Effective date for changes
- Retroactive application guidance

Create: standards-update-report-[date].md documenting:
- Standards updated
- Changes made with rationale
- Communication plan
- Retroactive application guidance
```

**Expected output:**
- Standards update report with recommended changes
- Rationale for each update
- Implementation and communication plan
- Updated standards file with effective dates
- Retroactive guidance for previous specifications
- Decision log entry

**Common variations:**
- "Propose but don't implement (document for review)"
- "Update internal standards only"
- "Recommend external standards body improvements"

**Integration points:**
- Updates /standards-integration.md for organization
- May require management approval before implementation
- Applies retroactively to relevant previous specs (optional)
- Informs team process documentation
- Feeds into next specification creation

---

## SUPPORTING PROMPTS

### Setup: Production Queue Structure

**When to use:** Initial queue setup for new specification

**Prompt:**
```
SET UP PRODUCTION QUEUE STRUCTURE

Domain: [DOMAIN]
Specification: /specs/[DOMAIN]/shape.md
Items to include: [LIST OR "GENERATE FROM SPEC"]
Team size: [NUMBER]
Timeline: [DURATION]

Create folder structure:
/queue/
   queue-index.md (dashboard)
   inbox/ (items awaiting work)
   in-progress/ (active items)
   completed/ (finished items)
   completed/archive/ (older completed items)
   blockers.md (current blockers log)
   batch-operations.md (bulk action instructions)

For each queue item create file with:
- Item ID: [AUTO-NUMBERED]
- Title: [CLEAR, DESCRIPTIVE]
- Description: [FULL REQUIREMENTS]
- Acceptance criteria: [SPECIFIC, MEASURABLE]
- Complexity: [SIMPLE / MEDIUM / COMPLEX]
- Est. hours: [TIME ESTIMATE]
- Dependencies: [OTHER ITEMS THIS DEPENDS ON]
- Standards: [APPLICABLE STANDARDS]
- Created: [DATE]
- Status: [NEW]

queue-index.md should have:
- Summary: [N items, X% complete, Y blockers]
- Priority view: [SORTED BY PRIORITY]
- Category view: [GROUPED BY CATEGORY]
- Blocker view: [BLOCKED ITEMS AND CAUSES]
- Team assignments: [WHO'S WORKING ON WHAT]
- Performance metrics: [COMPLETION RATE, AVG TIME]

[Create complete queue structure]
```

**Expected output:**
- Complete queue folder structure
- All item files created and assigned
- queue-index.md with current status
- batch-operations.md with instructions
- Ready for "Start Continuous Production"

---

### Extract Standards from Best Work

**When to use:** Identify and document standards from exemplary previous work

**Prompt:**
```
EXTRACT STANDARDS FROM BEST WORK

Reference work: [SPECIFICATION, SYSTEM, COMPONENT TO LEARN FROM]
Focus areas: [WHAT TO EXTRACT STANDARDS FROM]
Application domain: [WHERE TO APPLY THESE STANDARDS]

Analyze reference work:
1. What makes this work exemplary?
2. What patterns or principles can we extract?
3. What standards is it implicitly following?
4. What would help others do this well?

Extract and document:
- Quality standards observed
- Structural patterns used
- Documentation standards
- Naming conventions
- Integration patterns
- Verification approaches
- Error handling standards
- Performance characteristics

Create: standards-extracted-[domain].md with:
- Quality principles
- Structural guidelines
- Documentation template
- Naming rules
- Verification checklist
- Integration patterns

These become inputs to:
- New specifications' standards-checklist.md
- Team standards documentation
- Future specification templates
```

**Expected output:**
- Standards-extracted document
- Quality principles documented
- Patterns and guidelines extracted
- Templates for reuse
- Integration with organizational standards

---

### Inject Standards into Context

**When to use:** Ensure team/agent is aware of relevant standards during work

**Prompt:**
```
INJECT STANDARDS INTO CONTEXT

Work in progress: [CURRENT SPECIFICATION/TASK]
Relevant standards: /specs/[DOMAIN]/standards-checklist.md
Current context: [BRIEF DESCRIPTION OF WORK]

Before continuing production, review:
1. Load standards-checklist.md completely
2. Identify which standards apply to current work
3. Highlight critical standards for this task
4. Note common standards mistakes
5. Provide quick reference for decision-making

Inject into team/agent context:
"Before you proceed, keep these standards in mind:

CRITICAL FOR THIS TASK:
- [Standard 1]: [Quick summary]
- [Standard 2]: [Quick summary]
- [Standard 3]: [Quick summary]

COMMON MISTAKES TO AVOID:
- [Mistake 1]: [Why to avoid]
- [Mistake 2]: [Why to avoid]

VERIFICATION CHECKLIST:
- [ ] Standard 1 requirement met
- [ ] Standard 2 requirement met
- [ ] Standard 3 requirement met

REFERENCE: See /specs/[DOMAIN]/standards-checklist.md for full details"

Continue with production...
```

**Expected output:**
- Standards context injected
- Critical standards highlighted
- Common mistakes noted
- Verification checklist ready
- Team/agent ready to proceed with standards awareness

---

### Move Files Between Queue Folders

**When to use:** Update queue status by moving items between states

**Prompt:**
```
MOVE FILES BETWEEN QUEUE FOLDERS

Source: /queue/[FOLDER]/[ITEM FILE]
Destination: /queue/[DESTINATION FOLDER]/[ITEM FILE]
Action: [Move / Copy]

Moves:
- inbox/ → in-progress/: Item assignment started
- in-progress/ → completed/: Item finished and verified
- in-progress/ → inbox/: Item blocked or deprioritized
- completed/ → completed/archive/: Housekeeping

Update on move:
1. File location: [NEW PATH]
2. Status field in file: [NEW STATUS]
3. queue-index.md: [UPDATE COUNTS AND VIEWS]
4. Completion timestamp: [IF TO COMPLETED]
5. Blocker notes: [IF BLOCKED]

Example completion move:
- /queue/in-progress/item-042.md → /queue/completed/item-042.md
- Update status in file: "completed [date]"
- Add completion notes: "Finished by [agent], verified against standards"
- Update queue-index.md counts

[Complete file movement and queue update]
```

**Expected output:**
- Files moved to correct locations
- Status fields updated
- queue-index.md updated with new counts
- Clear audit trail in file metadata
- Queue state reflects actual work status

---

### Generate Status Summary

**When to use:** Quick snapshot of current work status

**Prompt:**
```
GENERATE STATUS SUMMARY

Queue: /queue/queue-index.md
Specification: /specs/[DOMAIN]/
Scope: [CURRENT SESSION / FULL SPEC / SPECIFIC CATEGORY]

Provide one-page status summary:

HEADLINE:
[DOMAIN] spec is [X% COMPLETE].
[N ITEMS] completed | [N] in progress | [N] remaining.
[PRIMARY STATUS: ON TRACK / AT RISK / BLOCKED]

BY THE NUMBERS:
- Completion: X%
- Blockers: N
- At-risk items: N
- Quality issues fixed: N
- Standards violations found: N

TOP PRIORITIES:
1. [ITEM]: [WHY IMPORTANT]
2. [ITEM]: [WHY IMPORTANT]
3. [ITEM]: [WHY IMPORTANT]

BLOCKERS:
- [Blocker 1]: [Impact] - [Unblock by]
- [Blocker 2]: [Impact] - [Unblock by]

RISKS:
- [Risk 1]: [Mitigation]
- [Risk 2]: [Mitigation]

NEXT 48 HOURS:
- [Action 1]
- [Action 2]
- [Action 3]

ETA TO COMPLETION: [DATE/TIME]

[Provide concise, dashboard-style summary]
```

**Expected output:**
- One-page status summary
- Headline with key numbers
- Top priorities listed
- Current blockers with mitigations
- 48-hour action plan
- Completion ETA

---

### Handle Completion and Handoff

**When to use:** Prepare specification for use by implementation team

**Prompt:**
```
HANDLE COMPLETION AND HANDOFF

Completed specification: /specs/[DOMAIN]/
Verification report: /specs/[DOMAIN]/verification-report-[date].md
Implementation team: [TEAM/PERSON]
Launch date: [WHEN IMPLEMENTATION BEGINS]

HANDOFF PROCESS:

1. FINAL VERIFICATION
   - [ ] All standards compliant
   - [ ] All shape.md decisions incorporated
   - [ ] All sections complete and clear
   - [ ] All cross-references working
   - [ ] Ready for implementation

2. CREATE IMPLEMENTATION GUIDE
   - Target audience: Implementation team
   - Format: Quick-start guide
   - Content:
     * What you're building (1 page)
     * Key decisions and why (shape.md summary)
     * Standards you must follow
     * Integration points with other systems
     * Common mistakes to avoid
     * How to ask for clarification

3. PACKAGE SPECIFICATION
   - Main specification: /specs/[DOMAIN]/
   - Supporting materials:
     * Decision rationale (shape.md)
     * Standards checklist
     * Verification report
     * FAQ from creation process
     * Related specifications
   - Accessibility:
     * Clear folder structure
     * README for navigation
     * Glossary for terminology
     * Quick-reference card

4. HANDOFF DOCUMENTATION
   Create handoff-document.md with:
   - Specification location and structure
   - Key contacts and escalation paths
   - How to report issues/questions
   - How specifications will be maintained
   - Change request process
   - Success criteria for implementation

5. DELIVERY
   - [ ] Specification package delivered to [TEAM]
   - [ ] Team acknowledges receipt
   - [ ] Quick orientation meeting scheduled
   - [ ] Questions collected and answered
   - [ ] Implementation timeline confirmed

Save completion summary: completion-[domain]-[date].md
```

**Expected output:**
- Final verification confirmation
- Implementation quick-start guide
- Complete packaged specification
- Handoff documentation
- Team acknowledgment
- Orientation meeting scheduled
- Implementation ready to proceed

---

## ORCHESTRATOR OPERATIONAL PATTERNS

### STARTUP PATTERN

Execute in this order when beginning fresh specification work:

1. **Kick-off:** Conduct context conversation with stakeholder
2. **Phase 1:** Start collaborative research → explicit research → synthesis
3. **Phase 2:** Create spec folder → queue structure → shape.md decisions
4. **Phase 3:** Conduct interview → check standards → verify product alignment
5. **Phase 4:** Spawn production agents → manage queue → monitor progress
6. **Phase 5:** Verify → report → capture feedback → update standards

Time per phase (typical):
- Phase 1: 2-4 hours
- Phase 2: 2-3 hours
- Phase 3: 1-2 hours
- Phase 4: 8-16 hours (parallel work)
- Phase 5: 2-3 hours

### RUNNING LOOP PATTERN

Once production starts, cycle through:

1. **Check queue** (5 min): Review queue-index.md
2. **Work on items** (varies): Execute work items from Phase 4 prompts
3. **Update status** (5 min): Every 2 hours or when completed
4. **Manage blockers** (as needed): Unblock or escalate
5. **Auto-compact** (every 10+ items): Reorganize queue
6. **Spawn agents** (as needed): Parallelize work
7. **Resume/pause** (as instructed): Respond to direction

This loop continues until specification is complete.

### COMPLETION PATTERN

When approaching completion:

1. **Status check:** Confirm all queue items done or archived
2. **Verify deliverable:** Run verification against standards
3. **Generate report:** Create verification report
4. **Capture feedback:** Document learnings
5. **Update standards:** Improve based on learnings
6. **Prepare handoff:** Package and document for implementation
7. **Close out:** Archive old files, document completion

---

## FILE-BASED STATUS TRACKING

### Queue Index Format

```markdown
# Queue Index: [DOMAIN]

**Status Summary:**
- Completed: 12/25 items (48%)
- In Progress: 5 items
- Blocked: 2 items
- Remaining: 6 items

**Timeline:** [START DATE] → [ESTIMATED COMPLETION]
**Progress:** 48% complete (12 of 25 items)

## By Priority

###  Critical (5 items)
- [ ] item-001: Foundation architecture
- [ ] item-002: Data model
- [ ] item-003: API contracts
- [ ] item-004: Security framework
- [ ] item-005: Integration points

### 🟡 Important (10 items)
[...items...]

### 🟢 Nice-to-Have (10 items)
[...items...]

## By Status

###  Inbox (6 items)
[...items awaiting assignment...]

###  In Progress (5 items)
[...items being worked on...]

###  Completed (12 items)
[...items finished...]

###  Blocked (2 items)
[...items blocked and why...]

## Performance Metrics

| Metric | Value |
|--------|-------|
| Items completed/day | 2.4 |
| Avg completion time | 2.5 hours |
| Rework rate | 8% |
| Standards compliance | 98% |

## Blockers

| Blocker | Impact | Unblock By |
|---------|--------|-----------|
| Waiting for stakeholder input on data model | Blocks 3 items | 2/12 10am |
| Dependency on item-015 | Blocks 2 items | 2/11 5pm |
```

### Issue File Pattern

When an issue needs escalation or attention:

```markdown
# Issue: [TITLE]

**Issue ID:** [AUTO-NUMBERED]
**Severity:** [CRITICAL / HIGH / MEDIUM / LOW]
**Status:** [NEW / IN REVIEW / RESOLVED / CLOSED]

## What
[Clear description of the issue]

## Impact
- Items blocked: [LIST]
- Timeline impact: [DAYS DELAYED]
- Quality impact: [DESCRIPTION]

## Root Cause
[Why did this happen]

## Resolution Required
[What needs to happen to fix this]

## Proposed Action
[Recommended fix]

## Owner
[Who's responsible for resolution]

## Timeline
- Discovered: [DATE/TIME]
- Target resolution: [DATE/TIME]
- Status updated: [LAST UPDATE]
```

---

## BATCH OPERATIONS

### Spawn 5 Agents at Once

```
SPAWN 5 GENERATION AGENTS FOR PARALLEL PRODUCTION

Specification: /specs/[DOMAIN]/
Queue items to assign: [IDs OF 5 INDEPENDENT ITEMS]

AGENT 1: [ITEM ID] - [TITLE]
[Use "Spawn Generation Agent" prompt above with this item]

AGENT 2: [ITEM ID] - [TITLE]
[Use "Spawn Generation Agent" prompt with this item]

AGENT 3: [ITEM ID] - [TITLE]
[Use "Spawn Generation Agent" prompt with this item]

AGENT 4: [ITEM ID] - [TITLE]
[Use "Spawn Generation Agent" prompt with this item]

AGENT 5: [ITEM ID] - [TITLE]
[Use "Spawn Generation Agent" prompt with this item]

---

Once all 5 agents report completion:
1. Review each output for quality and standards compliance
2. Move items to completed folder
3. Check if any newly-completed items unblock other items
4. Update queue-index.md with new counts
5. Continue with next batch or individual work

Expected results:
- 5 items completed in parallel
- Review time: 30-45 minutes
- Completion time per item: [AGENTS REPORT]
```

### Bulk Verify All Completed Items

```
BULK VERIFY ALL COMPLETED ITEMS

Completed items location: /queue/completed/
Standards reference: /specs/[DOMAIN]/standards-checklist.md
Verification focus: [ALL / CRITICAL SECTIONS / STANDARDS ONLY]

Process each completed item:
1. Load item from /queue/completed/[ITEM ID]
2. Review against applicable standards
3. Check for common quality issues
4. Verify acceptance criteria met
5. Document any issues found

For each item create verification entry:
- Item ID: [ID]
- Verification status: [PASS / PASS WITH NOTES / FAIL]
- Issues found: [IF ANY]
- Action required: [IF ANY]

Summary:
- Total verified: [N]
- Passed without issues: [N]
- Passed with minor notes: [N]
- Failed (rework needed): [N]

If failures found:
- Move failed items back to /queue/in-progress/
- Document issues clearly
- Estimate rework effort
- Re-verify before completion
```

### Archive and Reorganize

```
ARCHIVE AND REORGANIZE QUEUE

Current queue: /queue/
Items to archive: [ITEMS OLDER THAN X DAYS, OR SPECIFY LIST]

Archive process:
1. Move items from /queue/completed/ to /queue/completed/archive/
2. Create completion-summary-[MONTH].md
3. Update queue-index.md
4. Organize archive by month/category
5. Create archive index

Result:
- Current queue contains recent items (last 1-2 weeks)
- Older items organized in archive
- queue-index.md reflects active work only
- Archive remains searchable for reference
```

---

## FINAL INTEGRATION CHECKLIST

Use this when specification creation is complete:

- [ ] All 5 phases executed
- [ ] Verification report shows all standards met
- [ ] Queue completed (all items done or archived)
- [ ] Feedback captured for upward flow
- [ ] Standards updated from learnings
- [ ] Handoff package created
- [ ] Implementation team ready to begin
- [ ] Completion documentation archived
- [ ] Specification ready for production use
- [ ] Lessons documented for next specification

---

## QUICK REFERENCE CHEAT SHEET

**Starting fresh?** → Use STARTUP PATTERN

**Need to check status?** → Use "Update production status" or "Generate status summary"

**Work not flowing?** → Use "Check queue and continue" and resolve blockers

**Need more hands?** → Use "Spawn generation agent" x 5 or more

**Lost context?** → Use "Resume production after break" to restore state

**Quality concern?** → Use "Verify deliverable against standards"

**Finished?** → Use "Handle completion and handoff"

**Want to improve?** → Use "Capture feedback for upward flow" and "Update standards from learnings"

---

**Version:** 1.0
**Last Updated:** [DATE]
**Orchestrator Readiness:** Ready for production use
