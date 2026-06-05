export default function Capabilities() {
  const capabilities = [
    { icon: "ti-wifi-off", title: "Offline first", desc: "Send money anywhere, no internet needed." },
    { icon: "ti-robot", title: "AI agents", desc: "On-device agents validate & settle automatically." },
    { icon: "ti-coin", title: "Nano payments", desc: "USDC to 6 decimals. Send $0.000001." },
    { icon: "ti-zap", title: "Zero fees", desc: "Arc native USDC. No intermediaries." },
  ];

  return (
    <section id="capabilities" className="py-[100px] border-t border-[rgba(62,217,184,0.1)]">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-[42px] font-extrabold mb-4 text-center text-[#F5F4F2]">Why Wayamesh</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[60px]">
          {capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="bg-[rgba(62,217,184,0.05)] border border-[rgba(62,217,184,0.15)] rounded-xl p-8 text-center"
            >
              <i className={`ti ${cap.icon} text-[40px] text-[#3ED9B8] block mb-4`} />
              <h4 className="text-base text-[#3ED9B8] font-bold mb-3">{cap.title}</h4>
              <p className="text-[13px] text-[#A0A0A0]">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
