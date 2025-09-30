# Connectors & MCP

**Created:** 2026-02-13
**Last Updated:** 2026-02-28
**Purpose:** Overview and navigation for 6_Connectors_MCP capabilities
**Status:** Final

---

**Practical examples and templates for connecting Claude to external services through the Model Context Protocol.**

---

## What This Folder Contains

This folder contains **configuration examples and templates** that help you integrate Claude with external services and build custom MCP servers. Each example provides:

- **Configuration setup** - How to install and configure
- **Common use cases** - When and how to use the connector
- **Integration patterns** - Combining with other capabilities
- **Troubleshooting** - Common issues and solutions
- **Security best practices** - Safe authentication and access control

---

## Understanding Connectors & MCP

**Connectors** extend Claude's capabilities by providing access to external services and data sources in real-time.

**MCP (Model Context Protocol)** is the open standard that makes this possible - a universal way to connect AI assistants to any service or data source.

**Key Benefits:**
- Access live data from external services
- Execute actions in external systems
- Search across your organization's tools
- Build custom integrations for proprietary systems

---

## Configuration Examples

### [Slack Integration Example](Slack_Integration_Example.md)
**Connect to Slack for team communication and knowledge retrieval**

- Search historical conversations
- Read channel messages and threads
- Find expertise and context
- Integration patterns with Projects and other connectors
- Example: Support context retrieval, team knowledge base

**Best for:** Finding information in team conversations, support history, decision context

### [GitHub Integration Example](GitHub_Integration_Example.md)
**Connect to GitHub for code access and repository management**

- Read code from repositories
- Review pull requests and issues
- Search across codebases
- Create issues and comments
- Example: Code understanding, bug investigation, PR reviews

**Best for:** Code exploration, issue management, repository operations, documentation generation

---

## Custom Server Templates

### [Custom MCP Server Template](Custom_MCP_Server_Template.md)
**Build your own MCP server to connect Claude to internal systems**

**Includes templates for:**
- **Database Connector** (PostgreSQL example) - Query and analyze your database
- **REST API Wrapper** - Connect to internal APIs
- **File System Access** - Provide access to specific directories
- **Python (FastMCP)** - Simplest approach for quick servers
- **TypeScript/Node (MCP SDK)** - Production-ready implementations

**Best for:** Internal company APIs, proprietary databases, legacy systems, specialized workflows

---

## How to Use These Examples

**1. Start with Official Connectors**
- Review available connectors (Slack, GitHub, Google Drive, etc.)
- Choose examples that match your needs
- Follow configuration instructions
- Test with simple operations first

**2. Understand Integration Patterns**
- See how connectors work with Projects
- Learn multi-connector workflows
- Explore use cases relevant to your work

**3. Build Custom Integrations (If Needed)**
- Use templates as starting points
- Choose Python (FastMCP) for quick prototypes
- Use TypeScript (MCP SDK) for production
- Follow security and development best practices

**4. Combine Capabilities**
- Connectors + Projects = Static knowledge + Live data
- Connectors + Agents = Parallel data gathering
- Connectors + Workflows = Multi-service orchestration

---

## Quick Start Guide

### Using an Existing Connector

**Step 1: Install**
- Slack/GitHub/etc. connectors via Claude Desktop settings
- Or configure in `~/.claude/mcp.json` for Cowork mode

**Step 2: Authenticate**
- Follow OAuth flow or provide API tokens
- Grant necessary permissions

**Step 3: Test**
```
"Search my Slack for messages about the deployment"
"Show me open issues in my GitHub repo"
```

**Step 4: Integrate**
- Combine with Projects for context
- Build workflows across services
- Refine based on what works

### Building a Custom Server

**Step 1: Choose Template**
- Database connector for SQL queries
- API wrapper for REST APIs
- File server for directory access
- Or adapt basic template

**Step 2: Implement**
```bash
# Python with FastMCP
pip install fastmcp --break-system-packages

# Create server file
# (use template code)

# Run and test
python my_server.py
```

**Step 3: Configure**
Add to `~/.claude/mcp.json`:
```json
{
  "mcpServers": {
    "my-server": {
      "command": "python",
      "args": ["/path/to/my_server.py"],
      "env": {
        "API_KEY": "your-key-here"
      }
    }
  }
}
```

**Step 4: Test with Claude**
- Restart Claude to load new server
- Ask Claude to use your custom tools
- Iterate based on results

---

## Integration Patterns

### Pattern 1: Static + Dynamic Knowledge

**Scenario:** Customer support with docs and live conversations

```
Project: "Customer Support"
- Project Knowledge: Product docs, FAQs (static)
- Slack Connector: Live customer issues (dynamic)
- Result: Answers grounded in both documentation and real support history
```

### Pattern 2: Multi-Source Investigation

**Scenario:** Bug investigation across multiple tools

```
Workflow:
1. Search Slack #support for user reports
2. Find related GitHub issues
3. Read code where bug occurs
4. Check recent commits
5. Synthesize complete context
```

### Pattern 3: Cross-Service Automation

**Scenario:** Daily standup summary

```
Automation:
1. Read Slack #engineering for updates
2. Check GitHub for merged PRs
3. Query Jira/Linear for completed tickets
4. Generate summary report
5. Post to #leadership
```

### Pattern 4: Custom Data Access

**Scenario:** Business intelligence queries

```
Custom MCP Server → Company Database
- Natural language queries
- Access to sales, customer, product data
- Secure, read-only access
- Results combined with analysis
```

---

## Best Practices

### Security

**Credentials:**
- Store tokens securely (environment variables)
- Never commit credentials to git
- Use least-privilege access
- Rotate credentials regularly

**Access Control:**
- Only grant necessary permissions
- Review and revoke unused connectors
- Monitor access logs
- Implement rate limiting

**Data Handling:**
- Respect privacy regulations
- Don't cache sensitive data
- Audit what Claude accesses
- Follow data retention policies

### Performance

**Optimization:**
- Be specific in requests (reduce API calls)
- Cache results when appropriate
- Batch related operations
- Monitor rate limits

**Rate Limits:**
- Understand service API limits
- Space out requests
- Handle errors gracefully
- Implement backoff strategies

### Development

**Custom Servers:**
- Start simple, add features incrementally
- Implement comprehensive error handling
- Validate all inputs
- Log operations for debugging
- Test thoroughly before deployment

---

## Troubleshooting

### Common Issues

**Connector Not Working:**
- Check configuration in `~/.claude/mcp.json`
- Verify credentials haven't expired
- Confirm service is accessible
- Review server logs for errors

**Permission Denied:**
- Re-authenticate with required scopes
- Verify you have access to resources
- Check organization-level restrictions

**Rate Limit Exceeded:**
- Wait for rate limit reset
- Make requests more specific
- Reduce request frequency
- Implement caching

**Custom Server Won't Start:**
- Check server executable is accessible
- Review server logs for startup errors
- Verify dependencies are installed
- Test server independently

---

## Official Resources

**MCP Documentation:**
- [Model Context Protocol - Getting Started](https://modelcontextprotocol.io/docs/getting-started/intro)
- Official specification and architecture
- Implementation guides and examples

**Anthropic Resources:**
- Claude Desktop connector documentation
- MCP SDK (TypeScript/Node)
- FastMCP (Python)
- Example MCP servers repository

**Community:**
- MCP GitHub discussions
- Community-built connectors
- Integration patterns

---

## Integration with Toolkit

**These examples connect to:**

- **[6. Connectors & MCP Guide](../../2_How_To_Guides/6_Connectors_MCP_Guide.md)** - Comprehensive guide to Connectors and MCP
- **[3. Skills](../3_Skills/)** - mcp-builder skill for creating servers
- **[4. Projects & RAG](../4_Projects_&_RAG/)** - Combine static knowledge with live data
- **[5. Agents](../5_Agents/)** - Parallel data gathering from multiple sources
- **[9. Workflows](../9_Workflows/)** - Multi-step connector orchestration
- **[10. Automations](../10_Automations/)** - Triggered connector actions

---

## Next Examples to Explore

**Want more examples? Consider:**
- Google Drive integration example
- Database connector variations (MySQL, MongoDB)
- Internal API specific to your organization
- Multi-service workflow examples
- Authentication patterns (OAuth, API keys, JWT)

**To request or contribute examples:**
- Document your use case
- Share configuration patterns
- Add to [4_Your_Work](../../4_Your_Work/) folder
- Reference from this README

---

## Getting Started

**New to Connectors?**
1. Read the [6. Connectors & MCP Guide](../../2_How_To_Guides/6_Connectors_MCP_Guide.md) first
2. Start with [Slack Integration Example](Slack_Integration_Example.md) or [GitHub Integration Example](GitHub_Integration_Example.md)
3. Configure and test with simple requests
4. Explore integration patterns
5. Document what you learn in your work folder

**Ready to build custom servers?**
1. Review [Custom MCP Server Template](Custom_MCP_Server_Template.md)
2. Choose appropriate template (database, API, file system)
3. Implement using Python (FastMCP) or TypeScript (MCP SDK)
4. Test locally before deploying
5. Monitor and iterate based on usage

**Remember:** Start with existing connectors when possible. Build custom servers only when you need to connect to internal systems or when no suitable connector exists.
