# 03_New_Tool_Evaluation
## Workflow Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Apply the five-step quality gate to any proposed new tool, process, or framework — producing a documented verdict (Strengthens / Integration Drag / Toolkit Bloat) before any adoption decision is made.
**Status:** Final
**Version:** v1
**Framework document:** `03_Toolkit_Integrity_Framework.md`

---

## Workflow Overview

This workflow is the formal evaluation protocol for any tool, prompt library, external framework, or process proposed for adoption into the toolkit. It produces a documented classification in one of three categories: Strengthens (adopt), Integration Drag (known alternative — do not adopt), or Toolkit Bloat (documented — do not adopt). Most evaluations resolve at Step 1 or 2 — which is the point. The workflow makes "no" a clean, documented, guilt-free outcome.

**Who runs it:** Human initiates; AI applies the evaluation criteria. Decision authority rests with the human.

**When it triggers:** Any time a new tool, process, prompt library, or external framework is proposed for adoption — from any source, including direct recommendation, FOMO signal, or discovery during research.

---

## Inputs Required

- Name and description of the proposed tool/process
- Understanding of what it does and what problem it solves
- Current toolkit map (awareness of what exists in `1_Prompts/`, `2_Skills/`, `3_Frameworks/`, and active workflows)
- The Known Alternatives Register (if it exists) — to check if this tool has already been evaluated

---

## Step Sequence

**Step 1 — Capability Gap Check**

Question: Does this tool do something the toolkit cannot currently do?

- Identify the specific capability the tool provides
- Check against existing processes, skills, and frameworks for a current equivalent
- If a current equivalent exists: → **Classification: Integration Drag**. Document in Known Alternatives Register with rationale. Stop.
- If no current equivalent: → Proceed to Step 2

Gate: Most evaluations resolve here. An alternative to something that already exists is Integration Drag regardless of quality — the choice overhead it creates is a real cost.

---

**Step 2 — Uniqueness Check**

Question: Is this capability genuinely distinct, or a variation on an existing capability?

- A variation produces overlapping capability with a different interface or methodology. The result is the same thing done two slightly different ways.
- A distinct capability produces something that existing tools cannot produce, even in combination.
- If variation: → **Classification: Integration Drag**. Document with the specific overlap identified. Stop.
- If distinct: → Proceed to Step 3

Gate: "Genuinely distinct" is a high bar. Nuanced improvements on existing capability typically do not clear it.

---

**Step 3 — Chain Connection Check**

Question: If adopted, which existing workflow would this capability feed into or extend?

- Identify the specific workflow or strategic chain the tool would connect to
- A tool that doesn't connect to any active workflow produces capability that isn't demanded by the current system's operations
- If no clear chain connection: → **Classification: Toolkit Bloat**. Document with the specific disconnection identified. Stop.
- If chain connection is clear and specific: → Proceed to Step 4

Gate: "Could connect to" is not sufficient. The connection must be specific and active — a named workflow step, a defined gap in an existing sequence, or a clearly identified capability that the chain currently lacks.

---

**Step 4 — Integration Cost Assessment**

Question: Is the compounding value greater than the integration cost?

Estimate integration cost across four dimensions:
- **Context load:** How much of the context window does this tool require? How much does it add to session startup cost?
- **Versioning and maintenance:** How frequently does it update? What is the maintenance burden of keeping it current?
- **Learning curve:** How much time does effective use require before the tool's value is realized?
- **Workflow disruption:** Does adoption require changing any existing workflow steps, or does it add to existing steps cleanly?

Then estimate compounding value: over one year of consistent use, what does this tool produce that the system cannot currently produce?

If integration cost exceeds compound value: → **Classification: Toolkit Bloat** (cost-adjusted). Document the cost analysis. Stop.
If compound value exceeds integration cost: → Proceed to Step 5.

---

**Step 5 — Decision and Intake**

**Verdict: Strengthens**

Document the strengthening rationale:
- What capability gap does this fill?
- Which workflow does it extend and at which step?
- What is the expected compound value over 12 months of use?

Intake action:
1. Deposit the tool (or a reference to it) in `9_Incoming_Material/`
2. Run `toolkit-accelerator` Mode 2 intake gate to formally integrate into the toolkit
3. Document the new capability spec (using `official-pattern-template` if applicable)
4. Run `capability-evolution` if the adoption warrants a Framework + Operation + System Intelligence set

---

## Output + Destination

| Verdict | Output | Destination |
|---------|--------|-------------|
| Integration Drag | Classification + rationale | Known Alternatives Register |
| Toolkit Bloat | Classification + rationale | Known Alternatives Register |
| Toolkit Bloat (cost-adjusted) | Classification + cost analysis | Known Alternatives Register |
| Strengthens | Full rationale + intake action | `9_Incoming_Material/`; formal intake via `toolkit-accelerator` |

**Known Alternatives Register location:** Create in `1_Toolkit_Documentation/` if it does not yet exist. One file; all rejected evaluations accumulate here in reverse-chronological order.

---

## Framework Document

The conceptual architecture behind this workflow — the three-category taxonomy, the FOMO defense logic, and the distinction between `toolkit-accelerator` and `toolkit-integrity-update` — lives in:

**`03_Toolkit_Integrity_Framework.md`** → `3_AI_&_Human_Capabilities/7_Frameworks/`
