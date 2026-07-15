import { about } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr,1.6fr] gap-12 md:gap-20">
        {/* sticky left column */}
        <div className="md:sticky md:top-28 self-start">
          <div className="text-xs font-bold uppercase tracking-wide text-indigo bg-indigo/10 inline-block px-3 py-1 rounded-full mb-6">
            Profile
          </div>

          {about.photo ? (
            <img
              src={about.photo}
              alt="Rahmat Syawaludin"
              className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-hairline mb-6"
              style={{
                filter: 'saturate(0.95)',
              }}
            />
          ) : (
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-hairline mb-6 bg-offwhite flex items-center justify-center text-xs text-faint text-center px-4">
              Photo placeholder
            </div>
          )}

          <ul className="flex flex-col gap-2.5">
            {about.credibilityPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-muted leading-snug">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* narrative */}
        <div>
          <div className="flex flex-col gap-5 text-[1.05rem] leading-[1.85] text-[#3a3c5e]">
            {about.narrative.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <blockquote className="mt-8 border-l-4 border-amber bg-amber/5 rounded-r-lg px-6 py-4 italic text-ink font-semibold text-lg">
            {about.closing}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
