import { business } from '../config/business';

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="container footerGrid">
        <div>
          <h3>{business.name}</h3>
          <p>{business.address}</p>
          <p>{business.phone}</p>
          <p>{business.email}</p>
        </div>

        <div>
          <h3>Opening Hours</h3>
          <p>{business.hours.weekdays}</p>
          <p>{business.hours.saturday}</p>
          <p>{business.hours.sunday}</p>
        </div>

        <div>
          <h3>Service Area</h3>
          <p>{business.serviceAreas.join(' • ')}</p>
        </div>
      </div>
    </footer>
  );
}
