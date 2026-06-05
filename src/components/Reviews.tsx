import Image from 'next/image';

const STARS = Array(5).fill(0);

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
  );
}

const reviews = [
  {
    name: 'Thomas Goodfellow',
    location: 'Buckeye, AZ',
    date: '1 day ago',
    initials: 'TG',
    color: 'bg-blue-600',
    body: 'Thomas Plumbing had me scheduled for a two hour window appointment the very next day. Delphi was extremely professional and knowledgeable — she did all the diagnostics and explained everything clearly. Thomas is lucky to have a technician that truly knows her stuff and took the extra mile to come up with the correct diagnosis.',
  },
  {
    name: 'Diana West',
    location: 'Phoenix, AZ',
    date: '1 day ago',
    initials: 'DW',
    color: 'bg-emerald-600',
    body: 'Family owned! Honest and thorough! Would highly recommend.',
  },
  {
    name: 'Sue Welter',
    location: 'Chandler, AZ',
    date: '1 day ago',
    initials: 'SW',
    color: 'bg-purple-600',
    body: 'Excellent communication from the company. Tech was very professional and friendly.',
  },
  {
    name: 'Mari Mack',
    location: 'Phoenix, AZ',
    date: 'Today',
    initials: 'MM',
    color: 'bg-rose-600',
    body: 'Love this company! Rylee was awesome. He took the time to diagnose and explain the issues and executed each solution. We appreciate him being super attentive and getting each task completed with no issues. Highly recommend. Ty guys!',
  },
];

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {STARS.map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-light-bg py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl sm:text-3xl font-semibold text-navy text-center mb-3">
          What Greater Phoenix Homeowners Are Saying
        </h2>
        <div className="w-16 h-1 bg-brand-red mx-auto mb-3 rounded-full" />
        <div className="flex items-center justify-center gap-2 mb-10">
          <GoogleIcon />
          <p className="text-gray-500 text-sm">1,200+ reviews on Google</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className={`${r.color} shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-navy text-sm leading-tight truncate">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.date}</p>
                  <div className="mt-1"><StarRow /></div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{r.body}&rdquo;</p>
              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                <p className="text-xs text-gray-400">{r.location}</p>
                <GoogleIcon />
              </div>
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
