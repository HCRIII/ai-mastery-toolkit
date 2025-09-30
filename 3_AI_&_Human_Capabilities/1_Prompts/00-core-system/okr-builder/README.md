# okr-builder

**Type:** Operation (kebab-case = procedural implementation)
**Implements Framework:** `7_Frameworks/OKR_Operating_System.md`
**Created:** 2026-02-27
**Status:** v1

## What This Does

Runs the OKR Operating System as a live session operation. Handles all four modes:

| Mode | Trigger | Duration |
|------|---------|----------|
| 1 — Full Build | New cycle; first-time use | 60–90 min |
| 2 — Quarterly Refresh | Q-end; score and recalibrate | 30–45 min |
| 3 — Mid-Quarter Alignment Check | "I feel productive but off-track" | 10–15 min |
| 4 — Orientation Check-In | "I've lost the thread" | 3–5 min |

## How to Invoke

Say: `run okr-builder` or specify the mode: `run okr-builder mode 3`

If no mode is specified, AI asks which mode is needed before proceeding.

## Output Location

User-specific OKRs produced by Mode 1 and Mode 2 are written to:
`4_Context_Files/Level_2_Strategy/2.3_Annual_OKR_Set_[YYYY].md`

Mode 3 writes brief status notation to the same file.
Mode 4 produces no file output — orientation only.

## Framework Reference

For conceptual background — what OKRs are, the four-mode rationale, calibration standards, the stabilization function — read `7_Frameworks/OKR_Operating_System.md` before running this prompt for the first time.
