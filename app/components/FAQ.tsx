'use client';

import FadeIn from './fx/FadeIn';
import { useSite } from '../i18n/SiteContext';

export default function FAQ() {
  const { t } = useSite();

  return (
    <section id="faq" className="waya-section">
      <div className="waya-container faq-wrap">
        <FadeIn y={30}>
          <div className="sec-head">
            <h2 className="sec-title">{t.faq.heading}</h2>
          </div>
        </FadeIn>
        <div className="faq-list">
          {t.faq.items.map((f, i) => (
            <details key={i} className="faq-row" open={i === 0}>
              <summary>{f.q}<i className="ti ti-plus" aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
