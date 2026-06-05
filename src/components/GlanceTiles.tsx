const tiles = [
  {
    label: 'Same Day Service',
    sub: 'Call today, we show up today',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
  },
  {
    label: 'Serving Phoenix Since 1946',
    sub: '75+ years of trusted service',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    label: '100% Satisfaction',
    sub: "Not happy? We make it right",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    label: 'Licensed & Insured',
    sub: 'AZ ROC #280439-296332',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM7 17v-2h10v2H7zm0-4v-2h10v2H7zm0-4V7h5v2H7z" />
      </svg>
    ),
  },
  {
    label: 'Financing Available',
    sub: 'Flexible payment options',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
      </svg>
    ),
  },
];

export default function GlanceTiles() {
  return (
    <section className="bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="bg-navy flex flex-col items-center text-center gap-3 px-5 py-7 hover:bg-white/5 transition-colors duration-200 group"
            >
              {/* Icon bubble */}
              <div className="w-14 h-14 rounded-2xl bg-brand-red/20 group-hover:bg-brand-red/30 flex items-center justify-center text-white transition-colors duration-200 shrink-0">
                {tile.icon}
              </div>

              {/* Text */}
              <div>
                <p className="font-bold text-white text-sm leading-snug">{tile.label}</p>
                <p className="text-white/50 text-xs mt-1 leading-snug">{tile.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
