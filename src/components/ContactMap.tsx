import { businessConfig } from '../config/business';

export function ContactMap() {
  return (
    <section className="container section" id="contact">
      <h2>Find and contact us</h2>
      <div className="grid2">
        <article className="card">
          <h3>Midlands AutoCare</h3>
          <p>{businessConfig.address}</p>
          <p>
            <strong>Phone:</strong> {businessConfig.phone}
          </p>
          <p>
            <strong>Email:</strong> {businessConfig.email}
          </p>
          <p>
            <strong>Hours:</strong>
          </p>
          <ul>
            <li>{businessConfig.hours.weekdays}</li>
            <li>{businessConfig.hours.saturday}</li>
            <li>{businessConfig.hours.sunday}</li>
          </ul>
          <p className="muted">Emergency / same-day slots available where workshop capacity allows.</p>
        </article>

        <article className="card">
          <img
            loading="lazy"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Nottingham_UK_location_map.svg/800px-Nottingham_UK_location_map.svg.png"
            alt="Map showing Nottingham service location"
          />
          <a
            className="textLink"
            href="https://www.google.com/maps/search/?api=1&query=123+Derby+Rd+Nottingham"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </article>
      </div>
    </section>
  );
}
