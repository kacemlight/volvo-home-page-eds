/**
 * CTA Block
 * Call-to-action banner with heading and button
 */

export default function decorate(block) {
  block.classList.add('cta-block');

  const rows = Array.from(block.children);

  // Create CTA content wrapper
  const wrapper = document.createElement('div');
  wrapper.classList.add('cta-wrapper');

  let heading = '';
  let buttonText = '';
  let buttonLink = '';

  rows.forEach((row, index) => {
    const cells = Array.from(row.children);

    if (index === 0 && cells[0]) {
      heading = cells[0].textContent.trim();
    } else if (index === 1 && cells[0]) {
      const link = cells[0].querySelector('a');
      if (link) {
        buttonText = link.textContent;
        buttonLink = link.href;
      }
    }
  });

  if (heading) {
    const h2 = document.createElement('h2');
    h2.classList.add('cta-heading');
    h2.textContent = heading;
    wrapper.appendChild(h2);
  }

  if (buttonLink) {
    const button = document.createElement('a');
    button.href = buttonLink;
    button.classList.add('cta-button');
    button.textContent = buttonText || 'Get Started';
    wrapper.appendChild(button);
  }

  block.innerHTML = '';
  block.appendChild(wrapper);
}
