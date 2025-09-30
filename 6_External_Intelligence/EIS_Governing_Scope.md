# External Intelligence System — Governing Scope

**Directory:** 6_External_Intelligence
**CX Authority:** CX-EIS (External Intelligence — peer to CX0–CX6)
**Created:** 2026-03-06
**Last Updated:** 2026-03-06
**Status:** Active — Foundation Phase (awaiting population)

---

## Purpose

The External Intelligence System (EIS) is the outward-facing intelligence layer of the AI Mastery Toolkit. It captures, organizes, and makes accessible what the world is telling the system — market signals, competitive intelligence, validated success models, external research, timing windows, and AI training-data benchmarks.

The EIS answers one master question: **"Is the current plan calibrated to external reality?"**

Without the EIS, the system operates on internal confidence alone. Internal confidence tells you whether the plan feels right. External calibration tells you whether the plan IS right. Both are necessary. Neither is sufficient alone.

---

## Three-Layer Intelligence Architecture

The toolkit operates with three peer-level intelligence systems:

| Directory | Type | What It Holds | Governing Question |
|---|---|---|---|
| **4_Context_Files** | Internal — Identity | Who [User] is, what [Your Organization] is building, current state, strategy | "What are we doing and who are we doing it for?" |
| **5_System_Wisdom** | Internal — Behavioral | How the dyad operates, learns, and improves across sessions | "How are we operating and improving?" |
| **6_External_Intelligence** | External — Calibration | What the market, world, and validated data are saying | "Is our plan calibrated to external reality?" |

These three systems are structurally separate and must remain so. Commingling them would corrupt the integrity of each type.

---

## Boundary Definitions

### What belongs in EIS

- Market signals gathered from real interactions (discovery calls, surveys, content engagement, community feedback)
- Competitive landscape intelligence (competitor offerings, positioning, pricing, gaps)
- Validated success models from comparable practitioners (revenue trajectories, conversion benchmarks, community growth rates)
- External research discovered and curated (studies, reports, frameworks)
- Blue Ocean opportunities — uncontested or underserved market segments
- Timing externalities — macro conditions, platform changes, windows of opportunity
- AI training-data knowledge, structured for persistent reference (benchmarks, pattern libraries, framework comparisons)

### What does NOT belong in EIS → redirect to:

| Content Type | Correct Location |
|---|---|
| [User]'s personal observations, beliefs, values | 4_Context_Files / Level_0_Map_&_Preferences |
| [Your Organization] strategy, OKRs, active programs, priorities | 4_Context_Files / Level_2_Strategy |
| Behavioral patterns of the [User]–AI dyad | 5_System_Wisdom |
| Session notes, working documents | 7_Session_Working_Files |
| Raw incoming material not yet processed | 10_Incoming_Material |
| General reference material not tied to a calibration question | 9_Support_Documents |
| [User]'s personal reactions to external intelligence | 4_Context_Files / Level_1_Identity |

### Pollution prevention rules

1. **No unvalidated data.** Raw reactions, impressions, and guesses do not belong in EIS. What enters EIS must be observable, sourceable, or explicitly flagged as AI training-data estimate.
2. **No internal rationalization framed as external signal.** "I think the market wants X" is internal. "Three discovery call participants said they need X" is external.
3. **Every EIS file serves a calibration question.** If a file doesn't help answer whether the current plan is calibrated to external reality, it belongs elsewhere.
4. **AI training-data estimates are flagged as such.** When the AI populates EIS files from training-data knowledge (before real signals exist), entries are labeled `[Source: AI training-data estimate — replace with real data as collected]`. These are placeholders, not findings.

---

## Connection to Daily Operating System

### Daily Brief integration

EIS feeds the External Signal block in the daily brief. The brief reads:
- `1_Market_Intelligence/Market_Signals_Register.md` — most recent entry
- `6_Timing_Externalities/Window_of_Opportunity_Log.md` — any active windows
- AI Blue Ocean scan result (standing scan, not file-dependent)

### Priority Intelligence Engine connection

EIS intelligence is a Layer 2 input to the Priority Intelligence Engine:
- Market signals can elevate or suppress priority of actions (e.g., if market feedback shows offer messaging isn't landing, messaging refinement moves up)
- Timing windows can create urgency for actions that would otherwise rank lower
- Competitive intelligence can surface gaps to exploit or threats to defend

### Achievability % connection

The External Conditions Score component of the achievability percentage formula is informed by EIS:
- Before EIS is populated: AI uses training-data estimate, labeled accordingly
- After EIS is populated: AI uses actual market signals from `Market_Signals_Register.md` and `Macro_Conditions_Log.md`

### Step Function connection

The Blue Ocean Register, Timing Externalities, and Success Models subdirectories are the primary EIS sources for step-function candidate identification. When intelligence in these files meets step-function recognition criteria, the AI flags the candidate to the Priority Intelligence Engine and logs it to `4_Context_Files/Level_2_Strategy/Step_Function_Register_CX2.md`.

---

## Update Cadence

| Subdirectory | Primary Trigger | Standing AI Scan | Periodic Review |
|---|---|---|---|
| 1_Market_Intelligence | After every discovery call, content publication, community interaction | Yes — every session | Weekly |
| 2_Competitive_Intelligence | After competitive research session | No | Monthly |
| 3_Success_Models | After sourcing new benchmark data | No | Quarterly |
| 4_Research_Library | After reading or finding relevant research | No | As needed |
| 5_Blue_Ocean_Scanning | AI standing scan every session | Yes — every session | Weekly synthesis |
| 6_Timing_Externalities | Platform/macro change events | Yes — timing window scan | Weekly |
| 7_AI_Training_Intelligence | As AI surfaces relevant benchmarks during sessions | No | Quarterly refresh |

---

## Automation Protocol (Future)

The EIS is designed for eventual dashboard integration. All governance files specify:
- Which fields are dashboard-relevant
- The recommended automation trigger
- The display format

When the dashboard build begins (Phase 4 of the System Extension Plan), EIS governance files serve as the data layer specification. No redesign of the content structure will be required.

---

## Version History

| Version | Date | Change |
|---|---|---|
| v1 | 2026-03-06 | Initial governing scope document — created during Phase 2 of System Extension Plan v2.1 |
