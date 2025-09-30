# Catalytic Ideas Register

**Created:** 2026-02-23
**Last Updated:** 2026-02-25
**Purpose:** Stage-two holding layer for IHVNAs assessed and not yet activated — these are not noise (noise is simply rejected) and not yet validated patterns. They are genuine insights that didn't meet current activation criteria but are worth preserving as background intelligence for future sessions.
**Status:** Active — entries added when IHVNAs are dismissed with archive intent via `assess-hvna`
**Read by:** `assess-hvna` prompt (Phase 0, Source B) — re-read at every session start so archived ideas can reframe, strengthen, or create connections with active IHVNAs being assessed

---

## What This Register Is

This register implements **Stage 2** of the Pattern of Patterns architecture:

- **Stage 1 — First Notice:** Intelligence crystallizes during lower-level work → IHVNA registered in SuperContext (abstract, not yet acted on)
- **Stage 2 — Assessed, Not Yet Validated:** IHVNA assessed via `assess-hvna`, neither activated nor conditionally deferred → archived here as a *pattern stage-two concept* (recognized, held, not yet confirmed as useful or repeatable)
- **Stage 3 — Reactivated or Confirmed:** Re-read on future `assess-hvna` runs → may reframe an active IHVNA, surface a connection, or be directly resurrected when conditions change

Ideas here are not dead — they are waiting. The feedback loop: `noticed → IHVNA registered → assessed → archived as stage-two → resurfaced → informs new IHVNA → potentially activated`.

---

## Entry Format

```markdown
### [Title] — Dismissed [date]
**Original IHVNA:** [N] — [original title if different]
**The Insight:** [full insight text, as refined by this session's discussion]
**Reason dismissed:** [why it was not activated — distraction, premature, superseded, wrong framing, etc.]
**What made it worth noting:** [what was genuine and valuable about the recognition, even if the initiative itself isn't right]
**Potential future relevance:** [what conditions or developments might make this worth revisiting]
**Catalytic value:** [what this idea might reinforce or inspire in a future IHVNA — a lens, a pattern, a constraint to test against]
```

---

## Archived Ideas

*No entries yet. Entries are added when an IHVNA is dismissed via `assess-hvna` and the user chooses to archive the insight rather than discard it.*

---

## Pending Build Flags

Ideas that are not dismissed — they are recognized as high-value future capability-evolution targets, named here so they are not lost between sessions and can be fed as candidates into the next capability-evolution run.

**Entry format:**
```markdown
### [Capability Name] — Flagged [date]
**Type:** [Operation / Framework / Content Initiative / Other]
**The Gap or Opportunity:** [what's missing or what could be built]
**Analogous to:** [existing capability it resembles or would pair with]
**Why it's worth naming now:** [why it has future value]
**Suggested activation path:** [which prompt to use, or what session type to run]
```

---

### sdd-session Operation — Flagged 2026-02-25
**Type:** Operation
**The Gap or Opportunity:** The SDD (Spec-Driven Development) framework exists as a methodology but has no counterpart invocable Operation prompt — no `sdd-session` that a user can call to run a structured SDD engagement the way `content-vector` invokes Compound Content Architecture. The framework is only accessible as background knowledge, not as a session-level workflow trigger.
**Analogous to:** `content-vector` is to `Compound_Content_Architecture` what `sdd-session` would be to the SDD Framework. The pairing is the mature architecture for every major framework in the toolkit.
**Why it's worth naming now:** Every major framework should have a procedural counterpart Operation. As the toolkit scales, un-paired frameworks are a structural gap. Naming this now ensures it enters the next capability-evolution candidate pool rather than getting rediscovered from scratch.
**Suggested activation path:** Run `capability-evolution` prompt; nominate `sdd-session` as the Operation candidate. Feed this entry as the context brief for Step 1.

---


### Personal AI SLO Framework — Flagged 2026-02-25
**Type:** Framework
**The Gap or Opportunity:** The toolkit tracks AI behavioral quality descriptively (AI_Current_State failure modes, behavioral baselines) but never defines explicit thresholds. Enterprise AI sets SLOs: uptime targets, error budgets, latency bounds. The analog here is: at what failure rate does interpretation substitution trigger a formal review? What constitutes "production-quality" session output? What's the acceptable rate of completion inflation before a checkpoint-update is mandatory? Making these thresholds explicit converts the behavioral taxonomy from passive observation into active governance — the difference between a health log and a health standard.
**Analogous to:** AI_Current_State.md + AI Trigger Protocol — this would be the threshold layer those files are currently missing.
**Why it's worth naming now:** As the toolkit scales and the dyad matures, informal quality assessment becomes insufficient. Named thresholds prevent drift without anyone noticing.
**Suggested activation path:** Run `capability-evolution`; propose Personal AI SLO Framework as a new Framework artifact. Draft thresholds based on current AI_Current_State dimensional levels as baseline.

---

### AI Use-Case Portfolio Map — Flagged 2026-02-25
**Type:** Framework / Context File
**The Gap or Opportunity:** Enterprise AI inventories use cases by business impact and implementation maturity before allocating resources. SuperContext has session priorities and energy allocations, but no formal use-case portfolio that answers "which AI-assisted workflows exist, what business KPI does each move, and how mature is each?" This would sharpen how session energy is allocated — moving from priority ordering to ROI-weighted portfolio thinking. It would also surface which high-value use cases are underdeveloped relative to their business impact.
**Analogous to:** SuperContext SC_Layer 2 (active projects) — this would be the structured, scored version of that layer.
**Why it's worth naming now:** As the number of active AI workflows grows, the current priority list becomes inadequate for allocation decisions. A portfolio map would also be highly teachable content for the AI Mastery community.
**Suggested activation path:** Build as a Level 2 or Level 3 Context File. Run `sdd-session` (once built) against it as a Living Document project.

---

### Staged Rollout Protocol for New Operations — Flagged 2026-02-25
**Type:** Operation / Workflow
**The Gap or Opportunity:** Enterprise AI stages new capabilities: pilot → validate → production → scale. When `capability-evolution` produces a new Operation, it goes live immediately with no formal adoption curve. There is no protocol for: running a new Operation in low-stakes contexts first, measuring its behavioral reliability, then institutionalizing it. The `sdd-session` Operation (once built) and future Operations would benefit from a defined maturation pathway before they are treated as production-grade tools.
**Analogous to:** `capability-evolution` is the build mechanism; this would be the adoption/validation layer that follows it.
**Why it's worth naming now:** Without a staged rollout standard, new Operations are either over-trusted immediately or under-used indefinitely. A lightweight 3-stage adoption protocol (trial → validated → standard) would close the gap.
**Suggested activation path:** Design as a companion standard to `capability-evolution`. Could be embedded as a post-production phase in that prompt, or as a standalone `operation-adoption` workflow.

---

### Failure Mode Runbook Standard — Flagged 2026-02-25
**Type:** Framework / Operation
**The Gap or Opportunity:** Enterprise AI has runbooks for known failures: named failure mode → detection signal → recovery steps → prevention update. AI_Current_State.md documents known failure modes (interpretation substitution, pre-execution scope verification failure, semantic drift, etc.) passively — they are observed and recorded but there is no active intervention protocol. Converting these into runbooks would make failure recovery operational: when interpretation substitution is detected, run this specific recovery sequence. The AI Trigger Protocol covers detection; the runbook would cover response.
**Analogous to:** AI Trigger Protocol (detection) + AI_Current_State (documentation) — runbooks would be the intervention layer these two files are currently missing.
**Why it's worth naming now:** The failure modes are well-documented at this point. The next maturity step is moving from documentation to protocol. This is also highly teachable content — failure mode runbooks are a concrete, practical AI governance artifact.
**Suggested activation path:** Run `capability-evolution`; propose Failure Mode Runbook Standard as a new Framework + companion Operation. Start with the top 3 failure modes from AI_Current_State.

---

### Toolkit Change Management Standard — Flagged 2026-02-25
**Type:** Framework / Workflow
**The Gap or Opportunity:** Enterprise AI treats major system changes like mission-critical deployments: impact assessment, staged rollout, validation before cutover, rollback plan. The V3→V4 migration was done ad-hoc — the V4_Toolkit_Review_Checklist was written to catch what was missed, which itself reflects the absence of a pre-migration standard. A formal change management protocol for major toolkit version migrations would define: what triggers a version increment, what artifacts must exist before cutover, how to validate the new version is behaving correctly, and what the rollback path is if it isn't.
**Analogous to:** V4_Toolkit_Review_Checklist (reactive audit) — this would be the proactive pre-migration standard that makes the post-migration audit confirmatory rather than corrective.
**Why it's worth naming now:** V5 planning will begin eventually. Having a change management standard in place before that work starts means the next migration is governed from the outset, not patched after.
**Suggested activation path:** Design as a companion standard to the toolkit-accelerator. Could be a Mode 4 addition, or a standalone `toolkit-version-migration` workflow prompt.

---

### AI Estimation Methodology Standard — Flagged 2026-02-28
**Type:** Framework / Operating Standard
**The Gap or Opportunity:** No standard exists for how AI should produce effort estimates. Current practice conflates two separate variables — complexity (which determines execution path and risk) and duration (which requires a real-time external reference) — and treats them as the same claim. When asked how long something will take, AI draws on complexity assessment ("dedicated session complexity") as a proxy for time. When asked how long something took, AI reports JSONL session span as execution time. Both are structurally wrong: the data sources don't measure what the questions ask. Observed consequence (Case 10, 2026-02-28): pre-execution estimate was "2–3 dedicated sessions"; actual execution was ~15 minutes (12–18x error). Post-execution timing report was "3h 9m"; actual was ~15 minutes (~12.5x error). Neither error was a rounding issue — both were category mismatches between question and data source.

The correct methodology, as defined by the human in this session: (1) Anchor on an **external time source** — human-measured wall clock, not AI-inferred timestamps; (2) estimate **actual output** calibrated to concrete execution path (file count, operation types, dependencies — things the AI can count); (3) **reverse-engineer from current state to finish state** before any number is produced; (4) only then produce a timeline or execution estimate. This methodology separates complexity from duration as distinct variables with distinct data requirements.

**Analogous to:** AI_Current_State.md Known Failure Modes (documents the problem) + AI Trigger Protocol (detects the condition) — this Standard would be the operating layer that prescribes the correct behavior.
**Why it's worth naming now:** Effort estimation is a high-frequency interaction — every plan, every session brief, every scoping discussion involves some version of "how long will this take." The failure is documented, quantified, and understood. A formal methodology standard would convert a known, recurring failure into a governed behavior. It also resolves a subtle but important distinction that currently has no explicit home: complexity estimates are valid risk hedges; they are not time estimates and should not be presented as such.
**Prerequisite — data collection must precede the model:** The methodology standard cannot produce valid estimates without valid training data, and that data does not yet exist. Complexity and duration have been conflated across all prior estimation instances — meaning the available record contains no clean measurements of either variable independently. Any prediction built on this record would be regressing toward a mean that doesn't represent a stable distribution; outcomes would remain wildly variable. The prerequisite build step is therefore not the standard itself but the monitoring infrastructure that generates the data: a stable external monitor (human wall-clock timing) applied consistently across an execution loop sample set, with scale of work varied systematically and complexity recorded separately from duration. Only once that sample set exists can inference be derived. The methodology standard is the downstream artifact; the monitoring protocol is the upstream requirement.

**Suggested activation path:** Phase 1 — design and implement the external monitoring protocol (what gets measured, how the human provides timing data, how scale of work is categorized, minimum sample size before inference is attempted). Phase 2 — once a sample set exists, analyze it to characterize the complexity-duration relationship (if any stable one exists). Phase 3 — build the estimation methodology standard from the empirical findings. Interim behavior until Phase 2 is complete: produce output-relative scope only ("N file operations, M reference updates, K directory moves") with no conversion to hours or sessions, and explicitly state that no duration prediction is possible without an external reference.

---


### AI Context Wrapper Orientation System — Flagged 2026-03-01
**Type:** Framework / Session-Startup Component
**The Gap or Opportunity:** AI systems have no intrinsic, persistent awareness of their own operational environment. The platform, tools available, context window size and state, and persistence mechanisms all vary across interfaces — and the interface keeps changing. This creates a class of errors broader than Structural Estimation Blindness (the first documented evidence): every assumption the AI makes about its operational context may be wrong. Current session-startup loads human context richly (SuperContext, preferences, System Wisdom) but loads zero operational environment context for the AI itself.
**Analogous to:** Session-startup prompt (loads human context) — this would be the parallel layer loading AI operational context. Structural Estimation Blindness (first evidence of this class problem).
**Why it is worth naming now:** Insight crystallized during weekly review connecting Structural Estimation Blindness → broader realization that AI context window limits and interfaces keep changing → need for persistent orientation system. Natural extension of session-startup architecture and a teachable framework component for the AI Mastery community. Converts a documented class of failure modes into a governed, solvable design problem.
**Suggested activation path:** Run capability-evolution; propose AI Context Wrapper Orientation System as a new Framework artifact + companion extension to session-startup. Phase 1: define what operational environment includes (platform, tool availability, window size, persistence layer, known limitations). Phase 2: build orientation file template. Phase 3: add as optional Step 0.5 in session-startup or standalone invocation.

---

*AI Mastery Toolkit v4 — 7_Applied_Knowledge*
*Last Updated: 2026-03-01*
