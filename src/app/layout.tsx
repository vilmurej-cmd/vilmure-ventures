import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleField from "@/components/ParticleField";
import CursorGlow from "@/components/CursorGlow";
import LoadingScreen from "@/components/LoadingScreen";
import KonamiEasterEgg from "@/components/KonamiEasterEgg";

export const metadata: Metadata = {
  title: "Vilmure Ventures — Connect the Disconnected. Protect the Unprotected. Empower the Brave. Organize the Overwhelmed. Include the Excluded.",
  description:
    "14 platforms. 115,000+ lines of code. 75+ languages. Zero venture capital. Built by a human and an AI.",
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
      "14 platforms. 115,000+ lines of code. Zero venture capital. Built by a human and an AI.",
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
        {/* Animated Nebula Background */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{ position: 'absolute', inset: 0, background: '#0B1120' }} />
          <div style={{ position: 'absolute', width: 800, height: 800, borderRadius: '50%', opacity: 0.09, filter: 'blur(120px)', background: 'radial-gradient(circle, #06B6D4, transparent 70%)', top: '10%', left: '20%', animation: 'nebulaFloat1 45s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', opacity: 0.07, filter: 'blur(100px)', background: 'radial-gradient(circle, #8B5CF6, transparent 70%)', top: '50%', right: '10%', animation: 'nebulaFloat2 55s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', opacity: 0.08, filter: 'blur(110px)', background: 'radial-gradient(circle, #F43F5E, transparent 70%)', bottom: '20%', left: '40%', animation: 'nebulaFloat3 50s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', opacity: 0.06, filter: 'blur(90px)', background: 'radial-gradient(circle, #F59E0B, transparent 70%)', top: '30%', left: '60%', animation: 'nebulaFloat4 60s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', width: 650, height: 650, borderRadius: '50%', opacity: 0.07, filter: 'blur(100px)', background: 'radial-gradient(circle, #10B981, transparent 70%)', bottom: '40%', right: '30%', animation: 'nebulaFloat5 40s ease-in-out infinite' }} />
        </div>
        <div className="spectrum-line fixed top-0 left-0 right-0 z-[60]" />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
