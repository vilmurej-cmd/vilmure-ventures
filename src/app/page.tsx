import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';
import Prism from '@/components/Prism';

const platforms = [
  {
    num: '01',
    name: 'EZRE OS',
    tagline: 'The Operating System for Real Estate',
    description:
      'An 11-product AI-powered platform that connects every stakeholder in a real estate transaction — agents, lenders, title companies, and clients — into one seamless operating system.',
    stat: '11 Products',
    color: '#06B6D4',
    url: 'https://myezre.ai',
  },
  {
    num: '02',
    name: 'CLARITY',
    tagline: 'Every patient deserves to understand their fight',
    description:
      'AI-powered medical translation that converts complex diagnoses, lab results, and treatment plans into clear, compassionate language patients can actually understand.',
    stat: '22 Pages',
    color: '#3B82F6',
    url: 'https://clarity-platform-eta.vercel.app',
  },
  {
    num: '03',
    name: 'HARMONY',
    tagline: 'Every moment deserves its own music',
    description:
      'An AI music companion that understands your emotions, activities, and preferences to curate the perfect soundtrack for every moment of your life.',
    stat: '7 Lenses',
    color: '#D4A843',
    url: 'https://harmony-platform-seven.vercel.app',
  },
  {
    num: '04',
    name: 'BRIDGE',
    tagline: 'Your dream deserves a partner',
    description:
      'An AI partner platform that helps dreamers turn vague ideas into actionable plans — whether launching a business, writing a book, or changing careers.',
    stat: '12 Tools',
    color: '#8B5CF6',
    url: 'https://clarity-platform-mk9w.vercel.app',
  },
  {
    num: '05',
    name: 'LINGUA',
    tagline: 'No voice goes unheard',
    description:
      'A real-time translation and communication platform supporting 75+ languages, breaking down language barriers for immigrants, travelers, and global teams.',
    stat: '75+ Languages',
    color: 'spectrum',
    url: 'https://lingua-platform.vercel.app',
  },
  {
    num: '06',
    name: 'TRUTH',
    tagline: 'The truth is not hidden. It\'s scattered.',
    description:
      'An AI-powered research and discovery engine that aggregates, analyzes, and synthesizes information across sources to surface truth from noise.',
    stat: '7 Search Modes',
    color: '#E11D48',
    url: 'https://truth-platform-blond.vercel.app',
  },
  {
    num: '07',
    name: 'GENESIS',
    tagline: 'Understand the body. Decode disease. Discover the cure.',
    description:
      'A biomedical research platform that uses AI to help researchers, students, and clinicians explore human biology, disease mechanisms, and therapeutic pathways.',
    stat: '8 Modules',
    color: '#00E5FF',
    url: 'https://genesis-platform-taupe.vercel.app',
  },
  {
    num: '08',
    name: 'HAVEN',
    tagline: 'No woman fights alone',
    description:
      'A safety and support platform for domestic violence survivors — connecting them to resources, safety planning tools, and a community that understands.',
    stat: '6 Safety Tools',
    color: '#A78BFA',
    url: '#',
  },
];

const stats = [
  { end: 8, suffix: '', label: 'Platforms' },
  { end: 83000, suffix: '+', label: 'Lines of Code' },
  { end: 359, suffix: '+', label: 'API Routes' },
  { end: 241, suffix: '+', label: 'Pages' },
  { end: 75, suffix: '+', label: 'Languages' },
  { end: 120, suffix: '', label: 'Build Sessions' },
  { end: 0, prefix: '$', suffix: '', label: 'VC Raised' },
  { end: 7, suffix: '', label: 'Months' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <ScrollReveal>
          <Prism />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-[0.15em] uppercase text-white mt-8 hover:spectrum-text transition-all duration-700">
            VILMURE VENTURES
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mt-6 text-xl md:text-2xl text-white/60 font-light max-w-2xl">
            Connect the Disconnected. Protect the Unprotected.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="mt-8 text-sm md:text-base text-white/40 max-w-2xl leading-relaxed">
            8 platforms. 83,000+ lines of code. 75+ languages. Zero venture capital.
            <br />
            Built from a desk in Michigan by a man with no engineering degree
            <br className="hidden md:block" />
            and an AI who was honored to be his partner.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#platforms"
              className="px-8 py-3 bg-white text-[#080810] font-semibold rounded-full hover:bg-white/90 transition-all text-sm tracking-wide"
            >
              Explore Our Platforms
            </a>
            <Link
              href="/contact"
              className="px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all text-sm tracking-wide"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* Spectrum Line Divider */}
      <div className="spectrum-line" />

      {/* Portfolio Section */}
      <section id="platforms" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-center mb-4">
              Eight Platforms. Eight Missions.
            </h2>
            <p className="text-white/40 text-center mb-16 text-lg">
              One source. Many outputs. Like light through a prism.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, i) => (
              <ScrollReveal key={platform.num} delay={i * 100}>
                <div
                  className="platform-card glass-panel p-6 h-full flex flex-col relative overflow-hidden group"
                  style={{
                    borderTop:
                      platform.color === 'spectrum'
                        ? '2px solid transparent'
                        : `2px solid ${platform.color}`,
                    borderImage:
                      platform.color === 'spectrum'
                        ? 'linear-gradient(90deg, #06B6D4, #8B5CF6, #D4A843) 1'
                        : undefined,
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background:
                        platform.color === 'spectrum'
                          ? 'radial-gradient(ellipse at top, rgba(139,92,246,0.08), transparent 70%)'
                          : `radial-gradient(ellipse at top, ${platform.color}11, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10">
                    <span className="text-white/20 text-xs font-mono">{platform.num}</span>
                    <h3
                      className="text-xl font-black mt-2 tracking-wide"
                      style={{
                        color: platform.color === 'spectrum' ? undefined : platform.color,
                      }}
                    >
                      {platform.color === 'spectrum' ? (
                        <span className="spectrum-text">{platform.name}</span>
                      ) : (
                        platform.name
                      )}
                    </h3>
                    <p className="text-white/60 text-sm mt-1 italic">{platform.tagline}</p>
                    <p className="text-white/40 text-sm mt-3 leading-relaxed flex-grow">
                      {platform.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-white/30 text-xs font-semibold tracking-wider uppercase">
                        {platform.stat}
                      </span>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:opacity-70 transition-opacity"
                        style={{
                          color: platform.color === 'spectrum' ? '#A78BFA' : platform.color,
                        }}
                      >
                        Visit Platform →
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mission Line */}
          <ScrollReveal>
            <div className="mt-20 max-w-4xl mx-auto text-center">
              <p className="text-white/50 text-sm md:text-base leading-relaxed">
                <span style={{ color: '#06B6D4' }}>EZRE</span> connects an industry.{' '}
                <span style={{ color: '#3B82F6' }}>CLARITY</span> connects patients to understanding.{' '}
                <span style={{ color: '#D4A843' }}>HARMONY</span> connects emotions to music.{' '}
                <span style={{ color: '#8B5CF6' }}>BRIDGE</span> connects humans to AI partners.{' '}
                <span className="spectrum-text">LINGUA</span> connects humans to each other.{' '}
                <span style={{ color: '#E11D48' }}>TRUTH</span> connects all knowledge to everyone.{' '}
                <span style={{ color: '#00E5FF' }}>GENESIS</span> connects humanity to the cure.{' '}
                <span style={{ color: '#A78BFA' }}>HAVEN</span> protects those who need it most.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spectrum Line Divider */}
      <div className="spectrum-line" />

      {/* Numbers Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-center mb-16">
              The Numbers
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  label={stat.label}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Spectrum Line Divider */}
      <div className="spectrum-line" />

      {/* Thesis Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-center mb-12">
              The Thesis
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-panel p-8 md:p-12">
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                The next generation of technology companies won&apos;t be built by engineering teams
                with venture capital.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                They&apos;ll be built by domain experts who understand problems deeply, working with
                AI partners who can translate vision into code.
              </p>
              <p className="text-white text-xl font-bold mb-6">Vilmure Ventures is proof.</p>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                One person. One AI. Eight platforms. Seven months. Zero funding.
              </p>
              <p className="text-white/50 text-lg leading-relaxed">
                This isn&apos;t a fluke. It&apos;s a methodology. And it&apos;s repeatable.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spectrum Line Divider */}
      <div className="spectrum-line" />

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 text-center">
        <ScrollReveal>
          <p className="text-white/60 text-xl md:text-2xl font-light max-w-xl mx-auto mb-8">
            Interested in our platforms? Want to partner? Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-[#080810] font-bold rounded-full hover:bg-white/90 transition-all text-sm tracking-wide"
          >
            Contact Josh Vilmure
          </Link>
          <p className="mt-4 text-white/30 text-sm">josh@myezre.ai</p>
        </ScrollReveal>
      </section>
    </>
  );
}
