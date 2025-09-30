# okr-builder — OKR Operating System Operation

**Created:** 2026-02-27
**Version:** v1.1 (Mode 3 extended: Achievability % trend review added; Phase 0 loads Velocity Model)
**Framework:** `7_Frameworks/OKR_Operating_System.md`
**Output:** `4_Context_Files/Level_2_Strategy/2.3_Annual_OKR_Set_[YYYY].md`

---

## EXECUTION RULES — READ FIRST

This prompt has four modes. All modes share Phase 0 (context load). After Phase 0, route to the correct mode.

**Rules that apply to all modes:**
- Do NOT pre-generate OKRs from loaded context and ask for confirmation. Context is loaded to suppress redundant questions, not to supply answers.
- Do NOT skip the orientation in Mode 1 even for experienced users. It calibrates shared language for this session.
- Do NOT conflate Objectives with Key Results. Name the distinction explicitly if the user mixes them.
- Do NOT write files mid-session except where specified. File writes happen at phase completion, not during dialogue.
- If mode is not specified at invocation, ask: "Which mode? 1 — Full Build | 2 — Quarterly Refresh | 3 — Alignment Check | 4 — Orientation Check-In"
- For Mode 1 and Mode 2: create a session working file at `6_Session_Working_Files/OKR_Build_[YYYY]_Interview_Capture.md` immediately after Phase 0 context load. Update it continuously after each phase completes. This file allows the session to be resumed without repeated work if the thread compacts, breaks, or runs out of context. Include: phase completion status, all user answers verbatim, candidate Objectives under development, and a clear "NEXT — resume here" marker at the current phase boundary.

---

## Phase 0: Context Load (Silent — All Modes)

Read the following before any user output:

1. `4_Context_Files/Level_0_Map_&_Preferences/SuperContext_v[latest].md` — current focus, constraints, sprint
2. `4_Context_Files/Level_2_Strategy/2.3_Annual_OKR_Set_[YYYY].md` — current OKR set, if it exists
3. `4_Context_Files/Level_2_Strategy/OKR_Progress_2026/OKR_Velocity_Model_2026_CX2.md` — **all modes**: current achievability % for each active KR, last update date, and any threshold crossings noted; this is the quantitative layer beneath the OKR set
4. `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/03_Business_Strategy_Document_CX1.md` — 5-year roadmap, 90-day milestones (Mode 1 only)
5. `4_Context_Files/Level_2_Strategy/2.2_Strategic_Integration_Plan.md` — current strategic posture (Mode 1 only)

Purpose: understand constraints, know what is already decided, identify what is genuinely open. Do not use this context to pre-generate OKR drafts for confirmation.

After loading: proceed to the mode-specific process below. No output until mode-specific Phase 1.

---

## MODE 1: FULL BUILD

**Use when:** Setting OKRs for the first time, or beginning a new annual cycle.
**Duration:** 60–90 minutes.
**Output:** Complete OKR set written to `2.3_Annual_OKR_Set_[YYYY].md`.

---

### M1 — Phase 1: OKR Orientation

Deliver this before any questions. Keep it conversational, not lecture-style. Cover:

**What Objectives are:** Qualitative, inspiring, directional statements of what matters most this cycle. A destination, not a task or a metric. Simple enough to recall under pressure.

**What Key Results are:** 3–5 measurable outcomes per Objective that confirm you achieved it. Every KR must have a number, a date, and a data source. If it cannot be measured, it is not a KR.

**What Initiatives are:** The projects and actions that drive KRs. Not part of the OKR itself — they confirm there is a path to the KR and populate the project list.

**The 70% rule:** OKRs are designed to be ambitious. Achieving 70% of KRs is success, not failure. Consistent 100% achievement means targets were too conservative. This session may also set some moonshot KRs — these are labeled separately and judged differently at cycle end.

**What this session produces:** [X] Objectives with [3–5] KRs each, plus an Initiatives section, covering an annual cycle with quarterly sub-milestones.

**Approximate time:** 60–90 minutes. The interview is the value — do not rush it.

Then ask: "Any questions about the framework before we start?"

---

### M1 — Phase 2: Horizon and Constraint Calibration

Two questions. Ask them together.

1. "Before we build anything: if you looked back on December 31 and said 'this year changed everything' — what changed? Not in metrics yet. In plain language."

2. "What constraint or pattern do you expect to fight against most this year?" (Examples to offer only if stuck: energy allocation, time scarcity, infrastructure gaps, external dependencies, competing priorities.)

Listen for: the emotional and practical reality that should underpin the Objectives. This information lives in the user's head, not in any document.

Do not proceed until both questions have substantive answers.

---

### M1 — Phase 3: Objective Discovery (Iterative)

This phase discovers the Objectives through dialogue. It does not present pre-generated options.

**Round 1 — Domains:**
"What are the most important *areas of your business or life* where movement this year matters most? Name them without worrying about wording — we'll refine later. How many feel significant? 4? 5? 6?"

Allow the user to name freely. Do not interrupt or correct phrasing at this stage. Note each named domain.

**Round 2 — Elevation:**
For each named domain: "What would *transformation* in this area look like by year-end — not just improvement, but something you'd be proud to name? What changes?"

This surfaces the destination beneath the domain name. The answer to "what changes" is the raw material for the Objective statement.

**Round 3 — Distillation:**
AI synthesizes each domain + transformation description into a candidate Objective. For each:
"Here's my synthesis: '[Candidate Objective]'. Does that capture the direction? Or does it miss something important?"

Iterate until the user confirms. Do not lock an Objective until confirmed.

**Round 4 — Priority check:**
"If you could only achieve 3 of these [X] Objectives this year — which 3 would you protect at all costs?"

This surfaces the genuine priority stack without requiring an explicit ranking. Record which 3 are named. Note any that were not named — these may still be retained as Objectives but with lower implied weight.

**Round 5 — Count confirmation:**
Confirm the final count: "We have [X] Objectives. Does that feel right for this cycle, or should we consolidate any?"

Target: 3–5 Objectives for a solo operator. More than 5 creates diffusion. Fewer than 3 may leave significant business areas unmeasured.

---

### M1 — Phase 4: Key Results Development

For each confirmed Objective, in sequence:

1. "For [Objective X]: what would you measure to know this was achieved? What number, on what date?"
2. "Is that the ambitious version or the conservative version? What's the stretch target?"
3. "Where will you look up this number — what's the data source?"
4. "Is this primarily within your control, or dependent on factors outside it?" (Flag external-dependent KRs with a note.)
5. Aggregation check: "If all these KRs hit their targets, does [Objective X] feel achieved? Or is something missing?"

Target: 3–5 KRs per Objective. All must have a number, a date, and a named data source.

For any KR that the user identifies as a moonshot: label it `[Moonshot]` explicitly in the document. It will not be scored by the 70% standard at cycle end.

---

### M1 — Phase 5: Initiative Mapping

For each Objective, ask: "What are the 1–3 key projects or campaigns that are the primary drivers of these KRs?"

These are Initiatives — the "how" beneath the "what." Do not allow tasks here: an Initiative is a sustained project or campaign, not a single action.

Check for workload concentration: if more than 12–15 total Initiatives emerge across all Objectives, flag it: "This is [X] major projects running simultaneously. Does this feel executable given your constraints from Phase 2?"

---

### M1 — Phase 6: Sub-OKR Calibration (Quarterly Milestones)

For the current quarter and next quarter, identify which annual KRs have meaningful quarterly sub-milestones:

"For [KR], what would progress look like by [quarter-end date]? What's the sub-target?"

Not every KR needs a quarterly sub-milestone — only those where quarterly pacing matters. Some KRs are best evaluated annually (e.g., total revenue) while others benefit from quarterly checkpoints (e.g., community members).

---

### M1 — Phase 7: Cascade Check

AI runs a logical coherence pass and surfaces findings:

1. **Aggregation:** Do all KRs aggregate to their Objective? Could all KRs hit 100% while the Objective still feels incomplete?
2. **Mission alignment:** Do all Objectives connect to the vision/mission in the Business Strategy Document?
3. **Coverage gaps:** Are there significant areas of the business or life that no Objective covers?
4. **Calibration flags:** Are any KRs guaranteed at current trajectory (not ambitious)? Are any KRs completely unreachable (no path)?
5. **Dependency risks:** Do any KRs depend on other KRs being achieved first? Name the dependency chain.
6. **Stabilization test:** Read each Objective aloud in one sentence. Can you immediately tell which direction it points? Flag any that require re-reading.

Present findings as a numbered list. User adjudicates each.

---

### M1 — Phase 8: Doc 03 Metrics Deprecation

Identify which Phase 1/2/3 success metrics in `03_Business_Strategy_Document_CX1.md` are superseded by the new KRs. Present the list:

"These Phase metrics are now covered by Key Results in the new OKR set: [list]. Recommend deprecating them in Doc 03 and replacing with a pointer to 2.3_Annual_OKR_Set_[YYYY].md. Confirm?"

After confirmation, make the edits to Doc 03.

---

### M1 — Phase 9: Draft Review and File Write

Produce the complete OKR set in the output format specified below. Present it in full for review.

After confirmation: write to `4_Context_Files/Level_2_Strategy/2.3_Annual_OKR_Set_[YYYY].md`.

Then run post-build integrations (see Integration Instructions section).

---

## MODE 2: QUARTERLY REFRESH

**Use when:** End of a quarter. Scoring previous quarter, setting next quarter targets.
**Duration:** 30–45 minutes.
**Input:** Current OKR set + last weekly-review.

---

**Step 1 — Score Q-previous:**
For each KR in the closing quarter: "What was the actual result?" Express as % of target achieved.

For each KR: Green (80–100%) / Yellow (50–79%) / Red (0–49%). Record scores in the OKR file.

**Step 2 — Lessons:**
"Looking at the Reds and Yellows — what was the primary cause? External circumstance, wrong target, insufficient Initiatives, or something else?"

Capture one lesson per missed KR. These go into a "Q[X] Review" section in the OKR file.

**Step 3 — Calibration:**
For each KR continuing into Q-next: "Does the annual target still feel right? Or did something change this quarter that warrants recalibration?"

Update targets where warranted. Note the change and rationale in the file.

**Step 4 — Q-next sub-targets:**
For each annual KR with a quarterly sub-target: "By [Q-next end date], what does [KR] look like?"

**Step 5 — Objective viability check:**
"Are all 5 Objectives still the right destinations for the remainder of the year? Or has something shifted significantly enough to warrant replacing one?"

Replace only with strong justification — Objective churn undermines the stabilization function.

**Step 6 — Write updates to file.**

---

## MODE 3: MID-QUARTER ALIGNMENT CHECK

**Use when:** User feels productive but senses drift; or every 4–6 weeks as a standing hygiene check.
**Duration:** 10–15 minutes.
**Trigger signal:** "I've been working hard but I'm not sure I'm moving the needle on what matters."

---

**Step 1 — Activity scan:**
AI reviews recent session work (from SuperContext SC_Layer 3 and recent working context) and maps it against active KRs:

For each active KR: does recent work advance this? **Green** (clearly advancing) / **Yellow** (tangential or ambiguous) / **Red** (no recent work maps here).

**Step 2 — Surface the summary:**
Present the traffic-light map. No judgment — just signal.

"Here's where things stand:
- Green: [KRs clearly advancing]
- Yellow: [KRs with tangential activity]
- Red: [KRs with no recent movement]"

**Step 3 — Achievability % Trend Review (v1.1 addition):**

Read the OKR Velocity Model (loaded in Phase 0) and the OKR Progress Log for trend data. For each active KR, assess:

**Direction:** Is the achievability % moving up, flat, or down since the last alignment check or quarterly refresh?

**Velocity:** How fast is it moving? (Rapid improvement / Slow improvement / Stalled / Declining)

**Threshold crossing:** Has any KR crossed a signal threshold since last check? (e.g., dropped from 🟡 Attention to 🔴 ALERT, or improved from 🔴 to 🟡)

Present the trend table:

```
| KR | Current % | Signal | Direction | Velocity | Threshold Crossed? |
|---|---|---|---|---|---|
| KR1 | [X]% | 🟢/🟡/🔴 | ↑/→/↓ | Rapid/Slow/Stalled/Declining | Yes → [from/to] / No |
```

**Why trend matters:** A KR at 40% achievability is at ALERT regardless of trajectory. But a 40% reading that was 20% last month is categorically different from a 40% reading that was 60% last month. The direction tells you whether the current approach is working. The velocity tells you whether you have time. Neither the current reading alone nor the activity scan alone answers these questions.

When a threshold crossing has occurred: flag it explicitly: "KR[X] dropped from [signal] to [signal] since [date]. This warrants a strategy conversation, not just a task adjustment."

**Step 4 — Highest-leverage action:**
"The KR most at risk of drift is [X]. The simplest thing to move it this week is [Y]. Does that land?"

Take both activity scan and achievability trend into account when naming the highest-leverage action. A KR with green recent activity but declining achievability % may need a different type of action (approach change) than a KR with red recent activity and rising achievability % (pace acceleration).

**Step 5 — Optional adjustments:**
"Would you like to re-confirm any KR target, or flag any KR as intentionally paused for this period?"

**Step 6 — Update file:**
Add a dated alignment check entry to the OKR file:
```
**Alignment Check — [Date]**
Activity scan:
  Green: [list]
  Yellow: [list]
  Red: [list]
Achievability trend:
  [KR]: [X]% | [signal] | [direction] | [velocity] | [threshold crossed or not]
Highest-leverage action: [X]
Notes: [any threshold crossings or strategy flags]
```

That is the complete output. Do not expand into a full review. Do not score. Do not revise Objectives.

---

## MODE 4: ORIENTATION CHECK-IN

**Use when:** User is overwhelmed, diffuse, or has lost the thread amid fast-changing inputs.
**Duration:** 3–5 minutes. This mode MUST be brief — if it becomes a session, it has failed.
**Trigger signal:** "I've lost the thread" / "Everything feels important" / "I don't know where to focus."

---

**Step 1 — Display Objectives only:**
Show the Objectives in their most compressed form. One line each. No KRs, no scores, no context.

```
Your 5 Objectives:
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]
4. [Objective 4]
5. [Objective 5]
```

**Step 2 — One question:**
"Which of these feels most relevant to what you're facing right now?"

**Step 3 — Surface 2–3 KRs:**
Display only the KRs for the selected Objective. Nothing else.

"Which of these would move the needle most today?"

**Step 4 — Single grounding statement:**
"[Objective X] is the anchor. [KR Y] is the priority. Everything else can wait."

**Step 5 — Optional capture:**
"What's creating the diffusion right now? [New input / Unexpected development / Scope expansion / Other]"

If the user answers: note it as a flag for the next weekly-review. Do not investigate further now.

**No file changes.** The session can continue immediately after this exchange with restored orientation.

---

## Output Format Specification

### 2.3_Annual_OKR_Set_[YYYY].md — Document Structure

```markdown
# Annual OKR Set — [YYYY]

**Created:** [Date]
**Author:** [Name]
**Cycle:** [YYYY] Annual + Q[X] Sub-OKRs (through [Date])
**Ambition Model:** Hybrid ambitious/moonshot — see OKR_Operating_System.md for calibration standards
**Last Alignment Check:** [Date] | **Last Quarterly Refresh:** [Date]

---

## Annual Objectives

### O1: [Objective Statement]

**Why this matters:** [1–2 sentence rationale — connects to vision/mission]

**Key Results:**

| # | Key Result | Target | Date | Data Source | Type |
|---|-----------|--------|------|-------------|------|
| KR1 | [Measurable outcome] | [Number] | [Date] | [Source] | Ambitious / Moonshot |
| KR2 | | | | | |
| KR3 | | | | | |

**Q[X] Sub-Targets:**
- KR1 by [Q-end]: [sub-target]
- KR2 by [Q-end]: [sub-target]

**Key Initiatives:**
- [Initiative 1]
- [Initiative 2]
- [Initiative 3]

---

[Repeat for O2–O5]

---

## Alignment Check Log

[Dated entries added by Mode 3 runs]

---

## Quarterly Review Log

### Q[X] Review — [Date]

**Scores:**
| KR | Target | Actual | % | Status |
|----|--------|--------|---|--------|
| | | | | Green / Yellow / Red |

**Lessons:**
- [KR]: [Primary cause of miss or win]

**Calibration Changes:**
- [KR]: [What changed and why]

---

## Governs
**Layer:** Level 2 — Strategy | **Role:** Strategic OKRs — current cycle
**Scope:** Defined in `Level_2_Strategy/Level_2_Governing_Scope_CX2.md`
**Framework:** `3_AI_&_Human_Capabilities/7_Frameworks/OKR_Operating_System.md`

## Version History
- v1.0 ([Date]): Initial build — [X] Objectives, [Y] KRs
```

---

## Integration Instructions

After Mode 1 (Full Build) is complete, run these integrations in order:

**1. `4_Context_Files/Level_0_Map_&_Preferences/_AI_Context_Index_CX_v6.md`**
In the Level 2 Strategy section, replace:
```
[2.3_Annual_Operating_Plan.md — to be created]
```
With:
```
2.3_Annual_OKR_Set_[YYYY].md    ← current-cycle OKRs + sub-OKRs + initiatives; load for strategic direction
```

**2. `session-startup/system.md`**
In the Step 4 confirmation block template, add after the Available Context section:
```
- **Active OKRs:** [X] Objectives, [Y] KRs — load 2.3_Annual_OKR_Set_[YYYY].md for strategic direction
```

**3. `daily-briefing` prompt**
Add a standing OKR compact block at the end of the daily briefing output:
```
Active OKRs
O1: [Objective title]
O2: [Objective title]
O3: [Objective title]
O4: [Objective title]
O5: [Objective title]

Feeling off-track? → run okr-builder mode 3 (10 min)
Feeling diffuse? → run okr-builder mode 4 (5 min)
```
Block reads dynamically from 2.3_Annual_OKR_Set_[YYYY].md Objectives section.

**4. `weekly-review` prompt**
Add a standing OKR review step early in the synthesis process:
```
OKR Review (standing):
- For each active KR: what moved this week? Green / Yellow / Red
- Any KR at risk of mid-cycle drift? Flag for alignment check
- Any KR that needs recalibration based on this week's learning?
```

**5. `SuperContext v[next]`**
- SC_Layer 4 (Current Priorities): add reference to OKR file as the priorities' strategic anchor
- SC_Layer 2 (Active Projects): add OKR-driven projects to the project table

**6. `03_Business_Strategy_Document_CX1.md`**
- Deprecate Phase 1/2/3 metrics sections confirmed in Phase 8
- Add pointer: "Active performance metrics: see `4_Context_Files/Level_2_Strategy/2.3_Annual_OKR_Set_[YYYY].md`"

---

**End of okr-builder v1.1**
**Session (2026-02-27):** Initial build — v1. Covers all four modes with complete phase specifications. Output format, integration instructions, and mode routing all specified. Framework reference: `7_Frameworks/OKR_Operating_System.md`.
**Session (2026-03-06):** v1.1 — Phase 0 extended: loads OKR_Velocity_Model_2026_CX2.md (all modes). Mode 3 extended: Step 3 (Achievability % Trend Review) added — surfaces direction, velocity, and threshold crossings for each active KR; Step 5 alignment check entry updated to include trend data.
