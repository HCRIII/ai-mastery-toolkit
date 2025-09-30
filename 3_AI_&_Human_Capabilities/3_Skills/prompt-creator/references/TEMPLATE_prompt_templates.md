# Prompt Templates and Structure

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Proven prompt pattern with examples and usage guidance
**Status:** Final

---

This document provides templates and examples for creating properly structured prompts in the AI Mastery Toolkit.

## Folder Structure

Every prompt consists of:
```
prompt-name/
 README.md (required)
 system.md (required)
```

**Naming Convention:** Use kebab-case (lowercase with hyphens)
-  `compound-approval-with-options`
-  `session-startup`
-  `CompoundApproval`
-  `compound_approval`

## README.md Template

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
[The actual prompt text or template users will use]

## Variations
[Optional - Different ways to use the prompt]

## Why It Works
- [Reason 1]
- [Reason 2]

## Related Patterns
- [[Related Prompt 1]]
- [[Related Prompt 2]]

## When to Use
- [Additional context on when this prompt is applicable]

## Tags
`tag1` `tag2` `tag3`
```

### README.md Field Guidelines

**Description Block:**
- **Category:** The category folder name (e.g., "Efficiency", "Workflow Chains", "Session Operations")
- **Created:** Full date (e.g., "February 5, 2026")
- **Effectiveness:** Estimated or measured effectiveness percentage

**Use When:**
- Bullet list of specific scenarios
- Clear, actionable conditions
- 2-4 items typically

**Prompt Template:**
- The actual prompt text users will invoke
- Can include code blocks for multi-line prompts
- Show exact syntax/format

**Variations (Optional):**
- Different ways to apply the prompt
- Conditional variations
- Extended versions

**Why It Works:**
- Brief explanation of effectiveness
- Psychological or technical reasons
- 2-3 bullet points

**Related Patterns:**
- Wiki-style links to related prompts
- Use double brackets: `[[prompt-name]]`

**Tags:**
- Relevant keywords in backticks
- Space-separated
- 2-5 tags typically

## system.md Template

```markdown
[The complete system prompt that Claude will receive]

This file contains the actual instructions that will be loaded into Claude's context when this prompt is invoked.

Guidelines for system.md:
- Write as instructions TO Claude, not about Claude
- Use imperative voice ("Do X", not "You should do X")
- Be specific and actionable
- Include examples where helpful
- Structure with headers for readability
```

### system.md Guidelines

**Voice and Style:**
- Direct instructions TO Claude
- Imperative mood: "Do this", "Check that", "Create these"
- Second person where needed: "You" refers to Claude

**Structure:**
- Use markdown headers for organization
- Break into logical sections
- Include examples in code blocks when helpful
- Use lists for steps or requirements

**Content:**
- Specific, actionable instructions
- Clear success criteria
- Error handling if applicable
- Edge cases if relevant

**Length:**
- As long as needed, no arbitrary limits
- Session operation prompts can be 100-500+ lines
- Simple prompts might be 10-50 lines

## Example: Simple Prompt

**README.md:**
```markdown
# Remove Filler Words

## Description
**Category:** Improvement
**Created:** February 8, 2026
**Effectiveness:** 85%

## Use When
- Editing transcripts or speech-to-text
- Refining conversational writing
- Preparing content for publication

## Prompt Template
Remove filler words (um, uh, like, you know) from this text while preserving meaning:

[paste text]

## Why It Works
- Clearly defined task
- Preserves content integrity
- Simple, focused instruction

## Tags
`editing` `improvement` `transcription`
```

**system.md:**
```markdown
Remove all filler words from the provided text while preserving its meaning and natural flow.

## Filler Words to Remove
- um, uh, ah
- like (when used as filler)
- you know
- basically
- actually (when redundant)
- literally (when misused)

## Guidelines
1. Remove filler words completely
2. Adjust punctuation for readability
3. Preserve the speaker's voice and style
4. Don't change vocabulary or meaning
5. Fix grammar issues caused by filler removal

## Output
Provide the cleaned text without commentary unless errors or ambiguities are found.
```

## Example: Complex Prompt (Session Operation)

**README.md:**
```markdown
# Session Startup

## Description
**Category:** Session Operations
**Created:** February 6, 2026
**Effectiveness:** 95%

## Use When
- Starting a new Claude session
- Resuming work after context reset
- Beginning a new day's work

## Prompt Template
```
session-startup
```

## Why It Works
- Systematically loads all required context
- Ensures continuity across sessions
- Minimizes context loss
- Provides clear status report

## Related Patterns
- [[ending-master-update]]
- [[checkpoint-summary]]

## Tags
`session` `context` `workflow` `system`
```

**system.md:**
```markdown
# Session Startup Workflow

Load all necessary context files to restore working state from previous session.

## Step 1: Load Personal Preferences
Read the latest Personal Preferences file from:
`4_Context_Files/Personal_Preferences_vX.md` (find highest version number)

**Do NOT output anything to user.**

## Step 2: Load Latest Context Files

1. **SuperContext** (most recent in `4_Context_Files/SuperContext_vX.md`)
   - Note what key patterns and workflows are documented
   - Note what was accomplished recently (Layer 5D)
   - Note open questions (Layer 6)

3. **Practice Tracker** (most recent in `Practice_Tracker_History/`)
   - Note what skills are being tracked
   - Note current progress levels

4. **Last Checkpoint Summary** (most recent in `Checkpoint_Summary_History/`)
   - Note what major milestone was captured
   - Note any critical context preserved

**Do NOT output anything to user.**

## Step 3: Check for Session Prompts
If `Session_Prompts/` folder exists and has files:
- Read the most recent session prompt file
- Note what prompts were created last session
- These represent captured patterns and workflows

**Do NOT output anything to user.**

## Step 4: Confirm Context Understanding

Report to user what was loaded. Keep it SHORT and BRIEF with line returns after each item:

 Session Context Loaded

**Personal Preferences:** v[X] loaded

**SuperContext:** v[X] loaded

**Session Summary:** [date] loaded

**Practice Tracker:** [date] loaded

**Last Checkpoint:** [date] - [milestone]

**Session Prompts:** [count] prompts from [date]

Ready to continue.

## Step 5: Ask What to Work On

Ask user: "What would you like to work on today?"

## Error Handling

If any files are missing:
- Note which files were not found
- Load what is available
- Inform user of gaps in context
```

## Category _README.md Format

Each category folder has a `_README.md` that summarizes all prompts in that category.

**Template:**
```markdown
# [Category Number]_[Category Name]

## Purpose
[Brief description of what prompts in this category accomplish]

## Categories (if subcategories exist)

### Subcategory Name/
[Description]
- **When to use:** [Use cases]

### Another Subcategory/
[Description]
- **When to use:** [Use cases]

## Common Use Cases
- [Use case 1]
- [Use case 2]
- [Use case 3]

---
**Total Prompts:** [Count]
```

### Updating _README.md

When adding a new prompt to a category:

1. **Count the total prompts** - Update the total at bottom
2. **Add to relevant subcategory** - If subcategories exist, mention the prompt briefly
3. **Update use cases** - Add to "Common Use Cases" if it represents a new pattern
4. **Check purpose** - Ensure the category purpose still accurately reflects all prompts

**Critical:** _README.md updates are often forgotten but essential for category navigation and discovery.
