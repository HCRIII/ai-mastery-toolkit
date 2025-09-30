# Complete Asset Package Definition v1.0

**Created:** 2026-02-27
**Last Updated:** 2026-02-27
**Version:** v1.0
**Status:** Active
**Scope:** UNIVERSAL — governs all Level 6 production runs across all offerings and content vectors
**SDD Profile:** Cross-Architecture Standard (sits at the L4–L5–L6 interface)

---

## Governing Sources

| Document | Location | Governing Rationale |
|----------|----------|-------------------|
| Key Message Platform v4.1 | L1 / D1 / 02_KMP (INDEX) | All promotional assets derive from the messaging platform; voice, framing, and Sacred Words |
| Ideal Client Profiles v4.1 | L1 / D1 / 04_ICP (INDEX) | All assets are calibrated to ICP 1 (and ICP 2 where applicable) |
| Quality Standards v4.0 | L1 / D2 / 08_Quality_Standards_and_Checklists_CX1.md | Preeminence standard governs all Category A assets |
| AI Integration Playbook v4.0 | L1 / D4 / 13_AI_Integration_Playbook_CX1.md | AI-assisted production permitted per playbook; all outputs reviewed before deployment |
| Level 5 Channel Guidelines | L5 / [Channel_Name]_Guidelines_v1.md (22 channels) | Each Category B asset is governed by its channel's guidelines |
| Offering Content Strategies | L5 / [Offering]_Content_Strategy_v1.md (7 current) | Which channels each offering activates and what content type applies per vector |
| Academy Course Production Standards v3.0 | L4 / 5_Courses-Core / 0-setup / Academy_Course_Production_Standards_v3.md | Module-level production standards for all Category A course assets |
| Upward Feedback Protocol v2 | L4 / 5_Courses-Core / [upward feedback protocol location] | New IP and insights surfaced during production feed back up per this protocol |

---

## Core Concept: The Content Vector

A **content vector** is the smallest production unit that warrants a complete asset package run. It is defined by a specific topic, transformation theme, or offering context that produces coherent, deployable output across all asset categories simultaneously.

**What makes a content vector:**
- It has a clear, articulable topic or transformation theme
- It maps to one or more Cognitive Architecture Seven Layers
- It is anchored to a specific offering in the portfolio (the offering provides the ascension context)
- It can be produced end-to-end in a single session with L1-L5 context loaded

**Content vector examples:**

| Vector Type | Example |
|-------------|---------|
| Course module | Module 3: The Decision Layer — Cognitive Architecture Foundations |
| Offering launch | Foundations Course — 12-week pre-launch runway content set |
| Framework piece | The Seven Layers: An introduction to the operating system |
| Research-to-content | CDPID finding on executive cognitive load → complete distribution set |
| Offering introduction | Community [Your Organization] Outreach launch content sequence |
| Methodology application | The Protective Guardian commitment in business decision-making |

**Critical design principle:** A course is a subset of the complete package, not the package itself. The complete package includes the course content AND all distribution assets that make the content capitalizable and deployable. A module produced without its distribution assets is not a complete production run — it is half-done.

---

## The Complete Asset Package — Three Categories

Every content vector produces assets across three categories. All assets are light markdown files unless otherwise specified.

---

### Category A: Internal / Capitalizable Assets

These are the core deliverables — the IP. They become part of the permanent library, inform future production, and can be reused, repackaged, and resold. Category A is governed by the Preeminence standard: every file must leave the learner or reader better than before they encountered it.

| File | Required For | Description |
|------|-------------|-------------|
| `lesson.md` | All vectors | The primary content piece. For a course module: lesson script/outline. For a framework piece: full IP articulation. For a launch: the core narrative. The canonical statement of the content vector's intellectual substance. |
| `exercise.md` | Course modules | The learner's active work. Produces a tangible deliverable in the learner's own context. For non-course vectors: the application tool, worksheet, or reader exercise. |
| `assessment.md` | Course modules | Comprehension check or reflection prompt. For course modules: 3–5 question formative check or reflection. For non-course vectors: not required. |
| `workbook-section.md` | Course modules | The polished, learner-facing compiled version. This is what goes into the learner's permanent portfolio. Format: clean, print-ready markdown with no production notes. |
| `framework-note.md` | When applicable | Any new IP, insight, or methodology refinement surfaced during production that does not yet exist in the canonical L1 documents. These are candidates for upward feedback via the Upward Feedback Protocol v2. Create this file only when genuinely new IP emerges — not for routine applications of existing frameworks. |

**Category A verification gate:**
- [ ] All required files for this vector type are present
- [ ] Preeminence standard cleared: does each file leave the learner/reader better?
- [ ] ICP 1 calibration confirmed: depth, pace, and language appropriate
- [ ] Cognitive Architecture Seven Layers connection explicit in lesson.md
- [ ] No [CLARIFY] tags remain in any file
- [ ] AI-assisted content reviewed by practitioner before use

---

### Category B: Distribution / Promotional Assets

These are the deployment assets — the mechanism by which Category A content reaches the audience. Each Category B file is governed by its corresponding L5 channel guideline. Every asset references its governing channel guideline in its header.

The offering's L5 content strategy (e.g., `Foundations-Course_Content_Strategy_CX5_v1.md`) determines which channels are activated for a given vector. Not every channel is used for every vector — the content strategy specifies the active channels per offering.

| File | Channel | Governing Guideline | Description |
|------|---------|--------------------|-|
| `linkedin-post.md` | LinkedIn (07) | `LinkedIn_Guidelines_v1.md` | Primary LinkedIn text post. Typically 1 per vector; may be 2–3 for launch vectors. Hook → value → CTA structure. No links in post body. |
| `email.md` | Email List (04) | `Email-List_Guidelines_v1.md` | Email to the list. Announcement, nurture, or launch email depending on vector type. Subject line + body + CTA. |
| `youtube-script.md` | YouTube (06) | `YouTube_Guidelines_v1.md` | Full video script or structured outline. Hook (first 30 sec) → value delivery → CTA. For content vectors with significant teaching depth. |
| `substack-article.md` | Substack (11) | `Substack_Guidelines_v1.md` | Long-form depth piece. The written equivalent of the YouTube content — for readers, not viewers. |
| `community-post.md` | Community Site (02) | Community-Entry_Content_Strategy_CX5_v1.md | Community-formatted post. Uses the weekly format: Mindset Monday, Workshop Wednesday, or Wins Friday. For vectors with direct community application. |
| `x-post.md` | X / Twitter (10) | `X_Guidelines_v1.md` | Short-form version. Hook + single insight + CTA or no CTA. Use for high-signal distillations. |
| `medium-article.md` | Medium (12) | `Medium_Guidelines_v1.md` | Cross-post or adaptation of Substack article for discoverability. |
| `reddit-post.md` | Reddit (13) | `Reddit_Guidelines_v1.md` | Community-native format. Teach genuinely; do not promote. For vectors where the insight stands alone without the commercial context. |
| `facebook-post.md` | Facebook (08) | `Facebook_Guidelines_v1.md` | Facebook-native version. Personal voice, community-feel framing. |
| `instagram-post.md` | Instagram (09) | `Instagram_Guidelines_v1.md` | Visual-first; caption secondary. For content vectors with strong visual hook potential. |

**Additional promotional files for launch vectors:**

| File | Use Case | Description |
|------|----------|-------------|
| `launch-email-sequence.md` | Offering launch | Full email sequence for a launch (8–10 emails for Courses-Core launch; shorter for other vectors). Day-by-day plan with full email copy. |
| `linkedin-launch-series.md` | Offering launch | The full pre-launch LinkedIn post series (e.g., 12–20 week runway for Foundations Course). All posts in one file with dates and sequencing notes. |
| `sales-page-copy.md` | Offering launch | Full sales/enrollment page copy for any offering launch vector. |
| `personal-network-outreach.md` | Offering launch | Direct outreach message templates for personal network and referral asks. |

**Category B verification gate:**
- [ ] All activated channels for this offering are represented (per L5 content strategy)
- [ ] Each file header references its governing channel guideline
- [ ] All files pass voice and tone check against KMP v4.1
- [ ] ICP 1 calibration confirmed per asset
- [ ] No filler content — each asset earns its place
- [ ] Assets are derivative of Category A — they promote and distribute, not replace

---

### Category C: Operational / Deployment Assets

These are the execution assets — they make the package deployable without additional decision-making in the deployment session.

| File | Required For | Description |
|------|-------------|-------------|
| `deployment-calendar.md` | All vectors | When each Category B asset goes live. Channel, date/time, asset filename, any dependencies. One row per deployment action. |
| `moodle-ready.md` | Course modules | Moodle-formatted upload version of lesson, exercise, assessment, and discussion prompt. Format and structure match Moodle Topics structure per `Academy_Course_Production_Standards_v3.md`. |
| `automation-spec.md` | Automated vectors | n8n automation specification if any Category B deployment is automated. Trigger → action → output format. Reference `n8n-deployment-automation.md` in LAUNCH-PACKAGE-2026-02-14 for precedent. |
| `production-manifest.md` | All vectors | The package index and status tracker (see template below). This is the completion authority — the package is done when every item in the manifest is marked COMPLETE. |

**Category C verification gate:**
- [ ] deployment-calendar.md populated with dates for all Category B assets
- [ ] moodle-ready.md formatted and tested in Moodle preview (for course modules)
- [ ] production-manifest.md updated to COMPLETE for all items before declaring the package done

---

## Production Manifest Template

Every content vector production folder includes a `production-manifest.md` using this template. This is the single source of truth for package completion status.

```markdown
# Production Manifest: [Content Vector Name]

**Vector Type:** [Course Module / Offering Launch / Framework Piece / Research-to-Content / Other]
**Offering:** [Portfolio grid cell this vector serves — e.g., 5_Courses-Core]
**Content vector topic:** [One sentence]
**Cognitive Architecture Layer(s):** [Which of the Seven Layers this vector touches]
**Production started:** [Date]
**Production complete:** [Date — leave blank until done]
**Governing L5 content strategy:** [e.g., Foundations-Course_Content_Strategy_CX5_v1.md]

---

## Category A: Internal / Capitalizable Assets

| File | Status | Notes |
|------|--------|-------|
| lesson.md | [ ] Queued / [ ] In Production / [ ] Complete | |
| exercise.md | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |
| assessment.md | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |
| workbook-section.md | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |
| framework-note.md | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |

## Category B: Distribution / Promotional Assets

| File | Channel | Status | Notes |
|------|---------|--------|-------|
| linkedin-post.md | LinkedIn (07) | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |
| email.md | Email List (04) | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |
| youtube-script.md | YouTube (06) | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |
| substack-article.md | Substack (11) | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |
| community-post.md | Community (02) | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |
| x-post.md | X (10) | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |
| [additional per offering L5 strategy] | | | |

## Category C: Operational / Deployment Assets

| File | Status | Notes |
|------|--------|-------|
| deployment-calendar.md | [ ] Queued / [ ] In Production / [ ] Complete | |
| moodle-ready.md | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |
| automation-spec.md | [ ] Queued / [ ] In Production / [ ] Complete / [ ] N/A | |

---

## Verification Gate Checklist

### Category A
- [ ] All required Category A files present and marked COMPLETE
- [ ] Preeminence standard cleared by practitioner review
- [ ] ICP 1 calibration confirmed
- [ ] Seven Layers connection explicit in lesson.md
- [ ] No [CLARIFY] tags remain
- [ ] AI-assisted content reviewed

### Category B
- [ ] All activated channels covered per offering L5 content strategy
- [ ] Each file references its governing channel guideline
- [ ] KMP v4.1 voice and tone confirmed
- [ ] No promotional filler — each asset earns its place

### Category C
- [ ] deployment-calendar.md populated
- [ ] moodle-ready.md formatted and preview-tested (if applicable)

### Package Complete Declaration
- [ ] All REQUIRED items above are COMPLETE (N/A items are confirmed N/A, not skipped)
- [ ] production-manifest.md updated with Production Complete date
- [ ] Any framework-note.md entries submitted to feedback-queue.md per Upward Feedback Protocol v2
```

---

## Production Folder Structure

Every content vector lives in its own production folder. The folder structure is:

```
[offering-folder]/4-production-queue/4-[Course_or_Vector_Name]/
├── production-manifest.md         ← Always first file; status authority
├── Category-A/
│   ├── lesson.md
│   ├── exercise.md
│   ├── assessment.md
│   ├── workbook-section.md
│   └── framework-note.md          ← Only if new IP emerges
├── Category-B/
│   ├── linkedin-post.md
│   ├── email.md
│   ├── youtube-script.md
│   ├── substack-article.md
│   ├── community-post.md
│   └── [additional per L5 strategy]
└── Category-C/
    ├── deployment-calendar.md
    ├── moodle-ready.md             ← Course modules only
    └── automation-spec.md          ← Automated deployments only
```

For offering-level (launch) vectors, the folder lives at:

```
[offering-folder]/LAUNCH-[date]/
├── production-manifest.md
├── Category-A/
│   └── [launch narrative, sales page source]
├── Category-B/
│   ├── launch-email-sequence.md
│   ├── linkedin-launch-series.md
│   ├── sales-page-copy.md
│   └── personal-network-outreach.md
└── Category-C/
    └── deployment-calendar.md
```

---

## Context Loading = The Production Advantage

The asset package can be produced in a single session because L1-L5 context is loaded. This is the "20 concurrent course asset packages" capability — not 20 separate sessions with 20 separate context loads, but one session where the full context is already loaded and parallel agents produce all 20 packages simultaneously.

**What context loading provides per production run:**

| Layer | What It Provides |
|-------|-----------------|
| L0 System Preferences | AI behavior standards; output conventions |
| L1 Foundation | ICP, messaging platform, brand voice, methodologies, quality standards |
| L2 Strategy | Channel guidelines (22 channels); all L2 business IP |
| L3 Portfolio | Offering positions, ascension paths, client journey stages |
| L4 Offering Spec | The spec for this specific offering; success criteria; decision log |
| L5 Content Strategy | Which channels this offering activates; content cadence and format per channel |

With this context loaded, every Category A, B, and C file produced is automatically:
- ICP-calibrated (L1)
- Methodology-aligned (L1 Proprietary Methodologies)
- Channel-compliant (L5 guidelines govern each Category B file)
- Offering-anchored (L4 spec provides the commercial context)
- Portfolio-coherent (L3 ensures this vector serves the right ascension path)

**No clarification loops needed.** The context is already the answer to every alignment question.

---

## Upward Feedback Integration

Any `framework-note.md` file created during a production run represents new IP or insight that has emerged from the production process. These are submitted to `feedback-queue.md` at the root of `4_Context_Files/` per the Upward Feedback Protocol v2.

The feedback-queue entry should reference:
- The content vector that produced the insight
- Which L1–L3 document should receive the update
- The specific addition or refinement

Do not modify L1–L3 documents directly during a production run. Log to feedback-queue.md and resolve in a dedicated architecture session.

---

## Relationship to Other Standards

| Document | Relationship |
|----------|-------------|
| `Academy_Course_Production_Standards_v3.md` | Governs Category A file specifications for course module vectors; the module format, video standards, and exercise design standards are defined there |
| `[Offering]_Content_Strategy_v1.md` (L5) | Determines which Category B channels are active per offering and at what cadence |
| `[Channel]_Guidelines_v1.md` (L5, 22 channels) | Governs format, length, structure, and voice for each Category B file |
| `feedback-queue.md` | Receives all Category A framework-note.md entries for upward propagation |
| SDD Phase 4 Parallel Production protocol | The production workflow that executes this package definition; this document defines WHAT is produced; Phase 4 defines HOW it is coordinated |
| Step 7 — Multi-course meta-orchestrator prompt | The orchestration layer that manages multiple simultaneous content vector production runs against this definition |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0 | 2026-02-27 | Initial definition. Built from Gap Check Step 6 analysis + practitioner clarification that the package covers the entire content vector (not just a course or module), includes all internal capitalizable output AND all promotional materials, and is produced in one process with L1-L5 context loaded. Universal standard — not course-specific. |
