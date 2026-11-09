# AGENTS.md

Single-package Vite + React 19 SPA (personal portfolio). All source lives in `src/`; there is no backend, monorepo, test runner, or typecheck — plain JSX/JS only. Don't add TypeScript config or expect `tsc`.

## Commands

- `npm run dev` — dev server on http://localhost:5173
- `npm run build` / `npm run preview` — production bundle / preview (`dist/`, git-ignored)
- `npm run lint` — oxlint with no config file (defaults only). Run this before finishing any change; it's the only automated check in the repo.
- No tests exist. Don't fabricate a test workflow or attempt "run single test"; verification = `npm run lint` + manual dev-server check.

## Tailwind CSS v4 (CSS-first)

- There is no `tailwind.config.*`. All theming is in `src/index.css`, which is loaded only via `@import "tailwindcss"` at its top — keep that import.
- Custom `@theme` tokens in `src/index.css`: surfaces `elev/card/panel`, borders `line`, text `fg/muted`, accents `neon/electric/vio/lilac`, and dark ink `ink` (`bg-ink`, not `bg-base` — a `base` color token was deliberately avoided because `--color-base` would inject a dark *color* into every `text-base` font-size utility). Arbitrary hexes (`#05070D`, `#0D1424`, `#22D3EE`, `#8B5CF6`) are the same values as `ink/card/neon/vio` and appear in untouched legacy spots.
- Custom keyframes and animation utilities (`.animate-float-gentle`, `.animate-drift-slow`, `.scroll-reveal`, `.glass`, `.glow-border`, `.text-gradient`) are plain CSS in `src/index.css`. Add new animations there, not a second mechanism.
- Fonts: Space Grotesk (display, `font-display`) + Inter (body), loaded via `<link>` in `index.html`.
- Theming: default is dark; light mode is `data-theme="light"` on `<html>`, flipped by `ThemeToggle.jsx` and persisted in localStorage key `naim-theme` (applied pre-paint by an inline script in `index.html`). Light overrides re-declare the `--color-*` tokens and glass vars in `src/index.css` — because compiled utilities reference `var(--color-*)`, all tokenized classes flip automatically. Keep new colors as tokens (`bg-card`, `text-muted`…), never arbitrary hexes, or they won't flip in light mode.

## Content & routing

- Routes are defined in `src/App.jsx`: `/` (Home), `/projects/:id`, `/resume`.
- All showcased projects are data in `src/data/projects.js` — add/edit projects there, not in `Projects.jsx`. Thumbnails are imported from `src/assets/projects/`; the `id` field drives the `/projects/:id` route.
- SEO/OpenGraph tags live in `index.html`; ethereal assets (favicon, manifest, sitemap) in `public/`.

## Env vars

- The only variable read at runtime is `VITE_WEB3FORMS_ACCESS_KEY` (`src/components/Contact.jsx`), which currently has a hardcoded fallback, so the app runs without a `.env`. The README also mentions `VITE_RECEIVER_EMAIL`, but no code reads it — don't rely on it.

## Gotchas

- README `git clone` URL (`Portfolio/frontend`) refers to the original repo name, not this checkout — the repo root is this `frontend/` directory itself (`git rev-parse --show-toplevel` confirms it).
- Deployment is Vercel with root directory = `frontend/`, build `npm run build`, output `dist/`; print/resume CSS on `/resume` uses `@media print` — verify changes there don't break rendering under print media.
