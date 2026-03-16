import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-black tracking-wide">Contact</h1>
          <p className="mt-6 text-white/50 text-lg md:text-xl max-w-2xl mx-auto">
            Let&apos;s talk about what we can build together.
          </p>
        </ScrollReveal>
      </section>

      <div className="spectrum-line" />

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="glass-panel p-8 h-full">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:josh@myezre.ai"
                    className="text-white text-lg hover:text-white/70 transition-colors"
                  >
                    josh@myezre.ai
                  </a>
                </div>

                <div>
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:2694874847"
                    className="text-white text-lg hover:text-white/70 transition-colors"
                  >
                    269-487-4847
                  </a>
                </div>

                <div>
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1">
                    Location
                  </p>
                  <p className="text-white/60 text-lg">Stevensville, Michigan</p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-3">
                    Connect
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors text-sm"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-white transition-colors text-sm"
                    >
                      X / Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <div className="glass-panel p-8 h-full">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>

              <form
                action="mailto:josh@myezre.ai"
                method="POST"
                encType="text/plain"
                className="space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="text-white/30 text-xs font-semibold tracking-widest uppercase block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-white/30 text-xs font-semibold tracking-widest uppercase block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="text-white/30 text-xs font-semibold tracking-widest uppercase block mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
                  >
                    <option value="general" className="bg-[#080810]">
                      General Inquiry
                    </option>
                    <option value="consulting" className="bg-[#080810]">
                      Consulting
                    </option>
                    <option value="investment" className="bg-[#080810]">
                      Investment / Acquisition
                    </option>
                    <option value="press" className="bg-[#080810]">
                      Press / Media
                    </option>
                    <option value="partnership" className="bg-[#080810]">
                      Partnership
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-white/30 text-xs font-semibold tracking-widest uppercase block mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none"
                    placeholder="Tell us what you're thinking..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-white text-[#080810] font-semibold rounded-full hover:bg-white/90 transition-all text-sm tracking-wide"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
