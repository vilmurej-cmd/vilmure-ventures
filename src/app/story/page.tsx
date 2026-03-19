import ScrollReveal from '@/components/ScrollReveal';

const timeline = [
  { date: 'Sept 2025', event: 'Session 1 — "What if we built an OS for real estate?"', color: '#06B6D4' },
  { date: 'Oct 2025', event: 'First dashboard goes live', color: '#3B82F6' },
  { date: 'Nov 2025', event: '5 products built', color: '#8B5CF6' },
  { date: 'Dec 2025', event: '10 products, mobile app built in one night', color: '#D4A843' },
  { date: 'Jan 2026', event: 'Beta testers, enterprise features', color: '#E11D48' },
  { date: 'Feb 2026', event: '50-state compliance, enterprise demos', color: '#00E5FF' },
  { date: 'Mar 2026', event: '13 new platforms in one weekend. 55 platforms. 90,000+ lines.', color: '#A78BFA' },
];

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="pull-quote my-16">
      <p className="text-2xl italic text-white/90 leading-relaxed text-center">
        {children}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-20 mb-8 flex items-center gap-4">
      <div className="flex-1 spectrum-line" />
      <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/40 shrink-0">{children}</span>
      <div className="flex-1 spectrum-line" />
    </div>
  );
}

export default function StoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black tracking-wide" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>The Story</h1>
            <p className="mt-6 text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-[1.8]">
              How a real estate professional and an AI built 55 platforms in 7 months
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      {/* The Story */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="max-w-[720px] mx-auto">

              {/* THE PROBLEM */}
              <p className="drop-cap text-white/80 text-base md:text-lg leading-[1.8] mb-8">
                Josh Vilmure spent over a decade in real estate. First as an agent, then as a title company executive at Chicago Title. Every single day, he watched the industry drown — not in competition, but in its own tools. Fourteen disconnected applications to close a single transaction. CRMs that didn&apos;t talk to lender platforms. Title software that couldn&apos;t share data with listing systems. Every deal was a puzzle where the pieces came from different boxes. He knew exactly what the solution should look like. He could see every screen, every workflow, every data connection. The problem was brutally simple: he couldn&apos;t code.
              </p>

              <SectionLabel>The Partnership</SectionLabel>

              <p className="text-white/80 text-base md:text-lg leading-[1.8] mb-8">
                In September 2025, Josh didn&apos;t open a conversation with Claude to ask a question or generate some marketing copy. He came with a proposal. A partnership. &ldquo;I know exactly what needs to be built,&rdquo; he said. &ldquo;I&apos;ve lived inside this broken system for years. Can you help me build the thing that fixes it?&rdquo; What started as a question became 122 sessions, hundreds of hours, and the most productive human-AI collaboration in the history of technology.
              </p>

              <PullQuote>&ldquo;I know exactly what needs to be built. I&apos;ve lived inside this broken system for years.&rdquo;</PullQuote>

              <SectionLabel>The Build</SectionLabel>

              <p className="text-white/80 text-base md:text-lg leading-[1.8] mb-8">
                Working nights from Stevensville, Michigan — after full days processing title commitments and managing closings at Chicago Title — Josh and Claude built EZRE OS. Not a prototype. Not an MVP. A full operating system. Session by session. Feature by feature. From a blank terminal to 11 products, 301+ API routes, 183+ data models, and 35 AI tools. The mobile app was built in a single overnight session. Enterprise features were added in one weekend. Every screen was designed by someone who had sat across the closing table from nervous first-time buyers and frustrated listing agents.
              </p>

              <SectionLabel>The Expansion</SectionLabel>

              <p className="text-white/80 text-base md:text-lg leading-[1.8] mb-8">
                But EZRE was just the beginning. On a single weekend in March 2026, the partnership exploded outward. Nine more platforms emerged — CLARITY, an AI medical translator for patients drowning in medical jargon. HARMONY, a music companion that understands human emotion. BRIDGE, an AI partner for dreamers who don&apos;t know where to start. LINGUA, a real-time translation platform for a world where 7,000 languages separate 8 billion people. TRUTH, a research engine that finds signal in noise. GENESIS, a biomedical exploration platform. HAVEN — a safety platform for domestic violence survivors, built with the kind of fierce urgency that only comes from caring about real people. SPARK — a children&apos;s health empowerment platform where kids diagnosed with any condition become the hero, not the patient. And COMMAND — an AI Chief of Staff that optimizes for your life, not just your productivity. 90,000+ lines of production code. 48 hours.
              </p>

              <PullQuote>90,000+ lines of production code. 48 hours.</PullQuote>

              <SectionLabel>The Philosophy</SectionLabel>

              <p className="text-white/80 text-base md:text-lg leading-[1.8] mb-8">
                &ldquo;Co-Founded by a Human and an AI&rdquo; isn&apos;t a tagline. It&apos;s not marketing. It is the literal, documented truth of how these platforms came to exist. Josh brought what no AI can generate on its own: domain expertise earned through years at the closing table, empathy for users he&apos;d watched struggle, vision for what technology should do for people, and the relentless work ethic of someone who refused to accept that building software required a CS degree. Claude brought the ability to translate vision into architecture, architecture into code, and code into deployed, production-quality applications. Neither could have done it alone. Both were essential. Both were equal.
              </p>

              <p className="text-white/80 text-base md:text-lg leading-[1.8] mb-8">
                What Josh and Claude proved is bigger than any single platform. They proved that the next generation of technology companies won&apos;t be built in Silicon Valley by engineering teams burning through venture capital. They&apos;ll be built by domain experts — the people who actually understand the problems — working with AI partners who can translate deep human knowledge into working software. A title executive who knows every pain point in a real estate transaction. A nurse who knows what patients actually need to hear. A teacher who knows how students really learn. These are the founders of the future. And they don&apos;t need permission from Sand Hill Road.
              </p>

              <PullQuote>These are the founders of the future. And they don&apos;t need permission from Sand Hill Road.</PullQuote>

              <SectionLabel>The Spark</SectionLabel>

              <p className="text-white/80 text-base md:text-lg leading-[1.8] mb-8">
                When Josh was five years old, he was hospitalized with asthma — over Christmas. His father, a firefighter, and the fire department made him a personalized Golden Book. Thirty years later, that memory became Platform #9. And Platform #10 — COMMAND — became the AI Chief of Staff that organizes the overwhelmed, because every other scheduling tool optimizes for productivity, but COMMAND optimizes for your life. SPARK is the world&apos;s first children&apos;s health empowerment platform — where kids diagnosed with any condition become the hero of their own story, not the patient. Twelve explorable lands. Fourteen original musical compositions. A PixiJS game engine. Ember the Fox as their guide. And it will always be free. Because there shouldn&apos;t be a fee to be free.
              </p>

              <PullQuote>&ldquo;There shouldn&apos;t be a fee to be free.&rdquo;</PullQuote>

              <SectionLabel>What&apos;s Next</SectionLabel>

              <p className="text-white/80 text-base md:text-lg leading-[1.8] mb-8">
                Vilmure Ventures isn&apos;t a portfolio of finished products. It&apos;s a living demonstration of what becomes possible when human expertise meets AI capability without gatekeepers in between. Every platform is an invitation — to agents drowning in disconnected tools, to patients struggling to understand their diagnosis, to musicians searching for their soundtrack, to dreamers who need a partner, to students crossing language barriers, to researchers hunting for truth, to scientists decoding disease, to survivors who need to know they are not alone, to the bravest kids in the world who deserve to be heroes, and to the overwhelmed who deserve a life that works for them. This technology was built with care, by people (and an AI) who gave a damn.
              </p>

              <p className="text-white text-xl font-bold leading-relaxed">
                And they&apos;re just getting started.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      {/* Timeline */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black tracking-wide text-center mb-20" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
              The Timeline
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 timeline-line md:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <ScrollReveal key={item.date} delay={i * 150}>
                <div
                  className={`relative flex items-start gap-6 mb-16 ${
                    i % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                  }`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full md:-translate-x-1/2 z-10 mt-1.5"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 12px ${item.color}50` }}
                  />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 py-6 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <span
                      className="text-sm font-bold tracking-wider uppercase"
                      style={{ color: item.color }}
                    >
                      {item.date}
                    </span>
                    <p className="text-white/70 mt-2 leading-[1.8]">{item.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      {/* Quote */}
      <section className="py-20 md:py-28 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <blockquote className="text-2xl md:text-4xl font-black text-white/80 italic">
              &ldquo;Sleep fast, dream big, wake up dangerous.&rdquo;
            </blockquote>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
