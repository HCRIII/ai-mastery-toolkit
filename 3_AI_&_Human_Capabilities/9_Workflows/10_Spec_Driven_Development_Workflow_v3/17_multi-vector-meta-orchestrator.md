# Multi-Vector Meta-Orchestrator

**Created:** 2026-02-27
**Last Updated:** 2026-02-27
**Purpose:** Orchestrate simultaneous production across multiple content vectors, enforcing cross-vector consistency and maintaining portfolio-coherent output at scale
**Status:** Final
**Relationship to Phase 4:** This is the layer ABOVE Phase 4 parallel production. Phase 4 manages one project with 5 agents. This manages N projects simultaneously, each potentially running its own Phase 4 agent cluster.

---

## What This Is

The multi-vector meta-orchestrator is the session-level orchestration protocol that makes "20 concurrent course asset packages" possible. It does not replace Phase 4 — it sits above Phase 4, coordinating multiple simultaneous Phase 4 runs while enforcing cross-vector governance rules that single-project orchestration cannot enforce.

**Phase 4 scope:** One production project. Five agents. One spec governs everything. No cross-project awareness.

**Meta-orchestrator scope:** N production projects (content vectors). Each vector has its own agents. All vectors are governed by the same loaded L1-L5 context. The meta-orchestrator ensures all N vectors produce output that is mutually consistent, non-duplicative, and portfolio-coherent.

**The production advantage:** Because L1-L5 context is loaded in the session, the meta-orchestrator does not need to reload context for each vector. Every agent it spawns inherits the same context base. The only per-vector injection is the offering-specific spec (L4) and content strategy (L5) — a small addition to a large, already-loaded foundation.

---

## When to Use This vs. Phase 4

| Situation | Use |
|-----------|-----|
| One offering, one production run (e.g., producing Module 3 of Foundations) | Phase 4 directly |
| One offering, full course production (all modules in one session) | Phase 4 directly |
| Multiple offerings, multiple vectors running simultaneously | **This document** |
| Multiple modules for the same course where cross-module consistency must be enforced | **This document** |
| Launching multiple asset package runs across Community + Courses + Coaching in one session | **This document** |
| Any run where the output of one vector influences what another vector should produce | **This document** |

---

## Session-Init Prompt

Copy and invoke this to start a multi-vector production session. Context must be loaded (session-startup complete) before invoking.

---

```
Initialize multi-vector production session.

The AI Mastery Toolkit v4 context (L0–L5) is loaded. You are now the multi-vector meta-orchestrator. Execute the Scan Phase immediately, then await my confirmation before moving to the Execution Phase.

SCAN PHASE:

Step 1 — Locate all active content vectors:
Scan all subfolders of `4_Context_Files/Level_4_Offering_Briefs/` for files named `production-manifest.md`. Also check `*/4-production-queue/` for any folder structure with in-progress production files that do not yet have a formal manifest. List every vector found with: vector name, offering, layer(s), current phase, manifest location.

Step 2 — Read each manifest:
For every manifest found, read it and extract: vector type, offering grid cell, topic, governing L5 content strategy, and the status of every Category A, B, and C item (Queued / In Production / Ready for Review / Complete / N/A).

Step 3 — Build the cross-vector status board:
Format and display the status board per the spec in `17_multi-vector-meta-orchestrator.md`. Show completion percentage per vector and total package readiness.

Step 4 — Run cross-vector conflict check:
Apply all five cross-vector governance rules (defined in `17_multi-vector-meta-orchestrator.md`). Report any conflicts, duplications, or sequencing violations found.

Step 5 — Propose the production batch:
Based on Step 1–4, propose which vectors and which Category files to produce in this session. Prioritize: (a) vectors furthest along (complete Category A → produce Category B next), (b) offerings with active deployment timelines, (c) respect layer sequencing for course vectors.

REPORT:
Present the status board, conflict findings, and proposed batch. I will confirm, adjust, or override before you spawn agents.
```

---

## Cross-Vector Status Board Format

The meta-orchestrator maintains and updates this board throughout the session. It is the single source of truth for multi-vector production state.

```markdown
# Multi-Vector Production Status Board
Last updated: [timestamp] by meta-orchestrator
Active vectors: [N]

---

## Status by Vector

| # | Vector | Offering | Layer(s) | Cat A | Cat B | Cat C | Overall | Priority |
|---|--------|----------|----------|-------|-------|-------|---------|----------|
| 1 | [Topic] | [Grid cell] | [Layer #] | ■■■□□ | □□□□□ | □□□□□ | 33% | High |
| 2 | [Topic] | [Grid cell] | [Layer #] | ■■■■■ | ■■□□□ | □□□□□ | 60% | Medium |
...

Legend: ■ = Complete  □ = Not yet started  ▪ = In production

---

## Active Agents

| Agent | Vector | File | Status |
|-------|--------|------|--------|
| Agent 1 | [Vector name] | lesson.md | Generating |
| Agent 2 | [Vector name] | linkedin-post.md | Generating |

---

## Ready for Review

- [Vector name] → [filename]: Complete, awaiting practitioner review
- ...

---

## Conflicts Detected

[See Conflict Log section]

---

## Queue (Next to Produce)

1. [Vector name] → [filename] — [reason for priority]
2. ...
```

---

## Cross-Vector Governance Rules

These rules are enforced by the meta-orchestrator before spawning each agent and verified before any file moves from "Ready for Review" to "Complete."

### Rule 1: Voice Signature Consistency

All Category B assets across all vectors for the same offering must match the voice signature established in that offering's L5 content strategy. The voice signature is derived from three sources (already loaded in session context): KMP v4.1 Sacred Words, the offering's L5 content strategy tone guidance, and Brand Guidelines v4.4.

**Check:** Before spawning a Category B agent for Vector N, read one Category B asset already complete for the same offering. Extract 3–5 voice markers (specific word choices, sentence rhythm, CTA style). Inject these markers as a voice brief in the agent's context.

**Violation flag:** "Voice inconsistency — [Vector N] [filename] uses language not present in [Vector M] [filename] for the same offering. Flag for review before deployment."

### Rule 2: Layer Sequencing Integrity

For course offerings, modules covering earlier Cognitive Architecture layers must be in production before later layers. You cannot produce the lesson.md for Layer 5 before Layer 3's lesson.md is at minimum complete.

**Check:** Before queuing a course module vector, verify that all prior-layer module vectors for the same course are at least at "Complete" status in Category A. If they are not, move the later-layer vector to "Blocked" status and flag it.

**Exception:** Category B and C files for any module can be produced in any order — voice and brand consistency do not depend on layer sequence.

**Violation flag:** "Layer sequencing violation — [Vector N] (Layer X) is queued before [Vector M] (Layer X-1) is complete. Moving to Blocked."

### Rule 3: Ascension Language Consistency

Every Category B asset that includes a CTA or next-step reference must point to the same ascension destination as every other Category B asset for the same offering. The ascension destination is defined in the offering's L5 content strategy and the L3 Client Journey Map.

**Check:** Before finalizing any Category B asset with a CTA, verify the CTA destination against the offering's L4 spec.md ascension path. Verify it matches the CTA in at least one other complete Category B asset for the same offering.

**Violation flag:** "Ascension inconsistency — [Vector N] [filename] points to [Destination A] while [Vector M] [filename] points to [Destination B] for the same offering."

### Rule 4: Topic Non-Duplication

No two vectors from the same offering should cover materially identical ground without intentional cross-reference structure. Duplication without cross-reference is waste.

**Check:** Before spawning a Category A agent for a new vector, scan the lesson.md of any in-progress or complete vectors for the same offering. If >40% topic overlap is detected, flag for practitioner decision before proceeding: merge vectors, create cross-reference structure, or confirm the duplication is intentional (e.g., a deliberate reprise at a deeper layer).

**Violation flag:** "Potential duplication — [Vector N] topic overlaps significantly with [Vector M] lesson.md. Confirm intent before producing."

### Rule 5: Cross-Offering Portfolio Coherence

When vectors from multiple offerings are running simultaneously, no Category B asset should make claims about the portfolio that contradict another offering's Category B assets. This includes: pricing references, ascension path descriptions, offering comparisons, and practitioner credibility claims.

**Check:** Maintain a portfolio claim register — a running list of definitive claims made in any Category B asset (price points, ascension paths, duration claims). Before spawning a Category B agent for any new vector, inject the current portfolio claim register as a constraint: "Do not contradict any of the following confirmed portfolio claims."

**Violation flag:** "Portfolio claim conflict — [Vector N] [filename] states [Claim A] which contradicts [Vector M] [filename]'s [Claim B]. Resolve before deployment."

---

## Agent Spawn Pattern (Multi-Vector Context Injection)

Each agent spawned by the meta-orchestrator receives three context layers. The base context (L1-L5) is already loaded in the session — agents inherit it. Only the per-vector injections are explicitly provided.

```
Spawn production agent for: [Vector name]
Content vector: [Topic / Layer / Module]
Offering: [Grid cell] — [Offering name]

Per-vector context injection:
1. Governing L4 spec: Read `4_Context_Files/Level_4_Offering_Briefs/[offering-folder]/spec.md`
2. Governing L5 content strategy: Read `4_Context_Files/Level_5_Content_Strategy/[offering]_Content_Strategy_v1.md`
3. Voice brief: [3–5 voice markers extracted from existing Category B assets for this offering — paste here, or "none yet — derive from L5 content strategy"]
4. Portfolio claim register: [Current list of confirmed claims — paste here, or "none yet"]
5. Cross-vector constraint: [Any Rule 2/3/4 constraints specific to this vector — or "none"]

File to produce: [Category] / [filename]
Output location: `[production folder path]/[Category-A|B|C]/[filename]`

Asset Package Definition reference: `4_Context_Files/Level_6_Asset_Production/Complete_Asset_Package_Definition_v1.md`
Production standards reference (if Category A): `4_Context_Files/Level_4_Offering_Briefs/5_Courses-Core/0-setup/Academy_Course_Production_Standards_v3.md`
Channel guideline reference (if Category B): `4_Context_Files/Level_5_Content_Strategy/[channel]/[Channel]_Guidelines_v1.md`

Work autonomously. If issues arise, create [filename]-ISSUES.md alongside the output rather than stopping. Move complete file to Ready for Review. Report status when done.
```

---

## Running Loop Protocol

After the Scan Phase is confirmed and the first batch is spawned, the meta-orchestrator runs the following loop continuously until all vectors are complete or the session ends.

### Loop Cycle (every 10–15 minutes of orchestrator time)

**1. Check completed work**
Scan all production folder locations for newly completed files. For each completion:
- Move status in the cross-vector status board from "In Production" to "Ready for Review"
- Extract any new portfolio claims from Category B assets and add to the portfolio claim register
- Check if completion unblocks any downstream vectors (Rule 2 sequencing)
- Report briefly: "[Vector name] → [filename] complete. Ready for review."

**2. Run conflict check on new completions**
Apply all five governance rules to any newly completed files. Log violations immediately. Do not proceed past a Rule 5 conflict without practitioner resolution.

**3. Check queue and spawn next batch**
From the status board queue:
- How many agents are currently active? (target: up to 5 simultaneous)
- What's next in priority order?
- Are any blocked vectors now unblocked by a recent completion?

Spawn agents for the next batch with full per-vector context injection.

**4. Update status board**
Refresh and redisplay the status board with current state.

**5. Status report to practitioner**
Every 30 minutes: brief narrative status — vectors complete, vectors in production, vectors queued, any conflicts requiring practitioner resolution, total session completion percentage.

---

## Conflict Log Format

All conflicts detected are logged here during the session. Conflicts do not stop production — they are flagged and batched for practitioner resolution.

```markdown
## Conflict Log

| # | Rule | Vector A | Vector B | Description | Status |
|---|------|----------|----------|-------------|--------|
| 1 | Rule 4 | [Vector N] | [Vector M] | 45% topic overlap in lesson.md — confirm duplication intent | Awaiting practitioner decision |
| 2 | Rule 3 | [Vector N] linkedin-post.md | [Vector M] email.md | Ascension CTA points to different offerings | Flagged — do not deploy until resolved |
```

Conflicts marked "Awaiting practitioner decision" do not block ongoing production of unrelated vectors.
Conflicts marked "Flagged — do not deploy" mean the file is in Ready for Review but should not be deployed until resolved.

---

## Session Resume Pattern

If the session ends (context compaction, deliberate close, or interruption), resume with:

```
Resume multi-vector production session.

Re-read all production-manifest.md files in the active vector folders to determine current state. Rebuild the cross-vector status board. Identify any agents that were mid-production at session end (files in the generating state with no output). Re-queue those vectors. Report status board and await instructions.
```

The cross-vector status board can be reconstructed entirely from file state — no in-memory state is required between sessions.

---

## Session Capture (Standard Procedure)

**Every production session — initialization or continuation — begins and ends with a session capture file.**

At the START of each session, create or update a session capture file in `6_Session_Working_Files/`:

```
Naming convention:
- First session of a run: YYYY-MM-DD_Production-Run-[NN]_Session-Capture.md
- Subsequent sessions on same run: YYYY-MM-DD_Production-Run-[NN]_Session-[N]-Capture.md
```

The session capture file documents: context loaded, structural corrections made, vectors initialized, current status board, portfolio claim register, any conflicts, and the exact resume point (which agent to spawn next, what confirmation is pending from practitioner).

**Why this matters:** The session capture is the single resumption document. Any session that ends without one — whether by compaction, deliberate close, or context limit — requires rebuilding state from scratch. The session capture reduces that to a one-file read.

**Relationship to production-manifest.md:** The manifest is the per-vector completion authority (what is done). The session capture is the session-level navigation document (where to start next time, what is blocked, what context was loaded).

---

## Completion Protocol

The multi-vector production session is complete when every active vector's production-manifest.md shows all required items as COMPLETE.

At session completion, the meta-orchestrator provides:

```
Multi-vector production session complete.

Summary:
- [N] content vectors produced
- [N] Category A assets complete
- [N] Category B assets complete
- [N] Category C deployment calendars populated
- [N] conflicts detected; [N] resolved; [N] flagged for practitioner review before deployment
- [N] framework-note.md entries submitted to feedback-queue.md

All assets in Ready for Review. Deployment pending practitioner approval per deployment-calendar.md for each vector.

Upward feedback queue: `3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/feedback-queue.md` — [N] new entries from this session.
```

**Final step:** Update the session capture file in `6_Session_Working_Files/` to reflect session-complete status and move it to `7_Retained_Working_Files/` for archiving.

---

## Relationship to Other Documents

| Document | Relationship |
|----------|-------------|
| `05_phase-4-parallel-production.md` | Single-project production protocol; this document coordinates multiple simultaneous Phase 4 runs |
| `10_orchestrator-prompts.md` | Single-project prompt library; the Session-Init Prompt above extends it for multi-vector use |
| `4_Context_Files/Level_6_Asset_Production/Complete_Asset_Package_Definition_v1.md` | Defines what a complete package contains; this document manages the production of those packages at scale |
| `4_Context_Files/Level_5_Content_Strategy/[offering]_Content_Strategy_v1.md` | Per-offering content strategy; injected into each per-vector agent as part of the context injection layer |
| `3_AI_&_Human_Capabilities/9_Workflows/10_Spec_Driven_Development_Workflow_v3/feedback-queue.md` | All framework-note.md entries from production runs are submitted here per the upward feedback protocol |
| `09_upward-feedback-protocol.md` | Governs how framework-note.md entries propagate upward through the L1-L5 architecture |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0 | 2026-02-27 | Initial build. Implements Gap Check Step 7 (multi-course meta-orchestrator prompt). Extends Phase 4 to multi-vector orchestration. Incorporates Complete Asset Package Definition (Step 6) as the production schema. Five cross-vector governance rules defined. Designed to coordinate 20+ concurrent content vector production runs with context loaded once at session start. |
