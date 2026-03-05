import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from '@/app/contact/page';

describe('contact page actions', () => {
  test('routes contact-style actions to the anchored details section without static tel links', () => {
    render(<ContactPage />);

    expect(screen.getByRole('link', { name: /workshop details/i })).toHaveAttribute('href', '#contact-details');
    expect(screen.getByRole('link', { name: /contact details/i })).toHaveAttribute('href', '#contact-details');
    expect(document.querySelector('a[href^="tel:"]')).toBeNull();
  });
});
