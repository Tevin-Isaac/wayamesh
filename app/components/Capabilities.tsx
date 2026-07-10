'use client';

import FadeIn from './fx/FadeIn';
import { useSite } from '../i18n/SiteContext';

const ICONS = ['ti-qrcode', 'ti-lock', 'ti-bolt', 'ti-shield-check'];

export default function Capabilities() {
  const { t } = useSite();

  return (
    <section id="capabilities" className="waya-section">
      <div className="waya-container">
        <FadeIn y={40}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(22px, 3.5vw, 36px)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(62,217,184,0.08)', border: '1px solid rgba(62,217,184,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1.2rem', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--accent)' }}>
              {t.caps.badge}
            </div>
            <h2 className="grad-heading" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
              {t.caps.heading}
            </h2>
          </div>
        </FadeIn>

        <div className="cap-grid">
          {t.caps.items.map((cap, i) => (
            <FadeIn key={i} delay={i * 0.1} className="cap-card">
              <div style={{ width: '48px', height: '48px', background: 'rgba(62,217,184,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', flexShrink: 0 }}>
                <i className={`ti ${ICONS[i]}`} style={{ fontSize: '26px', color: '#3ED9B8' }} />
              </div>
              <h4 style={{ fontSize: '17px', color: 'var(--text)', marginBottom: '10px', fontWeight: 700 }}>{cap.title}</h4>
              <p style={{ fontSize: '14px', color: 'var(--muted-2)', lineHeight: 1.7 }}>{cap.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
