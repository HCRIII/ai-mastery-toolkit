# Custom MCP Server Template

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

**Build your own MCP server to connect Claude to internal APIs, databases, or custom data sources.**

---

## When to Build a Custom MCP Server

**Good Use Cases:**
- Internal company APIs without public connectors
- Proprietary databases or data warehouses
- Legacy systems needing AI integration
- Specialized workflows unique to your organization
- Combining multiple services into unified interface

**Consider Existing Connectors First:**
- Check if official connector exists
- Search community-built servers
- Only build custom when necessary

---

## Quick Start: Python with FastMCP

**Simplest approach for most use cases.**

### Installation

```bash
pip install fastmcp --break-system-packages
```

### Minimal Server Template

```python
# my_data_server.py
from fastmcp import FastMCP

# Create server instance
mcp = FastMCP("my-data-server")

@mcp.resource("data://status")
def get_status() -> str:
    """Get system status"""
    return "System: Operational\nVersion: 1.0.0"

@mcp.tool()
def search_data(query: str) -> dict:
    """Search internal data

    Args:
        query: Search query string

    Returns:
        Dictionary with search results
    """
    # Your search logic here
    results = perform_search(query)
    return {
        "query": query,
        "results": results,
        "count": len(results)
    }

if __name__ == "__main__":
    # Start the server
    mcp.run()
```

### Configuration

Add to `~/.claude/mcp.json`:
```json
{
  "mcpServers": {
    "my-data-server": {
      "command": "python",
      "args": ["/path/to/my_data_server.py"]
    }
  }
}
```

### Testing

```bash
# Run server directly to test
python my_data_server.py

# Server will start and wait for MCP requests
# Test by asking Claude to use your tools
```

---

## Template: Database Connector

**Connect Claude to your database for querying and analysis.**

### Python + PostgreSQL Example

```python
# database_server.py
from fastmcp import FastMCP
import psycopg2
from psycopg2.extras import RealDictCursor
import os

mcp = FastMCP("company-database")

def get_db_connection():
    """Create database connection"""
    return psycopg2.connect(
        host=os.getenv("DB_HOST", "localhost"),
        database=os.getenv("DB_NAME", "company_db"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        cursor_factory=RealDictCursor
    )

@mcp.resource("db://schema")
def get_schema() -> str:
    """Get database schema information"""
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT table_name, column_name, data_type
        FROM information_schema.columns
        WHERE table_schema = 'public'
        ORDER BY table_name, ordinal_position
    """)

    schema = cursor.fetchall()
    conn.close()

    # Format as readable text
    tables = {}
    for row in schema:
        table = row['table_name']
        if table not in tables:
            tables[table] = []
        tables[table].append(f"{row['column_name']} ({row['data_type']})")

    result = []
    for table, columns in tables.items():
        result.append(f"## {table}")
        result.extend([f"- {col}" for col in columns])
        result.append("")

    return "\n".join(result)

@mcp.tool()
def query_database(sql: str, limit: int = 100) -> dict:
    """Execute SQL query (SELECT only)

    Args:
        sql: SQL query to execute (SELECT statements only)
        limit: Maximum number of rows to return

    Returns:
        Query results as dictionary
    """
    # Security: Only allow SELECT queries
    sql_upper = sql.strip().upper()
    if not sql_upper.startswith('SELECT'):
        return {"error": "Only SELECT queries are allowed"}

    # Add LIMIT if not present
    if 'LIMIT' not in sql_upper:
        sql = f"{sql} LIMIT {limit}"

    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(sql)
        results = cursor.fetchall()
        conn.close()

        return {
            "success": True,
            "rows": results,
            "count": len(results)
        }
    except Exception as e:
        return {
            "success": False,
            "error": str(e)
        }

@mcp.tool()
def get_table_stats(table_name: str) -> dict:
    """Get statistics for a table

    Args:
        table_name: Name of the table

    Returns:
        Table statistics
    """
    conn = get_db_connection()
    cursor = conn.cursor()

    # Get row count
    cursor.execute(f"SELECT COUNT(*) as count FROM {table_name}")
    count = cursor.fetchone()['count']

    # Get column info
    cursor.execute(f"""
        SELECT column_name, data_type, is_nullable
        FROM information_schema.columns
        WHERE table_name = '{table_name}'
    """)
    columns = cursor.fetchall()

    conn.close()

    return {
        "table": table_name,
        "row_count": count,
        "columns": columns
    }

if __name__ == "__main__":
    mcp.run()
```

### Configuration with Environment Variables

```json
{
  "mcpServers": {
    "company-database": {
      "command": "python",
      "args": ["/path/to/database_server.py"],
      "env": {
        "DB_HOST": "db.company.com",
        "DB_NAME": "analytics",
        "DB_USER": "readonly_user",
        "DB_PASSWORD": "secure_password_here"
      }
    }
  }
}
```

**Security Note:** Use read-only database user for safety.

---

## Template: REST API Wrapper

**Wrap an internal REST API as MCP server.**

### Python + Requests Example

```python
# internal_api_server.py
from fastmcp import FastMCP
import requests
import os

mcp = FastMCP("internal-api")

API_BASE_URL = os.getenv("API_BASE_URL", "https://api.internal.company.com")
API_KEY = os.getenv("API_KEY")

def make_api_request(endpoint: str, method: str = "GET", data: dict = None) -> dict:
    """Make request to internal API"""
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    url = f"{API_BASE_URL}{endpoint}"

    try:
        if method == "GET":
            response = requests.get(url, headers=headers, params=data)
        elif method == "POST":
            response = requests.post(url, headers=headers, json=data)
        else:
            return {"error": f"Unsupported method: {method}"}

        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}

@mcp.resource("api://endpoints")
def list_endpoints() -> str:
    """List available API endpoints"""
    return """
    Available Endpoints:
    - /customers - Customer data
    - /orders - Order information
    - /products - Product catalog
    - /analytics - Analytics data
    """

@mcp.tool()
def get_customer(customer_id: str) -> dict:
    """Get customer information

    Args:
        customer_id: Customer ID

    Returns:
        Customer data
    """
    return make_api_request(f"/customers/{customer_id}")

@mcp.tool()
def search_orders(
    status: str = None,
    customer_id: str = None,
    limit: int = 50
) -> dict:
    """Search orders

    Args:
        status: Order status filter (optional)
        customer_id: Customer ID filter (optional)
        limit: Maximum results to return

    Returns:
        List of orders
    """
    params = {"limit": limit}
    if status:
        params["status"] = status
    if customer_id:
        params["customer_id"] = customer_id

    return make_api_request("/orders", data=params)

@mcp.tool()
def get_analytics(metric: str, timeframe: str = "7d") -> dict:
    """Get analytics data

    Args:
        metric: Metric name (e.g., 'revenue', 'signups', 'churn')
        timeframe: Time period (e.g., '7d', '30d', '90d')

    Returns:
        Analytics data
    """
    params = {
        "metric": metric,
        "timeframe": timeframe
    }
    return make_api_request("/analytics", data=params)

if __name__ == "__main__":
    mcp.run()
```

---

## Template: File System Access

**Provide Claude access to specific directories.**

### Python Example

```python
# file_server.py
from fastmcp import FastMCP
import os
from pathlib import Path

mcp = FastMCP("company-files")

# Configure allowed base path
BASE_PATH = Path(os.getenv("FILES_BASE_PATH", "/data/company"))

def is_safe_path(path: str) -> bool:
    """Ensure path is within allowed directory"""
    full_path = (BASE_PATH / path).resolve()
    return str(full_path).startswith(str(BASE_PATH.resolve()))

@mcp.resource("files://tree")
def get_directory_tree() -> str:
    """Get directory structure"""
    tree = []
    for root, dirs, files in os.walk(BASE_PATH):
        level = root.replace(str(BASE_PATH), '').count(os.sep)
        indent = ' ' * 2 * level
        tree.append(f'{indent}{os.path.basename(root)}/')
        sub_indent = ' ' * 2 * (level + 1)
        for file in files:
            tree.append(f'{sub_indent}{file}')
    return '\n'.join(tree)

@mcp.tool()
def read_file(filepath: str) -> dict:
    """Read file contents

    Args:
        filepath: Path to file (relative to base path)

    Returns:
        File contents
    """
    if not is_safe_path(filepath):
        return {"error": "Access denied: path outside allowed directory"}

    full_path = BASE_PATH / filepath

    if not full_path.exists():
        return {"error": "File not found"}

    if not full_path.is_file():
        return {"error": "Not a file"}

    try:
        with open(full_path, 'r') as f:
            content = f.read()
        return {
            "filepath": filepath,
            "content": content,
            "size": len(content)
        }
    except Exception as e:
        return {"error": str(e)}

@mcp.tool()
def search_files(pattern: str) -> dict:
    """Search for files by name pattern

    Args:
        pattern: Search pattern (e.g., '*.txt', 'report*')

    Returns:
        List of matching files
    """
    matches = list(BASE_PATH.rglob(pattern))
    return {
        "pattern": pattern,
        "matches": [str(m.relative_to(BASE_PATH)) for m in matches],
        "count": len(matches)
    }

if __name__ == "__main__":
    mcp.run()
```

---

## TypeScript/Node Template

**For production deployments and full MCP SDK features.**

### Installation

```bash
npm install @modelcontextprotocol/sdk
```

### Basic Server Template

```typescript
// server.ts
import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";
import {
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from "@modelcontextprotocol/sdk/types";

const server = new Server({
  name: "my-company-server",
  version: "1.0.0",
}, {
  capabilities: {
    resources: {},
    tools: {},
  },
});

// List available resources
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  return {
    resources: [
      {
        uri: "company://status",
        name: "System Status",
        mimeType: "text/plain",
        description: "Current system status",
      },
    ],
  };
});

// Read resource content
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;

  if (uri === "company://status") {
    return {
      contents: [{
        uri,
        mimeType: "text/plain",
        text: "System: Operational\nVersion: 1.0.0",
      }],
    };
  }

  throw new Error(`Unknown resource: ${uri}`);
});

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "search_data",
        description: "Search internal data",
        inputSchema: {
          type: "object",
          properties: {
            query: {
              type: "string",
              description: "Search query",
            },
          },
          required: ["query"],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "search_data") {
    const query = args.query as string;
    // Your search logic here
    const results = performSearch(query);

    return {
      content: [{
        type: "text",
        text: JSON.stringify({
          query,
          results,
          count: results.length,
        }, null, 2),
      }],
    };
  }

  throw new Error(`Unknown tool: ${name}`);
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Server running...");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});

function performSearch(query: string): any[] {
  // Implement your search logic
  return [];
}
```

---

## Development Best Practices

### 1. Error Handling

```python
@mcp.tool()
def risky_operation(param: str) -> dict:
    """Operation that might fail"""
    try:
        result = perform_operation(param)
        return {"success": True, "result": result}
    except ValueError as e:
        return {"success": False, "error": f"Invalid parameter: {e}"}
    except Exception as e:
        return {"success": False, "error": f"Unexpected error: {e}"}
```

### 2. Input Validation

```python
@mcp.tool()
def safe_query(query: str, limit: int = 100) -> dict:
    """Validate inputs before processing"""
    # Validate query
    if not query or len(query) < 3:
        return {"error": "Query must be at least 3 characters"}

    # Validate limit
    if limit < 1 or limit > 1000:
        return {"error": "Limit must be between 1 and 1000"}

    # Process validated inputs
    return process_query(query, limit)
```

### 3. Logging

```python
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@mcp.tool()
def logged_operation(param: str) -> dict:
    """Operation with logging"""
    logger.info(f"Operation called with param: {param}")

    try:
        result = perform_operation(param)
        logger.info(f"Operation succeeded: {result}")
        return {"success": True, "result": result}
    except Exception as e:
        logger.error(f"Operation failed: {e}")
        return {"success": False, "error": str(e)}
```

### 4. Rate Limiting

```python
from time import time
from collections import defaultdict

# Simple rate limiting
request_times = defaultdict(list)

def rate_limit(key: str, max_requests: int, window_seconds: int) -> bool:
    """Check if request is within rate limit"""
    now = time()
    requests = request_times[key]

    # Remove old requests
    requests[:] = [t for t in requests if now - t < window_seconds]

    if len(requests) >= max_requests:
        return False

    requests.append(now)
    return True

@mcp.tool()
def rate_limited_query(query: str) -> dict:
    """Query with rate limiting"""
    if not rate_limit("query", max_requests=10, window_seconds=60):
        return {"error": "Rate limit exceeded. Try again in a minute."}

    return perform_query(query)
```

---

## Testing Your Server

### Manual Testing

```bash
# Run server directly
python my_server.py

# Server should start and wait for requests
# Test by using Claude with the connector
```

### Unit Testing

```python
# test_server.py
import pytest
from my_server import mcp

def test_resource():
    """Test resource access"""
    result = mcp.get_resource("data://status")
    assert "Operational" in result

def test_tool():
    """Test tool execution"""
    result = mcp.call_tool("search_data", {"query": "test"})
    assert result["success"] == True
    assert "results" in result
```

---

## Deployment Checklist

- [ ] Error handling for all operations
- [ ] Input validation and sanitization
- [ ] Appropriate logging
- [ ] Rate limiting where needed
- [ ] Security review (no credential exposure)
- [ ] Documentation for all tools and resources
- [ ] Testing with real Claude usage
- [ ] Configuration via environment variables
- [ ] Monitoring and alerting set up

---

## Next Steps

**Getting Started:**
1. Choose template closest to your use case
2. Implement basic functionality
3. Test locally with Claude
4. Add error handling and validation
5. Deploy and monitor

**Advanced Features:**
1. Add caching for performance
2. Implement authentication
3. Add health check endpoints
4. Create comprehensive logging
5. Build monitoring dashboards

**Related Resources:**
- [MCP Builder Skill](../../1_Core_Claude_Concepts/3_Skills/mcp-builder.md) - Use skill to guide development
- [Connectors & MCP Guide](../../2_How_To_Guides/6_Connectors_MCP_Guide.md) - Full MCP documentation
- [Model Context Protocol Specification](https://modelcontextprotocol.io/docs/getting-started/intro) - Official docs
