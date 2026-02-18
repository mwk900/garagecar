import { businessConfig } from '../config/business';
import type { Translation } from '../types/i18n';

export const translations: Record<'en' | 'pl', Translation> = {
  en: {
    business: {
      name: businessConfig.name,
      town: businessConfig.town,
      region: businessConfig.region,
      address: businessConfig.address,
      phone: businessConfig.phone,
      email: businessConfig.email
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      blog: 'Blog',
      contact: 'Contact'
    },
    common: {
      callNow: 'Call Now',
      contactUs: 'Contact Us',
      bookNow: 'Book a Service',
      example: 'Sample/demo content',
      openingHours: 'Opening hours',
      readMore: 'Read more',
      language: 'Language',
      theme: 'Theme',
      backToBlog: 'Back to blog',
      cookieText:
        'We use essential cookies to improve your browsing experience and measure website performance.',
      cookieAccept: 'Accept',
      cookieReject: 'Reject'
    },
    seo: {
      home: {
        title: 'Midlands AutoCare | Trusted local car repairs, MOT & servicing',
        description:
          'Local Nottingham garage for car repairs, MOT testing, servicing, tyres, brakes and diagnostics. Fast, transparent and dependable service.'
      },
      about: {
        title: 'About Midlands AutoCare | Nottingham local garage',
        description:
          'Learn about Midlands AutoCare, our values, team experience and practical approach to quality car repairs in Nottingham.'
      },
      services: {
        title: 'Garage Services | MOT, brakes, tyres & diagnostics',
        description:
          'Explore our full service list including MOT Class 4, interim and full servicing, brakes, tyres, diagnostics and air conditioning recharge.'
      },
      blog: {
        title: 'Midlands AutoCare Blog | Practical car care advice',
        description:
          'Helpful articles from your local mechanic covering MOT preparation, brake safety and tyre care for UK roads.'
      },
      contact: {
        title: 'Contact Midlands AutoCare | Book car repairs in Nottingham',
        description:
          'Call or send us a message to book MOT, servicing, diagnostics or repairs. We serve Nottingham and surrounding areas.'
      }
    },
    home: {
      heroTitle: 'Trusted local car repairs, MOT & servicing',
      heroBody:
        'From routine servicing to complex diagnostics, we keep your car reliable and road-ready with clear communication at every stage.',
      trustTitle: 'What we do every day',
      trustItems: ['MOT Testing', 'Diagnostics', 'Servicing', 'Tyres & Brakes', 'Electrical'],
      servicesTitle: 'Popular services',
      whyTitle: 'Why choose Midlands AutoCare',
      whyItems: ['Quality workmanship', 'Transparent pricing', 'Fast turnaround with local convenience'],
      testimonialsTitle: 'Customer feedback',
      processTitle: 'How it works',
      processItems: ['Book', 'Inspect', 'Repair', 'Collect'],
      locationTitle: 'Serving Nottingham and surrounding areas',
      finalCta: 'Need help today? Speak with our team and book your visit.'
    },
    about: {
      title: 'About our garage',
      intro:
        'Midlands AutoCare is a community-focused local garage helping drivers across Nottingham with practical, honest vehicle care.',
      story:
        'Our workshop combines modern diagnostics with hands-on mechanical experience. We focus on clear explanations, realistic timelines and repairs that solve the root issue.',
      valuesTitle: 'Our values',
      values: ['Clear communication', 'Work completed to a high standard', 'Respect for your time and budget'],
      certsTitle: 'Training and standards',
      certs:
        'Our team is trained in current workshop and diagnostic practices, including IMI-aligned skills and MOT processes. These are sample statements and should be adapted to your business records.'
    },
    services: {
      title: 'Services and example pricing',
      subtitle: 'Example pricing only – final quotes depend on vehicle model and required parts.',
      faqTitle: 'Frequently asked questions',
      faqWarrantyQ: 'Do you provide a warranty?',
      faqWarrantyA: 'We provide a clear parts and labour policy on completed work. Terms are explained before approval.',
      faqTimeQ: 'How long does a service take?',
      faqTimeA: 'Most interim services are completed same day. Full services and repairs depend on parts availability.',
      faqPriceQ: 'Can I get a fixed quote?',
      faqPriceA: 'Yes. After inspection we issue a transparent quote and only proceed after your approval.'
    },
    contact: {
      title: 'Contact Midlands AutoCare',
      subtitle: 'Call us directly or send your enquiry below. We reply as quickly as possible during opening hours.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone (optional)',
      reg: 'Vehicle registration (optional)',
      service: 'Service needed',
      message: 'Message',
      consent: 'I agree to be contacted about my enquiry',
      submit: 'Send enquiry',
      successTitle: 'Thank you for your enquiry',
      successBody: 'Your message was sent successfully. Our team will contact you shortly.'
    },
    blog: {
      title: 'Garage blog',
      subtitle: 'Straightforward advice from your local garage mechanic.'
    }
  },
  pl: {
    business: {
      name: businessConfig.name,
      town: businessConfig.town,
      region: businessConfig.region,
      address: businessConfig.address,
      phone: businessConfig.phone,
      email: businessConfig.email
    },
    nav: {
      home: 'Strona główna',
      about: 'O nas',
      services: 'Usługi',
      blog: 'Blog',
      contact: 'Kontakt'
    },
    common: {
      callNow: 'Zadzwoń teraz',
      contactUs: 'Kontakt',
      bookNow: 'Umów wizytę',
      example: 'Treść przykładowa/demo',
      openingHours: 'Godziny otwarcia',
      readMore: 'Czytaj więcej',
      language: 'Język',
      theme: 'Motyw',
      backToBlog: 'Powrót do bloga',
      cookieText:
        'Używamy niezbędnych plików cookie, aby poprawić działanie strony i mierzyć jej wydajność.',
      cookieAccept: 'Akceptuję',
      cookieReject: 'Odrzuć'
    },
    seo: {
      home: {
        title: 'Midlands AutoCare | Zaufany lokalny serwis, MOT i przeglądy',
        description:
          'Lokalny warsztat w Nottingham: naprawy samochodowe, MOT, serwis, opony, hamulce i diagnostyka. Szybko i przejrzyście.'
      },
      about: {
        title: 'O Midlands AutoCare | Lokalny warsztat Nottingham',
        description:
          'Poznaj Midlands AutoCare, nasze wartości i doświadczenie w codziennych naprawach samochodowych.'
      },
      services: {
        title: 'Usługi warsztatowe | MOT, hamulce, opony, diagnostyka',
        description:
          'Pełna lista usług: MOT Class 4, serwis okresowy, hamulce, opony, diagnostyka, sprzęgło i klimatyzacja.'
      },
      blog: {
        title: 'Blog Midlands AutoCare | Porady motoryzacyjne',
        description:
          'Praktyczne wskazówki lokalnego mechanika: przygotowanie do MOT, objawy zużycia hamulców i bezpieczeństwo opon.'
      },
      contact: {
        title: 'Kontakt Midlands AutoCare | Umów naprawę w Nottingham',
        description:
          'Zadzwoń lub napisz, aby umówić MOT, serwis, diagnostykę i naprawy samochodowe.'
      }
    },
    home: {
      heroTitle: 'Zaufane lokalne naprawy samochodowe, MOT i serwis',
      heroBody:
        'Od regularnych przeglądów po zaawansowaną diagnostykę — dbamy o sprawność auta i jasną komunikację na każdym etapie.',
      trustTitle: 'Nasza codzienna specjalizacja',
      trustItems: ['MOT', 'Diagnostyka', 'Serwis', 'Opony i hamulce', 'Elektryka'],
      servicesTitle: 'Najczęściej wybierane usługi',
      whyTitle: 'Dlaczego Midlands AutoCare',
      whyItems: ['Wysoka jakość wykonania', 'Przejrzyste ceny', 'Szybka realizacja blisko Ciebie'],
      testimonialsTitle: 'Opinie klientów',
      processTitle: 'Jak to działa',
      processItems: ['Rezerwacja', 'Inspekcja', 'Naprawa', 'Odbiór'],
      locationTitle: 'Obsługujemy Nottingham i okolice',
      finalCta: 'Potrzebujesz pomocy dzisiaj? Skontaktuj się i umów wizytę.'
    },
    about: {
      title: 'O naszym warsztacie',
      intro:
        'Midlands AutoCare to lokalny warsztat skoncentrowany na potrzebach kierowców z Nottingham i okolic.',
      story:
        'Łączymy nowoczesną diagnostykę z praktycznym doświadczeniem mechanicznym. Stawiamy na rzetelną ocenę usterki i realistyczne terminy.',
      valuesTitle: 'Nasze wartości',
      values: ['Jasna komunikacja', 'Naprawy wykonane zgodnie ze standardem', 'Szacunek dla czasu i budżetu klienta'],
      certsTitle: 'Szkolenia i standardy',
      certs:
        'Nasz zespół szkoli się w aktualnych procedurach serwisowych i diagnostycznych, w tym praktykach zgodnych z IMI i procesami MOT. To treść przykładowa do dopasowania.'
    },
    services: {
      title: 'Usługi i przykładowe ceny',
      subtitle: 'Ceny orientacyjne – końcowa wycena zależy od modelu auta i części.',
      faqTitle: 'Najczęstsze pytania',
      faqWarrantyQ: 'Czy udzielacie gwarancji?',
      faqWarrantyA: 'Przedstawiamy jasne zasady dotyczące części i robocizny przed zatwierdzeniem naprawy.',
      faqTimeQ: 'Ile trwa serwis?',
      faqTimeA: 'Serwis podstawowy zwykle realizujemy tego samego dnia. Czas napraw zależy od dostępności części.',
      faqPriceQ: 'Czy mogę dostać stałą wycenę?',
      faqPriceA: 'Tak. Po inspekcji przedstawiamy przejrzystą wycenę i działamy dopiero po akceptacji.'
    },
    contact: {
      title: 'Kontakt z Midlands AutoCare',
      subtitle:
        'Zadzwoń bezpośrednio lub wyślij zapytanie przez formularz. Odpowiadamy najszybciej jak to możliwe w godzinach pracy.',
      name: 'Imię i nazwisko',
      email: 'E-mail',
      phone: 'Telefon (opcjonalnie)',
      reg: 'Numer rejestracyjny (opcjonalnie)',
      service: 'Zakres usługi',
      message: 'Wiadomość',
      consent: 'Wyrażam zgodę na kontakt w sprawie mojego zapytania',
      submit: 'Wyślij zapytanie',
      successTitle: 'Dziękujemy za wiadomość',
      successBody: 'Formularz został wysłany poprawnie. Skontaktujemy się wkrótce.'
    },
    blog: {
      title: 'Blog warsztatowy',
      subtitle: 'Praktyczne porady od lokalnego mechanika.'
    }
  }
};
