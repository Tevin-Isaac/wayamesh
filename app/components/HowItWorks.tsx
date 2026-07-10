'use client';

import FadeIn from './fx/FadeIn';
import { useSite } from '../i18n/SiteContext';

export default function HowItWorks() {
  const { t } = useSite();

  return (
    <section id="how" className="waya-section">
      <div className="waya-container">
        <FadeIn y={40}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(22px, 3.5vw, 36px)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(62,217,184,0.08)', border: '1px solid rgba(62,217,184,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1.2rem', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--accent)' }}>
              {t.how.badge}
            </div>
            <h2 className="grad-heading" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
              {t.how.heading}
            </h2>
          </div>
        </FadeIn>

        <div className="how-list">
          {t.how.steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1} className="how-item">
              <span className="how-num">{`0${i + 1}`}</span>
              <div className="how-body">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
