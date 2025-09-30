# 02_Context_Architecture
## Framework Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Define context management as an active discipline and establish the conceptual model for maintaining working continuity across sessions and failure events.
**Status:** Final
**Version:** v1
**Procedural counterpart:** `02_Context_Architecture_Workflow.md`

---

## What This System Is

The Context Architecture system governs how working context is maintained, recovered, and transferred across the lifecycle of a session. Three processes compose this cluster:

- `post-compaction-refresh` — context recovery after a mid-session compaction event
- `context-window-handoff` — deliberate context transfer when a session must continue in a new window
- `context-usage` — active audit and correction when context feels misaligned mid-session

These three operations address distinct failure modes. They share a common purpose: ensuring that the AI's operating context reflects reality at all times, not a stale or partial version of it.

---

## The Problem It Solves

Context is not passive. A context window is not a permanent record — it is an active working state that degrades, resets, and can be deliberately managed. Most users treat context as something that happens to them rather than something they actively architect. This produces avoidable losses:

**Compaction blindness:** When a context window compacts, the transcript history is summarized, but the *active working state* — loaded files, established decisions, current task framing — is not preserved in the summary. Users often continue working as if nothing changed, producing inconsistent outputs that reflect the degraded context rather than the intended one.

**Handoff gap:** When a session approaches its context limit, most users simply open a new session and attempt to reconstruct from memory. This reconstructed context is always incomplete. The `context-window-handoff` process creates a structured document that carries the essential working state forward — but only if it is run before the limit is reached, not after.

**Silent drift:** Context can degrade without a hard compaction event. As sessions progress, the active working frame can shift: wrong assumptions baked in from earlier in the session, relevant files not loaded, reference points from previous sessions not reestablished. Without an active audit tool, this drift is invisible until it produces a bad output.

The common thread: context degradation is recoverable, but only with the right tool applied to the right failure mode. Treating all three as the same problem produces wrong remediation.

---

## The Architecture

Context failure modes are distinct events requiring distinct responses:

**Compaction (mid-session reset):**
A compaction occurs when the context window reaches its limit mid-session and the transcript is automatically summarized. The summary preserves conversation history in compressed form but does not preserve active working context: which files were loaded, what decisions were made, what the current task state was. `post-compaction-refresh` runs immediately after a compaction is detected to rebuild working context before any task work resumes.

**Handoff (deliberate transition):**
A handoff is a planned context transfer — chosen before the window limit forces a compaction. When a session's window is nearing its limit and work must continue, `context-window-handoff` produces a structured handoff document capturing: active tasks and their current state, key decisions made, files and references that must be reloaded, and the priority queue for the next session. The new session opens by loading this document before any other action.

**Degradation (active but misaligned):**
Context degradation is the subtlest failure mode. The session is active, no compaction has occurred, but the working frame has drifted. Wrong files are in context, stale assumptions are shaping outputs, the AI's orientation has shifted from the session's original intent. `context-usage` runs an active audit: what is currently loaded, what should be loaded, what is actively shaping responses. It surfaces drift before it compounds.

**Token economics as a discipline:**
Context architecture also encompasses active token management. Loading more context has cost — token cost and response quality cost when the window becomes crowded. The framework disciplines: which files are required at session open (mandatory loads), which are loaded conditionally (task-dependent), and when to handoff versus when to compress. The right posture is loading exactly what is needed for the current work, not maximizing what is loaded.

---

## When to Engage

**`post-compaction-refresh`:** Immediately upon detecting a compaction event — when the conversation resets, when context references suddenly break, or when the AI confirms that a compaction occurred. Do not resume task work before running this. Resuming without refresh produces outputs based on the degraded context.

**`context-window-handoff`:** When token usage is approaching the session limit and the work is not complete. Run it before the limit forces a compaction — once forced, handoff is no longer possible and refresh becomes the only option. The signal: when you can see the window is approaching capacity and there is still substantive work remaining.

**`context-usage`:** When outputs feel misaligned with intent, when references to earlier session work seem stale, or when the session's framing seems to have drifted from its original orientation. Also run at the start of any long session as a proactive audit — confirm that what should be in context actually is.

**When NOT to engage:**
- Do not run `post-compaction-refresh` as a routine session startup — it is specific to compaction events
- Do not run `context-window-handoff` as a replacement for `ending-master-update` — they serve different functions; a handoff is for continuity under pressure, not a substitute for session closing
- Do not run `context-usage` as a substitute for `session-startup` — startup is the primary context-loading operation; context-usage is an audit tool for when something feels wrong

---

## Calibration Standards

**What good context architecture looks like:**
- Compaction events, when they occur, are detected immediately and refreshed before task work resumes
- Handoffs produce a document that the new session can load and resume from without reconstruction
- Context audits run proactively when sessions are long or when the work requires high accuracy on prior decisions
- Token loads are intentional — what's in context is what's needed, not everything that's available

**Drift signals:**
- Outputs begin referencing facts or decisions that were revised earlier in the session → context drift; run `context-usage`
- A new session can't locate the state from the previous one → `ending-master-update` did not run, or ran incompletely
- Sessions regularly hit compaction before work completes → handoffs should be running earlier; the compaction is avoidable
- `post-compaction-refresh` takes more than 5 minutes → system files are not well-structured for rapid reload

**Quality standard:** The test of healthy context architecture is whether a compaction or session transition is a minor interruption rather than a significant setback. If a compaction regularly loses meaningful work, the architecture is not being actively managed.

---

## Procedural Counterpart

The diagnostic decision tree and step sequences for all three context failure modes live in:

**`02_Context_Architecture_Workflow.md`** → `3_AI_&_Human_Capabilities/8_Workflows/`

This document and that workflow name each other. The framework explains the system; the workflow provides the diagnosis-and-response sequence for each failure mode.
