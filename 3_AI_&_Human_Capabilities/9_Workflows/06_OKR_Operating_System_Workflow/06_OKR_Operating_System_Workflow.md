# 06_OKR_Operating_System
## Workflow Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Select the correct okr-builder mode for the current trigger and execute it — the mode selection decision is the primary skill this workflow teaches.
**Status:** Final
**Version:** v1
**Framework document:** `06_OKR_Operating_System_Framework.md`

---

## Workflow Overview

The `okr-builder` process operates in four distinct modes, each suited to a specific trigger condition. The mode selection decision is the primary user skill for this operation — all four modes invoke the same process, but the trigger determines which mode is correct. Without this workflow, users default to Full Build for every use, which is the wrong tool for three out of four situations.

This workflow is the scheduling and mode-selection layer. The operation itself handles execution.

**Who runs it:** Human identifies the trigger; AI confirms mode selection and executes.

**When it triggers:** Four distinct triggers, each mapped to its mode below.

---

## Inputs Required

- Active OKR file (for all modes except Full Build when no prior OKRs exist)
- SuperContext (current version)
- Previous quarter's performance data (for Quarterly Refresh)
- Activated IHVNAs awaiting placement (optional input for Quarterly Refresh and Full Build)
- IP assessment results awaiting placement (optional input for Quarterly Refresh and Full Build)

---

## Mode Selection

Before running okr-builder, identify the trigger and confirm the correct mode:

| Trigger | Correct Mode |
|---------|-------------|
| New cycle opening / annual planning | Full Build |
| End of a quarter | Quarterly Refresh |
| Mid-quarter; activity feels productive but possibly off-track | Mid-Quarter Alignment Check |
| Overwhelmed; scope is shifting; lost the thread | Orientation Check-In |

If uncertain between Full Build and Quarterly Refresh: ask whether this is a new strategic cycle (Full Build) or a recalibration within a continuing cycle (Quarterly Refresh).

---

## Step Sequence by Mode

### Mode 1 — Full Build

**Trigger:** New annual cycle opens, or a major strategic reset is needed.

**When to use, when not to:** Full Build is for cycle-open events. Do not run Full Build quarterly — Quarterly Refresh is the correct mode for end-of-quarter recalibration. Full Build at quarterly frequency creates overhead without benefit.

**Step 1:** Load SuperContext, previous cycle OKR file (if exists), and any activated IHVNAs or IP assessments awaiting placement.

**Step 2:** Run `okr-builder` in Full Build mode.
- Define 2–4 annual Objectives — each a qualitative statement of strategic direction
- Define 3–5 Key Results per Objective — each measurable, time-bound, and ambitious
- Establish Q1 targets as the active sub-cycle KRs

**Step 3:** Save the new OKR file to the active strategy location. Update SuperContext with the OKR file reference and the active Q1 KR set.

**Step 4:** Brief all active projects against new OKRs — confirm alignment or flag gaps.

**Produces:** Annual OKR file with Q1 targets active. SuperContext updated.

---

### Mode 2 — Quarterly Refresh

**Trigger:** End of each quarter.

**Cadence:** Once per quarter, at the quarter boundary. Typically 45–90 minutes.

**Step 1:** Load active OKR file, current quarter's KR targets, and any notes from the quarter's work.

**Step 2:** Score previous quarter's KRs.
- For each KR: achieved / partial (X%) / missed
- Brief rationale for each score — what drove the result?
- Identify the 1–2 patterns that most explain the quarter's performance

**Step 3:** Calibrate next quarter's targets.
- Adjust KR targets based on performance trajectory
- Place any activated IHVNAs or Tier 1/2 IP assets into the OKR structure
- Confirm Objective relevance — are the annual Objectives still the right strategic frame?

**Step 4:** Update the OKR file with scored Q[n] and active Q[n+1] targets. Update SuperContext.

**Produces:** Scored previous quarter + active next quarter targets. OKR file updated. SuperContext updated.

---

### Mode 3 — Mid-Quarter Alignment Check

**Trigger:** 2–4 times per quarter, or whenever activity feels productive but potentially off-track. The signal: "I'm getting things done but I'm not sure they're the right things."

**Cadence:** Not scheduled — signal-triggered. 20–30 minutes.

**Step 1:** Load active OKR file and list of work completed in the last 2–4 weeks.

**Step 2:** Run `okr-builder` in Mid-Quarter Alignment Check mode.
- Map current activity to active KRs: which KRs is current work serving?
- Identify unserved KRs: which active KRs have had no work in the past 2–4 weeks?
- Identify unaligned work: which current tasks don't trace to any active KR?

**Step 3:** Surface drift early.
- For unserved KRs: is the gap intentional (sequencing) or unintentional (drift)?
- For unaligned work: is it legitimately necessary or is it displacement activity?

**Step 4:** Adjust the near-term task queue to correct drift. No OKR file update required unless a structural misalignment is discovered — in that case, flag for Quarterly Refresh consideration.

**Produces:** Clarity on current alignment. Task queue adjusted. No file update unless structural issue found.

---

### Mode 4 — Orientation Check-In

**Trigger:** Overwhelm signal — inputs are fast, scope is shifting, the thread has been lost. "I know we have OKRs but I've lost sight of what I'm supposed to be doing right now."

**Cadence:** On-demand. 3–5 minutes. Can run at any point.

**Step 1:** Load active OKR file and the current KR set.

**Step 2:** Run `okr-builder` in Orientation Check-In mode.
- State the 3 active KRs for the current quarter
- Identify the single action that would most move the most important KR today
- Clear the noise: everything not serving an active KR is deprioritized for now

**Step 3:** Resume work with the single identified priority as the leading task.

**Produces:** Re-anchored focus. Single next priority identified. No file updates.

---

## Output + Destination

| Mode | Output | Destination |
|------|--------|-------------|
| Full Build | Annual OKR file with Q1 targets | Active strategy location; SuperContext reference |
| Quarterly Refresh | Updated OKR file with scored Q[n] + active Q[n+1] | Same file, versioned or replaced; SuperContext |
| Mid-Quarter Alignment Check | Task queue adjustments | Active session; flag to SuperContext if structural |
| Orientation Check-In | Single next priority | Active session only; no file update |

---

## Framework Document

The conceptual OKR operating system — the structure of OKRs, the compounding logic of consistent use, and integration with the Strategic Navigation chain — lives in:

**`06_OKR_Operating_System_Framework.md`** → `3_AI_&_Human_Capabilities/7_Frameworks/`
