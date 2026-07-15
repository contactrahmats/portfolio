import { useEffect, useRef, useState } from 'react'
import { caseStudies } from '../data/content'

export default function CaseStudyModal({ index, onClose, onNavigate }) {
  const cs = caseStudies[index]
  const scrollRef = useRef(null)
  const stageRefs = useRef([])
  const [activeStage, setActiveStage] = useState(0)

  // lock background scroll while modal is open
  useEffect(() => {
    document.body.classList.add('modal-open')
    return () => document.body.classList.remove('modal-open')
  }, [])

  // reset scroll + active stage whenever we switch case studies
  useEffect(() => {
    setActiveStage(0)
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [index])

  // close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // scroll-spy: highlight the stage dot that's currently in view
  useEffect(() => {
    const root = scrollRef.current
    if (!root) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = Number(entry.target.dataset.stageIndex)
            setActiveStage(i)
          }
        })
      },
      { root, rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    stageRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [index])

  const nextIndex = (index + 1) % caseStudies.length

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6">
      {/* backdrop */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white w-full md:max-w-3xl h-full md:h-[90vh] md:rounded-3xl overflow-hidden flex flex-col shadow-lifted">
        {/* close button */}
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 shadow-soft flex items-center justify-center text-ink hover:bg-white"
        >
          ✕
        </button>

        {/* scrollable content, this whole area scrolls, timeline stays sticky within it */}
        <div ref={scrollRef} className="overflow-y-auto flex-1">
          {/* hero photo */}
          <div className="relative h-56 md:h-72 bg-indigo/10">
            {cs.photo ? (
              <img src={cs.photo} alt={cs.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-faint text-sm">
                Photo placeholder
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <div className="text-xs font-bold uppercase tracking-wide text-white/80 mb-1">
                {cs.org} · {cs.timeframe}
              </div>
              <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">{cs.title}</h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {cs.badges.map((b) => (
                  <span key={b} className="text-xs font-bold px-3 py-1 rounded-full bg-white/90 text-indigo">
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* sticky stage timeline */}
          <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-hairline px-6 md:px-8 py-4">
            <div className="flex items-center gap-2 md:gap-4">
              {cs.stages.map((stage, i) => (
                <div key={stage.label} className="flex items-center gap-2 md:gap-4 flex-1">
                  <div className="flex flex-col items-center gap-1.5 flex-1">
                    <span
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i <= activeStage ? 'bg-amber' : 'bg-hairline'
                      }`}
                    />
                    <span
                      className={`text-[10px] md:text-xs font-bold text-center leading-tight transition-colors ${
                        i === activeStage ? 'text-ink' : 'text-faint'
                      }`}
                    >
                      {stage.label}
                    </span>
                  </div>
                  {i < cs.stages.length - 1 && (
                    <span
                      className={`h-0.5 flex-1 -mt-4 transition-colors ${
                        i < activeStage ? 'bg-amber' : 'bg-hairline'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* stage content, scrolling storytelling */}
          <div className="px-6 md:px-8">
            {cs.stages.map((stage, i) => (
              <div
                key={stage.label}
                data-stage-index={i}
                ref={(el) => (stageRefs.current[i] = el)}
                className="py-10 border-b border-hairline last:border-b-0"
              >
                <div className="text-xs font-bold uppercase tracking-wide text-teal-dark mb-3">
                  {stage.label}
                </div>
                <p className="text-[1.05rem] leading-[1.85] text-[#3a3c5e]">{stage.body}</p>
              </div>
            ))}
          </div>

          {/* footer: tags, link, next case study */}
          <div className="px-6 md:px-8 py-8 bg-offwhite">
            <div className="flex flex-wrap gap-2 mb-6">
              {cs.tags.map((t) => (
                <span key={t} className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-muted border border-hairline">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              {cs.externalLink ? (
                <a
                  href={cs.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-indigo hover:text-indigo-dark"
                >
                  View Source ↗
                </a>
              ) : (
                <span />
              )}

              <button
                onClick={() => onNavigate(nextIndex)}
                className="text-sm font-bold text-ink hover:text-indigo inline-flex items-center gap-1"
              >
                Next Case Study: {caseStudies[nextIndex].title} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
