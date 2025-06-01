# S10 Insurance Website

Built with Eleventy (11ty) v2.0.1 and Nunjucks templates.

## Features

- Static site generation with Eleventy
- Nunjucks templating engine
- Responsive design
- Fast build times
- SEO optimized
- Netlify-ready deployment
- Blog with Markdown support

## Prerequisites

- Node.js 14.x or higher
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/MCERQUA/S10-Insurance.git
cd S10-Insurance
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm start
```

This will start Eleventy in serve mode and watch for changes. The site will be available at `http://localhost:8080`.

## Build

Build the site for production:
```bash
npm run build
```

The built site will be in the `_site` directory.

## Blog Management

The blog section automatically includes any Markdown files in the `/src/blog/` folder.

### Adding a New Blog Post

1. Create a new `.md` file in `/src/blog/`
2. Add front matter at the top of the file:

```markdown
---
title: Your Blog Post Title
date: 2025-06-01
author: Author Name
excerpt: A brief summary of your post
tags:
  - insurance
  - tips
---

Your blog post content goes here...
```

3. The blog post will automatically appear on the blog page after the next build

### Blog Features

- Automatic listing on `/blog/` page
- Individual post pages with clean URLs
- Tag support
- Author attribution
- Publication dates
- Pagination (10 posts per page)
- Responsive design

## Deployment to Netlify

This project is configured for easy deployment to Netlify.

### Option 1: Deploy via GitHub Integration

1. Log in to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select the `S10-Insurance` repository
4. Netlify will automatically detect the build settings from `netlify.toml`
5. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=_site
```

### Option 3: Drag and Drop

1. Build the site locally:
```bash
npm run build
```

2. Drag the `_site` folder to [Netlify Drop](https://app.netlify.com/drop)

## Project Structure

```
S10-Insurance/
├── src/
│   ├── _includes/       # Partial templates
│   ├── _layouts/        # Page layouts
│   ├── _data/           # Global data files
│   ├── blog/            # Blog posts (Markdown files)
│   │   ├── blog.json    # Blog configuration
│   │   └── *.md         # Individual blog posts
│   ├── assets/          # Static assets
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   ├── images/          # Images
│   ├── 404.njk          # 404 error page
│   ├── blog.njk         # Blog listing page
│   └── index.njk        # Homepage
├── .eleventy.js         # Eleventy configuration
├── netlify.toml         # Netlify configuration
├── package.json         # Project dependencies
└── README.md            # This file
```

## Netlify Configuration

The `netlify.toml` file includes:
- Build command and publish directory
- Node.js version specification
- Custom 404 page handling
- Security headers
- Cache control headers for assets

## License

ISC