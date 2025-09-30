# Ending Master Update

**Created:** 2026-02-13
**Last Updated:** 2026-02-21
**Purpose:** End-of-session updates to SuperContext and System Wisdom
**Status:** Final
**Version:** 3.0

---

## Description

Updates all tracking systems at end of session. Human Preferences, AI Preferences, Dyadic Preferences, and SuperContext are updated in place in `4_Context_Files/Level_0_Map_&_Preferences/`. System Wisdom harvest reads the session transcript through three parallel taxonomy agents to capture behavioral development. No separate session summary or close-out files are generated — the SuperContext absorbs session accomplishments and next steps.

## What It Does

1. **Human Preferences** — Updates in place if new human-side conventions discovered (conditional)
2. **AI Preferences** — Updates in place if new AI-side conventions or failure mode mitigations validated (conditional)
3. **Dyadic Preferences** — Updates in place if new dyadic conventions or communication protocols established (conditional)
4. **SuperContext** — Updates in place with session learnings, progress, open questions, and next steps
5. **System Wisdom Harvest** — 3 parallel taxonomy agents (Human, AI, Dyadic) read the JSONL transcript, filtered by the Active Tracking List in Current Intelligence. Produces snapshots, Current State updates, Mastery Record graduations, and case evidence as warranted
6. **Session Prompts** — Creates reusable prompts if a repeatable pattern emerged (conditional)
7. **Daily Debriefing** — Always generated; mandatory output of every session

Steps 1-4 run in parallel. Step 5 runs after. Step 6 is conditional. Step 7 always runs.

## When to Use

- End of any significant work session
- Before closing Cowork

## Files Updated

- `4_Context_Files/Level_0_Map_&_Preferences/Human_Preferences_vX.md` (if warranted)
- `4_Context_Files/Level_0_Map_&_Preferences/AI_Preferences_vX.md` (if warranted)
- `4_Context_Files/Level_0_Map_&_Preferences/Dyadic_Preferences_vX.md` (if warranted)
- `4_Context_Files/Level_0_Map_&_Preferences/SuperContext_vX.md`
- `5_System_Wisdom/` taxonomy snapshots, Current States, Mastery Records, Current Intelligence, Case Evidence (if warranted)
- `5_System_Wisdom/9_Daily_Debriefs/YYYY-MM-DD_Daily_Work_Summary.md` (always)

## Tags

`session-end` `tracking` `system-wisdom` `harvest` `supercontext`
