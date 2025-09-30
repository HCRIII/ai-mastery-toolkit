# Optimization Playbook

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

**Common Optimization Techniques for Orchestration Systems**

Once your orchestration system is running, the real work begins: making it faster, cheaper, and better. This playbook provides **battle-tested optimization techniques** organized by goal.

---

## Part 1: Reducing Cost

Your orchestration system has a cost per run. Every 10% reduction in cost per run has direct business impact. Here are the most effective cost reduction techniques.

### Technique 1.1: Switch to Cheaper Models

**The Idea:** Not all tasks need the most expensive models.

**Implementation:**

| Task Type | Expensive | Cheaper | Savings | Risk |
|-----------|-----------|---------|---------|------|
| Summarization | GPT-4 | Claude 3.5 Haiku | 60-70% | Low (similar quality) |
| Classification | GPT-4 | Claude 3.5 Haiku | 70% | Very Low (simple task) |
| Data Extraction | GPT-4 | Claude 3.5 Sonnet | 40-50% | Low (structured) |
| Creative Writing | GPT-4 | Claude 3.5 Sonnet | 30-40% | Medium (quality matters) |
| Complex Analysis | Claude Opus | Claude 3.5 Sonnet | 50% | Medium (test carefully) |
| Simple Routing | GPT-4 | GPT-3.5 | 80% | Low (binary/multi-choice) |

**How to Implement:**

1. **Identify candidates:**
   - Look at your step latencies + costs
   - Find steps that cost >15% of total workflow cost
   - Check if step is simple (classification, extraction, routing)

2. **Test the change:**
   - Run A/B test: 20% traffic on cheaper model for 2-3 days
   - Compare outputs (same quality?)
   - Check for edge cases

3. **Rollout:**
   - If quality is equivalent, switch 100%
   - Monitor for issues in production
   - Document the change

**Example:**

```
Before:
  Step: "Generate Summary"
  Model: GPT-4 Turbo
  Cost: $0.03/run
  Quality: 95%

After:
  Step: "Generate Summary"
  Model: Claude 3.5 Haiku
  Cost: $0.009/run (-70%)
  Quality: 93% (tested on 100 samples)

Impact: -$200/week (on 10,000 runs/week)
Effort: Low (1 hour to test)
```

**Red Flags:**
- Quality drops > 5%
- New error types appearing
- Model struggles with edge cases

### Technique 1.2: Combine API Calls

**The Idea:** Multiple steps = multiple API calls. Can you combine them?

**Implementation:**

Instead of:
```
Step 1: Extract data from input
Step 2: Classify the input
Step 3: Generate summary
```

Do:
```
Step 1: Extract data, classify, AND generate summary
         (all in one API call)
```

**Savings:** 66% fewer API calls (3 calls → 1 call)

**How to Implement:**

1. **Audit your steps:**
   - Count total API calls per workflow
   - Note which steps could be combined

2. **Combine in prompt:**
   ```
   OLD PROMPT (Step 1):
   "Extract the following from the email: sender, subject, type"

   OLD PROMPT (Step 2):
   "Classify this email as urgent/normal/low priority"

   NEW COMBINED PROMPT:
   "Extract sender, subject, type AND classify as urgent/normal/low.
    Return JSON with both."
   ```

3. **Test:**
   - Does output still work correctly?
   - Is quality maintained?

4. **Rollout:**
   - Update your workflow to use combined step
   - Remove old steps

**Example:**

```
Before:
  Step 1: Extract entities (GPT-4) - $0.008
  Step 2: Sentiment analysis (GPT-4) - $0.008
  Step 3: Generate response (GPT-4) - $0.015
  Total: $0.031/run

After:
  Step 1: Extract entities + sentiment + generate response - $0.018
  Total: $0.018/run (-42%)

Impact: -$130/week (on 10,000 runs/week)
Effort: Medium (refactor prompts, test)
```

**Best Candidates for Combining:**
- Multiple API calls to same model
- Steps with sequential dependency
- Steps operating on same input data

### Technique 1.3: Implement Caching

**The Idea:** Many inputs are repeated. Cache the outputs.

**Implementation:**

```
Incoming request
    ↓
Check cache (is this exact input before?)
     YES: Return cached result (-API call, -cost, instant response)
     NO: Call API, then cache result for next time
```

**Savings:** 20-50% fewer API calls (depends on repeat rate)

**How to Implement:**

1. **Choose what to cache:**
   - Full workflow results
   - Expensive step results
   - Things that don't change (reference data)

2. **Set cache key:**
   ```
   Cache key = hash of (input + model + temperature)

   Example:
   - Same exact input? Use cache
   - Input is similar but different? New call
   - Same input, different model? New call
   ```

3. **Set cache duration:**
   - Reference data: 1 month
   - User-specific data: 7 days
   - Trending data: 1 day
   - Real-time data: Don't cache

4. **Implement:**
   ```python
   def process_request(input_text, model="claude-3-5-haiku"):
       cache_key = hash((input_text, model))

       # Check cache
       cached = cache.get(cache_key)
       if cached:
           return cached

       # Not cached, call API
       result = api.call(input_text, model)

       # Store in cache for 7 days
       cache.set(cache_key, result, ttl=7*24*3600)

       return result
   ```

5. **Monitor:**
   - Cache hit rate (should be >10% if working)
   - Cache size (doesn't grow unbounded)
   - Stale results (are we serving old data?)

**Example:**

```
System: AI-powered email classifier

Before:
  - 1000 emails/day
  - Every email is new, no repeats
  - Cost: $0.006/email = $6/day

After:
  - Add email body caching (exact same emails rarely sent twice)
  - But add sender/company name caching
  - 40% of lookups are cached (known senders)
  - Cost: $0.004/email = $4/day (-33%)

Impact: -$60/month
Effort: Medium (implement caching layer)
```

**When Caching Works Best:**
- Reference data (company info, definitions)
- Repeated user inputs
- Expensive enrichment tasks
- Data that changes slowly

**When Caching Doesn't Help:**
- All unique inputs (news summarization)
- Real-time data (stock prices)
- Personalized results (each user different)

### Technique 1.4: Batch Processing

**The Idea:** Instead of processing 100 items individually (100 API calls), process them together (1-2 calls).

**Implementation:**

```
Individual:
Request 1 → API → Response 1
Request 2 → API → Response 2
Request 3 → API → Response 3
(3 API calls)

Batch:
[Request 1, Request 2, Request 3] → API → [Response 1, Response 2, Response 3]
(1 API call)
```

**Savings:** 90%+ fewer API calls

**How to Implement:**

1. **Collect items:**
   - Wait for 10-100 items to accumulate
   - Or run batch at end of day
   - Trade-off: latency vs cost

2. **Format as batch:**
   ```
   Prompt: "Process these 50 leads. For each, extract name, email, company:

   1. John Smith from acme.com
   2. Jane Doe at techcorp...
   [50 items]

   Return JSON array with 50 objects."
   ```

3. **Parse results:**
   - Split response back into individual results
   - Validate you got all 50

4. **Store individually:**
   - Even though processed as batch
   - Users see individual responses

**Example:**

```
System: Daily email digest processing

Before:
  - 500 emails/day processed individually
  - 500 API calls/day
  - Cost: $2.50/day

After:
  - Batch process 50 at a time (10 batches)
  - 10 API calls/day
  - Cost: $0.05/day (-98%)

Impact: -$74/month
Effort: Medium (queue + batch processor)
Latency: Emails processed in batches (1hr delay acceptable)
```

**Tradeoffs:**
- Lower cost, but higher latency
- Can combine: fast path (immediate) + batch (slow path)

### Cost Reduction Quick Win Checklist

Before moving to other optimizations, try these quick wins:

- [ ] Audit expensive steps (>$0.01 each)
- [ ] Identify simple steps (classification, extraction)
- [ ] Test cheaper model on one simple step
- [ ] Calculate potential savings
- [ ] If >20% savings, implement

---

## Part 2: Improving Speed

Speed matters for user experience. Slow workflows frustrate users and limit throughput.

### Technique 2.1: Parallelize Independent Steps

**The Idea:** If steps don't depend on each other, run them simultaneously.

**Sequential (Slow):**
```
Input
  ↓
Step 1: Extract data (10s)
  ↓
Step 2: Classify (8s)
  ↓
Step 3: Sentiment analysis (12s)
  ↓
Output
Total time: 30s
```

**Parallel (Fast):**
```
Input
  → Step 1: Extract data (10s)
  → Step 2: Classify (8s)
  → Step 3: Sentiment analysis (12s)
  → (all run together)
     Max time: 12s (longest step)
Output
Total time: 12s (-60%)
```

**How to Implement:**

1. **Identify independent steps:**
   - Step 2 doesn't use output from Step 1? Parallel!
   - Step 2 uses Step 1's output? Sequential.

2. **Update workflow:**
   ```
   In n8n:
   - Instead of connecting Step 1 → Step 2 → Step 3
   - Connect all to same input, set as parallel
   - Merge results at the end

   In code:
   - Use asyncio / Promise.all
   - Launch all requests at once
   - Wait for all to complete
   ```

3. **Merge results:**
   ```
   After all steps complete:
   Final output = {
     "extracted": result1,
     "classified": result2,
     "sentiment": result3
   }
   ```

**Example:**

```
System: Lead enrichment

Before:
  Step 1: Verify email (5s)
  Step 2: Check LinkedIn (8s)
  Step 3: Extract company info (6s)
  Step 4: Check spam lists (4s)
  Total: 23s

After:
  Steps 1,2,3,4 run in parallel
  Longest: 8s
  Total: 8s (-65%)

Benefit: Process 3x more leads/hour
Effort: Low (workflow restructuring)
```

**Red Flags:**
- Still not fast enough? Optimize slow steps individually
- High error rate after parallelizing? Add error handling

### Technique 2.2: Reduce Token Count

**The Idea:** Longer prompts = longer API calls = slower. Make prompts more efficient.

**Implementation:**

**Verbose Prompt (1000 tokens):**
```
You are an expert email classifier with 20 years of experience
in customer support systems. Your job is to read incoming customer
emails and classify them into one of these categories:

1. Billing Issue - anything about payments, invoices, subscriptions
2. Technical Issue - problems with the product or service
3. Feature Request - customers asking for new features
4. General Question - simple questions
5. Complaint - customer expressing dissatisfaction
6. Feedback - positive or neutral feedback about the product

Please carefully read the email below and determine which of these
five categories it best fits into. Consider the context, tone, and
specific details mentioned.

Email: [actual email - 500 tokens]
```

**Efficient Prompt (200 tokens):**
```
Classify email as: Billing | Technical | Feature | Question | Complaint | Feedback

Email: [actual email]
```

**Savings:** -80% tokens, -80% cost, -80% latency

**How to Implement:**

1. **Audit prompts:**
   - Copy current prompt
   - Count tokens (use tokenizer)
   - Identify fluff

2. **Remove fluff:**
   - "You are an expert..." → Remove (doesn't help)
   - Long explanations → One sentence
   - Examples → Keep only if needed for quality

3. **Keep examples:**
   ```
   GOOD: Include 1-2 examples if critical for quality
   BAD: Include 10 examples (too much)

   Example:
   "Classify as: Billing | Technical | Feature | Question | Complaint | Feedback

   Email: 'I can't log in to my account'
   Classification: Technical

   Email: [actual input]"
   ```

4. **Test:**
   - Does quality stay same with shorter prompt?
   - Measure: token count, latency, cost

**Example:**

```
System: Customer email classifier

Before:
  Prompt: 800 tokens
  Input: 300 tokens
  Total: 1100 tokens = $0.0055/email

After:
  Prompt: 100 tokens (removed fluff)
  Input: 300 tokens
  Total: 400 tokens = $0.002/email (-64%)

Impact: -$2/day (on 1000 emails/day)
Effort: Low (rewrite prompts)
```

**What to Keep:**
- Task definition (brief)
- Output format (if not obvious)
- 1-2 examples (if quality is fragile)
- Key context (if truly needed)

**What to Remove:**
- Flattery ("you are an expert")
- Life story ("I've been doing this for 20 years")
- Repetition ("this is important, really important")
- Obvious context

### Technique 2.3: Use Streaming

**The Idea:** Start processing results before API call completes.

**Standard (Wait for complete response):**
```
API Call
    ↓ (wait for full response - 3s)
    ↓
Return response
    ↓
Process response
Total: 3s
```

**Streaming (Process as data arrives):**
```
API Call
    ↓
First token arrives (50ms) → Start processing
    ↓
More tokens arrive → Keep processing
    ↓
Final token arrives → Done
Total: 500ms faster (perceived)
```

**When to Use:**
- User-facing workflows (they see results appearing)
- Long outputs (paragraphs of text)
- Real-time dashboards

**When NOT to Use:**
- API-to-API (no human watching)
- Short outputs (< 50 tokens)
- Need complete output before processing next step

**How to Implement:**

```python
# Standard
response = client.messages.create(
    model="claude-3-5-haiku",
    max_tokens=1024,
    messages=[{"role": "user", "content": prompt}]
)
full_text = response.content[0].text

# Streaming
with client.messages.stream(
    model="claude-3-5-haiku",
    max_tokens=1024,
    messages=[{"role": "user", "content": prompt}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)  # Show as it arrives
```

**Example:**

```
System: Real-time document generation

Before (Standard):
  - API call takes 3s to complete
  - Then return entire document to user
  - User waits 3s seeing spinning loader

After (Streaming):
  - First word appears in 50ms
  - Document appears to generate in real-time
  - User sees progress
  - Total perceived latency: Much faster (even if API takes 3s)

Impact: Better UX, same API cost
Effort: Medium (update API integration)
```

### Speed Optimization Checklist

- [ ] Find slowest step (Step latency analysis)
- [ ] Can step be parallelized?
- [ ] Can prompt be shorter?
- [ ] Can cheaper/faster model be used?
- [ ] Is caching being used?
- [ ] Can step be simplified?

---

## Part 3: Enhancing Quality

Quality is harder to optimize than cost/speed. Here are proven techniques.

### Technique 3.1: Prompt Refinement

**The Idea:** Small changes to prompt instructions can have big impact on quality.

**Implementation:**

**Version 1 (Vague):**
```
Summarize this article: [article]
```
→ Output might be too long, might miss key points, unclear focus

**Version 2 (Specific):**
```
Summarize this article in 2-3 sentences. Focus on:
1. Main finding/discovery
2. Why it matters
3. What's next

Key constraint: Must be readable by 8th grader (use simple language)
```
→ Output is focused, right length, clear point

**Version 3 (With Example):**
```
Summarize this article in 2-3 sentences.

Example:
Article: "Scientists discover that coffee reduces cancer risk..."
Summary: "A new study found that drinking coffee daily may lower
cancer risk. The research is significant because previous studies
were unclear. Scientists will now study which compounds in coffee
cause the effect."

Now summarize this article: [article]
```
→ Output matches expected style, length, focus

**How to Implement:**

1. **Audit quality issues:**
   - What's going wrong? (too long, wrong focus, too simple)
   - What would "right" look like?

2. **Refine prompt:**
   - Add specificity (numbers, constraints)
   - Add examples (1-2 good ones)
   - Add clarification (what should be emphasized)

3. **A/B test:**
   - Run old prompt on 20 samples
   - Run new prompt on 20 samples
   - Compare quality

4. **Measure improvement:**
   - Did quality go up?
   - Did cost go up (longer prompt)?
   - Net win or net loss?

**Example:**

```
System: Customer feedback summarization

Version 1: "Summarize customer feedback"
Result: Summaries too long, miss key issues
Quality: 65%

Version 2: "Summarize feedback in 1 sentence highlighting
main complaint or request"
Result: Better, but sometimes too terse
Quality: 78%

Version 3: "Summarize feedback in 1 sentence.

Example:
Feedback: 'The app keeps crashing when I try to upload photos.
Also the UI is confusing.'
Summary: 'App crashes when uploading photos'

Main complaint or request only, be concise."
Result: Focused, right length, consistent
Quality: 92%

Impact: +27 percentage points
Effort: Low (iterative prompt refinement)
```

### Technique 3.2: Use Few-Shot Examples

**The Idea:** Show the model examples of good outputs.

**Implementation:**

**Zero-shot (no examples):**
```
Extract company name from this email: [email]
```
→ Works okay, but inconsistent format

**Few-shot (with examples):**
```
Extract company name from emails.

Examples:
Email: "Hi, I'm from Acme Corp. We're interested in..."
Company: Acme Corp

Email: "Thanks for reaching out! Working at TechStart Inc..."
Company: TechStart Inc

Now extract company from this email: [email]
```
→ Consistent format, better accuracy

**How to Implement:**

1. **Choose examples:**
   - Pick 1-3 real examples from your data
   - Represent different scenarios if possible
   - Show correct output format

2. **Keep examples short:**
   - If example emails are long, use short ones
   - Balance: representative vs concise

3. **Explain format:**
   ```
   Instead of:
   "Extract company name"

   Do:
   "Extract company name. Return just the name, nothing else.

   Example:
   Email text...
   Company: [company name]"
   ```

4. **Test:**
   - Does accuracy improve with examples?
   - How many examples needed? (usually 1-3)

**Example:**

```
System: Lead qualification

Zero-shot:
  Input: "Small marketing agency, looking for design tools"
  Output: "yes" / "no" / "maybe" (inconsistent, often wrong)
  Accuracy: 62%

Few-shot:
  Input: same
  Output: "maybe - interested but low budget" (consistent)
  Accuracy: 84%

Impact: +22 percentage points
Cost: Slightly higher (longer prompt)
Effort: Low (add examples to prompt)
```

### Technique 3.3: Add Validation Step

**The Idea:** Check if output makes sense before returning.

**Implementation:**

```
Step 1: Generate output

Step 2: Validate
  Is output empty? Fail
  Is output wrong format? Fail
  Is output reasonable length? Check
  Does output contain required fields? Check

Step 3: If validation fails
  Option A: Retry with refined prompt
  Option B: Return error so human reviews
  Option C: Return partial output

Step 4: Return validated output
```

**How to Implement:**

```python
def process_with_validation(input_text):
    # Step 1: Generate
    output = api.call(input_text)

    # Step 2: Validate
    if not is_valid(output):
        # Retry once
        output = api.call(input_text, prompt_v2)

    # Step 3: Check again
    if not is_valid(output):
        # Return error for human review
        log_for_review(input_text, output)
        return None

    # Step 4: Return
    return output

def is_valid(output):
    # Check format
    if not output:
        return False

    # Check required fields
    if 'name' not in output:
        return False

    # Check reasonableness
    if len(output['name']) > 100:
        return False

    return True
```

**Example:**

```
System: Data extraction

Before validation:
  - 5% of outputs missing required fields
  - 2% of outputs have corrupted data
  - Total issues: 7%
  - Rework by human: 7% (costs time)

After validation:
  - Catches missing fields (retries)
  - Catches corrupted data (flags for review)
  - Delivers only good outputs
  - Rework: 0.5% (much better)

Impact: -6.5% rework rate
Effort: Low (add validation checks)
```

---

## Part 4: Quick Optimization Checklist

**For Cost:**
- [ ] Find most expensive steps
- [ ] Try cheaper model on simple steps
- [ ] Combine related API calls
- [ ] Implement caching for repeats
- [ ] Batch process when possible

**For Speed:**
- [ ] Identify slowest step
- [ ] Can steps be parallelized?
- [ ] Can prompts be shortened?
- [ ] Use faster model for non-critical steps?
- [ ] Use streaming for long outputs?

**For Quality:**
- [ ] Audit failure modes (sample 10 bad outputs)
- [ ] Refine prompt based on failures
- [ ] Add examples to prompt
- [ ] Add validation step
- [ ] Increase token budget if needed (for harder tasks)

---

## Part 5: Optimization Impact Calculator

**Quick math for deciding what to optimize:**

```
Metric: Cost
Current: $0.50/run
Potential Improvement: -30% (try cheaper model)
New Cost: $0.35/run
Impact per 10,000 runs: -$1,500/month
Effort: Low (2 hours)
ROI: Excellent

Metric: Speed
Current: 45 seconds average
Potential Improvement: -20s (parallelize)
New Speed: 25 seconds
Benefit: Process 3x more workflows per hour
Effort: Medium (2-4 hours)
ROI: Very Good

Metric: Quality
Current: 92% correct
Potential Improvement: +5% (better prompts)
New Quality: 97% correct
Benefit: Fewer support tickets, higher satisfaction
Effort: Medium (iterative refinement, ~5 hours)
ROI: Good (depends on support cost)
```

**General Priority:**
1. **Cost** (direct impact on business metrics)
2. **Speed** (user experience + capacity)
3. **Quality** (user satisfaction + support costs)

**Golden Rule:** Always measure before and after. If you don't measure, you're just guessing.
