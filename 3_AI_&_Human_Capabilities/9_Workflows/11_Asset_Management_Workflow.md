# Asset Management Workflow

**Created:** 2026-02-25
**Version:** v1.0
**Purpose:** Govern how binary and media assets are handled within the AI Mastery Toolkit v4 system — keeping the Toolkit portable while maintaining clear records of all asset files.

---

## Core Principle

The Toolkit is a portable intelligence system. It contains only plain-text markdown files. Binary files (images, video, HTML exports, PDFs, Word docs) live in the sibling Asset Library folder outside the Toolkit, but within the same Claude Cowork workspace.

**Two locations, two roles:**

| Location | Role | Contents |
|----------|------|----------|
| `AI Mastery Toolkit v4/` | Intelligence system | Markdown only — specs, content, briefs, strategy, index files |
| `AI Mastery Toolkit v4_assets/` | Asset Library | Binary files — images, video, HTML exports, PDFs, exports |

The Asset Library mirrors the project folder structure of Level 6. Same project names, same subfolder structure.

---

## Decision Rule: Does This File Stay in the Toolkit?

Ask: **Is this file plain-text and readable by an AI?**

- **Yes (markdown, .md, .txt)** → Stays in the Toolkit in the appropriate Level 6 project folder
- **No (image, video, HTML, PDF, Word, audio, binary)** → Goes to `AI Mastery Toolkit v4_assets/` at the matching path

**Edge cases:**
- `.html` files → Asset Library (they're generated exports, not source documents)
- `.pdf` files → Asset Library (even if text-based; PDFs are fixed-format exports)
- `.docx` files → Asset Library (Word docs are binary format exports)
- Large `.csv` or data files → Asset Library (too bulky for the Toolkit)

---

## Workflow: When You Create a Binary Asset

1. **Create the asset** using the appropriate external tool (Midjourney, Descript, WordPress, Canva, Word, etc.)

2. **Place the file** in the Asset Library at the matching path:
   `AI Mastery Toolkit v4_assets/[same path as its Level 6 project folder]/`
   Example: If the asset belongs to `Level_6_Asset_Production/Community-Site/10 Home Page/`, place it at `AI Mastery Toolkit v4_assets/Community-Site/10 Home Page/`

3. **Create an Asset Index file** in the Level 6 project folder at the matching path.
   Use the template: `Asset_Index_Template.md` (this folder)
   Name it: `[asset-name]-asset-index.md` or `_[collection-name]-index.md` for grouped assets

4. **Fill in the Asset Index** with:
   - Asset type and description
   - Tool/workflow used to create it
   - Full Asset Library path
   - Deployment URL (when deployed)
   - Status

5. **Update project status** — if this completes the production phase, advance the project through the SDD status-state folders (move to `04_Complete/` if ready)

---

## Workflow: When an Asset Is Deployed

1. Note the deployment URL in the Asset Index file
2. Update the **Status** field to `Deployed`
3. The file stays in the Asset Library (for re-use, future iterations, or archival)
4. When the entire project is complete and archived, move the project folder from Level 6 to the Projects archive drive (PS_Layer 2). The Asset Index files move with the Level 6 project folder. The Asset Library folder for that project can be archived or deleted based on storage needs.

---

## Workflow: When You Need an Asset File

1. Find the Asset Index `.md` file in the Level 6 project folder
2. Read the **File Location** field — it gives the full Asset Library path
3. Navigate to `Claude Cowork/AI Mastery Toolkit v4_assets/[path]`

---

## Asset Library Structure

The Asset Library (`AI Mastery Toolkit v4_assets/`) is organized to mirror Level 6 project names:

```
AI Mastery Toolkit v4_assets/
├── [Project Name A]/          ← matches Level_6_Asset_Production/[Project Name A]/
│   └── [subfolder structure mirrors Level 6]
├── [Project Name B]/
└── ...
```

When creating a new Level 6 project that will generate binary assets, create the matching folder in the Asset Library at the same time.

---

## AI Behavior Notes

When working in Level 6:
- Expect only markdown files inside the Toolkit
- Binary asset files are NOT here — check the Asset Index `.md` files for their locations
- Do not attempt to read or process files from the Asset Library path (AI cannot access binary files)
- Asset Index files ARE the Toolkit's record of what binary assets exist
- If you need to describe what an image contains: read the Asset Index and any associated prompt/brief files
