# Document and Folder Formatting Standards - Part 01: Foundation Standards

**Part:** 01 of 07
**Created:** 2026-02-13
**Last Updated:** 2026-02-28
**Version:** v2.2
**Estimated Tokens:** ~1,200
**Purpose:** Markdown, File Metadata, File Naming, Folder Naming
**Parent Document:** Document_Formatting_Standards_v2.2.md
**Chunk Index:** 0_Standards_INDEX_v2.2.md
**Previous Chunk:** None (first chunk)
**Next Chunk:** 2_Organization_Standards_v2.2.md

---

## 1. Markdown Format Requirement

**STANDARD:** All documentation files MUST use Markdown format (.md extension).

**File Extension:** `.md`

**Character Encoding:** UTF-8

**Line Endings:** LF (Unix-style) or CRLF (Windows-style) - be consistent within repository

**Rationale:** [See Guide Section 3](../../2_How_To_Guides/0_Documentation_Standards_Guide.md#markdown-the-foundation-format)

---

## 2. File Metadata Standard

### Required Metadata Block

**Position:** First content in document, before any other text

**Format:**
```markdown
# [Document Title]

**Created:** YYYY-MM-DD
**Last Updated:** YYYY-MM-DD
**Purpose:** [One-line description]

---

## [Content begins]
```

### Field Specifications

| Field | Required | Format | Example |
|-------|----------|--------|---------|
| Title | YES | `# Title` (H1 heading) | `# Brand Guidelines` |
| Created | YES | `YYYY-MM-DD` | `2026-02-13` |
| Last Updated | YES | `YYYY-MM-DD` | `2026-02-13` |
| Purpose | YES | One sentence, <100 chars | `Visual brand standards and voice` |
| Version | CONDITIONAL* | `vX.Y` format | `v2.1` |
| Status | OPTIONAL | Draft \| Review \| Final | `Final` |

*Required for versioned documents

### Additional Fields for Versioned Documents

**Add these fields when using version tracking:**

```markdown
**Version:** vX.Y
**Previous Version:** vX.Y-1 (optional link)
```

### Additional Fields for Educational Content

**Add these fields for courses and lessons:**

```markdown
**Learning Objectives:** [Comma-separated objectives]
**Prerequisites:** [Required prior knowledge or courses]
**Estimated Time:** [N] minutes/hours
**Difficulty:** Beginner | Intermediate | Advanced
```

### Additional Fields for Chunked Documents

**Add these fields for file chunks:**

```markdown
**Part:** [N] of [Total]
**Estimated Tokens:** [count]
**Parent Document:** [filename]
**Chunk Index:** [index_filename]
**Previous Chunk:** [prev_filename]
**Next Chunk:** [next_filename]
```

### Prohibited Practices

**NO metadata at document end** - violates progressive retrieval
**NO duplicate metadata** - wastes tokens
**NO version history blocks** - use Git instead
**NO "Related Documents" sections** - use INDEX files
**NO emojis in content** - non-contributing and wasteful of tokens

---

## 3. File Naming Conventions

### Standard File Naming Format

```
[Descriptive_Name]_v[VERSION].md
```

**Rules:**
- Use underscores for spaces
- Title_Case_Each_Word
- Alphanumeric characters + underscores + hyphens only
- Include version number for tracked documents
- Extension: `.md`
- Length: 3-50 characters (excluding version and extension)

**Examples:**
```
Brand_Guidelines_v4.1.md
Personal_Preferences_v1.16.md
Project_Overview_v1.0.md
Session_Summary_v2.0.md
```

### Dated File Names (for session tracking, logs)

```
YYYY-MM-DD_Descriptive_Name.md
```

**Examples:**
```
2026-02-13_Session_Summary.md
2026-02-13_Work_Report.md
2026-02-Week1_Review.md
```

### Timestamped File Names (for high-frequency updates)

```
YYYY-MM-DD-HH-MM_Descriptive_Name_vX.md
```

**Examples:**
```
2026-02-13-15-30_SuperContext_v18.md
2026-02-12-14-45_Personal_Preferences_v1.15.md
```

> **Indexing Prefixes vs. Document Type Suffixes:** Date and timestamp formats are **indexing prefixes** — they sort files chronologically in file system listings and have no bearing on document type. They are always placed at the front of the filename. Document type suffixes (see Document Type Suffix Naming below) signal document class and are placed at the end, before the version. Both can coexist on the same file:
> ```
> 2026-02-28_Session_Debrief_CX6.md   ← date prefix (indexing) + CX6 suffix (type)
> 2026-02-28_Newsletter_Draft_Newsletter.md  ← date prefix + Newsletter suffix
> ```
> The presence of a date prefix does not replace or override the type suffix. Apply both when both apply.

### Special Purpose File Names

| Purpose | Format | Example |
|---------|--------|---------|
| Template | `Name_TEMPLATE_vX.md` | `Work_Report_TEMPLATE_v2.0.md` |
| Schema / Standard | `Name_SCHEMA_vX.md` | `Specification_Document_Standard_SCHEMA_v1.0.md` |
| Worked Example | `Name_EXAMPLE.md` | `Specification_Companion_Course_EXAMPLE.md` |
| Index | `INDEX.md` | `INDEX.md` |
| README | `README.md` | `README.md` |
| Chunk | `Name_Chunk_NN_vX.md` | `Guide_Chunk_05_v1.0.md` |
| Chunk Index | `Name_INDEX_vX.md` | `Guide_INDEX_v1.0.md` |
| Consolidated | `Name_Consolidated_vX.md` | `Guide_Consolidated_v1.0.md` |
| Module Content | `Module_Lesson_Topic_vX.md` | `Fundamentals_Variables_Scope_v1.0.md` |

### Hierarchical Naming (for 100+ files)

```
[LEVEL]_[SEQUENCE]_[MODULE]_[TOPIC]_vX.md
```

**Components:**
- `[LEVEL]`: 0-4 (0=overview, 1=module, 2=lesson, 3=topic, 4=detail)
- `[SEQUENCE]`: 001-999 (zero-padded)
- `[MODULE]`: Module identifier
- `[TOPIC]`: Topic identifier
- `vX`: Version

**Examples:**
```
0_000_Course_Overview_v1.0.md
1_001_Fundamentals_Introduction_v1.0.md
2_015_Fundamentals_Core_Concepts_v1.0.md
3_022_Fundamentals_Practice_Exercises_v1.0.md
```

### Document Type Suffix Naming

Some documents signal their type (not just their purpose) using a document-class suffix. These suffixes are used when the document belongs to a recognized class in the toolkit's type system — enabling AI to apply appropriate conventions automatically on load.

**Format:**
```
Descriptive_Name_TYPE_vX.md
```

The type suffix follows the descriptive name and precedes the version number. For files without versions, the type suffix is the final element before the extension.

**Examples:**
```
Content_Architecture_Framework_v1.0.md
Social_Media_System_Specification_v1.0.md
Newsletter_Production_Workflow_v2.0.md
April_2026_Newsletter.md
System_Preferences_CX0_v34.md
```

**Reference:** See `Document_Type_Registry.md` in this folder for the complete registry of recognized document types, their suffixes, and when to use each.

### Prohibited Practices

**NO spaces** in filenames - use underscores
**NO special characters** - alphanumeric + underscore + hyphen only
**NO vague names** - "doc.md", "notes.md", "file1.md"
**NO inconsistent casing** - choose one style, apply consistently
**NO missing versions** on versioned documents

---

## 4. Folder Naming Conventions

### Standard Folder Naming Format

```
[Number]_Descriptive_Name
```

**Rules:**
- Numeric prefix for sort order (0-99 typical, 000-999 for large systems)
- Underscore separator
- Title_Case_Each_Word
- Alphanumeric + underscores only
- No version numbers on folders (version individual files instead)
- Length: 3-50 characters

**Examples:**
```
0_Documentation_Standards
1_Prompts
2_How_To_Guides
3_AI_&_Human_Capabilities
4_Context_Files
```

### Hierarchical Folder Structure (for large collections)

```
[LEVEL]_[Category_Name]/
├── INDEX.md
├── README.md
├── [Files...]
└── [Subfolders if needed]
```

**Examples:**
```
Course_Library_v1.0/
├── INDEX.md
├── README.md
├── 0_Overview/
├── 1_Fundamentals/
├── 2_Intermediate/
└── 3_Advanced/
```

### Module Folder Naming (for courses/large systems)

```
[MODULE_NUMBER]_Module_Name/
```

**Examples:**
```
1_Fundamentals/
2_Intermediate/
3_Advanced/
4_Resources/
```

### Subfolder Guidelines

**Rules:**
- Keep folder hierarchy to 3-4 levels maximum
- Each folder should contain 10-150 files (split if exceeding)
- Each folder with 10+ files must have INDEX.md
- Each folder should have README.md for human guidance

### Special Purpose Folders

| Purpose | Format | Example |
|---------|--------|---------|
| Archive | `archive/` or `_archive/` | `archive/` |
| Templates | `templates/` or `_templates/` | `templates/` |
| Drafts | `drafts/` or `_drafts/` | `drafts/` |
| Generated | `generated/` or `_generated/` | `generated/` |
| Assets | `assets/` or `_assets/` | `assets/` |
| Images | `images/` or `_images/` | `images/` |
| Code Examples | `examples/` or `code_examples/` | `code_examples/` |
| Solutions | `solutions/` or `_solutions/` | `solutions/` |

**Note:** Use underscore prefix for special folders that should sort first

### Prohibited Practices

**NO spaces** in folder names - use underscores
**NO special characters** except underscore and hyphen
**NO deeply nested hierarchies** (>4 levels) - restructure instead
**NO folders exceeding 150 files** - split into subfolders
**NO inconsistent numbering schemes** - be systematic


---

## System Terminology Prefixing Standard

**Purpose:** The toolkit uses multiple systems that each employ numbered or named "layers." To prevent ambiguity, each distinct layer system uses a unique prefix. This standard governs all documentation, prompt files, context files, and any new content created in the toolkit.

### Active Prefixes

| Prefix | Full Name | System | Example |
|--------|-----------|--------|---------|
| `SC_Layer` | SuperContext Layer | The 7 structural sections of the SuperContext file (SC_Layer 1–7, with sublayers SC_Layer 5A–5D) | `SC_Layer 3 — Working Context` |
| `PS_Layer` | Physical Storage Layer | The 3 storage tiers in the Document Architecture Map (Local/Cowork, Archive Drives, Cloud) | `PS_Layer 1: Local / Cowork` |

### Named (Non-Prefixed) Layer Systems

These layer systems are already uniquely named and do not require a prefix:

| System | Term Used | Reason No Prefix Needed |
|--------|-----------|-------------------------|
| Context Files functional tiers | "Intelligence Layer" (Levels 0-3) and "Production Layer" (Levels 4-6) | Proper names, not numbered — no collision risk |
| Cognitive Architecture Methodology | "Seven-Layer Model" or "The Seven Layers" | Refers to [User]'s proprietary framework (IP Doc 09); context always makes it clear |
| How-To Guide process structures | "Three-Layer Error Strategy", "Three Layers of Monitoring" | Self-contained within guide sections; not cross-referenced |
| Generic adjective use | "multi-layered", "layered architecture" | Adjectival — no reference to a specific numbered system |

### Enforcement Rules

1. **All new documents** that reference SuperContext sections must use `SC_Layer N` notation
2. **All new documents** that reference Physical Storage tiers must use `PS_Layer N` notation
3. **Existing documents** in the active system (prompts, SuperContext, Architecture Maps, Toolkit Documentation) use the prefixed standard
4. **Historical records** (SuperContext Archive, dated Daily Debriefs, Case Evidence files) are intentionally left with legacy terminology — do NOT retroactively edit these
5. **When creating new layer systems** in the toolkit, assign a unique 2-3 character prefix before writing any documentation for that system

### Rationale

The word "Layer" is used in 6 distinct ways across this toolkit. Without prefixes, numbered references like "Layer 1", "Layer 4", or "Layer 3" are genuinely ambiguous — they could refer to SuperContext sections, Physical Storage tiers, or How-To Guide process structures. The SC_ and PS_ prefixes resolve this at the point of use without requiring the reader to hold context about which system is being discussed.

**Added:** 2026-02-24

---

## Chunk Navigation

- **Back to Index:** [0_Standards_INDEX_v2.2.md](0_Standards_INDEX_v2.2.md)
- **Previous:** None (first chunk)
- **Next:** [Organization Standards](2_Organization_Standards_v2.2.md)
- **Full Document:** [Document_Formatting_Standards_v2.2.md](Document_Formatting_Standards_v2.2.md)
