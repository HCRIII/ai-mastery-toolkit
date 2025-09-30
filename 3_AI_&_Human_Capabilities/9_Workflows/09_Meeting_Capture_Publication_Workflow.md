# 09_Meeting_Capture_Publication
## Workflow Document

**Created:** 2026-03-07
**Version:** v1.0
**Status:** Active
**Companion Framework:** `7_Frameworks/09_Meeting_Capture_Publication_Framework.md`
**Companion Spec:** `8_Specifications/09_Meeting_Capture_Publication_Specification_v1.0.md`
**Trigger prompt:** `1_Prompts/00-core-system/process-video-content/system.md`

---

## Trigger

This workflow is initiated by the command:

> "Run community meeting processing for [meeting-id]"

Or equivalently: drop transcript and notes into Session Working Files and invoke the prompt.

---

## Pre-Flight Checklist

Before beginning, confirm:

- [ ] Transcription file is available and converted to `.md`
- [ ] Notes/summary file is available and converted to `.md`
- [ ] Meeting metadata is known (date, guest, video URL, YouTube URL)
- [ ] Context loaded: Brand Guidelines, Key Message Platform, ICP Profiles, `Community_Meeting_Post_Spec_CX5_v1.md`, `Newsletter_Weekly_Spec_CX5_v1.md`, `Meeting_Performance_Rubric_CX1_v1.md`

---

## Phase 0: Intake Setup (Silent)

1. Create meeting folder by copying `_MEETING_FOLDER_TEMPLATE/` to:
   `Level_6_Asset_Production/02_Community-Site/Meetings/[meeting-id]/`

2. Populate `_index.md` with meeting metadata.

3. Copy transcript and notes `.md` files from Session Working Files to meeting folder.

4. Add transcript summary to `EIS/8_Intake_Intelligence/Transcript_Queue.md`:
   ```
   ### Transcript [###] — [YYYY-MM-DD]
   **Type:** Community Call
   **Participant type:** ICP segment (identify which)
   **Duration:** [approx]
   **Source:** Transcription + notes
   **Raw content:** [paste 3–5 key quotes or summary paragraph]
   **Status:** Queued for Phase 1 processing
   ```

5. Update `Meetings/INDEX.md` — set all status fields to 🔄.

**Output of Phase 0:** Folder exists, files copied, transcript queued. No user output.

---

## Phase 1: Intelligence Extraction (EIS Routing)

Load: transcript + notes. Run the Intake Protocol evaluation questions:

1. What observable market signals does this conversation contain?
   → Route each signal to `Market_Signals_Register.md`

2. What customer voice verbatims are present?
   → Route each to `Customer_Voice_Log.md`

3. Is there anything that belongs in Context Files (refines understanding of [User]'s ICPs, positioning, or identity)?
   → Route to `10_Incoming_Material/` with intake assessment note

4. Does anything here indicate a step-function opportunity not yet registered?
   → Route to `Step_Function_Register_CX2.md` or `Emerging_Opportunity_Log.md`

5. Write `[YYYY-MM-DD]-eis-intake-log.md` documenting all extractions.

6. Mark `Transcript_Queue.md` entry as processed.

**User output (brief):** Confirm EIS extractions complete. List what was routed and where.

---

## Phase 2: Blog Post Content Production

Load: Brand Guidelines, Key Message Platform, ICP Profiles, `Community_Meeting_Post_Spec_CX5_v1.md`, `[Your Organization]_Post_Content_Structure_v4_Complete.md`.

Read: transcript + notes (meeting folder).

Produce all 8 sections per the spec. Specific guidance:

- **Hook:** Draw from the most transferable or surprising insight in the meeting.
- **Body:** Synthesize the meeting's core content — do not summarize chronologically. Extract the teachable framework.
- **Guest references:** Anonymize as "Community Member" throughout.
- **CTAs:** Select 2–3 from the current CTA set (see Spec). Prioritize community join + upgrade CTAs unless coaching relevance is high.
- **Video embed note:** Include a line directing readers to watch the video in the post.

Write output to `[YYYY-MM-DD]-blog-post-content.md`.

**User output:** Present blog post content in full for review. Flag any sections where source material was thin.

---

## Phase 3: Newsletter Snippet Production

Load: `Newsletter_Weekly_Spec_CX5_v1.md`.

Produce newsletter snippet per the spec (100–180 words, 5-part structure).

Write output to `[YYYY-MM-DD]-newsletter-snippet.md`.

Stage snippet in newsletter assembly queue (note in `[YYYY-MM-DD]-newsletter-snippet.md` which issue it is staged for).

**User output:** Present snippet for review.

---

## Phase 4: Performance Evaluation

Load: `Meeting_Performance_Rubric_CX1_v1.md` from `Level_1_Foundation/1_Business_Foundation/D2_Operational_Excellence/`.

Read: transcript + notes.

Score all 7 dimensions per the rubric:
- D1 Facilitation (4 sub-dimensions)
- D2 Active Listening (4 sub-dimensions)
- D3 Trusted Advisor Trust Building (4 sub-dimensions)
- D4 Interaction Quality (4 sub-dimensions)
- D5 Topic Coverage (4 sub-dimensions)
- D6 Guest Contribution (4 sub-dimensions)
- D7 ICP Behavioral Markers (4 sub-dimensions)

Use the Scoring Summary Template from the rubric. All scores in percentage (0–100%).

Write output to `[YYYY-MM-DD]-performance-evaluation.md`.

**User output:** Present evaluation summary — composite score, top 2 strengths, top 2 improvement areas, and single "next meeting priority." Full detail in file.

---

## Phase 5: Assessment Debrief

Read through all produced outputs with the following questions active:

1. **IP scan:** Does anything from this meeting extend existing IP or suggest new IP not yet registered?
   → If yes: add to `Unique_IP/` assessment queue or flag for ip-assessment prompt

2. **Context scan:** Does anything update the understanding of [User]'s identity, ICPs, or [Your Organization]'s positioning?
   → If yes: route to `10_Incoming_Material/` with intake note

3. **Behavioral observations:** Any notable interaction patterns worth capturing for System Wisdom?
   → If yes: note in session debrief for checkpoint-update

4. **System improvement:** Does this processing run reveal any gaps in the workflow, spec, or framework?
   → If yes: note for next version update

**User output:** Brief debrief summary. Flag anything actioned.

---

## Phase 6: Publish Blog Post

Using browser tools (Claude in Chrome):

1. Navigate to the existing community post (URL from `_index.md`).
2. Open the post for editing in WordPress.
3. Add the produced blog post content from `blog-post-content.md` to the post body.
4. Confirm video embed is present and properly formatted.
5. Publish / Update.
6. Confirm live URL and record in `_index.md`.

**User output:** Confirm post is live. Provide URL.

---

## Phase 7: Index Update

1. Update `Meetings/INDEX.md` — mark all completed outputs as ✅.
2. Update `Level_6_Asset_Production/02_Community-Site/INDEX.md` — update meeting row.
3. Update `_index.md` — record processing completion date and published URL.
4. Mark `Transcript_Queue.md` entry as fully processed.

**User output:** Confirm processing complete. List all outputs produced.

---

## Standard Time Estimate

| Phase | Estimated Time |
|-------|---------------|
| 0: Intake setup | 5 min |
| 1: EIS extraction | 10–15 min |
| 2: Blog post production | 20–30 min |
| 3: Newsletter snippet | 5–10 min |
| 4: Performance evaluation | 10–15 min |
| 5: Assessment debrief | 5–10 min |
| 6: Publish | 5–10 min |
| 7: Index update | 5 min |
| **Total** | **~65–100 min** |

---

## Deviations and Edge Cases

**Missing transcript:** If only notes/summary is available (no transcript), note in `_index.md`. Phases 1, 2, 4 proceed with reduced fidelity — flag in outputs.

**Recurring guest (multi-meeting series):** Load previous meeting's `performance-evaluation.md` before Phase 4. Compare scores across meetings to show trend.

**Guest with named attribution approved:** Replace all "Community Member" references with the guest's name. Document in `_index.md` that attribution is approved.

**Meeting is highly confidential:** Do not route verbatims to EIS Customer Voice Log. Summarize only, no direct quotes.

---

## Version History

- v1.0 (2026-03-07): Initial workflow. Seven phases defined. Jason Denham 2026-02-27 is inaugural run.
