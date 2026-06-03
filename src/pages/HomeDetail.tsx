import { Link, useParams } from 'react-router-dom'
import { homes } from '../data/homes'

export function HomeDetail() {
  const { slug } = useParams()
  const home = homes.find((item) => item.slug === slug)

  if (!home) {
    return (
      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Residence not found</p>
            <h1 className="section__title">This residence could not be found.</h1>
          </div>

          <Link className="btn btn--primary" to="/projects">
            Back to residences
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">
            {home.tag} · {home.status}
          </p>
          <h1 className="section__title">{home.title}</h1>
          <p className="section__intro">{home.location}</p>
        </div>

        <img
          src={home.image}
          alt={home.alt}
          style={{
            width: '100%',
            maxHeight: '620px',
            objectFit: 'cover',
            borderRadius: '24px',
            marginBottom: '2rem',
          }}
        />

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

        <p className="section__intro">
          Price: <strong>{home.price}</strong>
        </p>

        <p className="section__intro">
          This residence showcases MECA Homes’ approach to luxury design-build
          construction, refined finishes, disciplined execution, and turn-key
          delivery. Full details and availability can be requested directly.
        </p>

        <div className="hero__actions">
          <a
            className="btn btn--primary btn--lg"
            href={`mailto:Info@meca-homes.com?subject=Inquiry: ${home.title}`}
          >
            Inquire about this home
          </a>

          <Link className="btn btn--ghost btn--lg" to="/projects">
            Back to residences
          </Link>
        </div>
      </div>
    </section>
  )
}
