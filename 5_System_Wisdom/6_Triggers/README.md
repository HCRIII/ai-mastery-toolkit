# Triggers

**Purpose:** Define the conditions under which the system captures snapshots, flags learning moments, and invokes recording mechanisms. Triggers are meta-level system hooks — they govern when and how the wisdom system captures data.

**Why This Exists:** Context compression is uncontrollable. Significant learning moments, behavioral shifts, and emergent insights can be lost if they aren't captured when they occur. Both the human and the AI need the ability to notice an important moment and trigger a capture. The cost in tokens and thread cadence is well worth the gained system capability.

**Two Trigger Sources:**

### Human-Initiated Triggers
The human notices something significant and invokes a capture prompt. This is already functional — the human can call a snapshot prompt at any time. The trigger definitions here formalize what "significant" means so the human has a quick-reference for when to invoke.

### AI-Initiated Triggers
The AI notices something significant during the session and flags it for capture. This is the newer capability. The AI should be able to:
1. Recognize a trigger condition during normal work
2. Flag it to the human: "I'm observing [condition] — this may warrant a snapshot"
3. With human confirmation, generate the appropriate snapshot(s)
4. Continue with the work thread with minimal disruption

**Trigger Conditions (Initial Set — expand as patterns emerge):**

| Trigger | Description | Who Notices | What Gets Captured |
|---------|-------------|-------------|-------------------|
| Behavioral Shift | Observable change in how either party is operating (new capability demonstrated, failure mode resolved, friction response changed) | Either | Relevant taxonomy snapshot(s) |
| Emergent Insight | An idea, framework, or understanding that neither party had before the exchange — evidence of dyadic cognition | Either | Dyadic snapshot + System Intelligence entry |
| Failure Mode Episode | A clear instance of a known or new failure mode with enough context to analyze | Either | AI taxonomy snapshot + notes |
| Flow State Entry/Exit | The dyad enters or exits a sustained generative cycle | Either | Dyadic snapshot |
| Productive Friction Resolution | A friction moment that was handled well and produced structural improvement | Either | Relevant taxonomy snapshot(s) + Case Evidence note |
| Context Architecture Change | A significant change to how context is organized, stored, or loaded — the infrastructure shifted | Either | All three taxonomy snapshots (the system itself changed) |
| Research-Relevant Observation | Something that directly supports, challenges, or extends a CDPID framework claim | Either | System Intelligence entry + Case Evidence note |

**Trigger Protocol:**

1. **Notice** — Either party recognizes a trigger condition
2. **Flag** — State what was observed and which trigger type it matches
3. **Confirm** — Brief mutual acknowledgment (human approval if AI-initiated)
4. **Capture** — Generate the appropriate snapshot(s) using the templates
5. **Resume** — Return to the work thread

**Design Note:** Triggers should be lightweight. The flag-confirm-capture cycle should take under 2 minutes. If it takes longer, the trigger protocol itself needs refinement. The goal is to capture the moment, not to analyze it — analysis happens later when reviewing accumulated snapshots.

**Folder Contents:**

- `Trigger_Definitions.md` — Complete trigger condition definitions with examples (this will grow as new trigger types are discovered)
- `Trigger_Log.md` — Running log of trigger events with timestamps and outcomes (token-efficient, append-only)
