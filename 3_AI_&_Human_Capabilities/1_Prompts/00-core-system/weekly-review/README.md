# Weekly Review

**Created:** 2026-02-13
**Last Updated:** 2026-03-08
**Purpose:** Weekly review — enlightenment, interview, and adjustment process
**Status:** Final
**Version:** 3.1 (renamed from weekly-synthesis to weekly-review)

---

## Description

A structured weekly review that gathers the week's data from SuperContext and System Wisdom, presents it to the user, conducts a confirmation interview, then makes agreed adjustments and echoes what changed. Produces a timestamped review file in `5_System_Wisdom/8_Weekly_Reviews/`.

**Invocation:** `/weekly-review`

## The Process

**Step 1: Gather Data (3-5 min)** — 3 parallel agents read SuperContext, System Wisdom intelligence/state, and raw snapshot/evidence data

**Step 2: Present Overview (2-3 min)** — Echoes operational state and behavioral development to the user

**Step 3: Interview (10-15 min)** — 8-12 targeted questions across learning, priorities, progress, behavioral development, and open-ended categories. One at a time.

**Step 4: Confirm Adjustments** — Presents proposed changes to SuperContext and System Wisdom. Waits for user approval.

**Step 5: Execute & Save (3-5 min)** — Saves weekly review file to `5_System_Wisdom/8_Weekly_Reviews/`, updates SuperContext and System Wisdom files, echoes all changes.

## Data Sources

- `4_Context_Files/SuperContext_vX.md` — operational state and evolution
- `5_System_Wisdom/4_System_Intelligence/` — Current Intelligence, Current States, Mastery Records
- `5_System_Wisdom/1-3_Taxonomy_folders/` — snapshots created this week
- `5_System_Wisdom/5_Case_Evidence/` — new case entries
- `5_System_Wisdom/8_Weekly_Reviews/` — previous review for comparison

## Output

- `8_Weekly_Reviews/YYYY-MM-DD_Weekly_Review.md`
- Updated SuperContext (version incremented)
- Updated System Wisdom files as confirmed

## When to Run

- Once per week (Sunday recommended — daily-briefing offers it automatically on Sundays)
- Duration: ~20-30 minutes
- Invoke with: `/weekly-review`

## Tags

`weekly-review` `synthesis` `interview` `priorities` `system-wisdom`
