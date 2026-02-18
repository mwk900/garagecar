import { business } from '../config/business';

const badges = ['⭐ 4.8 Rating', 'DVSA Approved', '12-Month Warranty', 'Same-Day Service'];

export function Hero() {
  return (
    <section className="heroSection section">
      <div className="container heroGrid">
        <div>
          <p className="eyebrow">Nottingham Local Garage</p>
          <h1>MOT & Car Service in Nottingham — Same Day Available</h1>
          <p className="heroSub">Trusted local garage with transparent pricing and fast turnaround.</p>
          <div className="ctaRow">
            <a className="btn btnPrimary btnLg" href={`tel:${business.phone.replace(/\s/g, '')}`}>
              Call Now
            </a>
            <a className="btn btnGhost btnLg" href="#booking">
              Book Appointment
            </a>
          </div>
          <div className="badgeWrap" aria-label="Trust badges">
            {badges.map((badge) => (
              <span key={badge} className="badgePill">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="heroCard">
          <h3>Need urgent help today?</h3>
          <p>Call now for same-day diagnostics, brake checks, and MOT bookings where slots are available.</p>
          <a className="btn btnPrimary" href={`tel:${business.phone.replace(/\s/g, '')}`}>
            Speak to a mechanic
          </a>
        </div>
      </div>
    </section>
  );
}
