# Context Vector Registry

**Created:** 2026-03-11
**Last Updated:** 2026-03-11
**Purpose:** Authoritative, growing list of all content vectors subject to cross-stack audit. This file is the single source of truth for which vectors exist, what governs them, which documents are in scope, and what their current audit status is.

**This file is read by:** `context-vector-audit/system.md` (protocol), `AI_Preferences_CX0` (dependency loading standard), daily brief (periodic audit trigger check)
**This file is written by:** AI at vector registration and after each completed audit session
**This file must not drift:** It is the registry for a drift-prevention system. Any inaccuracy here propagates into every audit run.

---

## Anti-Drift Rules for This File

1. **Never update from memory.** When adding a vector, read the governing source first to confirm the exact file path and content scope.
2. **When a governing source file is updated** (version increment), mark all dependent vectors as `RE_AUDIT_NEEDED` immediately — do not wait for the next audit session to discover the change.
3. **When a new context file is created** at any CX level, assess whether it introduces a new content vector or expands the scope of an existing one. If yes, register or update before the session ends.
4. **Audit status is only set to CLEAN by completing the full audit protocol** — not by inference, not by "it looks right," not by recalling what was generated in the same session.

---

## Vector Status Definitions

| Status | Meaning |
|--------|---------|
| `NEVER_AUDITED` | Vector registered but no audit session completed |
| `CLEAN` | Last audit found no drift across all in-scope documents |
| `DRIFT_FOUND` | Audit found drift; fixes pending or in progress |
| `REMEDIATED` | Drift found and fixed; clean as of audit date |
| `RE_AUDIT_NEEDED` | Previously clean, but governing source updated since last audit OR new documents added to scope |

---

## Priority Definitions

| Priority | Meaning |
|----------|---------|
| P1 | Foundational — drift here contaminates the most downstream documents; audit first |
| P2 | High — significant downstream impact; audit second |
| P3 | Standard — moderate scope; audit after P1/P2 clean |

---

## Active Vector Registry

### V1 — ICP Definitions

**Priority:** P1
**Governing source:** `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/04_Ideal_Client_Profiles_Chunk_00_INDEX_CX1_v4.2.md` + all referenced Chunk files
**Governing source version at last audit:** v5.0/v5.1 (2026-03-05 / 2026-03-07)
**What this vector contains:** How many ICPs exist, their names, their core characteristics, their problems and motivations, what they are NOT (especially previously-hallucinated segments removed from system)
**Documents in scope (expanded after Audit 001):**
- `4_Context_Files/Level_2_Strategy/G0_Strategic_Infrastructure/2.01_Annual_Strategic_Plan_2026_CX2.md`
- `4_Context_Files/Level_2_Strategy/G1_Acquisition_and_Community/2.10_Audience_Growth_Strategy_2026_CX2.md`
- `4_Context_Files/Level_2_Strategy/G1_Acquisition_and_Community/2.11_Community_Growth_Engagement_2026_CX2.md`
- `4_Context_Files/Level_2_Strategy/G1_Acquisition_and_Community/2.12_Outreach_Launch_Campaign_Strategy_2026_CX2.md`
- `4_Context_Files/Level_2_Strategy/G2_Revenue_and_Offers/2.20_Revenue_Architecture_2026_CX2.md`
- `4_Context_Files/Level_2_Strategy/G2_Revenue_and_Offers/2.21_Course_Dev_Launch_Strategy_2026_CX2.md`
- `4_Context_Files/Level_2_Strategy/G2_Revenue_and_Offers/2.22_Coaching_Ascension_Strategy_2026_CX2.md`
- `4_Context_Files/Level_2_Strategy/G3_Authority_and_Distribution/2.30_CDPID_Authority_Strategy_2026_CX2.md`
- `4_Context_Files/Level_2_Strategy/G3_Authority_and_Distribution/2.31_Content_Distribution_Strategy_2026_CX2.md`
- `4_Context_Files/Level_2_Strategy/G4_Capital_and_Operations/2.40_Capital_Deployment_Strategy_2026_CX2.md`
- `4_Context_Files/Level_2_Strategy/G5_Active_Programs/` — all PGM Brief files
- `4_Context_Files/Level_5_Content_Strategy/` — offering-specific content strategies and channel guidelines
- `4_Context_Files/Level_0_Map_&_Preferences/SuperContext_CX0_v62.md` — SC_Layer 1
- `4_Context_Files/Level_6_Asset_Production/` — outreach assets (Tier 1/2 templates, email sequences) — NOT YET AUDITED; queue for next cycle
**Last audit:** 2026-03-12 (Audit 001)
**Audit status:** `REMEDIATED` — all in-scope drift fixed 2026-03-12; 22 documents scanned; 24+ instances remediated. L6 Asset Production not yet audited.
**Re-audit trigger:** If Doc 04 governing source is updated; if new L2/L5/program documents are added.
**Notes:** ICP-2 "Craftsperson" was an AI hallucination — removed from all in-scope documents. v5.0 ICP restructure (three-ICP → one-demographic/three-delivery-modes: ICP-Course / ICP-Community / ICP-Coaching) is now fully propagated across L2 strategy, L5 content strategy, SuperContext, and program briefs.

---

### V2 — Business Model and Ascension Architecture

**Priority:** P1
**Governing source:** `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/03_Business_Strategy_Document_CX1_v2.md`
**Governing source version at last audit:** v5.3 (updated as part of Audit 002 — 2026-03-12)
**What this vector contains:** The ascension model (Free Explorer → Paid Community → Courses → Coaching), what each tier contains, the sequencing logic, what coaching is and is NOT (endpoint, not acquisition channel), revenue architecture, coaching package structure (Entry/Core/Premium), course pricing
**Documents in scope:**
- 2.01, 2.11, 2.12, 2.20, 2.21, 2.22 (L2 strategy)
- `4_Context_Files/Level_4_Offering_Briefs/` — Community-Entry, Coaching-Entry, Coaching-Core, Coaching-Premium briefs
- Any outreach content referencing the conversion path
**Last audit:** 2026-03-12 (Audit 002 — COMPLETE)
**Audit status:** `REMEDIATED`
**Notes:** Inverted drift found and resolved. Governing source (v5.2) was behind L2 strategy decisions made 2026-03-10. Updated to v5.3: coaching package architecture (project-based Intensive/Elite Partnership → monthly subscription Entry/Core/Premium), Companion Course pricing ($497–$797 founding → $147/$197), Clarity Call ($0–297 → $0–97). Known failure mode (coaching as acquisition channel) NOT found in any scanned document — all documents correctly represent coaching as ascension endpoint. Re-audit trigger: if 03_Business_Strategy_Document_CX1_v2.md is updated, or if new L2/L4 coaching or course documents are added.

---

### V3 — Offer Catalog and Pricing

**Priority:** P2
**Governing source:** `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D2_Operational_Excellence/05_Service_Product_Catalog_CX1.md` + `4_Context_Files/Level_3_Portfolio/` (Portfolio Map v2.1)
**Governing source version at last audit:** BSD v5.3 / SPC v5.1 / Portfolio Map v2.2 (2026-03-12)
**What this vector contains:** What products/tiers exist, their current pricing, what each tier delivers, what is confirmed vs. TBD (e.g., Apex tier pricing is intentionally TBD)
**Documents in scope:**
- All L2 strategy documents referencing offers, pricing, or tier structure
- `4_Context_Files/Level_4_Offering_Briefs/` — all offering briefs
- Any content assets referencing pricing or tier names
**Last audit:** 2026-03-12 (Audit 003)
**Audit status:** `REMEDIATED`
**Notes:** All drift traced to March 10 decisions (coaching package redesign + Companion Course repricing) not propagated to L3 governing docs or pre-March-10 L4 briefs. 12 instances fixed across 6 documents. Offer_Tier_Catalog updated to v1.3; Portfolio Map updated to v2.2; Coaching-Entry_Brief fully rewritten to v2.0. Re-audit trigger: if BSD, SPC, or Portfolio Map are updated; if new L4 offering briefs are added.

---

### V4 — Value Proposition and Messaging

**Priority:** P2
**Governing source:** `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/01_Brand_Guidelines_CX1.md` + `02_Key_Message_Platform.md`
**Governing source version at last audit:** Never audited
**What this vector contains:** [Your Organization]'s core value proposition, messaging pillars, brand voice, what [Your Organization] says about itself, what language is authorized vs. off-brand
**Documents in scope:**
- All L2 strategy documents with positioning or messaging content
- All L5 channel guidelines
- All L6 content assets (email sequences, social posts, outreach templates)
**Last audit:** Never
**Audit status:** `NEVER_AUDITED`

---

### V5 — OKR Targets and Timelines

**Priority:** P3
**Governing source:** `4_Context_Files/Level_2_Strategy/G0_Strategic_Infrastructure/2.02_Annual_OKR_Set_2026_CX2.md`
**Governing source version at last audit:** Never audited
**What this vector contains:** The actual KR targets, their numeric values, their deadlines, which quarter they belong to
**Documents in scope:**
- All L2 strategy documents referencing KR targets or timelines
- PIE and Velocity Model documents
- Any content referencing specific growth targets or milestones
**Last audit:** Never
**Audit status:** `NEVER_AUDITED`
**Notes:** More localized impact than V1–V4; drift here produces incorrect targets in strategy documents but doesn't contaminate the ICP or messaging framing.

---

## Registration Log

*Append when a new vector is registered or an existing vector's scope is updated.*

| Date | Action | Vector | Notes |
|------|--------|--------|-------|
| 2026-03-11 | Registered | V1 — ICP Definitions | First instance of confirmed drift identified in 2.10_Audience_Growth_Strategy |
| 2026-03-11 | Registered | V2 — Business Model & Ascension | Known failure mode: coaching as acquisition channel |
| 2026-03-11 | Registered | V3 — Offer Catalog & Pricing | Known correction: Primer Courses price fix (Mar 8) |
| 2026-03-12 | Remediated | V3 — Offer Catalog & Pricing | Audit 003 complete — 12 instances fixed; Offer_Tier_Catalog v1.3, Portfolio Map v2.2, Coaching-Entry_Brief v2.0 |
| 2026-03-11 | Registered | V4 — Value Proposition & Messaging | No confirmed drift yet; preventive registration |
| 2026-03-11 | Registered | V5 — OKR Targets & Timelines | No confirmed drift yet; preventive registration |

---

## Criteria for Registering a New Vector

A content thread should be registered as a new vector when:

1. A systematic discrepancy is discovered between a governing CX0/CX1/CX2 file and downstream documents (confirmed drift → register immediately)
2. A new governing file is created at CX0/CX1/CX2 level that introduces a content element that should propagate consistently through downstream documents
3. A governing file is significantly revised in a way that changes content downstream documents depend on (update existing vector status to `RE_AUDIT_NEEDED`)
4. During a generation session, AI realizes it is relying on inference for a recurring content element rather than a loaded governing source

Registration process: add entry to this registry with status `NEVER_AUDITED` before the session ends. Do not defer registration to the next session.
