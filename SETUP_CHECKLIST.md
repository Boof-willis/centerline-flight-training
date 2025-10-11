# ✅ Setup & Verification Checklist

Complete this checklist to ensure your Centerline Flight Training project is ready for development and deployment.

## 📋 Phase 1: Installation (5 minutes)

### Step 1: Verify Node.js
```bash
node --version
# Should show v18.x.x or v20.x.x
# If not, download from https://nodejs.org
```

### Step 2: Install Dependencies
```bash
cd "/Users/spencerroberts/Desktop/Centerline 2"
npm install
```

**Expected output**: 
- ✓ Dependencies installed successfully
- ✓ No errors or warnings
- ✓ `node_modules/` folder created

### Step 3: Start Development Server
```bash
npm run dev
```

**Expected output**:
```
🚀 astro v4.x.x started in XXms

  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose

watching for file changes...
```

### Step 4: Open in Browser
Open: **http://localhost:4321**

**Expected**: Site loads with all sections visible

---

## 🧪 Phase 2: Feature Testing (10 minutes)

Open your site and verify each feature:

### ✅ Header & Navigation
- [ ] Header visible at top
- [ ] Logo displays
- [ ] Phone number shows: (801) 477-0418
- [ ] Nav links work (Programs, Fleet, Discovery, Why Us, FAQs)
- [ ] Smooth scroll when clicking nav links
- [ ] Header styling changes on scroll (scroll down to test)

### ✅ Hero Section
- [ ] Background image loads
- [ ] Title: "Your Pilot Career Starts Here"
- [ ] Character reveal animation plays (refresh to see)
- [ ] Buttons visible and clickable
- [ ] Reviews badge shows: "★★★★★ 100+ Positive Client Reviews"
- [ ] Parallax effect on scroll

### ✅ Benefits Bar
- [ ] Two-column layout (text + image)
- [ ] Image loads
- [ ] Stats counter animates on scroll into view:
  - 15+ Years of experience
  - 200+ Pilots trained
  - 500+ Flight hours logged
  - 10,000+ Training hours

### ✅ Career Cards
- [ ] Three cards visible: Airline, Corporate, Military
- [ ] Cards have sticky scroll effect
- [ ] Cards scale up as you scroll
- [ ] "Get in touch" button on each card

### ✅ Review Carousel
- [ ] 5-star rating displays
- [ ] Review text shows
- [ ] Author name shows
- [ ] Profile pictures display
- [ ] Carousel auto-rotates (watch for 4 seconds)
- [ ] Hover to pause auto-rotation
- [ ] Click profile picture to switch manually

### ✅ Training Pathway
- [ ] Four cards visible: PPL, IFR, CPL, CFI
- [ ] Two rows of cards
- [ ] Cards expand/contract on hover
- [ ] "Start Your Training Journey" button below

### ✅ Aircraft Showcase
- [ ] Black background section
- [ ] Four aircraft: DA40 XL, DA20 Eclipse (2x), DA40
- [ ] Left side: Scrolling text
- [ ] Right side: Sticky images (desktop only)
- [ ] Images change as you scroll
- [ ] "Book Now" button on each

### ✅ Why Us Section
- [ ] Two columns: image + list
- [ ] Six bullet points with icons
- [ ] Placeholder image (to be replaced)

### ✅ Testimonials
- [ ] Three testimonial cards
- [ ] Avatar circles with initials
- [ ] Student names and roles

### ✅ Instructors & Fleet
- [ ] "Meet Our Team & Fleet" heading
- [ ] Three instructor placeholders
- [ ] Two aircraft cards: Diamond DA20, Diamond DA40
- [ ] Pricing: $165/hr and $265/hr

### ✅ FAQ Section
- [ ] Eight FAQ items
- [ ] Click question to expand
- [ ] Click again to collapse
- [ ] Down arrow rotates when open

### ✅ CTA Band
- [ ] Blue background
- [ ] "Your Aviation Journey Starts Now"
- [ ] Two buttons: "Book Discovery Flight" and "Text: (801) 477-0418"

### ✅ Footer
- [ ] Four columns: Visit Us, Contact, Quick Links, Legal
- [ ] All links present
- [ ] Copyright notice at bottom

---

## 📱 Phase 3: Responsive Testing (5 minutes)

Test on different screen sizes:

### Desktop (1920px)
```bash
# Resize browser to full width
```
- [ ] All sections display correctly
- [ ] Sticky images work in Aircraft Showcase
- [ ] Nav links visible (not hamburger menu)

### Tablet (768px)
```bash
# Resize browser to ~768px width
```
- [ ] Two-column layouts become single column
- [ ] Images stack above/below text
- [ ] All content readable

### Mobile (375px)
```bash
# Resize browser to ~375px width or use DevTools mobile view
```
- [ ] Navigation shows hamburger menu (☰)
- [ ] Single column layout throughout
- [ ] Cards stack vertically
- [ ] Text sizes appropriate
- [ ] Buttons full-width or centered

---

## 🏗️ Phase 4: Build Testing (5 minutes)

### Build for Production
```bash
npm run build
```

**Expected output**:
```
building client... 
Completed in XXXms.
```

**Check for**:
- ✓ No TypeScript errors
- ✓ No build errors
- ✓ `dist/` folder created

### Preview Production Build
```bash
npm run preview
```

Open: **http://localhost:4321**

**Verify**:
- [ ] Site loads correctly
- [ ] All features still work
- [ ] Images load
- [ ] Interactive islands function

---

## 🎨 Phase 5: Content Customization (15-30 minutes)

### Replace Placeholders

Search project for "PLACEHOLDER" and replace:

1. **Career Cards** (`src/components/ui/islands/CareerCards.tsx`)
   - [ ] Airline pilot image
   - [ ] Corporate pilot image
   - [ ] Military pilot image

2. **Why Us** (`src/components/ui/WhyUs.astro`)
   - [ ] Replace placeholder with facility/hangar photo

3. **Instructors** (`src/components/ui/InstructorsFleet.astro`)
   - [ ] Add real instructor photos
   - [ ] Update names and certifications

### Update Contact Information

1. **Phone Number** (multiple files)
   - Search: `(801) 477-0418`
   - Verify or update in:
     - `src/components/ui/islands/HeaderClient.tsx`
     - `src/components/ui/CtaBand.astro`
     - `src/components/ui/Footer.astro`

2. **Email Address** (`src/components/ui/Footer.astro`)
   - Current: `contact@centerlineaviationinc.com`
   - [ ] Verify or update

3. **Address** (`src/components/ui/Footer.astro`)
   - Current: 2050 N 300 W, Spanish Fork, UT 84660
   - [ ] Verify or update

### Update Domain

1. **Sitemap** (`public/sitemap.xml`)
   ```xml
   <loc>https://centerlineaviationinc.com/</loc>
   ```
   - [ ] Update if using different domain

2. **Robots.txt** (`public/robots.txt`)
   ```
   Sitemap: https://centerlineaviationinc.com/sitemap.xml
   ```
   - [ ] Update if using different domain

---

## 🚀 Phase 6: Pre-Deployment (5 minutes)

### Final Checks

- [ ] All placeholder images replaced
- [ ] Contact information correct
- [ ] Build runs without errors: `npm run build`
- [ ] Preview looks good: `npm run preview`
- [ ] Test on mobile device (optional)

### Git Setup (if not done)

```bash
git init
git add .
git commit -m "Initial commit - Astro conversion complete"
```

### Push to GitHub

```bash
# Create repo on GitHub first, then:
git remote add origin https://github.com/yourusername/centerline-flight.git
git branch -M main
git push -u origin main
```

---

## 🌐 Phase 7: Deployment

Follow instructions in **DEPLOYMENT.md**

### Quick Deploy to Cloudflare Pages

**Option 1: GitHub Integration** (Recommended)
1. Push to GitHub (see above)
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Pages → Create Project → Connect Git
4. Select repo → Deploy

**Option 2: Direct Upload**
```bash
npm install -g wrangler
npm run build
npx wrangler pages deploy dist
```

---

## ✅ Success Criteria

Your project is ready when:

- ✅ All checklist items above are complete
- ✅ Build runs without errors
- ✅ Site works in dev and preview modes
- ✅ All placeholders replaced
- ✅ Contact information updated
- ✅ Tested on mobile (optional but recommended)

---

## 🎉 You're Ready!

Once all checklist items are complete, your site is ready for deployment!

**Next Steps**:
1. Read **DEPLOYMENT.md** for deployment instructions
2. Read **README.md** for full documentation
3. Read **FILE_GUIDE.md** when you need to find/edit something

**Need help?** Check the documentation files or search for specific topics in the project.

---

**Time to Deploy**: ~30 minutes total  
**Difficulty**: Beginner-friendly ✨

