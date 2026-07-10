'use client';

import { useRef, useState } from 'react';
import { useSite } from '../i18n/SiteContext';

const VIDEOS = [
  { src: '/africa.mp4', poster: '/africa-poster.jpg' },
  { src: '/usdc.mp4',   poster: '/usdc-poster.jpg' },
];

export default function Hero() {
  const { t } = useSite();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  function playNext() {
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
      {/* Fullscreen background videos — africa first, crossfading to usdc and cycling */}
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

      {/* Dark gradient overlay — heavier on the left where the copy sits */}
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-heading text-glow fade-up fade-up-1">
            {t.hero.h1a}<br />
            <span style={{ color: '#3ED9B8' }}>{t.hero.h1b}</span>
          </h1>

          <p className="hero-sub fade-up fade-up-2">{t.hero.sub}</p>

          <div className="hero-cta-row fade-up fade-up-3">
            <a
              href="https://github.com/Tevin-Isaac/wayamesh-mobile/releases/latest/download/wayamesh-beta.apk"
              className="hero-cta"
            >
              {t.hero.ctaDownload}
            </a>
            <a href="#how" className="hero-cta-ghost">{t.hero.ctaHow}</a>
          </div>

          <div className="hero-stats fade-up fade-up-4">
            <div className="hero-stat">
              <strong>≈0.5s</strong>
              <span>{t.hero.stat1l}</span>
            </div>
            <div className="hero-stat">
              <strong>0</strong>
              <span>{t.hero.stat2l}</span>
            </div>
            <div className="hero-stat">
              <strong>100%</strong>
              <span>{t.hero.stat3l}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
