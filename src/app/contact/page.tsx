'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    const mailtoUrl = `mailto:josh@myezre.ai?subject=${encodeURIComponent(
      `[VV] ${subject} — from ${name}`
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.open(mailtoUrl);
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-black tracking-wide" style={{ textShadow: '0 0 40px rgba(6,182,212,0.15)' }}>Contact</h1>
            <p className="mt-6 text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-[1.8]">
              Let&apos;s talk about what we can build together.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="spectrum-line my-8" />

      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <ScrollReveal>
            <div className="glass-panel p-6 md:p-8 h-full">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div>
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1">Email</p>
                  <a href="mailto:josh@myezre.ai" className="text-white text-lg hover:text-white/70 transition-colors">
                    josh@myezre.ai
                  </a>
                </div>

                <div>
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1">Phone</p>
                  <a href="tel:2699325740" className="text-white text-lg hover:text-white/70 transition-colors">
                    269-932-5740
                  </a>
                </div>

                <div>
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-1">Location</p>
                  <p className="text-white/60 text-lg">Stevensville, Michigan</p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-3">Connect</p>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors text-sm">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <div className="glass-panel p-6 md:p-8 h-full">
              <h2 className="text-2xl font-bold mb-8">Send a Message</h2>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white text-lg font-semibold mb-2">Message sent!</p>
                  <p className="text-white/50 text-sm">Your email client should have opened. We&apos;ll be in touch.</p>
                  <button
                    onClick={() => { setSent(false); setName(''); setEmail(''); setMessage(''); }}
                    className="mt-6 text-sm text-white/40 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-white/30 text-xs font-semibold tracking-widest uppercase block mb-2">Name</label>
                    <input
                      type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-white/30 text-xs font-semibold tracking-widest uppercase block mb-2">Email</label>
                    <input
                      type="email" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-white/30 text-xs font-semibold tracking-widest uppercase block mb-2">Subject</label>
                    <select
                      id="subject" value={subject} onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/20 transition-colors"
                    >
                      <option value="General Inquiry" className="bg-[#080810]">General Inquiry</option>
                      <option value="Consulting" className="bg-[#080810]">Consulting</option>
                      <option value="Investment / Acquisition" className="bg-[#080810]">Investment / Acquisition</option>
                      <option value="Press / Media" className="bg-[#080810]">Press / Media</option>
                      <option value="Partnership" className="bg-[#080810]">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-white/30 text-xs font-semibold tracking-widest uppercase block mb-2">Message</label>
                    <textarea
                      id="message" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none"
                      placeholder="Tell us what you're thinking..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-center">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
