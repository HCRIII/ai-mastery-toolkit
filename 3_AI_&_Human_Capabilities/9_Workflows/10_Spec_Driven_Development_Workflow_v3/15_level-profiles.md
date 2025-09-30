# SDD v3 — Level Compliance Profiles

**Created:** 2026-02-22
**Purpose:** Artifact-level compliance specifications for all three SDD v3 profiles

---

## Profile 1: Living Document (Levels 1–3)

Applies to: Foundation documents (Level 1), Strategy documents (Level 2), Portfolio documents (Level 3)

### Required Artifacts

**Ph0 — Defined**
The document has a header block containing:
- `**Purpose:**` — what this document governs
- `**Created:**` and `**Last Updated:**` dates
- `**Status:**` field (Draft / Active / Under Review)
- `**CX Level:**` — which Context File hierarchy level governs this document (CX1, CX2, or CX3)
- (Preferred) `**Update Frequency:**` — how often this should be reviewed

If the document has completed the Phase 2 Substance Audit, an Audit Meta-Block is also required immediately after the header block (see `16_living-document-protocol.md` for format).

Pass: Header block present and populated, including `CX Level:` designation. If post-audit, Audit Meta-Block also present.
Fail: Missing, empty, or outdated header; or `CX Level:` absent.

**Ph1 — Researched**
The document's assertions have a basis. For strategy and foundation documents, this means:
- Claims about the market, audience, or competitive position cite observable data or experience
- Frameworks reference their source
- Assessments (e.g., ★★★☆☆ ratings) have rationale documented alongside them

Pass: At least the major assertions have supporting rationale inline or in a companion file.
Fail: Document is purely declarative with no evidence basis.

**Ph2 — Specified (Governing Scope)**
The document has defined what "good" looks like for itself AND what lower-level decisions it governs:
- A success criteria block (can be embedded in the document, not a separate file)
- Or: Clear scope statement ("this document answers these specific questions")
- Or: An explicit checklist of what a complete version contains
- **AND:** An explicit statement of what Level 4-5-6 decisions this document governs or informs

The second requirement is what makes a Level 1-3 document a *governing spec* rather than just a reference. A business strategy document that doesn't declare what offering decisions it governs cannot enforce alignment downstream.

Pass: Can answer both "how would we know this document is doing its job?" and "which Level 4-5-6 decisions does this document govern?"
Fail: No criteria; or document exists but does not declare its governing scope for lower levels.

**Ph3 — Reviewed**
The document has been reviewed against current reality:
- A `**Last Reviewed:**` date exists in the header
- Reviewer notes exist (inline comments, a companion review file, or a dated changelog entry)
- Review confirmed alignment with current priorities, context, and accuracy

Pass: Last reviewed within the document's update frequency window, with notes.
Fail: No review date, or last reviewed more than 2x the stated update frequency ago.

**Ph5 — Verified**
A currency check has been run:
- Is the content still accurate given changes since last update?
- Is it still aligned with the level above it?
- Are any sections now contradicted by new decisions or data?

Pass: A verification note exists confirming currency (can be a dated comment in the document).
Fail: No verification history; document may be stale without knowing it.

**Ph6 — Versioned**
The document is versioned in place:
- Version number or date stamp in the header
- A changelog section OR dated "Last Updated" with description of what changed
- Old versions referenced, not silently overwritten

Pass: Version or date stamp is current; changes are described.
Fail: No version information; no record of what changed or when.

---

## Profile 2: Offering Spec (Levels 4–5)

Applies to: Offering Spec folders (Level 4), Content Strategy folders (Level 5)

### Required Artifacts

**Ph0 — Defined** → `project-overview.md`
- What is this offering / content strategy?
- Who is it for? (specific audience)
- What does it deliver? (outcomes, not features)
- What is the identity statement? ("I am building [X] for [Y] because [Z]")

**Ph0-A — Anchored** (SDD v3 addition) → also in `project-overview.md`
This is the alignment chain check. The project-overview must name the specific Level 1-3 governing documents that this offering spec inherits from:
- Identity source: which Level 1 document (e.g., Business_Strategy_Document.md, 0_Personal_Foundation doc)
- Strategy position: which Level 2 document (e.g., 2.1_Business_Alignment_and_Positioning_CX2.md)
- Portfolio role: where this offering fits in the Level 3 portfolio (even if the portfolio map doesn't yet exist, the offering's intended role should be stated)

An offering spec that cannot name its governing documents is structurally unanchored. It may be well-written internally but will drift from the business identity over time.

Pass: Governing documents named explicitly in project-overview.md with a one-line rationale for each.
Fail: No mention of governing Level 1-3 documents; or generic references ("aligns with our strategy") without naming the specific document.

Pass: File exists with all four elements populated.
Fail: File missing or placeholder-only.

**Ph1 — Researched** → `research-synthesis.md` (or equivalent named file)
- Market context: who else does this, what's the gap?
- Audience validation: evidence that this audience exists and wants this
- Competitive position: what makes this offering the right choice?

Pass: File exists with substantive content (not placeholder).
Fail: Missing or empty.

**Ph2 — Specified** → `spec.md` + `success-criteria.md`
- `spec.md`: What the offering/content strategy contains — components, structure, scope
- `success-criteria.md`: Pre-defined definition of done — what does a complete, working version look like? What would Phase 5 verify against?

Pass: Both files exist with substantive content.
Fail: Either missing; `success-criteria.md` missing is the most critical gap (v2 key addition carried forward).

**Ph3 — Refined** → Decision log or interview file
- Key design decisions documented
- Open questions resolved or explicitly parked
- Scope changes captured with rationale

Pass: At least one dated decision or refinement note exists.
Fail: No record of refinement; spec went directly from Phase 0 to Phase 4.

**Ph5 — Verified** → Verification note or file
- The spec has been checked against its own success-criteria.md
- Verified: the spec is complete, internally consistent, and executable

Pass: A verification note exists confirming the spec is ready for production.
Fail: No verification; spec may have gaps that will surface only at Phase 4.

**Ph6 — Closed** → `delivery-notes.md` or README status flag
- Offering spec is complete and marked as such
- Referenced by Level 5 (content strategy) or Level 6 (production) as needed
- Status visible to any agent reading the folder

Pass: Completion status documented; offering spec is findable and clearly marked.
Fail: Folder exists but has no completion marker; status unknown.

---

## Profile 3: Production (Level 6)

Full SDD v2. See `02_phase-0-project-definition.md` through `13_phase-6-delivery-archive.md`.

Summary checklist for compliance scan:

| Phase | Key Artifact | Pass Condition |
|-------|-------------|----------------|
| Ph0 | project-overview.md, project-roadmap.md, content-architecture.md | All three exist with content |
| Ph1 | research-synthesis.md in `1-research/[Project]/` | Exists with content |
| Ph2 | plan.md, shape.md, standards.md, references.md, success-criteria.md, production-queue.md | All six exist with content |
| Ph3 | `3-interview-refinement/[Project]/` with documented decisions | Folder exists, not empty |
| Ph4 | `4-production-queue/[Project]/` with status subfolders | Structure exists |
| Ph5 | `5-verification-feedback/[Project]/` with verification against success-criteria.md | Folder exists, verification documented |
| Ph6 | `6-delivery/[Project]/README-delivery.md`, `reuse-record.md`, `feedback-summary.md` | All three exist |

---

## Scoring

For all profiles, each phase scores as:
- **✅ Pass** — artifact exists and meets content requirements
- **⚠️ Partial** — artifact exists but is placeholder, incomplete, or missing a sub-requirement
- **❌ Fail** — artifact missing entirely

**Score calculation:** Pass = 1 point, Partial = 0.5 points, Fail = 0 points. Score = (points earned / total phases) × 100%.

Minimum passing score by profile:
- Living Document: 4/6 phases passing (67%) — with Ph0 and Ph6 mandatory
- Offering Spec: 4/6 phases passing (67%) — with Ph0 and Ph2 mandatory
- Production: 5/7 phases passing (71%) — with Ph0, Ph2 (success-criteria), and Ph6 mandatory
