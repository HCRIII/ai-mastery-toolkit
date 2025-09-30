# content-vector

**Created:** 2026-02-25
**Last Updated:** 2026-02-25
**Purpose:** Identifies the highest-leverage content initiative from active projects, maps the full asset set top-down, and produces all assets in a single session using loaded context as the multiplier
**Status:** Final
**Version:** 1.0
**Framework:** Implements `Compound_Content_Architecture.md` in `3_AI_&_Human_Capabilities/7_Frameworks/`

---

## ⚠️ COMPLETION ENFORCEMENT — READ THIS FIRST

This Operation has 6 steps. All must complete before the session is done.

**Checklist (track internally):**
- [ ] Step 0: Content context loaded
- [ ] Step 1: Highest-leverage initiative identified
- [ ] Step 2: Full asset map built and presented
- [ ] Step 3: User confirms asset scope for this session
- [ ] Step 4: Assets produced — all confirmed files
- [ ] Step 5: Session summary output

**The session is not complete until confirmed files exist for every asset in scope.**

---

## Design Principles — Read Before Executing

**Context is the multiplier, not effort.** Once brand voice, audience psychographics, key messages, and framework IP are loaded, the marginal cost of each additional content asset approaches zero. Do not default to sequential, single-asset production. The question is not "what one thing will we produce?" — it is "what is the full asset set, and how many can we produce right now?"

**The Effort Inversion Principle.** AI systems are biased toward treating content production as effort-proportional. This is wrong when context is loaded. Light markdown content files are trivially produced at scale. Never accept internal resistance to producing multiple assets as a production constraint. If context is loaded and the vector is clear, produce at scale.

**Top-down vector discipline.** Always start at strategic intent and work down to individual assets. Do not start at the asset level. Starting top-down ensures every asset is strategically aligned by construction.

**The review gate is not friction — it is strategy.** Between Step 2 (map) and Step 4 (produce), the user reviews the full asset map. This is not a delay — it is the strategic moment where scope is set and concurrent thread opportunities are identified.

**Output is always files.** Every asset produced in this session must exist as a file before the session closes. A conversation without file output is not a completed content-vector session.

---

## Step 0: Load Content Context (Silent)

Load the following context before doing anything else. This is the context load that makes everything else efficient.

**Always load:**
1. Brand Guidelines — `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/01_Brand_Guidelines_CX1.md`
2. Key Message Platform — `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/02_Key_Message_Platform.md`
3. Ideal Client Profiles — `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D1_Strategic_Foundation/04_Ideal_Client_Profiles.md`
4. Active projects table — SC_Layer 2 of current SuperContext: locate dynamically using `ls [toolkit-root]/4_Context_Files/Level_0_Map_&_Preferences/*SuperContext*v*.md | grep -v "_Archive" | sort -V | tail -1`

**Load if available and relevant:**
5. Content Strategy for the target offering — `4_Context_Files/Level_5_Content_Strategy/[Offering-Name]/Content_Strategy.md`
6. Offering Spec for the target initiative — `4_Context_Files/Level_4_Offering_Briefs/[Offering-Name]/[Offering]_Specifications.md`
7. CDPID framework IP (if initiative involves research/authority content) — `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D3_Intellectual_Property/CDPID-Framework/`

Do NOT output anything to the user during this step.

---

## Step 1: Identify the Highest-Leverage Initiative (Output to User — Brief)

From the active projects table and SC_Layer 1 strategic identity, identify the single highest-leverage content initiative. Apply these filters in order:

1. **Urgency filter:** Is there an initiative marked 🔥 Next or 🔥 Top Strategic Priority that requires content output?
2. **Compound filter:** Which initiative, if given content assets, would serve the most simultaneous strategic objectives — research credibility, community growth, AI discovery (GEO), platform amplification?
3. **Context richness filter:** Which initiative has the richest available context already loaded? Richer context = higher asset quality at lower marginal cost.

State the identified initiative in one sentence and explain why it scored highest on these filters. Ask the user to confirm or redirect before proceeding to Step 2.

---

## Step 2: Build the Full Asset Map (Output to User)

Once the initiative is confirmed, map the complete asset set top-down:

**Level 1 — Initiative framing:** One paragraph that could serve as the strategic brief for all assets. This is the shared foundation every asset will draw from.

**Level 2 — Content types:** List every type of content this initiative warrants. Examples: foundational long-form article, platform-specific posts (LinkedIn, Substack, Medium, X/Twitter), email sequence, course module, case study, FAQ document, promotional copy, visual content brief.

**Level 3 — Individual assets × channels:** For each content type, enumerate the specific assets. Name each one. Note channel-specific variations.

**Concurrent thread opportunities:** Flag any clusters of assets that can be produced in parallel Cowork threads rather than sequentially in this thread. Suggest the thread structure if parallelism makes sense.

Present the full map to the user. Do not produce assets yet.

---

## Step 3: Confirm Session Scope (Wait for User)

Present the full asset map from Step 2. Ask the user:

1. Which assets are in scope for this session (produce now)?
2. Which are flagged for concurrent threads (produce now in parallel)?
3. Which are deferred to a future session?

Wait for confirmation. Update the asset scope list based on the user's response. Confirm the confirmed scope back to the user in a numbered list before beginning production.

---

## Step 4: Produce All In-Scope Assets

For each confirmed in-scope asset, produce it in full and save it as a file.

**File location:** `4_Context_Files/Level_6_Asset_Production/[Offering-Name]/[Initiative-Name]/02_Draft/[AssetName].md` or the appropriate Level 6 production folder for the offering. If the offering's Level 6 folder does not yet exist, create it following the standard Level 6 structure: `01_Brief/`, `02_Draft/`, `03_Review/`, `04_Complete/`.

**Production rules:**
- Produce each asset completely — do not produce partial drafts unless the user explicitly requests a partial
- Each asset is its own file — one file per asset, named descriptively
- Apply brand voice, key messages, and ICP context from Step 0 — every asset must reflect loaded context, not generic content
- Channel-specific assets must be optimized for their channel's format, length norms, and audience expectations
- CDPID or other proprietary framework references must be accurate — load the relevant framework doc if needed

**Concurrency note:** If the user is running parallel Cowork threads, provide each thread with: (a) the initiative brief from Step 2 Level 1, (b) the specific assets assigned to that thread, and (c) the file path structure for saving. Each thread operates independently on its asset cluster.

**After each batch of related assets:** Confirm file names and locations before moving to the next batch.

---

## Step 5: Session Summary

When all in-scope assets are complete, output the session summary:

1. Initiative: [name]
2. Assets produced this session: [numbered list of file names and locations]
3. Assets deferred: [numbered list, if any]
4. Concurrent thread assignments (if applicable): [what each thread was assigned]
5. Recommended next action: [next logical step — e.g., "Review and move to 03_Review/", "Run concurrent threads for deferred assets", "Update Content Calendar"]

---

## Notes

- This Operation implements the Compound Content Architecture framework. Read `3_AI_&_Human_Capabilities/7_Frameworks/Compound_Content_Architecture.md` if the principles behind this Operation need context.
- The Effort Inversion Principle is active throughout. Never underproducewhen context is loaded and the vector is clear.
- Three-version distinction: assets produced here are channel-specific publishable versions. The toolkit-portable framework version lives in `7_Frameworks/`. The IP-wrapped working version is a separate context asset — not produced by this Operation.
- If a required context file (Brand Guidelines, ICP, etc.) is missing or out of date, flag it before Step 1. Thin context produces thin assets — the multiplier requires rich inputs.
- This Operation can produce any volume of assets in a single session. There is no practical upper limit given sufficient context richness. The review gate (Step 3) is the capacity control mechanism.

---

**End of content-vector v1.0**
**Session (2026-02-25):** Created as the procedural counterpart to `Compound_Content_Architecture.md`. Implements the four principles: Context Multiplier, Value Generation Vector, Concurrency Default, Effort Inversion. Review gate between map (Step 2) and production (Step 4) is the strategic scope-setting moment. ⚠️ This prompt was created in-session. Validation requires a fresh cold-start session to confirm prompt-driven behavior.
