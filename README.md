# S10 Insurance Website

Built with Eleventy (11ty) v2.0.1 and Nunjucks templates.

## Features

- Static site generation with Eleventy
- Nunjucks templating engine
- Responsive design
- Fast build times
- SEO optimized

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

## Project Structure

```
S10-Insurance/
├── src/
│   ├── _includes/       # Partial templates
│   ├── _layouts/        # Page layouts
│   ├── _data/           # Global data files
│   ├── assets/          # Static assets
│   ├── css/             # Stylesheets
│   ├── js/              # JavaScript files
│   ├── images/          # Images
│   └── index.njk        # Homepage
├── .eleventy.js         # Eleventy configuration
├── package.json         # Project dependencies
└── README.md            # This file
```

## License

ISC