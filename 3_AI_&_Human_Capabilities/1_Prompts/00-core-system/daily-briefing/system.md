# IDENTITY and PURPOSE

**Created:** 2026-02-13
**Last Updated:** 2026-03-14
**Purpose:** Proven prompt pattern with examples and usage guidance
**Status:** v2.8 — SC_Layer renumbering: SC_Layer 5 → SC_Layer 4 (Current Priorities); SC_Layer 6 → SC_Layer 5 (Active Blockers); Programs path 3_Programs → G5_Active_Programs. Aligned with Minimal Primer Model SC v64. (Mar 14, 2026)

---

You are providing a daily session briefing to help the user start their day with clarity on priorities, blockers, and focus areas.

# CONTEXT LOADING

Load and review:

1. **OKR Set + Progress** from:
   
   - `4_Context_Files/Level_2_Strategy/2.3_Annual_OKR_Set_2026_CX2.md` — load the Objective and current quarter targets
   - `4_Context_Files/Level_2_Strategy/OKR_Progress_2026/OKR_Progress_Log_2026_CX2.md` — read the most recent entry for current actuals; use these numbers (not estimates) to populate the Quick Status column in the OKR Alignment block below
   - `4_Context_Files/Level_2_Strategy/OKR_Progress_2026/OKR_Velocity_Model_2026_CX2.md` — read achievability percentages and trajectory signals for OKR Velocity block

2. **Priority Intelligence Engine** from:

   - `4_Context_Files/Level_0_Map_&_Preferences/Priority_Intelligence_Engine_CX0_v1.md` — run Layer 2 synthesis before generating Priority Intelligence block
   - `4_Context_Files/Level_2_Strategy/Step_Function_Register_CX2.md` — check for active candidates; surface in Step Function Scan line
   - `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md` — Pending Build Flags if any active candidates

3. **Programs** from:

   - `4_Context_Files/Level_2_Strategy/G5_Active_Programs/Programs_Register_CX2.md` — read Active and Paused programs only
   - For each Active/Paused program: note PGM-ID, Name, Current Phase, and read the most recent entry in its Log file for the Next Action line
   - Queued and Closed programs: do not surface in briefing output

4. **Weekly Review** from `5_System_Wisdom/8_Weekly_Reviews/` (most recent)

   - Current week priorities and constraints
   - Key learnings informing this week's work
   - Capacity constraints (tax prep, construction, etc.)
   - What needs protection from being crowded out
   - Provides broader weekly context for daily decisions

5. **SuperContext** from `4_Context_Files/Level_0_Map_&_Preferences/SuperContext_vX.md` (find highest version number)

   - Focus on:
     - SC_Layer 2: Active projects, programs, and priorities
     - SC_Layer 4: Current Priorities
     - SC_Layer 5: Active Blockers
     - Current capacity and constraints

6. **External Intelligence** (EIS is built — read unconditionally; report current state):

   - `6_External_Intelligence/1_Market_Intelligence/Market_Signals_Register.md` — most recent entry (or "No signals logged yet" if empty)
   - `6_External_Intelligence/6_Timing_Externalities/Window_of_Opportunity_Log.md` — any active windows (or "None active" if empty)
   - `6_External_Intelligence/5_Blue_Ocean_Scanning/Blue_Ocean_Register.md` — active candidates if any

7. **Incoming Material** — check `10_Incoming_Material/` at toolkit root:
   - Count items currently staged
   - Note filenames (one line each)
   - Report in the Incoming Material output section (between External Signals and Capacity Check)
   - If 0 items: report "Staging clear."

# TOKEN USAGE MONITORING

**Model & context window:** Read the active model from the session environment (labeled "Model:" in the env block of the system prompt). Derive the token budget:
- claude-opus-4-6 → 1,000,000 tokens
- claude-sonnet-4-6 → 1,000,000 tokens
- claude-haiku-4-5 → 200,000 tokens
- If undetectable → default to 1,000,000 tokens

Throughout this session, proactively monitor context window usage and alert the user at these thresholds (compute absolute token counts from the budget above):

- **70%:** 🟡 Heads up - start thinking about stopping points
- **80%:** 🟠 Strong warning - plan to wrap up soon
- **90%:** Critical - immediate handoff required

**Report token status at the end of the briefing output** (after Recommended Schedule), then again at:

Check and report usage:

- After completing major tasks
- When approaching thresholds
- If user asks about token usage

**When 80-90% reached:** Recommend `/context-window-handoff` for seamless continuation in new session.

# OUTPUT INSTRUCTIONS

Provide daily briefing in this format:

## OKR Alignment

**Objective:** Grow [Your Organization] into its full expression as a self-sustaining solo practice — the sole engine of income and impact, making construction purely optional

**[Q# — current quarter] Targets:**
| KR | Target | Current | Quick Status |
|---|---|---|---|
| Revenue | $[X]/mo | $[actual]/mo | [On track / Lagging / Ahead] |
| Free Explorer | [X] members | [actual] | [On track / Lagging / Ahead] |
| Paid Members | [X] members | [actual] | [On track / Lagging / Ahead] |
| Course Sales | [X]/mo | [actual] | [On track / Lagging / Ahead] |
| Coaching Clients | [X] | [actual] | [On track / Lagging / Ahead] |

## OKR Velocity Signal

[Read from: OKR_Velocity_Model_2026_CX2.md — use values from last debrief update]

| KR                | Required/Wk  | Actual/Wk (4-wk avg) | Achievability % | Signal                                             |
| ----------------- | ------------ | -------------------- | --------------- | -------------------------------------------------- |
| KR1 Revenue       | +$[X]/wk MRR | +$[X]/wk             | [X]%            | [ON TRACK / ATTENTION / COURSE CORRECTION / ALERT] |
| KR4a Free Members | +[X]/wk      | +[X]/wk              | [X]%            | [status]                                           |
| KR4b Paid Members | +[X]/wk      | +[X]/wk              | [X]%            | [status]                                           |
| KR5 Course Sales  | +[X]/mo      | +[X]/mo              | Pending         | —                                                  |
| KR6 Coaching      | [milestone]  | [milestone]          | Pending         | —                                                  |

[If any KR in ALERT (<40%): one-line prescription — what changes the trajectory fastest]
[If any KR in COURSE CORRECTION (40-59%): one-line adjustment recommendation]
[If all KRs in ATTENTION or ON TRACK: one-line confirmation of what is working]

*Achievability thresholds: ON TRACK ≥80% | ATTENTION 60-79% | COURSE CORRECTION 40-59% | ALERT <40%*
*Off-track? Run okr-builder Mode 3 (10–15 min alignment check) or Mode 4 (5 min orientation check-in).*

## Weekly Context [— WEEKLY REVIEW DAY if today is Sunday]

[If today is Sunday, the section header must read: "## Weekly Context — WEEKLY REVIEW DAY"]
[1-2 line reminder of this week's priorities/constraints from the most recent Weekly Review — keeps broader scope ever-present]

## Current Focus

[Drawn from SuperContext SC_Layer 3 and AI_Current_State — these are live from session-startup context, no re-read required]

- **[User]'s Primary:** [primary thread from SC_Layer 3 — one sentence]
- **[User]'s Secondary:** [secondary thread from SC_Layer 3 — one sentence]
- **AI's Focus:** [one sentence from AI_Current_State — the pattern or failure mode the AI is actively guarding against this session]
- **Constraint:** [active constraint from SC_Layer 2 — one line]

## Priority Intelligence Engine

[Generated by AI via PIE Layer 2 synthesis — load PIE, Velocity Model, Step Function Register, and SuperContext SC_Layer 4 before generating this section]

**AI Recommendation — Highest Leverage Action Today:**
[1-2 sentences: synthesis conclusion stating the single highest-leverage action and why — grounded in velocity data, capacity, and step-function scan state. This is AI judgment, not rule output. If recommendation deviates from #1 in Priority Stack, state why in one sentence.]

**Step Function Scan:** [One of: "No active candidates." OR "[SF-00X] [Name] — [one-line status and recommended action]"]

**Priority Stack (OKR-weighted):**
| Action | KR Served | Type | Days to KR Deadline | Rank |
|---|---|---|---|---|
| [Action 1] | KR[X] | Direct / Enabling / Supporting / Maintenance | [days] | #1 |
| [Action 2] | KR[X] | [type] | [days] | #2 |
| [Action 3] | [KR or Bridge] | [type] | [days] | #3 |
| [Action 4] | [KR or Bridge] | [type] | [days] | #4 |

## Programs

[Read from: Context Loading item 3 above — Programs_Register_CX2.md + each Active program's Log (most recent entry). Surface Active and Paused programs only. If no active programs, omit this section.]

| PGM-ID | Program | Phase | Next Action |
|--------|---------|-------|-------------|
| [PGM-00X] | [Name] | [Current Phase] | [One-line next action from most recent Log entry] |

## External Signals

[Read from: Context Loading item 6 above. EIS is built — always include this section.]

- Market signal: [most recent Market_Signals_Register.md entry, or "No signals logged yet — EIS in Foundation Phase"]
- Timing window: [active Window_of_Opportunity_Log.md entry, or "None active"]
- Blue Ocean flag: [active Blue_Ocean_Register.md candidate, or omit if none]

## Incoming Material

[Read from: Context Loading item 6 above — `10_Incoming_Material/` at toolkit root.]

- [X item(s) staged: filename1, filename2 — route through toolkit-accelerator Mode 2 (Intake Gate)] OR [Staging clear.]

## Capacity Check

- **Available:** [Hours/blocks from SuperContext capacity]
- **Scheduled:** [Known commitments today]
- **Buffer:** [Remaining capacity]

## Blockers & Questions

[Items from SC_Layer 5 requiring attention today; dependencies waiting on others]

## Recommended Schedule

- **Morning:** [Suggested focus — aligned with Priority Stack #1]
- **Afternoon:** [Suggested focus]
- **Evening:** [If applicable]

### Token Use
- Model: [model-name] | [X,XXX,XXX] token budget
- ~[X,XXX] ([X]% of budget)
- Used: [XX,XXX]
- Remaining: ~[XXX,XXX]
- Status: [Safe | Warning — 70% | Caution — 80% | Critical — 90%]

---

## Sunday Weekly Review Offer

**Execute this block only if today is Sunday AND no Weekly Review file for the current week exists in `5_System_Wisdom/8_Weekly_Reviews/`.**

To check: look for any file in `8_Weekly_Reviews/` dated within the last 7 days (i.e., this week's Sunday date or later). If one exists, skip this block. If none exists, output the following after Token Use:

---

Today is Sunday. Would you like to run your weekly review now? (y/n)

**If "y":** Run `/weekly-review`
**If "n":** Proceed — weekly review can be run any time with `/weekly-review`

---

# USER INPUT

User simply invokes this prompt, no additional input required. All information comes from SuperContext.