import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import CursorGlow from "@/components/CursorGlow";
import LoadingScreen from "@/components/LoadingScreen";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

export const metadata: Metadata = {
  title: "Vilmure Ventures — Connect the Disconnected. Protect the Unprotected. Empower the Brave. Organize the Overwhelmed.",
  description:
    "30 platforms. 90,000+ lines of code. 75+ languages. Zero venture capital. Built by a human and an AI.",
  keywords: [
    "Vilmure Ventures",
    "EZRE",
    "AI",
    "real estate technology",
    "healthcare technology",
    "startup",
  ],
  openGraph: {
    title: "Vilmure Ventures",
    description:
      "30 platforms. 90,000+ lines of code. Zero venture capital. Built by a human and an AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LoadingScreen />
        <KonamiEasterEgg />
        <CursorGlow />
        <ParticleField />
        <div className="spectrum-line fixed top-0 left-0 right-0 z-[60]" />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
