import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ServiceFinder } from '@/components/service-finder/service-finder';

describe('service finder', () => {
  test('shows recommendation panel based on MOT date and mileage selection', async () => {
    render(<ServiceFinder />);

    fireEvent.change(screen.getByLabelText(/last mot/i), { target: { value: '2025-02' } });
    fireEvent.click(screen.getByRole('button', { name: /^over 100k$/i }));

    expect(await screen.findByText(/likely due soon or may have expired/i)).toBeInTheDocument();
    expect((await screen.findAllByText(/major service recommended/i))[0]).toBeInTheDocument();
    expect(await screen.findByText(/air con regas/i)).toBeInTheDocument();
  });

  test('resets the recommendation flow', async () => {
    render(<ServiceFinder />);

    fireEvent.click(screen.getByRole('button', { name: /^under 30k$/i }));
    expect(await screen.findByText(/interim service recommended/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /start over/i }));
    expect(
      await screen.findByText((_, element) => element?.textContent === 'Pick your mileage to see a recommendation')
    ).toBeInTheDocument();
  });
});
