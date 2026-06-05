import Image from 'next/image';
import type { HeroData } from '@/types';
import HeroForm from './HeroForm';

const STARS = Array(5).fill(0);

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
  );
}

interface Props {
  data: HeroData;
  formHeadline: string;
  isEmergency?: boolean;
}

export default function Hero({ data, formHeadline, isEmergency = false }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/team behind truck.webp"
          alt="Thomas Home Services team"
          fill
          className="object-cover object-center"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-center">

          {/* ── Left: headline + copy ── */}
          <div>
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-white leading-tight mb-5">
              {data.h1}
              {data.h1Emphasis && (
                <span className="emph-hero">{data.h1Emphasis}</span>
              )}
            </h1>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-7">
              {data.subtitle}
            </p>

            {/* Star rating pill */}
            <div className="inline-flex items-center gap-2.5 mb-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5">
              <div className="flex gap-0.5">
                {STARS.map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold text-sm">4.7 Stars</span>
              <span className="text-white/30">|</span>
              <span className="text-white/80 text-sm">1200+ Google Reviews</span>
              <GoogleIcon />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={data.primaryCTA.href}
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-base md:text-lg px-8 py-4 rounded-lg shadow-xl transition-all duration-200 hover:shadow-2xl active:scale-[0.98]"
              >
                {isEmergency && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                )}
                {data.primaryCTA.label}
              </a>
              <a
                href={data.secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 font-semibold text-base md:text-lg px-8 py-4 rounded-lg border-2 border-white/40 text-white hover:bg-white/10 hover:border-white transition-all duration-200 active:scale-[0.98]"
              >
                {data.secondaryCTA.label}
              </a>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="w-full">
            <HeroForm headline={formHeadline} />
          </div>

        </div>
      </div>
    </section>
  );
}
