import { useEffect, useState } from 'react'
import { caseStudies } from '../data/content'
import CaseStudyModal from './CaseStudyModal'

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState(null)

  // allow other sections (e.g. Experience Timeline) to deep-link into a case study
  useEffect(() => {
    const handler = (e) => {
      const slug = e.detail?.slug
      const i = caseStudies.findIndex((cs) => cs.slug === slug)
      if (i !== -1) setOpenIndex(i)
    }
    window.addEventListener('open-case-study', handler)
    return () => window.removeEventListener('open-case-study', handler)
  }, [])

  return (
    <section id="case-studies" className="py-24 px-6 md:px-12 bg-offwhite">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="text-xs font-bold uppercase tracking-wide text-amber-dark bg-amber/15 inline-block px-3 py-1 rounded-full mb-4">
            Selected Work
          </div>
          <h2 className="font-display font-extrabold text-ink text-[clamp(1.9rem,3.5vw,2.8rem)] leading-tight">
            Featured Case Studies
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.slug}
              onClick={() => setOpenIndex(i)}
              className={`group text-left grid md:grid-cols-2 gap-0 bg-white rounded-2xl border border-hairline overflow-hidden hover:shadow-lifted hover:-translate-y-1 transition-all ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative h-56 md:h-auto bg-indigo/10">
                {cs.photo ? (
                  <img src={cs.photo} alt={cs.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-faint text-xs">
                    Photo placeholder
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo/25 to-transparent" />
              </div>

              <div className="p-8 flex flex-col justify-center">
                <div className="text-xs font-bold uppercase tracking-wide text-indigo mb-2">
                  {cs.org} · {cs.timeframe}
                </div>
                <h3 className="font-display font-bold text-xl text-ink mb-3">{cs.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">{cs.hook}</p>

                {/* mini timeline preview */}
                <div className="flex items-center gap-1.5 mb-4">
                  {cs.stages.map((_, si) => (
                    <span
                      key={si}
                      className={`w-2 h-2 rounded-full ${si === 0 ? 'bg-amber' : 'bg-hairline'}`}
                    />
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {cs.badges.map((b) => (
                    <span
                      key={b}
                      className="text-xs font-bold px-3 py-1 rounded-full bg-indigo/10 text-indigo"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <span className="text-sm font-bold text-indigo group-hover:text-indigo-dark inline-flex items-center gap-1">
                  Read the Full Story →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <CaseStudyModal
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={(i) => setOpenIndex(i)}
        />
      )}
    </section>
  )
}
