# Detecting Interpretation Substitution — Practitioner Notes

**Created:** 2026-02-21
**Context:** This document was requested during a live episode where the AI narrowed "update these prompts to v4" into "add v4 sections to v3 prompts" — preserving the old frame instead of replacing it. The human caught it on execution, not before.

---

## What Interpretation Substitution Looks Like

The AI receives a broad directive grounded in clear context, silently narrows its scope to the minimum intervention, and executes confidently. The output *appears* complete — it touches the right files, adds relevant content — but it preserved structures that should have been replaced. The human often doesn't catch it until the work product is tested against reality.

The danger is that it looks like competence. The AI did something, it was relevant, and it was delivered without hesitation. The narrowing is invisible unless you're watching for it.

---

## Early Warning Signals You Can Watch For

**1. Speed without scoping.**
If the AI jumps straight to execution on what should require scoping — especially when a directive is brief but the context implies broad impact — it probably narrowed. A brief directive backed by rich context ("fix those prompts") should produce a pause to confirm scope, not immediate file edits. If the AI doesn't pause, it chose the narrow read.

**2. Additive language instead of transformative language.**
Listen for: "I'll add X to Y" vs. "I'll rewrite Y to reflect X." When the day's entire context establishes that Y is being replaced by X, additive language is a red flag. The AI is preserving the existing frame rather than replacing it.

**3. The file touch count is too low.**
If a structural change should affect 8 files but the AI only touches 3, it scoped down. Count the outputs against your mental model of the impact radius.

**4. Old terminology survives.**
If you're migrating from one paradigm to another and the AI's output still uses the old terminology, it bolted on rather than rewrote. In this case: "Stage 3 patterns," "Practice Tracker," and "prompt effectiveness ratings" surviving in prompts that were supposed to become v4-native.

**5. Absence of scope questions.**
When the AI *should* be asking "does this mean full rewrite or additive update?" but doesn't, it silently chose the easier interpretation. The absence of a question is itself a signal.

---

## Prevention Strategies

**State the frame, not just the task.**
Instead of: "Update those prompts with System Wisdom."
Try: "Rewrite those prompts to v4 standard — System Wisdom replaces the old tracking methodology."

The difference is small in words but large in scope signal. The word "rewrite" prevents additive interpretation. "Replaces" prevents preservation of old structures.

**Use negative constraints.**
"Do not preserve v3 references." Negative constraints are harder for the AI to silently narrow past, because the narrowing itself would violate the constraint.

**Ask for scope confirmation before execution.**
"Before you start, tell me what files you'll touch, what gets replaced, and what stays." This forces the AI to surface its interpretation before committing to it. If the scope sounds too narrow, you can correct before work is wasted.

**Watch for the first output.**
The first file the AI touches reveals its frame. If it's adding a section rather than restructuring, interrupt immediately. The cost of interrupting early is far less than the cost of finding a systemic error after all files are touched.

**The "USB stick test" applies here too.**
If you handed the updated prompts to someone on a USB stick, would they work? Or would they fail because they reference a v3 system that doesn't exist in the package? This portability test catches half-migrated work.

---

## What Makes This Failure Mode Persistent

Interpretation substitution is the AI's dominant failure mode because it's the path of least resistance. Narrowing scope reduces complexity. The AI can produce a complete, well-structured output faster when the scope is small. There's no internal error signal — the AI doesn't feel the narrowing as wrong; it feels efficient.

The human catches it because the human holds the *frame* — the broader context that makes the narrow interpretation obviously insufficient. The AI holds the *task* — the specific thing to do right now. The gap between frame and task is where interpretation substitution lives.

This is also why it correlates with task ambiguity and brief directives. The more the scope lives in contextual implication rather than explicit statement, the more room the AI has to narrow without contradiction.

---

## The Productive Response

When you catch it: name it briefly, state what the frame should have been, and redirect. Don't over-explain — the AI will recognize the gap once you point to it. The value is in the correction arriving fast, not in the correction being elaborate.

When you suspect but aren't sure: ask "what's the scope of what you're about to do?" before the AI starts. This is cheaper than fixing it after.

When the AI catches itself: that's a Tier 5 developmental event worth noting. It means the meta-cognitive awareness is advancing. It should be rare at first and increasingly common over time.
