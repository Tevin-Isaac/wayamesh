export default function Capabilities() {
  const capabilities = [
    {
      icon: "ti-wifi-off",
      title: "Offline first",
      description: "Send USDC without internet via mesh network"
    },
    {
      icon: "ti-brain",
      title: "AI agents",
      description: "Smart agents run locally on your phone"
    },
    {
      icon: "ti-coin",
      title: "Nano payments",
      description: "Send amounts as small as $0.000001"
    },
    {
      icon: "ti-zap",
      title: "Zero fees",
      description: "No transaction costs. Ever."
    }
  ];

  return (
    <section className="py-16 border-t border-b border-[rgba(62,217,184,0.1)] max-w-4xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {capabilities.map((cap, idx) => (
          <div key={idx} className="px-6 py-8">
            <div className="text-4xl text-[var(--accent)] mb-4 flex justify-center">
              <i className={`ti ${cap.icon}`} />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--text)]">{cap.title}</h3>
            <p className="text-sm text-[var(--text)] opacity-80">{cap.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
