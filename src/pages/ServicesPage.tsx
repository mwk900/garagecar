import { useState } from 'react';
import { Page } from '../components/Page';
import { useTranslation } from '../hooks/useSiteContext';

const serviceRows = [
  ['MOT (Class 4)', '£54.85'],
  ['Interim service', 'from £129'],
  ['Full service', 'from £219'],
  ['Brakes (pads/discs)', 'from £99'],
  ['Tyres & fitting', 'from £65'],
  ['Diagnostics', 'from £75'],
  ['Clutch repair', 'from £495'],
  ['Battery / alternator', 'from £120'],
  ['Air con recharge', 'from £79']
];

export function ServicesPage() {
  const t = useTranslation();
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    [t.services.faqWarrantyQ as string, t.services.faqWarrantyA as string],
    [t.services.faqTimeQ as string, t.services.faqTimeA as string],
    [t.services.faqPriceQ as string, t.services.faqPriceA as string]
  ];

  return (
    <Page metaKey="services">
      <section className="container section">
        <h1>{t.services.title as string}</h1>
        <p>{t.services.subtitle as string}</p>
        <div className="card">
          {serviceRows.map(([name, price]) => (
            <div key={name} className="between row lineItem">
              <span>{name}</span>
              <strong>{price}</strong>
            </div>
          ))}
        </div>
      </section>
      <section className="container section">
        <h2>{t.services.faqTitle as string}</h2>
        {faqs.map(([q, a], i) => (
          <article className="card" key={q}>
            <button className="accordionBtn" onClick={() => setOpen(open === i ? null : i)}>{q}</button>
            {open === i && <p>{a}</p>}
          </article>
        ))}
      </section>
    </Page>
  );
}
