# Deterministic/Structured Automations

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Overview and navigation for deterministic-structured capabilities
**Status:** Final

---

## What These Are

**Pure rule-based automations without AI in the decision loop.**

No judgment, no interpretation, no adaptation. Just clear if/then logic that executes exactly as programmed every time.

## Characteristics

 **Fast** - No AI processing delay
 **Cheap** - No API costs
 **Predictable** - Same input = Same output, always
 **Easy to debug** - Follow the if/then path
 **Reliable** - Won't have "off days"

 **Brittle** - Breaks with unexpected inputs
 **Inflexible** - Can't adapt to context
 **Limited** - Can't handle ambiguity or judgment

## When to Use

- The logic is completely unambiguous
- All scenarios can be mapped in advance
- Speed and cost are priorities
- You need 100% consistency
- The data is structured and clean

## Examples in This Folder

### 1. Form-to-CRM-Pipeline
**Pattern:** Form submission → Data normalization → CRM update → Confirmation email

**No AI because:** All steps are mechanical data movement and formatting

**Rule Logic:**
```
IF form_source = "landing_page_A" THEN
  tag = "Content Download"
  list = "Newsletter Subscribers"

IF email_domain IN enterprise_list THEN
  priority = "High"
  notify_sales = true
```

### 2. Invoice-Processing-Router
**Pattern:** Invoice received → Extract amount → Route by value → Update systems

**No AI because:** Routing is based on clear numeric thresholds

**Rule Logic:**
```
IF invoice_amount > 5000 THEN
  approval_required = true
  assign_to = "manager"
  tag = "VIP"
ELSE IF invoice_amount > 1000 THEN
  approval_required = false
  assign_to = "accounting"
  tag = "Standard"
ELSE
  approval_required = false
  assign_to = "automation"
  tag = "Small"
```

### 3. Time-Based-Report-Generator
**Pattern:** Every Monday 9am → Query database → Format report → Email to team

**No AI because:** Pure data aggregation and scheduling

**Rule Logic:**
```
TRIGGER: Monday 9:00 AM (UTC)

ACTIONS:
1. Query sales_db for last_7_days
2. Calculate SUM(revenue), COUNT(orders), AVG(order_value)
3. Format as HTML table
4. Email to sales_team@company.com
5. Log completion
```

### 4. Order-Status-Updater
**Pattern:** Order status changes → Update customer portal → Send notification

**No AI because:** Status mapping is one-to-one

**Rule Logic:**
```
ON order_status_change:

IF new_status = "shipped" THEN
  update_portal(order_id, tracking_number)
  send_email("shipped_notification_template")

IF new_status = "delivered" THEN
  update_portal(order_id, delivery_date)
  send_email("delivery_confirmation_template")
  schedule_feedback_email(delay = 2_days)
```

### 5. Lead-Source-Tagger
**Pattern:** New lead → Identify source → Apply tags → Route to appropriate list

**No AI because:** Source mapping is predetermined

**Rule Logic:**
```
IF utm_source = "linkedin" AND utm_campaign = "webinar_2024" THEN
  tags = ["LinkedIn", "Webinar", "Q1_2024"]
  list = "Webinar_Attendees"

IF referrer_domain IN partner_list THEN
  tags = ["Partner_Referral", partner_name]
  list = "Partner_Leads"
  priority = "High"
```

## n8n Implementation Pattern

All examples follow this structure:

```
1. TRIGGER NODE
   ↓
2. NORMALIZE DATA (Function node)
   ↓
3. CONDITIONAL LOGIC (IF/Switch nodes)
   ↓
4. ACTIONS (HTTP Request, Database Update, Email, etc.)
   ↓
5. LOG/TRACK (Write to database or log file)
```

**Key: No AI/LLM nodes anywhere in the workflow**

## File Format

Each example includes:
- `example-name-description.md` - Workflow description and logic
- `example-name-n8n.json` - Importable n8n workflow (when available)
- `example-name-rules.md` - Complete rule set documentation

## Decision Points That Stay Deterministic

Even in complex workflows, these decisions should remain rule-based:

 **Numeric thresholds** - "If amount > X"
 **Exact matches** - "If status = 'approved'"
 **List membership** - "If domain in VIP_list"
 **Date/time logic** - "If created_date < 30_days_ago"
 **Boolean flags** - "If is_subscribed = true"
 **Field presence** - "If phone_number exists"

These should NEVER require AI because the logic is unambiguous.

## Common Patterns

### Pattern 1: Route by Value
```
Incoming data → Extract key field → Compare to thresholds → Route to appropriate path
```

### Pattern 2: Schedule + Execute
```
Timer trigger → Query data → Calculate/aggregate → Format → Distribute
```

### Pattern 3: Status Update Chain
```
Status change detected → Update multiple systems → Notify stakeholders → Log
```

### Pattern 4: Form Processing
```
Form submit → Normalize fields → Validate format → Save to database → Send confirmation
```

### Pattern 5: Multi-System Sync
```
Change in System A → Transform format → Update System B → Update System C → Verify
```

## Testing Deterministic Automations

Simple testing approach:

1. **Input X → Output Y** (test known scenarios)
2. **Edge cases** (empty fields, max values, special characters)
3. **Error conditions** (missing data, invalid format)
4. **Performance** (speed at scale)

No need for AI-style testing (variation, hallucination, bias) because output is predictable.

## When to Add AI (Upgrade to Dynamic)

You need to upgrade to dynamic/flexible when:

 Rules get too complex (50+ if/then statements)
 Edge cases keep breaking the workflow
 You need to handle unstructured text
 Context significantly changes the right action
 You're writing rules like "If message contains 'urgent' OR 'ASAP' OR 'immediately' OR..."

→ That's a signal that judgment (AI) would be better than rules.

## Next Steps

1. Study these examples to understand pure rule-based logic
2. Practice identifying which decisions can be deterministic
3. Build your own deterministic automations for clear-cut scenarios
4. When rules break down, move to `dynamic-flexible/` examples

---

**Remember:** Deterministic automations are the backbone of reliable systems. Use them wherever possible, reserve AI for where judgment is truly needed.
