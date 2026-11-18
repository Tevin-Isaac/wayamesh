# Wayamesh website

The site behind **[wayamesh.xyz](https://wayamesh.xyz)**: a marketing site plus the **Wayamesh web wallet** at **[wayamesh.xyz/app](https://wayamesh.xyz/app)**.

Wayamesh is a self-custody wallet that signs USDC payments with no internet, hands them over by QR (or Bluetooth on Android), and settles them on [Arc](https://arc.network) when any phone gets a connection. It runs on **Arc Testnet** with test USDC; Arc mainnet is not live.

| | |
|---|---|
| Web wallet (no install) | [wayamesh.xyz/app](https://wayamesh.xyz/app) |
| Android beta (APK) | [latest release](https://github.com/Tevin-Isaac/wayamesh-mobile/releases/latest/download/wayamesh-beta.apk) |
| App + wallet source, full docs | [Tevin-Isaac/wayamesh-mobile](https://github.com/Tevin-Isaac/wayamesh-mobile) |

> For exactly how the product works (reserve, vouchers, settlement, chat, Bluetooth, M-Pesa, what is and isn't verified), read the **[main README](https://github.com/Tevin-Isaac/wayamesh-mobile#readme)**. This repo only builds and serves the site.

## What's in this repo

```
app/                   Next.js (App Router) landing page: page.tsx, layout.tsx, globals.css, components/
public/                videos + posters, logos, screenshots (screens/)
public/app-static/     the BUILT web wallet (a Vite single-page app) — generated, do not edit by hand
public/sw.js           the wallet's offline service worker (scope /app)
next.config.ts         rewrites /app and /app/* to the wallet; no-cache header for sw.js
```

### How the wallet is served at `/app`

The web wallet is not part of the Next.js build. Its source lives in the main repo (`wayamesh-mobile/web`, Vite + React). A script builds it with its assets under `/app-static/` and copies the output here:

```bash
# from a checkout of wayamesh-mobile
web/scripts/sync-to-website.sh "/path/to/this/repo"
```

Then `next.config.ts` rewrites every `/app` and `/app/*` URL to `/app-static/index.html`, and the wallet's own router takes over in the browser. The service worker is placed at the site root (`/sw.js`) but only controls `/app`. Any deep link such as `/app/send` works on reload.

**To update the wallet:** change code in `wayamesh-mobile/web`, run the sync script, commit the new `public/app-static` and `public/sw.js`, push.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the build (also serves the wallet at /app)
```

Requires Node 20+. No environment variables are needed for the site. The wallet's M-Pesa add-money / cash-out needs a public ramp server and a build-time `VITE_RAMP_API_URL` (set when building the wallet in the main repo; see its README).

## Deploy

The site is a Vercel project (`wayamesh-website`) connected to this repo's `master` branch: **pushing to `master` deploys wayamesh.xyz**. Pushing any other branch creates a Vercel preview URL, which is the safe way to check a change before it goes live.

Before pushing, check:
- `npm run build` passes.
- `/app`, `/app/onboarding` and `/sw.js` return 200 from `npm run start`.
- The hero videos (`public/africa.mp4`, `public/usdc.mp4`) still play.

## Keeping the site honest

The site should say only what the product does today:
- It runs on **Arc Testnet with test USDC**; nothing holds real money.
- An offline payment is a **promise backed by the payer's on-chain reserve** until it settles; receivers cap their exposure per payer. It is not final money before settlement.
- Bluetooth hand-off is **Android-only, single-hop and not yet tested on real devices**; browsers can't do Bluetooth. QR hand-off works on any two devices.
- M-Pesa add money / cash out is a **testnet demo**.
- Chat is end-to-end encrypted through public relays, messages disappear after 24 hours, and Bluetooth chat is experimental.

## License

MIT, as in the main repository.
