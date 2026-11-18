'use client';

import { useEffect, useRef } from 'react';

// Background film for the hero visual. Plays muted and looped, and stays on
// the poster frame for people who prefer reduced motion.
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      v.pause();
    } else {
      v.play().catch(() => {});
    }
  }, []);

  return (
    <video
      ref={ref}
      className="hero-film"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster="/africa-poster.jpg"
      aria-hidden="true"
    >
      <source src="/africa.mp4" type="video/mp4" />
    </video>
  );
}
