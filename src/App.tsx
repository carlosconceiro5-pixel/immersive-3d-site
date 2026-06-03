import { Route, Routes } from 'react-router-dom'
import { useLenis } from './hooks/useLenis'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { DesignBuild } from './components/DesignBuild'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { HomeDetail } from './pages/HomeDetail'
import 'lenis/dist/lenis.css'
import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <DesignBuild />
      <Process />
      <About />
      <Contact />
    </>
  )
}

function Investors() {
  return (
    <section className="section" id="investors">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">Investors</p>
          <h1 className="section__title">
            Development investment and partnership opportunities.
          </h1>
        </div>

        <p className="section__intro">
          MECA Homes welcomes inquiries from private investors, landowners, and
          strategic partners interested in luxury residential development, joint
          ventures, land development partnerships, and private capital
          opportunities.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary btn--lg" href="mailto:Info@meca-homes.com">
            Inquire about investing
          </a>
          <a className="btn btn--ghost btn--lg" href="/contact">
            Contact MECA Homes
          </a>
        </div>
      </div>
    </section>
  )
}

function App() {
  useLenis()

  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<HomeDetail />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
