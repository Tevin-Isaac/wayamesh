import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The web wallet is a Vite single-page app built into public/app-static
  // (see wayamesh-mobile/web/scripts/sync-to-website.sh). Every /app/* URL
  // serves its index.html and react-router takes over in the browser.
  async rewrites() {
    return [
      { source: "/app", destination: "/app-static/index.html" },
      { source: "/app/:path*", destination: "/app-static/index.html" },
    ];
  },
  async headers() {
    return [
      { source: "/sw.js", headers: [{ key: "Cache-Control", value: "no-cache" }] },
    ];
  },
};

export default nextConfig;
