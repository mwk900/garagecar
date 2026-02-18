const reasons = [
  'Family-run local garage',
  'Transparent pricing before work begins',
  'Photo and progress updates available',
  'Warranty on parts and labour',
  'Skilled technicians with modern diagnostics',
  'Quick turnaround for busy drivers',
  'Friendly, no-pressure advice'
];

const stats = ['15+ years experience', '500+ happy customers', 'Same-day slots'];

export function Trust() {
  return (
    <section className="container section" id="trust">
      <h2>Why local drivers choose Midlands AutoCare</h2>
      <ul className="checkList">
        {reasons.map((reason) => (
          <li key={reason}>{reason}</li>
        ))}
      </ul>
      <div className="statRow">
        {stats.map((stat) => (
          <div className="card statCard" key={stat}>
            <strong>{stat}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
