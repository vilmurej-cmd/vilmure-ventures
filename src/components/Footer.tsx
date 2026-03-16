import Link from 'next/link';

const footerLinks = [
  { href: '/#platforms', label: 'Platforms' },
  { href: '/story', label: 'Story' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/invest', label: 'Invest' },
  { href: '/press', label: 'Press' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="relative">
      <div className="spectrum-line" />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-white font-black text-sm tracking-[0.25em] uppercase"
            >
              VILMURE VENTURES
            </Link>
            <p className="mt-4 text-white/40 text-sm leading-relaxed">
              Connect the Disconnected.<br />
              Protect the Unprotected.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
              Navigate
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white/60 text-xs font-semibold tracking-widest uppercase mb-4">
              Contact
            </h4>
            <p className="text-white/40 text-sm">josh@myezre.ai</p>
            <p className="text-white/40 text-sm mt-1">269-487-4847</p>
            <p className="text-white/40 text-sm mt-4">
              Stevensville, Michigan — Founded 2025
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; 2026 Vilmure Ventures. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Built with conviction by a human and an AI
          </p>
        </div>
      </div>
    </footer>
  );
}
