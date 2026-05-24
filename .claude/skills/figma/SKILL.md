---
name: Figma Design Workflow
description: "Use when: creating designs in Figma, generating diagrams, building design systems, creating components, design-to-code translation, or performing design tasks"
---

# Figma Design Workflow

Streamlined skill for all Figma design work including file creation, diagram generation, design system development, and component mapping.

## When to Use

Trigger this skill when you need to:
- **Create new Figma files** (designs, FigJam, Slides)
- **Generate diagrams** (flowcharts, architecture diagrams, visual flows)
- **Build design systems** (component libraries, variables, tokens, theming)
- **Create or update components** with variants and variable bindings
- **Translate designs to code** (Code Connect, design-to-code workflows)
- **Write to Figma** (push app pages into Figma)
- **Perform design operations** (drag elements, organize files, update properties)

## Prerequisites

Figma MCP server must be authenticated with your Figma account via OAuth.

## Key Workflows

### 1. Creating New Files
Use `figma-create-new-file` skill to initialize blank Figma files.

### 2. Generating Diagrams
Use `figma-generate-diagram` skill for flowcharts, architecture diagrams, or visual explanations.

### 3. Building Design Systems
Use `figma-generate-library` skill to create professional component libraries with:
- Variables and design tokens
- Light/dark mode theming
- Component variants
- Proper documentation

### 4. Design-to-Code Translation
Use `figma-generate-design` skill to translate app pages/layouts into Figma designs.

### 5. Code Connect & Component Mapping
Use `figma-code-connect` skill to map Figma components to code snippets.

### 6. General Figma Operations
Use `figma-use` skill for read/write operations, element manipulation, and design updates.

## Authentication

Figma operations require authenticated MCP connection. If prompted, authorize via OAuth to connect your Figma workspace.

## Tips

- Always load the appropriate prerequisite skill before performing operations
- Organize files and components for clarity and reusability
- Use design tokens and variables for consistent theming
- Document components and design decisions in Figma
