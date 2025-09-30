# Report current token use for this session.

**You are reading:** `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/token-use/system.md`
**Invocation:** `token-use?`

**Created:** 2026-03-13
**Last Updated:** 2026-03-13
**Purpose:** Instant token use snapshot — outputs the Token Use block from the session-startup format without re-running full startup.
**Status:** Final
**Version:** 1.0

---

## Instructions

1. Read the active model from the session environment (`Model:` field in the system prompt env block).
2. Derive the token budget:
   - `claude-opus-4-6` → 1,000,000 tokens
   - `claude-sonnet-4-6` → 1,000,000 tokens
   - `claude-haiku-4-5` → 200,000 tokens
   - If undetectable → default to 1,000,000 tokens
3. Estimate tokens used: check `/sessions/[session-name]/token_counter.py` if available. If unavailable, use character count ÷ 4 and note as `~[X,XXX]` (char/4 estimate).
4. Output **only** the block below — nothing before it, nothing after it. No preamble. No explanation. No emoji.

---

### Token Use
- Model: [model-name] | [X,XXX,XXX] token budget
- ~[X,XXX] ([X]% of budget)
- Used: [XX,XXX]
- Remaining: ~[XXX,XXX]
- Status: [Safe | Warning — 70% | Caution — 80% | Critical — 90%]
