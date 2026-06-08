'use client';

import { useState } from 'react';

interface Props {
  headline: string;
}

const trustPoints = [
  'Same day service available',
  'Live answering, no bots',
  'Upfront pricing before we start',
  '100% Satisfaction Guaranteed',
];

export default function ContactForm({ headline }: Props) {
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
        body: JSON.stringify({
          ...formData,
          source: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
        }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please call us directly at 480-279-5511.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact-form" className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[420px_1fr]">

          {/* ── Left: navy info panel ── */}
          <div className="bg-navy px-6 sm:px-10 py-10 sm:py-16 flex flex-col justify-center">
            <span className="inline-block bg-white/10 text-white/70 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 self-start">
              Get in Touch
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
              {headline}
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Fill out the form and a Thomas team member will get back to you shortly. For immediate assistance, call us directly.
            </p>

            {/* Phone CTA */}
            <a href="tel:4802795511" className="group mb-8">
              <p className="text-white/40 text-[11px] uppercase tracking-widest mb-1.5">Call us now</p>
              <p className="text-2xl sm:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-200">
                480-279-5511
              </p>
            </a>

            <div className="w-10 h-px bg-white/15 mb-7" />

            {/* Trust bullets */}
            <div className="space-y-3.5">
              {trustPoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-brand-red/25 border border-brand-red/50 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <span className="text-white/75 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form panel ── */}
          <div className="bg-white px-6 sm:px-10 py-10 sm:py-16 flex items-center">
            {submitted ? (
              <div className="w-full max-w-lg mx-auto bg-green-50 border border-green-200 rounded-2xl p-8 sm:p-10 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Request Received!</h3>
                <p className="text-green-700 text-sm leading-relaxed">
                  A Thomas team member will contact you shortly. Check your email for confirmation. For immediate help, call{' '}
                  <a href="tel:4802795511" className="font-bold underline">480-279-5511</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-5">
                <div className="text-center text-lg sm:text-3xl mb-8">
                  <span className="emph-section">How Can We Make You Smile Today?</span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-navy uppercase tracking-wide mb-2">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-white border border-border rounded-lg px-4 py-3 text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/40 focus:border-navy transition-all placeholder-gray-400 shadow-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-navy uppercase tracking-wide mb-2">
                      Phone Number <span className="text-brand-red">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(480) 000-0000"
                      className="w-full bg-white border border-border rounded-lg px-4 py-3 text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/40 focus:border-navy transition-all placeholder-gray-400 shadow-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-navy uppercase tracking-wide mb-2">
                    Email Address <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/40 focus:border-navy transition-all placeholder-gray-400 shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-navy uppercase tracking-wide mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your plumbing issue..."
                    className="w-full bg-white border border-border rounded-lg px-4 py-3 text-body-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/40 focus:border-navy transition-all placeholder-gray-400 shadow-sm resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-red hover:bg-brand-red-dark disabled:opacity-70 text-white font-bold py-4 rounded-lg text-base transition-all duration-200 hover:shadow-lg active:scale-[0.99] tracking-wide"
                >
                  {loading ? 'Sending…' : 'Send My Request →'}
                </button>

                <p className="text-gray-400 text-xs text-center leading-relaxed">
                  By submitting this form you consent to receive calls and texts from Thomas Home Services at the number provided. Message and data rates may apply.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
