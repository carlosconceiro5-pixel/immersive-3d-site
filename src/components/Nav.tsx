import { useState } from 'react'
import { business, navLinks } from '../data/site'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="nav">
      <div className="nav__inner container">
        <a className="nav__brand" href="#top" onClick={closeMenu}>
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

        <button
          type="button"
          className="nav__toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__mobile ${isOpen ? 'nav__mobile--open' : ''}`} id="mobile-menu">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}

        <a className="btn btn--primary" href="#contact" onClick={closeMenu}>
          Start your project
        </a>
      </div>
    </header>
  )
}