# New Images Directory

## Purpose
This directory is used as a staging area for new images that need to be optimized for the S10 Insurance website.

## How to Use

1. **Add Images**: Drop your new images (JPG, PNG, WebP, GIF) into this folder
2. **Run Script**: Navigate to the scripts directory and run:
   ```bash
   npm run optimize-images
   # or
   node scripts/optimize-images.js
   ```
3. **Provide Info**: The script will ask for:
   - Description of what the image is for
   - Category (hero, s10-models, icons, features, team, misc)

4. **Results**:
   - Optimized images will be created in `/src/images/optimized/`
   - Original images will be copied to `/src/images/original/`
   - Processed images will be moved to `/scripts/new-images/processed/`
   - Image documentation will be updated in `/docs/IMAGE_REGISTRY.md`

## Image Optimization Details

The script creates multiple variants of each image:
- **Formats**: WebP (90% quality) and JPEG (85% quality)
- **Sizes**:
  - `thumbnail`: 150x150px (cropped square)
  - `small`: 400px width
  - `medium`: 800px width
  - `large`: 1200px width
  - `hero`: 1920px width

## Image Categories

- **hero**: Hero section backgrounds and banners
- **s10-models**: S10 truck model images
- **icons**: Icons and small graphics
- **features**: Feature section images
- **team**: Team member photos
- **misc**: Miscellaneous images

## Notes
- The script will skip creating variants larger than the original image
- All images are optimized for web performance
- WebP format provides better compression while maintaining quality
- JPEG fallbacks are created for browser compatibility
