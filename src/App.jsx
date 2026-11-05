import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
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
import { useView } from './lib/view'

export default function App() {
  // route groups pages in Analytics (e.g. /work/[slug]); path is the exact page
  const view = useView()
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
      <Analytics route={view.route} path={view.path} />
      <SpeedInsights />
    </>
  )
}
