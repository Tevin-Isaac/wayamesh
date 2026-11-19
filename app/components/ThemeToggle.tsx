'use client';

import { useCallback, useEffect, useState } from 'react';

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

export default function ThemeToggle() {
  const [resolved, setResolved] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    setResolved(apply(readPref()));
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    // Until the visitor clicks, follow the operating system live.
    const onMq = () => { if (readPref() === 'system') setResolved(apply('system')); };
    // Keep other tabs (and the web wallet at /app, same origin) in step.
    const onStorage = (e: StorageEvent) => { if (e.key === KEY) setResolved(apply(readPref())); };
    mq.addEventListener('change', onMq);
    window.addEventListener('storage', onStorage);
    return () => { mq.removeEventListener('change', onMq); window.removeEventListener('storage', onStorage); };
  }, []);

  const flip = useCallback(() => {
    const next: 'light' | 'dark' = resolved === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(KEY, next); } catch {}
    setResolved(apply(next));
  }, [resolved]);

  // The icon shows where a click takes you: a sun in dark mode, a moon in light mode.
  const target = resolved === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      className="theme-btn"
      aria-label={`Switch to ${target} mode`}
      title={`Switch to ${target} mode`}
      onClick={flip}
    >
      {ICON[target]}
    </button>
  );
}
