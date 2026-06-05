import Image from 'next/image';

type StatItem = {
  kind: 'stat';
  stat: string;
  label: string;
  icon: React.ReactNode;
  accent: string;
};

type LogoItem = {
  kind: 'logo';
  src: string;
  alt: string;
};

type TrustItem = StatItem | LogoItem;

const items: TrustItem[] = [
  {
    kind: 'stat',
    stat: 'Since 1946',
    label: 'Family-Owned & Operated',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    accent: 'text-navy',
  },
  {
    kind: 'stat',
    stat: '4.7 Stars',
    label: '1200+ Google Reviews',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    accent: 'text-yellow-500',
  },
  {
    kind: 'logo',
    src: '/bbb-logo.webp',
    alt: 'BBB Accredited Business A+',
  },
  {
    kind: 'stat',
    stat: 'ROC Licensed',
    label: '#280439-296332',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM9 17H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V7h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2z" />
      </svg>
    ),
    accent: 'text-navy',
  },
  {
    kind: 'stat',
    stat: '100% Guarantee',
    label: 'Satisfaction or We Return',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
      </svg>
    ),
    accent: 'text-brand-red',
  },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-border">
      {/* Red accent line */}
      <div className="h-[3px] bg-gradient-to-r from-navy via-brand-red to-navy" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 divide-x divide-border">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-4 first:pl-0 last:pr-0 py-2"
            >
              {item.kind === 'logo' ? (
                <div className="relative h-12 w-28">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="112px"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-3 w-full">
                  <div className={`shrink-0 w-10 h-10 rounded-full bg-light-bg flex items-center justify-center ${item.accent}`}>
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-navy text-sm leading-tight truncate">{item.stat}</p>
                    <p className="text-gray-500 text-[11px] leading-tight mt-0.5 truncate">{item.label}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
