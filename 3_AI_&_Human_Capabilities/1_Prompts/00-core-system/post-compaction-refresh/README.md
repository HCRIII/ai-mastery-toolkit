# Post-Compaction Refresh

**Created:** 2026-02-21
**Purpose:** Rebuild working context after thread compaction to prevent interpretation substitution
**Status:** Final
**Version:** 1.0

---

## Description

Thread compaction preserves facts but degrades the working paradigm. This prompt rebuilds the operational frame by re-reading Personal Preferences, SuperContext, and all System Wisdom bootstrap files. Critically, it waits for the user to confirm what to work on next before taking any action.

## What It Does

1. **Discover Systems** — Locates `4_Context_Files/` and `5_System_Wisdom/`
2. **Reload Context** — 2 parallel agents read Personal Preferences and SuperContext
3. **Bootstrap System Wisdom** — Reads Trigger Protocol, 3 Current States, and Current Intelligence directly into context
4. **Confirm and Await Direction** — Echoes what was loaded, then asks the user what to work on next

## When to Use

- After thread compaction occurs
- When continuing a session from a compaction summary
- Any time you suspect context degradation

## Why It Exists

Validated Pattern #3 in Current Intelligence: "Context Compaction Triggers Interpretation Substitution." After compaction, the AI falls back on familiar patterns rather than maintaining the current frame. This prompt forces a full context reload and an explicit human confirmation before proceeding.

## Key Difference from Session Startup

Functionally identical to session-startup Steps 0-4, but without the daily briefing offer and with an explicit "do not act until user confirms" rule. Session startup assumes a fresh session; this prompt assumes degraded context that needs human validation.

## Tags

`compaction` `context-refresh` `interpretation-substitution` `safety`
