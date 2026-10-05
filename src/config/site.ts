export const SITE = {
  name: 'Camille Durand — Pédicure-podologue (EI)',
  title: 'Camille Durand — Pédicure-podologue à Toulon',
  description: 'Cabinet de pédicurie-podologie à Toulon. Soins de pédicurie, bilans podologiques, orthèses plantaires et soins à domicile.',
  lang: 'fr',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://example.com',
  rpps: '00000000000 (fictif)',
  address: {
    street: '12 rue Exemple',
    postalCode: '83000',
    city: 'Toulon',
    region: 'Var, Provence-Alpes-Côte d’Azur',
    access: 'Rez-de-chaussée — Accès conforme personnes à mobilité réduite (PMR)',
    parking: 'Informations d’accès à compléter',
    transit: 'Informations d’accès à compléter',
  },
  hours: {
    weekdays: 'Du lundi au vendredi : 8h30 – 19h00',
    saturday: 'Le samedi matin : 8h30 – 12h30 (sur rendez-vous)',
    sunday: 'Fermé le dimanche et jours fériés',
  },
  phone: '04 94 00 00 00',
  email: 'camille-durand-pedicure-podologue@exemple.fr',
  bookingUrl: 'https://www.doctolib.fr',
  socials: {},
} as const;

export type SiteConfig = typeof SITE;
