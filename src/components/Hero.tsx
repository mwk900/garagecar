interface HeroProps {
  phone: string;
}

const trustBadges = [
  '⭐ 4.8 Google rating (500+ reviews)',
  'DVSA MOT Approved',
  '12-month warranty',
  'Same-day service'
];

export function Hero({ phone }: HeroProps) {
  return (
    <section className="hero container section" id="top">
      <div>
        <p className="eyebrow">Nottingham local garage</p>
        <h1>Trusted Local Garage in Nottingham</h1>
        <p className="lead">MOT • Servicing • Repairs — Same-day appointments available</p>
        <div className="row">
          <a className="btn btnPrimary btnLarge" href={`tel:${phone.replace(/\s/g, '')}`}>
            Call Now
          </a>
          <a className="btn btnSecondary btnLarge" href="#booking">
            Book Appointment
          </a>
        </div>
        <div className="badgeRow" aria-label="Trust badges">
          {trustBadges.map((badge) => (
            <span className="badge" key={badge}>
              {badge}
            </span>
          ))}
        </div>
      </div>
      <img
        loading="eager"
        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=70"
        alt="Mechanic inspecting a customer car in a Nottingham garage"
      />
    </section>
  );
}
