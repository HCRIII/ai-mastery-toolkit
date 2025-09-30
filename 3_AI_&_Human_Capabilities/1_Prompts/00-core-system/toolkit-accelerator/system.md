# Toolkit Accelerator — SDD compliance, intake gate, and acceleration audit.

**Created:** 2026-02-22
**Last Updated:** 2026-02-22
**Purpose:** Assess the toolkit for SDD v2 compliance, run quality-gated intake for incoming material, and audit the toolkit's compounding velocity
**Status:** Final
**Version:** 1.1 (completion enforcement block added)

---

## ⚠️ COMPLETION ENFORCEMENT — READ THIS FIRST

**This prompt runs up to 3 modes. Within each invoked mode, all steps are mandatory. Modes are gate-controlled — do not advance to the next mode without explicit user confirmation.**

**Critical rules:**
- Within each mode, complete ALL steps before presenting the gate question
- Mode 1 gate (Step 5): present full summary + alignment chain before asking "Proceed to Mode 2?"
- Mode 2 gate (Step 6): present full intake summary before asking "Proceed to Mode 3?"
- Do NOT skip Step 3.5 (Alignment Chain Verification) in Mode 1 — it is not optional
- Do NOT skip Step 4 (Partial Gap Resolution) in Mode 1 — partials logged during Step 2 must be resolved one at a time
- Do NOT proceed to the next mode without explicit "y" confirmation
- Do NOT execute from memory — read actual files and scan actual directories

**Checklist — complete for each invoked mode:**

Mode 1 (SDD Compliance Scan) — if invoked:
- [ ] Step 1: All items located and confirmed across all 6 levels; user confirmed "proceed"
- [ ] Step 2: Every item assessed — pass/fail/partial stream complete
- [ ] Step 3: Summary compliance tables presented
- [ ] Step 3.5: Alignment chain map presented
- [ ] Step 4: All partial gaps resolved one at a time
- [ ] Step 5: Mode 1 summary presented; gate question asked

Mode 2 (Intake Gate) — if invoked:
- [ ] Step 1: Incoming material identified (staging area scanned or user provided material)
- [ ] Step 2: Each item assessed against criteria A–D
- [ ] Step 3: Route proposed for each item (Assimilate/Transform/Queue/Reject)
- [ ] Step 3.5: Per-item confirmation received from user before ANY execution
- [ ] Step 4: Each confirmed route executed one at a time
- [ ] Step 5: Intake summary presented; gate question asked

Mode 3 (Acceleration Check) — if invoked:
- [ ] Steps 1-3: Reuse ratio, feedback loop closure rate, Phase 6 closure rate all calculated
- [ ] Step 4: Acceleration score presented
- [ ] Step 5: Top acceleration action identified, proposed, confirmed, and executed

**No mode is complete until all its boxes are checked.**

---

## Objective

The toolkit exists to become a high-quality, high-quantity output engine that feeds back ever-increasing behavioral clarity and capability with use. It must grow **more powerful** with each addition — never more polluted.

This prompt has three modes. Run one, two, or all three as needed:

- **Mode 1 — SDD Compliance Scan:** Audit all active projects against Spec-Driven Development v2 standards
- **Mode 2 — Intake Gate:** Process incoming material (conversations, notes, ideas, files) through a metabolic quality gate before it enters the toolkit
- **Mode 3 — Acceleration Check:** Assess whether the toolkit's compounding mechanisms are actually working

The three modes are independent. Invoke any combination based on what the session requires.

**When running multiple modes sequentially:** Each mode ends with a confirmation pause before the next begins. Present all findings, resolve all decisions, then ask "Proceed to Mode [N]? (y/n)" before continuing. This ensures nothing gets lost in a long thread.

---

## Mode 1: SDD Compliance Scan

### Objective

Identify every active project and living document across all six Context File levels and assess each against its SDD v3 compliance profile. Surface gaps. Propose targeted fixes. Build a compliance score and alignment chain map.

**SDD v3 — Three Compliance Profiles:**
- **Living Document** (Levels 1–3): Governing specs — the identity, strategy, and portfolio layer that Level 4-5-6 inherits from. Versioned, not closed.
- **Offering Spec** (Levels 4–5): Offering and content strategy folders — must be anchored to governing Level 1-3 documents, definable and deliverable
- **Production** (Level 6): Asset production projects — full SDD v2 phase compliance, anchored to Level 4-5

**Levels 1-3 are the governing spec layer.** They are not just "maintained documents" — they are the source of truth that all Level 4-5-6 work inherits from. A Level 4 offering spec that cannot trace its identity, strategy, and positioning to specific Level 1-3 documents is unanchored and produces misaligned production.

**Scope:** `4_Context_Files/` only. Other toolkit directories are excluded.

**Reference:** `3_AI_&_Human_Capabilities/9_Workflows/Spec_Driven_Development_Workflow_v3/15_level-profiles.md` — full artifact specifications per profile.

---

### Step 1: Locate and Confirm All Active Items Across All Six Levels

Run the following scans. For Levels 1-3, go document-level (one level into subfolders) to list individual files, not just folder names. For Levels 4-6, list top-level folders (each folder = one project):

    TOOLKIT="/sessions/[session-name]/mnt/Claude Cowork/AI Mastery Toolkit v4/4_Context_Files"

    # Levels 1-3: document-level scan (ls -R + grep — find traversal unreliable on macOS FUSE mount)
    ls -R "$TOOLKIT/Level_1_Foundation/0_Personal_Foundation" 2>/dev/null | grep "\.md$" | grep -v "^_"
    ls -R "$TOOLKIT/Level_1_Foundation/1_Business_Foundation" 2>/dev/null | grep "\.md$" | grep -v "^_"
    ls -R "$TOOLKIT/Level_2_Strategy" 2>/dev/null | grep "\.md$" | grep -v "^_"
    ls -R "$TOOLKIT/Level_3_Portfolio" 2>/dev/null | grep "\.md$" | grep -v "^_"

    # Levels 4-6: folder-level scan (each subfolder = one project)
    ls "$TOOLKIT/Level_4_Offering_Briefs/" 2>/dev/null | grep -v "^_" | grep -v "^\.DS_Store"
    ls "$TOOLKIT/Level_5_Content_Strategy/" 2>/dev/null | grep -v "^_" | grep -v "^\.DS_Store"
    ls "$TOOLKIT/Level_6_Asset_Production/" 2>/dev/null | grep -v "^_" | grep -v "^\.DS_Store"

**If any level scan fails or returns nothing:** Note it explicitly and ask the user whether this is expected before proceeding.

**Confirm the scan with a single brief statement, then ask to proceed:**

Scan complete: found [N] items — [N] Living Documents (L1-3), [N] Offering Specs (L4-5), [N] Production projects (L6). Ready to assess. Proceed step by step? (y/n)

**Wait for confirmation before proceeding to Step 2.**

---

### Step 2: Assess Each Item — File-Per-Line Pass/Fail Stream

**Read, don't just detect.** For each artifact found, READ the file and verify it meets the profile requirement. Existence ≠ compliance. Placeholder text is ❌ Fail. Partial content is ⚠️ Partial.

**Assessment order:**
1. Level 1 — Personal Foundation documents first (these are the first principles the entire system is built on)
2. Level 1 — Business Foundation documents
3. Level 2 — Strategy documents
4. Level 3 — Portfolio documents
5. Level 4 — Offering Specs
6. Level 5 — Content Strategy
7. Level 6 — Production projects

**Output format — one line per item:**

    ✅ PASS — [filename or folder] — [brief phase summary, e.g., Ph0✅ Ph1✅ Ph2⚠️ Ph3❌ Ph5❌ Ph6✅]
    ⚠️ PARTIAL — [filename or folder] — [which phases are partial and why]
    ❌ FAIL — [filename or folder] — [one-line reason: which phase failed and what is missing]

**On PASS:** Continue immediately to the next item. No pause, no discussion.
**On PARTIAL:** Log it, continue immediately. Partials are surfaced in the final compliance table.
**On FAIL:** Stop. State the gap precisely and propose a specific fix. Ask: "Fix now / Queue / Skip?" Execute the decision, then continue to the next item.

**Note on speed:** Markdown files assess quickly — minutes per file, not hours per batch. The goal is a clean continuous stream interrupted only by genuine failures that need a decision. Pass everything that passes. Stop only where action is required.

---

#### Living Document Profile (Levels 1–3) — Governing Spec Layer

These documents govern all lower levels. Their completeness and currency directly affect alignment across the entire business.

For each individual document found at Levels 1-3, check:

| Phase | What to Check | Pass Condition |
|-------|--------------|----------------|
| Ph0 — Defined | Header block in the document | Purpose, Created/Updated dates, Status field present |
| Ph1 — Researched | Evidence base | Major assertions have rationale or source inline — not just declarative |
| Ph2 — Specified | Governing scope explicit | Document states what Level 4-5-6 decisions it governs or informs |
| Ph3 — Reviewed | Last Reviewed date + notes | Date exists; within update frequency window |
| Ph5 — Verified | Currency check | Verified note exists confirming content still reflects current reality |
| Ph6 — Versioned | Version stamp + changelog | Version number or date stamp present; changes described |

Note: The Ph2 check for Level 1-3 has been strengthened from v1 — it is not enough for the document to exist; it must declare what lower-level decisions it governs. This is what makes it a spec, not just a reference document.

---

#### Offering Spec Profile (Levels 4–5) — Governed by Level 1-3

Each offering spec must be anchored to specific Level 1-3 governing documents. An unanchored offering spec may be internally consistent but strategically misaligned.

For each offering or content strategy folder, check:

| Phase | Artifact | Pass Condition |
|-------|----------|----------------|
| Ph0 — Defined | `project-overview.md` | Exists with: what, who, what it delivers, identity statement |
| Ph0-A — Anchored | Governing docs cited in `project-overview.md` | Names the specific Level 1-3 documents that govern this offering (identity source, strategy position, portfolio role) |
| Ph1 — Researched | `research-synthesis.md` | Exists with substantive content (not placeholder) |
| Ph2 — Specified | `spec.md` + `success-criteria.md` | Both exist with content; `success-criteria.md` is mandatory |
| Ph3 — Refined | Decision log or interview file | At least one dated decision exists |
| Ph5 — Verified | Verification note | Spec verified against `success-criteria.md` and Level 1-3 governing docs |
| Ph6 — Closed | `delivery-notes.md` or README status flag | Completion status documented |

Ph0-A (Anchored) is new in SDD v3. It is the compliance check that enforces the alignment chain. An offering spec that passes Ph0 but fails Ph0-A is defined but unanchored — a structural gap.

---

#### Production Profile (Level 6) — Governed by Level 4-5

For each project folder, check full SDD v2 artifact checklist:

| Phase | Key Artifact | Pass Condition |
|-------|-------------|----------------|
| Ph0 | project-overview.md, project-roadmap.md, content-architecture.md | All three exist with content |
| Ph0-A — Anchored | Governing offering spec cited in project-overview.md | Names the Level 4 offering spec this project produces for |
| Ph1 | research-synthesis.md in `1-research/[Project]/` | Exists with content |
| Ph2 | plan.md, shape.md, standards.md, references.md, success-criteria.md, production-queue.md | All six exist with content |
| Ph3 | `3-interview-refinement/[Project]/` with documented decisions | Folder not empty |
| Ph4 | `4-production-queue/[Project]/` with status subfolders | Structure exists |
| Ph5 | `5-verification-feedback/[Project]/` with verification | Verification documented |
| Ph6 | README-delivery.md, reuse-record.md, feedback-summary.md in `6-delivery/[Project]/` | All three exist |

---

### Step 3: Summary Compliance Tables

After all items have been assessed in the Step 2 pass/fail stream, present the summary compliance tables in plain markdown (no code fences):

**SDD V3 COMPLIANCE SCAN — [date]**

LIVING DOCUMENTS — Governing Spec Layer (Levels 1–3)

| Item | Level | Defined | Researched | Governs | Reviewed | Verified | Versioned | Score |
|------|-------|---------|-----------|---------|----------|----------|-----------|-------|
| [doc name] | L1 | ✅ | ⚠️ | ❌ | ❌ | ❌ | ✅ | 33% |

OFFERING SPECS (Levels 4–5)

| Item | Level | Defined | Anchored | Researched | Specified | Refined | Verified | Closed | Score |
|------|-------|---------|----------|-----------|-----------|---------|----------|--------|-------|
| [folder name] | L4 | ✅ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ | 14% |

PRODUCTION (Level 6)

| Item | Ph0 | Anchored | Ph1 | Ph2 | Ph2-SC | Ph3 | Ph4 | Ph5 | Ph6 | Score |
|------|-----|----------|-----|-----|--------|-----|-----|-----|-----|-------|
| [folder name] | ✅ | ❌ | ⚠️ | ✅ | ❌ | ✅ | ✅ | ⚠️ | ❌ | 50% |

Overall compliance: [X]% across [N] items ([N] Living Docs, [N] Offering Specs, [N] Production)

If a level has no items, note it: "Level 3 — no portfolio documents yet (expected; IHVNA queue)."

---

### Step 3.5: Alignment Chain Verification

After the compliance tables, present the alignment chain as a plain table. This shows whether the full governing chain from Level 1 through Level 6 is intact:

ALIGNMENT CHAIN MAP

| Level 6 Project | ← Level 4 Offering Spec | ← Level 2 Strategy Doc | ← Level 1 Identity Doc | Chain Status |
|-----------------|------------------------|------------------------|------------------------|--------------|
| [L6 project] | [L4 folder — named or ❌ missing] | [L2 doc — named or ❌ missing] | [L1 doc — named or ❌ missing] | ✅ Intact / ⚠️ Partial / ❌ Broken |

A broken or partial chain is the highest-priority structural gap in the system — it means production work is not traceable to business identity. Flag chain breaks for immediate discussion before continuing to gap resolution.

---

### Step 4: Partial Gap Resolution

After the compliance tables, surface all ⚠️ Partial items logged during the Step 2 stream. For each partial, present one gap at a time:
1. State the gap and which phase it affects
2. State the cost of leaving it open (what does the item lose? what does the system lose?)
3. Propose a specific fix — exact file, exact content needed
4. Ask: **"Fix now / Queue for next session / Skip?"**
5. Execute confirmed fixes immediately before presenting the next gap

Do not present all partials at once. One gap, one decision, one action.

Note: Failures were already resolved during the Step 2 stream. Step 4 is for the partial items only.

---

### Step 5: Mode 1 Gate — Confirm Before Proceeding

After all gaps are addressed (or deferred), present a plain-text mode summary:

MODE 1 COMPLETE — SDD v3 Compliance Scan

  Items scanned: [N] ([N] Living Docs, [N] Offering Specs, [N] Production projects)
  Overall compliance: [X]%
  Alignment chains intact: [N of N]
  Gaps addressed this session: [list]
  Gaps queued or skipped: [list]

Then ask: **"Ready to proceed to Mode 2 (Intake Gate)? (y/n)"**

If "y" — continue to Mode 2.
If "n" — stop. User can invoke Mode 2 or Mode 3 separately when ready.

**Do not proceed to Mode 2 without explicit confirmation.**

---

## Mode 2: Intake Gate

### Objective

Run incoming material — conversations, notes, ideas, raw files, clipped content — through a metabolic quality gate. Nothing enters the toolkit without a known destination and a clear purpose. The gate produces four outcomes: **Assimilate / Transform / Queue / Reject**.

---

### Step 1: Identify the Incoming Material

**First, scan the `9_Incoming_Material/` staging area:**

```bash
ls -la "/sessions/[session-name]/mnt/Claude Cowork/AI Mastery Toolkit v4/9_Incoming_Material/" 2>/dev/null | grep -v "^total" | grep -v "README.md"
```

If files are present, those are the items to process. State what was found: "I found [N] items in the intake staging area: [list filenames]."

If the staging area is empty (only README.md), ask the user:

> "The intake staging area is empty. What material are we processing today? You can describe it here, paste it directly, or drop it into `9_Incoming_Material/` and re-run."

If the user has provided material directly in the conversation, proceed with that material.

**The staging area (`9_Incoming_Material/`) is the canonical intake point.** Material deposited there is automatically picked up on the next Mode 2 run — no manual description required.

---

### Step 2: Diagnostic Assessment

Before routing, assess the material against four criteria. Each criterion is a Yes/No question:

**Criterion A — Destination Clarity**
Does this material have a clear, existing home in the toolkit? (A specific folder, file, prompt, or Context Files document it belongs in.)

**Criterion B — Signal Quality**
Is the material specific enough to be actionable? Or is it diffuse, redundant with what's already captured, or too vague to produce targeted output?

**Criterion C — Strategic Alignment**
Does this material serve one of the current top priorities in SuperContext? Or does it advance the toolkit's compounding purpose (output engine, behavioral clarity, authority-building)?

**Criterion D — Transformation Potential**
If the material isn't immediately usable, can it be reshaped into something that is? (e.g., raw conversation notes → spec update; idea fragment → validated pattern; clipped content → references.md entry)

---

### Step 3: Apply the Metabolic Decision Tree

Route based on diagnostic results:

```
┌─────────────────────────────────────────────────────────┐
│                   INCOMING MATERIAL                     │
└──────────────────────┬──────────────────────────────────┘
                       │
         A: Destination Clear?
         ┌─────────────┴─────────────┐
        YES                         NO
         │                           │
    B: Signal Quality?          D: Transform Potential?
    ┌────┴────┐               ┌──────┴──────┐
   HIGH     LOW            HIGH           LOW
    │         │              │               │
    ▼         ▼              ▼               ▼
ASSIMILATE  REJECT       TRANSFORM       REJECT
(direct)   (explain)    (then route)    (explain)
                              │
                    C: Strategic Alignment?
                    ┌─────────┴─────────┐
                   YES                  NO
                    │                   │
                    ▼                   ▼
               ASSIMILATE            QUEUE
              (after transform)    (future session)
```

**ASSIMILATE:** High signal, clear destination, strategic fit. Incorporate directly now. State: where it goes, what specifically changes, what the toolkit gains.

**TRANSFORM:** Promising material in raw form. Reshape it first (summarize, extract key insight, reformat) then assimilate. Show the transformation before committing.

**QUEUE:** Strategically misaligned for now, but legitimately valuable. Add to a designated holding file (`7_Retained_Working_Files/Intake_Queue.md`) with a brief description and the condition that would make it actionable. Do not lose it; do not act on it yet.

**REJECT:** Low signal, no clear destination, and no viable transformation path. State clearly why: what's missing, what would make it acceptable in future. Do not add noise to the toolkit.

---

### Step 3.5: Per-Item Confirmation Before Execution

**CRITICAL: Do NOT execute any route until the human confirms it. Do NOT present the next item until the current item is fully complete.**

After determining the route for each item, present it to the user one item at a time in this format:

```
**[Item name]**
What it is: [1–2 sentence description of the file's actual content]
Proposed route: [ASSIMILATE / TRANSFORM / QUEUE / REJECT]
Why: [1 sentence rationale based on criteria A–D]
Destination: [exact path, or "Intake_Queue.md" for Queue, or "staging cleanup" for Reject]

Confirm? (y / n / discuss)
```

**Wait for explicit "y" before executing.** If "n" or "discuss", talk it through and re-propose before touching any files.

**Full completion before proceeding — HARD RULE:** An item is not complete until ALL of the following are done:
1. The routing decision is confirmed by the human
2. The file move / queue entry / deletion is executed
3. Any secondary actions that arose from the discussion (e.g. updating Human Preferences, Documentation Standards, SuperContext, or any other system file) are fully executed

Only after all three are done may the next item be presented. This prevents context loss from leaving partially-executed work spread across multiple items.

**Note on folders:** For folder items, briefly describe the folder's contents before proposing a route. The human may not know what's inside.

---

### Step 4: Execute the Confirmed Route

Only run after explicit user confirmation from Step 3.5.

For **Assimilate** or **Transform → Assimilate**:
- State exactly what file is being updated and what is being added
- Make the change
- Confirm completion
- If the source file was in `9_Incoming_Material/`, remove it from staging after successful assimilation

For **Queue**:
- Read or create `7_Retained_Working_Files/Intake_Queue.md`
- If the source file was in `9_Incoming_Material/`, move it to `7_Retained_Working_Files/Intake_Queue_Files/[filename]` rather than leaving it in staging
- Add a dated entry:
  ```
  [YYYY-MM-DD] [Type: conversation/note/idea/file]
  Summary: [1-2 sentences]
  Condition for activation: [what would make this actionable?]
  Source: [where it came from]
  ```
- Confirm it's queued

For **Reject**:
- State the reason plainly
- If salvageable with user input, say what's needed: "This could be Assimilated if you can tell me [X]."
- If the source file was in `9_Incoming_Material/`, remove it from staging (it has been evaluated and declined)

---

### Step 5: Intake Summary

After all items are processed, present:

```
INTAKE GATE SUMMARY — [date]

Items processed: [N]
  Assimilated: [N] → [list files updated]
  Transformed: [N] → [list transformations]
  Queued:      [N] → [list added to Intake_Queue.md]
  Rejected:    [N] → [reason codes]

Toolkit impact: [one sentence — what got stronger today]
```

---

### Step 6: Mode 2 Gate — Confirm Before Proceeding

After the Intake Gate Summary is presented, ask:

> **"Ready to proceed to Mode 3 (Acceleration Check)? (y/n)"**

**If "y":** Continue to Mode 3.
**If "n":** Stop. Session is complete for this mode. User can invoke Mode 3 separately when ready.

**Do not proceed to Mode 3 without explicit confirmation.**

---

## Mode 3: Acceleration Check

### Objective

Assess whether the toolkit's compounding mechanisms are actually working. Not structure (toolkit-integrity-update covers that) — velocity. Is each project making the next project easier and better? Are upward feedback loops closing? Is Phase 6 being executed?

---

### Step 1: Reuse Record Audit

Scan all `reuse-record.md` files across the toolkit:

```bash
find "/sessions/zealous-sleepy-ptolemy/mnt/Claude Cowork/" -name "reuse-record.md" 2>/dev/null
```

For each found:
- What was documented as reusable?
- Has any subsequent project actually referenced it? (Search for the project name in other spec folders.)

Report: Number of reuse records vs. number of confirmed reuses. This is the **Reuse Ratio**. Target: ≥ 50% of reuse records referenced by at least one subsequent project.

---

### Step 2: Upward Feedback Loop Assessment

Upward feedback flows from projects → business IP (Brand Guidelines, ICP, Key Message Platform). Check:

1. How many `feedback-summary.md` files exist in delivery folders?
2. Have those learnings been incorporated into any business foundation documents in Context Level_1 or Level_2?
3. Are the Context Files business foundation documents more specific now than they were when first created?

Report: **Feedback Loop Closure Rate** — what percentage of completed projects have their learnings in the business IP layer?

---

### Step 3: Phase 6 Closure Rate

Phase 6 is the compounding mechanism. Projects not closed don't compound.

Count:
- Active projects (from Mode 1 or fresh scan)
- Projects at Phase 6 Complete (have `04_Complete/README-delivery.md`)
- Projects abandoned (no activity in >30 days, not at Phase 6)

Report: **Phase 6 Closure Rate** = Complete / (Complete + Active + Abandoned)

---

### Step 4: Acceleration Score

Calculate and present:

```
TOOLKIT ACCELERATION AUDIT — [date]

Reuse Ratio:            [X]% (target ≥50%)
Feedback Loop Closure:  [X]% (target ≥75%)
Phase 6 Closure Rate:   [X]% (target ≥60%)

Overall Acceleration Score: [average]%

Verdict:
  ≥75%: 🟢 Compounding — toolkit is accelerating
  50–74%: 🟡 Building — compounding potential present, gaps closing
  <50%: 🔴 Leaking — work is not compounding; intervention needed
```

---

### Step 5: Top Acceleration Action

Regardless of score, identify the **single highest-leverage action** that would most improve compounding velocity. State it, propose it, ask for confirmation, execute.

---

## When to Use This Prompt

- When bringing new material into the toolkit (Mode 2 — always before adding anything)
- After completing a major project or deliverable (Mode 1 + Mode 3)
- When the toolkit feels cluttered, slow, or misaligned (all three modes)
- Monthly acceleration review (Mode 3 alone)
- When the user says: "run the accelerator", "intake gate", "SDD audit", "toolkit check"

---

## Relationship to Other Session Prompts

| Prompt | Function | What It Checks |
|--------|----------|----------------|
| `toolkit-integrity-update` | **Quantity** — ensures all the right files exist | Navigation files, naming conventions, stale refs, structural standards — the structural skeleton |
| `toolkit-accelerator` | **Quality** — ensures what exists is actually working | SDD phase compliance, intake gate quality, compounding velocity — the compounding power |
| `checkpoint-update` | Session close — locks learnings into system files | N/A — separate function |
| `weekly-review` | Strategic review — priority alignment, behavioral tracking | N/A — separate function |

**The paired mental model:** `toolkit-integrity-update` is the quantity function — it guarantees completeness of structure. `toolkit-accelerator` is the quality function — it guarantees the structure is doing its job. Run both. One without the other leaves half the system unchecked.

---

## Reference Files

- SDD v3 workflow: `3_AI_&_Human_Capabilities/9_Workflows/Spec_Driven_Development_Workflow_v3/01_README.md`
- SDD v3 level profiles: `3_AI_&_Human_Capabilities/9_Workflows/Spec_Driven_Development_Workflow_v3/15_level-profiles.md`
- Living document protocol: `3_AI_&_Human_Capabilities/9_Workflows/Spec_Driven_Development_Workflow_v3/16_living-document-protocol.md`
- Structural standards: `7_Retained_Working_Files/V4_Toolkit_Review_Checklist.md`
- Intake queue (created on first use): `7_Retained_Working_Files/Intake_Queue.md`

---

**Last Updated:** 2026-02-25
**Prompt Version:** 2.5 (Step 3.5 strengthened: added hard rule requiring ALL secondary actions arising from item discussion — HP updates, Doc Standards, SuperContext, etc. — to be fully executed before the next item is presented. Prevents context loss from partially-executed work across multiple items.)
**Validation Status:** ⚠️ All edits made in-session. File is correct for future cold-start sessions. In-session runs are sourced from conversation context, not this file. (See Current_Intelligence.md — Validated Pattern 7)
