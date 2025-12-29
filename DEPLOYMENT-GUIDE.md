# 🚀 Quick Deployment Guide - enterrr.me

**Goal:** Get your app live on Vercel in ~10 minutes

---

## Step 1: Create GitHub Repository (2 min)

**Do this NOW:**

1. **Open:** https://github.com/new
2. **Fill in:**
   - Repository name: `enterrr-me`
   - Description: "Link-in-bio builder - Bento.me alternative"
   - Visibility: **Private** ✅ (recommended)
   - **DO NOT** check "Initialize with README" ❌
3. **Click:** "Create repository"
4. **Copy the SSH URL** that looks like:
   ```
   git@github.com:YOUR-USERNAME/enterrr-me.git
   ```

**⏸️ PAUSE HERE and provide me the URL**

---

## Step 2: Push to GitHub (Done by me)

Once you provide the GitHub URL, I'll run:

```bash
git remote add origin <YOUR-GITHUB-URL>
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy on Vercel (5 min)

**After code is pushed:**

1. **Open:** https://vercel.com/new
2. **Login:** Use GitHub (easiest) or email
3. **Import Repository:**
   - Click "Import Git Repository"
   - Find `enterrr-me` in the list
   - Click "Import"
4. **Configure Project:**
   - Framework Preset: **Vite** (auto-detected ✅)
   - Root Directory: `frontend`
   - Build Command: `npm run build` (auto-filled ✅)
   - Output Directory: `dist` (auto-filled ✅)
5. **Click:** "Deploy"
6. **Wait:** ~1 minute for build
7. **Get URL:** Something like `enterrr-me.vercel.app`

---

## Step 4: Test Deployment (2 min)

**Visit your URL and test:**
- ✅ Homepage loads
- ✅ Click "Start Building" → goes to /editor
- ✅ Visit /@test → shows profile page
- ✅ No console errors
- ✅ Works on mobile

---

## ✅ Success!

Your app is now:
- 🌍 Live on the internet
- 🔄 Auto-deploying on every git push
- 📊 Monitored on Vercel dashboard

**Next:** Start building widget components!

---

**Current Status:** Waiting for GitHub repository URL from you
