/* eslint-disable @next/next/no-img-element */
/* Continuously scrolling strip of the rails Wayamesh is built on. Seamless: the
   track holds identical sets and translates by exactly half. Copies are hidden
   from assistive tech. Reduced motion shows a single static set (see CSS). */

function Set({ hidden }: { hidden?: boolean }) {
  return (
    <div className="partners-set" aria-hidden={hidden ? 'true' : undefined}>
      <span className="partner-item">
        <img src="/circle-logo.svg" alt={hidden ? '' : 'Circle'} className="partner-circle" width={125} height={25} />
      </span>
      <span className="partner-item">
        <img src="/arc-logo.png" alt={hidden ? '' : 'Arc'} width={28} height={28} />
        Arc
      </span>
      <span className="partner-item">
        <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <circle cx="16" cy="16" r="16" fill="#2775CA" />
          <circle cx="16" cy="16" r="10.5" fill="none" stroke="#fff" strokeWidth="1.6" opacity="0.9" />
          <text x="16" y="17" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="13" fontWeight="900" fontFamily="Arial, sans-serif">$</text>
        </svg>
        USDC
      </span>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="wrap partners-sec" role="group" aria-label="Built on Circle, Arc and USDC">
      <p className="partners-label">Built on</p>
      <div className="partners-viewport">
        <div className="partners-track">
          <Set />
          {[1, 2, 3, 4, 5].map(i => <Set key={i} hidden />)}
        </div>
      </div>
    </div>
  );
}
