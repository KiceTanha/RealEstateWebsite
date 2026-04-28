import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid #2A2A2A' }}>
      <div className="gold-divider" />
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="mb-6">
            <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C9A84C', fontSize: '1.6rem', letterSpacing: '0.15em', fontWeight: 300 }}>
              KICE TANHA
            </p>
            <p style={{ fontFamily: 'Montserrat', color: '#555', fontSize: '0.55rem', letterSpacing: '0.35em' }}>
              CALGARY REAL ESTATE
            </p>
          </div>
          <p style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.8', maxWidth: '320px', fontWeight: 300 }}>
            Exceptional real estate experiences for discerning buyers and sellers in Calgary's finest communities.
          </p>
          <div className="flex gap-5 mt-6">
            {[
              { href: process.env.NEXT_PUBLIC_INSTAGRAM || '#', Icon: Instagram },
              { href: process.env.NEXT_PUBLIC_FACEBOOK || '#', Icon: Facebook },
              { href: process.env.NEXT_PUBLIC_LINKEDIN || '#', Icon: Linkedin },
            ].map(({ href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                style={{ color: '#444', border: '1px solid #2A2A2A', padding: '8px' }}
                className="hover:border-yellow-600 hover:text-yellow-500 transition-all">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '1.5rem' }}>
            NAVIGATION
          </p>
          <ul className="space-y-3">
            {[['/', 'Home'], ['/listings', 'Listings'], ['/calculator', 'Calculator'],
              ['/community', 'Communities'], ['/about', 'About'], ['/book-a-call', 'Book a Call']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} style={{ color: '#666', fontSize: '0.75rem', letterSpacing: '0.1em' }}
                  className="hover:text-yellow-500 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.25em', color: '#C9A84C', marginBottom: '1.5rem' }}>
            CONTACT
          </p>
          <ul className="space-y-4">
            {[
              { Icon: Phone, text: '+1 (403) 000-0000' },
              { Icon: Mail, text: 'kice@kicetanha.com' },
              { Icon: MapPin, text: 'Calgary, Alberta' },
            ].map(({ Icon, text }) => (
              <li key={text} className="flex gap-3 items-center">
                <Icon size={12} style={{ color: '#C9A84C' }} />
                <span style={{ color: '#666', fontSize: '0.75rem' }}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="gold-divider" />
      <div className="text-center py-6" style={{ color: '#333', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
        © {new Date().getFullYear()} KICE TANHA REAL ESTATE — ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
