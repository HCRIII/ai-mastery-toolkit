# 05_Strategic_Navigation
## Framework Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Define the upstream strategic cycle that determines what gets built, why, and in what sequence — and establish how the four strategic operations connect as a single chain.
**Status:** Final
**Version:** v1
**Procedural counterpart:** `05_Strategic_Navigation_Workflow.md`

---

## What This System Is

The Strategic Navigation system governs the upstream decisions that determine what work gets done — not how to do it, but what deserves to be done, when, and in what order. Four operations compose this cluster:

- `ip-assessment` — evaluates a potential IP asset for strategic tier and uniqueness
- `assess-hvna` — activates, defers, or refines IHVNAs (Interesting Hypotheses, Value, Needs Attention) accumulated in SuperContext
- `okr-builder` — establishes OKRs and provides orientation check-ins against active KRs
- `content-vector` — deploys strategic initiatives as coordinated, cross-channel content asset sets

Two existing framework documents cover two of these operations individually: `06_OKR_Operating_System_Framework.md` governs `okr-builder` and `07_Compound_Content_Architecture_Framework.md` governs `content-vector`. This document covers the meta-level: how all four operations form a connected chain, what the chain produces, and why running them in isolation produces less than running them in sequence.

---

## The Problem It Solves

Strategic work has a sequencing problem. Without a defined upstream chain, several failure modes emerge:

**Production without strategy:** Content, assets, and deliverables are produced in response to immediate demands rather than as deliberate deployments of a strategic initiative. The work is competent but not compounding — it doesn't build toward anything.

**Strategy without activation:** OKRs are set but not connected to actual IP or content decisions. The strategic framework exists as a planning artifact but doesn't drive daily and weekly work.

**IP without placement:** Valuable intellectual property is identified but never formally assessed, never placed in an OKR structure, and never deployed through a content cycle. It sits in notes or IHVNA queues indefinitely.

**Orientation loss:** As operational demands accelerate, the connection between current work and active strategic priorities weakens. Sessions feel productive but pull in directions that don't compound toward KR achievement.

The strategic navigation chain solves all four by establishing a clear flow: identify → assess → place → deploy. Each operation has a defined input, a defined output, and a defined handoff to the next step in the chain.

---

## The Architecture

The four operations form a cycle with defined handoffs:

**IP identification → `ip-assessment`:**
When a potential IP asset is identified (a framework, a method, a diagnostic tool, a proprietary process), `ip-assessment` evaluates it for strategic tier and uniqueness. The output is a Tier 1/2/3 classification and a placement recommendation — does this belong in the OKR structure? Which initiative does it serve?

Tier 1: Unique, high-value, core to competitive positioning — formalize and protect
Tier 2: Valuable, defensible, supports Tier 1 — develop as supporting material
Tier 3: Useful, largely replicable, commodity — use freely, don't over-invest

**IHVNA accumulation → `assess-hvna`:**
IHVNAs are captured continuously in SuperContext — observations about patterns, hypotheses about what might work, signals that something warrants attention. `assess-hvna` is the formal evaluation gate: each IHVNA is assessed for activation (begin formal development), deferral (not yet — revisit in a future cycle), or refinement (more observation needed before a decision). Activated IHVNAs feed into either `capability-evolution` (if they represent a toolkit capability) or the OKR structure (if they represent a strategic initiative or opportunity).

**Strategic placement → `okr-builder`:**
OKRs establish the active strategic structure — the Objectives and Key Results that organize what matters in the current cycle. `okr-builder` operates in multiple modes:
- Full Build (annual or cycle open): establishes the complete OKR structure
- Quarterly Refresh: scores previous quarter, calibrates next
- Mid-Quarter Alignment Check: verifies current activity maps to active KRs
- Orientation Check-In: rapid re-anchoring when strategic orientation has been lost

IP placements from `ip-assessment` and activated IHVNAs from `assess-hvna` find their home in the OKR structure here.

**Strategic deployment → `content-vector`:**
Content-vector translates a strategic initiative into a coordinated, cross-channel asset set. The input is a defined initiative vector (what are we deploying, for whom, toward what objective). The output is a complete set of assets — one production session covers the full channel set for the initiative. The full architecture is documented in `07_Compound_Content_Architecture_Framework.md`.

**The chain summarized:**
IP identified → assessed for uniqueness and tier (ip-assessment) → strategic activation decision (assess-hvna) → placed in OKR structure (okr-builder) → deployed through content cycle (content-vector)

This is the upstream chain. Everything produced in the content-vector step has a traceable line back to a strategic decision. Nothing is deployed that isn't placed in the structure. Nothing is placed in the structure that hasn't been assessed.

### The IHVNA as the Holding Layer

Between observing something interesting and acting on it, there is the IHVNA. The IHVNA section of SuperContext is the intentional holding layer — it prevents two failure modes simultaneously:

**Premature action:** Acting on an observation before it is understood well enough to act on correctly. The IHVNA holds the observation until `assess-hvna` can evaluate it with appropriate context.

**Observation loss:** Noting something interesting in passing and losing it to compaction before it can be evaluated. The IHVNA entry preserves the observation across sessions.

The holding layer is only as useful as the evaluation gate. IHVNAs must be reviewed regularly through `assess-hvna` — a queue that only grows and never clears produces strategic noise, not strategic clarity.

---

## When to Engage

**`ip-assessment`:** When a new framework, method, tool, or process is identified that might represent defensible, unique intellectual property. The threshold: if you've thought "this might be something we own," run the assessment.

**`assess-hvna`:** At each formal strategic session — typically quarterly in alignment with OKR cycles, and any time the IHVNA queue has accumulated enough entries to warrant a dedicated review. Not a daily or weekly operation.

**`okr-builder`:** At cycle open (annual or major reset), at each quarterly boundary, mid-quarter when drift is suspected, and on-demand when orientation has been lost. See `06_OKR_Operating_System_Framework.md` for full mode guidance.

**`content-vector`:** When a strategic initiative is active in the OKR structure and ready for a content deployment cycle. Not a standalone content production tool — it is the deployment mechanism for an initiative that has already been placed strategically.

**When NOT to engage:**
- Do not run `content-vector` without a defined initiative vector that traces to an active OKR — if the content doesn't have a strategic address, it's production without strategy
- Do not run `assess-hvna` mid-session when the queue is small — it is a formal evaluation session, not a quick check
- Do not use `okr-builder` (Full Build mode) as a quarterly refresh — Full Build is for cycle opens; using it quarterly creates overhead without benefit

---

## Calibration Standards

**What good strategic navigation looks like:**
- All active content production traces to an initiative in the OKR structure
- The IHVNA queue is reviewed and cleared on a quarterly cadence — no entry sits unassessed for more than two cycles
- IP assessment happens proactively when something potentially unique is identified, not retroactively after significant development investment
- OKR mode selection is accurate — the right mode for the right trigger

**Drift signals:**
- Content is being produced in response to immediate requests without a traceable strategic address → production without strategy
- The IHVNA queue has grown to 10+ entries without a recent `assess-hvna` session → holding layer is accumulating without clearing
- OKRs exist but current work sessions don't reference them → the strategic structure has decoupled from operational work
- `okr-builder` Orientation Check-In mode is being needed frequently → OKR connection to daily work is weak

**Quality standard:** The test of healthy strategic navigation is whether a randomly selected piece of work from the past month can be traced to an active OKR. If the connection exists and is clear, the chain is working. If the connection must be constructed retroactively — if the strategic rationale is invented after the fact — the chain has broken.

---

## Procedural Counterpart

The step-by-step execution sequence by frequency and trigger, including input/output handoffs between operations, lives in:

**`05_Strategic_Navigation_Workflow.md`** → `3_AI_&_Human_Capabilities/8_Workflows/`

For the individual operation frameworks that sit within this chain:
- OKR operating system: `06_OKR_Operating_System_Framework.md`
- Compound content architecture: `07_Compound_Content_Architecture_Framework.md`

This document and `05_Strategic_Navigation_Workflow.md` name each other. The framework explains the chain; the workflow shows when and how to execute each link.
