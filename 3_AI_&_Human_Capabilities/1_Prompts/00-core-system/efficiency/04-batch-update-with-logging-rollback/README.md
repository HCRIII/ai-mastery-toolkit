# Batch Update Scripts with Transaction Logging & Rollback

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** Production-ready framework for safe, logged, reversible bulk updates across multiple files
**Status:** Final
**Stage:** Stage 3 (Production-Ready, Reusable, Documented)

---

## Description

A comprehensive prompt system for creating automated update scripts that safely apply consistent changes across multiple files with complete transaction logging and rollback capability. Designed for production use with verification steps, change tracking, and disaster recovery features.

**Use Case Examples:**
- Bulk code refactoring across a project
- Configuration updates to multiple files
- Database migration scripts with audit trails
- Dependency version updates
- Schema standardization across codebase
- Security patch deployment

## When to Use

- You need to update 5+ files with consistent logic
- Changes must be reversible and traceable
- Audit trails are required for compliance
- Risk mitigation is critical
- Testing and validation are required before full deployment

## What Makes This Stage 3

1. **Production-Ready:**
   - Pre-flight verification before any changes
   - Atomic transactions with rollback capability
   - Comprehensive logging of all operations
   - Error handling and recovery procedures

2. **Reusable:**
   - Parameterized templates for different change types
   - Modular validation and verification components
   - Transaction logging adapts to different update patterns
   - Rollback mechanisms work across file types

3. **Well-Documented:**
   - Clear change specification format
   - Step-by-step validation procedures
   - Rollback procedures and limitations
   - Audit trail interpretation guide

4. **Verified at Scale:**
   - Tested on multi-file batch updates
   - Proven rollback success in various scenarios
   - Consistent verification across diverse file types
   - Reliable transaction logging

## Key Capabilities

- **Pre-flight Checks:** Validates files before making changes
- **Atomic Transactions:** All-or-nothing update application
- **Complete Logging:** Records all changes with metadata
- **Rollback Support:** Ability to revert changes via transaction log
- **Diff Generation:** Clear before/after comparisons
- **Change Verification:** Confirms updates applied correctly
- **Backup Creation:** Automatic backup before updates
- **Audit Trail:** Permanent record of who changed what and when

## Input Requirements

Provide:
1. List of files to update
2. Specific changes for each file (or template for consistent changes)
3. Validation criteria (how to verify success)
4. Rollback preferences and limitations
5. Logging detail level

## Output Format

- Pre-flight verification report
- Transaction log with complete details
- Diff summary of all changes
- Verification report confirming updates
- Rollback instructions (if needed)
- Audit trail for compliance

## Usage Notes

- Review system.md for detailed prompt structure
- Always run pre-flight checks before applying changes
- Keep transaction logs for at least 30 days
- Test rollback procedures in non-production first
- Include in version control workflows

## Related Patterns

- [[Comprehensive Analysis Scripts for Multi-File Audits]]
- [[Systematic Date Format Standardization]]
- [[Workflow Acceleration]]

## Tags

`batch-update` `transactions` `logging` `rollback` `automation` `stage-3` `production-ready` `audit-trail`
