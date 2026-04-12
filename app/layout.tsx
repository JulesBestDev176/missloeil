import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miss L'oeil | Soins Capillaires 100% Naturels au Sénégal",
  description: "Sublimez votre éclat naturel avec Miss L'oeil. Des soins capillaires artisanaux, huiles de pousse et crèmes nourrissantes fabriqués avec passion à Dakar.",
  icons: {
    icon: [
      { url: "/logo.png", href: "/logo.png" },
    ],
    apple: [
      { url: "/logo.png", href: "/logo.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${dancing.variable} font-sans antialiased`}
      >
        {children}
        <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
