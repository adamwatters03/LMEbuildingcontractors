# Storyblok CMS — setup & how it works

This site is built with **Astro** (static) and pulls its content from **Storyblok**
at build time. When content isn't available it falls back to the defaults in
`src/lib/content.js`, so the build can never break.

```
You/Claude  →  code (GitHub)            ─┐
                                          ├─→  Vercel build  →  live site
Your client →  content (Storyblok)  ─────┘     (rebuild on publish via webhook)
```

---

## One-time setup

### 1. Create the content models + seed your content
Run this **on your own computer** (where Storyblok is reachable), from the repo root:

```bash
npm install
STORYBLOK_OAUTH_TOKEN=sb_pat_xxxxxxxx \
STORYBLOK_SPACE_ID=293539991422659 \
STORYBLOK_REGION=eu \
node scripts/storyblok-setup.mjs
```

- `STORYBLOK_OAUTH_TOKEN` — your Personal Access Token (`sb_pat_…`, from Account → Personal access tokens).
- `STORYBLOK_SPACE_ID` — digits only (no `#`).
- `STORYBLOK_REGION` — `eu` (default), or `us` / `ap` / `ca` depending on where your space lives.

This creates all the components (Site Config, Blog Post, Project, and the section blocks)
and fills them with the current site content. It's safe to re-run — it updates rather
than duplicates.

> ⚠️ Rotate the Personal Access Token afterwards (Storyblok → Account → Personal access tokens),
> since it was shared in chat.

### 2. Point Vercel at Storyblok
In **Vercel → your project → Settings → Environment Variables**, add (Production + Preview):

| Key | Value |
|-----|-------|
| `STORYBLOK_TOKEN` | your **Public** delivery token (Storyblok → Settings → Access Tokens) |
| `STORYBLOK_REGION` | `eu` (or your region) |
| `STORYBLOK_VERSION` | `published` |

Redeploy. The site now renders content from Storyblok.

### 3. Auto-rebuild when content changes (webhook)
1. In **Vercel → Settings → Git → Deploy Hooks**, create a hook (e.g. name `storyblok`, branch `main`). Copy the URL.
2. In **Storyblok → Settings → Webhooks**, add a **Story published** webhook pointing at that URL.

Now: client clicks **Publish** in Storyblok → Vercel rebuilds → live in ~30–60s.

### 4. Visual editor preview
In **Storyblok → Settings → Visual Editor**, set the preview URL to your site, e.g.
`https://www.lmebuildingcontractors.uk/`. Opening a story shows the live site with the
edit form beside it; saving reloads the preview. (The bridge only loads inside the editor.)

---

## How your client edits the site
`app.storyblok.com` → **LME Building Contractors** space → **Content**:

- **Site Config** — contact details, hero, stats, services, FAQs, testimonials,
  accreditations, team, coverage, gallery (grouped into tabs).
- **Blog** folder — one story per article (title, image, excerpt, body, tags…).
- **Projects** folder — one story per case study.

Edit → **Publish** → it's live shortly after.

---

## Local development
- `npm run dev` / `npm run build` with no Storyblok env vars → uses local defaults.
- Add a `.env` (see `.env.example`) with `STORYBLOK_TOKEN` to pull from Storyblok locally.

## Notes
- Blog/Project body fields are **HTML** (textarea) for now — can be upgraded to a rich-text editor later.
- Images are seeded as links to the current live photos; replacing a field with an uploaded
  Storyblok asset works the same way.
