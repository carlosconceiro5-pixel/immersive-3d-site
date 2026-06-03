import { Link } from 'react-router-dom'
import { homes } from '../data/homes'

function statusModifier(status: string) {
  return status.toLowerCase().replaceAll(' ', '-')
}

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Featured homes</p>
          <h2 className="section__title">Available &amp; recent residences.</h2>
        </div>

        <div className="projects__grid">
          {homes.map((home) => (
            <article className="project-card" key={home.slug}>
              <div className="project-card__media">
                <img
                  src={home.image}
                  alt={home.alt}
                  className="project-card__image"
                  loading="lazy"
                />
                <span
                  className={`project-card__status project-card__status--${statusModifier(
                    home.status,
                  )}`}
                >
                  {home.status}
                </span>
                <span className="project-card__tag">{home.tag}</span>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{home.title}</h3>
                <p className="project-card__location">{home.location}</p>

                <ul className="project-card__specs">
                  <li>
                    <strong>{home.beds}</strong> Beds
                  </li>
                  <li>
                    <strong>{home.baths}</strong> Baths
                  </li>
                  <li>
                    <strong>{home.sqft}</strong> Sq Ft
                  </li>
                </ul>

                <div className="project-card__footer">
                  <span className="project-card__price">{home.price}</span>
                  <Link className="project-card__link" to={`/projects/${home.slug}`}>
                    View home
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
