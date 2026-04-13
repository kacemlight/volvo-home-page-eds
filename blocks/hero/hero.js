/**
 * Hero Block
 * Full-width hero banner with background image, headline, subheading, and CTA
 */

export default function decorate(block) {
  // Add hero block styling classes
  block.classList.add('hero-block');

  // Get content rows
  const rows = Array.from(block.children);

  // Hero block structure:
  // Row 1: Background image
  // Row 2: Headline
  // Row 3: Subheading
  // Row 4: CTA button text

  if (rows.length > 0) {
    // Process background image
    const bgCell = rows[0]?.querySelector('a');
    if (bgCell) {
      const bgUrl = bgCell.href;
      block.style.backgroundImage = `url('${bgUrl}')`;
      block.style.backgroundSize = 'cover';
      block.style.backgroundPosition = 'center';
    }

    // Create hero content wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('hero-content');

    // Extract and set headline
    if (rows[1]) {
      const headline = document.createElement('h1');
      headline.classList.add('hero-headline');
      headline.textContent = rows[1].textContent.trim();
      contentWrapper.appendChild(headline);
    }

    // Extract and set subheading
    if (rows[2]) {
      const subheading = document.createElement('p');
      subheading.classList.add('hero-subheading');
      subheading.textContent = rows[2].textContent.trim();
      contentWrapper.appendChild(subheading);
    }

    // Extract and set CTA button
    if (rows[3]) {
      const ctaLink = rows[3].querySelector('a');
      if (ctaLink) {
        const button = document.createElement('a');
        button.href = ctaLink.href;
        button.classList.add('hero-cta');
        button.textContent = ctaLink.textContent;
        contentWrapper.appendChild(button);
      }
    }

    // Clear block and append content wrapper
    block.innerHTML = '';
    block.appendChild(contentWrapper);
  }
}
