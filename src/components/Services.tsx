import { services } from '../data/site'

export function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">What we do</p>
          <h2 className="section__title">Full-service luxury construction.</h2>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__copy">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
