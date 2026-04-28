import Link from 'next/link';

const communities = [
  { name: 'Beltline', type: 'Urban', desc: 'Vibrant downtown living with walkable restaurants, shops, and nightlife. Perfect for young professionals.', highlights: ['Walkable', 'Restaurants', 'Arts scene'], img: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600' },
  { name: 'Tuscany', type: 'Family', desc: 'Stunning mountain views and a strong sense of community. Excellent schools and parks for growing families.', highlights: ['Mountain views', 'Top schools', 'Parks'], img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600' },
  { name: 'Nolan Hill', type: 'Family', desc: 'One of Calgary newest communities with modern homes, playgrounds, and easy access to the ring road.', highlights: ['New builds', 'Playgrounds', 'Ring road access'], img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600' },
  { name: 'Mission', type: 'Trendy', desc: 'A lively neighbourhood along the Elbow River known for boutique shops, cafes, and a young professional crowd.', highlights: ['River walks', 'Cafes', 'Boutiques'], img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600' },
  { name: 'Cranston', type: 'Suburban', desc: 'A master-planned community in the southeast with beautiful river valley views and top-rated amenities.', highlights: ['River valley', 'Amenities', 'Master planned'], img: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?w=600' },
  { name: 'Altadore', type: 'Upscale', desc: 'A sought-after inner-city neighbourhood with charming streets, great schools, and proximity to Marda Loop.', highlights: ['Inner city', 'Marda Loop', 'Character homes'], img: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600' },
];

export default function CommunityPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-[#0f0f1a] text-white py-14 px-4 text-center">
        <h1 className="font-serif text-4xl font-bold mb-2">Calgary Communities</h1>
        <p className="text-gray-400">Explore the neighbourhoods that make Calgary special</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map(c => (
            <div key={c.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="h-44 overflow-hidden relative">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">{c.type}</span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold mb-2">{c.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.highlights.map(h => (
                    <span key={h} className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded-full">{h}</span>
                  ))}
                </div>
                <Link href={`/listings?community=${c.name}`} className="text-yellow-600 text-sm font-semibold hover:underline">
                  View listings in {c.name} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
