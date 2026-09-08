# Copy all files from /out to /docs for GitHub Pages deployment
Write-Host "Copying files from /out to /docs..." -ForegroundColor Cyan

# Remove old HTML files from docs (keep the markdown files)
Get-ChildItem -Path "docs" -Exclude "*.md" -Recurse | Remove-Item -Force -Recurse

# Copy everything from out to docs
Copy-Item -Path "out\*" -Destination "docs\" -Recurse -Force

Write-Host "✓ Files copied successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Run: git add docs" -ForegroundColor White
Write-Host "2. Run: git commit -m 'Deploy to GitHub Pages via /docs folder'" -ForegroundColor White
Write-Host "3. Run: git push" -ForegroundColor White
