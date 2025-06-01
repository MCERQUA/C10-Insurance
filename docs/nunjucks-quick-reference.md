# Nunjucks Quick Reference for S10 Insurance Website

## Essential Nunjucks Syntax

### Variables
```nunjucks
{{ variableName }}
{{ object.property }}
{{ array[0] }}
```

### Filters
```nunjucks
{{ variable | filterName }}
{{ variable | filterName(arg1, arg2) }}
{{ variable | filter1 | filter2 }}
```

### Control Structures

#### If Statements
```nunjucks
{% if condition %}
  Content here
{% elif otherCondition %}
  Other content
{% else %}
  Default content
{% endif %}
```

#### For Loops
```nunjucks
{% for item in items %}
  {{ item.name }}
{% endfor %}

{% for key, value in object %}
  {{ key }}: {{ value }}
{% endfor %}
```

### Comments
```nunjucks
{# This is a comment and won't be rendered #}
```

## Project-Specific Filters

### Date Filters
```nunjucks
{# Human readable date #}
{{ post.date | dateReadable }}
{# Output: June 1, 2025 #}

{# ISO format for datetime attribute #}
{{ post.date | date('%Y-%m-%d') }}
{# Output: 2025-06-01 #}
```

### Safe HTML
```nunjucks
{{ content | safe }}
```

## Common Patterns in This Project

### Page Front Matter
```yaml
---
layout: page.njk
title: Page Title
description: Page description for SEO
---
```

### Blog Post Front Matter
```yaml
---
title: Blog Post Title
date: 2025-06-01
author: Author Name
excerpt: Brief summary
tags:
  - tag1
  - tag2
---
```

### Including Partials
```nunjucks
{% include "header.njk" %}
{% include "footer.njk" %}
```

### Using Layouts
```nunjucks
---
layout: base.njk
---
```

### Accessing Global Data
```nunjucks
{{ site.name }}
{{ site.description }}
{{ currentYear }}
```

## Common Mistakes to Avoid

### ❌ Don't Use Liquid Syntax
```nunjucks
{# WRONG - This is Liquid syntax #}
{{ 'now' | date: '%Y' }}

{# CORRECT - Nunjucks syntax #}
{{ currentYear }}
```

### ❌ Don't Forget Safe Filter for HTML
```nunjucks
{# WRONG - HTML will be escaped #}
{{ content }}

{# CORRECT - HTML will render properly #}
{{ content | safe }}
```

### ❌ Don't Mix Quote Types in Filters
```nunjucks
{# WRONG #}
{{ date | date("%Y-%m-%d") }}

{# CORRECT #}
{{ date | date('%Y-%m-%d') }}
```

## Debugging Tips

1. **Check Variable Existence**
   ```nunjucks
   {% if variable %}
     {{ variable }}
   {% else %}
     Variable not found
   {% endif %}
   ```

2. **Debug Output**
   ```nunjucks
   {# Temporarily add this to see what's available #}
   <pre>{{ variable | dump | safe }}</pre>
   ```

3. **Loop Index**
   ```nunjucks
   {% for item in items %}
     {{ loop.index }}: {{ item }}
   {% endfor %}
   ```