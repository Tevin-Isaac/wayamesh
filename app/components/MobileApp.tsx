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
          <button className="download-btn"><i className="ti ti-brand-apple" style={{ fontSize: '22px' }} /> Download on App Store</button>
          <button className="download-btn"><i className="ti ti-brand-google-play" style={{ fontSize: '22px' }} /> Get it on Google Play</button>
        </div>
      </div>
    </section>
  );
}
