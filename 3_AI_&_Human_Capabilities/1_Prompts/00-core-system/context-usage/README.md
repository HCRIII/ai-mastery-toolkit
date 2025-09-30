# context-usage

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for context-usage capabilities
**Status:** Final

---

## Description
Quick check of current context window usage. Shows token consumption, remaining capacity, and status against warning thresholds.

## When to Use
- After a break in the session
- When unsure where you are in context capacity
- Before starting a large new task
- When planning whether to continue or wrap up
- Anytime you want visibility into token usage

## Key Features
- **Instant Status** - Current token usage and percentage
- **Threshold Awareness** - Where you are vs warning levels
- **Remaining Capacity** - How much room left
- **Recommendations** - Should you continue, prepare handoff, or wrap up
- **Estimated Exchanges** - Rough calculation of remaining interactions

## Output Format
Simple, clear status report with:
- Current usage (tokens and percentage)
- Visual status indicator (🟢 Safe / 🟡 Warning / 🟠 Caution /  Critical)
- Remaining capacity
- Estimated exchanges left
- Recommendation for next steps

## Usage Pattern
Simply invoke when you need a status check:
```
/context-usage
```

No additional input required.

## Integration
- Works standalone (no context loading needed)
- Complements `/context-window-handoff` (use this to check, that to transfer)
- Part of proactive context management system

## Tags
`session-management` `context-window` `status-check` `monitoring`