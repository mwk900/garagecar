import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';
import BookingPage from '@/app/booking/page';
import ContactPage from '@/app/contact/page';
import HomePage from '@/app/page';
import ServicesPage from '@/app/services/page';

describe('route smoke tests', () => {
  test('renders all primary routes', () => {
    const routes = [
      { element: <HomePage />, heading: /straight answers\. solid work\./i },
      {
        element: <ServicesPage />,
        heading: /price-led mot, servicing and repair work for nottingham drivers/i
      },
      {
        element: <BookingPage />,
        heading: /fast booking for mots, servicing and repair requests/i
      },
      {
        element: <AboutPage />,
        heading: /built to feel like the garage that tells you what actually needs doing/i
      },
      {
        element: <ContactPage />,
        heading: /call, email or head straight to meadow lane/i
      }
    ];

    for (const route of routes) {
      const { unmount } = render(route.element);
      expect(screen.getByRole('heading', { name: route.heading })).toBeInTheDocument();
      unmount();
    }
  });
});
