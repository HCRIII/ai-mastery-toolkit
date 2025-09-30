# Bash Agent

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Autonomous agent pattern for complex task execution
**Status:** Final

---

**Purpose:** Command execution specialist for git operations and terminal tasks

**Agent Type:** Bash
**Best For:** Git workflows, system commands, package management

---

## When to Use

- Git operations (status, commit, push, pull, branch management)
- File system operations (ls, mkdir, cp, mv)
- Package management (npm install, pip install)
- Running build scripts
- System maintenance commands

---

## When NOT to Use

- File reading/writing (use Read/Write tools directly instead)
- File content analysis (use direct tools)
- When you need to see file contents

---

## Configuration

### Task Tool Invocation

```
Task tool:
- subagent_type: "Bash"
- prompt: "[See below]"
- description: "Brief 3-5 word description"
```

### Example Prompts

**Git Status Check:**
```
Check the current git repository status.

Provide clear summary of:
- Current branch
- Modified files
- Staged changes
- Untracked files
- Any merge conflicts

Format results clearly for easy reading.
```

**Commit and Push:**
```
Create a git commit and push to remote.

Steps:
1. Run git status to verify what will be committed
2. Add files: [list specific files or use git add .]
3. Commit with message: "[commit message]"
4. Push to [branch name]

Report success or any errors encountered.
```

**Package Installation:**
```
Install project dependencies.

Tasks:
1. Check if package.json exists
2. Run npm install (or pip install if Python project)
3. Report any warnings or errors
4. Confirm successful installation
```

---

## Example Usage

### Example 1: Pre-Commit Check
```
Task: "Git pre-commit check"
Prompt: "Run git status and git diff to show what will be committed. Check for any .env files or secrets that shouldn't be committed. Report findings."
```

### Example 2: Build Process
```
Task: "Run build script"
Prompt: "Execute npm run build. Monitor for errors. If build succeeds, report bundle size. If build fails, show error details."
```

---

## Tips

- Bash agent only has Bash tool access
- Good for command sequences without file reading
- Perfect for git workflows
- Use for system operations and scripts

---

**Last Updated:** February 7, 2026
**Agent Version:** 1.0
