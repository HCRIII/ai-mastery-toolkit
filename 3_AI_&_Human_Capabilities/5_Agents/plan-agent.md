# Plan Agent

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Autonomous agent pattern for complex task execution
**Status:** Final

---

**Purpose:** Implementation planning and architectural design before coding

**Agent Type:** Plan
**Best For:** Feature planning, architecture decisions, getting user buy-in

---

## When to Use

- Before implementing non-trivial features
- When multiple approaches are possible
- For architectural decisions
- When changes affect multiple files
- To get user approval before writing code

---

## When NOT to Use

- For simple straightforward changes
- When approach is already clear and approved
- For quick fixes or bug patches

---

## Workflow

1. **Spawn Plan Agent** with feature description
2. **Agent explores** codebase and designs approach
3. **Agent presents plan** with options and trade-offs
4. **You review and approve** (or request changes)
5. **Implementation proceeds** with approved plan

---

## Configuration

### Task Tool Invocation

```
Task tool:
- subagent_type: "Plan"
- prompt: "[See below]"
- description: "Brief 3-5 word description"
```

### Example Prompts

**Authentication System:**
```
Design an implementation plan for adding user authentication.

Consider:
- Auth strategy (JWT vs sessions vs OAuth)
- Where to store tokens (cookies, localStorage, memory)
- Middleware structure for protected routes
- User model changes needed
- Login/logout/refresh flows
- Password reset functionality

Identify:
- Critical files that need changes
- New files to create
- Database schema updates
- API endpoints needed

Present options with trade-offs for each major decision.
```

**Caching Layer:**
```
Plan implementation of caching for API responses.

Evaluate:
- Cache strategy (Redis vs in-memory vs hybrid)
- What to cache (which endpoints, data types)
- Cache invalidation approach
- TTL strategy
- Cache-aside vs write-through patterns

Provide:
- Recommended approach with rationale
- Alternative options
- Implementation steps
- Files to modify
- Performance impact estimate
```

**Feature Integration:**
```
Plan integration of [new feature] into existing system.

Analyze:
- Current architecture
- Where feature fits
- What needs to change
- Dependencies and impacts
- Testing requirements

Deliver:
- Step-by-step implementation plan
- Critical files identified
- Risks and mitigation strategies
- Estimated complexity
```

---

## Example Usage

### Example 1: Database Migration
```
Task: "Plan database schema change"
Prompt: "Design plan for adding multi-tenancy to database. Consider: tenant isolation strategy, schema changes, data migration, query patterns, performance. Identify all affected models and queries."
```

### Example 2: Feature Addition
```
Task: "Plan real-time notifications"
Prompt: "Plan implementation of real-time notifications. Evaluate: WebSockets vs SSE vs polling. Consider: scaling, fallbacks, notification types, UI updates. Present recommended approach."
```

### Example 3: Refactoring
```
Task: "Plan component refactor"
Prompt: "Plan refactoring of monolithic UserDashboard component. Design: component breakdown, state management, shared utilities, props interface. Ensure backward compatibility."
```

---

## Tips

- Use Plan agent to prevent wasted effort on wrong approaches
- Always get user sign-off before major implementation
- Good for architectural decisions affecting multiple files
- Helps identify hidden complexity early
- Plan agent can't edit files - only designs approach
- Present multiple options when applicable

---

**Last Updated:** February 7, 2026
**Agent Version:** 1.0
