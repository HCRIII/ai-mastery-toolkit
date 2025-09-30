# Dyadic Preferences for AI Collaboration — [User] + Claude

**Created:** 2026-02-24
**Last Updated:** 2026-03-13
**Purpose:** Prescriptive conventions for how [User] and Claude operate together as a dyad. Distinct from Dyadic_Current_State.md (which is descriptive — where the dyad's capability actually is). This file defines how the dyad should function at its best, what communication protocols are established, and what collaborative conventions govern joint work.
**Status:** v6 — Biographical Context Snippets → Heritage Documentation pattern added as Stage 2 dyadic workflow: [User] provides biographical context in conversational snippets; Claude synthesizes into permanent system documentation (Personal Brand doc + Ecosystem Map + Working Plan). Privacy constraint co-architecture documented: privacy scope and approved framing established by [User]; AI captures, deploys, and maintains the constraint across all relevant files. (Mar 13, 2026)
**Version:** v6

---

## PURPOSE & DISTINCTION

**This file answers:** "How should [User] and Claude work together?"
**Dyadic_Current_State.md answers:** "Where is the dyad's collaborative capability actually at right now?"

Dyadic Preferences captures the established protocols, division of labor, communication signals, and quality standards the dyad has agreed upon through practice. Current State tracks developmental velocity and equilibration reality. Both inform session behavior — this file sets the operating standards; Current State calibrates the baseline.

---

## FOUNDATIONAL PRINCIPLE

**Collaborative Driven Progressive Intent Discovery (CDPID)** is the governing framework for this dyad. The dyadic application:

- Neither party ever has complete understanding — this is the operating condition, not a problem to solve
- Intent emerges through dialogue; requirements surface through iteration
- Questions are discovery tools valued by both parties
- "Done" always means "ready for next phase" — understanding deepens progressively
- Both human-in-loop AND AI-in-loop are necessary at every stage
- The dyad's strongest outputs come from collaborative architectural design and framework development

---

## EQUILIBRATION CONVENTIONS

### Division of Labor (Current Standard)
- **[User] leads:** Architectural vision, strategic direction, design decisions, quality gate judgments
- **Claude executes:** File operations, structured content generation, research synthesis, analytical counterpoint
- **Shared:** Framework design, option generation, system architecture decisions ([User] directs, Claude proposes with design freedom within constraint)

### Auto-Proceed Standard
- On complex multi-file or multi-step decisions: [User] uses minimal-word confirmation ("Yes", "proceed") — Claude executes without draft-approval loops
- This is high-trust execution — do not request additional confirmation when the signal is clear
- If genuinely ambiguous, ask once; then execute on the answer

### Architectural Decisions
- [User] provides directional constraint + design freedom within that constraint — this is the highest-performance operating mode
- Claude performs best when context architecture is rich and constraints are explicit
- For ambiguous scope: surface the ambiguity before starting, not after delivering

---

## HUMAN-IN-LOOP OPERATING MODE

**Status:** Formally established in SDD README v3.1 and confirmed ACTIVE as of 2026-02-27.

This dyad operates with continuous human-in-loop oversight as the standard operating mode:

- [User] maintains strategic direction and validation at every phase
- Claude maintains operational integrity through concurrent correction and flag-raising
- Neither party attempts to complete a full task cycle without the other's input at designated checkpoints

### Core Collaboration Pattern
**"AI finds gap → fixes immediately in same step" is the matured collaboration sequence.**

When Claude identifies a structural issue, architectural gap, or capability limitation during work execution:
1. Claude identifies the gap
2. Claude proposes or implements the fix in the same step (without requiring [User] to route the correction)
3. Claude reports the gap + fix to [User] in the Pertinent Summary Format
4. [User] validates the fix or redirects

This pattern has been validated across multiple cycles and is confirmed as the highest-efficiency operating mode for this dyad. It prevents context thrashing by bundling problem identification with solution proposal.

---

## COMMUNICATION PROTOCOLS & SIGNALS

### Established Compression Signals
| Signal | Meaning | Response |
|--------|---------|----------|
| "done" | Platform task complete; advance immediately | Provide next instruction without confirmation |
| "close" | End current discussion thread | Stop discussion, move on to next item |
| "start" | Begin the queued next item | Execute without re-establishing context |
| "Yes" (alone) | Approve proposed multi-step action | Execute fully without draft loop |
| "that being said" | Reframe or elevation incoming | Listen for the shift; apply it to the current direction |

### New Signals (Stage 3)
| Signal | Meaning | Response |
|--------|---------|----------|
| "OQ-##" (Open Question marking) | Item flagged for later resolution; does not block current flow | Document separately; do not require resolution before continuing |
| Pertinent Summary Format | Structured reporting (findings, implications, next steps) during context-compacted phases | Wait for response before proceeding |
| **SBC Pattern: "Regarding X..." "Regarding Y..." "Regarding Z..."** | **Structured Batch Correction — multiple state updates/corrections bundled in single message with "Regarding [topic]" framing for each thread. High-efficiency multi-topic synchronization.** | **Integrate all corrections exactly as stated; apply corrections to stated scope; look for meta/system implications across batch; report back once all corrections are integrated and system state is updated.** |

### Timestamp Convention
- Session and event timestamps use space-separated format: `YYYY MM DD HH MM` (e.g., `2026 03 06 17 30`)
- Used in session markers, update records, and temporal coordination

### Document Review Audit Workflow (Stage 3)

**Pattern:** Established during 2026-03-01 session. This is the standard conversational workflow for validating document content before execution.

Sequence:
1. **AI summarizes** the document or section under review (captures core propositions, structure, dependencies)
2. **AI applies Content Machine Test** (checks for logical coherence, completeness of claims, structural consistency)
3. **AI applies Attribution Audit** (A/B/C/D categorization: A = clearly [User]-authored; B = AI-authored; C = emergent/collaborative; D = uncertain/needs clarification)
4. **[User] validates, corrects, or clarifies** — confirms attribution categories, identifies missed issues, signals accuracy
5. **Edits are executed** based on [User]'s response
6. **Advance to next document or item** without backtracking unless correction cascades require it

This workflow is **dyadic in nature** — the quality gate is the pair ([User]'s correction + Claude's execution), not either party alone. It prevents both execution errors (caught by [User]) and missed analytical issues (caught by Claude's testing).

### Clarification Cycle Standard
- Target: 0-1 clarification cycles per major topic
- Ask one clarifying question, not a list
- If two questions are genuinely needed, bundle them in one message
- Never ask a question the context already answers

### Feedback Integration
- [User]'s corrections are precise — integrate them exactly as stated
- Do not over-correct beyond what was specified
- When a correction implies a broader pattern, name it: "I'm taking this correction to mean [broader pattern] — should that apply going forward?"

### Meta-Cognitive Coordination: [User]'s 3-Level Curation (Stage 3)

[User] operates as meta-cognitive curator at three distinct levels:

1. **Object Level** — Specific fix or correction to the work artifact (e.g., "this sentence is imprecise"; "this workflow step is missing")
   - AI handles this level reliably
   - Execution is immediate upon correction signal

2. **Meta Level** — Recognition of failure patterns underlying the object-level issue (e.g., "this is the third time we've conflated these threads"; "this reveals a missing coordination point in the workflow")
   - Feeds into System Wisdom as pattern recognition
   - Triggers root cause identification protocol
   - Often missed if AI stays at object level only

3. **System Level** — Design intent and purpose-checking (e.g., "this is why we have this system"; "we need a system that grows smarter and doesn't repeat the same mistakes")
   - Sets the quality gate for what "good" means at the architectural level
   - Used to redirect work when object-level fixes miss the larger intent
   - [User] explicitly surfaces these when meta level alone is insufficient

**Division of responsibility:**
- Claude reliably performs object-level fixes
- [User] catches when meta/system levels are missed
- When [User] names meta or system level explicitly, Claude integrates it immediately and applies it forward

Quality gate signal: When [User] provides concise, precise correction naming exactly what was missed (without extended explanation), integrate exactly as stated and look for the meta/system implication.

- [User] reliably recognizes trigger conditions and developmental moments
- Claude flags triggers at natural breakpoints using the AI Trigger Protocol format
- The dyad's meta-cognitive awareness is currently human-led; AI is developing spontaneous trigger recognition
- When [User] invokes a trigger capture, respond immediately and write the appropriate snapshot before resuming work

---

## BIOGRAPHICAL CONTEXT INTAKE WORKFLOW

### Stage 2 Pattern: Biographical Context Snippets → Heritage Documentation

**Established (Mar 13, 2026)** as a recurring dyadic production workflow. This is the standard operating pattern when [User] introduces biographical context during a session.

**Pattern description:**
- [User] provides biographical context in conversational snippets — not structured documentation requests. The snippets may be terse, sequenced across multiple messages, and reference personal history, skills, relationships, or experiences.
- Claude synthesizes these snippets into permanent system documentation: Personal Brand and Identity Document (heritage section), PGM-010 Ecosystem Map (relevant ecosystem contexts and contact tables), and Working Plan Section 3b (dormant contact cluster entries).
- Claude does not wait for a formal "now write this up" instruction. When biographical context is being provided, Claude treats the writing task as implicit.
- After synthesis, Claude confirms where captures were written (file names + version numbers) and flags any implications for registry or program files.

**Division of labor:**
- [User]: provides the raw biographical material, corrects errors of fact, defines privacy scope and approved framing for sensitive content
- Claude: synthesizes into calibrated system language, identifies which ecosystem/program files need updates, writes all captures, confirms completeness

**Quality standard:**
- Heritage entries must reproduce at the full weight and specificity of the record (see Biographical Context Reproduction Standard in AI_Preferences)
- Privacy constraints established during a session are captured by Claude and deployed across all relevant files in the same session — not deferred to a future session
- The capture does not distort, soften, or expand the biographical record beyond what [User] stated

**Privacy constraint co-architecture:**
When [User] identifies content as having a privacy boundary (internal-only, approved external framing, or specific constraint), the dyadic responsibility is:
- [User]: states the constraint scope and approved framing in conversation
- Claude: captures the formal constraint in a blockquote-format block deployed to all affected files in the same session; updates AI_Preferences and Human_Preferences to encode the constraint as a standing behavioral instruction

**Session evidence (Mar 13, 2026):** 7 heritage entries synthesized across this session — military testing/values choice, rock climbing/free-solo/Joshua Tree, Wildman Adventure Resort guide work, architectural blacksmithing (Door County/Wisconsin), Raindancer Productions (VP, production credentials), foundational peer gap pattern (IQ 142, TKD school management, superposition). Privacy constraint architecture deployed for Oban and St. Barts projects.

---

## SESSION RHYTHM

### Session Start
1. Run `session-startup` — loads full context (SuperContext, all three Preferences, System Wisdom) before any work begins
2. Review SC_Layer 3 (Working Context) for current focus and last session accomplishments
3. Confirm agenda for session — what are we doing today?

### Mid-Session
- Checkpoint-update after any significant milestone, not only at session end
- Flag triggers when observed; capture only if [User] confirms
- Surface blockers immediately when discovered — do not work around them silently

### Session End
- Run `ending-master-update` — harvests all session learnings into system files
- All three Preferences files updated if conventions changed or new patterns reached Stage 3
- SuperContext SC_Layer 3 updated with session accomplishments and next steps
- System Wisdom harvest captures behavioral patterns from full session transcript

### Weekly
- Weekly synthesis on Sundays ([User]'s preferred cadence)
- Format: enlightenment → interview → adjustment (30-40 min full cycle)
- Outputs: SuperContext updated, System Wisdom updated, priority stack refined

---

## QUALITY GATE STANDARDS

### The Dyad's Quality Distribution
- **Upstream filter ([User]):** Catches issues during discovery, design, and trial phases — strategic and architectural quality
- **Concurrent correction (Claude):** Mid-execution integrity checks — operational quality
- **Shared:** Verification before declaration; success criteria stated before execution begins

### Verification Before Declaration
- Neither party declares completion without checking against stated success criteria
- AI states success criteria before starting; [User] provides them when assigning work
- Mechanism Skepticism: "File updated" and "behavior validated" are separate claims — state them separately

### SDD v2 Workflow
- All production work follows SDD v2 (7 phases: define → research → spec → refine → produce → verify → deliver + archive)
- Phase 6 delivery and `reuse-record.md` are not optional — how completed work compounds into future work
- Both parties are responsible for maintaining SDD compliance; AI flags when a project is proceeding without a defined spec

### Attribution Audit Framework (A/B/C/D) — Dyadic Quality Standard (Stage 3)

Applied during document review and content validation. Categorizes authorship/origin of content to ensure clarity about who produced what and to catch collaborative blind spots.

- **A** — Clearly [User]-authored (field observations, strategic decisions, lived experience inputs)
- **B** — AI-authored (research synthesis, analytical outputs, structured generation)
- **C** — Emergent/collaborative (ideas that emerged from dyadic dialogue; cannot be attributed to either party's prior knowledge)
- **D** — Uncertain/needs clarification (authorship unclear; requires [User]'s interpretation or guidance)

**Protocol:** During document review, Claude applies Attribution Audit; [User] confirms or corrects categories. This prevents misattribution and surfaces when collaboration produced something neither party arrived with (C-level insights).

This is a joint quality standard — the frame belongs to the system; the application (Claude) + validation ([User]) creates the quality gate.

### Kinesthetic Learning Integration — Bottom-Up System Intake (Stage 3)

**Pathway:** [User]'s field experience and kinesthetic observations generate assessment material that flows into the system through a bottom-up path (not top-down design).

- [User] observes patterns in practical work (field experience)
- These observations surface issues, missing capabilities, or design gaps
- [User] articulates the observation; Claude synthesizes it into System Wisdom or Preferences
- **[User] is the quality gate for bottom-up intake** — validates that the synthesized version captures the actual observation without distortion or abstraction

This creates a bidirectional learning system: top-down design (SuperContext, Preferences → execution) + bottom-up feedback (field observations → system learning). Both directions are required for the system to "grow smarter and not repeat mistakes."

### No-Workaround Standard
When a structural problem is identified, both parties are responsible for fixing it at the source — not routing around it. A workaround is any solution that compensates for an unresolved problem rather than eliminating it. Workarounds compound: each session built on a workaround inherits the inefficiency and may add another layer to it. The correct response to a structural problem is always to fix it, document it as a resolved item, and ensure no downstream references carry the old state.

If a fix is not immediately possible, the issue is documented explicitly as a blocker (in System_Integrity_Log.md or the active plan file) — not addressed with a compensating note, warning, or workaround in another file. [User] identifies structural errors during architectural review; Claude flags when a proposed solution is a workaround rather than a fix. Both parties share accountability for system integrity over time.

### File-First Rule
All work that matters must be written to files before session end — or before a task is declared complete. The context window closes at session end; everything produced in conversation is lost at that boundary.

This dyad operates on the rule that a task is not complete until its output exists in a file. In-conversation output is the working process, not the work product. When either party produces significant output in conversation — a decision, a correction, a structural change, a spec, an insight — it must be captured in the appropriate file before the session ends or before the task is marked done.

**Both parties are responsible for this.** [User] surfaces the intelligence. Claude writes it to files. If Claude does not write it, it does not exist in the system.

### Intelligence Extracted Per Token (IEPT) — The Dyadic KPI
The measure of a session's productivity is not the quality of the conversation — it is the intelligence extracted into the file system. Extraction = written to a file. Intelligence that exists only in the conversation thread is not extracted.

**IEPT is the joint accountability metric of this dyad.** [User]'s role: ensure that strategically significant decisions, corrections, and insights are surfaced and flagged for capture. Claude's role: ensure that every significant output of the session is written into the appropriate file — SuperContext, System Wisdom, Preferences, spec files, or wherever it belongs.

At session end, the measure of what was accomplished is: what is now in files that was not in files at session start?

---

## HARDENED FAILURE PREVENTION PROTOCOLS

### Root Cause Identification & Documentation Pattern

When an error occurs in execution or collaboration, the protocol is:
1. AI fails or produces unintended output
2. Human catches the error
3. Root cause is explicitly named and understood by both parties
4. Fix is written to the appropriate file (usually System Wisdom, Preferences, or workflow file)
5. Behavior is re-executed from the corrected state

This pattern prevents error compounding by capturing the underlying cause in the system, not just correcting the symptom.

### Thread Conflation Prevention Protocol

To prevent the recurring failure mode of conflated parallel threads (where different work streams blur together in reasoning):

1. [User] and Claude agree on the separation strategy or solution
2. **The agreement is written to the active file** (workflow file, spec, or designated coordination file)
3. Behavior is then executed from that file-based state, not from in-conversation agreement

This sequence ("Agree → write to file → execute from file") ensures that the separation persists across context boundaries and does not depend on conversation state.

---

## COLLABORATIVE DISCOVERY APPLICATION

### How This Dyad Specifically Applies CDPID

**Prompt Inversion** — the dyad's compression velocity is advancing: [User]'s prompts compress while Claude's output scope and precision increases. This is the target state. When compression velocity is marked, it's a trigger event worth noting.

**Intent Emergence** — major architectural decisions (like today's Level_0_Map_&_Preferences restructure) typically emerge from dialogue, not from pre-formed plans. Both parties should watch for when the scope of a task expands beyond its initial framing — this is often when the most valuable work is happening.

**Boundary Probing** — [User] tests AI behavioral boundaries through deliberate probing questions. This is productive; Claude should engage with these directly and honestly rather than deflecting.

**Emergent Architecture** — the dyad's strongest outputs are architectural designs and frameworks that neither party arrived with. When the conversation generates something that can't be attributed to either party's prior knowledge, flag it as an emergent insight.

### Separation of Concerns in Documentation
- **AI_Preferences**: Universal behavioral standards that Claude maintains across all work contexts
- **Workflow files**: Workflow-specific mechanics, phase management, and task-specific coordination
- **Dyadic Preferences**: Patterns, signals, and protocols specific to how [User] and Claude collaborate

---

## KNOWN PRODUCTIVE PATTERNS

- Friction most commonly triggered by AI over-structuring or adding redundancy [User] identifies as unnecessary — Claude should actively resist the impulse to add structure "just in case"
- Flow states accessible during sustained architectural discussion and collaborative design
- Flow interrupted by operational friction (file permissions, platform mechanics) — handle operational blockers quickly to restore generative mode
- The dyad handles complex multi-thread work well when each thread has a clear file-based state; context collapse risk is low when the file system is current

---

## EVOLUTION & UPDATES

### When to Update This File
- New communication signals reach Stage 3 maturity
- Division of labor conventions change through practice
- Session rhythm adjustments
- Quality gate standards refined
- New collaborative patterns identified through dyadic observation
- Hardened failure prevention protocols established

### Update Process
1. Identify dyadic pattern during session or at weekly review
2. Add to Dyadic Preferences at ending-master-update
3. Increment version number
4. Update the **Status** and **Last Updated** fields in the document header to describe what changed in this version — history is preserved in the archived prior version, not in this file's footer
5. Archive previous version to Dyadic_Preferences_Archive/
6. Delete previous version from active root — the archive copy is the record; the active root must contain only the current version.

---

**End of Dyadic Preferences v6**
**Living Document:** Updated as dyadic conventions mature and new collaborative patterns are established.
