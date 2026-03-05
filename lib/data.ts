import type {
  BookingAddonOption,
  BookingServiceOption,
  BusinessInfo,
  ComparisonItem,
  ContactActionItem,
  HeroPriceCard,
  MileageBand,
  NavLinkItem,
  PageStat,
  ReviewItem,
  ServiceMenuGroup,
  TrustBadge,
  WorkshopPhoto
} from '@/lib/types';

export const businessInfo: BusinessInfo = {
  name: 'Midlands AutoCare',
  tagline: 'Straight answers. Solid work.',
  heroSubheading:
    'Independent MOT centre and garage in Nottingham. Fair prices, no upselling, work you can trust.',
  phone: '0115 000 0000',
  phoneHref: 'tel:01150000000',
  email: 'hello@midlandsautocare.co.uk',
  address: 'Unit 4, Meadow Lane Industrial Estate, Nottingham NG2 3HJ',
  postcode: 'NG2 3HJ',
  mapsHref: 'https://maps.google.com/?q=Unit+4,+Meadow+Lane+Industrial+Estate,+Nottingham+NG2+3HJ',
  locationNote: 'Free customer parking on site. We are 5 minutes from the A52 and 10 minutes from Nottingham city centre.',
  hours: [
    { label: 'Mon to Fri', value: '8am to 6pm' },
    { label: 'Sat', value: '8am to 1pm' },
    { label: 'Sun', value: 'Closed' }
  ]
};

export const navigationLinks: NavLinkItem[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Booking' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export const contactDetailsHref = '/contact#contact-details';

export const heroPriceCards: HeroPriceCard[] = [
  { id: 'mot', title: 'MOT Test', price: '£35', ctaLabel: 'Book MOT', href: '/booking?services=mot' },
  {
    id: 'full-service',
    title: 'Full Service',
    price: 'from £189',
    ctaLabel: 'Book Service',
    href: '/booking?services=full-service'
  },
  {
    id: 'mot-plus-service',
    title: 'MOT + Service',
    price: 'from £210',
    ctaLabel: 'Book Both',
    href: '/booking?services=mot-plus-service',
    badge: 'save £14'
  }
];

export const trustBadges: TrustBadge[] = [
  { label: '4.8 star Google' },
  { label: 'MOT approved' },
  { label: 'All makes and models' },
  { label: '12 month warranty on parts', tone: 'success' }
];

export const mileageBands: Array<{ id: MileageBand; label: string }> = [
  { id: 'under-30k', label: 'Under 30k' },
  { id: '30k-60k', label: '30k to 60k' },
  { id: '60k-100k', label: '60k to 100k' },
  { id: 'over-100k', label: 'Over 100k' }
];

export const serviceMenuGroups: ServiceMenuGroup[] = [
  {
    title: 'MOT and Servicing',
    columns: 'detailed',
    items: [
      {
        id: 'mot',
        title: 'MOT Test',
        summary: 'Full inspection to DVSA standards',
        price: '£35',
        minimumPrice: 35,
        bookingIds: ['mot']
      },
      {
        id: 'interim-service',
        title: 'Interim Service',
        summary: 'Oil and filter, fluid checks, visual inspection',
        price: 'From £99',
        minimumPrice: 99,
        bookingIds: ['interim-service']
      },
      {
        id: 'full-service',
        title: 'Full Service',
        summary: 'Oil, all filters, brake check, lights, fluids, 30+ point check',
        price: 'From £189',
        minimumPrice: 189,
        bookingIds: ['full-service']
      },
      {
        id: 'major-service',
        title: 'Major Service',
        summary: 'Full service plus timing belt inspection, spark plugs, coolant',
        price: 'From £289',
        minimumPrice: 289,
        bookingIds: ['major-service']
      },
      {
        id: 'mot-plus-service',
        title: 'MOT + Full Service',
        summary: 'Save £14 when booked together',
        price: 'From £210',
        minimumPrice: 210,
        bookingIds: ['mot-plus-service']
      }
    ]
  },
  {
    title: 'Repairs and Maintenance',
    columns: 'compact',
    items: [
      {
        id: 'brake-pads',
        title: 'Brake pads (per axle)',
        summary: 'OEM equivalent pads fitted and checked',
        price: 'From £89',
        minimumPrice: 89,
        bookingIds: ['repair-other', 'brake-pads']
      },
      {
        id: 'brake-discs-pads',
        title: 'Brake discs and pads (per axle)',
        summary: 'Discs, pads, fitting, road test',
        price: 'From £169',
        minimumPrice: 169,
        bookingIds: ['repair-other', 'brake-pads']
      },
      {
        id: 'battery-replacement',
        title: 'Battery replacement',
        summary: 'Fitted and battery health checked',
        price: 'From £79 (fitted)',
        minimumPrice: 79,
        bookingIds: ['repair-other', 'battery']
      },
      {
        id: 'tyre-fitting',
        title: 'Tyre fitting (per tyre, excluding tyre cost)',
        summary: 'Fitting, balancing, valve and disposal',
        price: 'From £15',
        minimumPrice: 15,
        bookingIds: ['repair-other', 'tyres']
      },
      {
        id: 'air-con-regas',
        title: 'Air con regas',
        summary: 'Pressure check and refrigerant top up',
        price: '£59',
        minimumPrice: 59,
        bookingIds: ['repair-other', 'air-con-regas']
      },
      {
        id: 'diagnostic-scan',
        title: 'Diagnostic scan',
        summary: 'Fault code scan and first-line investigation',
        price: '£45',
        minimumPrice: 45,
        bookingIds: ['repair-other', 'diagnostics']
      },
      {
        id: 'clutch-replacement',
        title: 'Clutch replacement',
        summary: 'Quote includes labour, parts depend on vehicle',
        price: 'From £395',
        minimumPrice: 395,
        bookingIds: ['repair-other']
      },
      {
        id: 'timing-belt-replacement',
        title: 'Timing belt replacement',
        summary: 'Timing belt and water pump quoted to vehicle',
        price: 'From £295',
        minimumPrice: 295,
        bookingIds: ['repair-other']
      },
      {
        id: 'exhaust-repair',
        title: 'Exhaust repair',
        summary: 'From clamps and sections to full system repairs',
        price: 'From £65',
        minimumPrice: 65,
        bookingIds: ['repair-other', 'exhaust']
      },
      {
        id: 'suspension',
        title: 'Suspension (per corner)',
        summary: 'Shock, spring and bush wear inspection included',
        price: 'From £95',
        minimumPrice: 95,
        bookingIds: ['repair-other', 'suspension']
      }
    ]
  }
];

export const comparisonItems: ComparisonItem[] = [
  {
    title: 'Pricing',
    usLabel: 'Our labour rate: £55/hour',
    themLabel: 'Dealer average: £120+/hour'
  },
  {
    title: 'Parts',
    usLabel: 'OEM equivalent parts with 12 month warranty',
    themLabel: 'Dealer branded parts at premium markup'
  },
  {
    title: 'Communication',
    usLabel: 'Your mechanic explains what they found and what they recommend',
    themLabel: 'Service advisor relays a list you cannot verify'
  },
  {
    title: 'Flexibility',
    usLabel: 'Same day diagnostics for most issues',
    themLabel: '2 week wait for a dealer appointment'
  }
];

export const workshopPhotos: WorkshopPhoto[] = [
  {
    src: '/images/workshop/workshop-bays.jpg',
    alt: 'Clean workshop with modern cars on ramps under bright lights',
    width: 1400,
    height: 933
  },
  {
    src: '/images/workshop/brake-closeup.jpg',
    alt: 'Close up of a brake disc and caliper in a tidy workshop bay',
    width: 1400,
    height: 935
  },
  {
    src: '/images/workshop/tool-wall.jpg',
    alt: 'Organised screwdriver set and tools laid out on a clean workbench',
    width: 1400,
    height: 933
  },
  {
    src: '/images/workshop/engine-work.jpg',
    alt: 'Mechanic working carefully on a vehicle engine bay',
    width: 1400,
    height: 933
  }
];

export const reviews: ReviewItem[] = [
  {
    quote:
      'MOT done in under an hour. They found a minor advisory on a tyre and showed me the tread depth so I could see for myself. No pressure to replace it there and then.',
    name: 'Lisa M.',
    area: 'West Bridgford',
    vehicle: 'Volkswagen Golf',
    rating: 5
  },
  {
    quote:
      'Full service on my Focus. Called me before doing anything extra to explain and get approval. Total cost was £12 less than the original quote.',
    name: 'Andy P.',
    area: 'Beeston',
    vehicle: 'Ford Focus',
    rating: 5
  },
  {
    quote:
      'Brake pads and discs replaced. Arrived at 9am, collected at 12. Fair price and the car feels brand new when stopping.',
    name: 'Priya R.',
    area: 'Arnold',
    vehicle: 'Toyota Yaris',
    rating: 5
  },
  {
    quote:
      'Air con regas and a diagnostic scan. The scan found a sensor issue they fixed on the spot for the diagnostic fee alone. Honest service.',
    name: 'Dan M.',
    area: 'Mapperley',
    vehicle: 'BMW 3 Series',
    rating: 5
  },
  {
    quote:
      'Clutch replacement on an ageing Fiesta. They talked me through whether it was worth repairing versus scrapping. Repaired it for a fair price and it drives great.',
    name: 'Hannah L.',
    area: 'Sherwood',
    vehicle: 'Ford Fiesta',
    rating: 5
  },
  {
    quote:
      'Booked MOT and service online on Sunday night. Dropped the car off Monday 8am, collected Monday 5pm. Everything done.',
    name: 'Chris W.',
    area: 'Carlton',
    vehicle: 'Audi A3',
    rating: 5
  }
];

export const bookingServiceOptions: BookingServiceOption[] = [
  { id: 'mot', label: 'MOT', priceLabel: '£35', minimumPrice: 35 },
  { id: 'full-service', label: 'Full Service', priceLabel: 'from £189', minimumPrice: 189 },
  { id: 'mot-plus-service', label: 'MOT + Service', priceLabel: 'from £210', minimumPrice: 210 },
  { id: 'interim-service', label: 'Interim Service', priceLabel: 'from £99', minimumPrice: 99 },
  { id: 'major-service', label: 'Major Service', priceLabel: 'from £289', minimumPrice: 289 },
  { id: 'repair-other', label: 'Repair/Other', priceLabel: 'vehicle dependent', variable: true }
];

export const bookingAddons: BookingAddonOption[] = [
  { id: 'air-con-regas', label: 'Air Con Regas', priceLabel: '£59', minimumPrice: 59 },
  { id: 'diagnostics', label: 'Diagnostics', priceLabel: '£45', minimumPrice: 45 },
  { id: 'brake-pads', label: 'Brakes', priceLabel: 'from £89', minimumPrice: 89 },
  { id: 'battery', label: 'Battery', priceLabel: 'from £79', minimumPrice: 79 },
  { id: 'tyres', label: 'Tyres', priceLabel: 'from £15', minimumPrice: 15 },
  { id: 'suspension', label: 'Suspension', priceLabel: 'from £95', minimumPrice: 95 },
  { id: 'exhaust', label: 'Exhaust', priceLabel: 'from £65', minimumPrice: 65 }
];

export const bookingTimePreferences = ['Early (before 9am)', 'Morning', 'Afternoon', 'Flexible'];

export const footerBadges = ['MOT Approved', '12 Month Warranty'];

export const bookingBenefits = [
  'Requests reviewed within 2 hours during opening hours.',
  'Flexible drop off windows for busy Nottingham drivers.',
  'We confirm anything extra before the spanners come out.'
];

export const serviceHighlights = [
  {
    title: 'MOTs that keep it simple',
    description:
      'Fast DVSA-standard tests, clear advisories, and straight advice on what needs doing now and what can wait.'
  },
  {
    title: 'Servicing built around real mileage',
    description:
      'From Ford Fiesta interim visits to major BMW and Audi maintenance, every service is matched to wear, mileage and usage.'
  },
  {
    title: 'Repairs without the guessing game',
    description:
      'Brakes, batteries, diagnostics, suspension and timing belt work quoted clearly before any parts are fitted.'
  }
];

export const aboutPrinciples = [
  {
    title: 'Show the part, explain the fix',
    description:
      'Customers get a practical explanation, not a script. If a brake pad is worn, we will show the wear and explain the safety impact in plain language.'
  },
  {
    title: 'Modern workshop standards',
    description:
      'Clean floors, organised tools, diagnostic kit ready, and fully synthetic oil and OEM equivalent parts where they make sense.'
  },
  {
    title: 'Local trust beats chain theatre',
    description:
      'You deal with people who know Nottingham roads, busy school runs, commuter mileage and the cars local families actually drive.'
  }
];

export const aboutStats: PageStat[] = [
  { label: 'Most booked jobs', value: 'MOT, servicing, brakes' },
  { label: 'Typical same-day work', value: 'Diagnostics, batteries, air con' },
  { label: 'Workshop style', value: 'Clean, modern, no hard sell' }
];

export const contactQuickActions: ContactActionItem[] = [
  { id: 'phone', title: 'Call now', body: businessInfo.phone, href: businessInfo.phoneHref, kind: 'phone' },
  { id: 'email', title: 'Email', body: businessInfo.email, href: `mailto:${businessInfo.email}`, kind: 'email' },
  {
    id: 'directions',
    title: 'Directions',
    body: 'Open in Google Maps',
    href: businessInfo.mapsHref,
    kind: 'directions',
    external: true
  }
];

export const contactActions: ContactActionItem[] = [
  { id: 'details', title: 'Workshop details', body: businessInfo.phone, href: '#contact-details', kind: 'details' },
  { id: 'email', title: 'Email the front desk', body: businessInfo.email, href: `mailto:${businessInfo.email}`, kind: 'email' },
  {
    id: 'directions',
    title: 'Open directions',
    body: 'Meadow Lane Industrial Estate, Nottingham',
    href: businessInfo.mapsHref,
    kind: 'directions',
    external: true
  }
];
