# LME Building Contractors — Website

A fast, fully-responsive marketing site for **LME Building Contractors**, a building
firm serving Lincolnshire (home extensions, high-end renovations and new builds).

Built as a **static site** (plain HTML / CSS / JavaScript — no build step) so it can
be hosted anywhere, including **GitHub Pages**, and loads instantly.

## Pages

The site is a single-document app with hash-based routing (each "page" is linkable):

| Path | Page |
|------|------|
| `#home` | Hero, limited offer, trust stats, services, why-us, featured projects, gallery, process, testimonials, accreditations, CTA |
| `#services` | Detailed service rows (what's included, timeline, price guide), FAQ, coverage area |
| `#projects` | Portfolio with before/after slots, upcoming case studies |
| `#about` | Mission, approach, stats, team |
| `#contact` | Enquiry form (with thank-you state) + contact details |
| `#privacy` `#cookies` `#terms` | GDPR / legal pages |

## Features

- **Brand-faithful** — charcoal `#15191f` + electric cyan `#33b8de`, Archivo + IBM Plex Sans, recreated house-mark logo (inline SVG, used in header/footer/favicon).
- **Image placeholders** — every photo position is a labelled slot ("Drop hero build photo", "Drop service photo", etc.) ready to be swapped for real photography. See [Adding photos](#adding-photos).
- **Animations** — scroll-reveal fade-ups (IntersectionObserver, cross-browser), hover image-zoom on cards, top scroll-progress bar.
- **Responsive** — fluid `clamp()` type/spacing, auto-fitting grids, hamburger menu under 960px.
- **GDPR cookie banner** — accept / reject non-essential, choice stored in `localStorage`, linked to the Cookie Policy.

## Project structure

```
index.html              # all markup for every page
assets/css/styles.css   # all styles
assets/js/script.js     # content data, routing, reveals, form, cookies
assets/favicon.svg      # logo favicon
design-source/          # original Claude Design handoff bundle (reference only)
```

## Running locally

It's just static files — open `index.html`, or serve the folder:

```bash
npx http-server .        # then visit the printed URL
# or
python3 -m http.server   # http://localhost:8000
```

## Deploying to GitHub Pages

1. Push to the `main` branch.
2. Repo **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Select branch `main`, folder `/ (root)`, save. The site publishes at
   `https://<user>.github.io/<repo>/`.

## Adding photos

Replace a placeholder by editing the relevant `.img-slot` (in `index.html` for the
heroes, or in the data/render code in `assets/js/script.js` for the repeated cards).
Swap the `<div class="img-slot …">…</div>` for an `<img>` (or set it as a CSS
`background-image`), keeping the same wrapper sizing so the layout stays intact.

## Content to confirm

The following are sensible placeholders carried over from the design — confirm the
real values: phone `01205 835 030`, email `enquiries@lmebuilding.co.uk`, the
stats (250+ projects / 15 yrs / 4.9★ / 127 reviews), team names, accreditation list,
timeline/price guides, and the limited-offer wording.

---

Design originated in [Claude Design](https://claude.ai/design); see `design-source/`
for the original prototype and the conversation that shaped it.
