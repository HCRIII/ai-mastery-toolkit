# 12. Artifacts

**Created:** 2026-02-13
**Last Updated:** 2026-02-28
**Purpose:** Overview and navigation for 12_Artifacts capabilities
**Status:** Final

---

**Supplementary materials for Section 12: Artifacts Guide**

This folder contains templates, examples, and best-practice patterns for creating artifacts with Claude.

## Contents

### Artifact Templates

The `Artifact_Templates/` folder contains ready-to-use examples organized by type:

#### HTML Templates
- `simple_calculator.html` - Basic calculator with styling
- `todo_app.html` - Interactive todo list application
- `dashboard.html` - Multi-section dashboard layout
- `form_validation.html` - Form with client-side validation

#### React Templates
- `expense_tracker.jsx` - State management example with React hooks
- `data_table.jsx` - Table with filtering and sorting
- `search_interface.jsx` - Real-time search with results
- `modal_example.jsx` - Modal dialog pattern

#### Mermaid Diagram Templates
- `flowchart.mmd` - Basic flowchart structure
- `sequence_diagram.mmd` - System interaction sequence
- `gantt_chart.mmd` - Project timeline visualization
- `org_chart.mmd` - Organization hierarchy diagram

#### SVG Templates
- `simple_chart.svg` - Basic bar/pie chart structure
- `icon_set.svg` - Reusable icon components
- `diagram.svg` - Technical diagram example

## How to Use These Materials

### Quick Start
1. Browse `Artifact_Templates/` to find a template matching your needs
2. Copy the template code
3. Ask Claude to modify it for your specific use case
4. Claude will adapt the template and show you the result in an artifact

### Learning Path
1. **Start with:** Simple HTML calculator (learn basic structure)
2. **Progress to:** React todo app (learn state management)
3. **Advance to:** Data table (learn filtering/sorting patterns)
4. **Master:** Complex dashboards (combine patterns)

### Template Customization Tips

**For HTML templates:**
- Replace color values (update `#007bff` to your brand color)
- Modify input fields and labels
- Adjust styling variables at the top
- Add more fields by copying existing input blocks

**For React templates:**
- Update state variable names
- Modify the data structure
- Change styling to match your brand
- Add new event handlers following existing patterns

**For Diagrams:**
- Update labels and text content
- Modify colors and styling
- Adjust layout and spacing
- Add/remove elements as needed

## Related Guide

See [12. Artifacts Guide](../../2_How_To_Guides/12_Artifacts_Guide.md) for:
- Complete artifact creation tutorial
- When to use artifacts vs files vs output
- Best practices and performance tips
- Common patterns and troubleshooting
- Advanced techniques (web-artifacts-builder, etc.)

## Key Concepts from the Guide

**Artifact Types:**
- Markdown - Static formatted text
- HTML - Simple tools and calculators
- React - Complex interactive applications
- SVG - Scalable diagrams and illustrations
- Mermaid - Professional flowcharts and diagrams
- PDF - Formatted reports

**Best Practices:**
- Keep performance in mind (debounce inputs, use useMemo)
- Design for accessibility (semantic HTML, labels)
- Use clear button labels ("Add Item" not "Submit")
- Test artifacts as you build them
- Provide immediate visual feedback to users

**Common Patterns:**
- Form with validation
- Data table with sorting/filtering
- Modal dialogs
- Real-time search
- Expense tracking
- Dashboard layouts

## Getting Started

1. Pick a template from `Artifact_Templates/`
2. Ask Claude: "Can you create an artifact using this template, but for [my specific use case]?"
3. Claude will adapt the template and show you a working artifact
4. Request changes: "Make the button green" → Claude updates instantly
5. Continue iterating until you're happy with the result

## File Organization

```
12_Artifacts/
 README.md (this file)
 Artifact_Templates/
     HTML/
        simple_calculator.html
        todo_app.html
        dashboard.html
        form_validation.html
     React/
        expense_tracker.jsx
        data_table.jsx
        search_interface.jsx
        modal_example.jsx
     Mermaid/
        flowchart.mmd
        sequence_diagram.mmd
        gantt_chart.mmd
        org_chart.mmd
     SVG/
         simple_chart.svg
         icon_set.svg
         diagram.svg
```

## Tips for Success

- **Copy entire templates** - Don't try to build from scratch, start with templates
- **One change at a time** - Refine iteratively rather than rewriting
- **Test early** - Check functionality as you build
- **Use browser dev tools** - F12 for debugging JavaScript and CSS
- **Save important artifacts** - Ask Claude to export as file if you want to keep it

## Next Steps

After learning artifacts:
- Explore web-artifacts-builder for larger projects
- Combine artifacts with other Claude features (skills, commands)
- Integrate artifacts into your workflows
- Create custom tools for your specific needs
- Share artifacts with team members
