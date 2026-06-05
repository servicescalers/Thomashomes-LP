'use client';

import { useState } from 'react';
import type { FAQItem } from '@/types';

interface Props {
  headline: string;
  faqs: FAQItem[];
}

function FAQRow({ faq }: { faq: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-border rounded-xl overflow-hidden transition-shadow duration-200 ${open ? 'shadow-md' : 'shadow-sm'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-light-bg transition-colors duration-150"
        aria-expanded={open}
      >
        <span className="font-semibold text-navy text-sm md:text-base pr-2">{faq.q}</span>
        <span className={`shrink-0 w-7 h-7 rounded-full border-2 border-navy flex items-center justify-center transition-transform duration-200 ${open ? 'bg-navy rotate-45' : ''}`}>
          <svg className={`w-3.5 h-3.5 ${open ? 'text-white' : 'text-navy'}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className={`px-5 pb-5 pt-1 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-body-text text-sm md:text-base leading-relaxed">{faq.a}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ headline, faqs }: Props) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-4 text-center">
          {headline}
        </h2>
        <div className="w-16 h-1 bg-brand-red mx-auto mb-10 rounded-full" />

        <div className="space-y-3 mb-12">
          {faqs.map((faq, i) => (
            <FAQRow key={i} faq={faq} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:4802795511"
            className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-4 rounded-xl shadow-[0_8px_25px_-4px_rgba(175,0,0,0.4)] hover:shadow-[0_12px_35px_-4px_rgba(175,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            480-279-5511
          </a>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Service
          </a>
        </div>

      </div>
    </section>
  );
}
