import '@testing-library/jest-dom/vitest';
import React from 'react';
import { beforeEach, vi } from 'vitest';
import { getMockPathname, getMockSearchParams, resetMockNavigation } from '@/tests/navigation-mock';

vi.mock('next/image', () => ({
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => {
    const sanitizedProps = { ...props };
    delete sanitizedProps.priority;

    return React.createElement('img', sanitizedProps);
  }
}));

vi.mock('next/link', () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string | { pathname?: string };
    children: React.ReactNode;
  }) => React.createElement('a', { href: typeof href === 'string' ? href : href.pathname ?? '', ...props }, children)
}));

vi.mock('next/font/google', () => ({
  Inter: () => ({ className: 'font-body', variable: '--font-body' }),
  Outfit: () => ({ className: 'font-heading', variable: '--font-heading' })
}));

vi.mock('next/navigation', () => ({
  usePathname: () => getMockPathname(),
  useSearchParams: () => getMockSearchParams()
}));

class MockIntersectionObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

class MockResizeObserver {
  observe() {}

  unobserve() {}

  disconnect() {}
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  })
});

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver
});

Object.defineProperty(globalThis, 'ResizeObserver', {
  writable: true,
  value: MockResizeObserver
});

beforeEach(() => {
  resetMockNavigation();
});
