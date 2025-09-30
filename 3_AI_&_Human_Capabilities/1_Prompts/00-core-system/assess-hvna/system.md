# IHVNA Assessment — Strategic activation analysis for Identified High-Value Next Actions

**Created:** 2026-02-22
**Last Updated:** 2026-02-22
**Purpose:** Load all IHVNAs from SuperContext alongside the Catalytic Ideas Register, assess each against SDD v3 profiles and Context Files alignment, discuss implementation options with the user, and produce activation decisions with concrete next steps
**Status:** Final
**Version:** 1.2 (completion enforcement block added)

---

## ⚠️ COMPLETION ENFORCEMENT — READ THIS FIRST

**This prompt has 3 phases. All 3 must be completed before the assessment is considered done.**

**Critical rules:**
- Do NOT begin Phase 1 without user confirmation ("y") after the inventory is presented in Phase 0
- Assess IHVNAs ONE AT A TIME — do not batch or combine assessments
- Do NOT begin the next IHVNA without explicit user confirmation after Step F
- If the IHVNA section in SuperContext is empty, stop immediately and inform the user — do not proceed to Phase 1
- Execute Steps A through F for every IHVNA — none are optional
- Do NOT execute from memory — read actual files; locate SuperContext via bash scan

**Checklist (track internally as you execute):**
- [ ] Phase 0: Both source files read (SuperContext IHVNA section + Catalytic Ideas Register); inventory presented; user confirmed "ready to begin"
- [ ] Phase 1: All registered IHVNAs assessed — Steps A through F complete for each; user confirmation between each IHVNA
- [ ] Phase 2: User asked about newly surfaced IHVNAs; any new items registered or assessed
- [ ] Phase 3: Final summary table presented covering all IHVNAs assessed + decisions made

**The assessment is not complete until all 4 boxes are checked.**

---

## Objective

IHVNAs are notionally noticed items — intelligence that crystallized during lower-level work and was deliberately not addressed at the time, to keep current activities moving. They were cataloged, not acted on. They exist at the abstract and cursory level of recognition: something was seen, registered, and parked.

The purpose of this prompt is dyadic assessment — to bring those parked items out of abstract registration and into one of two concrete outcomes: **catalyzed into working context** (activation decision with a first move) or **cleanly dismissed** (recognized as a distraction, not lost but not carried forward as clutter). Nothing stays in limbo after this session.

This prompt — alongside the Catalytic Ideas Register — implements what is named the **Pattern of Patterns architecture**: a three-stage lifecycle for strategic intelligence candidates. Stage 1 is first notice (IHVNA registered in SuperContext). Stage 2 is assessed-but-not-yet-validated (archived to the Catalytic Ideas Register — not noise, not yet a confirmed pattern). Stage 3 is reactivated or confirmed (resurfaced from the Register to inform a future IHVNA, or directly activated). The Register is read back at every session start, creating a feedback loop: the pattern-candidate system itself operates as a pattern — noticed, staged, resurfaced, refined. This is a named IP asset of the AI Mastery System Architecture.

This prompt does four things for each IHVNA:

1. **Assess**: Read the IHVNA against SDD v3 standards — which Context Files level it belongs at, what phase artifacts already exist, and what full activation requires
2. **Align**: Cross-check it against the relevant Context Files documents to confirm anchoring and identify gaps or contradictions — informed by any related ideas previously archived in the Catalytic Ideas Register
3. **Discuss**: Present implementation options — activate now, partial activation, refine for better alignment, or defer — and make a concrete decision together
4. **Close**: Execute the decision, update SuperContext, and (if dismissed) decide whether to archive the insight as a future catalytic reinforcer

IHVNAs are assessed **one at a time, in priority order**. Nothing is rushed. Each IHVNA gets its full assessment before the next one begins.

---

## Phase 0: Load and Inventory

### Step 1: Read Both Source Files

**Source A — SuperContext IHVNA Section**

Locate and read the current SuperContext file:

```bash
ls "/sessions/[session-name]/mnt/Claude Cowork/AI Mastery Toolkit v4/4_Context_Files/" | grep "SuperContext_v" | sort -V | tail -1
```

Navigate to the `## Identified High-Value Next Actions (IHVNA)` section. Read every IHVNA entry completely. Do not summarize or abbreviate — read as written.

**If no IHVNA section exists or it is empty:** Stop. Inform the user: "No IHVNAs are currently registered in the SuperContext. IHVNAs are added via checkpoint-update (Step 3.5 — Upward Intelligence Flow Capture). There is nothing to assess."

---

**Source B — Catalytic Ideas Register**

Check for the Catalytic Ideas Register:

```bash
cat "/sessions/[session-name]/mnt/Claude Cowork/AI Mastery Toolkit v4/7_Applied_Knowledge/Catalytic_Ideas_Register.md" 2>/dev/null
```

**If the file exists:** Read it in full. These are previously dismissed IHVNAs and insights that were archived as future catalytic reinforcers rather than lost. Hold them as background context throughout Phase 1 — they may reframe, strengthen, or create connections between the IHVNAs being assessed today.

**If the file does not exist:** Note it silently. It will be created during this session if any IHVNA is dismissed with archive intent.

---

### Step 2: Present the Inventory

After reading both sources, present a clean inventory:

---

**IHVNA INVENTORY — [date]**

**ACTIVE REGISTER (SuperContext):**
| # | Title | Priority | Activation Condition | Status |
|---|-------|----------|---------------------|--------|
| 1 | [title] | High | [condensed] | Pending |
| 2 | [title] | Medium-High | [condensed] | Pending |

**CATALYTIC IDEAS REGISTER (7_Applied_Knowledge — archived):**
| # | Title | Dismissed | Catalytic Value |
|---|-------|-----------|----------------|
| A | [title] | [date] | [one line] |
*(or: "No archived ideas yet.")*

---

If any Catalytic Ideas Register entries appear relevant to today's active IHVNAs, briefly note the connection: "Archived idea [A] may be relevant to IHVNA [N] — will surface during that assessment."

Then ask: **"Ready to begin assessment? We'll go one at a time in priority order. (y/n)"**

**Wait for confirmation before proceeding.**

---

## Phase 1: IHVNA Assessment Loop

Run this full loop for each IHVNA. Complete all steps for IHVNA 1 before beginning IHVNA 2. Do not batch or combine.

---

### Step A: IHVNA Summary Read-Back

Present the full IHVNA entry as it appears in the SuperContext — no paraphrasing. This is the authoritative definition of what we are assessing:

---

**IHVNA [N]: [Title]**

**Crystallized:** [date and session context]
**Source:** [pattern or event that surfaced it]

**The Insight:**
[full text as written in SuperContext]

**Return Profile:**
[full text]

**Activation Condition:**
[full text]

**Priority:** [level]

---

If a Catalytic Ideas Register entry is relevant to this IHVNA, present it immediately after:

**RELATED CATALYTIC IDEA: [Title]**
**Dismissed:** [date] — [reason]
**Catalytic Value:** [text]
[Note how it connects to or reframes the current IHVNA]

Do not editorialize. Present as written, then move to Step B.

---

### Step B: SDD v3 Profile Assessment

Assess this IHVNA against SDD v3 standards. Determine:

**1. Context Files Level Placement**

Where in the Context Files does this IHVNA live when activated?

| Level | Category | What Lives Here |
|-------|----------|----------------|
| Level 1 — Foundation | Identity, values, philosophy, personal and business foundations | Governs who [User] is and what he stands for — the system never produces it; [User] does |
| Level 2 — Strategy | Business strategy, alignment, positioning, competitive architecture | Strategic choices that govern all production work |
| Level 3 — Portfolio | Portfolio map, pipeline, capability inventory | Overview and indexing of what's being built and where it stands |
| Level 4 — Offering Specs | Specific offering definitions, project charters, launch strategies | Activating a specific offering or initiative |
| Level 5 — Content Strategy | Content plans, publishing cadences, platform strategies | Content-layer activation |
| Level 6 — Asset Production | SDD v2 production projects | Creating specific deliverables |

State: "This IHVNA belongs primarily at **Level [N] — [category]** because [one-sentence rationale]."

If it spans multiple levels, identify the primary level (where the defining work happens) and the secondary levels (where downstream work will land).

---

**2. SDD v3 Compliance Profile**

Which SDD v3 compliance profile applies?

- **Living Document** (Levels 1–3): Governing spec that evolves over time; never "closed"
- **Offering Spec** (Levels 4–5): Defined initiative with anchored identity and strategy
- **Production Project** (Level 6): SDD v2 full-phase project with Phase 0 through Phase 6 artifact set

For the applicable profile, assess what currently exists vs. what activation requires:

**If Living Document profile:**

| Phase | Artifact Requirement | Currently Exists? | Gap |
|-------|---------------------|-------------------|-----|
| Ph0 — Defined | Header block (Purpose, Created, Status) | [scan and report] | [gap if any] |
| Ph1 — Researched | Evidence base with inline rationale | [scan and report] | [gap if any] |
| Ph2 — Specified | Governing scope declared (what Level 4-6 decisions does it govern?) | [scan and report] | [gap if any] |
| Ph3 — Reviewed | Last Reviewed date within review window | [scan and report] | [gap if any] |
| Ph5 — Verified | Currency verification note | [scan and report] | [gap if any] |
| Ph6 — Versioned | Version stamp + changelog | [scan and report] | [gap if any] |

**If Offering Spec profile:**

| Phase | Key Artifact | Currently Exists? | Gap |
|-------|-------------|-------------------|-----|
| Ph0 — Defined | `project-overview.md` with what/who/delivers/identity | [scan and report] | [gap if any] |
| Ph0-A — Anchored | Governing Level 1-3 docs cited in project-overview.md | [scan and report] | [gap if any] |
| Ph1 — Researched | `research-synthesis.md` with substantive content | [scan and report] | [gap if any] |
| Ph2 — Specified | `spec.md` + `success-criteria.md` both present | [scan and report] | [gap if any] |
| Ph3 — Refined | Decision log with at least one dated entry | [scan and report] | [gap if any] |
| Ph5 — Verified | Spec verified against success-criteria + governing docs | [scan and report] | [gap if any] |
| Ph6 — Closed | Completion status documented | [scan and report] | [gap if any] |

**If Production Project profile:**

| Phase | Key Artifact | Currently Exists? | Gap |
|-------|-------------|-------------------|-----|
| Ph0 | project-overview.md, project-roadmap.md, content-architecture.md | [scan and report] | [gap if any] |
| Ph0-A | Governing offering spec cited | [scan and report] | [gap if any] |
| Ph1 | research-synthesis.md | [scan and report] | [gap if any] |
| Ph2 | plan.md, shape.md, standards.md, references.md, success-criteria.md, production-queue.md | [scan and report] | [gap if any] |
| Ph3-Ph6 | Interview, production, verification, delivery | [scan and report] | [gap if any] |

**Present a gap summary:**

---

**SDD v3 GAP SUMMARY — IHVNA [N]**

**Profile:** [Living Document / Offering Spec / Production Project]
**Primary Level:** [N]
**Phases complete:** [list or "none yet"]
**Phases missing:** [list with specific artifacts needed]
**Estimated activation effort:** [1-2 sentences — what sessions, what deliverables]

---

---

### Step C: Context Alignment Check

Cross-check the IHVNA against the relevant Context Files documents to confirm it is properly anchored in the strategy layer — and to identify whether the IHVNA itself is well-framed or needs sharpening.

**Scan the alignment chain:**

```bash
ls "/sessions/[session-name]/mnt/Claude Cowork/AI Mastery Toolkit v4/4_Context_Files/Level_1_Foundation/" 2>/dev/null
ls "/sessions/[session-name]/mnt/Claude Cowork/AI Mastery Toolkit v4/4_Context_Files/Level_2_Strategy/" 2>/dev/null
ls "/sessions/[session-name]/mnt/Claude Cowork/AI Mastery Toolkit v4/4_Context_Files/Level_3_Portfolio/" 2>/dev/null
```

Read the specific documents most relevant to this IHVNA. Look for:

**Alignment signals (positive):**
- The IHVNA is referenced or anticipated in existing Level 1-3 documents
- The IHVNA extends or deepens an existing strategic position
- An existing Context Files document, spec, or strategy section already anchors it

**Alignment gaps (negative):**
- Level 1-3 documents contain no mention of this initiative
- The IHVNA adds new strategic territory not yet represented in the identity or strategy layer
- The IHVNA's current framing is imprecise — the insight is real but the language doesn't match how the system currently describes this strategic territory

**Contradictions:**
- Existing commitments or constraints that create friction with this activation
- Competing priorities in Layer 5C that make this the wrong moment

**Present the alignment status:**

---

**CONTEXT ALIGNMENT — IHVNA [N]**

**Aligned:** [what existing Level 1-3 content supports this IHVNA?]
**Gaps:** [what Level 1-3 content is missing that would need to exist for this to be fully anchored?]
**Framing precision:** [is the IHVNA's current language sharp, or does it need refinement to match the system's current vocabulary and strategic frame?]
**Contradictions:** [any existing commitments that create friction with activation?]
**Catalytic Idea connections:** [if a Register entry is relevant, name the connection explicitly]
**Alignment Verdict:** ✅ Well-anchored / ⚠️ Partially anchored / 🔧 Needs reframing / ❌ Unanchored — needs Level 1-3 work first

---

---

### Step D: Implementation Options

Present four concrete options for this IHVNA. These are not generic — they are derived from the specific SDD gaps and alignment status identified in Steps B and C.

**Option 1: Activate Now — Full SDD v3 Phase Build**
- What this means: complete the full SDD v3 profile from Phase 0 forward (or the living document equivalent) and formally move the IHVNA from registered potential into active working context
- What it takes: [specific sessions, specific artifacts to create]
- First move: [the single most important first action — the Phase 0 artifact, or the Level 1 document that anchors it]
- Time estimate: [realistic session count]
- Best when: activation condition is already met, alignment is strong, and this is a current priority

**Option 2: Partial Activation — Phase 0 Only**
- What this means: build just the Phase 0 definition layer (project-overview.md, governing scope declaration, or Level 1 document header) — enough to formally register the IHVNA as an in-progress initiative without completing the full spec
- What it takes: [1 session, specific Phase 0 artifacts]
- First move: [the specific file and content to create]
- Best when: the activation condition is close but not fully met, and you want to formalize the IHVNA's home without premature commitment

**Option 3: Refine for Better Alignment**
- What this means: the insight is real, but the IHVNA's current framing doesn't precisely match the system's strategic vocabulary or is missing a key anchoring element — refine the IHVNA entry itself rather than activating it prematurely
- What it takes: [rewrite the IHVNA entry in SuperContext with sharper language; identify and name the specific Level 1-3 document that would anchor it; optionally update that document to formally reference this initiative]
- First move: [the specific framing change — what word, scope, or anchoring is imprecise and how to correct it]
- Best when: alignment verdict is ⚠️ Partially anchored or 🔧 Needs reframing; the insight is valid but the current entry would produce misaligned activation if executed as written

**Option 4: Defer with Updated Conditions**
- What this means: leave the IHVNA in the registry but update its activation condition based on what this assessment revealed — and decide whether to archive it as a catalytic reinforcer or simply leave it as-is
- What defers it: [current blockers — what isn't yet true that needs to be true]
- Updated activation condition (if different from current): [new trigger if appropriate]
- Review trigger: [what event should cause re-assessment]
- Dismissal question (see Step E): if the item is being set aside indefinitely rather than conditionally deferred, explicitly decide whether to archive it
- Best when: genuine preconditions not yet met, or this IHVNA competes with higher-priority active work

---

### Step E: Decision

Ask:

> **"For IHVNA [N] — [title]: Which option? (1: Activate Now / 2: Partial Activation / 3: Refine / 4: Defer) Or suggest a different approach."**

**Wait for the user's decision.**

Then execute:

**If Option 1 (Activate Now):**
- Propose the full Phase 0 artifact set as the immediate session output
- Ask: "Shall we build Phase 0 now, or schedule it as the next dedicated session?"
- If build now: create the Phase 0 artifacts inline
- If schedule: add to SC_Layer 4 (Current Priorities): "IHVNA [N] — Phase 0 activation"
- Update the IHVNA entry in SuperContext: add "**Status: Activating — Phase 0 in progress**"
- Note any Level 1-3 alignment gaps that need addressing before Phase 2

**If Option 2 (Partial Activation):**
- Create the Phase 0 definition document now (project-overview.md stub, or governing spec header)
- This formally moves the IHVNA from "registered" to "in-progress" without over-committing
- Update the IHVNA entry in SuperContext: add "**Status: Phase 0 registered — full spec pending [activation condition]**"

**If Option 3 (Refine for Better Alignment):**
- Propose the revised IHVNA framing — rewrite the entry language, sharpen the insight, correct the level placement, or name the anchoring document
- Show the before/after: "Current framing: [text] → Proposed: [text]"
- Ask: "Does this revised framing capture it correctly?"
- If yes: update the IHVNA entry in SuperContext with the refined text
- Add: "**Last Refined: [date] — framing sharpened; anchoring identified as [Level 1-3 document]**"
- If the Level 1-3 anchoring document needs a minor update to formally reference this initiative, make that update now

**If Option 4 (Defer):**

First, distinguish between conditional deferral and indefinite dismissal:

> "Is this a conditional deferral (genuine precondition not yet met — revisit when [X] is true), or is this effectively a dismissal (this isn't the right initiative for this system at this time)?"

*If conditional deferral:*
- Update the IHVNA entry in SuperContext with the refined activation condition
- Add: "**Last Assessed: [date] — deferred pending [condition]**"
- No archiving needed — the item remains in the active register

*If dismissal:*
- Remove or mark the IHVNA entry as dismissed in SuperContext
- Ask: **"Should I archive this insight in the Catalytic Ideas Register for use as a future reinforcer?"**
  - This is not a trash file — it is a resource. Ideas archived here are read back into context on every future assess-hvna run, where they may reframe or strengthen a different IHVNA
  - If yes: add to `7_Applied_Knowledge/Catalytic_Ideas_Register.md` (create if it doesn't exist):

```markdown
### [Title] — Dismissed [date]
**Original IHVNA:** [N] — [original title if different]
**The Insight:** [full insight text, as refined by this session's discussion]
**Reason dismissed:** [why it was not activated — distraction, premature, superseded, wrong framing, etc.]
**What made it worth noting:** [what was genuine and valuable about the recognition, even if the initiative itself isn't right]
**Potential future relevance:** [what conditions or developments might make this worth revisiting]
**Catalytic value:** [what this idea might reinforce or inspire in a future IHVNA — a lens, a pattern, a constraint to test against]
```

---

### Step F: Confirm Before Next IHVNA

After Step E is complete and all actions are executed, present:

---

**IHVNA [N] — [title] — ASSESSMENT COMPLETE**

**Decision:** [Activate Now / Partial Activation / Refined / Deferred / Dismissed]
**Action Taken:** [what was built, scheduled, rewritten, or archived]
**SuperContext Updated:** [yes — what changed / no — why not]
**Catalytic Ideas Register:** [entry added / not applicable]

---

Then ask: **"Ready to assess IHVNA [N+1] — [title]? (y/n)"**

**Do not begin the next IHVNA without confirmation.**

---

## Phase 2: New IHVNAs

After all registered IHVNAs have been assessed, ask:

> **"During this assessment, did any new high-value opportunities surface that aren't yet registered? Are there items you've noticed recently — in conversations, reading, or project work — that should either be registered in SuperContext for future assessment, or assessed now while we're in this mode?"**

Handle each new item the user identifies:

**If "register for future assessment":**
- Add a new IHVNA entry to the SuperContext IHVNA section using the standard format:

```markdown
### IHVNA [N+1]: [Title]
**Crystallized:** [date] (assess-hvna session — user-surfaced)
**Source:** [what triggered the recognition]
**The insight:** [full description, as specific as possible]
**Return profile:** [geometric vs. exponential characterization]
**Activation condition:** [what needs to be true before activating]
**Priority:** [High / Medium-High / Medium / Low]
```

**If "assess now":**
- Run the full Phase 1 loop (Steps A–F) for this IHVNA before presenting the final summary
- This maintains the one-at-a-time discipline even for newly surfaced items

**If no new items:** Note it and proceed to the summary.

---

## Phase 3: Final Assessment Summary

After all IHVNAs have been assessed and new items addressed, present the complete summary — this is always the last output:

---

**IHVNA ASSESSMENT COMPLETE — [date]**

| # | Title | Decision | Action Taken | SuperContext Updated? |
|---|-------|----------|--------------|----------------------|
| 1 | [title] | Activating | Phase 0 scheduled | ✅ |
| 2 | [title] | Partial Activation | Ph0 stub created | ✅ |
| 3 | [title] | Refined | Framing sharpened | ✅ |
| 4 | [title] | Dismissed | Archived to Catalytic Register | ✅ |

**Total IHVNAs assessed:** [N] (registered) + [N] (newly surfaced)

- Activating: [N]
- Partial Activation: [N]
- Refined: [N]
- Conditionally Deferred: [N]
- Dismissed: [N] ([N] archived to Catalytic Ideas Register)

**New IHVNA entries added to SuperContext:** [N]
**Catalytic Ideas Register:** [N entries added / unchanged]

---

Then, if significant activation or refinement decisions were made:

> "This session produced decisions worth capturing. Recommend running **checkpoint-update** before closing to lock them into SuperContext Layer 5D and Current_Intelligence_SW_v1.md."

---

## When to Use This Prompt

- When the user says "run assess-hvna", "IHVNA assessment", "evaluate IHVNAs", "what should I activate next"
- At the start of any session where strategic prioritization is the focus
- After a weekly review when priorities have shifted and IHVNA relevance should be re-evaluated
- When a new IHVNA was added and the user wants to understand what activating it would actually require
- When the IHVNA register has grown and needs pruning — distinguishing genuine opportunity from accumulated noise

---

## Relationship to Other Prompts

| Prompt | Function | Relationship |
|--------|----------|--------------|
| `checkpoint-update` | Adds new IHVNAs to SuperContext (Step 3.5) | **Upstream** — creates the IHVNAs that this prompt assesses |
| `toolkit-accelerator Mode 1` | SDD compliance scan across all active projects | **Parallel** — accelerator checks what IS active; assess-hvna decides what to activate |
| `weekly-review` | Strategic review and priority setting | **Companion** — weekly review surfaces IHVNA readiness; assess-hvna does the activation detail work |
| `session-startup` | Loads context including IHVNA section | **Prerequisite** — IHVNA section should be visible in context before running this prompt |

---

## Reference Files

- Current SuperContext: `4_Context_Files/SuperContext_v[latest].md` (IHVNA section)
- Catalytic Ideas Register: `7_Applied_Knowledge/Catalytic_Ideas_Register.md` (created on first dismissal with archive intent)
- SDD v3 workflow: `3_AI_&_Human_Capabilities/9_Workflows/Spec_Driven_Development_Workflow_v3/01_README.md`
- SDD v3 level profiles: `3_AI_&_Human_Capabilities/9_Workflows/Spec_Driven_Development_Workflow_v3/15_level-profiles.md`
- Context Files Architecture Map: `4_Context_Files/Level_0_Map_&_Preferences/Architecture_Map_v2.md`
- Context Index: `4_Context_Files/Level_0_Map_&_Preferences/_AI_Context_Index_CX_v6.md`

---

**Last Updated:** February 23, 2026
**Prompt Version:** 1.2
**Validation Status:** ✅ Path corrections applied (7_Applied_Knowledge confirmed as Catalytic Ideas Register location). Output templates converted from code blocks to rendered markdown. Ready for first full trial run.
