import { Services } from '../components/Services';
import { BookingForm } from '../components/BookingForm';

export function ServicesPage() {
  return (
    <main>
      <section className="section heroSectionMini">
        <div className="container">
          <h1>Services & Pricing</h1>
          <p className="heroSub">Clear options for MOT, servicing and repairs in Nottingham.</p>
        </div>
      </section>
      <Services />
      <BookingForm />
    </main>
  );
}
