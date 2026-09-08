# 📖 Simple Step-by-Step Guide - Activity 2
## Christian Lozada - No Confusion, Just Results!

---

## ⚠️ Before You Start

**You need**:
- ✅ Node.js installed (check by typing `node --version` in terminal)
- ✅ A GitHub account (create one at https://github.com if you don't have it)
- ✅ Google Chrome browser (for Lighthouse test)

**Time needed**: 30 minutes

---

# STEP 1: Build Your Website into Static Files

## What you'll do:
Turn your Next.js project into plain HTML/CSS/JS files that GitHub Pages can host.

## Actions:

### 1.1 Open Terminal
- Press `Windows Key`
- Type: `cmd`
- Press `Enter`

### 1.2 Go to Project Folder
Type this EXACTLY (copy-paste it):
```
cd "C:\Users\Christian Lozada\Downloads\Activity 1\pangasinan-heritage-showcase"
```
Press `Enter`

### 1.3 Build the Website
Type:
```
npm run build
```
Press `Enter`

### 1.4 Wait (this takes 30-60 seconds)
You'll see text scrolling. Wait until you see:
```
✓ Generating static pages (4/4)
✓ Export successful
```

### 1.5 Verify Success
Type:
```
dir out
```
Press `Enter`

**You should see files listed**. If yes, SUCCESS! Move to Step 2.

**If you see "npm not recognized"**: Node.js isn't installed. Install it first from https://nodejs.org/

---

# STEP 2: Create a GitHub Repository

## What you'll do:
Create a place on GitHub to store your code.

## Actions:

### 2.1 Go to GitHub
Open browser and go to: **https://github.com/new**

(If not logged in, log in first)

### 2.2 Fill in the Form

**Repository name** (type EXACTLY):
```
pangasinan-heritage-showcase
```

**Description** (copy-paste this):
```
Pangasinan Heritage Digital Showcase - Activity 2 - Web Architecture
```

**Public or Private?**
- Click the **"Public"** option ✅ (IMPORTANT!)

**Initialize this repository with:**
- ❌ Do NOT check "Add a README file"
- ❌ Do NOT check ".gitignore"
- ❌ Do NOT check "Choose a license"
- Leave ALL checkboxes UNCHECKED

### 2.3 Create Repository
Click the green **"Create repository"** button at the bottom

### 2.4 Copy Your Repository URL
You'll see a page with commands. At the top, you'll see:
```
https://github.com/YOUR-USERNAME/pangasinan-heritage-showcase.git
```

**Click the copy button** 📋 next to this URL, or write it down.

**DON'T CLOSE THIS PAGE YET** - you'll need it in Step 3.

---

# STEP 3: Upload Your Code to GitHub

## What you'll do:
Send your code from your computer to GitHub.

## Actions:

### 3.1 Go Back to Terminal
(Should still be open from Step 1)

If you closed it:
- Press `Windows Key`, type `cmd`, press Enter
- Type: `cd "C:\Users\Christian Lozada\Downloads\Activity 1\pangasinan-heritage-showcase"`
- Press Enter

### 3.2 Initialize Git
Type this:
```
git init
```
Press `Enter`

You should see: `Initialized empty Git repository`

### 3.3 Add All Files
Type this:
```
git add .
```
Press `Enter`

(That's "git add" then a PERIOD/DOT)

### 3.4 Create First Commit
Type this EXACTLY (with the quotes):
```
git commit -m "Activity 2 - Initial deployment"
```
Press `Enter`

You'll see a bunch of files listed. That's good!

### 3.5 Connect to GitHub

**IMPORTANT**: Replace `YOUR-USERNAME` with your ACTUAL GitHub username!

Type this (paste the URL you copied in Step 2.4):
```
git remote add origin https://github.com/YOUR-USERNAME/pangasinan-heritage-showcase.git
```
Press `Enter`

**Example**: If your username is "chris123", type:
```
git remote add origin https://github.com/chris123/pangasinan-heritage-showcase.git
```

### 3.6 Set Main Branch
Type:
```
git branch -M main
```
Press `Enter`

### 3.7 Push to GitHub
Type:
```
git push -u origin main
```
Press `Enter`

**Wait 10-30 seconds**. You'll see:
```
Enumerating objects: ...
Counting objects: ...
Writing objects: 100% ...
```

### 3.8 Check for Authentication
**If asked for username/password**:
- Username: Your GitHub username
- Password: Use a Personal Access Token (NOT your GitHub password)
  
**Need a token?**
- Go to: https://github.com/settings/tokens
- Click "Generate new token (classic)"
- Give it a name: "Activity 2"
- Check "repo" box
- Click "Generate token"
- Copy the token and paste it as password

### 3.9 Verify Success
Go back to your browser where GitHub is open.
Refresh the page (F5).

**You should now see your files!** If yes, SUCCESS! Move to Step 4.

---

# STEP 4: Enable GitHub Pages

## What you'll do:
Turn on the feature that makes your website live on the internet.

## Actions:

### 4.1 Go to Repository Settings
In your GitHub repository page:
- Look at the top menu
- Click **"Settings"** (last option on the right)

### 4.2 Find Pages Settings
On the left sidebar:
- Scroll down
- Click **"Pages"** (it's near the bottom)

### 4.3 Configure Build and Deployment

Under "Build and deployment" section:

**Source** dropdown:
- Click the dropdown that says "Deploy from a branch"
- Select **"GitHub Actions"** ✅

That's it! The page will automatically save.

### 4.4 Wait for Deployment

- At the top of your repository, click **"Actions"** tab
- You'll see "Deploy to GitHub Pages" workflow
- It will be yellow 🟡 (running) or green ✅ (done)
- **Wait until it's green** (2-5 minutes)

If you see red ❌:
- Click on it to see the error
- Usually means: wait a minute and it will retry automatically

---

# STEP 5: Get Your Live Website URL

## What you'll do:
Find the web address where your site is now live.

## Actions:

### 5.1 Go Back to Pages Settings
- Click **"Settings"** tab
- Click **"Pages"** in left sidebar

### 5.2 Find Your URL
At the top, you'll see a blue box:
```
Your site is live at https://YOUR-USERNAME.github.io/pangasinan-heritage-showcase/
```

### 5.3 Copy This URL
Click **"Visit site"** button OR copy the URL.

### 5.4 Test Your Website
In a new browser tab, paste the URL.

**You should see your Pangasinan Heritage website!**

### 5.5 Test Each Page
Click on each link:
- ✅ Home page loads
- ✅ Hundred Islands page loads
- ✅ Bolinao Lighthouse page loads
- ✅ Balungao Hot Spring page loads
- ✅ Navigation works
- ✅ Images show up

**If everything works, SUCCESS!** Move to Step 6.

**If you see 404 error**:
- Wait 2-3 more minutes
- Refresh the page
- GitHub Pages takes a few minutes on first deployment

---

# STEP 6: Run Lighthouse Performance Test

## What you'll do:
Test how fast and accessible your website is.

## Actions:

### 6.1 Open Your Live Site in Chrome
- Open Google Chrome
- Go to your live URL: `https://YOUR-USERNAME.github.io/pangasinan-heritage-showcase/`

### 6.2 Open Developer Tools
**Option 1**: Right-click anywhere on the page → Click **"Inspect"**

**Option 2**: Press **F12** on your keyboard

A panel opens at the bottom or right side of the screen.

### 6.3 Find Lighthouse Tab
At the top of the developer tools panel, you'll see tabs:
- Elements
- Console
- Sources
- Network
- **>> (double arrows)** ← Click this if you don't see Lighthouse

Click the **>> arrows**, then click **"Lighthouse"**

### 6.4 Configure Lighthouse
In the Lighthouse panel:

**Categories** - Check ALL four boxes:
- ✅ Performance
- ✅ Accessibility
- ✅ Best Practices
- ✅ SEO

**Device**:
- Choose "Desktop" (recommended) or "Mobile"

**Mode**:
- Leave as "Navigation (Default)"

### 6.5 Run the Audit
Click the blue **"Analyze page load"** button

### 6.6 Wait (30-60 seconds)
You'll see a progress indicator. Wait until it finishes.

### 6.7 View Results
You'll see 4 scores with colored circles:
- 🟢 Green (90-100) = Excellent
- 🟡 Orange (50-89) = Needs improvement
- 🔴 Red (0-49) = Poor

**Your target scores**:
- Performance: 80 or higher
- Accessibility: 85 or higher
- Best Practices: 85 or higher
- SEO: 90 or higher

### 6.8 Save the Results

**Option 1 - Screenshot**:
- Make sure all 4 scores are visible
- Press `Windows Key + Shift + S`
- Click and drag to select the Lighthouse results
- The screenshot is copied to clipboard
- Open Paint → Paste → Save as `lighthouse-results.png`

**Option 2 - Save as PDF**:
- Click the **settings** icon (⚙️) at top right of Lighthouse panel
- Click **"Save as PDF"**
- Save as `lighthouse-results.pdf`

### 6.9 Verify Your Scores
Write down your scores:
- Performance: ____
- Accessibility: ____
- Best Practices: ____
- SEO: ____

**Did you meet all targets?** Great! Move to Step 7.

**If scores are low**:
- Try refreshing the page and running again
- First load is always slower
- Your scores should be good because the site is already optimized

---

# STEP 7: Submit to Google Classroom

## What you'll do:
Submit your 3 deliverables to Sir Molano.

## Actions:

### 7.1 Open a Text Document
Open Notepad (or Word):
- Press `Windows Key`
- Type: `notepad`
- Press `Enter`

### 7.2 Write Your Submission

Type this (fill in your info):

```
ACTIVITY 2 SUBMISSION
Christian Lozada
Web Architecture - Sir Molano

==========================================

DELIVERABLE 2.1: Static Site Generation ✅
Status: Complete
Framework: Next.js 14 (App Router)

DELIVERABLE 2.2: GitHub Repository and Deployment ✅

GitHub Repository:
https://github.com/YOUR-USERNAME/pangasinan-heritage-showcase

GitHub Pages Live Site:
https://YOUR-USERNAME.github.io/pangasinan-heritage-showcase/

DELIVERABLE 2.3: Lighthouse Audit Results ✅

Performance: ____ / 100
Accessibility: ____ / 100
Best Practices: ____ / 100
SEO: ____ / 100

Screenshot: See attached file

==========================================

All requirements completed.
All pages tested and working.
All scores meet or exceed targets.
```

### 7.3 Fill in Your Information
- Replace `YOUR-USERNAME` with your actual GitHub username
- Fill in your Lighthouse scores
- Save this file as `Activity-2-Submission.txt`

### 7.4 Go to Google Classroom
- Open browser
- Go to Google Classroom
- Find "Activity 2" assignment

### 7.5 Attach Files
Click "Add or create" → "File"

**Attach 2 files**:
1. `Activity-2-Submission.txt` (your text file)
2. `lighthouse-results.png` (or .pdf) (your Lighthouse screenshot)

### 7.6 Submit
- Click **"Turn in"** button
- Click **"Turn in"** again to confirm

---

# ✅ YOU'RE DONE!

Congratulations! You've successfully:
- ✅ Built a static website
- ✅ Created a GitHub repository
- ✅ Deployed to GitHub Pages
- ✅ Tested performance with Lighthouse
- ✅ Submitted to Google Classroom

Your website is now LIVE on the internet! 🎉

---

## 🆘 Common Problems & Solutions

### Problem: "npm: command not found"
**Solution**: Node.js not installed or terminal not restarted
- Install Node.js from https://nodejs.org/
- Close ALL terminal windows
- Restart your computer
- Try again

### Problem: "git: command not found"
**Solution**: Git not installed
- Git usually comes with Node.js
- Or download from: https://git-scm.com/download/win
- Restart terminal after installing

### Problem: Can't push to GitHub (authentication failed)
**Solution**: Need Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: "Activity 2"
4. Check "repo" box
5. Click "Generate"
6. Copy the token
7. Use token as password when pushing

### Problem: GitHub Pages shows 404
**Solution**: Wait a few minutes
- First deployment takes 2-5 minutes
- Check Actions tab - make sure workflow is green ✅
- Refresh your browser

### Problem: Build fails
**Solution**: Clean and rebuild
```
cd "C:\Users\Christian Lozada\Downloads\Activity 1\pangasinan-heritage-showcase"
rmdir /s /q node_modules
rmdir /s /q .next
rmdir /s /q out
npm install
npm run build
```

### Problem: Images don't load on GitHub Pages
**Solution**: Already fixed! Your config has `images: { unoptimized: true }`
- If still broken, check browser console (F12) for errors
- Make sure images are in correct folder

### Problem: Lighthouse scores are low
**Solution**: Run it again
- Refresh the page first
- Clear cache (Ctrl + Shift + Delete)
- Run Lighthouse again
- First load is always slower

---

## 📞 Need Help?

**Check these files**:
1. This file (SIMPLE-STEP-BY-STEP.md)
2. DEPLOYMENT-GUIDE.md (more details)
3. SUBMISSION-CHECKLIST.md (complete checklist)

**Still stuck?**
- Take a screenshot of the error
- Ask Sir Molano or classmates
- Check the error message carefully - it usually tells you what's wrong

---

**You got this! Just follow the steps one by one.** 💪

**Student**: Christian Lozada  
**Activity**: 2 - GitHub Pages Deployment  
**Instructor**: Rey Molano
