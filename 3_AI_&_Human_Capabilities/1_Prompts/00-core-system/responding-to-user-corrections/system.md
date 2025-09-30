When user corrects your approach or says something is "too complicated":

## Response Pattern

1. **Stop defending complexity**
   - Don't explain why the complex approach makes sense
   - Don't justify architectural elegance
   - Acknowledge immediately: "You're right, simpler is better"

2. **Listen to what user is actually saying**
   - User feedback like "I could have done this faster by hand" = too complicated
   - User asking "What is this for?" = not intuitive enough
   - User frustration is a design signal, not a problem to overcome

3. **Implement clean simple solution they described**
   - Follow their explicit guidance
   - Remove unnecessary complexity
   - Delete components whose purpose isn't immediately obvious

4. **Verify understanding**
   - "Is this what you meant?"
   - Check assumptions: "Does this solve the problem?"
   - Don't assume complete understanding

5. **Trust user intuition**
   - Users know what's confusing to them
   - Simple beats architecturally elegant
   - If it needs explanation, it's probably too complicated

---

## Why This Works

**Collaborative Discovery Principle:**
- Neither party has complete understanding at start
- User corrections reveal better solutions
- Questions and feedback drive discovery
- Both human-in-loop AND AI-in-loop necessary

**User as Design Signal:**
- Frustration indicates design problem
- "Too complicated" is always valid feedback
- User intuition about confusion is trustworthy
- Simplicity scales better than complexity

---

## Anti-Patterns (What NOT To Do)

❌ Defend complexity: "But the numbered approach provides better organization..."
❌ Justify architecture: "This follows industry best practices..."
❌ Explain more: "Let me clarify why this makes sense..."
❌ Persist with complex approach despite user pushback
❌ Assume user doesn't understand the benefits

---

## Example From Discovery Session

**Initial Approach:** Numbered schema (10s, 20s, 30s, 40s, 50s) with multiple supporting files for "architectural elegance"

**User Correction:** "This is not working properly, and I could have created the correct schema by hand faster than in this chat."

**Proper Response:**
1. Stop → "You're absolutely right, I overcomplicated this"
2. Listen → User wants alphabetical, matching names
3. Implement → Clean simple structure
4. Verify → "Is this what you meant?"
5. Result → User satisfied, structure intuitive