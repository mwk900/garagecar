import { Suspense } from 'react';
import { bookingBenefits, businessInfo } from '@/lib/data';
import { BookingWizard } from '@/components/booking/booking-wizard';
import { SectionHeading } from '@/components/ui/section-heading';

type BookingSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function BookingSection({
  eyebrow = 'Primary conversion',
  title = 'Book online in 60 seconds',
  description = 'Pick the job, add your details, and send a clear request without phone-tag or long forms.'
}: BookingSectionProps) {
  return (
    <section className="section-shell scroll-mt-28" id="booking">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
          <div>
            <SectionHeading eyebrow={eyebrow} title={title} description={description} />
            <div className="mt-6 grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {bookingBenefits.map((benefit) => (
                <div key={benefit} className="rounded-[24px] border border-line bg-white p-4">
                  <p className="text-sm text-muted">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-[28px] border border-line bg-secondaryBg p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Need a fast answer?</p>
              <p className="mt-3 text-base text-muted">
                Call {businessInfo.phone} or email {businessInfo.email} during workshop hours.
              </p>
            </div>
          </div>
          <Suspense fallback={<BookingWizardFallback />}>
            <BookingWizard />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function BookingWizardFallback() {
  return (
    <div className="card-surface rounded-[32px] p-5 md:p-6">
      <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Step 1 of 3</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">Book online in 60 seconds</h3>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondaryBg md:max-w-[16rem]">
          <div className="h-full w-1/3 rounded-full bg-accent" />
        </div>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="min-h-28 animate-pulse rounded-[24px] border border-line bg-secondaryBg" />
        ))}
      </div>
    </div>
  );
}
