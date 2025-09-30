# Iterative Document Approval Workflow

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for 05-iterative-document-approval capabilities
**Status:** Final

---

## Description
**Category:** Workflow
**Created:** February 5, 2026
**Effectiveness:** 95%
## Use When
- Updating multiple documents with consistent changes
- Want oversight without reading all source material
- Changes could go in multiple valid directions
## Prompt Template
```
Process workflow:
**For each [document/item]:**
1. Propose changes (bulleted summary of what will change)
2. Include clarifying questions if needed (A/B/C options)
3. Wait for my approval before implementing
4. After implementation, proceed to next document
**Format:** Keep proposals concise — I want to approve changes without reading full content.
```
## Approval Response Template
```
Approved. Options: [1-B, 2-A, etc.]
```
## Acceleration (After Trust Established)
```
Approved. Continue through remaining documents without asking to proceed — just propose changes for each and wait for approval on content, not permission to continue.
```
## Related Patterns
- [[Propose-Approve-Implement Workflow]]
- [[Workflow Acceleration After Trust]]

## When to Use
- As described in the prompt content
- Part of session management workflow
- For tracking and system updates

## Tags
`session` `tracking` `workflow`