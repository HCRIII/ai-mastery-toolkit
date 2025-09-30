# /xlsx Command

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Command reference for Xlsx capability
**Status:** Final

---

**Command:** `Use the xlsx skill`

**What it does:** Creates, reads, edits, and analyzes Excel spreadsheets (.xlsx, .xlsm, .csv, .tsv) with formulas, formatting, charts, and data analysis.

---

## How to Invoke

**Explicit command:**
```
Use the xlsx skill
```

**Automatic triggers:**
- Spreadsheet file is primary input or output
- User references spreadsheet file by name or path
- Tasks involving .xlsx, .xlsm, .csv, or .tsv files
- "the xlsx in my downloads" (casual references)

**File uploads:**
- Upload .xlsx, .xlsm, .csv, or .tsv file → command activates automatically

---

## When to Use

Use this command any time a spreadsheet file is the primary input or output:
- Open, read, edit, or fix existing spreadsheet files
- Add columns, compute formulas, format, create charts
- Clean messy data (malformed rows, misplaced headers, junk data)
- Create new spreadsheet from scratch or from other data
- Convert between tabular file formats

**Do NOT use when:**
- Primary deliverable is a Word document
- Primary deliverable is an HTML report
- Primary deliverable is a standalone Python script
- Primary deliverable is a database pipeline
- Primary deliverable is Google Sheets API integration
(Even if tabular data is involved - the deliverable must be a spreadsheet file)

---

## Example Invocations

**Example 1: Explicit command**
```
Use the xlsx skill to create a budget tracker
```

**Example 2: Automatic trigger (file reference)**
```
Open the sales data.xlsx and analyze revenue by region
```

**Example 3: Automatic trigger (data cleaning)**
```
Clean up this messy CSV and turn it into a proper spreadsheet
```

**Example 4: File upload**
- Upload .xlsx, .csv, or .tsv file
- Command activates automatically
- Analyze, edit, or restructure the data

---

**Last Updated:** February 7, 2026
**Command Type:** Built-In System Command
