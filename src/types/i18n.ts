export type Language = 'en' | 'pl';

export interface Translation {
  business: {
    name: string;
    town: string;
    region: string;
    address: string;
    phone: string;
    email: string;
  };
  nav: Record<'home' | 'about' | 'services' | 'blog' | 'contact', string>;
  common: {
    callNow: string;
    contactUs: string;
    bookNow: string;
    example: string;
    openingHours: string;
    readMore: string;
    language: string;
    theme: string;
    backToBlog: string;
    cookieText: string;
    cookieAccept: string;
    cookieReject: string;
  };
  seo: Record<string, { title: string; description: string }>;
  home: Record<string, string | string[]>;
  about: Record<string, string | string[]>;
  services: Record<string, string | string[]>;
  contact: Record<string, string | string[]>;
  blog: Record<string, string>;
}
