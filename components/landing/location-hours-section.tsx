import { businessInfo } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';

export function LocationHoursSection() {
  return (
    <section id="contact-details" className="section-shell scroll-mt-28 bg-secondaryBg">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Find us"
          title="Location and hours"
          description="Easy to find from the A52, with clear hours, direct contact details and a simple map reference."
        />

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="card-surface rounded-[32px] p-6">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Address</p>
                <p className="mt-2 text-lg font-semibold text-ink">{businessInfo.address}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Phone</p>
                <p className="mt-2 text-lg font-semibold text-ink">{businessInfo.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Email</p>
                <a href={`mailto:${businessInfo.email}`} className="mt-2 block text-lg font-semibold text-ink">
                  {businessInfo.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Opening hours</p>
                <div className="mt-3 space-y-2 text-base text-muted">
                  {businessInfo.hours.map((entry) => (
                    <p key={entry.label}>
                      <span className="font-semibold text-ink">{entry.label}:</span> {entry.value}
                    </p>
                  ))}
                </div>
              </div>
              <a
                href={businessInfo.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="touch-target inline-flex items-center rounded-2xl bg-accent px-5 py-3 font-semibold text-white shadow-lift"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          <div className="card-surface relative overflow-hidden rounded-[32px] p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.14),transparent_36%),radial-gradient(circle_at_85%_25%,rgba(22,163,74,0.14),transparent_28%),linear-gradient(135deg,#ffffff_0%,#eff6ff_55%,#f8fafc_100%)]" />
            <div className="relative min-h-[22rem] overflow-hidden rounded-[28px] border border-line bg-white">
              <div className="absolute inset-x-8 top-12 h-3 rotate-[14deg] rounded-full bg-accent/25" />
              <div className="absolute inset-x-10 top-28 h-3 -rotate-[12deg] rounded-full bg-ink/10" />
              <div className="absolute left-12 top-40 h-3 w-[60%] rotate-[8deg] rounded-full bg-accent/18" />
              <div className="absolute right-16 top-52 h-3 w-[48%] -rotate-[18deg] rounded-full bg-ink/10" />
              <div className="absolute left-[54%] top-[45%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-lift">
                MAC
              </div>
              <div className="absolute left-[54%] top-[45%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30" />
              <div className="absolute bottom-5 left-5 rounded-2xl border border-line bg-white/90 px-4 py-3 text-sm text-muted shadow-panel">
                <p className="font-semibold text-ink">Unit 4, Meadow Lane Industrial Estate</p>
                <p>Nottingham NG2 3HJ</p>
                <p className="mt-1">A52, 5 minutes</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-5 text-base text-muted">{businessInfo.locationNote}</p>
      </div>
    </section>
  );
}
