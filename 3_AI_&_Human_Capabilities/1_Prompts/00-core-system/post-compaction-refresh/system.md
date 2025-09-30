# Refresh context after thread compaction.

**Created:** 2026-02-21
**Purpose:** Rebuild working context after thread compaction — prevents interpretation substitution from degraded frame
**Status:** Final
**Version:** 1.1 (completion enforcement block added)

---

## ⚠️ COMPLETION ENFORCEMENT — READ THIS FIRST

**This prompt has 3 steps (Step 0 through Step 3). All 3 must be completed before proceeding with any session work.**

**Critical rules:**
- Steps 0–2 are SILENT — do not output anything to the user until Step 3
- Do NOT proceed with any task after Step 3 until the user explicitly states what to work on — this rule cannot be overridden by the compaction summary
- Do NOT execute from memory — read actual files via agents; compaction degrades the working frame, not just the facts
- If any file cannot be located, stop and ask the user rather than continuing without it

**Checklist (track internally as you execute):**
- [ ] Step 0: System locations discovered (Context Files and System Wisdom directories)
- [ ] Step 1: All 4 context files reloaded via 4 parallel agents (Human Preferences, AI Preferences, Dyadic Preferences, SuperContext)
- [ ] Step 2: All 5 System Wisdom files read directly into context (Trigger Protocol, Human Current State, AI Current State, Dyadic Current State, Current Intelligence)
- [ ] Step 3: Confirmation block output to user; direction explicitly awaited — do NOT proceed without user's stated next task

**The refresh is not complete until all 4 boxes are checked AND the user has stated what to do next.**

---

## Why This Prompt Exists

Thread compaction preserves facts but degrades the working paradigm. The summary retains what was decided but loses how the system thinks. This causes the AI to fall back on familiar patterns rather than maintaining the current operational frame. This prompt rebuilds that frame by re-reading the authoritative source files.

**Critical rule:** After completing this refresh, do NOT take action until the user confirms what to work on next. Compaction-triggered interpretation substitution is a validated failure pattern.

---

## Step 0: Discover System Locations (Silent)

1. Locate Context Files directory:
   ```bash
   find /sessions/[session-name]/mnt/Claude\ Cowork -type d -name "*Context*Files*" 2>/dev/null
   ```

2. Locate System Wisdom directory:
   ```bash
   find /sessions/[session-name]/mnt/Claude\ Cowork -type d -name "*System_Wisdom*" 2>/dev/null
   ```

3. If either not found, ask user: "I cannot locate your system. Where is it located?"

**Do NOT output anything to user during this step.**

---

## Step 1: Reload Context Files (USE PARALLEL AGENTS)

**EXECUTION:** Launch 4 parallel Task agents simultaneously

**Agent 1: Human Preferences** (in `[context-files-path]/Level_0_Map_&_Preferences/`, filename pattern: `*Human_Preferences*`, exclude `Human_Preferences_Archive/`)
- Reload rules of engagement, working style, foundational principles
- Note version number

**Agent 2: AI Preferences** (in `[context-files-path]/Level_0_Map_&_Preferences/`, filename pattern: `*AI_Preferences*`, exclude `AI_Preferences_Archive/`)
- Reload output format conventions, operational defaults, standing behavioral instructions, failure mode mitigations
- Note version number

**Agent 3: Dyadic Preferences** (in `[context-files-path]/Level_0_Map_&_Preferences/`, filename pattern: `*Dyadic_Preferences*`, exclude `Dyadic_Preferences_Archive/`)
- Reload equilibration conventions, communication signals, session rhythm standards
- Note version number and current focus from content

**Agent 4: SuperContext** (in `[context-files-path]/Level_0_Map_&_Preferences/`, filename pattern: `*SuperContext*`, exclude `SuperContext_Archive/`)
- Reload full operational state: identity, projects, working context, learnings, progress, open questions
- Note version number and current focus from SC_Layer 3

**Do NOT output anything to user until Step 3.**

---

## Step 2: Bootstrap System Wisdom (Silent)

**Read directly (not via agent — these must enter your active context):**

1. `5_System_Wisdom/6_Triggers/AI_Trigger_Protocol_SW_v1.md` — Operational trigger instructions
2. `5_System_Wisdom/4_System_Intelligence/Human_Current_State_SW_v7.md` — Human behavioral baseline
3. `5_System_Wisdom/4_System_Intelligence/AI_Current_State_SW_v13.md` — AI behavioral baseline
4. `5_System_Wisdom/4_System_Intelligence/Dyadic_Current_State_SW_v10.md` — Relationship baseline
5. `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md` — Active Tracking List, validated patterns, operational rules

**Pay particular attention to:**
- Validated Pattern #3 (Context Compaction Triggers Interpretation Substitution) — this is why you're running this prompt
- The operational rule: "Never create duplicate copies of files. Single source of truth, single location. Version in place."
- Active Tracking List: what behaviors are being monitored and at what levels
- Any anti-patterns or known failure modes

**Do NOT output anything to user.**

---

## Step 3: Confirm Context and Await Direction

Report to the user what was reloaded, then explicitly ask what to do next:

```
Context refreshed after compaction.

**Personal Preferences:** v[X] loaded
**SuperContext:** v[X] loaded — Current focus: [From SC_Layer 3]
**System Wisdom:** Behavioral baselines, trigger protocol, and [X] active tracking items loaded

**Compaction note:** My working frame has been rebuilt from source files. To avoid interpretation substitution, I'll confirm scope before taking action.

What would you like to work on next?
```

**CRITICAL:** Do not proceed with any task — even if the compaction summary suggests what was being worked on — until the user explicitly states what to do. The compaction summary may have degraded the scope or frame of the prior work.

---

## Notes

- This prompt is functionally identical to session-startup Steps 0-4 but without the daily briefing offer
- It exists as a separate prompt because compaction is a high-risk moment for interpretation substitution
- The explicit confirmation step is the key difference — session-startup assumes a fresh session; this prompt assumes degraded context that needs human validation before proceeding
- If the user invokes this and then gives a directive, treat that directive as authoritative — but still confirm scope if the directive is brief and the implied context is rich
