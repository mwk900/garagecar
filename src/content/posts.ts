import type { Language } from '../types/i18n';

export interface BlogPost {
  slug: string;
  date: string;
  readingMinutes: number;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  content: Record<Language, string[]>;
}

export const posts: BlogPost[] = [
  {
    slug: 'mot-checklist-before-test',
    date: '2026-01-11',
    readingMinutes: 4,
    title: {
      en: 'MOT checklist: what to check before your test',
      pl: 'Lista kontrolna MOT: co sprawdzić przed testem'
    },
    excerpt: {
      en: 'A quick, practical list to help you avoid common MOT failures before your appointment.',
      pl: 'Krótka i praktyczna lista, która pomaga uniknąć najczęstszych problemów podczas MOT.'
    },
    content: {
      en: [
        'Before your MOT, check all exterior lights, including indicators, brake lights and number plate illumination.',
        'Inspect tyre tread depth and pressure. UK legal minimum tread is 1.6 mm across the central three-quarters of the tyre.',
        'Top up washer fluid and ensure wipers clear the screen properly. A split blade can result in a fail.',
        'Make sure registration plates are clean, readable and securely fixed. Bring locking wheel nut keys if needed.'
      ],
      pl: [
        'Przed MOT sprawdź wszystkie światła zewnętrzne: kierunkowskazy, światła stop i oświetlenie tablicy.',
        'Skontroluj głębokość bieżnika i ciśnienie w oponach. W Wielkiej Brytanii minimum to 1,6 mm na środkowych 3/4 szerokości opony.',
        'Uzupełnij płyn do spryskiwaczy i upewnij się, że wycieraczki dobrze czyszczą szybę.',
        'Tablice rejestracyjne powinny być czyste i czytelne. Jeśli używasz śrub zabezpieczających, przygotuj klucz.'
      ]
    }
  },
  {
    slug: 'brake-warning-signs',
    date: '2025-12-18',
    readingMinutes: 3,
    title: {
      en: "Brake warning signs you shouldn't ignore",
      pl: 'Objawy zużycia hamulców, których nie wolno ignorować'
    },
    excerpt: {
      en: 'Squealing, vibration and longer stopping distances are signs your braking system needs urgent attention.',
      pl: 'Piski, drgania i wydłużona droga hamowania to sygnał, że układ hamulcowy wymaga szybkiej kontroli.'
    },
    content: {
      en: [
        'A high-pitched squeal when braking often means pads are worn and need replacement.',
        'Steering wheel vibration can indicate warped discs or uneven pad wear.',
        'If the car pulls to one side during braking, your caliper or hydraulic system may need inspection.',
        'Do not delay brake checks; faults can escalate quickly and compromise safety.'
      ],
      pl: [
        'Wysoki pisk podczas hamowania często oznacza zużyte klocki hamulcowe.',
        'Drgania kierownicy mogą wskazywać na zwichrowane tarcze lub nierównomierne zużycie klocków.',
        'Jeśli auto ściąga na jedną stronę przy hamowaniu, konieczna jest kontrola zacisku lub układu hydraulicznego.',
        'Nie odkładaj diagnostyki hamulców — usterki szybko wpływają na bezpieczeństwo.'
      ]
    }
  },
  {
    slug: 'tyre-tread-pressure-winter-safety',
    date: '2025-11-22',
    readingMinutes: 4,
    title: {
      en: 'Tyre tread & pressure: staying safe in winter',
      pl: 'Bieżnik i ciśnienie opon: bezpieczeństwo zimą'
    },
    excerpt: {
      en: 'Cold weather changes tyre pressure quickly. Here is how to stay safe and improve grip.',
      pl: 'Niska temperatura szybko zmienia ciśnienie opon. Sprawdź, jak poprawić przyczepność i bezpieczeństwo.'
    },
    content: {
      en: [
        'Tyre pressure drops in colder temperatures, so check it at least once every two weeks in winter.',
        'Replace tyres before they approach legal minimum tread for safer wet-weather stopping.',
        'Uneven wear may point to alignment or suspension issues that should be corrected.',
        'Use quality tyres on all four corners and avoid mixing very different tread patterns.'
      ],
      pl: [
        'W zimie ciśnienie opon spada szybciej, dlatego kontroluj je co najmniej raz na dwa tygodnie.',
        'Dla lepszego hamowania na mokrej nawierzchni wymieniaj opony zanim osiągną minimum prawne.',
        'Nierównomierne zużycie może wskazywać na problem z geometrią lub zawieszeniem.',
        'Stosuj opony dobrej jakości na wszystkich osiach i unikaj mieszania skrajnie różnych bieżników.'
      ]
    }
  }
];
