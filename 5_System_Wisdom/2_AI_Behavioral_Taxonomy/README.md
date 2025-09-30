# AI Behavioral Taxonomy

**Purpose:** Track the AI actor's behavioral patterns, failure mode tendencies, capability levels, and adaptive performance as experienced by this specific dyad over time.

**What Is Tracked:**

- **Interpretive Behaviors** — Semantic role resolution, intent inference accuracy, frame activation patterns, presupposition extraction quality
- **Generative Behaviors** — Option generation quality, structured proposal construction, calibrated uncertainty signaling, failure acknowledgment and pivot speed
- **Adaptive Behaviors** — Context integration depth, register calibration, feedback integration completeness, proactive depth escalation
- **Failure Mode Tendencies** — Interpretation substitution frequency, context collapse patterns, premature convergence, semantic drift, sycophantic convergence
- **Autonomous Runtime Capability** — Scope of tasks the AI can execute effectively without human intervention, given current context architecture

**What Is NOT Tracked Here:**

- Human behaviors (see 1_Human_Behavioral_Taxonomy/)
- Interaction quality between the two actors (see 3_Dyadic_Dynamic_Taxonomy/)
- Task-specific outputs (see 4_Context_Files)

**Key Design Note:** The AI does not persist between sessions. This profile is the mechanism by which AI behavioral development compounds across sessions. The human curates this profile. The AI reads it at session start, operates from it, self-assesses during the session, and captures meaningful changes at checkpoint. The next session starts from the updated baseline.

**Folder Contents:**

- `Current_State.md` — Present behavioral profile; loaded into AI context at session start
- `Comprehensive_Taxonomy.md` — Full map of all known AI behavioral dimensions organized by tier (Interpretive, Generative, Adaptive, Failure Modes)
- `YYYY-MM-DD-HH-MM_Snapshot.md` — Timestamped captures of behavioral state at checkpoint moments
- `_Archive/` — Older snapshots stored for longitudinal analysis
