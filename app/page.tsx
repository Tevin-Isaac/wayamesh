/* eslint-disable @next/next/no-img-element */
import Nav from './components/Nav';
import BackToTop from './components/BackToTop';
import HeroVideo from './components/HeroVideo';
import Reveal from './components/Reveal';
import Marquee from './components/Marquee';
import { CONTACT_EMAIL } from './site';
import Demo from './components/Demo';
import SocialLinks from './components/SocialLinks';

const APK = 'https://github.com/Tevin-Isaac/wayamesh-mobile/releases/latest/download/wayamesh-beta.apk';
const ARCSCAN = 'https://explorer.testnet.arc.io/address/0xd619b77bb8389a632800c300969ef152099f7691';
const SECURITY_NOTES = 'https://github.com/Tevin-Isaac/wayamesh-mobile/blob/master/SECURITY.md';
const CONTACT = `mailto:${CONTACT_EMAIL}`;

const STATS = [
  { n: '1.4B', l: 'adults worldwide have no bank account', src: 'World Bank Global Findex, 2021' },
  { n: '2.6B', l: 'people are still offline', src: 'ITU Facts and Figures, 2024' },
  { n: '296', l: 'internet shutdowns in 54 countries in one year', src: 'Access Now #KeepItOn, 2024' },
];

const STEPS = [
  {
    title: 'Top up once',
    body: 'Add digital dollars from M-Pesa or any USDC wallet. A share goes into a protected reserve that backs every payment you make offline.',
  },
  {
    title: 'Pay face to face',
    body: 'No signal, no problem. Enter an amount, your phone signs it, and the other person scans it. They can check that it is backed by your on-chain reserve before they accept.',
  },
  {
    title: 'It settles by itself',
    body: 'Whoever is online first settles it on the Arc network, usually in about a second. Until it settles, treat it like a promise backed by the sender’s reserve.',
  },
];

const AUDIENCES = [
  {
    photo: '/photos/aud-merchants.webp',
    alt: 'A street food vendor serving customers at his cart on a busy market street',
    tag: 'Merchants',
    title: 'Take payments in the market, not just where there’s Wi-Fi',
    body: 'Stalls, kiosks and street vendors get paid in stable dollars on the spot, with no card machine and no failed transactions when the network drops.',
  },
  {
    photo: '/photos/aud-families.webp',
    alt: 'A family of five sitting together on stone steps outdoors at sunset',
    tag: 'Families',
    title: 'Money sent home that is ready to spend',
    body: 'Relatives receive USDC and can pay the shop down the road with it, even in a village with one bar of signal.',
  },
  {
    photo: '/photos/aud-aid.webp',
    alt: 'Three volunteers in matching yellow shirts leaning on a barrier at a public event',
    tag: 'Aid & NGOs',
    title: 'Cash assistance that reaches the last mile',
    body: 'Distribute funds that stay spendable in camps, rural areas and crisis zones, with every settled payment visible on-chain.',
  },
  {
    photo: '/photos/aud-communities.webp',
    alt: 'People walking along a tram street in a city at golden hour',
    tag: 'Communities',
    title: 'An economy that keeps running through a shutdown',
    body: 'When networks are cut, people can still buy food and pay rent. Payments queue up safely and clear when service returns.',
  },
];

const ROADMAP = [
  {
    phase: 'Now',
    state: 'live',
    status: 'Live on testnet',
    title: 'Testnet beta',
    outcome: 'Try everything today with free test USDC.',
    items: ['Android app and web wallet', 'Offline payments backed by an on-chain reserve', 'End-to-end encrypted chat that disappears in 24 hours', 'M-Pesa add money and cash out (testnet demo)'],
  },
  {
    phase: 'Next',
    state: 'next',
    status: 'Before any real funds',
    title: 'Ready for real money',
    outcome: 'Everything that has to be true before real funds move.',
    items: ['Independent security audit and a public bug bounty', 'Arc mainnet launch, once the network is live', 'Bluetooth hand-off proven on real devices', 'Google Play and iPhone apps', 'M-Pesa with a licensed partner'],
  },
  {
    phase: 'Later',
    state: 'later',
    status: 'After launch',
    title: 'Scale',
    outcome: 'Reaching the people payments forgot.',
    items: ['Merchant tools and business accounts', 'Partner API for NGOs and mobile money', 'More countries and cash-out rails', 'Multi-hop Bluetooth mesh'],
  },
];

const FAQ = [
  {
    q: 'How can I pay with no internet?',
    a: 'Before you go offline, you move some USDC into a reserve held on the blockchain. Offline, your phone signs a payment against that reserve and shows it as a QR code. The other person scans it, and whichever phone gets a connection first submits it to settle.',
  },
  {
    q: 'What if the person paying me offline cheats?',
    a: 'A payment is backed by the payer’s on-chain reserve, and you can check that it is funded as soon as you have any connection. Until it settles it is still a promise, so you choose how much you will accept offline from any one person (the default is $100). Settle as soon as you are online.',
  },
  {
    q: 'Who holds my money?',
    a: 'You do. Your keys are created and kept on your device, and Wayamesh cannot move or freeze your funds. That also means we cannot recover a lost wallet: write down your recovery phrase and keep it safe.',
  },
  {
    q: 'What does it cost, and is it live?',
    a: 'It is a testnet beta using free test USDC, so no real money moves yet. Wayamesh takes no cut: a small courier tip (0.01 USDC by default) goes to whoever settles your payment, and network fees are paid in USDC. Mainnet launch follows an independent security audit.',
  },
  {
    q: 'Which devices does it work on?',
    a: 'The Android beta and the web wallet, which runs in any modern browser with nothing to install. iPhone is coming. QR payments work between any two devices; Bluetooth hand-off is Android-only and still in beta.',
  },
];

export default function Home() {
  return (
    <>
      <Reveal />
      <Nav />

      <main id="main">
        {/* ── Hero ───────────────────────────────────────── */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
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
                <a href="#roadmap" className="btn btn-ghost btn-lg">Roadmap</a>
              </div>
              <ul className="hero-proof" data-reveal>
                <li>You hold your keys</li>
                <li>Works with no signal</li>
                <li>Dollar-denominated (USDC)</li>
              </ul>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="hero-frame">
                <HeroVideo />
                <div className="hero-frame-shade" />
              </div>

              <div className="float float-pay">
                <div className="float-head">
                  <span>Payment received</span>
                  <span className="chip chip-ok">Backed</span>
                </div>
                <div className="float-amount">+25.00 <small>USDC</small></div>
                <div className="float-meta">Example payment · test USDC</div>
              </div>
            </div>
          </div>

          <Marquee />
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
          </div>
          <div className="band">
            <img src="/photos/band-city.webp" alt="A city skyline at dusk with lit office towers" width={1600} height={700} loading="lazy" decoding="async" className="band-img" />
            <div className="band-shade" aria-hidden="true" />
            <div className="wrap">
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
          </div>
        </section>

        {/* ── Product ───────────────────────────────────── */}
        <section className="sec sec-compact" id="product">
          <div className="wrap">
            <div className="product" data-reveal>
              <div className="product-copy">
                <span className="eyebrow">The product</span>
                <h2>One wallet. <em>Every situation.</em></h2>
                <p className="product-lead">Everything you expect from a modern money app, plus the one thing none of them can do: keep working offline.</p>
                <p className="product-body">
                  Create a wallet in a minute, add test dollars and pay face to face. Ask for a payment with a request
                  code and the other phone scans it.
                </p>
                <ul className="checks">
                  <li>Works with no signal</li>
                  <li>Backed by an on-chain reserve</li>
                  <li>Your keys stay on your device</li>
                </ul>
                <a href="/app" className="btn btn-primary btn-lg">
                  Open web wallet <i className="ti ti-arrow-right" aria-hidden="true" />
                </a>
              </div>
              <div className="stage">
                <div className="device">
                  <img src="/screens/product-qr.webp" alt="The Wayamesh Receive screen showing a payment request QR code for 5.00 USDC" width={780} height={1688} loading="lazy" decoding="async" />
                </div>
              </div>
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
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
            <p className="steps-note" data-reveal>
              <i className="ti ti-lock" aria-hidden="true" />
              The payment is signed by the sender and handed over as a QR code, or over Bluetooth on Android (beta). Anyone can deliver it to the network. No one can change it.
            </p>
            <Demo />
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
                  <div className="photo photo-card">
                    <img src={a.photo} alt={a.alt} width={800} height={500} loading="lazy" decoding="async" />
                  </div>
                  <div className="aud-body">
                    <div className="aud-tag">{a.tag}</div>
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Story band ────────────────────────────────── */}
        <section className="story">
          <div className="wrap story-grid">
            <div className="story-copy" data-reveal>
              <blockquote>
                “Your money should work <em>even when the internet doesn’t.</em>”
              </blockquote>
              <p>Why we’re building Wayamesh</p>
            </div>
            <div className="photo photo-tall" data-reveal>
              <img src="/photos/story-vendor.webp" alt="A smiling street vendor holding a tray of bread rings on a city sidewalk" width={720} height={900} loading="lazy" decoding="async" />
            </div>
          </div>
        </section>

        {/* ── Security ──────────────────────────────────── */}
        <section className="sec" id="security">
          <div className="wrap split">
            <div className="split-copy" data-reveal>
              <span className="eyebrow">Security</span>
              <h2>Trust built into <em>every payment.</em></h2>
              <p className="lead">
                Offline doesn’t mean unprotected. Most crypto losses come from someone else holding your money, or from
                a hidden admin switch. Wayamesh is built so neither exists, and every safeguard is enforced by code, not by promises.
              </p>
              <ul className="points">
                <li>
                  <span className="pt-icon" aria-hidden="true"><i className="ti ti-key" /></span>
                  <div><b>Only you hold your keys</b><span>They stay on your device. No custody, no accounts and no balances to breach.</span></div>
                </li>
                <li>
                  <span className="pt-icon" aria-hidden="true"><i className="ti ti-shield-lock" /></span>
                  <div><b>No admin key to steal</b><span>The contract has no owner, pause or upgrade switch. Nobody, including us, can freeze it.</span></div>
                </li>
                <li>
                  <span className="pt-icon" aria-hidden="true"><i className="ti ti-signature" /></span>
                  <div><b>Every payment is signed and checked</b><span>Altered, replayed or expired payments are rejected, and you set your own limits.</span></div>
                </li>
              </ul>
              <p className="fine">
                Contract source verified on the explorer, 50 contract tests and 33 wallet checks. Testnet only, with no
                independent audit yet; one is planned before any real funds.
              </p>
              <div className="sec-links">
                <a href={SECURITY_NOTES} className="link" target="_blank" rel="noopener noreferrer">
                  Security notes <i className="ti ti-arrow-up-right" aria-hidden="true" />
                </a>
                <a href={ARCSCAN} className="status-chip" target="_blank" rel="noopener noreferrer">
                  <span className="pill-dot" />
                  Live on Arc Testnet
                  <i className="ti ti-arrow-up-right" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="stage stage-sm" data-reveal>
              <div className="device">
                <img src="/screens/sec-security.webp" alt="The Wayamesh Security screen: protected by your PIN, change PIN or switch to a passphrase, auto-lock" width={780} height={1688} loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Roadmap ───────────────────────────────────── */}
        <section className="sec sec-soft" id="roadmap">
          <div className="wrap">
            <div className="sec-head" data-reveal>
              <span className="eyebrow">Roadmap</span>
              <h2>Working today. <em>Built to scale.</em></h2>
              <p>The core is live as a testnet beta. Here’s the path from testnet to real money, in the order we will do it.</p>
            </div>
            <div className="road-layout">
              <ol className="road-steps">
                {ROADMAP.map((r, i) => (
                  <li className={`road-step road-${r.state}`} key={r.phase} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
                    <span className="road-marker" aria-hidden="true" />
                    <div className="road-card">
                      <div className="road-top">
                        <span className="road-phase"><span className="road-dot" />{r.phase}</span>
                        <span className="road-status">{r.status}</span>
                      </div>
                      <h3>{r.title}</h3>
                      <p className="road-outcome">{r.outcome}</p>
                      <ul>
                        {r.items.map(it => <li key={it}>{it}</li>)}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
              <aside className="road-image" data-reveal>
                <div className="stage stage-sm">
                  <div className="device">
                    <img src="/screens/road-mesh.webp" alt="The Wayamesh Mesh screen: payments held, messages carried and live relays" width={780} height={1688} loading="lazy" decoding="async" />
                  </div>
                </div>
                <p>The Mesh screen: any phone can carry a signed payment and settle it for someone else.</p>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Partners / investors ──────────────────────── */}
        <section className="sec">
          <div className="wrap">
            <div className="partner-cta" data-reveal>
              <div className="photo photo-wide">
                <img src="/photos/cta-meeting.webp" alt="Colleagues talking around a table in a bright meeting room" width={900} height={560} loading="lazy" decoding="async" />
              </div>
              <div className="partner-cta-body">
                <span className="eyebrow">Partner with us</span>
                <h2>Bringing offline payments to your network?</h2>
                <p>
                  We’re working with NGOs, mobile money operators, merchants and investors who want dollar payments to
                  reach everyone, connected or not.
                </p>
                <div className="partner-cta-actions">
                  <a href={CONTACT} className="btn btn-primary btn-lg">Talk to the team <i className="ti ti-arrow-right" aria-hidden="true" /></a>
                  <SocialLinks className="social-lg" />
                </div>
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
            <figure className="browser browser-flat get-visual" data-reveal>
              <div className="browser-bar" aria-hidden="true"><span /><span /><span /><em>wayamesh.xyz/app</em></div>
              <img src="/screens/d-wallet.webp" alt="The Wayamesh web wallet home screen" width={1280} height={800} loading="lazy" decoding="async" />
            </figure>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────── */}
        <section className="sec" id="faq">
          <div className="wrap faq">
            <div className="sec-head sec-head-left" data-reveal>
              <span className="eyebrow">FAQ</span>
              <h2>Questions, <em>answered.</em></h2>
              <p>Something else? <a href={CONTACT} className="link-inline">Email us</a>.</p>
              <div className="stage stage-xs" aria-hidden="true">
                <div className="device">
                  <img src="/screens/faq-chats.webp" alt="" width={780} height={1688} loading="lazy" decoding="async" />
                </div>
              </div>
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

      <BackToTop />

      <footer className="foot">
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <a href="#main" className="nav-brand">
              <img src="/wayamesh-logo-v3.svg" alt="" width={28} height={28} />
              <span>Wayamesh</span>
            </a>
            <p>Digital dollars that work offline.</p>
            <SocialLinks />
          </div>
          <div className="foot-col">
            <h3>Product</h3>
            <a href="#product">Features</a>
            <a href="#how">How it works</a>
            <a href="/app">Web wallet</a>
            <a href={APK}>Android beta</a>
          </div>
          <div className="foot-col">
            <h3>Company</h3>
            <a href="#who">Who it’s for</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#security">Security</a>
            <a href={CONTACT}>Contact</a>
          </div>
          <div className="foot-col">
            <h3>Resources</h3>
            <a href={SECURITY_NOTES} target="_blank" rel="noopener noreferrer">Security notes</a>
            <a href={ARCSCAN} target="_blank" rel="noopener noreferrer">Contract on ArcScan</a>
            <a href="#faq">FAQ</a>
            <a href="https://faucet.circle.com" target="_blank" rel="noopener noreferrer">Test USDC faucet</a>
          </div>
        </div>
        <div className="wrap foot-base">
          <span>© 2026 Wayamesh</span>
          <span className="foot-legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></span>
          <span>Testnet beta on Arc. Test USDC only, no real funds.</span>
        </div>
      </footer>
    </>
  );
}
