import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('modal-open', open)
  }, [open])

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 md:px-12 py-4 bg-white/90 backdrop-blur-md border-b border-hairline transition-shadow ${
          scrolled ? 'shadow-card' : ''
        }`}
      >
        <a href="#hero" className="font-display font-extrabold text-indigo text-lg tracking-tight">
          RS
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-muted hover:text-indigo hover:bg-offwhite rounded-full px-3 py-2 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1-2igf2luJsMVtNlFo-W2X5kLxV7RHmle/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-block px-4 py-2 rounded-full bg-indigo text-white text-sm font-bold hover:bg-indigo-dark transition-colors"
            >
              {'Resum\u00e9 \u2197'}
            </a>
          </li>
        </ul>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 bg-offwhite rounded-lg"
        >
          <span className="h-0.5 bg-indigo rounded mx-2" />
          <span className="h-0.5 bg-indigo rounded mx-2" />
          <span className="h-0.5 bg-indigo rounded mx-2" />
        </button>
      </nav>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-50 bg-indigo flex flex-col justify-center items-start px-8 gap-6 transition-all duration-300 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          aria-label="Close menu"
          className="absolute top-6 right-6 text-white bg-white/10 rounded-lg px-3 py-2"
        >
          ✕
        </button>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-2xl font-bold text-white/70 hover:text-amber transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
