# Deployment Issues and Solutions

## Overview

This document covers the deployment issues encountered with the S10 Insurance website on Netlify and provides solutions and preventive measures for future development.

## Issue 1: Footer Date Filter Syntax Error

### Problem
**Error Message:**
```
[11ty] Template render error: (/opt/build/repo/src/_includes/footer.njk) [Line 4, Column 32]
[11ty] expected variable end
```

### Root Cause
The footer template was using Liquid templating syntax instead of Nunjucks syntax for the date filter:
- **Incorrect (Liquid):** `{{ 'now' | date: '%Y' }}`
- **Correct (Nunjucks):** `{{ currentYear }}`

### Solution
1. Added a global data variable `currentYear` in `.eleventy.js`
2. Updated the footer template to use `{{ currentYear }}` instead of the date filter

### Prevention
- Always use Nunjucks syntax in `.njk` files
- Avoid mixing templating language syntaxes
- Use global data for commonly used values like the current year

## Issue 2: Blog Date Filter Syntax Errors

### Problem
**Error Messages:**
```
[11ty] Template render error: (./src/blog.njk) [Line 7, Column 44]
[11ty] expected variable end
```

### Root Cause
Both `blog.njk` and `post.njk` templates were using Liquid syntax for date filters:
- **Incorrect (Liquid):** `{{ post.date | date: '%Y-%m-%d' }}`
- **Correct (Nunjucks):** `{{ post.date | date('%Y-%m-%d') }}`

### Solution
Updated all date filters to use Nunjucks function call syntax with parentheses instead of the colon syntax.

### Prevention
- Remember that Nunjucks filters use function call syntax: `filterName(args)`
- Liquid filters use colon syntax: `filterName: args`
- Always test locally before pushing to production

## Key Differences: Liquid vs Nunjucks

### Filter Syntax
| Feature | Liquid | Nunjucks |
|---------|--------|----------|
| Basic Filter | `\|\| filterName` | `\|\| filterName` |
| Filter with Args | `\|\| filterName: arg1, arg2` | `\|\| filterName(arg1, arg2)` |
| Date Filter | `\|\| date: '%Y-%m-%d'` | `\|\| date('%Y-%m-%d')` |

### Common Nunjucks Filters in This Project
- `safe` - Marks content as safe HTML
- `dateReadable` - Custom filter for human-readable dates
- `date(format)` - Custom filter for formatted dates

## Best Practices for Future Development

### 1. Template Syntax Consistency
- This project uses **Nunjucks** (.njk files)
- Never mix Liquid syntax in Nunjucks templates
- Refer to [Nunjucks documentation](https://mozilla.github.io/nunjucks/) for syntax

### 2. Testing Before Deployment
```bash
# Always test locally first
npm run build

# Run the development server to check for errors
npm start
```

### 3. Error Debugging
- Check line numbers in error messages
- Look for syntax differences between templating languages
- Common issues: colons vs parentheses, quotation marks, variable access

### 4. Filter Implementation
When adding new filters in `.eleventy.js`:
```javascript
eleventyConfig.addFilter("filterName", (value, arg1, arg2) => {
  // Filter logic here
  return processedValue;
});
```

Usage in templates:
```nunjucks
{{ value | filterName(arg1, arg2) }}
```

### 5. Global Data
For values used across multiple templates, add them as global data:
```javascript
eleventyConfig.addGlobalData("keyName", () => {
  return value;
});
```

## Deployment Checklist

- [ ] Run `npm run build` locally
- [ ] Check for any build errors
- [ ] Verify all template syntax is Nunjucks
- [ ] Test date formatting and filters
- [ ] Ensure all required files are committed
- [ ] Push to GitHub and monitor Netlify build logs

## Resources

- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/)
- [Eleventy Documentation](https://www.11ty.dev/)
- [Netlify Build Debugging](https://docs.netlify.com/configure-builds/troubleshooting-tips/)

## Support

If you encounter similar issues:
1. Check this documentation first
2. Review the error message line numbers
3. Compare your syntax with the examples above
4. Test locally before pushing