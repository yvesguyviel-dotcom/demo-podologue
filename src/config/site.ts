export const SITE = {
  name: 'Camille Durand — Pédicure-podologue (EI)',
  title: 'Camille Durand — Pédicure-podologue à Toulon',
  description: 'Cabinet de pédicurie-podologie à Toulon. Soins de pédicurie, bilans podologiques, semelles orthopédiques sur mesure et soins à domicile.',
  lang: 'fr',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://example.com',
  rpps: '10101987654',
  adeli: '830000000',
  address: {
    street: '14 Boulevard de Strasbourg',
    postalCode: '83000',
    city: 'Toulon',
    region: 'Var, Provence-Alpes-Côte d’Azur',
    access: 'Rez-de-chaussée — Accès conforme personnes à mobilité réduite (PMR)',
    parking: 'Parking public Liberté et Place d’Armes à proximité',
    transit: 'Réseau Mistral : Arrêt Liberté / Vauban (Lignes 1, 3, 9, 15)',
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
