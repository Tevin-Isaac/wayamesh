export default function MobileApp() {
  return (
    <section id="mobile-app" className="waya-section">
      <div className="waya-container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px', color: '#F5F4F2' }}>
          Money flows offline. Freedom in your pocket.
        </h2>
        <p style={{ fontSize: '18px', color: '#A0A0A0', marginBottom: '60px' }}>
          Available on iOS & Android
        </p>

        {/* Phone row — side phones smaller + offset, center phone featured */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '24px', marginBottom: '50px' }}>

          {/* Left phone */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#A0A0A0' }}>Dashboard</div>
            <div style={{
              width: '155px', height: '300px', borderRadius: '28px',
              border: '2px solid rgba(62,217,184,0.15)',
              background: '#0D0D1A',
              position: 'relative', overflow: 'hidden',
              opacity: 0.85,
              transform: 'scale(0.93) translateY(12px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              <div style={{ width: '50px', height: '10px', background: '#07070F', border: '1.5px solid rgba(255,255,255,0.08)', borderRadius: '0 0 10px 10px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }} />
              <div style={{ position: 'absolute', inset: 0, paddingTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '13px', color: '#A0A0A0', opacity: 0.5 }}>Balance & TXs</span>
              </div>
            </div>
          </div>

          {/* Center phone — featured */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#3ED9B8' }}>Send</div>
            <div style={{
              width: '175px', height: '340px', borderRadius: '28px',
              border: '2px solid rgba(62,217,184,0.35)',
              background: '#0D0D1A',
              position: 'relative', overflow: 'hidden',
              boxShadow: '0 0 0 1px rgba(62,217,184,0.15), 0 20px 80px rgba(62,217,184,0.18), 0 30px 70px rgba(0,0,0,0.6)',
            }}>
              <div style={{ width: '50px', height: '10px', background: '#07070F', border: '1.5px solid rgba(255,255,255,0.08)', borderRadius: '0 0 10px 10px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }} />
              <div style={{ position: 'absolute', inset: 0, paddingTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '13px', color: '#A0A0A0', opacity: 0.5 }}>Offline Payments</span>
              </div>
            </div>
          </div>

          {/* Right phone */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#A0A0A0' }}>Agent</div>
            <div style={{
              width: '155px', height: '300px', borderRadius: '28px',
              border: '2px solid rgba(62,217,184,0.15)',
              background: '#0D0D1A',
              position: 'relative', overflow: 'hidden',
              opacity: 0.85,
              transform: 'scale(0.93) translateY(12px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}>
              <div style={{ width: '50px', height: '10px', background: '#07070F', border: '1.5px solid rgba(255,255,255,0.08)', borderRadius: '0 0 10px 10px', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 2 }} />
              <div style={{ position: 'absolute', inset: 0, paddingTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '13px', color: '#A0A0A0', opacity: 0.5 }}>AI Working</span>
              </div>
            </div>
          </div>

        </div>

        {/* Store buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {/* App Store */}
          <button className="download-btn" style={{ minWidth: '180px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1 }}>
              <span style={{ fontSize: '10px', opacity: 0.7, marginBottom: '2px' }}>Download on the</span>
              <span style={{ fontSize: '16px', fontWeight: 700 }}>App Store</span>
            </div>
          </button>

          {/* Google Play */}
          <button className="download-btn" style={{ minWidth: '180px' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M3.18 23.76c.3.17.64.24.99.2L16.79 12 12.29 7.5 3.18 23.76zM20.8 10.39L17.75 8.6l-3.43 3.4 3.43 3.4 3.07-1.78a1.75 1.75 0 0 0 0-3.23zM3 1.05a1.74 1.74 0 0 0-.18.78v20.34c0 .28.06.54.18.78l.09.08 11.38-11.38v-.27L3.09.97 3 1.05zm9.29 12.37L3 23.8l.09.08c.3.16.64.22.99.18l13.67-7.86-4.46-2.78z" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1 }}>
              <span style={{ fontSize: '10px', opacity: 0.7, marginBottom: '2px' }}>Get it on</span>
              <span style={{ fontSize: '16px', fontWeight: 700 }}>Google Play</span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
