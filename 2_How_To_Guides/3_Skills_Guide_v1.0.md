# Skills Guide

**Created:** 2026-02-08
**Last Updated:** 2026-02-08
**Purpose:** Learn and use built-in skills, then create your own
**Version:** v1.0
**Status:** Final
**Estimated Reading Time:** 15 minutes (~3,092 words)
**Difficulty:** Beginner to Intermediate
**Prerequisites:** Prompts Guide, Commands Guide

---

## You Are Here

**Phase 1: Building Blocks → Skills Guide → Reusable Capabilities**

**Navigation:** [Start Here](../1_Toolkit_Documentation/1_Start_Here.md) → [How-To Guides](README.md) → Skills Guide

---

## What Are Skills?

**Skills are executable capability bundles that extend Claude's abilities for specialized tasks.** Think of them as pre-packaged expertise that can include tools, prompts, workflows, and domain knowledge.

A skill is a folder containing:
- **SKILL.md** - Complete skill documentation and prompts
- **README.md** - Quick reference and usage guide
- **Optional files** - Templates, data, examples, etc.

Skills are invoked by name and provide structured, repeatable solutions to specific types of problems.

---

## Learning Path

**Start here if you're new to skills:**

1. **Learn Built-In Skills First** (Recommended starting point)
   - Explore the 16 built-in skills in `3_AI_&_Human_Capabilities/Skills/`
   - Use them for your actual work
   - Understand patterns and capabilities
   - See how skills solve real problems

2. **Use the Skill Creator Skill** (Before creating your own)
   - Learn guided skill development
   - Understand best practices
   - Get help with structure and documentation
   - See full skill creation workflow

3. **Create Custom Skills** (After mastering 1 & 2)
   - Build skills for your specific needs
   - Follow patterns from built-in skills
   - Use skill-creator for guidance
   - Build personal skills library

**Why this order?** You learn faster by using skills than by creating them. See working examples first, then build your own.

---

## Skills vs Prompts vs Agents

Understanding the distinctions helps you choose the right tool:

### Prompts
**What:** Text instructions in system.md files
**When:** Specific, repeatable instructions
**Example:** "Analyze code for security vulnerabilities"
**Location:** `3_AI_&_Human_Capabilities/Prompts/`

### Skills
**What:** Executable bundles with tools, prompts, workflows
**When:** Complex tasks requiring multiple steps or specialized knowledge
**Example:** Creating formatted documents, analyzing spreadsheets
**Location:** `3_AI_&_Human_Capabilities/Skills/` (custom only)

### Agents
**What:** Specialized AI subagents spawned for autonomous work
**When:** Multi-step exploration, planning, research
**Example:** Exploring codebase, planning implementation
**Location:** `3_AI_&_Human_Capabilities/Agents/`

**Quick Decision Guide:**
- Need text instruction → Use **Prompt**
- Need document processing or specialized workflow → Use **Skill**
- Need autonomous multi-step work → Spawn **Agent**

---

## Built-In System Skills

These skills come with Cowork mode and require no setup:

### Document Skills

**docx** - Microsoft Word documents
- Create, read, edit, manipulate .docx files
- Professional formatting, tracked changes, comments
- Invoke: Use the `docx` skill
- Triggers: "Word doc", ".docx", "document", "report", "memo"

**pptx** - Microsoft PowerPoint presentations
- Create, read, edit slide decks
- Templates, layouts, speaker notes
- Invoke: Use the `pptx` skill
- Triggers: "PowerPoint", "presentation", "slides", "deck"

**xlsx** - Microsoft Excel spreadsheets
- Create, read, edit, analyze spreadsheets
- Formulas, formatting, charts, data analysis
- Invoke: Use the `xlsx` skill
- Triggers: "Excel", "spreadsheet", ".xlsx", "data table"

**pdf** - PDF manipulation
- Extract text/tables, merge/split, create, fill forms
- Rotate, watermark, encrypt/decrypt
- Invoke: Use the `pdf` skill
- Triggers: "PDF", ".pdf", "form"

### Creative Skills

**canvas-design** - Visual art creation
- Create posters, designs, visual art
- Uses design philosophy and principles
- Invoke: Use the `canvas-design` skill
- Triggers: "poster", "design", "visual art"

**algorithmic-art** - Generative art
- Create art using p5.js code
- Seeded randomness, parameter exploration
- Invoke: Use the `algorithmic-art` skill
- Triggers: "generative art", "algorithmic art", "flow fields"

**slack-gif-creator** - Animated GIFs
- Create GIFs optimized for Slack
- Size constraints, animation concepts
- Invoke: Use the `slack-gif-creator` skill
- Triggers: "GIF for Slack", "animated GIF"

### Development Skills

**web-artifacts-builder** - Complex web artifacts
- Multi-component HTML artifacts
- React, Tailwind CSS, shadcn/ui
- Invoke: Use the `web-artifacts-builder` skill
- Triggers: "complex artifact", "multi-component web app"

**mcp-builder** - MCP server creation
- Build Model Context Protocol servers
- Python (FastMCP) or Node/TypeScript
- Invoke: Use the `mcp-builder` skill
- Triggers: "MCP server", "build connector"

### Specialized Skills

**plan-generator** - Structured plans and proposals
- Create decision-ready planning documents
- Implementation plans, proposals, strategy docs
- Saves to 6_Session_Working_Files/ as markdown
- Invoke: Use the `plan-generator` skill
- Triggers: "create a plan", "give me a proposal", "implementation plan", "help me decide"

**prompt-creator** - Prompt library management
- Create properly structured prompts for toolkit
- Ensures kebab-case naming, proper structure (README.md + system.md)
- Automatically updates category _README.md files
- Invoke: Use the `prompt-creator` skill
- Triggers: "create a prompt", "save this as a prompt", "add to my prompt library"

**doc-coauthoring** - Documentation workflow
- Structured doc creation process
- Context gathering, iteration, verification
- Invoke: Use the `doc-coauthoring` skill
- Triggers: "write documentation", "create proposal", "draft spec"

**internal-comms** - Company communications
- Internal communications templates
- Status reports, updates, newsletters
- Invoke: Use the `internal-comms` skill
- Triggers: "status report", "leadership update", "company newsletter"

**theme-factory** - Artifact styling
- Apply themes to slides, docs, HTML
- 10 preset themes or generate custom
- Invoke: Use the `theme-factory` skill
- Triggers: "style artifact", "apply theme"

**brand-guidelines** - Anthropic branding
- Apply Anthropic's brand colors/typography
- For artifacts needing company look-and-feel
- Invoke: Use the `brand-guidelines` skill
- Triggers: "Anthropic brand", "company design standards"

**skill-creator** - Build custom skills
- Guided skill development workflow
- Best practices and structure
- Invoke: Use the `skill-creator` skill
- Triggers: "create skill", "build custom skill"

### Utility Skills

**keybindings-help** - Customize keyboard shortcuts
- Modify ~/.claude/keybindings.json
- Add chord bindings, rebind keys
- Invoke: Use the `keybindings-help` skill
- Triggers: "customize keybindings", "rebind keys"

**create-shortcut** - Automation shortcuts
- Create on-demand or scheduled shortcuts
- Invoke: Use the `create-shortcut` skill
- Triggers: "create shortcut", "automate task"

---

## How to Use Built-In Skills

### Invocation Methods

**1. Explicit invocation:**
```text
text
Use the [skill-name] skill
```markdown
markdown

**2. Trigger words:**
Just mention relevant keywords:
- "Create a Word document" → docx skill triggers
- "Make a PowerPoint" → pptx skill triggers
- "Analyze this spreadsheet" → xlsx skill triggers

**3. File uploads:**
Upload relevant file types:
- Upload .docx → docx skill available
- Upload .xlsx → xlsx skill available
- Upload .pdf → pdf skill available

### Skill Usage Pattern

1. **Invoke skill** (explicitly or via trigger)
2. **Skill loads** - You'll see confirmation
3. **Follow skill prompts** - Skill provides guidance
4. **Provide required info** - Context, preferences, files
5. **Skill executes** - Performs specialized work
6. **Review output** - Check results, iterate if needed

---

## Using the Skill Creator Skill

**Before creating your own skills, use the skill-creator skill to learn the process and get guided help.**

The skill-creator skill is a built-in skill specifically designed to guide you through custom skill development.

### Why Use Skill Creator First?

**Learn by doing:**
- Step-by-step guidance through skill creation
- Best practices explained as you build
- Structure templates provided
- Testing strategies demonstrated
- Documentation help included

**Avoid common mistakes:**
- Skill creator catches design issues early
- Prevents over-complex skills
- Ensures proper documentation
- Guides testing approach
- Validates skill necessity

**Get it right the first time:**
- Clear skill purpose definition
- Proper component design
- Effective prompt templates
- Comprehensive documentation
- Integration planning

### How to Use Skill Creator

**Step 1: Invoke the skill**
```text
text
Use the skill-creator skill
```python
markdown

**Step 2: Answer guiding questions**
The skill will ask:
- What problem does this skill solve?
- Who will use it?
- What inputs are needed?
- What outputs should it produce?
- What steps are involved?

**Step 3: Follow the workflow**
The skill guides you through:
1. Defining purpose
2. Designing components
3. Creating structure
4. Writing documentation
5. Testing thoroughly
6. Finalizing skill

**Step 4: Review and iterate**
- Test with real use cases
- Get feedback from users
- Refine based on results
- Update documentation

### When to Use Skill Creator

**Always use it for:**
- Your first custom skill (learn the process)
- Complex skills with multiple steps
- Skills integrating multiple tools
- Domain-specific skills requiring structure

**Can skip for:**
- Simple one-step skills (but skill-creator still helps!)
- Skills very similar to ones you've built before
- Quick experimental skills

**Best practice:** Even experienced skill creators benefit from the guided workflow. Use it liberally.

### What You'll Learn

**Skill design principles:**
- Single responsibility
- Clear inputs and outputs
- User-friendly interfaces
- Proper documentation
- Composability with other tools

**Common patterns:**
- Document processing skills
- Data analysis skills
- Workflow automation skills
- Template-based skills
- Integration skills

**Documentation standards:**
- What goes in SKILL.md
- How to write clear examples
- Tips for best results
- Integration guidance

**Testing approaches:**
- Edge case identification
- Quality validation
- User feedback collection
- Iterative improvement

### Example: Using Skill Creator

**Your request:**
"Help me create a skill that formats raw meeting notes into professional documents with action items highlighted"

**What skill-creator does:**
1. Asks clarifying questions about format, action items, output style
2. Helps design the skill components (input parser, formatter, output generator)
3. Guides documentation creation with examples
4. Suggests testing scenarios
5. Helps create final skill folder with SKILL.md

**Result:** A well-structured meeting-notes-formatter skill ready to use.

### After Using Skill Creator

Once you've used skill-creator to create a skill:
- Place the skill folder in `3_AI_&_Human_Capabilities/Skills/`
- Test it with real use cases
- Iterate based on feedback
- Build your personal skills library over time

**See skill-creator-skill/SKILL.md for complete documentation.**

---

## Creating Custom Skills

Custom skills extend Claude's capabilities for your specific needs.

**Remember:** Use the skill-creator skill before creating your first custom skill. It teaches you the process and ensures quality.

### When to Create Custom Skills

Create custom skills for:
-  Repeatable specialized tasks
-  Domain-specific workflows
-  Complex multi-step processes
-  Tasks requiring specific formats or structures
-  Integration of multiple tools/prompts

**Don't create skills for:**
-  Simple one-off tasks
-  Tasks that prompts handle well
-  Functionality that built-in skills already provide

### Custom Skill Structure

```text
text
your-skill-name/
 SKILL.md         # Complete documentation
 README.md        # Quick reference
 templates/       # Optional: file templates
 examples/        # Optional: usage examples
 data/           # Optional: reference data
```text
bash

### SKILL.md Template

```markdown
# [Skill Name]

**Version:** 1.0
**Created:** [Date]
**Type:** Custom Skill

## Skill Description
[What this skill does]

## When to Use This Skill
[Specific use cases]

## How This Skill Works
[Step-by-step process]

## Input Requirements
[What user needs to provide]

## Output
[What skill produces]

## Example Usage
[Concrete examples]

## Customization Options
[How to adapt the skill]

## Skill Configuration
[Prompt templates and settings]

## Tips for Best Results
[Usage tips]

## Limitations
[What the skill can't do]

## Integration
[Works well with...]

## Version History
[Track changes]
```text
json

### README.md Template

```markdown
# [Skill Name]

**Quick Description:** [One sentence]

## What This Skill Does
[Brief overview]

## When to Use
[Primary use cases]

## Quick Start
[Fast getting started steps]

## Example Output
[Show what it produces]

## Full Documentation
See SKILL.md for complete details
```markdown
markdown

### Development Workflow

**Step 1: Use skill-creator skill**
```text
text
Use the skill-creator skill
```python
markdown
- Provides guided development
- Helps with structure and best practices
- Creates template files

**Step 2: Define skill purpose**
- What problem does it solve?
- Who will use it?
- What makes it better than existing solutions?

**Step 3: Design skill components**
- What inputs are needed?
- What outputs will be produced?
- What steps are involved?
- What tools/prompts are required?

**Step 4: Create prompt templates**
- Write clear, detailed prompts
- Include examples
- Specify output format
- Add customization options

**Step 5: Test thoroughly**
- Try various input types
- Test edge cases
- Verify output quality
- Get feedback from users

**Step 6: Document everything**
- Complete SKILL.md
- Write clear README.md
- Include examples
- Document limitations

**Step 7: Track and iterate**
- Log in CUSTOM_SKILLS_TRACKER.md
- Track effectiveness
- Update based on usage
- Version your changes

---

## Best Practices

### Skill Design Principles

**1. Single Responsibility**
- Each skill should do one thing well
- Don't create mega-skills that do everything
- Break complex workflows into multiple skills

**2. Clear Inputs and Outputs**
- Specify exactly what's needed
- Define output format precisely
- Include examples

**3. User-Friendly**
- Clear instructions
- Helpful examples
- Graceful error handling
- Reasonable defaults

**4. Maintainable**
- Good documentation
- Version tracking
- Clear file organization
- Easy to update

**5. Composable**
- Works with other skills
- Integrates with tools
- Can be part of larger workflows

### Writing Good Skill Prompts

**Be specific:**
-  "Format this document"
-  "Format this document as a professional business report with executive summary, numbered sections, and action items highlighted in bold"

**Include examples:**
- Show expected input
- Show desired output
- Demonstrate edge cases

**Specify constraints:**
- Length limits
- Format requirements
- Style guidelines
- Required sections

**Provide context:**
- Purpose of the task
- Audience for output
- How output will be used

### Skill Organization

**File naming:**
- Use descriptive names: `meeting-notes-formatter`
- Avoid generic names: `formatter`
- Use hyphens not underscores: `client-report-generator`

**Version management:**
- Track versions in SKILL.md
- Document changes
- Keep compatibility in mind
- Archive deprecated versions

**Documentation:**
- Keep README.md updated
- Include real examples
- Document limitations
- Link to related resources

---

## Integration Patterns

### Skills + Prompts

Use prompts within skills for modular components:

```markdown
## Skill Configuration

This skill uses these prompts:
1. `analyze-text` prompt from 01-analysis/
2. `format-professional` prompt from 02-creation/
3. `extract-action-items` prompt from 03-extraction/
```text
markdown

### Skills + Agents

Use agents within skills for complex subtasks:

```markdown
## How This Skill Works

1. Spawn Explore agent to find relevant files
2. Read and analyze files
3. Generate formatted report
4. Save to workspace
```text
markdown

### Skills + Commands

Combine skills with system commands:

```markdown
## Skill Configuration

After generating report:
1. Run `pandoc report.md -o report.pdf`
2. Run `open report.pdf` to preview
```python
yaml

### Skills + Templates

Skills can use templates from Templates folder:

```markdown
## Input Requirements

Provide:
- Data to include
- Template preference (or use default from Templates/)
```text
markdown

### Skills + Workflows

Skills can be steps in larger workflows:

```text
text
Workflow: Client Deliverable Creation
1. Use `research-agent` to gather info
2. Use `report-generator` skill to create draft
3. Use `brand-guidelines` skill to style
4. Use `pdf` skill to finalize
5. Use `client-email-template` to send
```python
markdown

---

## Example Custom Skills Ideas

### Business & Productivity

- **client-report-generator** - Create branded client reports
- **meeting-notes-formatter** - Structure meeting notes (example included)
- **project-status-updater** - Generate project status updates
- **budget-analyzer** - Analyze and visualize budgets
- **invoice-creator** - Generate professional invoices

### Development

- **code-review-formatter** - Structure code review feedback
- **changelog-generator** - Create changelog from git commits
- **api-documentation-generator** - Generate API docs from code
- **test-coverage-reporter** - Format test coverage reports
- **deployment-checklist** - Pre-deployment verification

### Content Creation

- **social-media-scheduler** - Format posts for multiple platforms
- **blog-post-seo-optimizer** - Optimize blog posts for SEO
- **newsletter-compiler** - Create newsletter from sources
- **video-script-formatter** - Structure video scripts
- **podcast-show-notes** - Generate show notes from transcript

### Personal

- **weekly-planning** - Create weekly plans from goals
- **learning-tracker** - Track learning progress
- **habit-tracker** - Monitor habit adherence
- **journal-analyzer** - Extract insights from journal entries
- **goal-progress-reporter** - Track goal progress

---

## Skill Development Resources

### Official Documentation

- **Agent Skills Specification** - [agentskills.io](https://agentskills.io/home) - Official specification for Agent Skills format and standards
- **Anthropic Cookbook** - [anthropics/anthropic-cookbook](https://github.com/anthropics/anthropic-cookbook) - Skill examples and patterns
- **Claude Code Documentation** - [docs.anthropic.com/claude-code](https://docs.anthropic.com/claude-code) - Skill structure and usage
- **MCP Documentation** - [modelcontextprotocol.io](https://modelcontextprotocol.io) - For skills that integrate external tools

### In This Toolkit

- **skill-creator skill** - Use for guided skill development
- **Example skills** - See `3_AI_&_Human_Capabilities/Skills/`
- **Prompts library** - Reusable components in `Prompts/`
- **Agents guide** - Integration patterns in `Agents_Guide.md`
- **Workflows** - Multi-skill patterns in `Workflows/`

### Community Resources

- **Skills marketplace** - Share and discover skills
- **User forums** - Get help and share ideas
- **Example repositories** - Learn from others' skills

---

## Troubleshooting

### Skill Not Found

**Problem:** Skill doesn't trigger or load
**Solutions:**
- Verify skill folder structure (SKILL.md and README.md)
- Check file naming (use hyphens not spaces)
- Ensure skill is in correct location
- Try explicit invocation: `Use the [skill-name] skill`

### Skill Produces Wrong Output

**Problem:** Output doesn't match expectations
**Solutions:**
- Review prompt templates in SKILL.md
- Add more specific instructions
- Include examples in prompts
- Test with different inputs
- Clarify output format requirements

### Skill Too Slow

**Problem:** Skill takes too long to execute
**Solutions:**
- Break into smaller subtasks
- Remove unnecessary steps
- Cache repeated operations
- Use agents for parallel work

### Skill Not Reusable

**Problem:** Works once but not for variations
**Solutions:**
- Add customization options
- Make prompts more flexible
- Include parameter handling
- Test with diverse inputs
- Document assumptions

---

## Quick Reference

### Invoking Skills

```text
text
Use the [skill-name] skill
```markdown
markdown

### Built-In Skills Quick List

**Documents:** docx, pptx, xlsx, pdf
**Creative:** canvas-design, algorithmic-art, slack-gif-creator
**Development:** web-artifacts-builder, mcp-builder
**Specialized:** doc-coauthoring, internal-comms, theme-factory, brand-guidelines, skill-creator, plan-generator, prompt-creator
**Utility:** keybindings-help, create-shortcut

### Custom Skill Files

```text
text
your-skill-name/
 SKILL.md         # Complete documentation
 README.md        # Quick reference
```markdown

### Tracking Custom Skills

Log in: `3_AI_&_Human_Capabilities/Skills/CUSTOM_SKILLS_TRACKER.md`

---

## Personal Notes

**Use this space to document your learning, key insights, and personal discoveries:**

- Skills you use most frequently:
- Ideas for custom skills to build:
- Skill combinations that work well:
- Best practices you've discovered:
- Skills you want to explore further:

---

## Progress Tracking

**I've completed this guide:** 

Once you've explored built-in skills, created your first custom skill, and understand the skill-creation workflow, mark this guide as complete and move to the next step.

---

## Related Guides & Next Steps

**You've completed:** Phase 1, Part 3 of 4

**Next Guide:** [4. Projects & RAG Guide](4_Projects_&_RAG_Guide_v1.0.md) - Learn to maintain persistent context and memory across sessions

**Full Learning Path:**
- **Phase 1: Building Blocks**
  1. [Prompts Guide](1_Prompts_Guide_v1.0.md)
  2. [Commands Guide](2_Commands_Guide_v1.0.md)
  3.  Skills Guide (you are here)
  4. → [Projects & RAG Guide](4_Projects_&_RAG_Guide_v1.0.md)
- **Phase 2: Expanding Capabilities**
  5. [Agents Guide](5_Agents_Guide_v1.0.md)
  6. [Connectors & MCP Guide](6_Connectors_MCP_Guide_v1.0.md)

**Quick Links:**
- [Prompts Guide](1_Prompts_Guide_v1.0.md) - Communicating with AI
- [Commands Guide](2_Commands_Guide_v1.0.md) - Invoking capabilities
- [Projects & RAG Guide](4_Projects_&_RAG_Guide_v1.0.md) - Managing context and memory
- [Agents Guide](5_Agents_Guide_v1.0.md) - Autonomous systems
