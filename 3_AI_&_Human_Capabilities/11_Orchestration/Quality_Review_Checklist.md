# Quality Review Checklist

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

**Systematic Approach to Reviewing Orchestration Outputs**

Quality reviews ensure that your orchestration system is producing outputs that meet your users' needs. This checklist provides a **structured sampling strategy** and **quality assessment framework** you can implement in your operations workflow.

---

## Part 1: Sampling Strategy

You can't review every output (too slow), but you must review **enough** to detect quality issues.

### Recommended Sampling Rates

| System Size | Daily Volume | Daily Sample | Percentage | Effort |
|------------|--------------|--------------|-----------|--------|
| Small | 10-100 | 5-10 | 10% | Low |
| Medium | 100-1,000 | 10-20 | 1-2% | Low |
| Large | 1,000-10,000 | 20-50 | 0.5-1% | Medium |
| Very Large | 10,000+ | 50-100 | <0.5% | Medium |

**Rule of thumb:** Review at least 5 outputs per day, even if it's just 0.1% of volume.

### Sampling Methods

**1. Random Sampling (Most Common)**
- Randomly select outputs throughout the day
- Best for: Finding systematic issues
- Avoids bias toward "unusual" cases

**2. Stratified Sampling (By Input Type)**
- Sample different input types proportionally
- If 40% of inputs are "leads," sample 40% of review from leads
- Best for: Input-type-specific quality issues

**3. Risk-Based Sampling**
- Sample more from "risky" categories
- If output type X has history of issues, sample 50% of X
- Best for: Catching known problem areas

**4. Time-Based Sampling**
- Sample specific times (e.g., every 100th output, outputs from 3 PM)
- Best for: Catching time-specific issues (peak hours, overnight)

### Sample Selection Process

```
Step 1: Determine daily sample size (e.g., 10 outputs)

Step 2: Select randomly
  - For Google Sheets: =RANDBETWEEN(1, total_runs)
  - For database: SELECT * FROM runs ORDER BY RANDOM() LIMIT 10
  - Manual: Pick outputs at different times throughout day

Step 3: Pull the complete input + output

Step 4: Document which outputs you're reviewing
  - Keep a log to avoid double-sampling

Step 5: Review systematically (use checklist below)
```

---

## Part 2: Quality Assessment Criteria

### Criterion 1: Correctness

**Definition:** Does the output accurately address the input?

**Evaluation Framework:**

```
Rating Scale:
5 - Perfect: Output is completely correct
4 - Good: Minor issues, wouldn't affect user
3 - Acceptable: Some issues, user might accept
2 - Poor: Significant issues, user would likely reject
1 - Wrong: Completely incorrect or unusable
```

**Assessment Questions:**

- Does the output directly address what was asked?
- Are the facts/claims in the output accurate?
- Are there any factual errors?
- Does the output match the expected format?
- Are calculations/logic correct (if applicable)?

**Examples by rating:**

5: Input = "Summarize this article about AI" → Output = Accurate, concise summary covering all main points
4: Input = "Summarize this article about AI" → Output = Good summary, but misses one minor point
3: Input = "Summarize this article about AI" → Output = Summary is mostly correct, but somewhat scattered
2: Input = "Summarize this article about AI" → Output = Summary missing key points, some inaccuracies
1: Input = "Summarize this article about AI" → Output = Completely wrong topic or unrelated content

### Criterion 2: Completeness

**Definition:** Does the output include all required fields/components?

**Evaluation Framework:**

```
Rating Scale:
5 - Complete: All required fields present
4 - Mostly complete: Missing minor optional field
3 - Adequate: Missing one major field or some data
2 - Incomplete: Missing multiple important fields
1 - Very incomplete: Missing most fields
```

**Assessment Questions:**

- Are all required output fields present?
- Are optional fields included where possible?
- Is there missing data that should have been extracted?
- Are there placeholders or "null" values where there shouldn't be?
- Is the output structure correct (right number of items, proper nesting)?

**Examples by rating:**

5: All 8 required fields present and filled
4: 7/8 fields present (missing one optional field)
3: 6/8 fields present (missing one required field with some data)
2: 5/8 fields present (missing 2+ fields)
1: 3/8 fields present or less

### Criterion 3: Relevance

**Definition:** Is the output on-topic and appropriate for the input?

**Evaluation Framework:**

```
Rating Scale:
5 - Highly relevant: Perfect match to input intent
4 - Relevant: Good fit, might have minor off-topic sections
3 - Mostly relevant: Mostly on-topic, some wandering
2 - Somewhat relevant: Mixed relevance, significant off-topic
1 - Irrelevant: Mostly or entirely off-topic
```

**Assessment Questions:**

- Is the output focused on the requested topic?
- Is the output appropriate for the user's stated need?
- Are there tangents or off-topic sections?
- Does the output address the "why" implied in the request?
- Would a typical user find this output useful for their purpose?

**Examples by rating:**

5: Input = "How to improve team productivity?" → Output = Focused advice on 5 actionable productivity strategies
4: Input = "How to improve team productivity?" → Output = Mostly good advice, includes one tangent about technology
3: Input = "How to improve team productivity?" → Output = Good ideas but somewhat scattered, some off-topic thoughts
2: Input = "How to improve team productivity?" → Output = Some relevant ideas but lots of irrelevant content mixed in
1: Input = "How to improve team productivity?" → Output = Talks about something else entirely

### Criterion 4: Clarity & Readability

**Definition:** Is the output easy to understand and well-structured?

**Evaluation Framework:**

```
Rating Scale:
5 - Excellent: Clear, well-organized, easy to scan
4 - Good: Generally clear, minor organization issues
3 - Adequate: Understandable but somewhat unclear in places
2 - Poor: Confusing, disorganized, hard to follow
1 - Very poor: Unclear or unreadable
```

**Assessment Questions:**

- Is the output well-organized and easy to scan?
- Is the writing clear and concise?
- Is technical jargon appropriate or does it obscure meaning?
- Are there clear headings, sections, or structure?
- Could a typical user understand it on first read?
- Is the formatting clean (proper paragraph breaks, lists, etc.)?

**Examples by rating:**

5: Output has clear headings, bullet points, logical flow, professional tone
4: Output is clear but could use better organization or formatting
3: Output is understandable but somewhat rambling or poorly formatted
2: Output is confusing, poorly formatted, hard to extract meaning
1: Output is nearly impossible to understand

### Criterion 5: Accuracy of Tone/Style

**Definition:** Does the output match the required tone/voice?

**Evaluation Framework:**

```
Rating Scale:
5 - Perfect tone: Matches requested style exactly
4 - Good tone: Matches style, minor deviations
3 - Acceptable tone: Mostly matches style
2 - Wrong tone: Significantly mismatches style
1 - Very wrong tone: Completely wrong tone/voice
```

**Assessment Questions:**

- Does the output match the requested tone (formal, casual, technical, etc.)?
- Is the voice appropriate for the audience?
- Are the word choices suitable for the context?
- Does the output feel authentic to the brand/person it represents?
- Would the intended recipient be satisfied with this tone?

**Examples by rating:**

5: Professional email output is formal, grammatically perfect, appropriate for C-suite
4: Professional email is well-written but slightly casual
3: Professional email is acceptable but somewhat informal
2: Professional email is too casual, uses slang inappropriately
1: Email sounds like it's from the wrong person entirely

---

## Part 3: Complete Quality Review Form

Print or copy this form for each review:

```

QUALITY REVIEW FORM
Date: ________________  Reviewer: ___________________________


INPUT DETAILS

Input Type: ___________________________
Input Length: Short / Medium / Long
Input Complexity: Simple / Moderate / Complex
Input Quality: Good / Okay / Poor (invalid/malformed)
Input ID: _____________________________

OUTPUT DETAILS

Output Type: ___________________________
Output Length: Short / Medium / Long
Output Format: ___________________________
Output ID: _____________________________

QUALITY ASSESSMENT


1. CORRECTNESS (Does the output accurately address the input?)

   Rating: 1   2   3   4   5 

   Issues Found:
   ___________________________________________________________
   ___________________________________________________________

   Comments:
   ___________________________________________________________

2. COMPLETENESS (Are all required fields/data present?)

   Rating: 1   2   3   4   5 

   Missing Fields/Data:
   ___________________________________________________________

   Comments:
   ___________________________________________________________

3. RELEVANCE (Is output on-topic and appropriate?)

   Rating: 1   2   3   4   5 

   Off-Topic Sections:
   ___________________________________________________________

   Comments:
   ___________________________________________________________

4. CLARITY & READABILITY (Is output easy to understand?)

   Rating: 1   2   3   4   5 

   Organization Issues:
   ___________________________________________________________

   Comments:
   ___________________________________________________________

5. TONE/STYLE MATCH (Does output match required tone?)

   Rating: 1   2   3   4   5 

   Tone Mismatch Examples:
   ___________________________________________________________

   Comments:
   ___________________________________________________________

OVERALL ASSESSMENT


Average Rating: ____ (sum of 5 ratings ÷ 5)

Overall Quality: Excellent   Good   Acceptable   Poor   Reject 

Usability: User would likely... Accept   Review   Reject 

ACTION REQUIRED

No Action   | Inform Team   | Investigate   | Escalate 

Issue Category (if applicable):
 Prompt issue (unclear instruction)
 Model capability limit
 Input quality issue
 Integration/data issue
 Cost/performance issue
 Other: _____________________________

ROOT CAUSE HYPOTHESIS

[If issue found, what's likely causing it?]
___________________________________________________________

RECOMMENDED ACTION

[What should be done to prevent this in future?]
___________________________________________________________


```

---

## Part 4: Aggregating Results

### Daily Summary Template

```
DAILY QUALITY SUMMARY
Date: Monday, February 10, 2026
Reviewer: Sarah Chen

Sample Size: 10 outputs
Sample Method: Random throughout day



RATINGS SUMMARY


Criterion           5 | 4 | 3 | 2 | 1 | Avg

Correctness         8 | 2 | 0 | 0 | 0 | 4.8
Completeness       10 | 0 | 0 | 0 | 0 | 5.0
Relevance           8 | 1 | 1 | 0 | 0 | 4.7
Clarity             7 | 3 | 0 | 0 | 0 | 4.7
Tone/Style          9 | 1 | 0 | 0 | 0 | 4.9

AVERAGE ALL         8.4 (Good)

OVERALL QUALITY: 9/10 would Accept, 1/10 would Review



ISSUES FOUND


Issue 1: Correctness (1 output)
  - Output: [ID 4521]
  - Problem: Summary missed main point of article
  - Severity: Medium
  - Category: Prompt issue (ambiguous instruction)
  - Action: Note for prompt refinement review



TRENDS

- Completeness: Perfect (5.0 all week)
- Correctness: Stable (4.7-4.9)
- No recurring issues this week
- Quality trending upward from last week (4.6 → 4.8)



NEXT STEPS

- Continue monitoring correctness
- Share summary with team
- Follow up on prompt clarity


```

### Weekly Aggregation

```
WEEKLY QUALITY REPORT
Week of: Feb 3-9, 2026

Total Samples: 70 (10/day)
Target Quality: All criteria ≥ 4.5/5

SUMMARY TABLE


Criterion           Avg Score  Trend  Status

Correctness            4.8     ↑       
Completeness           4.9     →       
Relevance              4.7     ↑       
Clarity                4.6     ↑       
Tone/Style             4.8     ↑       

AVERAGE                4.76    ↑       

Acceptability: 97.1% (68/70)
Review Rate: 2.9% (2/70)
Reject Rate: 0% (0/70)

ISSUE SUMMARY


Total Issues: 5
  - Correctness: 3 (prompt issues)
  - Completeness: 1 (data field missing)
  - Relevance: 1 (off-topic section)

Issue Categories:
  - Prompt clarity: 3
  - Input data quality: 1
  - Model limitation: 1



ACTIONS TAKEN


1. Clarified ambiguous instruction in "summarization" prompt
2. Added validation check for required data fields
3. Added guideline about staying on-topic



TARGETS FOR NEXT WEEK


- Maintain Correctness ≥ 4.8
- Achieve Completeness = 5.0
- Improve Clarity to 4.8+
- Zero tolerance for off-topic outputs

Next Review: Monday, Feb 17
Reviewer: Sarah Chen
```

---

## Part 5: Action Triggers

When you find issues in reviews, what do you do?

### Trigger Matrix

| Finding | Threshold | Action |
|---------|-----------|--------|
| **Correctness drops below 4.5** | 1+ occurrence | Review latest prompt changes, plan refinement |
| **Same issue appears 3+ times** | Any criterion | Root cause analysis, systematic fix |
| **Output rejected by user** | Any occasion | High-priority investigation |
| **New error type appears** | First occurrence | Document and monitor in next review |
| **Quality drops > 0.5 points** | Week over week | Emergency review, check for recent changes |
| **Completeness < 5.0** | Any missing field | Add data validation or field extraction |
| **Clarity < 4.5** | Repeated issue | Revise output format or instructions |
| **Tone mismatch** | 2+ occurrences | Review brand voice guidelines, retrain prompt |

### Response Playbook

**For Prompt Issues (most common):**
1. Document the exact problem
2. Identify what instruction was unclear
3. Write clearer instruction + example
4. Test with 5 new examples
5. Measure improvement over next week
6. Roll out if improvement confirmed

**For Data Issues:**
1. Check if input data quality degraded
2. Add validation to catch missing fields
3. Handle missing fields gracefully
4. Log when data is insufficient
5. Alert input source team if needed

**For Model Capability Issues:**
1. Can we work around it with better prompting?
2. Can we use a stronger model for this specific task?
3. Can we decompose into simpler subtasks?
4. Is this a known limitation? Document it.

**For One-Off Issues:**
1. Don't panic about single occurrences
2. Document and monitor
3. Escalate if pattern emerges in next review
4. Share with team weekly as FYI

---

## Part 6: Tools & Automation

### Google Sheets Template

**Columns:**
- Date
- Reviewer
- Output ID
- Input Type
- Correctness (1-5)
- Completeness (1-5)
- Relevance (1-5)
- Clarity (1-5)
- Tone (1-5)
- Average Score
- Issues Found (yes/no)
- Issue Type
- Action Required
- Notes

**Formulas:**
```
Average = AVERAGE(C2:G2)
Quality = IF(H2>=4.5, "GOOD", IF(H2>=3.5, "OK", "POOR"))
Status = IF(I2="yes", "REVIEW", "ACCEPT")
```

**Conditional Formatting:**
- Red if Average < 3.5
- Yellow if 3.5 ≤ Average < 4.5
- Green if Average ≥ 4.5

### Automated Daily Alerts

**Set up email alerts for:**
- Scores below 4.0 (manual review needed)
- Same issue appearing 2+ times in one day
- Any rejected outputs
- Quality trend dropping (this week vs last week)

### Monthly Report Script (Python)

```python
# Pseudo-code for automated monthly report

def generate_monthly_report(reviews_dataframe):
    # Calculate averages by criterion
    avg_correctness = reviews['correctness'].mean()
    avg_completeness = reviews['completeness'].mean()
    # ... etc

    # Calculate trend (this month vs last month)
    this_month_avg = reviews.loc[reviews['date'] >= '2026-02-01'].mean()
    last_month_avg = reviews.loc[reviews['date'] < '2026-02-01'].mean()
    trend = (this_month_avg - last_month_avg) / last_month_avg

    # Find top issues
    top_issues = reviews['issue_type'].value_counts().head(5)

    # Generate HTML report
    report = f"""
    <h1>Quality Report - February 2026</h1>
    <p>Average Quality: {this_month_avg:.2f}/5.0</p>
    <p>Trend: {trend:+.1%}</p>
    <h2>Top Issues</h2>
    {top_issues.to_html()}
    """

    # Send email
    send_email("team@company.com", report)
```

---

## Quick Reference: Quality Checklist

When reviewing an output, ask yourself:

- [ ] **Correctness:** Does it accurately answer the question?
- [ ] **Completeness:** Are all fields filled in?
- [ ] **Relevance:** Is it on-topic and focused?
- [ ] **Clarity:** Could someone understand it quickly?
- [ ] **Tone:** Does it sound right for the context?

Rate each 1-5, average them, and action if below 4.5.

**That's it.** Simple, systematic, repeatable.
