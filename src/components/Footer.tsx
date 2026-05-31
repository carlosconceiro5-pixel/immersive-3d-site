import { business } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__name">{business.name}</span>
          <span className="footer__tag">{business.tagline}</span>
        </div>

        <div className="footer__contact">
          <a href={`mailto:${business.email}`}>{business.email}</a>
          {business.phones.map((phone) => (
            <a key={phone.tel} href={`tel:${phone.tel}`}>
              {phone.language}: {phone.label}
            </a>
          ))}
        </div>

        <p className="footer__meta">
          © {new Date().getFullYear()} {business.name} · {business.domain}
        </p>
      </div>
    </footer>
  )
}
