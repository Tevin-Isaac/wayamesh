export default function MobileApp() {
  const screens = [
    { label: 'Balance & Recent TXs', title: 'Dashboard' },
    { label: 'Offline Payments', title: 'Send' },
    { label: 'AI Working', title: 'Agent' },
  ];

  return (
    <section id="mobile-app" className="waya-section">
      <div className="waya-container">
        <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px', textAlign: 'center', color: '#F5F4F2' }}>
          Money flows offline. Freedom in your pocket.
        </h2>
        <p style={{ fontSize: '18px', color: '#A0A0A0', textAlign: 'center', marginBottom: '60px' }}>
          Available on iOS & Android
        </p>

        {/* Phone mockups */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '50px', flexWrap: 'wrap' }}>
          {screens.map((screen, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              {/* Phone frame */}
              <div style={{
                width: '200px',
                height: '400px',
                background: 'rgba(62,217,184,0.06)',
                border: '2px solid rgba(62,217,184,0.3)',
                borderRadius: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 0 40px rgba(62,217,184,0.08)',
              }}>
                {/* Phone notch */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '8px',
                  background: 'rgba(62,217,184,0.3)',
                  borderRadius: '4px',
                }} />
                {/* Screen content placeholder */}
                <div style={{ textAlign: 'center', padding: '20px' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px', opacity: 0.4 }}>
                    {i === 0 ? '💳' : i === 1 ? '📤' : '🤖'}
                  </div>
                  <div style={{ fontSize: '11px', color: '#A0A0A0', opacity: 0.6 }}>App screenshot</div>
                </div>
                {/* Bottom home indicator */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40px',
                  height: '4px',
                  background: 'rgba(62,217,184,0.3)',
                  borderRadius: '2px',
                }} />
              </div>
              <div style={{ marginTop: '16px', fontSize: '13px', fontWeight: 700, color: '#3ED9B8' }}>{screen.label}</div>
              <div style={{ marginTop: '4px', fontSize: '12px', color: '#A0A0A0' }}>{screen.title}</div>
            </div>
          ))}
        </div>

        {/* Download buttons */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="download-btn">
            <i className="ti ti-brand-apple" style={{ fontSize: '22px' }} />
            Download on App Store
          </button>
          <button className="download-btn">
            <i className="ti ti-brand-google-play" style={{ fontSize: '22px' }} />
            Get it on Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
