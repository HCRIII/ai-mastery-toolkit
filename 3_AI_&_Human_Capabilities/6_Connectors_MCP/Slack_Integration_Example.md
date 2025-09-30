# Slack Integration Example

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

**Configure Slack connector for team communication and knowledge retrieval.**

---

## When to Use Slack Connector

**Best For:**
- Searching historical conversations
- Finding expertise and context in channels
- Reading recent updates from specific channels
- Monitoring team communication patterns
- Gathering context from threaded discussions

**Not Ideal For:**
- Real-time chat participation (better done manually)
- Bulk message operations (API rate limits)
- Sending announcements to large channels (use Slack directly)

---

## Configuration Setup

### Installation (Cowork Mode)

**Add to `~/.claude/mcp.json`:**
```json
{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-bot-token-here",
        "SLACK_TEAM_ID": "T01234567"
      }
    }
  }
}
```

### Getting Slack Credentials

**1. Create a Slack App:**
- Visit https://api.slack.com/apps
- Click "Create New App" → "From scratch"
- Name your app (e.g., "Claude Assistant")
- Select your workspace

**2. Configure OAuth Scopes:**

**Required Bot Token Scopes:**
- `channels:history` - Read messages from public channels
- `channels:read` - View basic channel information
- `groups:history` - Read messages from private channels (if needed)
- `groups:read` - View private channel information (if needed)
- `users:read` - View people in workspace
- `search:read` - Search messages and files

**Optional (for posting):**
- `chat:write` - Send messages as bot
- `files:read` - Access files

**3. Install App to Workspace:**
- Under "OAuth & Permissions", click "Install to Workspace"
- Authorize the requested permissions
- Copy the "Bot User OAuth Token" (starts with `xoxb-`)

**4. Get Team ID:**
- Visit your Slack workspace
- URL format: `https://[team-name].slack.com`
- Or use Slack API to get team info

---

## Common Use Cases

### 1. Search for Information

**Natural Request:**
```
"Search Slack for discussions about the database migration"
```

**What Claude Does:**
- Queries Slack search API
- Searches across accessible channels
- Returns relevant messages with context
- Provides timestamps and authors

**Best Practices:**
- Be specific about time range ("in the last week")
- Specify channel if known ("#engineering")
- Include key terms that would appear in relevant messages

### 2. Read Recent Updates

**Natural Request:**
```
"What are the latest 5 messages in #product-updates?"
```

**What Claude Does:**
- Fetches recent messages from specified channel
- Includes thread context if relevant
- Shows message metadata (author, time, reactions)

**Best Practices:**
- Limit number of messages (avoid overwhelming context)
- Check specific channels rather than all channels
- Use for channels you have access to

### 3. Find Expert or Context

**Natural Request:**
```
"Find messages from Sarah about API design patterns"
```

**What Claude Does:**
- Searches for messages from specific user
- Filters by topic/keywords
- Returns relevant conversations

**Best Practices:**
- Use exact names or Slack handles
- Combine with channel filters for better results
- Specify time range if looking for recent discussions

### 4. Thread Deep Dive

**Natural Request:**
```
"Get the full thread from that message about pricing changes"
```

**What Claude Does:**
- Retrieves parent message and all replies
- Maintains conversation flow and context
- Shows full discussion

**Best Practices:**
- Reference specific messages when possible
- Use for in-depth context gathering
- Good for understanding decisions or discussions

---

## Integration Patterns

### Pattern 1: Support Context Retrieval

**Scenario:** Customer support team needs historical context

```
User: "A customer is asking about SSO setup issues"

Claude (using Slack):
1. Searches #customer-support for previous SSO questions
2. Finds relevant troubleshooting threads
3. Retrieves documentation links shared previously
4. Synthesizes solution from past conversations
```

**Project Integration:**
- Project: "Customer Support"
- Project Knowledge: Product docs, FAQs
- Slack Connector: Live customer conversations
- Result: Answers grounded in both docs and real support history

### Pattern 2: Team Knowledge Base

**Scenario:** Developer onboarding needs context

```
User: "How does our deployment process work?"

Claude (using Slack):
1. Searches #devops and #engineering for "deployment"
2. Finds step-by-step guides shared in threads
3. Locates runbook links and documentation
4. Identifies key team members who posted about it
```

**Workflow Integration:**
1. Search Slack for topic
2. Identify key documentation links
3. Read documents (if in Google Drive connector)
4. Synthesize comprehensive guide
5. Save to Project Knowledge for future reference

### Pattern 3: Decision Context

**Scenario:** Understanding why a decision was made

```
User: "Why did we choose PostgreSQL over MySQL?"

Claude (using Slack):
1. Searches #architecture for database discussions
2. Finds decision thread with pros/cons
3. Retrieves performance benchmarks shared
4. Identifies stakeholders involved
```

**Combined with GitHub:**
- Find Slack discussion about decision
- Locate related GitHub issues or design docs
- Cross-reference architecture decision records (ADRs)
- Provide complete context

---

## Rate Limits and Permissions

### Slack API Rate Limits

**Search API:**
- Tier 3: 20 requests per minute
- Be strategic with searches
- Cache results when possible

**Conversations History:**
- Tier 3: 50+ requests per minute
- More generous for reading messages

**Best Practices:**
- Batch related queries together
- Be specific to reduce result set
- Avoid repeated searches for same content

### Permission Considerations

**What You Can Access:**
- Public channels you've joined
- Private channels the bot is invited to
- Direct messages (with appropriate scopes)

**What You Cannot Access:**
- Channels bot isn't in
- Other users' DMs (privacy protection)
- Deleted or archived channels

**Adding Bot to Channels:**
```
In any channel: @YourBotName
Or: /invite @YourBotName
```

---

## Troubleshooting

### "Channel Not Found"

**Causes:**
- Bot not invited to channel
- Channel name typo
- Private channel without access

**Solutions:**
- Invite bot to channel: `/invite @BotName`
- Verify channel name (use #channel format)
- Check bot is in workspace

### "Insufficient Permissions"

**Causes:**
- Missing OAuth scopes
- Bot token expired

**Solutions:**
- Review required scopes in Slack app settings
- Reinstall app to workspace
- Check token in config file

### Empty or Incomplete Results

**Causes:**
- Time range too restrictive
- Search terms too specific
- Rate limit reached

**Solutions:**
- Broaden search criteria
- Wait if rate limited (60 seconds)
- Make searches more specific but not overly narrow

---

## Example Prompts for Slack

**Finding Information:**
```
"Search #engineering for messages about API versioning from last month"
"Find all messages mentioning 'deployment failure' in #devops"
"What did Sarah post about the quarterly goals?"
```

**Reading Channels:**
```
"Show me the last 10 messages in #announcements"
"Get recent updates from #product-team"
"What's being discussed in #design today?"
```

**Thread Analysis:**
```
"Read the full thread about the database incident"
"Get the conversation about pricing changes with all replies"
"Show the decision-making discussion from that architecture thread"
```

**Combined Operations:**
```
"Search Slack for our API documentation, then if it's in Google Drive, open and summarize it"
"Find the bug report in #qa-testing, then check if there's a GitHub issue for it"
```

---

## Tips for Effective Slack Integration

**1. Channel Organization Matters**
- Well-organized channels = easier searches
- Clear naming conventions help
- Topic-specific channels improve results

**2. Use Thread Context**
- Important discussions should be in threads
- Threads keep context together
- Easier to retrieve complete conversations

**3. Document Links in Slack**
- Share doc links in Slack channels
- Makes them searchable via Slack
- Claude can then access via other connectors

**4. Combine with Projects**
- Store key Slack insights in Project Knowledge
- Reference important threads in documentation
- Build institutional knowledge over time

**5. Be Mindful of Privacy**
- Don't use for sensitive/confidential channels
- Respect team privacy norms
- Be transparent about bot access

---

## Security Best Practices

**Token Management:**
- Store bot token securely (never in code)
- Use environment variables
- Rotate tokens periodically
- Limit token scopes to minimum needed

**Access Control:**
- Only invite bot to relevant channels
- Review bot permissions regularly
- Monitor bot activity logs
- Remove bot from channels when no longer needed

**Data Handling:**
- Don't cache Slack messages unnecessarily
- Respect data retention policies
- Be aware of compliance requirements (SOC 2, GDPR, etc.)
- Audit access logs periodically

---

## Next Steps

**Getting Started:**
1. Create Slack app with appropriate scopes
2. Install app to workspace
3. Configure in `~/.claude/mcp.json`
4. Test with simple channel read
5. Expand to more complex searches

**Advanced Usage:**
1. Combine with Projects for knowledge management
2. Integrate with GitHub for development context
3. Build workflows that synthesize across multiple channels
4. Create automations for common information retrieval

**Related Examples:**
- [GitHub Integration](GitHub_Integration_Example.md) - Combine with code context
- [Google Drive Integration](Google_Drive_Integration_Example.md) - Access linked documents
- [Cross-Service Workflow](Cross_Service_Workflow_Example.md) - Orchestrate multiple connectors
