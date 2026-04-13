/**
 * Footer Block
 * Site footer with links, copyright, and metadata
 */

export default function decorate(block) {
  block.classList.add('footer-block');

  // Get footer rows
  const rows = Array.from(block.children);

  // Create footer structure
  const footer = document.createElement('footer');
  footer.classList.add('footer-content');

  // Process footer columns/sections
  const columns = document.createElement('div');
  columns.classList.add('footer-columns');

  rows.forEach((row) => {
    const cells = Array.from(row.children);

    // Each row becomes a footer column
    if (cells.length > 0) {
      const column = document.createElement('div');
      column.classList.add('footer-column');

      cells.forEach((cell) => {
        // Process links and text
        const links = Array.from(cell.querySelectorAll('a'));
        const text = cell.textContent.trim();

        if (text && !links.length) {
          // Plain text (heading or section title)
          const heading = document.createElement('h4');
          heading.classList.add('footer-heading');
          heading.textContent = text;
          column.appendChild(heading);
        } else if (links.length) {
          // Links section
          const ul = document.createElement('ul');
          ul.classList.add('footer-links');

          links.forEach((link) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.textContent;
            li.appendChild(a);
            ul.appendChild(li);
          });

          column.appendChild(ul);
        }
      });

      columns.appendChild(column);
    }
  });

  footer.appendChild(columns);

  // Add footer bottom (copyright)
  const bottom = document.createElement('div');
  bottom.classList.add('footer-bottom');
  bottom.innerHTML = '<p>&copy; 2025 Volvo Cars. All rights reserved.</p>';
  footer.appendChild(bottom);

  block.innerHTML = '';
  block.appendChild(footer);
}
