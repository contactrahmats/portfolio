import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-12 bg-offwhite">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wide text-indigo bg-indigo/10 inline-block px-3 py-1 rounded-full mb-4">
            Academic Background
          </div>
          <h2 className="font-display font-extrabold text-ink text-[clamp(1.9rem,3.5vw,2.8rem)] leading-tight">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {education.map((ed) => (
            <div
              key={ed.degree}
              className="relative bg-white rounded-2xl border border-hairline border-t-4 border-t-indigo p-7"
            >
              <span className="absolute top-6 right-6 text-[11px] font-bold uppercase tracking-wide bg-indigo/10 text-indigo px-3 py-1 rounded-full">
                {ed.flag}
              </span>
              <h3 className="font-display font-bold text-lg text-ink pr-24 mb-1 leading-snug">
                {ed.degree}
              </h3>
              <div className="text-sm font-bold text-indigo uppercase tracking-wide mb-1">
                {ed.school}
              </div>
              <div className="text-xs text-muted mb-5">{ed.year}</div>

              {ed.transcript && (
                <div className="grid grid-cols-2 gap-2">
                  {ed.transcript.map((t) => (
                    <div key={t.subject} className="bg-offwhite rounded-lg border border-hairline p-3">
                      <div className="font-extrabold text-indigo text-sm">{t.grade}</div>
                      <div className="text-xs text-muted mt-0.5 leading-snug">{t.subject}</div>
                    </div>
                  ))}
                </div>
              )}

              {ed.highlights && (
                <ul className="flex flex-col gap-2 mt-2">
                  {ed.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted leading-snug">
                      <span className="text-teal font-bold mt-0.5">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {ed.proof && (
  
    href={ed.proof}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-indigo hover:text-indigo-dark"
  >
    View Credentials ↗
  </a>
)}
          
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
