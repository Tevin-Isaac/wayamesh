export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 py-5 border-b border-[rgba(62,217,184,0.1)] bg-[#07070F]">
      <div className="max-w-[1200px] mx-auto px-10 flex justify-between items-center">
        <div className="flex items-center gap-3 font-bold text-lg">
          <svg width="36" height="36" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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

        <div className="hidden md:flex gap-10">
          {[
            { label: "The story", href: "#story" },
            { label: "How it works", href: "#how" },
            { label: "FAQ", href: "#faq" },
            { label: "Try it", href: "#mobile-app" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#F5F4F2] opacity-80 hover:opacity-100 hover:text-[#3ED9B8] transition-all no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
