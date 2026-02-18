import { Footer } from './Footer';
import { Header } from './Header';
import { StickyCtaBar } from './StickyCtaBar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <StickyCtaBar />
    </>
  );
}
