import { hero } from '../data/content'
import SignalMotif from './SignalMotif'

const CTA_STYLES = {
  primary: 'bg-indigo text-white hover:bg-indigo-dark shadow-[0_4px_16px_rgba(47,49,133,0.3)]',
  amber: 'bg-amber text-ink hover:bg-amber-dark shadow-[0_4px_16px_rgba(255,184,0,0.3)]',
  ghost: 'bg-transparent text-indigo border-2 border-hairline hover:border-indigo hover:bg-offwhite',
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-16 bg-offwhite relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(255,184,0,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-[360px] h-[360px] rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(28,189,179,0.12) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto w-full relative z-10">
        <SignalMotif className="mb-6" />

        <span className="text-sm font-bold uppercase tracking-wide text-muted">{hero.greeting}</span>
        <h1 className="font-display font-extrabold text-ink leading-[0.95] tracking-tight text-[clamp(2.6rem,7vw,4.6rem)] mt-1">
          {hero.name}
        </h1>

        <p className="mt-6 text-xl md:text-2xl font-semibold text-ink max-w-xl leading-snug">
          {hero.hook}
        </p>

        <p className="mt-4 text-sm md:text-base text-muted max-w-xl">{hero.roleLine}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {hero.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target={cta.external ? '_blank' : undefined}
              rel={cta.external ? 'noopener noreferrer' : undefined}
              className={`inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all hover:-translate-y-0.5 ${CTA_STYLES[cta.style]}`}
            >
              {cta.label}
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-faint uppercase tracking-wide border-t border-hairline pt-4">
          {hero.credentials.map((c) => (
            <span key={c}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
