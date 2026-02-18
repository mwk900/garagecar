import { Link, NavLink } from 'react-router-dom';
import { business } from '../config/business';

export function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerRow">
        <Link to="/" className="logoMark">
          {business.name}
        </Link>

        <nav aria-label="Main navigation" className="mainNav">
          <NavLink to="/" className="navItem">
            Home
          </NavLink>
          <NavLink to="/services" className="navItem">
            Services
          </NavLink>
          <NavLink to="/about" className="navItem">
            About
          </NavLink>
          <NavLink to="/blog" className="navItem">
            Blog
          </NavLink>
          <NavLink to="/contact" className="navItem">
            Contact
          </NavLink>
        </nav>

        <a className="btn btnPrimary headerCall" href={`tel:${business.phone.replace(/\s/g, '')}`}>
          Call {business.phone}
        </a>
      </div>
    </header>
  );
}
