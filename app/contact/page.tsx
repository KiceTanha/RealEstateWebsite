'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', type: 'general' });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (res.ok) {
        toast.success('Message received. I will be in touch shortly.');
        setForm({ name: '', email: '', phone: '', message: '', type: 'general' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    }
    setLoading(false);
  }

  return (
    <div className="pt-24 min-h-screen" style={{ background: '#0A0A0A' }}>
      <div className="py-20 px-6 text-center" style={{ borderBottom: '1px solid #2A2A2A' }}>
        <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '1rem' }}>GET IN TOUCH</p>
        <h1 className="section-title">Contact Me</h1>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">
        {/* Info */}
        <div>
          <p style={{ fontFamily: 'Montserrat', fontSize: '0.6rem', letterSpacing: '0.4em', color: '#C9A84C', marginBottom: '2rem' }}>REACH OUT</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', color: '#F5EDD6', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '1rem' }}>
            Let Us Connect
          </h2>
          <div className="gold-line mb-8" />
          <p style={{ color: '#555', fontSize: '0.8rem', lineHeight: '2', fontWeight: 300, marginBottom: '2.5rem' }}>
            Whether you are buying, selling, or exploring your options — I am here to provide expert guidance every step of the way.
          </p>
          <div className="space-y-5">
            {[
              { Icon: Phone, text: '+1 (403) 000-0000' },
              { Icon: Mail, text: 'kice@kicetanha.com' },
              { Icon: MapPin, text: 'Calgary, Alberta, Canada' },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex gap-4 items-center">
                <div style={{ border: '1px solid #2A2A2A', padding: '10px' }}>
                  <Icon size={14} style={{ color: '#C9A84C' }} />
                </div>
                <span style={{ color: '#666', fontSize: '0.8rem', letterSpacing: '0.05em' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card-dark p-8 space-y-5">
          <div>
            <label style={{ fontFamily: 'Montserrat', fontSize: '0.55rem', letterSpacing: '0.2em', color: '#C9A84C', display: 'block', marginBottom: '0.5rem' }}>I AM A...</label>
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="input-dark" style={{ fontSize: '0.75rem' }}>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="general">Just Inquiring</option>
            </select>
          </div>
          {[
            { label: 'FULL NAME', key: 'name', type: 'text', required: true },
            { label: 'EMAIL ADDRESS', key: 'email', type: 'email', required: true },
            { label: 'PHONE (OPTIONAL)', key: 'phone', type: 'tel', required: false },
          ].map(({ label, key, type, required }) => (
            <div key={key}>
              <label style={{ fontFamily: 'Montserrat', fontSize: '0.55rem', letterSpacing: '0.2em', color: '#C9A84C', display: 'block', marginBottom: '0.5rem' }}>{label}</label>
              <input type={type} required={required} value={(form as any)[key]}
                onChange={e => setForm({ ...form, [key]: e.target.value })}
                className="input-dark" style={{ fontSize: '0.75rem' }} />
            </div>
          ))}
          <div>
            <label style={{ fontFamily: 'Montserrat', fontSize: '0.55rem', letterSpacing: '0.2em', color: '#C9A84C', display: 'block', marginBottom: '0.5rem' }}>MESSAGE</label>
            <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              className="input-dark resize-none" style={{ fontSize: '0.75rem' }} />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full" style={{ fontSize: '0.6rem' }}>
            {loading ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
        </form>
      </div>
    </div>
  );
}
