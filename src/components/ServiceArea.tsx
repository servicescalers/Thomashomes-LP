const cities = [
  'Chandler', 'Gilbert', 'Mesa', 'Tempe', 'Queen Creek',
  'San Tan Valley', 'Scottsdale', 'Apache Junction',
];

export default function ServiceArea() {
  return (
    <section className="bg-light-bg py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-navy mb-4 text-center">
          Serving Chandler and the Greater Phoenix Area
        </h2>
        <div className="w-16 h-1 bg-brand-red mx-auto mb-10 rounded-full" />

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.9995306026462!2d-111.84276580000001!3d33.355236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872bad311a36aec1%3A0x5f38b50428aa5112!2sThomas%20Home%20Services!5e1!3m2!1sen!2suk!4v1780679760163!5m2!1sen!2suk"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thomas Home Services location map"
            />
          </div>

          {/* Cities + info */}
          <div>
            <p className="text-body-text text-base md:text-lg leading-relaxed mb-6">
              Thomas Home Services proudly serves the entire Greater Phoenix area, including all East Valley communities and surrounding cities.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-8">
              {cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 bg-white border border-border rounded-lg px-3 py-2.5 shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 text-brand-red shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="font-medium text-body-text text-sm">{city}</span>
                </div>
              ))}
            </div>

            <div className="bg-navy rounded-xl p-5 text-white">
              <p className="text-white/85 text-sm leading-relaxed mb-3">
                Not sure if we cover your area? Call us and we will let you know immediately.
              </p>
              <a
                href="tel:4802795511"
                className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:shadow-md active:scale-95"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call 480-279-5511
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
