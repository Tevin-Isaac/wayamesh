'use client';

import FadeIn from './fx/FadeIn';
import AnimatedText from './fx/AnimatedText';
import { useSite } from '../i18n/SiteContext';

export default function Story() {
  const { t } = useSite();

  return (
    <section id="story" className="waya-section">
      <div className="waya-container">
        <div className="story-grid">

          {/* Left — badge + heading */}
          <div>
            <FadeIn>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(62,217,184,0.08)', border: '1px solid rgba(62,217,184,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1.4rem', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'var(--accent)' }}>
                {t.story.badge}
              </div>
            </FadeIn>

            <FadeIn delay={0.1} y={40}>
              <h2 className="grad-heading" style={{ fontSize: 'clamp(1.9rem, 3.4vw, 2.9rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.08 }}>
                {t.story.h1}<br />
                <span className="grad-accent">{t.story.h2}</span>
              </h2>
            </FadeIn>
          </div>

          {/* Right — story + quote */}
          <FadeIn delay={0.2}>
            <div style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.7 }}>
              <p style={{ margin: 0 }}>{t.story.p1} {t.story.p2}</p>
              <p style={{ margin: '0.5rem 0 0' }}>{t.story.p3}</p>
            </div>

            <div style={{ borderLeft: '3px solid #3ED9B8', paddingLeft: '20px', marginTop: '1.2rem' }}>
              <AnimatedText
                text={t.story.quote}
                style={{ fontSize: 'clamp(1.15rem, 2vw, 1.45rem)', fontWeight: 700, color: 'var(--text)', lineHeight: 1.45, fontStyle: 'italic', margin: 0 }}
              />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
