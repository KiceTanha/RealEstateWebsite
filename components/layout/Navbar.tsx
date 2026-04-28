'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/listings', label: 'Listings' },
  { href: '/calculator', label: 'Calculator' },
  { href: '/community', label: 'Community' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/book-a-call', label: 'Book a Call' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
      style={{ background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent', borderBottom: scrolled ? '1px solid #2A2A2A' : 'none' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C9A84C', fontSize: '1.4rem', letterSpacing: '0.15em', fontWeight: 300 }}>
            KICE TANHA
          </span>
          <span style={{ fontFamily: 'Montserrat, sans-serif', color: '#888', fontSize: '0.55rem', letterSpacing: '0.35em', fontWeight: 400 }}>
            REAL ESTATE
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              style={{ fontFamily: 'Montserrat', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#aaa', fontWeight: 400 }}
              className="hover:text-yellow-400 transition-colors uppercase">
              {l.label}
            </Link>
          ))}
          <Link href="/auth/login" className="btn-outline" style={{ fontSize: '0.6rem', padding: '8px 20px' }}>
            Login
          </Link>
        </div>

        <button className="md:hidden" style={{ color: '#C9A84C' }} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#0f0f0f', borderTop: '1px solid #2A2A2A' }} className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: 'Montserrat', fontSize: '0.7rem', letterSpacing: '0.2em', color: '#aaa' }}
              className="hover:text-yellow-400 transition-colors uppercase py-2 border-b border-gray-800">
              {l.label}
            </Link>
          ))}
          <Link href="/auth/login" className="btn-primary text-center mt-2">Login</Link>
        </div>
      )}
    </nav>
  );
}
