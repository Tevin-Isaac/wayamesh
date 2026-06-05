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
          <button className="download-btn">
            <i className="ti ti-brand-apple" style={{ fontSize: '22px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <span style={{ fontSize: '10px', color: '#A0A0A0', lineHeight: 1.2 }}>Download on the</span>
              <span style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.3 }}>App Store</span>
            </div>
          </button>
          <button className="download-btn">
            <i className="ti ti-brand-google-play" style={{ fontSize: '22px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
              <span style={{ fontSize: '10px', color: '#A0A0A0', lineHeight: 1.2 }}>Get it on</span>
              <span style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.3 }}>Google Play</span>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
