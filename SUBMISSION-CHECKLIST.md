# ✅ Activity 2 Submission Checklist
## Christian Lozada - Pangasinan Heritage Showcase

---

## Pre-Submission Tasks

### Part 1: Build & Prepare ✅

- [x] Static site generation configured (`output: 'export'` in next.config.js)
- [x] `.gitignore` updated to keep `/out` folder
- [x] GitHub Actions workflow created
- [x] README.md updated with student info
- [x] All components from Activity 1.1 working

### Part 2: Build the Site 🏗️

- [ ] Run `npm run build` in terminal
- [ ] Verify `out/` folder created
- [ ] Check for build errors (should see "Export successful")

**Command**:
```bash
npm run build
```

---

## GitHub Repository Setup

### Part 3: Create GitHub Repository 🌐

- [ ] Go to https://github.com/new
- [ ] Repository name: `pangasinan-heritage-showcase`
- [ ] Description: "Pangasinan Heritage Digital Showcase - Activity 2"
- [ ] Visibility: **PUBLIC** ✅ (Important!)
- [ ] **Do NOT** check "Initialize with README"
- [ ] Click "Create repository"
- [ ] Copy repository URL

**Your Repository URL**:
```
https://github.com/YOUR-USERNAME/pangasinan-heritage-showcase
```

### Part 4: Push Code to GitHub 📤

Open terminal in `pangasinan-heritage-showcase/` folder and run:

```bash
git init
git add .
git commit -m "Activity 2 - Initial deployment"
git remote add origin https://github.com/YOUR-USERNAME/pangasinan-heritage-showcase.git
git branch -M main
git push -u origin main
```

**Checklist**:
- [ ] Git initialized
- [ ] Files added and committed
- [ ] Remote repository linked
- [ ] Code pushed to GitHub
- [ ] Verified code appears on GitHub website

---

## GitHub Pages Deployment

### Part 5: Enable GitHub Pages ⚡

1. Go to your repository on GitHub
2. Click **Settings** tab (top right)
3. Click **Pages** in left sidebar
4. Under "Build and deployment":
   - Source: Select **"GitHub Actions"**
5. Done!

**Checklist**:
- [ ] GitHub Pages enabled
- [ ] Source set to "GitHub Actions"
- [ ] Workflow started automatically

### Part 6: Monitor Deployment 👀

1. Go to **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait for green checkmark (2-5 minutes)
4. Click on the workflow to see details

**Checklist**:
- [ ] Workflow completed successfully (green ✓)
- [ ] No errors in deployment logs
- [ ] Build artifacts created

### Part 7: Get Your Live URL 🌍

Your website is now live at:

```
https://YOUR-USERNAME.github.io/pangasinan-heritage-showcase/
```

**Update README.md**:
- [ ] Replace `YOUR-USERNAME` with actual username in README.md
- [ ] Commit and push the change:
  ```bash
  git add README.md
  git commit -m "Update live URL in README"
  git push
  ```

---

## Testing Deployed Website

### Part 8: Functional Testing 🧪

Visit your live site and test:

**Homepage**:
- [ ] Site loads correctly
- [ ] Hero section displays
- [ ] Search form appears
- [ ] Heritage cards show all 3 sites
- [ ] All images load

**Navigation**:
- [ ] Header navigation works
- [ ] All 4 pages accessible (Home, Hundred Islands, Lighthouse, Hot Spring)
- [ ] Mobile menu works (if viewing on mobile/small screen)
- [ ] Footer displays

**Individual Pages**:
- [ ] Hundred Islands page loads
- [ ] Bolinao Lighthouse page loads
- [ ] Balungao Hot Spring page loads
- [ ] All content visible
- [ ] Images load on all pages
- [ ] "Back to Home" buttons work

**Responsive Design**:
- [ ] Test on mobile (or browser DevTools mobile view)
- [ ] Test on tablet (or browser DevTools tablet view)
- [ ] Test on desktop
- [ ] All layouts adapt properly
- [ ] Touch targets work on mobile

**Links & Resources**:
- [ ] No 404 errors
- [ ] No broken images
- [ ] All internal links work
- [ ] Navigation is smooth

---

## Lighthouse Audit

### Part 9: Run Lighthouse Audit 📊

**Steps**:
1. Open your live GitHub Pages site in **Google Chrome**
2. Right-click anywhere on page → **Inspect**
3. Click **Lighthouse** tab (in DevTools top menu)
4. Configuration:
   - Categories: Check ALL (Performance, Accessibility, Best Practices, SEO)
   - Device: **Desktop** (or Mobile - your choice)
5. Click **"Analyze page load"**
6. Wait 30-60 seconds for results

**Target Scores**:

| Category | Target | Your Score |
|----------|--------|------------|
| Performance | ≥ 80 | ___ |
| Accessibility | ≥ 85 | ___ |
| Best Practices | ≥ 85 | ___ |
| SEO | ≥ 90 | ___ |

**Capture Results**:
- [ ] Screenshot the Lighthouse report
- [ ] Or click "..." menu → "Save as PDF"
- [ ] Save as: `lighthouse-results.png` or `lighthouse-results.pdf`
- [ ] Verify all 4 scores are visible

**If scores are low**:
- Performance: May improve after first visit (caching)
- Accessibility: Should be 100 (already optimized)
- Best Practices: Should be high (modern Next.js)
- SEO: Should be 90+ (meta tags included)

---

## Final Submission

### Part 10: Prepare Submission Document 📝

Create a text file or Word document with:

**Activity 2 Submission - Christian Lozada**

**1. GitHub Repository Link**:
```
https://github.com/YOUR-USERNAME/pangasinan-heritage-showcase
```

**2. GitHub Pages Link**:
```
https://YOUR-USERNAME.github.io/pangasinan-heritage-showcase/
```

**3. Lighthouse Scores**:
- Performance: ___
- Accessibility: ___
- Best Practices: ___
- SEO: ___

**Attachments**: Lighthouse screenshot or PDF

### Part 11: Submit to Google Classroom 📤

**What to submit**:
- [ ] GitHub Repository URL (text)
- [ ] GitHub Pages URL (text)
- [ ] Lighthouse results (screenshot or PDF)

**Submission method**:
- Copy-paste URLs into Google Classroom text box
- Attach Lighthouse screenshot/PDF
- Or combine everything in one PDF document

**Checklist before submitting**:
- [ ] Both URLs are correct and work
- [ ] Repository is PUBLIC
- [ ] Live site is accessible
- [ ] Lighthouse results clearly show all 4 scores
- [ ] Student name is on submission

---

## Troubleshooting

### Issue: Build fails
```bash
# Solution: Clean and rebuild
rm -rf node_modules .next out
npm install
npm run build
```

### Issue: Can't push to GitHub
- Check if you added the correct remote URL
- Check if repository exists on GitHub
- May need to authenticate (enter username/password or token)

### Issue: GitHub Pages not deploying
- Check Actions tab for error messages
- Verify Pages is set to "GitHub Actions" source
- Check that workflow file exists at `.github/workflows/deploy.yml`

### Issue: Site shows 404
- Wait 2-5 minutes after first deployment
- Check that `/out` folder was built
- Verify workflow completed successfully

### Issue: Images not loading
- Already fixed with `images: { unoptimized: true }`
- Check browser console for errors
- Verify image paths are correct

---

## Quick Reference

**Build**: `npm run build`

**Git Commands**:
```bash
git add .
git commit -m "message"
git push
```

**Repository URL**: `https://github.com/YOUR-USERNAME/pangasinan-heritage-showcase`

**Live Site**: `https://YOUR-USERNAME.github.io/pangasinan-heritage-showcase/`

---

## Completion Status

**Activity 2 Complete When**:
- [x] Code pushed to GitHub
- [x] GitHub Pages enabled and deployed
- [x] Live site tested and working
- [x] Lighthouse audit completed
- [x] All three items submitted to Google Classroom

---

**Student**: Christian Lozada  
**Activity**: 2 - GitHub Pages Deployment  
**Instructor**: Rey Molano  
**Course**: Web Architecture

**READY TO SUBMIT!** 🎉
