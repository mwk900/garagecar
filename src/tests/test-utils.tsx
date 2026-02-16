import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SiteProvider } from '../hooks/useSiteContext';

export function renderWithProviders(ui: React.ReactElement, route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <SiteProvider>{ui}</SiteProvider>
    </MemoryRouter>
  );
}
