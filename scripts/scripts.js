/**
 * Global scripts for Volvo home page
 * Handles block loading, decoration, and initialization
 */

/**
 * Load and decorate blocks dynamically
 * @param {HTMLElement} block - The block element to decorate
 */
function loadBlock(block) {
  const blockName = block.getAttribute('data-block-name');
  if (blockName) {
    const blockPath = `/blocks/${blockName}/${blockName}.js`;
    import(blockPath)
      .then((module) => {
        if (module.default) {
          module.default(block);
        }
      })
      .catch((error) => {
        console.error(`Error loading block: ${blockName}`, error);
      });
  }
}

/**
 * Initialize page - load all blocks
 */
function initPage() {
  document.querySelectorAll('[data-block-name]').forEach((block) => {
    loadBlock(block);
  });
}

/**
 * Initialize on DOMContentLoaded or if document is already loaded
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}

/**
 * Web Vitals tracking for performance monitoring
 * Logs Core Web Vitals: LCP, CLS, FID
 */
function trackWebVitals() {
  try {
    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', entry.processingDuration);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    }
  } catch (error) {
    console.warn('Web Vitals tracking not supported in this browser');
  }
}

trackWebVitals();

export { loadBlock, initPage, trackWebVitals };
