import Image from 'next/image';

const stats = [
  { value: '1946', label: 'Family-owned since' },
  { value: '1,200+', label: '5-star Google reviews' },
  { value: '100%', label: 'Satisfaction guaranteed' },
];

const reasons = [
  {
    title: 'Serving the Valley Since 1946',
    body: 'A family-owned business with over 75 years caring for Greater Phoenix homeowners, seasoned expertise with a personal touch.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    title: 'Same Day Service',
    body: 'Plumbing problems do not wait. Fully stocked trucks ready to roll.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
  },
  {
    title: 'Honest, Upfront Pricing',
    body: 'All options and the price before we start. No surprise charges.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
      </svg>
    ),
  },
  {
    title: '100% Satisfaction',
    body: 'Not happy? We come back and make it right, no questions asked.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: 'Licensed & Insured',
    body: 'AZ ROC #280439-296332. Background-checked, trained technicians.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM7 17v-2h10v2H7zm0-4v-2h10v2H7zm0-4V7h5v2H7z" />
      </svg>
    ),
  },
  {
    title: 'Thomas Loyalty Club',
    body: 'Priority scheduling, reduced fees, repair discounts year-round.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
  {
    title: 'Financing Available',
    body: 'Need a bigger repair? Ask about flexible financing when you call. We work with your budget.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
  },
];

export default function WhyThomas() {
  return (
    <section className="bg-navy py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-3">
          Why Greater Phoenix Homeowners Choose Thomas Home Services
        </h2>
        <div className="w-16 h-1 bg-brand-red mx-auto mb-12 rounded-full" />

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {stats.map((s) => (
            <div key={s.value} className="text-center bg-white/5 border border-white/10 rounded-2xl py-6 px-4">
              <p className="text-3xl sm:text-4xl font-bold text-white leading-none">{s.value}</p>
              <p className="text-white/50 text-xs sm:text-sm mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Story: owner photo + narrative */}
        <div className="grid lg:grid-cols-[360px_1fr] gap-8 lg:gap-10 items-center mb-12">

          {/* Owner photo + quote */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[380px]">
            <Image
              src="/Owner-front-of-thomas-truck.webp"
              alt="Will Thomas, owner of Thomas Home Services"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 360px"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent px-6 pt-16 pb-6">
              <p className="text-white text-base italic leading-relaxed">
                &ldquo;We treat every home like it&rsquo;s our own. Honest work, fair prices, and we don&rsquo;t leave until it&rsquo;s right.&rdquo;
              </p>
              <p className="text-white/60 text-xs mt-3 font-semibold tracking-wide uppercase">Will Thomas, Owner</p>
            </div>
          </div>

          {/* Story paragraphs */}
          <div className="space-y-4">
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              For more than 75 years, Thomas Home Services has been the name Greater Phoenix homeowners
              trust with their plumbing. What began as a family business in 1946 has grown into a
              full-service team, but our promise has never changed: do honest work, charge a fair price,
              and treat every home like it&rsquo;s our own.
            </p>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              From a slow drain to a full sewer replacement, our licensed technicians show up on time,
              walk you through your options before any work starts, and don&rsquo;t leave until the job is
              done right. That&rsquo;s how three generations of Valley families have kept us on speed dial.
            </p>
          </div>
        </div>

        {/* Bullet points with icons */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {reasons.map((r) => (
            <li key={r.title} className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-red/20 flex items-center justify-center text-white">
                {r.icon}
              </div>
              <div>
                <h3 className="font-semibold text-white text-base leading-snug mb-0.5">{r.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{r.body}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-12">
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
            className="inline-flex items-center justify-center border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-bold px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Service
          </a>
        </div>
      </div>
    </section>
  );
}
