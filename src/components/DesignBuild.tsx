const pillars = [
  {
    title: 'Design-Build',
    body: 'Design and construction live under one process and one accountable team. Fewer handoffs, fewer surprises, a clearer path from concept to completion.',
  },
  {
    title: 'Turn-Key',
    body: 'We carry the project through permitting, construction, and finishing. You receive a complete, move-in-ready home with nothing left undone.',
  },
]

export function DesignBuild() {
  return (
    <section className="section designbuild" id="design-build">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">How we work</p>
          <h2 className="section__title">
            One team, from first sketch to final key.
          </h2>
          <p className="section__intro">
            Most builds split design and construction across separate firms,
            creating friction and budget surprises. MECA Homes unifies both for a
            single, seamless experience.
          </p>
        </div>

        <div className="db__grid">
          {pillars.map((pillar) => (
            <article className="db__pillar" key={pillar.title}>
              <h3 className="db__pillar-title">{pillar.title}</h3>
              <p className="db__pillar-copy">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
