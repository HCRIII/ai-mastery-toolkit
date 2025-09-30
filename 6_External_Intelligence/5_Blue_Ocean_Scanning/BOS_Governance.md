# Blue Ocean Scanning — Governance Document

**EIS Subdirectory:** 5_Blue_Ocean_Scanning
**CX Authority:** CX-EIS
**Created:** 2026-03-06
**Last Updated:** 2026-03-06

---

## Definition

**What belongs here:**
- Blue Ocean opportunities: market segments or offering configurations that are uncontested or significantly underserved, where [Your Organization] could operate without head-to-head competition
- Early-signal opportunities: observations that suggest an uncontested space may be emerging, but don't yet have enough evidence to constitute a registered Blue Ocean candidate
- Segment analyses: when a potential Blue Ocean is identified, the analysis of why it is uncontested, who inhabits it, what they need, and whether [Your Organization] is positioned to serve it
- Opportunity resolution notes: when a Blue Ocean candidate is evaluated and committed, deferred, or superseded

**What does NOT belong here:**
- Competitive analysis of existing contested markets → 2_Competitive_Intelligence
- Market signals from real interactions (those are inputs that might eventually surface a BO candidate) → 1_Market_Intelligence
- Committed strategic pivots → 4_Context_Files / Level_2_Strategy
- Step Function actions (Blue Ocean candidates that meet step-function criteria are registered to Step_Function_Register_CX2.md as well, but primary BOS record stays here)

---

## Calibration Question

**"Are there uncontested or significantly underserved market segments that [Your Organization] is positioned to enter, where effort produces disproportionate return because competition is absent or weak?"**

Sub-questions:
- What market segments are being actively underserved by current AI education providers?
- Where is the 3C practitioner audience not being served by existing communities or tools?
- What segments could [Your Organization] enter without needing to displace an entrenched competitor?
- What timing windows would make a Blue Ocean entry more valuable now than later?

---

## Update Triggers

**Event-triggered:**
- Any session observation that suggests an uncontested space → Emerging_Opportunity_Log.md immediately
- When an emerging opportunity accumulates enough signal to warrant formal analysis → Blue_Ocean_Register.md entry
- When a registered candidate is evaluated and resolved → Resolution note added to register entry

**Standing AI scan — highest-priority standing scan in EIS:**

This is an always-active AI behavior, embedded in session operations via the Priority Intelligence Engine. At every session, the AI carries the question: "Does anything in this session reveal a market segment or offering configuration that is uncontested or underserved, where [Your Organization] could operate without head-to-head competition?"

Recognition signals:
- Audience members expressing a pain point that existing solutions don't address
- A practitioner type mentioned that [Your Organization] doesn't currently serve but could
- A platform, distribution channel, or format that competitors aren't using in [Your Organization]'s space
- An intersection of two existing needs where no current offering sits
- A geography, industry, or demographic segment where AI education providers are absent

When a signal is spotted: Log to Emerging_Opportunity_Log.md immediately; evaluate for Blue_Ocean_Register.md entry at next synthesis session.

**Periodic:**
- Weekly synthesis: Review Emerging_Opportunity_Log.md for patterns; elevate to Blue_Ocean_Register.md when evidence accumulates
- Quarterly: Full Blue_Ocean_Register.md review for resolution

---

## Who Updates

**Human input required:**
- Confirmation that a Blue Ocean candidate is genuine ([User]'s validation of AI's observation)
- Resolution decisions (commit, defer, or pass on a candidate)

**AI-executable:**
- Spotting potential Blue Ocean signals during sessions (standing scan)
- Drafting initial Emerging_Opportunity_Log.md entries
- Pattern synthesis across multiple emerging signals
- Drafting Blue_Ocean_Register.md entries for [User]'s review

**Joint:**
- Strategic evaluation of whether a Blue Ocean candidate is worth pursuing given current resources and KR focus

---

## Priority Intelligence Engine Connection

**Yes — direct connection for active Blue Ocean candidates.**

How: An active Blue Ocean candidate registered in Blue_Ocean_Register.md is read by the PIE during Layer 2 synthesis. If the candidate has a "Step Function eligible" flag, the PIE can elevate exploration of that opportunity above normal priority stack ranking.

---

## Daily Brief Integration

**Yes — blue ocean flag line in the External Signal block:**
- If no new BO signal was spotted in the current session: blank (not shown)
- If a new signal was spotted: one-line description, with pointer to Emerging_Opportunity_Log.md
- If an active registered candidate exists: one-line status note

---

## Step Function Connection

**Highest-probability Step Function source in EIS.** A confirmed Blue Ocean opportunity is, by definition, a potential step-function action — it involves accessing a non-linear return environment (no competition = disproportionate market share per unit effort).

When a Blue Ocean candidate meets step-function criteria (timeline compression, non-linear return, structural advantage), AI simultaneously:
1. Creates a Blue_Ocean_Register.md entry (or upgrades an Emerging_Opportunity_Log.md entry)
2. Creates a Step_Function_Register_CX2.md entry
3. Flags in the brief's Step Function Scan line

---

## Automation Protocol (Future)

**Fields intended for dashboard integration:**
- Blue_Ocean_Register.md: opportunity name, market segment, uncontested reason, step-function eligible (Y/N), status, date registered
- Emerging_Opportunity_Log.md: signal date, signal description, potential segment, evidence count

**Recommended automation trigger:** Event-based (new entry added)

**Dashboard display format:** Kanban-style (Emerging → Evaluating → Active Candidate → Resolved)

---

## Relationship to Other EIS Subdirectories

- **Informed by 1_Market_Intelligence:** Unmet needs revealed in conversations are the primary raw material for Blue Ocean identification
- **Informed by 2_Competitive_Intelligence:** Gaps in competitive coverage are a direct Blue Ocean signal
- **Informed by 6_Timing_Externalities:** Timing windows can make a Blue Ocean entry more urgent
- **Informed by 7_AI_Training_Intelligence:** AI knowledge of underserved segments provides initial candidates before real data is collected
- **Informs Step_Function_Register:** Every confirmed Blue Ocean candidate is evaluated for step-function registration
