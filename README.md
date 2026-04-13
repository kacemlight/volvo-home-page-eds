# Volvo Home Page — Edge Delivery Services (EDS)

A modern, responsive homepage for Volvo Cars built with Adobe Edge Delivery Services.

## Project Structure

```
├── blocks/              # EDS Block Components
│   ├── hero/           # Hero banner block
│   ├── features/       # Features grid block
│   ├── product-showcase/ # Product showcase block
│   ├── cta/            # Call-to-action block
│   └── footer/         # Footer block
├── styles/             # Global stylesheets
├── scripts/            # Global JavaScript
├── index.html          # Main page template
├── fstab.yaml          # EDS configuration
├── wrangler.toml       # Cloudflare Worker config
├── package.json        # Project dependencies
└── README.md          # This file
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
git clone https://github.com/kacemlight/volvo-home-page-eds.git
cd volvo-home-page-eds
npm install
```

### Development

```bash
npm start
```

This starts a local development server at `http://localhost:8000` with live reload.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Block Scaffolds

Each block includes:
- `[block-name].css` — Block-specific styles
- `[block-name].js` — Block decoration and interactivity logic

### Hero Block
Large banner with heading, subheading, and call-to-action button.

### Features Block
Grid of feature cards showcasing Volvo's key selling points.

### Product Showcase Block
Featured product section with image and description.

### CTA Block
Call-to-action section with primary and secondary buttons.

### Footer Block
Multi-column footer with links and copyright information.

## Core Web Vitals Optimization

- **LCP (Largest Contentful Paint):** Optimized via image lazy-loading and asynchronous script loading
- **CLS (Cumulative Layout Shift):** Fixed dimensions and proper spacing
- **FID (First Input Delay):** Minimal blocking JavaScript; event delegation

## Accessibility

All blocks include:
- Semantic HTML5 markup
- ARIA labels and roles
- Keyboard navigation support
- Reduced motion preferences

## Configuration

### fstab.yaml
Configures the content source (Google Drive folder). Update `YOUR_DRIVE_FOLDER_ID` with the actual folder ID.

### wrangler.toml
Cloudflare Worker configuration. Update zone IDs and routes for your domain.

## Deployment

1. Update `fstab.yaml` with your content source
2. Update `wrangler.toml` with your Cloudflare credentials
3. Push to main branch
4. EDS will automatically deploy to the staging URL:
   - Preview: `https://main--volvo-home-page-eds--kacemlight.hlx.page/`
   - Live: `https://main--volvo-home-page-eds--kacemlight.hlx.live/`

## Preview URLs

- **Development:** `http://localhost:8000`
- **Staging (Preview):** `https://main--volvo-home-page-eds--kacemlight.hlx.page/`
- **Production (Live):** `https://main--volvo-home-page-eds--kacemlight.hlx.live/`

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -am 'Add your feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Submit a pull request

## Code Style

- Use semicolons in JavaScript
- Use 2-space indentation
- Follow CSS BEM naming convention where applicable
- Always test responsive design (mobile, tablet, desktop)

## Performance Targets

- LCP: < 2.5s
- CLS: < 0.1
- FID: < 100ms
- Lighthouse Score: > 90

## Support

For issues or questions, please open an issue on GitHub.

## License

MIT License - see LICENSE file for details
