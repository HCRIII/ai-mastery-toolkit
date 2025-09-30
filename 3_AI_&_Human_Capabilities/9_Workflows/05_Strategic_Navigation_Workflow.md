# 05_Strategic_Navigation
## Workflow Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Execute the upstream strategic chain — from IP identification through OKR placement and content deployment — at the correct frequency and with the correct handoffs between each operation.
**Status:** Final
**Version:** v1
**Framework document:** `05_Strategic_Navigation_Framework.md`

---

## Workflow Overview

This workflow governs the strategic cycle that determines what gets built, why, and when — not how to execute, but what deserves to be executed and in what sequence. The four operations (ip-assessment, assess-hvna, okr-builder, content-vector) form a chain with defined handoffs. This workflow organizes them by trigger frequency and specifies the input/output at each handoff.

**Who runs it:** Human drives strategic decisions; AI executes operations and manages chain handoffs.

**When it triggers:** At multiple frequencies — annual cycle open, quarterly boundaries, on-demand signals, and content cycle initiation. All frequencies are defined below.

---

## Inputs Required

- SuperContext (current version) — required throughout
- Active OKR file — required for okr-builder and content-vector
- IHVNA queue from SuperContext — required for assess-hvna
- IP candidate description — required for ip-assessment
- Initiative vector definition — required for content-vector
- Brand guidelines, ICP profiles, channel guidelines — required for content-vector execution

---

## Step Sequence by Frequency

### Annual / Cycle Open

**Operation: `okr-builder` — Full Build mode**

Trigger: New annual cycle opens, or a major strategic reset is warranted.

Input: Strategic context from SuperContext, previous cycle performance (if applicable), current business priorities.

Action: Run `okr-builder` in Full Build mode. Establish the full OKR structure for the cycle: annual Objectives with quarterly Key Result targets.

Output: Annual OKR file with Q1 targets active. Stored in the active strategy location. SuperContext updated with OKR file reference.

Handoff to: All subsequent operations reference this OKR file as the active strategic structure.

---

### On Discovery of Potential IP

**Operation: `ip-assessment`**

Trigger: Any time a new framework, methodology, diagnostic tool, or proprietary process is identified that might represent defensible intellectual property. The threshold is low — if the thought "this might be something we own" arises, run the assessment.

Input: Description of the potential IP asset — what it is, how it works, what problem it solves.

Action: Run `ip-assessment`. Evaluate for uniqueness, strategic tier, and competitive positioning.

Output: Tier classification (Tier 1 / 2 / 3) and placement recommendation. Tier 1 and Tier 2 assets that are ready for development → feed into `okr-builder` placement. Tier 3 assets → noted but not prioritized for OKR placement.

Handoff to: Tier 1/2 assets move to OKR placement when the next `okr-builder` session runs (Quarterly Refresh or Full Build). If the asset is urgent, trigger an on-demand `okr-builder` Orientation Check-In to place it.

---

### On IHVNA Accumulation

**Operation: `assess-hvna`**

Trigger: IHVNA queue in SuperContext has accumulated enough entries to warrant formal review (typically 5+ entries, or quarterly). Do not run on 1–2 entries — the queue is meant to accumulate between reviews.

Input: All active IHVNA entries from SuperContext. Current OKR file for strategic context.

Action: Run `assess-hvna` across the full queue. Each IHVNA receives one of three verdicts: Activate, Defer, Refine.

Activated IHVNAs route to:
- `capability-evolution` → if the IHVNA represents a toolkit capability
- `okr-builder` Quarterly Refresh or on-demand session → if the IHVNA represents a strategic initiative or opportunity

Deferred IHVNAs: marked with deferral note and re-queue for next review cycle.

Refined IHVNAs: updated entry re-enters the queue for the same or next review.

Output: Cleared IHVNA queue. Activated items routed to their respective development pathways. SuperContext updated.

---

### Quarterly (End of Each Quarter)

**Operation: `okr-builder` — Quarterly Refresh mode**

Trigger: End of each quarter.

Input: Previous quarter's KR targets and actual performance. Current IHVNA activations awaiting OKR placement. Any IP assessments awaiting placement.

Action: Run `okr-builder` in Quarterly Refresh mode.
1. Score previous quarter's KRs — achieved / partial / missed, with brief rationale for each
2. Calibrate next quarter's targets based on performance and current strategic context
3. Place any activated IHVNAs or assessed IP assets into the OKR structure where warranted
4. Update SuperContext with the refreshed OKR state

Output: Updated OKR file with next quarter's targets active. SuperContext updated. Previous quarter scores documented.

---

### Content Cycle (Per Active Initiative)

**Operation: `content-vector`**

Trigger: A strategic initiative is active in the OKR structure and ready for a content deployment cycle. This is not an ad hoc trigger — the initiative must have a defined vector: what is being deployed, for whom, and toward which OKR.

Input: Initiative vector (initiative name + audience + objective + OKR it serves). Loaded context: brand guidelines, key message platform, ICP profiles, relevant channel guidelines.

Action: Run `content-vector`. Produce the full asset set for the initiative in a single session — do not produce one asset at a time across multiple sessions.

See `07_Compound_Content_Architecture_Workflow.md` for the detailed pre-production and production sequence.

Output: Full asset set for the initiative. Each asset routed to its correct project folder and asset index.

---

### On-Demand — Disorientation Signal

**Operation: `okr-builder` — Orientation Check-In mode**

Trigger: "I feel productive but off-track" — a sense that current activity has drifted from strategic priorities, or that the connection between daily work and active KRs has become unclear.

Input: Active OKR file. SuperContext.

Action: Run `okr-builder` in Orientation Check-In mode. Re-anchor to active KRs. Identify the single highest-leverage action that serves active priorities. 3–5 minutes.

Output: Clarity on the single next priority. No file updates required unless a structural misalignment is discovered.

Note: This mode is available any time the disorientation signal is present. It is not a scheduled operation.

---

## Input/Output Handoff Summary

| From | Produces | Feeds into |
|------|----------|-----------|
| `ip-assessment` | Tier classification + placement recommendation | `okr-builder` (placement) |
| `assess-hvna` | Activated IHVNAs | `capability-evolution` or `okr-builder` (placement) |
| `okr-builder` | Active OKR structure | `content-vector` (initiative vector source) |
| `content-vector` | Full initiative asset set | Project folders + asset index |

---

## Output + Destination

| Operation | Output | Destination |
|-----------|--------|-------------|
| `ip-assessment` | Tier classification doc | `7_Retained_Working_Files/` or relevant project folder |
| `assess-hvna` | Updated IHVNA queue | SuperContext |
| `okr-builder` | Active OKR file | Active strategy location; SuperContext reference updated |
| `content-vector` | Full asset set | Level 6 project folder + asset index |

---

## Framework Document

The conceptual chain architecture — why the four operations form a cycle, the IHVNA as holding layer, and the distinction between upstream strategy and downstream production — lives in:

**`05_Strategic_Navigation_Framework.md`** → `3_AI_&_Human_Capabilities/7_Frameworks/`
