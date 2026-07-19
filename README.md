# Portfolio

My personal portfolio site, built to replace an earlier single-page HTML version
with something more structured and easier to maintain.

**Live site:** https://rahmats.web.id

## Stack

React + Vite, styled with Tailwind CSS. No backend, all content lives in
`src/data/content.js` as plain JS objects, so updating text, projects, or
timeline entries doesn't require touching any component code.

## Structure

- **Hero, About** — intro and background
- **Case Studies** — three flagship projects (Babar Kalesang, a Monash
  capstone, and a patented AR research project), each opens into a scrolling
  detail view with a stage-by-stage breakdown of the process
- **Projects** — everything else, split into professional work and
  self-initiated builds, browsable as horizontal scroll rows
- **Experience, Education, Skills, Publications, Contact**

Some Experience Timeline entries link directly into the matching Case Study
or Project card (via a small custom event system between components, see
`ExperienceTimeline.jsx` / `CaseStudies.jsx` / `Projects.jsx`).

## Running locally

```bash
npm install
npm run dev
```

## Deployment

Deployed on Vercel, auto-builds on push to `main`.
