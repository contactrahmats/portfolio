import { skills, certifications } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-indigo">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wide text-white/80 bg-white/15 inline-block px-3 py-1 rounded-full mb-4">
            Capabilities
          </div>
          <h2 className="font-display font-extrabold text-white text-[clamp(1.9rem,3.5vw,2.8rem)] leading-tight">
            Skills &amp; Tools
          </h2>
        </div>

        <div className="mb-4 text-xs font-bold uppercase tracking-wide text-amber">Core</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mb-12">
          {skills.core.map((s) => (
            <div
              key={s}
              className="rounded-xl border border-amber/30 bg-amber/10 px-5 py-4 text-white font-semibold text-sm leading-snug"
            >
              {s}
            </div>
          ))}
        </div>

        <div className="mb-4 text-xs font-bold uppercase tracking-wide text-white/60">Familiar With</div>
        <div className="flex flex-wrap gap-2 mb-12">
          {skills.familiar.map((s) => (
            <span
              key={s}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white/70 border border-white/10"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mb-4 text-xs font-bold uppercase tracking-wide text-amber">Certifications</div>
        <div className="flex flex-wrap gap-3">
          {certifications.map((c) => (
            <a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 hover:border-amber/40 transition-colors"
            >
              <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-amber/15 border border-amber/30">
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-amber" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
                </svg>
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold text-white leading-snug group-hover:text-amber transition-colors">
                  {c.title}
                </span>
                <span className="block text-xs text-white/50">
                  {c.issuer} &middot; {c.date}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
