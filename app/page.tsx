import Link from 'next/link';
import { Search, Home, TrendingUp, Users, Calculator, Calendar, ChevronDown } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%)' }} />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '2rem' }}>
            CALGARY LUXURY REAL ESTATE
          </p>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 300, color: '#F5EDD6', lineHeight: 1.05, letterSpacing: '0.05em', marginBottom: '2rem' }}>
            Extraordinary Homes<br />
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>for Extraordinary Lives</em>
          </h1>
          <div className="gold-line mx-auto mb-8" style={{ width: '60px' }} />
          <p style={{ color: '#aaa', fontSize: '0.85rem', letterSpacing: '0.15em', marginBottom: '3rem', fontWeight: 300 }}>
            Expert guidance for buyers & sellers across Calgary's finest communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings" className="btn-primary">Explore Listings</Link>
            <Link href="/book-a-call" className="btn-outline">Book a Consultation</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown size={16} style={{ color: '#C9A84C' }} />
        </div>
      </section>

      {/* Divider */}
      <div className="gold-divider" />

      {/* Buyer / Seller */}
      <section className="py-28" style={{ background: '#0A0A0A' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" data-reveal>
            <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1rem' }}>YOUR JOURNEY STARTS HERE</p>
            <h2 className="section-title">How Can I Help You?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                href: '/listings',
                label: 'I Am Buying',
                desc: 'Discover exceptional properties across Calgary. From first homes to luxury estates, find the one that speaks to you.',
                cta: 'View Listings',
                icon: Home,
              },
              {
                href: '/contact?type=seller',
                label: 'I Am Selling',
                desc: 'Achieve the best possible outcome for your property with market expertise, premium marketing, and white-glove service.',
                cta: 'Get a Valuation',
                icon: TrendingUp,
              },
            ].map(({ href, label, desc, cta, icon: Icon }) => (
              <div key={href} className="card-dark p-12 group hover:border-yellow-700 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500" style={{ background: '#C9A84C' }} />
                <Icon size={28} style={{ color: '#C9A84C', marginBottom: '1.5rem' }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#F5EDD6', letterSpacing: '0.05em', marginBottom: '1rem', fontWeight: 300 }}>{label}</h3>
                <p style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.9', marginBottom: '2rem', fontWeight: 300 }}>{desc}</p>
                <Link href={href} className="btn-primary" style={{ fontSize: '0.6rem' }}>{cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Tools */}
      <section className="py-28" style={{ background: '#080808' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16" data-reveal>
            <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1rem' }}>RESOURCES</p>
            <h2 className="section-title">Tools & Insights</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/calculator', icon: Calculator, label: 'Mortgage Calculator', desc: 'Estimate your monthly payments' },
              { href: '/calculator#proforma', icon: TrendingUp, label: 'Investment Proforma', desc: 'Analyze property returns' },
              { href: '/listings', icon: Search, label: 'Search Listings', desc: 'Browse available properties' },
              { href: '/community', icon: Users, label: 'Communities', desc: 'Explore Calgary neighbourhoods' },
              { href: '/book-a-call', icon: Calendar, label: 'Book a Call', desc: 'Free 30-min consultation' },
              { href: '/about', icon: Home, label: 'About Kice', desc: 'Your trusted local expert' },
            ].map(({ href, icon: Icon, label, desc }) => (
              <Link key={href} href={href}
                className="card-dark p-6 hover:border-yellow-700 transition-all duration-300 group">
                <Icon size={20} style={{ color: '#C9A84C', marginBottom: '1rem' }} />
                <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: '#F5EDD6', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>{label}</h4>
                <p style={{ color: '#555', fontSize: '0.7rem', letterSpacing: '0.05em', fontWeight: 300 }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Stats */}
      <section className="py-20" style={{ background: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '100+', label: 'Homes Sold' },
            { value: '150+', label: 'Happy Clients' },
            { value: '5+', label: 'Years Experience' },
            { value: '$50M+', label: 'In Transactions' },
          ].map(({ value, label }) => (
            <div key={label} data-reveal>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', color: '#C9A84C', fontWeight: 300, letterSpacing: '0.05em' }}>{value}</p>
              <div className="gold-line mx-auto my-2" />
              <p style={{ color: '#555', fontSize: '0.6rem', letterSpacing: '0.25em', fontWeight: 400 }}>{label.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-divider" />

      {/* CTA */}
      <section className="py-28 text-center relative overflow-hidden" style={{ background: '#080808' }}>
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-2xl mx-auto px-6" data-reveal>
          <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1.5rem' }}>BEGIN YOUR JOURNEY</p>
          <h2 className="section-title mb-6">Ready to Find Your Dream Home?</h2>
          <div className="gold-line mx-auto mb-8" />
          <p style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '2.5rem', fontWeight: 300 }}>
            Book a complimentary consultation and let's discuss your real estate goals.
          </p>
          <Link href="/book-a-call" className="btn-primary">Book Your Free Consultation</Link>
        </div>
      </section>
    </>
  );
}
