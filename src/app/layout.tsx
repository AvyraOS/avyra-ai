import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avyra AI - Unlock Founder Freedom with AI Automation",
  description: "Get your time back with a plug-and-play AI team. Join hundreds of ambitious founders building with freedom. Automate workflows, boost productivity, and scale faster with Avyra's AI assistants.",
  keywords: [
    "AI automation",
    "founder freedom",
    "AI assistants",
    "workflow automation",
    "business automation",
    "AI team",
    "productivity tools",
    "scale business",
    "entrepreneur tools",
    "AI solutions"
  ],
  authors: [{ name: "Avyra AI" }],
  creator: "Avyra AI",
  publisher: "Avyra AI",
  metadataBase: new URL("https://avyra.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Avyra AI - Unlock Founder Freedom with AI Automation",
    description: "Get your time back with our plug-and-play AI team. Join hundreds of ambitious founders building their freedom.",
    url: "https://avyra.ai",
    siteName: "Avyra AI",
    images: [
      {
        url: "/images/Thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Avyra AI - AI Automation Platform for Founders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avyra AI - Unlock Founder Freedom with AI Automation",
    description: "Get your time back with our plug-and-play AI team. Join hundreds of ambitious founders building their freedom.",
    site: "@AvyraAI",
    creator: "@AvyraAI",
    images: ["/images/Thumbnail.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification tokens here when you get them
    // google: "your-google-verification-token",
    // yandex: "your-yandex-verification-token",
    // yahoo: "your-yahoo-verification-token",
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/icons/favicons/Favicon_White16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/icons/favicons/Favicon_White32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/icons/favicons/Favicon_White48.svg", sizes: "48x48", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: [
      { url: "/icons/favicons/Favicon_Black180.svg", sizes: "180x180", type: "image/svg+xml" }
    ],
    other: [
      {
        rel: "icon",
        url: "/icons/favicons/Favicon_White192.svg",
        sizes: "192x192",
        type: "image/svg+xml"
      },
      {
        rel: "icon", 
        url: "/icons/favicons/Favicon_White512.svg",
        sizes: "512x512",
        type: "image/svg+xml"
      },
      {
        rel: "mask-icon",
        url: "/icons/favicons/Favicon_White32.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
