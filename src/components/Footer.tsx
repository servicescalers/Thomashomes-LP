import Image from 'next/image';
import Link from 'next/link';

const links = [
  { label: 'Drain Cleaning', href: '/drain-cleaning' },
  { label: 'Sewer Services', href: '/sewer-services' },
  { label: 'Emergency Plumber', href: '/emergency-plumber' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/logo-thomas.png"
              alt="Thomas Home Services"
              width={160}
              height={48}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              Heroes for Hire since 1946. Family-owned and serving the Greater Phoenix area for over 75 years.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-navy text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-navy font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:4802795511"
                className="flex items-center gap-2 text-gray-600 hover:text-navy text-sm transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                480-279-5511
              </a>
              <p className="flex items-start gap-2 text-gray-500 text-sm">
                <svg className="w-4 h-4 shrink-0 text-brand-red mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Chandler, AZ &amp; Greater Phoenix Area
              </p>
              <p className="flex items-center gap-2 text-gray-500 text-sm">
                <svg className="w-4 h-4 shrink-0 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                AZ ROC #280439-296332
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Thomas Home Services. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Licensed · Bonded · Insured Since 1946
          </p>
        </div>
      </div>
    </footer>
  );
}
