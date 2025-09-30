# Outreach Process Specification

---

**Title:** Outreach Process
**Document Type:** Specification
**Version:** v1.0
**Status:** Baselined
**Created:** 2026-03-07
**Last Updated:** 2026-03-07
**Author:** [User] "[User]" [Framework Author] III + Claude
**Phase Gate Reached:** 6-Baselined
**Related Framework:** `3_AI_&_Human_Capabilities/7_Frameworks/10_Outreach_Process_Framework.md`
**Related Workflow:** `3_AI_&_Human_Capabilities/9_Workflows/12_Outreach_Process_Workflow.md`
**Related Operation:** `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/outreach-content/system.md`

---

## Section 2: Purpose & Problem Statement

Content outreach fails most often at the architecture level, not the writing level. Posts are produced without a governing IP concept, published without a sequenced conversion path, and tracked without a feedback loop. Each piece of content is an isolated effort rather than a compounding unit of an intelligent system.

The Outreach Process resolves this by grounding every piece of content in named, assessed [Your Organization] intellectual property; connecting every post to a complete conversion path (landing page → email list → welcome sequence → offer close); and routing every published piece's results back into the rotation calendar as actionable market signal.

This specification governs what must be true before outreach content is produced, what a complete asset set for a rotation cycle contains, how the `outreach-content` system prompt operates within this process, and what constitutes a complete and closed outreach cycle. The intended outcome is a self-optimizing content engine that produces IP-differentiated content, converts at measurable rates, and becomes more targeted with each rotation cycle.

---

## Section 3: Scope Definition

**In Scope:**

- The IP rotation calendar and rotation cycle structure (2-week cycles, one IP concept per cycle)
- The complete asset set definition for each rotation cycle: video outline, landing page, channel text posts (LinkedIn, Facebook, Instagram, X), thumbnail prompts (all five channels), email sequence references
- The conversion funnel architecture: social → landing page → email list → welcome sequence → offer close
- The `outreach-content` system prompt five-step cycle: context load → status assessment → action recommendation → generate/prepare → publish flag + results capture
- The Content_Published_Log.md as the publication state register
- The Outreach_Results_Register.md as the market intelligence capture system
- The Visual Image Brief system (01c–01g) as the thumbnail production architecture for all five social channels
- Channel-specific best practices for LinkedIn, YouTube, Facebook, Instagram, X
- The psychographic segmentation framework (5 ICP segments) and segment-to-IP-concept mapping
- The outreach tier structure: Tier 1 (personal texts), Tier 2 (social DMs), Tier 3 (email broadcast)

**Out of Scope:**

- The `outreach-content` system prompt implementation (lives in `1_Prompts/00-core-system/outreach-content/`; this specification governs what it must do, not how its prompt is written)
- Brand Guidelines and Key Message Platform content — governed by `01_Brand_Guidelines_CX1.md` and `02_Key_Message_Platform`
- The Visual Journey Progression theory — governed by `01b_Blog-Post_Visual_Image_Brief_CX1_v1.md` and derivative channel briefs 01c–01g
- Email sequence automation platform — governed separately; this specification governs content, not delivery infrastructure
- Community platform operations — governed separately; this specification governs conversion into membership, not membership operations

**Boundary Conditions:**

- This specification governs the outreach production and conversion cycle; session management within production sessions is governed by `Session_Rhythm_Specification`
- The five-step `outreach-content` cycle governs the execution session; this specification governs what the cycle must accomplish, not how each session is structured internally
- Results captured in the Outreach_Results_Register feed the rotation calendar; interpretation of those signals into strategic adjustments is a human decision with AI analysis support, not an automated system decision

---

## Section 4: Stakeholder Register

| Stakeholder | Role | Primary Need | Success Looks Like |
|---|---|---|---|
| [User] (human operator) | Sets rotation calendar; confirms context loaded; reviews and approves content before publication; provides results data after publishing | A production workflow that reliably generates IP-differentiated, channel-appropriate content with minimal per-session manual direction | A single `outreach-content` invocation produces a ready-to-publish asset or surfaces an unpublished asset — and the system knows what's been published and what hasn't |
| Claude (AI agent) | Executes the five-step `outreach-content` cycle; produces content assets against loaded IP and brand context | Unambiguous gate conditions: knows what's been published, what IP concept is active, what's missing before any production begins | Each session begins with a clear status assessment — no inferencing required about what phase the campaign is in |
| ICP audience (3C practitioners) | Receives outreach content via social, email, and direct outreach | Content that names their specific pain and connects it to a specific IP-grounded promise | A practitioner encountering the content thinks: "This is specifically about my situation — and there's actually a framework behind this, not just tips" |
| [Your Organization] Outreach enrollment goal | KR4a (25 free Explorer members) and KR4b (8 paid members) by March 31, 2026 | Maximum conversion rate from outreach investment within the Q1 window | 25 free + 8 paid enrolled before deadline; founding discount codes activated |

---

## Section 5: Constraints

| Constraint | Type | Source | Impact |
|---|---|---|---|
| Q1 deadline: March 31, 2026 | Strategic | KR4a + KR4b | All [Your Organization] Outreach outreach infrastructure must be operational before the window closes; no phased rollout — full system now |
| Conversion path completeness | Architectural | Outreach Process Framework Principle 2 | A social post without its landing page is not a complete asset; must not publish without the full downstream path in place |
| IP grounding requirement | Strategic | Outreach Process Framework Principle 1 | Generic AI content is out of scope; every piece must reference a named [Your Organization] IP concept |
| Context loading as pre-production requirement | Operational | `outreach-content` Step 0 | Assets produced without loaded Brand Guidelines, Key Message Platform, and IP source documents require revision; revision is attributable to a skipped gate |
| Single-session full asset set production | Architectural | Compound Content Architecture (CCA) principle | Producing channel text assets across multiple sessions introduces messaging drift; all channel variants for a given IP concept are produced in one session |
| Visual Journey stage compliance | Brand | 01c–01g channel thumbnail briefs | All social thumbnails operate in Stage 1–2 (first contact); no Stage 4–5 imagery on first-touch channels |
| Results capture at publication | Intelligence | Outreach Results Register | Results not captured at publication are substantially lost; the register must be updated within the same session as publication confirmation |

---

## Section 6: IP Rotation Calendar

One 2-week cycle per IP concept. Segment targeting rotates within the concept window based on which segment is most likely to recognize the pain most viscerally.

| Cycle | Weeks | Feature | IP Concept | Primary Segment | Secondary Segment |
|-------|-------|---------|-----------|-----------------|------------------|
| 1 | 1–2 | Feature 2 | Experiential Technology Reframe | Universal (all) | Anxious Achiever |
| 2 | 3–4 | Feature 1 | CDPID Behavioral Snapshot | Anxious Achiever | Isolated Expert |
| 3 | 5–6 | Feature 4 | Session Harvest Framework | Framework Seeker | Anxious Achiever |
| 4 | 7–8 | Feature 3 | Prompt Complexity Inversion | Time-Starved Expert | Skeptical Pragmatist |
| 5 | 9–10 | Feature 5 | PIE Starter | Framework Seeker | Time-Starved Expert |
| 6 | 11–12 | Feature 6 | Compound Content Architecture | Time-Starved Expert | Framework Seeker |
| Repeat | — | — | Based on Results Register — rotate highest-converting | — | — |

**[Your Organization] Outreach window priority (Mar 7–31):** Cycles 1–2 are the active production priority. All five IP concepts must have complete asset sets before Mar 31, but Cycles 1–2 are deployed first.

---

## Section 7: Complete Asset Set Definition

A rotation cycle is complete when the following assets exist in Level 6 folders and are in `04_Complete/` or published state:

**Video (YouTube):**
- `[IP-Concept]_Video-Outline.md` — bullet-point talking structure in `06_YouTube/`
- `[IP-Concept]_Thumbnail-Prompt.md` — ready-to-paste image prompt in `06_YouTube/`

**Social Text Posts:**
- `[IP-Concept]_LI-Post.md` — standalone LinkedIn post in `07_LinkedIn/`
- `[IP-Concept]_Thumbnail-Prompt.md` — LinkedIn image prompt in `07_LinkedIn/`
- `[IP-Concept]_FB-Post.md` — Facebook post in `08_Facebook/`
- `[IP-Concept]_Thumbnail-Prompt.md` — Facebook image prompt in `08_Facebook/`
- `[IP-Concept]_IG-Caption.md` — Instagram caption in `09_Instagram/`
- `[IP-Concept]_Thumbnail-Prompt.md` — Instagram image prompt in `09_Instagram/`
- `[IP-Concept]_X-Thread.md` — X thread in `10_X/`
- `[IP-Concept]_Thumbnail-Prompt.md` — X image prompt in `10_X/`

**Video Companion Post (LinkedIn):**
- `V[N]-[IP-Concept]-Companion_LI-Post.md` — produced after video is recorded; references the video link

**Landing Page:**
- `F[N]-[IP-Concept]_Landing-Page.md` in `05_Lead-Magnets/`

**Email Sequence** (once per campaign, not per IP concept):
- Phase 3: 5 welcome emails in `04_Email-List/`
- Phase 4: 4 close emails in `04_Email-List/`

**Outreach Reference Files** (once per campaign):
- `[Your Organization] Outreach-Tier1-Contact-List.md` in `17_Personal-Network-Outreach/`
- `[Your Organization] Outreach-Tier2-DM-Templates.md` in `17_Personal-Network-Outreach/`

---

## Section 8: Channel Best Practices

### YouTube
- Video outline only — never a word-for-word script
- Hook bullet: one sentence that would stop the scroll if read cold
- 5–8 bullets per section: Hook → Problem → Concept → Proof → Implication → CTA
- CTA: always points to the feature-specific landing page
- Thumbnail: Stage 1–2 per `01c_YouTube-Thumbnail_Visual_Image_Brief_CX1_v1.md`
- Description: first 150 chars carry the hook and CTA link (visible before "more")

### LinkedIn
- Professional paradigm-challenge tone
- Line breaks after each sentence — never long paragraphs in feed
- Hook in first line — must earn the "see more" click
- 150–400 words (sweet spot: 200–300)
- 1–3 hashtags maximum at the end
- Link goes in first comment, not post body
- Thumbnail: Stage 1–2 default Stage 2 per `01d_LinkedIn-Post-Thumbnail_Visual_Image_Brief_CX1_v1.md`

### Facebook
- Warmer, personal register — "I" voice, story-forward
- Direct link can go in post body
- 50–200 words — shorter than LinkedIn
- Image-first: thumbnail carries more weight on Facebook than text hook
- Thumbnail: Stage 1–2 default Stage 2 per `01e_Facebook-Post-Thumbnail_Visual_Image_Brief_CX1_v1.md`

### Instagram
- Hook in first 3 lines — caption auto-collapses, first 3 lines visible before tap
- 50–150 words in caption body
- 5–8 hashtags at the end, separated by line break
- Grid image carries the primary visual hook — caption supports, does not carry
- Thumbnail: Stage 1 close-up atmospheric object per `01f_Instagram-Thumbnail_Visual_Image_Brief_CX1_v1.md`

### X (Twitter)
- 6–8 tweet thread
- Each tweet standalone at 240 chars max — readable without context
- Thread hook (Tweet 1): paradigm challenge or counter-intuitive claim
- Thread structure: Hook → Problem → IP concept (3–5 tweets) → Implication → CTA + link
- CTA tweet: includes landing page link; can include video link if video exists
- Thumbnail: Stage 1 atmospheric per `01g_X-Post-Thumbnail_Visual_Image_Brief_CX1_v1.md`

---

## Section 9: Success Criteria

The Outreach Process is operating correctly when:

1. **Production:** Every rotation cycle produces a complete asset set (all 12 content files + landing page) in a single production session
2. **Publication:** `Content_Published_Log.md` is updated within the same session as any publication event — never left stale
3. **Conversion path:** Every published social post links to a live, working landing page specific to that IP concept; every landing page routes to a working email signup
4. **Results capture:** Every published piece has a results row in `Outreach_Results_Register.md` within 48 hours of publication — even if results are zero
5. **Rotation intelligence:** After three complete cycles, the rotation calendar is adjusted based on which IP-segment combinations produced the highest-converting outcomes — not based on hypothesis

**[Your Organization] Outreach window success criteria:**
- KR4a: 25 free Explorer members by March 31, 2026
- KR4b: 8 paid members by March 31, 2026
- All five IP concept asset sets complete (regardless of publish date)
- Phase 3 and Phase 4 email sequences live and tested before any email list subscriber reaches Day 3

---

*Outreach Process Specification v1.0 — AI Mastery Toolkit v4 | 3_AI_&_Human_Capabilities/8_Specifications*
