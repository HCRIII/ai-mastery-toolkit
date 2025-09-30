# Commands

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for 2_Commands capabilities
**Status:** Final

---

**What:** Built-in slash commands for invoking skills and capabilities

**Purpose:** Learn how to use built-in commands, then create your own custom shortcuts

**Learning Path:** Built-in commands → Create custom commands

---

## Built-In Commands (16 Total)

These commands invoke built-in skills and are ready to use immediately.

### Document Commands (4 commands)

- **[/docx](docx-command.md)** - Create/edit Word documents
- **[/pptx](pptx-command.md)** - Create/edit PowerPoint presentations
- **[/xlsx](xlsx-command.md)** - Create/edit Excel spreadsheets
- **[/pdf](pdf-command.md)** - Manipulate PDF files

### Creative Commands (3 commands)

- **[/canvas-design](canvas-design-command.md)** - Create visual art and posters
- **[/algorithmic-art](algorithmic-art-command.md)** - Generate algorithmic/generative art
- **[/slack-gif-creator](slack-gif-creator-command.md)** - Create Slack-optimized GIFs

### Development Commands (2 commands)

- **[/web-artifacts-builder](web-artifacts-builder-command.md)** - Build complex web artifacts
- **[/mcp-builder](mcp-builder-command.md)** - Create MCP servers

### Specialized Commands (5 commands)

- **[/doc-coauthoring](doc-coauthoring-command.md)** - Guided documentation workflow
- **[/internal-comms](internal-comms-command.md)** - Company communications
- **[/theme-factory](theme-factory-command.md)** - Style artifacts with themes
- **[/brand-guidelines](brand-guidelines-command.md)** - Apply Anthropic branding
- **[/skill-creator](skill-creator-command.md)** - Create custom skills

### Utility Commands (2 commands)

- **[/keybindings-help](keybindings-help-command.md)** - Customize keyboard shortcuts
- **[/create-shortcut](create-shortcut-command.md)** - Create automation shortcuts

---

## How to Use Commands

### Explicit Invocation
```
Use the [skill-name] skill
```

**Examples:**
```
Use the docx skill
Use the pptx skill
Use the skill-creator skill
```

### Automatic Triggers

Most commands activate automatically when you mention trigger words or upload relevant files:

**Word documents:**
- "Create a Word document..." → `/docx` activates
- Upload .docx file → `/docx` activates

**Presentations:**
- "Make me slides..." → `/pptx` activates
- Upload .pptx file → `/pptx` activates

**Spreadsheets:**
- "Analyze this data..." → `/xlsx` activates
- Upload .xlsx file → `/xlsx` activates

See each command's file for complete trigger list.

---

## Creating Your Own Commands

Commands are implemented as:
1. **Skills** - Complex workflows (see Skills folder)
2. **Prompts** - Reusable instructions (see Prompts folder)
3. **Shortcuts** - Automated tasks (use `/create-shortcut`)

**To create custom commands:**
1. Use `/skill-creator` for complex workflows
2. Create prompts for reusable instructions
3. Use `/create-shortcut` for automation

---

## Full Documentation

**See:** [2. Commands Guide](../../2_How_To_Guides/2_Commands_Guide.md)

Complete guide covering:
- What commands are
- All 16 built-in commands explained
- How to create and invoke your own
- Command best practices
- Integration patterns

---

## Quick Start

1. **Try built-in commands** - Use them for your actual work
2. **Notice automatic triggers** - See how they activate naturally
3. **Learn patterns** - Understand when each command is useful
4. **Create your own** - Build custom commands for your workflows

---

**Last Updated:** February 7, 2026
**Total Built-In Commands:** 16
**Your Custom Commands:** Create them using skills, prompts, or shortcuts!
