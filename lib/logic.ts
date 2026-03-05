import {
  bookingAddons,
  bookingServiceOptions,
  businessInfo
} from '@/lib/data';
import type {
  BookingAddonOption,
  BookingServiceOption,
  FinderRecommendation,
  FinderResult,
  MileageBand,
  MotStatus
} from '@/lib/types';

type EstimateItem = BookingServiceOption | BookingAddonOption;

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 0
  }).format(value);
}

function monthDifference(reference: Date, input: string) {
  const [yearRaw, monthRaw] = input.split('-');
  const year = Number(yearRaw);
  const month = Number(monthRaw);

  if (!year || !month) {
    return null;
  }

  return reference.getFullYear() * 12 + (reference.getMonth() + 1) - (year * 12 + month);
}

function buildMotRecommendation(
  status: MotStatus,
  description: string
): FinderRecommendation & { status: MotStatus } {
  return {
    status,
    title: 'MOT status',
    description,
    price: '£35',
    ctaLabel: 'Book MOT',
    bookingIds: ['mot']
  };
}

export function getMotRecommendation(
  lastMotMonth: string | null,
  notSure: boolean,
  now = new Date()
): FinderRecommendation & { status: MotStatus } {
  if (notSure || !lastMotMonth) {
    return buildMotRecommendation(
      'unknown',
      'Not sure when your last MOT was? We can check the registration, confirm the due date and advise on the next step.'
    );
  }

  const difference = monthDifference(now, lastMotMonth);

  if (difference === null) {
    return buildMotRecommendation(
      'unknown',
      'We can check your MOT date for you and confirm whether the car needs testing soon.'
    );
  }

  if (difference > 10) {
    return buildMotRecommendation(
      'due-soon',
      'Your MOT is likely due soon or may have expired. Book an MOT.'
    );
  }

  if (difference >= 6) {
    return buildMotRecommendation(
      'book-early',
      'Your MOT is not due yet, but you can book up to a month early.'
    );
  }

  return buildMotRecommendation('current', 'Your MOT looks current.');
}

export function getServiceRecommendation(mileageBand: MileageBand): FinderRecommendation {
  switch (mileageBand) {
    case 'under-30k':
      return {
        title: 'Interim service recommended',
        description: 'An interim service keeps things running smoothly at this mileage.',
        price: 'from £99',
        ctaLabel: 'Book this',
        bookingIds: ['interim-service']
      };
    case '30k-60k':
      return {
        title: 'Full service recommended',
        description:
          'A full service is recommended. Includes oil, filters, brake check, and fluid top ups.',
        price: 'from £189',
        ctaLabel: 'Book this',
        bookingIds: ['full-service']
      };
    case '60k-100k':
      return {
        title: 'Major service recommended',
        description: 'A major service with timing belt check is worth considering.',
        price: 'from £289',
        ctaLabel: 'Book this',
        bookingIds: ['major-service']
      };
    case 'over-100k':
      return {
        title: 'Major service recommended',
        description:
          'A major service is recommended. We will also inspect suspension, exhaust, and high wear items.',
        price: 'from £289',
        ctaLabel: 'Book this',
        bookingIds: ['major-service']
      };
  }
}

export function getAdditionalChecks(mileageBand: MileageBand): FinderRecommendation[] {
  if (mileageBand === 'under-30k') {
    return [];
  }

  if (mileageBand === '30k-60k') {
    return [
      {
        title: 'Brake fluid change',
        description: 'Worth checking on cars that have gone a few years between fluid changes.',
        price: 'vehicle dependent',
        ctaLabel: 'Ask about this',
        bookingIds: ['repair-other', 'brake-pads']
      }
    ];
  }

  return [
    {
      title: 'Brake fluid change',
      description: 'Older fluid can affect pedal feel and braking confidence.',
      price: 'vehicle dependent',
      ctaLabel: 'Ask about this',
      bookingIds: ['repair-other', 'brake-pads']
    },
    {
      title: 'Coolant flush',
      description: 'Useful for higher-mileage cars where coolant condition needs checking.',
      price: 'vehicle dependent',
      ctaLabel: 'Ask about this',
      bookingIds: ['repair-other']
    },
    {
      title: 'Air con regas',
      description: 'Helps cabin comfort and demisting performance through the year.',
      price: '£59',
      ctaLabel: 'Book this',
      bookingIds: ['repair-other', 'air-con-regas']
    }
  ];
}

export function getFinderResult(
  mileageBand: MileageBand,
  lastMotMonth: string | null,
  notSure: boolean,
  now = new Date()
): FinderResult {
  return {
    mot: getMotRecommendation(lastMotMonth, notSure, now),
    service: getServiceRecommendation(mileageBand),
    additionalChecks: getAdditionalChecks(mileageBand)
  };
}

export function shouldShowAddons(services: string[]) {
  return services.includes('repair-other');
}

function resolveEstimateItems(ids: string[]) {
  const allItems = [...bookingServiceOptions, ...bookingAddons];
  return ids
    .map((id) => allItems.find((item) => item.id === id))
    .filter((item): item is EstimateItem => Boolean(item));
}

export function calculateBookingEstimate(services: string[], addons: string[]) {
  const items = resolveEstimateItems([...services, ...addons]);
  const minimumTotal = items.reduce((total, item) => total + (item.minimumPrice ?? 0), 0);
  const hasVariable = items.some((item) => item.variable);

  if (!items.length) {
    return {
      label: 'Choose a service to see an estimate',
      minimumTotal: 0,
      note: 'Prices include labour. Parts are quoted to the vehicle.',
      hasVariable: false
    };
  }

  const prefix = minimumTotal > 0 ? `From ${formatCurrency(minimumTotal)}` : 'Vehicle dependent quote';

  return {
    label: hasVariable ? `${prefix} + vehicle-dependent repairs` : prefix,
    minimumTotal,
    hasVariable,
    note: 'All prices include labour. Parts quoted individually based on your vehicle. No surprises.'
  };
}

export function normalizeServicePrefill(value?: string | string[]) {
  const source = Array.isArray(value) ? value.join(',') : value ?? '';
  const allowed = new Set(bookingServiceOptions.map((option) => option.id));

  return source
    .split(',')
    .map((item) => item.trim())
    .filter((item) => allowed.has(item));
}

export function buildBookingHref(ids: string[]) {
  return ids.length ? `/booking?services=${ids.join(',')}` : '/booking';
}

export function formatBookingDate(value: string) {
  if (!value) {
    return 'Not selected';
  }

  const parsed = new Date(`${value}T00:00:00`);

  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(parsed);
}

export function businessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    name: businessInfo.name,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessInfo.address,
      postalCode: businessInfo.postcode,
      addressLocality: 'Nottingham',
      addressCountry: 'GB'
    }
  };
}
