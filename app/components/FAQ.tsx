'use client';

import { useState } from 'react';
import FadeIn from './fx/FadeIn';
import { useSite } from '../i18n/SiteContext';

export default function FAQ() {
  const [active, setActive] = useState(0);
  const { t } = useSite();

  return (
    <section id="faq" className="faq-sec">
      <div className="waya-container">

        <FadeIn y={40}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h2 className="grad-heading" style={{ fontSize: 'clamp(1.9rem, 4vw, 2.8rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1.05 }}>
              {t.faq.heading}
            </h2>
          </div>
        </FadeIn>

        {/* Tab row */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {t.faq.items.map((faq, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: '10px 18px',
                borderRadius: '100px',
                border: `1px solid ${active === i ? 'rgba(62,217,184,0.5)' : 'var(--chip-border)'}`,
                background: active === i ? 'rgba(62,217,184,0.1)' : 'transparent',
                color: active === i ? 'var(--accent)' : 'var(--muted-2)',
                fontSize: '13px',
                fontWeight: active === i ? 700 : 400,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap' as const,
              }}
            >
              {faq.q}
            </button>
          ))}
        </div>

        {/* Answer panel */}
        <div className="faq-answer-panel liquid-glass" style={{
          background: 'rgba(62,217,184,0.04)',
          borderRadius: '16px',
          padding: '28px 32px',
        }}>
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '680px' }}>
            {t.faq.items[active].a}
          </p>
        </div>

      </div>
    </section>
  );
}
