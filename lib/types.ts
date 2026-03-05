export type NavLinkItem = {
  href: string;
  label: string;
};

export type ContactActionItem = {
  id: string;
  title: string;
  body: string;
  href: string;
  kind: 'details' | 'phone' | 'email' | 'directions';
  external?: boolean;
};

export type BusinessInfo = {
  name: string;
  tagline: string;
  heroSubheading: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  postcode: string;
  mapsHref: string;
  locationNote: string;
  hours: Array<{
    label: string;
    value: string;
  }>;
};

export type HeroPriceCard = {
  id: string;
  title: string;
  price: string;
  ctaLabel: string;
  href: string;
  badge?: string;
};

export type TrustBadge = {
  label: string;
  tone?: 'default' | 'success';
};

export type MileageBand = 'under-30k' | '30k-60k' | '60k-100k' | 'over-100k';

export type MotStatus = 'unknown' | 'current' | 'book-early' | 'due-soon';

export type FinderRecommendation = {
  title: string;
  description: string;
  price: string;
  ctaLabel: string;
  bookingIds: string[];
};

export type FinderResult = {
  mot: FinderRecommendation & {
    status: MotStatus;
  };
  service: FinderRecommendation;
  additionalChecks: FinderRecommendation[];
};

export type ServiceLineItem = {
  id: string;
  title: string;
  summary: string;
  price: string;
  minimumPrice?: number;
  variable?: boolean;
  bookingIds: string[];
};

export type ServiceMenuGroup = {
  title: string;
  columns: 'detailed' | 'compact';
  items: ServiceLineItem[];
};

export type ComparisonItem = {
  title: string;
  usLabel: string;
  themLabel: string;
};

export type ReviewItem = {
  quote: string;
  name: string;
  area: string;
  vehicle: string;
  rating: number;
};

export type WorkshopPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type BookingServiceOption = {
  id: string;
  label: string;
  priceLabel: string;
  minimumPrice?: number;
  variable?: boolean;
};

export type BookingAddonOption = BookingServiceOption;

export type BookingDraft = {
  services: string[];
  addons: string[];
  reg: string;
  make: string;
  model: string;
  name: string;
  phone: string;
  email: string;
  dropOffDate: string;
  timePreference: string;
  notes: string;
};

export type PageStat = {
  label: string;
  value: string;
};
