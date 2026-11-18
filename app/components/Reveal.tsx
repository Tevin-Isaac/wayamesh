'use client';

import { useEffect } from 'react';

// One observer for the whole page. Anything marked data-reveal fades up the
// first time it enters the viewport. Content is visible by default: the
// hidden state only applies once JS has run (html.js) and is lifted again
// for reduced motion or browsers without IntersectionObserver.
export default function Reveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || typeof IntersectionObserver === 'undefined') {
      els.forEach(el => el.classList.add('in'));
      return;
    }
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
