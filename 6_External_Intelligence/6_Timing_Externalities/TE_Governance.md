# Timing Externalities — Governance Document

**EIS Subdirectory:** 6_Timing_Externalities
**CX Authority:** CX-EIS
**Created:** 2026-03-06
**Last Updated:** 2026-03-06

---

## Definition

**What belongs here:**
- Macro conditions affecting AI education demand and [Your Organization]'s market: economic conditions, employment trends, AI adoption rates, organizational AI investment levels
- Platform changes: algorithm shifts, policy changes, feature releases, or deprecations on platforms [Your Organization] uses (Skool, LinkedIn, Twitter/X, YouTube, email platforms)
- Regulatory and industry events: AI regulation developments, professional certification requirements, industry association moves
- Time-bounded opportunity windows: moments when an action is uniquely more valuable than it would be at another time (a specific platform having low competition, a trend peak, a competitor's temporary absence)
- Competitive timing events: a competitor's launch or exit that creates a window [Your Organization] can exploit

**What does NOT belong here:**
- [User]'s personal scheduling constraints (construction, tax season) → 4_Context_Files / SuperContext SC_Layer 3 (capacity and availability)
- [Your Organization]-specific milestone timing → 4_Context_Files / Level_2_Strategy
- General world news not connected to AI education market timing → not captured (no strategic relevance)

---

## Calibration Question

**"What platform changes, macro conditions, and timing windows are affecting the plan, and is [Your Organization] positioned to exploit favorable timing or defend against adverse timing?"**

Sub-questions:
- Are current macro conditions creating tailwinds or headwinds for AI education adoption?
- Has any platform [Your Organization] uses recently changed in a way that changes the calculus for content or community strategy?
- Is there a time-bounded window of opportunity currently open that has a meaningful expiry?
- Are there timing risks (competitive moves, platform saturation, market shifts) on the horizon?

---

## Update Triggers

**Event-triggered:**
- Platform algorithm or policy change observed → Platform_Change_Tracker.md
- A macro news event with AI education market implications → Macro_Conditions_Log.md
- A window of opportunity identified (by AI scan or [User]'s observation) → Window_of_Opportunity_Log.md
- A window of opportunity closes or expires → Resolution note in Window_of_Opportunity_Log.md

**Standing AI scan:**

Every session: AI carries the question — "Is there a timing element in the current context that is more valuable now than it would be in 3 months? Is there a platform change or macro shift that affects current priorities?"

Timing window recognition signals:
- A platform is currently under-monetized or under-populated by competitors in [Your Organization]'s space
- A macro trend is at early-adoption phase ([Your Organization] can establish presence before saturation)
- A competitor has just exited or paused activity, leaving a market gap
- An industry event or news cycle is creating heightened audience awareness of the exact problem [Your Organization] solves
- A regulatory development is creating urgency for AI education in [Your Organization]'s target professional segment

When a window is identified: Log to Window_of_Opportunity_Log.md immediately with estimated window duration and expiry logic.

**Periodic:**
- Weekly: Review Window_of_Opportunity_Log.md for active windows; flag any that are approaching expiry
- Monthly: Review Macro_Conditions_Log.md and Platform_Change_Tracker.md for trend direction changes

---

## Who Updates

**Human input required:**
- [User]'s observation of platform changes from direct use
- Macro condition news [User] encounters that the AI doesn't surface

**AI-executable:**
- Training-data knowledge of platform algorithm behavior patterns
- Macro trend analysis from known conditions as of knowledge cutoff
- Synthesizing window duration estimates based on historical pattern knowledge
- Session-level timing window scan (standing)

**Joint:**
- Evaluating whether a timing window meets the threshold for a priority action elevation or Step Function registration

---

## Priority Intelligence Engine Connection

**Yes — active timing windows can override rule-based ranking.**

How: An active entry in Window_of_Opportunity_Log.md is read by the PIE during Layer 2 synthesis. If the window has a meaningful expiry (actions taken within 30 days are materially more valuable than actions taken later), the PIE can elevate the corresponding action above its rule-based rank.

The Timing Externalities subdirectory is also the primary input for the External Conditions Score in the achievability % formula. Macro headwinds lower the External Conditions Score; tailwinds raise it.

---

## Daily Brief Integration

**Yes — read at every daily brief.**

Signal surfaced in the External Signal block:
- `Window_of_Opportunity_Log.md`: any active windows appear as: "Timing window: [one-line description] — expires [date/condition]"
- If no active windows: "No active timing windows"

Macro_Conditions_Log.md is read weekly (at weekly review) rather than daily.

---

## Step Function Connection

**Yes — highest urgency Step Function source.** Time-bounded opportunities are the definition of step-function timing:
- A window that makes an action 3× more effective now than in 6 months is a step-function timing signal
- When a Window_of_Opportunity_Log.md entry has both high impact and high time-sensitivity, it is registered to Step_Function_Register_CX2.md simultaneously

---

## Automation Protocol (Future)

**Fields intended for dashboard integration:**
- Window_of_Opportunity_Log.md: window name, opportunity type, estimated expiry, impact level (HIGH/MED/LOW), status (Active/Expired/Exploited)
- Macro_Conditions_Log.md: condition description, direction (tailwind/headwind/neutral), KR affected, date logged
- Platform_Change_Tracker.md: platform, change type, date observed, [Your Organization] implication, action taken

**Recommended automation trigger:** Event-based (new entry) + weekly (window status review)

**Dashboard display format:** Active windows as alert cards (sorted by expiry urgency); macro conditions as traffic light indicators by KR

---

## Relationship to Other EIS Subdirectories

- **Informs 1_Market_Intelligence:** Macro conditions affect what market signals mean (a weak signal during a headwind period may indicate a stronger underlying trend than the same signal during a tailwind)
- **Informs 5_Blue_Ocean_Scanning:** Timing windows can make a Blue Ocean entry more urgent
- **Informed by 2_Competitive_Intelligence:** Competitor moves can create timing windows
- **Informs 7_AI_Training_Intelligence:** AI knowledge of historical platform behavior patterns informs timing window analysis
