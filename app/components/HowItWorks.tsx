export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "ti-phone-outgoing",
      title: "Send offline",
      description: "Create transaction. No internet needed. Your agent validates it's valid. Transaction is signed."
    },
    {
      number: "02",
      icon: "ti-network",
      title: "Mesh relay",
      description: "Transaction relays peer-to-peer via Bluetooth. Network grows. Money passes through until someone goes online."
    },
    {
      number: "03",
      icon: "ti-circle-check",
      title: "Instant settle",
      description: "Settles on Arc automatically. Receiver has USDC. Done. Transparent. Final. No delays. No failures."
    }
  ];

  return (
    <section id="how" className="py-24 border-t border-[rgba(62,217,184,0.1)] max-w-4xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-[clamp(1.8rem,6vw,2.8rem)] font-bold mb-2 text-[var(--text)]">How it works</h2>
        <p className="text-base text-[var(--text)] opacity-80">Three steps. Offline-first. Agent-powered.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="text-center bg-[rgba(62,217,184,0.05)] border border-[rgba(62,217,184,0.15)] rounded-xl p-10 hover:border-[var(--accent)] hover:bg-[rgba(62,217,184,0.08)] hover:-translate-y-1 transition-all"
          >
            <div className="w-20 h-20 bg-[rgba(62,217,184,0.1)] rounded-xl flex items-center justify-center mx-auto mb-6 text-4xl text-[var(--accent)]">
              <i className={`ti ${step.icon}`} />
            </div>
            <div className="text-4xl font-bold text-[var(--accent)] mb-4">{step.number}</div>
            <h3 className="text-xl mb-3 text-[var(--text)]">{step.title}</h3>
            <p className="text-sm text-[var(--text)] opacity-80 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
