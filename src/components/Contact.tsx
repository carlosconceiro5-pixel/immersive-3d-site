import { contact } from '../data/site'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <p className="eyebrow">Contact</p>
        <h2 className="section__title contact__title">{contact.heading}</h2>
        <p className="contact__copy">{contact.body}</p>

        <div className="contact__actions">
          {contact.phones.map((phone) => (
            <a
              className="btn btn--primary btn--lg"
              key={phone.tel}
              href={`tel:${phone.tel}`}
            >
              {phone.language}: {phone.label}
            </a>
          ))}
          <a className="btn btn--ghost btn--lg" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        </div>
      </div>
    </section>
  )
}
