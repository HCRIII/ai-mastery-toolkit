# Document and Folder Formatting Standards - Part 04: Asset Standards

**Part:** 04 of 07
**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Version:** v2.2
**Estimated Tokens:** ~1,200
**Purpose:** Asset Management, File Size Limits, Accessibility
**Parent Document:** Document_Formatting_Standards_v2.2.md
**Chunk Index:** 0_Standards_INDEX_v2.2.md
**Previous Chunk:** 3_Content_Standards_v2.2.md
**Next Chunk:** 5_Version_Status_Standards_v2.2.md

---

## 14. Asset Management Standards

### Image File Naming

**Format:**
```
[PARENT_DOC]_[DESCRIPTOR]_[SEQUENCE].ext
```

**Examples:**
```
Variables_Lesson_Scope_Diagram_01.png
Authentication_Flow_Chart_02.svg
API_Response_Example_01.png
```

### Image Storage Locations

**Option 1: Co-located with Content (RECOMMENDED for small collections)**
```
lesson_folder/
├── Lesson_v1.0.md
├── Lesson_Diagram_01.png
└── Lesson_Screenshot_02.png
```

**Option 2: Centralized Assets (RECOMMENDED for large collections)**
```
Course_Folder/
├── content/
│   └── lessons/
├── assets/
│   ├── images/
│   ├── diagrams/
│   └── screenshots/
└── code_examples/
```

### Image Format Standards

**Format Selection:**

| Type | Format | Rationale |
|------|--------|-----------|
| Screenshots | PNG | Lossless, sharp text |
| Photos | JPG | Smaller file size |
| Diagrams | SVG | Scalable, crisp at any size |
| Icons | SVG or PNG | SVG preferred |
| Charts | SVG or PNG | SVG preferred for clarity |

### Image Size Limits

**Maximum Dimensions:**
- Screenshots: 1920x1080 (1080p)
- Diagrams: 2000x2000
- Photos: 1600x1200

**Maximum File Sizes:**
- PNG: 500 KB per image
- JPG: 200 KB per image
- SVG: 100 KB per image

**Optimization:**
- Compress PNGs (use tools like TinyPNG)
- Optimize JPGs at 80-85% quality
- Minimize SVG files (remove unnecessary metadata)

### Alt Text Requirements

**REQUIRED:** Every image MUST have descriptive alt text.

**Format:**
```markdown
![Descriptive alt text](path/to/image.png)
```

**Alt Text Guidelines:**

**DO:**
```markdown
![Diagram showing variable scope in Python with global, local, and nested function scopes highlighted](scope_diagram.png)

![Screenshot of VS Code editor displaying a Python function with syntax highlighting](vscode_screenshot.png)
```

**DO NOT:**
```markdown
![Image](diagram.png)
![Screenshot](screenshot.png)
![Diagram showing scope](scope_diagram.png)  <!-- Too brief -->
```

**Alt Text Rules:**
- Describe what the image shows, not that it's an image
- Be specific and descriptive
- 10-25 words typical
- Include relevant text visible in image
- Explain diagrams' purpose and content

### Diagram Versioning

**Diagrams should be versioned:**
```
Architecture_Diagram_v1.0.svg
Architecture_Diagram_v2.0.svg
```

**Track diagram changes:**
- Major version (v1.0 → v2.0): Significant visual changes
- Minor version (v1.0 → v1.1): Small corrections or updates

---

## 15. File Size Limits

### Document File Size Limits

**Maximum Recommended Sizes (before chunking):**

| Content Type | Token Limit | Approx. Size | Action if Exceeded |
|--------------|-------------|--------------|-------------------|
| Reference | 15,000 | 60 KB | Chunk into sections |
| Guide | 12,000 | 48 KB | Chunk by topics |
| Lesson | 8,000 | 32 KB | Split into sub-lessons |
| Exercise | 5,000 | 20 KB | Keep focused |

### Image File Size Limits

**Per-Image Limits:**
- PNG: 500 KB maximum
- JPG: 200 KB maximum
- SVG: 100 KB maximum
- GIF: 1 MB maximum (for animations)

**Per-Folder Limits:**
- Total images per folder: <50 MB
- If exceeded, split into subfolders by category

### Code Example File Limits

**Maximum file size for code examples:**
- Inline code blocks: 50 lines
- External code files: 500 lines
- Complete projects: Link to repository, don't include in docs

---

## 16. Accessibility Requirements

### Heading Hierarchy

**REQUIRED:**
- Must start with H1 (document title)
- Do not skip levels (H1 → H2 → H3, not H1 → H3)
- Use headings for structure, not styling
- Maximum 3-4 heading levels

### Screen Reader Compatibility

**All content must be screen reader friendly:**
- Meaningful link text (not "click here")
- Alt text for all images
- Proper table headers
- Descriptive heading text
- No information conveyed by color alone

### Text Contrast

**For diagrams and images:**
- Text must have 4.5:1 contrast ratio minimum
- Large text (18pt+) must have 3:1 contrast minimum
- Avoid red/green as only differentiator (colorblind accessible)

### Semantic Markup

**Use semantic HTML in markdown:**
- Use actual lists (not hyphens for lists)
- Use proper heading levels
- Use tables for tabular data
- Use code blocks for code


---

## Chunk Navigation

- **Back to Index:** [0_Standards_INDEX_v2.2.md](0_Standards_INDEX_v2.2.md)
- **Previous:** [Content Standards](3_Content_Standards_v2.2.md)
- **Next:** [Version & Status Standards](5_Version_Status_Standards_v2.2.md)
- **Full Document:** [Document_Formatting_Standards_v2.2.md](Document_Formatting_Standards_v2.2.md)
