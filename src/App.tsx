import { useLenis } from './hooks/useLenis'
import { Scene } from './components/Scene'
import 'lenis/dist/lenis.css'
import './App.css'

const features = [
  {
    title: 'Real-time 3D',
    body: 'GPU-accelerated scenes built with React Three Fiber, rendered straight to the canvas.',
  },
  {
    title: 'Smooth scroll',
    body: 'Buttery inertial scrolling powered by Lenis, ready for scroll-linked animation.',
  },
  {
    title: 'Production ready',
    body: 'Typed, tree-shaken, and built with Vite for instant HMR and clean production builds.',
  },
]

function App() {
  useLenis()

  return (
    <>
      <Scene />

      <header className="nav">
        <span className="nav__brand">IMMERSIVE</span>
        <nav className="nav__links">
          <a href="#features">Features</a>
          <a href="#cta">Start</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <p className="eyebrow">3D Web Starter · React · Three.js</p>

          <h1 className="hero__title">Build websites that feel alive.</h1>

          <p className="hero__copy">
            A premium dark starter for immersive websites with real-time 3D,
            smooth scrolling, and a clean modern interface.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#cta">
              Start building
            </a>
            <a className="btn btn--ghost" href="#features">
              See features
            </a>
          </div>
        </section>

        <section className="features" id="features">
          <p className="eyebrow">Core stack</p>
          <h2 className="section__title">Everything wired, nothing bloated.</h2>

          <div className="features__grid">
            {features.map((feature) => (
              <article className="card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta" id="cta">
          <p className="eyebrow">Next step</p>
          <h2 className="cta__title">Ship your first immersive scene.</h2>
          <p className="cta__copy">
            Replace the starter geometry with your own models, animation, and brand system.
          </p>
          <a className="btn btn--primary btn--lg" href="#top">
            Back to top
          </a>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Immersive</span>
        <span>React Three Fiber · Lenis · Vite</span>
      </footer>
    </>
  )
}

export default App
