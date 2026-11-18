'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import { useSite } from '../i18n/SiteContext';

const VIDEOS = [
  { src: '/africa.mp4', poster: '/africa-poster.jpg' },
  { src: '/usdc.mp4',   poster: '/usdc-poster.jpg' },
];

const APK = 'https://github.com/Tevin-Isaac/wayamesh-mobile/releases/latest/download/wayamesh-beta.apk';

export default function Hero() {
  const { t } = useSite();
  const [active, setActive] = useState(0);
  const still = useRef(false);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  // Respect reduced motion: show the poster frames and never autoplay.
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    still.current = reduce;
    if (reduce) {
      refs.current.forEach(v => v?.pause());
    } else {
      refs.current[0]?.play().catch(() => {});
    }
  }, []);

  function playNext() {
    if (still.current) return;
    const next = (active + 1) % VIDEOS.length;
    const vid = refs.current[next];
    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    }
    setActive(next);
  }

  return (
    <section id="hero" className="hero-sec">
      {VIDEOS.map((v, i) => (
        <video
          key={v.src}
          ref={el => { refs.current[i] = el; }}
          className={`hero-video${i === active ? '' : ' hero-video-hidden'}`}
          autoPlay={i === 0}
          muted
          playsInline
          preload={i === 0 ? 'auto' : 'metadata'}
          poster={v.poster}
          onEnded={i === active ? playNext : undefined}
          aria-hidden="true"
        >
          <source src={v.src} type="video/mp4" />
        </video>
      ))}
      <div className="hero-overlay" />

      <div className="hero-inner hero-grid">
        <div className="hero-left">
          <div className="hero-badge fade-up fade-up-1" title={t.hero.badgeNote}>
            <span className="hero-badge-dot" />
            {t.hero.badge}
            <span className="hero-badge-note">{t.hero.badgeNote}</span>
          </div>

          <h1 className="hero-heading text-glow fade-up fade-up-1">
            {t.hero.h1a}<br />
            <span style={{ color: '#3ED9B8' }}>{t.hero.h1b}</span>
          </h1>

          <p className="hero-sub fade-up fade-up-2">{t.hero.sub}</p>

          <div className="hero-cta-row fade-up fade-up-3">
            <a href="/app" className="hero-cta">{t.hero.ctaWeb}</a>
            <a href={APK} className="hero-cta-ghost">{t.hero.ctaDownload}</a>
          </div>

          <ul className="hero-facts fade-up fade-up-4">
            {[t.hero.fact1, t.hero.fact2, t.hero.fact3, t.hero.fact4].map(f => (
              <li key={f}><i className="ti ti-check" aria-hidden="true" />{f}</li>
            ))}
          </ul>
        </div>

        <div className="hero-device fade-up fade-up-3" aria-hidden="true">
          <div className="phone-frame">
            <img src="/screens/m-wallet.webp" width={390} height={844} alt="" fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}
