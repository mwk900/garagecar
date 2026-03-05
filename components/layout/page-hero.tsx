import type { PageStat } from '@/lib/types';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  stats?: PageStat[];
};

export function PageHero({ eyebrow, title, description, stats = [] }: PageHeroProps) {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <div className="card-surface overflow-hidden p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-accent/10 bg-accentSoft px-4 py-2 text-sm font-semibold text-accent">
                {eyebrow}
              </p>
              <h1 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-ink">
                {title}
              </h1>
              <p className="mt-4 max-w-2xl text-base text-muted">{description}</p>
            </div>

            {stats.length ? (
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-line bg-secondaryBg p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{stat.label}</p>
                    <p className="mt-2 font-display text-lg font-semibold text-ink">{stat.value}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
