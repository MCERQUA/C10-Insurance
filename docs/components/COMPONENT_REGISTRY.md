# Component Registry - S10 Insurance Website

## Overview
This registry contains all available components for the S10 Insurance website. Components are organized as reusable "ingredients" that can be combined to create complete pages.

## Component Categories

### 📦 Section Components
Full-width page sections that stack vertically to create complete pages.

#### section-hero
**Path**: `src/_includes/components/sections/section-hero.njk`
**Purpose**: Main hero section with headline, subtitle, and CTA
**Parameters**:
- `title` (string): Main headline
- `subtitle` (string): Supporting text
- `ctaText` (string): Button text
- `ctaLink` (string): Button URL
- `backgroundImage` (string, optional): Hero background

**Usage**:
```nunjucks
{% set heroData = {
  title: "Protect What Matters Most",
  subtitle: "Comprehensive insurance solutions for your peace of mind",
  ctaText: "Get a Quote",
  ctaLink: "/quote"
} %}
{% include "components/sections/section-hero.njk" %}
```

#### section-features
**Path**: `src/_includes/components/sections/section-features.njk`
**Purpose**: Feature grid showcasing services or benefits
**Parameters**:
- `title` (string): Section title
- `features` (array): Array of feature objects
  - `icon` (string): Icon class or image
  - `title` (string): Feature title
  - `description` (string): Feature description

**Usage**:
```nunjucks
{% set featuresData = {
  title: "Why Choose S10 Insurance",
  features: [
    {
      icon: "shield",
      title: "Comprehensive Coverage",
      description: "Protection for all aspects of your life"
    }
  ]
} %}
{% include "components/sections/section-features.njk" %}
```

### 🎨 UI Components
Smaller, reusable interface elements.

#### ui-button
**Path**: `src/_includes/components/ui/ui-button.njk`
**Purpose**: Consistent button styling
**Parameters**:
- `text` (string): Button text
- `link` (string): Button URL
- `variant` (string): 'primary', 'secondary', 'outline'
- `size` (string): 'small', 'medium', 'large'

**Usage**:
```nunjucks
{% set buttonData = {
  text: "Learn More",
  link: "/about",
  variant: "primary",
  size: "medium"
} %}
{% include "components/ui/ui-button.njk" %}
```

#### ui-card
**Path**: `src/_includes/components/ui/ui-card.njk`
**Purpose**: Content card with optional image
**Parameters**:
- `title` (string): Card title
- `content` (string): Card body text
- `image` (string, optional): Image URL
- `link` (string, optional): Makes card clickable

### 📐 Layout Components
Structural components for page layout.

#### layout-grid
**Path**: `src/_includes/components/layout/layout-grid.njk`
**Purpose**: Responsive grid container
**Parameters**:
- `columns` (number): Number of columns (2-4)
- `gap` (string): 'small', 'medium', 'large'

#### layout-container
**Path**: `src/_includes/components/layout/layout-container.njk`
**Purpose**: Centered content container with max-width
**Parameters**:
- `size` (string): 'narrow', 'default', 'wide'

## Component Creation Guidelines

### 1. Before Creating a New Component
- [ ] Check if a similar component exists
- [ ] Consider if an existing component can be modified
- [ ] Ensure the component will be reused at least 3 times

### 2. Component Structure
```nunjucks
{# Component: [component-name] #}
{# Purpose: [what this component does] #}
{# Parameters: list all parameters #}

<div class="component-[name]">
  {# Component markup #}
</div>
```

### 3. After Creating a Component
- [ ] Add to this registry immediately
- [ ] Include usage example
- [ ] Document all parameters
- [ ] Test in multiple contexts
- [ ] Update development log

## Component Composition Examples

### Homepage Composition
```nunjucks
{% include "components/sections/section-hero.njk" %}
{% include "components/sections/section-features.njk" %}
{% include "components/sections/section-testimonials.njk" %}
{% include "components/sections/section-cta.njk" %}
```

### Service Page Composition
```nunjucks
{% include "components/sections/section-page-header.njk" %}
{% include "components/sections/section-service-grid.njk" %}
{% include "components/sections/section-process.njk" %}
{% include "components/sections/section-faq.njk" %}
{% include "components/sections/section-contact.njk" %}
```

## Pending Components (To Be Created)

1. **section-testimonials**: Customer testimonial carousel
2. **section-cta**: Call-to-action section
3. **section-contact**: Contact form section
4. **section-faq**: Frequently asked questions
5. **ui-form**: Form elements
6. **ui-modal**: Modal/popup component

## Component Maintenance

- Review monthly for unused components
- Refactor similar components into single flexible component
- Keep documentation in sync with actual components
- Version major component changes

---

**Last Updated**: [Current Date]
**Total Components**: 0 (Starting fresh)
**Next Review**: [One month from creation]