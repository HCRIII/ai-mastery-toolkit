# Content Published Log

**Created:** 2026-03-07
**Last Updated:** 2026-03-07
**Purpose:** Publication state register — source of truth for what's live vs. unpublished across all channels. Read by `outreach-content` system prompt at Step 0 to determine current campaign state.
**Status:** Active
**Location:** `4_Context_Files/Level_6_Asset_Production/Content_Published_Log.md`

---

## How This File Works

One row per published asset. Assets that exist in Level 6 channel folders but do not have a row in this file are **unpublished**.

The `outreach-content` system prompt reads this file at the start of every session to determine:
- Which assets are live across which channels
- Which assets are complete but unpublished (in `04_Complete/` status)
- Which rotation cycles have been partially or fully deployed

**Update protocol:** Update this file within the same session as any publication event. Never leave it stale.

---

## Publication Log

| Asset File | Channel | IP Concept | Date Published | URL / Location | Results Logged |
|-----------|---------|-----------|----------------|----------------|---------------|
| — | — | — | — | — | — |

*No assets published yet. Campaign in production phase — all assets at Draft status as of 2026-03-07.*

---

## Status Reference

| Status | Meaning |
|--------|---------|
| `Draft` | File exists in Level 6; content produced but not reviewed |
| `Complete` | File reviewed and approved; ready for publication |
| `Published` | Asset live on the channel; row added to this log |
| `Archived` | Asset removed from active rotation; not counted in current cycle |

---

## Rotation Cycle Summary

| Cycle | IP Concept | Assets Draft | Assets Published | Cycle Status |
|-------|-----------|----------------|-----------------|--------------|
| 1 | Experiential Technology (Feature 2) | 11 of 11 | 0 | Draft complete |
| 2 | CDPID Snapshot (Feature 1) | 11 of 11 | 0 | Draft complete |
| 3 | Session Harvest (Feature 4) | 11 of 11 | 0 | Draft complete |
| 4 | Prompt Complexity Inversion (Feature 3) | 11 of 11 | 0 | Draft complete |
| 5 | PIE Starter (Feature 5) | 11 of 11 | 0 | Draft complete |
| 6 | Compound Content Architecture (Feature 6) | 11 of 11 | 0 | Draft complete |

*Note: Feature 7 (Community Access) — 11 draft assets produced; assigned to Founding-30 campaign window (not a standard rotation cycle). Email sequences produced separately (see below).*

---

## Draft Assets Register

All files listed below exist in `Level_6_Asset_Production/` with Status: Draft as of 2026-03-07.

### Cycle 1 — Experiential Technology (Feature 2) · Weeks 1–2

| File | Folder | Type | Status |
|------|--------|------|--------|
| Experiential-Technology_Video-Outline.md | 06_YouTube | Video Outline | Draft |
| Experiential-Technology_Thumbnail-Prompt.md | 06_YouTube | Thumbnail Prompt | Draft |
| Experiential-Technology_LI-Post.md | 07_LinkedIn | Social Post | Draft |
| Experiential-Technology_Thumbnail-Prompt.md | 07_LinkedIn | Thumbnail Prompt | Draft |
| Experiential-Technology_FB-Post.md | 08_Facebook | Social Post | Draft |
| Experiential-Technology_Thumbnail-Prompt.md | 08_Facebook | Thumbnail Prompt | Draft |
| Experiential-Technology_IG-Caption.md | 09_Instagram | Social Post | Draft |
| Experiential-Technology_Thumbnail-Prompt.md | 09_Instagram | Thumbnail Prompt | Draft |
| Experiential-Technology_X-Thread.md | 10_X | Social Post | Draft |
| Experiential-Technology_Thumbnail-Prompt.md | 10_X | Thumbnail Prompt | Draft |
| F02-Experiential-Technology_Landing-Page.md | 05_Lead-Magnets | Landing Page | Draft |

### Cycle 2 — CDPID Snapshot (Feature 1) · Weeks 3–4

| File | Folder | Type | Status |
|------|--------|------|--------|
| CDPID-Snapshot_Video-Outline.md | 06_YouTube | Video Outline | Draft |
| CDPID-Snapshot_Thumbnail-Prompt.md | 06_YouTube | Thumbnail Prompt | Draft |
| CDPID-Snapshot_LI-Post.md | 07_LinkedIn | Social Post | Draft |
| CDPID-Snapshot_Thumbnail-Prompt.md | 07_LinkedIn | Thumbnail Prompt | Draft |
| CDPID-Snapshot_FB-Post.md | 08_Facebook | Social Post | Draft |
| CDPID-Snapshot_Thumbnail-Prompt.md | 08_Facebook | Thumbnail Prompt | Draft |
| CDPID-Snapshot_IG-Caption.md | 09_Instagram | Social Post | Draft |
| CDPID-Snapshot_Thumbnail-Prompt.md | 09_Instagram | Thumbnail Prompt | Draft |
| CDPID-Snapshot_X-Thread.md | 10_X | Social Post | Draft |
| CDPID-Snapshot_Thumbnail-Prompt.md | 10_X | Thumbnail Prompt | Draft |
| F01-CDPID-Snapshot_Landing-Page.md | 05_Lead-Magnets | Landing Page | Draft |

### Cycle 3 — Session Harvest (Feature 4) · Weeks 5–6

| File | Folder | Type | Status |
|------|--------|------|--------|
| Session-Harvest_Video-Outline.md | 06_YouTube | Video Outline | Draft |
| Session-Harvest_Thumbnail-Prompt.md | 06_YouTube | Thumbnail Prompt | Draft |
| Session-Harvest_LI-Post.md | 07_LinkedIn | Social Post | Draft |
| Session-Harvest_Thumbnail-Prompt.md | 07_LinkedIn | Thumbnail Prompt | Draft |
| Session-Harvest_FB-Post.md | 08_Facebook | Social Post | Draft |
| Session-Harvest_Thumbnail-Prompt.md | 08_Facebook | Thumbnail Prompt | Draft |
| Session-Harvest_IG-Caption.md | 09_Instagram | Social Post | Draft |
| Session-Harvest_Thumbnail-Prompt.md | 09_Instagram | Thumbnail Prompt | Draft |
| Session-Harvest_X-Thread.md | 10_X | Social Post | Draft |
| Session-Harvest_Thumbnail-Prompt.md | 10_X | Thumbnail Prompt | Draft |
| F04-Session-Harvest_Landing-Page.md | 05_Lead-Magnets | Landing Page | Draft |

### Cycle 4 — Prompt Complexity Inversion (Feature 3) · Weeks 7–8

| File | Folder | Type | Status |
|------|--------|------|--------|
| Prompt-Complexity-Inversion_Video-Outline.md | 06_YouTube | Video Outline | Draft |
| Prompt-Complexity-Inversion_Thumbnail-Prompt.md | 06_YouTube | Thumbnail Prompt | Draft |
| Prompt-Complexity-Inversion_LI-Post.md | 07_LinkedIn | Social Post | Draft |
| Prompt-Complexity-Inversion_Thumbnail-Prompt.md | 07_LinkedIn | Thumbnail Prompt | Draft |
| Prompt-Complexity-Inversion_FB-Post.md | 08_Facebook | Social Post | Draft |
| Prompt-Complexity-Inversion_Thumbnail-Prompt.md | 08_Facebook | Thumbnail Prompt | Draft |
| Prompt-Complexity-Inversion_IG-Caption.md | 09_Instagram | Social Post | Draft |
| Prompt-Complexity-Inversion_Thumbnail-Prompt.md | 09_Instagram | Thumbnail Prompt | Draft |
| Prompt-Complexity-Inversion_X-Thread.md | 10_X | Social Post | Draft |
| Prompt-Complexity-Inversion_Thumbnail-Prompt.md | 10_X | Thumbnail Prompt | Draft |
| F03-Prompt-Complexity-Inversion_Landing-Page.md | 05_Lead-Magnets | Landing Page | Draft |

### Cycle 5 — PIE Starter (Feature 5) · Weeks 9–10

| File | Folder | Type | Status |
|------|--------|------|--------|
| PIE-Starter_Video-Outline.md | 06_YouTube | Video Outline | Draft |
| PIE-Starter_Thumbnail-Prompt.md | 06_YouTube | Thumbnail Prompt | Draft |
| PIE-Starter_LI-Post.md | 07_LinkedIn | Social Post | Draft |
| PIE-Starter_Thumbnail-Prompt.md | 07_LinkedIn | Thumbnail Prompt | Draft |
| PIE-Starter_FB-Post.md | 08_Facebook | Social Post | Draft |
| PIE-Starter_Thumbnail-Prompt.md | 08_Facebook | Thumbnail Prompt | Draft |
| PIE-Starter_IG-Caption.md | 09_Instagram | Social Post | Draft |
| PIE-Starter_Thumbnail-Prompt.md | 09_Instagram | Thumbnail Prompt | Draft |
| PIE-Starter_X-Thread.md | 10_X | Social Post | Draft |
| PIE-Starter_Thumbnail-Prompt.md | 10_X | Thumbnail Prompt | Draft |
| F05-PIE-Starter_Landing-Page.md | 05_Lead-Magnets | Landing Page | Draft |

### Cycle 6 — Compound Content Architecture (Feature 6) · Weeks 11–12

| File | Folder | Type | Status |
|------|--------|------|--------|
| Compound-Content_Video-Outline.md | 06_YouTube | Video Outline | Draft |
| Compound-Content_Thumbnail-Prompt.md | 06_YouTube | Thumbnail Prompt | Draft |
| Compound-Content_LI-Post.md | 07_LinkedIn | Social Post | Draft |
| Compound-Content_Thumbnail-Prompt.md | 07_LinkedIn | Thumbnail Prompt | Draft |
| Compound-Content_FB-Post.md | 08_Facebook | Social Post | Draft |
| Compound-Content_Thumbnail-Prompt.md | 08_Facebook | Thumbnail Prompt | Draft |
| Compound-Content_IG-Caption.md | 09_Instagram | Social Post | Draft |
| Compound-Content_Thumbnail-Prompt.md | 09_Instagram | Thumbnail Prompt | Draft |
| Compound-Content_X-Thread.md | 10_X | Social Post | Draft |
| Compound-Content_Thumbnail-Prompt.md | 10_X | Thumbnail Prompt | Draft |
| F06-Compound-Content_Landing-Page.md | 05_Lead-Magnets | Landing Page | Draft |

### Founding Campaign — Community Access (Feature 7)

*Not a standard rotation cycle. Assigned to Founding-30 campaign window (March 7–31, 2026).*

| File | Folder | Type | Status |
|------|--------|------|--------|
| Community-Access_Video-Outline.md | 06_YouTube | Video Outline | Draft |
| Community-Access_Thumbnail-Prompt.md | 06_YouTube | Thumbnail Prompt | Draft |
| Community-Access_LI-Post.md | 07_LinkedIn | Social Post | Draft |
| Community-Access_Thumbnail-Prompt.md | 07_LinkedIn | Thumbnail Prompt | Draft |
| Community-Access_FB-Post.md | 08_Facebook | Social Post | Draft |
| Community-Access_Thumbnail-Prompt.md | 08_Facebook | Thumbnail Prompt | Draft |
| Community-Access_IG-Caption.md | 09_Instagram | Social Post | Draft |
| Community-Access_Thumbnail-Prompt.md | 09_Instagram | Thumbnail Prompt | Draft |
| Community-Access_X-Thread.md | 10_X | Social Post | Draft |
| Community-Access_Thumbnail-Prompt.md | 10_X | Thumbnail Prompt | Draft |
| F07-Community-Access_Landing-Page.md | 05_Lead-Magnets | Landing Page | Draft |

### Email Sequences

#### Phase 3 — Welcome Sequence (triggers on signup)

| File | Folder | Type | Status |
|------|--------|------|--------|
| Welcome-Day1-Experiential-Technology_Email.md | 04_Email-List | Email | Draft |
| Welcome-Day2-Session-Harvest_Email.md | 04_Email-List | Email | Draft |
| Welcome-Day3-FQOS-Framework_Email.md | 04_Email-List | Email | Draft |
| Welcome-Day4-CDPID-Snapshot_Email.md | 04_Email-List | Email | Draft |
| Welcome-Day5-Founding-Offer_Email.md | 04_Email-List | Email | Draft |

#### Phase 4 — Discount Urgency Close (Days 7–10 after Day 5)

| File | Folder | Type | Status |
|------|--------|------|--------|
| Close-Day7-Discount-Reminder_Email.md | 04_Email-List | Email | Draft |
| Close-Day8-What-Founding-Gets_Email.md | 04_Email-List | Email | Draft |
| Close-Day9-Final-24h_Email.md | 04_Email-List | Email | Draft |
| Close-Day10-Closed-Welcome_Email.md | 04_Email-List | Email (2 versions) | Draft |

### Outreach Reference Files

| File | Folder | Type | Status |
|------|--------|------|--------|
| Founding-30-Tier1-Contact-List.md | 17_Personal-Network-Outreach | Outreach Reference | Draft |
| Founding-30-Tier2-DM-Templates.md | 17_Personal-Network-Outreach | Outreach Reference | Draft |

---

## Draft Asset Totals

| Category | Count |
|----------|-------|
| Video Outlines | 7 |
| Thumbnail Prompts | 35 (5 channels × 7 features) |
| Social Posts (LI, FB, IG, X) | 28 (4 channels × 7 features) |
| Landing Pages | 7 |
| Emails | 9 |
| Outreach Reference Files | 2 |
| **Total** | **88** |

---

*Content Published Log — AI Mastery Toolkit v4 | Level_6_Asset_Production*
