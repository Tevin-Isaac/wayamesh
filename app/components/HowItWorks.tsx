export default function HowItWorks() {
  const steps = [
    { icon: 'ti-send', num: '01', title: 'Send offline', desc: 'Create transaction. No internet needed. Your agent validates it\'s valid. Transaction is signed.' },
    { icon: 'ti-network', num: '02', title: 'Mesh relay', desc: 'Transaction relays peer-to-peer via Bluetooth. Network grows. Money passes through until someone goes online.' },
    { icon: 'ti-circle-check', num: '03', title: 'Instant settle', desc: 'Settles on Arc automatically. Receiver has USDC. Done. Transparent. Final. No delays.' },
  ];

  return (
    <section id="how" className="waya-section">
      <div className="waya-container">
        <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px', textAlign: 'center', color: '#F5F4F2' }}>How it works</h2>
        <p style={{ fontSize: '18px', color: '#A0A0A0', textAlign: 'center', marginBottom: '60px' }}>Three steps. Offline-first. Agent-powered.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{ background: 'rgba(62,217,184,0.05)', border: '1px solid rgba(62,217,184,0.15)', borderRadius: '12px', padding: '40px 30px', textAlign: 'center', transition: 'all 0.3s', cursor: 'default' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = '#3ED9B8'; el.style.background = 'rgba(62,217,184,0.1)'; el.style.transform = 'translateY(-8px)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLDivElement; el.style.borderColor = 'rgba(62,217,184,0.15)'; el.style.background = 'rgba(62,217,184,0.05)'; el.style.transform = 'translateY(0)'; }}
            >
              <div style={{ width: '90px', height: '90px', background: 'rgba(62,217,184,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                <i className={`ti ${step.icon}`} style={{ fontSize: '50px', color: '#3ED9B8' }} />
              </div>
              <div style={{ fontSize: '36px', fontWeight: 800, color: '#3ED9B8', marginBottom: '16px' }}>{step.num}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#F5F4F2', marginBottom: '16px' }}>{step.title}</h3>
              <p style={{ fontSize: '14px', color: '#A0A0A0', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
