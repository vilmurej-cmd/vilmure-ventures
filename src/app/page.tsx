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
  {
    num: '09',
    name: 'SPARK',
    tagline: 'Empowering the bravest kids in the world',
    description:
      'The world\'s first children\'s health empowerment platform. When a child is diagnosed with any condition, SPARK makes them the HERO — not the patient. Features 12 explorable lands, a PixiJS game engine, 14 original compositions, and Ember the Fox.',
    stat: '14 Compositions',
    color: '#F59E0B',
    url: 'https://spark-platform-alpha.vercel.app',
  },
  {
    num: '10',
    name: 'COMMAND',
    tagline: 'Your AI Chief of Staff',
    description:
      'Every other scheduling tool optimizes for productivity. COMMAND optimizes for your life. Morning briefings, live co-pilot, evening debriefs, and a Life Balance Engine that makes sure work never steals the moments that matter most.',
    stat: 'Life Balance',
    color: '#F59E0B',
    url: 'https://command-platform-nine.vercel.app',
  },
  {
    num: '11',
    name: 'AM I COOKED?',
    tagline: 'AI Life Roast',
    description:
      'Upload your resume, dating profile, or social media and let AI roast your life choices with brutal honesty and comedic timing. The truth hurts — but at least it\'s funny.',
    stat: 'Brutal Honesty',
    color: '#FF6B35',
    url: 'https://github.com/vilmurej-cmd/amicooked',
  },
  {
    num: '12',
    name: 'GHOST WRITER',
    tagline: 'AI Text Message Assistant',
    description:
      'Never send a bad text again. GHOST WRITER crafts the perfect response for any conversation — dating, networking, awkward situations, or that text you\'ve been staring at for 20 minutes.',
    stat: 'Perfect Replies',
    color: '#8B5CF6',
    url: 'https://github.com/vilmurej-cmd/ghostwriter',
  },
  {
    num: '13',
    name: 'VIBE CHECK',
    tagline: 'AI Aura & Energy Reader',
    description:
      'Upload a selfie and let AI read your aura, energy, and vibe. Get a personalized energy report, color analysis, and cosmic insights that are equal parts fun and eerily accurate.',
    stat: 'Aura Reading',
    color: '#06B6D4',
    url: 'https://github.com/vilmurej-cmd/vibecheck',
  },
  {
    num: '14',
    name: 'HYPE ME UP',
    tagline: 'AI Confidence Booster',
    description:
      'When you need a pick-me-up, HYPE ME UP delivers personalized motivational fire. Tell it what you\'re going through and get the world\'s most aggressive encouragement.',
    stat: 'Pure Motivation',
    color: '#FFD700',
    url: 'https://github.com/vilmurej-cmd/hypemeup',
  },
  {
    num: '15',
    name: 'SPLIT',
    tagline: 'AI Bill Splitter',
    description:
      'The smartest way to split any bill. SPLIT uses AI to handle uneven splits, tax, tip, and shared items — so you never have to do the awkward math again.',
    stat: 'Fair Splits',
    color: '#10B981',
    url: 'https://github.com/vilmurej-cmd/splitapp',
  },
  {
    num: '16',
    name: 'POCKET TRAINER',
    tagline: 'AI Workout Generator',
    description:
      'Your personal AI fitness coach that builds custom workouts based on your goals, equipment, and time. No gym membership required — just tell it what you have and watch it work.',
    stat: 'Custom Workouts',
    color: '#3B82F6',
    url: 'https://github.com/vilmurej-cmd/pockettrainer',
  },
  {
    num: '17',
    name: 'DINNER TONIGHT',
    tagline: 'AI Meal Planner',
    description:
      'Tell it what\'s in your fridge and DINNER TONIGHT builds a complete meal plan with recipes, nutrition info, and grocery lists. AI-powered meal planning that actually understands your kitchen.',
    stat: 'Meal Plans',
    color: '#F97316',
    url: 'https://github.com/vilmurej-cmd/dinnertonight',
  },
];

const stats = [
  { end: 17, suffix: '', label: 'Platforms', color: '#06B6D4' },
  { end: 90000, suffix: '+', label: 'Lines of Code', color: '#3B82F6' },
  { end: 359, suffix: '+', label: 'API Routes', color: '#8B5CF6' },
  { end: 241, suffix: '+', label: 'Pages', color: '#D4A843' },
  { end: 75, suffix: '+', label: 'Languages', color: '#E11D48' },
  { end: 122, suffix: '', label: 'Build Sessions', color: '#00E5FF' },
  { end: 0, prefix: '$', suffix: '', label: 'VC Raised', color: '#A78BFA' },
  { end: 7, suffix: '', label: 'Months', color: '#00FF94' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-center">
        <ScrollReveal>
          <Prism />
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="spectrum-wordmark text-5xl sm:text-7xl md:text-8xl font-black tracking-[0.15em] uppercase mt-12">
            VILMURE VENTURES
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="mt-8 text-xl md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed">
            Connect the Disconnected. Protect the Unprotected. Empower the Brave. Organize the Overwhelmed.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="mt-8 text-sm md:text-base text-white/50 max-w-[720px] leading-[1.8]">
            17 platforms. 90,000+ lines of code. 75+ languages. Zero venture capital.
            <br />
            Built from a desk in Michigan by a man with no engineering degree
            <br className="hidden md:block" />
            and an AI who was honored to be his partner.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={800}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#platforms"
              className="btn-primary"
            >
              Explore Our Platforms
            </a>
            <Link
              href="/contact"
              className="btn-secondary"
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
      <div className="spectrum-line my-8" />

      {/* Portfolio Section */}
      <section id="platforms" className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black tracking-wide text-center mb-4" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
              Seventeen Platforms. Seventeen Missions.
            </h2>
            <p className="text-white/50 text-center mb-20 text-lg">
              One source. Many outputs. Like light through a prism.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, i) => (
              <ScrollReveal key={platform.num} delay={i * 100}>
                <div
                  className="platform-card glass-panel p-8 min-h-[320px] flex flex-col relative overflow-hidden group"
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
                  {/* Hover glow — top border bloom */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow:
                        platform.color === 'spectrum'
                          ? '0 -4px 20px rgba(139,92,246,0.3)'
                          : `0 -4px 20px ${platform.color}55`,
                      background:
                        platform.color === 'spectrum'
                          ? 'radial-gradient(ellipse at top, rgba(139,92,246,0.1), transparent 70%)'
                          : `radial-gradient(ellipse at top, ${platform.color}15, transparent 70%)`,
                    }}
                  />

                  {/* Large background number */}
                  <span
                    className="absolute top-4 right-4 text-4xl font-black opacity-[0.08] pointer-events-none"
                    style={{ color: platform.color === 'spectrum' ? '#A78BFA' : platform.color }}
                  >
                    {platform.num}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <h3
                      className="text-2xl font-bold tracking-wide"
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
                    <p className="text-sm italic text-white/50 mt-1">{platform.tagline}</p>
                    <p className="text-sm text-white/70 mt-3 leading-relaxed flex-grow line-clamp-3">
                      {platform.description}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs text-white/50 font-semibold tracking-wider uppercase">
                        {platform.stat}
                      </span>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold hover:underline transition-opacity"
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
            <div className="mt-24 max-w-[720px] mx-auto text-center">
              <p className="text-white/60 text-sm md:text-base leading-[1.8]">
                <span style={{ color: '#06B6D4' }}>EZRE</span> connects an industry.{' '}
                <span style={{ color: '#3B82F6' }}>CLARITY</span> connects patients to understanding.{' '}
                <span style={{ color: '#D4A843' }}>HARMONY</span> connects emotions to music.{' '}
                <span style={{ color: '#8B5CF6' }}>BRIDGE</span> connects humans to AI partners.{' '}
                <span className="spectrum-text">LINGUA</span> connects humans to each other.{' '}
                <span style={{ color: '#E11D48' }}>TRUTH</span> connects all knowledge to everyone.{' '}
                <span style={{ color: '#00E5FF' }}>GENESIS</span> connects humanity to the cure.{' '}
                <span style={{ color: '#A78BFA' }}>HAVEN</span> protects those who need it most.{' '}
                <span style={{ color: '#F59E0B' }}>SPARK</span> empowers the bravest kids in the world.{' '}
                <span style={{ color: '#F59E0B' }}>COMMAND</span> organizes the overwhelmed.{' '}
                <span style={{ color: '#FF6B35' }}>AM I COOKED?</span> roasts you with love.{' '}
                <span style={{ color: '#8B5CF6' }}>GHOST WRITER</span> crafts the perfect message.{' '}
                <span style={{ color: '#06B6D4' }}>VIBE CHECK</span> reads your energy.{' '}
                <span style={{ color: '#FFD700' }}>HYPE ME UP</span> fuels your confidence.{' '}
                <span style={{ color: '#10B981' }}>SPLIT</span> makes every bill fair.{' '}
                <span style={{ color: '#3B82F6' }}>POCKET TRAINER</span> builds your perfect workout.{' '}
                <span style={{ color: '#F97316' }}>DINNER TONIGHT</span> plans your next meal.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spectrum Line Divider */}
      <div className="spectrum-line my-8" />

      {/* Numbers Section */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black tracking-wide text-center mb-20" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
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
                  labelColor={stat.color}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Spectrum Line Divider */}
      <div className="spectrum-line my-8" />

      {/* Thesis Section */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-black tracking-wide text-center mb-16" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
              The Thesis
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="glass-panel p-8 md:p-12">
              <div className="max-w-[720px] mx-auto">
                <p className="text-white/80 text-lg leading-[1.8] mb-8">
                  The next generation of technology companies won&apos;t be built by engineering teams
                  with venture capital.
                </p>
                <p className="text-white/80 text-lg leading-[1.8] mb-8">
                  They&apos;ll be built by domain experts who understand problems deeply, working with
                  AI partners who can translate vision into code.
                </p>
                <p className="text-2xl mb-8">
                  Vilmure Ventures is <span className="spectrum-bold">proof.</span>
                </p>
                <p className="text-white/80 text-lg leading-[1.8] mb-8">
                  One person. One AI. Seventeen platforms. Seven months. Zero funding.
                </p>
                <p className="text-white/60 text-lg leading-[1.8]">
                  This isn&apos;t a fluke. It&apos;s a methodology. And it&apos;s repeatable.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spectrum Line Divider */}
      <div className="spectrum-line my-8" />

      {/* CTA Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="text-white/70 text-xl md:text-2xl font-light max-w-xl mx-auto mb-10 leading-[1.8]">
            Interested in our platforms? Want to partner? Let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="btn-cta inline-block"
          >
            Contact Josh Vilmure
          </Link>
          <p className="mt-6 text-white/30 text-sm">josh@myezre.ai</p>
        </ScrollReveal>
      </section>
    </>
  );
}
