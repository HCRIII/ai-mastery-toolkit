# State Schema Examples

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Multi-step workflow pattern for standardized processes
**Status:** Final

---

**Three complete state schemas for common B2B workflow patterns. Use these as templates for your own workflows.**

All examples shown in markdown tables (the actual state lives in your database as structured data).

---

## Pattern 1: Lead Processing Workflow

**Use this when:** You receive inbound B2B leads and need to classify, route, and send personalized outreach.

**Real-world example:** Alex's lead generation workflow from Section 8.

### Overview

| Aspect | Details |
|--------|---------|
| **Trigger** | New lead form submission or webhook |
| **Outcome** | Leads classified and routed, email sent, CRM updated |
| **Duration** | 2-15 minutes per lead |
| **Key Decision** | Lead warmth (Hot/Warm/Cold) and routing |

### State Schema Structure

#### Identity & Metadata

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| workflow_id | String | "lead-20260208-001" | Unique identifier for this lead instance |
| trigger_id | String | "form-submission-webhook-47291" | What triggered this workflow |
| created_at | Timestamp | "2026-02-08T14:32:00Z" | When the lead came in |
| updated_at | Timestamp | "2026-02-08T14:32:45Z" | Last time state changed |
| trace_id | String | "alex-trace-47291" | For debugging all related actions |

#### Progress & Checkpoints

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| current_step | String | "action" | Where we are: intake → decision → action → review |
| step_sequence | List | ["intake", "decision"] | Steps completed so far |
| last_successful_checkpoint | Timestamp | "2026-02-08T14:32:30Z" | Last safe resume point |
| retry_count | Number | 0 | How many retries on current step |
| has_failed | Boolean | false | Did this lead encounter an error? |
| error_recovery_status | String | "none" | Current recovery state: none / recovering / paused / resolved |

#### Input Data (Raw from Form)

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| raw_name | String | "Sarah Chen" | Contact name from form |
| raw_email | String | "sarah.chen@techcorp.com" | Contact email from form |
| raw_company | String | "TechCorp Inc" | Company name from form |
| raw_message | String | "Hi, we're looking..." | Message/inquiry from form |
| form_source | String | "website_form_widget" | Where the form was submitted from |
| referrer | String | "google_ads_campaign_xyz" | How they found us |

#### Normalized Data (Cleaned & Structured)

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| name | String | "Sarah Chen" | Cleaned name |
| email | String | "sarah.chen@techcorp.com" | Validated email |
| company | String | "TechCorp Inc" | Cleaned company name |
| company_size | Number | 2500 | Employees (enriched from API) |
| industry | String | "SaaS" | Industry classification |
| message_text | String | "Hi, we're looking..." | Original message preserved |
| message_length | Number | 75 | Word count |
| message_summary | String | "Evaluating platform for scaling team" | 1-sentence summary |
| key_phrases | List | ["scaling team", "evaluating platform"] | Important keywords |
| data_quality_score | Number | 0.95 | How complete/valid is this lead? 0-1.0 |
| missing_fields | List | [] | Any required fields that were empty |

#### Decisions Made

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| quality_check_pass | Boolean | true | Did message meet minimum quality (length > 10 words)? |
| warmth_classification | String | "Hot" | Lead warmth: Hot / Warm / Cold |
| warmth_confidence | Number | 0.92 | How confident in that classification? 0.0-1.0 |
| warmth_reasoning | String | "Specific company need, professional tone, evaluating product" | Why we classified this way |
| fit_score | Number | 8 | Lead fit score 0-10 |
| intent_category | String | "Product_inquiry" | Intent: Product_inquiry / Info_gathering / Budget / Other |
| routing_decision | String | "senior_rep" | Assigned to: senior_rep / junior_rep / none |
| routing_reason | String | "Hot + 2500 employees > company_threshold" | Why this routing |
| segment | String | "hot_lead" | Segment for email sequences: hot_lead / warm_lead / cold_lead |
| human_review_needed | Boolean | false | Flag if low confidence or edge case |

#### Actions Taken

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| actions_completed | List | List containing: | Actions successfully executed |
| - create_crm_record | Object | { status: "completed", crm_id: "LEAD-12345", timestamp: "..." } | CRM entry created |
| - send_notification | Object | { status: "completed", target: "slack:#new-leads", timestamp: "..." } | Sales rep notified |
| next_actions | List | List containing: | Pending actions to execute |
| - send_email | Object | { status: "pending", draft_id: "EMAIL-567", requires_approval: true } | Email waiting to send |
| - add_to_sequence | Object | { status: "pending", sequence: "hot_lead_nurture", schedule: "immediately" } | Add to email sequence |

#### Error Handling

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| error_log | List | [] (or list of errors if any) | Record of any failures |
| last_error | Object | null or { code: "...", message: "...", timestamp: "..." } | Most recent error |
| recovery_attempts | Number | 0 | How many times we've tried to recover |

#### Metrics & Observability

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| created_at | Timestamp | "2026-02-08T14:32:00Z" | When workflow started |
| updated_at | Timestamp | "2026-02-08T14:32:45Z" | Last state update |
| completed_at | Timestamp | null or "2026-02-08T14:35:12Z" | When workflow finished |
| total_duration_seconds | Number | 192 | Total time from start to finish |
| api_calls_made | Number | 4 | How many API calls executed |
| tokens_used | Number | 2847 | Total LLM tokens consumed |
| estimated_cost | Number | 0.087 | USD cost of this workflow run |

### Sample Complete State

```
LEAD DETAILS:
- Name: Sarah Chen
- Company: TechCorp Inc (2,500 employees)
- Message: "Hi, we're looking at your platform for our scaling team. Can we talk?"

DECISIONS MADE:
- Quality: PASS (message 75 words, > 10 word minimum)
- Warmth: HOT (confidence: 0.92)
- Fit Score: 8/10
- Routing: senior_rep (hot + large company)

ACTIONS COMPLETED:
 Lead normalized and enriched
 CRM record created (LEAD-12345)
 Sales rep notified on Slack

ACTIONS PENDING:
⏳ Personalized email draft (awaiting approval)
⏳ Add to hot_lead nurture sequence

COST: $0.087 | DURATION: 3m 12s | API CALLS: 4
```

---

## Pattern 2: Content Creation Pipeline

**Use this when:** You need to generate, review, and publish content at scale with AI quality control.

**Real-world example:** Blog post creation, email campaign content, product descriptions.

### Overview

| Aspect | Details |
|--------|---------|
| **Trigger** | Content request submission or scheduled batch |
| **Outcome** | Content drafted, reviewed, approved, published |
| **Duration** | 5-30 minutes per piece depending on review |
| **Key Decision** | Quality assessment (publish / revise / reject) |

### State Schema Structure

#### Identity & Metadata

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| workflow_id | String | "content-20260208-blog-001" | Unique ID for this content piece |
| request_id | String | "content-request-47391" | Original content request ID |
| content_type | String | "blog_post" | Type: blog_post / email / product_desc / social_post |
| created_at | Timestamp | "2026-02-08T10:00:00Z" | When request was submitted |
| trace_id | String | "content-trace-47391" | For debugging and logging |

#### Progress & Checkpoints

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| current_step | String | "review" | Steps: brief → draft → review → approve → publish |
| step_sequence | List | ["brief", "draft"] | Completed steps |
| last_successful_checkpoint | Timestamp | "2026-02-08T10:05:30Z" | Last safe resume point |
| approval_status | String | "pending_human_review" | Status: generating / ready_for_review / approved / rejected / published |

#### Input Data (Content Brief)

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| topic | String | "How to Scale Your Customer Support" | Main topic/title |
| target_audience | String | "SaaS founders, 20-50 employees" | Who this is for |
| key_points | List | ["automation", "metrics", "tooling"] | Points to cover |
| tone | String | "Professional but conversational" | Desired voice/tone |
| format_constraints | String | "2000-2500 words, 4-5 sections" | Length and structure |
| seo_keywords | List | ["customer support scaling", "automation"] | Keywords to include |
| requested_by | String | "Content team" | Who requested this |

#### Generation Data

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| draft_version | Number | 2 | Which version are we on? |
| draft_content | String | "[Full content here...]" | Generated content |
| generated_at | Timestamp | "2026-02-08T10:05:00Z" | When draft was created |
| generation_model | String | "claude-opus" | Which LLM model generated this |
| generation_cost | Number | 0.032 | Cost to generate |

#### Quality Metrics

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| word_count | Number | 2240 | Actual word count |
| word_count_meets_spec | Boolean | true | Within target range? |
| readability_score | Number | 8.2 | 0-10 readability (higher = easier to read) |
| seo_keyword_coverage | Number | 0.85 | % of keywords included |
| tone_assessment | String | "Matches requested tone" | Does tone match requirements? |
| factual_accuracy_flag | Boolean | false | Does it contain any obvious errors? |
| has_placeholder_text | Boolean | false | Any [FILL IN THIS] sections? |
| has_formatting_issues | Boolean | false | Any markdown/formatting problems? |

#### Review & Approval

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| reviewed_by | String | "Marketing Manager" | Who reviewed it |
| review_date | Timestamp | "2026-02-08T10:15:00Z" | When review happened |
| review_status | String | "approved_with_changes" | approved / approved_with_changes / rejected / needs_revision |
| review_feedback | List | ["Add case study example", "Simplify section 3"] | Feedback from reviewer |
| reviewer_changes_made | List | ["Case study added in section 2"] | Changes implemented |
| approval_notes | String | "Strong content, minor edits applied" | Final notes |

#### Publishing

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| publish_status | String | "published" | Status: draft / scheduled / published |
| published_at | Timestamp | "2026-02-08T10:30:00Z" | When it went live |
| publish_location | String | "blog.company.com/post/scale-support" | Where it was published |
| distribution_status | String | "distributed" | Whether it was shared out |
| distribution_channels | List | ["email_newsletter", "twitter", "linkedin"] | Where shared |

#### Metrics

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| total_review_rounds | Number | 1 | How many revision rounds |
| total_duration_minutes | Number | 28 | Total time from request to publish |
| api_calls_made | Number | 3 | API calls used |
| total_tokens_used | Number | 4250 | Tokens for generation + revision |
| total_cost | Number | 0.081 | Total USD cost |

### Sample Complete State

```
CONTENT DETAILS:
- Topic: How to Scale Your Customer Support
- Type: Blog Post
- Target Audience: SaaS founders, 20-50 employees
- Constraints: 2000-2500 words

GENERATION:
 Draft generated (2240 words)
 Tone matches specification
 All keywords included (85% coverage)
 No placeholder text
 Readability: 8.2/10

REVIEW:
 Reviewed by Marketing Manager
 Feedback: "Add case study example" → Applied
 Status: APPROVED WITH CHANGES

PUBLISHING:
 Published to blog.company.com
 Distributed to: Email newsletter, Twitter, LinkedIn
 Published at: Feb 8, 2026 10:30 AM

METRICS:
- Duration: 28 minutes
- Cost: $0.081
- 1 review round
- Total tokens: 4,250
```

---

## Pattern 3: Customer Onboarding Process

**Use this when:** You need to guide new customers through setup with personalized steps, knowledge checks, and progress tracking.

**Real-world example:** SaaS product onboarding, welcome sequences, implementation workflows.

### Overview

| Aspect | Details |
|--------|---------|
| **Trigger** | Customer account creation or purchase completed |
| **Outcome** | Customer successfully onboarded with all setup steps complete |
| **Duration** | 2-7 days (multi-step over time) |
| **Key Decision** | Progress checks and personalized path selection |

### State Schema Structure

#### Identity & Metadata

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| workflow_id | String | "onboard-20260208-ACME-001" | Unique ID for this customer onboarding |
| customer_id | String | "cust_47392" | Customer database ID |
| account_name | String | "ACME Corp" | Company name |
| created_at | Timestamp | "2026-02-08T14:00:00Z" | When account created |
| trace_id | String | "acme-onboard-trace" | For debugging |

#### Customer Profile

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| company_name | String | "ACME Corp" | Official company name |
| company_size | String | "50-100 employees" | Size category |
| industry | String | "Manufacturing" | Industry |
| use_case | String | "Sales team collaboration" | What they'll use product for |
| primary_contact_name | String | "John Smith" | Primary contact person |
| primary_contact_email | String | "john@acme.com" | Contact email |
| contact_role | String | "VP Sales" | Their role |
| onboarding_complexity | String | "medium" | Simple / medium / complex based on use case |

#### Progress Tracking

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| current_phase | String | "training" | Phases: setup → integration → training → launch → success |
| current_step | Number | 3 | Which step in the current phase (1-N) |
| phase_progress | Number | 60 | % complete in current phase |
| overall_progress | Number | 40 | % complete overall |
| steps_completed | List | ["team_setup", "workspace_config"] | Completed steps |
| steps_pending | List | ["integrations", "training"] | Remaining steps |
| last_activity_date | Timestamp | "2026-02-08T14:35:00Z" | When they last took action |

#### Phase 1: Setup (Account & Workspace)

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| setup_workspace_created | Boolean | true | Workspace created? |
| setup_team_members_added | Number | 3 | How many team members invited |
| setup_integrations_started | Boolean | false | Has customer started setting up integrations? |
| setup_initial_config_complete | Boolean | true | Initial workspace configuration done? |
| setup_completion_date | Timestamp | "2026-02-08T14:20:00Z" | When phase completed |

#### Phase 2: Integration

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| integrations_planned | List | ["Salesforce", "Slack", "HubSpot"] | Integrations they want to set up |
| integrations_configured | List | ["Salesforce"] | What they've completed |
| integration_config_issues | List | ["Slack: auth timeout on 2/7"] | Any problems encountered |
| primary_integration_status | String | "configured" | Status of most important integration |

#### Phase 3: Training

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| training_videos_assigned | List | ["Getting Started", "Team Workflows", "Admin Dashboard"] | Videos to watch |
| training_videos_completed | List | ["Getting Started"] | Videos they've finished |
| training_completion_rate | Number | 0.33 | % of assigned training completed |
| training_quiz_taken | Boolean | true | Have they taken the knowledge check? |
| training_quiz_score | Number | 85 | % score on knowledge check |
| training_quiz_passed | Boolean | true | Passed the check (>80%)? |
| readiness_for_launch | String | "ready_with_conditions" | ready / ready_with_conditions / not_ready |

#### Phase 4: Launch Preparation

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| launch_readiness_check | Boolean | false | Have we assessed launch readiness? |
| launch_blockers | List | [] | Any issues preventing launch |
| launch_scheduled_date | Timestamp | "2026-02-12T00:00:00Z" | When they plan to go live |
| launch_support_session_scheduled | Boolean | true | Do they have support call scheduled? |
| launch_support_session_date | Timestamp | "2026-02-11T14:00:00Z" | When support call is |

#### Personalization & Customization

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| learning_style | String | "visual" | Detected: visual / text / hands_on |
| pain_points_identified | List | ["integration_complexity", "permission_management"] | Issues they've mentioned |
| success_indicators | List | ["10 active team members", "first workflow created"] | What success looks like |
| personalized_path | String | "advanced_integrations_path" | Custom onboarding path selected |
| recommended_next_steps | List | ["Configure Slack integration", "Import team data"] | Next actions based on progress |

#### Engagement Metrics

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| days_since_signup | Number | 4 | How long since they signed up |
| logins_total | Number | 12 | Total login count |
| logins_this_week | Number | 7 | How many logins this week |
| features_explored | List | ["Team workflows", "Integrations", "Analytics"] | What they've tried |
| features_actively_using | List | ["Team workflows"] | What they're actually using |
| engagement_score | Number | 0.75 | Overall engagement 0-1.0 |
| churn_risk | String | "low" | low / medium / high based on engagement |

#### Support & Escalation

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| support_tickets_created | Number | 2 | Total support requests |
| support_tickets_resolved | Number | 2 | How many resolved |
| support_issues | List | ["Slack integration failed", "Permission error on shared workspace"] | Issues encountered |
| escalation_needed | Boolean | false | Does this need human attention? |
| assigned_success_manager | String | "Sarah Johnson" | Dedicated contact person |
| success_manager_notes | String | "Strong engagement, small team, standard path" | Internal notes |

#### Metrics & Timeline

| Field | Type | Example Value | Purpose |
|-------|------|---------------|---------|
| created_at | Timestamp | "2026-02-08T14:00:00Z" | Workflow start |
| expected_completion_date | Timestamp | "2026-02-12T00:00:00Z" | When we expect them to be ready |
| actual_completion_date | Timestamp | null | When they actually completed |
| total_duration_days | Number | 4 | Days from signup to launch |
| cost_to_onboard | Number | 15.50 | Estimated human + automation cost |

### Sample Complete State

```
CUSTOMER DETAILS:
- Company: ACME Corp (75 employees)
- Industry: Manufacturing
- Primary Contact: John Smith, VP Sales
- Use Case: Sales team collaboration

ONBOARDING PROGRESS:
Phase 1 - Setup:  COMPLETE (Feb 8, 2:20 PM)
   Workspace created
   3 team members added
   Initial configuration done

Phase 2 - Integration: ⏳ IN PROGRESS (60%)
   Salesforce configured
  ⏳ Slack authentication timeout (troubleshooting)
  ⏳ HubSpot pending

Phase 3 - Training: ⏳ IN PROGRESS (33%)
   "Getting Started" video watched
   Knowledge check passed (85%)
  ⏳ "Team Workflows" video assigned
  → Readiness: Ready with conditions

Phase 4 - Launch Prep: ⏳ PENDING
  → Launch date scheduled: Feb 12, 2026
  → Support session: Feb 11, 2026 at 2 PM

ENGAGEMENT:
- Days since signup: 4
- Logins: 12 total (7 this week)
- Features exploring: Team workflows, Integrations, Analytics
- Engagement score: 0.75 (good)
- Churn risk: LOW

SUPPORT:
- Assigned Success Manager: Sarah Johnson
- Support tickets: 2 created, 2 resolved
- Issues: Slack auth timeout (in progress)

NEXT STEPS:
1. Resolve Slack integration issue
2. Complete remaining training videos
3. Launch readiness check
4. Schedule final support session
```

---

## How to Use These Schemas

### Adapting for Your Workflow

1. **Start with the closest match** - Which of these three patterns is most like your workflow?

2. **Keep the structure** - Identity → Progress → Input → Decisions → Actions → Metrics

3. **Add your specific fields** - Every workflow needs custom data fields

4. **Define when fields populate** - At which step does each field get set?

5. **Test with real data** - Run your workflow once and see if state captures everything you need

### Storage in Database

These schemas become actual structured data in your database:

- **Relational DB (SQL):** Each section becomes a table or JSON column
- **Document DB (Mongo):** Entire schema as single document
- **Spreadsheet (Google Sheets):** Use multiple tabs for different sections
- **Automation Platform (n8n/Make):** Store in execution logs and data variables

### Querying & Monitoring

Once in your database, you can query:

```
"Find all leads from yesterday with warmth = Hot"
"Show me conversion rate: Hot leads → Actual customers"
"Which phase takes longest: setup, integration, or training?"
"How many onboardings are stalled at training phase?"
```

---

**Next:** See [Prompt_Library_Template.md](Prompt_Library_Template.md) for the exact prompts used in each phase.

