'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

type Pref = 'system' | 'light' | 'dark';
const KEY = 'wayamesh-theme';
const COLORS = { light: '#fafaf7', dark: '#0b0f14' };

function readPref(): Pref {
  try {
    const v = localStorage.getItem(KEY);
    if (v === 'light' || v === 'dark') return v;
  } catch {}
  return 'system';
}

function resolve(p: Pref): 'light' | 'dark' {
  if (p === 'system') return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return p;
}

function apply(p: Pref) {
  const t = resolve(p);
  const el = document.documentElement;
  el.setAttribute('data-theme', t);
  el.style.colorScheme = t;
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', COLORS[t]);
  return t;
}

const ICON: Record<'light' | 'dark' | 'system', React.ReactNode> = {
  light: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  ),
  dark: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
    </svg>
  ),
  system: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  ),
};

const OPTIONS: { v: Pref; label: string }[] = [
  { v: 'system', label: 'System' },
  { v: 'light', label: 'Light' },
  { v: 'dark', label: 'Dark' },
];

export default function ThemeToggle() {
  const [pref, setPref] = useState<Pref>('system');
  const [resolved, setResolved] = useState<'light' | 'dark'>('light');
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const p = readPref();
    setPref(p);
    setResolved(apply(p));
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onMq = () => { if (readPref() === 'system') setResolved(apply('system')); };
    const onStorage = (e: StorageEvent) => {
      if (e.key === KEY) { const n = readPref(); setPref(n); setResolved(apply(n)); }
    };
    mq.addEventListener('change', onMq);
    window.addEventListener('storage', onStorage);
    return () => { mq.removeEventListener('change', onMq); window.removeEventListener('storage', onStorage); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => { if (root.current && !root.current.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); root.current?.querySelector<HTMLButtonElement>('.theme-btn')?.focus(); }
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const choose = useCallback((v: Pref) => {
    try { if (v === 'system') localStorage.removeItem(KEY); else localStorage.setItem(KEY, v); } catch {}
    setPref(v);
    setResolved(apply(v));
    setOpen(false);
  }, []);

  return (
    <div className="theme" ref={root}>
      <button
        type="button"
        className="theme-btn"
        aria-label={`Colour theme: ${pref}. Change theme`}
        aria-haspopup="menu"
        aria-expanded={open}
        title="Theme"
        onClick={() => setOpen(o => !o)}
      >
        {ICON[resolved]}
      </button>
      {open && (
        <div className="theme-menu" role="menu" aria-label="Colour theme">
          {OPTIONS.map(o => (
            <button
              key={o.v}
              type="button"
              role="menuitemradio"
              aria-checked={pref === o.v}
              className="theme-item"
              onClick={() => choose(o.v)}
            >
              {ICON[o.v]}
              <span>{o.label}</span>
              {pref === o.v && <i className="ti ti-check" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
