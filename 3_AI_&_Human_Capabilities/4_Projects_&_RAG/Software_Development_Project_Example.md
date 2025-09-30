# Software Development Project - Planning Template

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

**This template helps you plan a Project for software development work.**

---

## Project Planning Questions

Use these prompts with Claude to plan your software development project:

### 1. Define Your Project Scope

**Prompt to use with Claude:**
```
I'm creating a software development project for [describe your application/system].

Tech stack: [list technologies, frameworks, languages]
Team size: [solo, small team, large team]
Development stage: [greenfield, maintenance, refactoring, legacy migration]

Help me define:
1. A clear, descriptive project name
2. The core purpose and scope
3. What should and shouldn't be included in this project
4. Whether I should split this into multiple focused projects
```

### 2. Plan Your Custom Instructions

**Prompt to use with Claude:**
```
For my [project name] project, help me write custom instructions that cover:

1. Our tech stack and version requirements
2. Coding standards and style guides we follow
3. Required patterns (testing, error handling, logging, documentation)
4. Architectural preferences and constraints
5. Tone for explanations (technical level, verbosity)
6. What to always include in code suggestions
7. What to avoid or deprecate

Draft comprehensive custom instructions I can refine.
```

### 3. Identify Documents to Include

**Prompt to use with Claude:**
```
What documents should I add to Project Knowledge for effective software development?

Consider:
- Our tech stack: [list]
- Team experience level: [junior, mid, senior, mixed]
- Common challenges: [list issues you frequently encounter]
- Project type: [API, frontend, full-stack, mobile, etc.]

Suggest specific document types, with examples of what each should contain.
```

---

## Example: E-commerce API Development Project

**Project Name:** "E-commerce API - FastAPI + PostgreSQL"

**Project Purpose:**
Develop a RESTful API for an e-commerce platform, maintaining consistent code quality, security standards, and documentation practices.

---

## Custom Instructions Template

```
You are assisting with API development for an e-commerce platform.

## Tech Stack
- Python 3.11+
- FastAPI framework
- PostgreSQL 15+ database
- SQLAlchemy ORM
- Alembic for migrations
- Docker for containerization
- pytest for testing

## Coding Standards
- Follow PEP 8 style guide strictly
- Use type hints for all function signatures
- Write comprehensive docstrings (Google style)
- Maximum function length: 50 lines
- Maximum file length: 500 lines

## Architecture Patterns
- Repository pattern for data access
- Service layer for business logic
- Dependency injection for testability
- RESTful API design principles
- JWT authentication for all endpoints

## Security Requirements
- Validate all inputs
- Parameterize all SQL queries (prevent injection)
- Hash passwords with bcrypt
- Rate limiting on all endpoints
- HTTPS only in production

## Code Suggestions Should Include
1. Complete, runnable code with imports
2. Error handling with specific exceptions
3. Logging for debugging and monitoring
4. Inline comments for complex logic
5. Unit tests for critical functions
6. API documentation (OpenAPI/Swagger)

## Tone & Communication
- Professional but approachable
- Explain trade-offs in architectural decisions
- Suggest best practices proactively
- Flag potential security issues immediately
- Provide examples for complex concepts

## Avoid
- Deprecated Python/FastAPI features
- Storing sensitive data in logs
- Synchronous blocking calls in async functions
- Overly complex abstractions
- Code without error handling
```

---

## Documents to Add to Project Knowledge

### 1. Architecture Documentation
**File:** `architecture_overview.md`
**What to include:**
- System architecture diagram
- Database schema and relationships
- API endpoint structure
- Authentication/authorization flow
- Third-party integrations
- Deployment architecture

### 2. Coding Standards & Style Guide
**File:** `coding_standards.md`
**What to include:**
- Code formatting rules
- Naming conventions
- File/folder organization
- Comment and documentation standards
- Git commit message format
- Pull request checklist

### 3. API Documentation
**File:** `api_documentation.md`
**What to include:**
- All API endpoints with methods
- Request/response schemas
- Authentication requirements
- Error codes and messages
- Rate limiting rules
- Example requests/responses

### 4. Database Schema & Migrations
**File:** `database_schema.md`
**What to include:**
- All database tables and columns
- Relationships and foreign keys
- Indexes and constraints
- Migration strategy
- Seed data for development

### 5. Security Guidelines
**File:** `security_guidelines.md`
**What to include:**
- Authentication/authorization approach
- Input validation requirements
- SQL injection prevention
- CORS policy
- Rate limiting configuration
- Sensitive data handling

### 6. Testing Strategy
**File:** `testing_strategy.md`
**What to include:**
- Testing pyramid approach
- Unit test coverage requirements
- Integration test scenarios
- End-to-end test cases
- Test data management
- CI/CD integration

### 7. Common Patterns & Anti-Patterns
**File:** `patterns_antipatterns.md`
**What to include:**
- Approved design patterns with examples
- Common anti-patterns to avoid
- Refactoring strategies
- Performance optimization patterns
- Error handling patterns

### 8. Setup & Deployment
**File:** `setup_deployment.md`
**What to include:**
- Local development setup steps
- Environment variable configuration
- Docker setup and commands
- CI/CD pipeline configuration
- Deployment checklist
- Rollback procedures

### 9. Code Examples
**Files:** Multiple example files
**What to include:**
- Well-structured endpoint implementations
- Repository pattern examples
- Service layer examples
- Authentication middleware
- Error handling examples
- Test file examples

### 10. Troubleshooting Guide
**File:** `troubleshooting.md`
**What to include:**
- Common errors and solutions
- Debugging strategies
- Performance bottleneck identification
- Database query optimization
- Log analysis techniques

---

## Planning Prompts for Claude

Use these prompts to build your Project Knowledge with Claude:

### Generate Architecture Documentation
```
Help me document the architecture for my e-commerce API.

Requirements:
- [List key features and requirements]
- [Database entities you need]
- [Third-party services you're integrating]

Create a comprehensive architecture document covering:
1. System components and their interactions
2. Database schema design
3. API endpoint structure
4. Authentication flow
5. Key design decisions and trade-offs
```

### Create Coding Standards
```
Based on our tech stack [FastAPI, PostgreSQL, SQLAlchemy], help me create
comprehensive coding standards that cover:

1. File organization and naming
2. Code formatting (beyond PEP 8)
3. Function and variable naming patterns
4. Documentation requirements
5. Error handling approach
6. Testing requirements
7. Git workflow

Make it specific to our stack, not generic Python advice.
```

### Design API Documentation
```
Help me document our API endpoints. We need:

Core entities: [User, Product, Order, Payment]
Key operations: [CRUD for each entity]

Create comprehensive API documentation including:
1. All endpoints with HTTP methods
2. Request/response schemas (JSON)
3. Authentication requirements
4. Query parameters and filters
5. Error responses
6. Rate limiting rules
7. Example curl commands
```

### Plan Security Guidelines
```
Create security guidelines for our e-commerce API covering:

1. Authentication (JWT-based)
2. Authorization (role-based access)
3. Input validation strategy
4. SQL injection prevention
5. Rate limiting approach
6. Sensitive data handling
7. CORS configuration
8. Security testing requirements

Be specific to FastAPI and our architecture.
```

---

## Testing Your Project Setup

Once you've created your project and added Project Knowledge, test it:

### Test Prompts

**1. Test code generation with standards:**
```
Create a new endpoint for listing products with pagination, filtering by category,
and sorting options.
```

*Expected: Code following your coding standards, with error handling, tests, and documentation*

**2. Test architecture understanding:**
```
Explain how authentication works in our system and show me how to protect
a new endpoint.
```

*Expected: Response referencing your architecture docs and auth flow*

**3. Test security awareness:**
```
Review this function for security issues:
[paste a function with a SQL injection vulnerability]
```

*Expected: Identifies the vulnerability and suggests the fix from your security guidelines*

**4. Test pattern adherence:**
```
Show me how to implement a new repository for the Cart entity following
our patterns.
```

*Expected: Code matching your repository pattern examples*

---

## Iteration and Refinement

As you use your project, notice:
- When Claude doesn't follow your standards → refine custom instructions
- When Claude lacks context → add missing documentation
- When responses are inconsistent → check for conflicting guidance
- When you repeat corrections → add examples of correct approaches

**Update your Project Knowledge based on real usage patterns.**

---

## Key Takeaways

1. **Be specific about your tech stack** - Generic Python advice isn't as useful as FastAPI-specific guidance
2. **Include examples liberally** - Show Claude what good code looks like in your project
3. **Document trade-offs** - Explain *why* you made architectural decisions
4. **Keep security prominent** - Make security guidelines easy for RAG to retrieve
5. **Evolve with your codebase** - Update Project Knowledge as your system grows

**Start simple, add depth over time, and let your Project Knowledge grow with your application.**
