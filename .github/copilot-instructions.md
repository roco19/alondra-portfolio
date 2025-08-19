# AI Agent Instructions for Artist Portfolio Project

## Project Overview
This is a responsive artist portfolio website project focused on minimalist design and optimal user experience. The project uses TailwindCSS for styling and modern vanilla JavaScript for interactivity.

## Technical Stack & Architecture
- **Frontend**: HTML5, TailwindCSS, Vanilla JavaScript (ES6+)
- **Design System**: 
  - Follows BEM naming convention for custom CSS classes
  - Uses Tailwind utility classes for spacing, typography, and responsiveness
  - Supports both light and dark themes via system preferences and manual toggle

## Critical Patterns & Conventions

### HTML Structure
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, etc.)
- Avoid generic `<div>`/`<span>` when semantic alternatives exist
- Form inputs must have associated `<label>` tags
- Images require descriptive `alt` attributes

### Styling Approach
- Prefer Tailwind utility classes for layout and basic styling
- Use relative units: `rem` for fonts, `em` for spacing
- Custom CSS follows BEM: `.block__element--modifier`
- No inline styles permitted

### JavaScript Guidelines
- Modern ES6+ syntax (const/let, arrow functions, template literals)
- Vanilla JS only - no jQuery
- Event delegation for performance
- Scripts should use `async`/`defer` appropriately

### Theme Handling
The site implements a dual-theme system:
1. Auto-detects system preference via `prefers-color-scheme`
2. Allows manual override via header toggle button
3. Theme selection persists across sessions

## Page Structure
1. Header with logo, nav links, and theme toggle
2. Hero section with artist intro
3. Portfolio gallery grid
4. About section with bio
5. Testimonials/press section
6. Contact form
7. Minimal footer

## Performance Considerations
- Images should be lazy-loaded
- Optimize artwork images before adding to `artist_paints/`
- Minimize DOM manipulations in JS
- Group related CSS properties for maintainability

## Current Status
Project is in initial setup phase with:
- Design requirements and coding standards defined
- Basic artwork assets available
- Core structure pending implementation
