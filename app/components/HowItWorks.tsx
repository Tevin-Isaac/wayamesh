'use client';

import FadeIn from './fx/FadeIn';
import { useSite } from '../i18n/SiteContext';

export default function HowItWorks() {
  const { t } = useSite();

  return (
    <section id="how" className="waya-section">
      <div className="waya-container">
        <FadeIn y={30}>
          <div className="sec-head">
            <div className="eyebrow">{t.how.badge}</div>
            <h2 className="sec-title">{t.how.heading}</h2>
          </div>
        </FadeIn>

        <ol className="steps">
          {t.how.steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.08} className="step-card">
              <span className="step-num">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </FadeIn>
          ))}
        </ol>

        <FadeIn delay={0.2}>
          <p className="qr-note"><i className="ti ti-qrcode" aria-hidden="true" />{t.how.qrNote}</p>
        </FadeIn>
      </div>
    </section>
  );
}
