export default function Navigation() {
  const navLinks = [
    { label: "The story", href: "#story" },
    { label: "How it works", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "Try it", href: "#mobile-app" },
  ];

  return (
    <nav className="fixed top-0 w-full z-1000 backdrop-blur-[10px] bg-[rgba(7,7,15,0.95)] border-b border-[rgba(62,217,184,0.1)] px-8 py-6 flex justify-between items-center">
      <div className="flex items-center gap-2.4">
        <svg
          className="w-10 h-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="navLogoGradient" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#3ED9B8" stopOpacity="1" />
              <stop offset="70%" stopColor="#3ED9B8" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3ED9B8" stopOpacity="0" />
            </radialGradient>
            <mask id="navLogoMask">
              <circle cx="100" cy="100" r="60" fill="url(#navLogoGradient)" />
            </mask>
          </defs>
          <g mask="url(#navLogoMask)">
            <circle cx="50" cy="80" r="5" fill="#3ED9B8" />
            <circle cx="80" cy="100" r="5" fill="#3ED9B8" />
            <circle cx="100" cy="80" r="5" fill="#3ED9B8" />
            <circle cx="120" cy="100" r="5" fill="#3ED9B8" />
            <circle cx="150" cy="80" r="5" fill="#3ED9B8" />
            <line x1="50" y1="80" x2="80" y2="100" stroke="#3ED9B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="80" y1="100" x2="100" y2="80" stroke="#3ED9B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="100" y1="80" x2="120" y2="100" stroke="#3ED9B8" strokeWidth="2" strokeLinecap="round" />
            <line x1="120" y1="100" x2="150" y2="80" stroke="#3ED9B8" strokeWidth="2" strokeLinecap="round" />
          </g>
        </svg>
        <span className="text-base font-bold tracking-tight">wayamesh</span>
      </div>

      <div className="flex gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm opacity-70 hover:opacity-100 hover:text-[var(--accent)] transition-all"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
