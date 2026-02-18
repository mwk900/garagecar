import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'Honest pricing and quick turnaround. Booked in the same day.',
    author: 'John M., West Bridgford'
  },
  {
    quote: 'Clear explanation, no upsell. Car felt brand new after service.',
    author: 'Sarah K., Beeston'
  },
  {
    quote: 'Sorted my brakes fast and cheaper than the dealer.',
    author: 'Ahmed R., Arnold'
  },
  {
    quote: 'Great MOT experience — friendly and professional.',
    author: 'Emma T., Carlton'
  }
];

export function Testimonials() {
  return (
    <section className="container section" id="testimonials">
      <h2>What customers say</h2>
      <p className="sectionIntro">Demo testimonials for layout preview.</p>
      <div className="grid2">
        {testimonials.map((item) => (
          <article className="card" key={item.author}>
            <div className="row stars" aria-label="5 star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={16} fill="currentColor" />
              ))}
            </div>
            <p>“{item.quote}”</p>
            <p className="muted">— {item.author}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
