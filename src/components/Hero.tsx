import { business } from '../data/site'

const stats = ['Design-Build', 'Turn-Key', 'Miami Luxury Homes']

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner container">
        <p className="eyebrow">{business.positioning}</p>

        <h1 className="hero__title">
          Custom luxury homes built for Miami living.
        </h1>

        <p className="hero__copy">
          {business.tagline}. MECA Homes designs and builds refined,
          move-in-ready residences across Miami’s finest neighborhoods with one
          accountable team from first sketch to final key.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary btn--lg" href="#contact">
            Start your project
          </a>
          <a className="btn btn--ghost btn--lg" href="#projects">
            View featured homes
          </a>
        </div>

        <ul className="hero__stats" aria-label="MECA Homes services">
          {stats.map((stat) => (
            <li className="hero__stat" key={stat}>
              <span className="hero__stat-label">{stat}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
