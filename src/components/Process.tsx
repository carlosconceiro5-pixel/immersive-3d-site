import { process } from '../data/site'

export function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">The process</p>
          <h2 className="section__title">A clear path to a finished home.</h2>
        </div>

        <ol className="process__grid">
          {process.map((item) => (
            <li className="process-step" key={item.step}>
              <span className="process-step__num">{item.step}</span>
              <h3 className="process-step__title">{item.title}</h3>
              <p className="process-step__copy">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
