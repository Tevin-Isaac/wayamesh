/* eslint-disable @next/next/no-img-element */
import Nav from './components/Nav';
import HeroVideo from './components/HeroVideo';
import Reveal from './components/Reveal';

const APK = 'https://github.com/Tevin-Isaac/wayamesh-mobile/releases/latest/download/wayamesh-beta.apk';
const REPO = 'https://github.com/Tevin-Isaac/wayamesh-mobile';
const CONTACT = 'mailto:isaactevin67@gmail.com';

const STATS = [
  { n: '1.4B', l: 'adults worldwide have no bank account', src: 'World Bank Global Findex, 2021' },
  { n: '2.6B', l: 'people are still offline', src: 'ITU Facts and Figures, 2024' },
  { n: '296', l: 'internet shutdowns in 54 countries in one year', src: 'Access Now #KeepItOn, 2024' },
];

const STEPS = [
  {
    icon: 'ti-wallet',
    title: 'Top up once',
    body: 'Add digital dollars from M-Pesa or any USDC wallet. A share goes into a protected reserve that backs every payment you make offline.',
  },
  {
    icon: 'ti-qrcode',
    title: 'Pay face to face',
    body: 'No signal, no problem. Enter an amount, your phone signs it, and the other person scans it. They hold a real, guaranteed payment.',
  },
  {
    icon: 'ti-circle-check',
    title: 'It settles by itself',
    body: 'The moment either phone is back online, the payment clears on the Arc network. Final, in under a second, with nothing to chase.',
  },
];

const AUDIENCES = [
  {
    icon: 'ti-building-store',
    tag: 'Merchants',
    title: 'Take payments in the market, not just where there’s Wi-Fi',
    body: 'Stalls, kiosks and boda riders get paid in stable dollars on the spot, with no card machine and no failed transactions when the network drops.',
  },
  {
    icon: 'ti-home-heart',
    tag: 'Families',
    title: 'Money sent home that is ready to spend',
    body: 'Relatives receive USDC and can pay the shop down the road with it, even in a village with one bar of signal.',
  },
  {
    icon: 'ti-heart-handshake',
    tag: 'Aid & NGOs',
    title: 'Cash assistance that reaches the last mile',
    body: 'Distribute funds that stay spendable in camps, rural areas and crisis zones, with every payment traceable on-chain.',
  },
  {
    icon: 'ti-wifi-off',
    tag: 'Communities',
    title: 'An economy that keeps running through a shutdown',
    body: 'When networks are cut, people can still buy food and pay rent. Payments queue up safely and clear when service returns.',
  },
];

const ROADMAP = [
  {
    phase: 'Today',
    state: 'live',
    title: 'Public beta',
    items: ['Android app and web wallet', 'Offline payments by QR and Bluetooth', 'Agent spending limits', 'M-Pesa top-up and cash-out (pilot)'],
  },
  {
    phase: 'Next',
    state: 'next',
    title: 'Real money',
    items: ['Mainnet settlement on Arc', 'On-device fraud checks', 'Independent security audit', 'Play Store and App Store launch'],
  },
  {
    phase: 'Then',
    state: 'later',
    title: 'Scale',
    items: ['Merchant tools and business accounts', 'Partner API for NGOs and mobile money', 'More countries and cash-out rails', 'Multi-hop Bluetooth mesh'],
  },
];

const FAQ = [
  {
    q: 'Is Wayamesh live with real money?',
    a: 'Not yet. Wayamesh is in public beta on the Arc test network using test USDC, so nothing you do moves real money. Mainnet launch follows an independent security audit.',
  },
  {
    q: 'How can a payment work with no internet?',
    a: 'Before you go offline, you top up a reserve that sits on the blockchain. Offline, your phone signs a payment against that reserve and shows it as a QR code. The other person scans it and holds a payment that is already backed. Whichever phone gets online first submits it, and it settles.',
  },
  {
    q: 'Does Wayamesh hold my money?',
    a: 'No. Wayamesh is self-custody. Your keys are created and kept on your device, protected by your PIN or fingerprint. We have no account system and cannot move your funds.',
  },
  {
    q: 'Can someone change the amount after I pay?',
    a: 'No. The payment is signed by your phone. Changing the amount or the recipient breaks the signature and the network rejects it.',
  },
  {
    q: 'What is USDC?',
    a: 'USDC is a digital dollar issued by Circle. One USDC is designed to be redeemable for one US dollar, so your balance doesn’t swing like other crypto.',
  },
  {
    q: 'Which phones does it work on?',
    a: 'The Android app is available now as a beta, and the web wallet works in any modern browser. iPhone support is coming. QR payments work between any two devices; Bluetooth handoff is Android only.',
  },
];

function Phone({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`phone ${className}`}>
      <img src={src} alt={alt} width={390} height={844} loading="lazy" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Reveal />
      <Nav />

      <main id="top">
        {/* ── Hero ───────────────────────────────────────── */}
        <section className="hero">
          <div className="hero-glow" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <a href="#roadmap" className="pill" data-reveal>
                <span className="pill-dot" />
                Public beta now open
                <i className="ti ti-arrow-right" aria-hidden="true" />
              </a>
              <h1 data-reveal>
                Money that keeps moving <em>when the internet stops.</em>
              </h1>
              <p className="lede" data-reveal>
                Wayamesh is a digital dollar wallet that works offline. Pay anyone face to face with a scan, and the
                payment settles the moment either phone reconnects.
              </p>
              <div className="cta-row" data-reveal>
                <a href="#get" className="btn btn-primary btn-lg">
                  Get the app <i className="ti ti-arrow-right" aria-hidden="true" />
                </a>
                <a href="/app" className="btn btn-ghost btn-lg">Try it in your browser</a>
              </div>
              <ul className="hero-proof" data-reveal>
                <li><i className="ti ti-shield-lock" aria-hidden="true" />You hold your keys</li>
                <li><i className="ti ti-wifi-off" aria-hidden="true" />Works with no signal</li>
                <li><i className="ti ti-currency-dollar" aria-hidden="true" />Stable, dollar-backed</li>
              </ul>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="hero-frame">
                <HeroVideo />
                <div className="hero-frame-shade" />
              </div>

              <div className="float float-signal">
                <span className="float-icon float-icon-warn"><i className="ti ti-wifi-off" aria-hidden="true" /></span>
                <div>
                  <b>No connection</b>
                  <span>Payment signed on device</span>
                </div>
              </div>

              <div className="float float-pay">
                <div className="float-head">
                  <span>Payment received</span>
                  <span className="chip chip-ok">Backed</span>
                </div>
                <div className="float-amount">+25.00 <small>USDC</small></div>
                <div className="float-meta">From Amina · Gikomba Market</div>
              </div>

              <div className="float float-settle">
                <span className="float-icon"><i className="ti ti-check" aria-hidden="true" /></span>
                <div>
                  <b>Settled on Arc</b>
                  <span>Back online · 0.5s</span>
                </div>
              </div>
            </div>
          </div>

          <div className="wrap partners" data-reveal>
            <span>Built on</span>
            <div className="partner"><img src="/circle-logo.svg" alt="Circle" height={22} /> USDC</div>
            <div className="partner"><img src="/arc-logo.png" alt="" height={22} /> Arc</div>
            <div className="partner"><i className="ti ti-brand-github" aria-hidden="true" /> Open source</div>
          </div>
        </section>

        {/* ── Problem ────────────────────────────────────── */}
        <section className="sec problem">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <span className="eyebrow">The problem</span>
              <h2>Every digital payment assumes a connection. <em>Billions don’t have one.</em></h2>
              <p>
                Mobile money, cards and crypto all stop the moment the network does. In Sudan, Myanmar and Iran, people
                with money in their wallets couldn’t buy food when the internet was cut. Across Sub-Saharan Africa,
                patchy coverage breaks payments every day.
              </p>
            </div>
            <div className="stats">
              {STATS.map((s, i) => (
                <div className="stat" key={s.n} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="stat-n">{s.n}</div>
                  <div className="stat-l">{s.l}</div>
                  <div className="stat-src">{s.src}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Product bento ─────────────────────────────── */}
        <section className="sec" id="product">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <span className="eyebrow">The product</span>
              <h2>One wallet. <em>Every situation.</em></h2>
              <p>Everything you expect from a modern money app, plus the one thing none of them can do: keep working offline.</p>
            </div>

            <div className="bento">
              <article className="tile tile-hero" data-reveal>
                <div className="tile-copy">
                  <span className="tile-icon"><i className="ti ti-wifi-off" aria-hidden="true" /></span>
                  <h3>Pay with zero bars</h3>
                  <p>Send money in a basement, a bus or a blackout. Your phone signs the payment and the other person scans it. Done.</p>
                  <ul className="ticks">
                    <li>Backed by an on-chain reserve</li>
                    <li>Can’t be edited or double-spent</li>
                    <li>Clears automatically later</li>
                  </ul>
                </div>
                <div className="tile-phones">
                  <Phone src="/screens/m-wallet.webp" alt="Wayamesh wallet home screen" className="phone-front" />
                </div>
              </article>

              <article className="tile" data-reveal>
                <span className="tile-icon"><i className="ti ti-qrcode" aria-hidden="true" /></span>
                <h3>Scan to pay</h3>
                <p>Works between any two devices, phone or browser. On Android, tap to send over Bluetooth.</p>
                <div className="tile-art art-qr" aria-hidden="true">
                  <img src="/screens/m-receive.webp" alt="" loading="lazy" />
                </div>
              </article>

              <article className="tile" data-reveal>
                <span className="tile-icon"><i className="ti ti-arrows-exchange" aria-hidden="true" /></span>
                <h3>M-Pesa in and out</h3>
                <p>Top up from M-Pesa and cash out to it. No exchange account, no bank.</p>
                <div className="tile-art art-rail" aria-hidden="true">
                  <div className="rail-row"><span>M-Pesa</span><b>KES 3,250</b></div>
                  <i className="ti ti-arrow-down" />
                  <div className="rail-row rail-row-accent"><span>Wayamesh</span><b>25.00 USDC</b></div>
                </div>
              </article>



              <article className="tile tile-wide" data-reveal>
                <div className="tile-copy">
                  <span className="tile-icon"><i className="ti ti-browser" aria-hidden="true" /></span>
                  <h3>Also in your browser</h3>
                  <p>The same wallet runs on any laptop or phone browser. Nothing to install.</p>
                  <a href="/app" className="link">Open the web wallet <i className="ti ti-arrow-right" aria-hidden="true" /></a>
                </div>
                <div className="browser" aria-hidden="true">
                  <div className="browser-bar"><span /><span /><span /><em>wayamesh.xyz/app</em></div>
                  <img src="/screens/d-wallet.webp" alt="" loading="lazy" />
                </div>
              </article>
              <article className="tile" data-reveal>
                <span className="tile-icon"><i className="ti ti-adjustments-dollar" aria-hidden="true" /></span>
                <h3>Spending limits for automations</h3>
                <p>Let an app or AI agent pay on your behalf, with per-payment, daily and total caps it can’t exceed.</p>
                <div className="tile-art art-limits" aria-hidden="true">
                  <div className="limit"><span>Daily cap</span><div className="bar"><i style={{ width: '62%' }} /></div><b>$31 / $50</b></div>
                  <div className="limit"><span>Per payment</span><div className="bar"><i style={{ width: '40%' }} /></div><b>$10 max</b></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────── */}
        <section className="sec sec-ink" id="how">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <span className="eyebrow">How it works</span>
              <h2>Three steps. <em>No signal required.</em></h2>
            </div>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li className="step" key={s.title} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="step-top">
                    <span className="step-n">0{i + 1}</span>
                    <span className="step-icon"><i className={`ti ${s.icon}`} aria-hidden="true" /></span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
            <p className="steps-note" data-reveal>
              <i className="ti ti-lock" aria-hidden="true" />
              The QR code is the payment itself, signed by the sender. Anyone can deliver it to the network. No one can change it.
            </p>
          </div>
        </section>

        {/* ── Who it's for ──────────────────────────────── */}
        <section className="sec" id="who">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <span className="eyebrow">Who it’s for</span>
              <h2>Built for the places <em>payments forgot.</em></h2>
            </div>
            <div className="audiences">
              {AUDIENCES.map((a, i) => (
                <article className="aud" key={a.tag} data-reveal style={{ transitionDelay: `${(i % 2) * 80}ms` }}>
                  <div className="aud-tag"><i className={`ti ${a.icon}`} aria-hidden="true" />{a.tag}</div>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Story band ────────────────────────────────── */}
        <section className="story">
          <img src="/africa-poster.jpg" alt="" className="story-bg" loading="lazy" />
          <div className="story-shade" />
          <div className="wrap story-inner" data-reveal>
            <blockquote>
              “Your money should work <em>even when the internet doesn’t.</em>”
            </blockquote>
            <p>Why we’re building Wayamesh</p>
          </div>
        </section>

        {/* ── Security ──────────────────────────────────── */}
        <section className="sec" id="security">
          <div className="wrap security">
            <div className="sec-head sec-head-left" data-reveal>
              <span className="eyebrow">Security</span>
              <h2>Trust built into <em>every payment.</em></h2>
              <p>Offline doesn’t mean unprotected. Every safeguard is enforced by code, not by promises.</p>
              <a href={REPO} className="link" target="_blank" rel="noopener noreferrer">
                Read the code on GitHub <i className="ti ti-arrow-up-right" aria-hidden="true" />
              </a>
            </div>
            <div className="sec-grid">
              {[
                { i: 'ti-building-bank', t: 'Reserve-backed', b: 'Offline payments draw on funds already locked on-chain, so the receiver knows the money is there.' },
                { i: 'ti-signature', t: 'Tamper-proof', b: 'Every payment is cryptographically signed. Change one digit and it’s rejected.' },
                { i: 'ti-key', t: 'Self-custody', b: 'Your keys never leave your device. Wayamesh can’t freeze, move or lose your money.' },
                { i: 'ti-code', t: 'Open source', b: 'The app is public on GitHub for anyone to inspect. A full independent audit comes before mainnet.' },
              ].map((s, i) => (
                <div className="sec-card" key={s.t} data-reveal style={{ transitionDelay: `${i * 70}ms` }}>
                  <i className={`ti ${s.i}`} aria-hidden="true" />
                  <h3>{s.t}</h3>
                  <p>{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roadmap ───────────────────────────────────── */}
        <section className="sec sec-soft" id="roadmap">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <span className="eyebrow">Roadmap</span>
              <h2>Working today. <em>Built to scale.</em></h2>
              <p>The core is live in public beta. Here’s the path from testnet to real money in millions of pockets.</p>
            </div>
            <div className="road">
              {ROADMAP.map((r, i) => (
                <div className={`road-col road-${r.state}`} key={r.phase} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                  <div className="road-phase">
                    <span className="road-dot" />
                    {r.phase}
                  </div>
                  <h3>{r.title}</h3>
                  <ul>
                    {r.items.map(it => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Partners / investors ──────────────────────── */}
        <section className="sec">
          <div className="wrap">
            <div className="partner-cta" data-reveal>
              <div>
                <span className="eyebrow">Partner with us</span>
                <h2>Bringing offline payments to your network?</h2>
                <p>
                  We’re working with NGOs, mobile money operators, merchants and investors who want dollar payments to
                  reach everyone, connected or not.
                </p>
              </div>
              <div className="partner-cta-actions">
                <a href={CONTACT} className="btn btn-primary btn-lg">Talk to the team <i className="ti ti-arrow-right" aria-hidden="true" /></a>
                <a href="https://x.com/wayamesh" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">Follow on X</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Get the app ───────────────────────────────── */}
        <section className="sec sec-ink get" id="get">
          <div className="wrap get-grid">
            <div data-reveal>
              <span className="eyebrow">Get Wayamesh</span>
              <h2>Start paying offline <em>in two minutes.</em></h2>
              <p className="get-sub">Create a wallet, add test dollars, and try your first offline payment. Free during the beta.</p>
              <div className="stores">
                <a href={APK} className="store">
                  <i className="ti ti-brand-android" aria-hidden="true" />
                  <span><small>Download for</small>Android</span>
                </a>
                <a href="/app" className="store">
                  <i className="ti ti-world" aria-hidden="true" />
                  <span><small>Open in</small>Your browser</span>
                </a>
                <span className="store store-off" aria-disabled="true">
                  <i className="ti ti-brand-apple" aria-hidden="true" />
                  <span><small>Coming soon</small>iPhone</span>
                </span>
              </div>
              <p className="fine">
                Beta runs on Arc Testnet with test USDC. Get free test dollars at{' '}
                <a href="https://faucet.circle.com" target="_blank" rel="noopener noreferrer">faucet.circle.com</a>.
              </p>
            </div>
            <div className="get-phones" data-reveal aria-hidden="true">
              <Phone src="/screens/m-receive.webp" alt="" className="phone-back" />
              <Phone src="/screens/m-wallet.webp" alt="" className="phone-front" />
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <section className="sec" id="faq">
          <div className="wrap faq">
            <div className="sec-head sec-head-left" data-reveal>
              <span className="eyebrow">FAQ</span>
              <h2>Questions, <em>answered.</em></h2>
              <p>Something else? <a href={CONTACT} className="link-inline">Email us</a>.</p>
            </div>
            <div className="faq-list">
              {FAQ.map(f => (
                <details key={f.q} data-reveal>
                  <summary>{f.q}<i className="ti ti-plus" aria-hidden="true" /></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <a href="#top" className="nav-brand">
              <img src="/wayamesh-logo-v3.svg" alt="" width={28} height={28} />
              <span>Wayamesh</span>
            </a>
            <p>Digital dollars that work offline.</p>
          </div>
          <div className="foot-col">
            <h4>Product</h4>
            <a href="#product">Features</a>
            <a href="#how">How it works</a>
            <a href="/app">Web wallet</a>
            <a href={APK}>Android beta</a>
          </div>
          <div className="foot-col">
            <h4>Company</h4>
            <a href="#who">Who it’s for</a>
            <a href="#roadmap">Roadmap</a>
            <a href={CONTACT}>Contact</a>
            <a href="https://x.com/wayamesh" target="_blank" rel="noopener noreferrer">X / Twitter</a>
          </div>
          <div className="foot-col">
            <h4>Developers</h4>
            <a href={REPO} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#security">Security</a>
            <a href="https://faucet.circle.com" target="_blank" rel="noopener noreferrer">Test USDC faucet</a>
          </div>
        </div>
        <div className="wrap foot-base">
          <span>© 2026 Wayamesh</span>
          <span>Public beta on Arc Testnet. Test USDC only, no real funds.</span>
        </div>
      </footer>
    </>
  );
}
