import ScrollReveal from '@/components/ScrollReveal';

const storyAngles = [
  {
    title: 'One Person, One AI, Eight Platforms',
    description:
      'The headline story of building 83,000+ lines of production code with zero VC and no engineering team.',
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

const keyFacts = [
  { label: 'Founder', value: 'Josh Vilmure, Stevensville, Michigan' },
  { label: 'Company', value: 'Vilmure Ventures (parent) / EZRE LLC (flagship)' },
  { label: 'AI Partner', value: "Anthropic's Claude" },
  { label: 'Platforms', value: '8 live' },
  { label: 'Total Code', value: '83,000+ lines' },
  { label: 'Funding', value: '$0 VC' },
  { label: 'Build Time', value: '7 months (September 2025 — March 2026)' },
  { label: 'Build Sessions', value: '120' },
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-black tracking-wide">Press & Media</h1>
          <p className="mt-6 text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Resources for journalists, analysts, and industry observers
          </p>
        </ScrollReveal>
      </section>

      <div className="spectrum-line" />

      {/* Story Angles */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black tracking-wide text-center mb-4">
              The Story Angles
            </h2>
            <p className="text-white/40 text-center mb-16">Suggested for media</p>
          </ScrollReveal>

          <div className="space-y-4">
            {storyAngles.map((angle, i) => (
              <ScrollReveal key={angle.title} delay={i * 100}>
                <div className="glass-panel p-6 flex items-start gap-4">
                  <span className="text-white/20 font-mono text-sm mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      &ldquo;{angle.title}&rdquo;
                    </h3>
                    <p className="text-white/50 mt-1">{angle.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="spectrum-line" />

      {/* Key Facts */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black tracking-wide text-center mb-16">
              Key Facts
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-panel p-8">
              <div className="space-y-4">
                {keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-white/[0.04] last:border-0"
                  >
                    <span className="text-white/30 text-sm font-semibold tracking-wider uppercase w-36 shrink-0">
                      {fact.label}
                    </span>
                    <span className="text-white/70">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line" />

      {/* Brand Assets */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black tracking-wide mb-8">Brand Assets</h2>
            <div className="glass-panel p-12">
              <div className="text-4xl font-black tracking-[0.25em] uppercase text-white mb-2">
                VILMURE VENTURES
              </div>
              <div className="spectrum-line my-6" />
              <p className="text-white/30 text-sm">
                Logo and brand assets available upon request.
              </p>
              <p className="text-white/30 text-sm mt-2">
                Platform screenshots available at each platform&apos;s URL.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line" />

      {/* Media Contact */}
      <section className="py-24 px-6 text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-black tracking-wide mb-8">Media Contact</h2>
          <a
            href="mailto:josh@myezre.ai"
            className="text-white text-lg hover:text-white/70 transition-colors"
          >
            josh@myezre.ai
          </a>
          <p className="text-white/40 text-sm mt-4">
            For interviews, demos, or additional information
          </p>
        </ScrollReveal>
      </section>
    </>
  );
}
