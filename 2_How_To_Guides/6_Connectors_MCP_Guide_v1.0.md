# Connectors & MCP Guide

**Created:** 2026-02-08
**Last Updated:** 2026-02-08
**Purpose:** Extend Claude's capabilities by connecting to external services through MCP
**Version:** v1.0
**Status:** Final
**Estimated Reading Time:** 14 minutes (~2,853 words)
**Difficulty:** Intermediate to Advanced
**Prerequisites:** Understanding of APIs and external integrations

---

## You Are Here

**Phase 2: Expanding Capabilities → Connectors & MCP Guide → External Integration**

**Navigation:** [Start Here](../1_Toolkit_Documentation/1_Start_Here.md) → [How-To Guides](README.md) → Connectors & MCP Guide

---

## Table of Contents

1. [What are Connectors?](#what-are-connectors)
2. [Understanding MCP (Model Context Protocol)](#understanding-mcp)
3. [MCP Architecture](#mcp-architecture)
4. [Available Connectors](#available-connectors)
5. [Using Connectors in Claude](#using-connectors-in-claude)
6. [MCP Servers Explained](#mcp-servers-explained)
7. [Building Custom MCP Servers](#building-custom-mcp-servers)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)
10. [Integration with Toolkit](#integration-with-toolkit)

---

## What are Connectors?

**Connectors** are integrations that allow Claude to interact with external services, applications, and data sources in real-time during conversations.

### What Connectors Enable

**Without Connectors:**
- Claude works with uploaded files and conversation context
- No access to external data or services
- Limited to static knowledge and current conversation

**With Connectors:**
- Access live data from external services (Slack, Google Drive, GitHub, databases)
- Execute actions in external systems (create issues, send messages, update records)
- Read and search across your organization's tools and data
- Integrate with APIs and services automatically

### Common Use Cases

- **Slack**: Search conversations, read channels, post messages
- **Google Drive**: Search documents, read files, access shared content
- **GitHub**: Browse repositories, read code, create issues and PRs
- **Databases**: Query data, retrieve records, analyze information
- **Custom APIs**: Any service with an API can be integrated

---

## Understanding MCP

**Model Context Protocol (MCP)** is an open standard that enables secure, two-way connections between AI assistants and external data sources.

### The Problem MCP Solves

Traditionally, connecting AI to external services required:
- Custom integrations for each service
- Complex authentication and security setup
- Brittle, service-specific code
- Duplicate implementations across different AI tools

**MCP provides:**
- **Standardized protocol** - One way to connect to any service
- **Security by design** - Built-in authentication and permissions
- **Plug-and-play architecture** - Works across different AI systems
- **Developer-friendly** - Simple to build and maintain

### Key Concepts

**1. Client-Server Architecture**
```text
text
                  
   Claude        MCP Server      External   
  (Client)      MCP     (Connector)    API     Service    
                  
```sql
markdown

- **Client (Claude)**: Requests data and actions through MCP
- **MCP Server**: Translates between MCP protocol and service API
- **External Service**: The actual data source or API

**2. Resources, Prompts, and Tools**

MCP servers can expose three types of capabilities:

- **Resources**: Data sources that Claude can read
  - Example: Files, database records, API responses

- **Prompts**: Pre-configured prompt templates
  - Example: Common queries or interaction patterns

- **Tools**: Actions Claude can execute
  - Example: Create record, send message, update file

**3. Context and State**

- **Stateless**: Each request is independent
- **Context Window**: MCP data appears in Claude's context
- **Real-time**: Data is fetched live, not cached

---

## MCP Architecture

### How MCP Works (Step-by-Step)

**Step 1: User Request**
```text
text
User: "What's the latest message in #engineering channel?"
```markdown
markdown

**Step 2: Claude Identifies Need**
- Claude recognizes it needs external data
- Determines which MCP server can help (Slack connector)

**Step 3: MCP Request**
- Claude sends standardized MCP request to Slack server
- Request includes: operation type, parameters, authentication

**Step 4: Server Processing**
- MCP server receives request
- Translates to Slack API call
- Handles authentication and rate limiting

**Step 5: Data Retrieval**
- Slack API returns data
- MCP server formats response according to protocol

**Step 6: Response to Claude**
- Data appears in Claude's context
- Claude generates response using retrieved information

**Step 7: User Sees Result**
```python
text
Claude: "The latest message in #engineering is from Sarah at 2:34 PM:
'Deploy completed successfully. All tests passing.'"
```markdown
markdown

### Protocol Details

**Transport Layer:**
- JSON-RPC 2.0 over stdio or HTTP/SSE
- Bidirectional communication
- Structured message format

**Security:**
- Authentication tokens managed securely
- Permission scopes and access control
- No credentials exposed to Claude

**Lifecycle:**
- Server initialization and capability discovery
- Request/response cycles
- Connection management and error handling

---

## Available Connectors

### Official Connectors

**Productivity & Collaboration:**
- **Slack** - Messages, channels, search, posting
- **Google Drive** - Document search and access
- **Google Calendar** - Event viewing and creation
- **Notion** - Page reading and search
- **Microsoft 365** - Outlook, OneDrive, Teams

**Development:**
- **GitHub** - Repositories, issues, PRs, code
- **GitLab** - Similar to GitHub integration
- **Linear** - Issue tracking and project management

**Data & Storage:**
- **PostgreSQL** - Database queries
- **SQLite** - Local database access
- **File System** - Local file operations
- **S3** - Cloud storage access

**Communication:**
- **Email** - Gmail, Outlook integration
- **SMS** - Messaging capabilities

### Discovery and Installation

**In Claude Desktop:**
1. Settings → Connectors
2. Browse available connectors
3. Click "Connect" on desired service
4. Authenticate with the service
5. Configure permissions

**In Cowork Mode:**
- Connectors installed as MCP servers
- Configured in `~/.claude/mcp.json`
- Auto-discovered on startup

---

## Using Connectors in Claude

### Making Requests

**Natural Language:**
```text
text
"Search my Slack for messages about the deployment"
"Find the budget spreadsheet in Google Drive"
"Show me open issues assigned to me in GitHub"
```markdown
markdown

Claude automatically:
- Identifies which connector to use
- Formulates the MCP request
- Retrieves and synthesizes data
- Presents results naturally

### Working with Multiple Connectors

**Cross-Service Workflows:**
```text
text
"Find the project brief in Google Drive, then create GitHub issues
for each task listed in it"
```python
markdown

Claude can:
- Chain operations across services
- Synthesize data from multiple sources
- Coordinate complex multi-step workflows

### Understanding Connector Responses

**Data Appears Seamlessly:**
- Results integrated into conversation
- Citations show data source
- Real-time updates when requested

**Permissions and Access:**
- Connectors respect your permissions
- Can only access what you can access
- Authentication managed securely

---

## MCP Servers Explained

### What is an MCP Server?

An **MCP Server** is a program that:
1. Implements the MCP protocol specification
2. Connects to an external service or data source
3. Exposes that service's capabilities to Claude
4. Handles authentication, rate limiting, and errors

### Server Types

**1. Service Wrappers**
- Wrap existing APIs (Slack, GitHub, etc.)
- Translate between MCP and service API
- Handle service-specific authentication

**2. Data Source Servers**
- Provide access to databases, files, or storage
- Query and retrieve data on demand
- Format results for Claude

**3. Tool Providers**
- Expose specific actions Claude can take
- Execute operations in external systems
- Return results and handle errors

**4. Custom Integrations**
- Connect to proprietary systems
- Implement organization-specific logic
- Bridge internal tools with Claude

### Server Lifecycle

**Initialization:**
```text
text
1. Server starts and registers capabilities
2. Claude discovers available resources, prompts, and tools
3. Connection established and maintained
```markdown
markdown

**Runtime:**
```text
text
1. Claude sends request → Server receives
2. Server validates and processes
3. Server calls external API
4. Server formats response
5. Claude receives and uses data
```markdown
markdown

**Shutdown:**
```text
text
1. Connection closed gracefully
2. Cleanup and resource release
```python
markdown

---

## Building Custom MCP Servers

### Why Build Custom Servers?

**Common Scenarios:**
- Connect to internal company APIs
- Access proprietary data sources
- Integrate legacy systems
- Create specialized tools for specific workflows
- Wrap multiple services in a unified interface

### Technology Options

**Python with FastMCP:**
- Simplest option for Python developers
- Built-in helpers and abstractions
- Ideal for quick prototypes and data sources

**TypeScript/Node with MCP SDK:**
- Official SDK from Anthropic
- Full protocol support and flexibility
- Best for production deployments

**Other Languages:**
- Any language can implement MCP
- Follow protocol specification
- More manual implementation required

### Quick Example: Simple MCP Server

**Python with FastMCP:**
```python
from fastmcp import FastMCP

# Create MCP server
mcp = FastMCP("my-data-server")

@mcp.resource("user://profile")
def get_user_profile() -> str:
    """Get current user profile data"""
    return "User: John Doe\nRole: Developer"

@mcp.tool()
def search_documents(query: str) -> list[str]:
    """Search internal documentation"""
    # Your search logic here
    results = perform_search(query)
    return results

if __name__ == "__main__":
    mcp.run()
```markdown
python

**TypeScript with MCP SDK:**
```typescript
import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";

const server = new Server({
  name: "my-data-server",
  version: "1.0.0"
});

// Register resource
server.setRequestHandler(ListResourcesRequestSchema, async () => ({
  resources: [{
    uri: "user://profile",
    name: "User Profile",
    mimeType: "text/plain"
  }]
}));

// Register tool
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [{
    name: "search_documents",
    description: "Search internal documentation",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" }
      }
    }
  }]
}));

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
```markdown
markdown

### Development Workflow

**1. Plan Your Server**
- What data/services will it expose?
- What resources and tools are needed?
- How will authentication work?

**2. Implement Core Functionality**
- Set up MCP server scaffold
- Implement resources and tools
- Handle errors and edge cases

**3. Test Locally**
- Run server in development mode
- Test with Claude locally
- Validate responses and error handling

**4. Deploy**
- Configure in `~/.claude/mcp.json`
- Test in real environment
- Monitor and iterate

### Best Practices for Custom Servers

**Design:**
- Keep tools focused and single-purpose
- Provide clear descriptions and examples
- Return structured, parseable data
- Handle errors gracefully with helpful messages

**Security:**
- Never expose sensitive credentials
- Implement proper authentication
- Validate all inputs
- Respect rate limits and quotas

**Performance:**
- Cache frequently accessed data when appropriate
- Implement timeouts
- Handle concurrent requests efficiently
- Log errors and performance metrics

**Maintenance:**
- Version your server
- Document capabilities clearly
- Test with real Claude usage
- Monitor for errors and issues

---

## Best Practices

### When to Use Connectors

**Good Use Cases:**
- Accessing real-time data (latest messages, current status)
- Searching across large datasets
- Executing actions in external systems
- Integrating organization-specific tools
- Automating cross-service workflows

**When NOT to Use Connectors:**
- Static data that can be uploaded to Project Knowledge
- Highly sensitive data requiring special handling
- Services with strict rate limits
- One-time data imports (upload files instead)

### Optimizing Connector Usage

**1. Be Specific in Requests**
 "Search Slack"
 "Search #engineering channel in Slack for messages about deployment in the last 24 hours"

**2. Combine with Project Knowledge**
- Use Projects for static context
- Use Connectors for dynamic data
- Together: Claude has both background knowledge and real-time info

**3. Handle Permissions Gracefully**
- Verify access before complex workflows
- Provide fallback approaches when access fails
- Document required permissions

**4. Monitor Rate Limits**
- Be aware of service API limits
- Batch operations when possible
- Space out requests in long workflows

### Security Considerations

**Authentication:**
- Use OAuth when available (more secure than API keys)
- Store credentials securely (never in code or prompts)
- Rotate credentials periodically
- Use least-privilege access (minimum required permissions)

**Data Handling:**
- Be aware of data retention policies
- Don't cache sensitive data unnecessarily
- Respect data privacy regulations
- Audit connector access logs

**Access Control:**
- Grant connector access only to trusted users
- Review and revoke unused connectors
- Monitor for unusual activity
- Implement organization-wide policies

---

## Troubleshooting

### Common Issues

**1. Connector Not Responding**

**Symptoms:** Requests timeout or return no data

**Solutions:**
- Check connector is enabled in settings
- Verify authentication hasn't expired
- Confirm service is accessible (not down)
- Check rate limits haven't been exceeded
- Review server logs for errors

**2. Permission Denied Errors**

**Symptoms:** "Access denied" or "Insufficient permissions"

**Solutions:**
- Re-authenticate connector with required scopes
- Verify you have access to requested resources
- Check organization-level restrictions
- Review connector permission settings

**3. Incomplete or Incorrect Data**

**Symptoms:** Missing data or unexpected results

**Solutions:**
- Make requests more specific
- Check service API for known issues
- Verify data exists and is accessible
- Review connector configuration

**4. Custom Server Won't Connect**

**Symptoms:** Server not discovered or errors on startup

**Solutions:**
- Check `~/.claude/mcp.json` configuration
- Verify server executable is accessible
- Review server logs for startup errors
- Test server independently before connecting
- Confirm protocol version compatibility

### Debugging Tips

**Test Incrementally:**
1. Verify service access directly (web browser, API client)
2. Test connector with simple request
3. Gradually increase complexity
4. Isolate what works vs. what doesn't

**Check Logs:**
- Claude logs: `~/.claude/logs/`
- MCP server logs: Configured per server
- Service API logs: Check service dashboard

**Use Verbose Mode:**
```bash
# Run with debug logging (if supported)
MCP_DEBUG=1 claude
```markdown
markdown

---

## Integration with Toolkit

### Connectors + Other Capabilities

**Connectors + Projects:**
```text
yaml
Project: "Product Support"
- Project Knowledge: Product docs, FAQs (static)
- Slack Connector: Live customer conversations (dynamic)
- Result: Informed responses with real-time context
```markdown
markdown

**Connectors + Agents:**
```sql
sql
Task: "Analyze support tickets and update GitHub"
- Research Agent: Search Slack for issues
- Analysis Agent: Categorize and prioritize
- Action Agent: Create GitHub issues
- All using Slack and GitHub connectors
```markdown
markdown

**Connectors + Workflows:**
```text
text
Workflow: "Daily standup summary"
1. Read Slack #engineering for updates
2. Check GitHub for merged PRs
3. Query Jira for completed tickets
4. Generate summary report
5. Post to #leadership channel
```markdown
markdown

**Connectors + Automations:**
```text
text
Automation: "On new customer message in Slack"
→ Search Drive for relevant docs
→ Draft response with context
→ Notify support team
```markdown

### Related Toolkit Components

- **[1_Prompts](../3_AI_&_Human_Capabilities/1_Prompts/)** - Craft effective requests to connectors
- **[3_Skills](../3_AI_&_Human_Capabilities/3_Skills/)** - mcp-builder skill for creating servers
- **[4_Projects_&_RAG](../3_AI_&_Human_Capabilities/4_Projects_&_RAG/)** - Combine with static knowledge
- **[5_Agents](../3_AI_&_Human_Capabilities/5_Agents/)** - Parallel data gathering from multiple sources
- **[9_Workflows](../3_AI_&_Human_Capabilities/9_Workflows/)** - Multi-step connector orchestration
- **[10_Automations](../3_AI_&_Human_Capabilities/10_Automations/)** - Triggered connector actions

---

## Official Resources

**MCP Documentation:**
- [Model Context Protocol - Getting Started](https://modelcontextprotocol.io/docs/getting-started/intro)
- Official specification and architecture
- Implementation guides and examples

**Anthropic Resources:**
- Claude Desktop connector documentation
- MCP SDK documentation (TypeScript/Node)
- FastMCP documentation (Python)
- Example MCP servers repository

**Community:**
- MCP GitHub discussions
- Community-built connectors
- Integration examples and patterns

---

## Quick Reference

### Connector Checklist

**Before Using a Connector:**
- [ ] Connector is installed and enabled
- [ ] Authentication is current and valid
- [ ] Required permissions are granted
- [ ] Service is accessible and operational
- [ ] Rate limits are understood

**When Building a Custom MCP Server:**
- [ ] Purpose and scope are clearly defined
- [ ] Authentication method is chosen
- [ ] Resources and tools are designed
- [ ] Error handling is implemented
- [ ] Testing plan is in place
- [ ] Documentation is written
- [ ] Deployment configuration is ready

**For Optimal Performance:**
- [ ] Requests are specific and focused
- [ ] Rate limits are respected
- [ ] Errors are handled gracefully
- [ ] Security best practices are followed
- [ ] Logs are monitored

---

## Next Steps

**Getting Started:**
1. Review available connectors in Claude settings
2. Connect to a service you use frequently (Slack, Google Drive, GitHub)
3. Experiment with simple queries
4. Explore connector capabilities
5. Integrate with Projects for powerful combinations

**Advanced Usage:**
1. Study the MCP protocol specification
2. Explore example MCP servers
3. Plan a custom integration
4. Build and test locally
5. Deploy and iterate

**Continue Learning:**
- Explore [Connector Examples](../3_AI_&_Human_Capabilities/6_Connectors_MCP/) for practical configurations
- Use [mcp-builder skill](../3_AI_&_Human_Capabilities/3_Skills/) to create custom servers
- Review [Workflows Guide](8_Workflows_Guide_v1.0.md) for multi-connector orchestration
- Check [Automations Guide](9_Automations_Guide_v1.0.md) for triggered actions

---

**Remember:** Connectors extend Claude's reach into your digital workspace. Start with simple integrations, understand the patterns, then build increasingly sophisticated workflows that bring together multiple services and data sources.

---

## Personal Notes

**Use this space to document your learning, key insights, and personal discoveries:**

- Connectors you've successfully integrated:
- Services you want to connect to Claude:
- Custom MCP servers you plan to build:
- Patterns and workflows you've created:
- Challenges you've encountered:

---

## Progress Tracking

**I've completed this guide:** 

Once you've connected to external services, used connectors effectively, and understand MCP architecture, mark this guide as complete and move to the next phase.

---

## Related Guides & Next Steps

**You've completed:** Phase 2, Part 2 of 2 (Phase 2 Complete!)

**Next Phase:** [7. Frameworks Guide](7_Frameworks_Guide_v1.0.md) - Begin Phase 3: Complex Task Creation

**Full Learning Path:**
- **Phase 1: Building Blocks**  COMPLETE
  1. [Prompts Guide](1_Prompts_Guide_v1.0.md)
  2. [Commands Guide](2_Commands_Guide_v1.0.md)
  3. [Skills Guide](3_Skills_Guide_v1.0.md)
  4. [Projects & RAG Guide](4_Projects_&_RAG_Guide_v1.0.md)
- **Phase 2: Expanding Capabilities**  COMPLETE
  5. [Agents Guide](5_Agents_Guide_v1.0.md)
  6.  Connectors & MCP Guide (you are here)
- **Phase 3: Complex Task Creation** (Next)
  7. → [Frameworks Guide](7_Frameworks_Guide_v1.0.md)
  8. → [Workflows Guide](8_Workflows_Guide_v1.0.md)
  9. → [Automations Guide](9_Automations_Guide_v1.0.md)
  10. → [Orchestration Guide](10_Orchestration_Guide_v1.0.md)
- **Phase 4: Specialty Skill**
  11. [Artifacts Guide](11_Artifacts_Guide_v1.0.md)

**Quick Links:**
- [Prompts Guide](1_Prompts_Guide_v1.0.md) - Communicating with AI
- [Skills Guide](3_Skills_Guide_v1.0.md) - Reusable capability bundles
- [Projects & RAG Guide](4_Projects_&_RAG_Guide_v1.0.md) - Context and memory
- [Agents Guide](5_Agents_Guide_v1.0.md) - Autonomous subagents
- [Frameworks Guide](7_Frameworks_Guide_v1.0.md) - Orchestration fundamentals
