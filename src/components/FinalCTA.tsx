import Image from 'next/image';
import type { FinalCTAData } from '@/types';

export default function FinalCTA({ data }: { data: FinalCTAData }) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background image */}
      <Image
        src="/team-front of truck.webp"
        alt="Thomas Home Services team"
        fill
        className="object-cover object-center"
        quality={75}
        sizes="100vw"
      />
      {/* Overlay: navy at bottom-edge fades to brand-red tinted dark */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
          {data.headline}
        </h2>
        <p className="text-white/85 text-lg mb-10">{data.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:4802795511"
            className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-lg px-10 py-4 rounded-xl shadow-xl transition-all duration-200 hover:shadow-2xl active:scale-[0.98]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Call 480-279-5511
          </a>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-bold text-lg px-10 py-4 rounded-xl transition-all duration-200 active:scale-[0.98]"
          >
            Book Online
          </a>
        </div>
      </div>
    </section>
  );
}
