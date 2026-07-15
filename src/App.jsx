import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CaseStudies from './components/CaseStudies'
import Projects from './components/Projects'
import ExperienceTimeline from './components/ExperienceTimeline'
import Education from './components/Education'
import Skills from './components/Skills'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CaseStudies />
      <Projects />
      <ExperienceTimeline />
      <Education />
      <Skills />
      <Publications />
      <Contact />
      <Footer />
      <Analytics />
    </>
  )
}
