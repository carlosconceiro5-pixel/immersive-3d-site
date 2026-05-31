import { projects } from '../data/site'

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Selected work</p>
          <h2 className="section__title">A glimpse of what we build.</h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div
                className="project-card__media"
                style={{ backgroundImage: `url(${project.image})` }}
                role="img"
                aria-label={project.alt}
              >
                <span className="project-card__tag">{project.tag}</span>
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__location">{project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
