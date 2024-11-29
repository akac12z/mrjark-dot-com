import type { HeaderLinksInterface } from "@interfaces/headerLinks.interface";

export const HEADER_LINKS: HeaderLinksInterface[] = [
  {
    href: "/essay",
    text: "Essays",
    customClasses: "hover:text-mr-neon-blue text-mr-neon-blue",
  },
  {
    href: "/book-notes",
    text: "Book Notes",
    customClasses: "hover:text-mr-neon-gold text-mr-neon-gold",
  },
  {
    href: "/psychology",
    text: "Psychology",
    customClasses: "hover:text-mr-neon-pink text-mr-neon-pink",
  },
  {
    href: "/about",
    text: "About",
    customClasses: "hover:text-mr-neon-lime text-mr-neon-lime",
  },
];
