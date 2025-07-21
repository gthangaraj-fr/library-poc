# GitHub Workflow Setup Guide

## Required Secrets

To use the "Patch and Publish" workflow, you need to set up the following secrets in your GitHub repository:

### 1. NPM_TOKEN (Required for publishing)

1. Go to [npmjs.com](https://www.npmjs.com) and log in
2. Click on your profile → "Access Tokens"
3. Click "Generate New Token" → "Classic Token"
4. Select "Automation" type
5. Copy the generated token
6. In your GitHub repo, go to Settings → Secrets and variables → Actions
7. Click "New repository secret"
8. Name: `NPM_TOKEN`
9. Value: Paste your npm token

### 2. GITHUB_TOKEN (Automatically provided)

This is automatically provided by GitHub Actions, no setup needed.

## How to Use the Workflow

1. **Manual Trigger**: Go to Actions tab → "Patch and Publish" → "Run workflow"
2. **Choose Version Bump**:
   - `patch`: 1.0.0 → 1.0.1 (bug fixes)
   - `minor`: 1.0.0 → 1.1.0 (new features)
   - `major`: 1.0.0 → 2.0.0 (breaking changes)

## What the Workflow Does

1. ✅ **Builds** the library
2. ✅ **Bumps version** in package.json
3. ✅ **Generates CHANGELOG.md** with commit history
4. ✅ **Creates Git tag** with new version
5. ✅ **Pushes changes** to main branch
6. ✅ **Publishes to npm** with new version
7. ✅ **Creates GitHub Release** with changelog

## First Time Setup

Before using the workflow:

```bash
# Make sure you're logged into npm
npm login

# Verify your package name is available
npm view @gthangaraj-fr/react-button-library
# Should return 404 if available
```

## Workflow Permissions

Make sure your repository has the following permissions enabled:

1. Go to Settings → Actions → General
2. Under "Workflow permissions":
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

## Troubleshooting

- **NPM Publish Fails**: Check if NPM_TOKEN is set correctly
- **Git Push Fails**: Ensure the workflow has write permissions (see above)
- **Version Already Exists**: Make sure you haven't already published that version
- **Tag Already Exists**: Delete the existing tag if you need to republish

### Common Issues

1. **Permission denied (publickey)**: The workflow uses GITHUB_TOKEN automatically
2. **npm ERR! 403 Forbidden**: Check your NPM_TOKEN and ensure it has publish permissions
3. **npm ERR! You cannot publish over the previously published versions**: Bump the version number

## Manual Publishing (Alternative)

If you prefer manual publishing:

```bash
# Build the library
npm run build

# Bump version
npm version patch  # or minor/major

# Publish to npm
npm publish --access public

# Push changes and tags
git push origin main --follow-tags
```
