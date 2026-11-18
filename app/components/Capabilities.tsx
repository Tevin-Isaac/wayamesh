'use client';

import FadeIn from './fx/FadeIn';
import { useSite } from '../i18n/SiteContext';

const ICONS = ['ti-key', 'ti-wifi-off', 'ti-qrcode', 'ti-circle-check', 'ti-device-mobile', 'ti-shield-check'];

export default function Capabilities() {
  const { t } = useSite();

  return (
    <section id="capabilities" className="waya-section">
      <div className="waya-container">
        <FadeIn y={30}>
          <div className="sec-head">
            <div className="eyebrow">{t.caps.badge}</div>
            <h2 className="sec-title">{t.caps.heading}</h2>
          </div>
        </FadeIn>

        <div className="cap-grid">
          {t.caps.items.map((cap, i) => (
            <FadeIn key={i} delay={(i % 3) * 0.08} className="cap-card">
              <span className="cap-ico"><i className={`ti ${ICONS[i]}`} aria-hidden="true" /></span>
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
