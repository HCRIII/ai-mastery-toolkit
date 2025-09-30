# toolkit-integrity-update

**Type:** Session Operations Prompt
**Toolkit:** AI Mastery Toolkit v4
**Created:** 2026-02-22
**Version:** 1.0

---

## What It Does

Runs a full structural audit of the AI Mastery Toolkit v4 folder and file tree. Checks every folder and file against the v4 integrity standards documented in `V4_Toolkit_Review_Checklist.md`. Then:

1. **Auto-fixes** all README.md and INDEX.md issues without user confirmation (missing files, wrong version strings)
2. **Presents** all remaining issues as a numbered list with proposed fixes
3. **Steps through** each issue one at a time — describe → propose → confirm → implement

---

## When to Use

- After any session involving structural changes to the toolkit
- After adding new prompts, skills, folders, or major files
- As a periodic maintenance check
- Trigger phrases: "run integrity check", "check toolkit structure", "toolkit integrity update"

---

## Key Design Decisions

**Auto-accept for navigation files:** README.md and INDEX.md updates are low-risk and purely mechanical. Auto-fixing them removes friction while still reporting what was done.

**Step-by-step for everything else:** Structural decisions (stale refs, missing system.md, empty folders, naming) can have intentional reasons. Always confirm before changing.

**Integrity score:** Reported at the end so the user knows exactly where things stand.

---

## Reference Standard

`7_Retained_Working_Files/V4_Toolkit_Review_Checklist.md` — the canonical record of what was established during the v4 build. Update it when standards evolve.

---

**Prompt file:** `system.md`
