# Compound Approval with Options

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for 01-compound-approval-with-options capabilities
**Status:** Final

---

## Description
**Category:** Efficiency
**Created:** February 5, 2026
**Effectiveness:** 98%
## Use When
- AI presents proposed changes with clarifying questions
- Multiple decisions can be made in single message
- Options are clearly labeled (A/B/C or numbered)
## Prompt Template
When AI presents:
```
**Proposed Changes:** [summary]
**Clarifying Questions:**
1. Scope: A) Light B) Moderate C) Full
2. Tone: A) Formal B) Conversational
3. Include examples: A) Yes B) No
```
Respond with:
```
Approved. 1-C, 2-B, 3-A.
```
## Variations
**With deferred item:**
```
Approved. 1-B, 2-B. Item 3: defer to future session.
```
**With brief addition:**
```
Approved. 1-B, but also include [specific element].
```
**Single selection:**
```
B
```
## Why It Works
- Single message replaces 3-4 back-and-forth exchanges
- Clear, unambiguous communication
- Maintains audit trail of decisions
## Related Patterns
- [[Pre-structured Option Selection]]
- [[Propose-Approve-Implement Workflow]]

## When to Use
- As described in the prompt content
- Part of session management workflow
- For tracking and system updates

## Tags
`session` `tracking` `workflow`