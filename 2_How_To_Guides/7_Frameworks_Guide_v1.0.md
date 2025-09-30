# 7. Frameworks Guide: Understanding Orchestration

**Created:** 2026-02-08
**Last Updated:** 2026-02-08
**Purpose:** Understanding orchestration frameworks for AI-human-system coordination
**Version:** v1.0
**Status:** Final
**Difficulty:** Intermediate
**Prerequisites:** Prompts Guide, understanding of structured thinking

---

## You Are Here

**Phase 3: Complex Task Creation → Frameworks Guide → Orchestration Concepts**

**Navigation:** [Start Here](../1_Toolkit_Documentation/1_Start_Here.md) → [How-To Guides](README.md) → Frameworks Guide

---

**Phase:** 3 - Complex Task Creation
**Prerequisites:** Phases 1-2 (Basic capabilities and expanded tools)
**Time to Complete:** 1-2 hours
**Estimated Reading Time:** 23 minutes
**Audience:** Everyone (non-technical welcome)

---

## What You'll Learn

By the end of this guide, you'll be able to:
- Explain what orchestration is and when to use it
- Understand the two axes of orchestration (horizontal and vertical)
- Map any workflow onto the 5-block orchestration model
- Distinguish between rule-based logic and AI judgment
- Think systematically about coordinating AI, humans, and systems

**Key Principle:** Orchestration is conceptual first, technical second. You don't need tools to understand these frameworks—just a whiteboard and clear thinking.

---

## Table of Contents

1. [What Is Orchestration?](#1-what-is-orchestration)
2. [The Two Axes of Orchestration](#2-the-two-axes-of-orchestration)
3. [The 5-Block Model](#3-the-5-block-model)
4. [Core Orchestration Vocabulary](#4-core-orchestration-vocabulary)
5. [Meet Alex: Lead Generation Example](#5-meet-alex-lead-generation-example)
6. [Framework Practice Exercises](#6-framework-practice-exercises)

---

## 1. What Is Orchestration?

### Definition

**Orchestration is the coordinated management of AI, humans, and systems across multiple steps and over time.**

It's not just running tasks—it's deciding:
- **Which tasks** run
- **In what order** they execute
- **Under what conditions** they trigger
- **For how long** they continue
- **How they coordinate** with each other

### Orchestration vs. Automation

**Automation** runs individual tasks:
- "Send an email when a form is submitted"
- "Add contact to CRM when lead comes in"
- One trigger → one action → done

**Orchestration** coordinates complete workflows:
- "Enrich lead data, classify with AI, draft personalized reply, push to CRM, schedule follow-up, and keep this process running for every lead every day"
- Multiple triggers → complex decisions → parallel actions → ongoing process

**Key Distinction:** Automation is a building block. Orchestration is the architecture.

### When to Orchestrate

 **Use orchestration when:**
- Multiple steps must coordinate
- Decisions depend on context or AI judgment
- Process runs over hours/days/weeks
- State must persist across sessions
- Multiple agents or systems interact
- Monitoring and recovery matter

 **Don't orchestrate when:**
- Simple one-step automation suffices
- No coordination needed
- Adding complexity without value
- You haven't validated the simpler version first

**Best Practice:** Start simple. Add orchestration when coordination becomes the bottleneck.

### Where Orchestration Fits

**The Three Levels of AI Integration:**

1. **THE PROMPT** - Individual AI interactions
   - Use prompts from your prompt library
   - Single-turn or few-turn conversations
   - Example: "Summarize this document"

2. **THE CONTEXT** - What AI knows about you
   - Build your SuperContext
   - Personal preferences and patterns
   - Example: "Remember I prefer concise responses"

3. **THE ORCHESTRATION** - How you combine capabilities ← **THIS SECTION**
   - Coordinate multiple prompts, agents, systems
   - Workflows that span hours or days
   - Example: "Research → Draft → Review → Publish pipeline"

Orchestration is where you move from **"using AI for tasks"** to **"building AI-powered systems."**

---

## 2. The Two Axes of Orchestration

Every orchestration can be understood along two dimensions:

### Horizontal Axis: Deterministic ↔ Dynamic (The Spectrum)

**Question:** Where does intelligence live in your workflow?

```text
text
Deterministic                                              Dynamic
(Rules)                                                    (AI Judgment)

"If X then Y"              Blend                  "Classify, decide, generate"
Fast, cheap,               MOST POWERFUL          Adaptive, intelligent,
predictable                ZONE                   context-aware
```markdown
markdown

#### Left Side: Deterministic/Structured

**What it is:** Pure rule-based logic, no AI in decision loop

**Examples:**
- "If invoice > $5,000, tag as VIP"
- "When form submitted, send to Slack"
- "Every Monday at 9am, generate report"
- "If email contains 'unsubscribe', route to compliance"

**Characteristics:**
- Fast (executes in milliseconds)
- Cheap (no AI API costs)
- Predictable (same input = same output)
- Easy to debug (clear logic trail)

**Tools:** n8n, Zapier, Make without AI nodes

**When to use:**
- Rules are simple and unambiguous
- No context or judgment needed
- Speed and cost matter
- Consistency is critical

#### Right Side: Dynamic/Flexible

**What it is:** AI actively making decisions

**Examples:**
- "Classify lead warmth based on message content"
- "Draft personalized email based on prospect's profile"
- "Determine sentiment of customer feedback"
- "Summarize research findings into key insights"

**Characteristics:**
- Adaptive (handles variation and context)
- Intelligent (can make nuanced judgments)
- Context-aware (considers surrounding information)
- More expensive (AI API costs per call)

**Tools:** n8n + OpenAI/Anthropic, LangChain, custom agents

**When to use:**
- Messy, unstructured data
- Judgment or classification needed
- Context matters
- Variation is high

#### The Most Powerful Zone: Blended

**Most powerful orchestrations blend both approaches:**
- **Rules handle structure:** Routing, filtering, formatting, triggering
- **AI handles judgment:** Classification, generation, summarization, decision-making

**Example: Lead Processing**
- **Deterministic:** "If email contains @gmail.com, tag as 'personal'"
- **Dynamic:** "Classify lead warmth as Hot/Warm/Cold based on message content"
- **Deterministic:** "If tagged 'Hot', route to sales team within 5 minutes"
- **Dynamic:** "Draft personalized follow-up email based on their questions"

**Best Practice:** Use deterministic logic wherever possible (faster, cheaper, more reliable). Add AI only where judgment is required.

---

### Vertical Axis: Simple ↔ Complex (The Layers)

**Question:** How sophisticated is the coordination?

```text
text
Complex
Multi-agent, long-running
Parallel processes, state management
Checkpoints, monitoring, recovery


 MOST WORKFLOWS 
       START HERE


Simple
Single-step automation
One trigger → one action
Completes in seconds
```markdown
markdown

#### Bottom: Simple Orchestration

**What it is:** Single-step automation with minimal coordination

**Examples:**
- "New lead → Send welcome email"
- "Form submitted → Add to spreadsheet"
- "File uploaded → Convert to PDF"

**Characteristics:**
- Completes in seconds
- No state to manage
- One trigger, one or few actions
- Fails fast (if error occurs, immediately visible)

**When to use:**
- Starting out
- Workflow is naturally simple
- No dependencies between steps
- Don't need to track progress over time

#### Top: Complex Orchestration

**What it is:** Multi-agent, long-running coordination

**Examples:**
- "Research agent gathering data over 3 hours across 50 sources"
- "Campaign running for 30 days with daily lead processing"
- "Multi-stage content pipeline: research → draft → review → publish"
- "Client onboarding spanning 6 weeks with 20+ touchpoints"

**Characteristics:**
- Runs for hours, days, or weeks
- Multiple parallel agents or processes
- State management and checkpoints required
- Monitoring dashboards needed
- Recovery and resumption capability

**When to use:**
- Process naturally takes time
- Multiple agents must coordinate
- State must persist (remember progress)
- Monitoring is critical
- Failures need recovery, not just alerts

#### The Growth Path

**Most workflows start simple and grow complex as business scales:**

1. **Start:** Simple automation (prove value)
2. **Add:** State tracking (remember progress)
3. **Expand:** Parallel processing (handle volume)
4. **Mature:** Full orchestration (monitor, optimize, scale)

**Best Practice:** Don't build complex orchestration until you've validated the simple version.

---

### Understanding Both Axes Together

Think of orchestration as a 2D space:

```text
text
VERTICAL AXIS
(Complexity)
    ↑
Complex (Long-running, parallel agents)
    
        
          Research pipeline with        
          multiple AI agents, running   
          over hours, checkpoints       
        
    
        
          Lead enrichment + AI scoring  
          + personalized email          
        
    
        
          "If form submitted,           
Simple      send confirmation email"     
        
    
    → HORIZONTAL AXIS
    Deterministic                        Dynamic
    (Rules)                         (AI Judgment)
```markdown
markdown

**Where to start:** Bottom-left (simple + deterministic)
**Where most value is:** Middle (blend of rules + AI, moderate complexity)
**Where advanced users go:** Top-right (complex + dynamic, when needed)

---

## 3. The 5-Block Model

Every orchestration, whether simple or complex, follows this pattern:

```text
text
                
 TRIGGER   →     INTAKE &   →   DECISION  →   ACTION(S) →    REVIEW &   
              NORMALIZATION                                  LEARNING   
                
```python
markdown

### Block 1: TRIGGER

**What starts the process?**

**Common triggers:**
- **Event-based:** "New email received", "Form submitted", "File uploaded"
- **Schedule-based:** "Every Monday at 9am", "Daily at midnight"
- **Condition-based:** "When inventory < 100 units", "If temperature > 85°F"
- **Manual:** "User clicks 'Start Process' button"
- **Chain reaction:** "When previous orchestration completes"

**Design questions:**
- What event initiates this workflow?
- How often does it trigger?
- Are there false triggers to filter out?
- Do triggers need deduplication?

**Example:** "Webhook fires when new lead submits contact form"

---

### Block 2: INTAKE & NORMALIZATION

**Clean and structure incoming data**

**What happens here:**
- Validate data (check required fields exist)
- Clean data (trim whitespace, fix formatting)
- Normalize structure (convert to standard format)
- Enrich data (add missing information from other sources)
- Extract relevant fields

**Common patterns:**
- Email parsing (extract sender, subject, body)
- Form data validation (check all required fields)
- API response normalization (convert to standard schema)
- File format conversion (PDF → text, CSV → JSON)

**Design questions:**
- What format does data arrive in?
- What fields are required vs optional?
- What enrichment is needed?
- What's the standard format for downstream steps?

**Example:** "Extract lead name, email, company, message from form submission. Look up company size from external API. Standardize into JSON schema."

---

### Block 3: DECISION

**Rules or AI judgment about what to do**

**Decision types:**

**Deterministic (rules):**
- "If company_size > 500, route to enterprise team"
- "If email domain matches existing customer, tag as 'upsell'"
- "If submission_hour < 9am, delay until business hours"

**Dynamic (AI):**
- "Classify lead warmth as Hot/Warm/Cold based on message content"
- "Determine sentiment: Positive/Neutral/Negative"
- "Score lead quality 1-10 based on profile completeness and engagement"

**Hybrid (blend):**
- "Use rules to pre-filter obvious categories, then AI for nuanced cases"
- "AI classifies, but rule-based logic confirms classification meets thresholds"

**Design questions:**
- What needs to be decided?
- Can it be a simple rule, or does it require AI judgment?
- What are all possible outcomes?
- What happens in edge cases?

**Example:**
1. **Rule:** "If message < 10 words, classify as 'Low Quality'"
2. **AI:** "Otherwise, classify lead warmth based on message content and tone"
3. **Rule:** "If warmth = 'Hot' AND company_size > 100, route to senior sales rep"

---

### Block 4: ACTION(S)

**Execute the work (can be parallel)**

**Action types:**
- **Create:** Generate email, create CRM record, write document
- **Update:** Modify database, update spreadsheet, change status
- **Send:** Email, Slack message, SMS, webhook
- **Transform:** Convert format, summarize content, translate
- **Trigger next:** Start another workflow, queue job, schedule follow-up

**Sequential vs. Parallel:**
- **Sequential:** Must happen in order (create draft → get approval → send)
- **Parallel:** Can happen simultaneously (send to CRM + send to Slack + log to database)

**Design questions:**
- What actions must happen?
- Which must be sequential vs. parallel?
- What if an action fails?
- How long should we wait for each action?

**Example (parallel):**
- Send welcome email to lead
- Create CRM record with lead details
- Post notification to Slack #new-leads channel
- Add lead to "Weekly Follow-up" automation queue
- Log event to analytics database

All five actions can happen simultaneously.

---

### Block 5: REVIEW & LEARNING

**Capture outcomes, improve process**

**What happens here:**
- Log what happened (audit trail)
- Measure success metrics (completion rate, time taken, errors)
- Capture feedback (human review, quality scores)
- Update prompts or rules based on learnings
- Store for future optimization

**Common patterns:**
- **Logging:** Store full run details for debugging
- **Metrics:** Track success rate, latency, cost per run
- **Human review:** Sample outputs for quality checks
- **A/B testing:** Compare two versions of prompts or rules
- **Feedback loops:** "Was this classification correct?" → retrain or adjust

**Design questions:**
- What needs to be logged for debugging?
- What metrics indicate success?
- How do we know if quality is declining?
- What feedback improves the system?

**Example:**
- Log lead processing details (input, decisions made, actions taken, time elapsed)
- Track: leads processed per day, error rate, email open rates
- Flag: any leads where AI classification confidence < 70% for manual review
- Weekly: Review flagged leads, refine classification prompt based on errors

---

### Extensions for Long-Running Orchestration

When processes run over time (hours/days/weeks), add these:

#### State & Checkpoints

**Problem:** Long processes can fail mid-way. Starting from scratch wastes time and money.

**Solution:** Save progress at key milestones (checkpoints)

**Examples:**
- "After processing each batch of 10 leads, save progress"
- "Every hour, checkpoint research findings gathered so far"
- "After each stage completes, update state: 'draft_created', 'review_pending', 'published'"

**Design pattern:**
```python
text
Process starts → Load previous state (if resuming)
    ↓
For each major step:
    Complete work
    Save checkpoint
    If failure: Resume from last checkpoint (not beginning)
```python
markdown

#### Concurrency

**Problem:** Sequential processing is slow when steps are independent

**Solution:** Run independent tasks in parallel

**Patterns:**
- **Fan-out/Fan-in:** Split work across multiple agents, then combine results
- **Parallel branches:** Multiple workflows run simultaneously
- **Rate limiting:** Run X tasks at a time (not unlimited)

**Examples:**
- "Process 5 leads simultaneously (not one at a time)"
- "Research 10 sources in parallel, wait for all to complete, then synthesize"
- "Generate 3 draft versions concurrently, then pick best"

#### Stopping Conditions

**Problem:** Long-running processes need clear end criteria

**Solution:** Define when to stop

**Stop conditions:**
- **Time-based:** "Run for maximum 2 hours"
- **Iteration-based:** "After processing 100 items"
- **Cost-based:** "Stop when API costs exceed $50"
- **Success criteria:** "Stop when we've found 10 qualified leads"
- **Failure criteria:** "Stop after 5 consecutive errors"

**Example:** "Research agent stops when: (a) 50 sources analyzed, OR (b) 3 hours elapsed, OR (c) found 20 high-quality insights, whichever comes first"

#### Monitoring & Recovery

**Problem:** Can't improve what you can't see

**Solution:** Dashboards, alerts, logs, and replay capability

**Monitoring needs:**
- **Real-time:** Is the process running? How far along?
- **Metrics:** Success rate, latency, cost per run, error rate
- **Alerts:** "Error rate > 10%", "Process stuck for > 30 min"
- **Logs:** Full audit trail for debugging

**Recovery capabilities:**
- **Replay:** Re-run from specific checkpoint
- **Manual intervention:** Pause, fix, resume
- **Rollback:** Undo actions if needed
- **Graceful degradation:** Fall back to simpler mode if AI fails

---

### The Same Model, Different Timescales

**Key insight:** Whether your orchestration completes in 30 seconds or runs for 3 hours, it's the same 5-block model. Long-running orchestrations just add:
- Memory (state & checkpoints)
- Parallelism (concurrency)
- Stop rules (stopping conditions)
- Observability (monitoring & recovery)

**Example comparison:**

**Short-running (30 seconds):**
```text
text
Trigger: New lead form submitted
Intake: Parse form data
Decision: Rule-based classification
Action: Send email, create CRM record
Review: Log to database
```markdown
markdown

**Long-running (3 hours):**
```text
text
Trigger: User requests comprehensive market research
Intake: Parse research topic and parameters
Decision: AI generates research plan with 50 sources
Action: Research 50 sources in parallel (5 at a time)
    - Checkpoint every 10 sources
    - Stop if: 50 sources done OR 3 hours elapsed OR $50 spent
Review: Generate synthesis report, log metrics dashboard
```python
markdown

Same 5 blocks. Long-running version adds checkpoints, concurrency, and stop conditions.

---

## 4. Core Orchestration Vocabulary

### Terminology

**State**
- The "memory" of an orchestration
- What has been done, what's left to do, relevant context
- Example: `{"leads_processed": 45, "current_stage": "ai_classification", "started_at": "2026-02-08T10:00:00Z"}`

**Context**
- Information needed to make decisions
- Can include: user preferences, historical data, external information
- Example: Lead classification considers message content + company size + industry + previous interactions

**Persistence**
- Saving data so it survives system restarts
- Database, file storage, or cloud storage
- Critical for long-running processes

**Checkpoint**
- A saved snapshot of progress
- Allows resuming from that point instead of restarting
- Example: "Checkpoint after every 10 items processed"

**Fan-out / Fan-in**
- **Fan-out:** Split one workflow into many parallel branches
- **Fan-in:** Wait for all parallel branches to complete, then combine results
- Example: Research 10 sources in parallel (fan-out), then synthesize findings (fan-in)

**Idempotent**
- Running an action multiple times has same effect as running once
- Critical for reliable orchestration (safe to retry)
- Example: "Create CRM record with unique ID" is idempotent (retrying doesn't create duplicates)

**Error Handling**
- What happens when something fails
- Retry logic, fallbacks, alerts, graceful degradation
- Example: "If API call fails, retry 3 times with exponential backoff, then alert human"

**Trace ID**
- Unique identifier for a single orchestration run
- Allows tracking all logs/actions from one execution
- Critical for debugging: "Show me everything that happened in run #47291"

**Schema**
- The structure of data being passed between steps
- Defines what fields exist, their types, what's required
- Example: Lead schema has `{name: string, email: string, company: string, warmth: "Hot"|"Warm"|"Cold"}`

**Handoff**
- Transferring work from one agent/system/human to another
- Requires clear contract about what's being passed
- Example: "AI drafts email, hands off to human for review, human approves, system sends"

### Agent Types

**Producer**
- Creates output (drafts, reports, designs)
- Example: AI that drafts email responses

**Reviewer**
- Evaluates quality of output
- Can be AI or human
- Example: Human reviews AI-drafted emails for accuracy

**Publisher**
- Executes final action (sends, posts, publishes)
- Usually has final approval authority
- Example: System sends email after human approval

---

## 5. Meet Alex: Lead Generation Example

Throughout Phase 3, we'll follow **Alex**, a fictional lead generation orchestration, to see how concepts apply in practice.

### Alex's Job

Alex processes inbound leads for a B2B software company:
1. Lead fills out contact form on website
2. Alex enriches lead data (company size, industry)
3. Alex classifies lead warmth (Hot/Warm/Cold) using AI
4. Alex drafts personalized follow-up email
5. Alex routes to appropriate sales rep
6. Alex logs everything for analytics

**Why Alex?**
- Simple enough to understand quickly
- Complex enough to show real orchestration concepts
- Realistic (actual business use case)
- Demonstrates both rules and AI
- Shows short-running orchestration (completes in < 1 minute)

### Alex in the 5-Block Model

**Block 1: TRIGGER**
- Webhook fires when lead submits contact form

**Block 2: INTAKE & NORMALIZATION**
- Parse form data (name, email, company, message)
- Validate required fields exist
- Look up company size from external API
- Standardize into JSON schema

**Block 3: DECISION**
- **Rule:** If message < 10 words → "Low Quality"
- **AI:** Classify lead warmth (Hot/Warm/Cold) based on message content
- **Rule:** Route based on company size + warmth:
  - Hot + Large company (>500 employees) → Senior Sales Rep
  - Hot + Small company → Junior Sales Rep
  - Warm → Nurture campaign
  - Cold → Newsletter only

**Block 4: ACTION(S)** (parallel)
- Create CRM record with lead + classification
- Draft personalized email using AI
- Send notification to assigned sales rep's Slack
- Add to appropriate email sequence
- Log to analytics database

**Block 5: REVIEW & LEARNING**
- Log: full lead details, classification, routing decision, time taken
- Metrics: leads processed, classification accuracy, response time
- Human review: sample 5% of AI classifications for quality check

### What You'll See in Each Section

- **Section 7 (Frameworks):** Alex introduced conceptually ← **YOU ARE HERE**
- **Section 8 (Workflows):** Complete Alex design document (prompts, schema, logic)
- **Section 9 (Automations):** Alex implemented in n8n (nodes, connections, error handling)
- **Section 10 (Orchestration):** Alex operations dashboard (metrics, optimization)

Same example, different lenses. By the end of Phase 3, you'll understand Alex from concept to production.

---

## 6. Framework Practice Exercises

### Exercise 1: Mapping Flows as Stories

**Goal:** Practice turning business processes into the 5-block model

**Your task:**
Pick one of your own business processes (or use these examples):
- Content publishing workflow
- Client onboarding process
- Customer support ticket handling
- Invoice processing and approval
- Weekly reporting generation

**Steps:**
1. **Tell the story** in plain language: "When X happens, we do Y, then Z..."
2. **Map to 5 blocks:**
   - What triggers the process?
   - What data needs cleaning/structuring?
   - What decisions get made?
   - What actions are taken?
   - What gets logged for improvement?
3. **Draw it:** Use boxes and arrows (whiteboard, paper, or tool like Miro)

**Example: Content Publishing**

**Story:** "Writer submits draft article. Editor reviews for quality. If approved, designer creates graphics. Content gets scheduled in CMS. Post-publication, we track engagement metrics."

**Mapped to 5 blocks:**
```sql
yaml
TRIGGER: Writer submits article to shared folder

INTAKE & NORMALIZATION:
- Extract article text, title, author
- Check word count meets minimum
- Run spell-check, format for consistent style

DECISION:
- Editor reviews: Approve / Request revisions / Reject
- If approved: AI suggests optimal publish time based on historical engagement

ACTION(S):
- Designer creates featured image
- Schedule in CMS for optimal time
- Generate social media posts
- Send notification to marketing team

REVIEW & LEARNING:
- Track: views, engagement, time-on-page
- Compare actual vs. predicted performance
- Update "optimal publish time" model
```python
markdown

---

### Exercise 2: Rules vs. AI Decisions

**Goal:** Practice distinguishing deterministic logic from AI judgment

**Your task:**
For each decision below, label it as **RULE** (deterministic) or **AI** (requires judgment):

1. "If email subject contains 'unsubscribe', route to compliance"
2. "Determine if customer sentiment is positive, neutral, or negative"
3. "If invoice total > $10,000, require manager approval"
4. "Classify support ticket urgency: Low, Medium, High, Critical"
5. "If form submitted between midnight and 6am, delay processing until 9am"
6. "Summarize 50-page research report into key findings"
7. "If customer is in 'VIP' tier, skip waitlist"
8. "Draft personalized response based on customer's question"
9. "If payment fails 3 times, suspend account"
10. "Detect if uploaded image contains company logo"

**Answers:**
1. RULE (simple text matching)
2. AI (sentiment requires understanding language nuance)
3. RULE (simple comparison)
4. AI (urgency requires understanding context)
5. RULE (time comparison)
6. AI (summarization requires understanding content)
7. RULE (simple lookup)
8. AI (personalization requires understanding question)
9. RULE (counting failures)
10. AI (image recognition requires computer vision)

**Now do it for your workflow:**
List every decision point in one of your processes. For each, determine: Rule or AI?

**Bonus challenge:** For AI decisions, draft the prompt you'd use.

---

### Exercise 3: Design a Handoff Contract

**Goal:** Practice creating clear contracts between orchestration components

**Your task:**
Pick one handoff from your workflow (or use this example: "AI drafts email → Human reviews → System sends")

**Design:**
1. **What gets passed?** (List all fields)
2. **What format?** (JSON structure)
3. **What's required vs. optional?**
4. **What counts as "ready for next step"?**

**Example: AI Draft → Human Review**

**Contract:**

| Field | Type | Required? | Constraints | Purpose |
|-------|------|-----------|-------------|---------|
| draft_id | String | Yes | Unique identifier | Track this specific draft |
| recipient_email | String | Yes | Valid email format | Who receives the email |
| subject | String | Yes | 5-100 characters | Email subject line |
| body | String | Yes | 50-5000 characters | Email content |
| tone | String | Yes | 'formal', 'casual', or 'friendly' | Writing style used |
| ai_confidence | Number | Yes | 0.0 to 1.0 | How confident AI is about quality |
| context_summary | String | No | Any length | Background info for reviewer |
| ready_to_review | Boolean | Yes | Must be true | Flag that draft is complete |
| drafted_at | Timestamp | Yes | ISO 8601 format | When draft was created |

**Quality criteria:**
- All required fields present
- Email format valid
- Body length appropriate
- AI confidence > 0.6 (if lower, flag for extra attention)
- Tone matches recipient relationship
- No placeholder text like "[INSERT NAME]"

---

### Exercise 4: Long-Running Orchestration Design

**Goal:** Practice adding state, concurrency, and stop conditions

**Scenario:** Design a research agent that gathers information from 50 online sources

**Your task:** Define:

**1. Checkpoints**
- When should progress be saved?
- What needs to be stored?

**Example answer:**
- Checkpoint after every 10 sources processed
- Store: `{sources_completed: 23, findings: [...], started_at: timestamp, last_checkpoint_at: timestamp}`

**2. Concurrency**
- Which tasks can run in parallel?
- How many at once?

**Example answer:**
- Process 5 sources simultaneously (not 1 at a time, not all 50 at once)
- Reason: Balance speed vs. rate limits

**3. Stopping Conditions**
- When should the process stop?
- What are all the ways it could end?

**Example answer:**
Stop when:
- 50 sources processed (success), OR
- 4 hours elapsed (timeout), OR
- API costs exceed $25 (budget limit), OR
- Found 30 high-quality findings (early success), OR
- 10 consecutive sources failed to load (system issue)

**4. Monitoring**
- What should appear on a dashboard?
- What alerts are needed?

**Example answer:**

**Dashboard shows:**
- Sources processed: 23/50
- Findings collected: 18
- Time elapsed: 1h 23m
- Cost so far: $8.40
- Current status: "Processing source 24 (Wikipedia)"

**Alerts when:**
- No progress for > 15 minutes
- Error rate > 20%
- Cost per source > $1 (higher than expected)

---

## When to Use This Section

Use this Frameworks section when you need to:
-  Understand orchestration conceptually (before building)
-  Explain orchestration to colleagues or stakeholders
-  Map a business process to the 5-block model
-  Decide if a workflow needs orchestration or just automation
-  Design at the whiteboard level (not implementation yet)

**Don't use this section when:**
-  You're ready to build (go to Section 9: Automations)
-  You need specific prompts or templates (go to Section 8: Workflows)
-  You're optimizing a live system (go to Section 10: Orchestration)

---

## Personal Notes

**Use this section to capture your insights, questions, and discoveries as you work through this guide.**

### Key Takeaways
*What are the most important concepts you'll remember from this guide?*

```text
json
[Your notes here]
```text
markdown

### Questions & Clarifications
*What needs more exploration or clarification?*

```text
json
[Your questions here]
```text
markdown

### Real-World Application
*How will you apply these frameworks to your own workflows?*

```text
json
[Your application ideas here]
```python
markdown

### Examples from Your Work
*Identify 2-3 orchestration opportunities in your current processes*

```text
json
[Your examples here]
```markdown

---

## Progress & Next Steps

### Completion Checklist

- [ ] **Understand orchestration** - What it is and when to use it
- [ ] **Master the two axes** - Horizontal (Deterministic ↔ Dynamic) and Vertical (Simple ↔ Complex)
- [ ] **Learn the 5-block model** - Trigger → Intake → Decision → Action → Review
- [ ] **Build vocabulary** - State, checkpoints, concurrency, handoffs
- [ ] **Study the Alex example** - Lead generation workflow foundation
- [ ] **Complete practice exercises** - Apply frameworks to your processes
- [ ] ** I've completed this guide** *(Check when done)*

### Reflection Questions

Before moving forward, ask yourself:

1. Can you explain orchestration to someone who's never heard of it?
2. Can you map a workflow from your life onto the 5-block model?
3. Do you understand when to use rules vs. AI judgment?
4. Are you ready to design a real workflow (next guide)?

---

## Next Steps

**You've completed Section 7: Frameworks!**

You now understand:
-  What orchestration is and when to use it
-  The two axes: Horizontal (Deterministic ↔ Dynamic) and Vertical (Simple ↔ Complex)
-  The 5-block model: Trigger → Intake → Decision → Action → Review
-  Core vocabulary: state, checkpoints, concurrency, handoffs
-  Alex, the lead generation example that continues through Phase 3

**Next:** Section 8 - Workflows Guide

Learn how to design complete orchestration workflows with:
- State schema design
- Prompt engineering for orchestration
- Decision logic mapping
- Error handling strategy
- Complete Alex workflow design document

[→ Continue to Section 8: Workflows Guide](8_Workflows_Guide_v1.0.md)

---

**Related Guides:**
- 8_Workflows_Guide_v1.0.md - Design orchestration workflows
- 9_Automations_Guide_v1.0.md - Implement in n8n
- 10_Orchestration_Guide_v1.0.md - Monitor and optimize

**Related Capabilities:**
- `3_AI_&_Human_Capabilities/7_Frameworks/` - Example frameworks and templates
