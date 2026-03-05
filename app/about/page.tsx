import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/layout/page-hero';
import { aboutPrinciples, aboutStats, workshopPhotos } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built to feel like the garage that tells you what actually needs doing"
        description="Midlands AutoCare is fictional, but the behaviour is grounded in what drivers value: honesty, proof, clear pricing and a workshop that looks after the details."
        stats={aboutStats}
      />

      <section className="section-shell pt-0">
        <div className="section-inner grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="card-surface overflow-hidden rounded-[32px] p-3">
            <Image
              src={workshopPhotos[3].src}
              alt={workshopPhotos[3].alt}
              width={workshopPhotos[3].width}
              height={workshopPhotos[3].height}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-full min-h-[26rem] w-full rounded-[28px] object-cover"
            />
          </div>
          <div className="grid gap-4">
            {aboutPrinciples.map((principle) => (
              <article key={principle.title} className="card-surface rounded-[28px] p-5">
                <h2 className="font-display text-2xl font-semibold text-ink">{principle.title}</h2>
                <p className="mt-3 text-base text-muted">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-inner rounded-[32px] border border-line bg-accentSoft px-6 py-8 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Workshop standards</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink">Clean presentation matters because it signals the work behind the scenes.</h2>
          <p className="mt-4 max-w-3xl text-base text-muted">
            This redesign positions Midlands AutoCare as the local garage that competes with chain professionalism while feeling more credible, more human and less scripted.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/booking" className="touch-target inline-flex items-center rounded-2xl bg-accent px-5 py-3 font-semibold text-white shadow-lift">
              Book now
            </Link>
            <Link href="/contact" className="touch-target inline-flex items-center rounded-2xl border border-line bg-white px-5 py-3 font-semibold text-ink">
              Contact the workshop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
