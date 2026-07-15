import { publications } from '../data/content'

const GROUPS = [
  { key: 'publications', label: 'Publications', icon: '\ud83d\udcc4' },
  { key: 'patents', label: 'Patents', icon: '\ud83c\udfc5' },
  { key: 'awards', label: 'Awards & Scholarships', icon: '\ud83c\udf93' },
]

export default function Publications() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wide text-amber-dark bg-amber/15 inline-block px-3 py-1 rounded-full mb-4">
            Research &amp; Recognition
          </div>
          <h2 className="font-display font-extrabold text-ink text-[clamp(1.9rem,3.5vw,2.8rem)] leading-tight">
            Publications, Patents &amp; Awards
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {GROUPS.map((g) => (
            <div key={g.key}>
              <h3 className="text-xs font-bold uppercase tracking-wide text-muted mb-4">{g.label}</h3>
              <ul className="flex flex-col gap-3">
  {publications[g.key].map((item) => (
    <li
      key={item.title}
      className="flex items-start gap-3 bg-offwhite rounded-xl border border-hairline px-5 py-4 text-sm leading-snug"
    >
      <span aria-hidden="true">{g.icon}</span>
      {item.url ? (
        
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo font-semibold hover:underline"
        >
          {item.title} ↗
        </a>
      ) : (
        <span className="text-ink">{item.title}</span>
      )}
    </li>
  ))}
</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
