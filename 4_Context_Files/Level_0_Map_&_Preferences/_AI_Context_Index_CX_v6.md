# AI Context Index
## Canonical Source Locations in the AI Mastery Toolkit

**Purpose:** This index tells AI where to find authoritative context files.
Context files live in `4_Context_Files/` within the AI Mastery Toolkit.
When loading context for a session, read from these paths.

**Version:** v6
**Updated:** 2026-03-13 (filename versioned: _AI_Context_Index_CX_v6.md; CX suffix system extended to include SW and EI; see Architecture Map CX0 v3)

---

## SYSTEM PREFERENCES (Session-Critical — Load First)

```
4_Context_Files/Level_0_Map_&_Preferences/

  SuperContext_v[latest].md            ← current operational state; load every session
  SuperContext_Archive/                ← version history; do NOT load during sessions

  Human_Preferences_v[latest].md      ← human working conventions; load every session
  Human_Preferences_Archive/          ← version history; do NOT load during sessions

  AI_Preferences_v[latest].md         ← AI operational conventions; load every session
  AI_Preferences_Archive/             ← version history; do NOT load during sessions

  Dyadic_Preferences_v[latest].md     ← dyadic collaboration conventions; load every session
  Dyadic_Preferences_Archive/         ← version history; do NOT load during sessions
```

**Note:** Always load the highest-numbered current file for each type. Archive subfolders hold version history only — never load archive files into a session context window.

**Three-Preferences Architecture:** Human, AI, and Dyadic Preferences are distinct files — each capturing prescriptive conventions for one actor or relationship in the dyad. Together with SuperContext, they provide complete loadable operational context at session start. All four are updated at session end via ending-master-update.

---

## INTELLIGENCE LAYER (Levels 0-3) — Stable Reference

### Level 0: Architecture Map and Operating System
```
4_Context_Files/Level_0_Map_&_Preferences/
  Complete_Document_Architecture_Map_CX0_v2.md   ← system self-knowledge; read this first
  Priority_Intelligence_Engine_CX0_v1.md         ← PIE: two-layer priority + Step Function scan; load every session (per AI_Preferences v19)
```

**PIE loading note:** AI_Preferences v19 includes a standing instruction to load the Priority_Intelligence_Engine at every session and carry it as a behavioral frame. The PIE also references two Level 2 companion files (see below).

---

### Level 1: Personal Foundation
Documents numbered 1–15 sequentially across all four domains.

```
4_Context_Files/Level_1_Foundation/0_Personal_Foundation/

  D1_Identity_Foundation/
    01_Personal_Mission_and_Values_Statement_CX1.md   ← core values, mission, operating principles
    02_Life_Vision_and_Goals_Framework_CX1.md         ← 10-20yr vision, 5yr goals, 1yr objectives
    03_Personal_Brand_and_Identity_Document_CX1.md    ← brand statement, differentiators, reputation
    04_Decision_Making_Principles_CX1.md              ← decision matrix, time/money rules, red flags
    Five_x_100s_Outlook_and_Goals_CX1_v1.md          ← personal goals across 5 horizons: 100 days / weeks / months / quarters / years; horizon coherence check included

  D2_Health_and_Performance/
    05_Health_Profile_and_Optimization_Protocols_CX1.md  ← biomarkers, nutrition, exercise, Taoist foundation
    06_Energy_Management_System_CX1.md                   ← energy hierarchy, givers/drains, optimization
    07_Mental_Fitness_and_Resilience_Practices_CX1.md    ← contemplative practice, resilience frameworks
    08_Peak_Performance_Routines_CX1.md                  ← morning/evening architecture, deep work blocks

  D3_Wealth_and_Resources/
    09_Financial_Operating_System_CX1.md        ← financial philosophy, income streams, principles
    10_Time_Allocation_Framework_CX1.md         ← ideal week, time targets, protected blocks
    11_Knowledge_and_Learning_Curriculum_CX1.md ← teaching-focused learning, curriculum philosophy
    12_Asset_and_Resource_Inventory_CX1.md      ← IP assets, network, documentation status

  D4_Relationships_and_Legacy/
    13_Relationship_Management_System_CX1.md          ← preeminence standard, tiers, rituals
    14_Communication_Preferences_and_Protocols_CX1.md ← standards, calibrated directness, channels
    15_Legacy_and_Contribution_Framework_CX1.md       ← legacy vision, contribution channels, metrics
```

---

### Level 1: Business Foundation
Documents numbered 1–15 sequentially across all four domains.

```
4_Context_Files/Level_1_Foundation/1_Business_Foundation/

  D1_Strategic_Foundation/
    01_Brand_Guidelines_CX1.md           ← PRIMARY brand context; load for all content work
    02_Key_Message_Platform.md       ← PRIMARY messaging context; load for all content work
    03_Business_Strategy_Document_CX1_v2.md ← vision, business model, positioning, revenue strategy (v2 — authoritative); v1 (CX1.md) is superseded
    04_Ideal_Client_Profiles_Chunk_00_INDEX_CX1_v4.2.md  ← PRIMARY audience context; three full ICPs with psychographics

  D2_Operational_Excellence/
    05_Service_Product_Catalog_CX1.md          ← five-tier service model, pricing, delivery structure
    06_Standard_Operating_Procedures_CX1.md    ← onboarding SOP, coaching session SOP, content creation SOP
    07_Client_Journey_Map_CX1.md               ← seven-stage journey (Awareness → Alumni)
    08_Quality_Standards_and_Checklists_CX1.md ← preeminence standard, session checklist, content checklist

  D3_Intellectual_Property/
    09_Proprietary_Methodologies_and_Frameworks_Chunk_00_INDEX_CX1_v4.1.md ← INDEX + Chunks 01–03; Cognitive Architecture + Five-Part Session Architecture; v5.0
    10_Content_Library_and_Templates_CX1.md            ← IP assets inventory, templates; v5.0
    11_Case_Studies_and_Success_Stories_CX1.md         ← two-track case study development (anonymized + named); v5.0
    Concurrent_Context_Rotation_CX1_v1.0.md            ← CCR workflow IP (Status: Final); promoted to D3 root 2026-03-05

    CDPID-Framework/                                        ← PRIMARY framework IP; load for all CDPID work
      CDPID_White_Paper_SSRN_Submission_CX1_v1.2.md            ← published paper MD source; DOI 10.2139/ssrn.6278438
      CDPID_Synthesis_Working_Document_CX1_v1.2.md             ← full framework in depth
      CDPID_Practitioners_Guide_Behavioral_Development_CX1_v1.0.md ← practitioner application guide; book chapter candidate
      [DOCX + PDF production files moved to Level_6_Asset_Production/18_SSRN/ — 2026-03-05]

    Unique_IP/                                              ← IP Management hub: inventory + assessments
      System_Innovations_Register_CX1.md                       ← IP inventory: 12 named Cat A system architecture innovations
      README.md                                                 ← assessment index: 14 Tier 1 / 5 Tier 2 across 19 assessments
      [19 assessment files — one per assessed IP element]

  D4_Systems_and_Scale/
    12_Tech_Stack_Documentation_CX1.md                ← technology infrastructure and selection criteria
    13_AI_Integration_Playbook_CX1.md                 ← current AI use cases, guardrails, future roadmap
    14_Sales_and_Lead_Qualification_Framework_CX1.md  ← RAW filter, discovery call framework, post-call process
    15_Financial_Model_and_Metrics_CX1.md             ← revenue model, operating costs, key metrics
```

---

### Level 2: Strategy
```
4_Context_Files/Level_2_Strategy/
  2.1_Business_Alignment_and_Positioning_CX2.md
  2.2_Strategic_Integration_Plan.md              ← SUPERSEDED by 2.3; flagged for deletion
  2.3_Annual_OKR_Set_2026_CX2.md                 ← AUTHORITATIVE planning reference; load for all strategy work
  [2.4_Master_Timeline.md — to be created; = SC_Layer 5]

  OKR_Velocity_Model_2026_CX2.md                 ← LOAD EVERY SESSION: achievability % for all active KRs; updated daily by AI at debrief Step 6
  Step_Function_Register_CX2.md                  ← LOAD EVERY SESSION: active Step Function candidates; updated by AI during session scan

  OKR_Progress_2026/
    OKR_Velocity_Model_2026_CX2.md               ← same file; canonical path
    OKR_Progress_Log_2026_CX2.md                 ← running log of KR-moving events; updated at debrief Step 6 Part A

  3_Programs/                                    ← PROGRAMS LAYER (added 2026-03-08)
    Programs_Register_CX2.md                     ← READ AT EVERY DAILY BRIEF: master index of all programs; surfaces Active/Paused programs
    PGM-001_Funding_Sprint/
      PGM-001_Brief_CX2.md                       ← program definition, phase architecture, success criteria
      PGM-001_Log_CX2.md                         ← timestamped progress log; append at each session via daily-debriefing Step 5.5
      PGM-001_Asset_Index_CX2.md                 ← index of all assets produced by this program
    PGM-002_Ongoing_Outreach/
      PGM-002_Brief_CX2.md                       ← program definition, campaign registry, design principles
      PGM-002_Log_CX2.md                         ← timestamped progress log; append at each session via daily-debriefing Step 5.5
      PGM-002_Asset_Index_CX2.md                 ← index of all assets produced by this program
```

**OKR loading rule:** For any planning, strategy, or goal-alignment session, load `2.3_Annual_OKR_Set_2026_CX2.md` as the authoritative target reference. This file supersedes `2.2_Strategic_Integration_Plan.md` for all KPI and target-setting purposes. Mode 3 and Mode 4 of `okr-builder` are available inline for quick alignment checks.

**Velocity Model loading rule:** Load `OKR_Velocity_Model_2026_CX2.md` at every session as part of the Priority Intelligence Engine's Layer 2 synthesis. The daily brief reads this file automatically. AI recalculates achievability percentages at every daily-debriefing Step 6 Part B.

**Programs loading rule:** Read `Programs_Register_CX2.md` at every daily brief to surface Active program status. When working on a program-related task, load the relevant Program Brief and most recent Log entry before starting. When completing program-relevant work at checkpoint, tag the SC_Layer 5D block with the PGM-ID — this enables daily-debriefing Step 5.5 to route the completion to the correct Program Log.

### Level 3: Portfolio
```
4_Context_Files/Level_3_Portfolio/
  [3.1_Offering_Portfolio_Map_CX3.md — to be created]
  [3.2_Client_Journey_Map_CX3.md — to be created]
```

---

## PRODUCTION LAYER (Levels 4-6) — Per-Offering Context

### Level 4: Offering Specifications
```
4_Context_Files/Level_4_Offering_Briefs/[Offering-Name]/
  [Offering]_Specifications.md

  CDPID-Publication/
    CDPID_Complete_Launch_Strategy_CX5_v2.md   ← Phase Two publication campaign spec (Substack, LinkedIn, Medium, outreach)
    Priority Record/
      CDPID_Priority_Record_v1.0.md        ← ACTIVE STATUS DOC: all platform IDs, DOIs, URLs, submission status; load when working on CDPID deployment
    Acedemia.edu/                          ← platform-specific deployment records
    Case Studies/
    Conversation notes/
    Copyright Office/
    Initial Observations/
    ORCID - Open Researcher and Contributor ID/
    OSF - Open Science Framework/
    Research Gate/
    SSRN - Social Science Research Network/
    Scholar dot Google/
```

### Level 5: Content Strategy
```
4_Context_Files/Level_5_Content_Strategy/

  Channel_Guidelines_INDEX_CX5.md          ← MASTER INDEX: all 22 channels, status, file paths; load first
  Channel_Guidelines_Build_Plan_CX5_v2.md  ← build plan + source materials + execution log
  Channel_Guidelines_TEMPLATE.md       ← reusable template for future channel additions

  01_Main-Website/
    Main-Website_Guidelines_v1.md      ← three brand hierarchies (Coaching/Community/Courses)
    INDEX.md
  Community-Site/                      ← pre-dates ##_ prefix convention
    Community-Site_Guidelines_v1.md
    INDEX.md
  03_Course-Site/ through 22_Zenodo/   ← channels 03–22; each contains [Channel]_Guidelines_v1.md + INDEX.md

  CDPID_Complete_Launch_Strategy_CX5_v2.md ← Phase-by-phase IP publication strategy
  Content Channel Deployment Vectors_CX5.md ← original 13-channel base list

  Community-Site/                      ← [Your Organization] community content specs (source files)
    [Your Organization]_Content_Strategy_Specifications_v1.md
    [Your Organization]_Content_Calendar_Strategy.md
    [Your Organization]_Post_Content_Structure_v4_Complete.md
    [Your Organization]_Community_Content_Loop_Strategy.md
    [Your Organization]_First_100_Posts_Strategic_Plan.md
    [Your Organization]_Metrics_Optimization_Framework.md
    [Your Organization]_Email_Sequences_Reference.md
    [Your Organization]_YouTube_Materials_Reference.md
```

**Channel Guidelines loading rule:** For any content production session, load:
1. Universal context: Brand Guidelines + Key Message Platform + ICP Profiles
2. `Channel_Guidelines_INDEX_CX5.md` — for navigation
3. `[##_Channel]/[Channel]_Guidelines_v1.md` — for the specific target channel
4. Channel-specific source files as listed in Build Plan §Source Materials

### Level 6: Asset Production
```
4_Context_Files/Level_6_Asset_Production/[Channel]/
  INDEX.md                   ← active and completed projects for this channel

  18_SSRN/
    INDEX.md                 ← SSRN channel production index
    CDPID_White_Paper_SSRN_Submission_v1.2.docx   ← completed; published DOI 10.2139/ssrn.6278438
    CDPID_White_Paper_SSRN_Submission_v1.2.pdf    ← completed; published DOI 10.2139/ssrn.6278438
```

**Note on binary file placement:** Binary production outputs (DOCX, PDF, etc.) currently reside in the Level_6_Asset_Production channel folders alongside the INDEX.md. The `AI Mastery Toolkit v4_assets/` folder referenced in earlier SDD notes does not exist in the current structure — `10_Output_Assets/` inside the toolkit is where other binary outputs are stored. Level 6 channel folders hold both INDEX files and completed binary production assets.

---

---

## EXTERNAL INTELLIGENCE SYSTEM (EIS) — Peer Directory

The EIS is a top-level peer directory to `4_Context_Files/` and `5_System_Wisdom/`. It holds outward-facing calibration intelligence. It does NOT use CX suffixes — it uses its own CX-EIS authority designation.

**Three-intelligence-layer architecture:**
- `4_Context_Files/` — Internal identity and operational context (who [User] is, what [Your Organization] is building)
- `5_System_Wisdom/` — Behavioral intelligence (how the dyad operates and learns)
- `6_External_Intelligence/` — External calibration (what the market and world are saying)

```
6_External_Intelligence/
  EIS_Governing_Scope.md          ← master boundary document; read before adding any EIS content
  INDEX.md                        ← master index of all EIS files and population status
  README.md                       ← purpose, design philosophy, loading protocol

  1_Market_Intelligence/
    MI_Governance.md              ← governance; read before updating this subdirectory
    Market_Signals_Register.md    ← READ AT EVERY DAILY BRIEF; running log of real market signals
    Customer_Voice_Log.md         ← verbatim audience language; update after every conversation
    Funnel_Metrics_Tracker.md     ← conversion rates; update monthly

  2_Competitive_Intelligence/
    CI_Governance.md
    Competitor_Map.md             ← named competitors; update when new competitor observed
    Positioning_Gap_Analysis.md   ← [Your Organization] differentiation map; update monthly

  3_Success_Models/
    SM_Governance.md
    3C_Practice_Success_Cases.md  ← documented success trajectories from comparable practitioners
    Revenue_Milestone_Benchmarks.md ← benchmark timelines; seeded from AI training data

  4_Research_Library/
    RL_Governance.md
    Research_Index.md             ← index of all curated research
    [topic-filed notes]

  5_Blue_Ocean_Scanning/
    BOS_Governance.md
    Blue_Ocean_Register.md        ← formally evaluated Blue Ocean candidates
    Emerging_Opportunity_Log.md   ← early-signal observations from standing AI scan

  6_Timing_Externalities/
    TE_Governance.md
    Macro_Conditions_Log.md       ← macro conditions affecting AI education market
    Platform_Change_Tracker.md    ← platform algorithm/policy/feature changes
    Window_of_Opportunity_Log.md  ← READ AT EVERY DAILY BRIEF; active time-bounded windows

  7_AI_Training_Intelligence/
    ATI_Governance.md
    Benchmark_Library.md          ← 3C practitioner benchmarks; seeded from AI training data
    Framework_Comparison_Log.md   ← framework comparisons from AI training knowledge
```

**EIS loading rules:**
- **Daily brief reads automatically:** `1_Market_Intelligence/Market_Signals_Register.md` (most recent entry) and `6_Timing_Externalities/Window_of_Opportunity_Log.md` (active windows)
- **PIE Layer 2 synthesis reads:** All subdirectory latest entries (summary level) when running daily brief Priority Intelligence block
- **Deep reads triggered by:** Entering new market segment / Revising offer / Running okr-builder Mode 3 / Major strategic decision
- **All entries labeled:** AI training-data estimates carry `[Source: AI training-data estimate]` label; replace with real data as collected

---

## CX SUFFIX AUTHORITY SYSTEM

Context files carry a **CX suffix** that encodes their authority level directly in the filename. This enables authority resolution without relying on folder position — critical when files are referenced in prompts or loaded outside their home folder.

| Suffix | Level | Folder | Authority |
|--------|-------|--------|-----------|
| `CX0` | 0 | `Level_0_Map_&_Preferences/` | Highest — System Preferences, Architecture Map |
| `CX1` | 1 | `Level_1_Foundation/` | Strategic Foundation — Brand, Key Messages, ICP |
| `CX2` | 2 | `Level_2_Strategy/` | Initiative — OKR, annual strategy, active projects |
| `CX3` | 3 | `Level_3_Portfolio/` | Portfolio — Offering map, client journey |
| `CX4` | 4 | `Level_4_Offering_Briefs/` | Offering — Offering Briefs (living intelligence dossiers) |
| `CX5` | 5 | `Level_5_Content_Strategy/` | Channel — Content strategy, channel guidelines |
| `CX6` | 6 | `Level_6_Asset_Production/` | Asset — Production templates, session artifacts |

**Conflict resolution rule:** When two loaded context files provide conflicting information, the file with the **lower CX number wins**. Always. If conflict is found, follow the higher-authority file and flag the discrepancy — it likely indicates a stale lower-authority file.

**Loading order:** Load from highest to lowest authority (CX0 first, CX6 last). This ensures the governing framework is in place before lower-authority files are processed.

**Note:** Not all context files currently carry CX suffixes in their filenames (the retrofit is a future session). When CX suffixes are absent, use folder position (the Level number) as the authority signal.

---

## LOADING PROTOCOL

**For a new session, load in this order:**
1. `Level_0_Map_&_Preferences/Complete_Document_Architecture_Map_CX0_v2.md` — orientation (CX0)
2. `Level_0_Map_&_Preferences/Priority_Intelligence_Engine_CX0_v1.md` — standing behavioral frame (CX0; per AI_Preferences v19)
3. `Level_2_Strategy/OKR_Progress_2026/OKR_Velocity_Model_2026_CX2.md` — achievability % and trajectory signals (CX2)
4. `Level_2_Strategy/Step_Function_Register_CX2.md` — active Step Function candidates (CX2)
4a. `Level_2_Strategy/3_Programs/Programs_Register_CX2.md` — active program status (CX2; read at daily brief)
5. `D1_Strategic_Foundation/01_Brand_Guidelines_CX1.md` + `02_Key_Message_Platform.md` — for any content work (CX1)
6. `D1_Strategic_Foundation/04_Ideal_Client_Profiles_Chunk_00_INDEX_CX1_v4.2.md` — for audience context (CX1; 3 ICPs)
7. EIS daily reads (via daily brief): `6_External_Intelligence/1_Market_Intelligence/Market_Signals_Register.md` + `6_External_Intelligence/6_Timing_Externalities/Window_of_Opportunity_Log.md`
8. Relevant Level 4 Offering Brief — if working on a specific offering (CX4)
9. **For content production:** `Level_5_Content_Strategy/Channel_Guidelines_INDEX_CX5.md` → then load the specific channel guideline (CX5)
10. Level 6 project folder structure — to read queue state (CX6)

**Do NOT load everything.** Load only what the current task requires.

**Directory reference (as of 2026-03-06):**
- `4_Context_Files/` — Context (unchanged)
- `5_System_Wisdom/` — System Wisdom (unchanged)
- `6_External_Intelligence/` — NEW: External Intelligence System (EIS)
- `7_Session_Working_Files/` — was 6; renamed 2026-03-06
- `8_Retained_Working_Files/` — was 7; renamed 2026-03-06
- `9_Support_Documents/` — was 8; renamed 2026-03-06
- `10_Incoming_Material/` — was 9; renamed 2026-03-06
- `11_Output_Assets/` — was 10; renamed 2026-03-06
