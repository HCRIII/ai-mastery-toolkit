# Document and Folder Formatting Standards - Part 05: Version & Status Standards

**Part:** 05 of 07
**Created:** 2026-02-13
**Last Updated:** 2026-02-28
**Version:** v2.2
**Estimated Tokens:** ~1,400
**Purpose:** Versioning Strategy, Content Lifecycle, Review Tracking
**Parent Document:** Document_Formatting_Standards_v2.2.md
**Chunk Index:** 0_Standards_INDEX_v2.2.md
**Previous Chunk:** 4_Asset_Standards_v2.2.md
**Next Chunk:** 6_Large_Scale_Standards_v2.2.md

---

## 17. Versioning Strategy

### Semantic Versioning for Content

**Format:** `vMAJOR.MINOR.PATCH`

**Version Increments:**

**MAJOR (v1.0 → v2.0):**
- Complete rewrite
- Fundamental approach change
- Breaking changes to structure
- Non-backward-compatible updates

**MINOR (v1.0 → v1.1):**
- New sections added
- Significant content additions
- Structure enhancements
- Backward-compatible improvements

**PATCH (v1.1.0 → v1.1.1):**
- Typo corrections
- Minor clarifications
- Link fixes
- Small updates

### When to Increment Versions

**MAJOR version changes:**
```markdown
v1.0: Original Python 2.7 guide
v2.0: Complete rewrite for Python 3.11
```

**MINOR version changes:**
```markdown
v1.0: Basic concepts
v1.1: Added advanced section
v1.2: Added code examples
```

**PATCH version changes:**
```markdown
v1.1.0: Current version
v1.1.1: Fixed typos in section 3
v1.1.2: Updated broken link
```

### Version Number Placement

**In filename:**
```
Document_Name_v2.1.md
```

**In metadata:**
```markdown
**Version:** v2.1
**Created:** 2026-01-15
**Last Updated:** 2026-02-13
```

### Breaking Changes

**When making breaking changes:**
- Increment MAJOR version
- Document what broke and why
- Provide migration path if applicable
- Keep previous version available

---

## 18. Content Lifecycle & Status

### Content Status Values

**STANDARD:** Use consistent status values across all content.

**Permitted Status Values:**

| Status | Meaning | Use When |
|--------|---------|----------|
| `Draft` | Work in progress, not ready for use | Content being created |
| `Review` | Ready for review, not yet approved | Awaiting SME or peer review |
| `Final` | Approved and ready for use | Content is approved |
| `Baselined` | Specification approved and locked under change control | Specification document has passed Verification and Validation; governs production; every subsequent change requires a version increment — **specification documents only** |
| `Published` | Live and available to learners | Content is actively used |
| `Archived` | No longer current but preserved | Content superseded but kept for reference |
| `Deprecated` | Scheduled for removal | Content being phased out |

### Status Metadata Field

**Format:**
```markdown
**Status:** Draft
**Status:** Review (Reviewer: [name], Due: YYYY-MM-DD)
**Status:** Final
**Status:** Baselined (Version: v1.0, Approved By: [name], Date: YYYY-MM-DD)
**Status:** Published (Date: YYYY-MM-DD)
**Status:** Archived (Reason: Superseded by v2.0)
**Status:** Deprecated (Remove after: YYYY-MM-DD)
```

### Status Transitions

**Content documents (guides, courses, posts, articles):**
```
Draft → Review → Final → Published → [Archived or Deprecated]
```

**Specification documents (governed by 8_Specifications standard):**
```
Draft → Review → Final → Baselined → [Archived]
```

> **Note on Baselined:** A Baselined specification is not Published — it is locked under change control and governs downstream production. It does not become Published; it is the authority document that enables production of what will eventually be Published. Any change to a Baselined specification requires a version increment and a new Baseline Record entry.

**Required for status changes:**
- Update `**Status:**` field
- Update `**Last Updated:**` date
- Document reason for change (in commit message or changelog)

### Deprecated Content Handling

**When deprecating content:**
1. Set `**Status:** Deprecated`
2. Add deprecation notice at top of content
3. Link to replacement content
4. Set removal date
5. Keep content for minimum 90 days

**Deprecation Notice Format:**
```markdown
# [Document Title]

**Status:** Deprecated (Remove after: 2026-05-15)

---

**DEPRECATION NOTICE:** This content has been superseded by [New Content](link/to/new.md). Please use the updated version. This document will be removed on 2026-05-15.

---

[Original content...]
```

### Archived Content

**Archiving process:**
1. Move to `archive/` folder
2. Update status to `Archived`
3. Add archive reason to metadata
4. Update any INDEX files
5. Create redirect if needed (in README)

---

## 19. Review & Approval Tracking

### Review Metadata

**Optional fields for review tracking:**

```markdown
**Status:** Review
**Reviewer:** [name or role]
**Review Due:** YYYY-MM-DD
**Last Reviewed:** YYYY-MM-DD
**Review Notes:** [Link to review comments or summary]
```

### Review vs Last Updated

**Distinction:**
- `**Last Updated:**` Date content was last modified
- `**Last Reviewed:**` Date content was last reviewed for accuracy (may be same or different)

**Use when:**
- Content needs periodic accuracy review
- Subject matter expertise required
- Content must stay current with external changes

### SME Review Process

**For technical content:**
```markdown
**Status:** Review
**Reviewer:** [SME name]
**Review Due:** 2026-02-20
**Last Reviewed:** 2026-02-10
**Technical Reviewer:** Jane Smith (Python SME)
```

### Approval Tracking

**Minimal approach (RECOMMENDED):**
- Track in Git commits
- Use Git tags for approved versions
- Status field indicates approval state

**Extended approach (for formal processes):**
```markdown
**Status:** Final
**Approved By:** [name/role]
**Approval Date:** YYYY-MM-DD
**Approval Notes:** [Link or brief note]
```


---

## 20. Living Checklist & Tracker Status Standard

### Three-State Inline Status Prefix

**STANDARD:** For living checklist documents and launch trackers, use bold short-code prefixes to indicate item status. No emoji.

```markdown
- [ ] **NS** — Item description     ← Not Started
- [ ] **WIP** — Item description    ← In Progress / Needs Refinement
- [x] **LIVE** — Item description   ← Live / Complete
```

**Rules:**
- Status tag is placed between `- [ ]` and the item text, separated by ` — `
- All new items default to `**NS**`
- To update: change the 2–4 character bold code — minimal typing for both AI and human
- The markdown checkbox (`[ ]` → `[x]`) serves as the final "confirmed live" toggle where supported
- Do NOT use emoji (🔴/🟡/🟢 or similar) as status indicators — bold short codes only
- Works in all markdown renderers; not dependent on Obsidian or plugins

**When to use this pattern:**
- Community launch checklists
- Feature/deliverable trackers
- Any living document where items move through implementation states

**Added:** 2026-02-25

---

## Chunk Navigation

- **Back to Index:** [0_Standards_INDEX_v2.2.md](0_Standards_INDEX_v2.2.md)
- **Previous:** [Asset Standards](4_Asset_Standards_v2.2.md)
- **Next:** [Large-Scale Standards](6_Large_Scale_Standards_v2.2.md)
- **Full Document:** [Document_Formatting_Standards_v2.2.md](Document_Formatting_Standards_v2.2.md)
