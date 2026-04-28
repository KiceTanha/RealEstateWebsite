import Link from 'next/link';
import { Award, Home, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="bg-[#0f0f1a] text-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 font-semibold tracking-widest text-sm uppercase mb-3">Your Calgary Realtor</p>
            <h1 className="font-serif text-5xl font-bold mb-4">KiceTanha</h1>
            <p className="text-gray-300 text-lg mb-6">
              Passionate about helping Calgary families find their perfect home. With deep local knowledge and a client-first approach, I make real estate stress-free.
            </p>
            <Link href="/book-a-call" className="btn-primary">Book a Free Consultation</Link>
          </div>
          <div className="w-full h-80 bg-gray-700 rounded-2xl flex items-center justify-center text-gray-400">
            <p className="text-sm">Add your photo here</p>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 text-white py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Home, value: '100+', label: 'Homes Sold' },
            { icon: Users, value: '150+', label: 'Happy Clients' },
            { icon: TrendingUp, value: '5+', label: 'Years Experience' },
            { icon: Award, value: '#1', label: 'Client Satisfaction' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon size={28} className="mx-auto mb-2 opacity-80" />
              <p className="font-serif text-3xl font-bold">{value}</p>
              <p className="text-sm opacity-80">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="section-title mb-6">My Story</h2>
        <div className="text-gray-600 space-y-4">
          <p>Born and raised in Calgary, I have an intimate understanding of every neighbourhood from the vibrant energy of Beltline to the family-friendly streets of Tuscany and Nolan Hill.</p>
          <p>My mission is simple: provide honest, transparent guidance so you can make the best real estate decisions for your family. Whether you are a first-time buyer, seasoned investor, or ready to sell, I bring the same dedication to every transaction.</p>
          <p>When I am not helping clients, you will find me exploring Calgary communities and staying on top of market trends so you do not have to.</p>
        </div>
        <div className="mt-10 flex gap-4">
          <Link href="/contact" className="btn-primary">Get in Touch</Link>
          <Link href="/listings" className="btn-outline">View Listings</Link>
        </div>
      </div>
    </div>
  );
}
