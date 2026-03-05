import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { businessInfo, navigationLinks } from '@/lib/data';
import { businessJsonLd } from '@/lib/logic';
import { Footer } from '@/components/layout/footer';
import { SiteHeader } from '@/components/layout/site-header';
import { StickyBottomBar } from '@/components/layout/sticky-bottom-bar';
import './globals.css';

const headingFont = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading'
});

const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://garagecar.pages.dev'),
  title: {
    default: `${businessInfo.name} | Nottingham MOT & Servicing`,
    template: `%s | ${businessInfo.name}`
  },
  description:
    'Midlands AutoCare is a fictional Nottingham garage demo site by NorthSummit Agency, focused on MOTs, servicing, repairs and straight-talking local trust.',
  openGraph: {
    title: `${businessInfo.name} | ${businessInfo.tagline}`,
    description: businessInfo.heroSubheading,
    siteName: businessInfo.name,
    locale: 'en_GB',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${headingFont.variable} ${bodyFont.variable} bg-surface text-ink antialiased`}>
        <SiteHeader navigationLinks={navigationLinks} />
        <main className="pb-28 md:pb-0">{children}</main>
        <Footer navigationLinks={navigationLinks} />
        <StickyBottomBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd()) }}
        />
      </body>
    </html>
  );
}
