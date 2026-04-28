# Publishing Guide for Zustic Snippets

This guide explains how to publish the extension to the VS Code Marketplace and manage releases using GitHub Actions.

## Prerequisites

1. **VS Code Marketplace Account**
   - Visit https://marketplace.visualstudio.com/
   - Sign in or create an account with your Microsoft account

2. **Personal Access Token (PAT)**
   - Go to https://dev.azure.com/
   - Navigate to User Settings > Personal access tokens
   - Create a new token with scope "Marketplace (manage)" and "All accessible organizations"
   - Copy the token

3. **GitHub Repository Setup**
   - Ensure your GitHub repository is public
   - Go to Settings > Secrets and variables > Actions
   - Add a new secret named `VSCE_TOKEN` and paste your VS Code PAT

## Manual Publishing

To publish manually:

```bash
# Install VSCE globally
npm install -g @vscode/vsce

# Login to marketplace (first time only)
vsce login DeveloperRejaul

# Create VSIX package
npm run vscode:prepublish
vsce package

# Publish with patch version bump
npm run publish:patch

# Or publish with specific version type
npm run publish:minor
npm run publish:major
```

## Automated Publishing with GitHub Actions

### Method 1: Using Tags (Recommended)

When you push a tag matching `v*.*.*` pattern, the workflow will automatically:
- Package the extension
- Publish to VS Code Marketplace
- Create a GitHub Release

```bash
# Create and push a tag
git tag v1.0.1
git push origin v1.0.1
```

### Method 2: Using Workflow Dispatch

You can manually trigger releases from the GitHub Actions tab:

1. Go to your repository on GitHub
2. Click "Actions" tab
3. Select "Publish to VS Code Marketplace" workflow
4. Click "Run workflow"
5. Choose release type (major, minor, or patch)
6. Click "Run workflow"

The workflow will:
- Calculate the new version number
- Update `package.json`
- Commit and push the changes
- Create and push a new tag
- The main publish workflow will then trigger automatically

## Workflow Files

### `.github/workflows/publish.yml`
Main workflow that handles:
- Packaging the extension as VSIX
- Publishing to VS Code Marketplace
- Uploading release artifacts to GitHub

### `.github/workflows/release.yml`
Triggered when tags are created:
- Automatically generates release notes from commits
- Creates a GitHub Release

## Environment Variables & Secrets

Required secret in GitHub:
- `VSCE_TOKEN`: Your VS Code Marketplace Personal Access Token

## Version Management

The version in `package.json` is the source of truth. When using the workflow dispatch:
- Enter the desired release type (major/minor/patch)
- The workflow automatically calculates the new version
- It updates `package.json`, commits, and creates a tag

## Checking Marketplace Status

After publishing, you can verify at:
https://marketplace.visualstudio.com/items?itemName=DeveloperRejaul.zustic-snippets

## Troubleshooting

### "VSCE_TOKEN not found"
- Ensure the secret is added to your GitHub repository
- The secret name must be exactly `VSCE_TOKEN`

### "Publisher name mismatch"
- The `publisher` field in `package.json` must match your Marketplace account ID
- Currently set to `DeveloperRejaul`

### "Tag already exists"
- If pushing the same tag fails, delete the local and remote tag first:
  ```bash
  git tag -d v1.0.1
  git push origin :refs/tags/v1.0.1
  ```

## Next Steps

1. Add your `VSCE_TOKEN` to GitHub repository secrets
2. Update the version in `package.json` when ready to release
3. Either push a tag or use workflow dispatch to publish
4. Monitor the GitHub Actions for successful completion

For more information, see:
- [VS Code Extension Publishing](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [VSCE Documentation](https://github.com/microsoft/vscode-vsce)
