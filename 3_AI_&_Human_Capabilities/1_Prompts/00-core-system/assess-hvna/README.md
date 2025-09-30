# assess-hvna

**Purpose:** Strategic activation analysis for Identified High-Value Next Actions (IHVNAs)
**Prompt file:** `system.md`
**Version:** 1.1
**Created:** 2026-02-22

---

## What It Does

Reads the IHVNA register in SuperContext alongside the Catalytic Ideas Register, then moves each IHVNA from abstract registration to one of two concrete outcomes: **catalyzed into working context** (activation decision with a first move) or **cleanly dismissed** (recognized as a distraction, archived or released). Nothing stays in limbo after a session.

For each IHVNA, four steps in sequence:

1. **Assess** — applies SDD v3 profile standards to determine which Context Files level it belongs at, what phase artifacts already exist, and what full activation requires
2. **Align** — cross-checks against Level 1-3 Context Files for anchoring, gaps, and framing precision — informed by related Catalytic Ideas Register entries
3. **Discuss** — four implementation options: Activate Now / Partial Activation / Refine for Better Alignment / Defer
4. **Close** — executes the decision; if dismissed, optionally archives to the Catalytic Ideas Register as a future reinforcer

IHVNAs are processed one at a time in priority order. After all registered IHVNAs are assessed, the user is asked whether any new items should be registered or assessed now. The final summary table is always the last output.

---

## The Catalytic Ideas Register — Pattern Stage Two

`7_Applied_Knowledge/Catalytic_Ideas_Register.md` — created on first use.

The Catalytic Ideas Register holds **pattern stage two concepts** — insights that have been noticed and surfaced from lower-level work, assessed in a session, and set aside because they were not yet confirmed as either useful or repeatable patterns of value. They are not noise (noise gets rejected outright) and they are not yet validated patterns. They occupy the middle stage: recognized, held, not yet catalyzed.

This is part of a three-stage pattern lifecycle that is itself a novel system innovation — the **Pattern of Patterns architecture**:

- **Stage 1 — First Notice:** An insight crystallizes during work and is registered as an IHVNA in SuperContext. It is abstract and cursory — something seen, cataloged, not acted on.
- **Stage 2 — Assessed, Not Yet Validated:** The insight survives assess-hvna review (not dismissed as noise) but is not yet ready or right for activation. It enters the Catalytic Ideas Register — held for future resonance rather than lost.
- **Stage 3 — Reactivated or Confirmed:** On a future assess-hvna run, the Register is read back into context alongside the current IHVNA set. An archived idea may reframe an active IHVNA, surface a new connection, or be directly resurrected as a current IHVNA when conditions change.

The Register is read at Phase 0 on every future run, so stage-two concepts are live background context throughout each assessment session. A dismissed idea today may be the key lens for a different IHVNA tomorrow.

This feedback loop — noticed → registered → assessed → archived → resurfaced → informs new patterns — is itself a named IP asset of the AI Mastery System Architecture.

---

## When to Use

- "run assess-hvna"
- "IHVNA assessment"
- "evaluate my IHVNAs"
- "what should I activate next"
- After weekly review when IHVNA priorities may have shifted
- When the IHVNA register has grown and needs pruning

---

## Output

- Per-IHVNA: SDD v3 gap table + Context Files alignment status + four implementation options + decision execution
- SuperContext IHVNA entries updated with status, refinements, or dismissal
- Catalytic Ideas Register updated if any IHVNA is dismissed with archive intent
- New IHVNA entries added if user surfaces additional items
- Final summary table (always last)
- Checkpoint-update recommendation if significant decisions were made

---

## Related Prompts

| Prompt | Relationship |
|--------|-------------|
| `checkpoint-update` | Creates IHVNAs (Step 3.5 — Upward Intelligence Flow Capture) |
| `toolkit-accelerator` | Checks SDD compliance for what IS active; assess-hvna decides what to activate |
| `weekly-review` | Surfaces IHVNA readiness; assess-hvna does the activation detail work |

---

*AI Mastery Toolkit v4 — 00-core-system*
