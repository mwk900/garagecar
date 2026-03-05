import type { Metadata } from 'next';
import Link from 'next/link';
import { IndependentAdvantageSection } from '@/components/landing/independent-advantage-section';
import { ServiceMenuSection } from '@/components/landing/service-menu-section';
import { PageHero } from '@/components/layout/page-hero';
import { serviceHighlights } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Services'
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Price-led MOT, servicing and repair work for Nottingham drivers"
        description="Drivers compare prices first, then judge trust. This page does both, with clear labour-first pricing and practical explanations."
      />

      <section className="section-shell pt-0">
        <div className="section-inner grid gap-4 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <article key={item.title} className="card-surface rounded-[28px] p-5">
              <h2 className="font-display text-2xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-3 text-base text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ServiceMenuSection />

      <section className="section-shell">
        <div className="section-inner rounded-[32px] border border-line bg-dark px-6 py-8 text-white md:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">How we quote</p>
              <h2 className="mt-3 font-display text-3xl font-semibold">Inspect first, explain clearly, approve before fitting parts.</h2>
              <p className="mt-4 max-w-2xl text-base text-white/75">
                Whether it is a Golf MOT advisory, a Focus full service or timing belt work on a higher-mileage family car, the workshop stays clear on labour, parts and urgency.
              </p>
            </div>
            <div>
              <Link
                href="/booking"
                className="touch-target inline-flex items-center rounded-2xl bg-white px-5 py-3 font-semibold text-ink"
              >
                Book a service
              </Link>
            </div>
          </div>
        </div>
      </section>

      <IndependentAdvantageSection />
    </>
  );
}
