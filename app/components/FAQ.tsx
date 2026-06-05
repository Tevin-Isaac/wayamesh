'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is my money safe without internet?",
      answer: "Yes. Your private keys stay on your phone and are never transmitted. Transactions are cryptographically signed locally. Even if intercepted, no one can access your funds without your private key.",
    },
    {
      question: "Do you have access to my money?",
      answer: "No. Wayamesh is self-custodial. Your private keys stay on your phone only. Only you control your funds. This is true peer-to-peer finance.",
    },
    {
      question: "What if I lose my phone?",
      answer: "Your funds are on the blockchain. Recover your wallet on a new phone using your seed phrase (12-24 words). Always backup your seed phrase in a safe place.",
    },
    {
      question: "How do agents work without internet?",
      answer: "Agents run locally as a lightweight AI model. They validate, manage, and route all offline. When you connect, they sync with the blockchain.",
    },
    {
      question: "Can governments block Wayamesh?",
      answer: "They can't block the blockchain. The technology is open-source and peer-to-peer. The mesh network itself is just Bluetooth—impossible to ban universally.",
    },
  ];

  return (
    <section id="faq" className="py-[100px] border-t border-[rgba(62,217,184,0.1)]">
      <div className="max-w-[1200px] mx-auto px-10">
        <h2 className="text-[42px] font-extrabold mb-4 text-center text-[#F5F4F2]">FAQ</h2>
        <p className="text-lg text-[#A0A0A0] text-center mb-[60px]">Your money is safe. Cryptographically secure. You control everything.</p>

        <div className="max-w-[900px] mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className={`bg-[rgba(62,217,184,0.05)] border rounded-xl p-7 cursor-pointer transition-all duration-300 ${
                openIndex === idx
                  ? 'border-[#3ED9B8] bg-[rgba(62,217,184,0.08)]'
                  : 'border-[rgba(62,217,184,0.15)] hover:border-[#3ED9B8] hover:bg-[rgba(62,217,184,0.08)]'
              }`}
            >
              <div className="flex justify-between items-center font-bold text-base text-[#F5F4F2]">
                {faq.question}
                <i
                  className={`ti ti-chevron-down text-[#3ED9B8] text-xl transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openIndex === idx && (
                <div className="mt-5 pt-5 border-t border-[rgba(62,217,184,0.1)] text-sm text-[#A0A0A0] leading-[1.8]">
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
