#!/bin/bash

# Zustic Snippets - Pre-Publishing Checklist
# Run this to verify everything is ready for publishing

echo "🔍 Checking Zustic Snippets Setup..."
echo ""

# Check if package.json exists and has correct publisher
if grep -q '"publisher": "DeveloperRejaul"' package.json; then
    echo "✅ Publisher correctly set to DeveloperRejaul"
else
    echo "❌ Publisher not set correctly in package.json"
fi

# Check if workflow files exist
if [ -f ".github/workflows/publish.yml" ]; then
    echo "✅ Publish workflow exists"
else
    echo "❌ Publish workflow missing"
fi

if [ -f ".github/workflows/release.yml" ]; then
    echo "✅ Release workflow exists"
else
    echo "❌ Release workflow missing"
fi

# Check if documentation files exist
for file in "README.md" "CHANGELOG.md" "PUBLISHING.md" "RELEASE.md" "CONTRIBUTING.md"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

# Check snippets files
for file in "snippets/javascript.json" "snippets/typescript.json"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
    fi
done

echo ""
echo "📋 Remaining Setup Tasks:"
echo "1. ⚠️  Create VS Code Marketplace account (if needed)"
echo "2. ⚠️  Generate Personal Access Token (PAT)"
echo "3. ⚠️  Add VSCE_TOKEN secret to GitHub repository"
echo "4. ⚠️  Commit all changes: git add . && git commit -m 'chore: setup marketplace publishing'"
echo "5. ⚠️  Create first release tag: git tag -a v1.0.0 -m 'Release v1.0.0'"
echo "6. ⚠️  Push to GitHub: git push origin main && git push origin v1.0.0"
echo ""
echo "✨ Once secrets are configured, releases will be automated!"
