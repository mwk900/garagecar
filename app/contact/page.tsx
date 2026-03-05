import type { Metadata } from 'next';
import Link from 'next/link';
import { LocationHoursSection } from '@/components/landing/location-hours-section';
import { PageHero } from '@/components/layout/page-hero';
import { contactActions } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call, email or head straight to Meadow Lane"
        description="Everything important is upfront here: direct contact details, clear hours, map guidance and a quick route into the booking flow."
      />

      <section className="section-shell pt-0">
        <div className="section-inner grid gap-4 md:grid-cols-3">
          {contactActions.map((action) => (
            <a
              key={action.id}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'noreferrer' : undefined}
              className="card-surface rounded-[28px] p-5 transition hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{action.title}</p>
              <p className="mt-3 text-lg font-semibold text-ink">{action.body}</p>
            </a>
          ))}
        </div>
      </section>

      <LocationHoursSection />

      <section className="section-shell">
        <div className="section-inner rounded-[32px] border border-line bg-dark px-6 py-8 text-white md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">Quick booking prompt</p>
          <h2 className="mt-3 font-display text-3xl font-semibold">Want to skip the call and send a request instead?</h2>
          <p className="mt-4 max-w-2xl text-base text-white/75">
            Use the booking wizard to request an MOT, service or repair slot. This demo confirms nothing live, but it shows the intended customer journey.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/booking" className="touch-target inline-flex items-center rounded-2xl bg-white px-5 py-3 font-semibold text-ink">
              Open booking wizard
            </Link>
            <Link href="#contact-details" className="touch-target inline-flex items-center rounded-2xl border border-white/15 px-5 py-3 font-semibold text-white">
              Contact details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
