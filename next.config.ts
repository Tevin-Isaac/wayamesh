import type { NextConfig } from "next";

// The web wallet (github.com/Tevin-Isaac/meshpay-arc) is a Vite single-page app built into
// public/app-static by its scripts/sync-to-website.sh. Every /app/* URL serves its index.html
// and its own router takes over in the browser. The wallet's strict security headers are
// applied here because Next.js ignores the Netlify-style _headers file the build produces.
// connect-src must allow Arc RPC and the Nostr relays; add the ramp server origin here when
// VITE_RAMP_API_URL is set at build time.
const WALLET_CSP = [
  "default-src 'self'",
  "script-src 'self' 'wasm-unsafe-eval'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  "media-src 'self' blob:",
  // WalletConnect/Reown hosts and the public RPCs below are only used by the OPTIONAL "connect an external wallet"
  // feature in Settings: it reads the connected address's USDC balance (read-only) on Arc and six other networks.
  "connect-src 'self' wss://relay.walletconnect.com wss://relay.walletconnect.org https://*.walletconnect.com https://*.walletconnect.org https://*.reown.com https://ethereum-rpc.publicnode.com https://polygon-bor-rpc.publicnode.com https://mainnet.base.org https://arb1.arbitrum.io https://mainnet.optimism.io https://api.avax.network https://*.arc.io https://*.arc.network https://ethereum.reth.rs wss://nos.lol wss://relay.primal.net https://fonts.googleapis.com https://fonts.gstatic.com",
  "frame-src https://*.arc.io https://verify.walletconnect.com https://verify.walletconnect.org",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const walletHeaders = [
  { key: "Content-Security-Policy", value: WALLET_CSP },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "no-referrer" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(self), microphone=(), geolocation=(), payment=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/app", destination: "/app-static/index.html" },
      { source: "/app/:path*", destination: "/app-static/index.html" },
    ];
  },
  async headers() {
    return [
      { source: "/app", headers: walletHeaders },
      { source: "/app/:path*", headers: walletHeaders },
      { source: "/app-static/:path*", headers: walletHeaders },
      {
        source: "/app-static/manifest.webmanifest",
        headers: [{ key: "Content-Type", value: "application/manifest+json" }],
      },
      {
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache" },
          { key: "Service-Worker-Allowed", value: "/app" },
        ],
      },
    ];
  },
};

export default nextConfig;
