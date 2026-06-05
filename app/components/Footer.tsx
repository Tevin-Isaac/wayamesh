export default function Footer() {
  return (
    <footer className="border-t border-[rgba(62,217,184,0.1)] py-12 px-8 text-center text-[var(--text)] text-sm">
      <div className="max-w-4xl mx-auto">
        <div className="font-bold text-base mb-8">wayamesh</div>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://twitter.com/wayamesh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-70 hover:opacity-100 hover:text-[var(--accent)] transition-all font-semibold"
          >
            <i className="ti ti-brand-x text-2xl" />
            X
          </a>
        </div>
        <div className="opacity-60">
          Peer-to-peer. Offline-first. Global.
        </div>
      </div>
    </footer>
  );
}
