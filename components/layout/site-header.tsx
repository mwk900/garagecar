'use client';

import { Menu, Wrench, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { businessInfo } from '@/lib/data';
import type { NavLinkItem } from '@/lib/types';
import { ContactReveal } from '@/components/ui/contact-reveal';

type SiteHeaderProps = {
  navigationLinks: NavLinkItem[];
};

export function SiteHeader({ navigationLinks }: SiteHeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-content items-center gap-3 px-5 py-3 lg:px-8">
        <Link href="/" className="flex min-h-12 items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white shadow-lift">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="hidden min-[360px]:block">
            <span className="block font-display text-lg font-semibold leading-none text-ink">
              {businessInfo.name}
            </span>
            <span className="block text-sm text-muted">Nottingham MOT, service and repairs</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="ml-4 hidden items-center gap-1 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className={`touch-target inline-flex items-center rounded-full px-4 py-3 text-sm font-medium transition ${
                pathname === link.href
                  ? 'bg-accentSoft text-accent'
                  : 'text-muted hover:bg-secondaryBg hover:text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ContactReveal
            variant="popover"
            triggerLabel="Contact"
            className="touch-target hidden items-center gap-2 rounded-full border border-line px-4 py-3 text-sm font-semibold text-ink transition hover:border-accent/30 hover:bg-accentSoft md:inline-flex"
          />
          <Link
            href="/booking"
            className="touch-target hidden items-center rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-lift transition hover:scale-[1.02] hover:bg-accentHover md:inline-flex"
          >
            Book now
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-nav"
            aria-expanded={menuOpen}
            className="touch-target inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-line bg-white md:hidden">
          <nav id="mobile-nav" aria-label="Mobile navigation" className="mx-auto grid max-w-content gap-2 px-5 py-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={`touch-target inline-flex items-center rounded-2xl border px-4 py-3 font-medium ${
                  pathname === link.href
                    ? 'border-accent bg-accentSoft text-accent'
                    : 'border-line text-ink'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
