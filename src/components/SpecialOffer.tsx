import type { SpecialOfferData } from '@/types';

export default function SpecialOffer({ offer }: { offer: SpecialOfferData }) {
  return (
    <section className="bg-navy py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-2 border-dashed border-white/30 rounded-2xl p-8 md:p-10 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-block bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Limited Time Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-red mb-3">
              {offer.price}
            </h2>
            <p className="text-white/80 text-lg mb-4 max-w-lg mx-auto">
              {offer.subtitle}
            </p>
            <p className="text-white font-semibold text-base mb-6">{offer.cta}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:4802795511"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call 480-279-5511
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-navy font-bold px-8 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
