import Image from 'next/image';
import type { HowItWorksStep } from '@/types';

interface Props {
  headline: string;
  imageSrc: string;
  imageAlt: string;
  steps: HowItWorksStep[];
}

export default function HowItWorks({ headline, imageSrc, imageAlt, steps }: Props) {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">

        <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-3 text-center">
          {headline}
        </h2>
        <div className="w-16 h-1 bg-brand-red mx-auto mb-10 rounded-full" />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* Steps — left */}
          <div className="flex flex-col justify-center space-y-5">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-5 group">
                <div className="shrink-0 w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-brand-red transition-colors duration-200">
                  {index + 1}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-semibold text-navy text-base md:text-lg mb-1">{step.title}</h3>
                  <p className="text-body-text text-sm md:text-base leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="tel:4802795511"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-7 py-3.5 rounded-xl shadow-[0_8px_25px_-4px_rgba(175,0,0,0.4)] hover:shadow-[0_12px_35px_-4px_rgba(175,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                480-279-5511
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Book Service
              </a>
            </div>
          </div>

          {/* Image — right, full height of steps */}
          <div className="relative min-h-72 lg:min-h-0 rounded-2xl overflow-hidden shadow-xl order-first lg:order-last">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
