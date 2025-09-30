# How-To Guides — AI Mastery Toolkit v4

**Created:** 2026-02-08
**Last Updated:** 2026-02-28
**Purpose:** Navigation and learning path for all How-To Guides — AI Mastery Toolkit v4
**Total Files:** 14 (12 guides + README + INDEX)

---

**Comprehensive guides for mastering AI capabilities and workflows.**

This folder contains detailed guides that teach you how to use specific AI capabilities, tools, and patterns. Each guide provides both conceptual understanding and practical application.

**The guides are numbered to reflect increasing complexity—follow the sequence to build mastery systematically.**

---

## Learning Complexity Gradient

These guides follow a deliberate progression from foundational skills to advanced capabilities. Each number represents a step in your mastery journey.

### Phase 1: Building Blocks (Foundation)

**Master these first—they're the foundation for everything else.**

#### [0. Documentation Standards Guide](0_Documentation_Standards_Guide_v1.0.md) ✅ Complete
**The complete guide to creating AI-optimized documentation.**
- Why markdown format matters for AI collaboration
- Creating your first file with proper metadata
- Organizing multiple files (INDEX files, folder structure)
- Managing large collections (100-1,000+ files)
- Chunking strategy for large documents
- Integration with all other toolkit capabilities
- **🎯 Start here FIRST** - this is the foundation before everything else

#### [1. Prompts Guide](1_Prompts_Guide_v1.0.md) ✅ Complete
**The complete guide to communicating effectively with AI.**
- Mental models for understanding AI (3 levels, 9 models)
- The Two-Axis Framework (Prompt Design + Context Density)
- Five Levels of Zero-Context Prompting (35 prompt types)
- Structured reasoning and chain-style techniques
- Output improvement techniques
- Practical application frameworks
- **Essential** for effective AI communication

#### [2. Commands Guide](2_Commands_Guide_v1.0.md) ✅ Complete
**Invoke capabilities through commands and slash commands.**
- What commands are and how they work
- All 16 built-in commands
- Explicit vs automatic invocation
- Creating custom commands via skills, prompts, and shortcuts
- **Quick reference** for invoking capabilities

#### [3. Skills Guide](3_Skills_Guide_v1.0.md) ✅ Complete
**Learn and use built-in skills, then create your own.**
- What skills are and how they work
- All 16 built-in system skills by category
- Using the skill-creator skill
- Creating custom skills
- Best practices and examples
- **Essential** for understanding Claude's capability system

#### [4. Projects & RAG Guide](4_Projects_&_RAG_Guide_v1.0.md) ✅ Complete
**Maintain persistent context, memory, and continuity across sessions.**
- What Projects are and why they matter
- Creating and organizing projects
- Building project knowledge bases
- Understanding RAG (Retrieval Augmented Generation)
- Managing context and memory
- Integration with Skills and Commands
- **Critical** for long-term AI collaboration

---

### Phase 2: Expanding AI Capabilities

**Build on the foundation by extending what AI can do.**

#### [5. Agents Guide](5_Agents_Guide_v1.0.md) ✅ Complete
**Spawn specialized subagents to handle complex multi-step tasks.**
- Understanding agent types (Bash, Explore, Plan, General-Purpose)
- When to use agents vs direct tools
- Parallel and sequential agent execution
- Agent coordination patterns
- **Powerful** for parallelization and context isolation

#### [6. Connectors & MCP Guide](6_Connectors_MCP_Guide_v1.0.md) ✅ Complete
**Connect Claude to external services, tools, and data sources.**
- What Model Context Protocol (MCP) is
- Using built-in connectors (Slack, GitHub, Google Drive, etc.)
- Installing and configuring MCP servers
- Building custom MCP servers with FastMCP or TypeScript
- **Essential** for integration with your workflow

---

### Phase 3: Complex Task Creation

**Master sophisticated workflows and systematic orchestration of AI, humans, and systems.**

#### [7. Frameworks Guide](7_Frameworks_Guide_v1.0.md) ✅ Complete
**Understanding orchestration conceptually - the two axes and 5-block model.**
- What orchestration is and when to use it
- Horizontal axis: Deterministic ↔ Dynamic (rules vs AI judgment)
- Vertical axis: Simple ↔ Complex (single-step vs long-running)
- The 5-block model: Trigger → Intake → Decision → Action → Review
- Core vocabulary and Alex (lead generation) example introduction
- **Conceptual foundation** for all orchestration work

#### [8. Specifications Guide](8_Specifications_Guide_v1.0.md) ✅ Complete
**What it covers:** The 6-phase specification lifecycle (Define → Research → Specify → Review → Verify & Validate → Baseline), the critical distinction between verification and validation, the Specification Document Standard and Template, and how specifications serve as the precision layer between Frameworks and Workflows.
**What you'll be able to do:** Write complete, verifiable specification documents for any system, workflow, or deliverable before building begins.
**Time to complete:** 1–2 hours
**Key resources:** Schema, Template, and worked example in `3_AI_&_Human_Capabilities/8_Specifications/`
**Prerequisites:** [1-7. All Phase 1, Phase 2, and Frameworks Guide](7_Frameworks_Guide_v1.0.md)
**Related guides:** Extends [7. Frameworks Guide](7_Frameworks_Guide_v1.0.md), required before [9. Workflows Guide](9_Workflows_Guide_v1.0.md)

#### [9. Workflows Guide](9_Workflows_Guide_v1.0.md) ✅ Complete
**Designing complete orchestration workflows before building them.**
- State schema design (what data persists)
- Prompt engineering for orchestration contexts
- Decision logic mapping (rules + AI hybrid)
- Error handling and monitoring strategies
- Complete Alex workflow design document with production-ready prompts
- Workflow design template for any use case
- **Blueprint creation** for implementation teams

#### [10. Automations Guide](10_Automations_Guide_v1.0.md) ✅ Complete
**Implementing orchestrations in n8n with node-by-node guidance.**
- n8n fundamentals and architecture
- Building all 5 blocks in n8n (triggers, intake, decisions, actions, review)
- State management for long-running processes
- Complete Alex implementation (14 nodes with full configuration)
- Testing, debugging, and error recovery
- Platform comparison (n8n vs Zapier vs Make vs custom code)
- **Technical implementation** for engineers

#### [11. Orchestration Guide](11_Orchestration_Guide_v1.0.md) ✅ Complete
**Operating, monitoring, and optimizing live orchestration systems.**
- Metrics that matter (success, performance, cost, quality)
- Monitoring strategies (real-time, daily, weekly)
- Reading and interpreting data from dashboards
- Optimization techniques for both horizontal and vertical orchestration
- Scaling considerations for growth
- Feedback loops for continuous improvement
- Complete Alex operations dashboard with 30-day metrics
- Real output examples and quality assessment
- **Operations and continuous improvement** for system owners

---

### Phase 4: Specialty Skill (Vibe Coding)

**A powerful specialty capability for rapid prototyping and interactive deliverables.**

#### [12. Artifacts Guide](12_Artifacts_Guide_v1.0.md) ✅ Complete
**Create interactive documents, applications, and visualizations with Claude.**
- What artifacts are and when Claude creates them
- Six artifact types: Markdown, HTML, React, SVG, Mermaid, PDF
- Decision matrix: Artifacts vs. Files vs. Output
- Creating simple artifacts (5-10 minute tutorials)
- Creating complex multi-component artifacts
- Using web-artifacts-builder skill for elaborate projects
- Eight common patterns with complete code examples
- Best practices for performance, UX, and accessibility
- Troubleshooting guide for 9 common issues
- **Vibe coding** for rapid prototyping and deliverables

---

## How to Use These Guides

### The Learning Path

**Follow the numbered sequence for systematic mastery:**

**🎯 Phase 1: Building Blocks (Guides 0-4)**
Start here. These are the foundation for everything else. Work through them in order:
0. **[Documentation Standards Guide](0_Documentation_Standards_Guide_v1.0.md)** - Create AI-optimized documentation (START HERE FIRST)
1. **[Prompts Guide](1_Prompts_Guide_v1.0.md)** - Learn to communicate with AI
2. **[Commands Guide](2_Commands_Guide_v1.0.md)** - Learn to invoke capabilities
3. **[Skills Guide](3_Skills_Guide_v1.0.md)** - Understand built-in capabilities
4. **[Projects & RAG Guide](4_Projects_&_RAG_Guide_v1.0.md)** - Maintain context across sessions

**🔧 Phase 2: Expanding Capabilities (Guides 5-6)**
Once you have the foundation, extend what AI can do:
5. **[Agents Guide](5_Agents_Guide_v1.0.md)** - Spawn specialized subagents for complex tasks
6. **[Connectors & MCP Guide](6_Connectors_MCP_Guide_v1.0.md)** - Integrate with external tools and services

**⚙️ Phase 3: Complex Task Creation (Guides 7-11)**
Master sophisticated workflows and systematic approaches:
7. **[Frameworks Guide](7_Frameworks_Guide_v1.0.md)** - Structured thinking and analysis
8. **[Specifications Guide](8_Specifications_Guide_v1.0.md)** - Define systems before building
9. **[Workflows Guide](9_Workflows_Guide_v1.0.md)** - End-to-end processes
10. **[Automations Guide](10_Automations_Guide_v1.0.md)** - Scheduled and recurring tasks
11. **[Orchestration Guide](11_Orchestration_Guide_v1.0.md)** - Multi-step coordination

**✨ Phase 4: Specialty Skill (Guide 12)**
A powerful capability for rapid prototyping:
12. **[Artifacts Guide](12_Artifacts_Guide_v1.0.md)** - Interactive deliverables and vibe coding

### Alternative Paths

**If you're already experienced with AI:**
- Still start with [0. Documentation Standards Guide](0_Documentation_Standards_Guide_v1.0.md) - it's quick but critical
- Then [1. Prompts Guide](1_Prompts_Guide_v1.0.md) to learn Claude-specific patterns
- Jump to [5. Agents Guide](5_Agents_Guide_v1.0.md) if you need specialized subagents
- Go to [6. Connectors & MCP Guide](6_Connectors_MCP_Guide_v1.0.md) for tool integration

**If you have a specific goal:**
- **Want to automate repetitive tasks?** → Guides 1-3, then 9
- **Building a complex system?** → Guides 1-6, then 11
- **Creating interactive prototypes?** → Guides 1-4, then 11
- **Integrating with external tools?** → Guides 1-4, then 6

**Key Principle:** Even if you skip ahead, return to earlier guides when you hit limitations. The foundation is crucial.

---

## Guide Status Legend

- ✅ **Complete** - Comprehensive guide available
- 🔨 **Planned** - Placeholder created, content in development
- 📝 **In Progress** - Actively being developed
- 🔄 **Under Review** - Draft complete, being refined

---

## Integration with Other Folders

**These guides connect to:**
- **[1_Toolkit_Documentation](../1_Toolkit_Documentation/)** - Overall toolkit structure and philosophy
- **[3_AI_&_Human_Capabilities](../3_AI_&_Human_Capabilities/)** - Actual Skills, Commands, Prompts you'll use
- **[4_Context_Files](../4_Context_Files/)** - Supporting context materials
- **[5_System_Wisdom](../5_System_Wisdom/)** - Behavioral tracking, intelligence, and pattern maturation

---

## Philosophy

**These guides follow the toolkit's core principles:**

1. **Glass Box Transparency** - Show how things actually work
2. **Learn Built-In First** - Master existing capabilities before creating new ones
3. **Depth Before Breadth** - Master one area deeply, then lateralize
4. **Practical Application** - Real examples, not theoretical concepts
5. **Progressive Complexity** - Start simple, add sophistication as needed

**Learning Path:**
- Understand → Practice → Document → Share → Teach

---

## Contributing Your Learning

As you work through these guides and discover what works for you:

1. **Document your insights** in your Session Working Files
2. **Create custom skills** based on patterns you discover
3. **Build your prompt library** with techniques that work for your use cases
4. **Track your progress** in System Wisdom and your SuperContext

**Remember:** The best guide is the one you write for yourself based on real practice. These guides are starting points—your documented experience is the real mastery.

---

## Getting Help

**If you're stuck:**
1. Check the relevant guide's Table of Contents
2. Look for examples in [3_AI_&_Human_Capabilities](../3_AI_&_Human_Capabilities/)
3. Review [1_Start_Here_v4.md](../0_Start_Here/1_Start_Here_v4.md) for foundational concepts
4. Ask Claude to explain concepts from the guides
5. Document your questions and solutions in your Learning Notes

**Next Steps:**
- **New to AI?** Start with [0. Documentation Standards Guide](0_Documentation_Standards_Guide_v1.0.md), then follow the numbered sequence
- **Experienced?** Still read Guide 0 (it's quick), then review Phase descriptions and jump to what you need
- **Specific goal?** Check the "If you have a specific goal" section for targeted learning paths

**Remember:** Guide 0 is the foundation for everything. The numbers represent increasing complexity—each phase builds on the previous. When in doubt, start from Guide 0.
