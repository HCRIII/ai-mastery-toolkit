# Research Deep Dive Workflow

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for 01-research-deep-dive-workflow capabilities
**Status:** Final

---

## Description
## Purpose
Conduct comprehensive research on a topic, from initial exploration through synthesis and knowledge integration, creating permanent notes for long-term value.
## When to Use
- Starting research on a new technical or business topic
- Preparing for a major project or decision
- Building expertise in a domain area
- Creating authoritative content based on research
- Developing strategic insights from multiple sources
## Workflow Steps
### Phase 1: Initial Exploration (30-60 min)
**Step 1: Define Research Question**
- Prompt: *Manual - Clarify your research question*
- Input: Draft research question or topic area
- Output: Clear, focused research question
- Why: Prevents scope creep and keeps research targeted
**Step 2: Create Reading Plan**
- Prompt: `create_reading_plan`
- Input: Research question and any known key sources
- Output: Phased reading plan with core → extended → exploratory sources
- Why: Structures your research journey from foundations to depth
### Phase 2: Information Gathering (3-7 days)
**Step 3: Extract References**
- Prompt: `extract_references`
- Input: Initial articles, papers, or content on the topic
- Output: Comprehensive reference list with Zotero citations
- Why: Builds your source map before deep reading
**Step 4: Analyze Key Papers** (Repeat for each major source)
- Prompt: `analyze_paper`
- Input: Academic papers or research articles
- Output: Critical analysis with quality assessment and Zettelkasten notes
- Why: Evaluates source quality and extracts key insights
- Zettelkasten: Generates permanent note suggestions and research questions
**Step 5: Extract Wisdom** (For non-academic sources)
- Prompt: `extract_wisdom`
- Input: Books, long-form articles, podcasts transcripts
- Output: Structured extraction of ideas, insights, quotes, habits
- Why: Captures actionable insights from practitioner knowledge
- Zettelkasten: Links ideas to existing notes and projects
### Phase 3: Synthesis & Integration (2-4 hours)
**Step 6: Summarize Findings**
- Prompt: `create_summary`
- Input: All your analysis outputs from Steps 4-5
- Output: Consolidated summary of key findings
- Why: Integrates insights across multiple sources
**Step 7: Find Logical Fallacies** (Optional but recommended)
- Prompt: `find_logical_fallacies`
- Input: Arguments and claims from your research
- Output: Critical analysis of reasoning quality
- Why: Ensures you're not building on weak arguments
**Step 8: Extract Patterns**
- Prompt: `extract_patterns`
- Input: Combined research findings
- Output: Recurring themes, contradictions, and insights
- Why: Reveals deeper insights not visible in individual sources
### Phase 4: Application & Documentation (1-2 hours)
**Step 9: Extract Recommendations**
- Prompt: `extract_recommendations`
- Input: All research synthesis
- Output: Actionable recommendations for your context
- Why: Converts knowledge into action
**Step 10: Create Final Research Document**
- Prompt: `create_summary` or manual synthesis
- Input: All outputs from previous steps
- Output: Comprehensive research document
- Sections:
  - Executive summary
  - Research question and methodology
  - Key findings organized by theme
  - Quality assessment of sources
  - Patterns and insights
  - Recommendations
  - Zettelkasten permanent notes created
  - Research questions for future exploration
  - Full bibliography
### Phase 5: Knowledge Management Integration (30 min)
**Step 11: Create Permanent Notes**
- Tool: Your Zettelkasten system
- Input: Permanent note suggestions from Steps 4-5
- Output: Atomic notes with links to existing knowledge
- Why: Makes research findable and useful long-term
**Step 12: Link to Projects**
- Tool: Your GTD or project management system
- Input: Project relevance tags from workflow
- Output: Research linked to active projects
- Why: Ensures research informs actual work
## Expected Time Investment
- **Quick Research:** 4-6 hours (Steps 1, 2, 4x2, 6, 9, 11)
- **Standard Deep Dive:** 10-15 hours (All steps, 3-5 sources)
- **Comprehensive Investigation:** 20-30 hours (All steps, 8-12 sources)
## Success Indicators
 Research question clearly answered or refined
 5-10 permanent notes created and linked
 Clear recommendations for action
 Source quality assessed (not just accepted)
 Contradictions and gaps identified
 Future research questions documented
## Tips for Success
**Do:**
- Start with create_reading_plan to structure your approach
- Use analyze_paper for academic sources (rigorous quality check)
- Use extract_wisdom for practitioner/applied sources
- Create Zettelkasten notes as you go, not at the end
- Link research to active projects immediately
**Don't:**
- Skip the source quality assessment (Step 7)
- Accept claims without evaluating reasoning
- Forget to document research questions for future
- Let research sit without converting to permanent notes
- Research without a clear question or purpose
## Example Use Case
**Research Question:** "What does the research say about effective learning strategies for technical skills?"
**Workflow:**
1. Create reading plan → Get Ericsson (Deliberate Practice), Brown (Make It Stick), Oakley (Learning How to Learn)
2. Extract references → Build comprehensive source list
3. Analyze papers → Ericsson's research on expert performance
4. Extract wisdom → Insights from practitioner books
5. Summarize findings → Integrate across sources
6. Find fallacies → Check for overgeneralizations
7. Extract patterns → Spaced repetition appears in all sources
8. Extract recommendations → Create practice system for technical learning
9. Create Zettelkasten notes → Permanent notes on retrieval practice, deliberate practice, flow state
10. Link to projects → Tag with [[Project_Academy]]
## Related Workflows
- **Content Creation Pipeline:** Use this research as input for content creation
- **Weekly Review:** Schedule research time in capacity planning
- **Client Project Lifecycle:** Use for client project discovery
## Prompts Used
- create_reading_plan (02_Creation/Educational/)
- extract_references (03_Extraction/Structured_Data/)
- analyze_paper (01_Analysis/Research/)
- extract_wisdom (03_Extraction/Insights/)
- create_summary (06_Summarization/)
- find_logical_fallacies (04_Identification/)
- extract_patterns (03_Extraction/Insights/)
- extract_recommendations (03_Extraction/Insights/)

## When to Use
- As described in the prompt content
- Part of session management workflow
- For tracking and system updates

## Tags
`session` `tracking` `workflow`