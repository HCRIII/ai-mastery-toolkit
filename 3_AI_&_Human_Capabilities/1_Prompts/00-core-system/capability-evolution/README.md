# capability-evolution

**Created:** 2026-02-25
**Last Updated:** 2026-02-25
**Purpose:** AI-driven system capability scan — identifies the highest-value addition in each of three categories (Operation, Skill, Framework), runs a design interview for selected items, and produces a persistent toolkit file for each
**Status:** Final
**Version:** 1.0

---

## Description

Applies AI training knowledge against the current system state to identify where the toolkit can grow next. Produces exactly three proposals — one Operation, one Skill, one Framework — each passing a three-test anti-bloat filter. Runs an AI-led design interview for any or all selected items. Every session ends with at least one new file in the toolkit.

## What It Does

1. **Load Inventory** — Reads all current Operations, Skills, and context architecture silently
2. **Build Capability Map** — Catalogs what exists across all three output types
3. **Gap Scan** — Applies training knowledge across six domains (PKM, AI collaboration, research methodology, business systems, cognitive science, productivity) to identify meaningful gaps
4. **Anti-Bloat Filter** — Three tests: one-sentence describability, natural reach, strategic alignment. One candidate per category survives.
5. **Present Three Proposals** — One Operation, one Skill, one Framework. Numbered. Conversational in thread.
6. **Design Interview** — AI-led. AI proposes what to build, how it works, and where it lives. User confirms intent and fit. Applied Frameworks may produce multiple files.
7. **Build Files** — Creates the selected output(s). Session not complete until at least one file exists.

## When to Use

- Ad-hoc, when you want to identify and build the next highest-value toolkit capability
- After completing a major sprint or project, when you have time to invest in system development
- When the system feels like it's missing something but you can't name it

## What You'll See

Three numbered proposals presented conversationally. Each has a category label (Operation / Skill / Framework), a name, one sentence on what it is, and one sentence on when you'd reach for it. Select any or all. AI leads the design interview and builds the file.

## Output Types

- **Operations** — invocable procedures you run by name. File: `system.md` in a new `00-core-system/[name]/` folder
- **Skills** — capability-loaders for specific output types. Two files: installed location + portability copy in `3_AI_&_Human_Capabilities/3_Skills/[name]/`
- **Frameworks** — conceptual structures. Two subtypes:
  - *Conceptual-only*: a mental model or lens. One document.
  - *Applied*: conceptual structure + operational procedures. May produce a framework document AND an Operation or Workflow.

## Tags

`capability-building` `system-evolution` `operations` `skills` `frameworks` `anti-bloat`
