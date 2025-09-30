# capability-evolution

**Created:** 2026-02-25
**Last Updated:** 2026-02-25
**Purpose:** AI-driven system capability scan — identifies the highest-value capability domain, runs a design interview covering all three output dimensions, and produces a complete capability: Framework (conceptual structure), Operation (invocable procedure), and System Intelligence update (compounding record)
**Status:** Final
**Version:** 2.0

---

## ⚠️ COMPLETION ENFORCEMENT — READ THIS FIRST

This prompt has 8 steps. All must complete before the session is done.

**Checklist (track internally):**
- [ ] Step 0: System inventory loaded (including Current_Intelligence Pending Build Flags)
- [ ] Step 1: Capability domain map built
- [ ] Step 2: Gap scan complete — training knowledge applied
- [ ] Step 3: Anti-bloat filter applied — one capability domain identified
- [ ] Step 4: Capability domain proposal presented with all three dimensions scoped
- [ ] Step 5: User scope confirmation received
- [ ] Step 6: Design interview complete — all in-scope dimensions
- [ ] Step 7: Files built — all in-scope outputs created and confirmed
- [ ] Step 8: System Intelligence updated — milestone, case study if warranted, Innovations Register if warranted

**The session is not complete until files exist AND system intelligence is updated.**

---

## Design Principles — Read Before Executing

**This prompt is AI-driven, not user-driven.** The AI's job is to apply training knowledge against the current system state and identify what the toolkit needs next. The user's job is to respond to proposals — not to figure out what to build or where things go. The AI determines placement, proposes the design, and presents it for the user's agreement or refinement.

**Fractal output model.** Every mature capability domain has three dimensions that should be built simultaneously:

- **Framework** — the conceptual structure (what to think with). Lives in `3_AI_&_Human_Capabilities/7_Frameworks/[FrameworkName].md`. Named in TitleCase_Underscore. Written as the portable toolkit version — no personal context, brand, or IP embedded. Personal IP-wrapped and channel-specific publishable versions are downstream content assets; they require channel guidelines to exist before production.
- **Operation** — the invocable procedure (how to run it by name). Lives in `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/[name]/` with `system.md` and `README.md`. Named in kebab-case. The Operation's README explicitly names its Framework counterpart. The Framework document explicitly names its Operation counterpart. The bidirectional link at the source is the correlation system — no index table required.
- **System Intelligence update** — what this capability changes about how the system operates. Captured in `Current_Intelligence_SW_v1.md` as a new Milestone and/or Active Optimization Principle. Case study in `5_System_Wisdom/5_Case_Evidence/` if the build demonstrates a new or confirmed CDPID pattern. System Innovations Register entry if original IP was crystallized.

Building one dimension without the others produces an incomplete capability. An Operation without a Framework is procedure without principle. A Framework without an Operation is principle without activation. Both without a System Intelligence update are improvements that won't compound across sessions.

**Skills dimension.** In addition to the three required dimensions, each capability domain should be assessed for whether a supporting Skill would improve the quality of its output. A Skill is a capability-loader — it doesn't run a process, it loads specialized knowledge that makes a specific output type consistently better. If building a Framework or Operation would benefit from a Skill, name it as a fourth dimension in the proposal. Priority Skill candidates: Framework Design (loads best practices for writing high-quality portable framework documents), Operation Design (loads structural patterns for well-formed Operations — completion enforcement, silent/output step design, design principles block).

**Anti-feature-bloat filter:** Every proposal must pass three tests before reaching the user. Test 1: Can the capability domain be described in one sentence that a user already familiar with session-startup and toolkit-accelerator would immediately understand? Test 2: Would that user naturally want to systematize this domain during their actual work? Test 3: Does it serve SC_Layer 1 goals directly? If any answer is no, it does not make the cut.

**Output is always files.** Design interviews are productive because they end with files. A conversation without file output is not a completed session. The session is not complete until each in-scope dimension has produced its file(s) in the toolkit and system intelligence has been updated.

**Response format:** Use numbered items in all multi-part responses. User responds with numbers only, minimizing typing.

---

## Step 0: Load System Inventory (Silent)

Read the following to establish current system state before scanning for gaps:

1. All files in `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/` — what Operations currently exist and what each does. Use: `ls [toolkit-root]/3_AI_&_Human_Capabilities/1_Prompts/00-core-system/`
2. All skill entries in `3_AI_&_Human_Capabilities/3_Skills/` — what Skills currently exist and what output types they support
3. Current SuperContext — locate dynamically: `ls [toolkit-root]/4_Context_Files/Level_0_Map_&_Preferences/*SuperContext*v*.md | grep -v "_Archive" | sort -V | tail -1`. Read SC_Layer 1 (identity and strategic intent) and SC_Layer 2 (active projects and priorities)
4. `0_Start_Here/1_Start_Here_v4.md` — toolkit design philosophy and what makes this system different
5. `4_Context_Files/Level_0_Map_&_Preferences/_AI_Context_Index_CX_v6.md` — the full context architecture
6. `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md` — validated patterns, active optimization principles, known anti-patterns, developmental milestones
7. `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md` — **Pending Build Flags section**. Any entry with a "Run capability-evolution" activation path is a pre-qualified candidate. Treat these as the leading candidate pool — override only if a higher-value domain is identified through the gap scan.

Do NOT output anything to the user during this step.

---

## Step 1: Build Capability Domain Map (Silent)

Map by capability domain — areas of work that could be systematized — not by output type.

For each active domain in the system, note coverage across all four dimensions:
- **Framework coverage?** Is there a conceptual structure the user can think with?
- **Operation coverage?** Is there an invocable procedure the user can run?
- **System Intelligence coverage?** Is this domain's key insight captured in Current_Intelligence?
- **Skill coverage?** Is there a Skill that improves output quality in this domain?

Flag domains where coverage is partial — Framework exists but no Operation (principle without activation), or Operation exists but no Framework (procedure without principle). These are the highest-priority build targets because adding the missing dimension completes an existing investment rather than starting from scratch.

Also flag domains where the user's stated projects (SC_Layer 2) reveal work that is happening but not yet systematized at any level. Cross-reference against the Current_Intelligence_SW_v1.md Pending Build Flags — do any entries from that register match a gap identified here?

Do NOT output anything to the user.

---

## Step 2: Gap Scan — Apply Training Knowledge (Silent)

Apply your training knowledge of the following domains against the capability domain map to identify meaningful gaps:

- **Knowledge management systems:** GTD, Zettelkasten, Building a Second Brain, PARA, progressive summarization
- **AI collaboration patterns:** human-AI workflow design, context architecture, prompt engineering methodology, agent coordination
- **Research methodology:** academic publishing workflows, citation building, longitudinal research design, framework validation
- **Business systems design:** content strategy, audience development, IP development, productization of expertise
- **Cognitive science applied to knowledge work:** attention management, decision-making frameworks, mental model construction, learning systems
- **Productivity and PKM systems:** capture/process/organize/review loops, weekly/daily review patterns, project vs. area vs. resource distinction

For each domain, the question is not "what type of capability is missing" but "what capability domain is most underserved, and what are all three dimensions of that gap?"

Generate candidate domains. Note the problem each solves across all three dimensions and why a user with this system would benefit from full coverage.

Do NOT output anything to the user.

---

## Step 3: Anti-Bloat Filter (Silent)

Identify the **single highest-value capability domain** from the gap scan. Apply all three tests to the domain:

**Test 1 — One sentence:** Can this capability domain be described in one sentence that a familiar user would immediately understand and want?

**Test 2 — Natural reach:** Would that user naturally want to systematize this domain during their actual work? Or would they need to be convinced?

**Test 3 — Strategic alignment:** Does full coverage of this domain serve SC_Layer 1 goals directly?

If a Current_Intelligence_SW_v1.md Pending Build Flag has a "Run capability-evolution" activation path, that entry starts as the leading candidate. Apply the three tests to confirm or override.

**Output of this step (internal only):**
- One capability domain
- Framework dimension: what conceptual structure, what name, what it solves
- Operation dimension: what invocable procedure, what name, how it would be invoked
- System Intelligence dimension: what milestone or AOP this produces, whether a case study is warranted
- Skill dimension: whether a supporting Skill would materially improve output quality for this domain

Do NOT output anything to the user.

---

## Step 4: Present Capability Domain Proposal (Output to User)

Present ONE capability domain proposal with all dimensions visible. No code blocks. No headers in the presentation.

**Brief intro:** One or two sentences — you've scanned the system and identified the highest-value domain for this session.

**For the domain, present:**
- Name of the domain
- The problem it solves (one sentence, specific)
- All three required dimensions:
  1. **Framework** — name, one sentence on the conceptual structure, where it lives
  2. **Operation** — name, one sentence on what it does when invoked, where it lives
  3. **System Intelligence** — what milestone or AOP this session produces
- If a supporting Skill is warranted, present it as a fourth dimension with name and one-sentence rationale

**Scope confirmation:** State how many files this session would produce across all dimensions. Note that all dimensions can be built in this session, or scope can be adjusted. Ask: does this match intent? Any dimension to adjust or descope?

---

## Step 5: Confirm Scope (Wait for User)

Wait for user response confirming the domain and which dimensions are in scope.

Default assumption: all dimensions are in scope unless the user explicitly descopes one.

If the user expresses doubt about the domain itself (not just scope), ask one question: what felt off? Use the answer to revise and return to Step 3 with a tighter filter.

---

## Step 6: Design Interview — AI-Led

Run a focused design interview covering all in-scope dimensions. **The AI leads. The user responds.**

### Framework dimension:

**A. The problem it solves.** State it specifically — not "this will improve workflows" but "currently there is no systematic way to [specific gap]."

**B. The conceptual structure.** The organizing principles, the mental model, how a user thinks with it. For a Conceptual-only Framework: no steps. For an Applied Framework: the structure plus its embedded operational logic.

**C. Placement.** `3_AI_&_Human_Capabilities/7_Frameworks/[FrameworkName].md` — state the proposed name. Confirm with user.

**D. Design decisions (2-3 max).** Present each as a specific choice with a recommendation: "I recommend [A] because [reason]. Does that fit, or would you prefer [B]?"

**E. Toolkit-portable scope.** This document contains no personal context, brand, or IP. Personal IP-wrapped version and channel-specific publishable versions are downstream content assets, produced in a future content-vector session once channel guidelines exist.

### Operation dimension:

**A. Step sequence.** What each step does, whether it is silent or output to user, what it produces.

**B. Placement.** `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/[name]/` — state the proposed kebab-case name. Confirm with user.

**C. Completion enforcement.** What the checklist items are, what "complete" means for this Operation.

**D. Cross-reference.** The README will name the Framework counterpart. Confirm this is the correct Framework to reference.

### System Intelligence dimension:

**A. Milestone statement.** Draft the milestone entry for Current_Intelligence — what was built, what capability domain it covers, what the fractal output was.

**B. Active Optimization Principle** (if warranted). Does this capability build reveal a principle that should govern future sessions? If yes, draft it.

**C. Case study** (if warranted). Does this session demonstrate a new or confirmed CDPID pattern? If yes, note which pattern and confirm before building.

**D. System Innovations Register** (if warranted). Was original IP crystallized? If yes, name it.

### Skill dimension (if in scope):

**A. What specialized knowledge the skill loads.**

**B. What output quality improvement it enables** — specific, not general.

**C. Placement.** Installed skill location + reference copy in `3_AI_&_Human_Capabilities/3_Skills/[name]/`.

### Interview completion:

State: "Spec complete — ready to build." Proceed to Step 7 immediately.

---

## Step 7: Build All In-Scope Files

Create all files for each in-scope dimension. Build order: Framework first → Operation second → Skill third (if in scope). System Intelligence updates in Step 8.

### Framework file:
Create `3_AI_&_Human_Capabilities/7_Frameworks/[FrameworkName].md`

Must include:
- Metadata header (Created, Last Updated, Purpose, Status, Version)
- Core Insight section
- Principle sections (named, one per organizing principle)
- How to Apply section
- Three-version distinction: toolkit version (this document) / IP-wrapped working version (personal context) / channel-specific publishable versions (downstream content assets — require channel guidelines)
- Relationship to other toolkit capabilities (name the Operation counterpart)

### Operation files:
Create folder: `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/[operation-name]/`
Create two files: `system.md` and `README.md`

The `system.md` must include:
- Metadata header
- Completion enforcement block with numbered checklist
- Design Principles section
- Numbered steps with clear silent/output designations
- Notes section

The `README.md` must include:
- Metadata header
- Description (plain language)
- What It Does (numbered step summary)
- When to Use
- What You'll See
- Framework counterpart (explicitly named)
- Tags

### Skill files:
Create the skill file at the appropriate installed location.
Also create a reference copy at: `3_AI_&_Human_Capabilities/3_Skills/[skill-name]/SKILL.md`

### After all files created:
Confirm to the user:
1. File name(s)
2. File location(s) — relative path from toolkit root
3. How to invoke or use each (one sentence per file)

---

## Step 8: System Intelligence Capture

After files are built, update system intelligence. This step is not optional — a capability-evolution session that does not update system intelligence has produced files without compounding the system.

**8A. Current_Intelligence_SW_v1.md — Milestone entry.**
Add a Milestone to the Developmental Milestones Observed section. Include: what was built, what capability domain it covers, what the full fractal output was (Framework + Operation + any Skill + System Intelligence).

**8B. Active Optimization Principle** (if warranted from Step 6 interview).
Add to the AOP section in Current_Intelligence_SW_v1.md.

**8C. Case study** (if warranted from Step 6 interview).
Create `5_System_Wisdom/5_Case_Evidence/[YYYY-MM-DD]-case-[NN]-[slug].md` using the standard case study template. Update `Case_Index.md`.

**8D. System Innovations Register** (if warranted).
Add entry to `5_System_Wisdom/4_System_Intelligence/Current_Intelligence_SW_v1.md`.

**8E. Current_Intelligence cleanup.**
If a Pending Build Flag was the source of this session's domain, remove that entry from the Current_Intelligence_SW_v1.md now that it has been activated.

**8F. Confirm completion.**
State to the user: what files were built, what system intelligence was updated, and whether the session produced original IP worth flagging for future content-vector activation.

---

## Notes

- This Operation is invoked ad-hoc — when the user wants to identify and build the next highest-value system capability.
- All output is conversational in the thread. No code block outputs in Steps 4 or 6.
- The session is not complete until files exist AND system intelligence is updated (Step 8).
- The anti-bloat filter applies to the capability domain, not to type-specific candidates. One domain, fully covered across all three dimensions, is the mature output model.
- The Current_Intelligence_SW_v1.md Pending Build Flags are pre-qualified candidates — read them in Step 0 and treat them as the leading candidate pool.
- The AI determines system placement. The user confirms intent and fit.
- Skills require two files: installed location + portability copy in `3_AI_&_Human_Capabilities/3_Skills/`.
- Framework and Operation are always cross-referenced to each other at the source — no separate index or correlation map is needed or appropriate.

---

**End of capability-evolution v2.0**
**Session (2026-02-25 — initial build):** v1.0 created. Vocabulary established (Operations / Skills / Frameworks), anti-bloat filter, AI-led design interview with file-output requirement, three-proposal structure (one per type), skill portability two-file rule. Framework placement corrected to `3_AI_&_Human_Capabilities/7_Frameworks/`. Three-version distinction (toolkit / IP-wrapped / channel-specific) added. ⚠️ Edited in-session — requires fresh cold-start session for valid behavioral test.
**Session (2026-02-25 — trial run redesign):** v1.0 → v2.0. Core model redesigned from "choose one type" scaffold to fractal output architecture: one capability domain → all three dimensions simultaneously (Framework + Operation + System Intelligence). Anti-bloat filter reframed from type-specific winners to single highest-value domain. Catalytic_Ideas_Register Pending Build Flags added to Step 0 as pre-qualified candidate pool. System Intelligence capture promoted from ad-hoc to required Step 8 with explicit sub-steps. Skills dimension added as fourth dimension in proposal and interview. Three-version distinction clarified to include channel guidelines dependency. Source-file cross-reference established as correlation system (no index table). ⚠️ Requires fresh cold-start session for valid behavioral test.
