# 📁 Complete File Guide

Quick reference for every file in your Centerline Flight Training project.

## 🎯 Configuration Files (Root)

| File | Purpose | When to Edit |
|------|---------|--------------|
| `package.json` | Project dependencies & scripts | Adding new packages |
| `astro.config.mjs` | Astro configuration | Changing build settings |
| `tsconfig.json` | TypeScript config with `@/*` alias | Adding new path aliases |
| `tailwind.config.mjs` | Tailwind CSS customization | Changing colors/fonts |
| `.prettierrc` | Code formatting rules | Code style preferences |
| `.gitignore` | Files to exclude from git | Adding files to ignore |

## 📄 Pages (`src/pages/`)

| File | Purpose | URL |
|------|---------|-----|
| `index.astro` | Main landing page | `/` |

To add more pages, create new `.astro` files here:
- `about.astro` → `/about`
- `contact.astro` → `/contact`
- `blog/index.astro` → `/blog`

## 🧩 React Islands (`src/components/ui/islands/`)

**Interactive components that hydrate on the client.**

| Component | Feature | Hydration |
|-----------|---------|-----------|
| `HeaderClient.tsx` | Navigation with scroll effects | `client:load` |
| `HeroClient.tsx` | Parallax + character reveal animation | `client:load` |
| `StatsCounter.tsx` | Animated counting on scroll | `client:visible` |
| `CareerCards.tsx` | Sticky scroll with scale effect | `client:visible` |
| `ReviewCarousel.tsx` | Auto-rotating testimonials | `client:visible` |
| `TrainingPathway.tsx` | Hover expand/contract cards | `client:visible` |
| `AircraftShowcase.tsx` | Sticky images on scroll | `client:visible` |
| `Faq.tsx` | Expandable accordion | `client:visible` |

### When to Edit Islands

- **Content changes**: Edit text/data directly in the component
- **Styling changes**: Use Tailwind classes or add to `global.css`
- **Behavior changes**: Modify React hooks and event handlers

## 🏗️ Static Components (`src/components/ui/`)

**Server-rendered Astro components (no JavaScript).**

| Component | Purpose | Contains |
|-----------|---------|----------|
| `BenefitsBar.astro` | Stats section with counter | Stats data + StatsCounter island |
| `WhyUs.astro` | Why choose Centerline | Benefits list |
| `Testimonials.astro` | Student testimonials | Static review cards |
| `InstructorsFleet.astro` | Team & aircraft info | Instructor profiles + fleet specs |
| `CtaBand.astro` | Call-to-action section | CTA buttons |
| `Footer.astro` | Site footer | Links, contact, legal |

### When to Edit Static Components

- **Content updates**: Edit text directly
- **Layout changes**: Modify HTML structure
- **Styling**: Use Tailwind classes

## 🎨 Styles (`src/styles/`)

| File | Purpose | Contains |
|------|---------|----------|
| `global.css` | Global styles + Tailwind | CSS variables, animations, custom classes |

### Key Sections in global.css

```css
@tailwind base;           /* Tailwind reset */
@tailwind components;     /* Tailwind component classes */
@tailwind utilities;      /* Tailwind utility classes */

:root { ... }            /* CSS variables (design tokens) */
@keyframes { ... }       /* Custom animations */
.custom-class { ... }    /* Custom component styles */
```

## 📦 Public Assets (`public/`)

**Static files served as-is (no processing).**

| File/Folder | Purpose | Access URL |
|-------------|---------|------------|
| `404.html` | Custom error page | `/404.html` |
| `robots.txt` | Search engine rules | `/robots.txt` |
| `sitemap.xml` | Site structure for SEO | `/sitemap.xml` |
| `favicon.svg` | Site icon | `/favicon.svg` |

### Adding Images

```
public/
  └── images/
      ├── logo.png
      ├── hero-bg.jpg
      └── team/
          ├── john.jpg
          └── lisa.jpg
```

Reference in code:
```astro
<img src="/images/logo.png" alt="Logo" />
```

## 📚 Documentation Files

| File | Purpose | Read When... |
|------|---------|--------------|
| `README.md` | Full technical docs | Setting up or troubleshooting |
| `QUICKSTART.md` | Getting started guide | First time setup |
| `PROJECT_SUMMARY.md` | What was built | Overview of conversion |
| `DEPLOYMENT.md` | Deploy to Cloudflare | Ready to go live |
| `FILE_GUIDE.md` | This file! | Need to find something |

## 🎯 Common Edit Scenarios

### Scenario 1: Update Hero Text

**File**: `src/components/ui/islands/HeroClient.tsx`

```tsx
<h1>Your Pilot Career<br />Starts Here</h1>
```

### Scenario 2: Change Stats Numbers

**File**: `src/components/ui/islands/StatsCounter.tsx`

```tsx
<StatItem number="15+" label="Years of experience" />
```

### Scenario 3: Add New Review

**File**: `src/components/ui/islands/ReviewCarousel.tsx`

```tsx
const reviews: Review[] = [
  {
    text: "New review text...",
    author: "John Doe, Private Pilot",
    image: "https://...",
  },
  // ... existing reviews
];
```

### Scenario 4: Update FAQ

**File**: `src/components/ui/islands/Faq.tsx`

```tsx
const faqs = [
  {
    question: "New question?",
    answer: "New answer...",
  },
  // ... existing FAQs
];
```

### Scenario 5: Change Footer Links

**File**: `src/components/ui/Footer.astro`

```astro
<a href="#programs">Programs</a>
```

### Scenario 6: Add New Section

**File**: `src/pages/index.astro`

```astro
<!-- Add before Footer -->
<section class="py-20 bg-white">
  <div class="max-w-[1200px] mx-auto px-8">
    <h2>New Section</h2>
    <p>Content...</p>
  </div>
</section>
```

### Scenario 7: Update Colors

**File**: `src/styles/global.css`

```css
:root {
  --primary: 222 84% 54%;  /* Change this HSL value */
}
```

Or in Tailwind config:

**File**: `tailwind.config.mjs`

```js
colors: {
  primary: {
    DEFAULT: 'hsl(222, 84%, 54%)',
  },
}
```

### Scenario 8: Replace Placeholder Image

Search for "PLACEHOLDER" in:
- `src/components/ui/islands/CareerCards.tsx`
- `src/components/ui/WhyUs.astro`
- `src/components/ui/InstructorsFleet.astro`

Replace with real image URLs:
```tsx
<img src="/images/career-airline.jpg" alt="Airline Pilot" />
```

## 🔍 Quick File Finder

### "Where is the..."

| Looking for... | File |
|----------------|------|
| Header/Navigation | `src/components/ui/islands/HeaderClient.tsx` |
| Hero section | `src/components/ui/islands/HeroClient.tsx` |
| Stats numbers | `src/components/ui/islands/StatsCounter.tsx` |
| Career paths | `src/components/ui/islands/CareerCards.tsx` |
| Reviews/testimonials | `src/components/ui/islands/ReviewCarousel.tsx` |
| Training cards | `src/components/ui/islands/TrainingPathway.tsx` |
| Aircraft info | `src/components/ui/islands/AircraftShowcase.tsx` |
| FAQ questions | `src/components/ui/islands/Faq.tsx` |
| Footer | `src/components/ui/Footer.astro` |
| Colors/fonts | `tailwind.config.mjs` or `src/styles/global.css` |
| Build settings | `astro.config.mjs` |
| Dependencies | `package.json` |

## 🛠️ Developer Commands

```bash
# Development
npm install          # Install dependencies
npm run dev          # Start dev server (port 4321)
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npx astro check      # TypeScript type checking
npx prettier --write .  # Format all files

# Deployment
git push             # Triggers Cloudflare build (if connected)
npx wrangler pages deploy dist  # Manual deploy
```

## 📱 Project File Count

- **React Islands**: 8 files
- **Astro Components**: 6 files
- **Pages**: 1 file (index)
- **Styles**: 1 file (global.css)
- **Config**: 6 files
- **Public Assets**: 4 files
- **Documentation**: 5 files

**Total**: ~31 files

---

## 🎯 Quick Tips

1. **Always edit** `.tsx` files for interactive features
2. **Always edit** `.astro` files for static content
3. **Never edit** files in `dist/` (auto-generated)
4. **Always run** `npm run build` before deploying
5. **Always test** locally with `npm run dev` first

---

Need to find something? Use your editor's search (Cmd/Ctrl + Shift + F) to search across all files!

