import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0f0f1a] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl font-bold text-yellow-400 mb-3">KiceTanha Realty</h3>
          <p className="text-sm text-gray-400 mb-4 max-w-sm">
            Your trusted Calgary real estate expert. Helping buyers and sellers navigate the market with confidence.
          </p>
          <div className="flex gap-4">
            <a href={process.env.NEXT_PUBLIC_INSTAGRAM || '#'} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"><Instagram size={20} /></a>
            <a href={process.env.NEXT_PUBLIC_FACEBOOK || '#'} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"><Facebook size={20} /></a>
            <a href={process.env.NEXT_PUBLIC_LINKEDIN || '#'} target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[['/', 'Home'], ['/listings', 'Listings'], ['/calculator', 'Mortgage Calculator'],
              ['/community', 'Communities'], ['/about', 'About Me'], ['/book-a-call', 'Book a Call']].map(([href, label]) => (
              <li key={href}><Link href={href} className="hover:text-yellow-400 transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-center"><Phone size={14} className="text-yellow-400" /> +1 (403) 000-0000</li>
            <li className="flex gap-2 items-center"><Mail size={14} className="text-yellow-400" /> kice@kicetanha.com</li>
            <li className="flex gap-2 items-start"><MapPin size={14} className="text-yellow-400 mt-1" /> Calgary, Alberta, Canada</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-xs text-gray-600">
        © {new Date().getFullYear()} KiceTanha Realty. All rights reserved.
      </div>
    </footer>
  );
}
