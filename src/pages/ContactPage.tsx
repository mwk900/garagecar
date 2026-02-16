import { Page } from '../components/Page';
import { useTranslation } from '../hooks/useSiteContext';

export function ContactPage() {
  const t = useTranslation();

  return (
    <Page metaKey="contact">
      <section className="container section">
        <h1>{t.contact.title as string}</h1>
        <p>{t.contact.subtitle as string}</p>
        <p>{t.business.phone} · {t.business.email}</p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/contact/success"
          className="contactForm card"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <label>{t.contact.name as string}<input required name="name" /></label>
          <label>{t.contact.email as string}<input required type="email" name="email" /></label>
          <label>{t.contact.phone as string}<input name="phone" /></label>
          <label>{t.contact.reg as string}<input name="vehicleReg" /></label>
          <label>
            {t.contact.service as string}
            <select required name="service">
              <option value="">--</option>
              <option>MOT</option>
              <option>Servicing</option>
              <option>Tyres</option>
              <option>Brakes</option>
              <option>Diagnostics</option>
              <option>Repairs</option>
            </select>
          </label>
          <label>{t.contact.message as string}<textarea required name="message" rows={5} /></label>
          <label className="consent"><input required type="checkbox" name="consent" />{t.contact.consent as string}</label>
          <button className="btn btnPrimary" type="submit">{t.contact.submit as string}</button>
        </form>
      </section>
    </Page>
  );
}
