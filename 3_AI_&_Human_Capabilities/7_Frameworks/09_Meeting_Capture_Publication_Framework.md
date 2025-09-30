# 09_Meeting_Capture_Publication
## Framework Document

**Created:** 2026-03-07
**Version:** v1.0
**Status:** Active
**Companion Spec:** `8_Specifications/09_Meeting_Capture_Publication_Specification_v1.0.md`
**Companion Workflow:** `9_Workflows/09_Meeting_Capture_Publication_Workflow.md`
**Companion Automation:** `10_Automations/Meeting_Capture_Publication_Automation.md`

---

## Purpose

This framework defines the conceptual model for converting community meeting recordings into a full suite of toolkit-registered, community-published, and intelligence-enriched outputs — using text derivatives only, with no audio or video stored in the toolkit.

It answers: *Why does this system exist, what value does it create, and how do its components relate to each other?*

---

## The Core Problem

Community meetings are high-value intelligence events. Each one contains:
- Real customer language, objections, and goals (market intelligence)
- Demonstrable expertise worth publishing (content)
- Performance feedback (skill development)
- IP seeds — patterns and ideas worth capturing (business compounding)

Without a processing system, this value dissipates. The video lives on a platform. The transcript sits in a folder. Nothing compounds.

---

## The Framework Model: Five Value Streams

A single community meeting recording generates five distinct value streams:

```
RAW MEETING RECORDING
        │
        ├── 1. INTELLIGENCE STREAM → EIS (market signals, customer voice)
        │
        ├── 2. CONTENT STREAM → Community blog post (published)
        │
        ├── 3. NEWSLETTER STREAM → Weekly newsletter contribution
        │
        ├── 4. LEARNING STREAM → Performance evaluation (skill development)
        │
        └── 5. SYSTEM STREAM → Context file updates, IP capture, toolkit enrichment
```

Each stream is independent — the failure of one does not prevent the others. Each stream has its own destination, format, and governance.

---

## The Token Efficiency Principle

**No audio or video files enter the toolkit.** The meeting recording lives on YouTube and the community site. Only text derivatives enter the system:

| Derivative | Format | Token Cost | Value |
|------------|--------|------------|-------|
| Transcription | `.md` | Medium | Full intelligence extraction |
| Notes / Summary | `.md` | Low | Efficient context reference |
| Produced outputs | `.md` | Low | Reusable across streams |

This architecture makes every meeting processable within a standard session context window.

---

## The Compounding Loop

Each meeting processed adds to three compounding stores:

1. **EIS** — accumulates real market signals that calibrate strategy
2. **Toolkit context** — accumulates intelligence about ICPs, messaging, and IP
3. **Performance baseline** — accumulates evaluation data that improves facilitation over time

The compounding effect is asymmetric: early meetings establish baselines, later meetings build on them. A community with 50 processed meetings has a qualitatively different intelligence foundation than one with 5.

---

## Anonymization Policy

Community members are anonymized in all published and toolkit content by default. Attribution (named) requires explicit consent documented in the meeting folder's `_index.md`. Default identifier in all content: **"Community Member."**

---

## Newsletter Architecture

The weekly newsletter synthesizes [Your Organization] activity. Community meetings are one primary input source:

| Newsletter Type | Cadence | Platform | Purpose |
|----------------|---------|----------|---------|
| Free Newsletter | Weekly | MailerLite | Full list — synthesizes week's work, highlights meeting content, CTAs to community |
| Premium Newsletter | TBD | MailerLite | Potential deeper-dive format for paid community tier |

Each meeting contributes one snippet to the free newsletter assembly queue. The snippet is produced during meeting processing and staged for the next weekly send.

---

## Meeting Performance Evaluation Model

Evaluation covers four scopes:

| Scope | What Is Evaluated | Who Benefits |
|-------|------------------|--------------|
| Facilitation | [User]'s performance as host/guide | [User]'s skill development |
| Interaction quality | Dialogue depth, responsiveness, engagement | Relationship and community quality |
| Topic coverage | Content completeness, on-message delivery, ICP relevance | Content and positioning quality |
| Guest contribution | Guest engagement, insight quality, learning arc | Community value and ICP modeling |

Full-scope evaluation creates a four-dimensional feedback record that compounds across meetings into a performance baseline.

---

## The Top-Down Migration Path

Current state (bottom-up): meetings happen ad hoc; content is produced inconsistently.

Target state (top-down): meetings are scheduled around content themes; topics are drawn from the First 100 Posts plan and OKR priorities; guests are selected by ICP alignment; the processing pipeline runs every time.

This framework is designed for both states — it adds value immediately on ad hoc meetings and scales cleanly into a top-down planned content system.

---

## Relationship to Other Toolkit Systems

| System | Relationship |
|--------|-------------|
| EIS (6_External_Intelligence) | Receives intelligence extracted from meetings |
| Level_6_Asset_Production/02_Community-Site | Stores all meeting production assets |
| Level_5_Content_Strategy/02_Community-Site | Governs content standards for meeting posts |
| Weekly Newsletter (04_Email-List) | Receives meeting snippets as one input source |
| System Wisdom (5_System_Wisdom) | May receive behavioral observations from meetings |
| community-meeting-processing prompt | The executable trigger that runs this framework |
