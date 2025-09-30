# Glossary of Key Terms

**Location:** 0_Start_Here
**Created:** 2026-03-06
**Last Updated:** 2026-03-06
**Purpose:** Plain-language definitions of every acronym, system term, and concept used throughout the AI Mastery Toolkit.

> **How to use this glossary:** Entries are in alphabetical order. Each entry gives the full name of the acronym (if any), a plain-language definition, and a "Where you'll see it" note so you can find more context.

---

## A

### Achievability %
A calculated score (0–100%) that estimates the realistic probability of hitting a goal in a given time period. It's not an optimistic target — it's a calibrated reality check. The formula is:

`(Trajectory × 0.50) + (Buffer × 0.20) + (External Conditions × 0.20) + (Resource × 0.10)`

Each component is scored 0–100. The weighted total is the Achievability %. A score of 62% means "achievable with good execution but not certain." It's produced by the Priority Intelligence Engine at the start of each strategic session.

**Where you'll see it:** Priority Intelligence Engine outputs; OKR reviews; daily brief.

---

### AI
Artificial Intelligence. In this toolkit, "AI" almost always refers to a large language model (like Claude) being used as an active working partner — not a general reference to AI technology.

**Where you'll see it:** Everywhere.

---

### ATI — AI Training Intelligence
The knowledge that an AI assistant brings from its training data, as distinct from knowledge gathered from direct observation. When a file entry is labeled `[ATI estimate]`, it means the figure came from the AI's training knowledge, not from a source [User] personally verified. ATI estimates are useful starting points but should be upgraded to real data when possible.

**Where you'll see it:** EIS files; confidence labels throughout 6_External_Intelligence.

---

### ATI Estimate
A data point or figure sourced from AI training knowledge rather than direct verification. Three confidence tiers exist:
- `[ATI estimate — publicly reported]` — likely accurate; based on widely-reported public information
- `[ATI estimate — secondhand]` — derived from synthesized or secondhand sources; lower confidence
- `[Directly observed — [User]]` — the highest confidence label; means [User] personally observed or verified this

**Where you'll see it:** All EIS subdirectory files; Competitor_Map.md; Research_Index.md.

---

## B

### Blue Ocean
A market space that is uncontested or significantly underserved — where [Your Organization] would not be competing against established players on the same terms. Named after the strategy framework by Kim & Mauborgne (see BOS below). "Blue Ocean" = open water with no sharks. "Red Ocean" = crowded competitive waters.

**Where you'll see it:** 6_External_Intelligence / 5_Blue_Ocean_Scanning.

---

### BOS — Blue Ocean Scanning (subdirectory)
The subdirectory within the EIS that tracks uncontested market opportunities. Contains two files: `Emerging_Opportunity_Log.md` (early signals not yet formalized) and `Blue_Ocean_Register.md` (candidates with sufficient evidence). When a BOS entry is numbered (e.g., BOS-001), it's a formally registered Blue Ocean candidate.

**Not to be confused with:** Blue Ocean Strategy (the framework by Kim & Mauborgne), which is referenced in the Research Library.

**Where you'll see it:** 6_External_Intelligence/5_Blue_Ocean_Scanning.

---

### Buffer
One of the four components in the Achievability % formula. Measures how much slack, contingency time, and recovery capacity exists in the current plan. Low buffer = high fragility. Score of 0–100.

**Where you'll see it:** Achievability % formula; OKR reviews.

---

## C

### Clarity Call
A structured one-on-one conversation between [User] and a prospective [Your Organization] community member. The Clarity Call is the primary conversion mechanism — it qualifies the prospect, surfaces the problem they're solving, and determines whether [Your Organization] is the right fit. Not a "sales call" in the traditional sense; it's a diagnostic conversation that naturally leads to enrollment when there's genuine fit.

**Where you'll see it:** Funnel_Metrics_Tracker.md; Step Function Register; OKRs.

---

### CLG — Community-Led Growth
A growth strategy where the community itself becomes the primary acquisition and retention engine — members refer other members, community activity creates visible proof of value, and word-of-mouth from engaged members outperforms paid acquisition. Distinguished from product-led growth (PLG) in that the primary value driver is human connection and peer learning, not the product itself.

**Where you'll see it:** Research_Index.md (Entry 3); success case analyses.

---

### Companion Course
The structured curriculum component of the [Your Organization] offering. Teaches the FQOS framework, AI workflow integration, and practice-specific application skills. Designed as cohort-based (not self-paced) and delivered within the Skool community rather than as a standalone course. The community and course reinforce each other — community members implement what they learn; the course gives structure to the community experience.

**Where you'll see it:** OKRs; offering briefs; 4_Context_Files.

---

### Confidence Label
A tag attached to data entries in the EIS that indicates how reliable the source is. The hierarchy from most to least reliable is:
1. `[Directly observed — [User]]`
2. `[ATI estimate — publicly reported]`
3. `[ATI estimate — secondhand]`

Entries without a confidence label should be treated as unverified.

**Where you'll see it:** All 6_External_Intelligence files.

---

### Context Files
The `4_Context_Files` directory. Contains everything that defines who [User] is, what [Your Organization] is building, the current strategy, and the operational state of the business. Think of it as the "identity layer" of the toolkit — it answers "who are we and what are we doing?" Different from System Wisdom (which tracks how the dyad operates) and EIS (which tracks what the external world is saying).

**Where you'll see it:** Directory 4_Context_Files.

---

### Context Window
The amount of text an AI can "see" and work with at one time in a single conversation. Measured in tokens. When a conversation exceeds the context window, the AI can no longer reference the earlier parts of the conversation — which is why this toolkit uses persistent files instead of relying on conversation memory.

**Where you'll see it:** 1_Start_Here; prompting guides.

---

### CX — Context Level
A classification system for files in the AI Mastery Toolkit that indicates which layer of the system they belong to and how they should be loaded. Key levels:

| Label | What it means |
|---|---|
| CX0 | SuperContext — the master identity and strategy document loaded first |
| CX1 | Level 1 Foundation (personal and business foundation) |
| CX2 | Level 2 Strategy (OKRs, step functions, active programs) |
| CX3 | Level 3 Portfolio |
| CX4 | Level 4 Offering Briefs |
| CX5 | Level 5 Content Strategy |
| CX6 | Level 6 Asset Production |
| CX-EIS | External Intelligence System (peer level to CX0–CX6; external calibration) |

**Where you'll see it:** File headers throughout 4_Context_Files and 6_External_Intelligence.

---

## D

### Daily Brief
The structured session-opening summary that orients [User] and the AI at the start of each working session. Pulls from key system files including the Priority Intelligence Engine, OKRs, Current Priorities (SC_Layer 4), and the EIS External Signal block. Ensures every session starts with aligned context rather than re-establishing state from scratch.

**Where you'll see it:** 5_System_Wisdom/9_Daily_Debriefs; session triggers.

---

### Dyad / Dyadic
The [User] + AI working pair. The system treats the human-AI collaboration as a single unit with shared behavioral patterns, not as a human using a tool. "Dyadic" behaviors are patterns that belong to the pair — how they communicate, handle errors, course-correct, and develop over time.

**Where you'll see it:** 5_System_Wisdom; 3_Dyadic_Dynamic_Taxonomy.

---

## E

### EIS — External Intelligence System
The directory (`6_External_Intelligence`) that captures what the external world is telling the system. Seven plus one subdirectories cover market intelligence, competitive intelligence, success models, research, blue ocean scanning, timing externalities, AI training intelligence, and a new intake queue. The EIS answers the question: "Is the current plan calibrated to external reality?"

**Where you'll see it:** 6_External_Intelligence; daily brief; Achievability % formula.

---

### EOS — Entrepreneurial Operating System
A business management framework developed by Gino Wickman (book: *Traction*, 2011). Widely used by small businesses to align teams, clarify vision, and create accountability. Relevant to [Your Organization] as a comparison framework — EOS operates at the team/organizational level; FQOS is built for the solo practitioner with an AI partner. EOS has a known licensing/implementer network model that is referenced as a structural analog for [Your Organization]'s potential BOS-001 licensing opportunity.

**Where you'll see it:** Framework_Comparison_Log.md; Blue_Ocean_Register BOS-001.

---

### External Conditions Score
One of the four components in the Achievability % formula. Reflects the macro environment — market signals, competitive landscape, platform conditions, and timing windows. Informed by the EIS. Score of 0–100. Before EIS is populated with real data, this is an ATI estimate.

**Where you'll see it:** Achievability % formula; Macro_Conditions_Log.md; EIS Governing Scope.

---

## F

### [Your Organization]
The name of [User]'s business / brand / community. Used throughout the system as a shorthand for the full business entity — the community, the FQOS framework, the offering, and the mission. Not always expanded as an acronym in the files — it functions as the business name rather than a spelled-out term.

**Where you'll see it:** Everywhere.

---

### [Your Organization] Outreach
The first cohort of [Your Organization] community members. 30 practitioners who join as founding members and receive founding-level access, pricing, and direct involvement in shaping the community. The [Your Organization] Outreach is not merely a revenue milestone — it is a culture-seeding event. Who joins the [Your Organization] Outreach determines the community norms and word-of-mouth trajectory for all subsequent growth.

**Where you'll see it:** OKRs; Window_of_Opportunity_Log WIN-002; Step Function Register.

---

### FQOS — [Your Organization] Quantum Operating System
The proprietary framework that powers [Your Organization]. The FQOS is the complete AI practice operating system for 3C practitioners — it includes the Priority Intelligence Engine (PIE), the External Intelligence System (EIS), session architecture (daily brief, session triggers), the Achievability % formula, and all supporting components. The "OS" framing is intentional: FQOS is not a course or a set of tips; it's the operating layer for running a practitioner business with AI as a core partner.

**Where you'll see it:** Competitor_Map.md; Positioning_Gap_Analysis.md; Blue_Ocean_Register BOS-001.

---

## G

### GTD — Getting Things Done
A personal productivity system developed by David Allen (book: *Getting Things Done*, 2001). Known for its capture → clarify → organize → reflect → engage workflow. Referenced in [Your Organization] as a comparison framework: GTD helps you manage tasks you already know about; PIE surfaces *what matters most* from across the full context of a practitioner's situation. GTD tells you how to process your inbox; PIE tells you what deserves to be in your inbox in the first place.

**Where you'll see it:** Framework_Comparison_Log.md.

---

## H

### How-To Guides
The `2_How_To_Guides` directory. Contains all structured educational guides (Prompts, Commands, Skills, Projects & RAG, Agents, Connectors, Frameworks, Specifications, Workflows, Automations, Orchestration, Artifacts). The curriculum layer of the toolkit.

**Where you'll see it:** Directory 2_How_To_Guides; 2_Toolkit_Master_Index_v4.md.

---

## I

### ICP — Ideal Customer Profile
A detailed description of the specific type of person or business that is the best possible fit for an offer. [Your Organization]'s ICP is the 3C practitioner — specifically coaches, consultants, and course creators who are building or scaling a solo or small-team practice and want to use AI as an integrated operating layer, not just a writing tool.

**Where you'll see it:** Competitor_Map.md; Positioning_Gap_Analysis.md; 4_Context_Files.

---

### Intake Intelligence
The `8_Intake_Intelligence` subdirectory within the EIS. A processing queue for raw intelligence before it is routed to the correct EIS subdirectory. Raw materials (transcripts, success stories, competitive observations) drop into 8_Intake_Intelligence first; the AI evaluates and routes them to the appropriate destination during the next session. This prevents raw, unprocessed material from contaminating the curated EIS files.

**Where you'll see it:** 6_External_Intelligence/8_Intake_Intelligence.

---

## J

### JTBD — Jobs To Be Done
A framework for understanding customer motivation — specifically, what "job" a customer is "hiring" a product or service to do. Popularized by Clayton Christensen. Useful in [Your Organization] for understanding why practitioners seek out AI education: the job is not "learn AI tools" — it is "transform my practice to operate faster, charge more, and deliver better outcomes with less manual effort."

**Where you'll see it:** Framework_Comparison_Log.md; positioning analysis.

---

## K

### KR — Key Result
A specific, measurable outcome that indicates progress toward an Objective in the OKR framework. Key Results are not tasks (what you do) — they are outcomes (what gets better as a result of doing things). Example: "[Your Organization] Outreach enrollment at 100%" is a Key Result. "Write the Clarity Call script" is a task that contributes to that Key Result.

**Where you'll see it:** OKR Set (4_Context_Files/Level_2_Strategy); daily brief.

---

## L

### LLM — Large Language Model
The underlying technology that powers AI assistants like Claude. An LLM is trained on vast amounts of text and learns to predict what words should come next — enabling it to write, reason, summarize, code, and converse. It is a pattern prediction system, not a database or a search engine. Understanding what LLMs are (and are not) is foundational to using them effectively.

**Where you'll see it:** 1_Start_Here_v4.md; prompting guides.

---

## M

### MCP — Model Context Protocol
A protocol developed by Anthropic that allows AI assistants to connect to external services and tools (Slack, Google Drive, GitHub, custom APIs, etc.). Think of MCP as a standardized "plug" that lets AI use external tools during a conversation. Without MCP connections, an AI can only work with what's in the conversation. With MCP connections, it can take actions in external systems.

**Where you'll see it:** 2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md.

---

## O

### OKR — Objectives and Key Results
A goal-setting framework used widely in business and product development. An Objective is a qualitative statement of direction ("Build a thriving practitioner community"). Key Results are specific, measurable outcomes that indicate whether the Objective was achieved. [Your Organization] uses OKRs as the primary strategic tracking tool — the OKR Set in 4_Context_Files is the authoritative source for current priorities.

**Where you'll see it:** 4_Context_Files/Level_2_Strategy; daily brief; Priority Intelligence Engine.

---

## P

### PIE — Priority Intelligence Engine
The analytical layer of the FQOS framework that synthesizes all relevant system intelligence to surface what matters most *right now* — not what seems urgent, not what's on a to-do list, but what actually moves the critical path forward given current context, constraints, and external conditions. The PIE is what prevents the practitioner from being busy without being effective.

The PIE operates in multiple layers:
- **Layer 1:** Internal context (OKRs, Priority Stack, capacity)
- **Layer 2:** External signals (EIS — market signals, timing windows, competitive intelligence)
- **Layer 3:** Behavioral patterns (System Wisdom — what's worked, what hasn't)

**Where you'll see it:** Daily brief; session architecture; EIS Governing Scope.

---

## R

### RAG — Retrieval Augmented Generation
A technique for giving an AI access to information beyond its training data by "retrieving" relevant documents and inserting them into the conversation. In this toolkit, loading context files at the start of a session is a form of RAG — the AI retrieves the relevant context and generates responses informed by that specific, up-to-date information rather than relying on generic training knowledge alone.

**Where you'll see it:** 2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md.

---

### Resource Score
One of the four components in the Achievability % formula. Reflects the availability of the core resources needed to execute — primarily [User]'s time and energy, but also financial resources, platform infrastructure, and team capacity. Score of 0–100.

**Where you'll see it:** Achievability % formula; OKR reviews.

---

## S

### SF — Step Function (also: Step Function Register)
A move that changes the *trajectory* of the business, not just the *position*. A step function is not another increment of effort — it's a structural leap that opens a new level of possibility. Analogy: climbing one more rung on a ladder is position change; moving to a taller ladder is a step function.

The Step Function Register (in 4_Context_Files/Level_2_Strategy) tracks all identified and completed step functions. Completing a step function is the highest-leverage activity in any given period and is weighted accordingly in the Priority Intelligence Engine.

**Where you'll see it:** Step_Function_Register_CX2.md; Window_of_Opportunity_Log.md; OKR reviews; daily brief.

---

### Session Architecture
The structured format that governs how a working session with AI is opened, conducted, and closed. [Your Organization]'s session architecture ensures that every session starts with aligned context (daily brief + PIE output), follows a consistent working pattern, and closes with a harvest of insights and a next-session handoff. Session architecture is one of the core components of the FQOS framework.

**Where you'll see it:** 5_System_Wisdom; daily brief triggers; session guides.

---

### Skool
The community platform [Your Organization] uses to host its membership community. Skool combines community features (discussion, events) with course hosting in a single platform. Selected by [Your Organization] over alternatives (Circle, Kajabi, Facebook Groups) for its practitioner-community focus, the Skool Games discovery mechanism, and its alignment with Alex Hormozi's community-building model — a validated [Your Organization] success case analog.

**Where you'll see it:** Platform_Change_Tracker.md; Window_of_Opportunity_Log WIN-003; 4_Context_Files Platform Infrastructure.

---

### SuperContext
The master context document (`4_Context_Files/SuperContext_CX0.md`). The single most important file in the entire toolkit — it defines who [User] is, what [Your Organization] is building, the current state of the business, and the operating principles of the system. Loaded first at every session. Think of it as the AI's briefing document that ensures it is operating with full identity and strategic awareness before any work begins.

**Where you'll see it:** 4_Context_Files; session loading protocol.

---

### System Wisdom
The `5_System_Wisdom` directory. Tracks how the [User] + AI dyad operates — behavioral patterns, what works, what doesn't, how errors are handled, how the working relationship has developed over time. Distinct from Context Files (which track identity and strategy) and EIS (which tracks external calibration). System Wisdom is the "behavioral memory" layer.

**Where you'll see it:** Directory 5_System_Wisdom.

---

## T

### 3C — Coaches, Consultants, Course Creators
The primary ICP (Ideal Customer Profile) for [Your Organization]. These three practitioner types share a common challenge: they sell expertise, trade time for money, and hit revenue ceilings without a scalable delivery model. AI integration, when properly systematized, provides the leverage that breaks through that ceiling. Sometimes written as "3C practitioners."

**Where you'll see it:** Everywhere in [Your Organization] strategy and EIS files.

---

### Token
The basic unit of text that an AI processes. Roughly 4 characters, or about ¾ of a word. "Hello world" = 2 tokens. "The Priority Intelligence Engine synthesizes context" = ~7 tokens. AI models have token limits on context windows — this determines how much text the AI can work with at once. Large files and long conversations consume more tokens and can exhaust the context window.

**Where you'll see it:** 1_Start_Here_v4.md; prompting guides.

---

### Trajectory Score
The most heavily weighted component in the Achievability % formula (50% weight). Reflects the current direction and momentum of the work: is the business on track, ahead, or behind relative to where it needs to be? A high trajectory score means the current path leads to the goal. A low score means course correction is needed regardless of how hard the effort.

**Where you'll see it:** Achievability % formula; OKR reviews.

---

## W

### WIN — Window of Opportunity
A numbered entry in the `Window_of_Opportunity_Log.md` representing a time-bounded opportunity where acting now is materially more valuable than acting later. WIN-001 through WIN-004 are the four currently active windows. When a window's expiry condition is met (a date, an event, or a market shift), it moves from Active to Expired.

**Where you'll see it:** 6_External_Intelligence/6_Timing_Externalities/Window_of_Opportunity_Log.md.

---

## Quick Reference: Acronym Index

| Acronym | Full Term | Location |
|---|---|---|
| 3C | Coaches, Consultants, Course Creators | ICP throughout |
| AI | Artificial Intelligence | Everywhere |
| ATI | AI Training Intelligence | EIS confidence labels |
| BOS | Blue Ocean Scanning | 6_EIS/5_Blue_Ocean_Scanning |
| CLG | Community-Led Growth | Research_Index.md |
| CX | Context Level (CX0–CX6, CX-EIS) | File headers |
| EIS | External Intelligence System | 6_External_Intelligence |
| EOS | Entrepreneurial Operating System | Framework_Comparison_Log.md |
| [Your Organization] | Business/brand name | Everywhere |
| FQOS | [Your Organization] Quantum Operating System | Positioning; competitive analysis |
| GTD | Getting Things Done | Framework_Comparison_Log.md |
| ICP | Ideal Customer Profile | Competitive and market files |
| JTBD | Jobs To Be Done | Framework_Comparison_Log.md |
| KR | Key Result | OKR Set; daily brief |
| LLM | Large Language Model | Start_Here; prompting guides |
| MCP | Model Context Protocol | Connectors Guide |
| OKR | Objectives and Key Results | Level_2_Strategy |
| PIE | Priority Intelligence Engine | Daily brief; EIS Scope |
| RAG | Retrieval Augmented Generation | Projects & RAG Guide |
| SF | Step Function | Step_Function_Register_CX2.md |
| WIN | Window of Opportunity | Window_of_Opportunity_Log.md |

---

*To suggest a term that's missing, add it to the feedback-queue in 4_Context_Files.*
