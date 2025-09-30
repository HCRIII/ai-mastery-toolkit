# Low-Value Prompts Review

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Proven prompt pattern with examples and usage guidance
**Status:** Final

---

## Purpose
This document identifies prompts in the library that may be candidates for archiving or deprioritization based on low practical value, excessive niche focus, redundancy, or poor design.

**Note:** These are NOT being archived automatically. This is a review list for you to evaluate and decide what action to take.

## Analysis Date
February 6, 2026

## Total Prompts Analyzed
260+ prompts across 14 categories

---

## Category 1: Excessive Niche / Limited Use Cases

These prompts are so narrowly focused that they're unlikely to be useful except in very rare circumstances:

### Very Low Usage Likelihood (Archive Candidates)

**analyze_bill / analyze_bill_short**
- Location: 01_Analysis/Financial/
- Issue: Too specific to legislative bill analysis, very rare use case
- Alternative: Use analyze_paper or analyze_proposition instead
- Recommendation: Archive

**analyze_cfp_submission**
- Location: 01_Analysis/Content/
- Issue: Only useful if submitting to Call for Papers for conferences
- Alternative: Use analyze_paper or rate_content instead
- Recommendation: Archive

**analyze_discord_structure**
- Location: 01_Analysis/Other/
- Issue: Hyper-specific to Discord server organization
- Alternative: Manual Discord review or general analyze_claims
- Recommendation: Archive

**analyze_email_headers**
- Location: 09_Cybersecurity/Forensics/
- Issue: Very technical, extremely narrow use case
- Alternative: Specialized security tools
- Recommendation: Archive unless you do regular security forensics

**analyze_military_strategy**
- Location: 01_Analysis/Other/
- Issue: Niche historical/military analysis use case
- Alternative: analyze_paper for academic military studies
- Recommendation: Archive

**analyze_patent**
- Location: 01_Analysis/Other/
- Issue: Only relevant if regularly working with patents
- Alternative: analyze_paper for technical analysis
- Recommendation: Archive unless doing patent work

**analyze_terraform_plan**
- Location: 10_Software_Development/DevOps/
- Issue: Hyper-specific to one IaC tool
- Alternative: Terraform's built-in plan analysis
- Recommendation: Archive unless actively using Terraform

**analyze_threat_report / analyze_threat_report_cmds / analyze_threat_report_trends**
- Location: 09_Cybersecurity/Threat_Analysis/
- Issue: Three similar prompts for specialized security work
- Alternative: Consolidate into one if keeping
- Recommendation: Archive all three unless doing active threat intelligence

**create_quiz_for_website**
- Location: 02_Creation/Marketing/
- Issue: Very specific to one content type
- Alternative: create_academy_quiz or manual quiz creation
- Recommendation: Archive

**create_reading_plan_lse**
- Location: 02_Creation/Educational/
- Issue: Duplicate of create_reading_plan, unclear what LSE adds
- Alternative: create_reading_plan
- Recommendation: Archive (redundant)

**explain_docs**
- Location: 07_Explanation/Technical/
- Issue: Too generic, same as explain_code or explain_project
- Alternative: Use more specific explanation prompts
- Recommendation: Archive (redundant with explain_code)

**export_data_as_csv**
- Location: 03_Extraction/Structured_Data/
- Issue: This is a tool function, not a prompt task
- Alternative: Use spreadsheet tools or code
- Recommendation: Archive (not appropriate for prompt library)

**get_wow_per_minute**
- Location: 01_Analysis/Content/
- Issue: Unclear value, appears to be content engagement metric
- Alternative: analyze_prose or rate_content
- Recommendation: Archive (low clarity and value)

---

## Category 2: Overly Specific Variations

These prompts are minor variations of better general-purpose prompts:

**analyze_paper_simple**
- Location: 01_Analysis/Research/
- Issue: Redundant with analyze_paper
- Alternative: analyze_paper with custom instructions for simpler output
- Recommendation: Archive (use analyze_paper)

**analyze_prose_json / analyze_prose_pinker**
- Location: 01_Analysis/Content/
- Issue: Format-specific versions of analyze_prose
- Alternative: analyze_prose with output format instructions
- Recommendation: Archive both (use analyze_prose)

**answer_interview_question_competitive**
- Location: 02_Creation/Communication/
- Issue: Minor variation of answer_interview_question
- Alternative: answer_interview_question with competitive framing
- Recommendation: Archive

**create_coding_project_js / create_coding_project_svelte**
- Location: 10_Software_Development/Code_Generation/
- Issue: Language-specific variations
- Alternative: create_coding_project with language specified
- Recommendation: Archive both (use general create_coding_project)

**create_keynote / create_keynote_summary**
- Location: 02_Creation/Educational/
- Issue: Keynote-specific when create_presentation exists
- Alternative: create_presentation or create_academy_presentation
- Recommendation: Archive both

**create_video_intro_summary / create_video_chapter_summary**
- Location: 06_Summarization/Video/
- Issue: Too specific, covered by summarize_video
- Alternative: summarize_video
- Recommendation: Archive both

**improve_academic_writing / improve_report_finding**
- Location: 02_Creation/Writing/
- Issue: Variations of improve_writing
- Alternative: improve_writing with context
- Recommendation: Archive both

**write_essay_pg**
- Location: 02_Creation/Writing/
- Issue: Paul Graham style is already in write_essay
- Alternative: write_essay with style guidance
- Recommendation: Keep if you love PG style, otherwise archive

---

## Category 3: Poor Design or Unclear Value

These prompts are poorly defined or have unclear practical value:

**capture_thinkers_work**
- Location: 03_Extraction/Insights/
- Issue: Unclear what this does differently from extract_wisdom
- Alternative: extract_wisdom
- Recommendation: Archive

**check_ethics**
- Location: 05_Evaluation/Quality/
- Issue: Vague, ethicsare domain-specific
- Alternative: analyze_claims or find_logical_fallacies
- Recommendation: Archive

**create_threat_scenarios**
- Location: 09_Cybersecurity/Threat_Analysis/
- Issue: Without cybersecurity context, low value
- Alternative: analyze_risk or t_red_team_thinking
- Recommendation: Archive unless doing security work

**get_youtube_rss**
- Location: 03_Extraction/Structured_Data/
- Issue: This is a technical API task, not a prompt
- Alternative: Use YouTube API or tools
- Recommendation: Archive (not appropriate for prompt library)

**official_pattern_template**
- Location: 00_Core_System/ (likely)
- Issue: Meta-prompt for pattern creation
- Alternative: skill-creator skill
- Recommendation: Archive

**provide_guidance**
- Location: Multiple/
- Issue: Too vague to be useful
- Alternative: More specific prompts based on need
- Recommendation: Archive

**recommend_artists**
- Location: 02_Creation/Other/
- Issue: Very niche creative use case
- Alternative: General content creation or research prompts
- Recommendation: Archive

**solve_with_cot** (Chain of Thought)
- Location: Likely 08_Problem_Solving/
- Issue: CoT is a technique, not a distinct task
- Alternative: Apply CoT to any prompt
- Recommendation: Archive

**summarize_git_changes / summarize_git_diff**
- Location: 10_Software_Development/
- Issue: Git has built-in tools for this
- Alternative: Git log/diff with formatting
- Recommendation: Archive both

---

## Category 4: Deprecated or Superseded

These prompts are superseded by better alternatives:

**create_ai_jobs_analysis**
- Location: 01_Analysis/Business/
- Issue: Time-sensitive topic, likely outdated
- Alternative: General analyze_tech_impact
- Recommendation: Archive

**create_idea_compass**
- Location: 02_Creation/Planning/
- Issue: Specific framework that may be dated
- Alternative: extract_patterns or visualize concepts manually
- Recommendation: Archive

**label_and_rate**
- Location: 05_Evaluation/
- Issue: Generic task better handled by rate_content
- Alternative: rate_content
- Recommendation: Archive

**raw_query**
- Location: Likely meta-category
- Issue: Generic query prompt, no clear value
- Alternative: Specific prompts for specific tasks
- Recommendation: Archive

---

## Category 5: Redundant with Skills

These prompts are redundant with skills that do the same job better:

**create_aphorisms / create_better_frame / create_hormozi_offer / create_show_intro**
- Location: 02_Creation/
- Issue: Highly specific content types
- Alternative: Use content creation workflows or skills
- Recommendation: Archive if not regularly used

**create_logo / create_art_prompt / create_ttv_intro**
- Location: 02_Creation/Marketing/ or Images/
- Issue: Better handled by canvas-design skill or AI image tools
- Alternative: canvas-design skill, DALL-E, Midjourney
- Recommendation: Archive

---

## Summary Statistics

**Total Low-Value Candidates:** ~50-60 prompts (approximately 20-25% of library)

**Breakdown by Reason:**
- Excessive Niche: ~15 prompts
- Overly Specific Variations: ~15 prompts
- Poor Design/Unclear Value: ~10 prompts
- Deprecated/Superseded: ~8 prompts
- Redundant with Skills: ~10 prompts

---

## Recommendations by Priority

### High Priority to Archive (Do First)
These add little value and create clutter:

1. Export_data_as_csv (not a prompt task)
2. Get_youtube_rss (not a prompt task)
3. Raw_query (no clear value)
4. Official_pattern_template (superseded by skill-creator)
5. All language-specific coding variations (use general version)
6. Analyze_prose_json / analyze_prose_pinker (format variations)
7. Create_reading_plan_lse (duplicate)
8. Explain_docs (redundant)

### Medium Priority to Archive (Review Next)
Useful in specific situations but rarely:

1. All military/patent/bill analysis prompts
2. Terraform-specific prompt
3. All three threat report prompts (or consolidate to one)
4. Discord structure analysis
5. Email headers analysis
6. Create_quiz_for_website
7. Summarize_git_changes / summarize_git_diff

### Low Priority (Evaluate Based on Your Usage)
Keep if you use them, archive if you don't:

1. All cybersecurity prompts (keep if doing security work)
2. All DevOps-specific prompts (keep if doing DevOps)
3. Write_essay_pg (keep if you love PG's style)
4. Create_keynote variants (keep if presenting often)
5. All highly specialized content creation prompts

---

## Next Steps

1. **Review this list** against your actual usage patterns
2. **Archive in phases** (high priority first)
3. **Create archived folder** for low-value prompts (don't delete, just move)
4. **Document rationale** for each archiving decision
5. **Monitor usage** after archiving (see if anyone asks for archived prompts)

---

## Notes

- This analysis is based on general practical value
- Your specific use case may make some "low-value" prompts highly valuable
- Consider usage data if available before archiving
- Archiving is reversible (move back if needed)
- Some prompts might be valuable if consolidated (e.g., threat analysis prompts)