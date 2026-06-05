export default function Story() {
  return (
    <section id="story" className="py-[100px] border-t border-[rgba(62,217,184,0.1)]">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-[42px] font-extrabold mb-4 text-center text-[#F5F4F2]">The Problem & The Solution</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] mt-[60px]">
          {/* Problem */}
          <div className="bg-[rgba(62,217,184,0.05)] border border-[rgba(62,217,184,0.15)] rounded-2xl p-[50px]">
            <h3 className="text-2xl text-[#3ED9B8] mb-5 flex items-center gap-3 font-bold">
              <i className="ti ti-alert-circle text-[28px]" />
              The Problem
            </h3>
            <p className="text-[15px] text-[#A0A0A0] leading-[1.8] mb-4">
              Governments shut down the internet. Sudan (2023), Myanmar (2021), Hong Kong (2019), Iran (2022), Egypt (2011). Your money becomes trapped. Your family can't send help. No banks work. Digital payments die.
            </p>
          </div>

          {/* Solution */}
          <div className="bg-[rgba(62,217,184,0.05)] border border-[rgba(62,217,184,0.15)] rounded-2xl p-[50px]">
            <h3 className="text-2xl text-[#3ED9B8] mb-5 flex items-center gap-3 font-bold">
              <i className="ti ti-wifi text-[28px]" />
              The Solution
            </h3>
            <p className="text-[15px] text-[#A0A0A0] leading-[1.8] mb-4">
              Wayamesh lets you send USDC via Bluetooth mesh. Works without internet. Agents relay your money through the network. Settlement happens on Arc in the background.
            </p>
            <p className="text-[15px] text-[#A0A0A0] leading-[1.8]">
              You control your wallet. Your family receives USDC. Your freedom is unstoppable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
