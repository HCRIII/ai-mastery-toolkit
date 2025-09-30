# n8n Node Configuration Snippets

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

This document contains reusable code snippets for common n8n node configurations. Use these as templates when building workflows.

**Contents:**
1. [Data Validation Patterns](#1-data-validation-patterns)
2. [OpenAI API Configuration](#2-openai-api-configuration)
3. [Database Write Operations](#3-database-write-operations)
4. [Error Handling Patterns](#4-error-handling-patterns)
5. [Rate Limiting & Throttling](#5-rate-limiting--throttling)

---

## 1. Data Validation Patterns

### Basic Required Field Validation

**Node Type:** Function

**Use Case:** Ensure all required fields are present before proceeding

```javascript
// Validate required fields: name, email, company
const required = ['name', 'email', 'company'];
const missing = required.filter(field => !$json[field] || $json[field].toString().trim() === '');

if (missing.length > 0) {
  return [{
    json: {
      is_valid: false,
      missing_fields: missing,
      error_message: `Missing required fields: ${missing.join(', ')}`,
      needs_manual_review: true
    }
  }];
}

return [{
  json: {
    is_valid: true,
    all_fields_present: true,
    validated_at: new Date().toISOString()
  }
}];
```

### Email Format Validation

**Node Type:** Function

**Use Case:** Verify email is valid before sending

```javascript
// Comprehensive email validation
const email = ($json.email || '').trim().toLowerCase();

// Regex for basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValid = emailRegex.test(email);

// Additional checks
const hasMinLength = email.length >= 5 && email.length <= 254;
const noConsecutiveDots = !email.includes('..');
const noLeadingTrailingDots = !email.startsWith('.') && !email.endsWith('.');

const validation_result = {
  email: email,
  is_valid: isValid && hasMinLength && noConsecutiveDots && noLeadingTrailingDots,
  confidence: isValid ? 0.95 : 0.2,
  checks: {
    format: isValid,
    length_ok: hasMinLength,
    no_consecutive_dots: noConsecutiveDots,
    no_trailing_dots: noLeadingTrailingDots
  }
};

// If invalid, flag for human review
if (!validation_result.is_valid) {
  validation_result.needs_review = true;
  validation_result.reason = Object.entries(validation_result.checks)
    .filter(([_, val]) => !val)
    .map(([key, _]) => key)
    .join(', ');
}

return [{ json: validation_result }];
```

### Numeric Range Validation

**Node Type:** Function

**Use Case:** Ensure numeric fields are within acceptable ranges

```javascript
// Validate company_size is a reasonable number
const company_size = $json.company_size || 0;
const fit_score = $json.fit_score || 0;

const validations = {
  company_size: {
    value: company_size,
    min: 1,
    max: 500000,
    is_valid: company_size >= 1 && company_size <= 500000,
    reason: company_size < 1 ? 'must be >= 1' : company_size > 500000 ? 'exceeds max' : null
  },
  fit_score: {
    value: fit_score,
    min: 0,
    max: 10,
    is_valid: fit_score >= 0 && fit_score <= 10,
    reason: fit_score < 0 ? 'cannot be negative' : fit_score > 10 ? 'exceeds max' : null
  }
};

const all_valid = Object.values(validations).every(v => v.is_valid);

return [{
  json: {
    all_valid: all_valid,
    validations: validations,
    failed_fields: Object.entries(validations)
      .filter(([_, v]) => !v.is_valid)
      .map(([name, _]) => name),
    validated_at: new Date().toISOString()
  }
}];
```

### String Length Validation

**Node Type:** Function

**Use Case:** Check message or description is substantial enough

```javascript
// Validate message has minimum substance
const message = ($json.message || '').trim();
const MIN_LENGTH = 10;  // at least 10 characters
const MAX_LENGTH = 5000; // prevent abuse

const has_min_length = message.length >= MIN_LENGTH;
const has_max_length = message.length <= MAX_LENGTH;
const word_count = message.split(/\s+/).filter(w => w.length > 0).length;
const has_min_words = word_count >= 3; // at least 3 words

return [{
  json: {
    message: message,
    length: message.length,
    word_count: word_count,
    is_valid: has_min_length && has_max_length && has_min_words,
    quality: {
      min_length_ok: has_min_length,
      max_length_ok: has_max_length,
      min_words_ok: has_min_words,
      is_spam_likely: message.length < 5 || word_count < 2
    }
  }
}];
```

---

## 2. OpenAI API Configuration

### Classification with Structured Output

**Node Type:** OpenAI (Chat)

**System Prompt:**
```
You are a B2B lead classification expert. Your job is to classify leads
based on their warmth and fit for our product.

Use this rubric:
- Hot (8-10): Clear problem, urgency, strong ICP fit, ready to buy
- Warm (5-7): Interested, some alignment, needs nurture
- Cold (0-4): Generic inquiry, low fit, just browsing

Return ONLY valid JSON, no markdown or extra text.
```

**User Message (Template):**
```
Lead Name: {{ $json.name }}
Company: {{ $json.company }}
Company Size: {{ $json.company_size }}
Industry: {{ $json.industry }}
Message: {{ $json.message }}
Message Length: {{ $json.message.length }} characters

Classify this lead now.
```

**Response Format:** Parse as JSON

**Expected Output Structure:**
```javascript
{
  warmth: "Hot" | "Warm" | "Cold",
  confidence: 0.0-1.0,
  reasoning: "brief explanation",
  fit_score: 0-10,
  key_signals: ["signal1", "signal2", "signal3"],
  red_flags: [],
  next_action: "immediate_call" | "email" | "nurture" | "archive"
}
```

### Email Generation with Customization

**Node Type:** OpenAI (Chat)

**System Prompt:**
```
You are an expert B2B sales email writer for a SaaS company.

Your emails are:
- Personalized and specific (reference their company or use case)
- Concise (4-5 sentences max)
- Direct and honest (no hype, no sales-speak)
- Focused on their problem, not our features
- Natural and conversational

Write in a tone that's professional but approachable. Use the prospect's
own language where possible. Always include a clear next step.

Return ONLY valid JSON with 'subject' and 'body' fields.
```

**User Message (Template):**
```
Draft a first-touch email for:

Name: {{ $json.name }}
Company: {{ $json.company }}
Company Size: {{ $json.company_size }}
Their message: {{ $json.message }}
Warmth Classification: {{ $json.decision.warmth }}

Key signals from their message:
{{ $json.decision.key_signals.join(', ') }}

Write the email now. Return as JSON only.
```

**Response Parsing (Function Node):**
```javascript
const emailDraft = JSON.parse($json.data);

return [{
  json: {
    email_draft: {
      subject: emailDraft.subject,
      body: emailDraft.body,
      character_count: emailDraft.body.length,
      sentence_count: emailDraft.body.split('.').length - 1
    },
    generated_at: new Date().toISOString(),
    model: 'gpt-4-turbo'
  }
}];
```

### Content Moderation Check

**Node Type:** OpenAI (Moderation)

**Use Case:** Screen user messages for inappropriate content before processing

```javascript
// Before classification, check if message is appropriate
// Using OpenAI's moderation API

// This would be configured as an HTTP request to:
// POST https://api.openai.com/v1/moderations
// with body: { "input": "{{ $json.message }}" }

// Then in a Function node to parse:
const moderation = $json.results[0];

return [{
  json: {
    is_flagged: moderation.flagged,
    categories: Object.entries(moderation.categories)
      .filter(([_, flagged]) => flagged)
      .map(([category, _]) => category),
    scores: moderation.category_scores,
    safe_to_process: !moderation.flagged,
    reviewed_at: new Date().toISOString()
  }
}];
```

---

## 3. Database Write Operations

### PostgreSQL: Insert Lead Record

**Node Type:** PostgreSQL

**Configuration:**
```
Host: {{ $secret.POSTGRES_HOST }}
Port: 5432
Database: {{ $secret.POSTGRES_DB }}
User: {{ $secret.POSTGRES_USER }}
Password: {{ $secret.POSTGRES_PASSWORD }}
SSL: always
```

**Query:**
```sql
INSERT INTO leads (
  name, email, company, company_size,
  message, warmth, fit_score, confidence,
  workflow_id, trace_id, created_at
) VALUES (
  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW()
)
RETURNING id, created_at;
```

**Query Parameters (in order):**
```
1. {{ $json.normalized_data.name }}
2. {{ $json.normalized_data.email }}
3. {{ $json.normalized_data.company }}
4. {{ $json.normalized_data.company_size }}
5. {{ $json.normalized_data.message }}
6. {{ $json.decision.warmth }}
7. {{ $json.decision.fit_score }}
8. {{ $json.decision.confidence }}
9. {{ $json.workflow_id }}
10. {{ $json.trace_id }}
```

### PostgreSQL: Update Lead Status

**Node Type:** PostgreSQL

**Query:**
```sql
UPDATE leads
SET
  warmth = $1,
  fit_score = $2,
  confidence = $3,
  processed = true,
  processed_at = NOW(),
  workflow_id = $4
WHERE email = $5
RETURNING id, updated_at;
```

**Parameters:**
```
1. {{ $json.decision.warmth }}
2. {{ $json.decision.fit_score }}
3. {{ $json.decision.confidence }}
4. {{ $json.workflow_id }}
5. {{ $json.normalized_data.email }}
```

### PostgreSQL: Batch Insert (for bulk operations)

**Node Type:** Function (before PostgreSQL)

**Use Case:** Process multiple records efficiently

```javascript
// Prepare batch insert - reduces round trips
const batch = $json.leads.map((lead, idx) => {
  const params = [
    lead.name,
    lead.email,
    lead.company,
    lead.company_size,
    lead.message,
    lead.warmth,
    lead.fit_score,
    lead.confidence,
    lead.workflow_id,
    lead.trace_id
  ];

  const index = idx + 1;
  const placeholders = Array.from({length: 10}, (_, i) => `$${i + 1}`).join(', ');

  return {
    values: params,
    placeholder: `(${placeholders})`
  };
});

// Build multi-row INSERT
const placeholders = batch.map(b => b.placeholder).join(', ');
const allValues = batch.flatMap(b => b.values);

const query = `
  INSERT INTO leads (
    name, email, company, company_size, message,
    warmth, fit_score, confidence, workflow_id, trace_id, created_at
  ) VALUES ${placeholders}
  RETURNING id, created_at;
`;

return [{
  json: {
    query: query,
    params: allValues,
    batch_size: batch.length
  }
}];
```

### Airtable: Create Record with Linked Fields

**Node Type:** Airtable

**Configuration:**
```
Base ID: {{ $secret.AIRTABLE_BASE_ID }}
Table: Leads
Operation: Create
```

**Field Mapping:**
```javascript
{
  "Name": "{{ $json.normalized_data.name }}",
  "Email": "{{ $json.normalized_data.email }}",
  "Company": "{{ $json.normalized_data.company }}",
  "Company Size": "{{ $json.normalized_data.company_size }}",
  "Warmth": "{{ $json.decision.warmth }}",
  "Fit Score": "{{ $json.decision.fit_score }}",
  "Confidence": "{{ ($json.decision.confidence * 100) | number:'0.0-0' }}%",
  "Message": "{{ $json.normalized_data.message }}",
  "Workflow ID": "{{ $json.workflow_id }}",
  "Processed": true,
  "Processing Time": "{{ $json.duration_ms }} ms",
  "Created At": "{{ new Date().toISOString() }}"
}
```

---

## 4. Error Handling Patterns

### Try-Catch in Function Node

**Node Type:** Function

**Use Case:** Gracefully handle errors without crashing

```javascript
try {
  // This might fail - enrich company data
  const enrichment = JSON.parse($json.enrichment_response);
  const company_size = enrichment.company_size;

  if (typeof company_size !== 'number' || company_size < 0) {
    throw new Error('Invalid company size value');
  }

  return [{
    json: {
      ...$items(0).json,
      enrichment: enrichment,
      success: true
    }
  }];

} catch (error) {
  // Graceful degradation: use original data
  return [{
    json: {
      ...$items(0).json,
      enrichment: null,
      success: false,
      error: error.message,
      fallback_used: true,
      error_at: new Date().toISOString(),
      needs_manual_review: true
    }
  }];
}
```

### Retry Logic with Exponential Backoff

**Node Type:** Function (paired with HTTP Request)

**Configuration Pattern:**

In the HTTP Request node, set:
- **Retry:** On error
- **Max Retries:** 3
- **Backoff:** Exponential (starts at 1s, doubles each time: 1s, 2s, 4s)

**For custom retry logic in Function:**

```javascript
// Check if we should retry based on previous attempts
const attempt = $json.retry_attempt || 1;
const max_retries = 3;
const backoff_ms = Math.pow(2, attempt - 1) * 1000; // 1s, 2s, 4s

if (attempt > max_retries) {
  return [{
    json: {
      ...$items(0).json,
      final_error: 'Max retries exceeded',
      should_alert: true
    }
  }];
}

return [{
  json: {
    ...$items(0).json,
    retry_attempt: attempt + 1,
    next_retry_delay_ms: backoff_ms,
    should_retry: true
  }
}];
```

### Error Routing (Catch Node)

**Node Type:** Switch (after potential error point)

**Configuration:**

```
Condition 1: {{ !!$json.error }}
  → Route to: Error Handler node

Condition 2: Default
  → Route to: Next processing step
```

**Error Handler Function:**

```javascript
// Central error logging and routing
return [{
  json: {
    error_type: $json.error?.name || 'UnknownError',
    error_message: $json.error?.message || 'Unknown error',
    error_stack: $json.error?.stack || null,

    // Classify severity
    severity: $json.error?.code === 'ENOTFOUND' ? 'HIGH' : 'MEDIUM',

    // What to do
    action: {
      notify_slack: true,
      notify_email: $json.severity === 'HIGH',
      retry_possible: !['AUTH_FAILED', 'VALIDATION_ERROR'].includes($json.error?.code),
      log_to_db: true
    },

    // Track for monitoring
    logged_at: new Date().toISOString(),
    execution_id: $execution.id,
    workflow_id: $json.workflow_id
  }
}];
```

### Timeout Handling

**Node Type:** Function

**Use Case:** Handle slow API responses

```javascript
// Track timeout likelihood
const response_time_ms = $json.response_time_ms || 0;
const SLOW_THRESHOLD = 5000; // 5 seconds
const TIMEOUT_THRESHOLD = 30000; // 30 seconds

return [{
  json: {
    ...$items(0).json,
    performance: {
      response_time_ms: response_time_ms,
      is_slow: response_time_ms > SLOW_THRESHOLD,
      timed_out: response_time_ms > TIMEOUT_THRESHOLD
    },
    should_retry: response_time_ms > TIMEOUT_THRESHOLD,
    alert_level:
      response_time_ms > TIMEOUT_THRESHOLD ? 'HIGH' :
      response_time_ms > SLOW_THRESHOLD ? 'MEDIUM' : 'LOW'
  }
}];
```

---

## 5. Rate Limiting & Throttling

### Simple Rate Limiter (Per-Minute)

**Node Type:** Function

**Use Case:** Prevent hitting API rate limits

```javascript
// Track calls in an n8n variable (requires state store)
// This is a simplified example

const currentMinute = Math.floor(Date.now() / 60000);
const callsThisMinute = $json.calls_this_minute || 0;
const MAX_CALLS_PER_MINUTE = 100;

if (callsThisMinute >= MAX_CALLS_PER_MINUTE) {
  const waitTime = 60000 - (Date.now() % 60000); // ms until next minute

  return [{
    json: {
      ...$items(0).json,
      rate_limited: true,
      should_pause: true,
      wait_ms: waitTime,
      resume_at: new Date(Date.now() + waitTime).toISOString()
    }
  }];
}

return [{
  json: {
    ...$items(0).json,
    rate_limited: false,
    should_pause: false,
    calls_this_minute: callsThisMinute + 1
  }
}];
```

### Wait Node for Throttling

**Node Type:** Wait

**Configuration:**
```
Wait time: {{ $json.wait_ms }} milliseconds
```

**Usage Pattern:**
```
Function: Check rate limit
    ↓
Switch: Should wait?
    → Yes: Wait node ({{ $json.wait_ms }}) → Continue
    → No: Continue directly
```

### Batch Processing with Concurrency Control

**Node Type:** Function (before loop)

**Use Case:** Process items in controlled batches

```javascript
// Split items into batches of N
const BATCH_SIZE = 10;
const MAX_CONCURRENT = 3;

const items = $json.items || [];
const batches = [];

for (let i = 0; i < items.length; i += BATCH_SIZE) {
  batches.push(items.slice(i, i + BATCH_SIZE));
}

return [{
  json: {
    batches: batches,
    total_items: items.length,
    batch_count: batches.length,
    batch_size: BATCH_SIZE,
    max_concurrent: MAX_CONCURRENT,
    processing_config: {
      mode: 'sequential_batches',
      max_parallel_per_batch: MAX_CONCURRENT,
      total_estimated_time_ms: batches.length * 1000 // rough estimate
    }
  }
}];
```

### API Response Header Parsing (Rate Limit Info)

**Node Type:** Function

**Use Case:** Read rate limit headers from API responses

```javascript
// Parse rate limit headers from API response
const headers = $json.headers || {};

const rateLimit = {
  limit: parseInt(headers['x-ratelimit-limit'] || '5000'),
  remaining: parseInt(headers['x-ratelimit-remaining'] || '5000'),
  reset: new Date(parseInt(headers['x-ratelimit-reset'] || Date.now()) * 1000),
  percentage_used: 100 - ((parseInt(headers['x-ratelimit-remaining'] || '5000') / parseInt(headers['x-ratelimit-limit'] || '5000')) * 100)
};

return [{
  json: {
    ...$items(0).json,
    rate_limit_info: rateLimit,
    should_throttle: rateLimit.percentage_used > 80,
    warning: rateLimit.remaining < 100 ? 'APPROACHING_LIMIT' : null
  }
}];
```

---

## Quick Reference

| Task | Node Type | Complexity |
|------|-----------|------------|
| Validate fields | Switch or Function | Low |
| Call OpenAI API | OpenAI node | Low |
| Create database record | PostgreSQL/Airtable | Low |
| Handle errors | Try-catch in Function | Medium |
| Rate limiting | Function + Wait | Medium |
| Batch processing | Loop + Function | High |
| State management | Database + Function | High |

---

**Note:** All code snippets are examples. Adapt to your specific API keys (stored in n8n Credentials), field names, and business logic.

For more details, see the main 9_Automations_Guide.md.
