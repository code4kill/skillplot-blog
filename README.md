# Skillplot Blog

A minimalistic, elegant Jekyll-based blog powered by Skillplot's open ecosystem philosophy. Dark theme by default with light theme toggle, built with responsive design and focused on content quality.

## Features

✨ **Minimalistic Design** - Clean, focused content presentation  
🌙 **Dark Theme by Default** - Easy on the eyes with light theme option  
📱 **Fully Responsive** - Optimized for all screen sizes  
🚀 **GitHub Pages Ready** - Automatic deployment with Jekyll  
♿ **Accessible** - Built with accessibility in mind  
⚡ **Fast** - Static site generation for optimal performance

## Local Setup

### Prerequisites

- Ruby 3.0+
- Bundler

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/skillplot/blog.git
   cd blog
   ```

2. **Install dependencies:**

   ```bash
   bundle install
   ```

3. **Run the development server:**

   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser:**
   Navigate to `http://localhost:4000`

## Creating New Posts

Create a new markdown file in the `_posts/` directory with the naming convention: `YYYY-MM-DD-title.md`

### Example Post Front Matter

```markdown
---
layout: post
title: "Your Post Title"
date: 2025-12-01T00:00:00+00:00
author: Your Name
category: Category Name
tags: [tag1, tag2, tag3]
excerpt: "Brief excerpt that appears in listings"
---

Your content here...
```

## Customization

### Colors and Branding

Edit `assets/css/style.scss` to customize:

- `$dark-bg` - Dark theme background
- `$accent-red` - Primary accent color
- Font families and sizes
- Component styling

### Site Configuration

Edit `_config.yml` to modify:

- Site title and description
- Site URL and baseurl
- Author information
- Plugin settings

## Deployment

This site is set up for automatic deployment to GitHub Pages.

### Initial Setup

1. Push code to `main` branch
2. Go to **Settings → Pages**
3. Select "GitHub Actions" as the source
4. CNAME file automatically points to `blog.skillplot.org`

### Automatic Deploys

Every push to the `main` branch triggers the GitHub Actions workflow (`.github/workflows/pages.yml`), which builds and deploys the site automatically.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Skillplot. All rights reserved.

## Contact

Visit [skillplot.org](https://skillplot.org) for more information about Skillplot.
