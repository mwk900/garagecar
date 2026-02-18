import { BookingForm } from '../components/BookingForm';
import { ContactMap } from '../components/ContactMap';

export function ContactPage() {
  return (
    <main>
      <section className="section heroSectionMini">
        <div className="container">
          <h1>Contact Midlands AutoCare</h1>
          <p className="heroSub">Call us directly or request a callback using the form below.</p>
        </div>
      </section>
      <ContactMap />
      <BookingForm />
    </main>
  );
}
