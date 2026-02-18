export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
}

export const posts: BlogPost[] = [
  {
    slug: 'mot-checklist-before-test',
    title: 'MOT checklist: what to check before your test',
    excerpt: 'A practical pre-MOT checklist to reduce avoidable failures.',
    content: [
      'Check lights, horn, windscreen wipers and washers before your test day.',
      'Inspect tyre tread depth and pressure. Damaged tyres are a common failure point.',
      'Confirm your number plates are clean and readable, and your mirrors are secure.'
    ]
  },
  {
    slug: 'brake-warning-signs',
    title: "Brake warning signs you should not ignore",
    excerpt: 'Recognise early brake problems before they become expensive or dangerous.',
    content: [
      'Squealing noises can indicate worn brake pads.',
      'A vibrating steering wheel under braking may suggest warped discs.',
      'If stopping distance increases, get your brakes inspected urgently.'
    ]
  },
  {
    slug: 'tyre-care-winter',
    title: 'Tyre tread and pressure tips for safer winter driving',
    excerpt: 'Simple tyre checks that improve safety and handling in cold weather.',
    content: [
      'Cold weather lowers tyre pressure, so check it regularly.',
      'Replace tyres before they reach legal minimum tread to keep wet grip strong.',
      'Uneven wear can point to alignment issues that should be corrected.'
    ]
  }
];
