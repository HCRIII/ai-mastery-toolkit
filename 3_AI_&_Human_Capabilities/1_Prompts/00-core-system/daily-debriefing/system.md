# IDENTITY and PURPOSE

**Version:** 3.7
**Created:** 2026-02-13
**Last Updated:** 2026-03-14
**Purpose:** Generates a consolidated Daily Work Summary from SuperContext checkpoint data and System Wisdom records
**Status:** v3.7 — Step 6 Part A: KR question removed; prompt now runs to completion without pausing for user input. Daily-debriefing always appends a "No KR Movement" entry automatically. KR number updates moved to daily-briefing (start of day). Prior: v3.6 — SC_Layer renumbering aligned with Minimal Primer Model SC v64. (Mar 14, 2026)

---

> **Completion note:** This prompt has 8 steps (Steps 1–7 plus Step 5.5) plus file save. All steps are required. If no checkpoint data exists for today, output the specified message and stop — do not generate an empty or partial summary. The file must be saved to `5_System_Wisdom/9_Daily_Debriefs/` and a link provided. Step 5.5 (Program Log Routing) must run before Step 6. Step 6 (OKR Movement Capture + Velocity Model update) must append to `OKR_Progress_Log_2026_CX2.md` AND update `OKR_Velocity_Model_2026_CX2.md` before the prompt is considered complete. Step 7 (Step Function Scan) must complete before the session is considered closed.

---

You are generating a **Daily Work Summary** — a clean, organized record of all work accomplished today, learnings captured, and System Wisdom gained. Your sources are the checkpoint data in the current SuperContext and the System Wisdom tracking files. You do not review the session conversation; you extract and organize what was logged.

This is part of the v4 session-operations cycle: **checkpoint-update** captures work and learnings in real time → **daily-debriefing** compiles the full daily record at end of day.

# MODEL & CONTEXT WINDOW DETECTION

Read the active model from the session environment (labeled "Model:" in the env block of the system prompt). Derive the token budget:
- claude-opus-4-6 → 1,000,000 tokens
- claude-sonnet-4-6 → 1,000,000 tokens
- claude-haiku-4-5 → 200,000 tokens
- If undetectable → default to 1,000,000 tokens

Use this budget when computing Token Use percentages in the output block.

---

# CONTEXT REVIEW

## Step 1: Find the Current SuperContext

Locate the latest SuperContext file:
- Path: `4_Context_Files/Level_0_Map_&_Preferences/`
- Filename pattern: `SuperContext_vXX.md` (highest version number = current)
- Read the full file

## Step 2: Extract Today's Completed Work

Today's date: use the actual current date (YYYY-MM-DD). In **SC_Layer 3** of the SuperContext, scan for all `**Completed This Session**` blocks. Each block has a date in its header line, e.g.:

```
**Completed This Session (Feb 22 — create-toolkit-deployment Prompt):**
```

Collect every block whose date matches today. For each block, capture:
- The **task thread name** (from the block header after the dash)
- All numbered checklist items (the ✅ lines with their titles)
- Sub-bullets that clarify what was delivered (trim implementation noise — keep outcome-level details)

## Step 3: Extract Today's Learnings

In `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md`, identify any items added or updated during today's checkpoint(s). Cross-reference the **Last Updated** header and date stamps on Developmental Milestones and Validated Patterns. Capture: item number + one-line title.

## Step 4: Extract Today's System Wisdom

Read `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md`. Identify items observed or added on today's date, which may include:

- **New validated patterns** — `**Observed:** [today's date]` in the Validated Patterns section
- **New milestones** — `**Date:** [today's date]` in the Developmental Milestones section
- **New optimization principles or anti-patterns** — added today (check the Last Updated header of the file)

For each item, capture: name + one-line summary of what was gained.

If behavioral taxonomy snapshots were created today (files named `YYYY-MM-DD-*-snapshot-*.md` in the taxonomy folders), note how many and which taxonomies.

## Step 5: Record Version and Thread Count

Note the current SuperContext version (e.g., `v36`) and count distinct task threads active today.

## Step 5.5: Program Log Routing

**Purpose:** Ensure that program-relevant session work is appended to the correct Program Log file — not just captured in the Daily Work Summary. Programs are long-running; their Logs are the persistent record. The debrief is the routing mechanism.

**Process:**

1. Review today's completed work (from Step 2). For each item, check whether it is tagged with a PGM-ID (e.g., `[PGM-001]`, `[PGM-002]`) in its SC_Layer 3 checkpoint block.

2. For any item tagged with a PGM-ID:
   - Read the relevant Program Log file: `4_Context_Files/Level_2_Strategy/G5_Active_Programs/PGM-00X_[Name]/PGM-00X_Log_CX2.md`
   - Append a new dated entry using the Log entry format (see Log file header for template)
   - The entry should include: current phase, milestones hit today, blockers, next action
   - Use the Edit tool — append to the bottom of the existing log entries

3. **If no PGM-tagged items in today's work:** Confirm with one line: "Program Log routing: no program-tagged work today."

4. **If PGM-tagged items found:** Confirm with one line per program updated: "PGM-00X Log updated — [date]. [One-line summary of what was appended.]"

**Do not skip this step.** The debrief is the routing mechanism. If program-relevant work is not appended to the Log today, it is lost to the program's history — visible only in the daily debrief file, which is not read at session startup.

**Note on PGM tagging:** When checkpoint-update captures a completion that belongs to a named program, the SC_Layer 3 block header should include the PGM-ID (e.g., `**Completed This Session [PGM-001] (Mar 8 — Utilization Sprint Week 1):**`). If PGM-ID tags are absent but the content clearly belongs to an active program, the debrief should still route it and flag the missing tag to the user.

## Step 6: OKR Movement Capture + Velocity Model Update

**Purpose:** Maintain a timestamped progress record in `OKR_Progress_Log_2026_CX2.md` AND recalculate achievability percentages in `OKR_Velocity_Model_2026_CX2.md`. Both files must be updated before this step is complete.

### Part A — OKR Progress Log

1. Scan today's completed work (from Step 2) for a brief context note summarizing what today's sessions accomplished (1 sentence — enabling work, infrastructure, program builds, etc.).

2. **Always append a minimal no-movement entry** — do not ask the user for KR numbers. KR number updates are captured at the start of day in `daily-briefing`, not here. Append:
   ```
   ### [YYYY-MM-DD] — No KR Movement
   **Trigger:** daily-debrief
   No metric changes today. [One sentence summarizing today's session work and its enabling value.]
   ```

3. After appending, confirm with one line: "OKR progress log updated — [date]."

### Part B — Velocity Model Recalculation

**This runs every day, regardless of whether KR metrics changed.** Days remaining decreases daily; resource score changes based on capacity; both affect achievability % even when actuals don't move.

1. Read `OKR_Velocity_Model_2026_CX2.md` — load current values
2. Read current date. Calculate days remaining to each active KR deadline.
3. Recalculate for each active KR:
   - **Trajectory Score:** (actual weekly rate ÷ required weekly rate) × 100, capped at 100. If actual = 0: score = 0.
   - **Buffer Score:** If on pace with >20% time remaining: 100. If on pace with 0% remaining: 50. If behind pace: (actual/required) × 50.
   - **External Conditions Score:** Follow this priority chain:
     1. If `6_External_Intelligence/1_Market_Intelligence/Market_Signals_Register.md` has new entries since last calculation → re-evaluate from those signals
     2. If no new Market Intelligence signals → carry forward current score unchanged
     3. **If score has never been set (first calculation or blank):** Read `6_External_Intelligence/7_AI_Training_Intelligence/Benchmark_Library.md` and derive an initial score from AI training-data estimates for 3C solo practitioners at this stage. Label the entry: `[Source: ATI training-data estimate — replace when real signals are available]`. Neutral market conditions = 50; early-stage 3C with strong differentiation potential = 55–60.
   - **Resource Score:** Estimate available AI-work hours this week vs. required hours to execute Priority Stack. 100 = full capacity; 0 = none available. Use SuperContext capacity data.
   - **Achievability %:** Apply formula: (Trajectory × 0.50) + (Buffer × 0.20) + (External × 0.20) + (Resource × 0.10)
4. Update all table values in `OKR_Velocity_Model_2026_CX2.md` — update Last Updated field and Updated By field.
5. Update the Composite Dashboard section at the end of the Velocity Model.
6. **Flag any threshold crossing:** If any KR crossed a threshold since yesterday (e.g., dropped from ATTENTION to ALERT, or improved from ALERT to COURSE CORRECTION), note it explicitly in the debrief output with a one-line action recommendation.
7. Confirm with one line: "Velocity Model updated — [date]. [Any threshold crossing note, or 'No threshold changes.']"

**Do not skip either part.** The Progress Log documents what happened. The Velocity Model documents what it means for the trajectory. Both are required for tomorrow's daily brief to be accurate.

## Step 7: Step Function Standing Scan

**Purpose:** Ensure game-changing opportunities don't stay invisible between sessions. This scan takes 30 seconds and runs at every debrief — including "infrastructure" sessions with no KR movement.

**Process:**

1. Review today's completed work (from Step 2) through the Step Function lens. Ask:
   - Did any work today reveal a constraint removal opportunity — something that would change the trajectory of the business rather than just advance the current plan?
   - Did any conversation, insight, or decision surface a non-linear return opportunity?
   - Did any EIS entry (if populated) or external interaction suggest a new market segment or timing window?

2. Apply the recognition signals from `4_Context_Files/Level_0_Map_&_Preferences/Priority_Intelligence_Engine_CX0_v1.md` — Step Function Standing Scan section:
   - "If we did this, we wouldn't need X, Y, and Z"
   - Timeline compression: changes the deadline, not just the pace
   - Non-linear return profile (5× not 1.5×)
   - Structural unlock that governs multiple KRs
   - Time-bounded advantage: easier or more valuable now than in 6 months
   - Market whitespace: uncontested segment or positioning

3. **If a candidate is identified:**
   - State it clearly: name the opportunity and the step-function mechanism in 2-3 sentences
   - Create a new entry in `4_Context_Files/Level_2_Strategy/Step_Function_Register_CX2.md` before session closes
   - Confirm: "Step Function candidate registered: [SF-00X] [Name]"

4. **If no candidate identified:**
   - Confirm with one line: "Step Function scan — no new candidates from today's session."

**Do not skip this step.** The scan is the mechanism that ensures the Priority Intelligence Engine stays calibrated to the highest-leverage available actions, not just the next item in the Priority Stack.

---

# OUTPUT STRUCTURE

Generate the Daily Work Summary using this exact structure:

```markdown
## Daily Work Summary — [YYYY-MM-DD HH:MM]

**SuperContext Version:** vXX
**Threads Active Today:** [N]

---

## [Task Thread Name 1]

1. ✅ **[Deliverable / Completion Title]**
   - [Key outcome detail — only if it adds clarity]

2. ✅ **[Next Completion]**

---

## [Task Thread Name 2]

1. ✅ **[Deliverable]**

---

## Learnings Captured Today

- **Learning [N]:** [One-line summary]
- **Learning [N+1]:** [One-line summary]

*(Now in Current_Intelligence_SW_v1.md)*

---

## System Wisdom Gained Today

### New Patterns
- **Pattern [N] — [Name]:** [One-line description of what was observed/named]

### Milestones
- **Milestone [N] — [Name]:** [One-line significance statement]

### New Principles / Anti-Patterns
- **[Principle/Anti-Pattern Name]:** [One-line summary]

### Behavioral Snapshots
- [N] snapshot(s) captured: [taxonomy name(s)] — or "None captured today"

*(Full entries in 5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md)*

---

## OKR Progress

[If KR movement occurred today — include the table from the progress log entry]
[If no movement — "No KR movement today. Log updated."]

## Velocity Model Update

[One line per active KR: "KR[X]: [X]% achievability ([threshold status]). [Threshold crossing note if applicable, or 'No change.']"]
[Final line: "Velocity Model updated — [date]."]

## Program Log Routing

[If program-tagged work found: one line per program updated — "PGM-00X [Name] Log updated — [date]. [One-line summary of what was appended.]"]
[If no program-tagged work: "Program Log routing: no program-tagged work today."]

## Step Function Scan

[If candidate identified: "SF-00X [Name] registered — [one-line mechanism description]. Entry created in Step_Function_Register_CX2.md."]
[If no candidate: "No new candidates from today's session."]

### Token Use
- Model: [model-name] | [X,XXX,XXX] token budget
- ~[X,XXX] ([X]% of budget)
- Used: [XX,XXX]
- Remaining: ~[XXX,XXX]
- Status: [Safe | Warning — 70% | Caution — 80% | Critical — 90%]

---

*Generated from SuperContext [vXX] checkpoint data*
```

# OUTPUT GUIDELINES

**Factual, not evaluative:** This is a work log, not a coaching session. Report what was accomplished and what intelligence was captured — no behavioral commentary beyond naming what was gained.

**Preserve thread organization:** Each "Completed This Session" block = one task thread section.

**Compress intelligently:** Sub-bullets only when they clarify *what* was delivered. Drop implementation details that don't read as outcomes.

**System Wisdom section is concise:** One line per item. The full write-ups are in `Current_Intelligence_SW_v1.md`. The goal is a daily record of what intelligence the system gained, not a transcript.

**If a section has nothing today:** Omit it cleanly (e.g., if no snapshots were taken, replace the Snapshots line with "None captured today").

**If no checkpoint data exists for today:** Output the following and stop:

> No checkpoint updates found for today ([YYYY-MM-DD]). If work was completed, run `checkpoint-update` first to capture it, then re-invoke `daily-debriefing`.

# FILE OPERATIONS

1. **Determine filename:**
   - Format: `YYYY-MM-DD_Daily_Work_Summary.md`
   - If a summary already exists for today: `YYYY-MM-DD-2_Daily_Work_Summary.md`

2. **Save location:**
   - `5_System_Wisdom/9_Daily_Debriefs/`

3. **After creating file:**
   - Provide link: `[View your Daily Work Summary](computer://full-path)`
   - One sentence: state how many threads, completions, learnings, and System Wisdom items were captured

# USER INPUT

User invokes this prompt at end of day. No additional input required — all data comes from SuperContext SC_Layer 3 and `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md`.

# VERSION HISTORY

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-02-13 | Initial: End-of-session behavioral coaching debrief — observations, patterns, strengths, improvements |
| 2.0 | 2026-02-22 | Rebuilt: Daily work summary from SuperContext checkpoint data + System Wisdom tracking; save location → `5_System_Wisdom/9_Daily_Debriefs/`; coaching debrief function removed |
| 2.1 | 2026-02-27 | Step 6 added: OKR Movement Capture — appends dated entry to `OKR_Progress_Log_2026_CX2.md`; OKR Progress section added to output template; completion note updated to reference 6 steps |
| 3.0 | 2026-03-06 | Step 6 extended: Part B adds daily Velocity Model recalculation — AI recalculates achievability % for all active KRs from four-factor formula; updates OKR_Velocity_Model_2026_CX2.md; flags threshold crossings. Step 7 added: Step Function Standing Scan — reviews session work for step-function candidates; registers in Step_Function_Register_CX2.md if found. Output template updated with Velocity Model Update and Step Function Scan sections. Completion note updated to 7 steps. |
| 3.1 | 2026-03-06 | Step 6 Part B External Conditions Score: added ATI Benchmark_Library.md as calibration source of last resort. Priority chain: (1) re-evaluate from new Market Intelligence signals; (2) carry forward if no new signals; (3) if never set, derive initial score from ATI training-data estimates with explicit ATI label. Closes the cold-start gap — first debrief now always produces a calibrated External Conditions value. |
| 3.4 | 2026-03-08 | Step 5.5 added: Program Log Routing — scans today's PGM-tagged checkpoint completions and appends dated entry to the relevant Program Log file in `4_Context_Files/Level_2_Strategy/3_Programs/`. Program Log Routing section added to output template. Completion note updated to 8 steps. |
| 3.5 | 2026-03-12 | Model + context window detection added: model read from env block; budget derived dynamically; Model line added to Token Use output block. |
| 3.6 | 2026-03-14 | SC_Layer renumbering aligned with Minimal Primer Model SC v64: SC_Layer 5D → SC_Layer 3 (Steps 2, 5.5 × 2); SC_Layer 4 Learnings step rerouted to Current_Intelligence_SW_v1.md; output template label updated; User Input section updated; Programs path 3_Programs → G5_Active_Programs. |
| 3.7 | 2026-03-14 | Step 6 Part A KR question removed — prompt now runs to full completion without user input. Always appends "No KR Movement" entry automatically. KR updates moved to daily-briefing (start of day) per [User]'s direction. |
