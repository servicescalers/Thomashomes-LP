import type { ServiceItem } from '@/types';

interface Props {
  headline: string;
  services: ServiceItem[];
}

const ICONS = [
  <svg key={0} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" /></svg>,
  <svg key={1} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z" /></svg>,
  <svg key={2} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4zM9 3L7.17 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.17L15 3H9zm3 14.5A5.5 5.5 0 1 1 12 1.5a5.5 5.5 0 0 1 0 11z" /></svg>,
  <svg key={3} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2 0-4-3-5-3-5 3 0 4 3 4 3 2-1 3-4 3-4C22 3 17 8 17 8zm-2 7c0 0-2 4-5 4 0 0 3-2 3-5 0 0 2 0 2 1z" /></svg>,
  <svg key={4} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>,
  <svg key={5} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zM3 10h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zM3 17h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4z" /></svg>,
  <svg key={6} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 7H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v6h2v-6h12v6h2v-6h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z" /></svg>,
  <svg key={7} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>,
  <svg key={8} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96a7.37 7.37 0 0 0-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.47.47 0 0 0-.12-.61l-2.01-1.58zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z" /></svg>,
  <svg key={9} className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" /></svg>,
];

export default function ServicesList({ headline, services }: Props) {
  return (
    <section className="bg-light-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-3 text-center">
          {headline}
        </h2>
        <div className="w-16 h-1 bg-brand-red mx-auto mb-10 rounded-full" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-5 shadow-sm border border-border hover:border-navy/25 hover:shadow-lg transition-all duration-200 flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/5 group-hover:bg-navy group-hover:text-white text-navy flex items-center justify-center transition-all duration-200 shrink-0">
                {ICONS[i % ICONS.length]}
              </div>
              <p className="text-navy font-bold text-sm leading-snug">{service.label}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
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
