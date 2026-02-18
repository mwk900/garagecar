import { FormEvent, useState } from 'react';

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
    form.reset();
  };

  return (
    <section className="container section" id="booking">
      <h2>Book your appointment</h2>
      <p className="sectionIntro">Typically respond within 30 minutes during opening hours.</p>

      {submitted ? (
        <div className="card success" role="status" aria-live="polite">
          Thanks — we&apos;ll be in touch shortly.
        </div>
      ) : (
        <form className="contactForm card" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" required />

          <label htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" required />

          <label htmlFor="email">Email (optional)</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="reg">Vehicle reg (optional)</label>
          <input id="reg" name="reg" />

          <label htmlFor="service">Service needed</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>
              Select service
            </option>
            <option>MOT Testing</option>
            <option>Interim Service</option>
            <option>Full Service</option>
            <option>Brakes</option>
            <option>Diagnostics</option>
            <option>Tyres</option>
            <option>General Repairs</option>
          </select>

          <label htmlFor="date">Preferred date (optional)</label>
          <input id="date" name="date" type="date" />

          <label htmlFor="message">Message (optional)</label>
          <textarea id="message" name="message" rows={4} />

          <button className="btn btnPrimary btnLarge" type="submit">
            Request a Callback
          </button>
        </form>
      )}

      {/* Cloudflare Pages static demo: wire to Formspree or your CRM endpoint when going live. */}
    </section>
  );
}
