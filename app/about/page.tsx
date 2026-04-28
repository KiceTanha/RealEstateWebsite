import Link from 'next/link';
import { Award, Home, Users, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen" style={{ background: '#0A0A0A' }}>
      {/* Hero */}
      <div className="py-20 px-6" style={{ borderBottom: '1px solid #2A2A2A' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1.5rem' }}>YOUR CALGARY REALTOR</p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', color: '#F5EDD6', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Kice Tanha
            </h1>
            <div className="gold-line mb-8" />
            <p style={{ color: '#666', fontSize: '0.82rem', lineHeight: '2', fontWeight: 300, marginBottom: '2.5rem' }}>
              Passionate about helping Calgary families find their perfect home. With deep local knowledge and a client-first approach, I make real estate exceptional at every step.
            </p>
            <Link href="/book-a-call" className="btn-primary">Book a Consultation</Link>
          </div>
          <div className="relative">
            <div className="w-full aspect-square" style={{ background: '#161616', border: '1px solid #2A2A2A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: '#333', fontSize: '0.7rem', letterSpacing: '0.2em' }}>YOUR PHOTO HERE</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24" style={{ background: '#C9A84C', opacity: 0.1 }} />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 px-6" style={{ background: '#080808', borderBottom: '1px solid #2A2A2A' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Home, value: '100+', label: 'Homes Sold' },
            { icon: Users, value: '150+', label: 'Happy Clients' },
            { icon: TrendingUp, value: '5+', label: 'Years Experience' },
            { icon: Award, value: '#1', label: 'Client Satisfaction' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label}>
              <Icon size={18} style={{ color: '#C9A84C', margin: '0 auto 1rem' }} />
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: '#C9A84C', fontWeight: 300 }}>{value}</p>
              <div className="gold-line mx-auto my-2" />
              <p style={{ color: '#555', fontSize: '0.6rem', letterSpacing: '0.2em' }}>{label.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bio */}
      <div className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1.5rem' }}>MY STORY</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', color: '#F5EDD6', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '2rem' }}>
            A Passion for Calgary Real Estate
          </h2>
          <div className="gold-line mb-10" />
          <div style={{ color: '#666', fontSize: '0.82rem', lineHeight: '2.2', fontWeight: 300 }} className="space-y-6">
            <p>Born and raised in Calgary, I have an intimate understanding of every neighbourhood — from the vibrant energy of Beltline to the family-friendly streets of Tuscany and Nolan Hill.</p>
            <p>My mission is simple: provide honest, transparent guidance so you can make the best real estate decisions for your family. Whether you are a first-time buyer, seasoned investor, or ready to sell, I bring the same dedication to every transaction.</p>
            <p>When I am not helping clients, you will find me exploring Calgary communities and staying on top of market trends so you do not have to.</p>
          </div>
          <div className="flex gap-4 mt-12">
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
            <Link href="/listings" className="btn-outline">View Listings</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
