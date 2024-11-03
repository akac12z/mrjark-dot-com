/**
 * Links Interfaces
*/
interface SocialLinksInterface  {
  [key: string]: SocialLink;
};

interface SocialLink  {
  name: string;
  url: string;
};

/**
 * Site interface
*/
interface SiteConfigInterface {
  title: string;
  description: string;
  url: string;
  author: string;
  location: string;
};

export const SITE_CONFIG: SiteConfigInterface = {
  title: "mrjark | Hablo sobre Growth, Behavioral Psychology, Startups y Crecimiento Personal",
  description:
    "Un blog y mi 'build(me) in public'. Aquí voy a compartir aquello que voy haciendo, aprendiendo y pensando que considero que es importante, en mi carrera personal y profesional en Startups sobre Growth, Psicología del Comportamiento y Economía Conductual y Crecimiento Personal.",
  url: "https://mrjark.com",
  author: "Chema | mrjark",
  location: "es-ES",
}

export const SOCIAL_LINKS: SocialLinksInterface = {
  github: {
    name: 'Github',
    url: 'https://github.com/immrjark'
  },
  twitter: {
    name: 'Twitter/𝕏',
    url: 'https://x.com/immrjark'
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chemaferrandez/'
  },
  substack: {
    name: 'Substack',
    url: 'https://mrjark.substack.com'
  },
}

// "Mi 'build(me) in public', aquí te compartiré aquello que voy aprendiendo, haciendo y pensando, y que considero que es importante, en mi carrera en Growth y alguna que otra cosas que me parece interesante.",
