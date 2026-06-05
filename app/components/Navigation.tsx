export default function Navigation() {
  const navLinks = [
    { label: "The story", href: "#story" },
    { label: "How it works", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "Try it", href: "#mobile-app" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[rgba(62,217,184,0.1)] bg-[var(--bg)] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 font-bold text-base">
          <svg width="32" height="32" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="fadeGradient" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#3ED9B8" stopOpacity="1" />
                <stop offset="70%" stopColor="#3ED9B8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3ED9B8" stopOpacity="0" />
              </radialGradient>
              <mask id="fadeMask">
                <circle cx="100" cy="100" r="60" fill="url(#fadeGradient)" />
              </mask>
            </defs>
            <g mask="url(#fadeMask)">
              <circle cx="50" cy="120" r="5" fill="#3ED9B8" />
              <circle cx="80" cy="100" r="5" fill="#3ED9B8" />
              <circle cx="100" cy="120" r="5" fill="#3ED9B8" />
              <circle cx="120" cy="100" r="5" fill="#3ED9B8" />
              <circle cx="150" cy="120" r="5" fill="#3ED9B8" />
              <line x1="50" y1="120" x2="80" y2="100" stroke="#3ED9B8" strokeWidth="2" strokeLinecap="round" />
              <line x1="80" y1="100" x2="100" y2="120" stroke="#3ED9B8" strokeWidth="2" strokeLinecap="round" />
              <line x1="100" y1="120" x2="120" y2="100" stroke="#3ED9B8" strokeWidth="2" strokeLinecap="round" />
              <line x1="120" y1="100" x2="150" y2="120" stroke="#3ED9B8" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
          wayamesh
        </div>

        {/* Nav Links */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm opacity-80 hover:opacity-100 hover:text-[var(--accent)] transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
