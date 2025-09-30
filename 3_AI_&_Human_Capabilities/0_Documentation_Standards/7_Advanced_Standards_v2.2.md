# Document and Folder Formatting Standards - Part 07: Advanced Standards

**Part:** 07 of 07
**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Version:** v2.2
**Estimated Tokens:** ~1,200
**Purpose:** Links, Search Optimization, Dependencies, Testing, Print/PDF
**Parent Document:** Document_Formatting_Standards_v2.2.md
**Chunk Index:** 0_Standards_INDEX_v2.2.md
**Previous Chunk:** 6_Large_Scale_Standards_v2.2.md
**Next Chunk:** None (last chunk)

---

## 23. Link Types & External References

### Internal vs External Links

**Internal Links (within documentation):**
```markdown
[Link Text](../folder/file.md)
```
- Use relative paths
- Check regularly for broken links

**External Links (outside documentation):**
```markdown
[Python Documentation](https://docs.python.org/3/)
```
- Use full URLs
- Include access date if content may change
- Consider link rot

### External Link Format

**Standard format:**
```markdown
[Source Name - Page Title](https://url.com) (accessed YYYY-MM-DD)
```

**Example:**
```markdown
For more details, see [Python.org - PEP 8 Style Guide](https://peps.python.org/pep-0008/) (accessed 2026-02-13)
```

### Citation Format

**For academic or formal references:**
```markdown
## References

1. Author Name (Year). "Title of Article." *Publication Name*. URL (accessed YYYY-MM-DD)
2. Organization (Year). "Document Title." Version X.Y. URL (accessed YYYY-MM-DD)
```

**Example:**
```markdown
## References

1. Van Rossum, G. (2001). "PEP 8 – Style Guide for Python Code." *Python Enhancement Proposals*. https://peps.python.org/pep-0008/ (accessed 2026-02-13)
```

### Link Rot Prevention

**Strategies:**
- Prefer official documentation over blog posts
- Use archived versions for important references
- Include enough context that content can be found if URL changes
- Review external links quarterly

**Archive Links:**
```markdown
[Article Title](https://original-url.com) | [Archive](https://web.archive.org/web/*/original-url.com)
```

---

## 24. Search & Discovery Optimization

### Keywords in Metadata

**Optional metadata field for search:**
```markdown
**Keywords:** python, variables, scope, functions, beginner
```

**Guidelines:**
- 3-8 keywords per document
- Include synonyms and common terms
- Use lowercase
- Comma-separated

### Description Field

**Optional but recommended:**
```markdown
**Purpose:** [One-line description for metadata]
**Description:** [Longer description for search/discovery, 1-2 sentences]
```

**Purpose vs Description:**
- **Purpose:** For metadata block, appears in INDEX files
- **Description:** For search results and discovery (optional)

### Searchable Content Organization

**Make content discoverable:**
- Use descriptive headings
- Include key terms in first paragraph
- Use consistent terminology
- Cross-reference related content

**Example:**
```markdown
## Variable Scope in Python

Variable scope determines where in your code a variable can be accessed. Python uses the LEGB rule: Local, Enclosing, Global, Built-in. Understanding scope is essential for writing functions and avoiding naming conflicts.
```

---

## 25. Content Dependency Management

### Prerequisite Documentation

**Document what must be learned first:**
```markdown
**Prerequisites:**
- Complete: [Module 1: Introduction](../1_Introduction/)
- Understand: Variables, data types, basic operators
- Recommended: [Python Installation Guide](../setup/install.md)
```

### Dependency Types

**Hard Dependencies (MUST complete first):**
```markdown
**Prerequisites:**
- **Required:** Complete Module 1-3
- **Required:** Understand functions and scope
```

**Soft Dependencies (RECOMMENDED but not required):**
```markdown
**Recommended Background:**
- Familiarity with basic programming concepts
- Understanding of command-line basics
```

### Dependency Graphs

**For complex learning paths:**
```markdown
## Learning Path

Module 1 (Variables)
  ↓
Module 2 (Functions)
  ↓
Module 3 (OOP) ← Also requires understanding of data structures
  ↓
Module 4 (Advanced Topics)
```

### Circular Dependency Prevention

**DO NOT create circular dependencies:**
```
❌ Module A requires Module B, Module B requires Module A
```

**If concepts are interrelated:**
- Teach basic form in first module
- Refer back and expand in second module
- Make dependency relationship clear

---

## 26. Content Testing Requirements

### Code Example Testing

**STANDARD:** All code examples in educational content SHOULD be tested.

**Testing Metadata:**
```markdown
**Code Tested:** Yes
**Tested With:** Python 3.11.2, Django 4.2
**Last Tested:** 2026-02-13
**Test Status:** All examples working
```

### Link Validation

**STANDARD:** Validate all links before publishing.

**Validation Frequency:**
- Before publishing new content
- Monthly for published content
- After any restructuring

**Tools:**
- Automated link checkers
- Manual verification for critical links

### Accuracy Review Cycle

**For technical content:**
- Review annually at minimum
- Review when underlying technology changes
- Review if errors are reported

**Review Process:**
```markdown
**Last Reviewed:** 2026-02-13
**Reviewer:** Jane Smith (Python SME)
**Review Notes:** All examples tested with Python 3.11, updated deprecated syntax
```

### User Testing

**For educational content:**
- Test with target audience when possible
- Gather feedback on clarity and accuracy
- Update based on learner confusion points

---

## 27. Print/PDF Considerations

### Page Break Handling

**In markdown, suggest page breaks:**
```markdown
---

<!-- PAGE BREAK -->

---
```

**Guidelines:**
- Avoid breaking code examples across pages
- Start major sections on new page
- Keep tables on single page if possible

### Print-Only Content

**Content that appears only in print/PDF:**
```markdown
<!-- PRINT ONLY -->
This content appears in PDF exports but not web version.
<!-- END PRINT ONLY -->
```

### Web-Only Content

**Content that should NOT appear in print:**
```markdown
<!-- WEB ONLY -->
[Interactive Demo](https://example.com/demo)
<!-- END WEB ONLY -->
```

### Print-Friendly Formatting

**DO:**
- Use clear heading hierarchy
- Keep tables narrow (<6 columns)
- Use high-contrast colors in diagrams
- Include page numbers in metadata

**DO NOT:**
- Rely on color alone to convey information
- Use tiny fonts in diagrams
- Create content dependent on interactivity


---

## Chunk Navigation

- **Back to Index:** [0_Standards_INDEX_v2.2.md](0_Standards_INDEX_v2.2.md)
- **Previous:** [Large-Scale Standards](6_Large_Scale_Standards_v2.2.md)
- **Next:** None (last chunk)
- **Full Document:** [Document_Formatting_Standards_v2.2.md](Document_Formatting_Standards_v2.2.md)
