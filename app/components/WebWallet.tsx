'use client';

/* eslint-disable @next/next/no-img-element */
import FadeIn from './fx/FadeIn';
import { useSite } from '../i18n/SiteContext';

const ICONS = ['ti-wallet', 'ti-building-bank', 'ti-arrows-exchange', 'ti-scan'];

export default function WebWallet() {
  const { t } = useSite();
  const w = t.web;

  return (
    <section id="web-wallet" className="waya-section web-sec">
      <div className="waya-container">
        <FadeIn y={30}>
          <div className="sec-head">
            <div className="eyebrow">{w.badge}</div>
            <h2 className="sec-title">{w.heading}</h2>
            <p className="sec-sub">{w.sub}</p>
          </div>
        </FadeIn>

        <div className="web-grid">
          <FadeIn className="web-shots" y={40}>
            <figure className="browser-frame">
              <div className="browser-bar"><i /><i /><i /><span>wayamesh.xyz/app</span></div>
              <img src="/screens/d-wallet.webp" width={1280} height={800} alt="Wayamesh web wallet on desktop, showing balance, offline reserve and Send, Receive, Scan, Add actions" loading="lazy" />
            </figure>
            <div className="web-phones">
              {[
                ['m-wallet', w.capWallet],
                ['m-send', w.capSend],
                ['m-receive', w.capReceive],
              ].map(([f, cap]) => (
                <figure key={f} className="phone-fig">
                  <div className="phone-frame phone-frame-sm">
                    <img src={`/screens/${f}.webp`} width={390} height={844} alt={`Web wallet ${cap} screen at phone size`} loading="lazy" />
                  </div>
                  <figcaption>{cap}</figcaption>
                </figure>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="web-copy">
            <ul className="web-points">
              {w.points.map((p, i) => (
                <li key={p.title}>
                  <span className="web-ico"><i className={`ti ${ICONS[i]}`} aria-hidden="true" /></span>
                  <div><h3>{p.title}</h3><p>{p.desc}</p></div>
                </li>
              ))}
            </ul>
            <a href="/app" className="hero-cta web-cta">{w.cta}</a>
            <p className="web-limit">{w.limit}</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
