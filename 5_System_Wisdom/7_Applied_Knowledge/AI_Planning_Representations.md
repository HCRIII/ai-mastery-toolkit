# AI Planning Representations — Replacing Timelines with Reality-Grounded Structures

**Created:** 2026-03-07
**Last Updated:** 2026-03-07
**Purpose:** Applied knowledge on why AI-generated timelines are structurally invalid and what to use instead. Governs how planning output is requested and evaluated in this system.
**Status:** Active
**Source:** Transformed from Perplexity research synthesis (2026-03-07 intake gate) + [User]'s root cause clarification
**Related failure mode:** Structural Estimation Blindness — `5_System_Wisdom/4_System_Intelligence/AI_Current_State.md`

---

## The Root Cause

**AI cannot tell time.** This is not a calibration problem — it is a structural one. An AI has no access to a real-time clock, no intrinsic sense of wall-clock duration, and no capacity to model how work actually unfolds across a human day, week, or project. When an AI generates a timeline, it is producing a pattern that *looks like* a timeline based on training data — not a calculation grounded in any actual measurement of time.

This means: **no AI-generated timeline has any foundation in reality.** Not approximately. Not with caveats. The representation type itself is invalid for AI output. A timeline produced by an AI is structured fiction — it consumes tokens, appears authoritative, and provides zero planning value.

The implication for this system: timeline requests directed at AI are always the wrong request. The correct request produces a different output type.

---

## What to Use Instead: Readiness-Weighted Dependency Graph with Effort Bands

The goal of a planning representation is not to show when things will happen (AI cannot know this) — it is to show what must happen, in what order, with what dependencies and effort profile, so the human can layer real capacity constraints on top.

### The Four Components

**1. Stages with outcome descriptions**
Each stage is defined by what is true when it is complete — not by a date or duration. This grounds the plan in deliverables, not time.

**2. Tasks as dependency nodes (not calendar entries)**
Each task specifies:
- What it depends on (prior tasks or conditions)
- Prerequisites (non-task conditions: access to data, a decision being made, a tool being configured)
- Readiness score (0–5): how ready is the system/person/context to execute this task right now?
- Effort band (XS/S/M/L/XL): a *range*, not a point estimate — S = 0.5–1 focused hour, M = 2–4 focused hours, etc.
- Risk level (low/med/high) with reason
- Confidence % that the effort band is roughly correct

**3. Readiness overlay**
A separate coarse-grained profile for the system as a whole:
- Data readiness
- Tool/infrastructure readiness
- Skill/knowledge readiness
- Decision/governance readiness

This allows statements like: "Tasks T4 and T7 are blocked by low data readiness — do not schedule yet."

**4. Effort bands, not hours**
Effort bands are ranges calibrated to focused work (not elapsed time). They are honest about uncertainty. An AI can produce a reasonable effort band because it is assessing output complexity — not predicting wall-clock duration.

---

## How to Prompt for This Output

When planning work with AI, use these constraints explicitly:

- **Ban calendars:** "Do not generate dates, weeks, or months. Use effort bands and dependencies only."
- **Force structured output:** "Output stages and tasks with dependencies, readiness scores, effort bands, and risk levels."
- **Require explicit uncertainty:** "Every task must include: effort_band, confidence %, readiness_score, and risk_level."
- **Ask for self-critique:** "List the 3 tasks where your confidence is lowest and explain why."
- **Modulate detail by readiness:** High readiness → granular tasks. Low readiness → fewer exploratory tasks labeled as discovery.

---

## Division of Labor: AI vs. Human

| What AI produces | What human adds |
|---|---|
| Dependency structure | Real calendar constraints |
| Effort bands (complexity-based) | Actual capacity (hours/day available) |
| Readiness assessment | Ground truth on prerequisites |
| Risk identification | Priority judgment |
| Sequence logic | External deadlines and commitments |

The human takes the AI output and converts it to a reality-aware plan. The AI does not produce the final schedule — it produces the structure the human schedules against.

---

## Why Checklists Are Insufficient (And How to Upgrade Them)

Plain checklists are flat: no dependencies, no effort, no uncertainty. The feeling that checklists are "too simple" is accurate — but the solution is not timelines, it is structured checklists:

- Add dependencies → becomes a dependency graph
- Add readiness scores and risk → becomes a planning surface
- Add effort bands and confidence → becomes estimatable

The upgrade: "Readiness-scored checklist with dependencies and effort bands" is a usable intermediate representation that AI can produce reliably.

---

## Application in This System

When [User] or AI needs to plan a multi-step project:
1. Request a dependency graph, not a timeline
2. Use effort bands for scope estimation (output-relative, not time-relative)
3. Human converts to calendar after AI produces the structure
4. Never ask AI "how long will this take?" — ask "what is the effort band and confidence for each task?"

This replaces the Structural Estimation Blindness failure mode with a structurally correct output type.
