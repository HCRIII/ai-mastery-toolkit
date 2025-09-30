# Skills

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for 3_Skills capabilities
**Status:** Final

---

**What:** Built-in system skills and your custom skills for specialized tasks and workflows

**Purpose:** Learn and use powerful built-in skills, then create your own custom skills using the skill-creator.

**Learning Path:** Built-in skills → skill-creator skill → Custom skills

---

## Built-In System Skills (16 Total)

These skills come with Cowork mode and are ready to use. Learn these FIRST before creating your own.

### Document Skills (4 skills)

- **[docx-skill](docx-skill/)** - Microsoft Word documents (create, read, edit)
- **[pptx-skill](pptx-skill/)** - PowerPoint presentations (slides, layouts, notes)
- **[xlsx-skill](xlsx-skill/)** - Excel spreadsheets (formulas, data, analysis)
- **[pdf-skill](pdf-skill/)** - PDF manipulation (extract, merge, forms)

### Creative Skills (3 skills)

- **[canvas-design-skill](canvas-design-skill/)** - Visual art and poster creation
- **[algorithmic-art-skill](algorithmic-art-skill/)** - Generative art with code (p5.js, flow fields)
- **[slack-gif-creator-skill](slack-gif-creator-skill/)** - Animated GIFs optimized for Slack

### Development Skills (2 skills)

- **[web-artifacts-builder-skill](web-artifacts-builder-skill/)** - Complex web artifacts (React, shadcn/ui)
- **[mcp-builder-skill](mcp-builder-skill/)** - MCP server creation (API integrations)

### Specialized Skills (5 skills)

- **[doc-coauthoring-skill](doc-coauthoring-skill/)** - Structured documentation workflow
- **[internal-comms-skill](internal-comms-skill/)** - Company communications (reports, updates)
- **[theme-factory-skill](theme-factory-skill/)** - Artifact styling (10 presets + custom themes)
- **[brand-guidelines-skill](brand-guidelines-skill/)** - Anthropic branding application
- **[skill-creator-skill](skill-creator-skill/)** - Guided custom skill creation  **USE THIS BEFORE CREATING YOUR OWN**

### Utility Skills (2 skills)

- **[keybindings-help-skill](keybindings-help-skill/)** - Customize keyboard shortcuts
- **[create-shortcut-skill](create-shortcut-skill/)** - Automation shortcuts (on-demand or scheduled)

---

## How to Use Built-In Skills

**Explicit invocation:**
```
Use the [skill-name] skill
```

**Automatic triggers:**
- Mention trigger words (see each skill's SKILL.md)
- Upload relevant files (.docx, .xlsx, .pdf, etc.)
- Request skill-related tasks

**Example:**
- "Create a Word document about..." → docx skill activates
- "Make me slides for..." → pptx skill activates
- Upload .xlsx file → xlsx skill activates

---

## Creating Your Own Custom Skills

**Important:** Learn built-in skills first, then use skill-creator, THEN create custom skills.

### Step 1: Use the skill-creator Skill

```
Use the skill-creator skill
```

This provides:
- Step-by-step guidance
- Best practices
- Structure templates
- Testing strategies
- Documentation help

### Step 2: Build Your Skill

Standard skill folder structure:
```
your-skill-name/
 SKILL.md         # Complete skill documentation
```

### Step 3: Document Well

Include in SKILL.md:
- What the skill does
- When to use it
- How to invoke
- Capabilities
- Example usage
- Tips for best results
- Integration points

### Step 4: Test & Iterate

- Test with various inputs
- Verify output quality
- Get user feedback
- Improve based on real use

---

## Full Documentation

**See:** [3. Skills Guide](../../2_How_To_Guides/3_Skills_Guide.md)

Comprehensive guide covering:
- Skills vs Prompts vs Agents
- All 16 built-in skills documented
- Using the skill-creator skill
- Creating custom skills
- Best practices
- Integration patterns

---

## Quick Start

1. **Explore built-in skills** - Browse the 16 folders above
2. **Try using skills** - Invoke skills for your tasks
3. **Learn skill-creator** - Read skill-creator-skill/SKILL.md
4. **Create your first skill** - Use skill-creator for guidance
5. **Build your library** - Create personal skills collection

---

**Last Updated:** February 7, 2026
**Total Built-In Skills:** 16
**Your Custom Skills:** Place them here alongside built-in skills!
