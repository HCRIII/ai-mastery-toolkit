# Competitive Intelligence — Governance Document

**EIS Subdirectory:** 2_Competitive_Intelligence
**CX Authority:** CX-EIS
**Created:** 2026-03-06
**Last Updated:** 2026-03-06

---

## Definition

**What belongs here:**
- Named competitors and alternatives the target audience is currently using or considering
- Competitive offerings: what they provide, how they position it, what they charge
- Positioning gaps: where [Your Organization] is distinctly differentiated vs. where it is undifferentiated
- Competitive threats: where other players are moving that could close [Your Organization]'s differentiation
- Competitive advantages: capabilities, experience, or positioning [Your Organization] has that competitors lack or cannot replicate quickly

**What does NOT belong here:**
- [Your Organization]'s own positioning strategy → 4_Context_Files / Level_2_Strategy
- Audience reactions to competitors (those belong in 1_Market_Intelligence / Customer_Voice_Log.md as objections or comparisons raised)
- General AI tool reviews or rankings not related to [Your Organization]'s competitive context → 4_Research_Library
- Blue Ocean opportunities (absence of competition is a BO signal) → 5_Blue_Ocean_Scanning

---

## Calibration Question

**"Where is [Your Organization] differentiated from alternatives the target audience is considering, and where is competitive pressure greatest?"**

Sub-questions:
- What alternatives does the ICP use today (before [Your Organization])?
- Where does [Your Organization]'s approach produce outcomes competitors cannot?
- What is the honest pricing comparison, and does [Your Organization]'s value prop justify its position?
- Which competitors are moving in a direction that could erode [Your Organization]'s differentiation?

---

## Update Triggers

**Event-triggered:**
- After a discovery call where the prospect mentions a specific alternative → Competitor_Map.md update
- After observing a competitor launch, pricing change, or positioning shift → Competitor_Map.md + Positioning_Gap_Analysis.md
- After a research session specifically focused on competitive landscape

**Standing AI scan:** None (competitive landscape is relatively slow-moving; event-triggered is sufficient)

**Periodic:**
- Monthly: AI reviews Competitor_Map.md for entries older than 90 days and flags them for verification
- Quarterly: Full Positioning_Gap_Analysis.md review against current [Your Organization] strategy

---

## Who Updates

**Human input required:**
- Competitor observations from real conversations ([User] provides verbatim mentions)
- Pricing observations ([User] confirms from direct observation)

**AI-executable:**
- Synthesizing competitor landscape patterns from accumulated entries
- Flagging stale entries (>90 days without update)
- Updating Positioning_Gap_Analysis.md inference column based on new entries

**Joint:**
- Positioning gap interpretation: AI drafts; [User] validates

---

## Priority Intelligence Engine Connection

**Yes — when active competitive threats are logged.**

How: If Competitor_Map.md contains an entry showing a direct competitor moving into [Your Organization]'s primary differentiation space, the PIE can elevate differentiation-reinforcing actions. Under normal conditions (no acute competitive threat), this subdirectory is a background layer for the PIE, not a daily input.

---

## Daily Brief Integration

**No — not read at every daily brief.** Competitive landscape is slow-moving; daily reading would add noise without value.

**Weekly synthesis:** AI reviews for new entries and includes a one-line competitive note in the weekly context block if a significant new entry was made.

---

## Step Function Connection

**Yes.** Competitive intelligence can trigger Step Function candidates:
- A competitor exiting a segment [Your Organization] could move into more aggressively → potential segment acceleration candidate
- A competitive vacuum identified (no strong player serving a segment [Your Organization] could serve) → Blue Ocean Register entry + potential Step Function

---

## Automation Protocol (Future)

**Fields intended for dashboard integration:**
- Competitor_Map.md: competitor name, primary offering, price point, differentiation gap, last verified date
- Positioning_Gap_Analysis.md: gap dimension, current [Your Organization] advantage, competitive risk level

**Recommended automation trigger:** Periodic (monthly) + event-based (after competitive observation logged)

**Dashboard display format:** Positioning matrix (2×2 grid: differentiation vs. price position); competitive threat level indicator per competitor

---

## Relationship to Other EIS Subdirectories

- **Informed by 1_Market_Intelligence:** Objections about alternatives reveal competitive landscape from the audience perspective
- **Informs 5_Blue_Ocean_Scanning:** Gaps in competitive coverage are the raw material for Blue Ocean identification
- **Informed by 6_Timing_Externalities:** Platform changes can rapidly shift competitive advantage
