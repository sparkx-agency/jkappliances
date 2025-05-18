# Dynamic Blog Content System

This directory contains the dynamic blog content for the website. The system allows you to add new blog posts without modifying any code, simply by adding new content files.

## How It Works

1. Blog posts are stored as Markdown files in the `src/content/blogs/` directory
2. Each blog post has a frontmatter section with metadata (title, date, categories, etc.)
3. Images for blog posts are stored in `public/images/blog/`
4. The system automatically loads and renders these files on the blog pages

## Adding a New Blog Post

You can add a new blog post in two ways:

### Option 1: Using the Admin Interface

1. Navigate to `/admin/blog` in your browser
2. Fill out the form with your blog post details
3. Upload a featured image
4. Write your content using Markdown syntax
5. Click "Save Blog Post"

### Option 2: Manually Creating Files

1. Create a new Markdown file in `src/content/blogs/` with a name matching your desired slug (e.g., `my-new-post.md`)
2. Add the required frontmatter at the top of the file:

```markdown
---
id: my-new-post
title: My New Blog Post Title
slug: my-new-post
excerpt: A brief summary of your blog post
publishDate: 2023-08-15
author:
  name: Your Name
featuredImage: /images/blog/my-new-post.jpg
categories:
  - category1
  - category2
tags:
  - tag1
  - tag2
relatedServices:
  - service1
relatedBrands:
  - brand1
relatedAreas:
  - area1
readTime: 5
---

Your blog post content goes here, written in Markdown format.

## Heading 2

Paragraph text...

### Heading 3

More content...
```

3. Add your featured image to `public/images/blog/` with the same name as your slug

## Markdown Syntax Guide

Here's a quick reference for Markdown syntax:

- `# Heading 1`, `## Heading 2`, `### Heading 3` - Headings
- `**bold text**` - Bold text
- `*italic text*` - Italic text
- `[link text](https://example.com)` - Links
- `![alt text](/images/example.jpg)` - Images
- `- item 1\n- item 2` - Unordered lists
- `1. item 1\n2. item 2` - Ordered lists
- `` `code` `` - Inline code
- `> quote text` - Blockquotes

## Troubleshooting

If your blog post isn't appearing:

1. Check that the file is in the correct directory (`src/content/blogs/`)
2. Verify that the frontmatter is correctly formatted
3. Make sure the slug in the frontmatter matches the filename
4. Confirm that the featured image path is correct