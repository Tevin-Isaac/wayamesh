'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  padding?: number;
  strength?: number;
};

/* Mouse-following magnetic hover: element drifts toward the cursor when it
   comes within `padding` px, and eases back out when it leaves. */
export default function Magnet({ children, padding = 120, strength = 6 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      if (Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding) {
        setT({ x: dx / strength, y: dy / strength, active: true });
      } else {
        setT({ x: 0, y: 0, active: false });
      }
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate3d(${t.x}px, ${t.y}px, 0)`,
        transition: t.active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
