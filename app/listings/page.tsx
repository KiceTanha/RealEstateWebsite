import { Search, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';

const mockListings = [
  { id: '1', title: 'Modern Family Home', price: 750000, address: '123 Maple St NW', city: 'Calgary', bedrooms: 4, bathrooms: 3, sqft: 2200, status: 'for-sale', image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600' },
  { id: '2', title: 'Downtown Condo', price: 420000, address: '456 Centre St SW', city: 'Calgary', bedrooms: 2, bathrooms: 2, sqft: 950, status: 'for-sale', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600' },
  { id: '3', title: 'Luxury Estate', price: 1250000, address: '789 Elbow Dr SW', city: 'Calgary', bedrooms: 5, bathrooms: 4, sqft: 3800, status: 'for-sale', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600' },
];

export default function ListingsPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-[#0f0f1a] text-white py-14 px-4 text-center">
        <h1 className="font-serif text-4xl font-bold mb-2">Calgary Listings</h1>
        <p className="text-gray-400">Find your perfect property</p>
      </div>
      <div className="bg-white shadow-sm border-b sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search by address, city, or MLS#"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500" />
          </div>
          <select className="border rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500 text-sm">
            <option>All Types</option>
            <option>House</option>
            <option>Condo</option>
            <option>Townhouse</option>
            <option>Land</option>
          </select>
          <select className="border rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500 text-sm">
            <option>Any Price</option>
            <option>Under $500K</option>
            <option>$500K–$750K</option>
            <option>$750K–$1M</option>
            <option>$1M+</option>
          </select>
          <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm hover:bg-gray-50">
            <SlidersHorizontal size={16} /> Filters
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <p className="text-sm text-gray-500 mb-6">{mockListings.length} properties found</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockListings.map(p => (
            <Link key={p.id} href={`/listings/${p.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="relative h-52 overflow-hidden">
                <img src={p.image} alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">For Sale</span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-bold mb-1">{p.title}</h3>
                <p className="text-2xl font-bold text-yellow-600 mb-2">${p.price.toLocaleString()}</p>
                <p className="text-sm text-gray-500 mb-3">{p.address}, {p.city}</p>
                <div className="flex gap-4 text-sm text-gray-600 border-t pt-3">
                  <span>{p.bedrooms} beds</span>
                  <span>{p.bathrooms} baths</span>
                  <span>{p.sqft.toLocaleString()} sqft</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
