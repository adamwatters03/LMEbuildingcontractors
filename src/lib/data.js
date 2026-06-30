/* =========================================================
   Unified content loader.
   Pulls from Storyblok when STORYBLOK_TOKEN is set, otherwise
   uses the local defaults in content.js. Storyblok values are
   merged OVER the defaults, field by field, so anything missing
   in the CMS gracefully falls back — the build can't break.
   ========================================================= */
import * as local from './content.js';
import { sbConfig, sbPosts, sbProjects, storyblokEnabled } from './storyblok.js';

const defaults = {
  heroTrust: local.heroTrust,
  stats: local.stats,
  services: local.services,
  faqs: local.faqs,
  posts: local.posts,
  postMeta: local.postMeta,
  author: local.author,
  coverage: local.coverage,
  areaChips: local.areaChips,
  valueProps: local.valueProps,
  process: local.process,
  projectList: local.projectList,
  comingSoon: local.comingSoon,
  testimonials: local.testimonials,
  accreditations: local.accreditations,
  gallery: local.gallery,
  team: local.team,
  fbUrl: local.fbUrl,
  phone: local.phone,
  phoneHref: local.phoneHref,
  email: local.email,
};

let _cache = null;

export async function getData() {
  if (_cache) return _cache;
  const d = { ...defaults };

  if (storyblokEnabled) {
    const [config, posts, projects] = await Promise.all([
      sbConfig(local).catch(() => null),
      sbPosts(local).catch(() => null),
      sbProjects(local).catch(() => null),
    ]);

    if (config) Object.assign(d, config);

    if (posts && posts.length) {
      d.posts = posts.map((p) => ({ slug: p.slug, title: p.title, cat: p.cat, date: p.date, read: p.read, img: p.img, excerpt: p.excerpt, body: p.body }));
      d.postMeta = {};
      posts.forEach((p) => { d.postMeta[p.slug] = p._meta; });
    }

    if (projects && projects.length) d.projectList = projects;
  }

  _cache = d;
  return d;
}
