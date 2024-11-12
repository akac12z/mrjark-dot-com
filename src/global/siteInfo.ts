/**
 * Social Links Interfaces
*/
interface SocialLinksInterface  {
  [key: string]: SocialLink;
};

interface SocialLink  {
  name: string;
  url: string;
  userName: string;
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

/**
 * TODO: Make Routes sites interfaces 
*/

export const SITE_DEFAULT_CONFIG: SiteDefaultConfigInterface = {
  title: "mrjark",
  description:
    "Un 'build(me) in public' donde compartiré aquello que voy haciendo, aprendiendo y pensando en mi carrera como Growth en Startups",
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
    url: 'https://github.com/immrjark',
    userName: 'immrjark'
  },
  twitter: {
    name: 'Twitter/𝕏',
    url: 'https://x.com/immrjark',
    userName: '@immrjark'
  },
  linkedin: {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/chemaferrandez/',
    userName: 'ChemaFerrandez'
  },
  substack: {
    name: 'Substack',
    url: 'https://mrjark.substack.com',
    userName: '@mrjark'
  },
  goodreads: {
    name: 'Goodreads',
    url: 'goodreads.com/immrjark',
    userName: 'immrjark'
  }
}

// "Mi 'build(me) in public', aquí te compartiré aquello que voy aprendiendo, haciendo y pensando, y que considero que es importante, en mi carrera en Growth y alguna que otra cosas que me parece interesante.",
