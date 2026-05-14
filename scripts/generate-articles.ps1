# Generate 399 new SEO articles and append to articles.ts
python "$PSScriptRoot\gen.py"
if ($?) {
    Write-Host "Script completed successfully" -ForegroundColor Green
} else {
    Write-Host "Script failed" -ForegroundColor Red
}
