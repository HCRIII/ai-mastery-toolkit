# Level 6: Asset Production

**Created:** 2026-02-13
**Last Updated:** 2026-02-25 (channel structure added — 22 channels mirroring Level 5)
**Purpose:** Active content asset production using SDD workflow
**Status:** Current

---

## Portability Principle

**The Toolkit stays lean and portable. Binary and media files live outside it.**

The Toolkit is a portable intelligence system — all files inside are plain-text markdown. This keeps it lightweight, AI-navigable, and easy to move or back up. Binary files (images, video, exported HTML, PDFs, Word docs) disrupt portability: they add bulk, can't be read by AI, and belong in specialized storage.

**The rule:**
- ✅ **Stays in Toolkit:** Markdown files — content, specs, scripts, briefs, prompts, strategy docs
- ✅ **Stays in Toolkit:** Asset Index files — lightweight `.md` files that describe and locate binary assets
- ❌ **Goes to Asset Library:** Images, video, exported HTML, PDFs, Word docs, any binary file

**Where binary files live:**
`Claude Cowork/AI Mastery Toolkit v4_assets/` — a sibling folder at the Claude Cowork root, organized with the same project folder names as Level 6. This folder is not part of the Toolkit and is not version-controlled with it.

---

## Asset Index Files

When a binary asset exists (or was created and deployed), an **Asset Index file** lives in its place inside the Toolkit. The index file is a short markdown record (~15 lines) that answers:

1. What is this asset?
2. What tool/workflow was used to create it?
3. Where is the file? (Asset Library path)
4. Where was it deployed? (URL or archive location)
5. What status is it at?

**Naming convention:** `[asset-name]-asset-index.md` for individual assets; `_[project]-index.md` for grouped asset collections (e.g., all HTML exports for a site section).

**Example Asset Index file:**

```markdown
# Home Page Hero Image — Asset Index

**Asset Type:** Image (PNG)
**Status:** Deployed — live on community site
**Tool:** Midjourney v6 (prompt in Home_Page_Image_Prompts.md)

## File Location
`AI Mastery Toolkit v4_assets/Community-Site/10 Home Page/Home Page Images & Prompts/home-page-1-approach-ceiling-recognition.png`

## Deployment Location
[URL when deployed]
```

---

## Status-State Folder System

**Core principle:** Folders carry state intelligence. Files carry content.

Each production project uses a standard four-folder progression:

| Folder | Status | Who Acts |
|--------|--------|----------|
| `01_Brief/` | Project defined, SDD brief written | Human/AI prep |
| `02_Draft/` | SDD output — raw AI-generated drafts | AI generates; Human reviews |
| `03_Review/` | Human-selected files moved here | Human refines and annotates |
| `04_Complete/` | Approved assets, ready to deploy | Human takes to specialized tools |

No metadata fields to fill. The folder location IS the status.

---

## SDD Workflow at Level 6

1. **Brief** — Define the asset in `01_Brief/`. Include audience, intent, constraints, examples.
2. **Generate** — AI produces multiple variants into `02_Draft/` (one file per asset, named by content).
3. **QC** — Human scans `02_Draft/` names → opens and evaluates → moves keepers to `03_Review/`.
4. **Refine** — Human refines in `03_Review/` → moves approved to `04_Complete/`.
5. **Deploy** — Take `04_Complete/` markdown to specialized tools (image generators, email platforms, WordPress, etc.).
6. **File the asset** — Move the binary output to `AI Mastery Toolkit v4_assets/[matching path]`. If no binary was created (markdown-only asset), skip this step.
7. **Create index** — If a binary file was created, create an Asset Index `.md` file in the Level 6 project folder documenting the asset, its creation workflow, and its Asset Library location.
8. **Archive** — When a project is fully deployed, move the project folder to the Projects archive drive. Level 6 should only contain in-progress production projects.

---

## Channel Folder Structure

Level 6 is organized by distribution channel, mirroring the 22 channels in Level 5 Content Strategy.
Each channel folder contains an `INDEX.md` tracking active production projects for that channel.

| # | Channel | Folder | Status |
|---|---------|--------|--------|
| 01 | Main Website | `01_Main-Website/` | Empty |
| 02 | Community Site | `Community-Site/` | Active / ongoing |
| 03 | Course Site | `03_Course-Site/` | Empty |
| 04 | Email List | `04_Email-List/` | Empty |
| 05 | Lead Magnets | `05_Lead-Magnets/` | Empty |
| 06 | YouTube | `06_YouTube/` | Empty |
| 07 | LinkedIn | `07_LinkedIn/` | Empty |
| 08 | Facebook | `08_Facebook/` | Empty |
| 09 | Instagram | `09_Instagram/` | Empty |
| 10 | X | `10_X/` | Empty |
| 11 | Substack | `11_Substack/` | Empty |
| 12 | Medium | `12_Medium/` | Empty |
| 13 | Reddit | `13_Reddit/` | Empty |
| 14 | Podcast Interview | `14_Podcast-Interview/` | Empty |
| 15 | Public Speaking | `15_Public-Speaking/` | Empty |
| 16 | Quora | `16_Quora/` | Empty |
| 17 | Personal Network Outreach | `17_Personal-Network-Outreach/` | Empty |
| 18 | SSRN | `18_SSRN/` | Empty |
| 19 | OSF Preprints | `19_OSF-Preprints/` | Empty |
| 20 | ResearchGate | `20_ResearchGate/` | Empty |
| 21 | Academia.edu | `21_Academia-edu/` | Empty |
| 22 | Zenodo | `22_Zenodo/` | Empty |

**Non-channel folders (pre-date channel structure):**

| Folder | Status | Notes |
|--------|--------|-------|
| `Social-Profiles/` | In progress | Facebook SDD active; LinkedIn evaluation |
| `AI Mastery Toolkit v4 — Handout/` | Complete | Exported files in Asset Library |

**Last Updated:** 2026-02-25 — Channel structure built to mirror Level 5 (22 channels)

---

## What Does NOT Belong Here

- Binary files of any kind (images, video, audio, PDFs, Word docs, HTML exports) → `AI Mastery Toolkit v4_assets/`
- Deployed/live content → Cloud (PS_Layer 3)
- Completed archived projects → Projects archive drive (PS_Layer 2)
- Strategy documents → Level 5 Content Strategy
- Offering specs → Level 4 Offering Specs
