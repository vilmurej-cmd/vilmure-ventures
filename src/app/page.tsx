import Link from 'next/link';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal from '@/components/ScrollReveal';
import Prism from '@/components/Prism';
import EcosystemConstellation from '@/components/EcosystemConstellation';
import AppCard, { type AppData } from '@/components/AppCard';

/* ─── Suite Definitions ─── */
const suites: { name: string; tagline: string; color: string; apps: AppData[] }[] = [
  {
    name: 'EZRE SUITE',
    tagline: 'The Real Estate Revolution',
    color: '#06B6D4',
    apps: [
      { name: 'EZRE OS', icon: '🏠', summary: 'The first AI operating system for real estate. 11 products. 71 AI tools. Zero VC.', accentColor: '#06B6D4', status: 'live', suiteName: 'EZRE SUITE', features: ['71 AI Tools', '11 Integrated Products', '50-State Compliance Engine', 'Enterprise White-Label Ready'], url: 'https://myezre.ai' },
      { name: 'EZRE SAFE', icon: '🛡️', summary: 'Your guardian angel on every showing. SOS panic button. GPS tracking. AI client vetting. Because making it home is the most important closing.', accentColor: '#06B6D4', status: 'testflight', suiteName: 'EZRE SUITE', features: ['SOS Panic Button', 'AI Client Vetting', 'GPS Check-In Timers', 'ARIA Buddy System'] },
    ],
  },
  {
    name: 'WELLNESS SUITE',
    tagline: 'Heal. Feel. Grow.',
    color: '#10B981',
    apps: [
      { name: 'CLARITY', icon: '💙', summary: 'Just got a diagnosis? CLARITY turns medical confusion into clear answers. AI-powered. Zero judgment. Zero data stored.', accentColor: '#10B981', status: 'live', suiteName: 'WELLNESS SUITE', features: ['AI Diagnosis Reports', 'CLARITY Kids Mode', 'Zero Data Storage', 'Print Questions for Doctor'], url: 'https://clarity-platform-eta.vercel.app' },
      { name: 'HARMONY', icon: '🎵', summary: 'Tell it how you feel. It composes music that meets you there — and gently takes you somewhere better.', accentColor: '#10B981', status: 'live', suiteName: 'WELLNESS SUITE', features: ['Tone.js Audio Engine', '12 Emotion Categories', 'Visual Piano Display', 'Shareable Compositions'], url: 'https://harmony-platform-seven.vercel.app' },
      { name: 'SPARK', icon: '🦊', summary: "A sick kid walks into a hospital scared. SPARK makes them the hero of their own adventure. Meet Ember — the fox who's been through it too.", accentColor: '#10B981', status: 'testflight', suiteName: 'WELLNESS SUITE', features: ['Brave Oath Ceremony', 'AI Storybook Generator', '12 Brave World Lands', 'Original Musical Compositions'], builtFor: 'For every child who needs to know: you are already brave.' },
      { name: 'GENESIS', icon: '🧬', summary: 'Explore the human body in 3D. Real anatomical models. AI-guided learning. The future of anatomy education.', accentColor: '#10B981', status: 'live', suiteName: 'WELLNESS SUITE', features: ['3D Anatomical Models', 'Real Medical GLB Files', 'AI-Guided Learning', 'Interactive Exploration'], url: 'https://genesis-platform-taupe.vercel.app' },
    ],
  },
  {
    name: 'CONNECTION SUITE',
    tagline: 'Human Bonds, Amplified',
    color: '#F43F5E',
    apps: [
      { name: 'BRIDGE', icon: '🌉', summary: 'Most people use AI wrong. BRIDGE teaches you how to build a real partnership with it. Your AI co-pilot training ground.', accentColor: '#F43F5E', status: 'live', suiteName: 'CONNECTION SUITE', features: ['5-Step AI Assessment', 'Partnership Profile Generator', 'Session Planning', 'Progress Tracking'], url: 'https://clarity-platform-mk9w.vercel.app' },
      { name: 'KINDRED', icon: '💕', summary: "Couples don't break up overnight. KINDRED catches the drift early — AI relationship health monitoring that actually helps.", accentColor: '#F43F5E', status: 'coming-soon', suiteName: 'CONNECTION SUITE', features: ['Relationship Health Score', 'Communication Pattern Analysis', 'Early Drift Detection', 'Guided Conversations'] },
      { name: 'PULSE', icon: '🫀', summary: "It's 2 AM. You can't sleep. You feel alone. PULSE connects you with someone who gets it. The AI social network for real humans.", accentColor: '#F43F5E', status: 'coming-soon', suiteName: 'CONNECTION SUITE', features: ['2 AM Connection Matching', 'AI-Moderated Spaces', 'Anonymous Support', 'Community Building'] },
    ],
  },
  {
    name: 'SAFETY SUITE',
    tagline: 'Protection Without Compromise',
    color: '#F59E0B',
    apps: [
      { name: 'HAVEN', icon: '🛡️', summary: "For the person reading this who needs help but can't ask out loud. Zero-trace. Invisible. Built for survival. For Stefania.", accentColor: '#F59E0B', status: 'live', suiteName: 'SAFETY SUITE', features: ['Zero-Trace Architecture', 'Invisible Safety Tools', 'In-Memory-Only Caches', 'Emergency Resources'], builtFor: 'In memory of Stefania Marie Gray. Her shield protects.' },
      { name: 'TRUTH', icon: '⚖️', summary: 'Paste any article. TRUTH shows you exactly where the bias lives — political, emotional, factual. See clearly. Think independently.', accentColor: '#F59E0B', status: 'live', suiteName: 'SAFETY SUITE', features: ['Political Bias Detection', 'Emotional Language Scoring', 'Source Credibility', 'Side-by-Side Analysis'], url: 'https://truth-platform-blond.vercel.app' },
    ],
  },
  {
    name: 'EMPOWERMENT SUITE',
    tagline: 'Level the Playing Field',
    color: '#8B5CF6',
    apps: [
      { name: 'SCHOLAR', icon: '🎓', summary: "The world's first AI-native university. Zero tuition. Degree-equivalent programs. Your personal AI tutor SAGE. Education should be free.", accentColor: '#8B5CF6', status: 'coming-soon', suiteName: 'EMPOWERMENT SUITE', features: ['AI Tutor SAGE', '4 Degree Programs', 'Zero Tuition', 'Employer Partnerships'] },
      { name: 'LEVEL UP', icon: '🎮', summary: 'Duolingo for life skills. Negotiate a raise. Fix your credit. Cook a meal. Meet Scout — your AI life coach mascot.', accentColor: '#8B5CF6', status: 'coming-soon', suiteName: 'EMPOWERMENT SUITE', features: ['Life Skill Courses', 'AI Coach Scout', 'Gamified Progress', 'Practical Real-World Skills'] },
      { name: 'PROSPER', icon: '💰', summary: 'Your AI financial coach. No judgment. No sales pitch. Just honest guidance to build the life you want.', accentColor: '#8B5CF6', status: 'coming-soon', suiteName: 'EMPOWERMENT SUITE', features: ['AI Financial Coaching', 'Budget Analysis', 'Goal Tracking', 'Zero Sales Pitches'] },
    ],
  },
  {
    name: 'LIFE SUITE',
    tagline: 'Your AI Command Center',
    color: '#0EA5E9',
    apps: [
      { name: 'COMMAND', icon: '⚡', summary: 'Your AI Chief of Staff. Morning War Room. Live Co-Pilot. Evening Debrief. Three rituals that change everything.', accentColor: '#0EA5E9', status: 'coming-soon', suiteName: 'LIFE SUITE', features: ['Morning War Room', 'Live Co-Pilot', 'Evening Debrief', '7 Industry Intelligence Modules'] },
      { name: 'AURA', icon: '💜', summary: 'One question. Every day. Everything changes. The simplest app with the deepest impact.', accentColor: '#0EA5E9', status: 'testflight', suiteName: 'LIFE SUITE', features: ['Daily Question Engine', 'Reflection Journal', 'Personal Growth Tracking', 'AI-Curated Insights'] },
    ],
  },
  {
    name: 'FUN SUITE',
    tagline: 'Because Joy Matters Too',
    color: '#F97316',
    apps: [
      { name: 'UNHINGED GO', icon: '🔥', summary: 'Am I Cooked? Vibe Check. Hype Me Up. Ghost Writer. Four viral tools. Zero filter. Pure chaos energy.', accentColor: '#F97316', status: 'testflight', suiteName: 'FUN SUITE', features: ['Am I Cooked?', 'Vibe Check', 'Hype Me Up', 'Ghost Writer'] },
      { name: 'WONDER', icon: '✨', summary: 'Kids learn best when they\'re laughing. 6 AI learning tools wrapped in pure joy. COPPA compliant. Parent approved. Kid obsessed.', accentColor: '#F97316', status: 'testflight', suiteName: 'FUN SUITE', features: ['6 Learning Tools', 'COPPA Compliant', 'Zero Data Collection', 'Fun-First Design'] },
    ],
  },
];

const stats = [
  { end: 14, suffix: '', label: 'Platforms', color: '#06B6D4' },
  { end: 115000, suffix: '+', label: 'Lines of Code', color: '#3B82F6' },
  { end: 380, suffix: '+', label: 'API Routes', color: '#8B5CF6' },
  { end: 241, suffix: '+', label: 'Pages', color: '#D4A843' },
  { end: 75, suffix: '+', label: 'Languages', color: '#E11D48' },
  { end: 165, suffix: '+', label: 'Build Sessions', color: '#00E5FF' },
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
            Connect the Disconnected. Protect the Unprotected. Empower the Brave. Organize the Overwhelmed. Include the Excluded.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={600}>
          <p className="mt-8 text-sm md:text-base text-white/50 max-w-[720px] leading-[1.8]">
            14 platforms. 115,000+ lines of code. 75+ languages. Zero venture capital.
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

      {/* LINGUA Universal Language Banner */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div
              className="glass-panel p-8 md:p-10 text-center relative overflow-hidden"
              style={{ border: '1px solid rgba(99,102,241,0.2)' }}
            >
              <div className="absolute inset-0 opacity-[0.03]" style={{ background: 'linear-gradient(135deg, #6366F1, #06B6D4, #D4A843)' }} />
              <div className="relative z-10">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="text-2xl font-bold mb-2">
                  <span className="spectrum-text">LINGUA</span> — Universal Language Layer
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                  Every app. Every platform. 75+ languages. Real-time translation. RTL support. Powered by GPT-4o.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* App Suites */}
      <section id="platforms" className="py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto space-y-20">
          {suites.map((suite, si) => (
            <div key={suite.name} id={`suite-${suite.name.toLowerCase().replace(/\s+/g, '-')}`}>
              <ScrollReveal delay={si * 50}>
                {/* Suite Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-1 w-8 rounded-full" style={{ background: suite.color }} />
                    <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: suite.color }}>
                      {suite.name}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white">{suite.tagline}</h2>
                </div>

                {/* App Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {suite.apps.map((app) => (
                    <AppCard key={app.name} app={app} />
                  ))}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Stats Bar */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-2xl md:text-3xl font-bold text-white/80 leading-relaxed">
              <span style={{ color: '#06B6D4' }}>14 Platforms.</span>{' '}
              <span className="spectrum-text">75+ Languages.</span>{' '}
              <span style={{ color: '#A78BFA' }}>$0 Venture Capital.</span>{' '}
              <span className="text-white">1 Mission.</span>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Spectrum Line Divider */}
      <div className="spectrum-line my-8" />

      {/* Ecosystem Constellation */}
      <ScrollReveal>
        <EcosystemConstellation />
      </ScrollReveal>

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
                  One person. One AI. Fourteen platforms. Seven months. Zero funding.
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
