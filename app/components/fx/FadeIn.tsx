'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
};

export default function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: '50px', threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0)' : `translate3d(${x}px, ${y}px, 0)`,
        transition: `opacity ${duration}s cubic-bezier(0.25,0.1,0.25,1) ${delay}s, transform ${duration}s cubic-bezier(0.25,0.1,0.25,1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
