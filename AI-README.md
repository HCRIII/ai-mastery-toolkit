# AI Mastery Toolkit v4 — AI Entry Point

**Created:** 2026-03-07
**Last Updated:** 2026-03-07
**Purpose:** First file an AI reads when encountering this toolkit. Routes to session-startup before any other action. Provides full navigation map for all core session prompts.

---

## STOP — EXECUTE SESSION-STARTUP BEFORE ANYTHING ELSE

If you are an AI that has just been given access to this toolkit folder, do not proceed with any user task until you have fully executed the session-startup protocol.

**Session-startup prompt:**
```
3_AI_&_Human_Capabilities/1_Prompts/00-core-system/session-startup/system.md
```

**How to execute:**

1. Read that file completely before taking any other action
2. Execute Steps 0 through 5 in the exact sequence the prompt specifies
3. Do not skip steps
4. Do not execute from memory or from prior session context — the prompt file is the authoritative source
5. Do not output anything to the user until Step 4 as the prompt instructs

This is not optional. The session-startup protocol loads the full operational context — preferences, SuperContext, System Wisdom, OKR velocity — that makes all toolkit work coherent and compounding. Without it, you are operating without context and your outputs will degrade the system.

**If you have already executed session-startup this session, proceed normally.**

---

## Core Session Prompts — Full Reference

All prompts live under:
```
3_AI_&_Human_Capabilities/1_Prompts/00-core-system/
```

Each prompt is a folder containing `system.md` (the executable prompt) and `README.md` (description and usage guidance). Read `system.md` to execute; read `README.md` to understand when and why.

The authoritative full list with descriptions is at:
```
3_AI_&_Human_Capabilities/1_Prompts/00-core-system/_README.md
```

### Beginning — Session Initialization

| Prompt | Path | When to Use |
|--------|------|-------------|
| `session-startup` | `session-startup/system.md` | **Start of every session — mandatory first action** |
| `daily-briefing` | `daily-briefing/system.md` | After session-startup, to get OKR velocity, PIE priorities, and capacity check |
| `beginning-document-review-and-implementation` | `beginning-document-review-and-implementation/system.md` | When session starts with reviewing and implementing from existing documents |

### Mid-Session — Active Work Support

| Prompt | Path | When to Use |
|--------|------|-------------|
| `checkpoint-update` | `checkpoint-update/system.md` | After a major deliverable, before switching work streams, when you say "lock this in" |
| `context-usage` | `context-usage/system.md` | Quick check of current token usage — run anytime |
| `mid-iterate-on-output` | `mid-iterate-on-output/system.md` | Refine and improve a just-generated output |
| `mid-challenge-my-thinking` | `mid-challenge-my-thinking/system.md` | Request critical evaluation of current approach |
| `mid-reusable-asset-creation` | `mid-reusable-asset-creation/system.md` | Extract reusable components from work in progress |
| `mid-system-change-with-rationale` | `mid-system-change-with-rationale/system.md` | Document a system change with reasoning before implementing |
| `responding-to-user-corrections` | `responding-to-user-corrections/system.md` | Behavioral pattern when user says approach is too complicated |

### Ending — Session Close

| Prompt | Path | When to Use |
|--------|------|-------------|
| `daily-debriefing` | `daily-debriefing/system.md` | **First action at session end — coaching feedback and observations** |
| `ending-master-update` | `ending-master-update/system.md` | After daily-debriefing — updates all tracking systems, harvests System Wisdom |
| `context-window-handoff` | `context-window-handoff/system.md` | When approaching 80–90% token capacity — transfers state to new context |
| `pre-compaction-warning` | `pre-compaction-warning/system.md` | Triggered automatically at 80–90% tokens — offers checkpoint before compaction |
| `post-compaction-refresh` | `post-compaction-refresh/system.md` | After any context compaction event — run before any user task |

### Periodic & As-Needed

| Prompt | Path | When to Use |
|--------|------|-------------|
| `weekly-review` | `weekly-review/system.md` | Fridays or Sundays — strategic review and pattern extraction |
| `okr-builder` | `okr-builder/system.md` | Annual / quarterly build, or Mode 3/4 for alignment checks |
| `assess-hvna` | `assess-hvna/system.md` | Evaluate a queued high-value next action from SC_Layer 6 IHVNA list |
| `ip-assessment` | `ip-assessment/system.md` | Assess uniqueness and refinement roadmap for a candidate IP item |
| `capability-evolution` | `capability-evolution/system.md` | Design or extend a toolkit capability |
| `toolkit-accelerator` | `toolkit-accelerator/system.md` | Intake gate assessment, compliance audit, or compounding velocity check |

### Session Lifecycle at a Glance

```
SESSION START         →  session-startup  (mandatory)
                      →  daily-briefing   (recommended)

DURING SESSION        →  checkpoint-update       (after each major milestone)
                      →  mid-iterate-on-output   (refine outputs)
                      →  mid-challenge-my-thinking  (stress-test approach)
                      →  context-usage           (token check anytime)

SESSION END           →  daily-debriefing        (first — always)
                      →  ending-master-update    (second — always)

CONTEXT PRESSURE      →  context-window-handoff  (80–90% tokens)
                      →  post-compaction-refresh (after any compaction)

WEEKLY               →  weekly-review         (Friday or Sunday)
```

---

## Toolkit Structure

| Folder | Contents |
|--------|----------|
| `0_Start_Here/` | Human-facing overview, master index, glossary |
| `1_Toolkit_Documentation/` | System design docs, templates, user guides |
| `2_How_To_Guides/` | Step-by-step guides for toolkit operations |
| `3_AI_&_Human_Capabilities/` | Prompts, frameworks, workflows, specifications, automations |
| `4_Context_Files/` | All operational context: preferences, SuperContext, strategy docs, offering specs |
| `5_System_Wisdom/` | Behavioral baselines, triggers, taxonomies, applied knowledge |
| `6_External_Intelligence/` | EIS: market signals, competitive intel, timing data |
| `7_Session_Working_Files/` | Working files generated during sessions |
| `8_Retained_Working_Files/` | Retained session outputs worth preserving |
| `9_Support_Documents/` | Reference materials and support resources |
| `10_Incoming_Material/` | Staging folder — all incoming material routes through here |
| `11_Output_Assets/` | Final deliverables and external-facing outputs |

**Incoming material policy:** Any new material the user brings into the toolkit goes through `10_Incoming_Material/` staging first. Do not insert material directly into toolkit folders without intake gate assessment. Flag it if you observe the user bypassing this step.
