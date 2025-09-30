# Token Use — Instant Token Snapshot

**Created:** 2026-03-14
**Last Updated:** 2026-03-14
**Purpose:** Overview and navigation for token-use prompt
**Status:** Final

---

## Description

Outputs an instant token use snapshot — the Token Use block without re-running full session startup. Invokable at any point mid-session to check context pressure.

## When to Use

- Any time during a session when you want to know context window status
- After a heavy file-read batch to check pressure
- Before starting a large new task to confirm headroom

## Invocation

`token-use?`

## What It Does

1. Reads the active model from the session environment
2. Derives the token budget for that model
3. Checks for `token_counter.py` if available; otherwise estimates from JSONL character count ÷ 4
4. Outputs **only** the Token Use block — no preamble, no explanation

## Output Format

```
### Token Use
- Model: [model-name] | [X,XXX,XXX] token budget
- ~[X,XXX] ([X]% of budget)
- Used: [XX,XXX]
- Remaining: ~[XXX,XXX]
- Status: [Safe | Warning — 70% | Caution — 80% | Critical — 90%]
```

## Tags

#prompt #utility #token-use #context-window #anytime
