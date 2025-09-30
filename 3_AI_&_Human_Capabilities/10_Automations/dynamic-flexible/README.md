# Dynamic/Flexible Automations

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for dynamic-flexible capabilities
**Status:** Final

---

## What These Are

**AI-powered automations where AI actively makes judgments, classifications, or decisions in the workflow.**

Not just executing rules—actually thinking, interpreting, and adapting based on context.

## Characteristics

 **Handles ambiguity** - Works with messy, unstructured data
 **Context-aware** - Same input, different action based on context
 **Adaptive** - Can improve with feedback
 **Intelligent** - Makes judgments humans would make
 **Flexible** - Handles edge cases gracefully

 **Slower** - AI processing takes time
 **More expensive** - API costs per execution
 **Variable** - Results can vary slightly
 **Requires validation** - Need to test and verify outputs

## When to Use

- The decision requires judgment or interpretation
- Input is unstructured (text, voice, images)
- Context significantly changes the right action
- You need personalization or adaptation
- Rules would be impossibly complex

## Examples in This Folder

### 1. Lead-Quality-Classifier
**Pattern:** Lead message received → AI analyzes content → Classifies quality/warmth → Routes appropriately

**Needs AI because:** "Warmth" requires interpreting tone, urgency, specific needs expressed in unstructured text

**AI Decision:**
```
Input: "Hi, I downloaded your guide. We're a 500-person company currently using [competitor]. Our contract ends in 2 months and we're evaluating options. Would love to discuss."

AI Classification:
- Quality: High (specific need, company size, timeline)
- Warmth: Hot (active evaluation, near-term deadline)
- Intent: Evaluation (comparing solutions)
- Urgency: High (2 month timeline)

Output: Route to sales team immediately, VIP priority
```

**Why not rules?** You'd need thousands of rules to capture all the ways people express urgency and interest.

### 2. Content-Personalization-Engine
**Pattern:** User profile → AI generates personalized content → Send via preferred channel

**Needs AI because:** Personalization requires understanding profile nuances and generating natural language that fits

**AI Decision:**
```
Input Profile:
- Industry: Healthcare
- Role: CTO
- Pain points: ["legacy systems", "security compliance"]
- Engagement history: Downloaded security whitepaper, attended webinar on HIPAA

AI Generation:
"Hi [Name], I noticed you're focused on healthcare security compliance. Based on your interest in our HIPAA webinar, I thought you'd find value in seeing how [specific healthcare company] modernized their legacy systems while maintaining SOC 2 compliance..."

Output: Personalized email that references specific interests and industry context
```

**Why not rules?** Generic templates feel impersonal. AI can weave together profile elements naturally.

### 3. Sentiment-Based-Response-Router
**Pattern:** Customer message → AI determines sentiment and urgency → Routes and prioritizes appropriately

**Needs AI because:** Sentiment is subtle and context-dependent

**AI Decision:**
```
Input: "I've been trying to access my account for 3 days. This is incredibly frustrating and I'm considering canceling."

AI Analysis:
- Sentiment: Negative (frustrated, considering churn)
- Urgency: High (3 days without access, churn risk)
- Issue type: Account access
- Customer value: [extracted from profile] High (annual plan)

Output:
- Priority: Urgent
- Route: Senior support + Account manager notification
- Auto-draft empathetic response for agent to review
- Flag for retention team
```

**Why not rules?** Same words mean different things in different contexts. "considering canceling" from an annual customer is more urgent than from a trial user.

### 4. Intent-Detection-Workflow
**Pattern:** Message received → AI identifies intent → Triggers appropriate workflow

**Needs AI because:** People express intents in countless different ways

**AI Decision:**
```
Input: "Hey, just checking - did my payment go through?"

AI Intent Detection:
- Primary Intent: Payment_Status_Inquiry
- Confidence: 95%
- Secondary signals: Casual tone (not upset), just wants confirmation

Triggered Workflow:
1. Check payment status in system
2. If successful: Send confirmation with receipt
3. If pending: Explain expected timeline
4. If failed: Alert support + send troubleshooting

Alternative phrasing that triggers SAME intent:
- "I submitted payment yesterday, can you confirm it processed?"
- "Quick question about my invoice - did it clear?"
- "Want to make sure my credit card worked"
```

**Why not rules?** Infinite ways to express the same intent. AI handles linguistic variation.

### 5. Summary-and-Action-Extractor
**Pattern:** Long document/conversation → AI summarizes key points → AI extracts action items → Creates tasks

**Needs AI because:** Summarization and action extraction require understanding content, not just keywords

**AI Decision:**
```
Input: [30-minute meeting transcript about project planning]

AI Summary:
"Team discussed Q2 product launch. Agreed on 3-phase rollout: beta testing (Week 1-2), limited release (Week 3-4), full launch (Week 5). Key concern: QA bandwidth. Decision: hire contractor to support QA lead."

AI Extracted Actions:
1. @ProjectManager: Create beta testing timeline by Friday
2. @QALead: Interview QA contractors this week
3. @Marketing: Draft launch announcement (review in 2 weeks)
4. @Everyone: Submit rollout concerns by EOD tomorrow

Created Tasks: [Auto-generates tasks in project management system]
```

**Why not rules?** Can't predict every action phrase. AI understands "We need to..." "Let's make sure..." "Don't forget to..." all mean action items.

## n8n Implementation Pattern

All examples follow this structure:

```
1. TRIGGER NODE
   ↓
2. NORMALIZE DATA (Function node)
   ↓
3. AI NODE (OpenAI/Anthropic/Custom LLM)
    System prompt (defines AI's role and task)
    User message (formatted data)
    Output format (JSON or structured text)
   ↓
4. PARSE AI OUTPUT (Function node - validate JSON)
   ↓
5. CONDITIONAL LOGIC (based on AI's classification/decision)
   ↓
6. ACTIONS (different paths based on AI output)
   ↓
7. LOG/TRACK (including AI confidence, tokens used, cost)
```

**Key: AI node makes the intelligent decision, rules execute the results**

## File Format

Each example includes:
- `example-name-description.md` - Workflow description and AI's role
- `example-name-n8n.json` - Importable n8n workflow with AI nodes (when available)
- `example-name-prompt.md` - AI prompt templates and instructions
- `example-name-outputs.md` - Sample AI outputs for testing

## AI Decision Points

These decisions SHOULD use AI:

 **Classification** - "Is this urgent/warm/qualified/relevant?"
 **Sentiment analysis** - "How does the customer feel?"
 **Intent detection** - "What is the user trying to do?"
 **Content generation** - "Draft a personalized response"
 **Summarization** - "What are the key points?"
 **Extraction** - "Pull out action items/dates/names"
 **Quality assessment** - "Does this meet quality standards?"
 **Personalization** - "Adapt this based on profile"

## Common Patterns

### Pattern 1: Classify → Route
```
Unstructured input → AI classification → Route to appropriate handler
```

### Pattern 2: Analyze → Generate
```
Context data → AI analysis → AI generates personalized content
```

### Pattern 3: Extract → Structure
```
Messy text/document → AI extracts key info → Creates structured data
```

### Pattern 4: Score → Prioritize
```
Lead/ticket/message → AI scores multiple dimensions → Priority routing
```

### Pattern 5: Understand → Respond
```
Customer input → AI determines intent + sentiment → Draft response + route
```

## Prompt Engineering for Automations

**Key Principles:**

1. **Be Specific About Output Format**
```markdown
Output ONLY valid JSON in this format:
{
  "classification": "hot|warm|cold",
  "confidence": 0-100,
  "reasoning": "brief explanation"
}
```

2. **Provide Examples (Few-Shot)**
```markdown
Example 1:
Input: "We need this ASAP for our board meeting tomorrow"
Output: {"urgency": "high", "timeline": "24 hours"}

Example 2:
Input: "No rush, just curious about pricing"
Output: {"urgency": "low", "timeline": "flexible"}
```

3. **Define Edge Cases**
```markdown
If you cannot determine sentiment with confidence > 70%,
output: {"sentiment": "unclear", "requires_human_review": true}
```

4. **Include Context Guidelines**
```markdown
Consider:
- Tone of message (formal vs casual)
- Explicit timeline mentions
- Comparison to competitors (signals evaluation)
- Company size/role (higher stakes = higher urgency)
```

## Testing Dynamic Automations

More complex than deterministic:

1. **Accuracy Testing**
   - Test against known classifications
   - Measure agreement with human labelers
   - Track misclassifications

2. **Edge Case Testing**
   - Ambiguous inputs
   - Sarcasm, jokes, unclear intent
   - Multiple languages/formats

3. **Consistency Testing**
   - Same input multiple times
   - Should be similar (not identical)
   - Track when variation is too high

4. **Cost/Performance Testing**
   - Token usage per execution
   - Response time
   - Cost per classification/generation

5. **Drift Monitoring**
   - Performance over time
   - When model updates change behavior
   - When to retune prompts

## Combining with Deterministic

**Best Practice: Hybrid is most powerful**

```
Example: Lead Processing Workflow

DETERMINISTIC: Extract email domain
   ↓
DYNAMIC: AI classifies message content and quality
   ↓
DETERMINISTIC: If quality = "high" AND domain in enterprise_list
   ↓
DYNAMIC: AI generates personalized outreach
   ↓
DETERMINISTIC: Send via email platform, log to CRM, notify sales

RESULT: Structure from rules, intelligence from AI
```

## When to Use Deterministic Instead

Move BACK to deterministic when:

 AI is consistently making the same decision (now you know the rule!)
 Cost/speed matters and you've found clear patterns
 The decision space is actually smaller than you thought
 Rules would be simple (< 10 conditions)

Example: You start with AI classifying leads, but after 1000 runs you notice:
- 95% of leads mentioning competitors are "hot"
- 90% of leads with "@enterprise.com" domains are "high value"

→ Move these to deterministic rules, keep AI for the nuanced 20%

## Next Steps

1. Study these examples to understand when AI adds value
2. Practice writing prompts that produce structured output
3. Test AI automations thoroughly before production
4. Monitor cost and performance over time
5. Combine with deterministic rules for optimal workflows

---

**Remember:** AI should make the decisions that require judgment. Rules should execute the results. The magic is knowing which is which.
