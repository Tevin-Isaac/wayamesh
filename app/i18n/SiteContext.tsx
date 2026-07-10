'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Lang, type Dict } from './translations';

type Theme = 'dark' | 'light';

type SiteCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: Dict;
};

const Ctx = createContext<SiteCtx | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('waya-lang') as Lang | null;
      if (savedLang && translations[savedLang]) {
        setLangState(savedLang);
        document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
      }
      const savedTheme = localStorage.getItem('waya-theme') as Theme | null;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        setThemeState(savedTheme);
        document.documentElement.dataset.theme = savedTheme;
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('waya-lang', l); } catch {}
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem('waya-theme', t); } catch {}
  };

  return (
    <Ctx.Provider value={{ lang, setLang, theme, setTheme, t: translations[lang] }}>
      {children}
    </Ctx.Provider>
  );
}

export function useSite() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useSite must be used inside SiteProvider');
  return ctx;
}
