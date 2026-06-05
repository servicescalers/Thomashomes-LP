import Image from 'next/image';

const stats = [
  { value: '94.3%', label: '5-star customer satisfaction' },
  { value: '50,000+', label: 'Covered repairs completed' },
  { value: '$95', label: 'Only deductible — ever' },
];

const plans = [
  {
    name: 'Silver',
    price: '$69',
    badge: null,
    featured: false,
    covers: ['Air Conditioner', 'Furnace / Heater', 'Water Heater', 'Plumbing', 'Electrical'],
    notCovered: ['Appliances', 'Water Softener', 'Reverse Osmosis'],
  },
  {
    name: 'Gold',
    price: '$99',
    badge: 'Most Popular',
    featured: true,
    covers: ['Air Conditioner', 'Furnace / Heater', 'Water Heater', 'Plumbing', 'Electrical', 'Appliances'],
    notCovered: ['Water Softener', 'Reverse Osmosis'],
  },
  {
    name: 'Platinum',
    price: '$119',
    badge: 'Best Coverage',
    featured: false,
    covers: ['Air Conditioner', 'Furnace / Heater', 'Water Heater', 'Plumbing', 'Electrical', 'Appliances', 'Water Softener', 'Reverse Osmosis'],
    notCovered: [],
  },
];

const differentiators = [
  {
    title: 'No Middle Man',
    body: 'Unlike traditional warranty companies, Thomas handles every service call in-house — faster service, no blame game.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
  },
  {
    title: 'Award-Winning Service',
    body: 'Our own trained technicians show up — never a stranger. Treated with dignity and respect, every single time.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  },
  {
    title: 'More Comprehensive',
    body: 'No haggling over coverage limits. Hundreds of common repairs covered — less out-of-pocket cost for you.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: 'Simple Contract',
    body: 'No ambiguous fine print. You always know exactly what is covered and what to expect when you call.',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2z" />
      </svg>
    ),
  },
];

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0 opacity-30" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </svg>
);

export default function HomeWarranty() {
  return (
    <section className="bg-light-bg py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-5">
            <Image
              src="/Thomas-Home-Warranty-Logo.png"
              alt="Thomas Home Warranty"
              width={200}
              height={60}
              className="h-14 w-auto object-contain"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3 leading-tight">
            Protect Your Whole Home for a Few Dollars a Day
          </h2>
          <p className="text-body-text text-base max-w-2xl mx-auto leading-relaxed">
            One flat monthly fee covers hundreds of repairs across your plumbing, HVAC, electrical, and appliances.
            You pay only a <strong>$95 deductible</strong> per service call — no trip charges, no labor fees, no surprises.
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {stats.map((s) => (
            <div key={s.value} className="text-center bg-white border border-border rounded-2xl py-5 px-3 shadow-sm">
              <p className="text-2xl sm:text-3xl font-bold text-navy leading-none">{s.value}</p>
              <p className="text-gray-500 text-xs mt-1.5 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Plan cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden flex flex-col ${
                plan.featured
                  ? 'bg-navy shadow-2xl scale-[1.03] z-10'
                  : 'bg-white border border-border shadow-sm'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="bg-brand-red text-white text-[11px] font-bold uppercase tracking-widest text-center py-1.5">
                  {plan.badge}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Plan name + price */}
                <div className="mb-5">
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${plan.featured ? 'text-white/50' : 'text-gray-400'}`}>
                    {plan.name} Plan
                  </p>
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-bold leading-none ${plan.featured ? 'text-white' : 'text-navy'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm mb-1 ${plan.featured ? 'text-white/60' : 'text-gray-400'}`}>/month</span>
                  </div>
                  <p className={`text-xs mt-1.5 ${plan.featured ? 'text-white/50' : 'text-gray-400'}`}>
                    + $95 deductible per service call
                  </p>
                </div>

                {/* Divider */}
                <div className={`h-px mb-5 ${plan.featured ? 'bg-white/10' : 'bg-border'}`} />

                {/* Coverage list */}
                <ul className="space-y-2.5 flex-1">
                  {plan.covers.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className={`${plan.featured ? 'text-green-400' : 'text-green-500'}`}><CheckIcon /></span>
                      <span className={`text-sm ${plan.featured ? 'text-white' : 'text-body-text'}`}>{item}</span>
                    </li>
                  ))}
                  {plan.notCovered.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className={plan.featured ? 'text-white/30' : 'text-gray-300'}><XIcon /></span>
                      <span className={`text-sm ${plan.featured ? 'text-white/30' : 'text-gray-300'}`}>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="tel:4802795511"
                  className={`mt-6 w-full inline-flex items-center justify-center font-bold py-3 rounded-xl text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.featured
                      ? 'bg-brand-red hover:bg-brand-red-dark text-white shadow-[0_8px_25px_-4px_rgba(175,0,0,0.5)] hover:shadow-[0_12px_35px_-4px_rgba(175,0,0,0.6)]'
                      : 'bg-navy hover:bg-navy-dark text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  Get Started — Call Us
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {differentiators.map((d) => (
            <div key={d.title} className="bg-white rounded-2xl p-5 border border-border shadow-sm flex gap-3">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center text-navy">
                {d.icon}
              </div>
              <div>
                <h3 className="font-semibold text-navy text-sm mb-1">{d.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{d.body}</p>
              </div>
            </div>
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
            Call 480-279-5511
          </a>
          <a
            href="#contact-form"
            className="inline-flex items-center justify-center bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Now
          </a>
        </div>

      </div>
    </section>
  );
}
