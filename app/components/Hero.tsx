'use client';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <g className="mesh-lines" stroke="rgba(62,217,184,0.15)" strokeWidth="1">
          <line x1="200" y1="100" x2="400" y2="300" />
          <line x1="600" y1="150" x2="800" y2="250" />
          <line x1="100" y1="500" x2="500" y2="600" />
          <line x1="700" y1="400" x2="1000" y2="700" />
        </g>
        <g className="mesh-particles" fill="rgba(62,217,184,0.1)">
          <circle cx="250" cy="200" r="3" />
          <circle cx="600" cy="350" r="2" />
          <circle cx="800" cy="150" r="2.5" />
          <circle cx="400" cy="600" r="3" />
          <circle cx="1000" cy="250" r="2" />
        </g>
      </svg>

      <div className="relative z-10 max-w-2xl mx-auto text-center px-8">
        {/* USDC Badge */}
        <div className="flex items-center gap-3 mb-8 justify-center font-semibold text-sm text-[var(--accent)]">
          <img
            src="https://www.svgrepo.com/show/428625/usdc-usd-coin.svg"
            alt="USDC Logo"
            className="w-16 h-16 drop-shadow-[0_0_15px_rgba(62,217,184,0.3)]"
            style={{ animation: 'rotate 20s linear infinite' }}
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl font-black mb-4 leading-tight text-[var(--text)]">
          Send USDC with no internet.
        </h1>

        {/* Subtitle */}
        <p className="text-base text-gray-400 mb-8 leading-relaxed">
          Peer-to-peer stablecoin payments via mesh networks. AI agents handle everything offline. Settles on Arc automatically whenever you connect.
        </p>

        {/* CTA Button */}
        <button className="px-8 py-3.5 bg-[var(--accent)] text-[var(--bg)] font-semibold rounded-xl hover:shadow-[0_12px_30px_rgba(62,217,184,0.35)] hover:-translate-y-1 transition-all inline-block text-sm">
          Get the app now
        </button>
      </div>
    </section>
  );
}
