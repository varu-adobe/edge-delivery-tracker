import { decorateIcons } from '../../scripts/aem.js';

/**
 * Decorates icon-cards block converting its default table structure into
 * semantic list (<ul><li>) with icon and body sections.
 *
 * Authoring pattern (per card row):
 *  | Icon | Content |
 * Where *Icon* cell contains a span with class="icon icon-name" or an inline SVG.
 *
 * The first column transforms to `.icon-cards-card-icon` and all remaining
 * columns become `.icon-cards-card-body`.
 *
 * @param {HTMLElement} block
 */
export default function decorate(block) {
  const ul = document.createElement('ul');

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);

    [...li.children].forEach((div, idx) => {
      if (idx === 0) {
        div.className = 'icon-cards-card-icon';
        decorateIcons(div);
      } else {
        div.className = 'icon-cards-card-body';
      }
    });

    ul.append(li);
  });

  block.textContent = '';
  block.append(ul);
} 