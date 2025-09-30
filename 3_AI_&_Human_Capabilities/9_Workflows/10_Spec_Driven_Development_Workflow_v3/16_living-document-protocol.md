# SDD v3 — Living Document Protocol (Levels 1–3)

**Created:** 2026-02-22
**Purpose:** How to maintain, review, and version Level 1–3 foundation and strategy documents

---

## What Makes a Document "Living"

A Living Document is one that governs something that changes. The business strategy changes as the market evolves. The alignment and positioning document changes as new moats are identified. The portfolio map changes as offerings are added or retired. These documents are never "done" — they are maintained.

The SDD Living Document protocol ensures this maintenance is:
1. **Scheduled** — not reactive; documents have a review frequency
2. **Structured** — each review has a defined checklist
3. **Versioned** — changes are dated and described; drift is detectable
4. **Upward-aligned** — a Level 2 document that drifts from Level 1 produces misaligned Level 4-6 work

---

## Document Header Standard

Every Living Document must have a standard header block. The header IS Phase 0 for a Living Document — it defines the document's identity and maintenance schedule.

```markdown
# [Document Title]

**Created:** YYYY-MM-DD
**Last Updated:** YYYY-MM-DD
**Version:** vX.Y
**Purpose:** [One sentence — what does this document govern?]
**Status:** Active | Under Review | Pending Update
**CX Level:** CX1 | CX2 | CX3
**Update Frequency:** [Monthly / Quarterly / Annually / As-needed]
**Last Reviewed:** YYYY-MM-DD
**Review Notes:** [Brief: what was checked, what changed, what was confirmed]
```

Documents without this header fail Phase 0. The `CX Level:` field is required — it identifies which Context File hierarchy level governs this document and must be correct for compliance scans and session context loading to function accurately.

### Audit Meta-Block

After a document completes the Phase 2 Substance Audit (per the System Development Plan), add an Audit Meta-Block immediately after the header block and before the document body:

```markdown
---
audit: v{doc-version} | {date} | placement ✓ | validation ✓ | content-machine ✓ | attribution ✓ | verdict: {VERDICT}
re-validate: {trigger}
---
```

**Verdict values:** `ACTIVE` | `CONDITIONAL` | `EXTRACT→D0` | `MISPLACED` | `ARCHIVE`

**Re-validate trigger values:** `quarterly` | `annual` | `event: {description}`

**Partial audit:** Replace `✓` with `—` for steps not yet completed; set verdict to `IN PROGRESS`.

This block is the document-level audit state record. It is distinct from the section-level `[V: YYYY-MM-DD — {evidence chain}]` notation, which records claim-level evidence inline. A fully audited document carries both.

---

## Review Ritual

When a Living Document's review date arrives (or when triggered by a significant change in the business):

**Step 1: Read top-to-bottom with fresh eyes**
- Is everything still accurate?
- Are there contradictions with decisions made since the last update?
- Are there gaps that have become visible through recent work?

**Step 2: Check alignment with the level above**
- Level 2 documents: Are they still consistent with Level 1 identity and mission?
- Level 3 documents: Are they still consistent with Level 2 strategy?

**Step 3: Check alignment with the level below**
- Are there Level 4 offering specs, Level 5 content strategies, or Level 6 projects that contradict this document?
- Should this document be updated, or should the lower level be corrected?

**Step 4: Update, version, and date**
- Make substantive changes inline
- Update the `Last Updated` date
- Update the `Version` field (patch = 0.1 for small edits, minor = 1.0 for structural changes)
- Update `Last Reviewed` date
- Write brief `Review Notes` — what was confirmed, what changed, what was deferred

**Step 5: Echo to SuperContext if priorities shifted**
If the review produced any changes to priorities, moats, positioning, or strategy, run an upward flow scan (Step 3.5 in checkpoint-update) to determine if any IHVNA entries are needed.

---

## Currency Verification (Phase 5 for Living Documents)

Currency verification is a lighter-weight check that runs more frequently than a full review:

Ask of each major section:
1. Is this still true? (accuracy)
2. Is this still relevant? (strategic)
3. Is this still complete? (scope)
4. Does this still align with the current Level above it? (alignment)

Mark the document verified with a date: add `**Last Verified:** YYYY-MM-DD` to the header.

A verified document that has not been reviewed in longer than its update frequency is flagged as ⚠️ Partial at Phase 3 (Reviewed) during compliance scans.

---

## Versioning Convention

Living Documents version in-place. No separate history files; version is tracked in the header.

- **Patch (0.0.1):** Typo fixes, formatting, minor clarifications — no substantive change
- **Minor (0.1):** Content updates, new sections, updated data, refined positioning
- **Major (1.0):** Structural redesign, fundamental repositioning, scope change

Version history is maintained as a brief log at the end of the document:

```markdown
## Version History

- v4.1 (2026-02-22): Added 12th moat (anti-obsolescence); IP Flywheel framing; Value Propositions updated
- v4.0 (2026-02-19): Initial v4 creation from v3 foundation documents
```

---

## Backfilling SDD Compliance

For existing Level 1–3 documents that predate SDD v3, backfill compliance in this order:

1. **Ph0 (Defined):** Add the header block — 5 minutes per document
2. **Ph6 (Versioned):** Add a version history log and current version number — 5 minutes
3. **Ph2 (Specified):** Write a success criteria block — "this document is doing its job when..." — 15 minutes
4. **Ph3 (Reviewed):** Run the review ritual — 30-60 minutes per document
5. **Ph1 (Researched) and Ph5 (Verified):** Assess inline during review

Priority order for backfilling: Level 1 first, then Level 2, then Level 3.
