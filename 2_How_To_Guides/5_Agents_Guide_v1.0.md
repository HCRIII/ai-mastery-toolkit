# Agents Guide

**Created:** 2026-02-08
**Last Updated:** 2026-02-08
**Purpose:** Spawn specialized subagents to handle complex multi-step tasks
**Version:** v1.0
**Status:** Final
**Estimated Reading Time:** 13 minutes (~2,564 words)
**Difficulty:** Intermediate
**Prerequisites:** Prompts Guide, Commands Guide, Skills Guide

---

## You Are Here

**Phase 2: Expanding Capabilities → Agents Guide → Autonomous Subagents**

**Navigation:** [Start Here](../1_Toolkit_Documentation/1_Start_Here.md) → [How-To Guides](README.md) → Agents Guide

---

## What Are Agents?

**Agents are specialized AI subagents that can be spawned to handle specific types of tasks autonomously.** Think of them as focused assistants, each with particular expertise and toolsets.

When you spawn an agent, it works independently to complete a task and then reports back with results. Agents enable you to:
- Delegate complex multi-step tasks
- Work on multiple things in parallel
- Get specialized expertise for specific problems
- Hide complexity from the main conversation

---

## Available Agent Types

### 1. Bash Agent
**Specialty:** Command execution
**Tools:** Bash only

**When to use:**
- Git operations (status, commit, push, pull)
- File system operations
- Package management (npm install, pip install)
- Running build scripts
- System commands

**When NOT to use:**
- File reading/writing (use Read/Write tools directly)
- When you need file content analysis

**Example:**
```bash
text
Spawn Bash agent to:
- Check git status
- Run npm install
- Execute build scripts
- Perform system maintenance
```markdown
markdown

---

### 2. Explore Agent
**Specialty:** Fast codebase exploration
**Tools:** All except Task, Edit, Write
**Thoroughness levels:** quick | medium | very thorough

**When to use:**
- Finding files by patterns (e.g., "**/*.tsx")
- Searching code for keywords
- Understanding codebase structure
- Locating specific functions or classes
- Quick discovery when unsure what exists

**When NOT to use:**
- When you know exact file path (use Read directly)
- When you need to modify files (use Edit/Write)

**Example:**
```text
text
Spawn Explore agent to:
- Find all authentication-related files (medium thoroughness)
- Search for API endpoint implementations
- Understand component structure
- Locate configuration files
```markdown
markdown

---

### 3. Plan Agent
**Specialty:** Implementation planning and architecture
**Tools:** All except Task, Edit, Write

**When to use:**
- Before implementing non-trivial features
- When multiple approaches possible
- For architectural decisions
- When changes affect multiple files
- To get user buy-in before coding

**When NOT to use:**
- For simple straightforward changes
- When approach is already clear

**Workflow:**
1. Spawn Plan agent with feature description
2. Agent explores codebase and designs approach
3. Agent presents plan with options
4. You approve or request modifications
5. Implementation proceeds with approved plan

**Example:**
```text
text
Spawn Plan agent to:
- Design user authentication system
- Plan database schema changes
- Architect new feature integration
- Evaluate implementation approaches
```markdown
markdown

---

### 4. General-Purpose Agent
**Specialty:** Complex multi-step tasks and research
**Tools:** All tools available

**When to use:**
- Complex research requiring multiple searches
- Tasks with uncertain paths
- Problems needing iteration and adaptation
- When you're not sure what you're looking for
- Multi-step processes requiring flexibility

**When NOT to use:**
- Simple direct tasks
- When specific specialized agent is better fit

**vs Explore Agent:**
- **General-Purpose:** Multiple iterations, complex research, adapts approach
- **Explore:** Fast single search, focused discovery, known goal

**Example:**
```text
text
Spawn General-Purpose agent to:
- Research error handling patterns across codebase
- Investigate performance bottlenecks
- Analyze dependencies and their usage
- Deep dive into unfamiliar framework patterns
```markdown
markdown

---

## Understanding the Task Tool

### What Is the Task Tool?

**The Task tool is the mechanism used to spawn agents.** It's how you delegate work to specialized subagents.

When you use the Task tool:
1. You specify which type of agent to spawn
2. You provide detailed instructions
3. The agent works independently with its own toolset
4. The agent reports back with results
5. You can then act on those results

Think of the Task tool as your way to say: "Here's a complex task - spawn a specialist to handle it."

---

### Task Tool Parameters

**Required Parameters:**

1. **subagent_type** - Which agent to spawn
   - Options: `"Bash"`, `"Explore"`, `"Plan"`, `"general-purpose"`
   - Determines which tools the agent has access to

2. **description** - Brief summary (3-5 words)
   - Shows in interface while agent works
   - Example: "Find authentication files"

3. **prompt** - Detailed instructions
   - What to do, what to look for, what to return
   - Be specific and comprehensive
   - Include context and desired output format

**Optional Parameters:**

- **model** - Specify model for simple tasks
  - `"haiku"` for faster/cheaper on straightforward tasks
  - `"sonnet"` (default) for complex work

---

### Complete Examples

**Example 1: Check Git Status**

User asks: "What's changed in the repository?"

Task tool invocation:
```markdown
subagent_type: "Bash"
description: "Check git repository status"
prompt: "Run git status and git diff to show what will be committed.

Check for:
- Current branch
- Modified files
- Staged changes
- Untracked files
- Any .env or secret files that shouldn't be committed

Provide clear summary of findings."
```markdown
markdown

What happens:
- Bash agent spawns with access to Bash tool
- Runs git commands
- Returns formatted summary
- You present results to user

---

**Example 2: Find Files**

User asks: "Where is authentication handled in this codebase?"

Task tool invocation:
```markdown
subagent_type: "Explore"
description: "Find authentication files"
prompt: "Search the codebase for authentication-related files.

Use 'medium' thoroughness.

Look for:
- Auth service files
- Login/logout components
- Token handling code
- User session management
- Authentication middleware

For each file found:
- Show file path
- Describe its role in authentication
- Note key functions or exports"
```markdown
text

What happens:
- Explore agent spawns with search/read capabilities
- Searches codebase systematically
- Compiles findings with descriptions
- Returns organized list
- You present results to user

---

**Example 3: Plan Implementation**

User asks: "I want to add caching - what's the best approach?"

Task tool invocation:
```markdown
subagent_type: "Plan"
description: "Plan caching implementation"
prompt: "Design an implementation plan for adding caching to API responses.

Analyze current architecture.

Consider:
- Cache strategy (Redis vs in-memory vs hybrid)
- What to cache (which endpoints, data types)
- Cache invalidation approach
- TTL strategy
- Where cache layer fits in current architecture

Provide:
- Recommended approach with rationale
- Alternative options with trade-offs
- Implementation steps
- Files that will need modification
- Potential challenges

Present multiple options if applicable."
```markdown
text

What happens:
- Plan agent spawns, explores codebase
- Analyzes architecture and patterns
- Designs implementation approaches
- Presents plan with options
- You review and get user approval
- Implementation proceeds with approved plan

---

**Example 4: Research Question**

User asks: "How does error handling work in this app?"

Task tool invocation:
```markdown
subagent_type: "general-purpose"
description: "Research error handling patterns"
prompt: "Investigate how error handling is implemented across the codebase.

Find and analyze:
- Error handling utilities and classes
- Common patterns (try-catch, error boundaries, etc.)
- Where exceptions are caught and logged
- User-facing error messages
- Error propagation approach

Identify:
- The error handling strategy being used
- Consistency across the codebase
- Any gaps or areas needing improvement

This may require multiple searches and file reads.
Adapt your approach as you learn more."
```python
text

What happens:
- General-purpose agent spawns with all tools
- Iteratively searches and reads files
- Adapts approach based on findings
- Synthesizes comprehensive analysis
- Returns detailed report
- You present findings to user

---

### Task Tool vs Direct Tool Use

**When to use Task tool (spawn agent):**
-  Task has multiple steps or uncertain path
-  Unsure what exists or where to look
-  Need exploration or research first
-  Want to work on multiple things in parallel
-  Complex analysis or planning needed
-  Task benefits from specialized focus

**When to use direct tools:**
-  You know exact file path → Use Read tool
-  Simple single command → Use Bash tool directly
-  Straightforward file edit → Use Edit tool directly
-  Clear single action with no exploration needed

---

### Parallel Agents

You can spawn multiple agents simultaneously:

```markdown
Task 1:
- subagent_type: "Explore"
- description: "Find auth files"
- prompt: "[detailed auth search instructions]"

Task 2:
- subagent_type: "Explore"
- description: "Find payment files"
- prompt: "[detailed payment search instructions]"

Task 3:
- subagent_type: "general-purpose"
- description: "Analyze error patterns"
- prompt: "[error handling research instructions]"
```markdown
markdown

All three run concurrently, results come back together. Great for comprehensive analysis tasks.

---

### Writing Effective Agent Prompts

**Be specific about goals:**
-  "Find auth stuff"
-  "Find authentication files including login components, token handling, session management, and auth middleware"

**Specify thoroughness (for Explore agent):**
- Always include: "Use 'medium' thoroughness"
- Options: quick, medium, very thorough

**State desired output format:**
- "List files with brief descriptions"
- "Provide step-by-step implementation plan"
- "Return findings organized by category"

**Give context:**
- Explain what you're trying to accomplish
- Provide relevant background
- Specify constraints or requirements

---

## Quick Reference: Spawning Agents

See "Understanding the Task Tool" section above for complete details and examples.

**Quick syntax reminder:**
```markdown
Task tool:
- subagent_type: "Bash" | "Explore" | "Plan" | "general-purpose"
- description: "Brief 3-5 word description"
- prompt: "[Detailed instructions - be specific!]"
```markdown
markdown

**Key points:**
- Choose appropriate agent type for the task
- Keep description brief (shows in UI while agent works)
- Make prompt detailed and specific
- Include desired output format
- Specify thoroughness for Explore agent (quick/medium/very thorough)

---

## Best Practices

### When to Use Agents

**Use agents for:**
-  Complex tasks requiring multiple steps
-  Research with unknown scope
-  Planning before implementation
-  Parallel work (spawn multiple agents)
-  Context-hiding (keep main conversation focused)

**Don't use agents for:**
-  Simple single-step tasks
-  When direct tool use is clearer
-  Tasks you're already mid-way through

### Writing Good Agent Prompts

**Be specific about:**
- What you want to accomplish
- What thoroughness level (for Explore)
- What to look for or consider
- What format you want results in

**Good prompt:**
```text
text
Find all React components that use the useAuth hook.
Use 'medium' thoroughness.
For each component found:
- Show file path
- Describe what it does with auth
- Note any unusual patterns
```markdown
markdown

**Poor prompt:**
```text
text
Find auth stuff
```markdown
markdown

### Agent vs Direct Tool Use

**Use Agent when:**
- Task has multiple steps
- Unsure what exists or where to look
- Need exploration first
- Want to try different approaches

**Use Tools Directly when:**
- You know exactly what to do
- Single clear action needed
- File path is known
- Simple operation

---

## Creating Your Own Agent Patterns

As you work, you'll discover useful agent patterns specific to your workflow. **Save these in `3_AI_&_Human_Capabilities/Agents/`**.

### Agent Configuration Template

**Markdown Format** (copy this template to create your own):

```markdown
# [Your Agent Name]

**Purpose:** [Brief description of what this agent does]

**Agent Type:** [Bash | Explore | Plan | general-purpose]
**Best For:** [Primary use cases]

---

## When to Use

- [Specific scenario 1]
- [Specific scenario 2]
- [Specific scenario 3]

---

## When NOT to Use

- [Anti-pattern 1]
- [Anti-pattern 2]

---

## Configuration

### Task Tool Invocation

\```text
Task tool:
- subagent_type: "[agent-type]"
- prompt: "[See below]"
- description: "Brief 3-5 word description"
\```markdown

### Example Prompts

**[Scenario Name]:**
\```json
[Your detailed prompt template here]

Include:
- What to look for
- How to analyze
- What to return

Format results [specify format].
\```text

---

## Example Usage

### Example 1: [Use Case]
\```text
Task: "[brief task description]"
Prompt: "[specific example prompt]"
\```text

### Example 2: [Another Use Case]
\```text
Task: "[brief task description]"
Prompt: "[specific example prompt]"
\```markdown

---

## Tips

- [Helpful tip 1]
- [Helpful tip 2]
- [Helpful tip 3]
