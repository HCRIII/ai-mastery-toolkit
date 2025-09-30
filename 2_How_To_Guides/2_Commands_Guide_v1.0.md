# Commands Guide

**Created:** 2026-02-08
**Last Updated:** 2026-02-08
**Purpose:** Learn to invoke Claude's capabilities through commands and skills
**Version:** v1.0
**Status:** Final
**Estimated Reading Time:** 7 minutes (~1,314 words)
**Difficulty:** Beginner
**Prerequisites:** Basic understanding of prompting

---

## You Are Here

**Phase 1: Building Blocks → Commands Guide → Capabilities**

**Navigation:** [Start Here](../1_Toolkit_Documentation/1_Start_Here.md) → [How-To Guides](README.md) → Commands Guide

---

## What Are Commands?

**Commands are ways to invoke Claude's capabilities through skills, prompts, and automations.** In Cowork mode, commands activate powerful built-in skills for document creation, data analysis, visual design, and more.

Commands can be invoked:
- **Explicitly:** `Use the [skill-name] skill`
- **Automatically:** Trigger words or file uploads activate them
- **Custom:** Create your own using skills, prompts, or shortcuts

---

## How Commands Work

### Explicit Invocation

Tell Claude exactly which skill to use:
```text
text
Use the docx skill
Use the xlsx skill
Use the skill-creator skill
```markdown
markdown

### Automatic Activation

Most commands activate automatically when you:
- **Mention trigger words:** "Create a Word document..." → `/docx` activates
- **Upload relevant files:** Upload .xlsx file → `/xlsx` activates
- **Request specific tasks:** "Make me slides..." → `/pptx` activates

**You don't have to remember exact commands** - just work naturally and commands activate when needed.

### When to Use Explicit vs Automatic

**Use explicit invocation when:**
- You want to be specific about which tool to use
- Automatic activation might be ambiguous
- You're learning and want to practice

**Let automatic activation work when:**
- You're focused on the task, not the tool
- The context is clear (file type, trigger words)
- You want natural, efficient workflow

---

## Built-In Commands Reference

All 16 built-in commands are documented in `3_AI_&_Human_Capabilities/Commands/`

### Document Commands (4)

**[/docx](../3_AI_&_Human_Capabilities/2_Commands/docx-command.md)** - Word Documents
- Creates, reads, edits .docx files
- Triggers: "Word doc", "report", "memo", upload .docx
- Use for: Professional documents, reports, letters

**[/pptx](../3_AI_&_Human_Capabilities/2_Commands/pptx-command.md)** - PowerPoint Presentations
- Creates, reads, edits presentations
- Triggers: "deck", "slides", "presentation", upload .pptx
- Use for: Slide decks, pitch decks, presentations

**[/xlsx](../3_AI_&_Human_Capabilities/2_Commands/xlsx-command.md)** - Excel Spreadsheets
- Creates, analyzes spreadsheets and tabular data
- Triggers: spreadsheet references, upload .xlsx/.csv/.tsv
- Use for: Data analysis, formulas, charts, data cleaning

**[/pdf](../3_AI_&_Human_Capabilities/2_Commands/pdf-command.md)** - PDF Manipulation
- Reads, extracts, manipulates PDFs
- Triggers: ".pdf" mentions, upload .pdf
- Use for: Extract text/tables, merge, split, forms, OCR

### Creative Commands (3)

**[/canvas-design](../3_AI_&_Human_Capabilities/2_Commands/canvas-design-command.md)** - Visual Art
- Creates posters, designs, visual art
- Triggers: "poster", "design", "art"
- Use for: Event posters, visual designs, artistic pieces

**[/algorithmic-art](../3_AI_&_Human_Capabilities/2_Commands/algorithmic-art-command.md)** - Generative Art
- Creates algorithmic art with p5.js
- Triggers: "generative art", "flow fields", "particle systems"
- Use for: Code-based art, flow fields, algorithmic patterns

**[/slack-gif-creator](../3_AI_&_Human_Capabilities/2_Commands/slack-gif-creator-command.md)** - Animated GIFs
- Creates Slack-optimized GIFs
- Triggers: "GIF for Slack", "animated GIF"
- Use for: Slack reactions, team communication GIFs

### Development Commands (2)

**[/web-artifacts-builder](../3_AI_&_Human_Capabilities/2_Commands/web-artifacts-builder-command.md)** - Complex Web Artifacts
- Creates multi-component HTML artifacts
- Triggers: "complex artifact", "multi-component web app"
- Use for: Interactive dashboards, complex web apps

**[/mcp-builder](../3_AI_&_Human_Capabilities/2_Commands/mcp-builder-command.md)** - MCP Servers
- Guides MCP server creation
- Triggers: "MCP server", "integrate APIs"
- Use for: API integrations, external service connections

### Specialized Commands (5)

**[/doc-coauthoring](../3_AI_&_Human_Capabilities/2_Commands/doc-coauthoring-command.md)** - Documentation Workflow
- Structured doc creation process
- Triggers: "writing docs", "proposals", "specs"
- Use for: Technical specs, proposals, decision docs

**[/internal-comms](../3_AI_&_Human_Capabilities/2_Commands/internal-comms-command.md)** - Company Communications
- Writes internal communications
- Triggers: "status report", "leadership update", "newsletter"
- Use for: Company updates, reports, announcements

**[/theme-factory](../3_AI_&_Human_Capabilities/2_Commands/theme-factory-command.md)** - Artifact Styling
- Applies themes to artifacts
- Triggers: "style artifact", "apply theme"
- Use for: Visual styling, preset or custom themes

**[/brand-guidelines](../3_AI_&_Human_Capabilities/2_Commands/brand-guidelines-command.md)** - Anthropic Branding
- Applies Anthropic branding
- Triggers: "brand colors", "company design standards"
- Use for: Anthropic-branded materials, corporate docs

**[/skill-creator](../3_AI_&_Human_Capabilities/2_Commands/skill-creator-command.md)** - Custom Skill Creation
- Guides custom skill development
- Triggers: "create a skill", "build a custom skill"
- Use for: Creating new skills (use BEFORE making your first skill)

### Utility Commands (2)

**[/keybindings-help](../3_AI_&_Human_Capabilities/2_Commands/keybindings-help-command.md)** - Keyboard Customization
- Customizes keyboard shortcuts
- Triggers: "rebind keys", "chord shortcut", "change submit key"
- Use for: Rebind keys, customize controls

**[/create-shortcut](../3_AI_&_Human_Capabilities/2_Commands/create-shortcut-command.md)** - Automation Shortcuts
- Creates on-demand or scheduled shortcuts
- Triggers: shortcut creation, task automation requests
- Use for: Task automation, scheduled workflows

---

## Creating Your Own Commands

Once you understand built-in commands, create your own in three ways:

### 1. Custom Skills (Complex Workflows)

**Use for:** Multi-step specialized workflows

**How to create:**
```text
text
Use the skill-creator skill
```markdown
markdown

**Steps:**
1. Use `/skill-creator` for guided development
2. Define skill purpose and workflow
3. Create skill folder with SKILL.md
4. Test thoroughly
5. Place in Skills folder

**Example:** Skill that formats meeting notes into professional reports

**See:** Skills_Guide.md for complete guide

---

### 2. Custom Prompts (Reusable Instructions)

**Use for:** Specific, repeatable instructions

**How to create:**
- Create folder in Prompts/
- Add system.md with instructions
- Add README.md with description
- Follow Stage 1/2/3 pattern

**Example:** Prompt that analyzes code for security vulnerabilities

**See:** Prompts_Guide.md for complete guide

---

### 3. Automation Shortcuts (Scheduled Tasks)

**Use for:** Automated, recurring tasks

**How to create:**
```text
text
Use the create-shortcut skill
```markdown

**Steps:**
1. Use `/create-shortcut`
2. Define what shortcut does
3. Choose on-demand or scheduled
4. Test and refine

**Example:** Shortcut that compiles weekly metrics every Monday

---

## Command Best Practices

### Learning Built-In Commands

**Start with automatic triggers:**
- Work naturally - let commands activate
- Notice which commands trigger for which tasks
- Build intuition about when each is useful

**Practice explicit invocation:**
- Use explicit commands to learn what's available
- Understand when to be specific
- Build command vocabulary

**Read command files:**
- Browse `3_AI_&_Human_Capabilities/Commands/`
- See trigger words and examples
- Understand capabilities and limitations

### Creating Custom Commands

**Before creating:**
-  Check if built-in command already exists
-  Ensure task is repeatable enough
-  Use `/skill-creator` for guidance

**When creating:**
-  Single-purpose commands (do one thing well)
-  Clear documentation and examples
-  Test with various inputs
-  Get user feedback

**After creating:**
-  Track usage and effectiveness
-  Iterate based on real use
-  Update documentation
-  Share if useful

---

## Command Troubleshooting

### Command Didn't Activate

**Problem:** Expected automatic trigger didn't work

**Solutions:**
- Use explicit invocation
- Check trigger words in command file
- Verify file type if uploading
- Be more specific in request

### Wrong Command Activated

**Problem:** Different command activated

**Solutions:**
- Use explicit invocation
- Be more specific with trigger words
- Check if request matches multiple triggers

### Command Output Not Expected

**Problem:** Command ran but output wasn't right

**Solutions:**
- Review command capabilities
- Provide more specific instructions
- Check if different command would be better
- Try explicit parameters

---

## Quick Reference

### Most Common Commands

**Documents:** /docx, /pptx, /xlsx, /pdf
**Creation:** /canvas-design, /doc-coauthoring, /internal-comms
**Development:** /skill-creator, /mcp-builder
**Automation:** /create-shortcut, /keybindings-help

### Command Invocation

**Explicit:** `Use the [skill-name] skill`
**Automatic:** Mention trigger words or upload files
**Custom:** Create using skills, prompts, or shortcuts

---

## Personal Notes

**Use this space to document your learning, key insights, and personal discoveries:**

- Commands you use most frequently:
- Automatic triggers you've discovered:
- Custom commands you want to create:
- Automation ideas for your workflow:
- Challenges you've encountered:

---

## Progress Tracking

**I've completed this guide:** 

Once you've learned built-in commands, practiced explicit and automatic invocation, and explored the command system, mark this guide as complete and move to the next step.

---

## Related Guides & Next Steps

**You've completed:** Phase 1, Part 2 of 4

**Next Guide:** [3. Skills Guide](3_Skills_Guide_v1.0.md) - Learn to use and create reusable capability bundles

**Full Learning Path:**
- **Phase 1: Building Blocks**
  1. [Prompts Guide](1_Prompts_Guide_v1.0.md)
  2.  Commands Guide (you are here)
  3. → [Skills Guide](3_Skills_Guide_v1.0.md)
  4. → [Projects & RAG Guide](4_Projects_&_RAG_Guide_v1.0.md)
- **Phase 2: Expanding Capabilities**
  5. [Agents Guide](5_Agents_Guide_v1.0.md)
  6. [Connectors & MCP Guide](6_Connectors_MCP_Guide_v1.0.md)

**Quick Links:**
- [Prompts Guide](1_Prompts_Guide_v1.0.md) - Communicating with AI
- [Skills Guide](3_Skills_Guide_v1.0.md) - Built-in and custom capabilities
- [Projects Guide](4_Projects_&_RAG_Guide_v1.0.md) - Managing context and memory
