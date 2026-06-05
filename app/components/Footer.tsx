export default function Footer() {
  return (
    <footer className="border-t border-[rgba(62,217,184,0.1)] py-[50px] mt-20">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="flex justify-between items-center mb-5">
          <div className="font-bold text-base text-[#F5F4F2]">wayamesh</div>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F5F4F2] opacity-70 hover:opacity-100 hover:text-[#3ED9B8] transition-all"
          >
            <i className="ti ti-brand-x text-2xl" />
          </a>
        </div>
        <div className="text-center text-xs text-[#A0A0A0]">
          © 2026 Wayamesh. Offline-first USDC payments on Arc.
        </div>
      </div>
    </footer>
  );
}
