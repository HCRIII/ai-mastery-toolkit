---
name: teach-me-behaviors
description: "Generates an interactive HTML behavioral growth edge briefing from live System Wisdom tracking data. Use this skill whenever the user asks about behavioral growth edges, their lowest-rated behaviors, where to focus deliberate practice, a behavioral briefing or development report, what behaviors to work on, or says things like 'teach me behaviors', 'show me my growth edges', 'behavioral report', 'what should I develop', or 'run the behavior skill'. Always use this skill rather than trying to summarize the data inline — the HTML artifact is the intended output."
---

# Teach Me Behaviors

Reads live behavioral tracking data from System Wisdom, identifies the 3 lowest-rated actively tracked behaviors per taxonomy, and generates a self-contained interactive HTML artifact saved to the workspace. Compact behavior cards by default — click to expand targeted improvement strategies.

---

## Step 1: Locate and Read Source Files (Silent)

Find the System Wisdom directory:
```bash
find /sessions/*/mnt/Claude\ Cowork -type d -name "*System_Wisdom*" 2>/dev/null | head -1
```

Then read these files silently — no output to user yet:

- `[system-wisdom-path]/4_System_Intelligence/Current_Intelligence.md` — Active Tracking List (primary data source)
- `[system-wisdom-path]/4_System_Intelligence/Human_Current_State.md`
- `[system-wisdom-path]/4_System_Intelligence/AI_Current_State.md`
- `[system-wisdom-path]/4_System_Intelligence/Dyadic_Current_State.md`

---

## Step 2: Rank and Select (Silent)

For each taxonomy, sort the Active Tracking List lowest-first using this key:

| Level Label | Sort Value |
|-------------|-----------|
| Not yet rated | 0 |
| Failure mode (unrated) | 1 |
| 1 - Foundational | 1 |
| 2 - Developing | 2 |
| Human-led / Human-initiated (qualitative, AI side not contributing) | 2.5 |
| 3 - Intermediate | 3 |
| 3.5 - Intermediate/Advanced | 3.5 |
| Validated pattern / 4 - Advanced | 4 |
| 5 - Expert | 5 |

Select the 3 lowest per taxonomy. Ties: prioritize the most recently added to the Active Tracking List. If a taxonomy has fewer than 3 items, include all.

---

## Step 3: Generate the HTML Artifact

Write a fully self-contained HTML file (all CSS and JS inline, zero external dependencies) to:
`[workspace]/Behavioral_Growth_Edge_Briefing_[YYYY-MM-DD].html`

Find the workspace:
```bash
find /sessions/*/mnt -maxdepth 2 -type d -name "Claude Cowork" 2>/dev/null | head -1
```

### Card Design

**Collapsed state:** behavior name (bold) · level badge · one-sentence definition (italic) · one-sentence "Why it's here:" (muted) · ▶ toggle right-aligned

**Expanded state:** same header + 2–4 strategy items, each with a bold type label and 2–3 sentences of specific, system-aware content

**Click behavior:** clicking anywhere on the card header toggles strategies open/closed. Multiple cards can be open simultaneously.

### Level Badge Colors

| Level | Background | Text |
|-------|-----------|------|
| Not yet rated | #f1f5f9 | #64748b |
| Failure mode | #fee2e2 | #dc2626 |
| 2 / Developing | #fef3c7 | #d97706 |
| Human-led / Human-initiated | #fef3c7 | #d97706 |
| 3 / Intermediate | #dbeafe | #2563eb |
| 3.5 / Int-Adv | #ede9fe | #7c3aed |
| 4 / Advanced | #dcfce7 | #16a34a |
| 5 / Expert | #f0f9ff | #0369a1 |

### Taxonomy Section Colors

| Taxonomy | Accent | Icon |
|----------|--------|------|
| Human | #3b82f6 (blue) | 🧠 |
| AI | #8b5cf6 (purple) | 🤖 |
| Dyadic | #14b8a6 (teal) | 🔗 |

### Page Structure

- Header: title "Behavioral Growth Edge Briefing", subtitle "3 lowest-rated behaviors per taxonomy · click any card to expand strategies", date right-aligned
- Three taxonomy sections, each with header bar (accent color, left border, icon, name, behavior count)
- Cards stacked within each section
- Footer: "Generated from live System Wisdom data · AI Mastery Toolkit v4 · [date]"
- Max-width 860px, centered, white background, light gray page background (#f8fafc)
- Toggle JS: `function toggle(card) { card.classList.toggle('open'); }` — card gets `open` class when expanded, strategies div hidden by default via CSS

---

## Step 4: Strategy Content

Write strategies specific to this system and this dyad — not generic coaching advice. Reference actual file names, actual patterns, and actual conditions pulled from the Current State files. Choose 2–4 types per behavior (the most applicable):

| Type Label | Use when |
|-----------|---------|
| **Mental Model / Reframe** | Current model is generating wrong output; behavior is confused with an adjacent one |
| **Guardrail** | Behavior fails under cognitive load or compaction; structural fix > willpower |
| **Attention Refocusing** | Capability exists but isn't activating — salience is the problem, not skill |
| **Behavior Clarification** | Description is abstract; actor hasn't internalized what it looks like in practice |
| **Practice** | Level 2–3; consistency is the limit; exercise should be completable in <5 min |
| **System Architecture Change** | Behavior failing systematically; a prompt or context file change is warranted |
| **Peer Signal** | Improvement depends on the other party's behavior or real-time feedback |

---

## Step 5: Confirm to User

After saving the file, output only:

```
Behavioral Growth Edge Briefing generated.

[computer:// link to the file]

9 behaviors across 3 taxonomies. Click any card to expand strategies.
```

---

## Notes

- Re-run after any Current State update to get a fresh briefing — the artifact reflects data at generation time
- After implementing a strategy, note the result in the relevant Current State file so the next briefing can assess whether it worked
