import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteProvider } from "./i18n/SiteContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wayamesh — Send USDC with no internet",
  description: "Offline-first peer-to-peer USDC payments on Arc. Sign with no internet, hand off by QR code or Bluetooth, and it settles in under a second — money that moves like cash, settles like a blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('waya-theme');if(t==='light')document.documentElement.dataset.theme='light'}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
