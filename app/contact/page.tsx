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
        toast.success('Message sent! I will be in touch soon.');
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
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-[#0f0f1a] text-white py-14 px-4 text-center">
        <h1 className="font-serif text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-gray-400">I would love to hear from you</p>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-2xl font-bold mb-6">Let us Connect</h2>
          <p className="text-gray-500 mb-8">Whether you are buying, selling, or just exploring your options, I am here to help. Reach out anytime.</p>
          <div className="space-y-5">
            <div className="flex gap-3 items-center"><Phone size={20} className="text-yellow-500" /><span>+1 (403) 000-0000</span></div>
            <div className="flex gap-3 items-center"><Mail size={20} className="text-yellow-500" /><span>kice@kicetanha.com</span></div>
            <div className="flex gap-3 items-start"><MapPin size={20} className="text-yellow-500 mt-1" /><span>Calgary, Alberta, Canada</span></div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-8 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">I am a...</label>
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500">
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="general">Just inquiring</option>
            </select>
          </div>
          {[
            { label: 'Full Name', key: 'name', type: 'text', required: true },
            { label: 'Email', key: 'email', type: 'email', required: true },
            { label: 'Phone (optional)', key: 'phone', type: 'tel', required: false },
          ].map(({ label, key, type, required }) => (
            <div key={key}>
              <label className="text-sm font-medium text-gray-700 block mb-1">{label}</label>
              <input type={type} required={required} value={(form as any)[key]}
                onChange={e => setForm({ ...form, [key]: e.target.value })}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500" />
            </div>
          ))}
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Message</label>
            <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-500 resize-none" />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
