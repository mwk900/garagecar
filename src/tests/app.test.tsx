import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithProviders } from './test-utils';

describe('garage conversion redesign', () => {
  test('renders redesigned hero and nav', () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /mot & car service in nottingham/i })).toBeInTheDocument();
  });

  test('mobile sticky CTA has call and book actions', () => {
    renderWithProviders(<App />);
    const sticky = screen.getByRole('region', { name: /quick actions/i });
    expect(within(sticky).getByRole('link', { name: /^call$/i })).toHaveAttribute('href', expect.stringContaining('tel:'));
    expect(within(sticky).getByRole('link', { name: /^book$/i })).toHaveAttribute('href', '#booking');
  });

  test('booking form submits to success state', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    await user.type(screen.getByLabelText(/name \*/i), 'Test User');
    await user.type(screen.getByLabelText(/phone \*/i), '01151234567');
    await user.selectOptions(screen.getByLabelText(/service needed \*/i), 'MOT');
    await user.click(screen.getByRole('button', { name: /request callback/i }));

    expect(screen.getByText(/thanks — we’ll be in touch shortly/i)).toBeInTheDocument();
  });
});
