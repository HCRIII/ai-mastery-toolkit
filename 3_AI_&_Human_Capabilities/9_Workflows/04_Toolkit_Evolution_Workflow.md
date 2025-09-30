# 04_Toolkit_Evolution
## Workflow Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Execute the full pattern lifecycle from observation capture through three-output capability deployment — ensuring that every formalized capability is permanently embedded in the system.
**Status:** Final
**Version:** v1
**Framework document:** `04_Toolkit_Evolution_Framework.md`

---

## Workflow Overview

This workflow governs the full lifecycle by which a raw observation becomes a permanent, portable toolkit capability. The lifecycle has six steps and a hard evaluation gate at Step 3 — `capability-evolution` does not run on raw observations, only on IHVNAs that have been assessed and cleared for activation. The three-output standard (Framework + Operation + System Intelligence) is non-negotiable: partial output produces a capability that doesn't compound.

**Who runs it:** Both human and AI participate at different steps. Human makes activation decisions; AI executes formalization.

**When it triggers:** At any point in a session when a potentially repeatable, valuable pattern is observed — initiated at capture; completed in a dedicated capability-evolution session after assessment.

---

## Inputs Required

- The IHVNA entry (populated during observe/capture phase)
- `assess-hvna` activation verdict (required before Step 4)
- `official-pattern-template` — scaffolding for all three outputs
- Active system files for System Intelligence update (Human_Current_State, AI_Current_State, or AI_Trigger_Protocol depending on the capability type)

---

## Step Sequence

**Step 1 — Signal Noticed**

During active session work, a pattern emerges: a prompt sequence that reliably works better, an interaction structure that eliminates a recurring failure mode, a workflow adaptation with clear generalization value.

The question: "Is this repeatable beyond this session?"

If yes — capture it. If uncertain — capture it anyway. The evaluation gate (Step 3) is where quality control happens, not at the observation stage.

Do not interrupt current task work for a full evaluation here. The capture is a lightweight operation; the evaluation happens later.

---

**Step 2 — Capture: `suggest-pattern` or IHVNA Entry**

Run `suggest-pattern` to formally flag the observation, or add it directly as an IHVNA entry in SuperContext if the session is at a natural pause point.

IHVNA entry format (minimum):
- What was observed (specific, not abstract)
- Why it might be worth formalizing
- When it was observed (session context)
- Tentative type: toolkit capability / strategic initiative / other

The IHVNA entry preserves the observation across compaction and session boundaries. It is not a commitment to formalize — it is a commitment to evaluate.

**Produces:** IHVNA entry in SuperContext IHVNA queue.

---

**Step 3 — Evaluation Gate: `assess-hvna`**

At a formal strategic session (quarterly or when the IHVNA queue warrants dedicated review), run `assess-hvna` across the accumulated queue.

For each IHVNA, the verdict is one of three:

**Activate** — the pattern is well-understood, genuinely repeatable, and ready for formal development. Proceed to Step 4.

**Defer** — the pattern is promising but not yet well-understood enough to formalize. Flag for re-evaluation in the next cycle with a note on what additional observation would resolve the uncertainty.

**Refine** — the IHVNA needs reframing before it can be evaluated. Update the entry and re-assess in the same or next session.

**Hard rule:** `capability-evolution` does not run without an Activate verdict from this step.

---

**Step 4 — Formalization: `capability-evolution`**

In a dedicated session focused on capability development, run `capability-evolution` on the activated IHVNA.

This session produces all three outputs simultaneously. Do not close the session with partial output.

**Output 1 — Framework document:**
File created in `3_AI_&_Human_Capabilities/7_Frameworks/` using the naming convention `##_[CapabilityName]_Framework.md`. Covers: what the capability is, why it exists, when to engage it, calibration standards, and a link to the workflow counterpart.

**Output 2 — Operation:**
Process created in `3_AI_&_Human_Capabilities/1_Prompts/` (new prompt folder with `system.md`) or skill in `2_Skills/` depending on capability type. The operation names its framework document in its header. Use `official-pattern-template` for consistent structure.

**Output 3 — System Intelligence update:**
The relevant System Wisdom file is updated to reflect the new capability:
- New trigger condition → `5_System_Wisdom/6_Triggers/AI_Trigger_Protocol.md`
- New behavioral standard → `5_System_Wisdom/2_AI_Behavioral_Taxonomy/` or `5_System_Wisdom/3_Dyadic_Dynamic_Taxonomy/`
- New calibration data → `5_System_Wisdom/4_System_Intelligence/AI_Current_State.md` or `Human_Current_State.md`

The System Intelligence update is what makes the capability part of default operating posture — not something that must be re-invoked manually each session.

**Bidirectional link rule:** The Framework document names the Operation; the Operation names the Framework document. Both must be present before the session closes.

---

**Step 5 — Deployment: `ending-master-update`**

At session close, `ending-master-update` runs as normal. The specific deployment actions for this session:

- All three outputs are referenced in the session summary in SuperContext
- The IHVNA entry that was activated is marked as Complete and removed from the active queue
- Any version increments on modified System Wisdom files are logged
- The new capability is noted in the current state files as active

**Produces:** Permanently deployed capability. All three outputs are live. System files reflect the new capability as active.

---

**Step 6 — Verification (next session)**

At the next session's startup, confirm the new capability is behaving as intended:
- Does the AI's trigger protocol reflect the new capability's trigger condition?
- Does `session-startup` load the new framework file if relevant to active work?
- Is the operation accessible and producing expected output?

Minor adjustments at this stage are normal and should be captured in the system files. Major adjustments indicate the formalization was incomplete — revisit Step 4 outputs.

---

## Output + Destination

| Output | File | Destination |
|--------|------|-------------|
| Framework document | `##_[Name]_Framework.md` | `3_AI_&_Human_Capabilities/7_Frameworks/` |
| Operation | `[name]/system.md` or skill folder | `3_AI_&_Human_Capabilities/1_Prompts/` or `2_Skills/` |
| System Intelligence update | Modified system wisdom file | `5_System_Wisdom/` (relevant subfolder) |
| IHVNA marked complete | SuperContext update | `4_Context_Files/Level_0_Map_&_Preferences/SuperContext_v[n].md` |

---

## Framework Document

The conceptual architecture behind this workflow — the observation-to-capability gap, the three-output standard, what is lost when any output is skipped, and the IHVNA as the holding layer — lives in:

**`04_Toolkit_Evolution_Framework.md`** → `3_AI_&_Human_Capabilities/7_Frameworks/`
