/* =========================================================
   Unified content loader.
   Pulls from Storyblok when STORYBLOK_TOKEN is set, otherwise
   uses the local defaults in content.js. Storyblok values are
   merged OVER the defaults, field by field, so anything missing
   in the CMS gracefully falls back — the build can't break.
   ========================================================= */
import * as local from './content.js';
import { sbConfig, sbPosts, sbProjects, sbServices, sbTeam, sbGallery, sbPage, storyblokEnabled } from './storyblok.js';

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
  upcomingProjects: local.upcomingProjects,
  testimonials: local.testimonials,
  accreditations: local.accreditations,
  gallery: local.gallery,
  team: local.team,
  logo: local.logo,
  logoLight: local.logoLight,
  formEndpoint: local.formEndpoint,
  fbUrl: local.fbUrl,
  phone: local.phone,
  phoneHref: local.phoneHref,
  email: local.email,
  pages: local.pages,
  design: local.design,
  siteImages: local.siteImages,
  flags: local.flags,
};

const _cache = {}; // version -> { data, ts }
const TTL = 30_000; // ms; published is briefly memoised per server instance

export async function getData(version = 'published') {
  const cached = _cache[version];
  if (cached && version !== 'draft' && (Date.now() - cached.ts) < TTL) return cached.data;

  const d = { ...defaults };

  if (storyblokEnabled) {
    const [config, posts, projects, svcs, team, gallery, home, services, about, contact] = await Promise.all([
      sbConfig(local, version).catch(() => null),
      sbPosts(local, version).catch(() => null),
      sbProjects(local, version).catch(() => null),
      sbServices(local, version).catch(() => null),
      sbTeam(local, version).catch(() => null),
      sbGallery(local, version).catch(() => null),
      sbPage('home', local.pages.home, version).catch(() => null),
      sbPage('services', local.pages.services, version).catch(() => null),
      sbPage('about', local.pages.about, version).catch(() => null),
      sbPage('contact', local.pages.contact, version).catch(() => null),
    ]);

    if (config) Object.assign(d, config);
    if (svcs && svcs.length) d.services = svcs;
    if (team && team.length) d.team = team;
    if (gallery && gallery.length) d.gallery = gallery;

    if (posts && posts.length) {
      d.posts = posts.map((p) => ({ slug: p.slug, title: p.title, cat: p.cat, date: p.date, read: p.read, img: p.img, excerpt: p.excerpt, body: p.body }));
      d.postMeta = {};
      posts.forEach((p) => { d.postMeta[p.slug] = p._meta; });
    }

    if (projects && projects.length) d.projectList = projects;

    d.pages = {
      home: home || local.pages.home,
      services: services || local.pages.services,
      about: about || local.pages.about,
      contact: contact || local.pages.contact,
    };

    d._diag = `storyblok(${version}) cfg:${config ? 'y' : 'n'} posts:${posts ? posts.length : 0} projects:${projects ? projects.length : 0} svcs:${svcs ? svcs.length : 0} team:${team ? team.length : 0} gallery:${gallery ? gallery.length : 0} pages:${home ? 'y' : 'n'}`;
  } else {
    d._diag = 'fallback-NO-TOKEN (STORYBLOK_TOKEN not set)';
  }

  _cache[version] = { data: d, ts: Date.now() };
  return d;
}
