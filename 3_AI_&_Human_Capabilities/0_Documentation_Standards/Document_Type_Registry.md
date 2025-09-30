# Document Type Registry

**Created:** 2026-02-28
**Last Updated:** 2026-03-07
**Purpose:** Canonical registry of all recognized document types in the AI Mastery Toolkit, their file type suffixes, and the behavioral conventions each type implies for AI processing
**Status:** Final
**Version:** v1.0

---

## Purpose of This Registry

When an AI loads a file, it can infer a great deal from a document's title, structure, and metadata — but only if those signals are consistent and deliberate. The Document Type Registry establishes a formal vocabulary of document classes. Each class has a defined type suffix that appears at the end of the filename (before the version number), signaling what kind of document this is before a single line of content is read.

**Naming convention:** `Descriptive_Name_TYPE_vX.md`

This matters for three reasons:

**1. Immediate context loading.** An AI loading `Content_Architecture_Framework_v1.0.md` knows before reading it that this document defines a thinking structure, not a production sequence. It applies framework-reading conventions immediately. An AI loading `April_2026_Newsletter.md` knows to apply content voice conventions, not system architecture conventions.

**2. Conflict resolution.** When multiple context files are loaded in a session, the hierarchy of authority matters. A file with suffix `CX1` outranks a file with suffix `CX5`. Without this signal in the filename, an AI must infer authority from folder position — which is slower and error-prone, especially when context files are referenced out of their native folder.

**3. Prompt compression.** The core principle of this toolkit is that human prompts get shorter as AI system sophistication increases (Prompt Complexity Inversion). Document type suffixes are a mechanism for that compression: a human can write "load my CX1 files" instead of "load my Level 1 Foundation files, which govern everything below them." The suffix does the explanatory work.

---

## Category 1: Process Document Types (The 3-Step Path)

These suffixes mark documents that belong to the three-phase process at the core of the AI Mastery Toolkit's production architecture: **Framework → Specification → Workflow**. Together, they constitute the complete path from conceptual design to executable production.

| Suffix | Full Class Name | Phase | What It Governs |
|--------|----------------|-------|-----------------|
| `Framework` | Framework Document | Step 1: Think | Defines the conceptual structure, principles, and logic model for a capability domain. Answers: "How should I think about this?" |
| `Specification` | Specification Document | Step 2: Define | Defines precisely what will be built, who it serves, what it must do, and how success is measured. Answers: "What exactly are we building?" |
| `Workflow` | Workflow Document | Step 3: Build | Defines the step-by-step operational sequence for executing a production process. Answers: "How do we build it, in what order, with what checks?" |

### How AI Should Treat Each

**When loading a `Framework` document:**
- Treat content as definitional and conceptual, not operational
- Do not attempt to execute steps from a Framework; use it to inform thinking
- Framework content governs Specification writing — if a Specification conflicts with its governing Framework, flag the conflict

**When loading a `Specification` document:**
- Treat content as the authoritative governing document for a production initiative
- Requirements use "shall" language — these are not preferences
- A Baselined Specification is locked; note version before acting on it
- Success criteria in Section 9 define done — not the human's session instructions

**When loading a `Workflow` document:**
- Treat content as an executable sequence
- Follow phase gates and checkpoints — do not skip
- A Workflow is subordinate to its governing Specification; if conflict arises, Specification wins
- Triggers and entry criteria in the Workflow define when execution begins

### File Naming Examples

```
Compound_Content_Architecture_Framework_v1.0.md
AI_Mastery_Companion_Course_Specification_v1.0.md
Newsletter_Production_Workflow_v2.1.md
```

> **Note on existing files:** The toolkit's 7_Frameworks, 8_Specifications, and 9_Workflows folders were established before this registry. Files within those folders already carry the type word naturally at the end of their name (e.g., `01_Session_Rhythm_Framework.md`) and are already compliant. The explicit type suffix is most valuable when these document types appear outside their home folders — for example, when a Specification is stored in a Level 4 context file folder alongside other document types.

---

## Category 2: Content Document Types

These suffixes mark documents that are final or near-final content deliverables — documents that will be published, posted, sent, or distributed. They exist to carry voice, format, and platform-specific conventions into the filename, enabling AI to apply the correct style guide on load without requiring explicit instructions.

| Suffix | Full Class Name | Platform / Channel | Format Conventions |
|--------|----------------|--------------------|--------------------|
| `Newsletter` | Newsletter Content | Email newsletter (subscriber list) | Long-form, structured sections, warm tone, curated content, clear CTA |
| `Email` | Email Content | Direct email (transactional, outreach, marketing) | Shorter than newsletter, single-purpose, subject line critical, personal tone |
| `Blog` | Blog Post Content | Website / blog | SEO-aware, long-form, searchable headline, skimmable structure, internal links |
| `LI-Post` | LinkedIn Post Content | LinkedIn (professional social) | Professional tone, narrative hook, line breaks for readability, 1-3 hashtags, no hard links in body |
| `FB-Post` | Facebook Post Content | Facebook (community/social) | Warmer and more casual than LinkedIn, can include direct links, image-first orientation |
| `Article` | Article Content | Editorial, thought leadership, syndication | Most formal of content types; byline, citations, structured argument, polished language |
| `X-Thread` | X Thread Content | X / Twitter (public social feed) | 6–8 tweet thread; each tweet standalone at 240 chars max; mystery/paradigm hook opens; video or link in final tweet; high-information-density feed rewards cool, atmospheric, incongruous visual and copy |
| `IG-Caption` | Instagram Caption Content | Instagram (visual social, 1:1 grid) | Hook in first 3 lines; 50–150 words; 5–8 hashtags at close; caption supports the grid image which carries the primary hook; caption tone is conversational-to-aspirational |
| `Video-Outline` | Video Outline Content | YouTube / recorded video production | Bullet-point talking structure only — NOT a script; Hook → Problem → Concept → Proof → Implication → CTA arc; recorded conversationally from outline; 5–8 bullets per section |
| `Landing-Page` | Landing Page Content | Website lead capture page | Pain statement → IP concept → specific promise → email capture CTA; feature-specific (one pain, one promise per page); 400–800 words; no navigation distractions; each landing page serves one lead magnet feature |
| `Thumbnail-Prompt` | Channel Thumbnail Image Prompt | AI image generation (Midjourney, DALL-E, Nano Banana) | Ready-to-paste prompt for a single channel thumbnail image; governed by the applicable channel Visual Image Brief (01c–01g in D1_Strategic_Foundation); includes stage assignment, focal object or composition, and complete Style Block; one file per IP concept per channel; produces one image file |

### How AI Should Treat Each

**On loading any content document type:**
1. Load the applicable Brand Guidelines and Key Message Platform before drafting or editing (unless confirmed already loaded this session)
2. Apply the channel-specific conventions for that suffix (see table above)
3. Treat the Sacred Terminology rules as absolute — never alter protected terms
4. Calibrate length, tone, and structure to the platform, not to general writing conventions

**Format expectations by type:**

```
[Issue-or-Date]_Newsletter.md                    → Multi-section, 600–1200 words
[Subject-or-Purpose]_Email.md                    → Single-section, 150–400 words
[Topic-Slug]_Blog_v1.0.md                        → 800–2000 words, SEO headline
[Topic-Slug]_LI-Post.md                          → 150–400 words, paragraph breaks
[Topic-Slug]_FB-Post.md                          → 50–200 words, conversational
[Title-Slug]_Article_v1.0.md                     → 1000–3000 words, structured
[Topic-Slug]_X-Thread.md                         → 6–8 tweets, each ≤240 chars, thread numbered
[Topic-Slug]_IG-Caption.md                       → 50–150 words + 5–8 hashtags
[IP-Concept-Slug]_Video-Outline.md               → Bullet-point outline, 5–8 bullets/section
[Feature-Slug]_Landing-Page.md                   → 400–800 words, single CTA
[IP-Concept-Slug]_Thumbnail-Prompt.md            → Single ready-to-paste image generation prompt
```

### File Naming Examples

```
March_2026_Issue_12_Newsletter.md
[Your Organization] Outreach_Welcome_Sequence_01_Email.md
Why-Specifications-Matter_Blog_v1.0.md
Prompt-Complexity-Inversion_LI-Post_2026-03-01.md
Community-Launch-Announcement_FB-Post.md
AI-Mastery-Path_Article_v1.0.md
Experiential-Technology_X-Thread.md
Session-Harvest_IG-Caption.md
Experiential-Technology_Video-Outline.md
F02-Experiential-Technology_Landing-Page.md
Experiential-Technology_Thumbnail-Prompt.md
```

---

## Category 3: Context File Hierarchy Types

These suffixes mark Context Files — the files that AI loads to understand the operating context of a session. The number in the suffix signals the authority level of the file: lower numbers carry higher authority and govern higher numbers in any conflict.

This hierarchy reflects the intelligence architecture of the toolkit: system-level preferences govern strategic foundation documents, which govern project-level context, which governs offering-level specifications, which governs session-level state.

| Suffix | Authority Level | Corresponds To | What It Contains |
|--------|----------------|----------------|-----------------|
| `CX0` | Highest authority | Level 0: System Preferences & Architecture | Human working preferences, AI operating defaults, Dyadic conventions, SuperContext state, Document Architecture Map |
| `CX1` | Strategic authority | Level 1: Foundation | Brand Guidelines, Key Message Platform, ICP profiles, OKR Set, strategic vision |
| `CX2` | Initiative authority | Level 2: Strategy & Projects | Active project briefs, campaign plans, launch sequences, annual strategy |
| `CX3` | Portfolio authority | Level 3: Portfolio | Offering portfolio map, client journey, offering profiles |
| `CX4` | Offering authority | Level 4: Offering Specs | Product and offering specifications, course structures, service definitions |
| `CX5` | Channel authority | Level 5: Content Strategy | Channel guidelines, content strategies, deployment vectors |
| `CX6` | Lowest authority | Level 6: Asset Production | Production templates, asset indexes, session artifacts |

### Conflict Resolution Rule

When two loaded context files provide conflicting information, the file with the **lower CX number wins**. Always.

If a `CX3` working note says "the newsletter is biweekly" but a `CX1` Key Message Platform says "the newsletter is weekly," the `CX1` file is authoritative. Flag the discrepancy rather than silently resolving it — it likely indicates an update is needed in one of the files.

### How AI Should Treat Each

**On loading any `CX` file:**
1. Note the suffix number — this is its authority level
2. Before applying any guidance from the file, check whether a higher-authority file already loaded this session contradicts it
3. If contradiction found: follow the higher-authority file and flag the conflict in your response

**Loading order recommendation (when loading multiple context files):**
Load from highest authority to lowest — `CX0` first, `CX6` last. This ensures that when a lower-authority file is loaded, the AI already has the governing framework in place.

### File Naming Examples

```
Human_Preferences_CX0_v34.md
SuperContext_CX0_v56.md
Brand_Guidelines_CX1_v4.1.md
OKR_Set_2026_CX2.md
[Your Organization] Outreach_Launch_Brief_CX2.md
Working_Notes_Week_9_CX3.md
Companion_Course_Spec_CX4_v1.0.md
Session_Debrief_CX6_2026-02-28.md
```

> **Note on existing files:** Context files currently in 4_Context_Files/ are organized by Level folder and do not carry `CX` suffixes in their existing filenames. The `CX` suffix system is most valuable when context files are referenced directly in prompts or loaded outside their native folder structure, where folder position cannot signal authority. Renaming existing files is not required and should only be done intentionally.

---

## Using the Registry

### When to Apply a Document Type Suffix

Apply a suffix when:
- The document type would not be immediately obvious from its folder location alone
- The document will be referenced in prompts or loaded by AI outside its home folder
- Multiple document types coexist in the same folder
- You want AI to apply type-specific conventions automatically without explicit instructions

Do not apply a suffix when:
- The document is already unambiguously typed by its folder (e.g., a Workflow step file inside a Workflow folder)
- The suffix would create redundancy (e.g., `Framework` suffix on a file already inside `7_Frameworks/`)

### Adding New Document Types

To add a new document type to this registry:
1. Confirm the type is genuinely distinct from all existing types (not just a variant)
2. Define its suffix (2–10 characters, Title Case, no spaces)
3. Define its authority level (for CX types) or its channel conventions (for content types)
4. Document the behavioral conventions AI should apply when it encounters the suffix
5. Update the Last Updated date on this file

---

*Document Type Registry v1.0 — AI Mastery Toolkit v4 | Documentation Standards*
