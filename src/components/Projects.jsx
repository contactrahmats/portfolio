import { useState } from 'react'
import { professionalWork, selfInitiated } from '../data/content'
import HorizontalScrollRow from './HorizontalScrollRow'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [active, setActive] = useState(null) // { project, kind }

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wide text-teal-dark bg-teal/10 inline-block px-3 py-1 rounded-full mb-4">
            All Projects
          </div>
          <h2 className="font-display font-extrabold text-ink text-[clamp(1.9rem,3.5vw,2.8rem)] leading-tight">
            Professional work &amp; self-initiated builds
          </h2>
        </div>

        <div className="mb-16">
          <h3 className="font-display font-bold text-lg text-ink mb-1">Professional Work</h3>
          <p className="text-sm text-muted mb-6">Real-world programs I&rsquo;ve led.</p>
          <HorizontalScrollRow itemCount={professionalWork.length}>
            {professionalWork.map((p) => (
              <ProjectCard
                key={p.title}
                project={p}
                kind="professional"
                onClick={() => setActive({ project: p, kind: 'professional' })}
              />
            ))}
          </HorizontalScrollRow>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg text-ink mb-1">Self-Initiated Projects</h3>
          <p className="text-sm text-muted mb-6">Independent projects exploring ideas beyond formal work.</p>
          <HorizontalScrollRow itemCount={selfInitiated.length}>
            {selfInitiated.map((p) => (
              <ProjectCard
                key={p.title}
                project={p}
                kind="self"
                onClick={() => setActive({ project: p, kind: 'self' })}
              />
            ))}
          </HorizontalScrollRow>
        </div>
      </div>

      {active && (
        <ProjectModal project={active.project} kind={active.kind} onClose={() => setActive(null)} />
      )}
    </section>
  )
}
