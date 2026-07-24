# GitHub Packages Installation Guide

## ✅ Package Successfully Published

Your package `@techeelive/techee-website@1.0.1` is now available on GitHub Packages!

**Package Details:**
- Name: `@techeelive/techee-website`
- Latest Version: `1.0.1`
- Registry: `https://npm.pkg.github.com/`
- Package Size: ~729 KB
- Files: 22 files

## Installation Steps

### Step 1: Create a GitHub Personal Access Token (PAT)

GitHub Packages requires authentication to read packages. You need a Personal Access Token with `read:packages` scope.

**Via GitHub Web UI:**
1. Go to: https://github.com/settings/tokens?type=beta
2. Click **"Generate new token"**
3. Fill in:
   - **Token name**: `npm-read-packages`
   - **Expiration**: 30 days (or your preference)
4. Select scopes (scroll down):
   - ✅ `read:packages` (READ packages from GitHub Packages)
5. Click **"Generate token"** at the bottom
6. **Copy the token** (you won't see it again!)

**Via GitHub CLI:**
```bash
gh auth token
```
This shows your current GitHub CLI token, which has the right permissions by default.

### Step 2: Configure npm

Choose ONE of these methods:

#### Method A: Using GitHub CLI Token (Easiest)

If you're already authenticated with GitHub CLI (`gh auth login`), npm can use that token:

```bash
# Set up npm to use GitHub Packages registry
npm config set @techeelive:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken $(gh auth token)
```

#### Method B: Using Personal Access Token

Store your token in `~/.npmrc`:

```bash
cat > ~/.npmrc << EOF
@techeelive:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
EOF
```

Replace `YOUR_PERSONAL_ACCESS_TOKEN` with the token you created in Step 1.

#### Method C: Environment Variable

```bash
export NPM_TOKEN="YOUR_PERSONAL_ACCESS_TOKEN"
npm config set //npm.pkg.github.com/:_authToken $NPM_TOKEN
npm config set @techeelive:registry https://npm.pkg.github.com
```

### Step 3: Install the Package

Once configured, install with:

```bash
# Latest version
npm install @techeelive/techee-website

# Specific version
npm install @techeelive/techee-website@1.0.1

# In a project's package.json
npm install --save @techeelive/techee-website@^1.0.1
```

### Step 4: Verify Installation

```bash
npm list @techeelive/techee-website
```

You should see:
```
techee-website@1.0.0 /Users/ay/Desktop/dev/techee/website
└── @techeelive/techee-website@1.0.1
```

## Using in package.json

Add to your project's `package.json`:

```json
{
  "dependencies": {
    "@techeelive/techee-website": "^1.0.1"
  }
}
```

Then run: `npm install`

## Scopes Explained

When creating a Personal Access Token, different scopes give different permissions:

| Scope | Permission | Use Case |
|-------|-----------|----------|
| `read:packages` | Read/Download packages | **Install packages** ← You need this |
| `write:packages` | Publish/Update packages | Publish new versions |
| `delete:packages` | Delete package versions | Remove versions |

For **installing** packages, you need **`read:packages`** scope only.

## Troubleshooting

### Issue: `403 Forbidden`

**Cause**: Token doesn't have `read:packages` scope or is expired.

**Solution**:
1. Create a new token at: https://github.com/settings/tokens?type=beta
2. **Verify** it has `read:packages` checked
3. Update `~/.npmrc` with the new token
4. Clear npm cache: `npm cache clean --force`
5. Try again: `npm install`

### Issue: `404 Not Found`

**Cause**: Registry not configured correctly.

**Solution**:
```bash
# Verify configuration
npm config get @techeelive:registry
# Should output: https://npm.pkg.github.com/

npm config get //npm.pkg.github.com/:_authToken
# Should output your token (or part of it)
```

### Issue: Token "does not match expected scopes"

**Cause**: Token doesn't have `read:packages` permission.

**Solution**:
1. Go to: https://github.com/settings/tokens
2. Find your token
3. Click **Edit**
4. Scroll to "Scopes" and check `read:packages`
5. Click **Update token**
6. Update `~/.npmrc` if using a different token

### Issue: `always-auth warning`

You may see this warning:
```
npm warn Unknown user config "always-auth"
```

This is harmless and can be fixed by removing that config:
```bash
npm config delete always-auth
```

## Checking npm Configuration

To verify your npm setup:

```bash
# Check registry for @techeelive packages
npm config get @techeelive:registry

# Check authentication token exists
npm config get //npm.pkg.github.com/:_authToken

# View full npm config
npm config list
```

## Publishing New Versions

When a new version is released, it will automatically be published to GitHub Packages by the GitHub Actions workflow. Simply create a new release:

```bash
gh release create v1.0.2 --title "Version 1.0.2" --notes "Release notes"
```

The workflow will:
1. Detect the new release
2. Build the project
3. Publish version 1.0.2 to GitHub Packages
4. Update the latest tag

You can then install the new version:

```bash
npm install @techeelive/techee-website@^1.0.2
```

## Using GitHub CLI Token

The easiest way is to use your GitHub CLI authentication, which you've already set up:

```bash
# Configure once
npm config set @techeelive:registry https://npm.pkg.github.com
npm config set //npm.pkg.github.com/:_authToken $(gh auth token)

# Now install packages
npm install @techeelive/techee-website
```

This works because `gh auth token` returns your authenticated GitHub token, which already has all necessary permissions.

## Next Steps

1. **Install the package**: Follow Steps 1-3 above
2. **Use in a project**: Add to `package.json` and run `npm install`
3. **Report issues**: https://github.com/techeelive/techee-website/issues
4. **Check releases**: https://github.com/techeelive/techee-website/releases

## Package Contents

The published npm package includes:

```
@techeelive/techee-website/
├── dist/              # Production build
├── src/               # React components
├── api/               # Vercel serverless functions
├── public/            # Static assets
├── package.json       # Dependencies
├── README.md          # Documentation
├── PUBLISH.md         # Publishing guide
└── ...
```

You can access these files after installing:

```javascript
// In a Node.js project
const pkg = require('@techeelive/techee-website/package.json');
console.log(pkg.version); // "1.0.1"
```

## Support

For issues with:
- **Package installation**: See troubleshooting above
- **GitHub Packages**: https://docs.github.com/en/packages
- **This project**: https://github.com/techeelive/techee-website/issues
