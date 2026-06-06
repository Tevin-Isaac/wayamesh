'use client';

import { useEffect, useRef } from 'react';

type Node = { x: number; y: number; vx: number; vy: number; r: number };

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef  = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf: number;
    const COUNT = 55;
    const LINK_DIST = 130;

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth  * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      ctx!.scale(devicePixelRatio, devicePixelRatio);
    }

    function init() {
      if (!canvas) return;
      nodesRef.current = Array.from({ length: COUNT }, () => ({
        x:  Math.random() * canvas!.offsetWidth,
        y:  Math.random() * canvas!.offsetHeight,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r:  Math.random() * 2 + 1.5,
      }));
    }

    resize();
    init();
    window.addEventListener('resize', () => { resize(); init(); });

    function draw() {
      if (!canvas || !ctx) return;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      const nodes = nodesRef.current;

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK_DIST) {
            const alpha = (1 - d / LINK_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(62,217,184,${alpha})`;
            ctx.lineWidth   = 0.8;
            ctx.stroke();
          }
        }
      }

      // Nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(62,217,184,0.5)';
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', () => {}); };
  }, []);

  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: '#07070F', borderTop: '1px solid rgba(62,217,184,0.1)', padding: '60px 0 40px' }}>
      {/* Live mesh canvas background */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.6 }}
      />

      {/* Soft vignette so content stays readable */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 100%, transparent 30%, #07070F 80%)', pointerEvents: 'none' }} />

      <div className="waya-container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(62,217,184,0.08)', marginBottom: '32px', marginTop: '16px' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
          <a
            href="https://x.com/wayamesh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#555', transition: 'color 0.2s', display: 'flex' }}
            className="footer-x"
          >
            <i className="ti ti-brand-x" style={{ fontSize: '22px' }} />
          </a>
          <span style={{ fontSize: '12px', color: '#333' }}>© 2026 Wayamesh</span>
        </div>

      </div>
    </footer>
  );
}
