export default function HowItWorks() {
  const steps = [
    {
      icon: "ti-send",
      num: "01",
      title: "Send offline",
      desc: "Create transaction. No internet needed. Your agent validates it's valid. Transaction is signed.",
    },
    {
      icon: "ti-network",
      num: "02",
      title: "Mesh relay",
      desc: "Transaction relays peer-to-peer via Bluetooth. Network grows. Money passes through until someone goes online.",
    },
    {
      icon: "ti-circle-check",
      num: "03",
      title: "Instant settle",
      desc: "Settles on Arc automatically. Receiver has USDC. Done. Transparent. Final. No delays.",
    },
  ];

  return (
    <section id="how" className="py-[100px] border-t border-[rgba(62,217,184,0.1)]">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-[42px] font-extrabold mb-4 text-center text-[#F5F4F2]">How it works</h2>
        <p className="text-lg text-[#A0A0A0] text-center mb-[60px]">Three steps. Offline-first. Agent-powered.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[rgba(62,217,184,0.05)] border border-[rgba(62,217,184,0.15)] rounded-xl px-[30px] py-10 text-center transition-all duration-300 hover:border-[#3ED9B8] hover:bg-[rgba(62,217,184,0.1)] hover:-translate-y-2"
            >
              <div className="w-[90px] h-[90px] bg-[rgba(62,217,184,0.1)] rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className={`ti ${step.icon} text-[50px] text-[#3ED9B8]`} />
              </div>
              <div className="text-[36px] font-extrabold text-[#3ED9B8] mb-4">{step.num}</div>
              <h3 className="text-lg font-bold text-[#F5F4F2] mb-4">{step.title}</h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
