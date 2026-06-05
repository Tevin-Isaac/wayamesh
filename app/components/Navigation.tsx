export default function Navigation() {
  return (
    <nav style={{ padding: '20px 0', borderBottom: '1px solid rgba(62,217,184,0.1)', position: 'sticky', top: 0, background: '#07070F', zIndex: 100 }}>
      <div className="waya-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700, fontSize: '18px' }}>
          <svg width="48" height="48" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="fadeGradient" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#3ED9B8" stopOpacity="1" />
                <stop offset="70%" stopColor="#3ED9B8" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3ED9B8" stopOpacity="0" />
              </radialGradient>
              <mask id="fadeMask">
                <circle cx="100" cy="100" r="80" fill="url(#fadeGradient)" />
              </mask>
            </defs>
            <g mask="url(#fadeMask)">
              {/* W pattern - 5 dots */}
              <circle cx="30" cy="130" r="8" fill="#3ED9B8" />
              <circle cx="72" cy="80" r="8" fill="#3ED9B8" />
              <circle cx="100" cy="130" r="8" fill="#3ED9B8" />
              <circle cx="128" cy="80" r="8" fill="#3ED9B8" />
              <circle cx="170" cy="130" r="8" fill="#3ED9B8" />
              {/* Connecting lines */}
              <line x1="30" y1="130" x2="72" y2="80" stroke="#3ED9B8" strokeWidth="4" strokeLinecap="round" />
              <line x1="72" y1="80" x2="100" y2="130" stroke="#3ED9B8" strokeWidth="4" strokeLinecap="round" />
              <line x1="100" y1="130" x2="128" y2="80" stroke="#3ED9B8" strokeWidth="4" strokeLinecap="round" />
              <line x1="128" y1="80" x2="170" y2="130" stroke="#3ED9B8" strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>
          wayamesh
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: '40px' }}>
          <a href="#story" className="nav-link">The story</a>
          <a href="#how" className="nav-link">How it works</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#mobile-app" className="nav-link">Try it</a>
        </div>
      </div>
    </nav>
  );
}
