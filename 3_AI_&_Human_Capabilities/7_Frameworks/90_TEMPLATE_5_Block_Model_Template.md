# 5-Block Model Template

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Structured thinking framework for analysis and decision-making
**Status:** Final

---

Use this template to map any workflow or process onto the orchestration model.

---

## Workflow Name: _________________________

**Purpose:** What does this workflow accomplish?

**Trigger Frequency:** How often does it run? (e.g., "Every time X happens", "Daily at 9am", "On demand")

---

## Block 1: TRIGGER

**What starts this process?**

- [ ] Event-based (e.g., "New email received", "Form submitted")
- [ ] Schedule-based (e.g., "Every Monday at 9am")
- [ ] Condition-based (e.g., "When inventory < 100")
- [ ] Manual (e.g., "User clicks button")

**Trigger details:**
- 
- 

**Filtering:** Are there false triggers to filter out?
- 

---

## Block 2: INTAKE & NORMALIZATION

**What data arrives?**

| Field Name | Format | Example | Required? |
|------------|--------|---------|-----------|
|            |        |         | Yes/No    |
|            |        |         | Yes/No    |
|            |        |         | Yes/No    |

**Data cleaning needed:**
- [ ] Validate required fields
- [ ] Trim whitespace
- [ ] Standardize format (e.g., phone numbers, dates)
- [ ] Convert to consistent structure

**Enrichment needed:**
- [ ] Look up additional data from: ______________
- [ ] Calculate derived fields: ______________
- [ ] Add metadata: ______________

**Standard format output:**
- After normalization, data should look like: ______________

---

## Block 3: DECISION

**What decisions get made?**

### Decision 1: _________________________

- **Type:** Deterministic (rule) / Dynamic (AI judgment)
- **Logic:**
  - If ______________, then ______________
  - If ______________, then ______________
  - Otherwise ______________

### Decision 2: _________________________

- **Type:** Deterministic (rule) / Dynamic (AI judgment)
- **Logic:**
  - If ______________, then ______________
  - If ______________, then ______________
  - Otherwise ______________

**AI Classification (if needed):**
- **Prompt:** "Classify this ______________ as ______________"
- **Output categories:** A, B, C, ...
- **Confidence threshold:** If confidence < _____%, flag for human review

---

## Block 4: ACTION(S)

**What actions get taken?**

| Action | Can Run in Parallel? | Depends On | Failure Impact |
|--------|----------------------|------------|----------------|
| 1.     | Yes/No               |            | Critical/Minor |
| 2.     | Yes/No               |            | Critical/Minor |
| 3.     | Yes/No               |            | Critical/Minor |

**Sequential vs. Parallel:**
- Sequential: ______________ (must happen in this order)
- Parallel: ______________ (can happen simultaneously)

**Failure handling:**
- If Action 1 fails: ______________
- If Action 2 fails: ______________

---

## Block 5: REVIEW & LEARNING

**What gets logged?**
- [ ] Full execution details (inputs, decisions, actions taken)
- [ ] Timestamps (started, completed, duration)
- [ ] Success/failure status
- [ ] Cost (API calls, compute time)
- [ ] Quality scores

**Metrics to track:**
- Success rate: _____% target
- Latency: _____ seconds target
- Cost per run: $_____ target
- Quality score: _____/5.0 target

**Feedback loops:**
- [ ] Human review ____% of outputs
- [ ] A/B test variations
- [ ] Track downstream outcomes (e.g., conversion rates)
- [ ] Weekly review and optimization

**Improvement triggers:**
- If success rate < _____%, investigate
- If cost > $_____ per run, optimize
- If quality < _____/5.0, refine prompts

---

## Edge Cases & Error Handling

**What could go wrong?**

| Scenario | Probability | Impact | Mitigation |
|----------|-------------|--------|------------|
|          | Low/Med/High| Low/Med/High|      |
|          | Low/Med/High| Low/Med/High|      |
|          | Low/Med/High| Low/Med/High|      |

---

## Success Criteria

**This workflow is successful when:**
- [ ] ______________ (measurable outcome 1)
- [ ] ______________ (measurable outcome 2)
- [ ] ______________ (measurable outcome 3)

**Ready to implement?**
- [ ] All 5 blocks defined
- [ ] Edge cases identified
- [ ] Success metrics clear
- [ ] Team aligned on approach
