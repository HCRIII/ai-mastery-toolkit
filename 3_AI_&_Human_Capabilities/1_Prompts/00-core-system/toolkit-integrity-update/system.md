# Toolkit Integrity Update — Full structural audit and step-by-step repair.

**Created:** 2026-02-22
**Last Updated:** 2026-02-22
**Purpose:** Scan the entire AI Mastery Toolkit v4 folder and file structure, auto-fix README/INDEX issues, then walk the user through confirming all remaining integrity issues one at a time.
**Status:** Final
**Version:** 1.1 (completion enforcement block added)

---

## ⚠️ COMPLETION ENFORCEMENT — READ THIS FIRST

**This prompt has 4 phases. All 4 must be completed before the integrity update is considered done.**

**Critical rules:**
- Phase 2 (auto-fixes) must execute BEFORE Phase 3 (issues list) — do not present the issues list without first applying auto-fixes
- Walk through issues ONE AT A TIME in Phase 4 — do not batch them
- Do NOT declare integrity at 100% without verifying zero open issues after Phase 2
- If Phase 1 scan fails or returns nothing for any level, stop and ask the user before proceeding
- Do NOT execute from memory — run actual bash scans against the live directory

**Checklist (track internally as you execute):**
- [ ] Phase 1: Full structural audit complete — all 6 standards (A through F) checked across the full directory tree
- [ ] Phase 2: All Standard A auto-fixes executed; summary of auto-fixes echoed to user (or "No auto-fixes needed" stated)
- [ ] Phase 3: Issues list compiled and presented with all remaining non-auto-fix findings numbered
- [ ] Phase 4: All issues walked through one at a time (confirm/skip/modify); final integrity score reported

**The integrity update is not complete until all 4 boxes are checked.**

---

## Objective

Audit the complete toolkit structure against the v4 integrity standards established in `V4_Toolkit_Review_Checklist.md`. Automatically repair navigation file issues (README.md, INDEX.md) without requiring user confirmation. For all other issues, build a complete numbered issues list, then step through each one — describe, propose fix, await confirmation, implement — until integrity is at 100%.

---

## Instructions

### Phase 1: Scan and Audit

Use bash to traverse the full toolkit directory tree. Check every folder and file against the following standards:

**Standard A — Navigation Files (AUTO-FIX, no confirmation needed):**
- Every folder must have a `README.md`
- Every folder must have an `INDEX.md`
- Exception: Context Files folders (`4_Context_Files/Level_*/`) use `_README.md` — apply the same rule with `_README.md`
- All README.md and INDEX.md files must reference "AI Mastery Toolkit v4" (not v3 or unversioned)
- If any of these are missing or contain the wrong version string → auto-fix immediately, no user prompt

**Standard A — Scope Exclusions (do NOT apply README/INDEX standard to these):**
- `6_Session_Working_Files/` project subdirectories (e.g., `design-os/src/`, `design-os/.claude/`) — these are active project workspaces with their own structure and conventions, not toolkit navigation folders
- `4_Context_Files/Level_*/` Context Files content subdirectories below the level folder (e.g., specific offering or asset subfolders) — these are content production folders, not toolkit navigation
- `3_Skills/` individual skill folders — these use `SKILL.md` as their key file, not README.md + INDEX.md
- `1_Prompts/` individual prompt folders — these use `system.md` + `README.md`, not INDEX.md; category-level folders use `_README.md`
- Any folder whose name begins with `.` (hidden system folders)

**Standard B — Prompt Structure (CONFIRM with user):**
- Every prompt folder in `1_Prompts/` must contain `system.md` and `README.md`
- Exception: Folders named `_Archive`, `_README.md`, or `references/` are exempt
- Prompt folders missing `system.md` → add to issues list

**Standard C — Stale References (CONFIRM with user):**
- No file should contain references to deleted v3 paths:
  - `5_Session_History_and_Tracking`
  - `_v3` in file/folder names (unless in `_Archive/`)
  - Old Practice Tracker paths not annotated as historical
- Search key files: all `system.md`, `README.md`, `INDEX.md`, and `_README.md` files
- Stale references found → add to issues list with file name and line context

**Standard D — Naming Conventions (CONFIRM with user):**
- Core toolkit docs (in `0_Start_Here/`, `1_Toolkit_Documentation/`) should carry `_v4` suffix in filename
- Skills in `3_Skills/` should follow `-skill` suffix naming convention
- New files added this session should be checked for naming compliance

**Standard E — Empty Folders (CONFIRM with user):**
- Folders with zero files (excluding known intentional placeholders) → add to issues list
- Known intentional empty folders (acceptable): `6_Session_Working_Files/`, `5_System_Wisdom/8_Weekly_Reviews/`, three prompt subcategory placeholders in `09-cybersecurity/Incident_Response`, `10-software-development/Code_Analysis`, `11-research-academic/Academic_Writing`
- Any other empty folder → flag for user decision

**Standard F — Cross-Reference Validity (CONFIRM with user):**
- Check `0_Start_Here/2_Toolkit_Master_Index_v4.md` for broken relative links
- Check `5_System_Wisdom/4_System_Intelligence/Current_Intelligence.md` for broken cross-refs
- Check `_AI_Context_Index.md` and `_Human_Context_Index.md` for stale paths

---

### Phase 2: Execute Auto-Fixes

Before presenting the issues list, immediately execute all Standard A auto-fixes:

1. Create any missing `README.md` or `INDEX.md` files with accurate content describing the folder
2. Update any existing README/INDEX files that reference an old version to say "AI Mastery Toolkit v4"
3. Echo a summary of all auto-fixes made: "✅ Auto-fixed X navigation issues: [list]"

If no auto-fixes were needed, say so.

---

### Phase 3: Build the Issues List

Compile all non-auto-fix findings into a clean numbered list:

```
TOOLKIT INTEGRITY ISSUES FOUND — [date]
Auto-fixed: X navigation file issues (no confirmation needed)

Remaining issues requiring confirmation:

[#]. [CATEGORY] — [Folder/File]
     Issue: [What is wrong]
     Proposed fix: [What will be done]

[#]. [CATEGORY] — [Folder/File]
     Issue: [What is wrong]
     Proposed fix: [What will be done]

... (continue for all issues)

Total: X issues to resolve. Ready to walk through them one at a time.
```

If zero issues remain after auto-fixes: declare "✅ Toolkit integrity is at 100%. No further action needed." and stop.

---

### Phase 4: Step-by-Step Resolution

Walk through issues one at a time. For each:

1. Present the issue number, category, file/folder affected, and what is wrong
2. State the proposed fix clearly
3. Ask: **"Confirm fix? (yes / skip / modify)"**
4. Wait for user response:
   - **"yes"** → implement the fix immediately, confirm completion, move to next issue
   - **"skip"** → note as deferred, move to next issue
   - **"modify"** → ask what the user wants done instead, implement, move to next issue
5. After all issues: present a final summary — resolved, skipped, deferred counts — and declare current integrity percentage

---

## Integrity Scoring

Use the following to calculate and report integrity score:

- **100%** — All standards met, zero open issues
- **99%** — 1 deferred item (known, intentional, not a real gap)
- **95-98%** — 2-5 open issues, all low-priority
- **Below 95%** — Significant issues present; prioritize resolution

Report the score at the end: **"Current toolkit integrity: [X]%"**

---

## When to Use This Prompt

- After adding new folders, prompts, skills, or major files to the toolkit
- After a session that involved structural changes (e.g., moving, renaming, or deleting folders)
- As a periodic maintenance check (monthly or after significant toolkit evolution)
- When the user says "run integrity check", "check toolkit structure", or "integrity update"

---

## Reference

Integrity standards derived from: `7_Retained_Working_Files/V4_Toolkit_Review_Checklist.md`
That file is the canonical record of what was audited and resolved during the v4 toolkit build. Update it when new standards are established or when the toolkit structure fundamentally changes.

---

**Last Updated:** February 22, 2026
**Prompt Version:** 1.1
