# Volvo Home Page EDS — Technical Specification

**Document Version:** 1.0  
**Date:** 2025  
**Owner:** David (Developer)  
**Status:** Ready for Implementation

---

## 1. Project Overview

This document defines the technical requirements for building the Volvo home page using Adobe Experience Manager (AEM) Edge Delivery Services (EDS). The page will be delivered as a high-performance, semantically structured HTML5 web property with Core Web Vitals compliance.

**Target URL:** https://www.volvocars.com/us/  
**Delivery Method:** EDS (GitHub-based content and configuration)

---

## 2. Environment & Build Tools

### 2.1 Required Node.js Version
- **Node.js:** v18.x LTS or higher
- **npm:** v9.x or higher

### 2.2 Build & Development Tools
- **EDS CLI:** Latest stable version
- **Webpack:** Included in EDS CLI
- **PostCSS:** For CSS processing and optimization
- **Babel:** For ES6+ transpilation
- **ESLint:** For code quality validation
- **Prettier:** For consistent code formatting

### 2.3 Local Development Setup
- **Development Server:** EDS CLI `aem up` command (localhost:3000)
- **Build Process:** `aem build` (static build for testing)
- **Deployment:** GitHub Actions (triggered on push to main branch)

---

## 3. Folder Structure & Architecture

```
volvo-home-page-eds/
├── blocks/                          # EDS block components
│   ├── hero/
│   │   ├── hero.js
│   │   ├── hero.css
│   │   └── README.md
│   ├── features/
│   │   ├── features.js
│   │   ├── features.css
│   │   └── README.md
│   ├── showcase/
│   │   ├── showcase.js
│   │   ├── showcase.css
│   │   └── README.md
│   ├── cta/
│   │   ├── cta.js
│   │   ├── cta.css
│   │   └── README.md
│   └── footer/
│       ├── footer.js
│       ├── footer.css
│       └── README.md
├── styles/
│   ├── styles.css
│   └── reset.css
├── content/
│   ├── index.md
│   └── metadata.json
├── scripts/
│   ├── scripts.js
│   └── lib/
│       └── utils.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── fstab.yaml
├── helix-config.json
├── .gitignore
└── README.md
```

---

## 4. Component Architecture & Block Types

### 4.1 Core Block Types

1. **Hero Block** — Full-width hero with background image, headline, subheading, CTA
2. **Features Block** — Multi-column feature cards (3-4 columns)
3. **Showcase Block** — Product showcase with image and content
4. **CTA Block** — Call-to-action banner with text and button
5. **Footer Block** — Site footer with links, copyright, and metadata

### 4.2 Block Development Pattern

Each block exports a default decoration function:

```javascript
export default function decorate(block) {
  // Block initialization logic
  // DOM manipulation
  // Event listeners
}
```

---

## 5. Content Delivery

- Content authored in Markdown (index.md)
- Content mapped via fstab.yaml to Google Drive or Sharepoint
- EDS processes Markdown into HTML blocks
- Blocks decorated by corresponding JS files

---

## 6. Performance & Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.5s
- **CLS (Cumulative Layout Shift):** < 0.1
- **FID (First Input Delay):** < 100ms

Optimization strategies:
- Image lazy loading and optimization
- CSS/JS code splitting
- Critical CSS inlining
- Async/defer for non-critical scripts

---

## 7. Deployment Pipeline

1. Push code to GitHub main branch
2. GitHub Actions triggers build
3. EDS CLI compiles blocks and content
4. Pages deployed to live URL
5. CDN caches assets

---

## 8. Success Criteria

✅ All blocks render correctly  
✅ Core Web Vitals thresholds met  
✅ Mobile and desktop responsive  
✅ Semantic HTML5 markup  
✅ No console errors  
✅ Accessibility compliance (WCAG 2.1 AA)  
