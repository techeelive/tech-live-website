# Publishing Guide

This guide explains how to publish the Tech.Live website package to GitHub Packages.

## Automated Publishing with GitHub Actions

The project includes a GitHub Actions workflow that automatically publishes the package when:
1. A GitHub Release is created
2. Changes are pushed to `main` that include updates to `package.json` or `package-lock.json`

### How to Publish a New Release

#### Option 1: Using GitHub Web Interface

1. Go to [GitHub Releases](https://github.com/techeelive/techee-website/releases)
2. Click **"Create a new release"**
3. Enter:
   - **Tag version**: `v1.0.1` (or next version)
   - **Release title**: `Version 1.0.1`
   - **Description**: List changes/features
4. Click **"Publish release"**
5. GitHub Actions automatically publishes to GitHub Packages

#### Option 2: Using GitHub CLI

```bash
# Tag a new release
git tag -a v1.0.1 -m "Version 1.0.1: Add new features"
git push origin v1.0.1

# Or create release directly
gh release create v1.0.1 --title "Version 1.0.1" --notes "Release notes here"
```

### Checking Publication Status

1. Go to [Workflow Runs](https://github.com/techeelive/techee-website/actions)
2. Find the "Publish to GitHub Packages" workflow
3. Check the status (green ✅ = success, red ❌ = failed)

### Manual Publishing

If needed, you can manually publish from your local machine:

```bash
# First, authenticate with GitHub Packages
npm login --registry=https://npm.pkg.github.com

# Then publish
npm publish
```

You'll be prompted for:
- **Username**: Your GitHub username
- **Password**: Your GitHub Personal Access Token (PAT)
- **Email**: Your GitHub email

#### Creating a GitHub Personal Access Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Click **"Generate new token"**
3. Select scopes:
   - `write:packages` (publish packages)
   - `read:packages` (read packages)
   - `delete:packages` (delete packages)
4. Click **"Generate token"**
5. Copy the token (you won't see it again)
6. Use the token as your password when prompted

## Using the Published Package

Once published to GitHub Packages, others can install it with:

```bash
npm install @techeelive/techee-website
```

### In Other Projects

Add to `package.json`:

```json
{
  "dependencies": {
    "@techeelive/techee-website": "^1.0.1"
  }
}
```

Then configure npm to authenticate with GitHub Packages. Create `~/.npmrc`:

```
@techeelive:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## Package Contents

The published package includes:
- **dist/** - Production build (React bundle + CSS)
- **src/** - Source code (React components, CSS, main entry point)
- **api/** - Vercel serverless functions
- **package.json** - Dependencies and metadata
- **README.md** - Documentation
- **LICENSE** - MIT license

## Version Management

Follow semantic versioning (MAJOR.MINOR.PATCH):

- **MAJOR** (1.x.x) → Breaking changes
- **MINOR** (x.1.x) → New features (backward compatible)
- **PATCH** (x.x.1) → Bug fixes

Example release progression:
- 1.0.0 → 1.0.1 (bug fix)
- 1.0.0 → 1.1.0 (new feature)
- 1.0.0 → 2.0.0 (breaking change)

## Package Visibility

The package is **private by default** (only visible to authenticated users). To make it public:

1. Go to Package Settings (on GitHub Packages page)
2. Change visibility to "Public"
3. Everyone can then install without authentication

## Troubleshooting

### "npm ERR! 403 Forbidden"

**Cause**: Authentication token doesn't have write permissions.

**Solution**:
1. Check your GitHub token has `write:packages` scope
2. Regenerate the token if needed
3. Update `~/.npmrc` with new token

### "npm ERR! 404 Not Found"

**Cause**: Package not found or wrong registry.

**Solution**:
1. Verify `publishConfig.registry` in package.json
2. Check package name is `@techeelive/techee-website`
3. Ensure you're authenticated

### Workflow Failed

**Cause**: Check workflow logs on GitHub Actions.

**Solution**:
1. Go to [Actions tab](https://github.com/techeelive/techee-website/actions)
2. Click failed run
3. Expand log to see error details
4. Common issues:
   - Missing Node.js version in environment
   - Build failed (check npm run build)
   - Missing GITHUB_TOKEN (automatically provided)

## CI/CD Integration

The workflow includes:
- Automatic build (`npm run build`)
- Dependency installation (`npm ci`)
- Publishing to GitHub Packages
- Deployment annotations for tracking

All steps use Node.js v24 to match project requirements.

## Next Steps

1. Create a new release: https://github.com/techeelive/techee-website/releases/new
2. Monitor publishing: https://github.com/techeelive/techee-website/actions
3. View published package: https://github.com/techeelive/techee-website/packages

---

For more information on GitHub Packages:
- [GitHub Packages Documentation](https://docs.github.com/en/packages)
- [Publishing to GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
