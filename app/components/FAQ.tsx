'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { question: 'Is my money safe without internet?', answer: 'Yes. Your private keys stay on your phone and are never transmitted. Transactions are cryptographically signed locally. Even if intercepted, no one can access your funds without your private key.' },
    { question: 'Do you have access to my money?', answer: 'No. Wayamesh is self-custodial. Your private keys stay on your phone only. Only you control your funds. This is true peer-to-peer finance.' },
    { question: 'What if I lose my phone?', answer: 'Your funds are on the blockchain. Recover your wallet on a new phone using your seed phrase (12-24 words). Always backup your seed phrase in a safe place.' },
    { question: 'How do agents work without internet?', answer: 'Agents run locally as a lightweight AI model. They validate, manage, and route all offline. When you connect, they sync with the blockchain.' },
    { question: 'Can governments block Wayamesh?', answer: "They can't block the blockchain. The technology is open-source and peer-to-peer. The mesh network itself is just Bluetooth—impossible to ban universally." },
  ];

  return (
    <section id="faq" className="waya-section">
      <div className="waya-container">
        <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px', textAlign: 'center', color: '#F5F4F2' }}>FAQ</h2>
        <p style={{ fontSize: '18px', color: '#A0A0A0', textAlign: 'center', marginBottom: '60px' }}>Your money is safe. Cryptographically secure. You control everything.</p>

        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                background: openIndex === i ? 'rgba(62,217,184,0.08)' : 'rgba(62,217,184,0.05)',
                border: `1px solid ${openIndex === i ? '#3ED9B8' : 'rgba(62,217,184,0.15)'}`,
                borderRadius: '12px',
                padding: '28px',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, fontSize: '16px', color: '#F5F4F2' }}>
                {faq.question}
                <i
                  className="ti ti-chevron-down"
                  style={{ color: '#3ED9B8', fontSize: '20px', transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0, marginLeft: '16px' }}
                />
              </div>
              {openIndex === i && (
                <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(62,217,184,0.1)', fontSize: '14px', color: '#A0A0A0', lineHeight: 1.8 }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
