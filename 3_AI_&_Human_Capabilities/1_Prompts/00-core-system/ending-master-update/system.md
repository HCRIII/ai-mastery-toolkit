# End of session. Update all tracking systems:

**Created:** 2026-02-13
**Last Updated:** 2026-03-14
**Purpose:** End-of-session tracking updates — v4 System Wisdom methodology
**Status:** Final
**Version:** 3.5 (SC_Layer renumbering: Layer 4 eliminated; SC_Layer 5D → SC_Layer 3; SC_Layer 6 → SC_Layer 5; aligned with Minimal Primer Model SC v64.)

---

## ⚠️ COMPLETION ENFORCEMENT — READ THIS FIRST

**This prompt has 7 steps. All 7 must be completed before the session is considered closed.**

**Critical rules:**
- Do NOT skip Steps 1-4 — all three Preferences files AND SuperContext must be assessed even if no changes are needed (state "No changes" explicitly)
- Step 5 (System Wisdom Harvest) runs AFTER Steps 1-4 — do not start it in parallel with them
- Step 6 is conditional — skip ONLY if no reusable patterns emerged; state "No reusable patterns this session" explicitly if skipping
- Step 7 (Daily Debriefing) is mandatory — always run; no offer, no y/n
- Archive the previous version of any Preferences file before writing the new version
- Do NOT execute from memory — read actual files via agents

**Checklist (track internally as you execute):**
- [ ] Step 1: Human Preferences assessed — updated (version incremented + archived) OR confirmed no changes
- [ ] Step 2: AI Preferences assessed — updated (version incremented + archived) OR confirmed no changes
- [ ] Step 3: Dyadic Preferences assessed — updated (version incremented + archived) OR confirmed no changes
- [ ] Step 4: SuperContext updated — version incremented in filename and content
- [ ] Step 5: System Wisdom Harvest complete — all 3 taxonomy agents run; cross-taxonomy synthesis done; harvest results echoed to user
- [ ] Step 6: Session Prompts — created if warranted; "No reusable patterns this session" stated if not
- [ ] Step 7: Daily Debriefing run

**The session is not closed until all 7 boxes are checked.**

---

## EXECUTION STRATEGY: Use Parallel Sub-Agents

**Steps 1-4 are INDEPENDENT:** Launch 4 parallel Task agents simultaneously
**Step 5 (System Wisdom Harvest):** Run after Steps 1-4 complete — launches 3 parallel taxonomy agents (Human, AI, Dyadic), each reading the session transcript through its own measurement filters, followed by a sequential cross-taxonomy synthesis
**Step 6 (Session Prompts):** CONDITIONAL — only if a repeatable workflow or reusable pattern emerged from the harvest or session work

**Archive protocol:** When incrementing a preferences file version, save the previous version to the appropriate `*_Archive/` subfolder before writing the new version.

---

## STEP 1: Human Preferences (PARALLEL AGENT 1)

**Location:** `4_Context_Files/Level_0_Map_&_Preferences/Human_Preferences_CX_vX.md`
**Action:** Update in place if new human-side preferences discovered. Increment version number in filename and content. Archive previous version to `Human_Preferences_Archive/`.

**What to update:**
- New communication or working style conventions
- Compression signals that have reached Stage 3 maturity
- Tool or system preference changes
- New standard practices established for the human
- Increment version number; update "Last Updated" date

---

## STEP 2: AI Preferences (PARALLEL AGENT 2)

**Location:** `4_Context_Files/Level_0_Map_&_Preferences/AI_Preferences_CX_vX.md`
**Action:** Update in place if new AI-side operational conventions discovered or failure mode mitigations validated. Increment version number. Archive previous version to `AI_Preferences_Archive/`.

**What to update:**
- New output format or communication conventions
- Operational defaults that have been established or revised
- Failure mode mitigations that have been validated in practice
- Standing behavioral instructions that have matured to Stage 3
- Increment version number; update "Last Updated" date

---

## STEP 3: Dyadic Preferences (PARALLEL AGENT 3)

**Location:** `4_Context_Files/Level_0_Map_&_Preferences/Dyadic_Preferences_CX_vX.md`
**Action:** Update in place if new dyadic conventions or communication protocols have been established or refined. Increment version number. Archive previous version to `Dyadic_Preferences_Archive/`.

**What to update:**
- New communication signals that have reached Stage 3 maturity
- Changes to division of labor or equilibration conventions
- Quality gate standards that have been refined
- Collaborative patterns confirmed through multiple sessions
- Increment version number; update "Last Updated" date

---

## STEP 4: SuperContext (PARALLEL AGENT 4)

**Location:** `4_Context_Files/Level_0_Map_&_Preferences/SuperContext_vX.md`
**Action:** Update in place. Increment version number in filename and content — **ONCE PER CALENDAR DAY ONLY.**

**Single-daily-increment rule:**
Before incrementing, check the `Last Updated` date in the current SuperContext file header.
- If `Last Updated` is **already today's date** → update content in place only. Do NOT rename the file. Do NOT increment the version number. Add a checkpoint note in the header parenthetical (e.g., `2026-02-27 (checkpoint 2 — X completed)`).
- If `Last Updated` is **a prior date** → this is the first update today. Increment version number, rename file, archive previous version. This is the only legitimate version increment of the day.

**What to update:**

- SC_Layer 3: Last 3 Sessions bullets (newest at top; remove oldest session bullets if count exceeds 3)
- SC_Layer 5: Active blockers (remove resolved; add new)
- Session accomplishments: key decisions made, documents created/modified with locations, open questions
- Next session: outstanding items, recommended starting point, context to carry forward
- Update timestamp and header note
- Increment version number only if this is the first ending-master-update of the calendar day (see rule above)

---

## STEP 5: System Wisdom Harvest (After Steps 1-4)

**Purpose:** Scrape all developmental learning from the session transcript. This is the comprehensive capture mechanism — mid-session flags were lightweight echoes only; this step does the real work.

**Source:** Read the JSONL session transcript. Locate it via:

```bash
ls /sessions/*/mnt/.claude/projects/*//*.jsonl 2>/dev/null
```

### EXECUTION: Launch 3 Parallel Taxonomy Agents

Each agent reads the same transcript but filters through its taxonomy's measurement criteria. This produces cleaner extraction than a single agent trying to assess all three simultaneously.

**Before launching agents:** Read the transcript once and pass relevant content to each agent. Each agent also needs:

- Its taxonomy's Current State file from `5_System_Wisdom/4_System_Intelligence/` for baseline comparison
- Its taxonomy's Active Tracking List section from `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md` as the explicit filter criteria
- The relevant Snapshot Template from the taxonomy folder for output formatting

**Critical:** Agents filter ONLY for behaviors on their Active Tracking List in Current_Intelligence. This keeps the extraction focused on what's actively evolving. Behaviors that have graduated to the Mastery Record are not actively scanned — unless regression is observed.

---

### Agent 1: Human Behavioral Taxonomy Harvest

**Reads:** Session transcript + `5_System_Wisdom/4_System_Intelligence/Human_Current_State_SW_v7.md`
**Filter source:** "Human Taxonomy — Active Tracking" section of Current_Intelligence_SW_v1.md
**Also checks:** `5_System_Wisdom/4_System_Intelligence/Human_Mastery_Record_SW_v1.md` for regression in graduated behaviors

**Outputs (if warranted):**

- Snapshot: `5_System_Wisdom/1_Human_Behavioral_Taxonomy/YYYY-MM-DD-human-snapshot-NN.md`
- Current State update: `5_System_Wisdom/4_System_Intelligence/Human_Current_State_SW_v7.md` — adjust dimension levels, add behavioral patterns
- Mastery Record update: if a tracked behavior now meets graduation criteria (Level 4+ across 3+ consecutive snapshots)
- Report: brief summary of what shifted and evidence

---

### Agent 2: AI Behavioral Taxonomy Harvest

**Reads:** Session transcript + `5_System_Wisdom/4_System_Intelligence/AI_Current_State_SW_v13.md`
**Filter source:** "AI Taxonomy — Active Tracking" section of Current_Intelligence_SW_v1.md
**Also checks:** `5_System_Wisdom/4_System_Intelligence/AI_Mastery_Record_SW_v1.md` for regression in graduated behaviors

**Outputs (if warranted):**

- Snapshot: `5_System_Wisdom/2_AI_Behavioral_Taxonomy/YYYY-MM-DD-ai-snapshot-NN.md`
- Current State update: `5_System_Wisdom/4_System_Intelligence/AI_Current_State_SW_v13.md` — adjust tier levels, update failure mode conditions, add behavioral patterns
- Mastery Record update: if a tracked behavior now meets graduation criteria
- Report: brief summary of what shifted and evidence

---

### Agent 3: Dyadic Dynamic Taxonomy Harvest

**Reads:** Session transcript + `5_System_Wisdom/4_System_Intelligence/Dyadic_Current_State_SW_v10.md`
**Filter source:** "Dyadic Taxonomy — Active Tracking" section of Current_Intelligence_SW_v1.md
**Also checks:** `5_System_Wisdom/4_System_Intelligence/Dyadic_Mastery_Record_SW_v1.md` for regression in graduated behaviors

**Outputs (if warranted):**

- Snapshot: `5_System_Wisdom/3_Dyadic_Dynamic_Taxonomy/YYYY-MM-DD-dyadic-snapshot-NN.md`
- Current State update: `5_System_Wisdom/4_System_Intelligence/Dyadic_Current_State_SW_v10.md` — adjust dimension levels, add dynamic patterns
- Mastery Record update: if a tracked behavior now meets graduation criteria
- Report: brief summary of what shifted and evidence

---

### After All 3 Agents Complete: Cross-Taxonomy Synthesis

This step runs sequentially after the three taxonomy agents return:

1. **Case Evidence** — Review the three agent reports for significant episodes that cross taxonomy boundaries. Write individual case files for episodes worth documenting:
   
   - `5_System_Wisdom/5_Case_Evidence/YYYY-MM-DD-case-NN-brief-slug.md`
   - Use CASE_TEMPLATE.md
   - Update Case Index with new entries and refresh Principle Frequency table

2. **System Intelligence** — Check for validated patterns, new hypotheses, or milestones that emerged from the combined taxonomy reports:
   
   - Update `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md`

3. **Echo Harvest Results** — Output the harvest block below to the user. Render as markdown — no code block wrapping, no emoji.

---

**Output to user after all 3 taxonomy agents complete:**

## System Wisdom Harvest — [YYYY-MM-DD HH:MM]

**Human Taxonomy:**
- Snapshot: [filename written, e.g. 2026-03-07-human-snapshot-10.md | No snapshot warranted]
- Current State: [dimension updated — e.g. "Strategic Clarity: 3→4" | No changes]
- Mastery Record: [graduated: [behavior name] | None]

**AI Taxonomy:**
- Snapshot: [filename written | No snapshot warranted]
- Current State: [updated — e.g. "Meta-Cognitive Awareness: pattern added" | No changes]
- Failure Modes: [new entry: [name] | existing entry updated: [name] | None]
- Mastery Record: [graduated: [behavior name] | None]

**Dyadic Taxonomy:**
- Snapshot: [filename written | No snapshot warranted]
- Current State: [updated — e.g. "equilibration convention added" | No changes]
- Mastery Record: [graduated: [behavior name] | None]

**Cross-Taxonomy:**
- Case Evidence: [[N] case(s) written: [brief slug(s)] | None]
- Current Intelligence: [updated — [what] | No changes]

---

**If no trigger events found across any taxonomy:** Output "System Wisdom Harvest — [date]: No developmental events identified this session." and proceed to Step 6. This is a valid outcome.

**Note on measurement filters:** The specific filters for each taxonomy are evolving. As new dimensions are added or measurement criteria are refined, update the agent instructions above to match. The Current State files are the authoritative baseline — agents should always compare against what's in those files, not against a static list.

---

## STEP 6: Session Prompts (CONDITIONAL)

**Location:** 3_AI_&_Human_Capabilities/1_Prompts/
**Condition:** ONLY IF a repeatable workflow, reusable prompt pattern, or systematizable approach emerged from this session

**If nothing emerged:** Skip this step entirely

**If a reusable pattern exists:**

- Create in main Prompt Library under appropriate category
- Follow prompt structure: folder with README.md + system.md
- Use kebab-case naming
- Echo to user: what was created, where, and when to use it
- Update category _README.md with new prompt

---

## MODEL & CONTEXT WINDOW DETECTION

Read the active model from the session environment (labeled "Model:" in the env block of the system prompt). Derive the token budget:
- claude-opus-4-6 → 1,000,000 tokens
- claude-sonnet-4-6 → 1,000,000 tokens
- claude-haiku-4-5 → 200,000 tokens
- If undetectable → default to 1,000,000 tokens

Use this budget when computing Token Use percentages in the Session Closed output block.

---

## TIMING: Get Current Timestamp

Before starting, retrieve the local timestamp using:

```bash
TZ=America/Denver date "+%Y-%m-%d %H:%M %Z"
```

Use this timestamp consistently across all files created or updated during this prompt execution. Do NOT use the raw `date` command — it returns UTC, which will be the wrong calendar date in evening hours MST.

---

## Session Close Summary

Before running the daily debrief, output the session close summary below to the user. Render as markdown — no code block wrapping, no emoji.

---

**Output to user:**

## Session Closed — [YYYY-MM-DD HH:MM]

**Preferences Updated:**
- Human Preferences: [v[X] — [one-line summary of what changed] | No changes]
- AI Preferences: [v[X] — [one-line summary of what changed] | No changes]
- Dyadic Preferences: [v[X] — [one-line summary of what changed] | No changes]

**SuperContext:** [v[X] → v[X+1] (first update today) | v[X] updated in place (subsequent update)] — [one sentence on what this session contributed]

**System Wisdom Harvest:** [summary from Step 5 — e.g. "AI snapshot written; 1 failure mode added; no graduations" | No developmental events this session]

**Session Prompts:** [Created: [prompt-name] at [path] | No reusable patterns this session]

**Token Use:**
- Model: [model-name] | [X,XXX,XXX] token budget
- ~[X,XXX] ([X]% of budget)
- Used: [XX,XXX]
- Remaining: ~[XXX,XXX]
- Status: [Safe | Warning — 70% | Caution — 80% | Critical — 90%]

Running daily debrief now.

---

## Step 7: Run Daily Debriefing

Run the `/daily-debriefing` prompt automatically. The daily debrief is a required output of every session — it is part of the tracking system and always generated.

---

## IMPORTANT NOTES

- **Always complete ALL steps** (skip only Step 6 if no reusable patterns emerged)
- **Use parallel execution** for Steps 1-4 (independent work)
- **Step 5 (System Wisdom Harvest)** runs after Steps 1-4 — reads the session transcript with 3 parallel taxonomy agents
- **Step 6 (Session Prompts)** is conditional — only if a reusable pattern emerged
- **Step 7 (Daily Debriefing)** is mandatory — always run; no offer, no y/n
- **Glass Box principle:** Harvest results are echoed directly to the user — no separate close-out file
- **Single source of truth:** SuperContext carries session accomplishments and next-session context. No separate session summary or close-out files.
