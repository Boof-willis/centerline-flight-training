# Centerline Flight Training - Astro + Tailwind + TypeScript

A modern, high-performance flight training website built with Astro, Tailwind CSS, TypeScript, and React islands for interactive components.

## 🚀 Tech Stack

- **Astro** - Static site generation with island architecture
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **React** - Interactive islands for dynamic features
- **Framer Motion** - Smooth animations

## 📦 Project Structure

```
/
├── public/
│   ├── 404.html           # Custom 404 page
│   ├── robots.txt         # Search engine directives
│   └── sitemap.xml        # Site structure for SEO
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── islands/   # React interactive components
│   │       │   ├── HeaderClient.tsx
│   │       │   ├── HeroClient.tsx
│   │       │   ├── StatsCounter.tsx
│   │       │   ├── CareerCards.tsx
│   │       │   ├── ReviewCarousel.tsx
│   │       │   ├── TrainingPathway.tsx
│   │       │   ├── AircraftShowcase.tsx
│   │       │   └── Faq.tsx
│   │       ├── BenefitsBar.astro
│   │       ├── WhyUs.astro
│   │       ├── Testimonials.astro
│   │       ├── InstructorsFleet.astro
│   │       ├── CtaBand.astro
│   │       └── Footer.astro
│   ├── pages/
│   │   └── index.astro    # Main landing page
│   └── styles/
│       └── global.css     # Global styles + Tailwind
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:4321`

## 🎨 Features

### Static-First Architecture
- **SSG (Static Site Generation)** - Pre-rendered HTML for optimal SEO and TTFB
- **React Islands** - Selective hydration for interactive components only
- **Zero JS by default** - JavaScript only loads for interactive sections

### Interactive Components (React Islands)
- ✅ **Header** - Scroll-based styling and smooth navigation
- ✅ **Hero** - Parallax background with character reveal animation
- ✅ **Stats Counter** - Animated counting on scroll into view
- ✅ **Career Cards** - Sticky scroll with scale animation
- ✅ **Review Carousel** - Auto-rotating testimonials with manual controls
- ✅ **Training Pathway** - Hover-based card expansion
- ✅ **Aircraft Showcase** - Sticky images triggered by scroll sections
- ✅ **FAQ Accordion** - Expandable question/answer sections

### Performance Optimizations
- ✅ Minimal JavaScript footprint
- ✅ Client-side hydration only where needed (`client:load`, `client:visible`)
- ✅ Optimized for Cloudflare Pages deployment
- ✅ Modern build with Vite

## 🚢 Deployment to Cloudflare Pages

### Option 1: GitHub/GitLab Integration (Recommended)

1. Push your code to GitHub or GitLab
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Go to **Pages** → **Create a project**
4. Connect your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** 18 or 20

### Option 2: Direct Upload (Wrangler CLI)

```bash
# Install Wrangler globally
npm install -g wrangler

# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist
```

### Environment Variables (if needed)

Add any environment variables in the Cloudflare Pages dashboard under:
**Settings** → **Environment variables**

## 🎯 Path Alias

The project uses `@/*` as a path alias pointing to `src/*`:

```typescript
import Header from '@/components/ui/Header.astro';
import { Button } from '@/components/ui/button';
```

## 🖼️ Adding Images

Place images in the `public/` directory:

```
public/
  └── images/
      ├── logo.png
      └── hero-bg.jpg
```

Reference them in your code:

```astro
<img src="/images/logo.png" alt="Logo" />
```

## 🎨 Tailwind Configuration

The project uses custom Tailwind tokens defined in `src/styles/global.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222 84% 4%;
  --primary: 222 84% 54%;
  --primary-foreground: 0 0% 100%;
}
```

Access via Tailwind classes:
```html
<div class="bg-background text-foreground">
  <button class="bg-primary text-primary-foreground">Click me</button>
</div>
```

## 📝 Customization

### Updating Content

1. **Hero Section** - Edit `src/components/ui/islands/HeroClient.tsx`
2. **Benefits/Stats** - Edit `src/components/ui/BenefitsBar.astro`
3. **Career Paths** - Edit `src/components/ui/islands/CareerCards.tsx`
4. **Training Pathway** - Edit `src/components/ui/islands/TrainingPathway.tsx`
5. **Aircraft** - Edit `src/components/ui/islands/AircraftShowcase.tsx`
6. **FAQ** - Edit `src/components/ui/islands/Faq.tsx`
7. **Footer** - Edit `src/components/ui/Footer.astro`

### Adding New Pages

Create a new `.astro` file in `src/pages/`:

```astro
---
// src/pages/about.astro
import '@/styles/global.css';
---

<html>
  <head>
    <title>About Us</title>
  </head>
  <body>
    <h1>About Centerline</h1>
  </body>
</html>
```

Access at: `http://localhost:4321/about`

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear Astro cache
rm -rf .astro node_modules/.astro

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Run type checking
npm run astro check
```

## 📚 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

## 📄 License

Copyright © 2024 Centerline Flight Training. All rights reserved.

---

**Built with ❤️ using Astro + Tailwind + TypeScript**

