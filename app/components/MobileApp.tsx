export default function MobileApp() {
  const screens = [
    { title: "Dashboard" },
    { title: "Send" },
    { title: "Agent" }
  ];

  return (
    <section id="mobile-app" className="py-24 border-t border-[rgba(62,217,184,0.1)] max-w-4xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-[clamp(1.8rem,6vw,2.8rem)] font-bold text-[var(--text)]">
          Money flows offline. Freedom in your pocket.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {screens.map((screen, idx) => (
          <div key={idx} className="text-center">
            <h3 className="text-base font-semibold text-[var(--text)] mb-6 capitalize">{screen.title}</h3>
            <div className="bg-gradient-to-br from-[rgba(62,217,184,0.1)] to-[rgba(62,217,184,0.05)] border-2 border-[rgba(62,217,184,0.2)] rounded-3xl aspect-video md:aspect-[9/16] flex items-center justify-center text-[var(--text)] mb-4 overflow-hidden">
              <div className="text-center opacity-50">
                <i className="ti ti-mobile text-4xl mb-2" />
                <p className="text-sm">App screenshot</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="#"
          className="px-7 py-3.5 border border-[var(--accent)] text-[var(--text)] font-semibold rounded-lg flex items-center gap-3 hover:bg-[var(--accent)] hover:text-[var(--bg)] hover:-translate-y-1 transition-all"
        >
          <i className="ti ti-brand-apple text-2xl" />
          Download on App Store
        </a>
        <a
          href="#"
          className="px-7 py-3.5 border border-[var(--accent)] text-[var(--text)] font-semibold rounded-lg flex items-center gap-3 hover:bg-[var(--accent)] hover:text-[var(--bg)] hover:-translate-y-1 transition-all"
        >
          <i className="ti ti-brand-google-play text-2xl" />
          Get it on Google Play
        </a>
      </div>
    </section>
  );
}
