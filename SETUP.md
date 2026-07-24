# Developer Setup Guide

This guide will help you get the Tech.Live website running on your local machine.

## System Requirements

- **Node.js**: v24.0.0 or higher
- **npm**: v10.0.0 or higher
- **Git**: v2.0.0 or higher
- **RAM**: 2GB minimum
- **Disk Space**: 500MB minimum

## Step 1: Verify Your System

Before starting, verify all required tools are installed:

```bash
node --version    # Should output v24.x.x or higher
npm --version     # Should output 10.x.x or higher
git --version     # Should output 2.x.x or higher
```

If any tool is missing, download and install it:
- **Node.js**: https://nodejs.org/ (installs npm automatically)
- **Git**: https://git-scm.com/

## Step 2: Clone the Repository

```bash
git clone https://github.com/techeelive/techee-website.git
cd techee-website
```

## Step 3: Set Node Version (Optional but Recommended)

If you use NVM (Node Version Manager), run:

```bash
nvm use
```

Or with nodenv:

```bash
nodenv install
```

This will automatically switch to Node.js v24.

## Step 4: Install Dependencies

```bash
npm install
```

This installs all required packages:
- React & React DOM
- Express.js
- Vite
- Development tools

The installation creates a `node_modules/` directory (~400MB).

## Step 5: Verify Installation

Check that all dependencies are properly installed:

```bash
npm list
```

You should see a tree of all installed packages without errors.

## Step 6: Start Development Server

Start both the frontend (Vite) and backend (Express) simultaneously:

```bash
npm run dev
```

You should see output like:

```
  VITE v5.4.21  ready in 456 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help

✓ Server running on http://localhost:5001
```

## Step 7: Open in Browser

Navigate to: **http://localhost:5173/**

The page should load with full styling and functionality.

## Common Commands

### Development
```bash
npm run dev        # Start dev server (Vite + Express)
npm run server     # Start Express backend only
```

### Build & Deploy
```bash
npm run build      # Build for production
npm run preview    # Preview production build locally
```

### Clean Install
```bash
rm -rf node_modules package-lock.json
npm install
```

## Environment Variables

Currently, the project doesn't require environment variables for local development.

For production deployment on Vercel, analytics tracking (Google Analytics ID) is embedded in the HTML.

## Troubleshooting

### Issue: "Command not found: npm"

**Solution**: Node.js and npm are not installed or not in your PATH.
- Download and install Node.js: https://nodejs.org/
- Restart your terminal/IDE
- Verify: `npm --version`

### Issue: Port 5173 already in use

**Solution**: Stop the process using that port:

```bash
# On macOS/Linux:
lsof -ti:5173 | xargs kill -9

# On Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

### Issue: "ERR! code ERESOLVE" during npm install

**Solution**: Clear npm cache and reinstall:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: Build errors after updating dependencies

**Solution**: Ensure you're on Node.js v24:

```bash
node --version
npm --version
```

If using NVM:

```bash
nvm use
npm install
```

### Issue: React not rendering

**Solution**: Check browser console for errors. Make sure:
1. Vite server is running on port 5173
2. No JavaScript errors in console
3. React bundle loaded: Check Network tab for `/assets/index-*.js`

## Performance Notes

- First build takes ~30 seconds
- Subsequent builds are cached (~2 seconds)
- Dev server hot-reload takes ~1 second
- Production bundle size: ~154KB (gzipped: ~49KB)

## Next Steps

1. Read the [main README.md](README.md) for project overview
2. Check [api/](api/) for API endpoint details
3. Explore [src/](src/) for React component structure
4. Review [vercel.json](vercel.json) for deployment config

## Getting Help

- **Report Issues**: https://github.com/techeelive/techee-website/issues
- **Contact**: https://techee.live/#contact
- **Documentation**: See [README.md](README.md)

## Running Tests

Currently, the project doesn't have automated tests configured. To add tests:

```bash
npm install --save-dev vitest @testing-library/react
```

Then create test files in `src/` with `.test.jsx` extension.

## Code Style

The project uses standard JavaScript/React conventions:
- Use const/let (no var)
- Arrow functions where appropriate
- JSX for React components
- CSS custom properties for theming

## Commits

After making changes, commit with clear messages:

```bash
git add .
git commit -m "Add feature: description"
git push origin main
```

Changes pushed to `main` automatically deploy to https://techee.live via Vercel CI/CD.

---

**Happy coding!** 🚀
