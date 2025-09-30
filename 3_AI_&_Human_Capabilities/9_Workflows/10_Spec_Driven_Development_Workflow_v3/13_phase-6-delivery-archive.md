# Phase 6: Delivery & Archive

**Created:** 2026-02-22
**Last Updated:** 2026-02-22
**Purpose:** Formal project completion, delivery package generation, and archive
**Status:** Final

---

## Overview

Phase 6 closes the loop. Phase 5 verifies quality. Phase 6 delivers it.

Without Phase 6, projects end in ambiguity: outputs exist in queue folders, but there is no formal completion event, no packaged deliverable, no reuse record, and no definitive archive. This creates a recurring tax: future sessions have to reconstruct context that should have been captured at closure.

Phase 6 eliminates that tax by producing three things:

1. **Delivery Package** — the complete, portable project output dropped into `04_Complete/` in the Context Level 6 Asset Production folder
2. **Reuse Record** — a brief document capturing what was learned, what worked, and what future projects can borrow
3. **Archive Entry** — the project is formally closed in the production queue and system records updated

> **Phase 6 is not optional for any project going to a real audience.** It is the difference between work that compounds (because future projects can reference it) and work that disappears into the file system.

---

## Trigger Conditions

Phase 6 begins when **all of the following are true**:

```
PHASE 5 → PHASE 6 TRANSITION CHECK

[ ] Phase 5 verification complete — all checks passed or violations documented
[ ] All outstanding issues from Phase 4 issue files are resolved or explicitly deferred
[ ] Human has reviewed final outputs and given sign-off
[ ] Upward feedback from Phase 5 is captured in feedback-queue.md
[ ] Production queue status shows all items in 3-approved or 5-published
```

If any item is unchecked, Phase 6 does not start. Return to Phase 5.

---

## Step 1: Assemble the Delivery Package

The delivery package is the complete project record. It lives in:

```
Context Files/Level_6_Asset_Production/[Offering-Name]/[Project-Name]/04_Complete/
```

This is the Context Files `04_Complete/` folder — the architecture's defined home for approved, deployment-ready assets.

### Package Contents

```
04_Complete/
  README-delivery.md              ← delivery index (see template below)
  spec/                           ← complete spec from Phase 2
      project-overview.md         ← from Phase 0
      project-roadmap.md          ← from Phase 0
      content-architecture.md     ← from Phase 0
      plan.md
      shape.md
      standards.md
      references.md
      success-criteria.md         ← the verification checklist
      visuals/
  deliverables/                   ← final approved outputs (from 3-approved/)
      [all approved deliverable files]
  standards-applied/              ← the exact standards used in production
      [standards files from 0-setup/ that governed this project]
  feedback-summary.md             ← consolidated upward feedback captured
  reuse-record.md                 ← what future projects can borrow
```

**Rule:** Nothing goes in `04_Complete/` that is not final. No drafts, no review copies, no issue files. The `04_Complete/` folder is the truth of what was built.

---

## Step 2: Generate the Delivery README

`04_Complete/README-delivery.md` is the index that orients anyone (AI or human) who opens this package in the future.

```markdown
# Delivery Package: [Project Name]

**Project:** [Name]
**Completed:** YYYY-MM-DD
**Produced by:** [Workflow: SDD v2 / Human-AI parallel production]

---

## What Was Built

[2-3 sentences from project-overview.md identity statement + what was actually delivered.
Be specific: "8 course modules totaling X words, covering Y and Z."]

## What's in This Package

| Folder/File | Contents |
|------------|----------|
| `spec/` | Complete project definition and specification files |
| `deliverables/` | All final approved outputs |
| `standards-applied/` | Exact standards used during production |
| `feedback-summary.md` | Learnings captured for upward feedback |
| `reuse-record.md` | What future projects can borrow from this one |

## Deliverables Index

| Deliverable | Type | Location |
|------------|------|----------|
| [Name] | [Module/Email/PDF/etc.] | `deliverables/[filename]` |
| [Name] | [Type] | `deliverables/[filename]` |

## Quality Status

- **Verification:** Phase 5 complete — [date]
- **Standards violations:** [None / X resolved / X deferred — detail in feedback-summary.md]
- **Sign-off:** [Human name] — [date]

## How to Reuse This Work

See `reuse-record.md` for patterns, decisions, and assets transferable to future projects.
For production standards that governed this project, see `standards-applied/`.

## Archive Location

- **Local:** This folder
- **Admin Drive:** [Path on archive drive — human to fill in]
- **Cloud deployment:** [Platform and location if published]
```

---

## Step 3: Generate the Reuse Record

`reuse-record.md` is the institutional memory capture. It answers: **if someone were starting a similar project tomorrow, what would they want to know from having built this one?**

```markdown
# Reuse Record: [Project Name]

**Date:** YYYY-MM-DD
**Project type:** [Course / Lead magnet / Framework / Toolkit / etc.]

---

## What Worked Well

[3-5 specific things — decisions, approaches, structural choices that produced
good outcomes. Be concrete. "Module structure with [X] format worked because..."
Not "the content was good."]

- **[What worked]:** [Why it worked and when to use it again]
- **[What worked]:** [Why it worked and when to use it again]

---

## What to Do Differently

[Specific changes for next time. Honest — this is internal, not a client report.]

- **[What to change]:** [Why and what to do instead]
- **[What to change]:** [Why and what to do instead]

---

## Reusable Assets

[Assets, templates, structures, or patterns from this project that future
projects should reference or reuse directly.]

| Asset | Location | Reuse Context |
|-------|----------|--------------|
| [Name] | `deliverables/[file]` | [When to reuse and how to adapt] |
| [Name] | `spec/[file]` | [When to reference] |

---

## Audience Learnings

[What this project taught about the audience. Concrete observations from
production or review — patterns in what worked, what the audience responded
to, what confused them.]

These should be flagged for upward feedback to ICP documents. See `feedback-summary.md`.

---

## Standards Gaps Identified

[Any place where existing standards didn't cover a situation that came up.
These should be flagged for standards update in the monthly standards review cycle.
See `08_standards-integration.md`.]

- **Gap:** [What the standard didn't cover]
- **What we did:** [The decision we made without a standard to guide us]
- **Proposed standard:** [What the standard should say going forward]

---

## Phase 0 Artifact Quality

[Did the Phase 0 project-overview, roadmap, and content-architecture
hold up through production? Where did they need updating? What would
you do differently in Phase 0 for a similar project?]

---

## Production Efficiency Notes

[How did parallel production work? What slowed things down? What sped
things up? Any orchestration patterns worth recording for future projects.]
```

---

## Step 4: Finalize Upward Feedback

`feedback-summary.md` consolidates all upward feedback captured during the project for handoff to the monthly standards review cycle.

Pull from:
- Phase 5 `feedback-queue.md` entries
- Issue files from Phase 4 that flagged systemic patterns (not one-off issues)
- Reuse record standards gaps (above)

```markdown
# Feedback Summary: [Project Name]

**Date:** YYYY-MM-DD
**Destination:** Monthly standards review + upward feedback cycle (see 09_upward-feedback-protocol.md)

---

## Key Message Platform Updates

[Patterns in what messaging resonated or didn't — flag for KMP update]

## Ideal Client Profile Updates

[Audience behavior or response patterns — flag for ICP update]

## Brand Voice / Standards Updates

[Content patterns that should become standards, or standards gaps identified]

## Standards Violations That Revealed Gaps

[Violations where the standard was genuinely incomplete, not where the standard
was ignored — these indicate the standard needs updating, not the producer]
```

---

## Step 5: Update the Production Queue

Mark the project complete in the master `production-queue.md`:

```
## [Project Name]
**Status:** COMPLETE
**Phase 6 Completed:** YYYY-MM-DD
**Delivery Location:** Level_6_Asset_Production/[Offering]/[Project]/04_Complete/
**Archive Status:** [Archived to Admin Drive / Pending archive]
**Upward Feedback:** [Submitted to monthly review / Pending]
```

---

## Step 6: Archive

Archive is the human's responsibility. AI prepares the package; human moves it to the appropriate archive drive.

**What to archive:**
- `04_Complete/` → Admin Drive (complete project record)
- Source production files (01_Brief through 03_Review folders) can be cleared once `04_Complete/` is verified

**Archive drive mapping (from Context Files Architecture Map):**
- `04_Complete/` project records → **Admin Drive**
- Deployed/published assets (if pushed to platform) → **Cloud**
- Raw production files after archive confirmed → can be deleted from Local/Cowork

---

## Phase 6 Checklist

```
PHASE 6 COMPLETION CHECKLIST

[ ] Delivery package assembled in 04_Complete/
[ ] README-delivery.md written and accurate
[ ] All approved deliverables in deliverables/ folder
[ ] Spec files copied to spec/ folder (from Phase 2 folder)
[ ] Standards-applied/ contains the exact standards used
[ ] success-criteria.md included (from Phase 2 addition)
[ ] reuse-record.md written — honest, specific, actionable
[ ] feedback-summary.md written — ready for monthly review
[ ] Production queue updated with COMPLETE status
[ ] Human notified for archive to Admin Drive
[ ] Upward feedback submitted to monthly review queue

PHASE 6 COMPLETE — this project is closed.
```

---

## What Phase 6 Is Not

**Phase 6 is not a retrospective.** It does not replace the session-level System Wisdom capture that happens in the AI Mastery Toolkit. It is a project-level operational closure, not a behavioral development capture.

**Phase 6 is not publishing.** Publishing to platforms (Moodle, Substack, LinkedIn, etc.) happens during Phase 4-5 via the `5-published` queue folder. Phase 6 is archiving what was built, not deploying it.

**Phase 6 is not mandatory for exploration or experimental work.** If a project is a proof-of-concept, a draft, or an experiment that won't ship, Phase 6 can be abbreviated to just a reuse-record.md note. The full protocol applies to work going to a real audience.

---

## Prompt Pattern: Starting Phase 6

```
Phase 5 verification is complete and [human name] has given sign-off.
Let's run Phase 6 Delivery & Archive.

Project: [Project Name]
Context Files delivery location: Level_6_Asset_Production/[Offering]/[Project]/04_Complete/
Phase 2 spec location: [path]
Approved deliverables location: [path to 3-approved/ folder]

Steps:
1. Assemble delivery package in 04_Complete/
2. Generate README-delivery.md
3. Generate reuse-record.md
4. Generate feedback-summary.md
5. Update production-queue.md with COMPLETE status

Proceed.
```
