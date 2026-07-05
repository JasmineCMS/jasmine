import type {Directive} from 'vue';

const START = 'start-0';
const END = 'end-0';

function clipBoundary(el: HTMLElement): DOMRect {
  let node = el.parentElement;
  while (node) {
    const s = getComputedStyle(node);
    if (/(auto|scroll|hidden|clip)/.test(s.overflowX + s.overflowY)) return node.getBoundingClientRect();
    node = node.parentElement;
  }
  const de = document.documentElement;
  return new DOMRect(0, 0, de.clientWidth, de.clientHeight);
}

function align(el: HTMLElement) {
  el.classList.remove(END);
  el.classList.add(START);
  const r = el.getBoundingClientRect();
  const b = clipBoundary(el);

  if (r.right > b.right || r.left < b.left) el.classList.replace(START, END);
}

export const vPopoverFlip: Directive<HTMLElement> = {
  mounted(el) {
    const run = () => align(el);
    requestAnimationFrame(run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run, true);
    (el as any)._flipCleanup = () => {
      window.removeEventListener('resize', run);
      window.removeEventListener('scroll', run, true);
    };
  },
  unmounted(el) {
    (el as any)._flipCleanup?.();
  },
};
