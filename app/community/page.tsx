import Link from 'next/link';

const communities = [
  { name: 'Beltline', type: 'Urban', desc: 'Vibrant downtown living with walkable restaurants, shops, and nightlife. Perfect for young professionals.', highlights: ['Walkable', 'Restaurants', 'Arts Scene'], img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600' },
  { name: 'Tuscany', type: 'Family', desc: 'Stunning mountain views and a strong sense of community. Excellent schools and parks for growing families.', highlights: ['Mountain Views', 'Top Schools', 'Parks'], img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600' },
  { name: 'Nolan Hill', type: 'Family', desc: 'One of Calgary\'s newest communities with modern homes, playgrounds, and easy access to the ring road.', highlights: ['New Builds', 'Playgrounds', 'Ring Road'], img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600' },
  { name: 'Mission', type: 'Trendy', desc: 'A lively neighbourhood along the Elbow River known for boutique shops, cafes, and young professionals.', highlights: ['River Walks', 'Cafes', 'Boutiques'], img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600' },
  { name: 'Cranston', type: 'Suburban', desc: 'A master-planned community in the southeast with beautiful river valley views and top-rated amenities.', highlights: ['River Valley', 'Amenities', 'Master Planned'], img: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=600' },
  { name: 'Altadore', type: 'Upscale', desc: 'A sought-after inner-city neighbourhood with charming streets, great schools, and proximity to Marda Loop.', highlights: ['Inner City', 'Marda Loop', 'Character Homes'], img: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600' },
];

export default function CommunityPage() {
  return (
    <div className="pt-24 min-h-screen" style={{ background: '#0A0A0A' }}>
      <div className="py-20 px-6 text-center" style={{ borderBottom: '1px solid #2A2A2A' }}>
        <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1rem' }}>EXPLORE</p>
        <h1 className="section-title">Calgary Communities</h1>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map(c => (
            <div key={c.name} className="card-dark group hover:border-yellow-700 transition-all duration-500 overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
                <span className="absolute top-4 left-4" style={{ background: 'transparent', border: '1px solid #C9A84C', color: '#C9A84C', fontSize: '0.55rem', letterSpacing: '0.2em', padding: '3px 8px', fontFamily: 'Montserrat' }}>
                  {c.type.toUpperCase()}
                </span>
              </div>
              <div className="p-6">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', color: '#F5EDD6', letterSpacing: '0.05em', marginBottom: '0.75rem', fontWeight: 300 }}>{c.name}</h3>
                <p style={{ color: '#555', fontSize: '0.75rem', lineHeight: '1.8', marginBottom: '1.25rem', fontWeight: 300 }}>{c.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {c.highlights.map(h => (
                    <span key={h} style={{ border: '1px solid #2A2A2A', color: '#666', fontSize: '0.6rem', padding: '3px 8px', letterSpacing: '0.1em' }}>{h}</span>
                  ))}
                </div>
                <Link href={`/listings?community=${c.name}`} style={{ color: '#C9A84C', fontSize: '0.65rem', letterSpacing: '0.15em' }}
                  className="hover:text-yellow-300 transition-colors">
                  VIEW LISTINGS →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
