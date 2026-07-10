# Wayamesh — Offline-first USDC payments on Arc

Sign a USDC payment with no internet, hand it to the receiver by **QR code or Bluetooth**, and it settles on [Arc](https://arc.network) in under a second — from whichever phone finds a connection first. Money that moves like cash, settles like a blockchain.

**Live site:** [wayamesh.xyz](https://wayamesh.xyz)
**Mobile app:** [wayamesh-mobile](https://github.com/Tevin-Isaac/wayamesh-mobile) · [Download the Android beta APK](https://github.com/Tevin-Isaac/wayamesh-mobile/releases/latest/download/wayamesh-beta.apk)

---

## What is Wayamesh

Wayamesh is a self-custodial mobile wallet for offline-first P2P USDC payments:

- **Offline send + handoff** — the phone signs a USDC transfer with a hardware-bound key (Android Keystore / iOS Secure Enclave), no connection needed. The payment reaches the receiver as a QR code or over Bluetooth; whichever phone touches the internet first settles it on Arc (finality ≈480ms).
- **Self-custody, no backend** — keys never leave the device; the phone talks directly to Arc. No servers between users and their money.
- **Agent wallet** — a spending envelope automation can never exceed (per-tx / daily / total caps, allowlists, expiry), enforced on-device by a deterministic policy engine. Standing payments execute fully offline.
- **Gasless smart account** — Circle Smart Account + Circle Paymaster: gas is paid in USDC itself.
- **Chat + pay** — message contacts and send USDC inside the thread.

No towers. No banks. No permission.

---

## This repository

Marketing website for Wayamesh, built with Next.js 15, TypeScript, and Tailwind CSS v4.

**Stack:** Next.js 15 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · Canvas API · Tabler Icons

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Blockchain

USDC settles on **Arc Testnet** (Chain ID: `5042002`) — USDC is the native gas token. Free test USDC at [faucet.circle.com](https://faucet.circle.com).

---

## Status

Android beta available (**v1.0.0-beta.2 — Offline Handoff**), running on Arc Testnet. iOS TestFlight coming soon.
