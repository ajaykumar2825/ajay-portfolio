# Ajay Kumar Kanamu — Portfolio

A dark, motion-driven portfolio site built with React (Vite), Tailwind CSS, and Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # serves the production build locally, to double-check it
```

The static output lands in `dist/` — you can deploy that folder as-is to Netlify, Vercel,
GitHub Pages, or any static host.

## Before you publish — a few placeholders to update

- **Resume**: the "Download Resume" button links to `/resume.pdf`. Drop your actual resume PDF
  into the `public/` folder with that exact filename.
- **Contact links**: in `src/components/Footer.jsx`, replace the `SOCIAL_LINKS` placeholders
  (email, LinkedIn, GitHub) with your real ones. The "Say Hello" button in the same file also
  points at the placeholder email.
- **Project links**: in `src/components/RecentWorks.jsx`, the "Explore Project" and
  "View All Projects" buttons currently point at `https://github.com/` as a placeholder —
  swap in your actual repo/demo links per project.

## File structure

```
src/
  App.jsx              # renders all sections in order
  index.css            # Tailwind directives + global styles
  components/
    Navbar.jsx          # fixed glass nav with mobile menu
    Hero.jsx             # intro + draggable floating ID card
    About.jsx            # bio, stats, toolkit chips
    RecentWorks.jsx      # 3D stacked project deck
    Experience.jsx       # internships timeline + education card
    Services.jsx         # accordion — the data analytics workflow
    Footer.jsx            # contact section
public/
  profile.jpg           # your portrait, used in the Hero ID card
```

## Design tokens

- Background `#0d1116`, surface `#14181f`, accent `#00df8f`
- Display font: Space Grotesk · Body font: Inter (loaded via Google Fonts in `index.html`)
- Colors and fonts are wired into `tailwind.config.js` as `bg`, `surface`, `accent`,
  `accentDark`, `font-display`, and `font-sans`.
