'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'Is my money safe?',
    a: 'Your private keys never leave your device. Every transaction is signed locally before entering the mesh. AES-256 encrypted at rest, unlocked with biometrics. Even if a packet is intercepted mid-relay, nobody can access your funds without your key.',
  },
  {
    q: 'Do you hold my funds?',
    a: 'No. Wayamesh is fully self-custodial — we have zero access to your funds. Only your device holds your private key. No custody, no servers, no middlemen.',
  },
  {
    q: 'How do agents work offline?',
    a: 'A 4–8MB quantized AI model runs directly on your phone — no servers, no cloud, no internet. It validates amounts and recipients, estimates Arc fees, routes through the BLE mesh, and batches for settlement. When any device in the chain has connectivity, it submits to Arc automatically.',
  },
  {
    q: 'Can it be blocked?',
    a: 'The protocol is open-source and peer-to-peer. Funds settle on Arc — censorship-resistant by design. The mesh runs over Bluetooth, a standard hardware protocol that no government can selectively ban.',
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="faq-sec">
      <div className="waya-container">

        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.04em', color: '#F5F4F2', lineHeight: 1 }}>
            Frequently asked questions
          </h2>
        </div>

        {/* Tab row */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
          {FAQS.map((faq, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: '10px 18px',
                borderRadius: '100px',
                border: `1px solid ${active === i ? 'rgba(62,217,184,0.5)' : 'rgba(255,255,255,0.07)'}`,
                background: active === i ? 'rgba(62,217,184,0.1)' : 'transparent',
                color: active === i ? '#3ED9B8' : '#666',
                fontSize: '13px',
                fontWeight: active === i ? 700 : 400,
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap' as const,
              }}
            >
              {faq.q}
            </button>
          ))}
        </div>

        {/* Answer panel */}
        <div className="faq-answer-panel" style={{
          background: 'rgba(62,217,184,0.04)',
          border: '1px solid rgba(62,217,184,0.15)',
          borderRadius: '16px',
          padding: '28px 32px',
        }}>
          <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.75, maxWidth: '680px' }}>
            {FAQS[active].a}
          </p>
        </div>

      </div>
    </section>
  );
}
