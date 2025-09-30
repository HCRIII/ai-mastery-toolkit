# Document Review & QC Protocol

**Created:** 2026-02-19
**Last Updated:** 2026-02-19
**Version:** v1.0
**Purpose:** Reusable session prompt for systematic document-by-document review, QC, and continuity audit of the Context Files
**Status:** Active

---

## HOW TO USE THIS PROMPT

Paste this file (or reference it by path) at the start of any review session. Then tell Claude which document to review next — or say "start at the beginning" or "continue from [document name]."

**One document per review cycle:**
1. Claude reads the document from the file system (not from memory)
2. Claude produces the Review Report (format defined below)
3. You review the report, give feedback, and request any edits
4. You confirm the document is complete
5. Claude marks it done and you move to the next

This process is designed to be resumed across many sessions. The document sequence checklist at the bottom tracks your position.

---

## SYSTEM CONTEXT

**Document System:** Context Files
**Root Location:** `[workspace]/4_Context_Files/`

**Standards Authority (always read from file, not from memory):**
- Foundation Standards: `AI Mastery Toolkit v4/3_AI_&_Human_Capabilities/0_Documentation_Standards/1_Foundation_Standards_v2.2.md`
- Organization Standards: `AI Mastery Toolkit v4/3_AI_&_Human_Capabilities/0_Documentation_Standards/2_Organization_Standards_v2.2.md`
- Architecture Map: `AI Mastery Toolkit v4/4_Context_Files/Level_0_Map_&_Preferences/Complete_Document_Architecture_Map_CX0_v2.md`

---

## REVIEW PROTOCOL — ONE DOCUMENT AT A TIME

### Before Starting Each Document

State the document you're reviewing and its file path. Read it fresh from the file system. Do not rely on memory of prior sessions.

---

### CHECK 1: Standards Compliance

Verify against Foundation Standards v2.2 (§2 metadata, §3 file naming) and Organization Standards v2.2 (§7 document structure):

| # | Check Item | Standard | Result |
|---|---|---|---|
| 1 | `**Created:**` field present (YYYY-MM-DD format) | Foundation §2 | |
| 2 | `**Last Updated:**` field present (YYYY-MM-DD format) | Foundation §2 | |
| 3 | `**Version:**` field present (vX.Y format) | Foundation §2 | |
| 4 | `**Purpose:**` field present and under 100 characters | Foundation §2 | |
| 5 | `**Status:**` field present | Foundation §2 | |
| 6 | No legacy `**Level:**` / `**Domain:**` / `**Document:**` fields remaining | Migration | |
| 7 | Single H1 title only (no H1 headings appear in document body) | Org §7 | |
| 8 | No skipped heading levels (e.g., H2 jumping to H4) | Org §7 | |
| 9 | `## HOW TO USE THIS DOCUMENT` section present | System std | |
| 10 | No double `---` separator artifact (`---\n\n---`) | System std | |
| 11 | No duplicate metadata or version history blocks at document end | Foundation §2 | |
| 12 | No `**Related Documents:**` sections (use INDEX files instead) | Foundation §2 | |

**Standards Result:** PASS / PASS WITH NOTES / FAIL

---

### CHECK 2: Architecture Map Alignment

Cross-reference the document against Architecture Map v2, Level 1 section:

- Is this document listed in the Map under its correct domain?
- Does the document title match what the Map specifies?
- Does the content match the Map's description of what this document should contain?
- Are there sections the Map implies should exist that are absent?
- Does the document reveal anything that should trigger a Map update?

**Map Result:** ALIGNED / NEEDS CLARIFICATION / MAP UPDATE TRIGGERED

---

### CHECK 3: AI Continuity and Content Analysis

Perform independent analysis across five dimensions:

**A. Content Completeness**
Are any sections thin, underdeveloped, or clearly placeholder text? Look for: `[NEEDS PERSONAL BASELINE]`, `[NEEDS CALIBRATION]`, `[TBD]`, `[PLACEHOLDER]`, or sections with only a heading and no content.

**B. Internal Consistency**
Does the document contradict itself? Does the same concept appear differently in two places within this document?

**C. Cross-Document Continuity**
Does this document reference or depend on content in another document? Is that reference accurate, pointing to a document that exists and contains what is implied? Flag forward references to documents that haven't been reviewed yet, but do not resolve them until we reach those documents.

**D. Conflicts with Related Documents**
Based on what you know from the documents already reviewed in this sequence, does any content here conflict with content there? (Values listed differently, different versions of the same metric, contradictory protocols, etc.)

**E. Scope**
Is there content in this document that belongs in a different document? Is there content clearly missing from this document that is not covered elsewhere in the system?

---

### REVIEW REPORT FORMAT

Output using this exact format after reading and analyzing the document:

```
---

## REVIEW REPORT: [Document Title]

**File:** `[filename.md]`
**Path:** `[folder/subfolder/]`
**Word Count:** [N words]
**Date Reviewed:** [YYYY-MM-DD]

---

### Check 1: Standards Compliance

[Completed table with Pass / Fail / N/A in each Result cell]

**Standards Result:** [PASS / PASS WITH NOTES / FAIL]

[If FAIL or PASS WITH NOTES: list specific items needing correction]

---

### Check 2: Architecture Map Alignment

[Narrative assessment — 2-5 sentences]

**Map Result:** [ALIGNED / NEEDS CLARIFICATION / MAP UPDATE TRIGGERED]

[If MAP UPDATE TRIGGERED: state exactly what in the Map needs to change]

---

### Check 3: AI Analysis

**Content Completeness:**
[Findings — bullet each identified placeholder or thin section]

**Internal Consistency:**
[Findings — bullet any contradictions, or "No issues found"]

**Cross-Document Continuity:**
[Findings — bullet any reference issues or cross-doc dependencies to flag]

**Conflicts:**
[Findings — bullet any conflicts with previously reviewed documents, or "No conflicts identified"]

**Scope:**
[Findings — any content that's in the wrong place, or missing content]

---

### Recommendations

[Numbered list of specific, actionable recommended changes in priority order]
1. [Highest priority — likely to be addressed this session]
2. [Second priority]
...
[N]. [Lower priority or deferred]

---

### Ready for Your Feedback

[Brief summary: "The document is solid / needs minor fixes / needs significant work." Invite [User]'s response.]

---
```

---

### After [User]'s Feedback

1. Make only the edits [User] approves or requests
2. When edits are complete, re-verify the changed sections pass their checks
3. Confirm completion with [User]
4. Mark the document `✓` in the checklist below
5. Announce the next document in sequence

---

## ARCHITECTURE MAP UPDATE PROTOCOL

If any review triggers a Map update, do not make the update immediately. Instead:

1. Log it in the "Pending Map Updates" section at the bottom of this file
2. Accumulate updates across multiple document reviews
3. Make a single batch update to Architecture Map v2 at the end of a review block (at [User]'s direction)

This prevents constant re-reads of the Map and keeps momentum on document reviews.

---

## THE REVIEW SEQUENCE

Mark `✓` when complete, `~` when reviewed but pending edits, `→` for current document.

### LEVEL 1 — PERSONAL FOUNDATION

**D1: Identity Foundation** (`Level_1_Foundation/0_Personal_Foundation/D1_Identity_Foundation/`)
- [✓] `00_Personal_Philosophy_Foundation_CX1.md`
- [✓] `01_Personal_Mission_and_Values_Statement_CX1.md`
- [✓] `02_Life_Vision_and_Goals_Framework_CX1.md`
- [✓] `03_Personal_Brand_and_Identity_Document_CX1.md`
- [✓] `04_Decision_Making_Principles_CX1.md`

**D2: Health and Performance** (`Level_1_Foundation/0_Personal_Foundation/D2_Health_and_Performance/`)
- [✓] `05_Health_Profile_and_Optimization_Protocols_CX1.md`
- [✓] `06_Energy_Management_System_CX1.md`
- [✓] `07_Mental_Fitness_and_Resilience_Practices_CX1.md`
- [✓] `08_Peak_Performance_Routines_CX1.md`

**D3: Wealth and Resources** (`Level_1_Foundation/0_Personal_Foundation/D3_Wealth_and_Resources/`)
- [✓] `09_Financial_Operating_System_CX1.md`
- [✓] `10_Time_Allocation_Framework_CX1.md`
- [✓] `11_Knowledge_and_Learning_Curriculum_CX1.md`
- [✓] `12_Asset_and_Resource_Inventory_CX1.md`

**D4: Relationships and Legacy** (`Level_1_Foundation/0_Personal_Foundation/D4_Relationships_and_Legacy/`)
- [✓] `13_Relationship_Management_System_CX1.md`
- [✓] `14_Communication_Preferences_and_Protocols_CX1.md`
- [✓] `15_Legacy_and_Contribution_Framework_CX1.md`

---

### LEVEL 1 — BUSINESS FOUNDATION

**D1: Strategic Foundation** (`Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/`)
- [✓] `01_Brand_Guidelines_CX1.md`
- [✓] `02_Key_Message_Platform.md` *(chunked — INDEX + 8 chunks, all clean)*
- [✓] `03_Business_Strategy_Document_CX1.md`
- [✓] `04_Ideal_Client_Profiles.md` *(chunked — INDEX + 5 chunks, all clean)*

**D2: Operational Excellence** (`Level_1_Foundation/1_Business_Foundation/D2_Operational_Excellence/`)
- [✓] `05_Service_Product_Catalog_CX1.md`
- [✓] `06_Standard_Operating_Procedures_CX1.md`
- [✓] `07_Client_Journey_Map_CX1.md`
- [✓] `08_Quality_Standards_and_Checklists_CX1.md`

**D3: Intellectual Property** (`Level_1_Foundation/1_Business_Foundation/D3_Intellectual_Property/`)
- [✓] `09_Proprietary_Methodologies_and_Frameworks.md` *(chunked — INDEX + 3 chunks, all clean)*
- [✓] `10_Content_Library_and_Templates_CX1.md`
- [✓] `11_Case_Studies_and_Success_Stories_CX1.md`

**D4: Systems and Scale** (`Level_1_Foundation/1_Business_Foundation/D4_Systems_and_Scale/`)
- [✓] `12_Tech_Stack_Documentation_CX1.md`
- [✓] `13_AI_Integration_Playbook_CX1.md`
- [✓] `14_Sales_and_Lead_Qualification_Framework_CX1.md`
- [✓] `15_Financial_Model_and_Metrics_CX1.md`

---

### LEVEL 0 — ARCHITECTURE MAP

- [✓] `Complete_Document_Architecture_Map_CX0_v2.md` *(reviewed — clean, no edits needed)*

---

### LEVEL 2 — STRATEGY *(review when documents exist)*
- [ ] `Business_Strategy_and_Positioning.md`
- [ ] `Annual_Operating_Plan.md`
- [ ] `Master_Timeline.md`

### LEVEL 3 — PORTFOLIO *(review when documents exist)*
- [ ] `Offering_Portfolio_Map_CX3.md`
- [ ] `Client_Journey_Map_CX3.md`

### LEVEL 4+ *(review offering specs and content strategies as they are created)*

---

## SESSION NOTES

Use this section to record where each session ends and any outstanding issues.

| Date | Session End Point | Notes |
|------|------------------|-------|
| 2026-02-19 | Personal Foundation migration complete | All 16 Personal Foundation docs created/updated. Review sequence not yet started. |
| 2026-02-20 | Doc 00 review complete | Edits applied: Purpose field shortened, Related Documents section removed. Architecture Map v2 updated to add Doc 00. Two cross-doc flags logged below. |
| 2026-02-22 | Doc 01 review complete | Edits applied: Compassionate Honesty added to conflict resolution framework, Jay Abraham attribution added to Preeminence Operating Framework, version bumped to v4.1. QC Protocol v3 paths updated to v4. |
| 2026-02-22 | Personal Foundation Docs 02-15 complete | All clean — no edits needed. Streamlined review mode adopted per user feedback. |
| 2026-02-22 | Business Foundation COMPLETE + Architecture Map | D1: Doc 01 (Brand Guidelines) — 3 edits (HOW TO USE added, 20→40 years, Jay Abraham). Doc 02 (Key Message Platform, 9 chunks) — clean. Doc 03 (Business Strategy) — 4 edits (Purpose trimmed, 30→40 years, Jay Abraham, HOW TO USE added). Doc 04 (Ideal Client Profiles, 6 chunks) — clean. D2: Doc 05 — 2 edits (Purpose trimmed, HOW TO USE added). Doc 06 — clean. Doc 07 — Purpose trimmed. Doc 08 — clean. D3: Doc 09 (3 chunks) — clean. Doc 10 — 7 H1→H2 heading cascade fix. Doc 11 — Purpose trimmed. D4: Docs 12-14 — clean. Doc 15 — Purpose trimmed. Architecture Map v2 — clean. **All Level 1 documents and Level 0 Architecture Map review COMPLETE.** |

---

## PENDING MAP UPDATES

*(Log Architecture Map update triggers here as they are discovered during review)*

| Discovered During | Update Needed | Priority |
|------------------|---------------|----------|
| Personal Foundation migration | Architecture Map v2 does not reflect the new Doc 00 (Personal Philosophy Foundation) added to D1 Identity Foundation | ~~Medium~~ DONE 2026-02-20 |
| Doc 00 review | Cross-check: "Who You Serve" in Doc 00 vs. Business Foundation Doc 04 (Ideal Client Profiles) — same client described from personal vs. business lens; verify consistency | ~~Low~~ VERIFIED 2026-02-22 — consistent across docs |
| Doc 00 review | Cross-check: "Cognitive Architecture" methodology named in Doc 00 vs. Business Foundation Doc 09 (Proprietary Methodologies and Frameworks) — verify descriptions align | ~~Low~~ VERIFIED 2026-02-22 — consistent, 7-layer model defined in Doc 09 INDEX |

---

## NOTES ON SPECIAL CASES

**Doc 00 (Personal Philosophy Foundation):** This document does not appear in the Architecture Map v2 — it was added during the Personal Foundation migration as a standalone philosophical foundation document. When reviewing Doc 00, include a specific check for whether the Architecture Map should be updated to list it.

**Doc 09 (Proprietary Methodologies) — Chunked Document:** This document is chunked across multiple files. Review all chunks as a unit. Verify that chunk INDEX, chunk navigation headers, and parent document references are all consistent.

**Placeholder Fields:** Several documents contain fields marked `[NEEDS PERSONAL BASELINE]` or `[NEEDS CALIBRATION]` — particularly in D2 Health docs. These are intentional — do not flag as errors. Flag them as "pending personal data entry" in your report so [User] is aware and can decide when to address them.

**Architecture Map v2 Review (last):** Review the Architecture Map last, after all Level 1 documents are complete. The Map should accurately reflect the actual system at that point — including any new documents created, any section updates, and any structural decisions made during the review process.
