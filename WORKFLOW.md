# 🔄 Zustic Snippets - Publishing Workflow Diagram

## Automated Release Process

```
┌─────────────────────────────────────────────────────────────────┐
│                    YOUR DEVELOPMENT CYCLE                       │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ↓
                    Make code changes
                    Update CHANGELOG.md
                              │
                              ↓
        ┌───────────────────────────────────────┐
        │  OPTION A: GitHub UI (Recommended)   │
        │  ──────────────────────────────────  │
        │  1. Go to GitHub Actions            │
        │  2. Run "Publish to VS Code..." WF  │
        │  3. Select major/minor/patch        │
        │  4. Click "Run workflow"            │
        └───────────────────────────────────────┘
                              │
        ┌───────────────────────────────────────┐
        │  OPTION B: Git Tags                 │
        │  ──────────────────────────────────  │
        │  git tag -a v1.0.1 -m "Release"    │
        │  git push origin v1.0.1            │
        └───────────────────────────────────────┘
                              │
                              ↓
        ┌───────────────────────────────────────────────────────┐
        │        GitHub Actions Triggered on Tag               │
        │       (.github/workflows/publish.yml)               │
        └───────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴──────────────┐
                ↓                            ↓
        ┌──────────────┐          ┌──────────────────┐
        │ Build VSIX   │          │ Update Version   │
        │ Package      │          │ (if dispatch)    │
        └──────────────┘          └──────────────────┘
                │                        │
                ↓                        ↓
        ┌──────────────────────────────────────┐
        │ Publish to VS Code Marketplace      │
        │ (using VSCE_TOKEN secret)           │
        └──────────────────────────────────────┘
                │
                ↓
        ┌────────────────────────────────────────────┐
        │    GitHub Actions: release.yml            │
        │  Generate Release Notes & Create Release  │
        └────────────────────────────────────────────┘
                │
                ↓
        ┌────────────────────────────────────────────┐
        │ ✅ Published to VS Code Marketplace       │
        │ ✅ Released on GitHub with notes          │
        │ ✅ VSIX downloadable from release        │
        └────────────────────────────────────────────┘
                │
                ↓
        ┌────────────────────────────────────────────┐
        │ 🌐 Available for download immediately:    │
        │ marketplace.visualstudio.com/items/...   │
        └────────────────────────────────────────────┘
```

## Version Management Flow (Workflow Dispatch)

```
User clicks "Run workflow"
        │
        ↓
Select release type
(major/minor/patch)
        │
        ↓
Calculate new version:
  1.0.0 + patch = 1.0.1 ✓
  1.0.0 + minor = 1.1.0 ✓
  1.0.0 + major = 2.0.0 ✓
        │
        ↓
Update package.json
"version": "1.0.1"
        │
        ↓
Commit change
git commit -m "chore: bump version to 1.0.1"
        │
        ↓
Create and push tag
git tag -a v1.0.1
git push origin v1.0.1
        │
        ↓
Publish workflow triggered
        │
        ↓
(See main diagram above)
```

## File Structure

```
zustic-snippets/
│
├── 📄 Core Files
│   ├── package.json                    ← Version source of truth
│   ├── README.md                       ← Main documentation
│   └── LICENSE                         ← MIT License
│
├── 📚 Documentation
│   ├── CHANGELOG.md                    ← Version history
│   ├── PUBLISHING.md                   ← Detailed publishing guide
│   ├── RELEASE.md                      ← Release management
│   ├── CONTRIBUTING.md                 ← Contributor guide
│   ├── QUICKSTART.md                   ← Quick reference (YOU ARE HERE)
│   └── SETUP_COMPLETE.md               ← Technical details
│
├── 🔧 GitHub Actions
│   └── .github/workflows/
│       ├── publish.yml                 ← Main publishing workflow
│       └── release.yml                 ← Release notes generation
│
└── 💻 Snippets
    └── snippets/
        ├── javascript.json             ← JS snippets (zs, zsm)
        └── typescript.json             ← TS snippets (zs, zsm)
```

## Secrets Required

```
Repository Secrets (Settings → Secrets and variables → Actions)
│
└── VSCE_TOKEN
    ├── Source: Azure Dev (dev.azure.com)
    ├── Scope: Marketplace (manage)
    ├── Org: All accessible organizations
    └── Keep this private! 🔐
```

## Important URLs

```
📍 VS Code Marketplace
   https://marketplace.visualstudio.com/items?itemName=DeveloperRejaul.zustic-snippets

📍 GitHub Repository
   https://github.com/DeveloperRejaul/zustic-snippets

📍 Create PAT
   https://dev.azure.com (User Settings → Personal access tokens)

📍 VS Code Account
   https://marketplace.visualstudio.com (Sign in/Register)
```

## Quick Reference Commands

```bash
# View current version
npm version

# Create release tag
git tag -a v1.0.1 -m "Release v1.0.1: Description"

# Push code
git push origin main

# Push tag (triggers workflow)
git push origin v1.0.1

# View all tags
git tag -l

# Delete tag (if needed)
git tag -d v1.0.1
git push origin :refs/tags/v1.0.1

# Check workflow status
# Visit: GitHub → Actions → "Publish to VS Code Marketplace"
```

## Checklist for Each Release

- [ ] Code is complete and tested
- [ ] CHANGELOG.md updated with version and changes
- [ ] Commits are clear and descriptive
- [ ] All tests pass
- [ ] Version in package.json is correct (or let workflow update it)
- [ ] Push code: `git push origin main`
- [ ] Create tag: `git tag -a vX.X.X -m "Release vX.X.X"`
- [ ] Push tag: `git push origin vX.X.X`
- [ ] Monitor GitHub Actions for success
- [ ] Verify on VS Code Marketplace within 5 minutes

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Workflow fails to publish | Check `VSCE_TOKEN` secret is added correctly |
| Version not updating | Use "Run workflow" dispatch, not just tag push |
| Tag already exists | Delete and recreate: `git tag -d v1.0.1 && git push origin :v1.0.1` |
| Can't find extension on marketplace | Wait 5-10 minutes, refresh, or check URL spelling |
| Need to republish same version | Increment patch version (1.0.0 → 1.0.1) |

---

**Ready to publish? Follow QUICKSTART.md! 🚀**
