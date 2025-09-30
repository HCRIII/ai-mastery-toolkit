# Upward Feedback Protocol: From Project Work to Business IP

**Created:** 2026-02-13
**Last Updated:** 2026-02-26
**Purpose:** Multi-step workflow pattern for capturing learnings from execution and propagating them upward through the SDD document stack
**Status:** Final

---

## Purpose

The Upward Feedback Protocol ensures that learnings from individual projects flow upward and refine your entire business strategy, brand identity, and market positioning. This prevents knowledge silos where project-level discoveries remain trapped at the execution level.

**Core principle**: Every project is a research laboratory. The insights, patterns, and discoveries made during execution should systematically improve the foundational documents that govern all future work.

**Direction of flow**: Always bottom-up. Level 6 execution discoveries flow up through Level 5 → Level 4 → Level 3 → Level 2 → Level 1. Execution is where market truth is revealed; intelligence layers are where that truth is institutionalized.

---

## Feedback-Queue: Location and Format

### Location

All feedback entries are collected in a single living file at:

```
3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/feedback-queue.md
```

This file is at the toolkit root of the context layer — accessible from all SDD levels. It is a write-frequently, clear-weekly operational file.

### Entry Format

**Minimal Entry (Quick Capture):**
```markdown
## [Date] - [Source: Offering/Channel/Level] - [Category: Messaging/Audience/Channel/Offering/Strategy]
**Learning**: [One sentence summary]
**Destination Layer**: [Which SDD level and document this should update]
**Evidence**: [One sentence on where this came from]
```

**Standard Entry (Recommended):**
```markdown
## [Date] - [Source: Offering/Channel/Level] - [Category]

**Learning**:
[What did you discover? What pattern did you notice?]

**Destination Layer**:
- [ ] L5 Channel Guideline: [Channel name]
- [ ] L5 Offering Content Strategy: [Offering name]
- [ ] L3 Offering Profile: [Offering name]
- [ ] L2 Strategy document: [Document name]
- [ ] L1 Brand Guidelines
- [ ] L1 Key Message Platform
- [ ] L1 Ideal Client Profile
- [ ] L1 IP document: [Framework name]

**Evidence**:
[Specific data, observations, quotes, or repeated patterns supporting this]

**Proposed Change**:
[What should be added/updated in the destination document?]

**Status**: [ ] Pending Review | [ ] Approved for Update | [ ] Completed
```

**Rich Entry (When Important):**
```markdown
## [Date] - [Source] - [Category]

**Learning**:
[Detailed description of the discovery]

**Destination Layer**:
- [x] L1 Key Message Platform — [Specific section]
- [ ] L3 Offering Profile — [Offering name]

**Evidence**:
- Source 1: [Description]
- Source 2: [Description]
- Confidence level: [1–10]

**Competitive Insight**:
[Does this change market positioning?]

**Proposed Change**:
[Specific text to add/modify in the destination document]

**Risks/Considerations**:
[Any reasons to be cautious about this update?]

**Status**: Pending Review
```

---

## Upward Feedback Channels by Layer

Feedback flows upward through six channels, each mapped to its SDD destination layer. Not every learning triggers all channels — a single observation typically updates one or two destination layers.

---

### Channel 1: Production Patterns → L5 Channel Guidelines

**From**: Level 6 content production — what performs, what fails, what algorithm conditions change

**To**: `4_Context_Files/Level_5_Content_Strategy/[Channel_Folder]/[Channel]_Guidelines_v[N].md`

**Examples of qualifying learnings**:
- LinkedIn algorithm behavior changed (e.g., document posts now throttled vs. previously 1.45× multiplier)
- Email deliverability dropped after a cadence change — cadence recommendation needs revision
- YouTube Shorts retention holds better at 45s vs. 60s for this audience
- A prohibited pattern was violated and the consequence was measurable — strengthen the prohibition

**Update trigger**: When a channel-level mechanic, cadence, or prohibition is proven or disproven by real production data.

---

### Channel 2: Audience Response → L5 Offering Content Strategies

**From**: Content performance data, enrollment patterns, email click behavior, community engagement signals

**To**: `4_Context_Files/Level_5_Content_Strategy/[OfferingName]_Content_Strategy_v[N].md`

**Examples of qualifying learnings**:
- Community Entry content strategy assumed LinkedIn would be primary discovery — actual data shows YouTube drives 70% of [Your Organization] Outreach signups
- Coaching Intensive email sequence had low open rates at Day 5 — drop Day 5 or replace subject line
- CDPID poll content outperformed research-finding posts 2:1 — shift content mix ratio

**Update trigger**: When an offering's channel mix, asset type balance, or sequencing is contradicted or validated by real execution data.

---

### Channel 3: Offering Validation → L3 Offering Profiles

**From**: Level 4 spec work, Level 5 content strategy execution, client/member behavior, enrollment/conversion outcomes

**To**: `4_Context_Files/Level_3_Portfolio/[N_Offering_Folder]/[OfferingName]_Offering_Profile.md`

**Examples of qualifying learnings**:
- Community-Entry conversion rate confirmed or contradicted the 25–85% [Your Organization] Outreach projection — update with real data
- Coaching Intensive target client segment description needs sharpening based on who actually enrolled
- Gap offering (Community-Core) activation condition needs refinement after Community-Entry reaches steady-state
- An offering's grid position (Entry/Core/Premium) proved misaligned with actual purchase behavior

**Update trigger**: When execution data changes the status, targeting, pricing, positioning, or journey stage mapping of an offering.

---

### Channel 4: Market Signals → L1 Messaging

**From**: Sales conversations, content engagement, course forum activity, client onboarding, objection patterns

**To**:
- `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/02_Key_Message_Platform.md`
- `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/04_Ideal_Client_Profiles.md`

**Examples of qualifying learnings**:
- Three clients independently objected: "Won't this replace my judgment?" — add to KMP as addressed objection
- Mid-market agency decision-makers are now VPs of Innovation, not COOs — update ICP
- "Cognitive architecture" resonates with practitioners; "mental models" resonates with executives — adjust language by segment in KMP

**Qualifying criteria**: Two or more independent observations of the same pattern. Single data points queue in feedback-queue.md without triggering an update — wait for confirmation.

---

### Channel 5: Brand Evolution → L1 Brand Guidelines

**From**: Content production output, visual design decisions, voice pattern performance

**To**: `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/01_Brand_Guidelines_CX1.md`

**Examples of qualifying learnings**:
- Conversational short-sentence posts consistently outperform formal explanation posts — codify as brand voice standard
- Three-brand hierarchy (Personal/[Your Organization]/Curriculum) created confusion in a specific asset type — add disambiguation guidance
- A visual pattern used across multiple high-performing posts was never documented — add to brand standards

**Qualifying criteria**: A pattern observed across multiple projects, confirmed by performance data or repeated positive feedback.

---

### Channel 6: Strategic Direction → L2 Strategy Documents

**From**: Portfolio execution results, revenue patterns, market positioning data, competitive landscape shifts

**To**:
- `4_Context_Files/Level_2_Strategy/2.1_Business_Alignment_and_Positioning_CX2.md`
- `4_Context_Files/Level_2_Strategy/2.4_Annual_Operating_Plan.md`
- Other Level 2 strategy documents as relevant

**Examples of qualifying learnings**:
- Annual Operating Plan projected $X in coaching revenue by Q3 — actual trajectory is 40% below; update plan and constraints
- CDPID publication has produced authority signal effects in unexpected channels — update strategic positioning document
- The 3C portfolio model assumed equal development effort per pillar — execution reveals Courses require 3× the production time; reflect in operating plan

**Qualifying criteria**: Structural-level observations that change how the business operates or positions itself — not tactical adjustments. High threshold: raise this channel only when L2 documents are materially wrong.

---

## Feedback Capture Points

There are four capture points where feedback is collected. They differ in scope and timing.

---

### Capture Point 1: During Approval (Ad Hoc)

When reviewing any project deliverable, pause to capture learnings before finalizing.

**Prompt**:
```
Before finalizing, answer these questions:
1. What did this project teach you about your audience?
2. What messaging became clearer or more potent?
3. What pattern did you notice repeating?
4. What should be formalized in the SDD intelligence layer?

Which channel? L5 Channel Guideline / L5 Offering Strategy / L3 Offering Profile / L1 Messaging / L1 Brand / L2 Strategy?
```

**Output**: Add entry to `3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/feedback-queue.md`

---

### Capture Point 2: Weekly Review Review

Every week (recommended: Friday), run the `weekly-review` prompt at:

```
3_AI_&_Human_Capabilities/1_Prompts/00-core-system/weekly-review/system.md
```

The weekly-review prompt already handles the full review, pattern identification, and business IP update process. **Do not duplicate this work manually.** Use that prompt.

Within the weekly review, the feedback-queue review is Step 5 of that workflow.

**Time investment**: 30–45 minutes/week (structured by the weekly-review prompt)
**Output**: Cleared feedback queue + updated business IP documents + weekly review file saved to `5_System_Wisdom/8_Weekly_Reviews/`

---

### Capture Point 3: Monthly Standards Update

On the first Monday of each month, conduct a deeper review of all weekly review updates from the prior month.

**Monthly process**:
1. Read weekly review files from `5_System_Wisdom/8_Weekly_Reviews/` (last 4 entries)
2. Check for conflicting updates across documents or emerging trends not yet captured
3. Make decisions about significant structural changes to L1/L2 documents
4. Document the rationale for each update in the relevant document's Update Log
5. Assess whether the SDD document architecture itself needs refinement

**Time investment**: 1–2 hours/month

**Output**: Versioned updates to L1–L2 business IP documents, with changelog entries

---

### Capture Point 4: Post-Batch Synthesis (Concentrated Production)

When a session produces a concentrated batch of work across multiple levels — for example, all 10 offering profiles in a single session, or all 7 offering content strategies — a structured review is triggered immediately after the batch completes (not deferred to Friday).

**What qualifies as a batch**: Five or more documents produced or significantly revised in a single session, affecting the same layer or spanning multiple layers.

**Process**:
1. At session end, before closing, read the batch outputs as a set
2. Ask: What patterns are visible across all documents that wouldn't be visible in any single document?
3. Ask: Does the batch output reveal anything about the intelligence-layer documents that governed it? Any gaps, errors, or refinements needed in L1–L3?
4. Ask: Does the batch reveal that any upstream document (Offering Portfolio Map, Client Journey Map, Strategy documents) is now out of sync with what was built?
5. Capture each observation as a feedback-queue entry tagged `[Post-Batch]`
6. Flag highest-priority updates for immediate action vs. deferred to weekly review

**Output**: Feedback-queue entries tagged `[Post-Batch]`; immediate high-priority upstream updates if warranted

---

## Prompt Patterns for Capturing Feedback

### Pattern 1: Reflection Prompt (Post-Project)

```
Project / Session: [Name]
Date: [Date]

Reflect:
1. What surprised you about your audience or market?
2. What assumption proved wrong?
3. What pattern did you notice in reactions or results?
4. What messaging or language resonated?
5. One sentence: the learning from this project.
6. Which SDD destination layer does this update? (L5 Channel / L5 Offering Strategy / L3 Offering Profile / L1 Messaging / L1 Brand / L2 Strategy)

Write the learning as a feedback-queue entry.
```

### Pattern 2: Evidence Gathering Prompt

```
You noticed: [Pattern/Learning]

Gather evidence:
- How many times did you observe this? [Count]
- Where? [Specific source moments or feedback]
- What's the quote that captures this?
- Is this new or reinforcement of existing knowledge?
- Confidence: [1–10]

If confidence > 6 AND observed 2+ times → add to feedback-queue.
If confidence < 6 OR single observation → note it but wait for confirmation.
```

### Pattern 3: Post-Batch Synthesis Prompt

```
Batch just completed: [Description — e.g., "7 Offering Content Strategy docs"]
Date: [Date]

Reviewing the batch as a set:
1. What patterns are visible across all documents that a single document wouldn't reveal?
2. Does anything in this batch contradict or refine the L1–L3 documents that governed it?
3. Is the Offering Portfolio Map, Client Journey Map, or any strategy document now out of sync?
4. Are there any channel guidelines that need updating based on decisions made in this batch?
5. Priority: which single upstream update would have the highest leverage right now?

Write each observation as a [Post-Batch] tagged feedback-queue entry.
```

### Pattern 4: Monthly Synthesis Prompt

```
Reviewing weekly review entries from [Month]:

Patterns emerging:
- [Pattern 1]: Appeared in [X weekly reviews]
- [Pattern 2]: Appeared in [X weekly reviews]

SDD impact assessment:
- L5 Channel Guidelines: [Structural change needed?]
- L5 Offering Content Strategies: [Structural change needed?]
- L3 Offering Profiles: [Status updates needed?]
- L1 Key Message Platform: [Significant change?]
- L1 Ideal Client Profile: [Segment refinement?]
- L1 Brand Guidelines: [Standard to add?]
- L2 Strategy documents: [Planning-level change?]

Priority update this month: [Which document and which change?]
Approved for update? [Yes/No]
```

---

## Weekly Review Process (Inside Weekly Review)

The weekly review process is executed via the `weekly-review` prompt. The following is a summary of the feedback-queue review component within that workflow.

**1. Read feedback-queue** (5 minutes)
- Open `3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/feedback-queue.md`
- Skim all entries since last review
- Highlight entries marked "Approved for Update"

**2. Identify patterns** (10 minutes)
- Do multiple entries reference the same learning?
- Which SDD destination layers appear most frequently?
- Are any entries in conflict with existing documents?

**3. Update destination documents** (10 minutes)
- Open the relevant SDD document
- Add the learning with date and evidence
- Keep an Update Log entry showing what changed and why

**4. Clear queue** (5 minutes)
- Move completed entries to an archive section at the bottom of feedback-queue.md
- Reset the active queue section for the next week

---

## When to Update Each Layer vs. Skip

### Update L5 (Channel Guidelines or Offering Content Strategies) When:
- A mechanic, cadence, or channel mix assumption was proven or disproven by production data
- A prohibition needs strengthening after a violation produced measurable negative outcome
- A new channel feature materially changes what's possible or recommended

### Update L3 (Offering Profiles) When:
- Actual enrollment, conversion, or engagement contradicts the profile's projections or targeting
- An offering's status should change (Gap → Development → Active)
- Client segment description needs sharpening based on who actually engaged

### Update L1 (Messaging, Brand, IP) When:
- Two or more independent observations confirm the same pattern
- The learning applies across multiple offerings or channels — not just one
- The learning reflects market truth, not a single client preference

### Update L2 (Strategy) When:
- Annual operating projections are materially wrong based on execution trajectory
- A strategic assumption is structurally contradicted — not just off by a margin
- The portfolio model or business positioning needs structural revision

### Skip / Defer When:
- The observation comes from a single data point with no confirmation
- The learning is offering-specific or experiment-phase — not yet proven
- The update would create instability before the current approach has been tested

---

## Measurement: Tracking Business IP Improvements Over Time

**Feedback Quality**: Target 70%+ of entries cite specific data (quote, observation count, channel metrics). Over time, entries become more evidence-backed.

**Update Velocity**: Target 2–4 updates per month per active SDD layer (L1, L5). Too many = instability; too few = not capturing learnings.

**Layer Distribution**: Track which SDD layers are receiving updates. If only L1 is updating, L5 execution data isn't being captured. If only L5 is updating, market signals aren't flowing to messaging.

**Feedback-to-Update Conversion**: Target 40–60% of feedback-queue entries lead to actual document updates. Higher = updating too freely; lower = not capturing actionable feedback.

**Upstream Consistency**: Monthly check — do L5 channel guides align with L1 brand guidelines? Do L3 offering profiles align with L5 content strategies? Target 95%+ alignment.

---

## Implementation Roadmap

### Setup (One-time)
- [ ] Verify `3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/feedback-queue.md` exists; if not, create it using the entry format above
- [ ] Schedule weekly review slot (Friday recommended) — use the `weekly-review` prompt
- [ ] Schedule monthly standards review (first Monday of each month)
- [ ] Bookmark Capture Point 4 (Post-Batch Synthesis) — it triggers at session end, not on a schedule

### Week 1–2: Daily Practice
- [ ] At end of each project session, capture feedback using Prompt Pattern 1
- [ ] Add minimum one entry per week to feedback-queue.md
- [ ] Run first weekly review using the weekly-review prompt

### Month 2+: Sustainable System
- [ ] Weekly syntheses become routine (via weekly-review prompt)
- [ ] Monthly deeper reviews happen on schedule
- [ ] Post-batch captures are automatic at end of concentrated production sessions
- [ ] Track metrics: update velocity, layer distribution, feedback quality

---

## Related Documents

| Document | Path |
|----------|------|
| Feedback Queue (operational file) | `3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/feedback-queue.md` |
| Weekly Review Prompt | `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/weekly-review/system.md` |
| Weekly Reviews Archive | `5_System_Wisdom/8_Weekly_Reviews/` |
| Brand Guidelines | `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/01_Brand_Guidelines_CX1.md` |
| Key Message Platform | `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/02_Key_Message_Platform.md` |
| Ideal Client Profile | `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/04_Ideal_Client_Profiles.md` |
| Offering Portfolio Map | `4_Context_Files/Level_3_Portfolio/Offering_Portfolio_Map_CX3.md` |
| Client Journey Map | `4_Context_Files/Level_3_Portfolio/Client_Journey_Map_CX3.md` |
| SDD Workflow v3 | `3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/` |
| L5 Channel Guidelines Index | `4_Context_Files/Level_5_Content_Strategy/Channel_Guidelines_INDEX_CX5.md` |

---

## FAQ

**Q: Where exactly is feedback-queue.md?**
A: `3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/feedback-queue.md` — co-located with the SDD workflow files and the upward feedback protocol that governs it.

**Q: Do I capture feedback during a project or after?**
A: Both. Capture in-the-moment using Prompt Pattern 2 if confidence is above 6/10. Capture systematic reflections at project end using Prompt Pattern 1. Concentrated batch sessions use Prompt Pattern 3.

**Q: How long before a feedback-queue entry becomes a document update?**
A: Target within four weeks. Weekly syntheses catch patterns; monthly reviews make final structural decisions. Entries older than a month should be reassessed — either they were too weak to act on, or they were overlooked.

**Q: What if feedback contradicts existing business IP?**
A: Flag it for deeper analysis in the next weekly review. You may need to update, or the feedback may be an edge case. Document the decision either way in the feedback queue.

**Q: Which layer should I update first when a learning applies to multiple layers?**
A: Update the lowest layer first (closest to execution), then propagate upward. L5 before L3 before L1. This preserves the causality chain — the execution-layer record exists before the intelligence-layer record is updated.

**Q: What if I'm not sure which SDD layer a learning belongs to?**
A: Default to the layer where the learning was discovered. If it came from a Level 6 production session, start with L5. If it came from an enrollment or client conversation, start with L3. The weekly review will surface whether it warrants propagating further upstream.

---

**Version**: 2.0
**Last Updated**: 2026-02-26
**Next Review**: 2026-06-01 (quarterly)
