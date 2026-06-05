'use client';

import { useState } from 'react';

export default function HeroForm({ headline }: { headline: string }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please call us at 480-279-5511.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Request Received!</h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          A Thomas team member will be in touch shortly. Check your email for confirmation. For immediate help, call{' '}
          <a href="tel:4802795511" className="text-brand-red font-bold">480-279-5511</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Form header */}
      <div className="bg-navy px-6 py-4">
        <h3 className="text-white font-bold text-lg leading-snug">{headline}</h3>
        <p className="text-white/65 text-xs mt-0.5">Same day service available</p>
      </div>

      <form onSubmit={handleSubmit} className="px-6 py-5 space-y-3.5">
        <div>
          <label htmlFor="hero-name" className="block text-xs font-semibold text-navy mb-1">
            Full Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="hero-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your full name"
            className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-[#333333] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A377B] focus:border-transparent placeholder-gray-400"
          />
        </div>

        <div>
          <label htmlFor="hero-phone" className="block text-xs font-semibold text-navy mb-1">
            Phone Number <span className="text-brand-red">*</span>
          </label>
          <input
            id="hero-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="(480) 000-0000"
            className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-[#333333] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A377B] focus:border-transparent placeholder-gray-400"
          />
        </div>

        <div>
          <label htmlFor="hero-email" className="block text-xs font-semibold text-navy mb-1">
            Email Address <span className="text-brand-red">*</span>
          </label>
          <input
            id="hero-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-[#333333] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A377B] focus:border-transparent placeholder-gray-400"
          />
        </div>

        <div>
          <label htmlFor="hero-message" className="block text-xs font-semibold text-navy mb-1">
            Message
          </label>
          <textarea
            id="hero-message"
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Briefly describe your issue..."
            className="w-full border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-[#333333] text-sm focus:outline-none focus:ring-2 focus:ring-[#0A377B] focus:border-transparent placeholder-gray-400 resize-none"
          />
        </div>

        {error && (
          <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-red hover:bg-brand-red-dark disabled:opacity-70 text-white font-bold py-3.5 rounded-lg text-sm transition-all duration-200 hover:shadow-lg active:scale-[0.99]"
        >
          {loading ? 'Sending…' : 'Send My Request'}
        </button>

        <p className="text-gray-400 text-[10px] text-center leading-relaxed">
          By submitting you consent to receive calls &amp; texts from Thomas Home Services.
        </p>
      </form>
    </div>
  );
}
