# Deploying ekkOS Docs to docs.ekkos.dev

## Vercel Setup

### 1. Connect Repository

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Find the **docs** project (or create new if needed)
3. Go to **Settings → General**
4. Set **Root Directory** to: `apps/docs`
5. Save changes

### 2. Configure Build Settings

**Framework Preset:** Next.js

**Root Directory:** `apps/docs` ⚠️ **CRITICAL - Must be set in Vercel dashboard**

**Build Command:** 
```bash
cd ../.. && yarn install && yarn workspace @ekkos/docs build
```

**Output Directory:** `apps/docs/.next`

**Install Command:**
```bash
cd ../.. && yarn install
```

### 3. Add Custom Domain

1. In Vercel project settings, go to **Domains**
2. Add domain: `docs.ekkos.dev`
3. Vercel will provide DNS records to add

### 4. DNS Configuration

Add a **CNAME record** to your DNS provider:

**Type:** CNAME  
**Name:** `docs`  
**Value:** `cname.vercel-dns.com` (or the value Vercel provides)  
**TTL:** 3600 (or Auto)

**Note:** If you're using a DNS provider that doesn't support CNAME at the root (like Cloudflare), you may need to use a different approach. Vercel will guide you through this.

### 5. SSL Certificate

Vercel automatically provisions SSL certificates via Let's Encrypt. This usually takes a few minutes after DNS propagation.

### 6. Verify Deployment

Once DNS propagates (can take up to 48 hours, usually much faster):

```bash
curl https://docs.ekkos.dev
```

You should see the docs homepage.

## Environment Variables

No environment variables are required for the docs site (it's static).

## Auto-Deploy

The site will automatically deploy on:
- Push to `main` branch
- Pull requests (preview deployments)

## Troubleshooting

### "No Next.js version detected" Error

**Solution:** Set the **Root Directory** in Vercel dashboard:
1. Go to project Settings → General
2. Set Root Directory to: `apps/docs`
3. Save and redeploy

### DNS Not Propagating

1. Check DNS propagation: `dig docs.ekkos.dev`
2. Verify CNAME record is correct
3. Wait up to 48 hours for full propagation

### Build Failures

If the build fails, check:
1. `yarn` is installed in the build environment
2. All dependencies are in `package.json`
3. Build command has correct paths
4. Workspace name matches: `@ekkos/docs`
5. **Root Directory is set to `apps/docs` in Vercel dashboard**

### Domain Not Working

1. Verify DNS records in your DNS provider
2. Check Vercel domain settings show "Valid Configuration"
3. Ensure SSL certificate is issued (may take a few minutes)

## Manual Deployment

If you need to deploy manually (after setting root directory):

```bash
cd apps/docs
vercel --prod
```

## Local Testing

Test the production build locally:

```bash
cd apps/docs
yarn build
yarn start
```

Visit `http://localhost:3000` to verify everything works.


