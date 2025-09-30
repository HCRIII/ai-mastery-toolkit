# Workflow Acceleration

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for 02-workflow-acceleration capabilities
**Status:** Final

---

## Description
**Category:** Efficiency
**Created:** February 5, 2026
**Effectiveness:** 100%
## Use When
- AI has demonstrated quality output on 2-3 initial items
- Confirmation steps feel redundant
- Working through a long list of similar items
- Trust established, ready to remove friction
## Prompt Template
```
Approved. Continue through remaining [documents/items] without asking to proceed — just propose changes for each and wait for approval on content, not permission to continue.
```
## Key Distinction
**Keep:** Quality gates (content approval)
**Remove:** Friction gates (permission to continue)
## Before Acceleration
```
User: Approved.
AI: [implements] Should I continue to next document?
User: Yes.
AI: [proposes next]
```
## After Acceleration
```
User: Approved. Continue without asking to proceed.
AI: [implements, immediately proposes next]
User: Approved.
AI: [implements, immediately proposes next]
```
## When to Slow Down
- If AI output quality drops
- If context has significantly changed
- If a specific item needs extra attention
Simply say:
```
Hold on this one. [Specific question or concern]
```
## Related Patterns
- [[Workflow Acceleration After Trust]]
- [[Propose-Approve-Implement Workflow]]

## When to Use
- As described in the prompt content
- Part of session management workflow
- For tracking and system updates

## Tags
`session` `tracking` `workflow`