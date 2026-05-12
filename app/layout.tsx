import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lingojam.co"),
  title: {
    default: "LingoJam — Free Online Text Translators & Generators",
    template: "%s — LingoJam",
  },
  description:
    "200+ free online text translators and generators. Fancy text, Morse code, cursive, binary, UwU, Pig Latin and more. No signup needed.",
  keywords: [
    "text translator", "fancy text generator", "morse code translator",
    "cursive text", "text generator", "lingojam", "binary translator",
    "upside down text", "backwards text", "unicode text",
  ],
  authors: [{ name: "LingoJam", url: "https://lingojam.co" }],
  creator: "LingoJam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lingojam.co",
    siteName: "LingoJam",
    title: "LingoJam — Free Online Text Translators & Generators",
    description: "200+ free text translators. Fancy text, Morse code, cursive, binary & more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "LingoJam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LingoJam — Free Online Text Translators",
    description: "200+ free text translators and generators. No signup needed.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}