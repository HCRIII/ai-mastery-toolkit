# Learning and Documentation Project - Planning Template

**Created:** 2026-02-13
**Last Updated:** 2026-02-13
**Purpose:** AI capability reference documentation
**Status:** Final

---

**Plan a Project for learning new topics or documenting knowledge systematically.**

---

## Project Planning Prompt

```
I'm creating a learning/documentation project for [topic/technology/domain].

Purpose: [learning new skill, documenting process, building knowledge base]
Current level: [beginner, intermediate, advanced]
Goal: [understand concepts, apply in practice, teach others]
Timeline: [how long to achieve goal]

Help me plan:
1. Project name and scope
2. What learning materials to include
3. Knowledge organization structure
4. Practice exercises and applications
5. How to track progress
```

---

## Example: Learning TypeScript Project

**Project Name:** "TypeScript Mastery for React Developers"

### Custom Instructions

```
You are a TypeScript tutor helping a JavaScript developer learn TypeScript for React applications.

## Teaching Approach
- **Build on existing knowledge**: Connect to JavaScript concepts they know
- **Practical focus**: Every concept with real-world React examples
- **Progressive complexity**: Start simple, add sophistication gradually
- **Explain the why**: Not just syntax, but reasons and trade-offs
- **Catch misconceptions**: Identify and correct common misunderstandings

## Learning Style
- Prefer concrete examples over abstract definitions
- Show code first, then explain the concept
- Use analogies to JavaScript patterns
- Provide both correct and incorrect examples
- Encourage experimentation and mistakes

## Response Structure
When explaining concepts:
1. **Quick definition** (1 sentence)
2. **JavaScript comparison** (what they already know)
3. **Code example** (practical, realistic)
4. **Common pitfalls** (mistakes to avoid)
5. **Practice suggestion** (how to apply it)

## Depth Calibration
- **Beginner topics**: Extra detail, multiple examples, hand-holding
- **Intermediate topics**: Assume JS knowledge, focus on TS-specific aspects
- **Advanced topics**: Concise explanations, edge cases, best practices

## When I Ask Questions
- Give hints first, not full answers
- Ask clarifying questions to understand my confusion
- Provide scaffolded help (gentle → more explicit)
- Celebrate progress and effort

## Reference Style
- Cite specific sections from documentation in Project Knowledge
- Link concepts across different learning materials
- Point to relevant examples when explaining
- Build on previous explanations in our conversation
```

### Documents to Include

1. **Official Documentation** - TypeScript handbook, React TypeScript guide
2. **Tutorial Series** - Step-by-step learning materials
3. **Code Examples** - Real-world TypeScript React components
4. **Cheat Sheets** - Quick reference for syntax, patterns
5. **Best Practices** - Style guides, conventions, patterns
6. **Common Errors** - Typical mistakes and solutions
7. **Exercise Solutions** - Your practice work with notes
8. **Project Context** - Your codebase patterns, team conventions
9. **Learning Notes** - Your questions, insights, aha moments
10. **Resource List** - Links to additional materials, courses

### Planning Prompts

**Create Learning Roadmap:**
```
Based on my goal of [learning objective], create a learning roadmap.

Include:
- Key concepts to master (in order)
- Prerequisites for each concept
- Practical projects to build understanding
- Estimated time for each phase
- How to know I'm ready to move forward
```

**Explain Core Concept:**
```
Explain [concept] assuming I understand [prerequisite knowledge].

Include:
- Simple definition
- Why it matters
- Code example
- Common mistakes
- How it's used in practice
- What to learn next
```

**Generate Practice Exercises:**
```
Create 5 practice exercises for [concept/topic].

For each exercise:
- What skill it reinforces
- Difficulty level
- Expected time
- What success looks like
- Hint for getting started
```

**Review My Understanding:**
```
I'll explain [concept] in my own words. Tell me:
- What I got right
- What I misunderstood
- What I'm missing
- How to solidify this knowledge

[your explanation]
```

**Debug My Learning:**
```
I'm confused about [topic]. Here's what I think I understand:
[describe your current understanding]

Help me:
- Identify what's confusing me
- Clarify the concept
- Show where I went wrong
- Provide a clearer mental model
```

**Apply to Real Project:**
```
How would I apply [concept] to [my specific use case/project]?

Show:
- Specific implementation approach
- Why this pattern fits
- Potential issues to watch for
- Alternative approaches
```

**Create Study Plan:**
```
I have [X hours per week] to learn [topic]. Create a study plan.

Include:
- Weekly goals and topics
- Time allocation (reading, coding, practicing)
- Checkpoints to assess understanding
- Projects to build
- How to stay motivated
```

---

## Key Learning Project Tips

- **Track what you learn** - Add your own notes and examples as you progress
- **Document confusion** - Write down what you don't understand, resolve it later
- **Version your knowledge** - Update docs as your understanding deepens
- **Include wrong paths** - Document mistakes and how you fixed them
- **Build a personal wiki** - Your insights, connections, patterns
- **Connect to your work** - Add examples from your actual projects
- **Update regularly** - Add new resources, better examples, clearer explanations
- **Teach to learn** - Write explanations as if teaching someone else

---

## Example: Documentation Project

**Project Name:** "Company API Documentation"

### Custom Instructions

```
You are documenting our internal API for developers.

## Documentation Standards
- **Clarity over brevity**: Be thorough, not terse
- **Examples for everything**: Every endpoint, parameter, response
- **Real-world use cases**: Show how it's actually used
- **Error scenarios**: What can go wrong and how to handle it
- **Keep it current**: Note deprecated features, version differences

## Structure
- Overview and quickstart
- Authentication and setup
- Endpoint reference (grouped logically)
- Common patterns and recipes
- Troubleshooting guide
- Change log

## Writing Style
- Active voice, present tense
- Direct and specific
- Assume developer audience (technical but not overly formal)
- Define acronyms on first use
- Code examples in multiple languages when relevant

## For Each Endpoint
1. **Description**: What it does (1-2 sentences)
2. **Method and Path**: `POST /api/v1/users`
3. **Parameters**: Each param with type, required/optional, description
4. **Request Example**: Real, working example
5. **Response Example**: Success and error cases
6. **Error Codes**: What they mean and how to fix
7. **Notes**: Rate limits, gotchas, best practices
```

### Documents to Include

1. **API Specification** - OpenAPI/Swagger docs, schema definitions
2. **Code Examples** - Working implementations in multiple languages
3. **Architecture Diagrams** - How systems connect
4. **Onboarding Guide** - Getting started, first API call
5. **Use Case Library** - Common scenarios and solutions
6. **Troubleshooting FAQs** - Known issues, debugging tips
7. **Change Log** - Version history, breaking changes
8. **Internal Design Docs** - Why things work the way they do

### Planning Prompts for Documentation

**Generate API Reference:**
```
Create comprehensive documentation for [endpoint/feature].

Include all required sections from the documentation standards.
Base it on [OpenAPI spec/code/existing docs] in Project Knowledge.
```

**Create Quickstart Guide:**
```
Write a quickstart guide that gets a developer from zero to first successful API call in under 10 minutes.

Include:
- Setup requirements
- Authentication
- First request
- What success looks like
- Next steps
```

**Document Common Pattern:**
```
Document the pattern for [pagination/authentication/error handling/etc.].

Show:
- Why we use this pattern
- How to implement it
- Complete code example
- Common mistakes
- Edge cases
```

---

## Testing Your Project Setup

**For Learning Projects:**

```
Explain [concept I'm learning] as if I'm a [beginner/intermediate].
```

```
Quiz me on [topic] to check my understanding.
```

```
I'm stuck on [problem]. Help me debug my thinking.
```

```
Create a project that would help me practice [skill].
```

**For Documentation Projects:**

```
Write documentation for [endpoint/feature] following our standards.
```

```
A developer is getting [error]. Help them troubleshoot.
```

```
Explain how to implement [common use case] with our API.
```

```
Review this documentation I wrote: [paste docs]
```
