import { Page } from '../components/Page';
import { useTranslation } from '../hooks/useSiteContext';

export function ContactSuccessPage() {
  const t = useTranslation();

  return (
    <Page metaKey="contact">
      <section className="container section">
        <h1>{t.contact.successTitle as string}</h1>
        <p>{t.contact.successBody as string}</p>
      </section>
    </Page>
  );
}
