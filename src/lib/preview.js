/* Per-request helpers for Storyblok preview vs published rendering. */

// draft when loaded inside the Storyblok visual editor. We detect it three ways
// so it survives the www->non-www redirect (which can strip the query params):
//  - the _storyblok query param, or ?preview=1
//  - the request coming from the Storyblok app (Referer)
export function versionFromRequest(Astro) {
  const u = Astro.url;
  if (u.searchParams.has('_storyblok') || u.searchParams.get('preview') === '1') return 'draft';
  const ref = (Astro.request && Astro.request.headers && Astro.request.headers.get('referer')) || '';
  if (ref.indexOf('storyblok.com') > -1) return 'draft';
  return 'published';
}

// edge-cache published pages briefly; never cache the live editor preview
export function setCache(Astro, version) {
  if (version === 'draft') {
    Astro.response.headers.set('Cache-Control', 'no-store');
  } else {
    Astro.response.headers.set('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=600');
  }
}
