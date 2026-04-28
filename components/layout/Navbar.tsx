'use client';
import { useState } from 'react';
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
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f0f1a]/95 backdrop-blur-sm border-b border-yellow-800/30">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-xl font-bold text-yellow-400">
          KiceTanha<span className="text-white"> Realty</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-gray-300 hover:text-yellow-400 text-sm font-medium transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/auth/login" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-2 rounded text-sm transition-colors">Login</Link>
        </div>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#0f0f1a] px-4 pb-4 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-yellow-400 py-2 border-b border-gray-800">
              {l.label}
            </Link>
          ))}
          <Link href="/auth/login" className="bg-yellow-600 text-white text-center py-2 rounded mt-2">Login</Link>
        </div>
      )}
    </nav>
  );
}
