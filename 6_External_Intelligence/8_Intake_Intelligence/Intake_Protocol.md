# Intake Protocol — EIS Intelligence Processing

**EIS Subdirectory:** 8_Intake_Intelligence
**CX Level:** CX-EIS
**Created:** 2026-03-06
**Last Updated:** 2026-03-06

---

## Purpose

This protocol governs how raw intelligence enters the EIS and gets routed to the correct subdirectory. Raw material is dropped into one of three queue files; the AI evaluates and routes at each daily debrief Step 7 (or at session start when accumulated entries exist).

The intake subdirectory is a processing layer, not a storage layer. The goal is zero-stale-entries: every item in the queue gets evaluated and routed to its destination file within 24 hours of entry.

---

## Routing Decision Table

| Material Type | Drop Into | AI Routes To | Secondary Route |
|---|---|---|---|
| Session transcript ([Your Organization] session log) | `Transcript_Queue.md` | Extract signals → `1_Market_Intelligence/Market_Signals_Register.md` | Extract strategy insights → `10_Incoming_Material/` → Context_Files |
| Meeting recording / coaching call notes | `Transcript_Queue.md` | Extract customer voice → `1_Market_Intelligence/Customer_Voice_Log.md` | Extract market signals → `Market_Signals_Register.md` |
| Discovered success story (practitioner case) | `Success_Story_Archive.md` | Extract case → `3_Success_Models/3C_Practice_Success_Cases.md` | Extract benchmark data → `Revenue_Milestone_Benchmarks.md` |
| Competitive observation (pricing, content, offer) | `Competitive_Observation_Log.md` | Extract entry → `2_Competitive_Intelligence/Competitor_Map.md` | Extract positioning data → `Positioning_Gap_Analysis.md` |
| Customer verbatim (from DM, call, or post) | Directly to `1_Market_Intelligence/Customer_Voice_Log.md` | Summary signal → `Market_Signals_Register.md` | — |
| Market signal (direct observation) | Directly to `1_Market_Intelligence/Market_Signals_Register.md` | — | — |
| Blue Ocean candidate (new opportunity signal) | `Competitive_Observation_Log.md` or direct to `5_Blue_Ocean_Scanning/Emerging_Opportunity_Log.md` | Count signals → if 2+ signals, promote to `Blue_Ocean_Register.md` | — |
| Platform change (observed algorithm, policy, or feature shift) | Directly to `6_Timing_Externalities/Platform_Change_Tracker.md` | — | — |
| Research finding (article, study, data point) | Directly to `4_Research_Library/Research_Index.md` | — | — |
| Timing window (new time-bounded opportunity) | Directly to `6_Timing_Externalities/Window_of_Opportunity_Log.md` | If Step Function eligible → `Step_Function_Register_CX2.md` | — |

---

## Processing Evaluation Questions

For each intake entry, AI runs through these questions before routing:

**For Transcripts:**
1. What observable market signals does this conversation contain? (customer language, expressed pain points, objections, goals)
2. What does this reveal about whether [Your Organization]'s current plan is calibrated to reality?
3. Is there any content that belongs in Context_Files (refines understanding of who [User] is or what [Your Organization] builds)?
4. Does anything here indicate a step-function opportunity not yet registered?

**For Success Stories:**
1. How comparable is this trajectory to [Your Organization]'s? (ICP match, stage match, model match)
2. What does this confirm or contradict in the ATI benchmark estimates?
3. What is the single most transferable structural insight for [Your Organization]?
4. Confidence level: Direct observation by [User], publicly reported, or secondhand?

**For Competitive Observations:**
1. Which named competitor does this entry belong to?
2. What specifically changed (pricing, offer, positioning, distribution, community size)?
3. Does this raise or lower the threat level for [Your Organization]'s positioning?
4. Does this reveal a positioning gap [Your Organization] is not currently exploiting?

---

## Processing Format

After evaluation, mark the intake entry as:

```
[Processed — YYYY-MM-DD → [destination file(s)]] [brief note on what was extracted]
```

Example:
```
[Processed — 2026-03-08 → Market_Signals_Register.md (Signal #001), Customer_Voice_Log.md (entry #001)]
Clarity call with ICP-Coaching prospect — extracted 2 signals + 1 verbatim
```

Processed entries are retained in the intake file for 30 days, then moved to a `[Processed Archive]` section within the same file.

---

## Trigger for Processing

**Automatic:** At every daily-debrief Step 7 (step function scan), AI checks whether any intake queue has unprocessed entries. If yes, process before closing the session.

**Manual:** Any session can begin with "check EIS intake" to process accumulated entries immediately.

**Priority:** Transcript_Queue entries from Clarity Calls are highest priority — process same day if possible, as they contain the most time-sensitive market intelligence.

---

## What Does NOT Belong Here

- Final content destined for Context_Files (that goes to `10_Incoming_Material/`)
- Administrative documents, templates, or governance files
- Session working files (those go to `7_Session_Working_Files/`)
- Anything that is already processed and routed — this queue is for raw, unprocessed material only
