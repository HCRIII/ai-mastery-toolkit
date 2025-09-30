# Market Intelligence — Governance Document

**EIS Subdirectory:** 1_Market_Intelligence
**CX Authority:** CX-EIS
**Created:** 2026-03-06
**Last Updated:** 2026-03-06

---

## Definition

**What belongs here:**
- Signals gathered from real market interactions: discovery calls, community conversations, survey responses, content engagement patterns, direct messages, event conversations
- Observable audience behaviors: what they engage with, what they ignore, what language they use to describe their problems
- Funnel metrics at each stage: reach → awareness → email list → trial → paid membership
- Testimonials and specific outcomes that reveal what the market values about the offering
- Objections raised in conversations — verbatim where possible

**What does NOT belong here:**
- [User]'s interpretation of why the market behaves as it does → 4_Context_Files / Level_1_Identity (beliefs about the audience)
- [Your Organization]'s positioning or messaging decisions → 4_Context_Files / Level_2_Strategy
- Competitive intelligence about other players → 2_Competitive_Intelligence
- Macro conditions affecting the overall market → 6_Timing_Externalities
- General AI industry research → 4_Research_Library

---

## Calibration Question

**"Is the current offering and messaging resonating with the target audience, and is that resonance converting to measurable progress toward KR1 and KR4?"**

Sub-questions:
- Are discovery call participants expressing the specific pain points [Your Organization]'s offer addresses?
- Is the language [User] uses to describe the offering landing with the audience's own vocabulary?
- What objections recur, and what do they reveal about positioning gaps?
- Are free-to-paid conversion signals visible in audience behavior?

---

## Update Triggers

**Event-triggered (highest priority):**
- After every discovery call or strategy conversation → Customer_Voice_Log.md (verbatim) + Market_Signals_Register.md (signal summary)
- After a content piece publishes and engagement data is available → Market_Signals_Register.md
- After a community activation event → Market_Signals_Register.md
- After receiving a testimonial or specific outcome story → Customer_Voice_Log.md

**Standing AI scan:**
- Every session: AI notes whether anything in the current session reveals audience language, objections, or behavioral patterns not yet logged

**Periodic:**
- Weekly: AI reviews Market_Signals_Register.md entries from the past 7 days and synthesizes pattern-level insight (not just individual signals)
- Monthly: Review Funnel_Metrics_Tracker.md for conversion trend direction

---

## Who Updates

**Human input required:**
- Verbatim quotes and observations from real conversations ([User] provides these; AI cannot observe them)
- Funnel metrics from platform dashboards ([User] reads and reports; AI processes)

**AI-executable:**
- Pattern synthesis across accumulated Market_Signals entries
- Language pattern extraction from verbatim Customer Voice entries
- Achievability % External Conditions Score update when significant signals shift
- Weekly synthesis note at the bottom of Market_Signals_Register.md

**Joint:**
- Signal interpretation: [User] provides the raw observation; AI provides the calibration inference

---

## Priority Intelligence Engine Connection

**Yes — this subdirectory affects daily priority recommendations.**

How: If market signals indicate that messaging is not landing (low conversion, recurring objections about price or relevance), the Priority Intelligence Engine elevates messaging refinement and offer clarity actions in the Priority Stack. If signals indicate strong resonance, Direct outreach actions are elevated.

Specific connection: The most recent Market_Signals_Register.md entry is read by the PIE during Layer 2 synthesis. When it contains a "high confidence signal" entry, the PIE treats it as an input that can override the rule-based ranking.

---

## Daily Brief Integration

**Yes — read at every daily brief.**

Signal surfaced: The most recent entry in Market_Signals_Register.md appears in the External Signal block:
- If no new signals in the past 7 days: "No new market signals since [date]"
- If new signal: One-line summary of the signal and its calibration implication

---

## Step Function Connection

**Yes.** Patterns in Market Intelligence can trigger Step Function candidates:
- A recurring, unmet pain point expressed across 3+ discovery calls → potential Blue Ocean Register entry → potential Step Function if [Your Organization] is uniquely positioned to address it
- A conversion signal showing a pathway to $5K+ enrollments that wasn't the primary planned pathway → Step Function candidate (route to KR1 via different mechanism)
- An audience segment that shows dramatically higher resonance than the primary ICP → potential segment pivot candidate

When a pattern triggers a Step Function signal: AI flags in the brief's Step Function Scan line and creates an entry in Step_Function_Register_CX2.md.

---

## Automation Protocol (Future)

**Fields intended for dashboard integration:**
- Market_Signals_Register.md: signal date, signal type, confidence level, KR implication
- Customer_Voice_Log.md: conversation date, ICP segment, primary pain point, primary objection, quote tag
- Funnel_Metrics_Tracker.md: all metric columns

**Recommended automation trigger:** Event-based (after each discovery call logged)

**Dashboard display format:**
- Market signal feed: text list, newest first, color-coded by confidence
- Voice patterns: word cloud or tag frequency display
- Funnel metrics: conversion rate chart with trend line

---

## Relationship to Other EIS Subdirectories

- **Informs 2_Competitive_Intelligence:** Audience objections about alternatives reveal competitive landscape
- **Informs 5_Blue_Ocean_Scanning:** Unmet needs revealed in conversations are raw material for Blue Ocean Register
- **Informed by 6_Timing_Externalities:** Macro conditions and platform changes affect what market signals mean
- **Validates 7_AI_Training_Intelligence:** Real signals confirm or contradict AI training-data benchmarks
