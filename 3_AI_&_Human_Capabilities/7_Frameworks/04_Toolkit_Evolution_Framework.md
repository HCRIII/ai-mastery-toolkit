# 04_Toolkit_Evolution
## Framework Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Define the lifecycle through which raw observations become permanent, portable toolkit capabilities — and establish why every new capability must produce three outputs simultaneously.
**Status:** Final
**Version:** v1
**Procedural counterpart:** `04_Toolkit_Evolution_Workflow.md`

---

## What This System Is

The Toolkit Evolution system governs how new capabilities are identified, evaluated, formalized, and permanently deployed into the toolkit. Three processes compose this cluster:

- `capability-evolution` — the formalization process: turns a validated IHVNA into a permanent capability with all three required outputs
- `suggest-pattern` — the observation capture process: flags a potential repeatable pattern for evaluation before formal development
- `official-pattern-template` — the scaffolding tool: provides the standard structure for new capability documentation

This cluster is the mechanism by which the toolkit learns from use. It is how the system gets smarter over time rather than simply accumulating more files.

---

## The Problem It Solves

Most systems accumulate without evolving. Files are added, tools are adopted, prompts proliferate — but the underlying patterns of what works, what doesn't, and what should become a permanent standard are never formalized. The result is a toolkit that grows in size without growing in intelligence.

**The observation-to-capability gap:** Valuable patterns emerge constantly in active work — a particularly effective prompt sequence, an interaction structure that reliably produces better outputs, a workflow adaptation that eliminates a recurring failure mode. Without a formalization pathway, these observations live only in session memory. They do not survive compaction. They do not transfer to new sessions. They do not become part of the system's operating standard.

**The partial deployment problem:** When a new capability is recognized and formalized, the natural instinct is to create the operational component (the prompt or process) and consider the work done. But a capability that lacks its framework document produces no user understanding of when or why to use it. A capability that lacks its System Intelligence update produces no behavioral change in how the AI operates by default. Partial deployment means the capability exists but does not compound.

**The IHVNA holding layer:** Between observing a potential pattern and formalizing it as a capability, there is an evaluation step. Not every observed pattern deserves formal development — some are situational, some are variations on existing capabilities, some are too early-stage to formalize. The IHVNA (Interesting Hypotheses, Value, Needs Attention) framework in SuperContext serves as the holding layer: observations are captured there and queued for formal evaluation through `assess-hvna` before capability work begins.

---

## The Architecture

### The Pattern Lifecycle

Every new capability moves through a defined lifecycle:

1. **Signal noticed** — a repeatable pattern, failure mode, or valuable interaction structure is observed mid-session
2. **Captured** — flagged using `suggest-pattern` or directly as an IHVNA entry in SuperContext; the observation is preserved without interrupting current work
3. **Evaluated** — queued for `assess-hvna` at an appropriate session; the IHVNA is assessed for activation (formalize now), deferral (not yet), or refinement (observe more before formalizing)
4. **Formalized** — `capability-evolution` is run; this produces all three required outputs simultaneously
5. **Deployed** — the ending-master-update locks all three outputs into the system files; the capability is now permanently active

The lifecycle has a hard gate at step 3. `capability-evolution` is not run on raw observations — it is run on IHVNAs that have been assessed and cleared for activation. This prevents premature formalization of patterns that are situational or not yet understood well enough to standardize.

### The Three-Output Standard

Every capability formalized through `capability-evolution` must produce three outputs simultaneously:

**Framework document** (in `7_Frameworks/`) — the conceptual guide: what the capability is, why it exists, when to use it, and what degrades when it is absent. This is what teaches the user to engage the capability correctly.

**Operation** (in `1_Prompts/` or `2_Skills/`) — the executable component: the prompt, process, or skill bundle that the user or AI runs. This is the mechanism.

**System Intelligence update** (in `5_System_Wisdom/`) — the behavioral encoding: the update to the AI's current state, trigger protocol, or behavioral taxonomy that makes the new capability part of the AI's default operating posture. This is what makes the capability automatic rather than remembered.

**What is lost when any output is skipped:**
- Framework only: the concept exists but no mechanism; cannot be acted on
- Operation only: the tool exists but no context for when or why; used incorrectly or not at all
- System Intelligence only: the AI knows something changed but cannot explain it to the user
- Framework + Operation, no System Intelligence: the capability must be re-invoked manually every session; it never becomes default behavior
- Operation + System Intelligence, no Framework: capability runs automatically but user doesn't understand when it's appropriate; cannot collaborate with it intelligently

The three-output standard is not overhead — it is what makes a capability portable and self-reinforcing across sessions, users, and AI instances.

### The Role of `suggest-pattern` and `official-pattern-template`

`suggest-pattern` is the lightweight capture tool — it flags a potential pattern mid-session for later evaluation without requiring a full capability development cycle. Its output is an IHVNA entry, not a capability.

`official-pattern-template` is the scaffolding tool for `capability-evolution` — it provides the standard document structure for all three required outputs so that formalization is consistent and complete.

---

## When to Engage

**`suggest-pattern`:** Any time a repeatable, potentially valuable pattern is observed mid-session. The threshold for capture is low — if it might be worth formalizing, capture it. The evaluation gate (step 3 of the lifecycle) is where quality control happens, not at the capture stage.

**`assess-hvna`** (upstream dependency): Run on accumulated IHVNAs at a natural strategic session — not mid-task. This is the formal evaluation gate. `capability-evolution` does not run without a cleared IHVNA from `assess-hvna`.

**`capability-evolution`:** When an IHVNA has been cleared for activation through `assess-hvna`. This is a dedicated working session — producing all three outputs simultaneously is the standard, and that requires focused time.

**`official-pattern-template`:** Within a `capability-evolution` session, as the scaffolding for the three required outputs.

**When NOT to engage:**
- Do not run `capability-evolution` on raw observations that have not gone through `assess-hvna` — premature formalization embeds patterns that are situational, not systematic
- Do not produce partial outputs from `capability-evolution` — if the session cannot produce all three, defer until it can
- Do not use `suggest-pattern` as a substitute for the full lifecycle — a suggested pattern is an input to evaluation, not a capability

---

## Calibration Standards

**What good toolkit evolution looks like:**
- The IHVNA section of SuperContext contains a running queue of observations that are reviewed in strategic sessions
- `capability-evolution` sessions are rare (a few per year) and thorough — each produces a complete, three-output capability
- New capabilities are immediately reflected in AI behavior across subsequent sessions (System Intelligence update is working)
- The toolkit's sophistication increases measurably over time — not just its file count

**Drift signals:**
- IHVNAs accumulate in SuperContext without ever being assessed → the `assess-hvna` gate is not running on cadence
- New capabilities appear as operations without framework or System Intelligence updates → partial deployment is occurring
- Patterns that "everyone knows" are not formalized → valuable system intelligence is living only in human memory
- `capability-evolution` sessions produce Framework + Operation but no System Intelligence update → the behavioral encoding step is being treated as optional

**Quality standard:** The test of healthy toolkit evolution is whether the system that exists today is measurably smarter than the system that existed six months ago — not larger, smarter. The capability count matters less than whether the capabilities compound with each other and propagate into default AI behavior.

---

## Procedural Counterpart

The step-by-step lifecycle sequence, from signal capture through three-output deployment, lives in:

**`04_Toolkit_Evolution_Workflow.md`** → `3_AI_&_Human_Capabilities/8_Workflows/`

This document and that workflow name each other. The framework explains the evolution architecture; the workflow provides the full lifecycle sequence with inputs, outputs, and gate criteria at each step.
