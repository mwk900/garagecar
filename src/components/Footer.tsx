import { businessConfig } from '../config/business';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <h3>{businessConfig.name}</h3>
          <p>{businessConfig.address}</p>
          <p>{businessConfig.hours.weekdays}</p>
          <p>{businessConfig.hours.saturday}</p>
          <p>{businessConfig.hours.sunday}</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>{businessConfig.phone}</p>
          <p>{businessConfig.email}</p>
          <p className="muted small">Languages: English (default) • Polish (optional)</p>
        </div>
        <div>
          <p className="small">Demo website content for preview purposes.</p>
        </div>
      </div>
    </footer>
  );
}
