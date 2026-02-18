const reasons = [
  'Family-run local garage with honest advice',
  'Transparent pricing approved before work starts',
  'Skilled technicians and quality parts',
  'Fast turnaround for busy drivers'
];

export function Trust() {
  return (
    <section className="section sectionAlt" id="why-us">
      <div className="container">
        <h2>Why choose Midlands AutoCare</h2>
        <div className="trustGrid">
          {reasons.map((reason) => (
            <article key={reason} className="surfaceCard">
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
