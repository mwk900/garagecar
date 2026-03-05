import type { Metadata } from 'next';
import { BookingSection } from '@/components/booking/booking-section';
import { PageHero } from '@/components/layout/page-hero';

export const metadata: Metadata = {
  title: 'Booking'
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Booking"
        title="Fast booking for MOTs, servicing and repair requests"
        description="Select the job, add your details and send a clear request. This is a portfolio demo flow, so no live appointment is created."
      />

      <BookingSection
        eyebrow="Booking wizard"
        title="Pick the job, choose the time, send the request"
        description="Built for fast mobile use, with large tap targets, multi-select service buttons and a clear summary before confirmation."
      />
    </>
  );
}
