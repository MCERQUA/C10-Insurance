# Scripts Directory - S10 Insurance Website

## Available Scripts

### Image Optimization Script

The `optimize-images.js` script helps manage and optimize images for the S10 Insurance website.

#### Features
- Creates multiple size variants (thumbnail, small, medium, large, hero)
- Generates both WebP and JPEG formats for browser compatibility
- Interactive CLI for adding image descriptions and categories
- Automatically updates image documentation
- Moves processed images to prevent reprocessing

#### Setup

First, install the required dependencies:
```bash
npm install
```

#### Usage

1. **Add new images** to `/scripts/new-images/`
2. **Run the script**:
   ```bash
   npm run optimize-images
   ```
3. **Follow the prompts** to:
   - Describe what each image is for
   - Assign a category (hero, s10-models, icons, features, team, misc)

#### What the Script Does

1. **Processes Images**:
   - Creates optimized variants in multiple sizes
   - Generates WebP (90% quality) and JPEG (85% quality) formats
   - Preserves originals in `/src/images/original/`
   - Saves optimized versions in `/src/images/optimized/`

2. **Updates Documentation**:
   - Adds image details to `/docs/IMAGE_REGISTRY.md`
   - Records descriptions, categories, and available variants
   - Tracks file sizes and dimensions

3. **Organizes Files**:
   - Moves processed images to `/scripts/new-images/processed/`
   - Prevents accidental reprocessing

#### Output Structure

For an image named `s10-hero.jpg`, the script creates:
```
/src/images/
├── original/
│   └── s10-hero.jpg
└── optimized/
    ├── s10-hero-thumbnail.webp
    ├── s10-hero-thumbnail.jpg
    ├── s10-hero-small.webp
    ├── s10-hero-small.jpg
    ├── s10-hero-medium.webp
    ├── s10-hero-medium.jpg
    ├── s10-hero-large.webp
    ├── s10-hero-large.jpg
    ├── s10-hero-hero.webp
    └── s10-hero-hero.jpg
```

#### Using Optimized Images in Components

```nunjucks
{# Use picture element for optimal format selection #}
<picture>
  <source srcset="/images/optimized/s10-hero-large.webp" type="image/webp">
  <img src="/images/optimized/s10-hero-large.jpg" alt="S10 Insurance Hero">
</picture>

{# Or use responsive images #}
<img 
  srcset="
    /images/optimized/s10-hero-small.jpg 400w,
    /images/optimized/s10-hero-medium.jpg 800w,
    /images/optimized/s10-hero-large.jpg 1200w
  "
  sizes="(max-width: 640px) 100vw, (max-width: 968px) 50vw, 33vw"
  src="/images/optimized/s10-hero-medium.jpg"
  alt="S10 Insurance"
>
```

## Future Scripts

Additional utility scripts can be added here for:
- Component generation
- Build optimization
- Deployment tasks
- Testing utilities
