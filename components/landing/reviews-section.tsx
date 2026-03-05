import { Star } from 'lucide-react';
import { reviews } from '@/lib/data';
import { SectionHeading } from '@/components/ui/section-heading';

export function ReviewsSection() {
  return (
    <section className="section-shell">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Local proof"
          title="Drivers remember the details when a garage does things properly"
          description="Believable, specific reviews build more trust than generic claims ever will."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {reviews.map((review, index) => (
            <article
              key={`${review.name}-${review.vehicle}`}
              style={{ animationDelay: `${index * 90}ms` }}
              className="card-surface fade-up rounded-[28px] p-5"
            >
              <div className="flex items-center gap-1" aria-label={`${review.rating} star rating`}>
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <span
                    key={starIndex}
                    style={{ animationDelay: `${index * 40 + starIndex * 80}ms` }}
                    className="star-sequence text-warning"
                  >
                    <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                  </span>
                ))}
              </div>
              <p className="mt-4 text-base text-ink">“{review.quote}”</p>
              <p className="mt-4 font-semibold text-ink">
                {review.name}, {review.area}
              </p>
              <p className="text-sm text-muted">{review.vehicle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
