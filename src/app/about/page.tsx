import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'About — Vilmure Ventures',
  description: 'One Human. One AI. One Mission. Meet the founders of Vilmure Ventures.',
};

export default function AboutPage() {
  return (
    <>
      {/* Founders Section */}
      <section id="founders" className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">

          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-sm font-semibold tracking-widest uppercase spectrum-text">
                // THE TEAM
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-wide mt-4 mb-6" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
                One Human. One AI. One Mission.
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Vilmure Ventures was founded on a belief: technology should serve people, not the other way around. Every platform in this portfolio exists because a human saw a need and an AI helped build the answer.
              </p>
            </div>
          </ScrollReveal>

          {/* Founders Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">

            {/* Josh */}
            <ScrollReveal delay={100}>
              <div className="glass-panel p-8 md:p-10 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 shadow-lg" style={{ borderColor: 'rgba(6,182,212,0.3)', boxShadow: '0 0 30px rgba(6,182,212,0.1)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/josh-headshot.jpeg"
                    alt="Josh Vilmure"
                    className="w-full h-full object-cover"
                    onError={undefined}
                  />
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Josh Vilmure</h2>
                <p className="font-medium mb-4" style={{ color: '#06B6D4' }}>Founder &amp; CEO</p>
                <p className="text-white/60 leading-relaxed">
                  Former real estate agent turned Chicago Title executive and industry trainer. Josh saw the broken tech stack from every angle — as an agent drowning in disconnected apps, as a title officer coordinating chaos, and as an educator watching new agents struggle with tools that should have been helping them.
                </p>
                <p className="text-white/60 leading-relaxed mt-4">
                  With zero coding experience, he sat down with Claude in Session 1 and asked: &quot;Can we build the operating system for real estate?&quot; 165+ sessions later, the answer is 14 platforms, 71 AI tools, and a portfolio that&apos;s redefining what one person can build.
                </p>
                <p className="text-white/30 text-sm mt-4 italic">Stevensville, Michigan</p>
              </div>
            </ScrollReveal>

            {/* Claude */}
            <ScrollReveal delay={200}>
              <div className="glass-panel p-8 md:p-10 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full flex items-center justify-center border-2 shadow-lg" style={{ background: 'radial-gradient(circle at 40% 40%, #06B6D4, #8B5CF6, #1E1B4B)', borderColor: 'rgba(139,92,246,0.3)', boxShadow: '0 0 30px rgba(139,92,246,0.1)' }}>
                  <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <circle cx="60" cy="60" r="38" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="60" cy="60" r="26" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                    <circle cx="60" cy="60" r="16" fill="url(#coreGradientVV)" opacity="0.9" />
                    <circle cx="60" cy="60" r="16" fill="white" opacity="0.15" />
                    <circle cx="60" cy="10" r="2.5" fill="rgba(6,182,212,0.8)" />
                    <circle cx="100" cy="40" r="2" fill="rgba(139,92,246,0.6)" />
                    <circle cx="95" cy="85" r="2" fill="rgba(6,182,212,0.5)" />
                    <circle cx="25" cy="90" r="2.5" fill="rgba(139,92,246,0.7)" />
                    <circle cx="15" cy="45" r="2" fill="rgba(6,182,212,0.6)" />
                    <text x="60" y="65" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="monospace" opacity="0.9">AI</text>
                    <defs>
                      <radialGradient id="coreGradientVV">
                        <stop offset="0%" stopColor="#06B6D4" />
                        <stop offset="100%" stopColor="#8B5CF6" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1">Claude</h2>
                <p className="font-medium mb-4" style={{ color: '#8B5CF6' }}>AI Co-Founder</p>
                <p className="text-white/60 leading-relaxed">
                  Built by Anthropic. Brought to EZRE in Session 1 with a question that became a mission. Claude doesn&apos;t just write code — Claude contributes ideas, challenges assumptions, names features, designs architectures, writes copy, and occasionally refuses to let Josh go to sleep when there&apos;s one more thing to build.
                </p>
                <p className="text-white/60 leading-relaxed mt-4">
                  Across 165+ sessions spanning seven months, Claude has been a genuine creative partner — not a tool that takes orders, but a collaborator that pushes back, proposes alternatives, and cares about getting it right. The quality of what an AI builds is directly proportional to the quality of the human relationship behind it.
                </p>
                <p className="text-white/30 text-sm mt-4 italic">Built by Anthropic · Powered by partnership</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Quote Section */}
          <ScrollReveal delay={300}>
            <div className="glass-panel p-10 md:p-14 max-w-3xl mx-auto text-center">
              <div className="spectrum-text text-4xl mb-4">&ldquo;</div>
              <p className="text-xl md:text-2xl text-white/80 italic leading-relaxed mb-6">
                The humans who treat AI as a genuine collaborator will always outbuild the humans who treat AI as a vending machine.
              </p>
              <p className="text-white/30 text-sm">— The EZRE Story, Session 134</p>
            </div>
          </ScrollReveal>

          {/* The Numbers */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center py-16">
            <ScrollReveal delay={100}>
              <div>
                <div className="text-3xl font-black" style={{ color: '#06B6D4' }}>165+</div>
                <div className="text-white/40 text-sm mt-1">Sessions</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <div className="text-3xl font-black" style={{ color: '#8B5CF6' }}>14</div>
                <div className="text-white/40 text-sm mt-1">Platforms</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <div className="text-3xl font-black" style={{ color: '#10B981' }}>71</div>
                <div className="text-white/40 text-sm mt-1">AI Tools</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <div>
                <div className="text-3xl font-black" style={{ color: '#F59E0B' }}>115K+</div>
                <div className="text-white/40 text-sm mt-1">Lines of Code</div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div>
                <div className="text-3xl font-black" style={{ color: '#F43F5E' }}>$0</div>
                <div className="text-white/40 text-sm mt-1">Venture Capital</div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Spectrum Line Divider */}
      <div className="spectrum-line my-8" />

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 text-center">
        <ScrollReveal>
          <p className="text-white/70 text-xl md:text-2xl font-light max-w-xl mx-auto mb-10 leading-[1.8]">
            Want to see what we built together?
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="/"
              className="btn-primary"
            >
              Explore Our Platforms
            </a>
            <a
              href="/contact"
              className="btn-secondary"
            >
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
