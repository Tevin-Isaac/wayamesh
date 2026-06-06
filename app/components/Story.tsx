export default function Story() {
  return (
    <section id="story" className="waya-section">
      <div className="waya-container">
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(62,217,184,0.08)', border: '1px solid rgba(62,217,184,0.2)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1.8rem', fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: '#3ED9B8' }}>
            Why we built this
          </div>

          <h2 style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#F5F4F2', lineHeight: 1.1, marginBottom: '1.6rem' }}>
            In 2022, governments cut the internet.<br />
            <span style={{ color: '#3ED9B8' }}>People couldn&apos;t spend a cent.</span>
          </h2>

          <p style={{ fontSize: '17px', color: '#888', lineHeight: 1.8, marginBottom: '1rem' }}>
            Sudan. Myanmar. Iran. People couldn&apos;t buy food, pay rent, or send money home — even with USDC sitting in their wallets. Because every digital payment, crypto included, still needs an internet connection.
          </p>

          <p style={{ fontSize: '17px', color: '#888', lineHeight: 1.8, marginBottom: '1rem' }}>
            That single assumption — that the internet is always there — is the vulnerability. Not the money. The pipes.
          </p>

          <p style={{ fontSize: '17px', color: '#888', lineHeight: 1.8, marginBottom: '1.8rem' }}>
            Wayamesh removes that assumption entirely. Send USDC over Bluetooth, phone to phone, with no towers, no banks, no connection needed. A lightweight AI agent on your device handles everything offline. Settlement on Arc happens automatically — silently, in the background — whenever any device nearby finds a signal.
          </p>

          <div style={{ borderLeft: '3px solid #3ED9B8', paddingLeft: '20px' }}>
            <p style={{ fontSize: '19px', fontWeight: 700, color: '#F5F4F2', lineHeight: 1.5, fontStyle: 'italic', margin: 0 }}>
              &ldquo;Your money works. Even when the internet doesn&apos;t.&rdquo;
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
