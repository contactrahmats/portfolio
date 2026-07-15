import { experience } from '../data/content'

const DOT_COLOR = {
  ld: 'bg-indigo',
  edu: 'bg-teal',
  org: 'bg-amber',
  tech: 'bg-[#7c6fda]',
}

const LEGEND = [
  { key: 'ld', label: 'Learning & Instructional Design' },
  { key: 'edu', label: 'Teaching & Education' },
  { key: 'org', label: 'Organisation & Leadership' },
  { key: 'tech', label: 'Technology' },
]

function openCaseStudy(slug) {
  document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' })
  // give the scroll a moment before opening the modal
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent('open-case-study', { detail: { slug } }))
  }, 400)
}

function handleTimelineClick(slug) {
  if (!slug) return;

  // 1. Identify your flagship case study slugs
  const flagshipSlugs = ['babar-kalesang', 'monash-capstone', 'ar-manner'];

  if (flagshipSlugs.includes(slug)) {
    // Scroll to case studies container and fire the custom event listener
    document.querySelector('#case-studies')?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('open-case-study', { detail: { slug } }));
    }, 400);
  } else {
    // 2. Fallback: Treat it as a standard anchor scroll target (e.g., #projects)
    // If you want 'can' to land on the professional work section, target its container wrapper:
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wide text-teal-dark bg-teal/10 inline-block px-3 py-1 rounded-full mb-4">
            Career Journey
          </div>
          <h2 className="font-display font-extrabold text-ink text-[clamp(1.9rem,3.5vw,2.8rem)] leading-tight">
            Experience
          </h2>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
          {LEGEND.map((l) => (
            <div key={l.key} className="flex items-center gap-2 text-xs font-semibold text-muted uppercase tracking-wide">
              <span className={`w-2.5 h-2.5 rounded-full ${DOT_COLOR[l.key]}`} />
              {l.label}
            </div>
          ))}
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* vertical line */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-0.5 bg-hairline md:-translate-x-1/2" />

          <div className="flex flex-col gap-8">
            {experience.map((e, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={e.role + e.period}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 ${isLeft ? '' : ''}`}
                >
                  <span
                    className={`absolute left-0 md:left-1/2 top-1.5 md:-translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-white ${DOT_COLOR[e.category]}`}
                  />
                  <div className={`md:contents`}>
                    <div className={isLeft ? 'md:text-right md:pr-10' : 'md:col-start-2 md:pl-10'}>
                      <div className="text-[11px] font-bold uppercase tracking-wide text-faint mb-1">
                        {e.period}
                      </div>
                      <div className="font-display font-bold text-base text-ink">{e.role}</div>
                      <div className="text-xs font-bold uppercase tracking-wide text-indigo mb-2">
                        {e.org}
                      </div>
                      <p className="text-sm text-muted leading-snug">
                        {e.oneLiner}{' '}
                        {e.linkTo && (
                          <button
                            onClick={() => openCaseStudy(e.linkTo)}
                            className="font-bold text-teal-dark hover:text-teal-dark/80 whitespace-nowrap"
                          >
                            Read the case study →
                          </button>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
