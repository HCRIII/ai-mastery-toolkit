# Projects & RAG Guide

**Created:** 2026-02-08
**Last Updated:** 2026-02-08
**Purpose:** Maintain persistent context, memory, and continuity across AI sessions
**Version:** v1.0
**Status:** Final
**Estimated Reading Time:** 17 minutes (~3,472 words)
**Difficulty:** Intermediate
**Prerequisites:** Prompts Guide, understanding of context management

---

## You Are Here

**Phase 1: Building Blocks → Projects & RAG Guide → Context & Memory**

**Navigation:** [Start Here](../1_Toolkit_Documentation/1_Start_Here.md) → [How-To Guides](README.md) → Projects & RAG Guide

---

## Table of Contents

1. [What Are Projects?](#what-are-projects)
2. [How Projects Work](#how-projects-work)
3. [Understanding RAG (Retrieval Augmented Generation)](#understanding-rag-retrieval-augmented-generation)
4. [Creating Effective Projects](#creating-effective-projects)
5. [Project Knowledge: What to Include](#project-knowledge-what-to-include)
6. [Best Practices for RAG Performance](#best-practices-for-rag-performance)
7. [Example Project Types](#example-project-types)
8. [Managing Projects](#managing-projects)
9. [Integration with the Toolkit](#integration-with-the-toolkit)
10. [Troubleshooting and Optimization](#troubleshooting-and-optimization)

---

## What Are Projects?

**Projects are workspaces in Claude that maintain persistent context, memory, and knowledge across conversations.**

Think of a Project as a dedicated workspace where Claude remembers everything you've discussed, every document you've shared, and every preference you've set—automatically, without you having to re-explain context every time.

### The Problem Projects Solve

**Without Projects:**
- Every conversation starts from zero context
- You constantly re-explain background, preferences, and constraints
- Claude can't reference documents from previous conversations
- No continuity between sessions
- Knowledge doesn't accumulate over time

**With Projects:**
- Claude remembers your context, style, and preferences
- Documents and knowledge persist across all conversations
- Continuity from session to session
- Knowledge compounds—each interaction builds on previous ones
- Dedicated workspace for specific goals or domains

### Key Features

**Project Knowledge (Custom Instructions + Documents):**
- Add up to 200,000 tokens of custom context (≈ 500 pages)
- Upload documents, code, data, guidelines, examples
- Write custom instructions Claude follows automatically
- All content is searchable and retrievable via RAG

**Conversation History:**
- All conversations within a project are saved
- Reference previous discussions automatically
- Build on past work without re-explaining

**Persistent Context:**
- Your preferences, tone, and style are remembered
- Technical constraints and requirements persist
- Domain knowledge accumulates over time

---

## How Projects Work

### The Project Lifecycle

**1. Create a Project**
- Give it a clear, descriptive name
- Define the project's purpose and scope

**2. Add Project Knowledge**
- Upload relevant documents (PDFs, Word docs, code files, data)
- Write custom instructions (tone, constraints, preferences, domain knowledge)
- Add examples of desired outputs

**3. Start Conversations**
- Every conversation has access to all Project Knowledge
- Claude automatically retrieves relevant information
- Context persists across all conversations

**4. Iterate and Refine**
- Add more documents as needs evolve
- Update custom instructions based on learnings
- Build a richer knowledge base over time

### Under the Hood

Projects use **Retrieval Augmented Generation (RAG)** to make your knowledge accessible:

1. **You add content** → Documents and instructions become Project Knowledge
2. **You ask a question** → Claude's RAG system searches your Project Knowledge
3. **Relevant content is retrieved** → The most pertinent information is pulled
4. **Claude responds using your knowledge** → Answers are grounded in your context

**This happens automatically—you don't need to reference documents explicitly.**

---

## Understanding RAG (Retrieval Augmented Generation)

**RAG is the technology that makes Project Knowledge work.**

### What Is RAG?

**Retrieval Augmented Generation** combines two powerful capabilities:
1. **Retrieval** - Finding relevant information from a knowledge base
2. **Generation** - Using that information to generate accurate responses

**Without RAG:** Claude relies only on training data (knowledge cutoff)
**With RAG:** Claude accesses *your specific knowledge* in real-time

### How RAG Works in Projects

**Step 1: Indexing (Automatic)**
- When you add documents to Project Knowledge, Claude indexes them
- Content is broken into searchable chunks
- Semantic embeddings are created for intelligent retrieval

**Step 2: Retrieval (Automatic)**
- When you ask a question, Claude searches your Project Knowledge
- Semantic search finds relevant chunks (not just keyword matching)
- Most pertinent information is retrieved

**Step 3: Augmentation (Automatic)**
- Retrieved information is added to Claude's context
- Claude "sees" relevant passages from your documents
- Responses are grounded in your specific knowledge

**Step 4: Generation (What You See)**
- Claude generates responses using retrieved knowledge
- Answers cite or reference your documents
- Reduces hallucination, increases accuracy

### Why RAG Matters

**Accuracy:**
- Responses grounded in your actual documents
- Reduces hallucination and speculation
- Claude cites sources from your knowledge base

**Up-to-Date Information:**
- Your documents can be more recent than Claude's training data
- Domain-specific knowledge beyond general training
- Company policies, internal processes, proprietary information

**Consistency:**
- All responses use the same source material
- Follow documented guidelines and preferences
- Maintain brand voice and technical standards

**Scale:**
- Handle knowledge bases up to 200,000 tokens
- No need to paste content into every conversation
- Knowledge persists and compounds over time

---

## Creating Effective Projects

### When to Create a Project

Create a project when you need:
- **Persistent context** across multiple sessions
- **Domain-specific knowledge** Claude should always reference
- **Consistent outputs** following specific guidelines or examples
- **Long-term collaboration** on a specific goal or domain
- **Accumulated knowledge** that builds over time

### Project Creation Checklist

**1. Define Clear Purpose**
- What is this project for?
- What problem does it solve?
- Who will use it and how?

**2. Name It Clearly**
- Descriptive, not generic: "Q4 Marketing Campaign" not "Marketing"
- Specific domain: "Python API Development" not "Coding"
- Action-oriented: "Customer Support Automation" not "Support Stuff"

**3. Scope Appropriately**
- Narrow enough to maintain focus
- Broad enough to be useful
- Consider splitting very large domains into multiple projects

**Examples:**
-  Good: "SaaS Product Documentation - Technical Writing Style Guide"
-  Too Vague: "Writing Help"
-  Good: "E-commerce Website - React + TypeScript Development"
-  Too Broad: "Web Development"

---

## Project Knowledge: What to Include

**Project Knowledge is the foundation of effective RAG. What you include determines what Claude can access.**

### Types of Content to Add

#### 1. Custom Instructions
**What they are:** Written guidelines Claude follows automatically in every conversation

**What to include:**
- **Tone and style:** "Write in a conversational, friendly tone"
- **Technical constraints:** "Use Python 3.11+, avoid deprecated libraries"
- **Domain preferences:** "Prioritize accessibility (WCAG 2.1 AA) in all recommendations"
- **Output formats:** "Always provide code with inline comments and docstrings"
- **Background context:** "We're a B2B SaaS company serving enterprise clients"

**Example custom instruction:**
```text
python
You are helping with Python API development for a fintech application.

Technical constraints:
- Python 3.11+, FastAPI framework
- PostgreSQL database
- Follow PEP 8 style guide strictly
- All endpoints must include authentication
- Write comprehensive docstrings and type hints

Tone: Professional but approachable. Explain complex concepts clearly.

When suggesting code:
1. Provide complete, runnable examples
2. Include error handling
3. Add inline comments for complex logic
4. Suggest tests for critical functions
```markdown
markdown

#### 2. Reference Documents
**What they are:** Files Claude can search and reference

**What to include:**
- **Style guides:** Brand voice, writing standards, design principles
- **Technical docs:** API documentation, architecture diagrams, data schemas
- **Examples:** Previous work, templates, sample outputs
- **Guidelines:** Process documentation, best practices, decision records
- **Research:** Market analysis, user research, competitive intelligence
- **Data:** Datasets, reports, specifications

**Supported file types:**
- Text files (.txt, .md, .csv)
- Documents (.pdf, .docx)
- Code (.py, .js, .java, .cpp, etc.)
- Data (.json, .xml, .yaml)
- Spreadsheets (.xlsx, .csv)

#### 3. Examples of Desired Outputs
**What they are:** Samples of what you want Claude to produce

**Why they matter:**
- Claude learns your specific format and style
- Reduces need for detailed instructions each time
- Creates consistency across outputs

**What to include:**
- **Writing samples:** Blog posts, emails, reports in your style
- **Code examples:** Well-structured code following your patterns
- **Design artifacts:** Mockups, wireframes, component examples
- **Templates:** Document structures, report formats, presentation layouts

#### 4. Domain Knowledge
**What it is:** Specialized information about your field, company, or project

**What to include:**
- **Company information:** Mission, values, products, customers
- **Industry context:** Regulations, standards, best practices
- **Technical specs:** System architecture, data models, APIs
- **Process documentation:** Workflows, approval chains, methodologies
- **Historical context:** Past decisions, lessons learned, project history

### What NOT to Include

** Sensitive Information:**
- Passwords, API keys, authentication tokens
- Personal identifying information (PII)
- Confidential business data not appropriate for AI processing
- Medical records, financial account details

** Irrelevant Content:**
- Documents unrelated to project purpose
- Outdated materials no longer applicable
- Duplicate information that clutters search

** Extremely Large, Unstructured Data:**
- Entire databases dumped as text
- Massive log files without context
- Unprocessed raw data without structure

---

## Best Practices for RAG Performance

**How to optimize Project Knowledge for the best retrieval results.**

### 1. Structure Your Documents

** Poor structure:**
```text
text
everything in one giant paragraph with no organization just a wall of text
about many different topics all mixed together making it impossible to
retrieve specific information efficiently...
```markdown
bash

** Good structure:**
```markdown
# API Authentication

## Overview
Brief description of authentication approach.

## Implementation
Step-by-step implementation details.

## Examples
Code examples with explanations.

## Troubleshooting
Common issues and solutions.
```python
markdown

**Why it matters:** Well-structured documents are easier to retrieve. Clear headings and sections help RAG find exactly what's needed.

### 2. Use Clear, Descriptive Headings

** Vague:** "Process," "Steps," "Info"
** Clear:** "Customer Onboarding Process," "Database Migration Steps," "API Rate Limiting Information"

**Why it matters:** Descriptive headings improve semantic search accuracy.

### 3. Include Context in Each Document

**Don't assume Claude knows what a document is about from filename alone.**

** No context:**
```text
javascript
Function should validate user input.
Check for SQL injection.
Return error codes.
```markdown
javascript

** With context:**
```markdown
# User Input Validation Function - Security Requirements

This document outlines security requirements for the `validate_user_input()`
function in our customer portal application.

**Purpose:** Prevent SQL injection attacks by validating all user inputs
before database queries.

**Requirements:**
- Function should validate user input
- Check for SQL injection patterns
- Return appropriate error codes
```sql
markdown

**Why it matters:** Context helps RAG understand relevance and retrieve the right information.

### 4. Break Up Large Documents

**Instead of one 100-page document, create:**
- Modular documents by topic
- Each document focused on a specific area
- Cross-reference related documents

**Why it matters:** Smaller, focused documents improve retrieval precision.

### 5. Keep Information Current

**Regularly review and update:**
- Remove outdated documents
- Update changed processes or guidelines
- Add new knowledge as it develops

**Why it matters:** Outdated information leads to incorrect responses.

### 6. Use Keywords Strategically

**Include terms users might search for:**
- Technical jargon and plain language equivalents
- Common questions and their variations
- Acronyms with spelled-out versions

**Example:**
```markdown
# RAG (Retrieval Augmented Generation)

RAG, or Retrieval Augmented Generation, is a technique that combines
information retrieval with AI generation...

Common questions:
- How does RAG work?
- What is retrieval augmented generation?
- How do projects use RAG?
```markdown
markdown

**Why it matters:** Improves semantic matching for diverse queries.

### 7. Provide Examples Liberally

**RAG retrieves examples exceptionally well.**

**Include:**
- Code snippets with explanations
- Before/after examples
- Good vs. bad examples
- Step-by-step walkthroughs

**Why it matters:** Examples are concrete and highly retrievable.

---

## Example Project Types

**Common project types and what to include in each. See the [4_Projects_&_RAG folder](../3_AI_&_Human_Capabilities/4_Projects_&_RAG/) for detailed example templates.**

### 1. Software Development Projects

**Purpose:** Maintain coding standards, architecture docs, and technical context

**Project Knowledge to include:**
- Architecture diagrams and system design docs
- Coding standards and style guides
- API documentation and schemas
- Common patterns and anti-patterns
- Setup and deployment procedures

**Example custom instruction:**
```text
python
Tech stack: Python 3.11, FastAPI, PostgreSQL, Docker
Coding standards: PEP 8, type hints required, comprehensive docstrings
Always include: Error handling, logging, unit tests
Follow: Repository pattern for data access
```markdown
markdown

### 2. Content Creation Projects

**Purpose:** Maintain brand voice, style consistency, and content guidelines

**Project Knowledge to include:**
- Brand voice and style guide
- Example blog posts, articles, or copy
- Target audience descriptions
- SEO guidelines
- Content templates

**Example custom instruction:**
```text
text
Brand voice: Professional yet approachable, authoritative but not stuffy
Target audience: B2B SaaS decision-makers (VP level and above)
Tone: Confident, data-driven, solution-oriented
Always: Use active voice, short paragraphs, subheadings for scanability
Avoid: Jargon without explanation, hype language, unsupported claims
```markdown
markdown

### 3. Customer Support Projects

**Purpose:** Provide consistent, accurate support responses

**Project Knowledge to include:**
- Product documentation and FAQs
- Common troubleshooting procedures
- Support response templates
- Escalation guidelines
- Known issues and workarounds

**Example custom instruction:**
```text
text
Response style: Empathetic, solution-focused, clear
Structure: Acknowledge issue → Explain cause → Provide solution → Offer follow-up
Always include: Step-by-step instructions, expected outcomes, alternative solutions
If unable to solve: Provide escalation path and timeline
```markdown
markdown

### 4. Research and Analysis Projects

**Purpose:** Accumulate research, maintain analytical frameworks

**Project Knowledge to include:**
- Research papers and reports
- Analysis frameworks (SWOT, Porter's Five Forces, etc.)
- Data sources and datasets
- Previous analyses and findings
- Industry context and benchmarks

**Example custom instruction:**
```text
text
Analysis approach: Data-driven, hypothesis-testing, consider multiple perspectives
Always include: Data sources, methodology, confidence levels, limitations
Format: Executive summary → Key findings → Supporting evidence → Recommendations
Cite sources explicitly, distinguish between facts and inferences
```markdown
markdown

### 5. Marketing Campaign Projects

**Purpose:** Coordinate campaign elements, maintain messaging consistency

**Project Knowledge to include:**
- Campaign brief and objectives
- Target audience personas
- Messaging framework and key messages
- Brand assets and guidelines
- Previous campaign examples and performance data

**Example custom instruction:**
```text
text
Campaign: Q4 Product Launch - Enterprise Features
Audience: Enterprise IT decision-makers, 1000+ employees
Key messages: Security, scalability, compliance, ROI
Tone: Confident, technical but accessible, benefits-focused
Channels: LinkedIn, industry publications, webinars, email
Always align: Product positioning, competitive differentiation, pricing strategy
```python
markdown

### 6. Learning and Documentation Projects

**Purpose:** Build personal or team knowledge base

**Project Knowledge to include:**
- Learning materials and resources
- Notes from courses, books, articles
- Concept explanations and examples
- Practice problems and solutions
- Reference documentation

**Example custom instruction:**
```text
python
Learning goal: Master advanced Python concepts for data engineering
Teaching style: Explain concepts clearly, use analogies, provide multiple examples
Always include: Why (conceptual understanding) and How (practical application)
Check understanding: Suggest practice exercises
Connect concepts: Show relationships between topics
```markdown

---

## Managing Projects

### Project Organization

**Naming conventions:**
- Use clear, descriptive names
- Include domain or purpose
- Consider adding date/version for time-bound projects

**Examples:**
- "Python API Dev - Healthcare Portal (2024)"
- "Marketing Content - Q4 Enterprise Launch"
- "Customer Support - SaaS Product Documentation"

### Updating Projects

**When to update:**
- **Add knowledge:** When you gain new information, documents, or examples
- **Refine instructions:** When you notice patterns in what works/doesn't work
- **Remove outdated content:** When information becomes obsolete
- **Split projects:** When a project becomes too broad or cluttered

**How to update:**
1. Review current Project Knowledge periodically
2. Add new documents as they become relevant
3. Update custom instructions based on experience
4. Remove or replace outdated materials

### When to Archive or Delete

**Archive when:**
- Project is complete but you want to reference it later
- It's a template you might reuse
- Historical context is valuable

**Delete when:**
- Project failed or was abandoned
- All content is outdated and not reusable
- Purpose no longer exists

---

## Integration with the Toolkit

**How Projects connect to other toolkit components.**

### Projects + Skills

**Skills work better with Project context:**
- Skills have access to Project Knowledge automatically
- Your documented preferences guide skill outputs
- Examples in Project Knowledge teach skills your style

**Example:** The `docx` skill creates documents following your style guide when it's in Project Knowledge.

### Projects + Commands

**Commands execute within Project context:**
- Commands can reference Project Knowledge
- Prompts use your documented preferences
- Outputs are consistent with project guidelines

**Example:** "Use the pptx skill" creates presentations using templates and brand guidelines from Project Knowledge.

### Projects + Prompts

**Prompts become more powerful with Projects:**
- You don't need to repeat context in every prompt
- Prompts can reference documents by name
- Reusable prompts work consistently across conversations

**Example:** "Draft a blog post on [topic]" automatically uses your brand voice and style from Project Knowledge.

### Projects + Agents

**Agents have deeper context with Projects:**
- Agents access all Project Knowledge for planning
- Decision-making aligns with documented guidelines
- Multi-step workflows maintain consistency

**Example:** An agent orchestrating a content workflow uses your editorial calendar and style guide automatically.

---

## Troubleshooting and Optimization

### Common Issues and Solutions

#### Issue: Claude doesn't seem to use my Project Knowledge

**Possible causes:**
1. Documents aren't well-structured or indexed
2. Query doesn't semantically match document content
3. Project Knowledge is too generic or broad

**Solutions:**
- Add clear headings and structure to documents
- Use descriptive keywords in documents
- Be specific in your questions
- Explicitly reference documents: "Based on the style guide..."

#### Issue: Responses are inconsistent

**Possible causes:**
1. Conflicting information in Project Knowledge
2. Custom instructions are vague or contradictory
3. Multiple documents with different guidance

**Solutions:**
- Review Project Knowledge for conflicts
- Make custom instructions explicit and unambiguous
- Remove or clarify contradictory documents
- Prioritize: "When in doubt, follow [document name]"

#### Issue: Project feels cluttered or unfocused

**Possible causes:**
1. Too much unrelated content
2. Project scope is too broad
3. Outdated materials not removed

**Solutions:**
- Split into multiple focused projects
- Remove irrelevant or outdated documents
- Tighten project scope and purpose
- Use clear naming and organization

#### Issue: Can't find specific information Claude should know

**Possible causes:**
1. Information buried in large documents
2. Poor document structure
3. Relevant document not included

**Solutions:**
- Break large documents into focused sections
- Add clear headings to improve retrieval
- Ensure relevant documents are added to Project Knowledge
- Use keywords strategically in documents

### Optimization Strategies

**Test and refine:**
- Ask questions about your Project Knowledge
- Note when Claude retrieves correctly vs. misses information
- Refine document structure based on retrieval performance

**Iterate on custom instructions:**
- Start simple, add detail as needed
- Notice patterns in corrections you make
- Update instructions to reduce corrections

**Build gradually:**
- Don't try to add everything at once
- Add documents as you need them
- Let Project Knowledge grow organically

**Review regularly:**
- Quarterly review of Project Knowledge
- Remove outdated content
- Update based on learnings
- Refine custom instructions

---

## Official Resources

**For the most up-to-date information about Projects and RAG:**

- **[What Are Projects?](https://support.claude.com/en/articles/9517075-what-are-projects)** - Official guide to Projects features and usage
- **[Examples of Projects You Can Create](https://support.claude.com/en/articles/9529781-examples-of-projects-you-can-create)** - Project ideas and use cases
- **[Retrieval Augmented Generation (RAG) for Projects](https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects)** - Technical details about how RAG works in Projects

---

## Key Takeaways

1. **Projects maintain persistent context** - No more re-explaining background every conversation
2. **RAG grounds responses in your knowledge** - Accuracy through retrieval, not just training data
3. **Project Knowledge is the foundation** - What you include determines what Claude can access
4. **Structure matters for RAG** - Well-organized documents = better retrieval
5. **Custom instructions guide every conversation** - Set preferences once, apply everywhere
6. **Projects compound over time** - Knowledge builds, context deepens, results improve
7. **Integration amplifies capabilities** - Projects + Skills + Agents = powerful workflows
8. **Iterate and refine** - Start simple, build gradually, optimize based on experience

---

## Personal Notes

**Use this space to document your learning, key insights, and personal discoveries:**

- Projects you've created and their purposes:
- Most valuable Project Knowledge you've built:
- RAG retrieval patterns that work well:
- Custom instructions that make a difference:
- Optimization ideas you've discovered:

---

## Progress Tracking

**I've completed this guide:** 

Once you've created a Project, added Project Knowledge, written custom instructions, and optimized RAG retrieval, mark this guide as complete and move to the next step.

---

## Related Guides & Next Steps

**You've completed:** Phase 1, Part 4 of 4 (Phase 1 Complete!)

**Next Guide:** [5. Agents Guide](5_Agents_Guide_v1.0.md) - Spawn specialized subagents for autonomous multi-step work

**Full Learning Path:**
- **Phase 1: Building Blocks**  COMPLETE
  1. [Prompts Guide](1_Prompts_Guide_v1.0.md)
  2. [Commands Guide](2_Commands_Guide_v1.0.md)
  3. [Skills Guide](3_Skills_Guide_v1.0.md)
  4.  Projects & RAG Guide (you are here)
- **Phase 2: Expanding Capabilities**
  5. → [Agents Guide](5_Agents_Guide_v1.0.md)
  6. → [Connectors & MCP Guide](6_Connectors_MCP_Guide_v1.0.md)
- **Phase 3: Complex Task Creation** (After Phase 2)
  7. [Frameworks Guide](7_Frameworks_Guide_v1.0.md)
  8. [Workflows Guide](8_Workflows_Guide_v1.0.md)
  9. [Automations Guide](9_Automations_Guide_v1.0.md)
  10. [Orchestration Guide](10_Orchestration_Guide_v1.0.md)

**Quick Links:**
- [Prompts Guide](1_Prompts_Guide_v1.0.md) - Communicating with AI
- [Commands Guide](2_Commands_Guide_v1.0.md) - Invoking capabilities
- [Skills Guide](3_Skills_Guide_v1.0.md) - Reusable capability bundles
- [Agents Guide](5_Agents_Guide_v1.0.md) - Autonomous systems
- [Connectors & MCP Guide](6_Connectors_MCP_Guide_v1.0.md) - External integrations
