import Link from 'next/link';
import { businessInfo, footerBadges } from '@/lib/data';
import type { NavLinkItem } from '@/lib/types';

type FooterProps = {
  navigationLinks: NavLinkItem[];
};

export function Footer({ navigationLinks }: FooterProps) {
  return (
    <footer className="bg-dark text-white">
      <div className="section-shell">
        <div className="section-inner">
          <div className="grid gap-10 rounded-[32px] border border-white/10 bg-white/5 p-6 md:grid-cols-[1.2fr,0.8fr,0.8fr] md:p-8">
            <div>
              <h2 className="font-display text-2xl font-semibold">{businessInfo.name}</h2>
              <p className="mt-3 max-w-md text-sm text-white/70">
                Straight answers, solid work, price-first MOT and servicing content for a fictional Nottingham independent garage.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {footerBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Contact</h3>
              <div className="mt-4 space-y-2 text-sm text-white/80">
                <p>{businessInfo.address}</p>
                <p>{businessInfo.phone}</p>
                <p>{businessInfo.email}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Navigate</h3>
              <nav className="mt-4 flex flex-wrap gap-3 text-sm text-white/80">
                {navigationLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="rounded-full px-1 py-1 transition hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>Demo site only. Midlands AutoCare is fictional and booking requests do not create a live appointment.</p>
            <p>
              Built for{' '}
              <a
                href="https://northsummit.agency"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white"
              >
                NorthSummit Agency
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
