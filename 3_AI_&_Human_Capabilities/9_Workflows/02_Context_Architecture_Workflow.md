# 02_Context_Architecture
## Workflow Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Diagnose which context failure mode is present and execute the correct recovery or transfer operation — compaction refresh, deliberate handoff, or active audit.
**Status:** Final
**Version:** v1
**Framework document:** `02_Context_Architecture_Framework.md`

---

## Workflow Overview

This workflow is a diagnosis-and-response sequence for three distinct context failure modes. The three modes require different responses — treating them as the same problem produces wrong remediation. The workflow's primary value is the diagnostic step: identify which failure mode is present before selecting a response.

**Who runs it:** Human detects the failure signal; AI executes the correct operation once the mode is identified.

**When it triggers:** On detection of any context failure signal — compaction event, window approaching limit, or output misalignment that suggests context drift.

---

## Inputs Required

- Awareness of current session state (how long has the session been running, what has been loaded, what has changed)
- SuperContext — required for all three operations
- Active task state — required for handoff document
- System files for targeted reload — required for post-compaction-refresh

---

## Step Sequence

### Diagnostic Gate (always run first)

Before selecting an operation, identify the failure mode:

**Is this a compaction?**
Signs: The conversation shows a summary or reset; context references that were working have broken; the AI reports a compaction occurred; the session history appears compressed.
→ If yes: **Mode 1 — Post-Compaction Refresh**

**Is this a deliberate transition?**
Signs: Token usage is visibly high and the work is not complete; you can see the window is approaching capacity; work must continue but this session cannot sustain it.
→ If yes: **Mode 2 — Context Window Handoff**

**Is this context drift?**
Signs: Outputs feel misaligned with the session's intent; the AI is referencing facts or decisions that were revised; the frame feels off but no compaction has occurred.
→ If yes: **Mode 3 — Context Usage Audit**

---

### Mode 1 — Post-Compaction Refresh: `post-compaction-refresh`

**Trigger:** Compaction detected mid-session.

**Step 1:** Stop all task work immediately. Do not resume task execution until context is rebuilt.

**Step 2:** Run `post-compaction-refresh`. Reload SuperContext, current state files, and any task-specific files that were active before the compaction. Reestablish the working state: active task, current decision point, files in use.

**Step 3:** Confirm working state is restored before resuming. The AI states what it now understands about the session state — human confirms or corrects.

**Step 4:** Resume task work from the confirmed state.

**Produces:** Rebuilt working context. Active task resumes with full context.

**Standard:** Non-negotiable — do not resume work without running this. Resuming after compaction without a refresh produces outputs based on the degraded context that compound throughout the remainder of the session.

---

### Mode 2 — Context Window Handoff: `context-window-handoff`

**Trigger:** Window approaching limit with work remaining; deliberate transition required.

**Step 1:** Run `context-window-handoff` before the window limit is reached. The handoff must be produced while sufficient context remains to describe the current state accurately.

**Step 2:** The handoff document captures:
- Active task and its current state (what's been done, what remains, where we are in the sequence)
- Key decisions made this session that must carry forward
- Files and references that must be reloaded in the new session
- Priority queue for the new session (what to address first)
- Any IHVNAs or flags that surfaced and were not yet captured

**Step 3:** Close this session. Do not run `ending-master-update` separately — the handoff subsumes the ending function for this session.

**Step 4:** Open new session. First action: load the handoff document. Second action: run `session-startup` with the handoff document as the primary context input.

**Step 5:** Confirm working state with the human before resuming task work.

**Produces:** Handoff document stored in `6_Session_Working_Files/`. Seamless task continuation in new session.

**Standard:** Run before the limit forces a compaction. Once a compaction occurs, handoff is no longer possible — Mode 1 (refresh) is the only option.

---

### Mode 3 — Context Usage Audit: `context-usage`

**Trigger:** Context feels misaligned — outputs are drifting, assumptions seem stale, or the session's frame has shifted from its intended orientation.

**Step 1:** Run `context-usage`. Audit what is currently loaded: which files are in context, what assumptions are active, what reference points the AI is operating from.

**Step 2:** Compare current state to intended state: what should be in context that isn't? What is in context but shouldn't be (active but irrelevant material crowding the window)? What assumptions need to be corrected?

**Step 3:** Apply corrections — reload missing files, surface and correct stale assumptions, reestablish the session's intended frame.

**Step 4:** Resume from the corrected context state.

**Produces:** Corrected working context. Outputs that follow should reflect the intended orientation rather than the drifted one.

**Standard:** Can be run proactively at the start of long sessions or when transitioning between significantly different task types in a single session.

---

## Output + Destination

| Mode | Operation | Output | Destination |
|------|-----------|--------|-------------|
| Compaction | `post-compaction-refresh` | Rebuilt working context | Active session |
| Handoff | `context-window-handoff` | Handoff document | `6_Session_Working_Files/` |
| Drift | `context-usage` | Corrected context + audit notes | Active session |

---

## Framework Document

The conceptual architecture behind this workflow — why the three failure modes are distinct, what each degrades, and the token economics of active context management — lives in:

**`02_Context_Architecture_Framework.md`** → `3_AI_&_Human_Capabilities/7_Frameworks/`
