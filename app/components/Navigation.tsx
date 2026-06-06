'use client';

import { useState, useRef } from 'react';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);

  function handleLogoClick() {
    const el = logoRef.current;
    if (!el) return;
    el.classList.remove('logo-pop');
    void el.offsetWidth;
    el.classList.add('logo-pop');
  }

  return (
    <nav style={{ padding: '20px 0', borderBottom: '1px solid rgba(62,217,184,0.1)', position: 'sticky', top: 0, background: 'rgba(7,7,15,0.92)', backdropFilter: 'blur(12px)', zIndex: 100 }}>
      <div className="waya-container nav-inner">
        {/* Logo */}
        <a href="#" ref={logoRef} onClick={handleLogoClick} className="nav-logo">
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
              <circle cx="30" cy="70" r="8" fill="#3ED9B8" />
              <circle cx="72" cy="130" r="8" fill="#3ED9B8" />
              <circle cx="100" cy="85" r="8" fill="#3ED9B8" />
              <circle cx="128" cy="130" r="8" fill="#3ED9B8" />
              <circle cx="170" cy="70" r="8" fill="#3ED9B8" />
              <line x1="30" y1="70" x2="72" y2="130" stroke="#3ED9B8" strokeWidth="4" strokeLinecap="round" />
              <line x1="72" y1="130" x2="100" y2="85" stroke="#3ED9B8" strokeWidth="4" strokeLinecap="round" />
              <line x1="100" y1="85" x2="128" y2="130" stroke="#3ED9B8" strokeWidth="4" strokeLinecap="round" />
              <line x1="128" y1="130" x2="170" y2="70" stroke="#3ED9B8" strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>
          <span>wayamesh</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#story"      className="nav-link">The story</a>
          <a href="#how"        className="nav-link">How it works</a>
          <a href="#mobile-app" className="nav-link">Try it</a>
        </div>

        {/* Hamburger */}
        <button
          className={`nav-burger${menuOpen ? ' nav-burger-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          <a href="#story"      className="nav-mobile-link" onClick={() => setMenuOpen(false)}>The story</a>
          <a href="#how"        className="nav-mobile-link" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#mobile-app" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>Try it</a>
        </div>
      )}
    </nav>
  );
}
