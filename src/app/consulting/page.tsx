import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

const services = [
  {
    title: 'Platform Consulting',
    description:
      'Help brokerages, title companies, and lenders evaluate and implement technology that actually solves their operational pain points — not just the ones vendors want to sell.',
    icon: '◇',
  },
  {
    title: 'AI Strategy',
    description:
      'Guide organizations through AI adoption — what to automate, what to keep human, and how to build a team that works with AI rather than fearing it.',
    icon: '◈',
  },
  {
    title: 'Custom Development',
    description:
      'Build custom tools and integrations using the same AI-assisted methodology that produced 83,000+ lines of production code in 7 months.',
    icon: '◆',
  },
  {
    title: 'Training',
    description:
      'Teach teams how to work with AI effectively — not as a tool to query, but as a partner to collaborate with. The same approach that built 8 platforms.',
    icon: '◉',
  },
];

const reasons = [
  'We didn\'t just read about AI-assisted development. We built 8 platforms with it.',
  'We don\'t just understand real estate technology. We built the most comprehensive real estate OS in the industry.',
  'We don\'t just consult. We build.',
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-black tracking-wide">
            <span style={{ color: '#06B6D4' }}>EZRE</span> Consulting
          </h1>
          <p className="mt-6 text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Technology strategy and implementation for real estate professionals
          </p>
        </ScrollReveal>
      </section>

      <div className="spectrum-line" />

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black tracking-wide text-center mb-16">
              Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="glass-panel p-8 h-full">
                  <div className="text-2xl mb-4 text-white/20">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/50 leading-relaxed">{service.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="spectrum-line" />

      {/* Pricing */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black tracking-wide mb-8">Pricing</h2>
            <div className="glass-panel p-8 md:p-12">
              <p className="text-white/60 text-lg mb-4">
                Every engagement starts with a conversation.
              </p>
              <p className="text-white/40 mb-2">Setup fee + monthly retainer model</p>
              <p className="text-white/40 mb-8">
                Tailored to your organization&apos;s size and needs.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-[#080810] font-semibold rounded-full hover:bg-white/90 transition-all text-sm tracking-wide"
              >
                Contact Us to Discuss
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line" />

      {/* Why Us */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black tracking-wide text-center mb-12">
              Why Us
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {reasons.map((reason, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="glass-panel p-6 flex items-start gap-4">
                  <div
                    className="w-2 h-2 rounded-full mt-2 shrink-0"
                    style={{ backgroundColor: '#06B6D4' }}
                  />
                  <p className="text-white/70 text-lg">{reason}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
