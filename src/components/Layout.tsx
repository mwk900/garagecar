import { Footer } from './Footer';
import { Header } from './Header';
import { CookieBanner } from './CookieBanner';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CookieBanner />
    </>
  );
}
