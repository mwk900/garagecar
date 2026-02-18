import { businessConfig } from '../config/business';

export function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <a href="#top" className="logo">
          {businessConfig.name}
        </a>

        <nav aria-label="Main navigation" className="nav">
          <a className="navLink" href="#services">
            Services
          </a>
          <a className="navLink" href="#trust">
            Why us
          </a>
          <a className="navLink" href="#areas">
            Service Area
          </a>
          <a className="navLink" href="#booking">
            Book
          </a>
        </nav>

        <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className="phoneHeader">
          {businessConfig.phone}
        </a>
      </div>
    </header>
  );
}
