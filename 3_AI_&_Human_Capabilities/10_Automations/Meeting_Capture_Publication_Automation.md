# Meeting Capture & Publication — Automation Design

**Created:** 2026-03-07
**Version:** v1.0
**Status:** Design / Future Build
**Companion Workflow:** `9_Workflows/09_Meeting_Capture_Publication_Workflow.md`
**Platform:** MailerLite (newsletter), WordPress (community site), n8n (orchestration)

---

## Purpose

This document defines the automation opportunities within the Meeting Capture & Publication workflow. Current state is manual + AI-assisted. This document maps which phases can be automated, how, and in what sequence to build toward full automation.

---

## Automation Readiness by Phase

| Phase | Current State | Automation Potential | Priority |
|-------|--------------|---------------------|----------|
| 0: Intake setup | Manual | Medium — folder creation can be scripted | Low |
| 1: EIS extraction | AI-assisted | Low — requires AI judgment | Low |
| 2: Blog post production | AI-assisted | Low — requires AI judgment + brand context | Low |
| 3: Newsletter snippet | AI-assisted | Medium — structured format, could template | Medium |
| 4: Performance evaluation | AI-assisted | Low — requires AI judgment | Low |
| 5: Assessment debrief | AI-assisted | Low — requires AI judgment | Low |
| 6: Publish to site | Manual + browser | High — WordPress REST API available | High |
| 7: Index update | Manual | Medium — structured file updates | Medium |

---

## Automation Target 1: WordPress Blog Post Publishing

**Phase:** 6
**Platform:** WordPress REST API
**Priority:** High — most repetitive manual step

### Design

```
Trigger: blog-post-content.md is marked complete in _index.md
    ↓
n8n: Read blog-post-content.md from meeting folder
    ↓
n8n: Parse 8 sections into WordPress block format
    ↓
n8n: POST to WordPress REST API (wp-json/wp/v2/posts)
    - title: [meeting date + "Community Session Highlights"]
    - content: formatted HTML blocks
    - status: "draft" (human review before publish)
    - categories: ["Community Highlights"]
    ↓
n8n: Update _index.md with draft URL
    ↓
Human: Review draft in WordPress editor → Publish
```

**Required:** WordPress application password, n8n HTTP Request node.
**Note:** Publish step remains human — AI-to-publish without review is not the standard.

---

## Automation Target 2: Newsletter Snippet Staging (MailerLite)

**Phase:** 3 + newsletter assembly
**Platform:** MailerLite API
**Priority:** Medium

### Design

```
Trigger: newsletter-snippet.md is marked complete
    ↓
n8n: Read snippet from file
    ↓
n8n: Append snippet to newsletter assembly queue file
    (7_Session_Working_Files/Newsletter_Assembly_Queue.md)
    ↓
Weekly trigger (Sunday): Compile all snippets in queue
    ↓
n8n or AI: Assemble weekly newsletter from queue
    ↓
n8n: POST to MailerLite API as campaign draft
    - subject: [Weekly synthesis headline]
    - from: [Framework Author] <[email]>
    - list: Primary list (all subscribers)
    - content: Assembled newsletter HTML
    ↓
Human: Review in MailerLite → Schedule send
```

**Required:** MailerLite API key, n8n HTTP Request node.
**MailerLite API endpoint:** `https://connect.mailerlite.com/api/campaigns`
**Authentication:** Bearer token (MailerLite API key)

---

## Automation Target 3: Meeting Folder Creation

**Phase:** 0
**Platform:** n8n file system or bash script
**Priority:** Low (5 min manual step)

### Design

```
Trigger: Manual (run at start of processing session)
Input: Meeting ID (YYYY-MM-DD-guest-identifier)
    ↓
Script: Copy _MEETING_FOLDER_TEMPLATE/ to new meeting folder
Script: Populate _index.md with metadata (date, guest, video URL)
Script: Add blank entries for transcript.md and notes.md
    ↓
Output: Meeting folder ready for content drop
```

---

## MailerLite Integration Notes

**Account:** MailerLite
**Primary list:** Complete subscriber list (all newsletter subscribers)
**Newsletter type:** Free weekly broadcast
**Premium newsletter:** TBD — may use MailerLite Groups or separate list for paid tier

### Relevant MailerLite API Calls

```
# Create campaign
POST https://connect.mailerlite.com/api/campaigns
{
  "name": "[Your Organization] Weekly — YYYY-MM-DD",
  "language_id": 1,
  "type": "regular",
  "emails": [{
    "subject": "[subject line]",
    "from_name": "[Framework Author]",
    "from": "[sender email]",
    "content": "[html content]"
  }]
}

# Assign to group/list
POST https://connect.mailerlite.com/api/campaigns/{id}/schedule
{
  "delivery": "scheduled",
  "schedule": {
    "date": "YYYY-MM-DD",
    "hours": "08",
    "minutes": "00",
    "timezone_id": 1
  }
}
```

---

## Build Sequence Recommendation

Build in this order when ready to automate:

1. **WordPress draft creation** (Phase 6) — highest time savings, lowest complexity
2. **Newsletter assembly queue** (Phase 3 staging) — medium complexity, recurring value
3. **MailerLite campaign creation** (newsletter send) — requires queue system first
4. **Meeting folder creation script** (Phase 0) — lowest priority, easiest to defer

---

## Current Manual Workaround

Until automation is built:
- Phase 6: Use Claude in Chrome browser tools to post directly to WordPress
- Phase 3: Stage snippet in `newsletter-snippet.md`; assemble newsletter manually in MailerLite
- Phase 0: Copy template folder manually or via bash command

---

## Version History

- v1.0 (2026-03-07): Initial automation design document. Four automation targets mapped. MailerLite integration notes included.
