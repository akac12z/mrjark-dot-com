/**
 * Social Links Interfaces
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
interface SiteDefaultConfigInterface {
  title: string;
  description: string;
  url: string;
  author: string;
  location: string;
  lang:string
};
interface Site404ConfigInterface {
  errorTitle: string;
  errorDescription: string;
  url: string;
  author: string;
  location: string;
  lang: string
};

export const SITE_DEFAULT_CONFIG: SiteDefaultConfigInterface = {
  title: "mrjark | Growth, Behavioral Psychology, Startups y Crecimiento Personal",
  description:
    "Un blog y mi 'build(me) in public'. Aquí voy a compartir aquello que voy haciendo, aprendiendo y pensando que considero que es importante, en mi carrera personal y profesional en Startups sobre Growth, Psicología del Comportamiento y Economía Conductual y Crecimiento Personal.",
  url: "https://mrjark.com",
  author: "Chema | mrjark",
  location: "es_ES",
  lang: 'es-ES'
}

export const SITE_404_CONFIG: Site404ConfigInterface = {
  errorTitle: "Hiuston, hemos tenido un problema 404 en mrjark",
  errorDescription:
    "Ha habido un problema con la página que estabas buscando y bueno... aquí estamos.",
  url: "https://mrjark.com",
  author: "Chema | mrjark",
  location: "es_ES",
  lang: "es-ES",
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
