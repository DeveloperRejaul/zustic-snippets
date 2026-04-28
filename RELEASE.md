# Zustic Snippets Release Configuration

This file contains important information for managing releases.

## Current Version
The version is managed in `package.json` and follows Semantic Versioning (MAJOR.MINOR.PATCH).

## Release Checklist

Before releasing:
- [ ] Update `CHANGELOG.md` with new features/fixes
- [ ] Test all snippets in VS Code
- [ ] Verify no breaking changes
- [ ] Update `package.json` version (or let the workflow do it)

## How to Release

### Option 1: Using GitHub Actions (Recommended)
1. Go to GitHub Actions
2. Select "Publish to VS Code Marketplace"
3. Click "Run workflow"
4. Choose release type and confirm

### Option 2: Manual Tag
```bash
# Make sure you have the latest code
git pull

# Update CHANGELOG.md manually
# Commit changes
git add CHANGELOG.md
git commit -m "docs: update changelog for v1.0.1"

# Create tag (change version as needed)
git tag -a v1.0.1 -m "Release v1.0.1"

# Push to trigger the workflow
git push origin main v1.0.1
```

## Snippet Prefixes

### JavaScript (`zs`, `zsm`)
- `zs` - Zustic counter store (basic)
- `zsm` - Zustic logger middleware

### TypeScript (`zs`, `zsm`)
- `zs` - Zustic counter store with TypeScript interface
- `zsm` - Zustic middleware logger with types

## Support

For issues or suggestions, visit:
https://github.com/DeveloperRejaul/zustic-snippets/issues
