# 🔍 Cloudflare Pages Troubleshooting

## Issue: Nothing loads on staging URL

### Step 1: Check Build Logs

1. Go to your Cloudflare Pages project
2. Click "Deployments" tab
3. Click on the latest deployment
4. Check for **Build logs**

**Look for:**
- ✅ `Build completed successfully`
- ❌ Any red error messages

### Step 2: Verify Build Settings

In Cloudflare Pages settings, confirm:

```
Build command: npm run build
Build output directory: dist
Node version: 18 or 20
```

**Common mistakes:**
- ❌ `build output directory: /dist` (remove the leading slash!)
- ❌ `build output directory: ./dist` (remove the dot!)
- ✅ `build output directory: dist` (correct!)

### Step 3: Check Deployment Status

**Possible states:**
- ⏳ **Building** - Wait for it to complete
- ✅ **Success** - Should be live
- ❌ **Failed** - Check build logs for errors

### Step 4: Browser Console Errors

Open your staging URL and:
1. Right-click → "Inspect"
2. Go to "Console" tab
3. Look for errors (red text)

**Common errors:**
- `Failed to load resource` - Asset path issue
- `Uncaught SyntaxError` - JavaScript issue
- `404 Not Found` - Build output directory wrong

### Step 5: Test the Built Site Locally

```bash
npm run preview
```

Open: http://localhost:4321

**If it works locally but not on Cloudflare:**
- Problem is with deployment settings, not the code

**If it doesn't work locally:**
- Problem is with the build itself

### Step 6: Common Fixes

#### Fix 1: Clear Build Cache

In Cloudflare Pages:
1. Settings → Builds
2. "Clear build cache"
3. Trigger new deployment

#### Fix 2: Check Node Version

Ensure Cloudflare is using Node 18 or 20:
1. Settings → Environment Variables
2. Add: `NODE_VERSION` = `20`

#### Fix 3: Verify Files Were Deployed

In deployment details, check:
- "Assets" tab - Should show `index.html`, `_astro/` folder
- If empty or missing files, output directory is wrong

### Step 7: Manual Deploy Test

Try deploying the built folder directly:

```bash
# Build locally
npm run build

# Install Wrangler
npm install -g wrangler

# Deploy directly
npx wrangler pages deploy dist
```

This bypasses GitHub and tests if the build files work.

---

## 🐛 Specific Error Solutions

### Error: "Build output directory not found"

**Fix:**
- Change output directory to `dist` (no slashes)

### Error: "Command not found: npm"

**Fix:**
- Add environment variable: `NODE_VERSION` = `20`

### Error: "Module not found"

**Fix:**
- Check `package.json` has all dependencies
- Clear cache and rebuild

### Blank Page (No Errors)

**Possible causes:**
1. JavaScript not loading (check Console)
2. Base URL mismatch
3. Assets 404ing

**Fix:**
Check Network tab in DevTools - look for 404s

---

## ✅ Success Checklist

Your site should load if:
- ✅ Build completed successfully in Cloudflare
- ✅ Deployment shows "Success" status
- ✅ `npm run preview` works locally
- ✅ No console errors in browser
- ✅ Network tab shows assets loading (200 status)

---

## 📞 Need Help?

Share these details:
1. Cloudflare Pages deployment URL
2. Build log (copy/paste)
3. Browser console errors (screenshot)
4. Does `npm run preview` work locally?

