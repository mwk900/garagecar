import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithProviders } from './test-utils';

describe('website basics', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.dataset.theme = 'light';
  });

  test('renders header navigation', () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  test('theme toggle updates localStorage', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);
    await user.click(screen.getByLabelText(/theme/i));
    expect(localStorage.getItem('theme')).toContain('dark');
  });

  test('language toggle switches text', async () => {
    const user = userEvent.setup();
    renderWithProviders(<App />);
    await user.click(screen.getByRole('button', { name: '🇵🇱' }));
    expect(screen.getByText(/strona główna/i)).toBeInTheDocument();
  });

  test('blog list renders posts', () => {
    renderWithProviders(<App />, '/blog');
    expect(screen.getByText(/MOT checklist/i)).toBeInTheDocument();
  });
});
