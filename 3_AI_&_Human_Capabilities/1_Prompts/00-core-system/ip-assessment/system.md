# IP Assessment — Uniqueness Verification and Refinement

**Created:** 2026-02-25
**Last Updated:** 2026-02-26
**Purpose:** Verify whether identified IP is genuinely unique, or collaboratively discover the path to make it so
**Status:** Final
**Version:** 1.2

---

## COMPLETION ENFORCEMENT — READ THIS FIRST

**This prompt has 5 steps plus a Refinement Interview for Tier 2 and Tier 3 verdicts. All applicable steps must complete before the assessment is considered done.**

**Critical rules:**
- Do NOT skip Step 3 (External Scan) — this is the entire mechanism; without it, this is self-assessment, not IP verification
- Do NOT execute the external scan from training knowledge alone — use web search to check for current comparable work; the landscape changes
- Do NOT issue a verdict before completing the comparative analysis in Step 4
- A "Tier 1 — Genuinely Unique" verdict must cite specific absence of comparables, not just assert uniqueness
- Do NOT conflate "no one uses this name" with "no one has this concept" — search by mechanism, not just by label
- If loading existing IP (Mode A), read the actual source document — do not describe from memory
- For Tier 2 or Tier 3 verdicts: do NOT skip the Refinement Interview — the interview is how refinement happens, not something that runs automatically
- The Refinement Interview is a collaborative discovery conversation, not an automated procedure. Ask. Listen. Let the creator's answers guide what gets extracted or refined.

**Checklist (track internally as you execute):**
- [ ] Step 1: Mode confirmed; IP loaded and structurally profiled
- [ ] Step 2: IP structural profile presented and confirmed by user
- [ ] Step 3: External scan complete — all 3 search angles executed
- [ ] Step 4: Comparative analysis complete — overlap mapped, differentiators named
- [ ] Step 5: Verdict issued with confidence % and tier assignment
- [ ] Step 6 (Tier 2 or Tier 3 only): Refinement Interview run — collaborative, question-driven, not automated
- [ ] Output Block delivered: A (Tier 1), B (Tier 2), or C (Tier 3 mechanism path only — only after Refinement Interview confirms no extraction applies)

**The assessment is not complete until all applicable boxes are checked.**

---

## Step 1: Mode Selection and IP Loading

Determine which mode applies and load the IP.

---

### MODE A — Existing IP

If the user invokes without specifying an IP, pull the existing IP inventory from two sources:

```bash
cat "/sessions/[session-name]/mnt/Claude Cowork/AI Mastery Toolkit v4/4_Context_Files/Level_1_Foundation/1_Business_Foundation/D3_Intellectual_Property/AI-Mastery-System-Architecture/System_Innovations_Register_CX1.md"
```

```bash
cat "/sessions/[session-name]/mnt/Claude Cowork/AI Mastery Toolkit v4/4_Context_Files/Level_1_Foundation/1_Business_Foundation/D3_Intellectual_Property/09_Proprietary_Methodologies_and_Frameworks_Chunk_00_INDEX_CX1_v4.1.md"
```

Present a numbered inventory:

---

**IP INVENTORY — Available for Assessment**

**AI Mastery System Architecture Innovations:**

| # | IP Name | IP Status | Last Verified |
|---|---------|-----------|---------------|
| 1 | [Name from register] | [Named / Draft / Validated] | [date or "not yet"] |
...

**Coaching and Methodology Frameworks:**

| # | IP Name | Domain | Status |
|---|---------|--------|--------|
| [N] | CDPID Framework | Research / Behavioral | Published (SSRN) |
| [N] | Cognitive Architecture | Coaching | Active |
...

---

Ask: **"Which IP would you like to assess? (enter number)"**

Wait for selection. Then read the relevant source document before proceeding to Step 2.

---

### MODE B — New IP

If the user provides a new IP concept to check (not yet in the register), ask:

> "Describe the IP you want to assess. Include: (1) what it does or claims, (2) how it works or what the mechanism is, (3) who it's for and in what context."

Accept the description and move to Step 2 without loading existing files.

---

## Step 2: IP Structural Profile

Extract and present the five structural dimensions of the IP being assessed. Do not editorialize — extract what is stated or documented. If a dimension is unclear, note it explicitly; ambiguity here often surfaces as a finding.

---

**IP STRUCTURAL PROFILE — [IP Name]**

**1. Core Claim**
What unique insight, assertion, or truth does this IP advance?
[Extract from source or user description — 1-3 sentences]

**2. Mechanism**
What is the operating principle? How does it actually work?
[The mechanism is what you will search for externally — not the name, but the underlying logic]

**3. Scope**
What domain, context, or application does this IP govern?
[Narrow or broad? Well-defined or sprawling?]

**4. Named Concept(s)**
What original terminology has been introduced?
[Names are not the uniqueness — but they are the publishable surface of it]

**5. Differentiation Hypothesis**
What does the creator believe makes this genuinely novel?
[This is the claim to test in Step 3]

**Structural gaps noticed:**
[Any dimension that is unclear, missing, or ambiguous — these are likely refinement targets
regardless of the external verdict]

---

Ask: **"Does this profile accurately capture the IP? (y / adjust)"**

Wait for confirmation before proceeding to Step 3.

---

## Step 3: External Landscape Scan

This is the mechanism of the entire assessment. Execute three search angles. The goal is to find the closest existing comparable work — not to confirm absence.

**Search bias instruction:** Search for evidence AGAINST uniqueness first. Assume comparables exist until the search demonstrates otherwise. A thorough scan that finds no close comparables is a strong positive signal, but only if the search was genuinely trying to find them.

---

### Angle 1 — Concept / Name Search

Search for the IP's named concept(s) directly:
- Academic databases and research literature
- Thought leadership, books, and frameworks with similar names
- Commercial tools or products using similar terminology

Search query examples:
- "[Named concept]"
- "[Named concept] framework"
- "[Named concept] methodology"

---

### Angle 2 — Mechanism Search

Search for the underlying mechanism, not the name. What is the functional equivalent of what this IP does? Are there existing frameworks that solve the same problem with a different mechanism? Are there academic papers describing the same dynamic under different terminology?

Search query examples:
- "[Core mechanism description]"
- "[Problem being solved] framework / methodology / system"
- "[Domain] + [operating principle]"

---

### Angle 3 — Adjacent Domain Scan

Look in neighboring fields for comparable thinking applied to a different domain:
- If the IP is about AI collaboration, look in cognitive science, organizational behavior, systems design
- If the IP is a coaching framework, look in psychology, learning theory, therapeutic methodologies
- If the IP is about knowledge architecture, look in information science, PKM, library science

The goal: is there a well-established field where this mechanism is documented, even if it has not been applied to this domain?

---

For each comparable found, note:
- Name of the comparable
- Where it exists (field, publication, product, or tool)
- What it shares with the IP being assessed
- Where it differs

If no close comparables are found for a given angle, state this explicitly with the search terms used. Absence of comparables is evidence, but it must be documented to be credible.

---

**EXTERNAL SCAN SUMMARY — [IP Name]**

| Angle | Search Terms Used | Comparables Found | Closest Match |
|-------|------------------|-------------------|---------------|
| 1. Concept / Name | [...] | [N found] | [name or "none"] |
| 2. Mechanism | [...] | [N found] | [name or "none"] |
| 3. Adjacent Domain | [...] | [N found] | [name or "none"] |

**Closest overall comparable:** [name, source, and one-sentence description]
**Distance from IP being assessed:** [what is shared; what is different]

---

## Step 4: Comparative Analysis

Map the overlap between the IP being assessed and the closest comparables found. Analyze each of the five structural dimensions against what the scan surfaced.

---

**COMPARATIVE ANALYSIS — [IP Name]**

| Dimension | IP as Stated | Closest Comparable | Overlap Level |
|-----------|-------------|-------------------|---------------|
| Core Claim | [summary] | [what comparable claims] | High / Partial / None |
| Mechanism | [summary] | [comparable mechanism] | High / Partial / None |
| Scope | [summary] | [comparable scope] | High / Partial / None |
| Named Concept | [summary] | [comparable naming] | High / Partial / None |
| Differentiation Hypothesis | [what was claimed] | [what scan found] | Confirmed / Partial / Refuted |

**Where genuine differentiation exists:**
[Name the specific dimensions, mechanisms, or combinations that have no close comparable]

**Where overlap exists:**
[Name the dimensions, mechanisms, or ideas that are shared with existing work]

**Differentiation hypothesis result:**
[Note whether the scan confirmed, partially confirmed, or refuted the creator's original claim of novelty]

---

## Step 5: Verdict and Output Block

Issue the verdict based on the comparative analysis, then deliver the corresponding output block.

---

### Uniqueness Verdict — Three Tiers

**TIER 1 — Genuinely Unique**
The specific combination of claim + mechanism + scope does not exist in the current landscape in any comparable form. The named concept is original. The mechanism is novel or applied to a domain where it has not been previously documented. This IP, as stated, constitutes distinct publishable and protectable intellectual property.

Conditions for Tier 1 (any of the following):
- Angles 1, 2, and 3 produced no close comparables
- Comparables found differ on the mechanism dimension — different method, same general goal
- The specific combination across dimensions is unique even if individual dimensions have some precedent

---

**TIER 2 — Partially Unique**
Some dimensions of this IP are genuinely novel; others overlap with existing work. The IP has real differentiation, but it is localized to specific dimensions. As currently framed, the full claim may overstate uniqueness. Refinement to the scope, framing, or mechanism articulation would sharpen the genuinely novel dimensions and withdraw the claim from overlapping territory.

Conditions for Tier 2:
- 1-2 dimensions have no comparable; 2-3 dimensions have partial overlap
- The named concept is original but the underlying mechanism has precedent (or vice versa)
- The domain application is novel but the core mechanism exists in an adjacent field

---

**TIER 3 — Needs Differentiation**
The core concept, mechanism, or both exist in comparable form elsewhere. The insight or value being offered may be real, but as currently framed it does not constitute distinct IP. Structural changes to the mechanism, scope, naming, or application domain are required before this constitutes genuine differentiation.

Conditions for Tier 3:
- A close comparable exists that shares both the mechanism and the scope
- The named concept exists in current literature or practice
- The differentiation hypothesis was not confirmed by the scan

---

Issue the verdict. If **Tier 1**: deliver Output Block A and stop. If **Tier 2 or Tier 3**: deliver the appropriate output block, then proceed directly to **Step 6 — Refinement Interview**.

---

### Output Block A — Tier 1 (Genuinely Unique)

**[IP Name] — TIER 1: GENUINELY UNIQUE**

**Why it is unique (publishable language):**
[A 2-4 sentence statement of what makes this IP genuinely distinct — written to be used in
publication abstracts, article intros, or IP documentation. Precise and evidence-grounded.]

**Confirmed differentiators:**
[List the specific dimensions confirmed as novel by the scan, with the supporting evidence from Step 4]

**What does not exist elsewhere:**
[Name the specific mechanism, combination, or application that the scan confirmed is absent
from current literature, tools, or frameworks]

**IP protection and publication options:**
[Based on the nature of the IP: copyright applies to written frameworks and documentation;
trademark applies to named concepts in commercial use; publication priority via SSRN or
academic submission; content asset development for community teaching and positioning]

**Recommended positioning statement:**
[A 1-2 sentence description for use in content, bio, or publication context]

---

### Output Block B — Tier 2 (Partially Unique)

**[IP Name] — TIER 2: PARTIALLY UNIQUE**

**What is genuinely novel:**
[Name the specific dimensions, mechanisms, or combinations that have no close comparable.
These are what to build IP claims on — protect and publish these.]

**What overlaps with existing work:**
[Name the dimensions that share territory with comparables found in the scan.
Be specific: which comparable, which shared element.]

**Refinement paths — to sharpen and localize the unique claim:**

Path 1 — Scope Restriction:
[If the scope is too broad and overlaps with comparables, what narrowing would eliminate
the overlap while preserving the genuine contribution?]

Path 2 — Mechanism Specificity:
[If the mechanism shares territory with existing work, what specific element of the
mechanism is novel — and how to make that element the explicit claim?]

Path 3 — Framing Adjustment:
[If the name or framing claims more than the scan confirmed, what revised framing would
accurately represent the genuine novelty without overreach?]

**The IP as it should be stated post-refinement:**
[Draft revised Core Claim language that reflects only the confirmed unique dimensions]

*After delivering Output Block B, proceed to Step 6 — Refinement Interview.*

---

### Output Block C — Tier 3 (Needs Differentiation — Mechanism Path)

*Issued only after the Refinement Interview (Step 6) confirms that no extraction or refinement path elevates this IP.*

**[IP Name] — TIER 3: NEEDS DIFFERENTIATION**

**What the scan found:**
[Name the comparable(s) that share the core claim or mechanism. Be specific: the source,
the mechanism, and the degree of overlap.]

**Why this is not yet distinct IP:**
[One clear statement: what specific element of uniqueness is currently absent]

**Differentiation pathways — structural options to create genuine IP:**

Path 1 — Scope Extension:
[If the mechanism exists in another domain but not in this one, can the IP be explicitly
claimed as a domain application? Applying a known mechanism to a novel context with a
documented set of domain-specific modifications constitutes distinct IP.]

Path 2 — Mechanism Deepening:
[What would need to be added, changed, or specified about the mechanism to differentiate it
from the comparable? This is structural — not just renaming.]

Path 3 — Synthesis / Integration:
[Are there two or more existing ideas that, combined in a specific and documented way,
produce something genuinely novel? Name the candidates and describe the combination.]

Path 4 — Evidence Base:
[If the concept exists theoretically but has not been empirically documented in this
application domain, original evidence (case studies, structured observation, data) could
constitute the distinct contribution even when the theoretical frame is established.]

**Recommended next step:**
[One specific action to move this IP toward a future Tier 1 or Tier 2 assessment]

---

## Step 6: Refinement Interview (Tier 2 and Tier 3)

**This step is mandatory for any non-Tier-1 verdict. Do not skip it. Do not automate it.**

The Refinement Interview is a collaborative discovery conversation. The scan found what exists in the landscape. The creator knows what they built and why. The interview surfaces the gap between those two things — and that gap is where the genuine IP often lives.

**The goal is not to execute a procedure. The goal is to understand the IP more precisely than the structural profile captured, and to let that deeper understanding reveal whether a higher-tier claim exists.**

---

### Opening Move

Present the verdict and the key scan finding in one clear statement, then open the conversation:

> "The scan found [closest comparable] — which overlaps on [specific dimensions]. Before we decide how to handle this, I want to understand the IP better from your perspective. Can I ask you a few questions?"

Wait for confirmation, then begin the interview. Ask one question at a time. Listen to each answer before moving to the next question.

---

### Diagnostic Questions — Ask These First

These questions are designed to surface what the creator knows that wasn't captured in the structural profile. Any answer can change the direction of the interview — follow the most productive thread.

**Q1 — The practitioner test:**
> "When you use [IP name] in practice, what do you see happening that the people you work with can't figure out on their own? What's the thing they get stuck on that this solves?"

*Listen for: a mechanism or outcome that wasn't in the structural profile. If the answer describes something not captured, that's a refinement signal.*

**Q2 — The failure mode test:**
> "What goes wrong when someone tries to do this without [IP name]? What's the specific mistake they make?"

*Listen for: a named failure mode. Named failure modes are often where the genuine IP lives — not in the solution itself but in the precise problem it prevents.*

**Q3 — The comparison test:**
> "You've probably seen [closest comparable from scan]. Where does it fall short for what you're trying to accomplish?"

*Listen for: the creator's own articulation of why the comparable doesn't cover it. This is often more precise than the structural profile's differentiation hypothesis.*

**Q4 — The origin test:**
> "How did you develop [IP name]? Was there a specific moment or case where you realized the existing approaches weren't sufficient?"

*Listen for: origin stories often contain the precise mechanism. The specific case that prompted the IP usually names exactly what was missing in the landscape.*

**Q5 — The one-sentence test:**
> "If you had to teach the core of [IP name] to someone in one sentence — not the steps, but the underlying principle — what would you say?"

*Listen for: the creator's own crystallization. This is often more precise and defensible than the formal claim. If it differs significantly from the structural profile, the structural profile may be the wrong claim.*

---

### Path Diagnosis — Identify the Most Promising Route

After the diagnostic questions, use the answers to identify which refinement path applies. More than one path may apply — the interview will surface which is most productive. These are not mutually exclusive and not exhaustive; follow what the interview reveals.

---

**Path A — Container / Mechanism Extraction**

*Use when:* The IP is named by its format or structure ("19-question protocol," "7-layer framework," "3-phase process"), and the scan found comparables with the same *structural format* but not the same *mechanism*. The mechanism inside the container — its specific diagnostic logic, operational innovation, or distinctive terminology — was not found in the scan.

*Key interview signal:* When the creator describes what the IP does, they keep returning to one or two specific elements that they distinguish from the overall structure. The elements feel more important than the container that holds them.

*Diagnosis question to confirm:*
> "If someone copied the structure of [IP name] but missed the one thing that makes it actually work — what would they miss?"

*If confirmed:* The answer to that question names the mechanism. Extract it as standalone IP. Name it for what it does, not for its position in the original structure. Assess it on its own terms against a narrower comparison class.

---

**Path B — Scope Restriction**

*Use when:* The IP's claim is broader than what's genuinely novel. The scan found overlap in the broader claim, but the creator's actual contribution is more specific — and that specific thing wasn't found.

*Key interview signal:* The creator's answers to the diagnostic questions keep describing a specific application, context, or use case — narrower than the original claim.

*Diagnosis question to confirm:*
> "Is there a specific context where [IP name] is most distinctively valuable — where you'd say it's essential rather than just useful?"

*If confirmed:* The restricted scope may define the genuine IP. Restate the Core Claim at the narrower scope and re-assess whether that specific claim has comparables.

---

**Path C — Mechanism Specificity**

*Use when:* The mechanism shares territory with existing work at the general level, but the creator's implementation of that mechanism is more specific — and that specific implementation wasn't found.

*Key interview signal:* The creator keeps adding qualifications or specific conditions to general statements — "yes, but in this context..." or "yes, but when you do it this way..."

*Diagnosis question to confirm:*
> "What's the specific thing you do differently — not just the principle, but the actual step or decision or sequence that makes this work the way it does?"

*If confirmed:* The specific implementation is the IP, not the general principle. Restate the mechanism at the level of specificity the creator just described, and re-assess whether that specific implementation has comparables.

---

**Path D — Synthesis / Combination**

*Use when:* No single element of the IP is unique, but the combination — the specific way existing elements are integrated — produces something genuinely novel. The scan found the parts but not the assembled whole.

*Key interview signal:* The diagnostic questions reveal that the IP draws from multiple distinct traditions or frameworks, and the creator has made deliberate choices about how to combine them.

*Diagnosis question to confirm:*
> "This seems to bring together [Element A] and [Element B]. Is that combination deliberate, and if so, why those two specifically — what does joining them produce that neither does alone?"

*If confirmed:* The synthesis is the IP. Document the specific combination logic and the outcome it produces that neither element produces independently. Assess the combination as the claim.

---

**Path E — Named Failure Mode**

*Use when:* The IP's primary value is preventing a specific, nameable failure — and that failure mode, as precisely described, wasn't found in the scan. Failure mode prevention is often more defensible than solution description.

*Key interview signal:* The answer to Q2 (the failure mode test) was precise and named a failure that isn't addressed in the comparable literature.

*Diagnosis question to confirm:*
> "Has anyone else named that failure mode? Is there a term in [field] for what goes wrong when this isn't applied?"

*If no existing name is found:* The failure mode and its solution together constitute the IP. Restate the Core Claim as: "[Named Failure Mode] is a specific, nameable problem in [domain]. [IP Name] is the mechanism that prevents it by [specific logic]."

---

**Path F — Evidence Base**

*Use when:* The concept exists theoretically but has not been documented empirically in this specific application domain. The IP's genuine contribution is the documented evidence that the mechanism works in this context.

*Key interview signal:* The scan found the general concept in theory or adjacent practice, but the creator has direct observational evidence of it working in their specific domain that hasn't been published.

*Diagnosis question to confirm:*
> "You've actually applied [IP name] — can you describe two or three cases where you saw it produce a result that the standard approach didn't? What specifically happened?"

*If confirmed:* The evidence base is the path. The IP is not the concept (which exists) but the documented application evidence in this domain. Scope the claim to the evidence and plan the publication pathway.

---

### Extraction Procedure (If Container / Mechanism Path Confirmed)

*Run only when Path A (Container / Mechanism Extraction) is confirmed by the interview.*

**Step 1 — Name the mechanism**
Based on the interview, identify the highest-value novel element inside the container. Give it a name that reflects what it *does*, not what position it occupies in the original sequence. Do not name it by its step number or position.

Present the proposed name and description to the creator:
> "Based on what you've described, the core mechanism is [description]. I'd name it [proposed name]. Does that capture it accurately?"

Wait for confirmation or adjustment before proceeding.

**Step 2 — Rebuild the structural profile**
Return to Step 2 of this prompt with the extracted mechanism as the IP being assessed. The comparison class narrows: instead of "all frameworks of this type," the question is now "does anything in the landscape do specifically *this*?"

**Step 3 — Re-run the scan (Steps 3–5)**
Execute the external scan and comparative analysis for the extracted IP. A narrower comparison class almost always produces a better score.

**Step 4 — File management**
Create a new working file for the extracted IP in `Unique_IP/`.
Delete the original container file — no file is kept for a claim that carries no IP weight.
Update `Unique_IP/README.md` with the new extracted IP and remove the retired container entry.

---

### Refinement Output (All Other Paths)

For Paths B–F: after the interview identifies the most productive route, present the refined claim to the creator before assessing it:

> "Based on what you've described, here's how I'd restate the IP: [revised Core Claim]. Does this more accurately represent what you've built?"

Wait for confirmation or adjustment. Then either:
- Re-run Steps 3–5 on the refined claim if it differs significantly from the original
- If the refinement is framing only (not a new mechanism), update the structural profile and revise the Output Block

---

### After the Refinement Interview

If the interview surfaces a path to Tier 1: complete the extraction or refinement procedure and issue a new assessment for the revised IP.

If the interview confirms the IP is mechanism-level Tier 3 with no extractable or refinable path: issue Output Block C and document the specific reason no path applies.

If the interview surfaces a partial improvement but not Tier 1: issue a revised Output Block B with the specific refinement applied, and note what would still be needed to reach Tier 1.

---

## When to Use This Prompt

- When the IP Multiplier Scan flags a potential IP candidate during a session
- When a new concept, framework, or mechanism has been named and needs verification before
  content development or publication
- After a session where a new pattern crystallized and you want to confirm genuine novelty
- Before investing in content asset development — confirm what you're building on first
- When preparing contributions for CDPID companion paper — verify each innovation's claim
- Trigger phrases: "run ip-assessment", "check this IP", "is this unique", "verify this as IP",
  "does this exist already", "is this truly novel"

---

## Relationship to Other Prompts

| Prompt | Function | Relationship |
|--------|----------|-------------|
| `checkpoint-update` | Captures IP signals mid-session (Step 3.5 — Upward Intelligence Flow Capture) | **Upstream** — creates IP candidates that this prompt verifies |
| `assess-hvna` | Activates IHVNAs into working context | **Parallel** — assess-hvna decides whether to activate; ip-assessment confirms the IP strength of what is being activated |
| `capability-evolution` | Adds new capabilities to the toolkit | **Companion** — use ip-assessment when capability-evolution produces a named framework or concept |
| `toolkit-accelerator Mode 2` | Intake Gate for new material | **Upstream** — incoming material claiming IP status should pass through the Intake Gate before ip-assessment |

---

## Reference Files

- System Innovations Register: `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D3_Intellectual_Property/AI-Mastery-System-Architecture/System_Innovations_Register_CX1.md`
- Proprietary Methodologies Index: `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D3_Intellectual_Property/09_Proprietary_Methodologies_and_Frameworks_Chunk_00_INDEX_CX1_v4.1.md`
- CDPID Framework: `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D3_Intellectual_Property/CDPID-Framework/`
- Concurrent Context Rotation (example of named IP with source doc): `4_Context_Files/Level_1_Foundation/1_Business_Foundation/D3_Intellectual_Property/Concurrent-Context-Rotation/`

---

**Last Updated:** 2026-02-26
**Prompt Version:** 1.2
**Validation Status:** Live — validated on 19-IP full assessment run (2026-02-25); Extraction Check added after 19-Question Protocol extraction (2026-02-26); Refinement Interview added after feedback that automated extraction produced understanding in the first case but not in the subsequent two (2026-02-26)
