# Daily Debriefing — Daily Work Summary

**Created:** 2026-02-13
**Last Updated:** 2026-03-14
**Purpose:** Overview and navigation for daily-debriefing capabilities
**Status:** Final

---

## Description

Compiles a **Daily Work Summary** — a clean, organized record of all work accomplished today, learnings captured, and System Wisdom gained. Reads directly from SC_Layer 3 checkpoint data and `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md`. Invoke at end of day for the full picture in one place.

## When to Use

- **At the end of each working day** — after all checkpoint updates for the day are done
- Before ending the final session of the day

## What It Does

1. **Finds the current SuperContext** (latest `SuperContext_vXX.md` in `4_Context_Files/`)
2. **Scans SC_Layer 3** for all "Completed This Session" blocks matching today's date
3. **Organizes by task thread** — each checkpoint block becomes its own section
4. **Extracts today's learnings** from `Current_Intelligence_SW_v1.md` and lists them concisely
5. **Extracts today's System Wisdom** — new patterns, milestones, and optimization principles from `Current_Intelligence_SW_v1.md`; notes any behavioral snapshots taken today
6. **Creates a Daily Work Summary file** in `5_System_Wisdom/9_Daily_Debriefs/`
7. **Provides link** with a one-line count of what was captured

## Output Format

```
# Daily Work Summary — [Date]

## [Task Thread Name]
1. ✅ Deliverable
2. ✅ Deliverable

## [Next Task Thread]
1. ✅ Deliverable

## Learnings Captured Today
- Learning N: concept

## System Wisdom Gained Today
### New Patterns
- Pattern N — Name: one-line summary

### Milestones
- Milestone N — Name: significance

### New Principles / Anti-Patterns
- Name: summary

### Behavioral Snapshots
- N snapshot(s) captured / None captured today
```

## File Location

`5_System_Wisdom/9_Daily_Debriefs/YYYY-MM-DD_Daily_Work_Summary.md`

## Prerequisite

Checkpoint updates must be done first. This prompt reads from checkpoint data — it does not review the session conversation. If no checkpoints were done today, the prompt will say so and ask you to run `checkpoint-update` first.

## Integration

- Reads from: **SC_Layer 3** (session work completed) and **`Current_Intelligence_SW_v1.md`** (learnings)
- Reads from: **`5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md`** (System Wisdom gained)
- Saves to: **`5_System_Wisdom/9_Daily_Debriefs/`**
- Complements: `8_Weekly_Reviews/` (weekly review) and `4_System_Intelligence/` (ongoing patterns)

## Standard Practice

Run at end of day, after all task thread checkpoints are complete:
1. Run `checkpoint-update` for each completed task thread throughout the day
2. Invoke `daily-debriefing` once at end of day for the consolidated daily view

## Tags

#prompt #ending #session-end #daily-summary #work-log #checkpoint #system-wisdom
