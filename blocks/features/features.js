/**
 * Features Block
 * Multi-column feature cards with icons, headings, and descriptions
 */

export default function decorate(block) {
  block.classList.add('features-block');

  // Get all feature rows
  const rows = Array.from(block.children);

  // Create features grid container
  const grid = document.createElement('div');
  grid.classList.add('features-grid');

  rows.forEach((row) => {
    const cells = Array.from(row.children);

    if (cells.length > 0) {
      const card = document.createElement('div');
      card.classList.add('feature-card');

      // Feature icon/image
      const iconCell = cells[0];
      if (iconCell) {
        const icon = document.createElement('div');
        icon.classList.add('feature-icon');
        const img = iconCell.querySelector('img');
        if (img) {
          icon.appendChild(img.cloneNode(true));
        } else {
          icon.textContent = iconCell.textContent.trim();
        }
        card.appendChild(icon);
      }

      // Feature heading
      if (cells[1]) {
        const heading = document.createElement('h3');
        heading.classList.add('feature-heading');
        heading.textContent = cells[1].textContent.trim();
        card.appendChild(heading);
      }

      // Feature description
      if (cells[2]) {
        const description = document.createElement('p');
        description.classList.add('feature-description');
        description.textContent = cells[2].textContent.trim();
        card.appendChild(description);
      }

      grid.appendChild(card);
    }
  });

  block.innerHTML = '';
  block.appendChild(grid);
}
