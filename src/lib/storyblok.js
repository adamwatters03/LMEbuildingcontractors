/* =========================================================
   Storyblok content-delivery fetch layer
   Returns data in the SAME shape as content.js.
   Defensive by design: any missing field / failed request
   falls back to the local default, so the build never breaks.
   ========================================================= */

const TOKEN = import.meta.env.STORYBLOK_TOKEN || process.env.STORYBLOK_TOKEN || '';
const DEFAULT_VERSION = (import.meta.env.STORYBLOK_VERSION || process.env.STORYBLOK_VERSION || 'published');
const REGION = (import.meta.env.STORYBLOK_REGION || process.env.STORYBLOK_REGION || 'eu');

const BASE = {
  eu: 'https://api.storyblok.com',
  us: 'https://api-us.storyblok.com',
  ap: 'https://api-ap.storyblok.com',
  ca: 'https://api-ca.storyblok.com',
}[REGION] || 'https://api.storyblok.com';

export const storyblokEnabled = !!TOKEN;

async function cdn(path, params = {}, version) {
  if (!TOKEN) return null;
  const v = version || DEFAULT_VERSION;
  const extra = v === 'draft' ? { cv: String(Date.now()) } : {}; // bust cache for live drafts
  const usp = new URLSearchParams({ token: TOKEN, version: v, ...extra, ...params });
  const url = `${BASE}/v2/cdn/${path}?${usp.toString()}`;
  try {
    const res = await fetch(url);
    if (!res.ok) { console.warn('[storyblok] ' + res.status + ' for ' + path); return null; }
    return await res.json();
  } catch (e) {
    console.warn('[storyblok] fetch failed for ' + path + ': ' + e.message);
    return null;
  }
}

// helpers ----------------------------------------------------
const txt = (v, d) => (v === undefined || v === null || v === '') ? d : v;
const asset = (v, d) => (v && v.filename) ? v.filename : txt(v, d);
const lines = (v, d) => {
  if (Array.isArray(v)) return v;
  if (typeof v === 'string' && v.trim()) return v.split('\n').map((s) => s.trim()).filter(Boolean);
  return d;
};
const blok = (v) => Array.isArray(v) ? v : [];

// map a single config story -> the content.js-shaped object
function mapConfig(content, local) {
  if (!content) return {};
  const out = {};
  out.fbUrl = txt(content.fbUrl, local.fbUrl);
  out.phone = txt(content.phone, local.phone);
  out.phoneHref = txt(content.phoneHref, local.phoneHref);
  out.email = txt(content.email, local.email);

  if (content.heroTrust) out.heroTrust = lines(content.heroTrust, local.heroTrust);
  if (content.coverage) out.coverage = lines(content.coverage, local.coverage);
  if (content.areaChips) out.areaChips = lines(content.areaChips, local.areaChips);

  if (blok(content.stats).length) out.stats = content.stats.map((s, i) => ({
    n: parseFloat(txt(s.n, local.stats[i] && local.stats[i].n)) || 0,
    dec: parseInt(txt(s.dec, '0'), 10) || 0,
    suf: txt(s.suf, ''), l: txt(s.l, ''), d: txt(s.d, ''),
  }));

  // services now live in their own folder (see sbServices), not in config

  if (blok(content.faqs).length) out.faqs = content.faqs.map((f) => ({ q: txt(f.q, ''), a: txt(f.a, '') }));
  if (blok(content.valueProps).length) out.valueProps = content.valueProps.map((v) => ({ title: txt(v.title, ''), body: txt(v.body, '') }));
  if (blok(content.process).length) out.process = content.process.map((p) => ({ n: txt(p.n, ''), title: txt(p.title, ''), body: txt(p.body, '') }));
  if (blok(content.testimonials).length) out.testimonials = content.testimonials.map((t, i) => ({ id: 't' + i, quote: txt(t.quote, ''), name: txt(t.name, ''), meta: txt(t.meta, '') }));
  if (blok(content.accreditations).length) out.accreditations = content.accreditations.map((a) => ({ name: txt(a.name, ''), file: '', url: asset(a.image, '') }));
  if (blok(content.team).length) out.team = content.team.map((m, i) => ({ id: 'm' + i, name: txt(m.name, ''), role: txt(m.role, ''), bio: txt(m.bio, ''), img: asset(m.img, '') }));
  if (blok(content.comingSoon).length) out.comingSoon = content.comingSoon.map((c) => ({ title: txt(c.title, ''), note: txt(c.note, 'COMING SOON'), body: txt(c.body, '') }));
  if (blok(content.upcomingProjects).length) out.upcomingProjects = content.upcomingProjects.map((c) => ({ title: txt(c.title, ''), note: txt(c.note, 'COMING SOON'), body: txt(c.body, '') }));
  if (Array.isArray(content.gallery) && content.gallery.length) out.gallery = content.gallery.map((g) => asset(g, '')).filter(Boolean);

  // global design settings
  out.design = {
    fontFamily: txt(content.fontFamily, local.design.fontFamily),
    colorBrand: txt(content.colorBrand, local.design.colorBrand),
    colorBrandDark: txt(content.colorBrandDark, local.design.colorBrandDark),
    colorBrandLight: txt(content.colorBrandLight, local.design.colorBrandLight),
    radius: txt(content.radius, local.design.radius),
  };
  // listing-page hero images
  out.siteImages = {
    blogHero: asset(content.blogHeroImage, local.siteImages.blogHero),
    projectsHero: asset(content.projectsHeroImage, local.siteImages.projectsHero),
  };
  // brand logo (falls back to the built-in SVG wordmark when blank)
  out.logo = asset(content.logo, local.logo);
  out.logoLight = asset(content.logoLight, local.logoLight);
  // section visibility toggles (upcoming sections default ON when the field is absent)
  out.flags = {
    showReviews: !!content.showReviews,
    showAccreditations: !!content.showAccreditations,
    showOffer: !!content.showOffer,
    showUpcomingServices: content.showUpcomingServices === undefined ? true : !!content.showUpcomingServices,
    showUpcomingProjects: content.showUpcomingProjects === undefined ? true : !!content.showUpcomingProjects,
  };

  return out;
}

function mapPost(story, local) {
  const c = story.content || {};
  return {
    slug: story.slug,
    title: txt(c.title, story.name),
    cat: txt(c.cat, 'Advice'),
    date: txt(c.date, ''),
    read: txt(c.read, '4 min read'),
    img: asset(c.img, ''),
    excerpt: txt(c.excerpt, ''),
    body: txt(c.body, ''),
    _meta: {
      iso: txt(c.iso, ''),
      tags: lines(c.tags, []),
      pull: txt(c.pull, ''),
      service: { label: txt(c.serviceLabel, 'Our Services'), hash: txt(c.serviceHash, '/services') },
    },
  };
}

function mapProject(story, local) {
  const c = story.content || {};
  return {
    id: story.slug,
    tag: txt(c.tag, ''), duration: txt(c.duration, ''),
    cover: asset(c.cover, ''), thumbA: asset(c.thumbA, ''), thumbB: asset(c.thumbB, ''),
    title: txt(c.title, story.name), location: txt(c.location, ''),
    status: txt(c.status, 'Completed'),
    short: txt(c.short, ''), body: txt(c.body, ''),
    points: lines(c.points, []),
    scope: lines(c.scope, []),
    overview: txt(c.overview, ''),
    gallery: (Array.isArray(c.gallery) ? c.gallery.map((g) => asset(g, '')).filter(Boolean) : []),
  };
}

// generic per-page text merge (overrides defaults only where present)
function mapPage(content, def) {
  if (!content) return null;
  const out = { ...def };
  for (const k of Object.keys(def)) {
    const v = content[k];
    if (Array.isArray(def[k])) {
      if (Array.isArray(v) && v.length) {
        out[k] = v.map((b, i) => ({ title: txt(b.title, (def[k][i] || {}).title), body: txt(b.body, (def[k][i] || {}).body) }));
      }
    } else if (v && typeof v === 'object' && v.filename !== undefined) {
      out[k] = v.filename || def[k]; // image (asset) field
    } else {
      out[k] = txt(v, def[k]);
    }
  }
  return out;
}

export async function sbPage(slug, def, version) {
  const json = await cdn('stories/' + slug, {}, version);
  if (!json || !json.story) return null;
  return mapPage(json.story.content, def);
}

export async function sbConfig(local, version) {
  const json = await cdn('stories/config', {}, version);
  if (!json || !json.story) return null;
  return mapConfig(json.story.content, local);
}

export async function sbPosts(local, version) {
  const json = await cdn('stories', { starts_with: 'blog/', per_page: '100', sort_by: 'content.iso:desc' }, version);
  if (!json || !Array.isArray(json.stories) || !json.stories.length) return null;
  return json.stories.map((s) => mapPost(s, local));
}

export async function sbProjects(local, version) {
  const json = await cdn('stories', { starts_with: 'projects/', per_page: '100' }, version);
  if (!json || !Array.isArray(json.stories) || !json.stories.length) return null;
  return json.stories.map((s) => mapProject(s, local));
}

function mapService(story, local, i) {
  const c = story.content || {};
  const lo = local.services[i] || {};
  return {
    slug: story.slug, id: story.slug,
    n: txt(c.n, lo.n || String(i + 1).padStart(2, '0')),
    title: txt(c.title, story.name),
    short: txt(c.short, lo.short || ''),
    body: txt(c.body, lo.body || ''),
    img: asset(c.img, lo.img || ''),
    included: lines(c.included, lo.included || []),
    timeline: txt(c.timeline, lo.timeline || ''),
    priceFrom: txt(c.priceFrom, lo.priceFrom || ''),
  };
}

export async function sbServices(local, version) {
  const json = await cdn('stories', { starts_with: 'service/', per_page: '100', sort_by: 'content.n:asc' }, version);
  if (!json || !Array.isArray(json.stories) || !json.stories.length) return null;
  return json.stories.map((s, i) => mapService(s, local, i));
}

function mapTeamMember(story, local, i) {
  const c = story.content || {};
  const lo = (local.team[i]) || {};
  return {
    id: story.slug,
    name: txt(c.name, story.name),
    role: txt(c.role, lo.role || ''),
    bio: txt(c.bio, lo.bio || ''),
    img: asset(c.img, lo.img || ''),
  };
}

export async function sbTeam(local, version) {
  // sorted by creation so the seeded order (lead first) is kept and new hires append
  const json = await cdn('stories', { starts_with: 'team/', per_page: '100', sort_by: 'created_at:asc' }, version);
  if (!json || !Array.isArray(json.stories) || !json.stories.length) return null;
  return json.stories.map((s, i) => mapTeamMember(s, local, i));
}

export async function sbGallery(local, version) {
  const json = await cdn('stories', { starts_with: 'gallery/', per_page: '100', sort_by: 'created_at:asc' }, version);
  if (!json || !Array.isArray(json.stories) || !json.stories.length) return null;
  return json.stories.map((s) => asset((s.content || {}).image, '')).filter(Boolean);
}
