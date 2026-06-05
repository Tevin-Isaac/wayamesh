'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const heroSection = heroSectionRef.current;
    const heroBg = heroBgRef.current;

    if (!heroSection || !heroBg) return;

    const lightCircle = document.createElement('div');
    lightCircle.style.cssText = `
      position: absolute;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(62, 217, 184, 0.15) 0%, rgba(62, 217, 184, 0) 70%);
      border-radius: 50%;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      filter: blur(40px);
      top: -150px;
      left: -150px;
      z-index: 1;
    `;
    heroBg.appendChild(lightCircle);

    const heroLines = heroBg.querySelectorAll('.hero-bg-lines path');
    const heroParticles = heroBg.querySelectorAll('.hero-bg-particles circle');

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      lightCircle.style.left = (x - 150) + 'px';
      lightCircle.style.top = (y - 150) + 'px';

      heroLines.forEach((line) => {
        (line as SVGPathElement).style.opacity = '0.25';
        (line as SVGPathElement).style.filter = 'drop-shadow(0 0 6px rgba(62, 217, 184, 0.4))';
        (line as SVGPathElement).style.transition = 'all 0.2s ease';
      });

      heroParticles.forEach((particle) => {
        (particle as SVGCircleElement).style.opacity = '0.15';
        (particle as SVGCircleElement).style.filter = 'drop-shadow(0 0 4px rgba(62, 217, 184, 0.3))';
        (particle as SVGCircleElement).style.transition = 'all 0.2s ease';
      });
    };

    const handleMouseEnter = () => {
      lightCircle.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      lightCircle.style.opacity = '0';
      heroLines.forEach((line) => {
        (line as SVGPathElement).style.opacity = '0.2';
        (line as SVGPathElement).style.filter = 'none';
      });
      heroParticles.forEach((particle) => {
        (particle as SVGCircleElement).style.opacity = '0.1';
        (particle as SVGCircleElement).style.filter = 'none';
      });
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseenter', handleMouseEnter);
    heroSection.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      heroSection.removeEventListener('mousemove', handleMouseMove);
      heroSection.removeEventListener('mouseenter', handleMouseEnter);
      heroSection.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      ref={heroSectionRef}
      id="hero"
      className="min-h-screen flex items-center justify-center pt-32 pb-16 relative overflow-hidden text-center cursor-pointer"
    >
      <svg
        ref={heroBgRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3ED9B8" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#3ED9B8" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        <rect width="1000" height="1000" fill="url(#meshGradient)" />

        <g className="hero-bg-lines" stroke="#3ED9B8" strokeWidth="0.8" opacity="0.2" fill="none">
          <path d="M 100 100 Q 300 200, 500 100 T 900 100" strokeDasharray="1000" strokeDashoffset="1000">
            <animate attributeName="stroke-dashoffset" values="1000;0" dur="8s" repeatCount="indefinite" />
          </path>
          <path d="M 50 500 Q 250 400, 450 500 T 850 500" strokeDasharray="1000" strokeDashoffset="1000">
            <animate attributeName="stroke-dashoffset" values="1000;0" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M 200 800 Q 400 700, 600 800 T 950 800" strokeDasharray="1000" strokeDashoffset="1000">
            <animate attributeName="stroke-dashoffset" values="1000;0" dur="9s" repeatCount="indefinite" />
          </path>
        </g>

        <g className="hero-bg-particles" fill="#3ED9B8" opacity="0.1">
          <circle cx="150" cy="200" r="2.5">
            <animate attributeName="cy" values="200;100;200" dur="6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="6s" repeatCount="indefinite" />
          </circle>
          <circle cx="800" cy="400" r="2">
            <animate attributeName="cy" values="400;300;400" dur="7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="7s" repeatCount="indefinite" />
          </circle>
          <circle cx="300" cy="700" r="2.5">
            <animate attributeName="cy" values="700;600;700" dur="8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.1;0.25;0.1" dur="8s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8 justify-center font-semibold text-[0.95rem] text-[var(--accent)] animate-fadeInDown">
          <img
            src="https://www.svgrepo.com/show/428625/usdc-usd-coin.svg"
            alt="USDC Logo"
            className="w-16 h-16 drop-shadow-[0_0_15px_rgba(62,217,184,0.3)] animate-spin"
            style={{ animationDuration: '20s' }}
          />
        </div>
        <h1 className="text-[clamp(2.5rem,8vw,4rem)] font-bold mb-6 tracking-tight">
          Send USDC with no internet.
        </h1>
        <p className="text-lg text-[var(--text)] mb-10 opacity-90 leading-relaxed">
          Peer-to-peer stablecoin payments via mesh networks. AI agents handle everything offline. Settles on Arc automatically whenever you connect.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#mobile-app"
            className="px-8 py-3.5 bg-[var(--accent)] text-[var(--bg)] font-semibold rounded-lg flex items-center gap-2 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(62,217,184,0.35)] transition-all"
          >
            <i className="ti ti-download" />
            Get the app now
          </a>
        </div>
      </div>
    </section>
  );
}
