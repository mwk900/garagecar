import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithProviders } from './test-utils';

describe('conversion site basics', () => {
  test('renders header navigation and hero headline', () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /trusted local garage in nottingham/i })).toBeInTheDocument();
  });

  test('book appointment link scroll target exists', () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('link', { name: /book appointment/i })).toHaveAttribute('href', '#booking');
    expect(document.getElementById('booking')).toBeInTheDocument();
  });

  test('booking form shows success state after submit', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);

    await user.type(screen.getByLabelText(/name \*/i), 'Test Driver');
    await user.type(screen.getByLabelText(/phone \*/i), '01151234567');
    await user.selectOptions(screen.getByLabelText(/service needed/i), 'MOT Testing');
    await user.click(screen.getByRole('button', { name: /request a callback/i }));

    expect(screen.getByText(/thanks — we'll be in touch shortly/i)).toBeInTheDocument();
  });

  test('sticky CTA has call and book actions', () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('link', { name: /^call$/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /^book$/i })).toHaveAttribute('href', '#booking');
  });
});
