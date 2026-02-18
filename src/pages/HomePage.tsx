import { Page } from '../components/Page';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Trust } from '../components/Trust';
import { Testimonials } from '../components/Testimonials';
import { ServiceArea } from '../components/ServiceArea';
import { ContactMap } from '../components/ContactMap';
import { BookingForm } from '../components/BookingForm';
import { businessConfig } from '../config/business';

export function HomePage() {
  return (
    <Page metaKey="home">
      <Hero phone={businessConfig.phone} />
      <Services />
      <Trust />
      <Testimonials />
      <ServiceArea />
      <ContactMap />
      <BookingForm />
    </Page>
  );
}
