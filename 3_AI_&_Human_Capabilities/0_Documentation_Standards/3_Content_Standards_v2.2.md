# Document and Folder Formatting Standards - Part 03: Content Standards

**Part:** 03 of 07
**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Version:** v2.2
**Estimated Tokens:** ~1,200
**Purpose:** Content Reuse, Cross-References, Code Blocks, Tables, Educational Content
**Parent Document:** Document_Formatting_Standards_v2.2.md
**Chunk Index:** 0_Standards_INDEX_v2.2.md
**Previous Chunk:** 2_Organization_Standards_v2.2.md
**Next Chunk:** 4_Asset_Standards_v2.2.md

---

## 9. Content Reuse & Modularity

### Modular Content Strategy

**PRINCIPLE:** Create reusable content modules that can be included across multiple courses without duplication.

**Single Source of Truth:** Each concept, definition, or explanation should exist in ONE authoritative file and be referenced elsewhere.

### Content Module Types

**Atomic Modules (single concept):**
- Definitions
- Code examples
- Diagrams
- Procedures
- Explanations of single concepts

**Composite Modules (multiple concepts):**
- Complete lessons
- Case studies
- Multi-step tutorials
- Assessment sets

### Include vs Embed vs Reference

**Include (transclude content):**
```markdown
<!-- Include: path/to/module.md -->
```
- Use when content should appear inline
- Example: Including a definition in multiple lessons

**Embed (reference with link):**
```markdown
See [Concept Explanation](../shared/concept.md) for details
```
- Use when reader should navigate to full content
- Example: Linking to prerequisite material

**Reference (cite without including):**
```markdown
**Related:** Variable Scope (Module 2, Lesson 3)
```
- Use when pointing to related but non-essential content
- Example: Suggesting additional reading

### Shared Content Organization

**Folder Structure:**
```
Course_Content/
├── _shared/
│   ├── definitions/
│   ├── examples/
│   ├── diagrams/
│   └── procedures/
├── Course_1/
├── Course_2/
└── Course_3/
```

**Naming Convention:**
```
SHARED_[Category]_[Name]_vX.md
```

**Example:**
```
SHARED_Definition_Variable_Scope_v1.0.md
SHARED_Example_API_Authentication_v1.0.md
SHARED_Diagram_MVC_Architecture_v1.0.md
```

### Content Reuse Best Practices

**DO:**
- Version shared modules independently
- Track which courses use which shared modules
- Update shared content centrally
- Test changes across all dependent courses

**DO NOT:**
- Duplicate content across courses
- Modify shared content for single course
- Create course-specific versions of shared content
- Mix shared and course-specific content in same file

---

## 10. Cross-Reference Standards

### Internal Link Format

**Relative Paths (REQUIRED for portability):**
```markdown
[Link Text](../folder/filename.md)
[Link Text](../../folder/filename.md#section-name)
```

**Absolute Paths (AVOID - breaks when moved):**
```markdown
<!-- DO NOT USE -->
[Link Text](/root/folder/filename.md)
```

### Link Validation

**STANDARD:** All internal links must remain valid when documentation structure changes.

**Validation Frequency:**
- Check links before committing changes
- Validate all links monthly
- Re-validate after folder restructuring

**Broken Link Handling:**
- Document broken links in issue tracker
- Fix within 7 days of discovery
- Use redirects for moved content

### Cross-Reference Strategies

**Direct File Links:**
```markdown
See [File Name](path/to/file.md) for details
```
- Use when target file is stable
- Use when content is directly relevant

**INDEX References:**
```markdown
See [Category Name](path/to/INDEX.md#category) for related files
```
- Use when pointing to collection of files
- Use when specific file may change

**Section Links:**
```markdown
See [Section Name](path/to/file.md#section-anchor)
```
- Use when referencing specific section
- Ensure section heading is stable

### Link Text Guidelines

**DO:**
- Use descriptive link text (not "click here")
- Match link text to destination title
- Keep link text concise (3-7 words)

**Examples:**
```markdown
See [Variable Scope Explanation](../concepts/scope.md)
Review [Module 2 Index](../2_Module/INDEX.md)
Reference [Code Example: Authentication](../examples/auth.md)
```

**DO NOT:**
```markdown
Click [here](../file.md) for more info
See [this](../file.md)
[Link](../file.md)
```

---

## 11. Code Block Standards

### Language Specification

**REQUIRED:** All code blocks MUST specify language for syntax highlighting.

**Format:**
````markdown
```language
code here
```
````

**Examples:**
````markdown
```python
def hello_world():
    print("Hello, World!")
```

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

```bash
echo "Hello, World!"
```
````

### Supported Languages

**Common Languages:**
- `python`, `javascript`, `typescript`, `java`, `csharp`, `cpp`, `c`, `go`, `rust`
- `html`, `css`, `scss`, `json`, `yaml`, `xml`
- `sql`, `bash`, `powershell`, `shell`
- `markdown`, `text` (for plain text)

### Code Block Length Limits

**Maximum inline code block:** 50 lines

**For longer code:**
- Create separate file in `examples/` or `code_examples/` folder
- Link to file from content
- Include only relevant excerpts inline

**Example:**
```markdown
The complete implementation is in [auth_example.py](examples/auth_example.py).

Key excerpt:
```python
def authenticate(username, password):
    # Validation logic here
    return validate_credentials(username, password)
```
```

### Code Example Requirements

**Every code example MUST include:**
- Language specification
- Brief description before code block
- Comments explaining non-obvious code
- Output example (if relevant)

**Example:**
```markdown
This function validates user credentials:

```python
def validate_user(username, password):
    """Validate username and password against database."""
    user = database.get_user(username)
    return user and user.check_password(password)
```

Output when valid:
```text
True
```
```

### Code Testing Requirements

**For educational content:**
- All code examples SHOULD be tested and working
- Include version information for dependencies
- Document required setup or configuration

**Testing Metadata:**
```markdown
**Tested with:** Python 3.11, Django 4.2
**Last Tested:** 2026-02-13
**Status:** Working
```

---

## 12. Table Formatting Standards

### When to Use Tables

**Use tables for:**
- Structured data comparison
- Specification listings
- Feature matrices
- Reference data

**DO NOT use tables for:**
- Long prose content
- Single-column lists (use bullet lists instead)
- Complex nested information (use structured headings instead)

### Table Complexity Limits

**Simple tables (PREFERRED):**
- Maximum 6 columns
- Maximum 20 rows
- Cell content <50 characters
- No nested formatting in cells

**Complex tables (AVOID if possible):**
- 7-10 columns (consider splitting)
- 21-50 rows (consider chunking)
- Cell content 50-100 characters (consider restructuring)

**If table exceeds limits:**
- Split into multiple tables
- Use alternative format (definition lists, structured sections)
- Create separate reference file

### Table Format

**Standard markdown table:**
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

**With alignment:**
```markdown
| Left | Center | Right |
|:-----|:------:|------:|
| L1   | C1     | R1    |
| L2   | C2     | R2    |
```

### Table Accessibility

**REQUIRED:**
- Header row for all tables
- Descriptive column headers
- Avoid merged cells
- Avoid tables for layout

**Mobile Considerations:**
- Tables >4 columns may not display well on mobile
- Consider vertical stacking for mobile
- Test table readability on narrow screens

---

## 13. Educational Content Structure

### Required Sections for Learning Content

**Every lesson/module MUST include:**

```markdown
# [Lesson Title]

**Created:** YYYY-MM-DD
**Last Updated:** YYYY-MM-DD
**Purpose:** [Brief description]
**Learning Objectives:** [What students will be able to do]
**Prerequisites:** [Required prior knowledge]
**Estimated Time:** [N] minutes
**Difficulty:** Beginner | Intermediate | Advanced

---

## Learning Objectives

By the end of this lesson, you will be able to:
1. [Objective 1 - action verb + measurable outcome]
2. [Objective 2]
3. [Objective 3]

---

## Prerequisites

Before starting this lesson, you should:
- [Prerequisite 1]
- [Prerequisite 2]

---

## Content

[Main lesson content]

---

## Practice Activities

[Hands-on exercises]

---

## Summary

[Key takeaways]

---

## Assessment

[Quiz, exercises, or projects to verify learning]
```

### Learning Objective Format

**Use action verbs from Bloom's Taxonomy:**

**Beginner (Remember, Understand):**
- Define, List, Describe, Explain, Identify, Recognize

**Intermediate (Apply, Analyze):**
- Demonstrate, Implement, Solve, Compare, Classify, Distinguish

**Advanced (Evaluate, Create):**
- Design, Develop, Evaluate, Critique, Compose, Formulate

**Example Objectives:**
```markdown
## Learning Objectives

By the end of this lesson, you will be able to:
1. **Define** what a variable is in Python
2. **Explain** the difference between mutable and immutable types
3. **Implement** variable assignments using proper naming conventions
4. **Analyze** code to identify variable scope issues
```

### Exercise and Assessment Structure

**Practice Activity Format:**
```markdown
## Practice Activities

### Activity 1: [Activity Name]

**Objective:** [What skill this practices]
**Time:** [N] minutes
**Difficulty:** Easy | Medium | Hard

**Instructions:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Output:**
[What success looks like]

**Solution:** [Link to solution file or inline solution]
```

### Answer Key Management

**For assessments with answers:**

**Option 1: Separate Solution File**
```
lesson_folder/
├── 1_Lesson_Content_v1.0.md
└── 1_Lesson_Solutions_v1.0.md
```

**Option 2: Collapsed Solution Section**
```markdown
### Solution

<details>
<summary>Click to reveal solution</summary>

[Solution content here]

</details>
```


---

## Chunk Navigation

- **Back to Index:** [0_Standards_INDEX_v2.2.md](0_Standards_INDEX_v2.2.md)
- **Previous:** [Organization Standards](2_Organization_Standards_v2.2.md)
- **Next:** [Asset Standards](4_Asset_Standards_v2.2.md)
- **Full Document:** [Document_Formatting_Standards_v2.2.md](Document_Formatting_Standards_v2.2.md)
