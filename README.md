# Wayamesh — Offline-first USDC payments

Send USDC with no internet. Phone to phone over Bluetooth mesh. AI agents handle everything offline.

**Live site:** coming soon

---

## What is Wayamesh

Wayamesh is a mobile app that lets you send USDC peer-to-peer via Bluetooth mesh — no internet connection required. A lightweight 4MB AI agent runs entirely on your device, validating transactions, estimating Arc fees, and routing payments through the mesh. Settlement on Arc happens automatically in the background whenever any device in the network finds a connection.

No towers. No banks. No permission.

---

## This repository

This is the marketing website for Wayamesh, built with Next.js 15, TypeScript, and Tailwind CSS v4.

### Tech stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + custom CSS
- **Icons:** Tabler Icons webfont
- **Animations:** Canvas API (hero mesh animation, footer particle mesh)

### Sections

| Section | Description |
|---|---|
| Hero | Live canvas animation — USDC coin travelling phone-to-phone over Bluetooth |
| The Story | Why we built Wayamesh |
| Why Wayamesh | 4 capability cards: on-device AI, BLE mesh, self-custody, Arc settlement |
| How it Works | 3-step offline payment flow |
| Try it | Phone mockups showing Dashboard, Send, and AI Agent screens |
| FAQ | 4 key questions with tab-style accordion |
| Footer | Floating mesh particle canvas background |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Blockchain

USDC settles on **Arc** (Chain ID: 5042002) via Circle Wallets SDK.

---

## Status

Pre-launch. App development in progress — Phase 1 MVP underway.
