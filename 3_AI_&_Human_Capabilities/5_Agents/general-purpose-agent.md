# General-Purpose Agent

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Autonomous agent pattern for complex task execution
**Status:** Final

---

**Purpose:** Complex multi-step tasks and research with uncertain paths

**Agent Type:** general-purpose
**Best For:** Complex research, iterative exploration, multi-step problem solving

---

## When to Use

- Complex research requiring multiple searches
- Tasks with uncertain approaches
- Problems needing iteration and adaptation
- When you're not sure exactly what you're looking for
- Multi-step processes requiring flexibility
- Investigations with unknown scope

---

## When NOT to Use

- Simple direct tasks (use tools directly)
- When specific specialized agent is better fit (Bash, Explore, Plan)
- Single-step operations

---

## vs Other Agents

**General-Purpose vs Explore:**
- **General-Purpose:** Multiple iterations, adapts approach, complex research
- **Explore:** Fast single search, focused discovery, known goal

**General-Purpose vs Plan:**
- **General-Purpose:** Research and investigation
- **Plan:** Architectural design before implementation

---

## Configuration

### Task Tool Invocation

```
Task tool:
- subagent_type: "general-purpose"
- prompt: "[See below]"
- description: "Brief 3-5 word description"
```

### Example Prompts

**Error Handling Research:**
```
Investigate how error handling is implemented across the codebase.

Research:
- Error handling utilities and classes
- Common patterns (try-catch, error boundaries)
- Where exceptions are caught
- Logging approaches
- User-facing error messages

Analysis:
- Identify the error handling strategy
- Note inconsistencies or gaps
- Find best practices being followed
- Spot areas needing improvement

This may require multiple searches and file reads.
Adapt approach as you learn more about the codebase.
```

**Performance Investigation:**
```
Research performance bottlenecks in the application.

Investigate:
- Database query patterns
- API response times
- Frontend rendering performance
- Memory usage patterns
- Network requests

Use multiple approaches:
- Code analysis for inefficient patterns
- Search for known performance anti-patterns
- Identify heavy computations
- Find N+1 queries or similar issues

Provide findings with specific file locations and recommendations.
```

**Dependency Analysis:**
```
Analyze how [specific library] is used throughout the codebase.

Tasks:
- Find all imports and usages
- Identify usage patterns
- Locate custom wrappers or utilities
- Check version compatibility
- Note deprecated API usage

Determine:
- Is usage consistent?
- Are there better patterns we should adopt?
- What would breaking changes affect?
```

---

## Example Usage

### Example 1: Security Audit
```
Task: "Security patterns research"
Prompt: "Research security implementations: authentication checks, input validation, SQL injection prevention, XSS protection, CSRF tokens. Find what's implemented, what's missing, where improvements needed."
```

### Example 2: Data Flow Analysis
```
Task: "Trace data flow"
Prompt: "Trace how user data flows from signup through the system: database storage, API handling, frontend display, updates, deletion. Map the complete flow and identify touch points."
```

### Example 3: Technical Debt Assessment
```
Task: "Identify technical debt"
Prompt: "Investigate technical debt in the codebase: TODO comments, deprecated APIs, code duplication, complex functions, missing tests. Categorize by severity and impact."
```

---

## Tips

- Has access to all tools (Read, Write, Grep, Glob, Bash, etc.)
- Good for open-ended research questions
- Can iterate and adapt approach as it learns
- Use when path to solution is unclear
- Perfect for deep investigations
- Can write files if needed (unlike Explore/Plan agents)

---

**Last Updated:** February 7, 2026
**Agent Version:** 1.0
