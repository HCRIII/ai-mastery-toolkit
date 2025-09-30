# Identity Anchoring Guide

**Created:** 2026-02-14
**Last Updated:** 2026-02-14
**Purpose:** Teaching guide for preventing identity drift in SDD projects
**Status:** Final

---

## What Is Identity Drift?

Identity drift happens when the product you're specifying gradually shifts away from what you actually intend to build — without anyone noticing until it's too late.

It's subtle. Each individual answer sounds reasonable. Each design decision makes sense in isolation. But the cumulative effect is a spec that describes a different product than what you set out to build.

---

## A Real Example: How Identity Drift Cost 13 File Rewrites

During the development of a course using the SDD workflow, the spec was built around "Seven Pillars health-first executive transformation" — a premium course targeting executives at $997-$1,497.

The actual product was supposed to be an "AI Mastery Toolkit companion course" — a mid-range course targeting mid-career professionals at $497-$797.

Every answer given during the interview phase was reasonable. "Who is the audience?" → "Executives." "What's the price point?" → "$1,497." "What's the approach?" → "Health-first transformation." Each answer was valid for a product. Just not THIS product.

The result: 13 files had to be rewritten. The audience, pricing, module structure, and personas were all wrong — not because the answers were bad, but because they were answers for a product that didn't exist.

**The fix would have taken 2 minutes:** "Before we start — what exactly are we building, for whom, and why?"

---

## The Identity Statement

Every SDD project needs an identity statement before any work begins. The format is simple:

```
"I am building [SPECIFIC PRODUCT] for [SPECIFIC AUDIENCE]
because [SPECIFIC PROBLEM OR OUTCOME]"
```

### Good Identity Statements

These are specific enough to guide decisions:

- "I am building an 8-module AI Mastery Toolkit companion course for mid-career professionals who purchased the toolkit, because they need guided instruction to actually use what they bought."

- "I am building a community site homepage for coaches exploring AI, because they need to see quickly whether this community is for them and what they'll get by joining."

- "I am building a lead magnet PDF on prompt engineering for small business owners, because they're curious about AI but don't know where to start and want something immediately useful."

### Vague Identity Statements (Fix These)

These are too vague to guide decisions — every question you answer will be a guess:

- "I am building a course about AI" → For whom? Why would they care? What kind of course?

- "I am building something for professionals" → What product? What kind of professionals? What problem?

- "I am building a website" → What kind of website? For whom? What should it accomplish?

### The Test

If two different people read your identity statement and would design significantly different products, it's too vague. The statement should constrain the design space enough that the product's shape is already emerging.

---

## Why Each Phase Requires Identity Confirmation

The SDD workflow confirms identity at every phase transition. Here's why:

**Phase 1 (Research):** "Before we research — what are we researching FOR?"
Research without a clear identity produces generic findings. Research with a clear identity produces findings targeted to your specific product and audience.

**Phase 1 → Phase 2 (Transition Gate):** "Did research validate or challenge our identity?"
Sometimes research reveals that your assumptions about the product or audience are off. Better to catch this before writing a spec.

**Phase 2 (Spec Creation):** "Does this spec serve our identity?"
The identity statement becomes the first line of shape.md. Every decision in the spec references it.

**Phase 2 → Phase 3 (Transition Gate):** "Does the spec's identity match Phase 1's identity?"
Specs can drift from the original intent. This gate catches it.

**Phase 3 (Interview):** "Is the identity still accurate before we finalize decisions?"
Step 0 of every interview confirms identity. Between question blocks, identity checks verify decisions align.

**Phase 3 → Phase 4 (Transition Gate):** "Is the identity stable before we generate at scale?"
Production amplifies everything — including errors. An identity that's "mostly right" produces content that's "mostly wrong."

---

## Red Flags for Identity Drift

Watch for these during your SDD workflow:

**Design decisions that feel disconnected from your audience.**
If you said your audience is "beginners" but you're designing exercises that require advanced skills, something drifted.

**Content depth that doesn't match the product level.**
If your course is supposed to be a "quick-start companion" but modules are 3 hours each, the identity or the design is wrong.

**Pricing that contradicts the audience.**
If your audience is "budget-conscious newcomers" but pricing is $1,497, there's a mismatch.

**Tone that doesn't fit who you're serving.**
If your audience is "experienced engineers" but the tone is "hand-holding for beginners," the identity has shifted.

**You're answering questions for your business in general, not this specific product.**
This is the most common source of drift. When asked "Who is your target audience?", you answer with your overall ICP instead of who THIS specific product is for.

---

## How to Fix Identity Drift When You Catch It

1. **Stop.** Don't continue making decisions with a drifted identity.
2. **Rewrite the identity statement.** What are you actually building?
3. **Review all decisions made so far.** Which ones still hold? Which need to change?
4. **Update shape.md** with the corrected identity and affected decisions.
5. **Continue from the corrected state.** Don't start over — just course-correct.

The earlier you catch it, the less work you redo. That's why the workflow has identity checks at every transition.

---

## Quick Reference

| Phase | Identity Action | Time Cost |
|-------|----------------|-----------|
| Phase 1 Start | State identity, AI echoes back for confirmation | 2 min |
| Phase 1 → 2 | Verify research validated identity | 2 min |
| Phase 2 Start | Identity statement as first line of shape.md | 1 min |
| Phase 2 → 3 | Verify spec matches identity | 2 min |
| Phase 3 Start | Step 0: Confirm identity before any questions | 2 min |
| Phase 3 Blocks | Identity check between question groups | 1 min each |
| Phase 3 → 4 | Final identity confirmation before production | 2 min |

**Total time investment:** ~15 minutes across the entire workflow.
**Time saved by catching drift early:** Hours to days of rework.

---

**Remember:** The identity statement is the single most important input in the SDD workflow. Everything else flows from it. Get it right, confirm it often, and fix it immediately when it drifts.
