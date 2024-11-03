interface HeaderLinksInterface {
  href: string
  text: string
  customClasses: string
}

export const HEADER_LINKS: HeaderLinksInterface[] = [
  {
    href: '/essay', 
    text: 'Essays', 
    customClasses: 'hover:text-mr-neon-pink'
  },
  {
    href: '/book-notes', 
    text: 'Book Notes', 
    customClasses: 'hover:text-mr-neon-gold'
  },
  {
    href: '/about', 
    text: 'About', 
    customClasses: 'hover:text-mr-neon-blue'
  },
]