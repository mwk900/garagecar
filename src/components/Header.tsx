import { Link, NavLink } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useSiteContext, useTranslation } from '../hooks/useSiteContext';

export function Header() {
  const t = useTranslation();
  const { language, setLanguage, theme, toggleTheme } = useSiteContext();

  return (
    <header className="header">
      <div className="container headerInner">
        <Link to="/" className="logo">{t.business.name}</Link>
        <nav aria-label="Main navigation" className="nav">
          {Object.entries(t.nav).map(([key, label]) => (
            <NavLink key={key} to={key === 'home' ? '/' : `/${key}`} className="navLink">
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="headerActions">
          <a href={`tel:${t.business.phone.replace(/\s/g, '')}`} className="btn btnPrimary">
            {t.common.callNow}
          </a>
          <button aria-label={t.common.theme} onClick={toggleTheme} className="iconBtn">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <div className="flags" aria-label={t.common.language}>
            <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>
              🇬🇧
            </button>
            <button className={language === 'pl' ? 'active' : ''} onClick={() => setLanguage('pl')}>
              🇵🇱
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
