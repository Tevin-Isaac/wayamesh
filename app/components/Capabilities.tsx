export default function Capabilities() {
  const caps = [
    { icon: 'ti-wifi-off', title: 'Offline first', desc: 'Send money anywhere, no internet needed.' },
    { icon: 'ti-robot', title: 'AI agents', desc: 'On-device agents validate & settle automatically.' },
    { icon: 'ti-coin', title: 'Nano payments', desc: 'USDC to 6 decimals. Send $0.000001.' },
    { icon: 'ti-zap', title: 'Zero fees', desc: 'Arc native USDC. No intermediaries.' },
  ];

  return (
    <section id="capabilities" className="waya-section">
      <div className="waya-container">
        <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '60px', textAlign: 'center', color: '#F5F4F2' }}>
          Why Wayamesh
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
          {caps.map((cap, i) => (
            <div key={i} style={{ background: 'rgba(62,217,184,0.05)', border: '1px solid rgba(62,217,184,0.15)', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
              <i className={`ti ${cap.icon}`} style={{ fontSize: '40px', color: '#3ED9B8', display: 'block', marginBottom: '16px' }} />
              <h4 style={{ fontSize: '16px', color: '#3ED9B8', marginBottom: '12px', fontWeight: 700 }}>{cap.title}</h4>
              <p style={{ fontSize: '13px', color: '#A0A0A0' }}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
