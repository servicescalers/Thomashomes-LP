'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PHONE = '480-279-5511';
const PHONE_HREF = 'tel:4802795511';

const navLinks = [
  { label: 'Drain Cleaning', href: '/drain-cleaning' },
  { label: 'Sewer Services', href: '/sewer-services' },
  { label: 'Emergency Plumber', href: '/emergency-plumber' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">

      {/* ── Top utility bar ── */}
      <div className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-9">

            {/* Trust signals */}
            <div className="flex items-center gap-4 divide-x divide-white/15">
              <span className="flex items-center gap-1.5 text-white/75 text-[11px] font-medium tracking-wide">
                <svg className="w-3 h-3 text-brand-red shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
                Licensed &amp; Insured Since 1946
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-white/60 text-[11px] pl-4">
                AZ ROC&nbsp;#280439-296332
              </span>
              <span className="hidden md:flex items-center gap-1.5 text-white/60 text-[11px] pl-4">
                BBB Accredited &nbsp;·&nbsp; 1200+ Google Reviews
              </span>
            </div>

            {/* Phone */}
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 text-white text-[11px] sm:text-xs font-semibold hover:text-white/80 transition-colors duration-150"
            >
              <svg className="w-3 h-3 text-brand-red" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {PHONE}
            </a>

          </div>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[72px] gap-6">

            {/* Logo */}
            <Link href="/drain-cleaning" className="shrink-0 flex items-center">
              <Image
                src="/logo-thomas.png"
                alt="Thomas Home Services"
                width={180}
                height={54}
                className="h-10 md:h-11 w-auto object-contain"
                priority
              />
            </Link>

            {/* Nav links — desktop */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 xl:px-5 py-1 text-sm font-semibold whitespace-nowrap transition-colors duration-150 ${
                      active ? 'text-navy' : 'text-gray-500 hover:text-navy'
                    }`}
                  >
                    {link.label}
                    {/* Active pill underline */}
                    <span
                      className={`absolute left-4 xl:left-5 right-4 xl:right-5 -bottom-[1px] h-[3px] rounded-t-full transition-all duration-200 ${
                        active ? 'bg-brand-red opacity-100' : 'bg-brand-red opacity-0 group-hover:opacity-0'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right group: tagline + CTAs */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="hidden xl:block text-xs text-navy font-semibold leading-tight text-right">
                Same Day<br />Service Available
              </span>

              {/* Divider */}
              <div className="hidden xl:block w-px h-8 bg-navy" />

              <a
                href="#contact-form"
                className="hidden md:inline-flex items-center font-bold text-sm px-4 py-2.5 rounded-xl border-2 border-navy text-navy hover:bg-navy hover:text-white shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                Book Now
              </a>

              <a
                href={PHONE_HREF}
                className="group flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-sm px-4 py-2.5 md:px-5 md:py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <span className="flex items-center justify-center w-6 h-6 bg-white/15 rounded-full shrink-0">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <span className="hidden sm:block">{PHONE}</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>

          </div>
        </div>

        {/* Active-link bottom border — sits flush under the nav */}
        <div className="relative h-[3px] bg-gray-100">
          {navLinks.map((link) =>
            pathname === link.href ? (
              <div
                key={link.href}
                className="absolute inset-0 bg-gradient-to-r from-navy via-brand-red to-navy opacity-20"
              />
            ) : null
          )}
        </div>
      </div>

    </header>
  );
}
