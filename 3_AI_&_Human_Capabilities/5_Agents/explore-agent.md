# Explore Agent

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Autonomous agent pattern for complex task execution
**Status:** Final

---

**Purpose:** Fast codebase exploration for finding files and searching code

**Agent Type:** Explore
**Best For:** File discovery, code searches, understanding codebase structure

---

## Thoroughness Levels

- **quick** - Basic searches, fastest results
- **medium** - Moderate exploration, balanced speed/thoroughness (recommended)
- **very thorough** - Comprehensive analysis across multiple locations

---

## When to Use

- Finding files by patterns (e.g., "src/components/**/*.tsx")
- Searching code for keywords (e.g., "API endpoints")
- Understanding how features are implemented
- Locating specific functions or classes
- Discovering codebase structure

---

## When NOT to Use

- When you know exact file path (use Read tool directly)
- When you need to modify files (agent can't edit)
- For simple single-file searches

---

## Configuration

### Task Tool Invocation

```
Task tool:
- subagent_type: "Explore"
- prompt: "[See below - must specify thoroughness]"
- description: "Brief 3-5 word description"
```

### Example Prompts

**Find Authentication Files:**
```
Search the codebase for authentication-related files.

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
- Note key functions or exports
```

**Locate API Endpoints:**
```
Find all API endpoint definitions.

Use 'medium' thoroughness.

Search for:
- Route definitions
- API handlers
- Controller files
- Endpoint documentation

List findings organized by:
- REST endpoints
- GraphQL resolvers
- WebSocket handlers
```

**Component Structure:**
```
Understand the React component structure.

Use 'quick' thoroughness.

Find:
- Component directories
- Shared/common components
- Page components
- Layout components

Describe the organization pattern being used.
```

---

## Example Usage

### Example 1: Feature Discovery
```
Task: "Find payment components"
Prompt: "Search for all payment-related components and utilities. Use 'medium' thoroughness. Include payment forms, processors, validation, and API integrations. Describe how payment flow is structured."
```

### Example 2: Error Handling
```
Task: "Find error handling patterns"
Prompt: "Locate error handling utilities and patterns. Use 'medium' thoroughness. Find: error classes, try-catch blocks, error boundaries, logging. Identify the error handling strategy."
```

### Example 3: Configuration Files
```
Task: "Find all config files"
Prompt: "Use 'quick' thoroughness to find all configuration files (config.*, .env.*, settings.*). List their locations and purposes."
```

---

## Tips

- Always specify thoroughness level in prompt
- Use 'quick' for broad discovery
- Use 'medium' for most tasks (good balance)
- Use 'very thorough' only when exhaustive search needed
- Be specific about what you're looking for
- Good for exploratory searches when unsure what exists

---

**Last Updated:** February 7, 2026
**Agent Version:** 1.0
