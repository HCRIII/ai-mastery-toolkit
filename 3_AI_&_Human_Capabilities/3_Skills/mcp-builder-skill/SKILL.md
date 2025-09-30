---
name: mcp-builder
category: Development Skills
type: Built-In System Skill
---

# MCP Builder Skill - Model Context Protocol Servers

## What This Skill Does

Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools in Python (FastMCP) or Node/TypeScript (MCP SDK).

## When to Use This Skill

**Automatic triggers:**
- "MCP server", "build connector"
- Model Context Protocol mentions

**Use when you need:**
- Build integrations with external APIs
- Create custom MCP servers
- Connect LLMs to external services
- Extend Claude's capabilities with new tools

## How to Invoke

**Explicit invocation:**
```
Use the mcp-builder skill
```

**Trigger words (automatic):**
- "Create an MCP server for..."
- "Build a connector to..."
- "Integrate with [service] via MCP..."

## Capabilities

- **FastMCP (Python):** Python MCP server development
- **MCP SDK (TypeScript):** Node/TypeScript server development
- **Tool Design:** Well-designed tool interfaces
- **API Integration:** Connect to external services
- **Best Practices:** MCP development patterns
- **Testing:** Server validation and testing

## Example Usage

### Example 1: API Integration
**You say:** "Create an MCP server to integrate with the GitHub API for repository management"

**What happens:**
- Skill guides server creation
- Defines tools for GitHub operations
- Implements API calls
- Creates proper error handling
- Returns working MCP server

### Example 2: Database Connector
**You say:** "Build an MCP server for querying a PostgreSQL database"

**What happens:**
- Skill creates database connector
- Defines query tools
- Implements safety measures
- Adds connection management
- Returns MCP server code

### Example 3: Custom Service
**You say:** "Make an MCP server for our internal analytics API"

**What happens:**
- Skill analyzes API structure
- Designs appropriate tools
- Implements integration
- Creates documentation
- Returns complete server

## Tips for Best Results

**Specify:**
- Target service or API
- Required operations/functionality
- Preferred language (Python vs TypeScript)
- Authentication requirements
- Expected use cases

**For best servers:**
- Describe API clearly
- Mention rate limits or constraints
- Specify security requirements

## Integration

**Works with:**
- External APIs and services
- Database systems
- Custom internal tools
- Third-party platforms

## Common Use Cases

- API integrations (GitHub, Slack, etc.)
- Database connectors
- File system access
- Custom business tools
- Internal service integrations
- Data source connections
- External platform bridges

---

**Last Updated:** February 7, 2026
**Skill Type:** Built-In System Skill
