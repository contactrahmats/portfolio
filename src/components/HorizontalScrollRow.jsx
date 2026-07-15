import { useEffect, useRef, useState } from 'react'

export default function HorizontalScrollRow({ children, itemCount }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const scrollToIndex = (i) => {
    const track = trackRef.current
    if (!track) return
    const child = track.children[i]
    if (child) {
      track.scrollTo({ left: child.offsetLeft - 8, behavior: 'smooth' })
    }
  }

  const scrollBy = (dir) => {
    const next = Math.min(Math.max(active + dir, 0), itemCount - 1)
    scrollToIndex(next)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const children = Array.from(track.children)
      let closest = 0
      let closestDist = Infinity
      children.forEach((child, i) => {
        const dist = Math.abs(child.offsetLeft - track.scrollLeft)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })
      setActive(closest)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2"
      >
        {children}
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => scrollBy(-1)}
          disabled={active === 0}
          aria-label="Previous"
          className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center text-ink disabled:opacity-30 hover:border-indigo transition-colors"
        >
          ←
        </button>
        <div className="flex gap-1.5">
          {Array.from({ length: itemCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to item ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === active ? 'bg-amber' : 'bg-hairline'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => scrollBy(1)}
          disabled={active === itemCount - 1}
          aria-label="Next"
          className="w-8 h-8 rounded-full border border-hairline flex items-center justify-center text-ink disabled:opacity-30 hover:border-indigo transition-colors"
        >
          →
        </button>
      </div>
    </div>
  )
}
