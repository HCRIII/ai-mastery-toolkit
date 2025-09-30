# 08_Mid_Session_Operations
## Workflow Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Match a mid-session signal to its correct responsive operation, execute the operation, and integrate the output back into the active session without fracturing flow.
**Status:** Final
**Version:** v1
**Framework document:** `08_Mid_Session_Operations_Framework.md`

---

## Workflow Overview

This workflow is a signal-to-operation decision table. Each mid-session operation activates on a specific signal; the primary skill is accurate signal identification before invoking any operation. The secondary skill is clean integration back into the active session after the operation completes.

The default behavior is always: continue. Invoke a mid-session operation only when the signal is clear and present. When in doubt, continue — the end-of-session harvest captures what matters.

**Who runs it:** Either human or AI can recognize a signal; human confirms the operation; AI executes.

**When it triggers:** Any time during active session work when one of the five specific signals is clearly present.

---

## Inputs Required

- Clear identification of which signal is present (see decision table below)
- The current task state (what is in progress, what was just produced or decided)
- For `mid-reusable-asset-creation`: the solution to be formalized
- For `mid-system-change-with-rationale`: the structural change that surfaced
- For `responding-to-user-corrections`: the correction that arrived

---

## Signal-to-Operation Decision Table

Identify the signal first. Then invoke the matched operation.

| Signal | Operation | When NOT to invoke |
|--------|-----------|-------------------|
| Direction feels certain and unverified | `mid-challenge-my-thinking` | When direction feels uncertain (uncertainty → clarify, not challenge) |
| Output is directionally right but below quality threshold | `mid-iterate-on-output` | When direction itself is wrong (wrong direction → address upstream framing) |
| One-off solution has clear generalization value | `mid-reusable-asset-creation` | Routine deliverable filing; asset without reuse value |
| Task has surfaced a structural change to how the toolkit works | `mid-system-change-with-rationale` | Minor preferences or style adjustments |
| A correction arrives that requires classification before integration | `responding-to-user-corrections` | Clear refinements that naturally integrate into current flow |

---

## Step Sequence by Operation

### `mid-challenge-my-thinking`

**Step 1 — Confirm signal:** Direction is established and feels certain. Verification has not occurred.

**Step 2 — Run `mid-challenge-my-thinking`.** Apply structured challenge to the current direction:
- What assumptions is this direction making?
- What are the 2–3 strongest alternative approaches or conclusions?
- What would need to be true for this direction to be wrong?
- What failure modes does this direction not account for?

**Step 3 — Evaluate challenge output:**
- If the challenge reveals a flaw: revise the direction. Apply the revision as a constraint or correction before continuing.
- If the challenge confirms the direction: note the confirmation, resume with increased confidence.

**Step 4 — Resume** from the revised or confirmed direction. The challenge output is not the deliverable — it is input to the deliverable.

Integration note: Do not discard the challenge output. If a significant assumption was identified, it is worth noting in the session's capture for the ending-master-update.

---

### `mid-iterate-on-output`

**Step 1 — Confirm signal:** Output is produced. Direction is correct. The execution has a visible quality gap.

**Step 2 — Identify the gap specifically:** What exactly is below threshold? (e.g., too abstract, wrong level of detail, missing a key dimension, tone is off, structure is unclear) A specific gap produces a targeted iteration; a vague "it could be better" does not.

**Step 3 — Run `mid-iterate-on-output`.** Apply targeted improvement to the existing output:
- Work from the current output as the baseline — do not start from scratch
- Address the specific gap identified in Step 2
- Produce an iterated version

**Step 4 — The iterated output replaces the previous version** as the current baseline. Resume from this new baseline.

Integration note: If iteration reveals that the direction itself is the issue (not the execution), this is no longer a `mid-iterate-on-output` situation — it is an upstream framing problem. Stop iteration; address the direction first.

---

### `mid-reusable-asset-creation`

**Step 1 — Confirm signal:** A solution produced for the current specific context would clearly work for future instances of the same problem type, with only surface-level adaptation.

**Step 2 — Generalize the solution:**
- Strip session-specific particulars (specific names, dates, context-specific details)
- Identify the reusable structure or pattern
- Add brief usage notes: what type of problem does this solve? What adaptations does a future user need to make?

**Step 3 — Save to the appropriate toolkit location:**
- Template → `3_AI_&_Human_Capabilities/` (appropriate subfolder)
- Reference document → `8_Support_Documents/`
- Reusable prompt → `3_AI_&_Human_Capabilities/1_Prompts/`
- If the asset has generalization value that warrants a full three-output capability: flag as IHVNA for `04_Toolkit_Evolution_Workflow.md`

**Step 4 — Resume current task.** Asset creation is a parallel capture. The current task continues from its pre-asset-creation state — do not treat the asset creation as a session pause.

---

### `mid-system-change-with-rationale`

**Step 1 — Confirm signal:** The current task has surfaced a change to how the toolkit operates — not a preference about the current output, but a structural change.

**Step 2 — Classify the change:**

**Immediate** (apply in this session): The change is clear, low-risk, and reversible. Applying it now prevents the problem from recurring in this session or the next.

**IHVNA** (capture for formal evaluation): The change is significant, has architectural implications, or requires deliberate design before applying. Applying it now would be premature.

**Step 3 — Act on the classification:**

*Immediate:* Apply the change. Document the rationale in a brief note (what changed, why, what it replaces or corrects). Update the relevant system file. Flag in the ending-master-update.

*IHVNA:* Add to SuperContext IHVNA queue with the following:
- What the change is
- Why the current state is a problem
- What the change would need to resolve before it can be formally applied
- The session context in which it surfaced

**Step 4 — Resume current task.** The system change is captured or applied; it does not replace the current session's work.

---

### `responding-to-user-corrections`

**Step 1 — Confirm signal:** A correction has arrived from the user that is not clearly a simple refinement to the current task.

**Step 2 — Classify the correction:**

**(a) Refinement to current task:** The correction adjusts or clarifies the current direction without changing the task. Integrate naturally and continue. No separate step sequence needed.

**(b) New separate task:** The correction introduces a distinctly different task that should be addressed before returning to the current one. Pause current task — note the current state. Address the new task. Return to the paused task with a confirmation of current state before resuming.

**(c) Capture item:** The correction identifies something worth noting (an error in a past output, a preference to encode, a pattern to flag) but does not require immediate action in this session. Capture it — IHVNA entry, or note in the ending-master-update — and continue the current task.

**Step 3 — Apply the classification:**

For (a): Integrate and continue.
For (b): State the pause and the current task state before switching. "Pausing [current task] at [current state]. Addressing: [new task]. Will return to [current task] after."
For (c): Capture the item. Confirm with user that it is captured and that the session is continuing the current task.

**Step 4 — Resume** according to classification.

---

## The Flow-Preservation Rule

Each operation above has a cost: a break in the current task's momentum. The cost is justified when the signal is genuine and clear. It is not justified on marginal signals.

If the signal is marginal: continue. The end-of-session harvest (`daily-debriefing`, `ending-master-update`) is the right tool for things that matter but can wait. Not every observation needs to be acted on mid-session.

The test: if you could complete the current task first and then address the signal, the signal is probably not mid-session-operation-level clear. If completing the task first would produce a worse outcome than addressing the signal now, it is.

---

## Output + Destination

| Operation | Output | Destination |
|-----------|--------|-------------|
| `mid-challenge-my-thinking` | Revised or confirmed direction | Active session (input to current task) |
| `mid-iterate-on-output` | Iterated output (replaces previous) | Active session (new baseline) |
| `mid-reusable-asset-creation` | Generalized reusable asset | Appropriate toolkit location |
| `mid-system-change-with-rationale` | Applied change or IHVNA entry | System file (if immediate) or SuperContext IHVNA queue (if deferred) |
| `responding-to-user-corrections` | Integrated correction / paused task / captured item | Active session; SuperContext IHVNA queue if captured |

---

## Framework Document

The conceptual model for this workflow — why mid-session operations are a distinct category, the flow-preservation principle, and the precise signal for each operation — lives in:

**`08_Mid_Session_Operations_Framework.md`** → `3_AI_&_Human_Capabilities/7_Frameworks/`
