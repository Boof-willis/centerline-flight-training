# 🚀 Cloudflare Pages Deployment Guide

Complete guide for deploying your Centerline Flight Training site to Cloudflare Pages.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All content is updated (no placeholder text)
- [ ] Images are replaced or uploaded
- [ ] Contact information is correct
- [ ] Build runs successfully: `npm run build`
- [ ] Preview looks good: `npm run preview`

## 🔧 Method 1: GitHub Integration (Recommended)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Astro conversion"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/centerline-flight.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click **Pages** in the left sidebar
3. Click **Create a project**
4. Click **Connect to Git**
5. Select your repository: `centerline-flight`
6. Configure build settings:

```
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Root directory: /
Node version: 18 or 20
```

7. Click **Save and Deploy**

### Step 3: Set Environment Variables (if needed)

If you have environment variables:

1. Go to your project in Cloudflare Pages
2. Click **Settings** → **Environment variables**
3. Add variables for both Production and Preview

### Step 4: Custom Domain (Optional)

1. Go to **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter your domain: `centerlineaviationinc.com`
4. Follow DNS configuration instructions

## 🔧 Method 2: Direct Upload with Wrangler

### Step 1: Install Wrangler

```bash
npm install -g wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

This will open a browser window to authenticate.

### Step 3: Build Your Project

```bash
npm run build
```

### Step 4: Deploy

```bash
npx wrangler pages deploy dist
```

Follow the prompts:
- Enter project name: `centerline-flight`
- Confirm directory: `dist`

### Step 5: Visit Your Site

After deployment completes, you'll get a URL like:
```
https://centerline-flight.pages.dev
```

## 🎯 Deployment Settings Reference

### Build Configuration

```yaml
Build command: npm run build
Build output directory: dist
Root directory: (leave empty)
Node version: 18 or 20
Environment variables: (none required by default)
```

### Build Environment

Cloudflare Pages automatically provides:
- Node.js 18+ or 20+
- npm (for installing dependencies)
- Build caching (for faster builds)

## 🔄 Continuous Deployment

Once connected to GitHub, Cloudflare automatically:

- ✅ Builds on every push to `main`
- ✅ Creates preview deployments for PRs
- ✅ Provides unique URLs for each build
- ✅ Rolls back easily if issues occur

## 🌍 Custom Domain Setup

### Step 1: Add Custom Domain

1. In Cloudflare Pages project
2. Go to **Custom domains**
3. Click **Set up a custom domain**
4. Enter: `centerlineaviationinc.com`

### Step 2: Configure DNS

Add these DNS records in your domain registrar:

```
Type: CNAME
Name: www
Content: centerline-flight.pages.dev
Proxy: Enabled (orange cloud)

Type: CNAME
Name: @
Content: centerline-flight.pages.dev
Proxy: Enabled (orange cloud)
```

### Step 3: SSL/TLS

Cloudflare automatically provides:
- Free SSL certificate
- Automatic HTTPS redirect
- Modern TLS versions

## 📊 Performance Optimization

After deployment, verify:

### Lighthouse Scores

Run in Chrome DevTools:
```
Performance: 90+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Speed Tests

Test at:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [GTmetrix](https://gtmetrix.com/)

## 🐛 Troubleshooting

### Build Fails

**Error: "command not found: npm"**
```
Solution: Set Node version to 18 or 20 in build settings
```

**Error: "Cannot find module '@astrojs/react'"**
```
Solution: Ensure package.json has all dependencies
Run: npm install locally to verify
```

**Error: "Build output directory 'dist' not found"**
```
Solution: Verify build command is 'npm run build'
Check astro.config.mjs output setting
```

### Deployment Success but Site Broken

**Images not loading**
```
Solution: Images should be in public/ folder
Reference as /images/photo.jpg (not /public/images/photo.jpg)
```

**404 on navigation**
```
Solution: Cloudflare Pages handles routing automatically
Ensure _redirects file exists if using custom routing
```

**React islands not interactive**
```
Solution: Check browser console for JS errors
Verify client:load or client:visible directives are present
```

## 🔒 Security Headers

Add custom headers in Cloudflare Pages:

1. Create `public/_headers` file:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

2. Redeploy

## 📈 Analytics Setup

### Cloudflare Web Analytics (Free)

1. Go to **Web Analytics** in Cloudflare Dashboard
2. Click **Add a site**
3. Enter your domain
4. Copy the analytics script
5. Add to `src/pages/index.astro` in `<head>`

### Google Analytics (Optional)

Add to `src/pages/index.astro`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎉 Post-Deployment Checklist

- [ ] Site loads correctly at production URL
- [ ] All pages accessible
- [ ] Images and assets load
- [ ] Interactive features work (carousel, FAQ, etc.)
- [ ] Forms submit correctly
- [ ] Mobile responsive on real devices
- [ ] SSL certificate active (https://)
- [ ] Custom domain pointing correctly
- [ ] Analytics tracking
- [ ] Performance scores 90+

## 📞 Support

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Astro Docs**: https://docs.astro.build
- **Community**: Cloudflare Discord, Astro Discord

---

**Ready to go live! ✈️**

Your site will be live at:
- **Cloudflare URL**: `https://centerline-flight.pages.dev`
- **Custom Domain**: `https://centerlineaviationinc.com` (after DNS setup)

