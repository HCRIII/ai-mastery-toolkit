# 09_Meeting_Capture_Publication
## Specification Document

**Created:** 2026-03-07
**Version:** v1.0
**Status:** Active
**Companion Framework:** `7_Frameworks/09_Meeting_Capture_Publication_Framework.md`
**Companion Workflow:** `9_Workflows/09_Meeting_Capture_Publication_Workflow.md`

---

## Purpose

This specification defines exactly what each output of the Meeting Capture & Publication system must contain, how it must be structured, and what quality standards it must meet. The workflow executes this spec; the framework explains why.

---

## Input Specification

### Required Inputs (per meeting)

| Input | Format | Notes |
|-------|--------|-------|
| Transcription | `.md` or `.txt` → convert to `.md` | Raw speech-to-text acceptable; artifacts preserved |
| Notes / Summary | `.md` or `.docx` → convert to `.md` | AI-generated or human; may be chapter-structured |
| Meeting metadata | Captured in `_index.md` | Date, guest identifier, video URL, YouTube URL |

### Optional Inputs

- Previous meeting context (for recurring guest series)
- ICP data for guest (if known)

### What Does NOT Enter the Toolkit

- Audio files (`.mp3`, `.wav`, `.m4a`)
- Video files (`.mp4`, `.mov`)
- Screen recordings

---

## Output Specifications

### Output 1: Blog Post Content (`blog-post-content.md`)

**Structure:** [Your Organization] 8-section format (from `[Your Organization]_Post_Content_Structure_v4_Complete.md`)

| Section | Required | Notes |
|---------|----------|-------|
| BODY COPY SUMMARY | Yes | Brand voice; 3–5 paragraphs; opens with hook; includes video embed note |
| AI-ENABLED LEVERAGE | Yes | 1–2 prompts tied to the session topic |
| DELIBERATE PRACTICE & MASTERY | Yes | One specific practice assignment |
| PILLAR PAGE INTEGRATION | Yes | At least 1 internal link |
| FEATURED IMAGE PROMPT | Yes | Steampunk-cyberpunk aesthetic direction |
| VIDEO SCRIPT SUMMARY | Adapted | For meeting posts: description of video content rather than HeyGen script |
| AI RESEARCH PROMPT | Yes | Topic-relevant research prompt |
| COMMUNITY CONTENT LOOP | Yes | Engagement question tied to meeting content |

**Anonymization:** Guest referred to as "Community Member" unless named attribution is documented in `_index.md`.

**CTAs:** Minimum 2 CTAs per post, drawn from current community priorities. Standard CTA set:
- Join the community (if guest post is public-facing)
- Upgrade to Essentials (if Explorer-tier post)
- Book a Clarity Call (if coaching relevance is high)

**Quality standard:** Post must stand on its own without the video. A reader who does not watch the video should receive full value from the written content.

---

### Output 2: Newsletter Snippet (`newsletter-snippet.md`)

**Purpose:** One contribution to the weekly newsletter from this meeting. The newsletter synthesizes the full week's work; this snippet is one module within it.

**Structure:**

```markdown
## [Meeting Highlight Headline — compelling, 8–12 words]

[Opening hook sentence — 1–2 sentences, pulls the most transferable insight from the meeting]

[Body — 3–5 sentences. What was explored. What was learned or demonstrated.
Use community member language where quotable. Anonymized.]

[Bridge sentence connecting to broader [Your Organization] mission or current priority.]

[CTA — 1 sentence. Directs reader to blog post, community, or specific action.]
```

**Length:** 100–180 words.
**Tone:** Warm, direct, practitioner-to-practitioner. Not promotional.
**Anonymization:** Same policy as blog post.

---

### Output 3: Performance Evaluation (`[YYYY-MM-DD]-performance-evaluation.md`)

**Rubric:** `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D2_Operational_Excellence/Meeting_Performance_Rubric_CX1_v1.md`

The rubric is the authoritative source for all dimension definitions, sub-dimensions, scoring anchors, and the scoring summary template. Do not reproduce or paraphrase the rubric here — reference and apply it.

**Dimensions (7):** Facilitation · Active Listening · Trusted Advisor Trust Building · Interaction Quality · Topic Coverage · Guest Contribution · ICP Behavioral Markers

**Sub-dimensions:** 28 total (4 per dimension). See rubric for full list and level descriptors.

**Scoring:** 0–100% per sub-dimension, using five standardized anchors (0%, 25%, 50%, 75%, 100%). Intermediate values permitted. See rubric scale table.

**Required output per evaluation:**
- Scoring Summary table (copy from rubric template): all 28 sub-dimensions + 7 dimension averages + composite
- Per-dimension: 1–2 sentence observation grounded in transcript evidence
- Top 2 strengths (specific, with evidence)
- Top 2 improvement areas (specific, with actionable recommendation)
- One "next meeting priority" — the single most impactful change for next session

---

### Output 4: EIS Intake Log (`eis-intake-log.md`)

**Purpose:** Documents what was extracted from this meeting and routed to EIS. Provides an audit trail.

**Structure:**

```markdown
# EIS Intake Log — [Meeting ID]

**Processed:** [YYYY-MM-DD]
**AI evaluator note:** [Brief note on the intelligence quality of this meeting]

## Market Signals Extracted
[List each signal with its EIS destination and signal number]

## Customer Voice Entries
[List each verbatim or near-verbatim extracted, with CVL entry reference]

## Step-Function or Blue Ocean Flags
[Any signals that triggered further action — or "None"]

## Context File Updates
[Any updates routed to 10_Incoming_Material/ — or "None"]
```

---

## File Management Specification

### Meeting Folder Naming

`YYYY-MM-DD-[guest-lastname-hyphenated]`

Use the guest's actual last name for internal folder identification (e.g., `2026-02-27-jason-denham`). Anonymization applies to published and distributed content only — the internal folder uses the real identifier for unambiguous reference. Named attribution approval (documented in `_index.md`) governs content publication, not folder naming.

### File Format

All files: `.md`
All file names: lowercase with hyphens, no spaces.

### Location

`4_Context_Files/Level_6_Asset_Production/02_Community-Site/Meetings/[meeting-id]/`

### Source File Handling

Transcription and notes files in `7_Session_Working_Files/` are the working copies. After processing, the `.md` versions are copied to the Level_6 meeting folder. The Session Working Files originals are retained until end-of-session checkpoint and then archived per standard session protocol.

---

## Community Meeting Post Spec

See `Level_5_Content_Strategy/02_Community-Site/Community_Meeting_Post_Spec_CX5_v1.md` for the channel-specific content requirements governing how meeting posts appear on the community site.

---

## Version History

- v1.0 (2026-03-07): Initial spec. Four outputs defined with full structure and quality standards. Jason Denham 2026-02-27 meeting is the inaugural specimen case.
