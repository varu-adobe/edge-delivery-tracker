function handleLinks() {
const links = document.querySelectorAll('.demo-buildouts > div.columns-wrapper > div > div > div:nth-child(2) a');
    links.forEach((link) => {
        link.href = link.textContent;
    });
}
export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
  handleLinks();
}
