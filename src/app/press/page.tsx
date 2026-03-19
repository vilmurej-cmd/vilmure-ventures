import ScrollReveal from '@/components/ScrollReveal';

const storyAngles = [
  {
    title: 'One Person, One AI, Forty-Two Platforms',
    description:
      'The headline story of building 90,000+ lines of production code with zero VC and no engineering team.',
  },
  {
    title: 'Co-Founded by a Human and an AI',
    description: 'What it actually means to partner with AI, not just use it.',
  },
  {
    title: 'The Weekend That Changed Everything',
    description: '7 platforms built in 48 hours (March 13–15, 2026).',
  },
  {
    title: 'Built from the Closing Table',
    description:
      'How industry expertise, not Silicon Valley connections, produced the most comprehensive real estate OS.',
  },
  {
    title: 'For Stefania',
    description:
      'HAVEN, the safety platform built in memory of a domestic violence victim, and how technology can protect.',
  },
];

const spectrumColors = ['#06B6D4', '#3B82F6', '#8B5CF6', '#D4A843', '#E11D48'];

const keyFacts = [
  { label: 'Founder', value: 'Josh Vilmure, Stevensville, Michigan' },
  { label: 'Company', value: 'Vilmure Ventures (parent) / EZRE LLC (flagship)' },
  { label: 'AI Partner', value: "Anthropic's Claude" },
  { label: 'Platforms', value: '24 live' },
  { label: 'Total Code', value: '90,000+ lines' },
  { label: 'Funding', value: '$0 VC' },
  { label: 'Build Time', value: '7 months (September 2025 — March 2026)' },
  { label: 'Build Sessions', value: '122' },
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black tracking-wide" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>Press & Media</h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-[1.8]">
              Resources for journalists, analysts, and industry observers
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      {/* Story Angles */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-center mb-4" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
              The Story Angles
            </h2>
            <p className="text-white/50 text-center mb-16">Suggested for media</p>
          </ScrollReveal>

          <div className="space-y-6">
            {storyAngles.map((angle, i) => (
              <ScrollReveal key={angle.title} delay={i * 100}>
                <div className="glass-panel p-6 md:p-8 relative overflow-hidden">
                  {/* Large background number */}
                  <span
                    className="absolute top-4 right-6 text-5xl font-black opacity-[0.08] pointer-events-none"
                    style={{ color: spectrumColors[i] }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-white font-bold text-xl mb-2">
                      &ldquo;{angle.title}&rdquo;
                    </h3>
                    <p className="text-white/60 leading-[1.8]">{angle.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      {/* Key Facts */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-center mb-16" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
              Key Facts
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-panel p-6 md:p-8">
              <div className="space-y-5">
                {keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-white/[0.04] last:border-0"
                  >
                    <span className="text-white/30 text-sm font-semibold tracking-wider uppercase w-36 shrink-0">
                      {fact.label}
                    </span>
                    <span className="text-white/80">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      {/* Brand Assets */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide mb-10" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>Brand Assets</h2>
            <div className="glass-panel p-8 md:p-12">
              <div className="text-4xl font-black tracking-[0.25em] uppercase text-white mb-2">
                VILMURE VENTURES
              </div>
              <div className="spectrum-line my-6" />
              <p className="text-white/40 text-sm">
                Logo and brand assets available upon request.
              </p>
              <p className="text-white/40 text-sm mt-2">
                Platform screenshots available at each platform&apos;s URL.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      {/* Media Contact */}
      <section className="py-20 md:py-28 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl md:text-4xl font-black tracking-wide mb-10" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>Media Contact</h2>
            <a
              href="mailto:josh@myezre.ai"
              className="text-white text-lg hover:text-white/70 transition-colors"
            >
              josh@myezre.ai
            </a>
            <p className="text-white/50 text-sm mt-4">
              For interviews, demos, or additional information
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
