import type { Metadata } from 'next';
import LegalShell from '../components/LegalShell';
import { CONTACT_EMAIL } from '../site';

export const metadata: Metadata = {
  title: 'Privacy Policy — Wayamesh',
  description: 'What the Wayamesh website, web wallet and testnet demos do with your data.',
  alternates: { canonical: '/privacy' },
};

export default function Privacy() {
  return (
    <LegalShell
      title="Privacy Policy"
      intro="Wayamesh is a testnet beta. It uses test USDC and moves no real money. This page explains in plain words what the website and the web wallet do with data. It is a draft and will change."
    >
      <h2>The short version</h2>
      <ul>
        <li>The website sets no tracking cookies and runs no analytics or advertising scripts.</li>
        <li>Your wallet keys and chat messages stay on your device. We have no account system and cannot see or recover them.</li>
        <li>Some third parties see technical data such as your IP address when your browser contacts them. They are listed below.</li>
      </ul>

      <h2>The website (wayamesh.xyz)</h2>
      <ul>
        <li><b>Cookies and analytics:</b> none. The site has no analytics, tag manager or advertising code.</li>
        <li><b>Your theme choice:</b> if you pick Light or Dark, the choice is saved in your browser&rsquo;s local storage under the key <code>wayamesh-theme</code>. It never leaves your device.</li>
        <li><b>Hosting:</b> the site is served by Vercel. Like any host, it may keep standard server logs (for example IP address, requested page and browser type) for security and operations.</li>
        <li><b>Fonts:</b> the site&rsquo;s fonts are downloaded at build time and served from our own domain, so your browser does not contact Google Fonts for the main site.</li>
        <li><b>Icons:</b> the icon stylesheet is loaded from the jsDelivr CDN, so your browser contacts jsDelivr and shares your IP address and browser details with it.</li>
        <li><b>Links out:</b> LinkedIn, X, GitHub, the Arc block explorer and Circle&rsquo;s test faucet are separate sites with their own policies.</li>
      </ul>

      <h2>The web wallet (/app)</h2>
      <ul>
        <li><b>Storage:</b> your wallet data, including your encrypted keys and your contacts, is stored in your browser only. Clearing site data removes it. Without your seed phrase it cannot be recovered; see the Terms.</li>
        <li><b>Fonts:</b> the wallet page loads fonts from Google Fonts, so your browser contacts Google for those files.</li>
        <li><b>Arc Testnet:</b> to show balances and submit transactions, the wallet talks to public Arc Testnet RPC providers. They can see your IP address and the addresses and transactions you query or send. Anything sent to the blockchain is public.</li>
        <li><b>Chat:</b> messages are end-to-end encrypted on your device and sent through public Nostr relays. The relays cannot read the contents but can see network addresses, public keys and timing. Messages expire after 24 hours, although relays and other recipients are outside our control and we cannot guarantee deletion.</li>
        <li><b>Connecting another wallet:</b> if you choose to connect an external wallet, the connection may go through WalletConnect&rsquo;s relay service.</li>
        <li><b>Circle services:</b> some testnet features call Circle&rsquo;s test services. Circle&rsquo;s own terms and privacy notice apply to those calls.</li>
      </ul>

      <h2>The M-Pesa demo</h2>
      <p>
        The M-Pesa top-up and cash-out is a testnet demo and is not live. If you use it, the phone number and amount you enter are sent to the demo ramp server run by the Wayamesh team. No real money moves. Only use it if you are comfortable sharing that information.
      </p>

      <h2>The Android app</h2>
      <p>
        The Android beta keeps keys on your device in the same way as the web wallet and talks to the same kinds of services (Arc Testnet RPC, Nostr relays). Bluetooth hand-off is an Android-only beta and works between phones near each other.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell your data.</li>
        <li>We do not create accounts, profiles or advertising IDs.</li>
        <li>We cannot access your keys, balance, contacts or messages.</li>
      </ul>

      <h2>Your choices</h2>
      <p>
        You can clear your browser&rsquo;s site data at any time to remove everything the website and web wallet store locally. Back up your seed phrase first if you want to keep the wallet. For any question about data, email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="link-inline">{CONTACT_EMAIL}</a>.
      </p>

      <h2>Changes</h2>
      <p>This policy will change as the product moves from testnet to real money. The date at the top shows the latest update.</p>
    </LegalShell>
  );
}
