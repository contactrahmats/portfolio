// Tiny URL + analytics state for the one-page site.
//
// Vercel Web Analytics on the Hobby plan only counts page views per URL
// (custom events are paid). So each thing worth measuring gets its own URL:
//   /work/<slug>     a featured case study was opened
//   /project/<slug>  a project card was opened
//   /cl, /cv, ...    a visitor arrived from a tagged link (cover letter, resume, ...)
// Every view change is sent to <Analytics route path /> in App.jsx.

import { useSyncExternalStore } from 'react'

// Tagged entry links. Put these in applications instead of the bare domain.
export const SOURCE_PATHS = ['cl', 'cv', 'glints', 'jobstreet', 'indeed', 'wa']

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function projectSlug(project) {
  return project.slug || slugify(project.title)
}

function parseItem(pathname) {
  const m = pathname.match(/^\/(work|project)\/([^/]+)\/?$/)
  return m ? { kind: m[1], slug: decodeURIComponent(m[2]) } : null
}

function itemView(item) {
  return { route: `/${item.kind}/[slug]`, path: `/${item.kind}/${item.slug}` }
}

function initialState() {
  if (typeof window === 'undefined') return { open: null, view: { route: '/', path: '/' } }
  const { pathname } = window.location
  const open = parseItem(pathname)
  if (open) return { open, view: itemView(open) }

  const segment = pathname.replace(/^\/+|\/+$/g, '').toLowerCase()
  if (SOURCE_PATHS.includes(segment)) {
    // Record the tagged entry, then show the clean homepage URL.
    window.history.replaceState(window.history.state, '', '/' + window.location.hash)
    return { open: null, view: { route: `/${segment}`, path: `/${segment}` } }
  }
  return { open: null, view: { route: pathname || '/', path: pathname || '/' } }
}

let state = initialState()
let pushedByUs = false
const listeners = new Set()

function set(next) {
  state = { ...state, ...next }
  listeners.forEach((l) => l())
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function openItem(kind, slug) {
  if (!slug) return
  const item = { kind, slug }
  const path = `/${kind}/${slug}`
  if (state.open) {
    // switching directly between items (e.g. "Next case study")
    window.history.replaceState(window.history.state, '', path)
  } else {
    window.history.pushState(window.history.state, '', path)
    pushedByUs = true
  }
  set({ open: item, view: itemView(item) })
}

export function closeItem() {
  if (!state.open) return
  if (pushedByUs) {
    pushedByUs = false
    window.history.back() // popstate below clears `open`
  } else {
    // visitor landed directly on /work/<slug>; go to the homepage URL
    window.history.replaceState(window.history.state, '', '/')
    set({ open: null })
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => {
    const item = parseItem(window.location.pathname)
    if (!item) {
      pushedByUs = false
      set({ open: null }) // closing doesn't count as a new page view
    } else if (!state.open || state.open.kind !== item.kind || state.open.slug !== item.slug) {
      set({ open: item, view: itemView(item) })
    }
  })
}

export function useOpenSlug(kind) {
  return useSyncExternalStore(subscribe, () =>
    state.open && state.open.kind === kind ? state.open.slug : null
  )
}

export function useView() {
  return useSyncExternalStore(subscribe, () => state.view)
}
