# COMPLETE DOCUMENT ARCHITECTURE MAP v3
## The Complete System: From Orchestration to Execution

**Version:** 3.2
**Date:** 2026-03-13
**Previous Version:** v3.1 (2026-03-06)
**Status:** Master Reference Document

> **v3.2 Update (2026-03-13):** Full filename versioning introduced across the toolkit. Three-suffix authority system extended: CX (Context Files, all levels) + SW (System Wisdom) + EI (External Intelligence). Named archive folders standardized per-file-family. All SW and CX-root files now carry versioned filenames. See "What Changed in v3.2" below.

> **v3.1 Update (2026-03-06):** Phase 2 of the System Extension Plan v2.1 executed. Three major changes: (1) Six working directories renumbered 6→11 to make room for EIS; (2) New `6_External_Intelligence/` directory added as peer intelligence layer; (3) Four new CX0/CX2 documents added to the operating system. See "What Changed in v3.1" below.

---

## IMPLEMENTATION PROTOCOL FOR AI

**This spec must be followed literally. Before creating, renaming, or reorganizing any files or folders based on this document:**

1. Read the relevant section of this spec in full.
2. Produce a mapping table showing exactly what you are about to create — quoted from the spec — with the precise file and folder names you will use.
3. Wait for explicit user confirmation before touching the file system.
4. Do not infer, extend, or substitute naming conventions. If the spec shows `01_`, use `01_`. If it shows `D1_`, use `D1_`. Do not invent `1.1_`, `D1.1_`, or any other pattern not present in the spec.

**The spec is the authority. Your pattern-completion instincts are not.**

---

## WHAT CHANGED FROM v1

v1 established a 6-level document hierarchy (Levels 0-5) mapping foundation to execution. It was an excellent conceptual map but lacked:
- An orchestration layer (the map itself wasn't part of the map)
- A lifecycle/status management system
- Physical layer mapping across Local, Archive, and Cloud
- AI-human navigation principles for unified access

v2 corrects this by:
1. **Adding Level 0** — the architecture map itself as the orchestration layer, shifting all original levels up by one (original Level 0 → Level 1, through original Level 5 → Level 6)
2. **Splitting the architecture into two functional layers** — Intelligence (Levels 0-3) and Production (Levels 4-6) — each with different stability and queuing characteristics
3. **Defining the Folder = State, File = Content principle** — the folder location signals lifecycle status; the file name signals content type
4. **Mapping three physical storage layers** — Local/Cowork, Archive Drives, Cloud — and what lives where
5. **Confirming Option A organization** — Production levels organized by offering/project first, not content type first


**What Changed in v3 (2026-02-25):**
- Added Toolkit Portability Rule to PS_Layer 1 description
- Added portability note to Level 6 description
- Formalized the Asset Library (`AI Mastery Toolkit v4_assets/`) as a distinct storage location at PS_Layer 1
- Binary assets moved out of Toolkit; Asset Index files introduced as the lightweight reference pattern

**What Changed in v3.2 (2026-03-13):**
- Introduced three-suffix authority system: `CX` (Context Files root), `CX0–CX6` (existing), `SW` (System Wisdom), `EI` (External Intelligence). Every toolkit file now self-identifies its home system via filename suffix.
- `CX` (no number) established for root-level Context Files index and architecture documents (above all Level folders).
- All `5_System_Wisdom/4_System_Intelligence/` files now versioned: `AI_Current_State_SW_v13.md`, `Human_Current_State_SW_v7.md`, `Dyadic_Current_State_SW_v10.md`, `AI_Mastery_Record_SW_v1.md`, `Human_Mastery_Record_SW_v1.md`, `Dyadic_Mastery_Record_SW_v1.md`, `Current_Intelligence_SW_v1.md`.
- All `5_System_Wisdom/6_Triggers/` files now versioned: `AI_Trigger_Protocol_SW_v1.md`, `Human_Trigger_Protocol_SW_v1.md`.
- `4_Context_Files/` root index files now versioned: `_AI_Context_Index_CX_v6.md`, `_Human_Context_Index_CX_v1.md`.
- Named archive folder convention standardized: each file family has its own `[FileName]_Archive/` folder in the same directory.
- Empty `_Archive/` folder in `4_System_Wisdom/4_System_Intelligence/` replaced with per-family named archive folders.
- New archive folders created in `6_Triggers/`: `AI_Trigger_Protocol_Archive/`, `Human_Trigger_Protocol_Archive/`.
- New archive folders created in `4_Context_Files/` root: `AI_Context_Index_Archive/`, `Human_Context_Index_Archive/`.
- Full reference audit completed: all 17 operational prompt files and 5 index/README files updated to new filenames.
- AI_Current_State updated to snapshot 13: Output Template Bypass failure mode added.
- AI_Preferences updated to v32: Output Format Compliance standing instruction added.
- session-startup updated to v4.6: Step 4 template constraint reinforced.
- EI suffix established for future use; EI file versioning deferred to future session.

**What Changed in v3.1 (2026-03-06):**
- Directory renumbering: 6_Session_Working_Files → 7, 7_Retained → 8, 8_Support → 9, 9_Incoming → 10, 10_Output → 11
- New top-level directory: `6_External_Intelligence/` — External Intelligence System (EIS); outward-facing calibration intelligence; peer to 4_Context_Files and 5_System_Wisdom
- New CX0 document: `Priority_Intelligence_Engine_CX0_v1.md` — AI-integrated priority + Step Function standing scan; governs all sessions
- New CX2 document: `OKR_Velocity_Model_2026_CX2.md` — achievability % formula; recalculated daily by AI at debrief; governs OKR steering
- New CX2 document: `Step_Function_Register_CX2.md` — strategic register for step-function action candidates
- AI_Preferences updated to v19: PIE standing frame added to behavioral instructions



---

## THE CORE ORGANIZING PRINCIPLE

> **Folders carry state intelligence. Files carry content.**

The folder a file lives in tells you its lifecycle status — without opening it.
The file's name tells you what it contains — without opening it.

This principle serves two audiences simultaneously:
- **AI:** Token-efficient navigation. Scan folder structure to understand status at hierarchy level before consuming file content.
- **Human:** QC at a glance. Walk the folder structure to see what's queued, in progress, or complete without opening anything.

No file needs to be opened to understand the system's current state.

---

## THE ARCHITECTURE: 7 LEVELS

```
INTELLIGENCE LAYER (Stable, Semantic Organization)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Level 0 │ ORCHESTRATION MAP     │ The system's self-knowledge
Level 1 │ FOUNDATION DOCUMENTS  │ WHO YOU ARE
Level 2 │ STRATEGIC DOCUMENTS   │ WHERE YOU'RE GOING
Level 3 │ PORTFOLIO DOCUMENTS   │ WHAT YOU OFFER

PRODUCTION LAYER (Active, Offering/Project Organization)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Level 4 │ OFFERING SPECS        │ HOW EACH OFFERING WORKS
Level 5 │ CONTENT STRATEGY      │ WHAT CONTENT YOU NEED
Level 6 │ ASSET PRODUCTION      │ ACTUAL EXECUTION
```

---

## THREE-INTELLIGENCE-LAYER ARCHITECTURE (v3.1 Addition)

The toolkit operates three peer-level intelligence systems as top-level directories:

```
4_Context_Files/          ← INTERNAL IDENTITY: who [User] is, what [Your Organization] is building
5_System_Wisdom/          ← INTERNAL BEHAVIOR: how the dyad operates and learns
6_External_Intelligence/  ← EXTERNAL CALIBRATION: what the market and world are saying
```

These three are categorically different intelligence types and must remain structurally separate. Each system has its own filename suffix authority, enabling any file to self-identify its home system regardless of where it is encountered.

**Toolkit Filename Suffix Authority System (v3.2):**

| Suffix | System | Folder base | Notes |
|--------|--------|-------------|-------|
| `CX` | Context Files — root index/architecture | `4_Context_Files/` root | Spans all levels; no level number assigned |
| `CX0` | Context Files — Level 0 | `4_Context_Files/Level_0_Map_&_Preferences/` | Highest authority |
| `CX1`–`CX6` | Context Files — Levels 1–6 | `4_Context_Files/Level_[N]_*/` | Authority decreases with level number |
| `SW` | System Wisdom | `5_System_Wisdom/` (any subdirectory) | No subdirectory number in suffix; folder provides location |
| `EI` | External Intelligence | `6_External_Intelligence/` (any subdirectory) | No subdirectory number in suffix; folder provides location |

**Conflict resolution:** When two loaded files conflict, the lower CX number wins (CX0 > CX1 > ... > CX6). SW and EI files carry no authority rank relative to CX — they are distinct intelligence systems, not subordinate levels.

**Archive convention:** Each versioned file family has its own named archive folder in the same directory (e.g., `AI_Current_State_Archive/`, `Human_Preferences_Archive/`). Always one active file per family; all prior versions in the named archive folder. Load the highest-numbered version of any file family.

**6_External_Intelligence/ subdirectory structure (as of 2026-03-06):**
```
1_Market_Intelligence/     ← real signals from actual interactions
2_Competitive_Intelligence/ ← competitive landscape
3_Success_Models/          ← comparable practitioner trajectories and benchmarks
4_Research_Library/        ← curated external research
5_Blue_Ocean_Scanning/     ← uncontested/underserved market opportunities (standing AI scan)
6_Timing_Externalities/    ← platform changes, macro conditions, timing windows
7_AI_Training_Intelligence/ ← AI training-data benchmarks and framework comparisons
```

**New CX0/CX2 operating system files (v3.1):**
```
4_Context_Files/Level_0_Map_&_Preferences/
  Priority_Intelligence_Engine_CX0_v1.md    ← governs all priority determination; load every session

4_Context_Files/Level_2_Strategy/
  Step_Function_Register_CX2.md             ← step-function action candidates; load every session

4_Context_Files/Level_2_Strategy/OKR_Progress_2026/
  OKR_Velocity_Model_2026_CX2.md            ← achievability % for all KRs; updated daily
```

---

## TWO FUNCTIONAL LAYERS

### Intelligence Layer (Levels 0-3)

**Characteristics:**
- Stable reference documents — updated infrequently (monthly to annually)
- Organized semantically by document type and purpose
- No folder-based status queuing at any directory level
- Working copies live in Local/Cowork for both AI access and human editing
- Snapshots archived to Admin drive at version milestones

**Why no queuing here:** These documents don't move through a production pipeline. They inform everything below them. Their "status" is their version number and update date, captured in the document header — not their folder location.

**Navigation:** AI and human both read these as reference material, not as work items to process.

---

### Production Layer (Levels 4-6)

**Characteristics:**
- Active working documents — constantly being created, moved, reviewed, archived
- Organized by **offering/project first** (Option A), not by content type
- Status-state folders **nested within production projects** — not at top-level directories
- SDD workflow is the primary production methodology at Level 6

**Why offering/project first (Option A):** The SDD workflow produces multiple asset types (scripts, image prompts, blog posts, email copy) for a single offering in one production run. Keeping all outputs for one offering co-located is more coherent than scattering them across content-type folders.

**Where queuing lives:** Inside individual production projects at Level 6. NOT at the Level 4, 5, or 6 top-level directories.

---

## LEVEL 0: ORCHESTRATION MAP

**This document.** The architecture map IS Level 0.

Level 0 is the system's self-knowledge — the complete map of how every other document relates to every other document. Without this, the system cannot be navigated, maintained, or explained to a new AI session.

**What it contains:**
- This complete architecture (all levels, both layers)
- Physical layer mapping (Local, Archive, Cloud)
- Core organizing principles (Folder = State, File = Content)
- Navigation guide for AI and human
- Maintenance schedule and update triggers

**How it connects:**
- DOWN to Levels 1-6: Defines the rules every other document follows
- HORIZONTAL to SuperContext: SuperContext is the AI-compressed, session-ready distillation of Level 0

**Stability:** Very stable. Updated only when the architecture itself changes.

**SuperContext relationship:** The SuperContext is not separate from this architecture — it IS Level 0 in AI-session-ready form. When you load SuperContext at session start, you are loading a compressed view of this map plus current project state. This is why SuperContext is so powerful: it gives AI instant orientation to the complete system without reading every file.

---

## LEVEL 1: FOUNDATION DOCUMENTS
*(Original Level 0 — shifted up by one)*

**WHO YOU ARE** — The unchanging core that informs everything else.

These exist in your other project (AI Mastery Toolkit context files). They inform everything but rarely change.

### Personal Foundation (From Personal Life Operating System Toolkit)

**Domain 1: Identity Foundation**
0. Personal Philosophy Foundation *(philosophical bedrock — added 2026-02-20)*
1. Personal Mission & Values Statement
2. Life Vision & Goals Framework
3. Personal Brand & Identity Document
4. Decision-Making Principles

**Domain 2: Health & Performance**
5. Health Profile & Optimization Protocols
6. Energy Management System
7. Mental Fitness & Resilience Practices
8. Peak Performance Routines

**Domain 3: Wealth & Resources**
9. Financial Operating System
10. Time Allocation Framework
11. Knowledge & Learning Curriculum
12. Asset & Resource Inventory

**Domain 4: Relationships & Legacy**
13. Relationship Management System
14. Communication Preferences & Protocols
15. Legacy & Contribution Framework

### Business Foundation (From Complete Business Documentation Toolkit)

**Domain 1: Strategic Foundation**
1. Brand Guidelines ✓
2. Key Message Platform ✓
3. Business Strategy Document
4. Ideal Client Profiles

**Domain 2: Operational Excellence**
5. Service/Product Catalog
6. Standard Operating Procedures (SOPs)
7. Client Journey Map
8. Quality Standards & Checklists

**Domain 3: Intellectual Property**
9. Proprietary Methodologies/Frameworks
10. Content Library & Templates
11. Case Studies & Success Stories

**CDPID Framework** *(dedicated subfolder — primary IP asset)*
- White paper (published, DOI-anchored), synthesis document, practitioner guide, Priority Record
- Location: `D3_Intellectual_Property/CDPID-Framework/`
- This is the foundational framework underpinning the [Your Organization] (Focus On Solutions Group) and all AI mastery methodology

**Domain 4: Systems & Scale**
12. Tech Stack Documentation
13. AI Integration Playbook
14. Sales & Lead Qualification Framework
15. Financial Model & Metrics

**How Level 1 informs the system:**
- Personal Mission → Business Strategy (Level 2)
- Brand Guidelines → All Content Strategy (Level 5)
- Energy Management → Master Timeline (Level 2)
- Values → Filter which offerings to create (Level 3)

**Maintenance:** Review annually. Update only when fundamental changes occur.

---

## LEVEL 2: STRATEGIC DOCUMENTS
*(Original Level 1)*

**WHERE YOU'RE GOING** — Multi-year vision and positioning. Updated quarterly or annually.

### Document 2.1: Business Strategy & Positioning
- Vision for 1-3 years
- Business model (how you make money)
- Core positioning in market
- Target market definition
- Revenue goals and strategy
- Competitive differentiation and growth strategy

### Document 2.2: Annual Operating Plan
- This year's specific revenue goals and key initiatives
- Resource allocation (time, money, attention)
- Quarterly milestones and success metrics
- What you're NOT doing this year

### Document 2.3: Master Timeline & Resource Allocation
*(This IS SC_Layer 5)*
- Available capacity assessment
- Active strategic projects
- 12-week rolling execution timeline
- Weekly execution detail and time allocation

**Maintenance:** 2.1 annually. 2.2 annually with quarterly adjustments. 2.3 weekly for execution detail.

---

## LEVEL 3: PORTFOLIO DOCUMENTS
*(Original Level 2)*

**WHAT YOU OFFER** — How all offerings fit together as a coherent system. Updated quarterly.

### Document 3.1: Complete Offering Portfolio Map
- All offerings (services, courses, community, digital products)
- How offerings connect and lead to each other
- Entry points, natural progressions, pricing strategy
- Revenue model by offering

### Document 3.2: Client Journey Map (Cross-Portfolio)
- Awareness → Consideration → Decision → Experience → Advocacy stages
- Content/touchpoints at each stage
- Which offerings serve which stages

**Maintenance:** Quarterly, or when major offerings are added or retired.

---

## LEVEL 4: OFFERING SPECIFICATIONS
*(Original Level 3)*

**HOW EACH OFFERING WORKS** — Detailed blueprint per offering.

**Organization:** By offering name (Option A). Example:

```
Level_4_Offering_Briefs/
  Academy-Course-1/
    Course_Specs.md
  Coaching-6-Month-Program/
    Coaching_Specs.md
  Community-Membership/
    Community_Specs.md
  Consulting-Engagement/
    Consulting_Specs.md
  CDPID-Publication/
    CDPID_Complete_Launch_Strategy_CX5_v2.md    ← Phase Two publication campaign spec
```

Each offering specification contains: strategic positioning, product/service structure, content outline, technical specifications, success metrics, client journey detail.

**Note:** No status-state folders at this level. Offering specs are stable reference documents. Their lifecycle is tracked by version number in the file header, not folder location.

**Maintenance:** Annually, or when an offering strategy changes.

---

## LEVEL 5: CONTENT STRATEGY
*(Original Level 4)*

**WHAT CONTENT YOU NEED** — The bridge between offering specs and actual production.

**Organization:** By offering name (Option A), mirroring Level 4. Example:

```
Level_5_Content_Strategy/
  Academy-Course-1/
    Content_Strategy.md
    Asset_Inventory.md
    Messaging_Templates.md
    Content_Calendar.md
  Coaching-6-Month-Program/
    Content_Strategy.md
    Asset_Inventory.md
```

Each content strategy contains: content pillars, customer journey content map (Awareness → Advocacy), master asset inventory with status, messaging templates, content calendar, distribution strategy, creation guidelines.

**Note:** The asset inventory within each strategy file tracks status (not started / in progress / complete / published). This is file-level status tracking — appropriate for a planning document. The folder-based status queuing at Level 6 is for production files in motion.

**Maintenance:** Asset inventory monthly. Strategy quarterly.

---

## LEVEL 6: ASSET PRODUCTION
*(Original Level 5)*

**ACTUAL EXECUTION** — Where the SDD workflow runs and individual assets are produced.

**Portability note:** Level 6 contains only markdown files. Binary assets are stored in `AI Mastery Toolkit v4_assets/` (sibling folder). Asset Index `.md` files inside Level 6 project folders document and locate all binary assets. See `3_AI_&_Human_Capabilities/9_Workflows/Asset_Management_Workflow.md` for the full workflow.

### The Key Difference from v1

v1 organized Level 5 (now Level 6) by content type:
```
/Level_5_Assets
  /Blog_Posts
  /Email_Sequences
  /Videos
  /Social_Graphics
```

v2 organizes Level 6 by offering/project first (Option A):
```
Level_6_Asset_Production/
  Academy-Course-1/
    Launch-Blog-Series/          ← production project
    Enrollment-Email-Sequence/   ← production project
    Social-Awareness-Campaign/   ← production project
  Coaching-6-Month-Program/
    Onboarding-Materials/        ← production project
```

### Status-State Folders — Nested Within Production Projects

This is where the folder-based status queuing lives. Each production project contains its own lifecycle folders:

```
Academy-Course-1/
  Launch-Blog-Series/
    01_Brief/         ← project defined, not yet in production
    02_Draft/         ← AI-generated or in-progress content
    03_Review/        ← human QC: review, select, refine
    04_Complete/      ← approved and ready for deployment
```

**The status folders are NOT at the Level 6 top-level directory.** They are nested within each individual production project folder.

**What each status folder contains:**
- `01_Brief/` — The SDD input document: offering context, content strategy reference, specific asset requests for this production run
- `02_Draft/` — Raw AI output: scripts, image prompts, copy, whatever the SDD run produced. These are token-efficient individual files, one asset per file, named by their content
- `03_Review/` — Files moved here by human after QC selection. May contain light edits, annotation, or selection notes
- `04_Complete/` — Approved assets ready for export to specialized tools or deployment to Cloud

### Human QC Role

The human's job in the production layer is not to rewrite — it is to review and advance:
1. Scan `02_Draft/` folder contents (file names tell you what they are without opening)
2. Open and evaluate each draft
3. Move acceptable files to `03_Review/`
4. Open and do any final refinement in `03_Review/`
5. Move approved files to `04_Complete/`
6. Take `04_Complete/` assets to specialized tools (image generators, video editors, email platforms, etc.)
7. Publish to Cloud

### SDD Workflow as Production Methodology

Each SDD run produces one production project folder. The SDD run:
- Takes the Brief from `01_Brief/`
- Generates multiple assets (multiple file types, multiple topics) in one session
- Outputs atomic files to `02_Draft/` — one file per asset, named by content

This is why Option A (offering/project first) works: one SDD run produces diverse asset types all serving the same offering. They belong together in one project folder, not scattered across content-type folders.

**Maintenance:** Ongoing execution. Completed projects archived to Projects drive.

---

## PHYSICAL STORAGE LAYERS

Three physical layers. Each serves a distinct purpose. Together they create multi-vector risk management.

### PS_Layer 1: Local / Cowork (Active Working Documents)

**What it is:** The files the user sees directly on their computer. The folder that AI Cowork has access to.

**What lives here:** All levels (0-6) — working copies. These are the live, editable, AI-manipulable files.

**Characteristics:**
- AI can read, write, generate, reorganize at will
- Human reviews and does QC here
- Treated as a **dumb terminal** — can fail or be lost without catastrophic consequence
- This is the limiting container for AI manipulation: AI never touches archive drives

**Risk posture:** Acceptable to lose. Nothing here is irreplaceable if archive drives are current.

**Toolkit Portability Rule:** The Toolkit directory (`AI Mastery Toolkit v4/`) contains only plain-text markdown files. Binary and media files (images, video, HTML exports, PDFs, Word documents) are stored in the sibling Asset Library folder (`AI Mastery Toolkit v4_assets/`) at the same Claude Cowork root level. The Asset Library mirrors the project folder names of Level 6. Inside the Toolkit, Asset Index `.md` files record what binary assets exist, the tool/workflow used to create them, their Asset Library path, and their deployment location. This keeps the Toolkit lightweight, portable, and fully AI-navigable.

---

### PS_Layer 2: Archive Drives (Resilient Long-Term Storage)

Three external drives, each with a redundant mirror drive. Six physical drives total.

**Admin Drive** (+ Admin Mirror)
- What it holds: Snapshots of Intelligence Layer (Levels 0-3) at version milestones
- Corresponds to: Foundation, Strategy, Portfolio documents
- Update frequency: When Intelligence Layer documents reach new major versions

**Projects Drive** (+ Projects Mirror)
- What it holds: Completed production projects from Level 6 (after `04_Complete/` is archived)
- Corresponds to: Asset production outputs after deployment
- Update frequency: As production projects complete

**Support Drive** (+ Support Mirror)
- What it holds: SOPs, infrastructure documentation, tech stack configs, session tracking system
- Corresponds to: Operational support materials that don't fit cleanly in Intelligence or Production
- Update frequency: As systems and processes evolve

**Characteristics:**
- Human access only — AI does not touch archive drives
- Resilient and scalable (drives can be replaced with larger capacity as needed)
- Creates a naturally secure air-gap between AI manipulation and long-term records

**Risk posture:** This is the resilient backbone. Losing the computer loses nothing here.

---

### PS_Layer 3: Cloud (Deployed/Published Content)

**What it holds:** Files that operate in conjunction with live sites — Coaching site, Community site, Academy site.

**What goes here:** Assets from `04_Complete/` that have been deployed: published blog posts, live course content, active email sequences, community resources.

**Characteristics:**
- The public-facing layer
- AI may help prepare content for Cloud but does not directly manage Cloud deployment
- Coordinates with site platforms (Moodle, etc.)

**Risk posture:** Content here is live and indexed. Changes have audience impact.

---

### Physical Layer Summary

```
LOCAL / COWORK
└── All Levels 0-6 (working copies, AI-accessible, dumb terminal)

ARCHIVE DRIVES
├── Admin Drive     → Intelligence Layer snapshots (Levels 0-3)
├── Projects Drive  → Completed production projects (Level 6 archive)
└── Support Drive   → SOPs, infrastructure, operational systems

CLOUD
└── Deployed content from Level 6 → Live site assets
```

---

## FOLDER STRUCTURE: COMPLETE EXAMPLE

```
Business_Documentation/
│
├── Level_0_Map_&_Preferences/
│   └── Complete_Document_Architecture_Map_CX0_v2.md    ← this document
│
├── Level_1_Foundation/
│   ├── 0_Personal_Foundation/
│   │   ├── Identity_Foundation.md
│   │   ├── Health_and_Performance.md
│   │   ├── Wealth_and_Resources.md
│   │   └── Relationships_and_Legacy.md
│   └── 1_Business_Foundation/
│       ├── Brand_Guidelines.md
│       ├── Key_Message_Platform.md
│       ├── Business_Strategy.md
│       ├── Ideal_Client_Profile.md
│       └── [other foundation docs]
│
├── Level_2_Strategy/
│   ├── Business_Strategy_and_Positioning.md
│   ├── Annual_Operating_Plan.md
│   └── Master_Timeline.md
│
├── Level_3_Portfolio/
│   ├── Offering_Portfolio_Map_CX3.md
│   └── Client_Journey_Map_CX3.md
│
├── Level_4_Offering_Briefs/
│   ├── Academy-Course-1/
│   │   └── Course_Specifications.md
│   ├── Coaching-6-Month-Program/
│   │   └── Coaching_Specifications.md
│   └── Community-Membership/
│       └── Community_Specifications.md
│
├── Level_5_Content_Strategy/
│   ├── Academy-Course-1/
│   │   ├── Content_Strategy.md
│   │   ├── Asset_Inventory.md
│   │   └── Messaging_Templates.md
│   └── Coaching-6-Month-Program/
│       ├── Content_Strategy.md
│       └── Asset_Inventory.md
│
└── Level_6_Asset_Production/
    ├── Academy-Course-1/
    │   ├── Launch-Blog-Series/
    │   │   ├── 01_Brief/
    │   │   │   └── SDD_Brief_Launch-Blog-Series.md
    │   │   ├── 02_Draft/
    │   │   │   ├── Blog-Post_4-Levels-of-Navigation.md
    │   │   │   ├── Blog-Post_AI-Mastery-Foundation.md
    │   │   │   └── Blog-Post_Deliberate-Practice-AI.md
    │   │   ├── 03_Review/
    │   │   │   └── Blog-Post_4-Levels-of-Navigation.md  ← moved after QC
    │   │   └── 04_Complete/
    │   │       └── [approved assets ready for deployment]
    │   └── Enrollment-Email-Sequence/
    │       ├── 01_Brief/
    │       ├── 02_Draft/
    │       ├── 03_Review/
    │       └── 04_Complete/
    └── Coaching-6-Month-Program/
        └── Onboarding-Materials/
            ├── 01_Brief/
            ├── 02_Draft/
            ├── 03_Review/
            └── 04_Complete/
```

---

## DOCUMENT INFORMATION FLOW

### Flows DOWN (Foundation informs execution)
- Level 0 (Architecture) → Governs organization of all levels below
- Level 1 (Brand Guidelines) → Level 5 (Content Strategy) → Level 6 (Asset Production)
- Level 1 (Personal Values) → Level 2 (Business Strategy) → Level 3 (Portfolio)
- Level 3 (Offering Portfolio) → Level 4 (Offering Specs) → Level 5 (Content Strategy) → Level 6 (Asset Production)

### Flows UP (Execution updates intelligence)
- Level 6 (What content performs) → Level 5 (Adjust asset inventory and strategy)
- Level 5 (What messaging works) → Level 4 (Refine offering positioning)
- Level 4 (How offerings evolve) → Level 3 (Update portfolio map)
- Learning across all levels → SC_Layer 4 (Recent learnings)

### Flows ACROSS (Same-level documents inform each other)
- Level 3: Portfolio Map ↔ Client Journey Map
- Level 5: Academy Content Strategy ↔ Coaching Content Strategy (shared audience assets)
- Level 6: Production projects may share assets across offerings via `04_Complete/`

---

## SUPERCONTEXT INTEGRATION

SuperContext is the AI-session-ready distillation of this architecture:

```
SC_Layer 1 (Core Identity)        ← Pulls from Level 1 Foundation
SC_Layer 2 (Strategic Context)    ← Pulls from Level 2 Strategy
SC_Layer 3 (Working Preferences)  ← Personal preferences (not a document level)
SC_Layer 4 (Recent Learnings)     ← Updates as sessions execute
SC_Layer 5 (Master Timeline)      ← IS Document 2.3 of Level 2
SC_Layer 6 (Active Questions)     ← Surfaces from across all levels
SC_Layer 7 (Session Metadata)     ← Session-specific operational data
```

Level 0 (this document) is what SuperContext is distilled from. When you load SuperContext at session start, you are getting the AI-navigable version of Level 0 plus current project state — which is why it enables immediate orientation without reading the entire architecture map.

---

## AI NAVIGATION PRINCIPLES

When starting a session, AI reads in this order:

1. **SuperContext** (distilled Level 0 + current state) — orientation
2. **Relevant Level 4 Offering Specs** — if working on a specific offering
3. **Relevant Level 5 Content Strategy** — if working on content for that offering
4. **Level 6 project folder structure** — to understand what's in queue vs. draft vs. review

AI scans folder names (not file contents) to understand state. Only opens files when content is needed.

**AI does not:**
- Touch archive drives
- Reorganize the top-level directory structure without explicit instruction
- Mix content from different offerings within a single production project folder

---

## MAINTENANCE SCHEDULE

| Level | What | Review Frequency | Update Trigger |
|-------|------|-----------------|----------------|
| Level 0 | Architecture Map | As needed | Architecture change |
| Level 1 | Foundation Documents | Annually | Fundamental life/business change |
| Level 2 | Strategic Documents | Quarterly | Strategy shift or new year |
| Level 3 | Portfolio Documents | Quarterly | Offerings added or retired |
| Level 4 | Offering Specs | Annually | Offering strategy change |
| Level 5 | Content Strategy | Monthly (inventory) / Quarterly (strategy) | Content plan evolution |
| Level 6 | Asset Production | Ongoing | Continuous execution |

---

## THE KEY INSIGHT (UPDATED FROM v1)

This architecture does everything v1 did, and adds:

**Operational clarity:** The Intelligence/Production split tells everyone (AI and human) how to engage with each level. Intelligence = read and reference. Production = create, advance, and archive.

**Lifecycle visibility:** Folder location = document status. No metadata fields to fill in. No spreadsheet to update. The folder IS the status.

**Multi-vector resilience:** Computer is a dumb terminal. Archive drives are the backbone. Cloud is the deployment surface. Losing any one layer doesn't lose everything.

**Scalability:** Adding new offerings means adding new folders at Levels 4-6. The architecture doesn't change — it grows. Drives can expand in capacity. The system scales to any volume.

**AI-human unity:** The same folder structure that AI navigates efficiently (small files, clear naming, no need to open to understand) is the same structure the human walks for QC. No translation layer needed.

---

*This document is Level 0 of the system it describes.*
*When in doubt about how to organize any document, this is the reference.*
