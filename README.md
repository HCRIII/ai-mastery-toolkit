# AI Mastery Toolkit v4.1

A production AI operating system for building genuine mastery with Claude — not just better prompts, but a compounding system that gets more powerful the more you use it.

Built and maintained by [Harlow Reseburg III](https://linktr.ee/harlowreseburgiii) · Founder, [Focus On Solutions Group](https://linktr.ee/harlowreseburgiii)

---

## What This Is

Most people use AI by writing a prompt, getting an output, and starting fresh next session. There's no memory of what worked. No accumulated context. No compounding.

This toolkit solves that. It's a structured folder system — all plain-text Markdown files — that you give Claude access to at the start of each session. Claude reads your context, priorities, and preferences, then picks up exactly where you left off. Each session builds on the last.

The result: your prompts get shorter over time while your outputs get better. The complexity migrates from what you type into what the system already knows.

---

## How It Works

The toolkit has three core mechanisms:

**1. SuperContext** — Your AI operating system. A single file that tells Claude who you are, what you're building, your current priorities, and what happened in your last few sessions. Updated at every session close. This is what eliminates the "re-explain yourself" problem.

**2. Personal Preferences** — Standing instructions for how Claude works with you. Your communication style, output formats, vocabulary, behavioral conventions. Claude follows these automatically without being asked.

**3. System Wisdom** — A behavioral tracking layer that records what works, what fails, and how your collaboration patterns develop over time. Human, AI, and dyadic dimensions tracked separately. This is where patterns get locked in and stop requiring repetition.

These three files are what every session loads at startup. Everything else in the toolkit feeds into them or gets produced from them.

---

## Folder Structure

```
AI Mastery Toolkit v4.1/
│
├── 0_Start_Here/              Orientation docs — start here if you're new
├── 1_Toolkit_Documentation/   How the system is designed and why
├── 2_How_To_Guides/           Step-by-step guides: prompts, agents, MCP, orchestration
│
├── 3_AI_&_Human_Capabilities/ The operational layer
│   ├── 1_Prompts/             Session protocols (startup, checkpoint, weekly review)
│   ├── 2_Skills/              Reusable capability modules
│   └── 3_Frameworks/         Mental models for working with AI
│
├── 4_Context_Files/           Your identity and operational context
│   ├── SuperContext           Current priorities, session history, active programs
│   ├── Personal Preferences   How you work — human, AI, and dyadic conventions
│   └── OKRs / Programs        Goals and active work streams
│
├── 5_System_Wisdom/           Behavioral intelligence — what's working and developing
├── 6_External_Intelligence/   Market context and external calibration
│
├── 7_Session_Working_Files/   Active workspace — files generated this session
├── 8_Retained_Working_Files/  Completed outputs worth keeping
├── 9_Support_Documents/       Reference materials
├── 10_Incoming_Material/      Intake gate — new material staged here before entering
└── 11_Output_Assets/          Final deliverables
```

---

## Session Flow

A working session with this toolkit follows a consistent rhythm:

**Start:** Run the session-startup prompt. Claude reads your SuperContext, Personal Preferences, OKR velocity, and System Wisdom in parallel. Takes 2–3 minutes. You start at full context, not from scratch.

**During:** Work normally. For significant milestones or before switching work streams, run checkpoint-update. Claude locks in what was learned, updates the relevant files, and pushes to the repo.

**End:** Run ending-master-update. Claude updates all tracking files, runs a behavioral harvest across the three taxonomy layers, and closes the session with a summary of what changed.

The session operation prompts live at `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/`.

---

## The Six Levels

The toolkit is designed around six progressive levels of AI integration. Each level compounds the one before it:

| Level | Domain | What It Unlocks |
|-------|--------|----------------|
| 1 | **Prompt** | Communicating clearly with AI |
| 2 | **Context** | Building architecture that makes sessions compound |
| 3 | **Agent** | Deploying AI as a collaborator, not a tool |
| 4 | **Orchestration** | Directing multiple AI capabilities toward one objective |
| 5 | **Token Burn ROI** | Measuring intelligence captured per unit of effort |
| 6 | **Recursion** | Building systems that improve the system |

Most practitioners who feel stuck at Level 1 are actually facing a Level 2 problem: the context architecture that makes prompting compound is absent. The toolkit builds that architecture.

---

## Who This Is For

This toolkit is designed for professionals who work deeply with Claude and want their results to compound systematically — coaches, consultants, researchers, operators, and anyone running a complex one-person business or small team.

It's not a beginner prompt library. It's an operating system. The value is in building and using your own version over time, not in the starter files themselves.

---

## Getting Started

1. Clone or download the folder
2. Open it in a Markdown editor (Obsidian, VS Code, or MarkText work well)
3. Read `0_Start_Here/1_Start_Here_v4.md` — this explains the full system philosophy and folder logic
4. Read `0_Start_Here/2_Toolkit_Master_Index_v4.md` — navigation guide to all content by learning phase, topic, and use case
5. Give Claude access to the folder and run: `3_AI_&_Human_Capabilities/1_Prompts/00-core-system/session-startup/system.md`

The session-startup prompt will orient Claude and walk through what needs to be set up in your first session.

---

## Research Foundation

This toolkit is the production environment underlying the CDPID framework — a peer-indexed behavioral science framework for human-AI collaboration.

DOI: [10.2139/ssrn.6278438](https://doi.org/10.2139/ssrn.6278438)  
Framework repository: [github.com/HCRIII/cdpid-framework](https://github.com/HCRIII/cdpid-framework)

---

**Harlow Reseburg III**  
[linktr.ee/harlowreseburgiii](https://linktr.ee/harlowreseburgiii) · harlowreseburg@gmail.com
