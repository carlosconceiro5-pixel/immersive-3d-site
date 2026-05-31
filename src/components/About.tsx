import { about } from '../data/site'

export function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__head">
          <p className="eyebrow">About MECA Homes</p>
          <h2 className="section__title">{about.heading}</h2>
        </div>
        <p className="about__body">{about.body}</p>
      </div>
    </section>
  )
}
