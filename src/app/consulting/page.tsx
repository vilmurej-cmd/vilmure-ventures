'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { Building, Sparkles, Code, GraduationCap } from 'lucide-react';

const services = [
  {
    title: 'Platform Consulting',
    description:
      'Help brokerages, title companies, and lenders evaluate and implement technology that actually solves their operational pain points — not just the ones vendors want to sell.',
    Icon: Building,
  },
  {
    title: 'AI Strategy',
    description:
      'Guide organizations through AI adoption — what to automate, what to keep human, and how to build a team that works with AI rather than fearing it.',
    Icon: Sparkles,
  },
  {
    title: 'Custom Development',
    description:
      'Build custom tools and integrations using the same AI-assisted methodology that produced 90,000+ lines of production code in 7 months.',
    Icon: Code,
  },
  {
    title: 'Training',
    description:
      'Teach teams how to work with AI effectively — not as a tool to query, but as a partner to collaborate with. The same approach that built 10 platforms.',
    Icon: GraduationCap,
  },
];

const reasons = [
  'We didn\'t just read about AI-assisted development. We built 10 platforms with it.',
  'We don\'t just understand real estate technology. We built the most comprehensive real estate OS in the industry.',
  'We don\'t just consult. We build.',
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black tracking-wide" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
              <span style={{ color: '#06B6D4' }}>EZRE</span> Consulting
            </h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-[1.8]">
              Technology strategy and implementation for real estate professionals
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      {/* Services */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-center mb-16" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
              Services
            </h2>
          </ScrollReveal>

          {/* SVG gradient definition for icon strokes */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <linearGradient id="spectrum-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="33%" stopColor="#3B82F6" />
                <stop offset="66%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#D4A843" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="glass-panel p-6 md:p-8 h-full">
                  <div className="mb-4">
                    <service.Icon
                      className="w-12 h-12"
                      style={{ stroke: 'url(#spectrum-gradient)' }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/60 leading-[1.8]">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      {/* Pricing */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide mb-10" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>Pricing</h2>
            <div className="glass-panel p-6 md:p-12">
              <p className="text-white/70 text-lg mb-6 leading-[1.8]">
                Every engagement starts with a conversation.
              </p>
              <p className="text-white/50 mb-2">Setup fee + monthly retainer model</p>
              <p className="text-white/50 mb-10">
                Tailored to your organization&apos;s size and needs.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-block"
              >
                Contact Us to Discuss
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      {/* Why Us */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-center mb-12" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
              Why Us
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="glass-panel p-6 md:p-8 flex items-start gap-4">
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: '#06B6D4' }}
                  />
                  <p className="text-white/80 text-lg leading-[1.8]">{reason}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
