export default function MobileApp() {
  const screens = [
    { label: "Balance & Recent TXs", title: "Dashboard" },
    { label: "Offline Payments", title: "Send" },
    { label: "AI Working", title: "Agent" },
  ];

  return (
    <section id="mobile-app" className="py-[100px] border-t border-[rgba(62,217,184,0.1)]">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-[42px] font-extrabold mb-4 text-center text-[#F5F4F2]">
          Money flows offline. Freedom in your pocket.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[60px] mb-[50px]">
          {screens.map((screen, idx) => (
            <div key={idx} className="text-center">
              <div
                className="bg-[rgba(62,217,184,0.1)] border border-[rgba(62,217,184,0.2)] rounded-2xl flex items-center justify-center text-[#A0A0A0] text-sm"
                style={{ aspectRatio: '9/16', minHeight: '500px' }}
              >
                {screen.title}
              </div>
              <div className="mt-4 text-sm font-bold text-[#3ED9B8]">{screen.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-5 justify-center flex-wrap">
          <button className="px-8 py-3.5 border-2 border-[#3ED9B8] bg-[rgba(62,217,184,0.1)] text-[#3ED9B8] rounded-xl font-bold text-sm flex items-center gap-2.5 cursor-pointer transition-all hover:bg-[#3ED9B8] hover:text-[#07070F]">
            <i className="ti ti-brand-apple text-[22px]" />
            Download on App Store
          </button>
          <button className="px-8 py-3.5 border-2 border-[#3ED9B8] bg-[rgba(62,217,184,0.1)] text-[#3ED9B8] rounded-xl font-bold text-sm flex items-center gap-2.5 cursor-pointer transition-all hover:bg-[#3ED9B8] hover:text-[#07070F]">
            <i className="ti ti-brand-google-play text-[22px]" />
            Get it on Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
