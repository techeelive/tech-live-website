# Tech.Live - Technology News & Tutorials Platform

A modern, full-stack technology news and educational platform built with React, Vite, and Express.js. Deployed on Vercel with serverless functions for API endpoints.

![Tech.Live](https://techee.live/logo.svg)

## Features

- 📰 **Tech News & Tutorials** - Curated content on web development, AI, cloud computing, and more
- 🎨 **Modern UI/UX** - Responsive design with smooth scrolling and interactive elements
- 📧 **Contact Form** - Built-in contact system with serverless API
- 🔍 **SEO Optimized** - Comprehensive meta tags, structured data, and sitemap
- 📊 **Google Analytics** - Track user engagement and page views
- 🚀 **High Performance** - Optimized bundle sizes and fast load times
- 🌐 **Live Domain** - Available at https://techee.live

## Tech Stack

### Frontend
- **React** 18.3.1 - UI framework
- **Vite** 5.4.10 - Build tool and dev server
- **CSS3** - Modern styling with CSS custom properties

### Backend
- **Express.js** 4.22.2 - Node.js web framework
- **CORS** 2.8.6 - Cross-origin resource sharing

### Deployment
- **Vercel** - Frontend and serverless functions
- **Node.js** 24.x+ - Runtime environment

### Tools & Services
- **Git/GitHub** - Version control
- **Google Analytics** - Analytics tracking
- **Google Fonts** - Typography (Inter font family)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 24.x or higher ([Download](https://nodejs.org/))
- **npm** 10.x or higher (comes with Node.js)
- **Git** 2.x or higher ([Download](https://git-scm.com/))

### Verify Installation

```bash
node --version  # Should be v24.x.x or higher
npm --version   # Should be 10.x.x or higher
git --version   # Should be 2.x.x or higher
```

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/techeelive/techee-website.git
   cd techee-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm list
   ```

## Development

### Start Development Server

Run both the Vite dev server and Express backend simultaneously:

```bash
npm run dev
```

This will:
- Start Vite dev server on `http://localhost:5173`
- Start Express backend on `http://localhost:5001`
- Proxy API calls from `/api` to the backend

### View the App

Open your browser and navigate to: `http://localhost:5173`

### Available Routes

- **Frontend**: `http://localhost:5173/`
- **API Health**: `http://localhost:5173/api/health`
- **Contact API**: `http://localhost:5173/api/contact`

## Build

### Production Build

Create an optimized production build:

```bash
npm run build
```

This generates:
- Minified HTML, CSS, and JavaScript
- Optimized asset hashing for caching
- Output directory: `dist/`

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

The project is configured for Vercel deployment with automatic CI/CD from GitHub.

1. **Push changes to GitHub**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Vercel auto-deploys** when changes are pushed to `main` branch

3. **Manual deploy** (optional)
   ```bash
   npx vercel --prod
   ```

### Environment

The project uses:
- Build command: `npm run build`
- Output directory: `dist/`
- Install command: `npm install`

## Project Structure

```
techee-website/
├── public/                 # Static assets
│   ├── logo.svg           # Brand logo
│   ├── robots.txt         # SEO robots configuration
│   ├── sitemap.xml        # XML sitemap for search engines
│   └── .well-known/       # Security.txt for security researchers
├── src/                   # React source code
│   ├── App.jsx            # Main React component
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── api/                   # Vercel serverless functions
│   ├── health.js          # Health check endpoint
│   └── contact.js         # Contact form handler
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── vercel.json            # Vercel deployment config
├── server.js              # Express backend (local dev)
├── package.json           # Dependencies and scripts
└── README.md              # This file
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server (Vite + Express) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run server` | Start Express backend only |

## SEO Features

- ✅ Comprehensive meta tags (description, keywords, robots)
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card tags for Twitter/X
- ✅ Structured data (JSON-LD) for search engines
- ✅ XML sitemap for search engine crawling
- ✅ robots.txt for crawler directives
- ✅ Canonical URLs to prevent duplicate content
- ✅ Google Analytics integration

## API Endpoints

### Health Check
```
GET /api/health
Response: { "status": "ok", "message": "Tech.Live backend is running" }
```

### Contact Form
```
POST /api/contact
Headers: Content-Type: application/json
Body: { "name": string, "email": string, "message": string }
Response: { "message": "Thank you for contacting us!" }
```

## Performance Optimization

- CSS and JS bundles minified and hashed
- Assets preloaded and prefetched
- Google Fonts optimized with preconnect
- Image optimization via responsive design
- Cache control headers configured

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Troubleshooting

### Port Already in Use

If port 5173 or 5001 is already in use:

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Kill process on port 5001
lsof -ti:5001 | xargs kill -9
```

### Dependencies Issues

If you encounter dependency issues:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Check Node.js and npm versions:

```bash
node --version  # Should be 24.x or higher
npm --version   # Should be 10.x or higher
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

For questions or support, visit: https://techee.live/#contact

---

**Repository**: https://github.com/techeelive/techee-website  
**Live Site**: https://techee.live  
**Last Updated**: July 24, 2026
