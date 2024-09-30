import { nav, ul, li, a } from '@control.ts/signals'

const links = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' }
]

export const header = nav(
  {
    className: 'nav-menu'
  },
  ul(
    { className: 'menu' },
    ...links.map((link) => li({ className: 'menu-item' }, a({ href: link.href, txt: link.text })))
  )
)
