import { Link } from 'react-router-dom';
import { Page } from '../components/Page';
import { useTranslation } from '../hooks/useSiteContext';

const services = [
  'MOT Class 4',
  'Interim Service',
  'Full Service',
  'Brakes & Pads',
  'Tyres & Balancing',
  'Engine Diagnostics'
];

export function HomePage() {
  const t = useTranslation();

  return (
    <Page metaKey="home">
      <section className="hero container">
        <div>
          <h1>{t.home.heroTitle as string}</h1>
          <p>{t.home.heroBody as string}</p>
          <div className="row">
            <a className="btn btnPrimary" href={`tel:${t.business.phone.replace(/\s/g, '')}`}>
              {t.common.callNow}
            </a>
            <Link className="btn btnSecondary" to="/contact">
              {t.common.bookNow}
            </Link>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80" alt="Mechanic working in a clean garage workshop" />
      </section>

      <section className="container section">
        <h2>{t.home.trustTitle as string}</h2>
        <div className="pillRow">
          {(t.home.trustItems as string[]).map((item) => (
            <span key={item} className="pill">{item}</span>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>{t.home.servicesTitle as string}</h2>
        <div className="grid3">
          {services.map((item) => (
            <article key={item} className="card"><h3>{item}</h3></article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>{t.home.whyTitle as string}</h2>
        <ul>{(t.home.whyItems as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="container section">
        <h2>{t.home.testimonialsTitle as string}</h2>
        <div className="grid3">
          {['Quick MOT booking and honest repair advice.', 'Great communication and fair pricing throughout.', 'Reliable local garage, very professional service.'].map((quote) => (
            <blockquote key={quote} className="card">“{quote}”<p>{t.common.example}</p></blockquote>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>{t.home.processTitle as string}</h2>
        <div className="grid4">
          {(t.home.processItems as string[]).map((item) => <div className="card" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="container section">
        <h2>{t.home.locationTitle as string}</h2>
        <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1200&q=80" alt="Nottingham city road near local service area" />
      </section>

      <section className="ctaBand">
        <div className="container row between">
          <p>{t.home.finalCta as string}</p>
          <Link to="/contact" className="btn btnPrimary">{t.common.contactUs}</Link>
        </div>
      </section>
    </Page>
  );
}
