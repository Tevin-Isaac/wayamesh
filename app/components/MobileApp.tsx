export default function MobileApp() {
  const screens = [
    { label: 'Balance & Recent TXs', title: 'Dashboard' },
    { label: 'Offline Payments', title: 'Send' },
    { label: 'AI Working', title: 'Agent' },
  ];

  return (
    <section id="mobile-app" className="waya-section">
      <div className="waya-container">
        <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '60px', textAlign: 'center', color: '#F5F4F2' }}>
          Money flows offline. Freedom in your pocket.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', marginBottom: '50px' }}>
          {screens.map((screen, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ background: 'rgba(62,217,184,0.1)', border: '1px solid rgba(62,217,184,0.2)', borderRadius: '16px', aspectRatio: '9/16', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A0A0A0', fontSize: '14px', minHeight: '400px' }}>
                {screen.title}
              </div>
              <div style={{ marginTop: '16px', fontSize: '14px', fontWeight: 700, color: '#3ED9B8' }}>{screen.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { icon: 'ti-brand-apple', label: 'Download on App Store' },
            { icon: 'ti-brand-google-play', label: 'Get it on Google Play' },
          ].map((btn, i) => (
            <button
              key={i}
              style={{ padding: '14px 32px', border: '2px solid #3ED9B8', background: 'rgba(62,217,184,0.1)', color: '#3ED9B8', borderRadius: '12px', fontWeight: 700, fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s' }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.background = '#3ED9B8'; el.style.color = '#07070F'; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'rgba(62,217,184,0.1)'; el.style.color = '#3ED9B8'; }}
            >
              <i className={`ti ${btn.icon}`} style={{ fontSize: '22px' }} />
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
