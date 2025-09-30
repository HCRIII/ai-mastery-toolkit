# Prompt Library Template

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Proven prompt pattern with examples and usage guidance
**Status:** Final

---

**Template for documenting and versioning orchestration prompts. Use this for each AI decision in your workflow.**

Each prompt in an orchestration workflow needs clear documentation before implementation.

---

## How to Use This Template

1. **Create one section per prompt** - One for each AI decision/action in your workflow
2. **Test before documenting** - Try it with 3-5 sample inputs first
3. **Version control** - Track changes and why they were made
4. **Share with team** - Everyone needs to know which prompt version is in production

---

## Prompt Template (Copy for Each Prompt)

### Prompt Name: [Name - e.g., "Lead Qualification Scorer"]

#### Basic Information

| Field | Details |
|-------|---------|
| **Prompt ID** | Unique identifier (e.g., "lead_scorer_v2") |
| **Purpose** | What is this prompt's job in the workflow? |
| **Workflow** | Which workflow uses this prompt? |
| **Step** | At which step does it run? |
| **Trigger Condition** | When should this prompt execute? (e.g., "After intake completes") |
| **Owner** | Who owns/maintains this prompt? |

#### Input Requirements

**What data must be provided to this prompt:**

| Input Field | Type | Required? | Example | Notes |
|------------|------|-----------|---------|-------|
| | | Yes/No | | |
| | | Yes/No | | |

**Data sources:** Where does each input come from?

| Input Field | Source | How Retrieved |
|------------|--------|----------------|
| | From [step/system] | Via [API/variable/state] |
| | | |

#### Output Requirements

**Exact structure this prompt must return:**

| Output Field | Type | Required? | Example | Possible Values |
|-------------|------|-----------|---------|-----------------|
| | | Yes/No | | |
| | | Yes/No | | |

**Output validation:**
-  All required fields present
-  Proper JSON structure
-  Scores/numbers in valid range
-  No placeholder text or [BRACKETS]

---

#### The Prompt Text

**Copy this exact prompt to your automation tool:**

```
[SYSTEM INSTRUCTION]
You are a [description of role].

[CONTEXT & SCHEMA]
Here's what you know about [domain]:
- [Context point 1]
- [Context point 2]

You will receive input in this format:
[Input schema/examples]

You must return output in exactly this JSON format:
[Output schema with all fields]

[TASK DESCRIPTION]
Your job: [What specifically to do]

[INSTRUCTIONS]
- [Rule 1]
- [Rule 2]
- [Critical rule in bold or caps]

[ERROR HANDLING]
If [condition], then [action]
If [condition], then [action]

USER INPUT:
[Describe where actual input goes]
```

---

#### Testing & Examples

**Test this prompt with these sample cases:**

##### Sample 1: [Scenario Name]

**Input:**
```
[Provide sample input data]
```

**Expected Output:**
```
[What should this return?]
```

**Status:**  Produces expected output  Needs revision

**Notes:** [Any issues or patterns observed]

---

##### Sample 2: [Scenario Name]

**Input:**
```
[Sample 2 input]
```

**Expected Output:**
```
[Expected output]
```

**Status:**  Produces expected output  Needs revision

**Notes:** [Any observations]

---

##### Sample 3: [Scenario Name]

**Input:**
```
[Sample 3 input]
```

**Expected Output:**
```
[Expected output]
```

**Status:**  Produces expected output  Needs revision

**Notes:** [Any observations]

---

#### Quality & Confidence

**For scoring/classification prompts, define quality checks:**

| Quality Check | How to Measure | Pass Criteria | Notes |
|---------------|----------------|---------------|-------|
| [Check 1] | [Method] | [Standard] | |
| [Check 2] | [Method] | [Standard] | |

**Confidence threshold:** Minimum acceptable confidence score (if applicable)
- Confidence >= [X] = Accept output as-is
- Confidence < [X] = Flag for human review or use fallback

---

#### Edge Cases & Fallbacks

**What if required data is missing?**

| Edge Case | Detection | Action |
|-----------|-----------|--------|
| [Missing field] | Check if null/empty | Use default [X] OR flag for human review |
| [Invalid value] | Validation fails | Return error message OR use conservative classification |
| [Ambiguous input] | Confidence too low | Escalate to human OR use previous classification |

**Fallback behavior:**

| Scenario | Fallback Action |
|----------|-----------------|
| API timeout | [What we do instead] |
| Invalid JSON output | [How we recover] |
| Confidence < threshold | [Conservative option] |

---

#### Performance & Cost

**Typical metrics for this prompt (based on testing):**

| Metric | Value | Notes |
|--------|-------|-------|
| Average latency | [X] seconds | How long does it usually take? |
| Token usage | [X] tokens | Typical tokens used |
| Cost per run | $[X] | Typical USD cost |
| Success rate | [X]% | % of calls succeed first attempt |

---

#### Version History

**Track changes to this prompt:**

| Version | Date | Changes | Reason | Tested |
|---------|------|---------|--------|--------|
| v1.0 | [Date] | Initial version | [Reason] | [Yes/No] |
| v1.1 | [Date] | [What changed] | [Why] | [Yes/No] |
| v2.0 | [Date] | [Significant changes] | [Why] | [Yes/No] |

**Current production version:** [Version]

**Deprecation notes:** Any deprecated versions and why?

---

#### Related Prompts

**Prompts that feed into or consume from this prompt:**

| Relationship | Prompt Name | How They Connect |
|-------------|------------|-----------------|
| Uses input from | [Prompt name] | [How the data flows] |
| Outputs feeds to | [Prompt name] | [How the data flows] |

---

#### Usage Notes for Team

**When to use this prompt:**

-  [Scenario 1]
-  [Scenario 2]

**When NOT to use:**

-  [Scenario where it would fail]
-  [Scenario where manual review is better]

**Common questions:**

| Question | Answer |
|----------|--------|
| What if [situation]? | [Answer] |
| How confident is it in [domain]? | [Answer] |

---

---

## Complete Example: Lead Warmth Classification Prompt

(Use this as reference for your own prompts)

---

### Prompt Name: Lead Warmth Classification

#### Basic Information

| Field | Details |
|-------|---------|
| **Prompt ID** | lead_warmth_classifier_v2 |
| **Purpose** | Classify incoming leads as Hot/Warm/Cold based on ICP fit and engagement signals |
| **Workflow** | Alex Lead Processing Workflow |
| **Step** | Decision step (after intake normalization) |
| **Trigger Condition** | After intake completes and message passes quality check (length > 10 words) |
| **Owner** | Sales Ops (John Smith) |

#### Input Requirements

| Input Field | Type | Required? | Example | Notes |
|------------|------|-----------|---------|-------|
| name | String | Yes | "Sarah Chen" | Contact name |
| company | String | Yes | "TechCorp Inc" | Company name |
| company_size | Number | Yes | 2500 | Number of employees |
| industry | String | Yes | "SaaS" | Industry classification |
| message_text | String | Yes | "Hi, we're looking..." | Original inquiry message |
| message_summary | String | No | "Evaluating platform for scaling team" | AI-generated 1-sentence summary |

**Data sources:**

| Input Field | Source | How Retrieved |
|------------|--------|----------------|
| name, company, message_text | Intake step output | From normalized_data state |
| company_size, industry | External enrichment API (Apollo/Clearbit) | API call or database lookup |
| message_summary | Previous AI call (intake normalization) | From normalized_data.message_summary |

#### Output Requirements

| Output Field | Type | Required? | Example | Possible Values |
|-------------|------|-----------|---------|-----------------|
| warmth | String | Yes | "Hot" | Hot / Warm / Cold |
| confidence | Number | Yes | 0.92 | 0.0 to 1.0 |
| fit_score | Number | Yes | 8 | 0 to 10 |
| intent_category | String | Yes | "Product_inquiry" | Product_inquiry / Info_gathering / Budget_inquiry / Other |
| reasoning | String | Yes | "Specific company need, evaluating product, professional tone" | Explanation of classification |
| red_flags | Array | No | ["budget not mentioned"] | Any concerns |
| next_action_suggested | String | No | "send_call_invite" | Recommended next step |

---

#### The Prompt Text

```
SYSTEM INSTRUCTION:
You are a B2B lead classification expert. Your job is to evaluate inbound leads
and classify them by warmth (Hot/Warm/Cold) based on how well they fit our ICP
and strength of engagement signals.

CONTEXT & SCHEMA:

Our ICP (Ideal Customer Profile):
- Company size: 50-5000 employees
- Industry: SaaS, Marketing Technology, Sales Tech (preferred)
- Pain point: Scaling teams, process automation, collaboration
- Decision maker: VP of Sales, SVP Operations, Director of Operations

What "Hot" looks like:
- Specific problem mentioned that matches our solution
- Clear urgency or timeline signals
- Company size in ICP range
- Matches target industry
- Professional tone, thoughtful inquiry
- Confidence score: 7+ for warmth

What "Warm" looks like:
- General interest in category (not specific to us)
- Could fit our ICP but needs more info
- Early stage evaluation, not urgent
- Possible industry or size mismatch
- Confidence score: 5-7

What "Cold" looks like:
- Generic inquiry or spam indicators
- Outside our ICP (too small, wrong industry)
- Budget/pricing focused without context
- Low engagement signals
- Confidence score: 0-4

INPUT FORMAT:
You will receive a JSON object with:
{
  "name": string,
  "company": string,
  "company_size": number,
  "industry": string,
  "message_text": string,
  "message_summary": string
}

OUTPUT FORMAT:
Return ONLY valid JSON, no explanation:
{
  "warmth": "Hot" | "Warm" | "Cold",
  "confidence": 0.0-1.0,
  "fit_score": 0-10,
  "intent_category": "Product_inquiry" | "Info_gathering" | "Budget_inquiry" | "Other",
  "reasoning": "2-3 sentences explaining your classification",
  "red_flags": ["red flag 1", "red flag 2"] or [],
  "next_action_suggested": "send_call_invite" | "send_nurture" | "light_touch" | "no_action"
}

TASK DESCRIPTION:
Evaluate this lead and return a warmth classification with reasoning.

SCORING RULES:

FOR FIT SCORE (0-10):
- 9-10: Perfect match (right size, industry, problem, urgency)
- 7-8: Strong alignment (2-3 key ICP criteria met)
- 5-6: Possible fit (1 key criteria met, others unclear)
- 3-4: Weak alignment (outside ICP but shows interest)
- 0-2: Not a fit (spam, wrong target, no relevance)

ENGAGEMENT SIGNALS (look for in message):
Positive signals (increase warmth):
+ Specific problem mentioned ("scaling our support team", "we need automation")
+ Company mentioned by name (not generic "we")
+ Timeline or urgency ("we're evaluating now", "urgent need")
+ Shows research ("saw your case study", "your product looks like")
+ Professional tone, proper grammar

Negative signals (decrease warmth):
- Generic message ("interested in learning more")
- Generic greeting ("Hi there", "Hi team")
- Budget/pricing focus without context
- No specifics about problem or use case
- Multiple typos or unprofessional tone
- Appears to be mass outreach

CONFIDENCE RULES:
High confidence (0.8-1.0): Message contains 3+ strong engagement signals
Medium confidence (0.6-0.8): Message contains 1-2 clear signals
Low confidence (0.4-0.6): Signals are ambiguous or contradictory
Very low confidence (<0.4): Not enough information, mark for human review

EDGE CASES:
- If company_size missing: Use message context ("we're a small team" = small, etc.)
- If industry missing: Look for industry signals in message
- If message very short (<20 words): Can still classify if signals are clear
- If budget inquiry: Can still be Hot if company matches ICP and timeline clear

CRITICAL RULES:
1. NEVER return JSON with missing required fields
2. ALL warmth values must be exactly: "Hot", "Warm", or "Cold"
3. confidence must be between 0.0 and 1.0
4. fit_score must be 0-10 as integer
5. If confidence < 0.6, recommend "flag_for_human_review" in next_action
6. reasoning must explain your decision (not just list signals)
```

#### Testing & Examples

##### Sample 1: Hot Lead - Specific Problem, Timeline, ICP Match

**Input:**
```json
{
  "name": "Sarah Chen",
  "company": "TechCorp Inc",
  "company_size": 2500,
  "industry": "SaaS",
  "message_text": "Hi, we're looking at your platform for our scaling team. We're evaluating solutions now and your case study with similar companies caught our eye. Can we schedule a quick call this week?",
  "message_summary": "Evaluating platform for scaling team, timeline is this week"
}
```

**Expected Output:**
```json
{
  "warmth": "Hot",
  "confidence": 0.92,
  "fit_score": 8,
  "intent_category": "Product_inquiry",
  "reasoning": "Clear specific problem (scaling team), company in ICP (2500 employees, SaaS), shows research (mentions case study), urgency signals (evaluating now, this week). Professional tone. Strong match.",
  "red_flags": [],
  "next_action_suggested": "send_call_invite"
}
```

**Status:**  Produces expected output

**Notes:** This is ideal scenario - clear signals, timeline, ICP fit.

---

##### Sample 2: Warm Lead - Interested but Early Stage

**Input:**
```json
{
  "name": "Mike Johnson",
  "company": "SalesFlow Solutions",
  "company_size": 180,
  "industry": "Sales Tech",
  "message_text": "Hi, we're just starting to explore automation tools for our team. Would like to learn more about what you offer. Thanks.",
  "message_summary": "Interested in learning about automation tools, early stage"
}
```

**Expected Output:**
```json
{
  "warmth": "Warm",
  "confidence": 0.75,
  "fit_score": 6,
  "intent_category": "Info_gathering",
  "reasoning": "Company matches ICP (Sales Tech, right size), shows interest in relevant category (automation). However, message is generic, no specific problem stated, no urgency signals. Early stage evaluation.",
  "red_flags": ["generic inquiry", "no timeline mentioned"],
  "next_action_suggested": "send_nurture"
}
```

**Status:**  Produces expected output

**Notes:** Early stage, good industry fit, but lacks urgency. Nurture appropriate.

---

##### Sample 3: Cold Lead - Outside ICP, Generic

**Input:**
```json
{
  "name": "Marketing Team",
  "company": "StudentHub",
  "company_size": 15,
  "industry": "Education",
  "message_text": "Hi, are you able to send over pricing? We might be interested.",
  "message_summary": "Pricing inquiry"
}
```

**Expected Output:**
```json
{
  "warmth": "Cold",
  "confidence": 0.88,
  "fit_score": 2,
  "intent_category": "Budget_inquiry",
  "reasoning": "Company outside ICP (small, wrong industry - education not target). Generic message, budget-focused without context of problem. No professional tone or engagement signals.",
  "red_flags": ["outside target industry", "too small (15 employees)", "budget-focused without problem context"],
  "next_action_suggested": "light_touch"
}
```

**Status:**  Produces expected output

**Notes:** Clear fit mismatch. Can add to newsletter but not sales outreach.

---

#### Quality & Confidence

| Quality Check | How to Measure | Pass Criteria | Notes |
|---------------|----------------|---------------|-------|
| Warmth accuracy | Manual review of 20 leads | 90%+ match to human assessment | Based on sales team feedback |
| Fit score correlation | Correlation to actual deal pipeline | R > 0.7 | Hot leads should convert at higher rate |
| Confidence calibration | Compare to actual outcomes | Predicted confidence matches actual success rate | If confident=0.9, should see ~90% success |
| False positives | Track cold leads marked as Hot | < 5% misclassification | Don't want to waste sales time |

**Confidence threshold:**
- Confidence >= 0.75 = Accept output, route automatically
- Confidence 0.60-0.74 = Accept output but flag for monitoring
- Confidence < 0.60 = Flag for human review before routing

---

#### Edge Cases & Fallbacks

| Edge Case | Detection | Action |
|-----------|-----------|--------|
| Missing company_size | company_size field is null | Use context from message ("small startup" = <50, "enterprise" = >1000) |
| Missing industry | industry field is null or unknown | Try to infer from message context or company domain |
| Very short message | message_text < 20 words | Can still classify if 1+ strong signal is clear, lower confidence |
| Confidence < 0.6 | confidence field < 0.6 | Mark as "needs_human_review", don't auto-route |
| Invalid company size | company_size is negative or 0 | Default to medium (500), note as incomplete data |

**Fallback behavior:**

| Scenario | Fallback Action |
|----------|-----------------|
| API timeout generating output | Return warmth="Warm" (conservative), confidence=0.5, flag for human review |
| Invalid JSON output | Retry prompt once, if still fails return warmth="Cold" and escalate |
| Confidence too low (<0.4) | Mark for human review, suggest next_action="flag_for_human_review" |

---

#### Performance & Cost

| Metric | Value | Notes |
|--------|-------|-------|
| Average latency | 2-3 seconds | Depends on model and queue |
| Token usage | 400-600 tokens | Varies with message length |
| Cost per run | $0.008-0.012 | At current API pricing |
| Success rate | 98% | Failures are invalid JSON, rare |

---

#### Version History

| Version | Date | Changes | Reason | Tested |
|---------|------|---------|--------|--------|
| v1.0 | Jan 15, 2026 | Initial version | Launch workflow | Yes |
| v1.1 | Jan 28, 2026 | Added red_flags field | Better tracking of concerns | Yes |
| v2.0 | Feb 5, 2026 | Improved confidence scoring, added intent_category | Better nuance in early-stage vs budget-focused | Yes |

**Current production version:** v2.0
**Last updated:** Feb 5, 2026

---

#### Related Prompts

| Relationship | Prompt Name | How They Connect |
|-------------|------------|-----------------|
| Uses input from | Lead Normalization | Takes normalized lead data as input |
| Outputs feeds to | Personalized Email Generator | Uses warmth/fit_score to customize email template |
| Outputs feeds to | Routing Decision (Rule) | Warmth + company_size determine sales rep assignment |

---

#### Usage Notes for Team

**When to use this prompt:**

-  For every inbound lead that passes quality check
-  For leads with message > 10 words
-  For re-qualification if lead updates profile

**When NOT to use:**

-  For low-quality leads (message < 10 words) - use rule-based Cold classification
-  For existing customers - they already passed qualification
-  For internal team members - not prospects

**Common questions:**

| Question | Answer |
|----------|--------|
| What if company info is wrong/outdated? | Use message context first, note discrepancy for CRM cleanup |
| Can it detect spam/bot emails? | Partially - looks for signal patterns. Flag anything suspicious for human review. |
| How often should we retrain it? | Review performance monthly. Adjust if sales feedback shows misclassifications. |
| What if we change our ICP? | Update the ICP section of this prompt, test with 20 leads, track accuracy |

---

## Summary of All Prompts in Workflow

Use this table to track which prompts are in production:

| Prompt ID | Purpose | Version | Owner | Status |
|-----------|---------|---------|-------|--------|
| lead_normalization_v1 | Clean raw lead data | v1 | Sales Ops | Production |
| lead_warmth_classifier_v2 | Classify warmth Hot/Warm/Cold | v2 | Sales Ops | Production |
| email_generator_personalization_v1 | Draft personalized first email | v1 | Marketing | Production |
| routing_rule_assignment | Route to correct rep (rule-based) | N/A | Sales Ops | Production |

---

**Last Updated:** February 8, 2026

