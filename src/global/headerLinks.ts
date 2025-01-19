import type { HeaderLinksInterface } from "@interfaces/headerLinks.interface";

export const HEADER_LINKS: HeaderLinksInterface[] = [
  {
    href: "/essay",
    text: "Essays",
    customClasses: "hover:text-mr-neon-blue text-mr-neon-blue",
  },
  {
    href: "/biblioteca",
    text: "Biblioteca",
    customClasses: "hover:text-mr-neon-gold text-mr-neon-gold",
  },
  {
    href: "/psychology",
    text: "Comportamiento",
    customClasses: "hover:text-mr-neon-pink text-mr-neon-pink",
  },
  {
    href: "/contexto",
    text: "Contexto",
    customClasses: "hover:text-mr-neon-lime text-mr-neon-lime",
  },
  // {
  //   href: "/testing",
  //   text: "Testing",
  //   customClasses: "hover:text-mr-neon-red text-mr-neon-red",
  // },
];
