# Session Startup

**Created:** 2026-02-13
**Last Updated:** 2026-03-07
**Purpose:** Initialize session with full context and behavioral awareness
**Status:** Final
**Version:** 3.6

---

## Description

Loads all operational and behavioral context before any work begins. Discovers system locations dynamically, loads Human Preferences, AI Preferences, Dyadic Preferences, and SuperContext from `4_Context_Files/Level_0_Map_&_Preferences/`, bootstraps System Wisdom behavioral awareness, then confirms everything is loaded and offers daily briefing.

## What It Does

1. **Step 0 — Discover Systems** — Locates `4_Context_Files/`, `5_System_Wisdom/`, `6_External_Intelligence/`, and `8_Weekly_Reviews/` via pattern matching. Silent.
2. **Step 1 — Load Context** — 4 parallel agents read Human Preferences, AI Preferences, Dyadic Preferences, and SuperContext (latest versions; excludes archive subfolders). Silent.
3. **Step 2 — Review Index** — Reads Context Files index to know what context is available for reference. Silent.
4. **Step 3 — Bootstrap System Wisdom** — Reads AI Trigger Protocol + 3 Current State files (Human, AI, Dyadic) directly into context (not via agent). Silent.
5. **Step 4 — Confirm** — First user-visible output: echoes loaded versions, current focus from SuperContext SC_Layer 3, System Wisdom baselines, OKR velocity (achievability % from Velocity Model), EIS state, available context categories, and token metrics.
6. **Step 5 — Daily Briefing** — Asks "Would you like your daily briefing now? (y/n)" — if yes, runs `/daily-briefing` prompt.

Steps 0-3 are silent. Step 4 is the first user-visible output.

## When to Use

- At the start of every session
- After long breaks
- When switching projects

## What You'll See

AI confirms: Human/AI/Dyadic Preference versions, SuperContext version, current focus (from SC_Layer 3), System Wisdom baselines and active tracking count, OKR velocity signals, EIS state, available context categories, and token metrics. Then asks if you want a daily briefing.

## How AI Reaches This Prompt

The toolkit root `README.md` directs any AI encountering the toolkit to read and execute this file before any other action. That is the intended entry path. If an AI is executing session-startup without having read that README first, that is a gap — the human should be informed.

## Tags

`session-start` `context-loading` `initialization` `system-wisdom` `okr-velocity` `eis`
