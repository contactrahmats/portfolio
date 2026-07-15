export default function ProjectCard({ project, kind, onClick }) {
  return (
    <button
      onClick={onClick}
      className="snap-start shrink-0 w-[280px] md:w-[300px] text-left bg-white rounded-2xl border border-hairline overflow-hidden hover:shadow-lifted hover:-translate-y-1 transition-all"
    >
      <div className="relative h-40 bg-indigo/10">
        {project.photo ? (
          <img src={project.photo} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-faint text-xs">
            {kind === 'professional' ? 'Photo placeholder' : 'Screenshot placeholder'}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo/20 to-transparent" />
      </div>

      <div className="p-5">
        <div className="text-[11px] font-bold uppercase tracking-wide text-indigo mb-1">
          {project.org}
        </div>
        <h3 className="font-display font-bold text-base text-ink mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-muted leading-relaxed line-clamp-3 mb-3">{project.description}</p>

        {kind === 'professional' ? (
          project.impact && (
            <div className="text-xs font-bold text-teal-dark">{project.impact}</div>
          )
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {project.builtWith?.slice(0, 3).map((t) => (
              <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber/15 text-amber-dark">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  )
}
