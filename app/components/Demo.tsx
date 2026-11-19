'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';

// "See it in the wallet": three real wallet screens (testnet, captured from
// /app). Auto-advances while visible; any click, tap or key press takes over.
const STEPS = [
  {
    title: 'Choose Sign offline',
    body: 'In the Send sheet, switch from Pay now to Sign offline. The payment is signed on your phone against your reserve, with no connection needed.',
    img: '/screens/demo-send.webp',
    alt: 'The Wayamesh Send sheet with Sign offline selected',
  },
  {
    title: 'Ask for a payment',
    body: 'The receiver opens Receive and asks for a payment. If the payer is offline, they sign it and the receiver scans what they hand back.',
    img: '/screens/demo-request.webp',
    alt: 'The Wayamesh Receive sheet with amount and note fields',
  },
  {
    title: 'Follow it to settlement',
    body: 'The wallet tracks each step to settlement on Arc. Until it settles, treat an offline payment as a promise backed by the sender’s reserve.',
    img: '/screens/demo-wallet.webp',
    alt: 'The Wayamesh wallet home with its four-step checklist',
  },
];

export default function Demo() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const o = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    o.observe(el);
    return () => o.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !visible) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI(n => (n + 1) % STEPS.length), 5200);
    return () => clearInterval(t);
  }, [auto, visible]);

  const pick = (n: number) => { setAuto(false); setI(n); };
  const onKey = (e: React.KeyboardEvent, n: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); pick((n + 1) % STEPS.length); }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); pick((n + STEPS.length - 1) % STEPS.length); }
  };

  return (
    <div className="demo" ref={root} data-reveal>
      <div className="demo-copy">
        <span className="eyebrow">See it in the wallet</span>
        <div role="tablist" aria-label="Wallet walkthrough" className="demo-tabs">
          {STEPS.map((s, n) => (
            <button
              key={s.title}
              role="tab"
              id={`demo-tab-${n}`}
              aria-selected={i === n}
              aria-controls="demo-panel"
              tabIndex={i === n ? 0 : -1}
              className={`demo-tab${i === n ? ' on' : ''}`}
              onClick={() => pick(n)}
              onKeyDown={e => onKey(e, n)}
            >
              <span className="demo-n">0{n + 1}</span>
              <span className="demo-t">
                <b>{s.title}</b>
                <span>{s.body}</span>
              </span>
              <span className="demo-bar" aria-hidden="true"><i className={auto && visible && i === n ? 'run' : ''} /></span>
            </button>
          ))}
        </div>
        <p className="demo-note">Real screens from the web wallet on Arc Testnet. Nothing here is a live payment.</p>
      </div>
      <div className="stage" id="demo-panel" role="tabpanel" aria-labelledby={`demo-tab-${i}`}>
        <div className="device">
          {STEPS.map((s, n) => (
            <img key={s.img} src={s.img} alt={s.alt} width={780} height={1688} loading="lazy" decoding="async" className={n === i ? 'on' : ''} aria-hidden={n === i ? undefined : true} />
          ))}
        </div>
      </div>
    </div>
  );
}
