import { business } from '../config/business';

export function ContactMap() {
  return (
    <section className="section" id="contact-info">
      <div className="container twoCol">
        <div className="surfaceCard">
          <h2>Visit our workshop</h2>
          <p>{business.address}</p>
          <p>
            <strong>Phone:</strong> {business.phone}
          </p>
          <p>
            <strong>Email:</strong> {business.email}
          </p>
          <p className="mutedText">Emergency / same-day slots depend on workshop availability.</p>
        </div>
        <div className="surfaceCard">
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1556122071-e404eaedb77f?auto=format&fit=crop&w=1000&q=70"
            alt="Nottingham street map style background"
          />
          <a
            href="https://www.google.com/maps/search/?api=1&query=123+Derby+Rd+Nottingham"
            target="_blank"
            rel="noreferrer"
            className="textAction"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
