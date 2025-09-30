# Specification Document — [Title]

> **Instructions:** Copy this template. Fill in every field before baselining. Fields marked [REQUIRED] must be completed in the indicated phase; do not leave them blank in a baselined specification. Remove all instructional text (including this header) before baselining.

---

## Section 1: Document Header

```
Title: [Name of the thing being specified]
Document Type: Specification
Version: v0.1
Status: Draft
Created: [YYYY-MM-DD]
Last Updated: [YYYY-MM-DD]
Author: [Name]
Phase Gate Reached: 1-Define
Related Framework: [Which Framework doc informs this specification, if any — or "N/A"]
Related Workflow: [Which Workflow will be built from this spec — or "TBD"]
```

---

## Section 2: Purpose & Problem Statement [REQUIRED — Phase 1]

> *Write 2–4 sentences describing the problem this specification addresses. Describe what is currently missing or failing, not the proposed solution. At least one outcome must be measurable.*

[Problem statement here]

**Intended outcome:** [What this specification, when built, will produce or enable]

**Why now:** [Why solving this problem is a priority at this time]

---

## Section 3: Scope Definition [REQUIRED — Phase 1]

### In Scope

> *Bullet list of what this specification covers — specific features, deliverables, systems, or capabilities.*

- [In-scope item 1]
- [In-scope item 2]
- [In-scope item 3]

### Out of Scope

> *Bullet list of what this specification explicitly does not cover. Be as specific about what's excluded as about what's included.*

- [Out-of-scope item 1]
- [Out-of-scope item 2]
- [Out-of-scope item 3]

### Boundary Conditions

> *Any conditional scope items — things in scope only if a specific condition is met.*

- [Condition and what it gates — or "None"]

---

## Section 4: Stakeholder Register [REQUIRED — Phase 1]

| Stakeholder | Role | Primary Need | Success Looks Like |
|-------------|------|--------------|-------------------|
| [Name/group] | [Role] | [What they need] | [Specific, measurable description] |
| [Name/group] | [Role] | [What they need] | [Specific, measurable description] |

---

## Section 5: Constraints [REQUIRED — Phase 1]

### Time Constraints

- [Deadline or time-bounded constraint — or "None identified"]

### Resource Constraints

- [Budget, tool, personnel, or session availability limit — or "None identified"]

### Technical Constraints

- [Platform, integration, format, or system limit — or "None identified"]

### Quality Constraints

- [Minimum standards, brand requirements, compliance requirements — or "None identified"]

---

## Section 6: Research Findings [REQUIRED — Phase 2]

> *Complete this section before writing any requirements. Requirements must be traceable to findings here.*

### Existing System Analysis

[What currently exists that this specification must integrate with, replace, or build on]

### Stakeholder Input

[What stakeholders communicated about their actual needs — direct observations or quotes preferred]

### Reference Examples

[Any analogous specifications, deliverables, or systems that informed design decisions]

### Key Findings

> *The most important discoveries from research — the findings that most directly shape the requirements below.*

1. [Finding 1]
2. [Finding 2]
3. [Finding 3]

---

## Section 7: Functional Requirements [REQUIRED — Phase 3]

> *Every requirement uses "shall." Every requirement is independently testable. Trace each to a finding in Section 6.*

**REQ-F-01:** [Subject] shall [specific behavior] [under/when/for specific conditions].

**REQ-F-02:** [Subject] shall [specific behavior] [under/when/for specific conditions].

**REQ-F-03:** [Subject] shall [specific behavior] [under/when/for specific conditions].

> *Add as many as needed. Remove any that cannot be traced to a finding in Section 6.*

---

## Section 8: Non-Functional / Quality Requirements [REQUIRED — Phase 3]

> *Same format as Section 7, prefixed REQ-NF. Covers performance, quality, usability, and format standards.*

### Performance Standards

**REQ-NF-01:** [Subject] shall [performance requirement] [under specified conditions].

### Quality Standards

**REQ-NF-02:** [Subject] shall meet [specific quality standard or checklist reference].

### Usability Standards

**REQ-NF-03:** [Subject] shall [usability requirement relevant to the defined audience].

### Format Requirements

**REQ-NF-04:** [Subject] shall be delivered in [specific format, file type, or structure].

---

## Section 9: Success Criteria [REQUIRED — Phase 3]

| Criterion | Measurement Method | Acceptable Threshold | Who Evaluates |
|-----------|-------------------|---------------------|---------------|
| [What is being measured] | [How it will be measured] | [Minimum acceptable result] | [Who evaluates] |
| [What is being measured] | [How it will be measured] | [Minimum acceptable result] | [Who evaluates] |

---

## Section 10: Assumptions & Dependencies [REQUIRED — Phase 3]

### Assumptions

> *Statements treated as true for this specification. If any prove false, the specification must be revisited.*

- [Assumption 1]
- [Assumption 2]

### Dependencies

> *External things that must exist or occur for this specification to be executable. Include owner and risk level.*

| Dependency | Owner | Status | Risk if Not Met |
|------------|-------|--------|-----------------|
| [What is needed] | [Who is responsible] | [Confirmed / Pending / Unknown] | [High / Medium / Low] |

---

## Section 11: Review Log [REQUIRED — Phase 4]

| Date | Reviewer | Finding | Resolution | Status |
|------|----------|---------|------------|--------|
| [YYYY-MM-DD] | [Name] | [What was found] | [What changed, or rationale for no change] | Resolved / Open |

> *No open findings may remain at time of baselining.*

---

## Section 12: Verification Report [REQUIRED — Phase 5]

> *Check every item. All must be checked before a Pass verdict is issued.*

- [ ] All 14 required sections are present
- [ ] All fields in Section 1 (Document Header) are populated
- [ ] All requirements in Sections 7 and 8 use "shall" and are independently testable
- [ ] No requirements contradict each other
- [ ] Every in-scope item in Section 3 maps to at least one requirement
- [ ] Every requirement maps to a research finding in Section 6
- [ ] All success criteria in Section 9 have specific, measurable thresholds
- [ ] No open findings remain in Section 11 (Review Log)
- [ ] Document version number and date are current

**Verdict:** [ ] Pass / [ ] Fail

**Notes:** [Explanation if Fail — identify what must be corrected before re-verification]

**Verified by:** [Name]
**Date:** [YYYY-MM-DD]

---

## Section 13: Validation Confirmation [REQUIRED — Phase 5]

> *Answer each question explicitly. A non-answer is not acceptable.*

**1. If we build exactly what is specified in Sections 7 and 8, does it solve the problem in Section 2?**
[Answer]

**2. Does the specified thing serve each stakeholder in Section 4 well enough to meet their stated primary need?**
[Answer — address each stakeholder]

**3. Does building this specification align with current strategic priorities?**
[Answer — reference OKRs or strategic documents if relevant]

**4. Is there anything in scope that should be removed? Is there anything out of scope that should be added?**
[Answer]

**5. Is the cost of building this specification justified by the value of what it produces?**
[Answer]

**Verdict:** [ ] Valid / [ ] Not Valid

**Notes:** [If Not Valid: what phase to return to and what must be reconsidered]

**Validated by:** [Name]
**Date:** [YYYY-MM-DD]

---

## Section 14: Baseline Record [REQUIRED — Phase 6]

```
Baselined Version: [v1.0 or higher]
Baseline Date: [YYYY-MM-DD]
Approved By: [Name]
Permanent Location: [Path within toolkit document architecture]
Change Control Protocol: New version required for every substantive change; version history maintained in archive
Related Workflow: [Path to the workflow document built from this specification — or "TBD"]
```

---

*Specification Document — AI Mastery Toolkit v4 | Standard: Specification_Document_Standard_SCHEMA v1.0*
