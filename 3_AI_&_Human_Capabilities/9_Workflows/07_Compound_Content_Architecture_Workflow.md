# 07_Compound_Content_Architecture
## Workflow Document

**Created:** 2026-02-27
**Author:** [User] "[User]" [Framework Author] III + Claude
**Purpose:** Execute the pre-production sequence and production session for a content initiative — ensuring context is fully loaded and the initiative vector is defined before any asset is produced.
**Status:** Final
**Version:** v1
**Framework document:** `07_Compound_Content_Architecture_Framework.md`

---

## Workflow Overview

This workflow governs a content-vector production session from pre-production through asset routing. The pre-production sequence (Steps 1–3) is where most content sessions fail — assets get produced without a defined initiative vector or without the right context loaded. This workflow makes the pre-production sequence explicit and mandatory. Production (Step 4) runs only when pre-production is complete.

**Who runs it:** Human defines the initiative vector and confirms context is loaded; AI executes asset production.

**When it triggers:** When a strategic initiative is active in the OKR structure and a content deployment cycle is warranted. The initiative must have an OKR address — content-vector is a strategic deployment tool, not an ad hoc content production tool.

---

## Inputs Required

**Initiative definition (before session begins):**
- Initiative name
- Target audience (ICP profile name or description)
- Objective (what behavior or awareness change does this content drive?)
- OKR address (which active KR does this initiative serve?)

**Context files to load:**
- Brand guidelines
- Key message platform
- ICP profile(s) for the target audience
- Channel guidelines for each channel in the asset set
- Any existing assets for this initiative (for consistency)

---

## Step Sequence

### Pre-Production (Steps 1–3) — Required Before Production Begins

**Step 1 — Define the Initiative Vector**

Before producing any asset, name the four elements of the initiative vector:
1. **Initiative:** What is being deployed? (e.g., "Toolkit v4 Launch", "IP Assessment Service Introduction")
2. **Audience:** Who is it for? Name the ICP profile(s).
3. **Objective:** What should the audience think, feel, or do after encountering this content?
4. **OKR address:** Which active KR does this initiative serve? Name it explicitly.

If any of the four elements cannot be named, stop. The initiative is not sufficiently defined for a production session. Define it before proceeding.

Gate: Production does not begin without all four elements of the initiative vector named and confirmed.

---

**Step 2 — Map the Full Asset Set Top-Down**

Map from initiative → content types → individual assets × channels. Do not start at the individual asset level.

Top-down mapping sequence:
1. What content types serve this initiative? (e.g., educational, social proof, direct offer, thought leadership)
2. For each content type: what specific assets will be produced? (e.g., long-form article, LinkedIn post series, email sequence, workshop outline)
3. For each asset: which channel(s) will it appear on? (e.g., LinkedIn, email list, website, workshop)

The result is a full asset map for the initiative — every asset defined before any asset is produced.

Gate: Do not begin production without the full asset map. Producing assets sequentially without the full map results in inconsistent messaging and missed channel coverage.

---

**Step 3 — Confirm Context is Loaded**

Before running `content-vector`, confirm the following are in the active context:
- Brand guidelines (voice, tone, visual language)
- Key message platform (core messages for this initiative or ICP)
- ICP profile(s) for the target audience
- Channel guideline(s) for each channel in the asset map
- Any existing assets for this initiative (for reference and consistency)

Load any missing context files before proceeding. Do not begin production with incomplete context — assets produced without brand or ICP context require revision that would not have been needed if the context was present.

Gate: All required context files confirmed loaded.

---

### Production (Step 4)

**Step 4 — Run `content-vector`**

With the initiative vector defined, the full asset map confirmed, and all context loaded, run `content-vector`.

Produce all assets in the map in a single session. The compound content architecture principle: one production session covers the full asset set for the initiative. This produces messaging consistency across channels and eliminates the drift that occurs when assets are produced session-by-session over time.

Asset production sequence within the session:
1. Produce the primary/flagship asset first (typically the most detailed, long-form asset that establishes the full message)
2. Produce secondary assets derived from or complementary to the primary
3. Produce channel-adapted versions of key messages for each channel in the map

Each asset is reviewed against the initiative vector and brand guidelines before it is finalized.

---

### Post-Production (Step 5)

**Step 5 — Route Outputs**

After all assets are produced, route each to its correct location:
1. Save each asset to its correct Level 6 project folder
2. Update the asset index for the initiative
3. Note the initiative's content cycle as complete in SuperContext (or flag as partially complete if the session produced only a subset of the full asset map)

If the full asset map was not completed in one session, document what remains and schedule the completion session before closing.

---

## Output + Destination

| Asset Type | Destination |
|------------|-------------|
| Flagship / long-form asset | Level 6 project folder for this initiative |
| Social media assets | Level 6 project folder, social subfolder |
| Email assets | Level 6 project folder, email subfolder |
| Presentation / workshop assets | Level 6 project folder, workshop subfolder |
| Asset index update | Level 6 project folder, asset-index file |

---

## Pre-Production Failure Mode Reference

| Skipped pre-production step | What breaks |
|-----------------------------|-------------|
| Initiative vector not defined | Assets are produced without a consistent strategic purpose; messaging is diffuse |
| Asset map not built top-down | Channel coverage is incomplete; assets are produced in isolation rather than as a coordinated set |
| Context not fully loaded | Brand inconsistency; ICP misalignment; channel-inappropriate format or tone; revision required post-production |

---

## Framework Document

The conceptual Compound Content Architecture — the top-down production model, why consistency requires a single production session, and the role of content-vector in the strategic chain — lives in:

**`07_Compound_Content_Architecture_Framework.md`** → `3_AI_&_Human_Capabilities/7_Frameworks/`
