'use client';

import { useEffect, useRef, useState } from 'react';
import { useSite } from '../i18n/SiteContext';
import { LANGS } from '../i18n/translations';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, theme, setTheme, t } = useSite();

  const current = LANGS.find(l => l.code === lang) ?? LANGS[0];

  function handleLogoClick() {
    const el = logoRef.current;
    if (!el) return;
    el.classList.remove('logo-pop');
    void el.offsetWidth;
    el.classList.add('logo-pop');
  }

  useEffect(() => {
    if (!langOpen) return;
    function onDocClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [langOpen]);

  return (
    <nav style={{ padding: '16px 0', position: 'fixed', top: 0, left: 0, right: 0, background: 'transparent', zIndex: 100, pointerEvents: 'none' }}>
      <div className="waya-container nav-inner" style={{ pointerEvents: 'auto' }}>
        {/* Logo — v3: coin traveling the wire through mesh nodes */}
        <a href="#" ref={logoRef} onClick={handleLogoClick} className="nav-logo">
          <svg width="44" height="44" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#3ED9B8" strokeWidth="11" strokeLinecap="round" fill="none">
              <path d="M 56.7 183.5 A 212 212 0 0 1 455.3 183.5" />
              <path d="M 455.3 328.5 A 212 212 0 0 1 56.7 328.5" />
            </g>
            <polygon points="462.8,204.2 443.1,187.9 467.5,179.1" fill="#3ED9B8" />
            <polygon points="49.2,307.8 68.9,324.1 44.5,332.9" fill="#3ED9B8" />
            <g stroke="#3ED9B8" strokeWidth="11" strokeLinecap="round" fill="none" opacity="0.9">
              <line x1="106" y1="214" x2="181" y2="298" />
              <line x1="181" y1="298" x2="256" y2="214" />
              <line x1="256" y1="214" x2="331" y2="298" />
              <line x1="331" y1="298" x2="406" y2="214" />
            </g>
            <g fill="#3ED9B8">
              <circle cx="106" cy="214" r="13" />
              <circle cx="181" cy="298" r="13" />
              <circle cx="331" cy="298" r="13" />
              <circle cx="406" cy="214" r="13" />
            </g>
            <circle cx="256" cy="214" r="16" fill="#3ED9B8" />
            <circle cx="256" cy="214" r="30" fill="none" stroke="#3ED9B8" strokeWidth="6" opacity="0.55" />
          </svg>
          <span>wayamesh</span>
        </a>

        {/* Desktop links */}
        <div className="nav-links">
          <a href="#story"      className="nav-link">{t.nav.story}</a>
          <a href="#how"        className="nav-link">{t.nav.how}</a>
          <a href="#mobile-app" className="nav-link">{t.nav.tryIt}</a>
        </div>

        {/* Controls: language + theme + burger */}
        <div className="nav-controls">
          <div className="lang-wrap" ref={langRef}>
            <button
              className="nav-icon-btn"
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Change language"
              aria-expanded={langOpen}
              title={current.name}
            >
              <span className="lang-flag" style={{ fontSize: '20px' }}>{current.flag}</span>
            </button>
            {langOpen && (
              <div className="lang-menu">
                {LANGS.map(l => (
                  <button
                    key={l.code}
                    className={`lang-option${l.code === lang ? ' lang-option-active' : ''}`}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                  >
                    <span className="lang-flag">{l.flag}</span>
                    {l.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="nav-icon-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle light/dark mode"
          >
            <i className={`ti ${theme === 'dark' ? 'ti-sun' : 'ti-moon'}`} style={{ fontSize: '18px' }} />
          </button>

          {/* Hamburger */}
          <button
            className={`nav-burger${menuOpen ? ' nav-burger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={{ pointerEvents: 'auto' }}>
          <a href="#story"      className="nav-mobile-link" onClick={() => setMenuOpen(false)}>{t.nav.story}</a>
          <a href="#how"        className="nav-mobile-link" onClick={() => setMenuOpen(false)}>{t.nav.how}</a>
          <a href="#mobile-app" className="nav-mobile-link" onClick={() => setMenuOpen(false)}>{t.nav.tryIt}</a>
        </div>
      )}
    </nav>
  );
}
