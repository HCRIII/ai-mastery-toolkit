# Phase 4: Parallel Production

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Multi-step workflow pattern for standardized processes
**Status:** Final

---

**The Core Innovation of the SDD Workflow**

---

## Transition Gate: Phase 3 → Phase 4

Production is expensive. Before generating content at scale, verify that the spec is solid:

```
PHASE 3 → PHASE 4 TRANSITION CHECK

Identity:
[ ] Identity statement finalized and stable (not shifting between sessions)
[ ] Identity statement in shape.md matches all design decisions

Completeness:
[ ] All [CLARIFY] and [UNSURE] items resolved with evidence-based answers
[ ] design-decisions.md complete with rationale for every major decision
[ ] interview-summary.md documents all Q&A from Phase 3

Consistency:
[ ] No contradictions between audience, pricing, depth, tone, and identity
[ ] Standards alignment verified
[ ] Product context alignment confirmed

If ANY box is unchecked → return to Phase 3 and resolve it first.
```

> **Production with an unstable identity is expensive.** Every module, every exercise, every example will reflect the identity in your spec. If the identity is wrong, you'll rewrite all of them. Better to spend 30 minutes now confirming than 30 hours later reworking. This is the lesson of the AI Mastery Course correction — where 13 files had to be rewritten because identity drift wasn't caught before production.

---

## Purpose

Enable continuous parallel work where AI orchestrates multiple generation agents while you simultaneously review outputs, create media, and publish to platforms. **Neither party blocks the other.**

---

## The Two Levels of Parallelism

### Level 1: Multiple AI Agents Working Simultaneously

```
Main Orchestrator (Claude):
 Generation Agent 1: Module 1 → outputs to 1-generating/
 Generation Agent 2: Module 2 → outputs to 1-generating/
 Generation Agent 3: Module 3 → outputs to 1-generating/
 Generation Agent 4: Module 4 → outputs to 1-generating/
 Generation Agent 5: Module 5 → outputs to 1-generating/
 Status Tracker: Updates production-queue.md
```

Each agent:
- Starts with fresh context
- Reads spec from `0-specs/`
- Injects relevant standards
- Generates content independently
- Moves output to `2-ready-for-review/` when complete
- Reports status to orchestrator

### Level 2: Human & AI Working in Parallel (THE KEY INNOVATION)

```
While AI Generates:              You Do (Simultaneously):
 Modules 6-10 generating      Review Module 1 (2-ready-for-review/)
 Modules 11-15 in queue       Edit/approve → move to 3-approved/
 Modules 16-20 queued         Generate video for Module 1
 Continuous production        Generate images for Module 1
                                 Move to 4-with-media/
                                 Upload Module 1 to Moodle
                                 Move to 5-published/
                                 Return to review Module 2
```

**Result:** 20 modules created, reviewed, enhanced with media, and published in the time it would take to sequentially create 3-5 modules.

---

## Production Queue Structure

See `production-queue-structure.md` for full details. Quick overview:

```
6_Session_Working_Files/{project-name}/
 0-specs/                  # Spec folder (reference for all agents)
    plan.md
    shape.md
    standards.md
    references.md
    production-queue.md   #  STATUS TRACKING FILE
 1-generating/             # AI currently working on these
 2-ready-for-review/       # Complete, awaiting your QC
 3-approved/               # You've approved, ready for media
 4-with-media/             # Has video/images, ready to publish
 5-published/              # Live on platforms
```

---

## File-Based Status Tracking

**The orchestrator uses `production-queue.md` to track all work.**

### Structure of production-queue.md

```markdown
# {Project Name} - Production Status

Last updated: 2026-02-10 12:45 by orchestrator

---

## Generating (AI Working Now)
- [Agent 1] Module 4: Cognitive Architecture Foundations
- [Agent 2] Module 5: Mental Model Integration
- [Agent 3] Module 6: Practical Applications

## Queued (Waiting for Agent)
- Module 7: Advanced Techniques
- Module 8: Case Studies
- Module 9: Integration Strategies
- Module 10: Mastery Assessment

## Ready for Review (Awaiting User QC)
-  Module 1: Introduction to AI Mastery
-  Module 2: Understanding Context
-  Module 3: Prompt Engineering Basics

## Approved (Awaiting Media)
-  Module 0: Welcome & Orientation

## With Media (Ready to Publish)
(none yet)

## Published
(none yet)

---

## Issues & Questions (For Batch Review)
(none yet - see individual files for inline issues)
```

### How Status Updates Work

**When an agent completes work:**
1. Moves markdown file from `1-generating/` to `2-ready-for-review/`
2. Updates `production-queue.md`:
   - Removes from "Generating" section
   - Adds to "Ready for Review" section
3. If issues/violations found, creates `{module-name}-ISSUES.md` alongside the content

**When orchestrator spawns new agent:**
1. Reads `production-queue.md` to see what's in "Queued"
2. Takes next item from queue
3. Updates status to "Generating" with agent number
4. Spawns agent with reference to spec + standards

**When you approve content:**
1. Move file from `2-ready-for-review/` to `3-approved/`
2. (Optional) Update `production-queue.md` manually, or let orchestrator detect on next check

---

## Autonomous Completion with Issue Files

**Core Principle:** Complete all available work without interruption.

### How It Works

When a generation agent encounters an issue, it does NOT stop to ask you. Instead:

**1. Document the Issue**
Creates `{module-name}-ISSUES.md` next to the generated content:

```markdown
# Issues: Module 3 - Prompt Engineering Basics

Generated: 2026-02-10 12:30
Agent: Generation Agent 3

---

## Standards Violations

### Violation 1: Exercise Count
- **Standard:** courses/module-structure.md requires 3-5 exercises per module
- **Current:** Only 2 exercises included
- **Recommendation:** Add 1-2 more practical exercises in Section 3

### Violation 2: Reading Time
- **Standard:** Target 12-15 minute read time
- **Current:** Estimated 8 minutes (1,200 words vs target 1,800)
- **Recommendation:** Expand examples in Section 2

---

## Questions for User

### Question 1: Depth vs Breadth
Section 4 covers 5 advanced techniques briefly. Should I:
- Option A: Keep all 5 techniques with brief coverage (current)
- Option B: Focus on 3 techniques with deeper coverage
- Option C: Split into Module 3 (basics) + Module 3B (advanced)

### Question 2: Code Examples
Should code examples use:
- Python (matches your SuperContext preference)
- JavaScript (more accessible to web developers)
- Both languages (more inclusive but longer)

---

## Completed Despite Issues

The module IS complete and functional. Issues above are for optimization, not blockers.
Content has been moved to 2-ready-for-review/ for your QC.
```

**2. Complete the Work Anyway**
- Generates best-possible content using standards as guide
- Makes reasonable default choices
- Moves to `2-ready-for-review/` with issue file

**3. Orchestrator Continues**
- Spawns next agent for next queued item
- Doesn't wait for your review
- Keeps production running

**4. You Batch Review Issues**
- Review generated content
- Check issue file
- Make edits or accept as-is
- Move to `3-approved/`

**Result:** AI generates 20 modules while you review 5. Neither blocks the other.

---

## Long-Running Session with Auto-Compacting

**Session Continuity Strategy**

### How It Works

Cowork mode auto-compacts to avoid context limits. The orchestrator handles this gracefully:

**Before Auto-Compact:**
- Orchestrator updates `production-queue.md` with current status
- All work-in-progress saved to files (not just in context)
- Spec folder persists in `0-specs/`

**After Auto-Compact:**
- Orchestrator reads `production-queue.md` to resume
- Checks folder status (what's in `1-generating/`, `2-ready-for-review/`, etc.)
- Spawns agents for queued items
- Continues production seamlessly

**You Don't Need to Do Anything:** The orchestrator manages compaction automatically.

### Session Capture (Standard Procedure)

**Every Phase 4 production session begins and ends with a session capture file in `6_Session_Working_Files/`.**

At session start: create `YYYY-MM-DD_Production-Run-[NN]_Session-Capture.md` documenting context loaded, current production-queue.md status, and the first agent batch to spawn.

At session end: update the capture file with final status board and any pending practitioner decisions. When the run is fully complete, move to `7_Retained_Working_Files/` for archiving.

For multi-vector sessions, see `17_multi-vector-meta-orchestrator.md` — Session Capture section — for the full procedure and naming convention.

### Resume from Interruption

If session ends unexpectedly, simply say:

```
"Continue production on {project-name}"
```

Orchestrator will:
1. Read `6_Session_Working_Files/` for the most recent session capture
2. Read `0-specs/production-queue.md`
3. Check folder status
4. Resume from exactly where it left off

---

## Orchestrator Operational Protocol

### Startup (Beginning of Production)

**1. Read Spec and Status**
```
Read: 0-specs/plan.md
Read: 0-specs/production-queue.md
Check: What's in each folder (1-generating/, 2-ready-for-review/, etc.)
```

**2. Determine Work Plan**
```
From production-queue.md "Queued" section:
- How many items total?
- How many can we spawn in parallel? (typically 3-5 agents at once)
- What's already generating? (don't duplicate)
```

**3. Spawn Initial Batch**
```
Spawn Agent 1 for Module 4
Spawn Agent 2 for Module 5
Spawn Agent 3 for Module 6

Update production-queue.md with current status
```

### Running Loop (Continuous Operation)

**Every 10-15 minutes of orchestrator time:**

**1. Check for Completed Work**
```
Scan: 1-generating/ folder
If files appeared in 2-ready-for-review/:
  → Update production-queue.md (move from Generating to Ready for Review)
  → Report brief status: "Module 4 complete, now in ready-for-review"
```

**2. Check Queue**
```
Read: production-queue.md "Queued" section
Count: How many agents currently running?
If queue has items AND fewer than 5 agents running:
  → Spawn next agent
  → Update production-queue.md
```

**3. Status Summary**
```
Every 30 minutes, provide brief update:
"Production Status:
- Generating: 3 modules (4, 5, 6)
- Ready for review: 5 modules (0, 1, 2, 3, 7)
- Queued: 12 modules remaining
- You've published: 0 modules

Keep working—I'll keep generating!"
```

**4. Handle Completion**
```
When queue is empty AND no agents generating:
"All 20 modules generated!

Final status:
- 20 modules in ready-for-review/
- 0 standards violations requiring fixes
- 3 modules have optional questions in -ISSUES.md files

Production batch complete. Ready for your review and media creation."
```

---

## Prompt Patterns for Orchestrator

See `orchestrator-prompts.md` for complete prompt library. Key patterns:

### Starting Production

```
Start production on {project-name} following the spec in 0-specs/.

Production plan:
- Total deliverables: 20 modules
- Parallel agents: Spawn 5 at a time
- Output location: 6_Session_Working_Files/{project-name}/
- Status tracking: Update production-queue.md after each completion

Begin by spawning agents for Modules 1-5. Use file-based status tracking.
I'll be working in parallel on review and media creation—keep generating
without waiting for me.
```

### Resuming After Break

```
Continue production on {project-name}.

Check production-queue.md for status and resume from where we left off.
Spawn agents for next queued items.
```

### Agent Spawn Pattern

```
Spawn generation agent for Module {N}:

Context:
- Read spec: @0-specs/plan.md
- Inject standards: courses/module-structure, content/writing-style
- Reference: @0-specs/references.md for similar modules

Output:
- Generate to: 1-generating/module-{N}.md
- If issues: Create module-{N}-ISSUES.md with violations/questions
- When complete: Move to 2-ready-for-review/
- Update: 0-specs/production-queue.md status

Work autonomously. Complete all work even if issues arise.
```

---

## Example: 20-Course Production in Practice

### Monday Morning: Kickoff

**You:**
```
Start production on Academy Batch 1 following spec in 0-specs/
```

**Orchestrator:**
```
Reading spec... 20 modules planned.

Spawning initial batch:
- Agent 1: Module 1 - Introduction to AI Mastery
- Agent 2: Module 2 - Understanding Context
- Agent 3: Module 3 - Prompt Engineering Basics
- Agent 4: Module 4 - Cognitive Architecture Foundations
- Agent 5: Module 5 - Mental Model Integration

Generating to 1-generating/... will move to 2-ready-for-review/ when complete.
Status tracking: 0-specs/production-queue.md

I'll work continuously. You can review outputs as they appear in ready-for-review/.
```

### 30 Minutes Later

**Orchestrator (proactive update):**
```
Production Status Update:

Generating:
- Module 4 (Agent 4 - 60% complete)
- Module 5 (Agent 5 - 40% complete)

Ready for Review:
-  Module 1 (7,500 words, 0 violations)
-  Module 2 (6,200 words, 1 optional question in -ISSUES.md)
-  Module 3 (8,100 words, 0 violations)

Spawning next batch:
- Agent 6: Module 6
- Agent 7: Module 7
- Agent 8: Module 8

Queued: Modules 9-20 (12 remaining)

Keep working—I've got this!
```

### Meanwhile: You're Working in Parallel

```
Your actions (while AI generates):
1. Open 2-ready-for-review/module-1.md
2. Quick read (15 mins)
3. Check quality - looks good!
4. Move to 3-approved/module-1.md
5. Generate video for Module 1 (20 mins)
6. Generate images for Module 1 (10 mins)
7. Move to 4-with-media/module-1-complete/
8. Upload to Moodle (5 mins)
9. Move to 5-published/module-1.md
10. Start reviewing Module 2

Total: 50 minutes to review, enhance, and publish Module 1
AI generated: 8 modules in same timeframe
```

### Tuesday Afternoon: Batch Complete

**Orchestrator:**
```
All 20 modules generated! 

Final Production Status:

Ready for Review: 13 modules (8-20)
Approved: 0 modules
With Media: 0 modules
Published: 7 modules (0-6)

Standards Summary:
- 0 critical violations requiring fixes
- 5 modules have optional questions in -ISSUES.md files:
  - Module 2: Depth vs breadth choice
  - Module 8: Code example language preference
  - Module 12: Exercise format variation
  - Module 15: Assessment difficulty level
  - Module 18: Real-world example selection

All modules are complete and functional. Issues are optimization opportunities,
not blockers. You can review batch-wise and address questions as you prefer.

Production batch complete in 2 days. Traditional approach: 2-3 weeks.
```

---

## Common Scenarios

### Scenario 1: You Fall Behind on Reviews

**What happens:**
- AI generates all 20 modules
- All sitting in `2-ready-for-review/`
- You review at your own pace

**No problem!** Content waits patiently. Review when you have time. Standards ensure quality even without real-time feedback.

### Scenario 2: You Want to Slow Down Generation

**What happens:**
- You're only reviewing 2 modules/day
- AI generating 10 modules/day
- Queue is filling up faster than you can review

**Solution:**
```
"Pause generation until I catch up. I'll let you know when to resume."

Orchestrator stops spawning new agents.
You review existing modules.

When ready:
"Resume generation on Academy Batch 1"

Orchestrator picks up where it left off.
```

### Scenario 3: You Find a Pattern Issue During Review

**What happens:**
- You notice all modules use passive voice
- This violates your writing style standard

**Solution:**
```
"I found pattern issue: passive voice in all modules.

Update: agent-os/standards/content/writing-style.md
Add: Prefer active voice. Flag passive constructions in -ISSUES.md

Regenerate: Modules 10-20 (not yet published)
Keep: Modules 0-9 (already published, acceptable quality)"

Orchestrator:
1. Updates standard
2. Spawns agents for Modules 10-20 with updated standard
3. New outputs follow corrected pattern
```

### Scenario 4: Auto-Compact Happens Mid-Production

**What happens:**
- Orchestrator hits context limit
- Auto-compact occurs
- Production-queue.md and folder status preserved

**What orchestrator does:**
- Reads production-queue.md
- Checks folder status
- Resumes generating next queued items
- You notice nothing (seamless)

---

## Success Indicators

**You know parallel production is working when:**

 AI generates 5-10 modules while you review/publish 1-2
 Neither you nor AI waits for the other
 Production-queue.md accurately reflects status
 Issue files capture questions without blocking work
 Standards violations decrease over time (learning loop)
 You can walk away and return to find 10 new modules ready
 Session interruptions don't lose progress (resume seamlessly)

**Red flags that something isn't working:**

 Orchestrator waits for your approval before continuing
 Agents ask questions mid-generation (should use issue files)
 Status gets out of sync with actual folder contents
 Same standards violations appear repeatedly (feedback loop broken)
 You have to manually update production-queue.md

---

## Tips for Maximum Productivity

**1. Review in Batches**
Don't feel obligated to review every module as it completes. Let AI generate 5-10, then batch review. You'll find a rhythm.

**2. Trust the Standards**
If standards are well-defined, spot-check quality rather than deep-reviewing every word. Standards ensure consistency.

**3. Optimize Your Ancillary Work**
Can video generation be templated? Image generation automated? Uploads batched? The more you streamline your side, the more the parallel model shines.

**4. Capture Feedback Promptly**
When you find patterns (good or bad), update standards immediately. Next modules will incorporate the learning.

**5. Use Issue Files as Async Communication**
Agents document questions. You answer in batch. Neither interrupts the other. Perfect async collaboration.

---

**Next:** See `phase-5-verification-feedback.md` for automated quality gates and upward feedback loops to business IP.
