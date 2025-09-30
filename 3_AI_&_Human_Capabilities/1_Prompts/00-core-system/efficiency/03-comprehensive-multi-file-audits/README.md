# Comprehensive Analysis Scripts for Multi-File Audits

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Production-ready framework for systematic analysis and auditing of multiple files across a codebase
**Status:** Final
**Stage:** Stage 3 (Production-Ready, Reusable, Documented)

---

## Description

A comprehensive prompt system for creating automated analysis scripts that systematically examine multiple files, identify patterns, extract data, and generate structured reports. Designed for production use with robust error handling, progress tracking, and detailed output formatting.

**Use Case Examples:**
- Code quality audits across entire projects
- Compliance and security scanning
- Documentation consistency verification
- Technical debt assessment
- Cross-file dependency analysis
- Configuration file standardization review

## When to Use

- You need to analyze 5+ files with consistent criteria
- Output must be structured and machine-readable
- Reproducibility is essential
- You want to track analysis progress and results
- Scaling from one-off analysis to systematic audits

## What Makes This Stage 3

1. **Production-Ready:**
   - Handles edge cases (empty files, missing data, encoding issues)
   - Includes error logging and graceful failure modes
   - Supports large file sets without memory issues

2. **Reusable:**
   - Template-based system for customizing analysis rules
   - Parameterized patterns for different file types
   - Modular components that combine easily

3. **Well-Documented:**
   - Clear input/output specifications
   - Step-by-step analysis methodology
   - Example outputs and result formats

4. **Verified at Scale:**
   - Tested on multi-file codebases
   - Proven results across different project structures
   - Consistent output quality regardless of input variation

## Key Capabilities

- **Multi-file Coordination:** Processes files sequentially while maintaining state
- **Pattern Recognition:** Identifies consistent issues across files
- **Data Extraction:** Pulls structured data from unstructured content
- **Progress Tracking:** Reports analysis completion percentage
- **Result Aggregation:** Combines findings into unified reports
- **Format Flexibility:** Outputs in multiple formats (JSON, Markdown, CSV)

## Input Requirements

Provide:
1. File list (paths, names, or glob patterns)
2. Analysis criteria or rules to check
3. Output format preference
4. Reporting detail level (summary/detailed/full)

## Output Format

- Structured markdown reports with sections
- Organized by file or by finding type
- Summary statistics and pattern analysis
- Actionable recommendations
- Links to source locations

## Usage Notes

- Review system.md for detailed prompt structure
- Combine with version control for change tracking
- Use for baseline audits before optimization work
- Can be automated as pre-commit hooks or CI/CD steps

## Related Patterns

- [[Batch Update Scripts with Transaction Logging]]
- [[Systematic Date Format Standardization]]
- [[Workflow Acceleration]]

## Tags

`audit` `multi-file` `analysis` `code-quality` `automation` `stage-3` `production-ready`
