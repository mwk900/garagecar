import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useSiteContext';
import { businessConfig } from '../config/business';

export function Footer() {
  const t = useTranslation();

  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <h3>{t.business.name}</h3>
          <p>{t.business.address}</p>
          <p>{businessConfig.hours.weekdays}</p>
          <p>{businessConfig.hours.saturday}</p>
          <p>{businessConfig.hours.sunday}</p>
        </div>
        <div>
          <h3>{t.common.contactUs}</h3>
          <p>{t.business.phone}</p>
          <p>{t.business.email}</p>
        </div>
        <div>
          <p>{t.common.example}</p>
          <Link to="/contact">Cookie / GDPR</Link>
        </div>
      </div>
    </footer>
  );
}
