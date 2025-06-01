# S10 Insurance Website Documentation

Welcome to the technical documentation for the S10 Insurance website. This documentation is designed to help developers understand, maintain, and extend the website.

## Documentation Structure

### Core Documentation

1. **[Deployment Issues](./deployment-issues.md)**
   - Common deployment problems and their solutions
   - Specific issues we've encountered and fixed
   - Prevention strategies

2. **[Nunjucks Quick Reference](./nunjucks-quick-reference.md)**
   - Essential Nunjucks syntax for this project
   - Common patterns and anti-patterns
   - Project-specific filters and helpers

### AI Memory System

The `/AI/Memory/` folder contains:
- `memory.json` - Structured knowledge about the project
- Best practices and patterns
- Common issues and their solutions

## Key Technologies

- **Static Site Generator**: Eleventy (11ty) v2.0.1
- **Templating Engine**: Nunjucks
- **Deployment**: Netlify
- **Version Control**: GitHub

## Quick Links

- [Project README](../README.md)
- [Eleventy Documentation](https://www.11ty.dev/)
- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Netlify Documentation](https://docs.netlify.com/)

## Development Workflow

1. Make changes locally
2. Test with `npm run build`
3. Run dev server with `npm start`
4. Commit and push to GitHub
5. Netlify automatically deploys

## Getting Help

If you encounter issues:
1. Check the deployment issues documentation
2. Review the Nunjucks quick reference
3. Consult the AI memory file for patterns
4. Test locally before deploying

## Contributing

When adding new features:
1. Follow the existing patterns
2. Use Nunjucks syntax (not Liquid)
3. Test thoroughly
4. Update documentation if needed
5. Add notes to AI memory if you encounter new issues