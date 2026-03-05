import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StickyBottomBar } from '@/components/layout/sticky-bottom-bar';
import { SiteHeader } from '@/components/layout/site-header';
import HomePage from '@/app/page';
import { businessInfo, navigationLinks } from '@/lib/data';
import { setMockPathname } from '@/tests/navigation-mock';

describe('homepage shell', () => {
  test('renders hero pricing cards with booking buttons', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: /straight answers\. solid work\./i })).toBeInTheDocument();
    expect(screen.getAllByText('£35').length).toBeGreaterThan(0);
    expect(screen.getAllByText('MOT Test').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /book mot/i })).toHaveAttribute('href', '/booking?services=mot');
    expect(screen.getByRole('link', { name: /book service/i })).toHaveAttribute('href', '/booking?services=full-service');
    expect(screen.getByRole('link', { name: /book both/i })).toHaveAttribute('href', '/booking?services=mot-plus-service');
  });

  test('renders sticky header contact reveal and desktop booking action', async () => {
    const user = userEvent.setup();
    setMockPathname('/services');
    const { rerender } = render(<SiteHeader navigationLinks={navigationLinks} />);

    for (const link of navigationLinks) {
      expect(screen.getAllByRole('link', { name: new RegExp(`^${link.label}$`, 'i') })[0]).toHaveAttribute('href', link.href);
    }

    const contactButton = screen.getByRole('button', { name: /^contact$/i });
    const bookNowLink = screen.getByRole('link', { name: /book now/i });

    expect(contactButton).toHaveClass('hidden', 'md:inline-flex');
    expect(bookNowLink).toHaveClass('hidden', 'md:inline-flex');
    expect(bookNowLink).toHaveAttribute('href', '/booking');
    expect(screen.getAllByRole('link', { name: /services/i })[0]).toHaveAttribute('aria-current', 'page');

    await user.click(contactButton);

    const dialog = screen.getByRole('dialog', { name: /contact details/i });
    expect(within(dialog).getByText(businessInfo.phone)).toBeInTheDocument();
    expect(within(dialog).getByRole('link', { name: businessInfo.email })).toHaveAttribute(
      'href',
      `mailto:${businessInfo.email}`
    );
    expect(within(dialog).getByText(businessInfo.address)).toBeInTheDocument();
    expect(within(dialog).getByText(/mon to fri:/i)).toBeInTheDocument();
    expect(within(dialog).getByRole('link', { name: /open in google maps/i })).toHaveAttribute(
      'href',
      businessInfo.mapsHref
    );

    await user.click(contactButton);
    expect(screen.queryByRole('dialog', { name: /contact details/i })).not.toBeInTheDocument();

    await user.click(contactButton);
    setMockPathname('/contact');
    rerender(<SiteHeader navigationLinks={navigationLinks} />);
    expect(screen.queryByRole('dialog', { name: /contact details/i })).not.toBeInTheDocument();
  });

  test('opens and closes the mobile menu correctly', async () => {
    const user = userEvent.setup();
    render(<SiteHeader navigationLinks={navigationLinks} />);

    await user.click(screen.getByRole('button', { name: /open menu/i }));
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i });
    expect(mobileNav).toBeInTheDocument();
    expect(within(mobileNav).queryByRole('link', { name: /book now/i })).not.toBeInTheDocument();
    expect(within(mobileNav).queryByText(/0115 000 0000/i)).not.toBeInTheDocument();

    const aboutLink = within(mobileNav).getByRole('link', { name: /^about$/i });
    aboutLink.addEventListener('click', (event) => event.preventDefault());

    await user.click(aboutLink);
    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument();
  });

  test('renders sticky mobile CTA bar with booking and contact actions', async () => {
    const user = userEvent.setup();
    render(<StickyBottomBar />);

    expect(screen.getByRole('link', { name: /book mot\/service/i })).toHaveAttribute('href', '/booking');

    await user.click(screen.getByRole('button', { name: /^contact$/i }));

    const dialog = screen.getByRole('dialog', { name: /contact details/i });
    expect(within(dialog).getByRole('link', { name: /call now/i })).toHaveAttribute('href', businessInfo.phoneHref);
    expect(within(dialog).getByRole('link', { name: /^email$/i })).toHaveAttribute(
      'href',
      `mailto:${businessInfo.email}`
    );
    expect(within(dialog).getByRole('link', { name: /directions/i })).toHaveAttribute(
      'href',
      businessInfo.mapsHref
    );

    await user.click(within(dialog).getByRole('button', { name: /close contact details/i }));
    expect(screen.queryByRole('dialog', { name: /contact details/i })).not.toBeInTheDocument();
  });
});
