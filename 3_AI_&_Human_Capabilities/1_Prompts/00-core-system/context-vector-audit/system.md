# Context Vector Audit Protocol

**Created:** 2026-03-11
**Last Updated:** 2026-03-11
**Purpose:** Systematic remediation and ongoing maintenance of Generation-Time Dependency Drift across the context file stack. Traces one content vector through all downstream documents per session, identifies divergences from the governing source, and executes targeted fixes.
**Status:** v2.0 — Vectors and log extracted to standalone files; system.md is protocol-only
**Invocation:** "Run context-vector-audit for [vector name or ID]" — or "run context-vector-audit" for vector selection from registry

---

## Architecture of This System

This audit system has three components. Each has a distinct role:

| File | Role | Grows over time? |
|------|------|-----------------|
| `system.md` (this file) | Protocol — how to run an audit; never holds data | No — protocol is stable |
| `Vector_Registry.md` | Authoritative list of all content vectors, governing sources, scope, and audit status | Yes — new vectors added as system grows |
| `Audit_Log.md` | Running log of all completed audit sessions; discrepancy records; fix history | Yes — new entry after every audit run |

**The protocol reads from the registry. The protocol writes to the log. The protocol never holds vectors or audit history in its own file.**

---

## Anti-Drift Design Principles

This system prevents drift. It cannot itself drift. The following constraints enforce that:

1. **Protocol reads from file, not from memory.** When this prompt is invoked, read `Vector_Registry.md` to get the current vector list — do not rely on any remembered vector definitions. The registry is the authoritative source.

2. **All outputs written to file before session ends.** The discrepancy report (Step 4) is written to `Audit_Log.md` as an IN PROGRESS entry before any fixes begin. The completion update (Step 6) is written before the session closes. No audit intelligence stays in conversation only.

3. **No inference about audit status.** A vector is CLEAN only if the Audit_Log shows a completed audit session. "It looks right" is not CLEAN. "I generated it this session so I know what it says" is not CLEAN. Only a file-verified comparison against the governing source counts.

4. **Single vector per session — hard constraint.** See below.

5. **Re-audit triggers are maintained in the registry.** When a governing source is updated, the AI updates the dependent vector's status in Vector_Registry.md to `RE_AUDIT_NEEDED` in the same session — not deferred to a later audit run.

6. **This protocol is always read from file.** Per Named Prompt Execution Standard (AI_Preferences): when "run context-vector-audit" is invoked, locate and read this file. Do not execute from memory or session context.

---

## Critical Design Constraint — One Vector Per Session

**One vector per session. This is not a preference — it is a structural requirement.**

The governing source for the selected vector must remain in active working memory throughout the entire audit. If multiple vectors are audited in sequence in the same session, the governing source for vector 1 degrades before vector 2 documents are assessed — reintroducing the exact dependency drift the protocol is designed to eliminate.

**Hard stop at vector boundary.** Begin a new session for the next vector.

---

## Execution Protocol — 6 Steps

### Step 0: Select Vector and Load Registry

Read `Vector_Registry.md` now. Not from memory — from the file.

If vector was specified in the invocation, confirm it exists in the registry and note its current status. If not specified, present the registry table to [User] and ask which vector to audit. Surface any vectors with status `DRIFT_FOUND` or `RE_AUDIT_NEEDED` first — these have priority over `NEVER_AUDITED`.

State clearly before proceeding: "Auditing [V#] — [Vector Name]. Governing source: [file path]. Documents in scope: [N]. Current status: [status]. Proceeding."

Do not output anything else during this step.

### Step 1: Load Governing Source — Direct Read Only

Read the governing source file(s) for the selected vector completely using the Read tool directly in the main session. Do not use a sub-agent to read the governing source.

**Why sub-agents are prohibited here:** Sub-agent summarization is structurally identical to the drift mechanism this protocol is designed to fix. The agent reads the governing file and returns a compressed interpretation; the audit then runs against that interpretation rather than the file itself. The audit would be validating downstream documents against an agent summary — not against the governing source. This is not an audit; it is one layer of drift checking another layer of drift.

The governing source must be read directly by the main session. The specific content — exact names, exact values, exact framing — must be in the main session's active working memory throughout Steps 2–5.

For ICP vectors: read the INDEX file and all referenced Chunk files. Know: exactly how many ICPs exist, their names, their characteristics, and — critically — what has been removed (previously-hallucinated segments).

**This is the session anchor. Every comparison in Steps 3–4 traces back to this direct load. Do not move to Step 2 until the governing source is fully read directly.**

Do not output anything to user during this step.

### Step 2: Identify Document Scope

Cross-reference the `Vector_Registry.md` entry for the selected vector to get the documents in scope. Confirm each file exists. If new documents exist that aren't in the registry scope list, add them before proceeding — the registry must reflect current reality.

```bash
# Confirm each listed document exists
ls "[toolkit-root]/[path-from-registry]" 2>/dev/null
```

If scope has changed from what's in the registry, update `Vector_Registry.md` now before the audit begins.

Do not output anything to user during this step.

### Step 3: Read and Compare Each Document

For each document in scope:
1. Read the document
2. Identify every instance where this vector's content is referenced
3. Compare each reference against the governing source loaded in Step 1
4. Classify: **VALID** | **DRIFT** | **ABSENT** (should reference but doesn't)

Complete the full read pass across all documents before beginning to fix anything. This ensures the discrepancy report in Step 4 is complete before any edits are made.

**What drift looks like by vector:**
- **V1 (ICPs):** Wrong ICP names, wrong segment descriptions, hallucinated segments (especially ICP2 tradesman), wrong count of ICPs
- **V2 (Business Model):** Coaching positioned as acquisition channel, wrong ascension sequence, missing tier in the model
- **V3 (Offer Catalog):** Wrong pricing, wrong tier names, offers that no longer exist
- **V4 (Messaging):** Value proposition language that doesn't match Key Message Platform, off-brand framing
- **V5 (OKRs):** Wrong KR targets, wrong deadlines, KRs that have been superseded

Do not output anything to user during this step.

### Step 4: Write IN PROGRESS Entry to Audit_Log — Then Present to [User]

**Write to `Audit_Log.md` first, then present to [User].**

Append an IN PROGRESS entry to `Audit_Log.md` with the full discrepancy data. Use the entry format defined in that file. Status: `IN PROGRESS`. This write happens before any fix is executed — if the session ends unexpectedly, the discrepancy record is preserved.

After writing, present a summary to [User]:

---

**Context Vector Audit — [V#] [Vector Name]**
**Governing source:** [file] — key facts confirmed: [2–3 lines of what the governing source actually says]
**Documents scanned:** [N] | **Documents with drift:** [N] | **Drift instances:** [N]

**Discrepancy table:**
| Document | Location | Governing source says | Document says | Class |
|----------|----------|-----------------------|---------------|-------|
| [file] | [section] | [correct] | [drift content] | DRIFT |

**Pattern:** [1 sentence — systematic or isolated?]
**Proposed fixes:** [specific list]

---

Pause. Confirm with [User] before executing fixes. Do not proceed until explicit confirmation received.

### Step 5: Execute Fixes

On [User]'s confirmation, execute each fix as a targeted Edit. Surgical edits only — change exactly what the governing source contradicts. Do not rewrite adjacent content, do not improve prose, do not add new content.

After each fix: re-read the edited passage and confirm the fix was applied correctly. Do not declare a fix complete without verification.

### Step 6: Write COMPLETE Entry and Update Registry

**Write to files before considering the session done.**

1. Update the IN PROGRESS entry in `Audit_Log.md` to COMPLETE. Add fix summary and any deferred items with reasons.

2. Update `Vector_Registry.md` — set the vector's audit status to the correct post-audit state:
   - All drift fixed → `REMEDIATED`
   - No drift found → `CLEAN`
   - Drift found but some deferred → `DRIFT_FOUND` (leave open until all fixes applied)
   - Update "Governing source version at last audit" field

3. If any new scope documents were discovered during the audit, confirm they are added to the vector's scope list in the registry.

The session is not complete until both files are updated.

---

## Invoking the Next Audit Session

At the end of each audit session, review `Audit_Log.md` session queue and confirm which vector is next. The AI should close the session with: "V[#] audit complete. Next in queue: V[#] — [Vector Name] (status: [status]). Invoke with 'run context-vector-audit for [vector name]' to begin."

This creates a clean handoff that survives compaction — the next session starts from the registry and log, not from conversation memory.

---

## Relationship to Other System Components

**Governed by:** AI_Preferences v24 — Pre-Generation Dependency Loading Standard (prevents new drift from occurring during document generation)

**Remediates:** Generation-Time Dependency Drift — documented in AI_Current_State_SW_v13.md (2026-03-11)

**Vector list maintained in:** `Vector_Registry.md` — read this file, do not use any other source for vector definitions

**Audit history in:** `Audit_Log.md` — read this file for prior audit results; write all new results here
