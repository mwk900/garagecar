import { Page } from '../components/Page';
import { useTranslation } from '../hooks/useSiteContext';

export function AboutPage() {
  const t = useTranslation();

  return (
    <Page metaKey="about">
      <section className="container section">
        <h1>{t.about.title as string}</h1>
        <p>{t.about.intro as string}</p>
        <p>{t.about.story as string}</p>
      </section>
      <section className="container section grid2">
        <img src="https://images.unsplash.com/photo-1621905252472-e8ac5f9f7d66?auto=format&fit=crop&w=1000&q=80" alt="Garage team discussing a repair plan" />
        <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1000&q=80" alt="Mechanic using diagnostic equipment" />
      </section>
      <section className="container section">
        <h2>{t.about.valuesTitle as string}</h2>
        <ul>{(t.about.values as string[]).map((value) => <li key={value}>{value}</li>)}</ul>
        <h2>{t.about.certsTitle as string}</h2>
        <p>{t.about.certs as string}</p>
      </section>
    </Page>
  );
}
