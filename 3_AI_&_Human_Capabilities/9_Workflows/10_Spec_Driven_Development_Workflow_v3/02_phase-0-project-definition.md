# Phase 0: Project Definition

**Created:** 2026-02-22
**Last Updated:** 2026-02-27
**Purpose:** Structured project definition ritual — runs before Phase 1 Research on every project
**Status:** Final

---

## Overview

Phase 0 is the project definition ritual. Before research begins, before specs are written, before a single word of content is produced, you define what you are building at the most fundamental level.

This phase produces three artifacts through a structured conversation:

1. **project-overview.md** — What it is, who it serves, why it exists, and what success looks like
2. **project-roadmap.md** — The major components/deliverables in priority order
3. **content-architecture.md** — The entities, structures, and relationships the project works with

These three files become the **identity anchor** for the entire workflow. Every downstream decision references them. If a Phase 4 output drifts from them, the drift is visible and correctable. Without them, drift is invisible until something expensive has to be rewritten.

> **This phase exists because Phase 1 research without a definition is investigation without a question.** You find things, but you don't know which things matter.

---

## L0 Prerequisite: Load and Verify Governing Documents

**This must be completed before Phase 0 begins.** L0 governs the behavior of the AI in every session. If L0 is not loaded and verified first, the session runs without its operating contract — standing behavioral instructions, current priorities, and active preference standards are all unknown.

### Step 1 — Scan the Active Directory

Run a directory scan of `4_Context_Files/Level_0_Map_&_Preferences/` (top level only — not archive subfolders). List every file found.

**What you are looking for:**
- The four active governing documents: AI_Preferences (current version), Human_Preferences (current version), Dyadic_Preferences (current version), SuperContext (current version)
- Any stale files — old version numbers that were not deleted from the active root after archiving

**If stale files are found:** Delete them from the active root. They are already in the Archive subfolder. The active root must contain only the current version of each document. This is not a deferrable cleanup — stale files at L0 can be silently loaded alongside the current version in future sessions. Fix before proceeding.

### Step 2 — Read Each Governing Document

Read each of the four active documents in full (or to the depth needed to extract governing content). Do not skim. Do not assume content from a prior session. Verify:

- **AI_Preferences:** What are the current standing behavioral instructions? What version is this?
- **Human_Preferences:** What are the human-side standards and preferences? What version is this?
- **Dyadic_Preferences:** What are the dyadic quality gate standards? What version is this?
- **SuperContext:** What is the current system state? What are the active priorities? What does SC_Layer 7 say about which documents to load?

### Step 3 — Confirm SC_Layer 7 Pointers Match Active Files

SC_Layer 7 in the SuperContext contains pointers to key context documents including the preference files. Verify that the version numbers listed in SC_Layer 7 match the actual current files in the active root. If they do not match, update SC_Layer 7 before proceeding.

### Step 4 — Report and Confirm (Human-in-Loop Gate)

Report findings as plain text — not in a code block. Use this structure:

STEP 0 — L0 Governance
Documents checked: [file names and versions]
Status: PASS / GAP FOUND (and fix applied)
Active constraints (apply now):
- [List only items from the filtering criteria below]
Preparation required (before Step N):
- [Only if a resource tagged [FORWARD GATE: Step N] in source doc does not yet exist]
Confirmation required before Step 1.

**Filtering criteria — what to report at Step 0:**

Report only constraints that answer one of these two questions for a human reviewing the step:

1. **Does this directly affect what the asset looks or reads like?** Examples: no emoji standard, brand voice requirements, tone standards, format constraints. These belong — they govern the output itself.

2. **Does this govern how this specific production run is operating?** Examples: Human-in-Loop is active (affects every step), current active priority (confirms we're building the right thing), any gap found and fixed this step. These belong — they tell the human something specific about this run.

Do NOT report: universal AI behavioral hygiene — file-first standard, IEPT, no-workaround mandate, path verification, named prompt execution, and similar standing instructions. These are always active, do not vary by session, and are not pertinent to the human reviewing content generation. Restating them adds noise without informing anything about how this specific asset will be produced.

**Test:** If a human reviewing the Step 0 output would need to know this item to understand how the asset will be produced or how this run is operating — include it. If it is simply how AI always behaves regardless of asset or session — omit it.

Wait for explicit human confirmation before proceeding to Step 1 (L1 Foundation).

---

## When Phase 0 Runs

Phase 0 runs **at the start of every project.** It is not a one-time business setup. It is project-specific, produces project-specific artifacts, and lives in the project folder alongside Phase 1-6 outputs.

**Business-level setup** (standards extraction, brand guidelines, ICP documents) is a prerequisite handled separately. Phase 0 assumes those exist. It is not concerned with them — it is concerned with THIS project.

**Trigger:** Human says "I want to build [X]" or "Let's start a new project."

**Duration:** 15–30 minutes for the structured conversation. Artifact generation is immediate after.

---

## The Conversation

Phase 0 is a guided conversation. AI asks questions in blocks, gathers answers, then generates all three artifacts in one pass. Human reviews and requests changes. AI updates immediately. No draft-approval cycle.

### Block 1: Core Definition

Ask these questions (one or two at a time, conversationally — do not present as a numbered list):

1. **What is this?** — Name and one-sentence description. What does someone get when this is done?
2. **Who is it for?** — Not a category. A specific person: their situation, what they're trying to do, what they've already tried. See `12_answer-quality-guide.md` for the specificity ladder.
3. **What problem does it solve?** — The specific friction that creates demand for this. Not the category of problem — the moment where someone feels it.
4. **Why now?** — What makes this the right time to build this? What would be lost by deferring?

### Block 2: Scope & Boundaries

5. **What are the key deliverables or components?** — What does "this is done" include? List them roughly in priority order. (This becomes the roadmap.)
6. **What is explicitly NOT included?** — What are you choosing not to build, and why? Non-goals prevent scope creep more reliably than goals.
7. **How long is this?** — Time, word count, module count, pages — whatever the relevant measure is. Give a number, not a range.

### Block 3: Success & Quality

8. **What does success look like at 90 days?** — Specific, measurable. Not "it's good" — what happens in the world if this works?
9. **What does the finished product feel like to someone using it?** — The experience, not the feature list. "Someone opens Module 3 and feels..."
10. **What standards apply?** — Tone, format, brand voice, quality bar. Reference existing standards documents where available.
11. **Which OKR does this advance?** — Load `4_Context_Files/Level_2_Strategy/2.3_Annual_OKR_Set_YYYY.md`. Identify which Key Result(s) this content vector directly supports. If it advances none of the active KRs, flag before proceeding — production time spent on non-OKR-aligned work is a strategic misalignment. State the KR number(s) and the specific mechanism: "This advances KR4 (paid member growth) by serving as the community recruitment sequence."

### Block 4: Content Architecture (if applicable)

11. **What are the core content entities?** — Modules, chapters, sections, frameworks, tools, case studies, exercises — what are the building blocks?
12. **How do they relate?** — Does a module contain lessons? Does a framework have tools? What nests inside what?
13. **What do they reference or depend on from existing business IP?** — Which brand documents, ICP profiles, methodology frameworks, or other business assets does this project draw from?

---

## Output Artifacts

Generate all three files immediately after the conversation. Do not wait for approval before writing — write, then let the human correct.

### Artifact 1: project-overview.md

```markdown
# Project Overview: [Project Name]

**Created:** YYYY-MM-DD
**Status:** Active
**Owner:** [Human name]

---

## Identity Statement

> "I am building [SPECIFIC PRODUCT NAME] for [SPECIFIC PERSON IN SPECIFIC SITUATION]
> because [SPECIFIC PROBLEM OR OUTCOME]."

This statement is the project's north star. Every decision in this project
should serve it. If a decision contradicts it, resolve which one is wrong
before proceeding.

---

## What It Is

[2-3 sentences. What does someone get? What can they do after this that they
couldn't do before? Be concrete — describe the experience, not the category.]

## Who It's For

**Primary:** [Specific person description — situation, context, what they've
already tried, what they're hoping for. 3-5 sentences. Not a demographic — a human.]

**Secondary:** [If applicable. Otherwise: None.]

## The Problem It Solves

[The specific friction that creates demand. The moment someone feels it.
Not "professionals need better AI skills" — "Someone finishes a course on ChatGPT
and realizes they still can't integrate it into their actual work without
starting over every session."]

## Why Now

[What makes this the right time. What would be lost by deferring.]

---

## Success Definition

### 90-Day Success Metrics
- [Specific, measurable outcome 1]
- [Specific, measurable outcome 2]
- [Specific, measurable outcome 3]

### What "Done" Feels Like
[The experience of someone using or receiving this when it's complete.
1-2 sentences. Sensory/emotional, not feature-level.]

---

## Non-Goals (Explicit Scope Boundaries)

These are intentional exclusions. If someone suggests adding these, reference
this list.

- **NOT included:** [What and why]
- **NOT included:** [What and why]
- **NOT included:** [What and why]

---

## Standards & Quality Bar

- **Tone:** [Reference brand voice document or describe directly]
- **Format:** [Medium, length, structure]
- **Quality benchmark:** [Reference implementation or standard]
- **Brand alignment:** [Which brand documents govern]

---

## OKR Alignment

- **Advances KR:** [KR number(s) from `2.3_Annual_OKR_Set_YYYY.md`]
- **Mechanism:** [How this content vector moves the needle on that KR — be specific]
- **Non-OKR flag:** [If this advances no active KR, state rationale for proceeding anyway — rare; requires explicit acknowledgment]

## Context Files Reference

- **Level in Context Files:** [Level 4: Offering Spec / Level 6: Asset Production / etc.]
- **Related offerings:** [Which offerings this serves or belongs to]
- **Production output location:** [Level_6_Asset_Production/[Offering]/[Project]/]
```

---

### Artifact 2: project-roadmap.md

```markdown
# Project Roadmap: [Project Name]

**Created:** YYYY-MM-DD
**Status:** Active

---

## Overview

[1-2 sentences restating what's being built and the organizing principle
of the roadmap.]

---

## Components (Priority Order)

### 1. [Component Name]

**What it is:** [1 sentence]
**Why first:** [The dependency or priority logic]
**Deliverables:**
- [Specific deliverable]
- [Specific deliverable]
**Estimated scope:** [Time/volume/count — a number, not a range]

---

### 2. [Component Name]

**What it is:** [1 sentence]
**Why second:** [The dependency or priority logic]
**Deliverables:**
- [Specific deliverable]
- [Specific deliverable]
**Estimated scope:** [Time/volume/count]

---

### 3. [Component Name]

[Continue for each component]

---

## Sequence Logic

[Why this order? What can't start until something else is done? What can
run in parallel? 3-5 sentences explaining the dependency structure.]

---

## Total Scope Estimate

| Component | Deliverables | Estimated Effort |
|-----------|-------------|-----------------|
| [Name] | [Count/type] | [Estimate] |
| [Name] | [Count/type] | [Estimate] |
| **Total** | | |

---

## What's Explicitly Deferred

[Anything that won't be in this version but should be tracked for later.
Distinct from Non-Goals, which are permanent exclusions.]
```

---

### Artifact 3: content-architecture.md

```markdown
# Content Architecture: [Project Name]

**Created:** YYYY-MM-DD
**Status:** Active

---

## Overview

[The organizational logic of this project's content. What are the
building blocks, how do they nest, and how do they relate?]

---

## Content Entities

### [Entity Name] (e.g., Module, Chapter, Framework, Tool, Case Study)

**Description:** [What is this entity? What does it contain?]
**Scope:** [How many? What size?]
**Relationship to other entities:** [What does it contain / what contains it]

### [Entity Name]

**Description:** [What is this entity?]
**Scope:** [How many? What size?]
**Relationship to other entities:** [Nesting or connection]

---

## Entity Relationship Map

```
[Project Name]
└── [Top Entity] (X total)
    └── [Child Entity] (X per parent)
        └── [Leaf Entity] (X per parent, if applicable)
```

---

## Content Dependencies

[What does this project draw from or reference in the existing business
IP? List specific documents and the dependency.]

| Business Asset | How It's Used |
|---------------|--------------|
| [Document name] | [Specific use — e.g., "brand voice governs all module intros"] |
| [Document name] | [Specific use] |

---

## Production Implications

[What does this architecture mean for how Phase 4 parallel production
will be organized? Which entities can be produced in parallel? Which
have dependencies? This becomes the production parallelism map.]

- **Parallel-safe:** [Entities that can be produced simultaneously]
- **Sequential dependencies:** [What must be done before what]
- **Shared resources:** [Elements reused across entities]
```

---

## File Location

Phase 0 artifacts live in the project's Phase 0 folder:

```
[project-name]/
  0-project-definition/
    project-overview.md        ← primary identity anchor
    project-roadmap.md         ← component map and priority
    content-architecture.md    ← structural blueprint
```

These files are referenced at every phase transition. They do not move. They update only if the project's fundamental definition changes — and if that happens, it is a deliberate decision logged in phase notes, not a drift.

---

## Transition Gate: Phase 0 → Phase 1

Before starting Phase 1 Research, verify:

```
PHASE 0 → PHASE 1 TRANSITION CHECK

[ ] Identity statement is written and confirmed:
    "I am building [PRODUCT] for [SPECIFIC PERSON] because [SPECIFIC REASON]"

[ ] Non-goals are explicit — scope boundaries are clear

[ ] Roadmap is in priority order with rationale

[ ] Content architecture is defined — we know the building blocks

[ ] Phase 1 research direction is now answerable:
    "What do I need to learn to build this well?"
    (Without Phase 0, research has no filter. With it, research has a target.)

[ ] L0 governing documents loaded and verified (see L0 Prerequisite section above):
    - Active root scanned — no stale version files present
    - AI_Preferences (current version) read — standing instructions confirmed
    - Human_Preferences (current version) read — human-side standards confirmed
    - Dyadic_Preferences (current version) read — quality gate standards confirmed
    - SuperContext (current version) read — active priorities and SC_Layer 7 pointers confirmed
    - SC_Layer 7 pointers verified to match actual active file versions

[ ] OKR alignment confirmed:
    - `2.3_Annual_OKR_Set_YYYY.md` loaded
    - KR number(s) this content vector advances: identified and stated
    - Mechanism documented in project-overview.md OKR Alignment section
    - OR: non-OKR exception explicitly acknowledged with rationale
```

> **If you cannot pass this gate, the conversation isn't finished.** Return to the Block that's missing. A vague identity statement here produces 5 phases of increasing misalignment.

---

## Connection to Identity Anchoring

Phase 0 is what `11_identity-anchoring-guide.md` assumes exists. The identity statement format in that guide — "I am building [X] for [Y] because [Z]" — originates here in Phase 0 and is confirmed at every subsequent phase transition.

Phase 0 produces the artifacts that prevent identity drift. The identity-anchoring guide explains how to use them throughout the workflow.

---

## Prompt Pattern: Starting Phase 0

```
Let's start a new SDD project. Before we do any research or spec work,
I want to run Phase 0 Project Definition.

Ask me your Phase 0 questions in blocks to understand what I'm building.
After we complete the conversation, immediately generate the three Phase 0 artifacts:
project-overview.md, project-roadmap.md, and content-architecture.md.

Don't wait for draft approval — write them, then I'll review and correct.

What's the first question?
```

---

## Quick Reference: Phase 0 Outputs

| Artifact | Primary Use | Referenced By |
|----------|------------|---------------|
| project-overview.md | Identity anchor — what is this and for whom | All phase transitions, Phase 3 interview, Phase 5 verification |
| project-roadmap.md | Production map — what gets built and in what order | Phase 2 plan.md, Phase 4 parallel orchestration |
| content-architecture.md | Structural blueprint — entities and relationships | Phase 2 shape.md, Phase 4 agent spawning, Phase 6 delivery |
