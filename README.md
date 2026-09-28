# PersonaOS — Data-Driven React Portfolio

PersonaOS modernizes the original 2023 React + Tailwind personal website into a portfolio system centered on shipped work, architecture, and engineering decisions.

## Why this upgrade

The original site was a useful learning project, but it had several portfolio limitations:

- Create React App / `react-scripts 5`
- CRA boilerplate README and assets
- large unused images, including multi-megabyte banner files
- Lorem Ipsum in key sections
- social and project links pointing to `/`
- duplicated static skill cards
- no project data model
- no project filtering or case-study state
- no automated tests or CI
- a contact form with no real backend behavior

PersonaOS keeps React + Tailwind while changing the site from a static profile page into a structured engineering portfolio.

## Product behavior

- structured portfolio data
- selected project grid
- category filters
- full-text project search
- case-study dialog
- persistent light/dark theme
- responsive navigation
- keyboard-accessible interactions
- reduced-motion support
- real GitHub and LinkedIn destinations
- explicit portfolio scope instead of fake backend behavior

## Architecture

```text
src/data/portfolio.js
        │
        ├── profile
        ├── projects
        └── capabilities
        │
        ▼
src/lib/project-utils.js
src/lib/theme.js
        │
        ▼
src/App.jsx
        │
        ▼
Tailwind UI
```

Project filtering and theme persistence are isolated from the main UI so they can be tested independently.

## Project model

Each project records:

- title
- category
- year
- summary
- problem
- approach
- outcomes
- stack
- repository link

The case-study dialog renders from this same source of truth.

## Local development

Requirements:

- Node.js 20+

Run:

```bash
npm install
npm run dev
```

## Tests

```bash
npm test
```

The suite covers:

- category filtering
- metadata search
- project-count formatting
- theme normalization/persistence
- project search interaction
- category interaction
- case-study open/close behavior
- theme persistence
- mobile menu state

## Production build

```bash
npm run build
```

Vite writes the optimized application to `dist/`.

## CI

Every pull request and push to `main` runs:

```text
npm install
   ↓
Vitest
   ↓
Vite + Tailwind production build
```

## GitHub Pages

Enable once:

**Settings → Pages → Source → GitHub Actions**

Then run:

**Actions → Deploy Pages → Run workflow**

## Scope

PersonaOS is a static portfolio interface. It does not claim a CMS, analytics backend, authentication system, or contact-message delivery service.

## License

MIT.
