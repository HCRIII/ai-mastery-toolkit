# Systematic Date Format Standardization

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Production-ready framework for identifying, mapping, and converting inconsistent date formats to standardized formats
**Status:** Final
**Stage:** Stage 3 (Production-Ready, Reusable, Documented)

---

## Description

A comprehensive prompt system for analyzing date formats across files and data sources, identifying all variants, mapping them to canonical formats, and performing safe conversion to standardized date representations. Designed for production use with format detection, validation, and reversible transformations.

**Use Case Examples:**
- Standardizing dates across database records
- Normalizing timestamps in log files
- Converting date fields in multiple CSV exports
- API response date format standardization
- Legacy system date migration
- International date format harmonization
- ISO 8601 compliance across codebase

## When to Use

- You have dates in 2+ different formats in your data/code
- Consistency is required for data processing or compliance
- You need to track which format conversions were applied
- International teams need uniform date representations
- Automated processing requires predictable date formats

## What Makes This Stage 3

1. **Production-Ready:**
   - Handles ambiguous dates (e.g., 01/02/03)
   - Preserves timezone information
   - Prevents loss of precision (seconds, milliseconds)
   - Validates converted dates for reasonableness

2. **Reusable:**
   - Template-based for different source/target formats
   - Adapts to various date patterns and edge cases
   - Modular validation for different use cases
   - Works with dates in code, data, and documents

3. **Well-Documented:**
   - Clear format detection methodology
   - Comprehensive mapping reference
   - Ambiguity resolution procedures
   - Conversion audit trail

4. **Verified at Scale:**
   - Tested on mixed-format date collections
   - Proven accuracy with edge cases
   - Reliable ambiguity detection
   - Consistent results across file types

## Key Capabilities

- **Format Detection:** Identifies all date formats present
- **Ambiguity Handling:** Flags and resolves ambiguous dates
- **Intelligent Mapping:** Creates format conversion mapping
- **Safe Conversion:** Converts with validation
- **Precision Preservation:** Maintains time granularity
- **Reversibility:** Can revert to original formats if needed
- **Audit Trail:** Complete record of all conversions
- **Validation:** Ensures converted dates are reasonable

## Input Requirements

Provide:
1. Sample data containing dates in various formats
2. Target/standard format (e.g., ISO 8601, Unix timestamp)
3. Context about the data (domain, expected date ranges)
4. Any known format variants
5. Precision requirements (date only vs datetime)

## Output Format

- Format detection report with all variants found
- Ambiguity assessment and resolution strategy
- Mapping table from all variants to standard
- Sample converted data
- Conversion rules and edge case handling
- Validation results
- Before/after comparison

## Usage Notes

- Review system.md for detailed prompt structure
- Use format detection output as first step always
- Consider timezone implications for timestamps
- Test on sample data before full conversion
- Keep original format mapping for audit purposes
- Validate ranges make sense for your domain

## Related Patterns

- [[Comprehensive Analysis Scripts for Multi-File Audits]]
- [[Batch Update Scripts with Transaction Logging & Rollback]]
- [[Workflow Acceleration]]

## Tags

`date-formats` `standardization` `data-cleaning` `conversion` `automation` `stage-3` `production-ready`
