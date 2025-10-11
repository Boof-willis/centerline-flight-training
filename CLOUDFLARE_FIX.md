# Cloudflare Pages 404 Troubleshooting

## If deployment says "Success" but site shows 404:

### Option 1: Force Fresh Build
1. In Cloudflare Pages → Your project → Deployments
2. Click "View build log" on the latest deployment
3. At the top right, click "Retry deployment"
4. Check "Clear build cache" ✅
5. Click "Retry"

### Option 2: Manual Trigger
1. Make a tiny change to trigger new build:
```bash
# In your terminal:
echo "" >> README.md
git add README.md
git commit -m "Trigger Cloudflare rebuild"
git push
```

### Option 3: Check Build Logs
Look for these in the Cloudflare build logs:
- ✅ "Build complete" with no errors
- ✅ "Deploying to Cloudflare's global network"
- ❌ Any red error messages (send these to me!)

### Option 4: Check URLs
Try BOTH of these URLs:
- Production: https://centerline-flight-training.pages.dev
- Deployment: https://[HASH].centerline-flight-training.pages.dev

### Option 5: Clear Browser Cache
- Open site in **Incognito/Private mode**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

## Still not working?
Send me:
1. Screenshot of the Cloudflare deployment page
2. The build log from Cloudflare (copy/paste the whole thing)
3. What error you see in the browser (404? Blank page?)

