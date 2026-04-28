import Link from 'next/link';
import { Search, Home, TrendingUp, Users, Calculator, Calendar } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen bg-[#0f0f1a] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-yellow-400 font-semibold tracking-widest text-sm uppercase mb-4">Calgary Real Estate Expert</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your <span className="text-yellow-400">Dream Home</span> in Calgary
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Expert guidance for buyers and sellers. Local knowledge, proven results, personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/listings" className="btn-primary text-lg px-8 py-4">Browse Listings</Link>
            <Link href="/book-a-call" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-lg px-8 py-4 rounded transition-all duration-200">Book a Free Call</Link>
          </div>
        </div>
      </section>

      {/* Buyer or Seller */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">How Can I Help You?</h2>
          <p className="text-gray-500 mb-12">Whether you are buying your first home or selling for top dollar, I have got you covered.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-yellow-200 rounded-2xl p-10 hover:border-yellow-500 hover:shadow-lg transition-all">
              <Home size={48} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-3">I am a Buyer</h3>
              <p className="text-gray-500 mb-6">Explore available listings, get mortgage estimates, and book a consultation to find your perfect home.</p>
              <Link href="/listings" className="btn-primary">View Listings</Link>
            </div>
            <div className="border-2 border-yellow-200 rounded-2xl p-10 hover:border-yellow-500 hover:shadow-lg transition-all">
              <TrendingUp size={48} className="text-yellow-500 mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-3">I am a Seller</h3>
              <p className="text-gray-500 mb-6">Get a free home evaluation, see what your property could sell for, and let me handle the rest.</p>
              <Link href="/contact?type=seller" className="btn-primary">Get Home Value</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Tools to Help You</h2>
          <p className="text-gray-500 mb-12">Everything you need to make smart real estate decisions.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { href: '/calculator', icon: Calculator, label: 'Mortgage Calculator', desc: 'Estimate your monthly payments' },
              { href: '/calculator#proforma', icon: TrendingUp, label: 'Proforma Calculator', desc: 'Analyze investment returns' },
              { href: '/listings', icon: Search, label: 'Search Listings', desc: 'Find properties that match' },
              { href: '/community', icon: Users, label: 'Communities', desc: 'Explore Calgary neighbourhoods' },
              { href: '/book-a-call', icon: Calendar, label: 'Book a Call', desc: 'Free 30-min consultation' },
              { href: '/about', icon: Home, label: 'About Me', desc: 'Your local market expert' },
            ].map(({ href, icon: Icon, label, desc }) => (
              <Link key={href} href={href}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-left">
                <Icon size={32} className="text-yellow-500 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">{label}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f0f1a] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">Book a free, no-obligation call and lets talk about your real estate goals.</p>
          <Link href="/book-a-call" className="btn-primary text-lg px-10 py-4">Book Your Free Call</Link>
        </div>
      </section>
    </>
  );
}
