import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import About from './components/About'
import Skills from './components/Skills'
import AIFocus from './components/AIFocus'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <AIFocus />
        <Education />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
