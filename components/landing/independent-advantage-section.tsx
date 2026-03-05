import { comparisonItems } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';

export function IndependentAdvantageSection() {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Trust builder"
          title="The independent garage advantage"
          description="Show the local value clearly, with practical comparisons people can understand at a glance."
        />

        <div className="mt-8 grid gap-4">
          {comparisonItems.map((item, index) => (
            <article key={item.title} className="card-surface overflow-hidden rounded-[30px] p-4 md:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{item.title}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div
                  style={{ animationDelay: `${index * 120}ms` }}
                  className="fade-up rounded-[24px] bg-accent px-5 py-5 text-white"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">Us</p>
                  <p className="mt-2 text-lg font-semibold">{item.usLabel}</p>
                </div>
                <div
                  style={{ animationDelay: `${index * 120 + 60}ms` }}
                  className="fade-up rounded-[24px] bg-secondaryBg px-5 py-5 text-ink"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Them</p>
                  <p className="mt-2 text-lg font-semibold text-ink">{item.themLabel}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
