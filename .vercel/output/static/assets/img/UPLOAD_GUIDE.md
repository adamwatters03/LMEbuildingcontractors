# Image map (what's where)

These are the live images and the slots they fill. To swap any photo, just upload a new
file over the same filename (GitHub → the file → **⋯ / Edit → replace**, or delete + re-upload
with the same name). Vercel redeploys automatically. If a file is ever missing, the site
falls back to a tidy labelled placeholder rather than breaking.

## Photos → `assets/img/`
| Filename | Used for |
|----------|----------|
| `home-hero.jpg` | Home hero |
| `services-hero.jpg` | Services hero |
| `projects-hero.jpg` | Projects hero + gallery |
| `about-hero.jpg` | About hero + gallery |
| `contact-hero.jpg` | Contact hero |
| `extension.jpg` | Extensions service + Lincoln project detail + gallery |
| `renovation.jpg` | Renovations service + Sleaford project detail + gallery |
| `newbuild.jpg` | New Builds service + About photo + Home CTA + gallery |
| `sleaford.jpg` | Sleaford project cover + gallery |
| `lincoln.jpg` | Lincoln project cover + gallery |
| `grantham.jpg` | Grantham project cover + gallery |
| `portrait.jpg` | Team portraits (×3 placeholder) — replace with real headshots |

## Logos → `assets/img/accreditations/`
`checkatrade.png` · `trustmark.png` · `fmb.png` · `gas-safe.png` · `which.png` · `nhbc.png`

### Notes
- Keep photos as `.jpg` and logos as `.png` (same filenames) so the references keep working.
- Photos are auto-served at up to ~1920px; new uploads don't need pre-resizing but smaller is faster.
- **Project covers** (`sleaford/lincoln/grantham.jpg`) are currently local town shots — swap for
  real build photos of each job whenever you have them.
- **Team:** all three share one silhouette placeholder — send real headshots and they can be set individually.
- The **contact map** is a live embedded Google Map (no image file needed).
