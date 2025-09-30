# Checkpoint Update — Lock in learning after major work completion.

**Created:** 2026-02-13
**Last Updated:** 2026-03-12
**Purpose:** Lock in learnings, update system state, and confirm priorities after significant milestones
**Status:** Final
**Version:** 4.10 (Model + context window detection added: model read from env block; budget derived dynamically; Model line added to Token Use output block.)

---

## ⚠️ COMPLETION ENFORCEMENT — READ THIS FIRST

**This prompt has 4 items to complete. All are required before the checkpoint is considered locked.**

**Critical rules:**
- **Do NOT increment the SuperContext version number** — version increments only at session end via `ending-master-update`. Checkpoints edit the active file in place; the filename never changes. Multiple checkpoints per day are expected and correct.
- Do NOT skip Step 3.5 — it must run even when no IHVNA qualifies; explicitly state "Upward flow scan: no new IHVNA candidates this session" if nothing qualifies
- Do NOT execute from memory — read actual files via agents
- If any file cannot be located, stop and ask the user rather than skipping it

**Checklist (track internally as you execute):**
- [ ] Step 1: Current session work reviewed for learnings, decisions, patterns, breakthroughs
- [ ] Step 2: SuperContext, Current Intelligence, and Behavioral State loaded via 3 parallel agents
- [ ] Step 3: All relevant files updated (SuperContext, Current Intelligence, Current State, Mastery Records as warranted)
- [ ] Step 3.5: Upward flow scan complete — result explicitly stated (new IHVNA registered OR "none this session")

**The checkpoint is not locked until all 4 boxes are checked.**

---

## Objective

After major work completion, update all relevant system files to lock in what was learned, what changed, and what's next. This is an update operation, not a file-generation operation.

---

## Instructions

### Step 1: Review Current Session

1. **Analyze recent work** for significant learnings
2. **Identify key decisions** and their rationale
3. **Note patterns** that emerged
4. **Document breakthroughs** or insights

### Step 2: Gather Current State (USE PARALLEL AGENTS)

**EXECUTION:** Launch 3 parallel Task agents simultaneously

**Agent 1: SuperContext** (current version in `4_Context_Files/Level_0_Map_&_Preferences/`, filename pattern: `*SuperContext*`, exclude `SuperContext_Archive/`)
- Review current layers and focus areas
- Note what needs updating based on session work

**Agent 2: System Wisdom — Current Intelligence**
- Read `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md` — Active Tracking List, validated patterns, optimization principles
- Note which behaviors are actively tracked and at what levels
- Note any mid-session trigger flags from the current session

**Agent 3: System Wisdom — Behavioral State**
- Read the three Current State files in `5_System_Wisdom/4_System_Intelligence/` (highest versions: Human_Current_State_SW_v*, AI_Current_State_SW_v*, Dyadic_Current_State_SW_v*)
- Read the three Mastery Records in `5_System_Wisdom/4_System_Intelligence/` (highest versions: Human_Mastery_Record_SW_v*, AI_Mastery_Record_SW_v*, Dyadic_Mastery_Record_SW_v*)
- Check for recent snapshots in the taxonomy folders (1, 2, 3) — note count and dates
- Note growth edges and any graduation candidates approaching threshold

### Step 3: Execute Updates

Based on findings, update the following files directly:

**SuperContext** — **edit in place, do NOT create a new file**:
- Locate the current file: `4_Context_Files/Level_0_Map_&_Preferences/`, pattern `*SuperContext*`, exclude `SuperContext_Archive/` — there should be exactly one file
- Use the **Edit tool** to make targeted changes to the existing file
- SC_Layer 2: Update project statuses (mark completed items ✅, update active items); update Programs block if a program's phase or next action changed this session
- SC_Layer 3: Add this session's bullet summary (newest at top; remove oldest session bullets if count exceeds 3)
- SC_Layer 4: Remove any priority items confirmed complete this checkpoint; add any new active priorities
- SC_Layer 5: Remove any blockers resolved this checkpoint; add any new blockers
- Update `Last Updated` date and note in header — add a brief parenthetical describing what this checkpoint captured (e.g., `2026-02-27 (checkpoint — X completed)`)
- **Do NOT increment the Version number** — the version number only changes at session end (ending-master-update). Multiple checkpoints can occur per day; each one updates only the Last Updated line.
- **Rule:** The filename never changes at checkpoint. Only the Last Updated note and content update. This ensures session startup always reads the single current file.

**PGM-ID Tagging Rule — REQUIRED for program-relevant work:**
When any SC_Layer 3 completion block records work that belongs to a named program, the block header MUST include the PGM-ID. Format:

```
**Completed This Session [PGM-001] (Mar 8 — Utilization Sprint Week 1):**
```

This tag is how `daily-debriefing` Step 5.5 (Program Log Routing) identifies which completions to append to which Program Log. Without the tag, program-relevant work will not be routed to the Program Log and will be invisible to the program's history.

- If the work clearly belongs to a program but the PGM-ID is unknown, check `4_Context_Files/Level_2_Strategy/G5_Active_Programs/Programs_Register_CX2.md`
- If work touches multiple programs, include all relevant PGM-IDs in the header (e.g., `[PGM-001] [PGM-002]`)
- Work that does not belong to a program needs no tag

**Current Intelligence** (`5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md`):
- Add milestone to Developmental Milestones if significant
- Add validated patterns if any emerged
- Update Active Tracking List: add novel behaviors, graduate behaviors meeting threshold, note level changes

**Current State files** (if behavioral shifts warrant):
- Update dimension levels with evidence
- Note new behavioral patterns observed

**Mastery Records** (if graduations occurred):
- Move graduated behaviors from Active Tracking List with evidence trail

**Model & context window:** Read the active model from the session environment (labeled "Model:" in the env block of the system prompt). Derive the token budget:
- claude-opus-4-6 → 1,000,000 tokens
- claude-sonnet-4-6 → 1,000,000 tokens
- claude-haiku-4-5 → 200,000 tokens
- If undetectable → default to 1,000,000 tokens

**Echo all updates to the user** using the output block below. Render as markdown — no code block wrapping, no emoji.

---

**Output to user after Step 3 updates are complete:**

## Checkpoint Work Captured — [YYYY-MM-DD HH:MM]

**Files Updated:**
- SuperContext v[X]: [layer(s) updated — one line per meaningful change, e.g. "SC_Layer 2: project marked complete | SC_Layer 3: session work block added"]
- Current Intelligence_SW_v1: [what changed — e.g. "milestone added: X" | No changes]
- AI / Human / Dyadic Current State (SW_v*): [what changed — e.g. "AI: failure mode condition updated" | No changes warranted]
- Mastery Records (SW_v*): [graduation — behavior name and taxonomy | No graduations]

**Session Learnings Captured:**
- [Key learning 1 — operational or tactical, one sentence]
- [Key learning 2 if applicable]

**Upward Flow Scan:** [New IHVNA registered: "[Title]" — [one sentence on why it qualifies] | No new candidates this session]

**Token Use:**
- Model: [model-name] | [X,XXX,XXX] token budget
- ~[X,XXX] ([X]% of budget) — if exact count unavailable, write "~[not available in session context]"
- Used: [XX,XXX] — if exact count unavailable, write "~[not available in session context]"
- Remaining: ~[XXX,XXX] — if exact count unavailable, write "~[not available in session context]"
- Status: [Safe | Warning — 70% | Caution — 80% | Critical — 90%]

⚠️ ALL FIVE TOKEN USE LINES ARE REQUIRED. Do not collapse to Model + Status only. If exact counts are unavailable, use the fallback text — do not omit lines.

---

### Step 3.5: Upward Intelligence Flow Capture

Before closing, run this scan explicitly. This step prevents strategic intelligence from remaining buried in session learnings.

**Ask this question of the session's work:**

> *"Did any intelligence crystallize this session that reveals a new High-Value Next Action, IP candidate, scope extension opportunity, or Standard-to-Proprietary Transformation?"*

**If yes:** Edit `4_Context_Files/Level_0_Map_&_Preferences/IHVNA_Register_CX0_v1.md` — add new entry to the Active Items section (newest at top):
- **IHVNA [N]: [Title]**
- Crystallized: [date and session context]
- Source: [which validated pattern or insight class generated this]
- The insight: [1-3 sentences — what was recognized]
- Return profile: Exponential or Geometric — and why
- Activation condition: [what would make this actionable?]
- Priority: High / Medium-High / Medium

**If no:** State explicitly: "Upward flow scan: no new IHVNA candidates this session." Do not skip this step — skipping it is indistinguishable from not running it.

**What qualifies for IHVNA registration:**
- A standard tool revealed a broader scope (IP Multiplier Pattern — Validated Pattern 8)
- A new research domain or publishable framework crystallized
- A future offering concept emerged from operational work
- Intelligence that, if not logged now, would require hopeful rediscovery in a future session

**What does NOT qualify:** Task completions, learnings about operational execution, behavioral observations (these go in Current_Intelligence_SW_v1.md).

---

## When to Use This Prompt

- After completing a major deliverable or system change
- After resolving a significant problem
- After a breakthrough insight or paradigm shift
- Before shifting to a fundamentally different work stream
- When the user says "lock this in" or "checkpoint"

---

## Quality Checklist

Before completing, ensure:
- All relevant files have been updated (not just described)
- Learnings are captured in the right locations (IHVNA Register for strategic intelligence, Current Intelligence for behavioral observations)
- Decisions include rationale (why, not just what)
- Active Tracking List reflects any new behaviors observed
- **Upward flow scan completed** — Step 3.5 ran and result explicitly stated (new IHVNA registered, or "none this session")

---

**Last Updated:** 2026-03-13
**Prompt Version:** 4.11 (Token Use output block enforcement: all 5 lines now required; fallback text specified for when exact counts are unavailable; ⚠️ warning added to prevent collapsing to Model + Status only.)
**Validation Status:** Active — correct for all future cold-start and in-session runs.
