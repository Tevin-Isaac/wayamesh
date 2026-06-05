export default function Story() {
  return (
    <section id="story" className="waya-section">
      <div className="waya-container">
        <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '60px', textAlign: 'center', color: '#F5F4F2' }}>
          The Problem & The Solution
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
          <div style={{ background: 'rgba(62,217,184,0.05)', border: '1px solid rgba(62,217,184,0.15)', borderRadius: '16px', padding: '50px' }}>
            <h3 style={{ fontSize: '24px', color: '#3ED9B8', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700 }}>
              <i className="ti ti-alert-circle" style={{ fontSize: '28px' }} />
              The Problem
            </h3>
            <p style={{ fontSize: '15px', color: '#A0A0A0', lineHeight: 1.8 }}>
              Governments shut down the internet. Sudan (2023), Myanmar (2021), Hong Kong (2019), Iran (2022), Egypt (2011). Your money becomes trapped. Your family can't send help. No banks work. Digital payments die.
            </p>
          </div>

          <div style={{ background: 'rgba(62,217,184,0.05)', border: '1px solid rgba(62,217,184,0.15)', borderRadius: '16px', padding: '50px' }}>
            <h3 style={{ fontSize: '24px', color: '#3ED9B8', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700 }}>
              <i className="ti ti-wifi" style={{ fontSize: '28px' }} />
              The Solution
            </h3>
            <p style={{ fontSize: '15px', color: '#A0A0A0', lineHeight: 1.8, marginBottom: '16px' }}>
              Wayamesh lets you send USDC via Bluetooth mesh. Works without internet. Agents relay your money through the network. Settlement happens on Arc in the background.
            </p>
            <p style={{ fontSize: '15px', color: '#A0A0A0', lineHeight: 1.8 }}>
              You control your wallet. Your family receives USDC. Your freedom is unstoppable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
