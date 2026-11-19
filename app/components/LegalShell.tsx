/* eslint-disable @next/next/no-img-element */
import ThemeToggle from './ThemeToggle';

const UPDATED = '20 November 2026';

export default function LegalShell({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <>
      <header className="legal-bar">
        <div className="wrap legal-bar-in">
          <a href="/" className="nav-brand" aria-label="Wayamesh home">
            <img src="/wayamesh-logo-v3.svg" alt="" width={28} height={28} />
            <span>Wayamesh</span>
          </a>
          <ThemeToggle />
        </div>
      </header>
      <main id="main" className="legal wrap">
        <p className="legal-draft">Draft pending legal review</p>
        <h1>{title}</h1>
        <p className="legal-meta">Last updated: {UPDATED}</p>
        <p className="legal-intro">{intro}</p>
        {children}
        <p className="legal-back"><a href="/" className="link">Back to wayamesh.xyz</a></p>
      </main>
      <footer className="legal-foot">
        <div className="wrap">
          <span>© 2026 Wayamesh</span>
          <span>Testnet beta on Arc. Test USDC only, no real funds.</span>
        </div>
      </footer>
    </>
  );
}
