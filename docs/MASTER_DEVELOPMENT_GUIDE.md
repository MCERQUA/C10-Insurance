# C10 Insurance Website - Master Development Guide

## 🚀 Quick Start (echo init)

When starting any development session, run this initialization sequence:

```bash
# 1. Confirm you're in the C10-Insurance directory
# 2. Run: echo init
# 3. This will trigger the AI to:
#    - Fetch AI/Memory/memory.json
#    - Load component registry from docs/components/COMPONENT_REGISTRY.md
#    - Review brand style guide from docs/Website-brand-style-sheet-for-C10.html
#    - Check recent updates in docs/development-log.md
```

## 📋 Critical Development Rules

### 1. Component-First Architecture
- **NEVER** create inline styles or new CSS classes without checking existing components
- **ALWAYS** check the Component Registry before creating new components
- **REUSE** existing components whenever possible, modifying only content
- **DOCUMENT** every new component immediately in the registry

### 2. File Structure Rules
```
src/
├── _includes/
│   ├── components/        # All reusable components
│   │   ├── sections/     # Page section components
│   │   ├── ui/          # UI elements (buttons, cards, etc.)
│   │   └── layout/      # Layout components
│   ├── header.njk
│   └── footer.njk
├── _data/               # Global data files
├── _layouts/            # Page layouts
├── css/                 # Stylesheets
├── js/                  # JavaScript files
└── [pages].njk         # Individual pages
```

### 3. Component Naming Convention
- Section components: `section-[name].njk` (e.g., `section-hero.njk`)
- UI components: `ui-[name].njk` (e.g., `ui-button.njk`)
- Layout components: `layout-[name].njk` (e.g., `layout-grid.njk`)

### 4. Template Syntax - CRITICAL
- **Framework**: Eleventy with Nunjucks (NOT Liquid!)
- **Filter syntax**: `{{ variable | filterName(arg1, arg2) }}`
- **Date filters**: `{{ date | date('%Y-%m-%d') }}`
- **Safe HTML**: `{{ content | safe }}`

### 5. Component Usage Pattern
```nunjucks
{# Page template example #}
{% extends "layouts/base.njk" %}

{% block content %}
  {% include "components/sections/section-hero.njk" %}
  {% include "components/sections/section-features.njk" %}
  {% include "components/sections/section-cta.njk" %}
{% endblock %}
```

### 6. Component Parameters
When including components with custom data:
```nunjucks
{% set heroData = {
  title: "Welcome to C10 Insurance",
  subtitle: "Your trusted partner",
  ctaText: "Get Started",
  ctaLink: "/contact"
} %}
{% include "components/sections/section-hero.njk" %}
```

## 🎨 Styling Guidelines

### CSS Architecture
1. **Base styles**: Reset and typography in `style.css`
2. **Component styles**: Scoped within component files
3. **Utility classes**: Minimal, reusable helpers
4. **No inline styles**: Everything in CSS files

### Brand Consistency
- Primary colors: (defined in style guide)
- Typography: (defined in style guide)
- Spacing: Use consistent rem units
- Responsive: Mobile-first approach

## 📁 Essential Reference Files

1. **Component Registry**: `/docs/components/COMPONENT_REGISTRY.md`
   - Complete list of available components
   - Usage examples for each component
   - Component dependencies

2. **Style Guide**: `/docs/Website-brand-style-sheet-for-C10.html`
   - Brand colors and usage
   - Typography specifications
   - Visual guidelines

3. **AI Memory**: `/AI/Memory/memory.json`
   - Project configuration
   - Common issues and solutions
   - Development commands

4. **Development Log**: `/docs/development-log.md`
   - Recent changes
   - Known issues
   - TODO items

## 🔧 Development Workflow

### Before Creating Content
1. Run `echo init` to load project context
2. Review Component Registry for existing components
3. Check if similar components can be reused
4. Plan component composition for the page

### Creating New Components
1. Check Component Registry first
2. Create component in appropriate folder
3. Document in Component Registry immediately
4. Test component in isolation
5. Update development log

### Testing
```bash
npm start          # Development server
npm run build      # Build for production
npm run serve      # Serve production build
```

### Deployment
1. Test locally with `npm run build`
2. Commit all changes including documentation
3. Push to main branch
4. Monitor Netlify deployment

## ⚠️ Common Pitfalls to Avoid

1. **Creating duplicate components** - Always check registry first
2. **Using Liquid syntax** - This is Nunjucks, not Liquid!
3. **Inline styling** - Keep all styles in CSS files
4. **Forgetting to document** - Update registry immediately
5. **Not testing locally** - Always build before pushing

## 🆘 Troubleshooting

### Template Errors
- Check for Nunjucks syntax (parentheses, not colons)
- Verify all includes have correct paths
- Ensure data variables are properly set

### Build Errors
- Run `npm run debug` for detailed output
- Check Netlify logs for deployment issues
- Verify all files are committed

## 📞 Quick Reference

- **Init Command**: `echo init`
- **Dev Server**: `npm start`
- **Build**: `npm run build`
- **Component Folder**: `src/_includes/components/`
- **Docs Folder**: `/docs/`
- **Memory File**: `/AI/Memory/memory.json`

---

**Remember**: Component reusability is KEY! Think "ingredients" for your "recipe" (page).
