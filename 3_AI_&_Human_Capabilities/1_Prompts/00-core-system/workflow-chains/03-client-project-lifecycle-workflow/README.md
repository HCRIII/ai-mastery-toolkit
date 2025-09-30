# Client Project Lifecycle Workflow

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for 03-client-project-lifecycle-workflow capabilities
**Status:** Final

---

## Description
## Purpose
Manage client projects systematically from discovery through delivery, maintaining clear communication, managing scope, and delivering professional results while protecting your capacity.
## When to Use
- Starting any new client engagement
- Managing ongoing retainer or consulting work
- Delivering projects with multiple stakeholders
- Maintaining client relationships across project phases
## Workflow Steps
### Phase 1: Discovery & Scoping (3-8 hours)
**Step 1: Initial Client Session**
- Prompt: `summarize_client_session`
- Input: Discovery call notes, client background, business goals
- Output: Structured session summary with decisions and action items
- Why: Ensures alignment from the start, documents initial understanding
- Send: Within 24 hours to client for confirmation
**Step 2: Analyze Client Needs** (Internal analysis)
- Prompt: `analyze_paper` (adapted) or manual analysis
- Input: Client background, industry context, competitive landscape
- Output: Strategic analysis of client situation
- Why: Informs your recommendation beyond just what client asked for
**Step 3: Create Client PRD**
- Prompt: `create_client_prd`
- Input: Discovery insights, technical requirements, business goals
- Output: Professional Product Requirements Document
- Why: Establishes shared understanding, prevents scope creep
- SuperContext: Loads capacity and timeline constraints automatically
- Send: To client for review and approval before work begins
**Step 4: Scope Approval Session**
- Prompt: `summarize_client_session`
- Input: PRD review meeting notes
- Output: Documented agreements, changes, final scope
- Why: Creates paper trail for scope decisions
### Phase 2: Execution & Communication (Weekly cycle)
**Step 5: Weekly Client Report** (Every week)
- Prompt: `create_client_report`
- Input: Work completed, blockers, upcoming milestones
- Output: Professional status report
- Why: Manages expectations, surfaces issues early, maintains trust
- SuperContext: Tracks progress against timeline and capacity
- Send: Same day each week (e.g., every Friday)
**Step 6: Analyze Client Feedback** (When feedback arrives)
- Prompt: `analyze_client_feedback`
- Input: Client feedback from emails, calls, reviews
- Output: Categorized, prioritized analysis with scope impact
- Why: Separates in-scope from scope creep, prioritizes systematically
**Step 7: Session Summaries** (After each client call)
- Prompt: `summarize_client_session`
- Input: Call/meeting notes
- Output: Decisions, action items, clarifications
- Why: Prevents misunderstandings, tracks commitments
- Send: Within 24 hours
**Step 8: Handle Scope Changes** (As needed)
- Prompt: `create_client_prd` (updated version)
- Input: Proposed scope changes from feedback analysis
- Output: Updated PRD with change impact (time, cost, trade-offs)
- Why: Manages scope professionally, presents options clearly
### Phase 3: Quality & Delivery (Final 20% of project)
**Step 9: Pre-Delivery Quality Check** (Internal)
- Prompts: Relevant quality prompts based on deliverable type
  - `analyze_prose` for documentation
  - `find_logical_fallacies` for strategy recommendations
  - `rate_content` for content deliverables
  - `analyze_claims` for research or analysis
- Input: Draft deliverables
- Output: Quality assessment and improvements needed
- Why: Catches issues before client sees them
**Step 10: Create Delivery Package**
- Tool: Depending on deliverable type
  - Use docx skill for professional documents
  - Use pptx skill for presentations
  - Use pdf skill for final reports
  - Apply brand-guidelines skill for branded deliverables
- Input: Final quality-checked deliverables
- Output: Professional, polished final package
- Why: First impressions matter for future business
**Step 11: Delivery Session**
- Prompt: `summarize_client_session`
- Input: Delivery presentation meeting notes
- Output: Documented handoff, training notes, next steps
- Why: Ensures smooth transition and captures any final items
### Phase 4: Wrap-up & Learning (1-2 hours)
**Step 12: Final Client Report**
- Prompt: `create_client_report` (project retrospective version)
- Input: Entire project journey, outcomes achieved, lessons learned
- Output: Project summary and outcomes report
- Why: Demonstrates value, sets up future work
- Include: Before/after metrics, wins, challenges overcome
**Step 13: Client Feedback Analysis** (Final)
- Prompt: `analyze_client_feedback`
- Input: All project feedback and final retrospective
- Output: Comprehensive analysis with lessons learned
- Why: Improves future client work, identifies patterns
**Step 14: Extract Wisdom** (Personal learning)
- Prompt: `extract_wisdom`
- Input: Entire project experience, challenges, solutions
- Output: Personal insights and recommendations
- Why: Converts experience into permanent knowledge
- Zettelkasten: Create permanent notes on lessons learned
**Step 15: Update SuperContext** (Knowledge capture)
- Tool: Manual update to Life & Business Context docs
- Input: Project outcomes, new case studies, refined processes
- Output: Updated context for future projects
- Why: Each project makes you better at the next one
### Ongoing: Communication Rhythm
**Weekly:**
- Create client report (Step 5)
- Analyze any feedback received (Step 6)
**After Every Call/Meeting:**
- Summarize session (Step 7)
- Within 24 hours
**When Feedback Arrives:**
- Analyze feedback (Step 6)
- Respond within 48 hours with action plan
**Monthly (for longer projects):**
- Comprehensive status update using create_client_report
- Include metrics, progress photos, etc.
## Expected Time Investment Per Phase
- **Discovery & Scoping:** 3-8 hours
- **Weekly Communication:** 1-2 hours/week
- **Quality & Delivery:** 4-8 hours
- **Wrap-up & Learning:** 1-2 hours
**Total Overhead:** ~15-20% of project time for communication & management
## Success Indicators
 Zero scope surprises (everything documented)
 Client always knows project status
 Issues surfaced early, not at delivery
 Clear paper trail of decisions
 Professional delivery package
 Positive client feedback and testimonial
 Lessons learned captured for next project
## Tips for Success
**Do:**
- Send session summaries within 24 hours (builds trust)
- Create PRD before starting work (prevents scope creep)
- Report weekly even when "nothing happened"
- Analyze feedback systematically (don't just react)
- Update SuperContext after each project (compound learning)
**Don't:**
- Start work without approved PRD
- Let feedback pile up without analysis
- Skip weekly reports (silence creates anxiety)
- Accept scope changes without impact analysis
- Forget to capture lessons learned
## Example Use Case
**Client Project:** Build custom analytics dashboard for SaaS company
**Workflow:**
1. Discovery session → Summarize (goals, users, current pain points)
2. Create PRD → 8-week timeline, MVP + Phase 2 features, clear scope
3. Scope approval → Summarize (client requested 2 additional features for MVP)
4. Updated PRD → Show +2 week timeline impact, client approves
5. Weekly reports → Every Friday: progress, blockers, next week's work
6. Week 3 feedback → Analyze (3 in-scope tweaks, 2 new feature requests)
7. Scope change discussion → Summarize (agreed to defer new features to Phase 2)
8. Week 7 pre-delivery → Quality check all documentation
9. Delivery session → Demo, handoff, training, summarize
10. Final report → Show outcomes: 40% reduction in reporting time (client's goal)
11. Extract wisdom → Permanent notes on dashboard design patterns
12. Update SuperContext → Add case study to portfolio
## Related Workflows
- **Research Deep Dive:** Use during discovery for complex domains
- **Content Creation Pipeline:** For creating client deliverables
- **Weekly Review:** Ensure client work fits in capacity planning
## Prompts Used
### Discovery & Scoping
- summarize_client_session (00_Core_System/Client_Work_Prompts/)
- create_client_prd (00_Core_System/Client_Work_Prompts/)
### Execution & Communication
- create_client_report (00_Core_System/Client_Work_Prompts/)
- analyze_client_feedback (00_Core_System/Client_Work_Prompts/)
- summarize_client_session (00_Core_System/Client_Work_Prompts/)
### Quality & Delivery
- analyze_prose (01_Analysis/Content/)
- find_logical_fallacies (04_Identification/)
- rate_content (05_Evaluation/)
- analyze_claims (01_Analysis/Content/)
### Wrap-up & Learning
- extract_wisdom (03_Extraction/Insights/)
### Skills Used
- docx skill
- pptx skill
- pdf skill
- brand-guidelines skill

## When to Use
- As described in the prompt content
- Part of session management workflow
- For tracking and system updates

## Tags
`session` `tracking` `workflow`