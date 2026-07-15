# Rahmat Syawaludin — Portfolio

React + Vite + Tailwind CSS. Built from the full site spec (Hero, About, Featured
Case Studies, All Projects, Experience, Education, Skills, Publications, Contact).

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo.
2. Go to vercel.com, click "Add New Project", and import the repo.
3. Vercel auto-detects Vite, no configuration needed. Click Deploy.
4. Every push to your main branch auto-deploys; every branch/PR gets its own
   preview URL.

## What still needs your input

- **Photos**: every `photo: null` in `src/data/content.js` is a placeholder.
  Drop real images into `src/assets/`, import them at the top of
  `content.js`, and swap them in. Cards and modals already render placeholder
  boxes so nothing breaks until you do.
- **Résumé link**: currently points to the Google Drive link from your old
  site. Update in `src/data/content.js` (`hero.ctas`) and in `Navbar.jsx` /
  `Contact.jsx` if you move it elsewhere.
- **Case study photo overlay**: photos are meant to get a subtle indigo-toned
  treatment. Right now that's a CSS gradient overlay (`bg-gradient-to-t
  from-indigo/20...`) sitting on top of the image container. Once real
  photos are in, tweak the opacity in `CaseStudyModal.jsx`, `CaseStudies.jsx`,
  and `ProjectCard.jsx` to taste.

## Project structure

```
src/
  data/content.js       All copy lives here — edit text without touching components
  components/
    Navbar, Hero, About
    CaseStudies + CaseStudyModal      Flagship case studies (scrolling story + sticky timeline)
    Projects + ProjectCard
      + ProjectModal + HorizontalScrollRow   Standard project grid (horizontal scroll rows)
    ExperienceTimeline
    Education, Skills, Publications, Contact, Footer
    SignalMotif            The hero's signature "offline signal" element
```
