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
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[#0B1120]" />
          <div className="absolute w-[800px] h-[800px] rounded-full opacity-[0.07] blur-[120px] animate-nebula-1" style={{ background: 'radial-gradient(circle, #06B6D4, transparent 70%)', top: '10%', left: '20%' }} />
          <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[100px] animate-nebula-2" style={{ background: 'radial-gradient(circle, #8B5CF6, transparent 70%)', top: '50%', right: '10%' }} />
          <div className="absolute w-[700px] h-[700px] rounded-full opacity-[0.06] blur-[110px] animate-nebula-3" style={{ background: 'radial-gradient(circle, #F43F5E, transparent 70%)', bottom: '20%', left: '40%' }} />
          <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[90px] animate-nebula-4" style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)', top: '30%', left: '60%' }} />
          <div className="absolute w-[650px] h-[650px] rounded-full opacity-[0.05] blur-[100px] animate-nebula-5" style={{ background: 'radial-gradient(circle, #10B981, transparent 70%)', bottom: '40%', right: '30%' }} />
        </div>
        <div className="spectrum-line fixed top-0 left-0 right-0 z-[60]" />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
