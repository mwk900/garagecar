import { BookingForm } from '../components/BookingForm';
import { ContactMap } from '../components/ContactMap';
import { Hero } from '../components/Hero';
import { ServiceArea } from '../components/ServiceArea';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { Trust } from '../components/Trust';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Trust />
      <section className="section sectionAlt">
        <div className="container">
          <h2>How it works</h2>
          <div className="stepsGrid">
            <article className="surfaceCard">1. Book your slot</article>
            <article className="surfaceCard">2. Drop off your car</article>
            <article className="surfaceCard">3. Collect with confidence</article>
          </div>
        </div>
      </section>
      <Testimonials />
      <ServiceArea />
      <ContactMap />
      <BookingForm />
    </main>
  );
}
