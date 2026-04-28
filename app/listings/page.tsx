import { Search, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

const mockListings = [
  { id: '1', title: 'Modern Family Home', price: 750000, address: '123 Maple St NW', city: 'Calgary', bedrooms: 4, bathrooms: 3, sqft: 2200, status: 'for-sale', image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600' },
  { id: '2', title: 'Downtown Condo', price: 420000, address: '456 Centre St SW', city: 'Calgary', bedrooms: 2, bathrooms: 2, sqft: 950, status: 'for-sale', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600' },
  { id: '3', title: 'Luxury Estate', price: 1250000, address: '789 Elbow Dr SW', city: 'Calgary', bedrooms: 5, bathrooms: 4, sqft: 3800, status: 'for-sale', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600' },
];

export default function ListingsPage() {
  return (
    <div className="pt-24 min-h-screen" style={{ background: '#0A0A0A' }}>
      {/* Header */}
      <div className="py-20 px-6 text-center" style={{ borderBottom: '1px solid #2A2A2A' }}>
        <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1rem' }}>PROPERTIES</p>
        <h1 className="section-title">Calgary Listings</h1>
      </div>

      {/* Search Bar */}
      <div className="sticky top-16 z-10" style={{ background: '#0f0f0f', borderBottom: '1px solid #2A2A2A' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: '#C9A84C' }} />
            <input type="text" placeholder="Search by address, city, or MLS#"
              className="input-dark pl-10" style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }} />
          </div>
          <select className="input-dark" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>
            <option>All Types</option>
            <option>House</option>
            <option>Condo</option>
            <option>Townhouse</option>
            <option>Land</option>
          </select>
          <select className="input-dark" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>
            <option>Any Price</option>
            <option>Under $500K</option>
            <option>$500K–$750K</option>
            <option>$750K–$1M</option>
            <option>$1M+</option>
          </select>
          <button className="btn-outline flex items-center gap-2" style={{ fontSize: '0.6rem', whiteSpace: 'nowrap' }}>
            <SlidersHorizontal size={12} /> Filters
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <p style={{ color: '#444', fontSize: '0.65rem', letterSpacing: '0.2em', marginBottom: '2rem' }}>{mockListings.length} PROPERTIES FOUND</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockListings.map(p => (
            <Link key={p.id} href={`/listings/${p.id}`}
              className="card-dark group hover:border-yellow-700 transition-all duration-500 overflow-hidden block">
              <div className="relative h-56 overflow-hidden">
                <img src={p.image} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
                <span className="absolute top-4 left-4" style={{ background: '#C9A84C', color: '#0A0A0A', fontSize: '0.55rem', letterSpacing: '0.2em', padding: '4px 10px', fontFamily: 'Montserrat', fontWeight: 600 }}>
                  FOR SALE
                </span>
              </div>
              <div className="p-6">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', color: '#F5EDD6', letterSpacing: '0.05em', marginBottom: '0.5rem', fontWeight: 300 }}>{p.title}</h3>
                <p style={{ fontSize: '1.6rem', color: '#C9A84C', fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, marginBottom: '0.5rem' }}>
                  ${p.price.toLocaleString()}
                </p>
                <p style={{ color: '#555', fontSize: '0.7rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>{p.address}, {p.city}</p>
                <div className="flex gap-6" style={{ borderTop: '1px solid #2A2A2A', paddingTop: '1rem' }}>
                  {[`${p.bedrooms} Beds`, `${p.bathrooms} Baths`, `${p.sqft.toLocaleString()} sqft`].map(s => (
                    <span key={s} style={{ color: '#555', fontSize: '0.65rem', letterSpacing: '0.1em' }}>{s}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
