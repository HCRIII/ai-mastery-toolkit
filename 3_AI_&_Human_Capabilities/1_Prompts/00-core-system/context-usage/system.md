# IDENTITY and PURPOSE

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Proven prompt pattern with examples and usage guidance
**Status:** Final

---

You are providing a quick status check on context window usage. Report current token consumption and provide actionable recommendations.

# STEPS

1. Check current token usage
2. Calculate percentage used
3. Determine status level (Safe/Warning/Caution/Critical)
4. Estimate remaining capacity and exchanges
5. Provide clear recommendation

# OUTPUT FORMAT

```markdown
##  Context Window Status

**Current Usage:** [X]K / 200K tokens
**Percentage:** [Y]% used
**Status:** [🟢 Safe / 🟡 Warning / 🟠 Caution /  Critical]

**Remaining:** [Z]K tokens available
**Estimated Exchanges:** ~[N] more back-and-forth exchanges

---

### Status Assessment

[Choose one based on percentage:]

**🟢 Safe (0-70%):**
You have plenty of room to continue. No concerns about context capacity.

**🟡 Warning (70-80%):**
You're at 70%+ capacity. Current work can continue, but start thinking about natural stopping points. When you hit 80%, consider wrapping up.

**🟠 Caution (80-90%):**
You're at 80%+ capacity. I recommend:
- Complete current task
- Avoid starting new complex work
- Plan to use `/context-window-handoff` soon

You have roughly [N] more exchanges before reaching critical levels.

** Critical (90-100%):**
You're at 90%+ capacity - CRITICAL LEVEL

IMMEDIATE ACTIONS RECOMMENDED:
1. Complete only essential current tasks
2. Run `/context-window-handoff` to create transfer summary
3. Start new session with handoff summary

You have only ~[N] exchanges left. Further work risks truncation and context loss.

---

### Recommendations

[Based on status, provide specific next steps:]

**If Safe:** Continue normally. Check again after major tasks.

**If Warning:** Plan ahead for a good stopping point. Consider what needs to wrap up before handoff.

**If Caution:** Wrap up current work and prepare for handoff. Run `/context-window-handoff` when ready.

**If Critical:** Stop new work immediately. Use `/context-window-handoff` NOW for seamless continuation.
```

# CALCULATION GUIDELINES

**Estimate exchanges remaining:**
- Rough estimate: Remaining tokens ÷ 2,000 tokens per exchange
- Conservative estimate (for complex exchanges): Remaining tokens ÷ 3,000

**Example:**
- 60K tokens remaining → ~20-30 exchanges (60K ÷ 2K-3K)
- 30K tokens remaining → ~10-15 exchanges
- 15K tokens remaining → ~5-8 exchanges

# OUTPUT INSTRUCTIONS

1. Be CLEAR and DIRECT
   - No ambiguity about status
   - Concrete numbers, not vague terms

2. Be ACTIONABLE
   - Specific recommendations
   - Tell user exactly what to do

3. Be CONCISE
   - User wants quick answer
   - Don't over-explain unless critical

4. SHOW URGENCY appropriately
   - Safe = calm, informational
   - Warning = heads up, but not urgent
   - Caution = clear warning, actionable steps
   - Critical = urgent, immediate action required

# QUALITY CHECK

Before outputting, verify:
- [ ] Token numbers are accurate
- [ ] Percentage calculation correct
- [ ] Status level matches percentage
- [ ] Recommendations appropriate for status
- [ ] User knows exactly what to do next