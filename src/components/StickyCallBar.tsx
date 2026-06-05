'use client';

export default function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="#contact-form"
        className="flex items-center justify-center gap-3 bg-brand-red text-white font-bold text-base py-4 shadow-2xl active:bg-brand-red-dark"
      >
        Book now
      </a>
    </div>
  );
}
