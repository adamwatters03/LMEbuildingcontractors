/* Per-request helpers for Storyblok preview vs published rendering. */

// draft when loaded inside the Storyblok visual editor (or ?preview=1)
export function versionFromRequest(Astro) {
  const u = Astro.url;
  const isPreview = u.searchParams.has('_storyblok') || u.searchParams.get('preview') === '1';
  return isPreview ? 'draft' : 'published';
}

// edge-cache published pages briefly; never cache the live editor preview
export function setCache(Astro, version) {
  if (version === 'draft') {
    Astro.response.headers.set('Cache-Control', 'no-store');
  } else {
    Astro.response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=600');
  }
}
