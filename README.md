# Minh Ha Pham: Portfolio

Personal portfolio site built with Vite, React, Tailwind CSS, motion and Recharts.

## Run it

```bash
npm install
npm run dev
```

`npm run build` writes a static `dist/` folder that can be deployed anywhere.

## Editing content

Each section reads from a plain file in `src/data/`:

| File | Used for |
|---|---|
| `site.js` | Name, tagline, contact details, languages |
| `profile.js` | About and approach text |
| `experience.js` | Work experience |
| `leadership.js` | Leadership and education |
| `skills.js` | Skill groups |
| `projects.js` | Projects, case studies and chart data |
| `blog.js` | Blog posts |

To add a project, copy an entry in `projects.js` and give it a unique `id`. Its `tags` become filter chips automatically. Charts go in the project's `charts` array (types: `bar`, `grouped-bar`, `combo`, `line`).
