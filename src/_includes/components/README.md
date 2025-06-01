# Components Directory

This directory contains all reusable components for the S10 Insurance website.

## Structure

- **sections/** - Full-width page sections (hero, features, testimonials, etc.)
- **ui/** - UI elements (buttons, cards, forms, etc.)
- **layout/** - Layout helpers (grids, containers, etc.)

## Usage

Components are included in templates using:

```nunjucks
{% include "components/[type]/[component-name].njk" %}
```

With data:

```nunjucks
{% set componentData = {
  title: "Example",
  content: "Lorem ipsum"
} %}
{% include "components/ui/ui-card.njk" %}
```

## Creating New Components

1. Check the Component Registry first
2. Create file in appropriate subdirectory
3. Follow naming conventions
4. Document in /docs/components/COMPONENT_REGISTRY.md
5. Test thoroughly
6. Update development log

Refer to /docs/MASTER_DEVELOPMENT_GUIDE.md for complete guidelines.