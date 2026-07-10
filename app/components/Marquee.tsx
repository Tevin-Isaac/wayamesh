'use client';

/* eslint-disable @next/next/no-img-element */
/* Continuously scrolling strip of the rails Wayamesh is built on. */

import { useSite } from '../i18n/SiteContext';

function UsdcMark() {
  return (
    <span className="partner-item">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="16" fill="#2775CA" />
        <circle cx="16" cy="16" r="10.5" fill="none" stroke="#fff" strokeWidth="1.6" opacity="0.9" />
        <text x="16" y="17" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="13" fontWeight="900" fontFamily="Arial, sans-serif">$</text>
      </svg>
      <span className="partner-name">USDC</span>
    </span>
  );
}

function ArcMark() {
  return (
    <span className="partner-item">
      <img src="/arc-logo.png" alt="Arc" style={{ height: '32px', width: 'auto' }} />
      <span className="partner-name">Arc</span>
    </span>
  );
}

function CircleMark() {
  return (
    <span className="partner-item">
      <img src="/circle-logo.svg" alt="Circle" className="partner-logo-circle" style={{ height: '26px', width: 'auto', opacity: 0.85 }} />
    </span>
  );
}

export default function Marquee() {
  const { t } = useSite();
  const set = (key: string) => (
    <div className="partners-set" key={key}>
      <ArcMark />
      <UsdcMark />
      <CircleMark />
    </div>
  );

  return (
    <section className="partners-sec" aria-label="Built on Arc, USDC and Circle">
      <div className="waya-container">
        <p className="partners-label">{t.partners.label}</p>
      </div>
      <div className="partners-viewport">
        <div className="partners-track">
          {['a', 'b', 'c', 'd'].map(k => set(k))}
        </div>
      </div>
    </section>
  );
}
