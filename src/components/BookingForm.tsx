import { FormEvent, useState } from 'react';

export function BookingForm() {
  const [success, setSuccess] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSuccess(true);
    form.reset();
  };

  return (
    <section className="section" id="booking">
      <div className="container formWrap">
        <h2>Book Appointment</h2>
        <p className="sectionLead">Typically respond within 30 minutes during opening hours.</p>
        {success ? (
          <div className="successBanner" role="status" aria-live="polite">
            Thanks — we’ll be in touch shortly.
          </div>
        ) : (
          <form className="bookingForm" onSubmit={onSubmit} noValidate>
            <label htmlFor="name">Name *</label>
            <input id="name" name="name" required />

            <label htmlFor="phone">Phone *</label>
            <input id="phone" name="phone" required type="tel" />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" />

            <label htmlFor="reg">Vehicle reg</label>
            <input id="reg" name="reg" />

            <label htmlFor="service">Service needed *</label>
            <select id="service" name="service" required defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>MOT</option>
              <option>Interim Service</option>
              <option>Full Service</option>
              <option>Brakes</option>
              <option>Diagnostics</option>
              <option>Tyres</option>
            </select>

            <label htmlFor="date">Preferred date</label>
            <input id="date" name="date" type="date" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} />

            <button className="btn btnPrimary btnLg" type="submit">
              Request Callback
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
