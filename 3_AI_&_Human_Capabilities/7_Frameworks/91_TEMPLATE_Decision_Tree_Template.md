# Decision Tree Template

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Structured thinking framework for analysis and decision-making
**Status:** Final

---

Use this template to map out all decision points in your workflow.

---

## Workflow: _________________________

**Purpose of this decision tree:** Map all conditional logic and decision points

---

## Decision Tree Diagram

```
START
  
   Decision 1: _______________?
     
      If YES → _______________
                  
                   Action: _______________
     
      If NO → Decision 2: _______________?
                  
                   If YES → _______________
                               
                                Action: _______________
                  
                   If NO → _______________
                                
                                 Action: _______________
  
END
```

---

## Decision Points Detail

### Decision 1: _________________________

**Type:** [ ] Deterministic (rule) / [ ] Dynamic (AI)

**Question:** What is being evaluated?

**Possible outcomes:**
- **Outcome A:** _______________
  - Condition: _______________
  - Next step: _______________
  
- **Outcome B:** _______________
  - Condition: _______________
  - Next step: _______________
  
- **Outcome C (if applicable):** _______________
  - Condition: _______________
  - Next step: _______________

**Edge cases:**
- What if data is missing? → _______________
- What if multiple conditions match? → _______________
- What if no conditions match? → _______________

---

### Decision 2: _________________________

**Type:** [ ] Deterministic (rule) / [ ] Dynamic (AI)

**Question:** What is being evaluated?

**Possible outcomes:**
- **Outcome A:** _______________
  - Condition: _______________
  - Next step: _______________
  
- **Outcome B:** _______________
  - Condition: _______________
  - Next step: _______________

**Edge cases:**
- What if data is missing? → _______________
- What if multiple conditions match? → _______________
- What if no conditions match? → _______________

---

## Rules vs. AI Breakdown

| Decision | Type | Why This Approach? |
|----------|------|--------------------|
| Decision 1 | Rule / AI |  |
| Decision 2 | Rule / AI |  |
| Decision 3 | Rule / AI |  |

**Key insight:** Use rules when logic is clear and unambiguous. Use AI when judgment or context is needed.

---

## Testing Scenarios

Test your decision tree with these scenarios:

| Scenario | Input Data | Expected Path | Expected Outcome |
|----------|-----------|---------------|------------------|
| Happy path | | | |
| Missing data | | | |
| Edge case 1 | | | |
| Edge case 2 | | | |

---

## Implementation Checklist

- [ ] All decision points identified
- [ ] All possible outcomes defined
- [ ] Edge cases handled
- [ ] Default/fallback paths specified
- [ ] Rules vs. AI choice justified
- [ ] Test scenarios pass
