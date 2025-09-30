# Outreach Process Workflow

**Created:** 2026-03-07
**Last Updated:** 2026-03-07
**Purpose:** Executable workflow for operating the [Your Organization] outreach content engine — from rotation cycle selection through production, publication, and results capture
**Status:** Active
**Version:** 1.0
**Governing Specification:** `3_AI_&_Human_Capabilities/8_Specifications/11_Outreach_Process_Specification_v1.0.md`
**Governing Framework:** `3_AI_&_Human_Capabilities/7_Frameworks/10_Outreach_Process_Framework.md`
**Invocable Operation:** `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/outreach-content/system.md`

---

## Workflow Trigger

This workflow is triggered by invoking `outreach-content` at any session. The `outreach-content` system prompt executes the five-step cycle below automatically. [User] may also trigger specific phases manually when needed.

**Entry Condition:** A session has started. [User] wants to produce outreach content, publish content, or check the status of the current rotation cycle.

**Exit Condition:** Either (a) a new asset has been produced and saved to Level 6, or (b) an existing asset has been reviewed and flagged as ready for publication, or (c) a published asset has been logged in `Content_Published_Log.md` and results have been offered for capture.

---

## Phase 1: Context Load (Silent)

*Executed automatically by `outreach-content` Step 0. No user action required.*

Load the following governing documents before any assessment or production:

1. `4_Context_Files/Level_5_Content_Strategy/Community-Entry_Content_Strategy_CX5_v1.md` — channel roles, content types, volumes, email sequence structures
2. `3_AI_&_Human_Capabilities/8_Specifications/11_Outreach_Process_Specification_v1.0.md` — IP rotation calendar, asset set definitions, channel best practices
3. `4_Context_Files/Level_1_Foundation/D1_Strategic_Foundation/01_Brand_Guidelines_CX1.md` — brand voice, visual standards
4. `4_Context_Files/Level_1_Foundation/D1_Strategic_Foundation/02_Key_Message_Platform_[highest-chunk].md` — Sacred Words, Pagans, Primal Branding architecture
5. `5_System_Wisdom/7_Applied_Knowledge/AI_as_Experiential_Technology_and_the_Three_Taxonomies.md` — source IP for Experiential Technology + CDPID content
6. `4_Context_Files/Level_6_Asset_Production/Content_Published_Log.md` — what's live, what's unpublished, what's drafted

**Gate Check:** If any of these files cannot be found, halt and report which file is missing. Do not proceed to Phase 2 with a missing governing document.

---

## Phase 2: Status Assessment

*Produces a status table for [User]. Waits for direction before proceeding.*

Read `Content_Published_Log.md` and scan the current rotation cycle's Level 6 channel folders.

Determine:

1. **Active rotation cycle:** Which IP concept is the current cycle? How many days have elapsed? How many remain in the 2-week window?
2. **Asset completeness:** For the active IP concept, which of the 12 required content assets exist? Which are in `04_Complete/` (unpublished)? Which are in `02_Draft/`? Which are missing entirely?
3. **Conversion path status:** Does the active IP concept's landing page exist? Is the email sequence (Phase 3 + Phase 4) built?
4. **Adjacent cycles:** How many IP concepts have a complete asset set? How many are partially built?

**Output format:**

```
Active Rotation: [IP Concept] — Cycle [N] of 6 — Day [X] of 14
──────────────────────────────────────────────
CHANNEL ASSETS        | STATUS
──────────────────────────────────────────────
Video Outline         | [Published / Complete / Draft / Missing]
YouTube Thumbnail     | [Published / Complete / Draft / Missing]
LinkedIn Post         | [Published / Complete / Draft / Missing]
LinkedIn Thumbnail    | [Published / Complete / Draft / Missing]
Facebook Post         | [Published / Complete / Draft / Missing]
Facebook Thumbnail    | [Published / Complete / Draft / Missing]
Instagram Caption     | [Published / Complete / Draft / Missing]
Instagram Thumbnail   | [Published / Complete / Draft / Missing]
X Thread              | [Published / Complete / Draft / Missing]
X Thumbnail           | [Published / Complete / Draft / Missing]
Landing Page          | [Published / Live / Complete / Draft / Missing]
Email Sequence        | [Built / Partial / Missing]
──────────────────────────────────────────────
RECOMMENDED ACTION: [see Phase 3]
```

---

## Phase 3: Action Recommendation

*Presents one recommendation. Waits for [User] confirmation before proceeding.*

Based on Phase 2 status, recommend **one** of three actions:

**A — Publish Ready:** One or more assets are in `04_Complete/` status and not yet published. Surface the asset inline for [User]'s final review. State exactly what will be published and where.
> "V02 video outline and LinkedIn post are complete and unpublished. Ready to review for publication?"

**B — Review Draft:** One or more assets exist in `02_Draft/` status and need [User]'s review. Surface the draft inline.
> "LinkedIn post for Experiential Technology is in draft. Here it is — approve to move to Complete, or request revisions."

**C — Generate Next:** No complete or draft assets exist for the current rotation priority. Generate the next asset(s) from the rotation calendar following channel best practices.
> "No assets exist for Session Harvest (Cycle 3 priority). Ready to produce the video outline and LinkedIn post now?"

**Do not proceed past Phase 3 without [User]'s explicit confirmation.** State the recommendation clearly and wait.

---

## Phase 4: Generate or Prepare

*Executes the confirmed action from Phase 3.*

### If Generating (Action C):

Apply the Compound Content Architecture principle — produce the full channel text asset set for the active IP concept in this session. Do not produce one asset and stop.

**Production sequence (within one session):**
1. Video outline (sets the IP narrative arc for all other assets)
2. LinkedIn post (professional paradigm-challenge — longest and most structured)
3. Facebook post (warmer, personal register — derived from LinkedIn)
4. Instagram caption (hook-heavy, derived from core concept)
5. X thread (6–8 tweets — highest compression of the IP concept)
6. All 5 channel thumbnail prompts (concurrent — context is loaded)
7. Landing page (if not yet built — pain statement → IP promise → capture CTA)

**Best practices applied per channel:** per Section 8 of `11_Outreach_Process_Specification_v1.0.md`.

**File naming and location:** per Output Files Manifest in `7_Session_Working_Files/[Your Organization] Outreach_Outreach_Sequence_Planning.md`.

**Visual Journey stage:** All social thumbnails Stage 1–2. Govern by applicable channel brief (01c–01g).

**Save outputs to:** appropriate Level 6 channel folder in `02_Draft/` status. Set header metadata `Status: Draft`.

### If Preparing (Actions A or B):

Surface the asset inline for [User] review. If Action A, present the content exactly as it will appear when published. If Action B, present the draft and note what (if anything) may need revision before publication.

After [User] approval, move file status to `04_Complete/` by updating the header metadata `Status: Complete`.

---

## Phase 5: Publish Flag + Results Capture

*Triggered when [User] confirms a piece has been published.*

**On publication confirmation:**

1. **Update Content_Published_Log.md:** Add a row with: asset file path, channel, IP concept, date published, URL or location.
2. **Update asset file header:** Change `Status: Complete` to `Status: Published` and add `Published:` date and `Published-URL:` fields.
3. **Offer results capture (optional — can be deferred):**
   > "When you have results for this post (views, engagement, link clicks, signups), I can log them to the Outreach Results Register. Capture now or defer to next session?"
4. **If results provided:** Route to `Outreach_Results_Register.md` — log engagement data, link clicks, email signups attributed, direct responses. Extract signal: what does this tell us about ICP resonance, which pain point landed, which IP angle converted.

**Results format in Outreach_Results_Register.md:**
```
## [Date] — [Channel] — [IP Concept]

**Asset:** [file path]
**Published:** [URL or location]
**Results:**
- Views / Impressions: [N]
- Engagement (likes/comments/shares): [N]
- Link clicks: [N]
- Email signups attributed: [N]
- Direct responses: [N]

**Signal:**
- [What this data tells us about ICP resonance]
- [Which pain point produced strongest recognition response]
- [Which segment appears most engaged]
- [Rotation calendar implication]
```

---

## Phase 6: Session Summary

*End of every `outreach-content` session.*

Output:
1. What was produced, reviewed, or published this session (file names and channels)
2. Active rotation cycle position: IP concept, days elapsed, days remaining
3. Complete asset set status for active cycle (updated from Phase 2)
4. Next recommended action for next session
5. Any EIS signal captured (summary of results logged)

---

## Ongoing Rotation Maintenance

After each complete cycle (all 12 assets produced + at least 3 posts published), extract signal from the Results Register and update the rotation priority:

- Which IP concept produced the most link clicks per impression?
- Which segment language produced the most direct responses?
- Which channel produced the most email signups?
- Is any IP concept significantly outperforming? Concentrate on it.
- Is any IP concept significantly underperforming? Adjust the hook angle, not the IP.

This review happens at the end of each 2-week rotation cycle, not continuously. The rotation calendar is updated based on 2 weeks of real data, not 2 days.

---

*Outreach Process Workflow v1.0 — AI Mastery Toolkit v4 | 3_AI_&_Human_Capabilities/9_Workflows*
