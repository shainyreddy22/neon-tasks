# 🚀 Deployment Guide

This guide covers different ways to deploy NeonTasks to production.

## 📋 Table of Contents

- [Vercel (Recommended)](#vercel-recommended)
- [Netlify](#netlify)
- [GitHub Pages](#github-pages)
- [Docker](#docker)
- [Manual Deployment](#manual-deployment)

## 🌟 Vercel (Recommended)

Vercel offers the best experience for React applications with automatic deployments.

### Quick Deploy

1. **Push to GitHub** (follow the GitHub setup guide below)
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy with default settings

### Manual Deployment

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   npm run build
   vercel --prod
   ```

## 🎯 Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

3. **Or use Netlify Dashboard**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder

## 📚 GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/neontasks",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🐳 Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Build and Run

```bash
docker build -t neontasks .
docker run -p 3000:80 neontasks
```

## 🔧 Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder** to your web server

3. **Configure your web server** to serve the `index.html` for all routes

### Apache (.htaccess)

```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

### Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 🌐 Environment Variables

For production deployments, you might want to set environment variables:

```env
VITE_APP_TITLE=NeonTasks
VITE_APP_VERSION=1.0.0
VITE_API_URL=https://api.neontasks.com
```

## 📊 Performance Optimization

Before deploying, consider these optimizations:

1. **Bundle Analysis**:
   ```bash
   npm run build -- --analyze
   ```

2. **Lighthouse Audit**:
   - Run Lighthouse in browser dev tools
   - Optimize based on recommendations

3. **CDN Configuration**:
   - Set up proper caching headers
   - Use a CDN for static assets

## 🔒 Security Considerations

- Set proper CORS headers
- Use HTTPS in production
- Implement Content Security Policy (CSP)
- Keep dependencies updated

## 📈 Monitoring

Consider adding:
- Error tracking (Sentry)
- Analytics (Google Analytics, Plausible)
- Performance monitoring (Web Vitals)

## 🆘 Troubleshooting

### Common Issues

1. **White screen after deployment**:
   - Check browser console for errors
   - Verify base URL configuration

2. **404 errors on refresh**:
   - Configure server for SPA routing
   - Check deployment platform documentation

3. **Assets not loading**:
   - Verify base path in vite.config.ts
   - Check CORS configuration

### Support

If you encounter issues:
- Check the [Issues](https://github.com/yourusername/neontasks/issues) page
- Create a new issue with deployment details
- Join our community discussions