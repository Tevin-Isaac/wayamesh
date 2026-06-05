'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is my money safe without internet?",
      answer: "Yes. Your private keys stay on your phone and are never transmitted. Transactions are cryptographically signed locally. Even if intercepted, no one can access your funds without your private key. It's more secure than cloud wallets because there's no central server to hack."
    },
    {
      question: "Do you have access to my money?",
      answer: "No. Wayamesh is self-custodial. Your private keys stay on your phone only. We can't access your money, freeze it, or know what you have. Only you control your funds. This is true peer-to-peer finance."
    },
    {
      question: "What happens if I lose my phone?",
      answer: "Your funds are on the blockchain, not your phone. If you lose your device, you can recover your wallet on a new phone using your seed phrase (12-24 words you wrote down during setup). This is standard for all crypto wallets. Always backup your seed phrase in a safe place."
    },
    {
      question: "How do agents work without internet?",
      answer: "Agents run locally on your phone as a lightweight AI model (quantized LLM). They don't need internet to make decisions—they learn from your transaction history, manage payments, suggest optimal times to settle, and handle routing all offline. When you connect, they sync with the blockchain."
    },
    {
      question: "Can governments block Wayamesh?",
      answer: "They can't block the blockchain (Arc runs globally). They could try blocking the app, but the technology is open-source and peer-to-peer. If one app is banned, the code can run elsewhere. The mesh network itself is just Bluetooth—impossible to ban universally. Your financial freedom is the point."
    }
  ];

  return (
    <section id="faq" className="py-24 border-t border-[rgba(62,217,184,0.1)] max-w-4xl mx-auto px-8">
      <div className="text-center mb-16">
        <h2 className="text-[clamp(1.8rem,6vw,2.8rem)] font-bold mb-2 text-[var(--text)]">FAQ</h2>
        <p className="text-base text-[var(--text)] opacity-80">Your money is safe. Cryptographically secure. You control everything.</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`bg-[rgba(62,217,184,0.05)] border border-[rgba(62,217,184,0.15)] rounded-xl p-8 cursor-pointer transition-all hover:border-[var(--accent)] hover:bg-[rgba(62,217,184,0.08)] ${
              openIndex === idx ? "border-[var(--accent)] bg-[rgba(62,217,184,0.08)]" : ""
            }`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-[var(--text)]">{faq.question}</h3>
              <i className={`ti ti-chevron-down text-[var(--accent)] transition-transform duration-300 ${
                openIndex === idx ? "rotate-180" : ""
              }`} />
            </div>
            {openIndex === idx && (
              <div className="mt-6 pt-6 border-t border-[rgba(62,217,184,0.1)] text-sm text-[var(--text)] opacity-90 leading-relaxed animate-slideDown">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
