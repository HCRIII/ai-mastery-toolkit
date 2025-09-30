# Prompting Guide

**Created:** 2026-02-08
**Last Updated:** 2026-02-08
**Purpose:** Complete guide to communicating effectively with AI across all skill levels
**Version:** v1.0
**Status:** Final
**Estimated Reading Time:** 34 minutes (~6,865 words)
**Difficulty:** Beginner
**Prerequisites:** None

---

## You Are Here

**Phase 1: Building Blocks → Prompts Guide → Foundations**

**Navigation:** [Start Here](../1_Toolkit_Documentation/1_Start_Here.md) → [How-To Guides](README.md) → Prompting Guide

---

## Table of Contents

1. [What is Prompting?](#what-is-prompting)
2. [Foundation: Mental Models for Understanding AI](#foundation-mental-models-for-understanding-ai)
3. [The Two-Axis Framework](#the-two-axis-framework)
4. [Five Levels of Zero-Context Prompting](#five-levels-of-zero-context-prompting)
5. [Structured Reasoning & Chain-Style Techniques](#structured-reasoning--chain-style-techniques)
6. [Output Improvement Techniques](#output-improvement-techniques)
7. [Beyond the Two Axes: The Full Yield Curve](#beyond-the-two-axes-the-full-yield-curve)
8. [Practical Application Framework](#practical-application-framework)
9. [Integration with the Toolkit](#integration-with-the-toolkit)
10. [Choosing the Right Technique](#choosing-the-right-technique)

---

## What is Prompting?

**Prompting is the art and science of communicating your intent to AI systems.**

At its simplest, a prompt is an instruction you give to an AI. At its most sophisticated, it's a multi-dimensional system that combines instruction design, context management, reasoning strategies, and verification mechanisms to achieve reliable, high-quality results.

**Why prompting matters:**
- It's the primary interface between human intent and AI capability
- Better prompts = better results without changing the underlying AI
- Prompting skills transfer across all AI tools (Claude, ChatGPT, Gemini, etc.)
- Good prompting compounds: better prompts → better outputs → better learning → even better prompts

**The Evolution of Your Prompting Journey:**
1. **Day 1:** "Summarize this" → you get something vague
2. **Week 1:** "Summarize this in 3 bullets focusing on action items" → much better
3. **Month 1:** You understand prompt types, context density, and when to use each
4. **Month 3:** You design reusable prompt systems that reliably solve business problems
5. **Mastery:** You intuitively combine techniques across multiple axes to solve complex challenges

This guide takes you through that entire journey.

---

## Foundation: Mental Models for Understanding AI

Before learning specific prompting techniques, you need accurate mental models for how AI actually works. These models shape how you think about prompting.

### Level 1: Transactional Models
**Best for:** Simple content creation, summarization, one-shot tasks
**Mindset:** AI as a utility—trigger it, get a result

#### Mental Model 1: Autocomplete on Steroids
**The Concept:** Your phone's predictive text, but instead of predicting the next letter, it predicts the next paragraph, essay, or code block based on billions of examples.

**Good for:** Understanding that AI doesn't "know" facts—it predicts the most likely next word. This explains why it can be fluent but factually incorrect (hallucinations).

**Implication for prompting:** Be specific about facts you need, provide context, verify outputs.

#### Mental Model 2: The Eager Intern
**The Concept:** Treat AI like a bright, enthusiastic junior intern. It works incredibly fast and has read every book in the library, but lacks life experience and judgment.

**Good for:** Reviewing work. You wouldn't send an intern's draft to a client without reading it first. This model enforces the habit of "Human-in-Loop" verification.

**Implication for prompting:** Always review, fact-check, and refine AI outputs before using them.

#### Mental Model 3: The Universal Translator
**The Concept:** Don't just think of languages (English to Spanish). Think of "formatting" as a language. You're translating "messy meeting notes" into "structured executive summary" or "Python code" into "plain English explanation."

**Good for:** Data transformation tasks. AI excels at changing the format of information without changing the meaning.

**Implication for prompting:** Frame transformation tasks as translation problems.

### Level 2: Collaborative Models
**Best for:** Problem solving, coding, creative iteration, refinement
**Mindset:** Interaction is a loop, not a one-way street

#### Mental Model 4: The Pair Programmer / Sparring Partner
**The Concept:** AI is a colleague sitting next to you. It might suggest a bad idea, but that bad idea prompts you to think of a good one. You bounce ideas back and forth to reach a solution neither of you would have found alone.

**Good for:** Overcoming "writer's block" or coding blocks. It shifts value from "the final output" to "the process of ideation."

**Implication for prompting:** Use iterative refinement, ask AI to critique its own work, explore multiple approaches.

#### Mental Model 5: The Infinite Library (Latent Space)
**The Concept:** Imagine a library containing every book ever written, *plus* every book that *could* be written. AI isn't creating from scratch—it's navigating to a specific coordinate in this library to find the book that matches your prompt.

**Good for:** Understanding "Prompt Engineering." Your prompt is the map coordinates. Vague coordinates land you in a generic section. Specific coordinates land you in a unique, high-value section.

**Implication for prompting:** Specificity, examples, and constraints narrow the search space to higher-quality outputs.

#### Mental Model 6: The "Stochastic Parrot" vs. The Reasoning Engine
**The Concept:** While Level 1 models say AI just mimics patterns (like a parrot), Level 2 acknowledges it can "reason" via patterns. If you ask it to solve a riddle, it isn't just copying text—it's applying logic patterns learned from millions of logic puzzles.

**Good for:** Complex queries. It encourages you to ask AI to "show its work" or "think step-by-step" (Chain of Thought), which drastically improves accuracy.

**Implication for prompting:** For complex tasks, explicitly request reasoning steps.

### Level 3: Agentic & System Models
**Best for:** Autonomous workflows, multi-step goals, enterprise integration
**Mindset:** AI takes action, makes plans, uses tools

#### Mental Model 7: The Orchestrator (The Conductor)
**The Concept:** AI is no longer the player of the instrument—it's the conductor. It listens to your request ("Plan a travel itinerary") and decides which instruments to play: calls a Search tool for flights, a Calculator for budget, a Calendar API to check dates, then synthesizes results.

**Good for:** Building AI apps (Agents). It helps you understand that AI needs access to external tools (APIs) to be truly useful in a business context.

**Implication for prompting:** Provide clear orchestration instructions, define tool usage, specify fallback behaviors.

#### Mental Model 8: The Probabilistic Simulator
**The Concept:** Instead of a database that retrieves exact records, view AI as a simulator of reality. If you ask it to "simulate a negotiation between a buyer and seller," it runs a simulation based on probable human behaviors.

**Good for:** Strategic planning and role-playing. Allows you to test scenarios (e.g., "How might a customer react to this email?") before they happen.

**Implication for prompting:** Use scenario prompts, ask for multiple outcomes, request confidence levels.

#### Mental Model 9: The Cognitive Architecture (Brain vs. Mind)
**The Concept:** The LLM (Large Language Model) is just the Broca's area (the part of the brain that produces speech). It's not the whole brain. To have a "mind," you need to wrap the LLM in other systems: Long-term Memory (database), Working Memory (context window), and Executive Function (planning prompts).

**Good for:** Developers and Architects. Clarifies that an LLM alone is insufficient for complex applications—you must build a "cognitive architecture" around it to give it memory and agency.

**Implication for prompting:** Design systems with persistent context, memory, and multi-step planning.

**Key Takeaway:** Your mental model shapes your prompting strategy. Start with Level 1 for simple tasks, Level 2 for collaborative work, and Level 3 for complex automation.

---

## The Two-Axis Framework

**The foundational framework for understanding prompt performance.**

Most people think prompting is one-dimensional: "Write a better prompt." In reality, there are two equally important axes that determine AI output quality.

### Axis 1: Prompt Design (Instruction Shape)
**This axis controls *how* you ask the model to act.**

**Key Components:**
- **Instruction specificity** — vague → precise
- **Template structure** — freeform → structured
- **Few-shot examples** — none → curated demos
- **Tone & persona** — neutral → defined role
- **Constraints** — loose → strict rules
- **Verification steps** — none → explicit checks

**Purpose:** Better prompt design increases clarity, reliability, formatting quality, and repeatability **without changing the system architecture**.

**Examples:**
- **Low design:** "Write about marketing"
- **High design:** "Act as a marketing strategist. Write a 300-word analysis of Instagram vs TikTok for handmade goods businesses. Use bullet points. Focus on organic reach and cost-per-impression."

### Axis 2: Context Density (How Much External State You Provide)
**This axis determines how much grounding, memory, or capability the model receives.**

**The Context Density Spectrum:**

1. **Zero-Context** — No memory, no external data. Self-contained prompt.
   - Example: "What are good marketing channels?"
   - AI invents generic advice from training data

2. **Few-Shot / In-Prompt Examples** — Small context boosts consistency.
   - Example: Show 2-3 example outputs, then ask for a new one
   - AI learns your specific style/format

3. **RAG / Document Inputs** — Retrieval of files, notes, policies.
   - Example: "Using these three customer reviews [attached], draft a response"
   - AI grounds responses in your actual data

4. **Long-Term Memory** — Persistent user/business context.
   - Example: AI remembers your brand voice, past projects, preferences
   - Personalized outputs that evolve over time

5. **Agents / Tooling** — Model fetches data, calls APIs, updates systems.
   - Example: "Check inventory, draft restock order, email supplier"
   - AI can take action, not just generate text

6. **Clones / Full-State Agents** — High-density automation with continuity and autonomy.
   - Example: AI assistant that manages your entire workflow
   - Maintains detailed state, acts autonomously within boundaries

**Purpose:** Higher density provides better accuracy, connection to real data, automation, and personalization.

### How the Axes Interact

The two axes are deeply interconnected:

**Low context density → prompts must contain everything**
- You need extremely detailed instructions
- Must include all relevant examples and constraints in the prompt itself
- Higher hallucination risk for facts not in training data

**High context density → prompts become orchestration instructions**
- You can write simpler prompts: "Draft reply using customer's last 3 messages"
- AI pulls from external context (memory, documents, tools)
- Prompts shift from "instruction + full context" → "instruction + hooks + quality checks"

**Increase density → reduce hallucinations, increase reliability**
- Grounding in external data = fewer invented "facts"
- But: increases engineering complexity and cost

**Example: Drafting a customer email**
- **Zero context:** Model invents details (customer name, order info, dates)
- **RAG:** Grounded in real order data, accurate tracking info
- **Agent:** Fetches order status + sends email automatically

**Think of prompting as a 2D space:**
- **X-axis:** Prompt Design (simple → complex templates)
- **Y-axis:** Context Density (zero → clones)
- Move along both axes simultaneously to improve results

**Practical Tuning:**
- Need accuracy? → Add retrieval + lower temperature
- Need automation? → Use agents + clear task steps
- Need personalization? → Use memory
- Need consistency? → Add structure + examples
- Need creativity? → Raise temperature + reduce constraints

**Key Takeaway:** Prompting performance improves by adjusting **both axes at once**. Better design makes instructions clearer. More context density makes the model smarter, more accurate, and more capable.

---

## Five Levels of Zero-Context Prompting

**The complete prompt type taxonomy: 35 techniques organized by complexity.**

This framework teaches you the full spectrum of prompting without using memory, agents, or persona cloning. These are "zero-context" techniques—everything the AI needs is in the prompt itself.

*Note: Each level builds on the previous. Master Level 1 before moving to Level 2.*

### Level 1 — Basic Prompting (Foundational Use Cases)

Simple, direct instructions. Everyone can do these on Day 1.

#### 1. Direct Question Prompt
**Purpose:** Asking for information or clarification
**Skeleton:** `"What is / Why does / How does ___?"`

**Examples:**
- "What are the main causes of customer churn for small service businesses?"
- "How does YouTube decide what videos to recommend?"
- "Why is consistent posting important for brand discovery?"

**When to use:** Quick facts, explanations, clarifications

---

#### 2. Task Instruction Prompt
**Purpose:** Tell AI what to do, usually a one-step task
**Skeleton:** `"Do ___ using ___ constraints."`

**Examples:**
- "Write a 2-sentence welcome message for new customers."
- "Draft a short headline for a woodworking newsletter."
- "Create a tagline for a holiday sale."

**When to use:** Single-action tasks with clear deliverable

---

#### 3. Rewrite / Edit Prompt
**Purpose:** Transform without adding new meaning
**Skeleton:** `"Rewrite this to sound ___ while keeping the meaning: ___."`

**Examples:**
- "Rewrite this to be more professional."
- "Rewrite this to sound more friendly and reassuring."
- "Rewrite this in simple 6th-grade language."

**When to use:** Tone/style adjustments, simplification, formality changes

---

#### 4. Summarization Prompt
**Purpose:** Condense content
**Skeleton:** `"Summarize this into ___ length: ___."`

**Examples:**
- "Summarize this meeting note into 3 bullets."
- "Summarize this review into one sentence."
- "Summarize this email so I can reply quickly."

**When to use:** Information overload, preparing briefs, quick reviews

---

#### 5. Classification Prompt
**Purpose:** Sort or categorize
**Skeleton:** `"Classify the following into ___ categories: ___."`

**Examples:**
- "Classify these messages as lead/support/spam."
- "Categorize these expenses as materials/labor/overhead."
- "Label these tasks as high/medium/low priority."

**When to use:** Data organization, triage, filtering

---

#### 6. Extraction Prompt
**Purpose:** Pull out specific data
**Skeleton:** `"Extract all ___ from this text: ___."`

**Examples:**
- "Extract all dates and times from this message."
- "Extract the customer's questions only."
- "Extract product names and quantities."

**When to use:** Parsing unstructured text, data extraction, finding needles in haystacks

---

### Level 2 — Structured Prompting (Improves Reliability & Business Usefulness)

Here, you introduce structure, formatting, and constraints.

#### 7. Format-Specific Prompt
**Purpose:** Tell AI exactly how output must appear
**Skeleton:** `"Produce the output in ___ format with these sections: ___."`

**Examples:**
- "Give me a table with Problem / Cause / Fix."
- "Create a 5-bullet summary with bold headers."
- "Return this as a checklist."

**When to use:** Need specific structure for downstream use (spreadsheets, reports, templates)

---

#### 8. Role / POV Prompt (Without Persona Memory)
**Purpose:** Use temporary perspective
**Skeleton:** `"Act as a(n) ___ and evaluate ___."`

**Examples:**
- "Act as a marketing strategist and review this ad."
- "Act as a woodworking instructor and critique this project plan."
- "Act as a business coach and identify weak spots."

**When to use:** Need domain expertise simulation, different viewpoints

---

#### 9. Constraint Prompt
**Purpose:** Boundaries around tone, length, style, or brand
**Skeleton:** `"Write ___ using these constraints: ___."`

**Examples:**
- "Explain this in under 75 words."
- "Write in a confident but warm tone."
- "Avoid jargon; use only simple language."

**When to use:** Brand consistency, accessibility, brevity requirements

---

#### 10. Multi-Step Instruction Prompt
**Purpose:** One message, multiple explicit steps
**Skeleton:** `"Do Step 1: ___, Step 2: ___, Step 3: ___."`

**Examples:**
- "Step 1: Analyze the problem. Step 2: Diagnose. Step 3: Propose 3 solutions."
- "Step 1: Summarize. Step 2: Extract insights."
- "Step 1: Draft. Step 2: Shorten. Step 3: Rewrite in my tone."

**When to use:** Sequential workflows, complex tasks broken into stages

---

#### 11. Input–Output Template Prompt
**Purpose:** Provide example patterns to follow
**Skeleton:** `"Here is an example input/output pair; mimic the format for this new input: ___."`

**Examples:**
- Product description → short marketing caption
- Long review → sentiment label
- Raw transcript → bullet highlights

**When to use:** Teaching AI your specific format via examples

---

#### 12. Comparison Prompt
**Purpose:** Evaluate multiple items
**Skeleton:** `"Compare A and B in terms of ___."`

**Examples:**
- "Compare these two subject lines for open-rate potential."
- "Compare these two workflows for time efficiency."
- "Compare these thumbnails for click-through appeal."

**When to use:** Decision support, A/B analysis, trade-off evaluation

---

#### 13. Scenario Prompt
**Purpose:** Place AI inside a hypothetical
**Skeleton:** `"Imagine ___ happens. What should we do?"`

**Examples:**
- "Imagine sales drop 25%. What's the response plan?"
- "Imagine I'm launching a new product. What are first steps?"
- "Imagine a competitor undercuts my prices. What strategy now?"

**When to use:** Contingency planning, strategic thinking, "what-if" analysis

---

### Level 3 — Analytical & Strategic Prompting

Prompts that leverage AI for thinking, optimizing, and decision-support.

#### 14. Diagnostic Prompt
**Purpose:** Identify root causes or hidden problems
**Skeleton:** `"Analyze this and tell me the root causes: ___."`

**Examples:**
- "Diagnose why my YouTube engagement dropped."
- "Identify bottlenecks in this production workflow."
- "Tell me why customers stop responding after inquiry."

**When to use:** Problem diagnosis, process improvement, troubleshooting

---

#### 15. Framework Generation Prompt
**Purpose:** Ask AI to create or apply structured thinking models
**Skeleton:** `"Use ___ framework(s) to analyze ___."`

**Examples:**
- "Use SWOT to analyze my offer."
- "Use Jobs-to-Be-Done to understand customer needs."
- "Use PAS (Problem–Agitate–Solve) to rewrite this copy."

**When to use:** Strategic analysis, applying business frameworks

---

#### 16. Systems Design Prompt
**Purpose:** Turn problems into repeatable workflows
**Skeleton:** `"Design a step-by-step system for ___ with these goals: ___."`

**Examples:**
- "Design a lead-nurturing system for a small service business."
- "Create a content calendar workflow I can repeat monthly."
- "Build a customer onboarding process."

**When to use:** Process creation, systemization, workflow design

---

#### 17. Chain-of-Thought Prompt (light version)
**Purpose:** Ask it to think before solving
**Skeleton:** `"Walk through your reasoning, then give your final answer."`

**Examples:**
- "Walk through how you'd prioritize these tasks."
- "Explain your reasoning behind this marketing strategy."
- "Think step by step about the best pricing approach."

**When to use:** Complex reasoning, logic problems, decision-making

---

#### 18. Multi-Variable Optimization Prompt
**Purpose:** Ask AI to balance competing constraints
**Skeleton:** `"Optimize ___ for ___, ___, and ___."`

**Examples:**
- "Optimize this posting schedule for reach, consistency, and time cost."
- "Optimize this offer for profitability and simplicity."
- "Optimize workflow for speed and accuracy."

**When to use:** Trade-off analysis, resource allocation, constraint satisfaction

---

#### 19. Decision Matrix Prompt
**Purpose:** Request scoring, ranking, or prioritization
**Skeleton:** `"Rank these options using criteria ___."`

**Examples:**
- "Rank these product ideas by ROI, ease, and demand."
- "Score these content topics by search volume and expertise."
- "Rank these workflows by error-risk."

**When to use:** Prioritization, decision support, scoring systems

---

#### 20. Assumption Challenge Prompt
**Purpose:** Ask AI to critique or stress-test
**Skeleton:** `"Challenge the assumptions in ___ and list risks."`

**Examples:**
- "Challenge the assumptions in this business plan."
- "Challenge why I think this product will sell."
- "Challenge the belief that lowering prices will increase sales."

**When to use:** Risk assessment, strategic validation, blind spot identification

---

### Level 4 — Creative & Generative Prompting

Unbounded output, ideation, and original synthesis.

#### 21. Divergent Ideation Prompt
**Purpose:** Generate many possibilities
**Skeleton:** `"Give me ___ number of ideas for ___."`

**Examples:**
- "Give me 20 video ideas for a woodworking channel."
- "Give me 10 marketing hooks for a spring sale."
- "Give me 15 customer loyalty perks."

**When to use:** Brainstorming, creative generation, exploring possibilities

---

#### 22. Convergent Refinement Prompt
**Purpose:** Narrow multiple ideas into one strong option
**Skeleton:** `"Take the top 3 and refine each into ___."`

**Examples:**
- "Take the top 3 video ideas and turn them into scripts."
- "Refine the top hooks into final headlines."
- "Turn these 5 rough offers into 1 strong offer."

**When to use:** Refining brainstorms, polishing concepts, convergent thinking

---

#### 23. Mixed-Modality Prompt
**Purpose:** Ask for combined forms (tables, lists, scripts, emails)
**Skeleton:** `"Create ___ + ___ + ___ for this topic."`

**Examples:**
- "Give me a 60-second script plus a thumbnail concept plus a CTA."
- "Create a newsletter + social caption + CTA."
- "Produce a checklist + email template + SOP."

**When to use:** Content packages, multi-format deliverables, campaign creation

---

#### 24. Style Transfer Prompt
**Purpose:** Transform content to another creative style
**Skeleton:** `"Rewrite this in the style of ___: ___."`

**Examples:**
- "Rewrite this email like a master craft teacher explaining a technique."
- "Rewrite in Apple-style product copy."
- "Rewrite like a friendly mentor."

**When to use:** Brand voice development, creative translation, tone experimentation

---

#### 25. Storytelling Prompt
**Purpose:** Narrative-based synthesis
**Skeleton:** `"Tell a short story that illustrates ___."`

**Examples:**
- "Tell a story demonstrating why craftsmanship matters."
- "Tell a story about learning from failure."
- "Tell a story showing the value of slow mastery."

**When to use:** Persuasive content, teaching through stories, emotional connection

---

### Level 5 — Power User Prompting (Maximum Zero-Context Control)

These are the most advanced **prompt engineering patterns**, without invoking memory, agents, or RAG.

#### 26. Embedded Guidelines Prompt
**Purpose:** You embed rules inside the prompt for AI to follow
**Skeleton:** `"Follow these 7 brand rules. Do not break them. Here they are..."`

**Examples:**
- "Follow these 5 brand rules for tone."
- "Do not exceed 50 words."
- "Always begin with a problem statement."

**When to use:** Strict compliance, brand guidelines, non-negotiable constraints

---

#### 27. Meta-Prompt ("How should I prompt?")
**Purpose:** AI helps design better prompts
**Skeleton:** `"Give me the best prompt to accomplish ___."`

**Examples:**
- "Give me the best prompt to optimize my workflow."
- "Give me a prompt to audit my website."
- "Give me a prompt to generate weekly content."

**When to use:** Scaling prompting across teams, building prompt libraries, systematic optimization

---

#### 28. Expert Fusion Prompt
**Purpose:** Combine multiple expert viewpoints in one output
**Skeleton:** `"Act as a ___ + ___ + ___ and analyze ___."`

**Examples:**
- "Act as a CPA + COO + marketing strategist and evaluate this pricing strategy."
- "Craftsman + instructor + engineer reviewing a project plan."
- "Designer + copywriter + strategist analyzing a brand."

**When to use:** Multi-disciplinary analysis, holistic evaluation, diverse perspectives

---

#### 29. Self-Refinement Loop Prompt (single message)
**Purpose:** Ask AI to revise its own output within one prompt
**Skeleton:** `"Generate the strategy. Then critique it. Then improve it."`

**Examples:**
- "Draft a strategy, critique it, then refine."
- "Write copy, critique weaknesses, rewrite stronger."
- "Generate ideas, score them, improve the top 2."

**When to use:** Quality improvement, iterative refinement, self-checking

---

#### 30. Multi-Pass Prompt (without memory)
**Purpose:** You manually copy/paste outputs for iterative refinement
**Skeleton:** `"Improve version 2 using the lessons from version 1."`

**Examples:**
- "Improve this draft using clarity and brevity."
- "Improve this workflow using fewer steps."
- "Improve this script for engagement."

**When to use:** Manual iteration, progressive refinement across sessions

---

#### 31. Data-Schema Prompt
**Purpose:** Define columns, fields, and structures for AI to populate
**Skeleton:** `"Create a table with 8 columns: problem, solution, time cost, ROI, etc."`

**Examples:**
- "Problem / Cause / Fix table."
- "Product / Price / Benefit table."
- "Task / Owner / Deadline table."

**When to use:** Structured data generation, spreadsheet population, systematic analysis

---

#### 32. Uncertainty Prompt
**Purpose:** Ask AI to express ambiguity or confidence
**Skeleton:** `"Tell me where your answer is least certain and why."`

**Examples:**
- "Identify uncertain assumptions in this forecast."
- "Tell me the weak areas in this plan."
- "Highlight low-confidence parts of your analysis."

**When to use:** Risk assessment, confidence calibration, identifying unknowns

---

#### 33. Boundary-Testing Prompt
**Purpose:** Push capability limits while staying safe
**Skeleton:** `"Give me unconventional but ethical ideas for ___."`

**Examples:**
- "Unusual marketing strategies for a small workshop."
- "Creative retention ideas for local service businesses."
- "Unexpected automation ideas for solopreneurs."

**When to use:** Innovation, creative edge-cases, exploring boundaries

---

#### 34. Strategic Simulation Prompt
**Purpose:** Model complex systems or "what-if" situations
**Skeleton:** `"Simulate 3 scenarios for ___ over ___ timeframe."`

**Examples:**
- "Simulate 6-month outcomes for three pricing strategies."
- "Simulate 3 demand curves for launch."
- "Simulate best/worst/likely case for a new product."

**When to use:** Scenario planning, forecasting, strategic modeling

---

#### 35. Full Prompt Framework (RACE, CRAFT, SPACE, etc.)
**Purpose:** A complete structured prompt template using:
- **Role**
- **Action**
- **Context**
- **Execution details**
- **Output format**

**Other Examples of Formulas:**
- **RTF:** Role, Task, Format
- **CTF:** Context, Task, Format
- **PECRA:** Purpose, Expectation, Context, Request, Action
- **CREATE:** Character, Request, Examples, Adjustments, Type, Extras
- **CREO:** Context, Request, Explanation, Outcome
- **PAIN:** Problem, Action, Information, Next Steps
- **TREF:** Task, Requirement, Expectation, Format
- **GRADE:** Goal, Request, Action, Detail, Examples
- **ROSES:** Role, Objective, Scenario, Expected Solution, Steps
- **RDIREC:** Role, Definition, Intent, Request, Example, Clarification
- **RSCET:** Role, Situation, Complication, Expectation, Task
- **RASCEF:** Role, Action, Steps, Context, Examples, Format
- **APE:** Action, Purpose, Expectation
- **TAG:** Task, Action, Goal
- **ERA:** Expectation, Role, Action
- **RACE:** Role, Action, Context, Expectation
- **COAST:** Context, Objective, Actions, Scenario, Task
- **RISE:** Role, Input, Steps, Expectation
- **SPARK:** Situation, Problem, Aspiration, Results, Kismet

**Example (RACE):**
```text
Role: Act as a strategist
Action: Analyze this offer
Context: Small business, limited marketing budget
Expectation: Give a 3-section report with risks and recommendations
```

**When to use:** Complex, repeatable workflows; template-based prompting; enterprise systems

---

**Summary Table: All 35 Prompt Types**

| Level | # | Prompt Type | Use Case |
|-------|---|-------------|----------|
| **1** | 1 | Direct Question | Facts, clarification |
| **1** | 2 | Task Instruction | Single-action tasks |
| **1** | 3 | Rewrite / Edit | Tone/style transformation |
| **1** | 4 | Summarization | Condensing content |
| **1** | 5 | Classification | Sorting/categorizing |
| **1** | 6 | Extraction | Pulling specific data |
| **2** | 7 | Format-Specific | Exact output structure |
| **2** | 8 | Role / POV | Temporary expertise |
| **2** | 9 | Constraint | Boundaries (tone, length, style) |
| **2** | 10 | Multi-Step Instruction | Sequential workflows |
| **2** | 11 | Input-Output Template | Pattern matching |
| **2** | 12 | Comparison | Evaluating options |
| **2** | 13 | Scenario | Hypothetical planning |
| **3** | 14 | Diagnostic | Root cause analysis |
| **3** | 15 | Framework Generation | Applying business models |
| **3** | 16 | Systems Design | Building workflows |
| **3** | 17 | Chain-of-Thought (light) | Step-by-step reasoning |
| **3** | 18 | Multi-Variable Optimization | Balancing constraints |
| **3** | 19 | Decision Matrix | Ranking/prioritization |
| **3** | 20 | Assumption Challenge | Stress-testing |
| **4** | 21 | Divergent Ideation | Brainstorming |
| **4** | 22 | Convergent Refinement | Narrowing ideas |
| **4** | 23 | Mixed-Modality | Multi-format outputs |
| **4** | 24 | Style Transfer | Creative transformation |
| **4** | 25 | Storytelling | Narrative synthesis |
| **5** | 26 | Embedded Guidelines | Strict rule following |
| **5** | 27 | Meta-Prompt | AI designs prompts |
| **5** | 28 | Expert Fusion | Multi-perspective analysis |
| **5** | 29 | Self-Refinement Loop | AI critiques itself |
| **5** | 30 | Multi-Pass | Manual iteration |
| **5** | 31 | Data-Schema | Structured data |
| **5** | 32 | Uncertainty | Confidence expression |
| **5** | 33 | Boundary-Testing | Creative edge exploration |
| **5** | 34 | Strategic Simulation | Scenario modeling |
| **5** | 35 | Full Framework (RACE, etc.) | Complete templates |

---

## Structured Reasoning & Chain-Style Techniques

**Advanced techniques that improve AI reasoning quality and accuracy.**

These techniques focus on how the model structures its *thinking process* to improve reasoning quality. They're composable—you can combine multiple techniques for even better results.

### 1. Standard Chain-of-Thought (CoT)
**Mental model:** Ask AI to "show its work" like a student solving a math problem step-by-step.

**How to use:** Provide 2-3 few-shot examples showing complete reasoning chains, not just answers.

**Example:**
```text
Solve this step by step:
Question: A store sells apples for $2 each. You have $10 and want to
save $2 for later. How many apples can you buy?

Reasoning:
1. Start with $10
2. Subtract the $2 you want to save → $8 available
3. Each apple costs $2 → $8 ÷ $2 = 4 apples
4. Final answer: 4 apples

Now solve: [Your problem]
```

**When to use:** Multi-step math, logic puzzles, multi-hop reasoning, policy decisions

**Performance gain:** Improves accuracy on complex problems by 2-3×

---

### 2. Zero-Shot Chain-of-Thought
**Mental model:** Don't provide examples—just add a trigger phrase.

**How to use:** Simply append:
- "Let's think step by step"
- "Explain your reasoning before answering"
- "Think through each step"

**When to use:** Quick prototyping, token-sensitive applications, diverse task types

**Risk:** Output quality varies more than few-shot; smaller models may ignore triggers

---

### 3. Self-Consistency Prompting
**Mental model:** A jury system—run the same question multiple times and trust the majority answer.

**How to use:**
1. Run the same CoT prompt 5-8 times with temperature > 0
2. Collect all final answers
3. Select the answer appearing most frequently

**When to use:** Mission-critical decisions (regulatory filings, medical triage, financial approvals)

**Benefits:** Higher accuracy through consensus, implicit confidence score

**Trade-off:** Costs 5-8× tokens/latency

---

### 4. Tree-of-Thoughts (ToT)
**Mental model:** Instead of one linear chain, build a decision tree. Generate multiple branches, score them, expand promising ones, prune dead ends.

**How to use:**
1. Generate alternatives: "Propose 3 different approaches to [problem]"
2. Evaluate each: "For each approach, rate feasibility (1-10) and potential impact"
3. Expand promising: "Deep dive into approach #2. Generate 3 sub-strategies"
4. Prune: Eliminate low-scoring branches
5. Synthesize: "Compare final candidates and recommend the best fit"

**When to use:** Strategic planning, product ideation, feature prioritization, creative problem-solving

**When NOT to use:** Simple factual questions (ToT is overkill)

---

### 5. Least-to-Most Prompting
**Mental model:** Build a pyramid—solve the simplest subproblem first, use that result to unlock the next layer.

**How to use:**
1. Decompose: "Break this problem into subproblems ordered from simplest to hardest"
2. Solve sequentially: Solve subproblem 1, then use its answer to guide subproblem 2
3. Validate early: Catch errors before they cascade

**When to use:** Complex math, sequential workflows, hierarchical problems, multi-stage development

---

### 6. Chain-of-Knowledge (Knowledge-Augmented Reasoning)
**Mental model:** CoT + retrieval fusion. Ground *every reasoning step* in external facts.

**How to use:**
1. Retrieve relevant documents matching the query
2. Feed those into the prompt alongside CoT instructions
3. Model reasons *using* the retrieved facts

**When to use:** Fact-heavy domains (compliance, research, support), regulatory filings

**Benefit:** Slashes hallucination; every claim is traceable to source

---

### 7. Latent Chain-of-Thought
**Mental model:** The model reasons internally without outputting intermediate steps. Fast and cheap, but a black box.

**How to use:** Instruct the model to:
- "Think silently"
- "Keep reasoning internal"
- "Don't show your work—just give the final answer"

**When to use:** High-throughput production, cost-sensitive APIs, latency-critical systems

**Trade-off:** Human-readable reasoning trail disappears

---

### 8. Auto-CoT (Automated Chain-of-Thought)
**Mental model:** Stop hand-curating exemplars. Let the model generate its own.

**How to use:**
1. Cluster incoming questions by reasoning pattern
2. Apply zero-shot CoT to one representative per cluster
3. Use resulting chains as few-shot exemplars for similar future questions

**When to use:** Enterprise scale (1000+ daily queries), diverse problem types

**Risk:** Generated exemplars can contain spurious logic—validate regularly

---

## Output Improvement Techniques

**Non-chain techniques that improve clarity, grounding, and iterative refinement.**

### Few-Shot, Zero-Shot, One-Shot Prompting
**Mental model:** In-context learning. Examples teach the model your specific format/task without retraining.

- **Few-Shot (2+ examples):** Best for complex or varied tasks
- **Zero-Shot (no examples):** Best for simple, well-known tasks
- **One-Shot (single example):** Best for tasks needing clarification

---

### Step-Back Prompting
**Mental model:** Zoom out before zooming in. Ask about high-level principles *first*, then solve the specific problem *using* those principles.

**How to use:**
1. Abstraction step: "What are the fundamental principles/concepts involved here?"
2. Reasoning step: "Now use those principles to solve [specific problem]"

**Performance:** 7-27% improvements over standard CoT

---

### Retrieval-Augmented Generation (RAG)
**Mental model:** External knowledge base = truth. Retrieve relevant docs first, then reason over them.

**When to use:** Compliance, research, knowledge-intensive domains, current information

**Best practice:** Combine with Step-Back Prompting for even stronger results

---

### Role-Based / Persona Prompting
**Mental model:** Assign a specific, detailed role, and the model draws on domain knowledge + communication style.

**How to use:** Be specific: "You are a Python software architect with 10+ years building microservices"

**Research finding:** Detailed, specific, LLM-generated personas outperform hand-written ones

---

### Prompt Chaining & Decomposition
**Mental model:** Build a pipeline. Output of stage N becomes input to stage N+1.

**How to use:** Break one complex task into 3-5 focused prompts:
1. Extract information
2. Summarize findings
3. Draft response
4. Refine tone
5. Final polish

---

### Self-Refine / Critique-Improve Loop
**Mental model:** Separate "do" and "judge" modes. First draft → critique → improve.

**How to use:**
1. Generate: "Draft an email to [recipient] about [topic]"
2. Critique: "Critique the email above. What's unclear? What's missing?"
3. Improve: "Rewrite fixing the issues you identified"

---

### Recursive / Iterative Refinement
**Mental model:** Each loop adds sophistication. Rough → critiqued → strategically improved → polished.

**When to use:** Marketing copy, sales messaging, persuasion-heavy content

---

### Generated-Knowledge Prompting
**Mental model:** Build a knowledge base first, then solve *using only* that knowledge.

**How to use:**
1. "List all relevant facts, formulas, and definitions for this topic"
2. "Now solve [problem] using *only* the knowledge above"

**Benefit:** Forces explicit fact anchoring, reduces confident but baseless claims

---

### ReAct (Reasoning + Action)
**Mental model:** Interleave thinking with tool calls. Loop: Thought → Action → Observation → Thought...

**When to use:** Agentic systems, research assistants, multi-tool workflows

---

### Analogical Prompting
**Mental model:** Solve via transfer learning. Find a similar case in a familiar domain, reason through it, map back to original problem.

**When to use:** Concept explanation, teaching, persuasion, design thinking

---

## Beyond the Two Axes: The Full Yield Curve

**16 additional dimensions that affect AI output quality.**

While Prompt Design and Context Density are the two primary axes, there are many other factors that change the "yield curve"—how much quality you get for a given prompt.

### 1. Instruction Specificity (Precision)
- **Vague ↔ Highly specific**
- More specificity improves output but reduces creativity and reusability

### 2. Examples / Few-shotness
- **No examples ↔ Many curated examples in-prompt**
- Examples shape style and format strongly

### 3. Temperature / Sampling / Decoding Settings
- **Deterministic ↔ Creative outputs**
- Lower temp reduces variance/hallucination; higher temp increases novelty

### 4. Context Window / Token Budget
- **Small window ↔ Large window**
- Larger windows let you supply more docs/examples

### 5. Tool Access / Capabilities
- **None ↔ Rich toolset (APIs, calculators, search, DB writes)**
- Tools radically expand reliable behavior

### 6. Verification / Grounding Mechanisms
- **None ↔ Fact-checking modules, citations, assertion checks**
- Improves trustworthiness

### 7. Persona / Role Priming
- **Generic ↔ Strong persona / persona memory**
- Affects tone and domain expertise simulation

### 8. Iteration / Feedback Loop
- **Single pass ↔ Multi-turn refine/verify/critique steps**
- Iteration increases quality

### 9. Chain-of-Thought / Rationale Prompting
- **No reasoning trace ↔ Explicit stepwise reasoning**
- Improves complex problem solving

### 10. Data Freshness / Timeliness
- **Pretrained knowledge only ↔ Live or recent data via retrieval**
- Essential for current facts

### 11. Safety / Constraint Enforcement
- **Loose ↔ Hardened constraints and guardrails**
- Affects allowed outputs and legal/ethical safety

### 12. Prompt Format / Template Engineering
- **Freeform ↔ Structured templates with placeholders**
- Improves reliability and parseability

### 13. Model Choice / Size / Fine-tuning
- **Small base model ↔ Large fine-tuned model**
- Affects competence and cost

### 14. Latency / Compute Budget
- **Low latency ↔ High compute settings**
- Affects feasibility for real-time vs batch

### 15. Access Control / Privacy Constraints
- **Open access ↔ Strict data access/filters**
- Impacts what context you can safely feed

### 16. Adversarial Robustness / Prompt Injection Resistance
- **Not hardened ↔ Hardened to untrusted inputs**
- Important when retrieving external docs

**Key Insight:** All of these axes interact. For example, higher context density + verification + low temperature yields highly reliable, factual outputs for business processes, but at higher engineering cost.

---

## Practical Application Framework

**A decision framework for designing and selecting prompting techniques.**

When designing a prompt/workflow, answer these questions in order:

### 1. Is accuracy/factuality critical?
**If yes →** Increase context density (RAG/memory) + verification module + low temperature

### 2. Does the model need to act (write, call APIs, update systems)?
**If yes →** Agents/tool access and clear orchestration prompts

### 3. How repeatable/general should prompt be?
**If many users/processes →** Build templates + memory + persona layers

### 4. What are the cost and latency budgets?
**If low cost/fast →** Accept lower density and add post-check human review

### 5. Privacy & safety constraints?
**If strict →** Minimize what data you pass, add filters, audit logs

---

## Integration with the Toolkit

**How prompting connects to other toolkit components.**

### Skills and Prompting
**Skills are pre-built prompting systems.** When you invoke a skill, you're using sophisticated prompt engineering that's already been optimized.

**Example:** The `docx` skill contains:
- Carefully structured prompts for document creation
- Context about your writing style and preferences
- Verification steps to ensure quality
- Error handling and fallback behaviors

**Learn from skills:** Read skill documentation to see how experts structure prompts.

### Commands and Prompting
**Commands often invoke skills or execute prompts.** Understanding prompting helps you:
- Know when to use explicit commands vs natural language
- Understand what happens under the hood
- Create your own custom commands with better prompts

### Projects and Context Density
**Projects increase context density automatically** by:
- Maintaining conversation history (memory)
- Storing your preferences and style
- Connecting to your documentation and files
- Providing consistent context across sessions

**This means:** Prompts inside projects can be simpler because context is provided by the project itself.

### Prompt Library
The `3_AI_&_Human_Capabilities/Prompts/` folder contains reusable prompts. These are examples of:
- High-quality prompt design
- Reusable templates you can adapt
- Patterns that solve common problems

**Use the library:** Copy, adapt, and learn from these prompts.

---

## Choosing the Right Technique

**A quick decision guide for selecting prompting techniques.**

### If you need accurate reasoning on hard problems:
→ **Step-Back Prompting** (zoom out first) + **Self-Consistency** (multiple votes) for mission-critical

### If you need speed and low token cost:
→ **Zero-Shot CoT** (single trigger phrase) or **Latent CoT** (silent reasoning)

### If you need exploration and creative solutions:
→ **Tree-of-Thoughts** (branching exploration) or **Analogical Prompting** (cross-domain transfer)

### If you need grounded, fact-checked answers:
→ **Chain-of-Knowledge** (CoT + retrieval) or **RAG** (external knowledge base)

### If you need high-quality, polished outputs:
→ **Self-Refine** (critique loop) or **Recursive Refinement** (multi-round improvement)

### If you're building scalable, repeatable workflows:
→ **Prompt Chaining** (multi-stage pipeline) + **Meta-Prompting** (optimize prompts systematically)

### If you're working with diverse problem types at scale:
→ **Auto-CoT** (automated exemplar generation)

---

## Key Takeaways

1. **Prompting is multi-dimensional:** Not just "write a better prompt"—adjust prompt design, context density, and 16+ other axes

2. **Mental models matter:** Your understanding of how AI works shapes how you prompt it

3. **Context density is as important as prompt design:** Better design + more context = better results

4. **Techniques are composable:** Combine Chain-of-Thought + Self-Consistency + RAG for maximum reliability

5. **Start simple, add complexity as needed:** Don't use Tree-of-Thoughts for simple questions

6. **Zero-context techniques teach fundamentals:** Master these before adding memory, agents, and tools

7. **The toolkit amplifies your prompting:** Skills, Commands, and Projects increase context density automatically

8. **Iteration beats perfection:** First prompts are rarely optimal—refine through use

9. **Universal principles:** These techniques work across all LLMs (Claude, ChatGPT, Gemini)—just different names

10. **Master one tool deeply:** Build prompting expertise in Claude, then lateralize to other platforms

---

## Next Steps

1. **Practice the Five Levels:** Start with Level 1 prompts and work your way up
2. **Experiment with techniques:** Try Chain-of-Thought, Self-Refine, and Step-Back prompting
3. **Study the Prompt Library:** Learn from high-quality examples
4. **Document what works:** Build your own prompt collection
5. **Combine with Skills:** Use skills to see expert prompting in action
6. **Iterate and refine:** Every project teaches you better prompting

**Remember:** Prompting is a skill that compounds. Better prompts → better outputs → better learning → even better prompts. Start today, practice deliberately, and watch your AI mastery grow.

---

## Personal Notes

**Use this space to document your learning, key insights, and personal discoveries:**

- Key concepts you want to remember:
- Techniques you find most valuable:
- Prompts you've created that work well:
- Questions or areas you want to explore further:
- Real-world applications you've discovered:

---

## Progress Tracking

**I've completed this guide:** 

Once you've worked through all sections, examples, and practiced the techniques, mark this guide as complete and move to the next step.

---

## Related Guides & Next Steps

**You've completed:** Phase 1, Part 1 of 4

**Next Guide:** [2. Commands Guide](2_Commands_Guide_v1.0.md) - Learn to invoke Claude's capabilities through commands and slash commands

**Full Learning Path:**
- **Phase 1: Building Blocks**
  1.  Prompts Guide (you are here)
  2. → [Commands Guide](2_Commands_Guide_v1.0.md)
  3. → [Skills Guide](3_Skills_Guide_v1.0.md)
  4. → [Projects & RAG Guide](4_Projects_&_RAG_Guide_v1.0.md)
- **Phase 2: Expanding Capabilities**
  5. [Agents Guide](5_Agents_Guide_v1.0.md)
  6. [Connectors & MCP Guide](6_Connectors_MCP_Guide_v1.0.md)

**Quick Links:**
- [Skills Guide](3_Skills_Guide_v1.0.md) - Pre-built prompting systems
- [Commands Guide](2_Commands_Guide_v1.0.md) - Invoking capabilities
- [Projects Guide](4_Projects_&_RAG_Guide_v1.0.md) - Managing context and memory
- [Agents Guide](5_Agents_Guide_v1.0.md) - Autonomous systems
