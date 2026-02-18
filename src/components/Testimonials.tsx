const testimonials = [
  'Honest pricing and quick turnaround. Booked in the same day. — John M., West Bridgford',
  'Clear explanation, no upsell. Car felt brand new after service. — Sarah K., Beeston',
  'Sorted my brakes fast and cheaper than the dealer. — Ahmed R., Arnold',
  'Great MOT experience — friendly and professional. — Emma T., Carlton'
];

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <h2>Customer feedback</h2>
        <div className="testimonialsGrid">
          {testimonials.map((quote) => (
            <blockquote key={quote} className="surfaceCard">
              {quote}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
