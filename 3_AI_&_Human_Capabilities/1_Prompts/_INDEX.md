# Prompt Library Index v4.0

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Proven prompt pattern with examples and usage guidance
**Status:** Final

---
## Comprehensive AI Prompt Collection

**Last Updated:** February 6, 2026
**Total Prompts:** 270+ (22 Core + 242 Fabric Collection + Custom Domain)
**Structure:** 16 Categories, 50+ Subcategories
**Convention:** kebab-case for slash command compatibility

---

##  Quick Navigation

### By Task Type
- **Starting session?** → [00-core-system](#00-core-system)
- **Need to analyze something?** → [01-analysis](#01-analysis)
- **Want to create content?** → [02-creation](#02-creation)
- **Extract specific info?** → [03-extraction](#03-extraction)
- **Summarize content?** → [04-summarization](#04-summarization)
- **Explain something complex?** → [05-explanation](#05-explanation)
- **Improve existing work?** → [06-improvement](#06-improvement)
- **Evaluate quality?** → [07-evaluation](#07-evaluation)
- **Transform format?** → [08-transformation](#08-transformation)

### By Domain
- **Security work?** → [09-cybersecurity](#09-cybersecurity)
- **Software development?** → [10-software-development](#10-software-development)
- **Academic research?** → [11-research-academic](#11-research-academic)
- **Business strategy?** → [12-business-strategy](#12-business-strategy)
- **Personal growth?** → [13-personal-development](#13-personal-development)
- **Client work?** → [14-client-work](#14-client-work)
- **Academy content?** → [15-academy](#15-academy)

---

##  Library Structure

```
Prompt_Library/
 00-core-system/          [22 prompts] Session management and system workflows
 01-analysis/             [35 prompts] Analyze content, systems, research
 02-creation/             [71 prompts] Generate new content and documents
 03-extraction/           [43 prompts] Pull insights and structured data
 04-summarization/        [16 prompts] Condense to essential points
 05-explanation/          [8 prompts] Make complex topics clear
 06-improvement/          [11 prompts] Enhance existing content
 07-evaluation/           [10 prompts] Assess quality and provide ratings
 08-transformation/       [7 prompts] Convert formats and restructure
 09-cybersecurity/        [3+ prompts] Security-specialized prompts
 10-software-development/ [3+ prompts] Development-specialized prompts
 11-research-academic/    [6 prompts] Academic research tools
 12-business-strategy/    [8 prompts] Business planning frameworks
 13-personal-development/ [16 prompts] Self-assessment and growth
 14-client-work/          [5 prompts] Client deliverables and coaching
 15-academy/              [5 prompts] Academy curriculum and content
```

---

## 00-core-system
**Purpose:** Session management and system workflows
**Total:** 22 prompts across 5 subcategories

**Structure:**
- **Session operation prompts (16 prompts)** - Beginning, mid-session, ending, maintenance — at top level of `00-core-system/` (flat)
  - Key: `/session-startup`, `/mid-iterate-on-output`, `/ending-master-update`, `/weekly-review`
- **efficiency/** (2 prompts) - Workflow acceleration and approval optimization
  - Key: `/compound-approval`, `/workflow-acceleration`
- **workflow-chains/** (5 prompts) - Multi-step workflows across categories
  - Key: `/research-deep-dive`, `/content-creation-pipeline`, `/client-project-lifecycle`, `/weekly-review`
- **official-pattern-template/** (1 prompt) - Pattern documentation template
- **suggest-pattern/** (1 prompt) - Pattern suggestion system

**Naming Convention:** All prompts use kebab-case for direct slash command translation
**Focus:** System operations only - domain-specific prompts are in respective categories

---

## 01_Analysis
**Purpose:** Analyze and evaluate content, systems, and ideas
**Total:** 34 prompts

**Subcategories:** Business/, Content/, Research/, Security/, Technical/

**Top Prompts:**
- analyze_paper - Research paper analysis
- analyze_claims - Truth and argument evaluation
- analyze_prose - Writing quality assessment
- analyze_threat_report - Security threat analysis
- analyze_logs - Technical log analysis

---

## 02_Creation
**Purpose:** Generate new content, documents, and outputs
**Total:** 71 prompts

**Subcategories:** Business_Documents/, Content/, Educational/, Security/, Technical/, Visualizations/

**Top Prompts:**
- create_summary - Universal summarization
- create_quiz - Educational content generation
- create_prd - Product requirements documents
- create_mermaid_visualization - Visual diagrams
- create_git_diff_commit - Git commit messages

---

## 03_Extraction
**Purpose:** Pull specific information from content
**Total:** 43 prompts

**Subcategories:** Insights/, Structured_Data/, Content_Elements/, Security/

**Top Prompts:**
- extract_wisdom - Extract key insights from content
- extract_ideas - Pull main ideas
- extract_article_wisdom - Comprehensive content extraction
- extract_predictions - Find predictions in content
- extract_questions - Extract all questions

---

## 04_Summarization
**Purpose:** Condense content to essential points
**Total:** 16 prompts

**Subcategories:** General/, Research/, Business/, Technical/

**Top Prompts:**
- summarize - General purpose summarization
- summarize_paper - Academic paper summaries
- summarize_meeting - Meeting notes
- summarize_git_changes - Code change summaries

---

## 05_Explanation
**Purpose:** Make complex topics understandable
**Total:** 8 prompts

**Top Prompts:**
- explain_code - Code functionality explanation
- explain_math - Mathematical concepts
- explain_terms - Glossary creation
- explain_project - Project documentation

---

## 06_Improvement
**Purpose:** Enhance and refine existing content
**Total:** 11 prompts

**Subcategories:** Writing/, Technical/, Formatting/

**Top Prompts:**
- improve_writing - Writing enhancement
- improve_academic_writing - Academic prose improvement
- clean_text - Text formatting cleanup
- review_code - Code quality improvement

---

## 07_Evaluation
**Purpose:** Assess quality and provide ratings
**Total:** 10 prompts

**Subcategories:** Content/, Quality/, Assessment/

**Top Prompts:**
- rate_content - Content quality scoring
- rate_ai_response - AI output evaluation
- check_agreement - Contract/agreement review
- find_logical_fallacies - Argument evaluation

---

## 08_Transformation
**Purpose:** Convert formats and restructure
**Total:** 7 prompts

**Subcategories:** Format_Conversion/, Translation/, Restructuring/

**Top Prompts:**
- convert_to_markdown - Markdown conversion
- compare_and_contrast - Comparison matrices
- translate - Language translation

---

## 09_Cybersecurity
**Purpose:** Security-specialized prompts
**Total:** 3 specialized + 20+ in functional categories

Most cybersecurity prompts are distributed across:
- 01_Analysis/Security/ (7 prompts)
- 02_Creation/Security/ (7 prompts)
- 03_Extraction/Security/ (3 prompts)

---

## 10_Software_Development
**Purpose:** Development-specialized prompts
**Total:** 3 specialized + 15+ in functional categories

Most development prompts are distributed across:
- 01_Analysis/Technical/
- 02_Creation/Technical/
- 04_Summarization/Technical/
- 05_Explanation/

---

## 11_Research_Academic
**Purpose:** Academic research and systematic thinking
**Total:** 6 specialized + 10+ in functional categories

**Key Tools:**
- DSRP analysis (Distinctions, Systems, Relationships, Perspectives)
- Philosophical analysis frameworks
- Academic interview preparation

---

## 12_Business_Strategy
**Purpose:** Strategic planning and recommendations
**Total:** 7 specialized + 15+ in functional categories

**Key Frameworks:**
- McKinsey 7S Strategy
- Job Stories methodology
- Various recommendation engines

---

## 13_Personal_Development
**Purpose:** Self-assessment and personal growth
**Total:** 16 prompts

**Subcategories:** Self_Assessment/, Growth_Planning/, Reflection_Tools/

**Key Tools:**
- Year in review
- Career planning (H3 framework)
- Blindspot identification
- Personal threat modeling

---

## 14_Client_Work
**Purpose:** Client deliverables and coaching
**Total:** 5 prompts

**Key Tools:**
- create_client_report - Comprehensive client reports
- create_client_prd - Product Requirements Documents
- summarize_client_session - Session documentation
- analyze_client_feedback - Feedback synthesis

**Integration:** SuperContext-aware for personalized outputs. See also: Workflow_Chains/03_Client_Project_Lifecycle_Workflow.md

---

## 15_Academy
**Purpose:** Cognitive Architecture Academy curriculum and content
**Total:** 5 prompts

**Key Tools:**
- create_academy_curriculum - Module and sequence design
- create_academy_presentation - Presentation materials
- create_academy_quiz - Mastery-based assessments
- create_academy_reading_plan - Spaced repetition reading plans
- analyze_coaching_approach - Coaching methodology evaluation

**Foundations:** Flow State (Kotler), Deliberate Practice (Ericsson), Mastery-Based Learning

---

##  Search Tips

### By Task
- **Understand:** 05-explanation/, 03-extraction/Insights/
- **Create:** 02-creation/ (by type)
- **Evaluate:** 07-evaluation/
- **Fix/Improve:** 06-improvement/
- **Insights:** 03-extraction/
- **Condense:** 04-summarization/

### By Domain
- **Code:** 10-software-development/ + 02-creation/Technical/
- **Security:** 09-cybersecurity/ + 01-analysis/Security/
- **Business:** 12-business-strategy/ + 02-creation/Business_Documents/
- **Research:** 11-research-academic/ + 01-analysis/Research/

---

##  Pro Tips

1. **Check READMEs:** Each category has `_README.md` with detailed guidance
2. **Slash Commands:** All prompts can be invoked as slash commands using folder names
3. **Multiple Locations:** Domain-specific prompts are cross-referenced in functional categories
4. **Chain Prompts:** Combine prompts for powerful workflows (e.g., extract → analyze → create)
5. **Start with 00-core-system:** Your personal session management prompts
6. **Explore Subcategories:** Browse subcategories for specialized prompts

---

**Version History:**
- v1.0 (Pre-Feb 5) - Original 22 prompts in 4 categories
- v2.0 (Feb 5, 2026) - Reorganized into functional structure
- v3.0 (Feb 6, 2026) - Integrated 242 Fabric prompts, 14 categories total
- v3.1 (Feb 6, 2026) - Core_System cleanup, added Client_Work and Academy categories (16 total)
- v4.0 (Feb 6, 2026) - Full kebab-case standardization for slash command compatibility
  - All 16 categories renamed to kebab-case
  - All Core_System prompts converted to folder structure (README.md + system.md)
  - Consistent naming: folder names = slash command names

**Last Update:** February 6, 2026 - Full kebab-case standardization complete