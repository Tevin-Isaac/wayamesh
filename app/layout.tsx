import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://wayamesh.xyz"),
  title: "Wayamesh — Digital dollars that work offline",
  description:
    "Wayamesh is a self-custody USDC wallet that keeps working when the internet doesn't. Pay face to face with a scan, and the payment settles the moment either phone reconnects.",
  openGraph: {
    title: "Wayamesh — Digital dollars that work offline",
    description: "Pay face to face with no signal. Settles the moment either phone reconnects.",
    url: "https://wayamesh.xyz",
    siteName: "Wayamesh",
    images: ["/africa-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.31.0/dist/tabler-icons.min.css" />
        {/* Reveal animations only run when JS is on; without it everything is visible. */}
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('js')` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
