# 🚀 Deployment Guide - Activity 2
## Pangasinan Heritage Digital Showcase

**Student**: Christian Lozada  
**Activity**: 2 - GitHub Pages Deployment

---

## ✅ Prerequisites Completed

- [x] Activity 1.1 completed
- [x] Next.js 14 project with Atomic Design components
- [x] Static site generation configured (`output: 'export'`)
- [x] Project tested locally

---

## 📋 Deployment Steps

### Step 1: Build the Static Site

Open terminal in project folder and run:

```bash
npm run build
```

This will create an `out/` folder with your static HTML/CSS/JS files.

---

### Step 2: Create GitHub Repository

#### Option A: Using GitHub Website (Easiest)

1. Go to: https://github.com/new
2. Repository name: `pangasinan-heritage-showcase`
3. Description: "Pangasinan Heritage Digital Showcase - Activity 2"
4. Make it **Public**
5. **Do NOT** initialize with README (we already have one)
6. Click "Create repository"

#### Option B: Using GitHub CLI (if installed)

```bash
gh repo create pangasinan-heritage-showcase --public --source=. --remote=origin
```

---

### Step 3: Initialize Git and Push to GitHub

**Open terminal in project folder** (`pangasinan-heritage-showcase/`) and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Activity 2 deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/pangasinan-heritage-showcase.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME`** with your actual GitHub username!

---

### Step 4: Enable GitHub Pages

#### Method 1: Using GitHub Actions (Recommended - Automatic)

The `.github/workflows/deploy.yml` file is already configured!

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. The workflow will automatically deploy on every push!

#### Method 2: Manual Deployment from Branch

If you prefer manual control:

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / folder: **/(root)** or **/out**
5. Click **Save**

---

### Step 5: Wait for Deployment (2-5 minutes)

- Check the **Actions** tab in your GitHub repository
- You'll see the deployment workflow running
- Once complete (green checkmark), your site is live!

---

### Step 6: Get Your Live URL

Your website will be available at:

```
https://YOUR-USERNAME.github.io/pangasinan-heritage-showcase/
```

**Update README.md** with this URL!

---

## 🧪 Testing Your Deployed Site

### Deliverable 2.2 Requirements

Visit your live site and verify:

- ✅ The website loads correctly
- ✅ All pages are accessible (Home, Hundred Islands, Lighthouse, Hot Spring)
- ✅ Images and assets load correctly
- ✅ Navigation works correctly
- ✅ Responsive layouts work properly (test mobile, tablet, desktop)
- ✅ No broken links or missing resources

---

## 📊 Lighthouse Audit (Deliverable 2.3)

### Running the Audit

1. **Open your live GitHub Pages site** in Google Chrome
2. **Right-click** anywhere → **Inspect**
3. Click the **Lighthouse** tab (top menu in DevTools)
4. Select these categories:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
5. Device: **Desktop** (or Mobile)
6. Click **Analyze page load**
7. Wait for results (30-60 seconds)

### Target Scores

| Category | Target Score | Your Score |
|----------|--------------|------------|
| Performance | ≥ 80 | ___ |
| Accessibility | ≥ 85 | ___ |
| Best Practices | ≥ 85 | ___ |
| SEO | ≥ 90 | ___ |

### Capture Results

1. Click **View Trace** or the download button
2. Take a screenshot of the full Lighthouse report
3. Save as: `lighthouse-results.png` or export as PDF

---

## 📤 Submission Checklist

Submit these 3 items to Google Classroom:

### 1. GitHub Repository Link ✅
```
https://github.com/YOUR-USERNAME/pangasinan-heritage-showcase
```

### 2. GitHub Pages Link ✅
```
https://YOUR-USERNAME.github.io/pangasinan-heritage-showcase/
```

### 3. Lighthouse Test Results ✅
- Screenshot or PDF showing:
  - ✅ Performance score
  - ✅ Accessibility score
  - ✅ Best Practices score
  - ✅ SEO score

---

## 🐛 Troubleshooting

### Issue: "npm: command not found"
**Solution**: Restart your terminal after installing Node.js, or restart your computer.

### Issue: Build fails
**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Issue: Images not loading on GitHub Pages
**Solution**: Already configured with `images: { unoptimized: true }` in `next.config.js`

### Issue: 404 error on page refresh
**Solution**: Normal for GitHub Pages with client-side routing. Use the navigation menu.

### Issue: Styles not loading
**Solution**: Check that `output: 'export'` is in `next.config.js`

### Issue: GitHub Pages shows README instead of website
**Solution**: 
- Make sure you pushed the `out/` folder
- Or use GitHub Actions deployment method

---

## 🎯 Quick Command Reference

```bash
# Build the site
npm run build

# Test locally before deploying
npm run dev

# Initialize and push to GitHub
git init
git add .
git commit -m "Activity 2 deployment"
git remote add origin https://github.com/YOUR-USERNAME/pangasinan-heritage-showcase.git
git push -u origin main

# Update after changes
git add .
git commit -m "Update website"
git push
```

---

## 📝 Notes

- **First deployment** takes 2-5 minutes
- **Subsequent deployments** are faster (1-2 minutes)
- **Changes** pushed to main branch automatically redeploy
- **Custom domain** can be added in repository settings (optional)

---

## ✅ Final Checklist

Before submitting to Sir Molano:

- [ ] Repository is public on GitHub
- [ ] All code is pushed to GitHub
- [ ] GitHub Pages is enabled
- [ ] Live site is accessible
- [ ] All pages work correctly
- [ ] Images load properly
- [ ] Navigation works
- [ ] Responsive design works on mobile
- [ ] Lighthouse audit completed
- [ ] All scores meet targets (≥80, ≥85, ≥85, ≥90)
- [ ] Screenshot/PDF of Lighthouse results saved
- [ ] README.md updated with live URL

---

**Ready to submit Activity 2!** 🎉

---

**Student**: Christian Lozada  
**Instructor**: Rey Molano  
**Course**: Web Architecture  
**Activity**: 2 - Deployment & Performance Audit
