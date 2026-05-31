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
import 'lenis/dist/lenis.css'
import './App.css'

function App() {
  useLenis()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <DesignBuild />
        <Process />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
