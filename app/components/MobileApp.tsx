'use client';

import FadeIn from './fx/FadeIn';
import { useSite } from '../i18n/SiteContext';

const APK = 'https://github.com/Tevin-Isaac/wayamesh-mobile/releases/latest/download/wayamesh-beta.apk';

export default function MobileApp() {
  const { t } = useSite();

  return (
    <section id="mobile-app" className="waya-section">
      <div className="waya-container">
        <FadeIn y={30}>
          <div className="get-card">
            <h2 className="sec-title">{t.get.heading}</h2>
            <p className="sec-sub">{t.get.sub}</p>

            <div className="store-buttons">
              <a href={APK} className="download-btn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path d="M3.18 23.76c.3.17.64.24.99.2L16.79 12 12.29 7.5 3.18 23.76zM20.8 10.39L17.75 8.6l-3.43 3.4 3.43 3.4 3.07-1.78a1.75 1.75 0 0 0 0-3.23zM3 1.05a1.74 1.74 0 0 0-.18.78v20.34c0 .28.06.54.18.78l.09.08 11.38-11.38v-.27L3.09.97 3 1.05zm9.29 12.37L3 23.8l.09.08c.3.16.64.22.99.18l13.67-7.86-4.46-2.78z" />
                </svg>
                <span className="dl-text"><small>{t.mobile.apkTop}</small><strong>{t.mobile.apkBottom}</strong></span>
              </a>
              <a href="/app" className="download-btn">
                <i className="ti ti-world" style={{ fontSize: '28px' }} aria-hidden="true" />
                <span className="dl-text"><small>{t.nav.web}</small><strong>{t.hero.ctaWeb}</strong></span>
              </a>
              <span className="download-btn download-btn-off" aria-disabled="true">
                <i className="ti ti-brand-apple" style={{ fontSize: '28px' }} aria-hidden="true" />
                <span className="dl-text"><small>{t.mobile.iosTop}</small><strong>{t.mobile.iosBottom}</strong></span>
              </span>
            </div>

            <p className="get-note">{t.get.note}</p>
            <p className="get-note">
              {t.mobile.faucetNote}{' '}
              <a href="https://faucet.circle.com" target="_blank" rel="noopener noreferrer">faucet.circle.com</a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
