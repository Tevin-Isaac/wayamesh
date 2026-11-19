'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const LINKS = [
  { href: '#product', label: 'Product' },
  { href: '#how', label: 'How it works' },
  { href: '#who', label: 'Who it’s for' },
  { href: '#security', label: 'Security' },
  { href: '#roadmap', label: 'Roadmap' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`nav${scrolled ? ' nav-scrolled' : ''}${open ? ' nav-open' : ''}`}>
      <div className="nav-inner wrap">
        <a href="#top" className="nav-brand" aria-label="Wayamesh home">
          <img src="/wayamesh-logo-v3.svg" alt="" width={28} height={28} />
          <span>Wayamesh</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <a href="/app" className="nav-signin">Open wallet</a>
          <ThemeToggle />
          <a href="#get" className="btn btn-sm btn-primary">Get the app</a>
          <button
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <i className={`ti ${open ? 'ti-x' : 'ti-menu-2'}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="nav-sheet" hidden={!open}>
        {LINKS.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="/app" onClick={() => setOpen(false)}>Open web wallet</a>
        <a href="#get" className="btn btn-primary" onClick={() => setOpen(false)}>Get the app</a>
      </div>
    </header>
  );
}
