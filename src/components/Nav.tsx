import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { business } from '../data/site'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Investors', href: '/investors' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="nav">
      <div className="nav__inner container">
        <NavLink className="nav__brand" to="/" onClick={closeMenu}>
          {business.name}
        </NavLink>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.href} to={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink className="btn btn--primary nav__cta" to="/contact">
          Start your project
        </NavLink>

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
          <NavLink key={link.href} to={link.href} onClick={closeMenu}>
            {link.label}
          </NavLink>
        ))}

        <NavLink className="btn btn--primary" to="/contact" onClick={closeMenu}>
          Start your project
        </NavLink>
      </div>
    </header>
  )
}