# Visual Design Sub-Workflow

**Created:** 2026-02-22
**Last Updated:** 2026-02-22
**Purpose:** Conditional design specification protocol for projects with visual/UI components
**Status:** Final

---

## Overview

This sub-workflow activates when Phase 0 Project Definition identifies visual or UI components in the project. It runs **between Phase 0 and Phase 1** — or as a dedicated design phase after Phase 3 Interview Refinement — depending on project type.

Without a design specification step, visual projects enter Phase 4 parallel production with undefined aesthetics, layout, and component behavior. This produces generic outputs that require expensive visual rework. The visual design sub-workflow prevents this by defining the visual identity once, documented precisely, before a single asset is produced.

**This sub-workflow does not replace Phase 2 spec creation.** It complements it. The Phase 2 spec covers what the product does. The visual design sub-workflow covers what the product looks like and how it feels.

---

## When It Activates

Activate this sub-workflow when Phase 0 project-overview.md identifies any of the following:

- Website, landing page, or web application
- Course platform UI (Moodle theme, member portal, etc.)
- Lead magnet with designed PDF or visual layout
- Branded templates (slide decks, document templates, social graphics)
- Community or coaching platform with visual identity requirements
- Any deliverable where visual design is a primary quality dimension

**It does NOT activate for:**
- Pure text/content projects (written course modules, email sequences, research documents)
- Projects where brand guidelines fully govern all visual decisions
- Quick production runs with an established visual identity already in place

**If in doubt:** Ask. "Does this project require original visual design decisions, or does it follow an established design system?" If the latter, reference the design system and skip this sub-workflow.

---

## The Four Steps

### Step 1: Design Token Specification

Define the visual vocabulary the project uses. This is a one-time decision per project (or per brand context). Once set, all Phase 4 production references these tokens.

**What design tokens define:**
- **Primary color** — dominant brand color (buttons, links, key accents)
- **Secondary color** — supporting color (tags, highlights, secondary elements)
- **Neutral palette** — backgrounds, text, borders, dividers
- **Heading typography** — the font for headers, titles, display text
- **Body typography** — the font for paragraph text, UI labels, captions
- **Spacing scale** — padding, margin, gap conventions (if UI/web)
- **Border radius** — sharp, slight, or rounded

**Process:**
1. Load Phase 0 project-overview.md — read the identity statement and audience description
2. Reference brand guidelines (Context Files D1_Strategic_Foundation/01_Brand_Guidelines_CX1.md) — these govern unless overridden
3. Present 2-3 color direction options with rationale tied to the project's purpose and audience
4. Present typography pairings with rationale
5. Human selects or adjusts
6. Write `design-tokens.md` immediately

**Output: design-tokens.md**

```markdown
# Design Tokens: [Project Name]

**Created:** YYYY-MM-DD
**Status:** Approved

---

## Color System

| Role | Color Name | Hex | Usage |
|------|-----------|-----|-------|
| Primary | [Name] | #XXXXXX | Buttons, links, key accents |
| Secondary | [Name] | #XXXXXX | Tags, highlights, supporting elements |
| Neutral Dark | [Name] | #XXXXXX | Primary text, dark backgrounds |
| Neutral Mid | [Name] | #XXXXXX | Secondary text, borders |
| Neutral Light | [Name] | #XXXXXX | Backgrounds, dividers |

**Rationale:** [Why this palette for this project and audience]

---

## Typography

| Role | Font | Weight | Size Range | Usage |
|------|------|--------|-----------|-------|
| Display/H1 | [Font Name] | [Weight] | [Range] | Hero headlines |
| Heading/H2-H3 | [Font Name] | [Weight] | [Range] | Section headers |
| Body | [Font Name] | [Weight] | [Range] | Paragraphs, UI text |
| Accent | [Font Name] | [Weight] | [Range] | Callouts, labels, if applicable |

**Rationale:** [Why this pairing — personality, contrast, alignment with brand]

---

## Spacing & Structure

- **Base unit:** [4px or 8px grid]
- **Border radius:** [None / Slight (4px) / Moderate (8px) / Rounded (16px+)]
- **Shadow style:** [None / Soft / Elevated / Dramatic]

---

## Aesthetic Direction

**One-sentence aesthetic statement:** [What this project's visual identity IS.
Not a mood board description — a sharp directive. Example: "Structured and
authoritative, like a premium business publication — not a tech startup."]

**What we're explicitly avoiding:**
- [Generic aesthetic trap 1 — be specific]
- [Generic aesthetic trap 2 — be specific]

---

## Source References

- Brand Guidelines: [Context Files path]
- Project Overview: [0-project-definition/project-overview.md]
- Approved: [Human name, date]
```

---

### Step 2: Layout & Shell Specification

Define the persistent structure that wraps all screens or sections of the project. For a web UI this is the application shell (navigation, header, footer). For a document or slide deck this is the master layout (page structure, header/footer zones, content regions).

**What the shell specification defines:**
- Primary navigation pattern and location
- Content regions and their proportions
- Persistent UI elements (header, footer, sidebar if applicable)
- Responsive behavior (how structure adapts at different breakpoints)
- Empty/loading states for structural zones

**Process:**
1. Reference Phase 0 project-roadmap.md — the components become navigation items
2. Present 2-3 layout pattern options with rationale (sidebar / top nav / minimal)
3. Sketch the primary layout in ASCII or described zones
4. Define responsive behavior
5. Human confirms or adjusts
6. Write `layout-spec.md` immediately

**Output: layout-spec.md**

```markdown
# Layout & Shell Specification: [Project Name]

**Created:** YYYY-MM-DD
**Status:** Approved

---

## Layout Pattern

**Choice:** [Sidebar / Top Nav / Minimal / Document / Other]
**Rationale:** [Why this pattern fits the project and its users]

---

## Structure Map

```
[ASCII or described layout]

Example for sidebar app:
┌─────────────────────────────────────────────────┐
│  Header: Logo + User Menu                        │
├──────────────┬──────────────────────────────────┤
│              │                                  │
│  Navigation  │  Main Content Area               │
│  (240px)     │  (fluid)                        │
│              │                                  │
│  Nav Items:  │                                  │
│  - [Item 1]  │                                  │
│  - [Item 2]  │                                  │
│  - [Item 3]  │                                  │
│              │                                  │
└──────────────┴──────────────────────────────────┘
```

---

## Navigation

| Item | Links To | Display Condition |
|------|---------|------------------|
| [Nav item] | [Section/page] | [Always / Logged in / etc.] |
| [Nav item] | [Section/page] | [Condition] |

---

## Persistent Elements

- **Header:** [Contents, height, behavior on scroll]
- **Footer:** [Contents, when shown]
- **Sidebar/Nav:** [Width, collapsible behavior, mobile handling]

---

## Responsive Behavior

| Breakpoint | Layout Change |
|-----------|--------------|
| Mobile (<768px) | [What changes] |
| Tablet (768-1024px) | [What changes] |
| Desktop (>1024px) | [Full layout as specified above] |

---

## Applied Tokens

- Primary color used for: [specific elements]
- Typography applied: [heading font to navigation items, body font to content, etc.]
- Spacing: [base unit applied to navigation gaps, content padding, etc.]
```

---

### Step 3: Section / Screen Specifications

For each major section identified in Phase 0 project-roadmap.md, define:
- The user's goal in this section
- The information displayed and its hierarchy
- The interactions available
- The UI patterns used (list, card, form, table, etc.)
- Edge cases and empty states

This step runs once per section. For large projects, sections can be specified in parallel using Task agents.

**Output per section: [section-name]-spec.md**

```markdown
# Section Specification: [Section Name]

**Project:** [Project Name]
**Created:** YYYY-MM-DD
**Status:** Approved

---

## User Goal

[What does the user come here to do? One clear sentence.
"The user comes here to [action] so they can [outcome]."]

---

## Information Architecture

**Primary content:** [The most important thing on this screen]
**Secondary content:** [Supporting information]
**Actions available:** [What the user can do — buttons, links, forms]
**Navigation:** [How they arrived and where they can go next]

---

## UI Patterns

| Element | Pattern | Notes |
|---------|---------|-------|
| [Element] | [List / Card / Table / Form / etc.] | [Specific behavior] |
| [Element] | [Pattern] | [Notes] |

---

## Content Hierarchy

```
[Section Name]
├── [Primary element — what draws the eye first]
│   ├── [Detail 1]
│   └── [Detail 2]
├── [Secondary element]
└── [Supporting element or action]
```

---

## States

| State | What the User Sees |
|-------|-------------------|
| Loading | [Description] |
| Empty | [Description — what shows when there's no content yet] |
| Error | [Description — what shows when something fails] |
| Success | [Description — confirmation of completed action] |
| Full/Normal | [The primary experience described above] |

---

## Applied Tokens

- [How primary color is used in this section]
- [Typography roles]
- [Spacing applied]
- [Any section-specific design decisions]

---

## What This Section Is NOT

[Explicit scope boundary — prevents scope creep into adjacent sections]
```

---

### Step 4: Visual QC Checklist

Before moving to Phase 4 production, verify the visual design spec is complete and coherent.

```
VISUAL DESIGN QC CHECKLIST

DESIGN TOKENS
[ ] Color palette is defined with hex values and usage rules
[ ] Typography is defined with font names, weights, and roles
[ ] Aesthetic direction is stated in one sharp sentence
[ ] What we're avoiding is explicit (prevents generic output)
[ ] Tokens are grounded in brand guidelines or explicitly override them with rationale

LAYOUT & SHELL
[ ] Layout pattern is chosen with rationale
[ ] All navigation items correspond to Phase 0 roadmap components
[ ] Responsive behavior is defined for mobile, tablet, desktop
[ ] Persistent elements (header, footer, nav) are fully specified

SECTION SPECIFICATIONS
[ ] Every component from Phase 0 roadmap has a section spec
[ ] Each section spec states the user's goal in one clear sentence
[ ] UI patterns are specified (not just described generally)
[ ] All four states defined: loading, empty, error, success/normal
[ ] Scope boundaries (non-goals) are explicit per section

INTEGRATION
[ ] All section specs reference the same design tokens
[ ] Layout spec and section specs are consistent
[ ] Section specs are consistent with Phase 2 shape.md
[ ] Visual design files stored in spec/visuals/ alongside Phase 2 spec

PRODUCTION READINESS
[ ] Phase 4 parallel production can proceed from these specs alone
[ ] No design decisions are deferred to production time
[ ] A different AI agent could produce this project from these specs without visual ambiguity
```

---

## File Location

Visual design sub-workflow artifacts live alongside the Phase 2 spec:

```
specs/YYYY-MM-DD-HHMM-{project-name}/
  plan.md
  shape.md
  standards.md
  references.md
  success-criteria.md
  production-queue.md
  design/                          ← visual design sub-workflow outputs
      design-tokens.md
      layout-spec.md
      sections/
          [section-name]-spec.md   ← one per section
  visuals/
      [reference screenshots, mockups, etc.]
```

---

## Integration with Phase 4

When Phase 4 parallel production begins, agents receive:
- Phase 2 spec files (what to build)
- Visual design sub-workflow files (what it looks like)
- Standards files (how to write and format)

Design tokens and section specs are injected into agent context using the same standards injection pattern described in `08_standards-integration.md`. An agent producing a course landing page should have `design-tokens.md` and `homepage-spec.md` in context alongside `standards.md` — not just the content spec.

---

## Prompt Pattern: Starting Visual Design Sub-Workflow

```
Phase 0 Project Definition is complete. This project includes visual/UI components
that require a design specification before production.

Let's run the Visual Design Sub-Workflow.

Project overview: [path to project-overview.md]
Project roadmap: [path to project-roadmap.md]
Brand guidelines: [Context Files path]

Step 1 first: Ask me about design token preferences for this project.
Present color and typography options with rationale tied to the project's
purpose and audience. After I choose, write design-tokens.md immediately.
```
