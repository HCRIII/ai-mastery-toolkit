---
name: pdf
category: Document Skills
type: Built-In System Skill
---

# PDF Skill - PDF Manipulation

## What This Skill Does

Reads, creates, manipulates, and extracts content from PDF files including text extraction, merging, splitting, forms, and more.

## When to Use This Skill

**Automatic triggers:**
- "PDF", ".pdf" mentions
- "form", "extract", "merge", "split"

**Use when you need:**
- Extract text or tables from PDFs
- Create new PDF documents
- Merge multiple PDFs into one
- Split PDFs into separate files
- Fill PDF forms
- Rotate, watermark, or encrypt PDFs
- Extract images from PDFs
- OCR on scanned PDFs

## How to Invoke

**Explicit invocation:**
```
Use the pdf skill
```

**Trigger words (automatic):**
- "Extract text from this PDF..."
- "Merge these PDFs..."
- "Create a PDF from..."
- "Fill out this PDF form..."

**File uploads:**
Upload .pdf files to automatically activate

## Capabilities

- **Read:** Extract text, tables, metadata
- **Create:** Generate new PDFs from content
- **Merge:** Combine multiple PDFs
- **Split:** Separate pages or sections
- **Forms:** Fill and extract form data
- **Transform:** Rotate, resize, watermark pages
- **Security:** Encrypt, decrypt, set permissions
- **Images:** Extract embedded images
- **OCR:** Make scanned PDFs searchable

## Example Usage

### Example 1: Extract Tables
**You say:** "Extract all tables from this financial report PDF"
*(Upload .pdf file)*

**What happens:**
- Skill reads PDF
- Identifies tables
- Extracts data
- Returns structured format

### Example 2: Merge Documents
**You say:** "Merge these three PDF contracts into one document"
*(Upload 3 .pdf files)*

**What happens:**
- Skill loads all PDFs
- Combines in order
- Creates single merged PDF
- Returns combined file

### Example 3: Fill Form
**You say:** "Fill out this application PDF with: Name='John Smith', Date='2026-02-07', Signature='John Smith'"
*(Upload form .pdf)*

**What happens:**
- Skill reads form fields
- Fills specified values
- Maintains form structure
- Returns completed form

## Tips for Best Results

**For extraction:**
- Specify what content you need (text, tables, images)
- Mention desired output format

**For creation:**
- Provide source content clearly
- Specify layout preferences

**For manipulation:**
- Be clear about desired operations
- Specify page ranges if relevant

## Integration

**Works well with:**
- **docx/pptx/xlsx skills:** Convert to/from PDF
- **canvas-design skill:** Create visual PDFs
- **Forms and templates:** PDF form workflows

## Common Use Cases

- Contract review and extraction
- Form filling automation
- Document merging for submissions
- Invoice and receipt processing
- Research paper text extraction
- Report generation and distribution
- Scanned document OCR
- Secure document creation

---

**Last Updated:** February 7, 2026
**Skill Type:** Built-In System Skill
