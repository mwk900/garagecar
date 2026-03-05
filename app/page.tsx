import { BookingSection } from '@/components/booking/booking-section';
import { HeroSection } from '@/components/landing/hero-section';
import { IndependentAdvantageSection } from '@/components/landing/independent-advantage-section';
import { LocationHoursSection } from '@/components/landing/location-hours-section';
import { ReviewsSection } from '@/components/landing/reviews-section';
import { ServiceMenuSection } from '@/components/landing/service-menu-section';
import { WorkshopStrip } from '@/components/landing/workshop-strip';
import { ServiceFinder } from '@/components/service-finder/service-finder';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceFinder />
      <ServiceMenuSection bookingHref="#booking" />
      <IndependentAdvantageSection />
      <WorkshopStrip />
      <ReviewsSection />
      <BookingSection />
      <LocationHoursSection />
    </>
  );
}
