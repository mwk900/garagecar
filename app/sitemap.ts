import type { MetadataRoute } from 'next';

const baseUrl = 'https://garagecar.pages.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/services', '/booking', '/about', '/contact'].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date('2026-03-05')
  }));
}
