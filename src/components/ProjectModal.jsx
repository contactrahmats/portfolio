import { useEffect } from 'react'

export default function ProjectModal({ project, kind, onClose }) {
  useEffect(() => {
    document.body.classList.add('modal-open')
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white w-full max-w-md rounded-2xl overflow-hidden shadow-lifted">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 shadow-soft flex items-center justify-center text-ink hover:bg-white"
        >
          ✕
        </button>

        <div className="relative h-44 bg-indigo/10">
          {project.photo ? (
            <img src={project.photo} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-faint text-xs">
              {kind === 'professional' ? 'Photo placeholder' : 'Screenshot placeholder'}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo/25 to-transparent" />
        </div>

        <div className="p-6">
          <div className="text-xs font-bold uppercase tracking-wide text-indigo mb-1">{project.org}</div>
          <h3 className="font-display font-bold text-xl text-ink mb-3">{project.title}</h3>
          <p className="text-sm text-muted leading-relaxed mb-5">{project.description}</p>

          {kind === 'professional' ? (
            <>
              <div className="text-xs font-bold uppercase tracking-wide text-teal-dark mb-2">Impact</div>
              <div className="text-sm font-semibold text-ink mb-5">{project.impact}</div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-offwhite text-muted border border-hairline">
                    {t}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="text-xs font-bold uppercase tracking-wide text-amber-dark mb-2">Built With</div>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.builtWith.map((t) => (
                  <span key={t} className="text-sm font-bold px-3 py-1.5 rounded-full bg-amber/15 text-amber-dark">
                    {t}
                  </span>
                ))}
              </div>
            </>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo text-white text-sm font-bold hover:bg-indigo-dark transition-colors"
            >
              {kind === 'professional' ? 'View Source' : 'View Live Demo'} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
