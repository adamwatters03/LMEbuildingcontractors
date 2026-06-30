/* =========================================================
   Storyblok content-delivery fetch layer
   Returns data in the SAME shape as content.js.
   Defensive by design: any missing field / failed request
   falls back to the local default, so the build never breaks.
   ========================================================= */

const TOKEN = import.meta.env.STORYBLOK_TOKEN || process.env.STORYBLOK_TOKEN || '';
const VERSION = (import.meta.env.STORYBLOK_VERSION || process.env.STORYBLOK_VERSION || 'published');
const REGION = (import.meta.env.STORYBLOK_REGION || process.env.STORYBLOK_REGION || 'eu');

const BASE = {
  eu: 'https://api.storyblok.com',
  us: 'https://api-us.storyblok.com',
  ap: 'https://api-ap.storyblok.com',
  ca: 'https://api-ca.storyblok.com',
}[REGION] || 'https://api.storyblok.com';

export const storyblokEnabled = !!TOKEN;

async function cdn(path, params = {}) {
  if (!TOKEN) return null;
  const usp = new URLSearchParams({ token: TOKEN, version: VERSION, ...params });
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

  if (blok(content.services).length) out.services = content.services.map((s, i) => {
    const lo = local.services[i] || {};
    return {
      n: txt(s.n, lo.n), id: txt(s.sid, lo.id), title: txt(s.title, lo.title),
      short: txt(s.short, lo.short), body: txt(s.body, lo.body),
      img: asset(s.img, lo.img),
      included: lines(s.included, lo.included || []),
      timeline: txt(s.timeline, lo.timeline), priceFrom: txt(s.priceFrom, lo.priceFrom),
    };
  });

  if (blok(content.faqs).length) out.faqs = content.faqs.map((f) => ({ q: txt(f.q, ''), a: txt(f.a, '') }));
  if (blok(content.valueProps).length) out.valueProps = content.valueProps.map((v) => ({ title: txt(v.title, ''), body: txt(v.body, '') }));
  if (blok(content.process).length) out.process = content.process.map((p) => ({ n: txt(p.n, ''), title: txt(p.title, ''), body: txt(p.body, '') }));
  if (blok(content.testimonials).length) out.testimonials = content.testimonials.map((t, i) => ({ id: 't' + i, quote: txt(t.quote, ''), name: txt(t.name, ''), meta: txt(t.meta, '') }));
  if (blok(content.accreditations).length) out.accreditations = content.accreditations.map((a) => ({ name: txt(a.name, ''), file: '', url: asset(a.image, '') }));
  if (blok(content.team).length) out.team = content.team.map((m, i) => ({ id: 'm' + i, name: txt(m.name, ''), role: txt(m.role, ''), bio: txt(m.bio, ''), img: asset(m.img, '') }));
  if (blok(content.comingSoon).length) out.comingSoon = content.comingSoon.map((c) => ({ title: txt(c.title, ''), note: txt(c.note, 'COMING SOON'), body: txt(c.body, '') }));
  if (Array.isArray(content.gallery) && content.gallery.length) out.gallery = content.gallery.map((g) => asset(g, '')).filter(Boolean);

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
    short: txt(c.short, ''), body: txt(c.body, ''),
    points: lines(c.points, []),
    scope: lines(c.scope, []),
    overview: txt(c.overview, ''),
    gallery: (Array.isArray(c.gallery) ? c.gallery.map((g) => asset(g, '')).filter(Boolean) : []),
  };
}

export async function sbConfig(local) {
  const json = await cdn('stories/config');
  if (!json || !json.story) return null;
  return mapConfig(json.story.content, local);
}

export async function sbPosts(local) {
  const json = await cdn('stories', { starts_with: 'blog/', per_page: '100', sort_by: 'content.iso:desc' });
  if (!json || !Array.isArray(json.stories) || !json.stories.length) return null;
  return json.stories.map((s) => mapPost(s, local));
}

export async function sbProjects(local) {
  const json = await cdn('stories', { starts_with: 'projects/', per_page: '100' });
  if (!json || !Array.isArray(json.stories) || !json.stories.length) return null;
  return json.stories.map((s) => mapProject(s, local));
}
