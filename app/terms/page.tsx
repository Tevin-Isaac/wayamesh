import type { Metadata } from 'next';
import LegalShell from '../components/LegalShell';
import { CONTACT_EMAIL } from '../site';

export const metadata: Metadata = {
  title: 'Terms of Use — Wayamesh',
  description: 'Terms for using the Wayamesh testnet beta, website and web wallet.',
  alternates: { canonical: '/terms' },
};

export default function Terms() {
  return (
    <LegalShell
      title="Terms of Use"
      intro="By using the Wayamesh website, web wallet or Android beta you agree to these terms. They are a draft written in plain language and will be updated before any real-money launch."
    >
      <h2>1. A testnet beta</h2>
      <p>
        Wayamesh is an early beta that runs on the Arc test network with test USDC. Test USDC has no monetary value. Do not use Wayamesh with real money or to hold anything you cannot afford to lose. Features can change, break or be removed at any time. The M-Pesa top-up and cash-out is a testnet demo, and Bluetooth hand-off is an Android-only beta.
      </p>

      <h2>2. Provided as is</h2>
      <p>
        The service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;, without warranties of any kind, to the extent the law allows. We do not promise that it will be available, accurate, secure or free of errors.
      </p>

      <h2>3. No custody</h2>
      <p>
        Wayamesh is self-custody. Your keys are created and kept on your device. We cannot recover your seed phrase, reset your PIN, freeze your funds or reverse a payment. If you lose your seed phrase, the wallet cannot be recovered.
      </p>

      <h2>4. Offline payments are provisional until they settle</h2>
      <p>
        An offline payment is a signed promise backed by the sender&rsquo;s on-chain reserve. It is not final until it has been submitted and has settled on the network. Until then it may fail or be delayed, and a receiver should treat it as provisional.
      </p>

      <h2>5. Your responsibilities</h2>
      <ul>
        <li>You are responsible for backing up your seed phrase and keeping your device, PIN and backups safe.</li>
        <li>You are responsible for checking addresses and amounts before you sign or send.</li>
        <li>You must follow the laws that apply to you. Do not use Wayamesh for anything unlawful.</li>
      </ul>

      <h2>6. No financial or legal advice</h2>
      <p>Nothing on this site is financial, investment, tax or legal advice. Digital assets carry risk.</p>

      <h2>7. Third-party services</h2>
      <p>
        Wayamesh relies on services we do not control, including Arc and Circle infrastructure, Nostr relays and blockchain networks. We are not responsible for their availability or behaviour. See the Privacy Policy for what they can see.
      </p>

      <h2>8. Limitation of liability</h2>
      <p>
        To the extent the law allows, Wayamesh and its contributors are not liable for any loss or damage arising from your use of the beta, including lost keys, failed or delayed payments, or errors in the software. Because the beta uses test USDC only, you should not suffer any real monetary loss from using it as intended.
      </p>

      <h2>9. Changes and ending use</h2>
      <p>We may change these terms or the service at any time. Continuing to use Wayamesh after a change means you accept it. You can stop using it at any time.</p>

      <h2>10. Governing law</h2>
      <p>These terms are governed by the laws of <b>[jurisdiction to be confirmed]</b>.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="link-inline">{CONTACT_EMAIL}</a>.
      </p>
    </LegalShell>
  );
}
