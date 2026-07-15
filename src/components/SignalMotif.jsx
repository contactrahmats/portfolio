import { useEffect, useState } from 'react'

// The site's one signature visual: a row of signal bars that fills in on load,
// echoing the "designed offline-first" throughline in the copy.
export default function SignalMotif({ className = '' }) {
  const [filled, setFilled] = useState(0)
  const bars = 5

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i += 1
      setFilled(i)
      if (i >= bars) clearInterval(id)
    }, 180)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={`flex items-end gap-1 ${className}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, idx) => {
        const active = idx < filled
        const height = 6 + idx * 4
        return (
          <span
            key={idx}
            style={{ height }}
            className={`w-1.5 rounded-sm transition-colors duration-300 ${
              active ? 'bg-amber' : 'bg-hairline'
            }`}
          />
        )
      })}
    </div>
  )
}
