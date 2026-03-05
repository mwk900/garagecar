import Link from 'next/link';
import { serviceMenuGroups } from '@/lib/data';
import { DemoNote } from '@/components/ui/demo-note';
import { SectionHeading } from '@/components/ui/section-heading';

type ServiceMenuSectionProps = {
  bookingHref?: string;
};

export function ServiceMenuSection({ bookingHref = '/booking' }: ServiceMenuSectionProps) {
  return (
    <section className="section-shell bg-secondaryBg">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Price list"
          title="Full service menu with clear price anchoring"
          description="Lead with the costs, explain the value after, and keep the layout easy to scan on a phone."
        />

        <div className="mt-8 space-y-8">
          {serviceMenuGroups.map((group) => (
            <div key={group.title} className="card-surface overflow-hidden">
              <div className="border-b border-line px-5 py-5 md:px-6">
                <h3 className="font-display text-2xl font-semibold text-ink">{group.title}</h3>
              </div>

              <div className="hidden md:block">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-line bg-secondaryBg text-left text-sm text-muted">
                      <th className="px-6 py-4 font-semibold">Service</th>
                      <th className="px-6 py-4 font-semibold">What is Included</th>
                      <th className="px-6 py-4 font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.items.map((item) => (
                      <tr key={item.id} className="border-b border-line/70 last:border-b-0">
                        <td className="px-6 py-5 align-top font-semibold text-ink">{item.title}</td>
                        <td className="px-6 py-5 align-top text-muted">{item.summary}</td>
                        <td className="px-6 py-5 align-top">
                          <p className="font-display text-xl font-semibold text-[var(--price)]">{item.price}</p>
                          <Link
                            href={`/booking?services=${item.bookingIds.join(',')}`}
                            className="mt-3 inline-flex text-sm font-semibold text-accent"
                          >
                            Book
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-4 p-4 md:hidden">
                {group.items.map((item) => (
                  <article key={item.id} className="rounded-[24px] border border-line bg-white p-4">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-semibold text-ink">{item.title}</h4>
                      <p className="font-display text-lg font-semibold text-[var(--price)]">{item.price}</p>
                    </div>
                    <p className="mt-3 text-sm text-muted">{item.summary}</p>
                    <Link
                      href={`/booking?services=${item.bookingIds.join(',')}`}
                      className="mt-4 inline-flex text-sm font-semibold text-accent"
                    >
                      Book
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <DemoNote>All prices include labour. Parts quoted individually based on your vehicle. No surprises.</DemoNote>
          <Link
            href={bookingHref}
            className="touch-target inline-flex items-center rounded-2xl bg-accent px-5 py-3 font-semibold text-white shadow-lift transition hover:scale-[1.02] hover:bg-accentHover"
          >
            Book your service
          </Link>
        </div>
      </div>
    </section>
  );
}
