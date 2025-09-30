# Context Window Handoff

**Created:** 2026-02-13
**Last Updated:** 2026-02-21
**Purpose:** Preserve session context for continuation in a new context window
**Status:** Final
**Version:** 2.0

---

## Description

Creates a compact, structured summary of the current conversation for seamless transfer to a new context window. Includes operational state, technical details, System Wisdom state, and continuation instructions. The handoff file is saved to `6_Session_Working_Files/` as a temporary file that gets deleted upon successful continuation.

## What It Does

1. Analyzes entire conversation chronologically
2. Extracts decisions, progress, errors, and next steps
3. Captures System Wisdom state: trigger flags, tracking list changes, behavioral baselines
4. Produces structured handoff document optimized for quick AI comprehension
5. Saves to `6_Session_Working_Files/` and echoes location to user

## When to Use

- Context window approaching 80-90% capacity
- Complex multi-step work needs to continue
- Before switching to a new conversation thread

## Output

- `6_Session_Working_Files/YYYY-MM-DD-HH-MM_Context_Handoff.md`
- Temporary file — delete upon successful continuation in new session

## Usage Pattern

1. Invoke when token usage is high
2. Handoff file saved to `6_Session_Working_Files/`
3. Start new conversation
4. Paste handoff summary as first message
5. New session picks up where you left off

## Tags

`session-management` `context-transfer` `continuity` `handoff` `system-wisdom`
