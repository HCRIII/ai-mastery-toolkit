# ip-assessment

**Purpose:** Verify whether identified IP is genuinely unique, or map the structural path to make it so
**Prompt file:** `system.md`
**Version:** 1.0
**Created:** 2026-02-25

---

## What It Does

Runs an outside-in uniqueness verification on any named piece of intellectual property — either from the existing IP register or a newly identified concept. The prompt forces an external scan before any verdict, grounding the assessment in what actually exists rather than what the creator believes exists.

Three possible outcomes:

- **Tier 1 — Genuinely Unique:** The specific combination of claim + mechanism + scope has no close comparable in current literature, tools, or frameworks. IP is ready for publication, protection, or content asset development.
- **Tier 2 — Partially Unique:** Some dimensions are genuinely novel; others overlap with existing work. Returns the confirmed-unique dimensions plus specific refinement paths for the overlapping ones.
- **Tier 3 — Needs Differentiation:** The core concept or mechanism exists in comparable form elsewhere. Returns a structural diagnosis of the gap plus four specific pathways to create genuine differentiation.

---

## Two Modes

**Mode A — Existing IP:** Reads the System Innovations Register and Proprietary Methodologies Index, presents a numbered inventory, user selects the IP to assess. Reads the source document before beginning.

**Mode B — New IP:** Accepts a user-provided description of the IP concept to check. No file loading required — proceeds directly to structural profiling.

---

## The External Scan — Why This Prompt Exists

Most IP validation is self-referential. Creators search for their own name, find nothing, and conclude the concept is unique. This prompt is designed to prevent that failure mode.

Step 3 executes three search angles:
1. **Concept/Name Search** — direct search for the IP's terminology
2. **Mechanism Search** — search for the underlying operating principle, regardless of what it's named
3. **Adjacent Domain Scan** — look in neighboring fields for the same logic applied elsewhere

The search is biased toward disconfirmation: find comparables first, then assess their distance. A thorough scan that finds no close comparables is a strong positive signal — but only if the search was genuinely trying to find them.

---

## When to Use

- When the IP Multiplier Scan flags a potential IP candidate during a session
- When a new concept, framework, or mechanism has been named and needs verification before content development or publication
- After a session where a new pattern crystallized and you want to confirm genuine novelty
- Before investing in content asset development — confirm what you're building on
- When preparing CDPID companion paper contributions — verify each innovation's claim
- "run ip-assessment"
- "check this IP"
- "is this unique"
- "verify this as IP"

---

## Output

- IP Structural Profile (5 dimensions) — confirmed before scan begins
- External Scan Summary table (3 angles, comparables found, closest match)
- Comparative Analysis table (overlap mapping across all 5 dimensions)
- Uniqueness Verdict (Tier 1 / 2 / 3) with evidence
- Output Block corresponding to verdict tier:
  - Tier 1: Uniqueness claim in publishable language + IP protection options + positioning statement
  - Tier 2: Confirmed-unique dimensions + refinement paths for overlapping dimensions
  - Tier 3: Overlap diagnosis + 4 structural differentiation pathways + recommended next step

---

## Related Prompts

| Prompt | Relationship |
|--------|-------------|
| `checkpoint-update` | Creates IP candidates (Step 3.5 — Upward Intelligence Flow Capture) |
| `assess-hvna` | Activates IHVNAs; ip-assessment confirms the IP strength of what's being activated |
| `capability-evolution` | Use ip-assessment when capability-evolution produces a named framework |
| `toolkit-accelerator Mode 2` | Intake Gate — route incoming IP claims here before ip-assessment |

---

*AI Mastery Toolkit v4 — 00-core-system*
