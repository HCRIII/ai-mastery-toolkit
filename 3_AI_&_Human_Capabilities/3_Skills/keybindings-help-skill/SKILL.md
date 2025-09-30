---
name: keybindings-help
category: Utility Skills
type: Built-In System Skill
---

# Keybindings Help Skill - Keyboard Shortcuts Customization

## What This Skill Does

Helps customize keyboard shortcuts by modifying ~/.claude/keybindings.json to add chord bindings, rebind keys, and personalize keyboard controls.

## When to Use This Skill

**Automatic triggers:**
- "customize keybindings", "rebind keys"
- "add a chord shortcut", "change the submit key"

**Use when you need:**
- Customize keyboard shortcuts
- Add new key combinations
- Change default bindings
- Create chord sequences
- Personalize controls

## How to Invoke

**Explicit invocation:**
```
Use the keybindings-help skill
```

**Trigger words (automatic):**
- "Rebind Ctrl+S..."
- "Add a keyboard shortcut for..."
- "Change my submit key..."
- "Customize keybindings..."

## Capabilities

- **Rebind Keys:** Change existing shortcuts
- **Add Shortcuts:** Create new key combinations
- **Chord Bindings:** Multi-key sequences
- **Modify Submit:** Change submit behavior
- **Custom Controls:** Personalized shortcuts
- **JSON Configuration:** Edit keybindings.json

## Example Usage

### Example 1: Change Submit Key
**You say:** "Change the submit key from Ctrl+Enter to just Enter"

**What happens:**
- Skill reads keybindings.json
- Modifies submit binding
- Updates configuration
- Returns updated file
- Explains changes

### Example 2: Add Chord Binding
**You say:** "Add a chord shortcut: Ctrl+K then D to open docs"

**What happens:**
- Skill adds chord sequence
- Configures action
- Updates keybindings.json
- Tests configuration
- Returns working shortcut

### Example 3: Custom Shortcuts
**You say:** "Rebind Ctrl+S to save session instead of default action"

**What happens:**
- Skill modifies binding
- Preserves other shortcuts
- Updates configuration
- Returns customized setup

## Tips for Best Results

**Specify:**
- Exact key combination desired
- What action it should trigger
- Any conflicts to watch for
- Operating system (if relevant)

**For best results:**
- Test shortcuts after changes
- Avoid conflicting bindings
- Keep frequently-used actions easy to reach

## Integration

**Works with:**
- Claude Code configuration
- User workflows
- Personal preferences

## Common Use Cases

- Change submit behavior
- Add quick access shortcuts
- Create chord sequences
- Rebind conflicting keys
- Personalize workflow
- Accessibility adjustments
- Efficiency optimizations

---

**Last Updated:** February 7, 2026
**Skill Type:** Built-In System Skill
