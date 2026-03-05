import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingWizard } from '@/components/booking/booking-wizard';
import { setMockSearchParams } from '@/tests/navigation-mock';

describe('booking wizard', () => {
  test('supports query prefill, add-ons and confirmation summary', async () => {
    const user = userEvent.setup();
    setMockSearchParams('services=mot,repair-other');
    render(<BookingWizard />);

    expect(await screen.findByText(/common add-ons for repair or other/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /air con regas/i }));
    await user.click(screen.getByRole('button', { name: /continue to details/i }));

    await user.type(await screen.findByRole('textbox', { name: /make/i }), 'Volkswagen');
    await user.type(screen.getByRole('textbox', { name: /name/i }), 'Lisa');
    await user.type(screen.getByRole('textbox', { name: /phone/i }), '01150000000');
    await user.type(screen.getByRole('textbox', { name: /email/i }), 'lisa@example.com');
    await user.type(screen.getByLabelText(/preferred drop off date/i), '2026-03-20');
    await user.selectOptions(screen.getByRole('combobox', { name: /drop off time preference/i }), 'Morning');
    await user.click(screen.getByRole('button', { name: /review request/i }));

    expect(await screen.findByText(/summary/i)).toBeInTheDocument();
    expect(screen.getByText(/from £94 \+ vehicle-dependent repairs/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /confirm booking request/i }));

    expect(screen.getByText(/booking request received/i)).toBeInTheDocument();
    expect(screen.getByText(/we will confirm your slot by phone or text within 2 hours/i)).toBeInTheDocument();
  });
});
