# Example: Content Publishing Workflow

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Structured thinking framework for analysis and decision-making
**Status:** Final

---

This is a completed example showing how to map a real workflow onto the 5-block model.

---

## Workflow Name: Blog Post Publishing Pipeline

**Purpose:** Automate the process of reviewing, approving, and publishing blog posts from draft to live.

**Trigger Frequency:** Every time a writer submits a draft (event-based)

---

## Block 1: TRIGGER

**What starts this process?**

- [x] Event-based: Writer moves document to "Ready for Review" folder in Google Drive
- [ ] Schedule-based
- [ ] Condition-based
- [ ] Manual

**Trigger details:**
- Google Drive webhook fires when file moved to specific folder
- Payload includes: file_id, file_name, author_email, moved_at timestamp

**Filtering:** Are there false triggers to filter out?
- Yes - only trigger if file extension is .docx or .gdoc
- Ignore files with "[DRAFT]" in filename

---

## Block 2: INTAKE & NORMALIZATION

**What data arrives?**

| Field Name | Format | Example | Required? |
|------------|--------|---------|-----------|
| file_id | String | "1a2b3c..." | Yes |
| file_name | String | "New AI Trends 2026.docx" | Yes |
| author_email | Email | "writer@company.com" | Yes |
| moved_at | Timestamp | "2026-02-08T14:30:00Z" | Yes |

**Data cleaning needed:**
- [x] Validate file_id exists in Drive
- [x] Extract clean title (remove file extension)
- [x] Standardize author email to lowercase
- [x] Convert timestamp to ISO 8601

**Enrichment needed:**
- [x] Look up author name from email in employee database
- [x] Extract word count from document
- [x] Calculate estimated reading time (words / 200)
- [x] Add metadata: category, tags (from document properties)

**Standard format output:**
```
{
  file_id: "1a2b3c...",
  title: "New AI Trends 2026",
  author_email: "writer@company.com",
  author_name: "Sarah Chen",
  word_count: 1850,
  reading_time_minutes: 9,
  category: "Technology",
  tags: ["AI", "Trends", "Machine Learning"],
  submitted_at: "2026-02-08T14:30:00Z"
}
```

---

## Block 3: DECISION

**What decisions get made?**

### Decision 1: Quality Check (Rule-based)

- **Type:** Deterministic (rule)
- **Logic:**
  - If word_count < 500, reject ("Too short - minimum 500 words")
  - If word_count > 3000, flag for review ("Long article - confirm intended length")
  - If no category assigned, reject ("Category required")
  - Otherwise pass

### Decision 2: Editor Assignment (AI-powered)

- **Type:** Dynamic (AI judgment)
- **Logic:**
  - AI reads: title, first paragraph, category, tags
  - Classifies best editor based on expertise:
    - "Technical Editor" (for AI, Engineering, Product topics)
    - "Business Editor" (for Strategy, Leadership topics)
    - "Lifestyle Editor" (for Culture, Wellness topics)

**AI Classification:**
- **Prompt:** "Based on this article title and first paragraph, which editor is best suited? Options: Technical Editor, Business Editor, Lifestyle Editor. Consider topic expertise and writing style."
- **Output categories:** Technical, Business, Lifestyle
- **Confidence threshold:** If confidence < 75%, assign to Managing Editor for triage

### Decision 3: Priority Level (Hybrid: Rule + AI)

- **Type:** Hybrid
- **Logic (Rules first):**
  - If tags include "breaking" or "urgent", priority = High
  - If author is C-level executive, priority = High
  - Otherwise, ask AI to assess timeliness
- **AI Assessment:**
  - "Does this content have time-sensitive value? (Yes/No)"
  - If Yes, priority = Medium
  - If No, priority = Low

---

## Block 4: ACTION(S)

**What actions get taken?**

| Action | Can Run in Parallel? | Depends On | Failure Impact |
|--------|----------------------|------------|----------------|
| 1. Create task in project management tool | No | Decision complete | Critical |
| 2. Send notification email to assigned editor | Yes | Task created | Minor |
| 3. Post to Slack #content-review channel | Yes | Task created | Minor |
| 4. Add to editorial calendar | Yes | Task created | Minor |
| 5. Generate SEO suggestions (AI) | Yes | None | Minor |
| 6. Log to analytics database | Yes | None | Minor |

**Sequential vs. Parallel:**
- Sequential: Task must be created first (Action 1)
- Parallel: Actions 2-6 can all run simultaneously after task creation

**Failure handling:**
- If Action 1 fails: Entire workflow fails, alert tech team
- If Action 2 fails: Retry 3 times, then log error (editor will see in project tool)
- If Actions 3-6 fail: Log error, continue (non-critical)

---

## Block 5: REVIEW & LEARNING

**What gets logged?**
- [x] Full execution details (article title, author, assigned editor, priority)
- [x] Timestamps (received, decisions made, actions completed, total duration)
- [x] Success/failure status for each action
- [x] AI confidence scores for editor assignment and priority
- [x] Any errors encountered with stack traces

**Metrics to track:**
- Success rate: 98% target (should complete successfully almost always)
- Latency: < 30 seconds target (fast feedback to writers)
- Editor assignment accuracy: Track if AI-assigned editor reassigns (should be < 5%)
- Quality: Weekly review of 10 random assignments

**Feedback loops:**
- [x] Human review: Managing Editor reviews 5% of AI assignments weekly
- [x] Track: How often do assigned editors reassign to someone else?
- [x] Weekly: If reassignment rate > 10%, refine AI prompt with recent examples
- [x] Monthly: Review rejected articles - are rules too strict?

**Improvement triggers:**
- If success rate < 95%, investigate bottlenecks
- If latency > 60 seconds, optimize enrichment step
- If editor reassignment > 10%, retrain AI classification

---

## Edge Cases & Error Handling

**What could go wrong?**

| Scenario | Probability | Impact | Mitigation |
|----------|-------------|--------|------------|
| Document is locked/not readable | Medium | High | Notify author to check permissions, retry in 5 min |
| Author email not in employee database | Low | Medium | Default to "Guest Contributor", flag for manual review |
| All editors are at capacity | Low | High | Escalate to Managing Editor, add to queue |
| AI confidence very low (< 50%) | Medium | Low | Automatically assign to Managing Editor for triage |
| Project management tool API is down | Low | High | Queue actions locally, retry every 5 min for 1 hour |

---

## Success Criteria

**This workflow is successful when:**
- [x] 98% of submitted articles are processed within 30 seconds
- [x] Editors receive clear notifications with all needed context
- [x] AI assigns correct editor 90%+ of the time (measured by reassignment rate < 10%)
- [x] No manual intervention needed for standard cases
- [x] Writers get immediate feedback if article is rejected

**Ready to implement?**
- [x] All 5 blocks defined
- [x] Edge cases identified
- [x] Success metrics clear
- [x] Team aligned on approach

---

## Implementation Notes

**Built in:** n8n (See Section 9 for implementation)

**Key learnings from production:**
- Initially used only AI for editor assignment → 25% reassignment rate (too high)
- Added rule-based pre-filters (breaking news, C-level authors) → dropped to 8%
- Weekly review of misassignments helped refine AI prompt → now at 4%
- Parallel actions reduced latency from 45s to 12s average

**Current performance (30 days):**
- 487 articles processed
- 98.4% success rate
- Average latency: 11.8 seconds
- Editor reassignment rate: 4.1%
- Zero manual interventions needed
