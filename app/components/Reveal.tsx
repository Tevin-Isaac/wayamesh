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

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const img = document.querySelector<HTMLElement>('.band-img');
    const band = img?.parentElement;
    if (!img || !band) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const r = band.getBoundingClientRect();
      const mid = r.top + r.height / 2 - window.innerHeight / 2;
      img.style.setProperty('--py', `${Math.max(-60, Math.min(60, -mid * 0.08)).toFixed(1)}px`);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    tick();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return null;
}
