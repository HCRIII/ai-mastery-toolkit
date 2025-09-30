# Weekly Review Workflow

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for weekly-review capabilities
**Status:** Final

---

## Description
## Purpose
Conduct a comprehensive weekly review to reflect on progress, process inputs, update systems, plan the week ahead, and maintain clarity on priorities across all life and work domains.
## When to Use
- Every week, same day/time (recommended: Friday afternoon or Sunday evening)
- After returning from vacation or break (to get back on track)
- When feeling overwhelmed or unclear on priorities
- At the start of new project phases or major transitions
## Workflow Steps
### Phase 1: Collect & Process (30-45 min)
**Step 1: Extract Inbox Items**
- Source: Email, Slack, messages, notes, meeting outcomes
- Prompt: `extract_todos` or manual collection
- Input: All inboxes from the week
- Output: Comprehensive list of inputs requiring decisions
- Why: Gets everything out of your head and scattered systems
**Step 2: Summarize Client Sessions** (If any unsummarized)
- Prompt: `summarize_client_session`
- Input: Any client calls from the week
- Output: Session summaries with action items
- Why: Captures commitments before you forget
**Step 3: Extract Wisdom** (From learning experiences)
- Prompt: `extract_wisdom`
- Input: Key meetings, conversations, content consumed
- Output: Insights, lessons, recommendations
- Why: Converts weekly experiences into permanent knowledge
- Zettelkasten: Create permanent notes from best insights
### Phase 2: Review & Reflect (30-45 min)
**Step 4: Year in Review** (Monthly variation)
- Prompt: `t_year_in_review`
- Input: Past month's activities and outcomes
- Output: Progress assessment and reflections
- Why: Monthly check-in on bigger picture goals
- Frequency: Run monthly instead of Steps 4-6
**Step 5: Check Metrics** (Weekly)
- Prompt: `t_check_metrics`
- Input: Key metrics you're tracking (business, health, learning)
- Output: Analysis of trends and progress
- Why: Data-driven view of what's actually happening
- GTD Integration: Reviews Weekly KPIs
**Step 6: Find Neglected Goals**
- Prompt: `t_find_neglected_goals`
- Input: Current GTD system state
- Output: Goals receiving insufficient attention
- Why: Surfaces important-but-not-urgent initiatives
- GTD Integration: Reviews all active projects for stalled ones
**Step 7: Visualize Mission → Goals → Projects**
- Prompt: `t_visualize_mission_goals_projects`
- Input: Current GTD system
- Output: Visual map of strategic alignment
- Why: Ensures current work connects to long-term mission
- GTD Integration: Maps current projects to life areas and vision
### Phase 3: Clean & Organize (20-30 min)
**Step 8: Process GTD Inboxes**
- Tool: Your GTD system
- Actions:
  - Clarify inputs from Step 1
  - Add next actions to appropriate lists
  - Create/update projects as needed
  - File reference material
  - Delegate or defer as appropriate
- Why: Returns system to trusted state
**Step 9: Review Project List**
- Tool: Your GTD system
- Actions:
  - Confirm each project has next action
  - Archive completed projects
  - Update stalled projects based on Step 6
  - Ensure SuperContext Layer 3 is current
- Why: Keeps project list accurate and actionable
**Step 10: Review Calendar**
- Tool: Calendar system
- Actions:
  - Review past week for missed commitments
  - Review next 2 weeks for preparation needs
  - Identify time blocks for important project work
  - Update capacity allocation in SuperContext Layer 7
- Why: Proactive planning prevents schedule overwhelm
### Phase 4: Plan & Prioritize (30-45 min)
**Step 11: Create H3 Career Vision** (Quarterly variation)
- Prompt: `t_create_h3_career`
- Input: Current position and strategic goals
- Output: Long-term career/business vision (H1/H2/H3)
- Why: Ensures weekly work aligns with long-term direction
- Frequency: Run quarterly instead of Step 11
**Step 12: Identify Weekly Priorities**
- Source: GTD next actions, neglected goals, client commitments
- Method: Manual selection using context from Steps 5-7
- Output: 3-5 Most Important Tasks for upcoming week
- Why: Focuses energy on what matters most
- Criteria: Impact, urgency, alignment with goals, client commitments
**Step 13: Time Block Week**
- Tool: Calendar
- Actions:
  - Block time for weekly priorities (Step 12)
  - Block time for client work and meetings
  - Block time for deep work / deliberate practice
  - Block time for next week's review
  - Update SuperContext Layer 7 (capacity allocation)
- Why: Protects time for important work
**Step 14: Red Team Your Plan** (Optional but valuable)
- Prompt: `t_red_team_thinking`
- Input: Your plan for the upcoming week
- Output: Potential risks and weaknesses in plan
- Why: Identifies schedule conflicts or unrealistic expectations before week starts
### Phase 5: Reset & Prepare (15-20 min)
**Step 15: Update SuperContext**
- Tool: SuperContext document
- Actions:
  - Update Layer 3 (What I'm Building) - current projects
  - Update Layer 6 (Open Questions) - from weekly insights
  - Update Layer 7 (Current Focus) - priorities and capacity
  - Confirm Week # in 20-week roadmap
- Why: Keeps your AI context current for next week's work
**Step 16: Create Weekly Commitments List**
- Output format: Simple checklist
  - 3-5 Most Important Tasks
  - Client deliverables due
  - Key meetings and prep needs
  - Non-negotiables (existing commitments)
- Why: Clear, visible reminder of weekly focus
- Location: Post somewhere you'll see it daily
**Step 17: Workspace Reset**
- Actions:
  - Clear physical and digital workspace
  - Close all loops from past week
  - Archive or file completed work
  - Set up environment for Monday start
- Why: Clean slate for new week
### Phase 6: Reflection & Learning (10-15 min)
**Step 18: Extract Weekly Patterns** (Optional)
- Prompt: `extract_patterns`
- Input: Week's activities, challenges, wins
- Output: Recurring themes to address
- Why: Identifies systemic issues vs. one-off problems
**Step 19: Create Zettelkasten Notes** (If didn't do in Step 3)
- Input: Permanent note suggestions from extract_wisdom (Step 3)
- Output: Linked permanent notes in Zettelkasten
- Why: Weekly learning compounds into knowledge base
**Step 20: Gratitude & Wins**
- Method: Manual reflection
- Output: 3 wins from the week, 3 things grateful for
- Why: Maintains positive mindset, recognizes progress
- Optional: Use t_give_encouragement prompt for self-compassion
## Expected Time Investment
- **Quick Review:** 60-90 minutes (Steps 1-3, 8-10, 12-13, 16)
- **Standard Weekly Review:** 2-3 hours (All steps except monthly/quarterly variants)
- **Deep Monthly Review:** 3-4 hours (Include Steps 4 and 18-19)
- **Quarterly Strategic Review:** 4-5 hours (Include Steps 4, 11, 18-19)
## Success Indicators
 All inboxes at zero (processed, not just empty)
 Every project has next action
 Calendar reflects actual priorities
 SuperContext is current
 Clear focus for upcoming week (3-5 priorities)
 Feeling of clarity and control restored
 Learning from week captured in permanent notes
## Tips for Success
**Do:**
- Schedule same time each week (make it sacred)
- Use extract_wisdom to capture weekly learning
- Update SuperContext so AI assistance is accurate
- Actually time block your priorities (not just list them)
- Run monthly and quarterly variations for bigger picture
- Process to empty, not just review
**Don't:**
- Skip the review when you're "too busy" (that's when you need it most)
- Just review without deciding and processing
- Forget to celebrate wins (builds momentum)
- Plan an unrealistic week (be honest about capacity)
- Skip Zettelkasten notes (weekly learning compounds)
## Frequency Variations
**Weekly (Every Week):**
- Steps 1-3, 5-10, 12-16
**Monthly (First Week of Month):**
- All weekly steps PLUS
- Step 4 (Year in Review - monthly version)
- Steps 18-19 (Pattern extraction and deeper reflection)
**Quarterly (Every 3 Months):**
- All monthly steps PLUS
- Step 11 (Create H3 Career - quarterly version)
- Extended Step 18 (Deep pattern analysis across quarter)
## Example Use Case
**Friday Weekly Review:**
1. Extract todos → 47 items from email, Slack, meeting notes
2. Summarize 2 client sessions → Capture commitments to clients
3. Extract wisdom → Insights from podcast on technical leadership
4. (Skip - not first of month)
5. Check metrics → Academy site traffic up 15%, newsletter open rate down
6. Find neglected goals → Haven't touched proposal writing system in 3 weeks
7. Visualize alignment → All projects connect to mission except one legacy client
8. Process GTD → All 47 items clarified, 23 next actions, 8 projects updated
9. Review projects → 12 active, all have next actions, archived 2 completed
10. Review calendar → Next week has 12 hrs client work, 8 hrs deep work possible
11. (Skip - not quarterly)
12. Weekly priorities → 1) Client dashboard delivery, 2) Academy module 3 draft, 3) Proposal system (from Step 6), 4) Newsletter (from metrics), 5) Team hiring decision
13. Time block → Monday-Thursday morning: deep work on priorities, Friday: client meetings and review
14. Red team plan → Realized client delivery may need extra buffer, adjusted
15. Update SuperContext → Current projects list, capacity at 23/25 hrs, open question on hiring
16. Weekly commitments → Printed list of 5 priorities
17. Workspace reset → Cleaned desk, closed 47 browser tabs, archived last week's files
18. (Skip - not monthly)
19. Create 2 Zettelkasten notes → Technical leadership patterns, newsletter engagement factors
20. Gratitude → 1) Client praised dashboard progress, 2) Module 2 feedback was excellent, 3) Team member stepped up on support
**Result:** Clear focus for next week, systems trusted, learning captured, feeling of control restored.
## Related Workflows
- **Research Deep Dive:** Schedule research time during review
- **Content Creation Pipeline:** Identify content creation priorities
- **Client Project Lifecycle:** Review client project health
- **SuperContext Updates:** Weekly review keeps SuperContext current
## Prompts Used
### Collect & Process
- extract_todos (03_Extraction/Tasks/)
- summarize_client_session (00_Core_System/Client_Work_Prompts/)
- extract_wisdom (03_Extraction/Insights/)
### Review & Reflect
- t_year_in_review (13_Personal_Development/Reflection_Tools/)
- t_check_metrics (13_Personal_Development/Self_Assessment/)
- t_find_neglected_goals (13_Personal_Development/Growth_Planning/)
- t_visualize_mission_goals_projects (13_Personal_Development/Growth_Planning/)
### Plan & Prioritize
- t_create_h3_career (13_Personal_Development/Growth_Planning/)
- t_red_team_thinking (13_Personal_Development/Reflection_Tools/)
### Reflection & Learning
- extract_patterns (03_Extraction/Insights/)
- t_give_encouragement (13_Personal_Development/Reflection_Tools/)
### GTD System Integration
All t_ prompts now reference GTD system instead of Telos, and integrate with SuperContext layers for accurate personal context.

## When to Use
- As described in the prompt content
- Part of session management workflow
- For tracking and system updates

## Tags
`session` `tracking` `workflow`