export default function HowItWorks() {
  const steps = [
    {
      icon: 'ti-cpu',
      num: '01',
      title: 'Agent validates offline',
      desc: 'You create a payment. Your on-device AI agent checks the amount, recipient, and balance — all locally. It signs the transaction with your private key and stores it in SQLite. No internet at any point.',
    },
    {
      icon: 'ti-bluetooth',
      num: '02',
      title: 'Mesh relay',
      desc: 'The signed transaction propagates peer-to-peer over Bluetooth. Every nearby Wayamesh device is a relay node. The payment hops through the mesh until it reaches its destination — or a device with connectivity.',
    },
    {
      icon: 'ti-circle-check',
      num: '03',
      title: 'Silent Arc settlement',
      desc: 'Whenever any device in the chain has internet, the agent auto-batches pending transactions and submits them to Arc. USDC settles on-chain. No action needed from you — the agent handles everything.',
    },
  ];

  return (
    <section id="how" className="waya-section">
      <div className="waya-container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(62,217,184,0.08)', border: '1px solid rgba(62,217,184,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1.2rem', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#3ED9B8' }}>
            The flow
          </div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#F5F4F2', lineHeight: 1.1 }}>
            How it works
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', position: 'relative' }}>
{steps.map((step, i) => (
            <div key={i} className="step-card" style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '56px', height: '56px', background: 'rgba(62,217,184,0.08)', border: '1px solid rgba(62,217,184,0.2)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i className={`ti ${step.icon}`} style={{ fontSize: '28px', color: '#3ED9B8' }} />
                </div>
                <span style={{ fontSize: '13px', fontWeight: 800, color: 'rgba(62,217,184,0.4)', letterSpacing: '0.06em' }}>{step.num}</span>
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#F5F4F2', marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.75 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
