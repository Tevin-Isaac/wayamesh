'use client';

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Mesh background */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
        viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <line x1="200" y1="100" x2="400" y2="300" stroke="rgba(62,217,184,0.15)" strokeWidth="1" />
        <line x1="600" y1="150" x2="800" y2="250" stroke="rgba(62,217,184,0.15)" strokeWidth="1" />
        <line x1="100" y1="500" x2="500" y2="600" stroke="rgba(62,217,184,0.15)" strokeWidth="1" />
        <line x1="700" y1="400" x2="1000" y2="700" stroke="rgba(62,217,184,0.15)" strokeWidth="1" />
        <circle cx="250" cy="200" r="3" fill="rgba(62,217,184,0.1)" />
        <circle cx="600" cy="350" r="2" fill="rgba(62,217,184,0.1)" />
        <circle cx="800" cy="150" r="2.5" fill="rgba(62,217,184,0.1)" />
        <circle cx="400" cy="600" r="3" fill="rgba(62,217,184,0.1)" />
        <circle cx="1000" cy="250" r="2" fill="rgba(62,217,184,0.1)" />
      </svg>

      <div style={{ textAlign: 'center', maxWidth: '800px', zIndex: 2, position: 'relative', padding: '0 40px' }}>
        {/* USDC badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
          <img
            src="https://www.svgrepo.com/show/428625/usdc-usd-coin.svg"
            alt="USDC"
            style={{ width: '70px', height: '70px', filter: 'drop-shadow(0 0 15px rgba(62,217,184,0.3))', animation: 'rotate 20s linear infinite' }}
          />
        </div>

        <h1 style={{ fontSize: '56px', fontWeight: 800, marginBottom: '20px', color: '#F5F4F2', lineHeight: 1.1 }}>
          Send USDC with no internet.
        </h1>

        <p style={{ fontSize: '18px', color: '#A0A0A0', marginBottom: '40px', lineHeight: 1.6 }}>
          Peer-to-peer stablecoin payments via mesh networks. AI agents handle everything offline. Settles on Arc automatically whenever you connect.
        </p>

        <button
          style={{ background: '#3ED9B8', color: '#07070F', padding: '16px 40px', borderRadius: '12px', fontWeight: 700, fontSize: '15px', border: 'none', cursor: 'pointer', transition: 'all 0.3s', display: 'inline-block' }}
          onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = '#2ec4a3'; (e.target as HTMLButtonElement).style.transform = 'translateY(-3px)'; }}
          onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = '#3ED9B8'; (e.target as HTMLButtonElement).style.transform = 'translateY(0)'; }}
        >
          Get the app now
        </button>
      </div>
    </section>
  );
}
