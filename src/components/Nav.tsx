import { business, navLinks } from '../data/site'

export function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner container">
        <a className="nav__brand" href="#top">
          {business.name}
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--primary nav__cta" href="#contact">
          Start your project
        </a>
      </div>
    </header>
  )
}
