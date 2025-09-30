---
name: prompt-creator
description: Create properly structured prompts for the AI Mastery Toolkit prompt library. Use when user wants to create a new prompt, capture a reusable pattern, document a workflow, or add to their prompt collection. Triggers include "create a prompt", "save this as a prompt", "add to my prompt library", "document this pattern", or any request to formalize a reusable AI interaction pattern. Ensures kebab-case naming, proper folder structure (README.md + system.md), and automatic category _README.md updates.
---

# Prompt Creator

## Overview

The Prompt Creator skill guides you through creating properly structured prompts for the AI Mastery Toolkit's prompt library. It ensures consistent format, organization, and discoverability across all prompts.

**Key principle:** Every prompt is a folder containing README.md (user-facing documentation) and system.md (Claude's instructions).

## When This Skill Triggers

Use this skill when you want to:
- Create a new reusable prompt for your library
- Capture a successful interaction pattern
- Document a workflow for future use
- Formalize an AI pattern you've discovered
- Add a new prompt to an existing category

**Do NOT use for:** One-off requests, simple questions, or when the user just wants Claude to do something (not capture it as a reusable pattern).

## Core Workflow

### Step 1: Understand the Prompt

Before creating the prompt, clarify:
- **What task does this prompt accomplish?**
- **When should someone use it?** (specific scenarios)
- **What category does it belong to?** (see Category Structure below)
- **What makes it effective?** (why this pattern works)
- **Are there variations?** (different ways to apply it)

Ask 2-3 focused questions if the prompt's purpose or usage is unclear.

### Step 2: Determine Category and Name

**Category Structure:**
```
3_AI_&_Human_Capabilities/1_Prompts/
├── 00-core-system/        - Session operations, efficiency, workflows
├── 01-analysis/           - Analyzing content, systems, research
├── 02-creation/           - Creating new content and artifacts
├── 03-extraction/         - Extracting information from sources
├── 04-summarization/      - Condensing and synthesizing
├── 05-explanation/        - Explaining concepts and processes
├── 06-improvement/        - Enhancing existing content
├── 07-evaluation/         - Assessing quality and effectiveness
├── 08-transformation/     - Converting between formats/styles
├── 09-cybersecurity/      - Security analysis and patterns
├── 10-software-development/ - Coding and development
├── 11-research-academic/  - Academic research patterns
├── 12-business-strategy/  - Business planning and analysis
├── 13-personal-development/ - Personal growth and learning
├── 14-client-work/        - Client-facing patterns
└── 15-academy/            - Course-specific patterns
```

**Subcategories:** Many categories have subcategories (folders within). Check existing structure before choosing.

**Naming Convention:**
- Use kebab-case (lowercase with hyphens)
- Be descriptive but concise
- ✅ Good: `remove-filler-words`, `session-startup`, `swot-analysis`
- ❌ Bad: `RemoveFiller`, `remove_filler`, `rfwa`

### Step 3: Create Prompt Structure

Create the folder and both required files:

```bash
cd "3_AI_&_Human_Capabilities/1_Prompts/[category]/"
mkdir [prompt-name]
cd [prompt-name]
touch README.md system.md
```

**Critical:** Both files are required. README.md is user-facing, system.md is Claude's instructions.

### Step 4: Write README.md

Use this template (see `references/prompt_templates.md` for complete template and examples):

```markdown
# [Prompt Name]

## Description
**Category:** [Category Name]
**Created:** [Date]
**Effectiveness:** [Percentage]

## Use When
- [Scenario 1]
- [Scenario 2]
- [Scenario 3]

## Prompt Template
[The actual prompt text users will use]

## Variations
[Optional - Different ways to use the prompt]

## Why It Works
- [Reason 1]
- [Reason 2]

## Related Patterns
- [[Related Prompt 1]]
- [[Related Prompt 2]]

## Tags
`tag1` `tag2` `tag3`
```

**README.md Guidelines:**
- Clear, user-facing language
- Show exact prompt syntax in "Prompt Template"
- Include variations if the prompt can be adapted
- Explain effectiveness in "Why It Works"
- Link related prompts with wiki-style `[[prompt-name]]`
- Add 2-5 relevant tags in backticks

### Step 5: Write system.md

Write the complete instructions that Claude will receive when this prompt is invoked.

**system.md Guidelines:**
- Write TO Claude, not about Claude
- Use imperative voice: "Do X", "Check Y", "Create Z"
- Be specific and actionable
- Include examples where helpful
- Use markdown headers for organization
- Structure: Overview → Guidelines → Process → Output

**Example structure:**
```markdown
[Opening instruction stating the task]

## Guidelines
- [Guideline 1]
- [Guideline 2]

## Process
1. [Step 1]
2. [Step 2]

## Output
[What format/style to return]
```

**Length:** As long as needed. Session operation prompts are 100-500+ lines. Simple prompts might be 10-50 lines.

### Step 6: Update Category _README.md

**CRITICAL:** This step is often forgotten but essential.

Every category has a `_README.md` that summarizes all prompts. You must update it when adding a new prompt.

**What to update:**
1. **Total Prompts count** at the bottom
2. **Subcategory listing** if prompt fits an existing subcategory
3. **Common Use Cases** if this represents a new pattern

**Example update:**
```markdown
# 06_Improvement

## Purpose
Enhance and refine existing content for clarity, style, and effectiveness.

## Categories

### Editing/
Polish writing, remove filler words, improve clarity
- **When to use:** Refining drafts, cleaning transcripts, improving readability

[... other subcategories ...]

## Common Use Cases
- Remove filler words from transcripts
- Improve writing clarity and style
- [NEW] Enhance technical documentation

---
**Total Prompts:** 15  <!-- Updated from 14 -->
```

### Step 7: Test the Prompt

After creating the prompt:
1. Read the README.md to verify user-facing documentation is clear
2. Read the system.md to verify instructions are complete
3. Verify the category _README.md was updated
4. Optionally: Test by invoking the prompt and checking results

### Step 8: Report Completion

Provide the user with:
- Computer:// links to both README.md and system.md
- Brief summary of what was created
- Confirmation of category _README.md update
- Location in the prompt library

**Example:**
```
Created new prompt: remove-filler-words

📁 Location: 3_AI_&_Human_Capabilities/1_Prompts/06-improvement/editing/remove-filler-words/

[View README.md](computer:///path/to/README.md)
[View system.md](computer:///path/to/system.md)

✅ Updated 06-improvement/_README.md (total prompts: 15)
```

## Best Practices

### Clear Triggers in Description

The README.md description should clearly state when to use the prompt. Users need to know instantly if this prompt solves their problem.

**Good:**
```markdown
## Use When
- Editing transcripts or speech-to-text
- Refining conversational writing
- Preparing content for publication
```

**Bad:**
```markdown
## Use When
- When you need it
- Various situations
- Whenever appropriate
```

### Actionable Instructions in system.md

system.md should be specific enough that Claude knows exactly what to do without interpretation.

**Good:**
```markdown
## Guidelines
1. Remove filler words completely
2. Adjust punctuation for readability
3. Preserve the speaker's voice and style
4. Don't change vocabulary or meaning
```

**Bad:**
```markdown
## Guidelines
- Make it better
- Clean it up
- Improve as needed
```

### Proper Naming

Prompt names should be:
- Descriptive (clear what it does)
- Concise (not too long)
- Kebab-case (lowercase-with-hyphens)
- Focused (one clear purpose)

**Good:** `session-startup`, `swot-analysis`, `remove-filler-words`
**Bad:** `startup`, `doSwotAnalysisOnBusinessStrategy`, `cleanup_text_v2`

### Update Category _README.md

This is the most commonly forgotten step. Always update the category's _README.md:
- Increment total prompts count
- Add to subcategory descriptions if relevant
- Update common use cases if needed

## Common Patterns

### Session Operation Prompts

Located in `00-core-system/`, these prompts manage Claude sessions.

**Characteristics:**
- Long system.md (100-500+ lines)
- Detailed step-by-step workflows
- File path specifications
- Error handling
- Multiple sections with headers

### Simple Task Prompts

Most prompts are focused on a single task.

**Characteristics:**
- Short README.md (20-50 lines)
- Medium system.md (20-100 lines)
- Clear input → process → output
- Variations for different use cases

### Framework/Template Prompts

Prompts that apply structured thinking frameworks.

**Characteristics:**
- Template in README.md showing framework structure
- system.md explains how to apply the framework
- Examples of completed frameworks
- When to use each framework type

## Resources

### references/prompt_templates.md

Complete templates, examples, and detailed guidelines for creating README.md and system.md files. Read this file when you need:
- Full README.md template with all fields explained
- Full system.md template and guidelines
- Example prompts (simple and complex)
- Category _README.md format and update instructions
- Field-by-field guidance for every section

**When to reference:** Read this file before creating your first prompt in a session, or when you're unsure about any template structure or field.
