export default function Capabilities() {
  const caps = [
    {
      icon: 'ti-cpu',
      title: 'On-device AI agent',
      desc: 'A 4–8MB quantized model runs entirely on your phone. It validates transactions, estimates Arc fees, and routes through the mesh — no internet needed to send or receive a payment.',
    },
    {
      icon: 'ti-bluetooth',
      title: 'Bluetooth mesh relay',
      desc: 'Signed transactions propagate peer-to-peer over BLE. Every device in range is a relay node. The mesh grows with users — no infrastructure needed.',
    },
    {
      icon: 'ti-lock',
      title: 'Self-custodial & secure',
      desc: 'Your private keys never leave your device. AES-256 encrypted at rest, unlocked with biometrics. No keys transmitted. Ever.',
    },
    {
      icon: 'ti-circle-check',
      title: 'Arc settlement',
      desc: 'Your agent monitors for connectivity in the background. When any device in the chain finds a signal, it batches and submits to Arc automatically. You never touch it.',
    },
  ];

  return (
    <section id="capabilities" className="waya-section">
      <div className="waya-container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 56px)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(62,217,184,0.08)', border: '1px solid rgba(62,217,184,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1.2rem', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#3ED9B8' }}>
            Built different
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#F5F4F2', lineHeight: 1.1 }}>
            Why Wayamesh
          </h2>
        </div>

        <div className="cap-grid">
          {caps.map((cap, i) => (
            <div key={i} className="cap-card">
              <div style={{ width: '48px', height: '48px', background: 'rgba(62,217,184,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', flexShrink: 0 }}>
                <i className={`ti ${cap.icon}`} style={{ fontSize: '26px', color: '#3ED9B8' }} />
              </div>
              <h4 style={{ fontSize: '17px', color: '#F5F4F2', marginBottom: '10px', fontWeight: 700 }}>{cap.title}</h4>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7 }}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
