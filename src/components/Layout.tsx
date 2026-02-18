import { Footer } from './Footer';
import { Header } from './Header';
import { StickyCtaBar } from './StickyCtaBar';
import { businessConfig } from '../config/business';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <StickyCtaBar phone={businessConfig.phone} />
    </>
  );
}
