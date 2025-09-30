# Content Creation Pipeline Workflow

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for 02-content-creation-pipeline-workflow capabilities
**Status:** Final

---

## Description
## Purpose
Transform research and expertise into high-quality published content (articles, essays, newsletters, presentations) with systematic quality control and brand consistency.
## When to Use
- Creating thought leadership content
- Developing educational materials
- Writing technical articles or blog posts
- Creating client-facing presentations
- Producing newsletter or social media content
## Workflow Steps
### Phase 1: Research & Planning (2-4 hours)
**Step 1: Research Deep Dive** (If needed)
- Workflow: Use Research Deep Dive Workflow first
- Input: Topic or question
- Output: Research synthesis with permanent notes
- Why: Ensures content is grounded in solid research
- Skip if: You're writing from existing expertise
**Step 2: Extract Wisdom** (From interviews or conversations)
- Prompt: `extract_wisdom`
- Input: Interview transcripts, recorded conversations, or your own notes
- Output: Structured insights, quotes, recommendations
- Why: Captures rich material that might otherwise be lost
**Step 3: Extract Patterns**
- Prompt: `extract_patterns`
- Input: Your research, notes, or expertise on topic
- Output: Key themes and recurring insights
- Why: Identifies your unique angle or perspective
### Phase 2: Content Structure (1-2 hours)
**Step 4: Find Hidden Message**
- Prompt: `find_hidden_message`
- Input: Your collected research and insights
- Output: Core message or thesis
- Why: Ensures content has clear point, not just information dump
**Step 5: Create Outline**
- Prompt: `write_essay` (for essay structure) or manual
- Input: Core message and key points
- Output: Logical outline with narrative arc
- Why: Provides structure before writing
**Step 6: Rate Content** (Concept check)
- Prompt: `rate_content`
- Input: Your outline and key arguments
- Output: Assessment of novelty, clarity, and value
- Why: Validates content is worth creating before investing time
### Phase 3: Writing (3-6 hours)
**Step 7: Write First Draft**
- Prompt (choose based on format):
  - `write_essay` - Long-form essay
  - `write_essay_pg` - Paul Graham style essay
  - `write_micro_essay` - Short-form content
  - `create_newsletter_entry` - Newsletter format
  - `create_formal_email` - Professional communication
- Input: Outline, research, key points
- Output: Complete first draft
- Why: Gets words on page without perfectionism
**Step 8: Check Agreement** (For persuasive pieces)
- Prompt: `check_agreement`
- Input: Your draft arguments
- Output: Analysis of argument structure
- Why: Ensures logical flow and persuasiveness
### Phase 4: Refinement & Quality (2-4 hours)
**Step 9: Improve Writing**
- Prompt: `improve_writing`
- Input: First draft
- Output: Enhanced version with better clarity and flow
- Why: Elevates prose quality systematically
**Step 10: Analyze Prose**
- Prompt: `analyze_prose`
- Input: Improved draft
- Output: Detailed feedback on style, structure, clarity
- Why: Identifies remaining weaknesses
**Step 11: Analyze Claims**
- Prompt: `analyze_claims`
- Input: Final draft
- Output: Assessment of claim strength and evidence
- Why: Ensures you're not making unsupported assertions
**Step 12: Find Logical Fallacies**
- Prompt: `find_logical_fallacies`
- Input: Final arguments
- Output: Identification of reasoning weaknesses
- Why: Prevents embarrassing logical errors before publication
### Phase 5: Brand & Polish (1-2 hours)
**Step 13: Check Brand** (If using brand guidelines)
- Prompt: Use brand-guidelines skill
- Input: Draft content
- Output: Brand-aligned version
- Why: Maintains consistent voice and messaging
**Step 14: Create Meta Content**
- Prompts:
  - `create_title` - Generate compelling titles
  - `create_summary` - Create executive summary or social posts
  - `extract_extraordinary_claims` - Pull attention-grabbing quotes
- Input: Final content
- Output: Titles, summaries, social media posts
- Why: Supports distribution and engagement
**Step 15: Final Rate Content**
- Prompt: `rate_content`
- Input: Polished final version
- Output: Quality assessment vs. initial concept
- Why: Confirms content achieved its goals
### Phase 6: Format & Publish (30-60 min)
**Step 16: Format for Platform**
- For presentations: Use `create_academy_presentation` (or pptx skill)
- For documents: Use docx skill with proper formatting
- For web: Use markdown or HTML artifact
- Why: Platform-appropriate formatting
**Step 17: Create Zettelkasten Notes** (Optional but recommended)
- Input: Published content
- Output: Permanent notes on key concepts
- Why: Ensures your own content feeds your knowledge system
## Expected Time Investment
- **Quick Content:** 3-5 hours (Steps 7, 9, 14, 16 only)
- **Standard Article:** 8-12 hours (All steps except Step 1)
- **Comprehensive Thought Leadership:** 15-20 hours (All steps including research)
## Success Indicators
 Content has clear, compelling message
 Arguments are logical and well-supported
 Writing quality is high (clear, concise, engaging)
 Brand voice is consistent
 Meta content ready for distribution
 Quality rating meets your standards (typically 7+/10)
## Tips for Success
**Do:**
- Start with research if topic is new to you
- Find your unique angle (Step 3: Extract Patterns)
- Validate concept before writing (Step 6: Rate Content)
- Run all quality checks (Steps 9-12)
- Create distribution-ready meta content
**Don't:**
- Skip the outline phase (leads to rambling)
- Publish without checking claims and fallacies
- Forget to align with brand guidelines
- Write without a clear core message
- Skip the second Rate Content check
## Example Use Case
**Content Goal:** Write thought leadership article on "Why Most AI Implementations Fail"
**Workflow:**
1. Research Deep Dive → Study failed AI projects, success factors
2. Extract Wisdom → Interview experts, extract insights
3. Extract Patterns → Identify common failure modes
4. Find Hidden Message → "AI fails when treated as technology project instead of transformation"
5. Create Outline → Structure around 5 key failure patterns
6. Rate Content → Validate concept (8/10 novelty)
7. Write Essay → Create first draft (2500 words)
8. Improve Writing → Enhance clarity and flow
9. Analyze Prose → Refine structure based on feedback
10. Analyze Claims → Verify all assertions are supported
11. Find Fallacies → Fix overgeneralizations
12. Create Meta → Generate 5 title options, social posts
13. Final Rate → Confirm quality (8/10)
14. Format → Polish for Medium publication
15. Create Zettelkasten notes → Permanent notes on AI transformation patterns
## Related Workflows
- **Research Deep Dive:** Use as input for content
- **Client Project Lifecycle:** Adapt for client deliverables
- **Weekly Review:** Schedule content creation time
## Prompts Used
### Research Phase
- extract_wisdom (03_Extraction/Insights/)
- extract_patterns (03_Extraction/Insights/)
### Structure Phase
- find_hidden_message (04_Identification/)
- rate_content (05_Evaluation/)
### Writing Phase
- write_essay (02_Creation/Writing/)
- write_essay_pg (02_Creation/Writing/)
- write_micro_essay (02_Creation/Writing/)
- create_newsletter_entry (02_Creation/Communication/)
- create_formal_email (02_Creation/Communication/)
- check_agreement (04_Identification/)
### Refinement Phase
- improve_writing (02_Creation/Writing/)
- analyze_prose (01_Analysis/Content/)
- analyze_claims (01_Analysis/Content/)
- find_logical_fallacies (04_Identification/)
### Polish Phase
- create_title (02_Creation/)
- create_summary (06_Summarization/)
- extract_extraordinary_claims (03_Extraction/Specific/)

## When to Use
- As described in the prompt content
- Part of session management workflow
- For tracking and system updates

## Tags
`session` `tracking` `workflow`