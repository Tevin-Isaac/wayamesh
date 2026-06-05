'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ borderTop: 'none' }}
    >
      <div className="text-center max-w-[800px] z-10 relative px-6">
        {/* USDC Badge */}
        <div className="flex items-center justify-center gap-3 mb-6 text-base font-semibold text-[#3ED9B8]">
          <img
            src="https://www.svgrepo.com/show/428625/usdc-usd-coin.svg"
            alt="USDC"
            className="w-[70px] h-[70px]"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(62,217,184,0.3))',
              animation: 'rotate 20s linear infinite',
            }}
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-5 leading-tight text-[#F5F4F2]">
          Send USDC with no internet.
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-[#A0A0A0] mb-10 leading-relaxed">
          Peer-to-peer stablecoin payments via mesh networks. AI agents handle everything offline. Settles on Arc automatically whenever you connect.
        </p>

        {/* CTA */}
        <button
          className="inline-block px-10 py-4 bg-[#3ED9B8] text-[#07070F] font-bold text-sm rounded-xl border-none cursor-pointer transition-all hover:bg-[#2ec4a3] hover:-translate-y-1"
        >
          Get the app now
        </button>
      </div>
    </section>
  );
}
