/**
 * Showcase Block
 * Product showcase with large image and content side-by-side
 */

export default function decorate(block) {
  block.classList.add('showcase-block');

  const rows = Array.from(block.children);

  // Create showcase container
  const container = document.createElement('div');
  container.classList.add('showcase-container');

  // Process showcase content
  let imageUrl = '';
  let title = '';
  let description = '';
  let ctaLink = '';
  let ctaText = '';

  rows.forEach((row, index) => {
    const cells = Array.from(row.children);

    if (index === 0 && cells[0]) {
      // Image cell
      const imgTag = cells[0].querySelector('img');
      if (imgTag) {
        imageUrl = imgTag.src;
      }
    } else if (index === 1 && cells[0]) {
      // Title cell
      title = cells[0].textContent.trim();
    } else if (index === 2 && cells[0]) {
      // Description cell
      description = cells[0].textContent.trim();
    } else if (index === 3 && cells[0]) {
      // CTA cell
      const link = cells[0].querySelector('a');
      if (link) {
        ctaText = link.textContent;
        ctaLink = link.href;
      }
    }
  });

  // Build showcase HTML
  if (imageUrl) {
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('showcase-image');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title || 'Product showcase';
    imageWrapper.appendChild(img);
    container.appendChild(imageWrapper);
  }

  const contentWrapper = document.createElement('div');
  contentWrapper.classList.add('showcase-content');

  if (title) {
    const heading = document.createElement('h2');
    heading.classList.add('showcase-title');
    heading.textContent = title;
    contentWrapper.appendChild(heading);
  }

  if (description) {
    const desc = document.createElement('p');
    desc.classList.add('showcase-description');
    desc.textContent = description;
    contentWrapper.appendChild(desc);
  }

  if (ctaLink) {
    const button = document.createElement('a');
    button.href = ctaLink;
    button.classList.add('showcase-cta');
    button.textContent = ctaText || 'Learn More';
    contentWrapper.appendChild(button);
  }

  container.appendChild(contentWrapper);

  block.innerHTML = '';
  block.appendChild(container);
}
