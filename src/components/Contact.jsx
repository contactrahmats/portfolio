import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <div className="text-xs font-bold uppercase tracking-wide text-teal-dark bg-teal/10 inline-block px-3 py-1 rounded-full mb-4">
            Get in Touch
          </div>
          <h2 className="font-display font-extrabold text-ink text-[clamp(1.9rem,3.5vw,2.8rem)] leading-tight mb-5">
            Let&rsquo;s build something meaningful.
          </h2>
          <p className="text-sm text-muted leading-relaxed mb-8 max-w-md">{contact.message}</p>

          <div className="flex flex-wrap gap-3 mb-5">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-indigo text-white text-sm font-bold hover:bg-indigo-dark transition-colors"
            >
              Email Me
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-indigo text-indigo text-sm font-bold hover:bg-indigo/5 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            {contact.secondary.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-muted hover:text-indigo underline underline-offset-4"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-indigo rounded-2xl p-8 text-white">
            <h3 className="font-display font-extrabold text-xl mb-3 flex items-center gap-2">
              <span className="text-xs">🟢</span> Open to Opportunities
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-5">
              Based in Jakarta, open to hybrid or on-site roles.
            </p>
            <div className="flex flex-wrap gap-2">
              {contact.openTo.map((r) => (
                <span
                  key={r}
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/85"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-offwhite rounded-2xl border border-hairline p-6 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center text-lg">
              📞
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wide text-muted">Phone</div>
              <div className="text-sm font-bold text-ink">{contact.phone}</div>
              <div className="text-xs text-muted">{contact.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
