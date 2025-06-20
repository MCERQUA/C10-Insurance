# Component Registry - C10 Insurance Website

## Overview
This registry contains all available components for the C10 Insurance website. Components are organized as reusable "ingredients" that can be combined to create complete pages.

## Component Categories

### 📦 Section Components
Full-width page sections that stack vertically to create complete pages.

#### section-hero-c10
**Path**: `src/_includes/components/sections/section-hero-c10.njk`
**Purpose**: Main hero section specifically for C10 Insurance with strong SEO focus
**Parameters**:
- `title` (string): Main headline - Default: "Specialized Insurance for Your Classic Chevy C10 Pickup Truck"
- `subtitle` (string): Supporting text - Default: "Expert Coverage for C10 Fleetside, Stepside, and Suburban Owners Since 1960"
- `ctaText` (string): Button text - Default: "Get Your C10 Quote Now"
- `ctaLink` (string): Button URL - Default: "/quote"
**Features**: Animated background, C10 truck silhouette, trust indicators
**Usage**:
```nunjucks
{% include "components/sections/section-hero-c10.njk" %}
```

#### section-c10-models
**Path**: `src/_includes/components/sections/section-c10-models.njk`
**Purpose**: Showcase all C10 models and generations covered
**Parameters**:
- `title` (string): Section title - Default: "Every Chevy C10 Model Covered"
**Features**: Timeline display of C10 generations, model variants, hover effects
**Usage**:
```nunjucks
{% include "components/sections/section-c10-models.njk" %}
```

#### section-why-c10
**Path**: `src/_includes/components/sections/section-why-c10.njk`
**Purpose**: Explain why specialized C10 insurance matters
**Parameters**:
- `title` (string): Section title - Default: "Why Choose Specialized C10 Insurance?"
**Features**: Reason cards, comparison table, animated hover effects
**Usage**:
```nunjucks
{% include "components/sections/section-why-c10.njk" %}
```

#### section-coverage-grid
**Path**: `src/_includes/components/sections/section-coverage-grid.njk`
**Purpose**: Display C10-specific coverage features in a modern grid
**Parameters**:
- `title` (string): Section title - Default: "Comprehensive C10 Coverage Options"
- `subtitle` (string): Section subtitle - Default: "Tailored protection for every C10 owner - from daily drivers to show trucks"
**Features**: Coverage cards, pricing display, included features list
**Usage**:
```nunjucks
{% include "components/sections/section-coverage-grid.njk" %}
```

#### section-c10-stats
**Path**: `src/_includes/components/sections/section-c10-stats.njk`
**Purpose**: Display impressive C10 insurance statistics
**Parameters**:
- `title` (string): Section title - Default: "C10 Insurance by the Numbers"
**Features**: Animated numbers, 3D grid background, trust badges
**Usage**:
```nunjucks
{% include "components/sections/section-c10-stats.njk" %}
```

#### section-cta-c10
**Path**: `src/_includes/components/sections/section-cta-c10.njk`
**Purpose**: Strong call to action for C10 insurance quotes
**Parameters**:
- `title` (string): CTA title - Default: "Ready to Save on Your C10 Insurance?"
- `subtitle` (string): CTA subtitle - Default: "Join thousands of C10 owners who trust us with their trucks. Get your personalized quote in minutes."
- `primaryCta` (object): Primary button config with `text` and `link`
- `secondaryCta` (object): Secondary button config with `text` and `phone`
**Features**: Animated C10 truck graphic, dual CTAs, trust indicators
**Usage**:
```nunjucks
{% include "components/sections/section-cta-c10.njk" %}
```

#### section-hero (Original)
**Path**: `src/_includes/components/sections/section-hero.njk`
**Purpose**: Generic hero section (use section-hero-c10 for C10-specific pages)
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

#### section-features (Original)
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
  title: "Why Choose C10 Insurance",
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

#### ui-top-banner
**Path**: `src/_includes/components/ui/ui-top-banner.njk`
**Purpose**: Fixed top banner with click-to-call phone number
**Parameters**:
- `phoneNumber` (string): Phone number to display - Default: "844-967-5247"
- `phoneText` (string): Phone text to display - Default: "844-WORK-247"
- `message` (string): Message to display - Default: "FOR A QUICK QUOTE."
**Features**: Click-to-call functionality, animated gradient background, mobile responsive
**Usage**:
```nunjucks
{% include "components/ui/ui-top-banner.njk" %}
```

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

<div class="c-[component-name]">
  {# Component markup #}
</div>

<style>
  /* Component styles */
</style>
```

### 3. After Creating a Component
- [ ] Add to this registry immediately
- [ ] Include usage example
- [ ] Document all parameters
- [ ] Test in multiple contexts
- [ ] Update development log

## Component Composition Examples

### C10 Insurance Homepage
```nunjucks
{% include "components/sections/section-hero-c10.njk" %}
{% include "components/sections/section-c10-models.njk" %}
{% include "components/sections/section-why-c10.njk" %}
{% include "components/sections/section-coverage-grid.njk" %}
{% include "components/sections/section-c10-stats.njk" %}
{% include "components/sections/section-cta-c10.njk" %}
```

### Generic Service Page
```nunjucks
{% include "components/sections/section-page-header.njk" %}
{% include "components/sections/section-service-grid.njk" %}
{% include "components/sections/section-process.njk" %}
{% include "components/sections/section-faq.njk" %}
{% include "components/sections/section-contact.njk" %}
```

## Pending Components (To Be Created)
1. **section-testimonials**: Customer testimonial carousel
2. **section-c10-faq**: C10-specific frequently asked questions
3. **section-quote-form**: Insurance quote form section
4. **ui-form**: Form elements
5. **ui-modal**: Modal/popup component

## Component Maintenance
- Review monthly for unused components
- Refactor similar components into single flexible component
- Keep documentation in sync with actual components
- Version major component changes

---
**Last Updated**: June 1, 2025
**Total Components**: 12 (6 C10-specific, 6 generic)
**Next Review**: July 1, 2025
