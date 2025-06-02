# Component Usage Guide - C10 Insurance

## Quick Reference

This guide provides practical examples and best practices for using components in the C10 Insurance website.

## Table of Contents
1. [Basic Component Usage](#basic-component-usage)
2. [Component Composition](#component-composition)
3. [Data Passing Patterns](#data-passing-patterns)
4. [Responsive Considerations](#responsive-considerations)
5. [Common Patterns](#common-patterns)

## Basic Component Usage

### Including a Component
```nunjucks
{# Simple include #}
{% include "components/sections/section-hero.njk" %}

{# Include with data #}
{% set componentData = { title: "Hello" } %}
{% include "components/ui/ui-card.njk" %}
```

### Component File Structure
```
src/_includes/components/
├── sections/          # Full-width page sections
│   ├── section-hero.njk
│   ├── section-features.njk
│   └── section-cta.njk
├── ui/               # UI elements
│   ├── ui-button.njk
│   ├── ui-card.njk
│   └── ui-form.njk
└── layout/           # Layout helpers
    ├── layout-grid.njk
    └── layout-container.njk
```

## Component Composition

### Building a Page
```nunjucks
---
layout: layouts/base.njk
title: Home
---

{# Hero Section #}
{% set heroData = {
  title: "Welcome to C10 Insurance",
  subtitle: "Your trusted insurance partner",
  ctaText: "Get Started",
  ctaLink: "/quote"
} %}
{% include "components/sections/section-hero.njk" %}

{# Features Section #}
{% set featuresData = {
  title: "Our Services",
  features: collections.features
} %}
{% include "components/sections/section-features.njk" %}

{# CTA Section #}
{% include "components/sections/section-cta.njk" %}
```

### Nesting Components
```nunjucks
{# Inside section-features.njk #}
<section class="c-section-features">
  {% include "components/layout/layout-container.njk" %}
    <div class="c-section-features__grid">
      {% for feature in features %}
        {% set cardData = feature %}
        {% include "components/ui/ui-card.njk" %}
      {% endfor %}
    </div>
  {% endinclude %}
</section>
```

## Data Passing Patterns

### Method 1: Set Before Include
```nunjucks
{% set buttonData = {
  text: "Click Me",
  link: "/action",
  variant: "primary"
} %}
{% include "components/ui/ui-button.njk" %}
```

### Method 2: Inline Data
```nunjucks
{% include "components/ui/ui-button.njk" with {
  text: "Click Me",
  link: "/action"
} %}
```

### Method 3: Using Global Data
```nunjucks
{# In component #}
{{ site.companyName }}
{{ currentYear }}
```

### Method 4: Collection Data
```nunjucks
{% for service in collections.services %}
  {% set cardData = {
    title: service.data.title,
    content: service.data.excerpt,
    link: service.url
  } %}
  {% include "components/ui/ui-card.njk" %}
{% endfor %}
```

## Responsive Considerations

### Mobile-First Approach
```css
/* Component CSS */
.c-section-hero {
  padding: 2rem 0;  /* Mobile */
}

@media (min-width: 768px) {
  .c-section-hero {
    padding: 4rem 0;  /* Tablet+ */
  }
}
```

### Conditional Content
```nunjucks
{# In component #}
<div class="c-hero__content">
  <h1>{{ title }}</h1>
  {% if subtitle %}
    <p class="c-hero__subtitle">{{ subtitle }}</p>
  {% endif %}
  
  {# Desktop only #}
  <div class="u-hidden-mobile">
    {% include "components/ui/ui-video.njk" %}
  </div>
</div>
```

## Common Patterns

### Pattern 1: Section with Container
```nunjucks
<section class="c-section-[name]">
  <div class="l-container">
    {# Section content #}
  </div>
</section>
```

### Pattern 2: Grid Layout
```nunjucks
{% set gridData = {
  columns: 3,
  gap: "medium"
} %}
{% include "components/layout/layout-grid.njk" %}
  {% for item in items %}
    {% include "components/ui/ui-card.njk" %}
  {% endfor %}
{% endinclude %}
```

### Pattern 3: Conditional Styling
```nunjucks
<button class="
  c-button
  c-button--{{ variant | default('primary') }}
  c-button--{{ size | default('medium') }}
  {% if isFullWidth %}c-button--full{% endif %}
">
  {{ text }}
</button>
```

### Pattern 4: Component Variants
```nunjucks
{# Hero component with variants #}
<section class="c-section-hero c-section-hero--{{ variant }}">
  {% if variant == "centered" %}
    {# Centered layout #}
  {% elif variant == "split" %}
    {# Split layout #}
  {% else %}
    {# Default layout #}
  {% endif %}
</section>
```

## Best Practices

### DO:
- ✅ Check Component Registry before creating new components
- ✅ Use semantic HTML in components
- ✅ Keep components focused on one purpose
- ✅ Document component parameters
- ✅ Test components in isolation
- ✅ Use BEM naming for component classes

### DON'T:
- ❌ Create overly specific components
- ❌ Hard-code content in components
- ❌ Use inline styles
- ❌ Forget responsive behavior
- ❌ Mix component responsibilities
- ❌ Use Liquid syntax (use Nunjucks!)

## Debugging Components

### Show Component Data
```nunjucks
{# Debug mode - show all data #}
{% if site.debug %}
  <pre>{{ componentData | dump }}</pre>
{% endif %}
```

### Check If Data Exists
```nunjucks
{% if not title %}
  <p class="error">Warning: Title is required for this component</p>
{% endif %}
```

### Log to Console (Development)
```nunjucks
<script>
  console.log('Component loaded:', {{ componentData | dump | safe }});
</script>
```

## Component Testing Checklist

- [ ] Component renders without data
- [ ] Component handles missing optional data
- [ ] Component is responsive
- [ ] Component is accessible
- [ ] Component follows naming conventions
- [ ] Component is documented
- [ ] Component CSS is scoped
- [ ] Component works in all target browsers

---

**Remember**: Components are ingredients. Pages are recipes. Keep ingredients simple and reusable!
