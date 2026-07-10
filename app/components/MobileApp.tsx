'use client';

import FadeIn from './fx/FadeIn';
import Magnet from './fx/Magnet';
import { useSite } from '../i18n/SiteContext';

export default function MobileApp() {
  const { t } = useSite();

  return (
    <section id="mobile-app" className="waya-section">
      <div className="waya-container" style={{ textAlign: 'center' }}>
        <FadeIn y={40}>
          <h2 className="grad-heading" style={{ fontSize: 'clamp(2rem, 5.5vw, 3.4rem)', fontWeight: 900, marginBottom: '12px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            {t.mobile.h1}<br />{t.mobile.h2}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted)', marginBottom: 'clamp(22px, 4vw, 36px)' }}>
            {t.mobile.sub}
          </p>
        </FadeIn>

        <div className="phone-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '24px', marginBottom: 'clamp(20px, 3.5vw, 34px)' }}>

          {/* ── LEFT PHONE — Wallet (real home screen) ── */}
          <FadeIn delay={0.15} y={50} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#A0A0A0' }}>Wallet</div>
            <div style={{
              width: '155px', height: '300px', borderRadius: '28px',
              border: '2px solid rgba(62,217,184,0.15)', background: '#07070F',
              position: 'relative', overflow: 'hidden',
              opacity: 0.85, transform: 'scale(0.93) translateY(12px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              <div style={{ width: '50px', height: '10px', background: '#07070F', border: '1.5px solid rgba(255,255,255,0.08)', borderRadius: '0 0 10px 10px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }} />
              <div style={{ position: 'absolute', inset: 0, padding: '20px 12px 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {/* Top bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'rgba(62,217,184,0.2)', border: '1px solid rgba(62,217,184,0.4)' }} />
                    <div>
                      <div style={{ fontSize: '5.5px', color: '#8888A0' }}>Welcome back</div>
                      <div style={{ fontSize: '7px', fontWeight: 700, color: '#F5F4F2' }}>Your wallet</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '5.5px', color: '#3ED9B8', background: 'rgba(62,217,184,0.1)', padding: '2px 5px', borderRadius: '8px', border: '1px solid rgba(62,217,184,0.2)' }}>● Arc Testnet</span>
                </div>
                {/* Balance hero */}
                <div style={{ textAlign: 'center', padding: '6px 0 2px' }}>
                  <div style={{ fontSize: '5.5px', fontWeight: 700, letterSpacing: '0.1em', color: '#8888A0', textTransform: 'uppercase', marginBottom: '3px' }}>Total balance</div>
                  <div style={{ fontSize: '21px', fontWeight: 900, color: '#F5F4F2', letterSpacing: '-0.03em', lineHeight: 1 }}>$245<span style={{ fontSize: '12px', color: '#8888A0' }}>.80</span></div>
                  <div style={{ display: 'inline-block', fontSize: '5.5px', color: '#8888A0', fontFamily: 'monospace', background: '#0F0F1A', border: '1px solid #1E1E35', borderRadius: '8px', padding: '2px 6px', marginTop: '4px' }}>0x4f3a2b…9c1d ⧉</div>
                </div>
                {/* Quick actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 4px' }}>
                  {[
                    { g: '↑', l: 'Send', primary: true },
                    { g: '⌘', l: 'Request' },
                    { g: '↓', l: 'Receive' },
                    { g: '▣', l: 'Scan' },
                  ].map((a) => (
                    <div key={a.l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', background: a.primary ? '#3ED9B8' : '#0F0F1A', border: a.primary ? 'none' : '1px solid #1E1E35', color: a.primary ? '#07070F' : '#F5F4F2', fontWeight: 700 }}>{a.g}</div>
                      <span style={{ fontSize: '5px', color: '#8888A0' }}>{a.l}</span>
                    </div>
                  ))}
                </div>
                {/* Recent activity */}
                <div style={{ fontSize: '5.5px', fontWeight: 700, color: '#555570', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>Recent activity</div>
                {[
                  { who: '0x8a2f…9d31', date: 'Jul 8', amt: '+50.00', inc: true },
                  { who: '0xb3c1…44e7', date: 'Jul 7', amt: '−20.00', inc: false },
                  { who: '0x77aa…f2c9', date: 'Jul 5', amt: '−12.00', inc: false },
                ].map((tx) => (
                  <div key={tx.who} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '3px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: tx.inc ? 'rgba(62,217,184,0.18)' : '#16162A', border: '1px solid #1E1E35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', color: tx.inc ? '#3ED9B8' : '#8888A0' }}>{tx.inc ? '↓' : '↑'}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '6.5px', color: '#F5F4F2', fontFamily: 'monospace' }}>{tx.who}</div>
                      <div style={{ fontSize: '5.5px', color: '#555570' }}>{tx.date}</div>
                    </div>
                    <span style={{ fontSize: '7px', fontWeight: 700, color: tx.inc ? '#3ED9B8' : '#F5F4F2' }}>{tx.amt}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── CENTER PHONE — Send with keypad (featured) ── */}
          <FadeIn delay={0} y={50} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#3ED9B8' }}>Send</div>
            <Magnet padding={140} strength={7}>
            <div style={{
              width: '175px', height: '340px', borderRadius: '28px',
              border: '2px solid rgba(62,217,184,0.35)', background: '#07070F',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(62,217,184,0.15), 0 20px 80px rgba(62,217,184,0.18), 0 30px 70px rgba(0,0,0,0.6)',
            }}>
              <div style={{ width: '50px', height: '10px', background: '#07070F', border: '1.5px solid rgba(255,255,255,0.08)', borderRadius: '0 0 10px 10px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }} />
              <div style={{ position: 'absolute', inset: 0, padding: '20px 14px 14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#F5F4F2' }}>Send USDC</span>
                  <span style={{ fontSize: '5.5px', color: '#3ED9B8', background: 'rgba(62,217,184,0.1)', padding: '2px 5px', borderRadius: '8px', border: '1px solid rgba(62,217,184,0.2)' }}>Offline OK</span>
                </div>
                {/* Recipient */}
                <div style={{ background: '#0F0F1A', border: '1px solid #1E1E35', borderRadius: '10px', padding: '6px 8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg, #3ED9B8 0%, #2775CA 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>J</div>
                  <div>
                    <div style={{ fontSize: '7.5px', fontWeight: 700, color: '#F5F4F2' }}>James W.</div>
                    <div style={{ fontSize: '5.5px', color: '#555570', fontFamily: 'monospace' }}>0x4f…c3a1</div>
                  </div>
                  <div style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: '#3ED9B8' }} />
                </div>
                {/* Amount */}
                <div style={{ textAlign: 'center', padding: '2px 0' }}>
                  <div style={{ fontSize: '22px', fontWeight: 900, color: '#F5F4F2', letterSpacing: '-0.04em', lineHeight: 1 }}>$50<span style={{ fontSize: '12px', color: '#3ED9B8' }}>.00</span></div>
                  <div style={{ fontSize: '5.5px', color: '#8888A0', marginTop: '2px' }}>USDC · Balance $245.80</div>
                </div>
                {/* Keypad */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
                  {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'].map((k) => (
                    <div key={k} style={{ height: '17px', borderRadius: '6px', background: '#0F0F1A', border: '1px solid #1E1E35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '8px', fontWeight: 600, color: k === '⌫' ? '#8888A0' : '#F5F4F2' }}>{k}</div>
                  ))}
                </div>
                {/* Send button */}
                <div style={{ background: '#3ED9B8', borderRadius: '10px', padding: '8px', textAlign: 'center', marginTop: 'auto' }}>
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#07070F' }}>Sign &amp; Send</span>
                </div>
                <div style={{ fontSize: '5.5px', color: '#555570', textAlign: 'center' }}>Signs offline · hand off via QR or Bluetooth</div>
              </div>
            </div>
            </Magnet>
          </FadeIn>

          {/* ── RIGHT PHONE — Agent (spending envelope + standing payments) ── */}
          <FadeIn delay={0.25} y={50} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#A0A0A0' }}>Agent</div>
            <div style={{
              width: '155px', height: '300px', borderRadius: '28px',
              border: '2px solid rgba(62,217,184,0.15)', background: '#07070F',
              position: 'relative', overflow: 'hidden',
              opacity: 0.85, transform: 'scale(0.93) translateY(12px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              <div style={{ width: '50px', height: '10px', background: '#07070F', border: '1.5px solid rgba(255,255,255,0.08)', borderRadius: '0 0 10px 10px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }} />
              <div style={{ position: 'absolute', inset: 0, padding: '20px 12px 12px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, color: '#F5F4F2' }}>Agent wallet</span>
                  <span style={{ fontSize: '5.5px', color: '#3ED9B8', background: 'rgba(62,217,184,0.1)', padding: '2px 5px', borderRadius: '8px', border: '1px solid rgba(62,217,184,0.2)' }}>● Active</span>
                </div>
                {/* Spending envelope meters */}
                <div style={{ fontSize: '5.5px', fontWeight: 700, color: '#555570', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Spending envelope</div>
                {[
                  { label: 'Daily', left: '17.50', cap: '50.00', pct: 65 },
                  { label: 'Per transaction', left: '10.00', cap: '10.00', pct: 100 },
                  { label: 'Total', left: '112.00', cap: '200.00', pct: 56 },
                ].map((m) => (
                  <div key={m.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <span style={{ fontSize: '6.5px', color: '#F5F4F2', fontWeight: 600 }}>{m.label}</span>
                      <span style={{ fontSize: '6.5px', color: '#3ED9B8', fontWeight: 700 }}>{m.left} <span style={{ color: '#555570', fontWeight: 400 }}>of {m.cap}</span></span>
                    </div>
                    <div style={{ height: '4px', borderRadius: '2px', background: '#16162A', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${m.pct}%`, borderRadius: '2px', background: '#3ED9B8', opacity: 0.8 }} />
                    </div>
                  </div>
                ))}
                {/* Standing payments */}
                <div style={{ fontSize: '5.5px', fontWeight: 700, color: '#555570', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px' }}>Standing payments</div>
                {[
                  { label: 'Rent', who: 'Mama Njeri · monthly', next: 'Next Aug 1 · 2 paid', amt: '25.00' },
                  { label: 'Data bundle', who: '0x7c…21aa · weekly', next: 'Next Jul 14 · 5 paid', amt: '2.00' },
                ].map((ins) => (
                  <div key={ins.label} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '3px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <div style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#16162A', border: '1px solid #1E1E35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px', color: '#8888A0' }}>{ins.label[0]}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '6.5px', fontWeight: 700, color: '#F5F4F2' }}>{ins.label}</div>
                      <div style={{ fontSize: '5.5px', color: '#8888A0' }}>{ins.who}</div>
                      <div style={{ fontSize: '5.5px', color: '#3ED9B8' }}>{ins.next}</div>
                    </div>
                    <span style={{ fontSize: '7px', fontWeight: 700, color: '#F5F4F2' }}>{ins.amt}</span>
                  </div>
                ))}
                {/* Executes offline note */}
                <div style={{ marginTop: 'auto', fontSize: '5.5px', color: '#555570', textAlign: 'center' }}>Due payments sign locally · settle at reconnect</div>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Download buttons */}
        <div className="store-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://github.com/Tevin-Isaac/wayamesh-mobile/releases/latest/download/wayamesh-beta.apk"
            className="download-btn"
            style={{ minWidth: '180px', textDecoration: 'none' }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M3.18 23.76c.3.17.64.24.99.2L16.79 12 12.29 7.5 3.18 23.76zM20.8 10.39L17.75 8.6l-3.43 3.4 3.43 3.4 3.07-1.78a1.75 1.75 0 0 0 0-3.23zM3 1.05a1.74 1.74 0 0 0-.18.78v20.34c0 .28.06.54.18.78l.09.08 11.38-11.38v-.27L3.09.97 3 1.05zm9.29 12.37L3 23.8l.09.08c.3.16.64.22.99.18l13.67-7.86-4.46-2.78z" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1 }}>
              <span style={{ fontSize: '10px', opacity: 0.7, marginBottom: '2px' }}>{t.mobile.apkTop}</span>
              <span style={{ fontSize: '16px', fontWeight: 700 }}>{t.mobile.apkBottom}</span>
            </div>
          </a>

          <button className="download-btn" style={{ minWidth: '180px', opacity: 0.5, cursor: 'default' }} disabled>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1 }}>
              <span style={{ fontSize: '10px', opacity: 0.7, marginBottom: '2px' }}>{t.mobile.iosTop}</span>
              <span style={{ fontSize: '16px', fontWeight: 700 }}>{t.mobile.iosBottom}</span>
            </div>
          </button>
        </div>

        <p style={{ fontSize: '13px', color: 'var(--dim)', marginTop: '18px' }}>
          {t.mobile.faucetNote}{' '}
          <a href="https://faucet.circle.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none' }}>faucet.circle.com</a>
        </p>

      </div>
    </section>
  );
}
