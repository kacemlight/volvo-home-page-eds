/**
 * Global Scripts for Volvo Home Page EDS
 * Handles common functionality across all blocks
 */

// Utility: Lazy load images
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }
}

// Utility: Add smooth scroll behavior
export function setupSmoothScroll() {
  document.documentElement.style.scrollBehavior = 'smooth';
}

// Utility: Handle mobile menu toggle
export function setupMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('nav');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      navigation.classList.toggle('open');
      menuToggle.setAttribute(
        'aria-expanded',
        navigation.classList.contains('open')
      );
    });
  }
}

// Utility: Track Core Web Vitals
export function trackCoreWebVitals() {
  if ('web-vital' in window) {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = window['web-vital'];

    getCLS((metric) => {
      console.log('CLS:', metric.value);
    });

    getFID((metric) => {
      console.log('FID:', metric.value);
    });

    getLCP((metric) => {
      console.log('LCP:', metric.value);
    });
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
    setupSmoothScroll();
    setupMobileMenu();
  });
} else {
  lazyLoadImages();
  setupSmoothScroll();
  setupMobileMenu();
}

// Export for external use
window.volvoCars = {
  lazyLoadImages,
  setupSmoothScroll,
  setupMobileMenu,
  trackCoreWebVitals,
};
