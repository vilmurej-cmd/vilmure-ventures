import ScrollReveal from '@/components/ScrollReveal';

const offerings = [
  {
    title: 'EZRE OS',
    description:
      '11-product AI-powered operating system for real estate. White-label enterprise ready. 301+ API routes, 183+ data models, 35 AI tools, 50-state compliance.',
    color: '#06B6D4',
  },
  {
    title: 'The Full Portfolio',
    description:
      '8 platforms spanning real estate, healthcare, music, language, discovery, medical science, and safety. 83,000+ lines of production code.',
    color: '#8B5CF6',
  },
  {
    title: 'The Methodology',
    description:
      'A proven, repeatable approach to building production-quality software platforms at 10-50x the speed and 1/100th the cost of traditional development.',
    color: '#D4A843',
  },
];

const structures = [
  'Full acquisition',
  'Majority stake with founder retention',
  'Strategic licensing / partnership',
  'Technology integration',
  'Open to creative structures',
];

export default function InvestPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-black tracking-wide">Partner With Us</h1>
          <p className="mt-6 text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Vilmure Ventures is exploring strategic partnerships, investments, and acquisition
            opportunities
          </p>
        </ScrollReveal>
      </section>

      <div className="spectrum-line" />

      {/* What We Offer */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black tracking-wide text-center mb-16">
              What We Offer
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offerings.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div
                  className="glass-panel p-8 h-full"
                  style={{ borderTop: `2px solid ${item.color}` }}
                >
                  <h3 className="text-xl font-bold mb-4" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="spectrum-line" />

      {/* Deal Structure */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black tracking-wide text-center mb-12">
              Deal Structure Flexibility
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-panel p-8">
              <div className="space-y-4">
                {structures.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <p className="text-white/60 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line" />

      {/* Why Now */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black tracking-wide text-center mb-12">
              Why Now
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={100}>
              <div className="glass-panel p-6">
                <p className="text-white/60 text-lg leading-relaxed">
                  The real estate industry is consolidating. Compass just acquired Anywhere. KW just
                  brought in Stone Point Capital. The companies that own the best technology will win.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="glass-panel p-6">
                <p className="text-white/60 text-lg leading-relaxed">
                  EZRE OS is the only platform built from the closing table — by someone who
                  processed title commitments, ran CMAs, and sat across from nervous first-time
                  buyers.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="glass-panel p-6">
                <p className="text-white text-lg leading-relaxed font-semibold">
                  The window for acquiring a fully-built, zero-cap-table, zero-debt,
                  white-label-ready OS is now.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="spectrum-line" />

      {/* Contact */}
      <section className="py-24 px-6 text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-black tracking-wide mb-8">
            For acquisition or investment inquiries
          </h2>
          <div className="glass-panel inline-block p-8 md:p-12">
            <a
              href="mailto:josh@myezre.ai"
              className="text-white text-lg hover:text-white/70 transition-colors block"
            >
              josh@myezre.ai
            </a>
            <a
              href="tel:2694874847"
              className="text-white/60 text-lg hover:text-white/70 transition-colors block mt-2"
            >
              269-487-4847
            </a>
            <p className="text-white/30 text-sm mt-6">All inquiries are confidential.</p>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
