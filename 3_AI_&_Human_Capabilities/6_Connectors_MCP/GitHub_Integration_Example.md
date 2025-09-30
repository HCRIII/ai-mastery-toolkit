# GitHub Integration Example

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

**Configure GitHub connector for repository access, code review, and issue management.**

---

## When to Use GitHub Connector

**Best For:**
- Reading code from repositories
- Searching across codebases
- Reviewing pull requests and issues
- Understanding project structure
- Accessing documentation in repos
- Creating issues or comments

**Not Ideal For:**
- Large file operations (binary files, huge repos)
- Complex git operations (use git CLI)
- Force pushes or destructive operations

---

## Configuration Setup

### Installation (Cowork Mode)

**Add to `~/.claude/mcp.json`:**
```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    }
  }
}
```

### Getting GitHub Credentials

**1. Create Personal Access Token:**
- Visit https://github.com/settings/tokens
- Click "Generate new token" → "Generate new token (classic)"
- Name: "Claude MCP Integration"
- Set expiration (90 days recommended)

**2. Required Scopes:**

**For Read-Only Access:**
- `repo` - Access repositories (includes private repos if needed)
- `read:org` - Read organization data
- `read:user` - Read user profile data

**For Read-Write Access (if creating issues/PRs):**
- `repo` (full access)
- `write:discussion` - Create and edit discussions
- `project` - Access projects

**3. Generate and Copy Token:**
- Click "Generate token"
- Copy the token (starts with `ghp_` or `github_pat_`)
- Save securely - you won't see it again

**4. Add to Configuration:**
- Add token to `~/.claude/mcp.json`
- Never commit token to git
- Consider using environment variables

---

## Common Use Cases

### 1. Code Exploration

**Natural Request:**
```
"Show me the main API routes in the server.js file"
```

**What Claude Does:**
- Accesses specified repository
- Reads file content
- Explains code structure
- Identifies patterns and approaches

**Best Practices:**
- Specify repository owner and name
- Provide file paths when known
- Good for understanding existing code

### 2. Issue Management

**Natural Request:**
```
"List all open issues labeled 'bug' assigned to me"
```

**What Claude Does:**
- Queries GitHub Issues API
- Filters by labels, assignee, state
- Returns structured list with metadata

**Best Practices:**
- Use labels for categorization
- Be specific about filters
- Combine with Slack for context (find discussion, then check issue)

### 3. Pull Request Review

**Natural Request:**
```
"Review PR #247 and summarize the changes"
```

**What Claude Does:**
- Fetches PR metadata
- Reads diff and changed files
- Analyzes changes
- Identifies potential issues or improvements

**Best Practices:**
- Reference PRs by number
- Ask specific questions about changes
- Use for preliminary review before human review

### 4. Repository Search

**Natural Request:**
```
"Search the codebase for functions that handle user authentication"
```

**What Claude Does:**
- Uses GitHub code search
- Finds relevant files and code snippets
- Provides context and locations

**Best Practices:**
- Use specific search terms
- Combine with file patterns ("*.js")
- Works across entire repository or organization

---

## Integration Patterns

### Pattern 1: Code Understanding

**Scenario:** Developer needs to understand unfamiliar codebase

```
User: "How does authentication work in our app?"

Claude (using GitHub):
1. Searches for auth-related files
2. Reads authentication middleware
3. Finds configuration files
4. Identifies dependencies (OAuth, JWT, etc.)
5. Explains the flow with code examples
```

**Project Integration:**
- Project: "Backend Development"
- Project Knowledge: Architecture docs, coding standards
- GitHub Connector: Live codebase access
- Result: Up-to-date understanding with actual code

### Pattern 2: Bug Investigation

**Scenario:** Investigating reported bug

```
User: "Users report login failures. Investigate."

Claude (using GitHub + Slack):
1. Search Slack #support for "login failure" reports
2. Find related GitHub issues
3. Read relevant authentication code
4. Check recent commits that might have caused it
5. Identify likely culprit and solution
```

**Multi-Connector Workflow:**
- Slack: User reports and error details
- GitHub: Code causing the issue
- Linear/Jira: Existing bug tickets
- Synthesis: Complete bug context

### Pattern 3: Code Review Assistance

**Scenario:** Reviewing pull request

```
User: "Review PR #312 for security concerns"

Claude (using GitHub):
1. Reads PR description and changed files
2. Analyzes code changes
3. Checks for common security issues:
   - Input validation
   - SQL injection risks
   - Authentication/authorization
   - Sensitive data exposure
4. Provides feedback with line references
```

**Enhanced with Projects:**
- Project Knowledge includes security checklist
- Claude references org security standards
- Consistent reviews across PRs

### Pattern 4: Documentation Generation

**Scenario:** Creating API documentation from code

```
User: "Generate API docs for the user endpoints"

Claude (using GitHub):
1. Reads user-related route files
2. Extracts endpoints, methods, parameters
3. Finds example usage in tests
4. Generates comprehensive API documentation
5. Can create as markdown file or code comments
```

---

## Rate Limits and Permissions

### GitHub API Rate Limits

**Authenticated Requests:**
- 5,000 requests per hour
- Resets hourly
- Sufficient for most use cases

**Search API:**
- 30 requests per minute
- More restrictive, use strategically

**Best Practices:**
- Cache results when appropriate
- Batch related queries
- Be strategic with search API
- Monitor rate limit headers

### Permission Considerations

**What You Can Access:**
- Public repositories (always)
- Private repositories (if token has access)
- Repositories you're a collaborator on
- Organization repositories (if member)

**What You Cannot Access:**
- Repositories outside your permissions
- Other users' private repos
- Archived repositories (limited)

**Repository Access Levels:**
- **Read**: View code, issues, PRs
- **Write**: Create issues, comment, fork
- **Admin**: Full access including settings

---

## Troubleshooting

### "Repository Not Found"

**Causes:**
- Private repo without access
- Repository name typo
- Repository moved or deleted

**Solutions:**
- Verify repository exists (check URL)
- Ensure token has `repo` scope
- Check you're a collaborator or org member
- Use correct format: `owner/repo-name`

### "Bad Credentials"

**Causes:**
- Token expired
- Token revoked
- Wrong token in configuration

**Solutions:**
- Generate new token
- Update `~/.claude/mcp.json` with new token
- Verify token has required scopes
- Check token hasn't been deleted in GitHub settings

### "API Rate Limit Exceeded"

**Causes:**
- Too many requests in short time
- Search API limit reached

**Solutions:**
- Wait for rate limit reset (check headers for reset time)
- Reduce request frequency
- Cache results
- Use more specific queries to reduce API calls

### Empty Search Results

**Causes:**
- Search terms too specific
- File types filtered out
- Branch not specified correctly

**Solutions:**
- Broaden search terms
- Check file extensions
- Verify searching in correct branch
- Use GitHub web interface to test search

---

## Example Prompts for GitHub

**Code Reading:**
```
"Show me the UserController class in the backend repo"
"Read the README from the docs repository"
"What's in the package.json file?"
```

**Issue Management:**
```
"List all open bugs in the mobile-app repo"
"Show me issues I'm assigned to across all repos"
"Find issues mentioning 'performance' in the API project"
```

**Pull Request Operations:**
```
"Summarize the changes in PR #156"
"Review the authentication PR for security issues"
"What files were modified in the latest PR?"
```

**Code Search:**
```
"Find all uses of the deprecated getUser function"
"Search for TODO comments in JavaScript files"
"Where is the stripe payment integration code?"
```

**Combined Operations:**
```
"Find the file handling email notifications, then check for related issues"
"Review the recent commits to the auth system and check if any issues were opened about it"
"Search the codebase for database queries, then check if there's documentation about our DB schema"
```

---

## Tips for Effective GitHub Integration

**1. Repository Organization**
- Clear README files help Claude understand context
- Well-structured codebases are easier to navigate
- Good file naming makes searching effective

**2. Issue and PR Templates**
- Templates provide consistent structure
- Easier for Claude to extract information
- Better context for reviews and analysis

**3. Branch Strategy**
- Specify branch if not using default
- Be aware of which branch you're reading
- Development branches may have work-in-progress code

**4. Combine with Documentation**
- Architecture Decision Records (ADRs) in repo
- Keep documentation close to code
- Link issues to docs for context

**5. Use Labels Effectively**
- Labels make filtering easier
- Consistent labeling across repos
- Claude can prioritize by label

---

## Security Best Practices

**Token Management:**
- Use fine-grained tokens when possible (better scoping)
- Set expiration dates (rotate regularly)
- Never commit tokens to repositories
- Use environment variables or secure storage
- Revoke tokens when no longer needed

**Access Control:**
- Use least-privilege scope
- Read-only when write isn't needed
- Limit to specific repositories if possible
- Monitor token usage in GitHub settings

**Code Security:**
- Don't expose sensitive code via MCP in public settings
- Be careful with proprietary code
- Audit what Claude accesses
- Respect code confidentiality

**Audit and Monitoring:**
- Review GitHub security log regularly
- Monitor API usage
- Track token access patterns
- Set up alerts for unusual activity

---

## Advanced Patterns

### Pattern: Automated Code Review

```
Workflow: On new PR
1. Read PR description and files
2. Check against coding standards (from Project Knowledge)
3. Identify potential issues:
   - Code smells
   - Security vulnerabilities
   - Performance concerns
   - Missing tests
4. Generate review comments
5. Post summary (or save for human review)
```

### Pattern: Issue Triage

```
Workflow: Daily issue triage
1. Fetch new issues from last 24 hours
2. Analyze each issue:
   - Extract key information
   - Identify type (bug, feature, question)
   - Assess severity
   - Suggest labels
3. Search codebase for related code
4. Provide triage recommendations
```

### Pattern: Release Notes Generation

```
Workflow: Generate release notes
1. List merged PRs since last release
2. Categorize by type (features, fixes, chores)
3. Extract descriptions
4. Group by component/module
5. Generate formatted release notes
6. Create as markdown file
```

---

## Next Steps

**Getting Started:**
1. Create GitHub personal access token
2. Configure in `~/.claude/mcp.json`
3. Test with reading a public repo README
4. Progress to reading code files
5. Explore issue and PR operations

**Advanced Usage:**
1. Combine with Slack for bug investigation
2. Integrate with Projects for code understanding
3. Build code review workflows
4. Create automated issue triage systems

**Related Examples:**
- [Slack Integration](Slack_Integration_Example.md) - Find discussions about code
- [Custom MCP Server](Custom_MCP_Server_Template.md) - Extend with custom tools
- [Cross-Service Workflow](Cross_Service_Workflow_Example.md) - Multi-connector automation
