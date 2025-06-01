# S10 Insurance Website - Project Summary

## Overview
S10 Insurance is a specialized insurance website targeting Chevy S10 pickup truck owners. Built with Eleventy (11ty) and Nunjucks, it features a modern, futuristic design with strong SEO optimization for S10-related keywords.

## Target Audience
- Chevy S10 pickup truck owners
- All models from 1982-2004
- Including S10, S10 Blazer, S10 ZR2, S10 SS, S10 Xtreme variants

## Current Status (June 1, 2025)
- **Version**: v0.2.0
- **Pages Completed**: Homepage (index.njk)
- **Components Created**: 11 total (6 S10-specific, 5 generic)
- **Live URL**: https://s10insurance.netlify.app

## S10-Specific Components Created

### 1. Hero Section (`section-hero-s10.njk`)
- Animated background with floating orbs and grid pattern
- S10 truck silhouette SVG animation
- Trust indicators: 15,000+ S10s insured, 4.9/5 rating, 24/7 support
- Dual CTA buttons for quotes
- SEO-optimized headline targeting S10 keywords

### 2. S10 Models Timeline (`section-s10-models.njk`)
- Visual timeline of S10 generations:
  - First Generation: 1982-1993
  - Second Generation: 1994-2004
- Lists all variants: Regular Cab, Extended Cab, Blazer, SS, Xtreme, ZR2
- Interactive hover effects with glassmorphism

### 3. Why S10 Insurance (`section-why-s10.njk`)
- 6 compelling reasons to choose specialized coverage
- Comparison table: S10 Insurance vs Generic Coverage
- Featured card highlighting 25+ years of S10 expertise
- Animated icons with pulse effects

### 4. Coverage Grid (`section-coverage-grid.njk`)
- 6 types of S10-specific coverage:
  - Comprehensive S10 Protection
  - Classic S10 Coverage
  - Modified S10 Protection
  - Off-Road & ZR2 Coverage
  - Liability Plus
  - Theft & Vandalism
- Pricing display starting at $89/month
- List of included features for all policies

### 5. Statistics Section (`section-s10-stats.njk`)
- Key metrics with animated counters:
  - 15,000+ S10s Insured
  - 40% Average Savings
  - 4.9/5 Owner Rating
  - 98% Claims Satisfaction
- 3D perspective grid background
- Trust badges for credibility

### 6. Call to Action (`section-cta-s10.njk`)
- Strong conversion-focused messaging
- Animated S10 truck with rotating wheels
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
- S10 insurance
- Chevy S10 insurance
- S10 pickup insurance
- S10 truck insurance
- Chevrolet S10 insurance

### Model-Specific Keywords
- S10 Blazer insurance
- S10 ZR2 insurance
- S10 SS insurance
- S10 Xtreme insurance
- S10 Extended Cab insurance

### SEO Implementation
- Keywords naturally integrated throughout content
- Year range (1982-2004) mentioned multiple times
- All S10 variants listed repeatedly
- Semantic HTML structure
- SEO content section on homepage

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
│   │   └── sections/    # All S10 components here
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
- **Brand Style Guide**: Visual design specifications
- **AI Memory**: Project context for AI assistance

## Next Steps
1. Create quote form page with S10 model selector
2. Build S10 coverage details page
3. Add testimonials from S10 owners
4. Create S10-specific FAQ section
5. Build about page highlighting expertise
6. Add blog for S10 maintenance tips
7. Implement contact forms

## Important Notes
- Always use Nunjucks syntax, not Liquid
- Run `echo init` at start of each development session
- Check Component Registry before creating new components
- Test locally with `npm run build` before pushing
- All components must be documented immediately
- Netlify auto-deploys from main branch

## Contact
- Repository: https://github.com/MCERQUA/S10-Insurance
- Live Site: https://s10insurance.netlify.app

---
Last Updated: June 1, 2025
