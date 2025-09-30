# 11. Artifacts Guide: Creating & Using Dynamic Content

**Created:** 2026-02-08
**Last Updated:** 2026-02-08
**Purpose:** Create interactive documents, applications, and visualizations with Claude
**Version:** v1.0
**Status:** Final
**Difficulty:** Beginner to Intermediate
**Prerequisites:** Prompts Guide

---

## You Are Here

**Phase 4: Specialty Skill → Artifacts Guide → Interactive Content Creation**

**Navigation:** [Start Here](../1_Toolkit_Documentation/1_Start_Here.md) → [How-To Guides](README.md) → Artifacts Guide

---

**Phase:** 2-3 - Building Custom Tools & Interfaces
**Prerequisites:** Phase 1 (Claude fundamentals), Phase 2 (Prompts and Skills)
**Time to Complete:** 2-3 hours
**Estimated Reading Time:** 21 minutes
**Audience:** Anyone creating custom tools, dashboards, or interactive content with Claude

---

## What You'll Learn

By the end of this guide, you'll be able to:
- Create simple artifacts (HTML, Markdown, React components)
- Build complex interactive applications with multiple components
- Choose between artifacts, files, and direct output
- Use the web-artifacts-builder skill for elaborate projects
- Integrate artifacts into your workflows
- Best practices for performance, maintainability, and user experience
- Troubleshoot common artifact issues

**Key Principle:** Artifacts are Claude's tool for creating dynamic, interactive content. They bridge the gap between static text and full applications—perfect for dashboards, tools, calculators, and visualizations that need real-time interactivity.

---

## Table of Contents

1. [What Are Artifacts?](#1-what-are-artifacts)
2. [Artifact Types](#2-artifact-types)
3. [Artifacts vs Files vs Output](#3-artifacts-vs-files-vs-output)
4. [Creating Simple Artifacts](#4-creating-simple-artifacts)
5. [Creating Complex Artifacts](#5-creating-complex-artifacts)
6. [Using web-artifacts-builder](#6-using-web-artifacts-builder)
7. [Best Practices](#7-best-practices)
8. [Common Patterns](#8-common-patterns)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. What Are Artifacts?

### Definition

**Artifacts** are interactive, rendered content created by Claude that appears in a separate panel beside the conversation. They allow you to:
- Display interactive UIs (forms, calculators, dashboards)
- Visualize data (charts, diagrams, maps)
- Create mini-applications (games, tools, editors)
- Show live code results (runnable HTML, React)
- Present structured content (organized documents, templates)

### How Artifacts Work

```sql
json
Claude conversation                 Artifact Panel
            
"Here's a todo app:      →   [Interactive Todo App]
                                  - Add items
[Code/HTML/React]        →   - Check off
                                  - Delete items
```markdown
markdown

### When Claude Creates Artifacts

Claude **automatically** creates artifacts for:
- Complete, self-contained applications
- Long code blocks (typically 15+ lines)
- HTML pages, React components
- SVG diagrams, Mermaid charts
- Content intended to be interactive or visual

You can also **request** artifacts by asking:
- "Create an artifact for this dashboard"
- "Build me an interactive calculator"
- "Show this in an artifact panel"

### What Artifacts Are NOT

- Not stored permanently (disappear when session ends)
- Not replacements for files (don't use for code you want to save)
- Not suitable for very large applications (can get slow)
- Not suitable for data that shouldn't be in the UI (use backend for sensitive data)

---

## 2. Artifact Types

### Type 1: Markdown Artifacts

**What:** Formatted text with headers, lists, tables, code blocks

**Best For:** Documentation, guides, structured text, README files

**Example:**
```markdown
# Project Charter

## Objective
Build a customer dashboard

## Scope
- User authentication
- Real-time metrics
- Export functionality

## Timeline
- Phase 1 (2 weeks): Design
- Phase 2 (4 weeks): Build
- Phase 3 (1 week): Test
```markdown
markdown

**Advantages:**
- Simple to create
- Read-only (no security concerns)
- Perfect for static documents

**Limitations:**
- No interactivity
- No styling control (uses default)
- Can't respond to user input

### Type 2: HTML Artifacts

**What:** Standard HTML with CSS and JavaScript

**Best For:** Simple tools, calculators, visualizations, forms

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; padding: 20px; }
    input { padding: 8px; margin: 10px 0; }
    button { padding: 8px 16px; background: #007bff; color: white; }
  </style>
</head>
<body>
  <h1>BMI Calculator</h1>
  <input id="weight" type="number" placeholder="Weight (kg)">
  <input id="height" type="number" placeholder="Height (m)">
  <button onclick="calculate()">Calculate</button>
  <p id="result"></p>

  <script>
    function calculate() {
      const w = Number(document.getElementById('weight').value);
      const h = Number(document.getElementById('height').value);
      const bmi = (w / (h * h)).toFixed(2);
      document.getElementById('result').textContent = `BMI: ${bmi}`;
    }
  </script>
</body>
</html>
```markdown
markdown

**Advantages:**
- Full control over styling and layout
- Easy to add interactivity with JavaScript
- Works in any browser
- No special setup required

**Limitations:**
- Have to write HTML/CSS manually
- Harder to manage complex state
- No built-in component library

### Type 3: React Artifacts

**What:** React components with JSX syntax

**Best For:** Complex interactive apps, component-based UIs, stateful applications

**Example:**
```jsx
export default function TodoApp() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Todos</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```markdown
markdown

**Advantages:**
- Easy state management (useState, useContext)
- Component reusability
- Built-in Tailwind CSS support
- Modern JavaScript syntax
- Large ecosystem of libraries

**Limitations:**
- Requires JSX knowledge
- Harder to debug than plain HTML
- Performance can degrade with complex state

### Type 4: SVG Artifacts

**What:** Scalable Vector Graphics for diagrams and illustrations

**Best For:** Diagrams, logos, charts, visual explanations

**Example:**
```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="#007bff"/>
  <text x="100" y="110" text-anchor="middle" fill="white" font-size="24">
    Hello
  </text>
</svg>
```markdown
markdown

**Advantages:**
- Scales perfectly to any size
- Can be animated with CSS/JavaScript
- Small file size
- Precise control over appearance

**Limitations:**
- Manual coordinate math required
- Harder to position elements precisely
- Not ideal for data-driven graphics

### Type 5: Mermaid Artifacts

**What:** Diagrams created with Mermaid syntax

**Best For:** Flowcharts, sequence diagrams, gantt charts, organizational charts

**Example:**
```mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
```sql
sql

**Advantages:**
- Simple syntax (no coordinate math)
- Professional-looking diagrams
- Easy to update
- Many diagram types supported

**Limitations:**
- Limited to diagram types Mermaid supports
- Less control over exact positioning
- Can get complex for large diagrams

### Type 6: PDF Artifacts

**What:** Generated PDF documents

**Best For:** Reports, invoices, certificates, formatted documents

**Note:** PDFs in artifacts are read-only (for display only).

**Advantages:**
- Professional formatting
- Print-friendly
- Cross-platform compatibility

**Limitations:**
- Limited interactivity
- Hard to edit after generation
- Requires specific PDF library

---

## 3. Artifacts vs Files vs Output

**When should you use artifacts vs files vs text output?**

### Decision Matrix

| Need | Artifact | File | Output |
|------|----------|------|--------|
| **Interactive tool/calculator** |  | | |
| **Code for user to copy** | |  |  |
| **Code to save and run later** | |  | |
| **Quick reference/documentation** |  |  |  |
| **Visualization/diagram** |  | | |
| **Data table/spreadsheet** |  or | |  |
| **Report/document** |  | |  |
| **API response/JSON** | |  |  |
| **Source code library** | |  | |
| **Configuration file** | |  | |
| **Explanation/discussion** | | |  |

### Specific Guidance

**Use Artifacts When:**
- User needs to interact with the content (click buttons, input data)
- Visualization will help understanding (charts, diagrams)
- Content is self-contained and complete
- User wants to see results immediately (no file I/O needed)
- Building a mini-app or tool

**Example:** Calculator, todo list, dashboard, diagram, form

**Use Files When:**
- Content needs to be saved to disk
- Code is meant for long-term use
- Large projects (won't render well in artifact panel)
- Source code that will be imported elsewhere
- Configuration files

**Example:** Python script, JSON config, React project, library code

**Use Text Output When:**
- Explaining concepts (not showing implementations)
- Quick code snippets (< 15 lines)
- Discussion, explanation, advice
- Listing results or recommendations
- No interactivity needed

**Example:** API documentation, explanation of concepts, code review, recommendations

---

## 4. Creating Simple Artifacts

### Creating a Simple HTML Tool (5 Minutes)

**Step 1: Describe what you want**
```text
text
"Create a simple BMI calculator. Include:
- Input fields for weight and height
- A button to calculate
- Display the result
- Make it look nice with blue styling"
```markdown
markdown

**Step 2: Claude creates the artifact**
Claude automatically renders it in the artifact panel. You see it working immediately.

**Step 3: Test and refine**
"Make the button green instead of blue" → Claude updates the artifact instantly

### Creating a React Component (10 Minutes)

**Step 1: Request a React component**
```text
jsx
"Build an interactive expense tracker in React. Let me:
- Add expenses with description and amount
- See total spending
- Remove individual expenses
- See the most expensive item"
```markdown
javascript

**Step 2: Claude creates a React component**
```jsx
export default function ExpenseTracker() {
  const [expenses, setExpenses] = React.useState([]);
  const [description, setDescription] = React.useState('');
  const [amount, setAmount] = React.useState('');

  // Component code...
}
```sql
sql

**Step 3: Interact with it**
The component works immediately—add expenses, see totals update in real-time.

### Creating a Mermaid Diagram (5 Minutes)

**Step 1: Request a diagram**
```text
text
"Create a flowchart showing the user onboarding process:
1. Sign up
2. Email verification
3. Profile completion
4. Feature tutorial
5. Start using"
```markdown
markdown

**Step 2: Claude creates Mermaid diagram**
```mermaid
graph TD
    A[Sign Up] --> B[Email Verification]
    B --> C[Profile Completion]
    C --> D[Feature Tutorial]
    D --> E[Start Using]
```markdown
markdown

**Step 3: Request changes**
"Add a decision point: if email fails, show retry option" → Claude updates diagram

---

## 5. Creating Complex Artifacts

### Multi-Component React App

**Structure:**
```jsx
export default function Dashboard() {
  // State
  const [data, setData] = React.useState([]);

  // Components
  const MetricsCard = ({ title, value }) => (
    <div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );

  const ChartComponent = ({ data }) => (
    <div>
      {/* Chart rendering */}
    </div>
  );

  // Main render
  return (
    <div>
      <h1>Dashboard</h1>
      <MetricsCard title="Revenue" value="$10,000" />
      <ChartComponent data={data} />
    </div>
  );
}
```markdown
jsx

**Key Patterns:**

1. **State Management**
   ```jsx
   const [items, setItems] = React.useState([]);
   const [filter, setFilter] = React.useState('');

   // Update state
   setItems([...items, newItem]);
   ```text
html

2. **Conditional Rendering**
   ```jsx
   {items.length > 0 ? (
     <div>Items: {items.length}</div>
   ) : (
     <p>No items yet</p>
   )}
   ```text
javascript

3. **Event Handlers**
   ```jsx
   const handleAdd = () => {
     setItems([...items, input]);
     setInput('');
   };

   <button onClick={handleAdd}>Add</button>
   ```text
javascript

4. **Component Reusability**
   ```jsx
   const Card = ({ title, children }) => (
     <div style={{ border: '1px solid #ddd', padding: '10px' }}>
       <h3>{title}</h3>
       {children}
     </div>
   );

   <Card title="Users">
     {users.map(u => <p key={u.id}>{u.name}</p>)}
   </Card>
   ```markdown
html

### Complex HTML with Styling

**Structure:**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    :root {
      --primary-color: #007bff;
      --secondary-color: #6c757d;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .card {
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
    }

    .btn {
      padding: 8px 16px;
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <!-- Content -->
  <script>
    // JavaScript
  </script>
</body>
</html>
```markdown
css

**Advanced Techniques:**

1. **CSS Grid/Flexbox**
   ```css
   .grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
     gap: 20px;
   }
   ```text
css

2. **Animations**
   ```css
   @keyframes slideIn {
     from { transform: translateX(-100%); }
     to { transform: translateX(0); }
   }

   .animated {
     animation: slideIn 0.3s ease-in-out;
   }
   ```text
css

3. **Media Queries**
   ```css
   @media (max-width: 768px) {
     .grid {
       grid-template-columns: 1fr;
     }
   }
   ```markdown
markdown

---

## 6. Using web-artifacts-builder

**When to use web-artifacts-builder:**
- Building elaborate multi-component applications
- Creating projects that span 100+ lines
- Need advanced features (modules, imports)
- Want to organize code into separate files

**How it works:**

```text
text
You: "Build me a complete project management app"
     ↓
Claude: "I'll use the web-artifacts-builder skill for this"
     ↓
artifact-builder creates:
  - index.html (main entry point)
  - styles.css (all styling)
  - app.js (main application logic)
  - components.js (reusable components)
     ↓
Result: Fully functional multi-file app
```markdown
markdown

**Example Request:**

```sql
text
"Create a project management application with:
- Add/edit/delete projects
- Task management within each project
- Progress tracking
- Local storage persistence
- Professional UI with dark mode support

Use web-artifacts-builder to organize the code properly."
```markdown
markdown

**What web-artifacts-builder handles:**
- File organization
- Module imports/exports
- Build process
- Asset management
- Live preview

**When NOT to use:**
- Simple single-file artifacts (overkill)
- Quick prototypes
- Content you want to easily see in one view

---

## 7. Best Practices

### 1. Performance

**Keep artifacts responsive:**
- Avoid heavy computations on every render
- Use React useMemo for expensive calculations
- Debounce input handlers
- Lazy load large datasets

**Example (Bad):**
```jsx
{items.map(item => {
  // Complex calculation on every render
  const processed = complexFunction(item);
  return <div>{processed}</div>;
})}
```markdown
javascript

**Example (Good):**
```jsx
const processedItems = React.useMemo(() => {
  return items.map(item => complexFunction(item));
}, [items]);

{processedItems.map(processed => (
  <div key={processed.id}>{processed}</div>
))}
```markdown
markdown

### 2. User Experience

**Make interactions obvious:**
- Clear button labels ("Add Item" not "Submit")
- Disabled state for empty inputs
- Confirmation for destructive actions
- Immediate visual feedback

**Example:**
```jsx
<button
  onClick={addItem}
  disabled={!input.trim()}
  style={{
    opacity: input.trim() ? 1 : 0.5,
    cursor: input.trim() ? 'pointer' : 'not-allowed'
  }}
>
  Add Item
</button>
```markdown
markdown

### 3. Accessibility

**Make artifacts accessible:**
- Use semantic HTML (buttons, forms, labels)
- Add aria-labels for clarity
- Ensure sufficient color contrast
- Support keyboard navigation

**Example:**
```jsx
<label htmlFor="search">Search items:</label>
<input
  id="search"
  type="text"
  aria-label="Search items"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
```python
markdown

### 4. Code Organization

**In HTML/JavaScript:**
- Separate styles from HTML (use style tags)
- Group related functions together
- Use clear variable names
- Add comments for complex logic

**In React:**
- One component per logical unit
- Extract sub-components when > 50 lines
- Use custom hooks for shared logic
- Keep state as local as possible

### 5. Visual Design

**Follow these principles:**
- Whitespace: Don't crowd elements
- Color: Use 2-3 main colors max
- Typography: Clear hierarchy (h1, h2, p)
- Consistency: Same styling throughout

**Quick styling template:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

h1 { font-size: 28px; margin: 20px 0 10px; }
h2 { font-size: 22px; margin: 16px 0 8px; }
p { margin-bottom: 12px; }

button {
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

button:hover { background: #0056b3; }
```text
javascript

---

## 8. Common Patterns

### Pattern 1: Form with Validation

```jsx
export default function ContactForm() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name required';
    if (!form.email) newErrors.email = 'Email required';
    if (form.message.length < 10) newErrors.message = 'Message too short';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Form submitted:', form);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div style={{ maxWidth: '400px' }}>
      {['name', 'email', 'message'].map(field => (
        <div key={field} style={{ marginBottom: '16px' }}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type={field === 'email' ? 'email' : 'text'}
            value={form[field]}
            onChange={(e) => setForm({...form, [field]: e.target.value})}
            style={{
              width: '100%',
              padding: '8px',
              border: errors[field] ? '2px solid red' : '1px solid #ddd'
            }}
          />
          {errors[field] && <p style={{ color: 'red' }}>{errors[field]}</p>}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```text
javascript

### Pattern 2: Data Table with Sorting/Filtering

```jsx
export default function DataTable() {
  const [data, setData] = React.useState([
    { id: 1, name: 'John', score: 95 },
    { id: 2, name: 'Jane', score: 87 },
    { id: 3, name: 'Bob', score: 92 }
  ]);
  const [sort, setSort] = React.useState('name');
  const [filter, setFilter] = React.useState('');

  const filtered = data
    .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'name') return a.name.localeCompare(b.name);
      return a.score - b.score;
    });

  return (
    <div>
      <input
        placeholder="Filter by name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="score">Sort by Score</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```text
javascript

### Pattern 3: Modal/Dialog

```jsx
export default function ModalExample() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '400px'
          }}>
            <h2>Confirm Action</h2>
            <p>Are you sure?</p>
            <button onClick={() => setShowModal(false)}>Cancel</button>
            <button onClick={() => { /* do action */ setShowModal(false); }}>
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```text
javascript

### Pattern 4: Real-time Search with Results

```jsx
export default function SearchApp() {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  const allItems = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry'];

  React.useEffect(() => {
    if (query.length > 0) {
      const filtered = allItems.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 ? (
        <ul>
          {results.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : query ? (
        <p>No results found</p>
      ) : null}
    </div>
  );
}
```markdown
markdown

---

## 9. Troubleshooting

### Issue: Artifact Not Rendering

**Problem:** "The artifact panel is blank"

**Solutions:**
1. Check browser console for errors (F12)
2. Verify syntax is correct (especially JSX)
3. Check for missing closing tags/brackets
4. Try refreshing the page

**Debug approach:**
```jsx
// Add console logging to identify issues
console.log('Component rendering');
console.log('Data:', data);

export default function App() {
  console.log('Render called');
  return <div>Hello</div>;
}
```markdown
markdown

### Issue: State Not Updating

**Problem:** "I clicked the button but nothing changed"

**Solutions:**
1. Use setState properly (don't mutate directly)
2. Check that onClick handler is attached
3. Verify state variable is used in render

**Correct approach:**
```jsx
// WRONG - mutating state directly
const [items, setItems] = React.useState([1, 2, 3]);
items.push(4); // Doesn't trigger re-render

// RIGHT - creating new array
const [items, setItems] = React.useState([1, 2, 3]);
setItems([...items, 4]); // Triggers re-render
```markdown
markdown

### Issue: Performance Slow

**Problem:** "Artifact is laggy when typing"

**Solutions:**
1. Use useMemo for expensive operations
2. Debounce input handlers
3. Reduce number of re-renders with useCallback
4. Avoid inline functions in renders

**Example fix:**
```jsx
// BEFORE: laggy
{items.map(item => (
  <ExpensiveComponent
    item={item}
    onClick={() => handleClick(item)} // New function every render
  />
))}

// AFTER: fast
const handleClickMemo = React.useCallback((item) => {
  handleClick(item);
}, []);

{items.map(item => (
  <ExpensiveComponent
    item={item}
    onClick={handleClickMemo}
  />
))}
```markdown
markdown

### Issue: Styles Not Applying

**Problem:** "My CSS changes aren't showing up"

**Solutions:**
1. Check CSS syntax (missing semicolons, brackets)
2. Verify selector is correct
3. Use inline styles as fallback
4. Check for CSS conflicts

**Debug approach:**
```html
<!-- Add inline styles to verify -->
<div style="color: red; font-size: 20px;">
  This should be red and bigger
</div>

<!-- If this works but CSS doesn't, issue is in CSS -->
```python
markdown

### Issue: External Resources Not Loading

**Problem:** "Images, fonts, or scripts from CDN aren't loading"

**Solutions:**
1. Use HTTPS URLs (not HTTP)
2. Check CORS (cross-origin requests)
3. Use base64 encoded data instead
4. Host assets properly

**Correct approach:**
```html
<!-- GOOD - HTTPS, popular CDN -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">

<!-- BAD - HTTP -->
<link href="http://example.com/style.css" rel="stylesheet">

<!-- BETTER - Inline or base64 -->
<img src="data:image/png;base64,iVBORw0KGgo..." />
```markdown
markdown

### Issue: Form Submission Not Working

**Problem:** "Form data isn't being collected or processed"

**Solutions:**
1. Ensure form elements have proper onChange handlers
2. Check that values are controlled (connected to state)
3. Verify onClick/onSubmit handler is attached
4. Test with console.log to see what's being collected

**Correct pattern:**
```jsx
const [email, setEmail] = React.useState('');

const handleSubmit = () => {
  console.log('Email:', email); // Verify data
  if (email) {
    // Process submission
  }
};

<input
  type="email"
  value={email} // Controlled input
  onChange={(e) => setEmail(e.target.value)} // Update state
/>
<button onClick={handleSubmit}>Submit</button>
```markdown
markdown

---

## Quick Reference

### Creating Your First Artifact

1. **Request clearly:** "Create a [type] that does [feature]"
2. **Wait for artifact:** Claude creates and renders it
3. **Test it:** Click buttons, enter data, verify it works
4. **Refine:** "Change the color to blue" → Claude updates immediately
5. **Export:** Take a screenshot or ask Claude to save as file

### Artifact Checklist

Before finalizing an artifact:
- [ ] All buttons and inputs work
- [ ] No console errors (F12 to check)
- [ ] Looks good on your screen size
- [ ] Clear instructions if needed
- [ ] Tested with actual use case

### Best Resources

- **React Docs:** For React patterns and hooks
- **MDN Web Docs:** For HTML/CSS/JavaScript reference
- **Claude Artifacts:** For examples of what's possible

---

## Final Notes

- **Start simple:** Create a basic tool first, then add complexity
- **Test frequently:** Check your artifact as you go
- **Ask for help:** "This isn't working, can you debug?" → Claude can help
- **Iterate:** Small changes are faster than rewrites
- **Save important artifacts:** Ask Claude to save as HTML/React file if you want to keep it

Artifacts are your playground for building interactive experiences with Claude. Have fun experimenting!

---

## When to Use This Section

Use this Artifacts guide when you need to:
-  Create interactive dashboards or data visualizations
-  Build custom tools, calculators, or form applications
-  Generate HTML/React components on the fly
-  Create deliverables for stakeholders
-  Prototype interfaces quickly without writing code
-  Integrate interactive content into workflows

**Don't use this section when:**
-  You just need static text output
-  You're building a full production application (use proper development framework)
-  You need to store files (create files instead)
-  You want to integrate with external databases

---

## Personal Notes

**Use this section to capture your insights, questions, and discoveries as you work through this guide.**

### Artifacts Created
*Document the artifacts you've created and what they do*

```text
yaml
1. Name: ________________________
   Type: ____________
   Purpose: ________________________

2. Name: ________________________
   Type: ____________
   Purpose: ________________________

3. Name: ________________________
   Type: ____________
   Purpose: ________________________
```text
markdown

### Technical Discoveries
*What did you learn about building artifacts?*

```text
json
[Your technical notes here]
```text
markdown

### User Experience Insights
*What makes artifacts work well for your users?*

```text
json
[Your UX insights here]
```text
markdown

### Integration Opportunities
*How can you use artifacts in your workflows?*

```text
json
[Your integration ideas here]
```text
markdown

### Challenges Overcome
*What issues did you run into and how did you solve them?*

```text
json
[Your troubleshooting notes here]
```markdown

---

## Progress & Next Steps

### Completion Checklist

- [ ] **Understand artifact types** - Markdown, HTML, React, SVG, Mermaid, PDF
- [ ] **Create simple artifacts** - HTML form, basic calculator, simple visualization
- [ ] **Create complex artifacts** - Multi-component React app or dashboard
- [ ] **Use web-artifacts-builder** - For elaborate projects
- [ ] **Implement best practices** - Performance, accessibility, UX
- [ ] **Troubleshoot common issues** - Styling, imports, interactions
- [ ] **Integrate with workflows** - Use artifacts in your orchestrations
- [ ] ** I've completed this guide** *(Check when done)*

### Reflection Questions

After completing this guide, ask yourself:

1. Can you create a functional form artifact from scratch?
2. Can you build a React component with state management?
3. Do you know when to use artifacts vs. files vs. output?
4. Have you tested your artifacts for performance?
5. Can you integrate artifacts into your larger workflows?

### Your Artifact Portfolio

- Total Artifacts Created: ______
- Most Complex Type Used: ____________
- Favorite Artifact: ________________________
- Ready to Deploy: Yes / No

---

## Next Steps

**You've completed Section 11: Artifacts!**

You now understand:
-  What artifacts are and how to create them
-  All six artifact types and when to use each
-  Creating simple and complex interactive content
-  Using the web-artifacts-builder skill for advanced projects
-  Best practices for performance and UX
-  Common patterns you can reuse
-  Troubleshooting and debugging techniques

**You've completed Phase 4!**

You've mastered:
- Section 11 (Artifacts): Creating interactive, dynamic content ← **YOU ARE HERE**

**Congratulations!**

You've completed all 11 sections of the AI Mastery Toolkit's How-To Guides:
- Phase 1 (Sections 1-4): Building Blocks - Foundation for everything else
- Phase 2 (Sections 5-6): Expanding Capabilities - Agents and integrations
- Phase 3 (Sections 7-10): Complex Task Creation - Orchestration from concept to operations
- Phase 4 (Section 11): Specialty Skill - Interactive content and rapid prototyping

**Your next steps:**
1. **Deepen:** Return to earlier sections to master subtle techniques
2. **Practice:** Build increasingly complex systems with what you've learned
3. **Teach:** Document your discoveries and share with others
4. **Innovate:** Create new patterns beyond what's in the guides

**Related Guides:**
- 7_Frameworks_Guide_v1.0.md - Orchestration concepts
- 8_Workflows_Guide_v1.0.md - Workflow design
- 9_Automations_Guide_v1.0.md - Building in n8n
- 10_Orchestration_Guide_v1.0.md - Operations and optimization

**Related Capabilities:**
- `3_AI_&_Human_Capabilities/11_Artifacts/` - Templates, examples, and pattern library
