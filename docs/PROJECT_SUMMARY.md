# C10 Insurance Website - Project Summary

## Overview
C10 Insurance is a specialized insurance website targeting classic Chevy C10 pickup truck owners. Built with Eleventy (11ty) and Nunjucks, it features a modern, futuristic design with strong SEO optimization for C10-related keywords.

## Target Audience
- Chevy C10 pickup truck owners
- All models from 1960-1998 (including C/K series)
- Including C10 Fleetside, Stepside, Suburban, Panel, Cheyenne, Scottsdale, Silverado variants

## Current Status (June 2, 2025)
- **Version**: v0.3.0
- **Pages Completed**: Homepage (index.njk)
- **Components Created**: 11 total (6 C10-specific, 5 generic)
- **Live URL**: https://c10insurance.netlify.app

## C10-Specific Components Created

### 1. Hero Section (`section-hero-c10.njk`)
- Animated background with floating orbs and grid pattern
- C10 truck silhouette SVG animation
- Trust indicators: 15,000+ C10s insured, 4.9/5 rating, 24/7 support
- Dual CTA buttons for quotes
- SEO-optimized headline targeting C10 keywords

### 2. C10 Models Timeline (`section-c10-models.njk`)
- Visual timeline of C10 generations:
  - First Generation: 1960-1966 (Classic styling)
  - Second Generation: 1967-1972 ("Action Line")
  - Third Generation: 1973-1987 (Square body)
  - Fourth Generation: 1988-1998 (Modern C/K series)
- Lists all variants: Fleetside, Stepside, Suburban, Panel, Custom, Deluxe, Cheyenne, Scottsdale, Silverado
- Interactive hover effects with glassmorphism

### 3. Why C10 Insurance (`section-why-c10.njk`)
- 6 compelling reasons to choose specialized coverage
- Comparison table: C10 Insurance vs Generic Coverage
- Featured card highlighting 25+ years of C10 expertise
- Animated icons with pulse effects

### 4. Coverage Grid (`section-coverage-grid.njk`)
- 6 types of C10-specific coverage:
  - Comprehensive C10 Protection
  - Classic C10 Coverage
  - Modified C10 Protection
  - C10 Cheyenne & Silverado Coverage
  - Liability Plus
  - Theft & Vandalism
- Pricing display starting at $89/month
- List of included features for all policies

### 5. Statistics Section (`section-c10-stats.njk`)
- Key metrics with animated counters:
  - 15,000+ C10s Insured
  - 40% Average Savings
  - 4.9/5 Owner Rating
  - 98% Claims Satisfaction
- 3D perspective grid background
- Trust badges for credibility

### 6. Call to Action (`section-cta-c10.njk`)
- Strong conversion-focused messaging
- Animated C10 truck with rotating wheels
- 60-second quote promise badge
- Dual CTAs: online quote and phone
- **Updated**: Dark gradient background for text legibility

## Design System

### Color Palette
- **Primary Blue**: `#1e5ba8` → `#3b82f6` (gradient)
- **Teal Secondary**: `#14b8a6` → `#06b6d4` (gradient)
- **Light Blue Accent**: `#60a5fa` → `#93c5fd`
- **Dark Background**: `#050714` → `#0f172a`
- **Success Green**: `#10b981` → `#34d399`
- **Alert Red**: `#dc2626` → `#ef4444` (only for warnings)

### Design Features
- Ultra-modern, futuristic aesthetic
- Heavy use of glassmorphism effects
- Animated gradients throughout
- Neon-style glows and shadows
- 3D transformations on hover
- Dark theme for professional appearance

### Typography
- Font: Inter (Google Fonts)
- Display headings: Up to 5rem with gradient text
- Body text: 1.125rem for readability

### Responsive Design
- Mobile-first approach
- Breakpoints: 968px, 768px, 640px
- All components fully responsive
- Touch-friendly on mobile devices

## SEO Strategy

### Primary Keywords
- C10 insurance
- Chevy C10 insurance
- C10 pickup insurance
- C10 truck insurance
- Chevrolet C10 insurance

### Model-Specific Keywords
- C10 Fleetside insurance
- C10 Stepside insurance
- C10 Suburban insurance
- C10 Cheyenne insurance
- C10 Silverado insurance
- C10 Scottsdale insurance
- Classic C10 insurance

### SEO Implementation
- Keywords naturally integrated throughout content
- Year range (1960-1998) mentioned multiple times
- All C10 variants listed repeatedly
- Semantic HTML structure
- SEO content section on homepage
- Focus on classic/vintage truck messaging

## Technical Stack
- **Framework**: Eleventy (11ty) v2.0.1
- **Template Engine**: Nunjucks (NOT Liquid)
- **Hosting**: Netlify (auto-deploy from GitHub)
- **Version Control**: GitHub
- **CSS**: Component-scoped styles
- **JavaScript**: Minimal, for animations only

## Component Architecture
- Self-contained components with embedded styles
- BEM-like naming convention: `.c-[component-name]__[element]`
- No external CSS dependencies
- Each component is reusable and documented
- Components are "ingredients" for page "recipes"

## Project Structure
```
src/
├── _includes/
│   ├── components/
│   │   └── sections/    # All C10 components here
│   ├── header.njk
│   └── footer.njk
├── _data/               # Global data files
├── _layouts/            # Page layouts
├── css/                 # Global styles
├── js/                  # JavaScript files
└── index.njk           # Homepage
```

## Documentation
- **Component Registry**: Complete list of all components with usage examples
- **Development Log**: Detailed record of all changes and decisions
- **Master Development Guide**: Comprehensive development instructions
- **Brand Style Guide**: Visual design specifications (Website-brand-style-sheet-for-C10.html)
- **AI Memory**: Project context for AI assistance

## Next Steps
1. Create quote form page with C10 model selector
2. Build C10 coverage details page
3. Add testimonials from C10 owners
4. Create C10-specific FAQ section
5. Build about page highlighting classic truck expertise
6. Add blog for C10 restoration and maintenance tips
7. Implement contact forms
8. Update repository name to C10-Insurance

## Important Notes
- Always use Nunjucks syntax, not Liquid
- Run `echo init` at start of each development session
- Check Component Registry before creating new components
- Test locally with `npm run build` before pushing
- All components must be documented immediately
- Netlify auto-deploys from main branch

## Contact
- Repository: https://github.com/MCERQUA/C10-Insurance
- Live Site: https://c10insurance.netlify.app

---
Last Updated: June 2, 2025
