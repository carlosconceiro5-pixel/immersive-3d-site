import { business } from '../data/site'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__inner container">
        <p className="eyebrow">{business.positioning}</p>
        <h1 className="hero__title">
          Luxury custom homes,
          <br />
          built for the way Miami lives.
        </h1>
        <p className="hero__copy">
          {business.tagline}. From first sketch to final key, MECA Homes designs
          and builds refined waterfront residences with a single, accountable
          team.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary btn--lg" href="#contact">
            Start your project
          </a>
          <a className="btn btn--ghost btn--lg" href="tel:+17868157706">
            Call 786-815-7706
          </a>
        </div>
      </div>
    </section>
  )
}
