# Master Index: AI Mastery Toolkit v4

**Created:** 2026-02-08
**Last Updated:** 2026-03-06
**Purpose:** Navigation hub for complete AI Mastery Toolkit by learning phase and topic

---

- [By Learning Phase](#by-learning-phase) - Follow the structured progression (Phase 1-4)
- [By Topic](#by-topic) - Jump to specific concepts and skills
- [By Use Case](#by-use-case) - Find guides for your specific goals
- [By Reading Time](#by-reading-time) - Choose based on your available time
- [Topic Crossmap](#topic-crossmap) - See which guides cover which topics

---

## By Learning Phase

### Phase 1: Building Blocks (Guides 1-4)

**Master these first—they're the foundation for everything else.**

These guides teach you the fundamental concepts and tools you need before moving to more advanced capabilities.

#### [1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md)
**The complete guide to communicating effectively with AI.**

- **What it covers:** Mental models for understanding AI, prompt design frameworks, structured reasoning techniques, output improvement
- **Key sections:** Three-level mental models, Two-Axis Framework, Five Levels of Zero-Context Prompting (35 prompt types), chain-of-thought techniques
- **Reading time:** 30-60 min
- **Prerequisites:** None - start here if new to AI
- **Related guides:** All other guides build on prompting concepts

---

#### [2. Commands Guide](../2_How_To_Guides/2_Commands_Guide_v1.0.md)
**Invoke capabilities through commands and slash commands.**

- **What it covers:** What commands are, all 16 built-in commands, explicit vs automatic invocation, creating custom commands
- **Key sections:** Command fundamentals, built-in command reference, custom command creation via skills and prompts
- **Reading time:** 15-30 min (Quick reference)
- **Prerequisites:** [1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md)
- **Related guides:** Works with [3. Skills Guide](../2_How_To_Guides/3_Skills_Guide_v1.0.md), [6. Connectors & MCP Guide](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md)

---

#### [3. Skills Guide](../2_How_To_Guides/3_Skills_Guide_v1.0.md)
**Learn and use built-in skills, then create your own.**

- **What it covers:** What skills are and how they work, all 16 built-in system skills, using the skill-creator, creating custom skills
- **Key sections:** Skills fundamentals, skill categories by type, hands-on skill creation, best practices
- **Reading time:** 15-30 min
- **Prerequisites:** [1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md), [2. Commands Guide](../2_How_To_Guides/2_Commands_Guide_v1.0.md)
- **Related guides:** [4. Projects & RAG Guide](../2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md), [5. Agents Guide](../2_How_To_Guides/5_Agents_Guide_v1.0.md)

---

#### [4. Projects & RAG Guide](../2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md)
**Maintain persistent context, memory, and continuity across sessions.**

- **What it covers:** What Projects are, creating and organizing projects, building knowledge bases, understanding RAG (Retrieval Augmented Generation), managing context and memory
- **Key sections:** Projects fundamentals, knowledge base structure, RAG architecture, memory management patterns, integration strategies
- **Reading time:** 30-60 min
- **Prerequisites:** [1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md) - [3. Skills Guide](../2_How_To_Guides/3_Skills_Guide_v1.0.md)
- **Related guides:** Foundation for all subsequent guides; connects to [5. Agents Guide](../2_How_To_Guides/5_Agents_Guide_v1.0.md), [6. Connectors & MCP Guide](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md)

---

### Phase 2: Expanding AI Capabilities (Guides 5-6)

**Build on the foundation by extending what AI can do.**

These guides show you how to expand AI's capabilities beyond simple conversations.

#### [5. Agents Guide](../2_How_To_Guides/5_Agents_Guide_v1.0.md)
**Spawn specialized subagents to handle complex multi-step tasks.**

- **What it covers:** Understanding agent types (Bash, Explore, Plan, General-Purpose), when to use agents vs direct tools, parallel and sequential execution, agent coordination patterns
- **Key sections:** Agent types and use cases, when to spawn agents, coordination patterns, parallelization strategies
- **Reading time:** 15-30 min
- **Prerequisites:** [1-4. All Phase 1 guides](../2_How_To_Guides/1_Prompts_Guide_v1.0.md)
- **Related guides:** Pairs with [6. Connectors & MCP Guide](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md) for tool integration
- **Use cases:** Complex task orchestration, parallel processing, context isolation

---

#### [6. Connectors & MCP Guide](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md)
**Connect Claude to external services, tools, and data sources.**

- **What it covers:** What Model Context Protocol (MCP) is, using built-in connectors (Slack, GitHub, Google Drive, etc.), installing and configuring MCP servers, building custom MCP servers
- **Key sections:** MCP fundamentals, built-in connector catalog, installation and configuration, FastMCP server development, TypeScript development
- **Reading time:** 15-30 min
- **Prerequisites:** [1-4. All Phase 1 guides](../2_How_To_Guides/1_Prompts_Guide_v1.0.md)
- **Related guides:** Pairs with [5. Agents Guide](../2_How_To_Guides/5_Agents_Guide_v1.0.md), prepares for [7-10. Phase 3 guides](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md)
- **Use cases:** External tool integration, workflow automation, data source connection

---

### Phase 3: Complex Task Creation (Guides 7-11)

**Master sophisticated workflows and systematic orchestration of AI, humans, and systems.**

These guides progressively take you from conceptual understanding through design and implementation to operations.

#### [7. Frameworks Guide](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md)
**Understanding orchestration conceptually - the two axes and 5-block model.**

#### [8. Specifications Guide](../2_How_To_Guides/8_Specifications_Guide_v1.0.md)
**What it covers:** The 6-phase specification lifecycle, the Specification Document Standard and Template, verification vs. validation, and how specifications serve as the precision layer that makes workflows executable.
**Time to complete:** 1–2 hours
**Prerequisites:** [1-7. All Phase 1, Phase 2, and Frameworks Guide](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md)
**Related guides:** Extends [7. Frameworks Guide](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md), required before [9. Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md)
**Understanding orchestration conceptually - the two axes and 5-block model.**

- **What it covers:** What orchestration is and when to use it, horizontal axis (Deterministic ↔ Dynamic), vertical axis (Simple ↔ Complex), the 5-block model (Trigger → Intake → Decision → Action → Review), core vocabulary
- **Key sections:** Orchestration fundamentals, the two-axis coordinate system, the 5-block model, decision logic basics, Alex (lead generation) example introduction
- **Reading time:** 30-60 min
- **Prerequisites:** [1-6. All Phase 1 & Phase 2 guides](../2_How_To_Guides/1_Prompts_Guide_v1.0.md)
- **Related guides:** Conceptual foundation for [9. Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md), [10. Automations Guide](../2_How_To_Guides/10_Automations_Guide_v1.0.md), [11. Orchestration Guide](../2_How_To_Guides/11_Orchestration_Guide_v1.0.md)
- **Use cases:** Process design, workflow planning, decision system architecture

---

#### [9. Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md)
**Designing complete orchestration workflows before building them.**

- **What it covers:** State schema design, prompt engineering for orchestration contexts, decision logic mapping (rules + AI hybrid), error handling and monitoring strategies, complete workflow design template
- **Key sections:** State schema fundamentals, orchestration prompt engineering, decision logic design, error handling patterns, complete Alex workflow design with production-ready prompts, reusable design template
- **Reading time:** 30-60 min
- **Prerequisites:** [1-7. All Phase 1, Phase 2, and Frameworks Guide](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md)
- **Related guides:** Extends [7. Frameworks Guide](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md), prepares for [10. Automations Guide](../2_How_To_Guides/10_Automations_Guide_v1.0.md)
- **Use cases:** Workflow design, blueprint creation for teams, process documentation

---

#### [10. Automations Guide](../2_How_To_Guides/10_Automations_Guide_v1.0.md)
**Implementing orchestrations in n8n with node-by-node guidance.**

- **What it covers:** n8n fundamentals and architecture, building all 5 blocks in n8n (triggers, intake, decisions, actions, review), state management for long-running processes, complete Alex implementation with 14 nodes, testing and debugging, platform comparison (n8n vs Zapier vs Make vs custom code)
- **Key sections:** n8n architecture, node types and workflows, building each orchestration block, complete Alex implementation, state management patterns, testing strategies, platform analysis
- **Reading time:** 30-60 min
- **Prerequisites:** [1-9. Through Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md)
- **Related guides:** Implements designs from [9. Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md), feeds data to [11. Orchestration Guide](../2_How_To_Guides/11_Orchestration_Guide_v1.0.md)
- **Use cases:** Technical implementation, n8n development, automation engineering

---

#### [11. Orchestration Guide](../2_How_To_Guides/11_Orchestration_Guide_v1.0.md)
**Operating, monitoring, and optimizing live orchestration systems.**

- **What it covers:** Metrics that matter (success, performance, cost, quality), monitoring strategies (real-time, daily, weekly), reading and interpreting dashboard data, optimization techniques for horizontal and vertical orchestration, scaling considerations, feedback loops for continuous improvement, complete Alex operations dashboard with 30-day metrics
- **Key sections:** Orchestration operations fundamentals, metric definition and tracking, monitoring dashboard design, optimization strategies, real output examples and quality assessment, scaling patterns
- **Reading time:** 30-60 min
- **Prerequisites:** [1-10. Through Automations Guide](../2_How_To_Guides/10_Automations_Guide_v1.0.md)
- **Related guides:** Extends [10. Automations Guide](../2_How_To_Guides/10_Automations_Guide_v1.0.md), completes the orchestration trilogy
- **Use cases:** System operations, performance optimization, metrics and monitoring, quality assurance

---

### Phase 4: Specialty Skill (Guide 11)

**A powerful specialty capability for rapid prototyping and interactive deliverables.**

#### [12. Artifacts Guide](../2_How_To_Guides/12_Artifacts_Guide_v1.0.md)
**Create interactive documents, applications, and visualizations with Claude.**

- **What it covers:** What artifacts are and when Claude creates them, six artifact types (Markdown, HTML, React, SVG, Mermaid, PDF), decision matrix for artifacts vs files vs output, creating simple and complex artifacts, using web-artifacts-builder skill, eight common patterns with code examples, best practices and troubleshooting
- **Key sections:** Artifacts fundamentals, six artifact types with examples, decision framework, simple artifact creation (5-10 minute tutorials), complex multi-component artifacts, common patterns with full code, performance and accessibility best practices, 9-item troubleshooting guide
- **Reading time:** 30-60 min
- **Prerequisites:** [1-4. Phase 1 minimum](../2_How_To_Guides/1_Prompts_Guide_v1.0.md) (can learn independently in parallel with other phases)
- **Related guides:** Complements all phases, especially useful with [7-11. Orchestration guides](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md)
- **Use cases:** Interactive deliverables, rapid prototyping, vibe coding, visualization

---

## By Topic

### Context & Memory

**How to maintain and leverage context across sessions and conversations.**

| Topic | Guides | Purpose |
|-------|--------|---------|
| **Understanding Context** | [1. Prompts](../2_How_To_Guides/1_Prompts_Guide_v1.0.md) | Foundation - how LLMs use context |
| **Persistent Projects** | [4. Projects & RAG](../2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md) | Build knowledge bases and memory systems |
| **RAG Systems** | [4. Projects & RAG](../2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md) | Retrieval Augmented Generation architecture |
| **State Management** | [9. Workflows](../2_How_To_Guides/9_Workflows_Guide_v1.0.md) | Design state schemas for long-running processes |

---

### Tool Integration & Automation

**How to extend AI capabilities through external tools and services.**

| Topic | Guides | Purpose |
|-------|--------|---------|
| **Basic Commands** | [2. Commands](../2_How_To_Guides/2_Commands_Guide_v1.0.md) | Invoke built-in capabilities |
| **Custom Skills** | [3. Skills](../2_How_To_Guides/3_Skills_Guide_v1.0.md) | Create reusable skill functions |
| **External Connectors** | [6. Connectors & MCP](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md) | Integrate Slack, GitHub, Google Drive, etc. |
| **Building MCP Servers** | [6. Connectors & MCP](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md) | Create custom integration servers |
| **Agents** | [5. Agents](../2_How_To_Guides/5_Agents_Guide_v1.0.md) | Spawn specialized subagents |

---

### Workflow Design & Orchestration

**How to design and implement complex, multi-step processes.**

| Topic | Guides | Purpose |
|-------|--------|---------|
| **Orchestration Concepts** | [7. Frameworks](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md) | Two axes, 5-block model, decision logic |
| **Workflow Design** | [9. Workflows](../2_How_To_Guides/9_Workflows_Guide_v1.0.md) | Blueprint creation with prompts and state |
| **Automation Implementation** | [10. Automations](../2_How_To_Guides/10_Automations_Guide_v1.0.md) | Build in n8n with node-by-node guidance |
| **Operations & Monitoring** | [11. Orchestration](../2_How_To_Guides/11_Orchestration_Guide_v1.0.md) | Metrics, dashboards, optimization |

---

### Interactive Content & Deliverables

**How to create interactive documents and visualizations.**

| Topic | Guides | Purpose |
|-------|--------|---------|
| **Artifact Types** | [12. Artifacts](../2_How_To_Guides/12_Artifacts_Guide_v1.0.md) | Six types: Markdown, HTML, React, SVG, Mermaid, PDF |
| **React Components** | [12. Artifacts](../2_How_To_Guides/12_Artifacts_Guide_v1.0.md) | Build interactive web applications |
| **Visualizations** | [12. Artifacts](../2_How_To_Guides/12_Artifacts_Guide_v1.0.md) | SVG and Mermaid diagrams |
| **Rapid Prototyping** | [12. Artifacts](../2_How_To_Guides/12_Artifacts_Guide_v1.0.md) | Vibe coding and quick deliverables |

---

## By Use Case

### I Want to... Automate Repetitive Tasks

**Build systems that handle routine work without human intervention.**

**Best Learning Path:**
1. [1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md) - Learn to communicate effectively
2. [2. Commands Guide](../2_How_To_Guides/2_Commands_Guide_v1.0.md) - Understand basic invocations
3. [3. Skills Guide](../2_How_To_Guides/3_Skills_Guide_v1.0.md) - Create reusable capabilities
4. [10. Automations Guide](../2_How_To_Guides/10_Automations_Guide_v1.0.md) - Build automation workflows
5. [11. Orchestration Guide](../2_How_To_Guides/11_Orchestration_Guide_v1.0.md) - Monitor and optimize

**Estimated total time:** 2-3 hours of learning + implementation time

**Key concepts:**
- Prompt engineering for automation contexts
- Decision logic (rules + AI hybrid)
- State management for long-running processes
- n8n workflow automation
- Monitoring and optimization

---

### I Want to... Build a Complex System (Chatbot, Lead Pipeline, etc.)

**Design and operate sophisticated, multi-step processes that combine AI, rules, and human oversight.**

**Best Learning Path:**
1. [1-4. Phase 1: Building Blocks](../2_How_To_Guides/1_Prompts_Guide_v1.0.md) - Complete foundation
2. [5. Agents Guide](../2_How_To_Guides/5_Agents_Guide_v1.0.md) - Add specialized subagents
3. [6. Connectors & MCP Guide](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md) - Integrate external tools
4. [7. Frameworks Guide](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md) - Understand orchestration patterns
5. [9. Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md) - Design your system
6. [10. Automations Guide](../2_How_To_Guides/10_Automations_Guide_v1.0.md) - Implement in n8n
7. [11. Orchestration Guide](../2_How_To_Guides/11_Orchestration_Guide_v1.0.md) - Operate and optimize

**Estimated total time:** 4-6 hours of learning + design and implementation

**Key concepts:**
- Projects and knowledge bases
- Agent coordination
- Tool integration
- State machine design
- Hybrid decision logic
- Monitoring and scaling

---

### I Want to... Create Interactive Deliverables & Prototypes

**Build interactive documents, dashboards, and web applications quickly.**

**Best Learning Path:**
1. [1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md) - Learn to communicate with AI
2. [4. Projects & RAG Guide](../2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md) - Organize design context
3. [12. Artifacts Guide](../2_How_To_Guides/12_Artifacts_Guide_v1.0.md) - Master artifact creation and patterns

**Estimated total time:** 2-3 hours of learning + rapid prototyping

**Key concepts:**
- Artifact types and when to use each
- React component patterns
- Responsive design
- Performance optimization
- Common UI patterns

---

### I Want to... Integrate with External Tools (Slack, GitHub, Google Drive)

**Connect AI to your existing tools and data sources.**

**Best Learning Path:**
1. [1-3. Prompts, Commands, Skills](../2_How_To_Guides/1_Prompts_Guide_v1.0.md) - Basic capabilities
2. [4. Projects & RAG Guide](../2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md) - Context organization
3. [6. Connectors & MCP Guide](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md) - Connector setup and custom servers
4. [5. Agents Guide](../2_How_To_Guides/5_Agents_Guide_v1.0.md) - Coordinate complex integrations (optional)

**Estimated total time:** 1-2 hours of learning + setup and configuration

**Key concepts:**
- Built-in connector catalog
- MCP server architecture
- Authentication patterns
- Custom server development
- Data flow integration

---

### I Want to... Master Prompting for Specific Domains

**Become expert at communicating with AI for specialized work.**

**Best Learning Path:**
1. [1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md) - Deep dive into prompt frameworks
2. [4. Projects & RAG Guide](../2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md) - Build domain knowledge bases
3. [3. Skills Guide](../2_How_To_Guides/3_Skills_Guide_v1.0.md) - Create domain-specific skills

**Estimated total time:** 1-2 hours of learning + practice and documentation

**Key concepts:**
- Mental models for understanding AI thinking
- Context density optimization
- Zero-context prompting patterns
- Chain-of-thought techniques
- Knowledge base structure

---

### I Want to... Design & Implement a Lead Generation Pipeline (Alex Example)

**Follow the complete Alex example from design through operations.**

**Best Learning Path:**
1. [1-4. Phase 1: Building Blocks](../2_How_To_Guides/1_Prompts_Guide_v1.0.md) - Foundation
2. [7. Frameworks Guide](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md) - See Alex introduction
3. [9. Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md) - Study complete Alex workflow design
4. [10. Automations Guide](../2_How_To_Guides/10_Automations_Guide_v1.0.md) - See Alex n8n implementation (14 nodes)
5. [11. Orchestration Guide](../2_How_To_Guides/11_Orchestration_Guide_v1.0.md) - Study Alex operations dashboard and metrics

**Estimated total time:** 3-4 hours of learning + implementation

**Key concepts:**
- End-to-end orchestration
- Lead scoring and qualification
- Email integration
- CRM data management
- Sales workflow automation
- Success metrics and optimization

---

## By Reading Time

### Quick Reference (15-30 minutes)

Perfect for quick lookups and learning specific narrow topics.

| Guide | Topic | Time |
|-------|-------|------|
| [2. Commands Guide](../2_How_To_Guides/2_Commands_Guide_v1.0.md) | Command reference and invocation patterns | 15-30 min |
| [3. Skills Guide](../2_How_To_Guides/3_Skills_Guide_v1.0.md) | Built-in skills and custom skill creation | 15-30 min |
| [5. Agents Guide](../2_How_To_Guides/5_Agents_Guide_v1.0.md) | Agent types and coordination patterns | 15-30 min |
| [6. Connectors & MCP Guide](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md) | External tool integration and MCP servers | 15-30 min |

---

### Medium Dive (30-60 minutes)

Comprehensive coverage of major topics; good for understanding concepts deeply.

| Guide | Topic | Time |
|-------|-------|------|
| [1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md) | Complete prompting philosophy and frameworks | 30-60 min |
| [4. Projects & RAG Guide](../2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md) | Project organization and retrieval architecture | 30-60 min |
| [7. Frameworks Guide](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md) | Orchestration concepts and models | 30-60 min |
| [9. Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md) | Workflow design and state management | 30-60 min |
| [10. Automations Guide](../2_How_To_Guides/10_Automations_Guide_v1.0.md) | n8n implementation and automation patterns | 30-60 min |
| [11. Orchestration Guide](../2_How_To_Guides/11_Orchestration_Guide_v1.0.md) | Operations, monitoring, and optimization | 30-60 min |
| [12. Artifacts Guide](../2_How_To_Guides/12_Artifacts_Guide_v1.0.md) | Interactive content creation and patterns | 30-60 min |

---

### Deep Dive (Half Day - 3-4 hours)

For complete mastery of a major area. Work through the entire phase.

**Phase 1: Building Blocks**
- [1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md)
- [2. Commands Guide](../2_How_To_Guides/2_Commands_Guide_v1.0.md)
- [3. Skills Guide](../2_How_To_Guides/3_Skills_Guide_v1.0.md)
- [4. Projects & RAG Guide](../2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md)

**Phase 2: Expanding Capabilities**
- [5. Agents Guide](../2_How_To_Guides/5_Agents_Guide_v1.0.md)
- [6. Connectors & MCP Guide](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md)

---

### Weekend Study (Full Day - 6+ hours)

For complete toolkit mastery. Work through multiple phases.

**All 11 Guides (Full Toolkit Mastery)**
- Phases 1-4 complete
- Estimated 8-10 hours including practice
- Best approached over a weekend plus ongoing practice

---

## Topic Crossmap

### How topics appear across multiple guides

#### Prompting appears in:
- **[1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md)** - Complete framework and philosophy
- **[3. Skills Guide](../2_How_To_Guides/3_Skills_Guide_v1.0.md)** - Prompting for skill instructions
- **[9. Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md)** - Orchestration-specific prompting
- **[12. Artifacts Guide](../2_How_To_Guides/12_Artifacts_Guide_v1.0.md)** - Prompting for interactive content

#### Context Management appears in:
- **[1. Prompts Guide](../2_How_To_Guides/1_Prompts_Guide_v1.0.md)** - Context density, pattern matching
- **[4. Projects & RAG Guide](../2_How_To_Guides/4_Projects_&_RAG_Guide_v1.0.md)** - Knowledge bases, retrieval
- **[9. Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md)** - State schema design

#### Decision Logic appears in:
- **[7. Frameworks Guide](../2_How_To_Guides/7_Frameworks_Guide_v1.0.md)** - Conceptual models
- **[9. Workflows Guide](../2_How_To_Guides/9_Workflows_Guide_v1.0.md)** - Design patterns (rules + AI hybrid)
- **[10. Automations Guide](../2_How_To_Guides/10_Automations_Guide_v1.0.md)** - n8n implementation
- **[11. Orchestration Guide](../2_How_To_Guides/11_Orchestration_Guide_v1.0.md)** - Optimization and refinement

#### Tool Integration appears in:
- **[2. Commands Guide](../2_How_To_Guides/2_Commands_Guide_v1.0.md)** - Built-in command invocation
- **[3. Skills Guide](../2_How_To_Guides/3_Skills_Guide_v1.0.md)** - Skill-based tools
- **[5. Agents Guide](../2_How_To_Guides/5_Agents_Guide_v1.0.md)** - Agent-based tool use
- **[6. Connectors & MCP Guide](../2_How_To_Guides/6_Connectors_MCP_Guide_v1.0.md)** - External service integration

---

## Quick Reference: Prerequisites Chain

```text
json
[1. Prompts] ← START HERE
    ↓
[2. Commands]  [12. Artifacts]* (optional parallel track)
    ↓
[3. Skills]
    ↓
[4. Projects & RAG]
    ↓
    → [5. Agents] 
                    ↓
    → [6. Connectors & MCP] →→ [7. Frameworks]
                                    ↓
                                [9. Workflows]
                                    ↓
                                [10. Automations]
                                    ↓
                                [11. Orchestration]

* [12. Artifacts] can be learned independently or in parallel with Phase 1
```markdown

---

## How to Use This Master Index

### 1. **Choose Your Entry Point**

**If you're new to AI:**
- Start with [By Learning Phase](#by-learning-phase)
- Follow Phase 1 completely
- Move through Phase 2, then Phase 3 as needed

**If you have a specific goal:**
- Go to [By Use Case](#by-use-case)
- Follow the recommended learning path
- Reference other guides as needed

**If you have limited time:**
- Check [By Reading Time](#by-reading-time)
- Choose guides matching your availability
- Come back to prerequisites when you hit limitations

**If you want to navigate by concept:**
- Use [By Topic](#by-topic) to find all guides covering a topic
- Check [Topic Crossmap](#topic-crossmap) to see connections

---

### 2. **Read the Guide**

Each guide follows this structure:
- **What You'll Learn** - Overview of the guide
- **Table of Contents** - Quick navigation within the guide
- **Core Concepts** - Foundation material
- **Practical Examples** - Real-world applications
- **Best Practices** - How to apply successfully
- **Common Patterns** - Reusable approaches

---

### 3. **Practice and Document**

As you work through guides:
1. Try the examples yourself
2. Document what works for your use case
3. Create your own skills, prompts, and workflows
4. Build your personal prompt library
5. Track progress in [System Wisdom](../5_System_Wisdom/)

---

### 4. **Come Back for Reference**

This Master Index helps you:
- Quickly find guides on specific topics
- Identify prerequisites before starting a guide
- Understand how guides connect
- See how concepts layer across guides
- Plan learning paths for your goals

---

## Related Documentation

- **[1_Start_Here.md](1_Start_Here.md)** - Introduction to the toolkit's philosophy and foundation
- **[3_Glossary_of_Key_Terms.md](3_Glossary_of_Key_Terms.md)** - Definitions of every acronym and key term used throughout the toolkit
- **[All How-To Guides](../2_How_To_Guides/)** - Complete guide repository
- **[AI & Human Capabilities](../3_AI_&_Human_Capabilities/)** - Actual skills, commands, and prompts to use
- **[Context Files](../4_Context_Files/)** - Internal identity and operational context (SuperContext, Preferences, OKRs)
- **[System Wisdom](../5_System_Wisdom/)** - System behavioral tracking and intelligence
- **[External Intelligence](../6_External_Intelligence/)** - Market signals, benchmarks, and external calibration (EIS)