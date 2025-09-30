# Document and Folder Formatting Standards - Part 02: Organization Standards

**Part:** 02 of 07
**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Version:** v2.2
**Estimated Tokens:** ~1,200
**Purpose:** INDEX Files, README Files, Document Structure, File Chunking
**Parent Document:** Document_Formatting_Standards_v2.2.md
**Chunk Index:** 0_Standards_INDEX_v2.2.md
**Previous Chunk:** 1_Foundation_Standards_v2.2.md
**Next Chunk:** 3_Content_Standards_v2.2.md

---

## 5. INDEX File Standard

### When INDEX Required

**Threshold:** Folders with 10+ files MUST have INDEX.md

**Purpose:** Enable progressive file discovery without reading all files

**Exceptions:**

Some folders should NOT have INDEX files despite meeting the 10+ file threshold:

- **Daily-accumulating folders** (session logs, tracking history, date-stamped files)
  - Files accumulate continuously
  - Chronological order is primary organization
  - INDEX would require daily updates
  - Example: Daily session debriefs, practice tracker history
  - Solution: Parent folder gets INDEX listing subfolders; subfolders remain unindexed

- **Time-series data folders** (version history, archives)
  - Files organized by date/time in filename
  - Natural chronological sorting is sufficient
  - INDEX adds no discovery value

**If uncertain whether to create INDEX:**
- Ask: "Does this folder accumulate files daily/continuously?"
- Ask: "Is chronological order the primary organization?"
- Ask: "Would INDEX require constant maintenance?"
- If yes to any: Consider exception, ask user before creating INDEX

### INDEX File Format

```markdown
# [Folder/Collection Name] Index

**Last Updated:** YYYY-MM-DD
**Total Files:** [count]
**Purpose:** [One-line description]

---

## [Category 1]

- `filename_1.md` - Brief description
- `filename_2.md` - Brief description

## [Category 2]

- `filename_3.md` - Brief description
- `filename_4.md` - Brief description

[Continue for all files...]
```

### INDEX File Specifications

| Element | Required | Format |
|---------|----------|--------|
| Title | YES | `# Collection Name Index` |
| Last Updated | YES | `YYYY-MM-DD` |
| Total Files | YES | Numeric count |
| Purpose | YES | One sentence |
| Category headings | YES | `## Category` |
| File listings | YES | ``- `filename` - description`` |

### Category Organization

**Group files by:**
- Topic (all "Brand" files together)
- Type (all "Templates" together)
- Sequence (all "Module 1" files together)
- Status (all "Final" files together)

**Do NOT mix grouping strategies within single INDEX**

### Multi-Level INDEX Structure

**Root INDEX:** Points to module-level INDEXes
**Module INDEX:** Lists all files in that module

**Root INDEX Format:**
```markdown
# Master Index

**Total Files:** [count across all modules]
**Purpose:** Master navigation

---

## Module 1 ([N] files)
[See 1_Module/INDEX.md for details]

## Module 2 ([N] files)
[See 2_Module/INDEX.md for details]
```

### Prohibited Content in INDEX Files

**INDEX files are for AI progressive retrieval - keep them lean and non-redundant.**

**DO NOT include:**
- Redundant "Quick Reference" or "Quick Discovery" sections that duplicate the categorized listings above
- "See also" navigation blocks (information is already in the categorized sections)
- Repeated topic mappings (e.g., "Topic X → File Y" when this is already clear from category structure)
- Summary sections that restate what's already listed
- End-matter navigation or metadata

**INDEX files should contain ONLY:**
- Metadata header (Last Updated, Total Files, Purpose)
- Categorized file listings with brief descriptions
- References to sub-INDEX files (for multi-level structures)

**Rationale:** INDEX files exist for efficient scanning. Redundant sections waste tokens and defeat the purpose of progressive retrieval.

---

## 6. README File Standard

### When README Required

**STANDARD:** Every folder SHOULD have README.md for human guidance

**Purpose:** Provide context and orientation for humans navigating the documentation system

### README File Format

```markdown
# [Folder Name]

**Created:** YYYY-MM-DD
**Last Updated:** YYYY-MM-DD
**Purpose:** [Folder purpose description]

---

## Overview

[Description of what this folder contains]

---

## Files in This Folder

[Overview of file types and organization]

---

## Usage Guidance

[How to use the contents of this folder]

---

## Related Folders

[Links to related content in other folders]
```

### README vs INDEX Distinction

**README.md:**
- For **human** orientation and guidance
- Explains purpose, context, usage
- Can include narrative descriptions
- Updated less frequently

**INDEX.md:**
- For **AI** progressive retrieval
- Lists files with brief descriptions
- Structured for efficient scanning
- Updated when files change

---

## 7. Document Structure Standard

### Required Document Structure

```markdown
# Title

[Metadata block - see Section 2]

---

## Section 1

[Content...]

## Section 2

[Content...]

[End of document - NO additional metadata or navigation]
```

### Prohibited End-Matter

**DO NOT include at document end:**
Duplicate versioning information
Version history / changelog
Metadata repetition at bottom

### Conditional End-Matter (Context-Dependent)

**For learning-oriented documents (guides, tutorials, educational content):**
Personal Notes sections (for learner reflection)
Progress Tracking (for learning journey)
Related Guides & Next Steps (for learning path navigation)
"See Also" navigation blocks (if facilitating learning progression)
Practice exercises or assessments
Summary and review sections

**For AI-consumption documents (context files, data files, specifications):**
Navigation blocks (use INDEX files instead)
"Related Documents" sections (use INDEX files instead)

**If uncertain whether end-matter is appropriate:**
- Consider document audience (humans learning vs AI processing)
- Consider document purpose (education vs data storage)
- When in doubt, ask before removing sections that may facilitate learning

### Always Permitted End-Matter

**Allowed at end (if applicable):**
Summary or conclusion (as content)
Action items (if document type requires)
External references (citations to outside sources)
Practice exercises (for educational content)
Answer keys (for assessments)

### Content Organization

**Heading Hierarchy:**
- `#` H1 - Document title only (once per document)
- `##` H2 - Major sections
- `###` H3 - Subsections
- `####` H4 - Detail sections

**Do not skip heading levels** (e.g., H1 → H3 is invalid)

---

## 8. File Chunking Standard

### Chunking Decision Matrix

| File Size (tokens) | Chunking Decision |
|--------------------|-------------------|
| 0-3,000 | DO NOT chunk |
| 3,001-8,000 | OPTIONAL (evaluate case-by-case) |
| 8,001-15,000 | SHOULD chunk |
| 15,001+ | MUST chunk |

### Chunk Size Standard

**Target:** 3,000-5,000 tokens per chunk

**Minimum:** 2,500 tokens
**Maximum:** 8,000 tokens

### Chunk File Naming

```
[Original_Name]_Chunk_[NN]_vX.md
```

**Examples:**
```
Guide_Chunk_01_v1.0.md
Guide_Chunk_02_v1.0.md
Guide_Chunk_03_v1.0.md
```

### Chunk File Structure

```markdown
# [Document Title] - Part [N]: [Section Name]

**Part:** [N] of [Total]
**Created:** YYYY-MM-DD
**Version:** vX.Y
**Estimated Tokens:** [count]
**Purpose:** [Chunk content description]
**Parent Document:** [Original_Name_vX.md]
**Chunk Index:** [Name_INDEX_vX.md]
**Previous Chunk:** [Name_Chunk_N-1_vX.md]
**Next Chunk:** [Name_Chunk_N+1_vX.md]

---

## [Content]

[Chunk content...]

---

## Chunk Navigation

- **Back to Index:** [INDEX filename]
- **Previous:** [Previous chunk]
- **Next:** [Next chunk]
- **Full Document:** [Consolidated filename]
```

### Required Chunk Artifacts

**For every chunked document, create:**
1. **Chunk files** - Individual chunks (Chunk_01, Chunk_02, etc.)
2. **Chunk INDEX** - Navigation file listing all chunks
3. **Consolidated file** (optional) - Complete document for reference

### Chunk INDEX Format

```markdown
# [Document Title] - Chunk Index

**Total Chunks:** [N]
**Created:** YYYY-MM-DD
**Purpose:** Navigate chunked document

---

## How to Use

[Brief usage instructions]

---

## Chunks

### Chunk 01: [Section Title] ([token count] tokens)
**File:** `Name_Chunk_01_vX.md`
**Topics:** [Comma-separated topics]
**Use when:** [When to load this chunk]

### Chunk 02: [Section Title] ([token count] tokens)
**File:** `Name_Chunk_02_vX.md`
**Topics:** [Comma-separated topics]
**Use when:** [When to load this chunk]

[Continue for all chunks...]
```


---

## Chunk Navigation

- **Back to Index:** [0_Standards_INDEX_v2.2.md](0_Standards_INDEX_v2.2.md)
- **Previous:** [Foundation Standards](1_Foundation_Standards_v2.2.md)
- **Next:** [Content Standards](3_Content_Standards_v2.2.md)
- **Full Document:** [Document_Formatting_Standards_v2.2.md](Document_Formatting_Standards_v2.2.md)
