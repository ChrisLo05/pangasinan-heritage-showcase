# GitHub Setup Script for Activity 2
# Run this script in PowerShell

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Activity 2 - GitHub Setup" -ForegroundColor Cyan
Write-Host "  Pangasinan Heritage Showcase" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Build the site
Write-Host "Step 1: Building static site..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed! Please check for errors." -ForegroundColor Red
    exit 1
}

Write-Host "✓ Build successful!" -ForegroundColor Green
Write-Host ""

# Step 2: Initialize git
Write-Host "Step 2: Initializing Git repository..." -ForegroundColor Yellow

if (Test-Path .git) {
    Write-Host "Git already initialized" -ForegroundColor Green
} else {
    git init
    Write-Host "✓ Git initialized!" -ForegroundColor Green
}

Write-Host ""

# Step 3: Add files
Write-Host "Step 3: Adding files to Git..." -ForegroundColor Yellow
git add .
Write-Host "✓ Files added!" -ForegroundColor Green
Write-Host ""

# Step 4: Commit
Write-Host "Step 4: Creating initial commit..." -ForegroundColor Yellow
git commit -m "Activity 2 - Initial deployment with static site generation"
Write-Host "✓ Commit created!" -ForegroundColor Green
Write-Host ""

# Step 5: Prompt for GitHub username
Write-Host "Step 5: GitHub Repository Setup" -ForegroundColor Yellow
Write-Host ""
Write-Host "Please enter your GitHub username:" -ForegroundColor Cyan
$githubUsername = Read-Host

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  NEXT STEPS:" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Create a new repository on GitHub:" -ForegroundColor Yellow
Write-Host "   https://github.com/new" -ForegroundColor White
Write-Host ""
Write-Host "2. Repository settings:" -ForegroundColor Yellow
Write-Host "   Name: pangasinan-heritage-showcase" -ForegroundColor White
Write-Host "   Visibility: PUBLIC" -ForegroundColor White
Write-Host "   Do NOT initialize with README" -ForegroundColor White
Write-Host ""
Write-Host "3. After creating, run these commands:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   git remote add origin https://github.com/$githubUsername/pangasinan-heritage-showcase.git" -ForegroundColor Cyan
Write-Host "   git branch -M main" -ForegroundColor Cyan
Write-Host "   git push -u origin main" -ForegroundColor Cyan
Write-Host ""
Write-Host "4. Your live site will be at:" -ForegroundColor Yellow
Write-Host "   https://$githubUsername.github.io/pangasinan-heritage-showcase/" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Ready to push to GitHub!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
