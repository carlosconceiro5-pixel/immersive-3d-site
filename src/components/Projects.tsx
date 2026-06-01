const homes = [
  {
    title: 'Bayfront Modern',
    location: 'Miami Beach, FL',
    tag: 'Custom Build',
    status: 'Available',
    beds: 5,
    baths: 6,
    sqft: '8,200',
    price: '$12.5M',
    palette: 'a',
    alt: 'Modern waterfront Miami mansion with white stone, glass, and warm lighting.',
  },
  {
    title: 'Palm Court Estate',
    location: 'Coral Gables, FL',
    tag: 'Design-Build',
    status: 'Under Construction',
    beds: 6,
    baths: 7,
    sqft: '9,400',
    price: 'Inquire',
    palette: 'b',
    alt: 'Luxury Miami estate with palm-lined entry and contemporary architecture.',
  },
  {
    title: 'Glass House',
    location: 'Coconut Grove, FL',
    tag: 'Turn-Key',
    status: 'Sold',
    beds: 4,
    baths: 5,
    sqft: '6,800',
    price: 'Sold',
    palette: 'c',
    alt: 'Modern glass and stone residence surrounded by tropical landscaping.',
  },
  {
    title: 'Sunset Isles Villa',
    location: 'Miami, FL',
    tag: 'Custom Build',
    status: 'Available',
    beds: 5,
    baths: 6,
    sqft: '7,600',
    price: '$9.8M',
    palette: 'd',
    alt: 'Contemporary Miami villa with infinity pool and floor-to-ceiling glass.',
  },
] as const

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
            <article className="project-card" key={home.title}>
              <div
                className={`project-card__media project-card__media--${home.palette}`}
                role="img"
                aria-label={home.alt}
              >
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
                  <a className="project-card__link" href="#contact">
                    View home
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
