'use client';

import { useEffect, useRef, useCallback } from 'react';

type Ring = { x: number; y: number; r: number; alpha: number };

export default function Hero() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const ringsRef   = useRef<HTMLCanvasElement>(null);
  const secRef     = useRef<HTMLElement>(null);
  const rings      = useRef<Ring[]>([]);
  const mouseRef   = useRef({ x: -999, y: -999 });

  /* ── Bluetooth-ring hover effect ── */
  const onMouseMove = useCallback((e: MouseEvent) => {
    const sec = secRef.current;
    if (!sec) return;
    const r = sec.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    if (Math.random() < 0.18) {
      rings.current.push({ x: mouseRef.current.x, y: mouseRef.current.y, r: 0, alpha: 0.55 });
      if (rings.current.length > 18) rings.current.shift();
    }
  }, []);

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;
    sec.addEventListener('mousemove', onMouseMove as EventListener);
    return () => sec.removeEventListener('mousemove', onMouseMove as EventListener);
  }, [onMouseMove]);

  /* ── Rings canvas ── */
  useEffect(() => {
    const canvas = ringsRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth  * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      rings.current = rings.current.filter(r => r.alpha > 0.01);
      for (const ring of rings.current) {
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(62,217,184,${ring.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ring.r     += 2.2;
        ring.alpha *= 0.91;
      }
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  /* ── Phone-to-phone USDC animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth  * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }
    resize();
    window.addEventListener('resize', resize);

    type Phase = 'ripple' | 'travel' | 'land' | 'pause';
    let phase: Phase = 'ripple';
    let fc = 0;
    const DUR: Record<Phase, number> = { ripple: 85, travel: 75, land: 40, pause: 55 };
    const ORDER: Phase[] = ['ripple', 'travel', 'land', 'pause'];

    function drawPhone(x: number, y: number, pw: number, ph: number, glow: number) {
      if (!ctx) return;
      if (glow > 0) {
        const g = ctx.createRadialGradient(x, y, 0, x, y, pw * 2.5);
        g.addColorStop(0, `rgba(62,217,184,${0.2 * glow})`);
        g.addColorStop(1, 'rgba(62,217,184,0)');
        ctx.beginPath(); ctx.arc(x, y, pw * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
      }
      ctx.beginPath();
      ctx.roundRect(x - pw / 2, y - ph / 2, pw, ph, 13);
      ctx.fillStyle   = glow > 0 ? `rgba(62,217,184,${0.07 * glow + 0.04})` : 'rgba(255,255,255,0.04)';
      ctx.strokeStyle = glow > 0 ? `rgba(62,217,184,${0.65 * glow + 0.2})` : 'rgba(255,255,255,0.10)';
      ctx.lineWidth = 1.5; ctx.fill(); ctx.stroke();
      ctx.beginPath();
      ctx.roundRect(x - 14, y - ph / 2 + 6, 28, 6, 3);
      ctx.fillStyle = glow > 0 ? `rgba(62,217,184,${0.25 * glow})` : 'rgba(255,255,255,0.07)';
      ctx.fill();
      const lc = glow > 0 ? `rgba(62,217,184,${0.35 * glow})` : 'rgba(255,255,255,0.06)';
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.roundRect(x - pw / 2 + 12, y - 8 + i * 16, pw - 24 - (i === 2 ? 18 : 0), 7, 3);
        ctx.fillStyle = lc; ctx.fill();
      }
    }

    function drawUsdc(x: number, y: number, rad: number, alpha: number) {
      if (!ctx) return;
      // Drop shadow glow
      const sg = ctx.createRadialGradient(x, y + 4, 0, x, y + 4, rad * 2.4);
      sg.addColorStop(0, `rgba(39,117,202,${0.38 * alpha})`);
      sg.addColorStop(1, 'rgba(39,117,202,0)');
      ctx.beginPath(); ctx.arc(x, y + 4, rad * 2.4, 0, Math.PI * 2);
      ctx.fillStyle = sg; ctx.fill();
      // Blue circle (official #2775CA)
      ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(39,117,202,${alpha})`; ctx.fill();
      // White ring — official USDC logo inner ring
      ctx.beginPath(); ctx.arc(x, y, rad * 0.75, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${0.88 * alpha})`;
      ctx.lineWidth = rad * 0.1; ctx.stroke();
      // White $ dollar sign
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.font = `900 ${rad * 0.78}px Arial,sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('$', x, y + rad * 0.04);
    }

    function qb(t: number, p0: number, p1: number, p2: number) {
      return (1 - t) * (1 - t) * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
    }

    function draw(ts: number) {
      if (!canvas || !ctx) return;
      const W  = canvas.offsetWidth;
      const H  = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const pw = Math.min(62, W * 0.15);
      const ph = pw * 1.85;
      const lx = W * 0.20;
      const rx = W * 0.80;
      const cy = H * 0.52;
      const cpY = cy - H * 0.3;

      fc++;
      const t = Math.min(fc / DUR[phase], 1);
      if (fc >= DUR[phase]) {
        const idx = ORDER.indexOf(phase);
        phase = ORDER[(idx + 1) % ORDER.length];
        fc = 0;
      }

      const landed  = phase === 'land' || phase === 'pause';
      const landG   = phase === 'land' ? Math.sin(t * Math.PI) : phase === 'pause' ? 1 - t * 0.4 : 0;

      drawPhone(lx, cy, pw, ph, phase === 'ripple' ? 0.5 * (1 - t) : 0);
      drawPhone(rx, cy, pw, ph, landed ? landG : 0);

      // Ripples from sender
      if (phase === 'ripple') {
        for (let i = 0; i < 3; i++) {
          const rt = ((t + i / 3) % 1);
          ctx.beginPath();
          ctx.arc(lx, cy, rt * pw * 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(62,217,184,${(1 - rt) * 0.38})`;
          ctx.lineWidth = 1; ctx.stroke();
        }
      }

      // Dashed arc path
      ctx.save(); ctx.setLineDash([4, 9]);
      ctx.beginPath(); ctx.moveTo(lx, cy);
      ctx.quadraticCurveTo((lx + rx) / 2, cpY, rx, cy);
      ctx.strokeStyle = 'rgba(62,217,184,0.10)'; ctx.lineWidth = 1.5; ctx.stroke();
      ctx.setLineDash([]); ctx.restore();

      // USDC coin in flight
      if (phase === 'travel') {
        const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const bx = qb(ease, lx, (lx + rx) / 2, rx);
        const by = qb(ease, cy, cpY, cy);
        // Glow trail
        const grad = ctx.createLinearGradient(lx, cy, bx, by);
        grad.addColorStop(0, 'rgba(62,217,184,0)');
        grad.addColorStop(1, 'rgba(62,217,184,0.15)');
        ctx.beginPath(); ctx.moveTo(lx, cy);
        ctx.quadraticCurveTo((lx + rx) / 2, cpY, bx, by);
        ctx.strokeStyle = grad; ctx.lineWidth = 2; ctx.stroke();
        drawUsdc(bx, by, pw * 0.4, 1);
      }

      // Coin resting on receiver after land
      if (landed) drawUsdc(rx, cy - ph * 0.42, pw * 0.4, Math.min(landG + 0.3, 1));

      // No-wifi icons
      const wAlpha = phase === 'ripple' ? 0.2 + 0.1 * Math.sin(ts / 500) : 0.14;
      ctx.font = `${pw * 0.45}px sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = `rgba(255,80,80,${wAlpha})`;
      ctx.fillText('✕', lx, cy - ph * 0.72);
      ctx.fillStyle = `rgba(255,80,80,${wAlpha * 0.55})`;
      ctx.fillText('✕', rx, cy - ph * 0.72);

      // Labels
      ctx.font = `600 ${Math.max(9, pw * 0.17)}px -apple-system,sans-serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(62,217,184,0.45)';
      ctx.fillText('sender', lx, cy + ph * 0.62);
      ctx.fillText('receiver', rx, cy + ph * 0.62);

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <section id="hero" ref={secRef} className="hero-sec">
      {/* Rings overlay — full section */}
      <canvas ref={ringsRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="hero-inner">
        {/* LEFT */}
        <div className="hero-left" style={{ zIndex: 2 }}>
          <h1 className="hero-heading">
            Send USDC.<br />
            <span style={{ color: '#3ED9B8' }}>No internet.</span>
          </h1>

          <p className="hero-sub">
            A 4MB AI agent on your device validates, signs, and routes your payment through the Bluetooth mesh — no internet needed to send or receive. Arc settlement runs automatically in the background, whenever any device finds a connection.
          </p>

          <button className="hero-cta">Download the app</button>
        </div>

        {/* RIGHT — app UI card */}
        <div className="hero-card" style={{ zIndex: 2 }}>
          {/* Card header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid rgba(62,217,184,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3ED9B8', animation: 'pulse 2s ease-in-out infinite' }} />
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#F5F4F2', letterSpacing: '0.01em' }}>Mesh Transfer</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '11px', color: '#3ED9B8', fontWeight: 600, background: 'rgba(62,217,184,0.08)', padding: '3px 8px', borderRadius: '20px', border: '1px solid rgba(62,217,184,0.2)' }}>Bluetooth</span>
              <span style={{ fontSize: '11px', color: '#555', fontWeight: 600 }}>No signal</span>
            </div>
          </div>

          {/* Canvas */}
          <div style={{ position: 'relative', height: '320px' }}>
            <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
          </div>

          {/* Card footer */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderTop: '1px solid rgba(62,217,184,0.08)' }}>
            <span style={{ fontSize: '11px', color: '#555' }}>Via Bluetooth mesh</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <span style={{ fontSize: '11px', color: '#555' }}>Agent settles on</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#3ED9B8' }}>Arc</span>
              <span style={{ fontSize: '11px', color: '#555' }}>automatically</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
