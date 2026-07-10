'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';

type Props = {
  text: string;
  style?: CSSProperties;
  className?: string;
};

/* Character-by-character scroll reveal: each char goes from 0.2 → 1 opacity
   as the paragraph moves through the viewport. */
export default function AnimatedText({ text, style, className }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const start = vh * 0.85;
        const end = vh * 0.35;
        const p = (start - r.top) / (start - end);
        setProgress(Math.max(0, Math.min(1, p)));
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const chars = Array.from(text);
  const revealed = Math.floor(progress * chars.length);

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => (
        <span key={i} style={{ opacity: i < revealed ? 1 : 0.18, transition: 'opacity 0.25s ease' }}>
          {c}
        </span>
      ))}
    </p>
  );
}
