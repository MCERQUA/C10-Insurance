#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');
const { promisify } = require('util');

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, 'new-images'),
  outputDir: path.join(__dirname, '..', 'src', 'images'),
  docsFile: path.join(__dirname, '..', 'docs', 'IMAGE_REGISTRY.md'),
  sizes: {
    thumbnail: { width: 150, height: 150 },
    small: { width: 400 },
    medium: { width: 800 },
    large: { width: 1200 },
    hero: { width: 1920 }
  },
  formats: ['webp', 'jpg'],
  jpegQuality: 85,
  webpQuality: 90
};

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = promisify(rl.question).bind(rl);

// Ensure directories exist
async function ensureDirectories() {
  await fs.ensureDir(CONFIG.inputDir);
  await fs.ensureDir(CONFIG.outputDir);
  await fs.ensureDir(path.dirname(CONFIG.docsFile));
}

// Get image metadata
async function getImageMetadata(filePath) {
  try {
    const metadata = await sharp(filePath).metadata();
    return metadata;
  } catch (error) {
    console.error(`Error reading metadata for ${filePath}:`, error.message);
    return null;
  }
}

// Process a single image
async function processImage(filename, description, category) {
  const inputPath = path.join(CONFIG.inputDir, filename);
  const basename = path.basename(filename, path.extname(filename));
  const processedImages = [];

  console.log(`\n📸 Processing: ${filename}`);

  // Get original metadata
  const metadata = await getImageMetadata(inputPath);
  if (!metadata) return null;

  // Process each size variant
  for (const [sizeName, dimensions] of Object.entries(CONFIG.sizes)) {
    // Skip if original is smaller than target size
    if (dimensions.width && metadata.width < dimensions.width) {
      console.log(`  ⏭️  Skipping ${sizeName} (original smaller than target)`);
      continue;
    }

    for (const format of CONFIG.formats) {
      const outputFilename = `${basename}-${sizeName}.${format}`;
      const outputPath = path.join(CONFIG.outputDir, outputFilename);

      try {
        const pipeline = sharp(inputPath);

        // Resize
        if (dimensions.width && dimensions.height) {
          pipeline.resize(dimensions.width, dimensions.height, {
            fit: 'cover',
            position: 'center'
          });
        } else if (dimensions.width) {
          pipeline.resize(dimensions.width, null, {
            withoutEnlargement: true
          });
        }

        // Convert format and optimize
        if (format === 'webp') {
          pipeline.webp({ quality: CONFIG.webpQuality });
        } else if (format === 'jpg') {
          pipeline.jpeg({ quality: CONFIG.jpegQuality, progressive: true });
        }

        await pipeline.toFile(outputPath);

        const stats = await fs.stat(outputPath);
        const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

        console.log(`  ✅ Created: ${outputFilename} (${sizeMB}MB)`);

        processedImages.push({
          filename: outputFilename,
          path: `/images/${outputFilename}`,
          size: sizeName,
          format: format,
          dimensions: dimensions,
          fileSize: stats.size,
          fileSizeMB: sizeMB
        });
      } catch (error) {
        console.error(`  ❌ Error creating ${outputFilename}:`, error.message);
      }
    }
  }

  // Also copy original to images folder with -original suffix
  const originalFilename = `${basename}-original${path.extname(filename)}`;
  const originalOutputPath = path.join(CONFIG.outputDir, originalFilename);
  await fs.copy(inputPath, originalOutputPath);
  console.log(`  📂 Original saved as: /images/${originalFilename}`);

  return {
    original: {
      filename: originalFilename,
      path: `/images/${originalFilename}`,
      width: metadata.width,
      height: metadata.height,
      format: metadata.format,
      size: metadata.size
    },
    description: description,
    category: category,
    processedAt: new Date().toISOString(),
    variants: processedImages
  };
}

// Update image registry documentation
async function updateImageRegistry(imageData) {
  let content = '';

  // Check if file exists and read existing content
  if (await fs.pathExists(CONFIG.docsFile)) {
    content = await fs.readFile(CONFIG.docsFile, 'utf8');
  } else {
    // Create initial content
    content = `# Image Registry - S10 Insurance Website

## Overview
This registry tracks all images available in the S10 Insurance website. Images are automatically processed and documented by the optimization script.

## Image Categories
- **hero**: Hero section backgrounds and banners
- **s10-models**: S10 truck model images
- **icons**: Icons and small graphics
- **features**: Feature section images
- **team**: Team member photos
- **misc**: Miscellaneous images

## Naming Convention
- Original: `[name]-original.[ext]`
- Variants: `[name]-[size].[format]`
  - Sizes: thumbnail, small, medium, large, hero
  - Formats: jpg, webp

## Available Images

`;
  }

  // Generate markdown for new image
  const imageEntry = `
### ${path.basename(imageData.original.filename, path.extname(imageData.original.filename)).replace('-original', '')}

**Description**: ${imageData.description}
**Category**: ${imageData.category}
**Original Dimensions**: ${imageData.original.width} x ${imageData.original.height}
**Processed**: ${new Date(imageData.processedAt).toLocaleDateString()}

#### Available Variants:

| Size | Format | Dimensions | File Size | Path |
|------|--------|------------|-----------|------|
| original | ${path.extname(imageData.original.filename).slice(1)} | ${imageData.original.width}x${imageData.original.height} | - | \`${imageData.original.path}\` |
`;

  const variantRows = imageData.variants.map(variant => {
    const dims = variant.dimensions.height 
      ? `${variant.dimensions.width}x${variant.dimensions.height}` 
      : `${variant.dimensions.width}w`;
    return `| ${variant.size} | ${variant.format} | ${dims} | ${variant.fileSizeMB}MB | \`${variant.path}\` |`;
  }).join('\n');

  const fullEntry = imageEntry + variantRows + '\n';

  // Check if image already exists in registry
  const baseImageName = path.basename(imageData.original.filename, path.extname(imageData.original.filename)).replace('-original', '');
  const imageHeaderRegex = new RegExp(`### ${baseImageName}\\n`, 'g');
  
  if (content.includes(`### ${baseImageName}`)) {
    // Find and replace existing entry
    const sections = content.split(/### /);
    const updatedSections = sections.map(section => {
      if (section.startsWith(baseImageName)) {
        return fullEntry.substring(4); // Remove the ### prefix
      }
      return section;
    });
    content = updatedSections.join('### ');
  } else {
    // Append new entry
    content += fullEntry;
  }

  await fs.writeFile(CONFIG.docsFile, content);
  console.log(`\n📝 Updated image registry: ${CONFIG.docsFile}`);
}

// Get user input for image description
async function getImageInfo(filename) {
  console.log(`\n🖼️  Image: ${filename}`);
  
  const description = await question('📝 Description (what is this image for?): ');
  
  console.log('\n📁 Categories: hero, s10-models, icons, features, team, misc');
  const category = await question('🏷️  Category: ') || 'misc';

  return { description, category };
}

// Main processing function
async function main() {
  console.log('🚀 S10 Insurance Image Optimization Script\n');
  
  try {
    await ensureDirectories();

    // Get list of images in new-images folder
    const files = await fs.readdir(CONFIG.inputDir);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(ext);
    });

    if (imageFiles.length === 0) {
      console.log('❌ No images found in scripts/new-images/');
      console.log('💡 Add images to scripts/new-images/ and run this script again.');
      rl.close();
      return;
    }

    console.log(`Found ${imageFiles.length} image(s) to process:\n`);
    imageFiles.forEach((file, index) => {
      console.log(`  ${index + 1}. ${file}`);
    });

    const processAll = await question('\n🔄 Process all images? (y/n): ');
    
    if (processAll.toLowerCase() === 'y') {
      // Process all images
      for (const filename of imageFiles) {
        const { description, category } = await getImageInfo(filename);
        const imageData = await processImage(filename, description, category);
        
        if (imageData) {
          await updateImageRegistry(imageData);
          
          // Move processed image to processed folder
          const processedDir = path.join(CONFIG.inputDir, 'processed');
          await fs.ensureDir(processedDir);
          await fs.move(
            path.join(CONFIG.inputDir, filename),
            path.join(processedDir, filename),
            { overwrite: true }
          );
          console.log(`✅ Moved to processed folder: ${filename}`);
        }
      }
    } else {
      // Selective processing
      const selected = await question('Enter image numbers to process (comma-separated): ');
      const indices = selected.split(',').map(n => parseInt(n.trim()) - 1);
      
      for (const index of indices) {
        if (index >= 0 && index < imageFiles.length) {
          const filename = imageFiles[index];
          const { description, category } = await getImageInfo(filename);
          const imageData = await processImage(filename, description, category);
          
          if (imageData) {
            await updateImageRegistry(imageData);
            
            // Move processed image
            const processedDir = path.join(CONFIG.inputDir, 'processed');
            await fs.ensureDir(processedDir);
            await fs.move(
              path.join(CONFIG.inputDir, filename),
              path.join(processedDir, filename),
              { overwrite: true }
            );
            console.log(`✅ Moved to processed folder: ${filename}`);
          }
        }
      }
    }

    console.log('\n✨ Image optimization complete!');
    console.log(`📄 View image registry at: ${CONFIG.docsFile}`);

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    rl.close();
  }
}

// Run the script
main().catch(console.error);
