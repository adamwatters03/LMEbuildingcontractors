/* =========================================================
   Storyblok setup + seed for LME Building Contractors
   ---------------------------------------------------------
   Creates all content models (components) and seeds them with
   the current site content, so the client can edit everything
   from the Storyblok dashboard.

   RUN THIS ON YOUR OWN MACHINE (not the Claude sandbox), where
   Storyblok is reachable:

     STORYBLOK_OAUTH_TOKEN=sb_pat_xxx \
     STORYBLOK_SPACE_ID=293539991422659 \
     STORYBLOK_REGION=eu \
     node scripts/storyblok-setup.mjs

   - STORYBLOK_OAUTH_TOKEN : your Personal Access Token (sb_pat_…)
   - STORYBLOK_SPACE_ID    : the space ID (digits only, no '#')
   - STORYBLOK_REGION      : eu (default) | us | ap | ca
   It is safe to re-run: existing components/stories are updated.
   ========================================================= */
import { randomUUID } from 'node:crypto';
import * as c from '../src/lib/content.js';

const TOKEN = process.env.STORYBLOK_OAUTH_TOKEN;
const SPACE = (process.env.STORYBLOK_SPACE_ID || '').replace(/[^0-9]/g, '');
const REGION = process.env.STORYBLOK_REGION || 'eu';
const SITE = 'https://www.lmebuildingcontractors.uk';

if (!TOKEN || !SPACE) {
  console.error('Missing STORYBLOK_OAUTH_TOKEN or STORYBLOK_SPACE_ID. See the header of this file.');
  process.exit(1);
}

const MAPI = {
  eu: 'https://mapi.storyblok.com/v1',
  us: 'https://mapi-us.storyblok.com/v1',
  ap: 'https://mapi-ap.storyblok.com/v1',
  ca: 'https://mapi-ca.storyblok.com/v1',
}[REGION] || 'https://mapi.storyblok.com/v1';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let _last = 0;
async function mapi(method, path, body, attempt = 0) {
  // throttle to stay under Storyblok's 6 req/s limit
  const wait = Math.max(0, 220 - (Date.now() - _last));
  if (wait) await sleep(wait);
  _last = Date.now();
  const res = await fetch(`${MAPI}/spaces/${SPACE}${path}`, {
    method,
    headers: { Authorization: TOKEN, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if ((res.status === 429 || res.status >= 500) && attempt < 6) {
    await sleep(1000 * (attempt + 1));
    return mapi(method, path, body, attempt + 1);
  }
  let json; try { json = text ? JSON.parse(text) : {}; } catch { json = { raw: text }; }
  if (!res.ok) throw new Error(`${method} ${path} → ${res.status}: ${text.slice(0, 400)}`);
  return json;
}

const uid = () => randomUUID();
const img = (path, alt = '') => path ? { fieldtype: 'asset', id: null, filename: (/^https?:\/\//.test(path) ? path : `${SITE}/${path}`), alt, name: '', title: '', focus: '' } : null;
const list = (arr) => (arr || []).join('\n');

/* ---------- component schemas ---------- */
const T = (label) => ({ type: 'text', display_name: label });
const TA = (label) => ({ type: 'textarea', display_name: label });
const AS = (label) => ({ type: 'asset', filetypes: ['images'], display_name: label });
const BLOKS = (label, whitelist) => ({ type: 'bloks', restrict_components: true, component_whitelist: whitelist, display_name: label });

const components = [
  { name: 'stat', is_nestable: true, schema: { n: T('Number'), dec: T('Decimals (0/1)'), suf: T('Suffix'), l: T('Label'), d: TA('Description') } },
  { name: 'service', is_nestable: true, schema: { n: T('Number e.g. 01'), sid: T('ID slug e.g. ext'), title: T('Title'), short: TA('Short blurb'), body: TA('Full description'), img: AS('Image'), included: TA("What's included (one per line)"), timeline: T('Typical timeline'), priceFrom: T('Investment from') } },
  { name: 'value_prop', is_nestable: true, schema: { title: T('Title'), body: TA('Body') } },
  { name: 'process_step', is_nestable: true, schema: { n: T('Number'), title: T('Title'), body: TA('Body') } },
  { name: 'testimonial', is_nestable: true, schema: { quote: TA('Quote'), name: T('Name'), meta: T('Project · town') } },
  { name: 'accreditation', is_nestable: true, schema: { name: T('Name'), image: AS('Logo') } },
  { name: 'team_member', is_nestable: true, schema: { name: T('Name'), role: T('Role'), bio: TA('Bio'), img: AS('Portrait') } },
  { name: 'coming_soon', is_nestable: true, schema: { title: T('Title'), note: T('Badge'), body: TA('Body') } },
  { name: 'faq', is_nestable: true, schema: { q: T('Question'), a: TA('Answer') } },
  // content types (root)
  { name: 'config', is_root: true, is_nestable: false, schema: {
    contact_tab: { type: 'tab', display_name: 'Contact', keys: ['phone', 'phoneHref', 'email', 'fbUrl'] },
    phone: T('Phone (display)'), phoneHref: T('Phone (tel: link)'), email: T('Email'), fbUrl: T('Facebook URL'),
    lists_tab: { type: 'tab', display_name: 'Lists', keys: ['heroTrust', 'coverage', 'areaChips', 'gallery'] },
    heroTrust: TA('Hero trust chips (one per line)'), coverage: TA('Coverage towns (one per line)'), areaChips: TA('Area chips (one per line)'),
    gallery: { type: 'multiasset', filetypes: ['images'], display_name: 'Gallery images' },
    blocks_tab: { type: 'tab', display_name: 'Sections', keys: ['stats', 'services', 'valueProps', 'process', 'testimonials', 'accreditations', 'team', 'comingSoon', 'faqs'] },
    stats: BLOKS('Stats', ['stat']), services: BLOKS('Services', ['service']), valueProps: BLOKS('Value props', ['value_prop']),
    process: BLOKS('Process steps', ['process_step']), testimonials: BLOKS('Testimonials', ['testimonial']),
    accreditations: BLOKS('Accreditations', ['accreditation']), team: BLOKS('Team', ['team_member']),
    comingSoon: BLOKS('Coming soon', ['coming_soon']), faqs: BLOKS('FAQs', ['faq']),
    design_tab: { type: 'tab', display_name: 'Design & site images', keys: ['fontFamily', 'colorBrand', 'colorBrandDark', 'colorBrandLight', 'radius', 'blogHeroImage', 'projectsHeroImage'] },
    fontFamily: T('Font family (Google Font name)'), colorBrand: T('Brand colour (hex)'), colorBrandDark: T('Brand colour — dark (hex)'), colorBrandLight: T('Brand colour — light (hex)'), radius: T('Corner radius in px (blank = keep design)'),
    blogHeroImage: AS('Blog page hero image'), projectsHeroImage: AS('Projects page hero image'),
  } },
  { name: 'blog_post', is_root: true, is_nestable: false, schema: {
    title: T('Title'), cat: T('Category'), date: T('Date (display)'), iso: T('Date (ISO, for sorting)'), read: T('Read time'),
    img: AS('Cover image'), excerpt: TA('Excerpt'), body: { type: 'textarea', display_name: 'Body (HTML)' },
    tags: TA('Tags (one per line)'), pull: TA('Pull quote'), serviceLabel: T('Related service label'), serviceHash: T('Related service link'),
  } },
  { name: 'project', is_root: true, is_nestable: false, schema: {
    title: T('Title'), tag: T('Type'), location: T('Location'), duration: T('Duration'),
    cover: AS('Cover'), thumbA: AS('Thumb A'), thumbB: AS('Thumb B'),
    short: TA('Short blurb'), body: TA('Card description'), overview: TA('Overview (HTML)'),
    points: TA('Card points (one per line)'), scope: TA('What we did (one per line)'),
    gallery: { type: 'multiasset', filetypes: ['images'], display_name: 'Gallery' },
  } },
];

/* page content types — generated from content.js `pages` so fields always match */
function pageSchema(def) {
  const schema = {};
  for (const [k, v] of Object.entries(def)) {
    if (Array.isArray(v)) schema[k] = BLOKS(k, ['value_prop']);
    else if (/image$/i.test(k)) schema[k] = AS(k);
    else schema[k] = TA(k);
  }
  return schema;
}
for (const [name, def] of Object.entries(c.pages)) {
  components.push({ name: 'page_' + name, is_root: true, is_nestable: false, schema: pageSchema(def) });
}

/* ---------- upsert components ---------- */
async function upsertComponents() {
  const existing = (await mapi('GET', '/components/')).components || [];
  const byName = Object.fromEntries(existing.map((x) => [x.name, x]));
  for (const comp of components) {
    const payload = { component: { name: comp.name, display_name: comp.name, schema: comp.schema, is_root: !!comp.is_root, is_nestable: comp.is_nestable !== false } };
    if (byName[comp.name]) {
      await mapi('PUT', `/components/${byName[comp.name].id}`, payload);
      console.log('updated component:', comp.name);
    } else {
      await mapi('POST', '/components/', payload);
      console.log('created component:', comp.name);
    }
  }
}

/* ---------- upsert stories ---------- */
async function findStory(fullSlug) {
  const res = await mapi('GET', `/stories?with_slug=${encodeURIComponent(fullSlug)}`);
  return (res.stories && res.stories[0]) || null;
}
async function ensureFolder(slug, name) {
  const found = await findStory(slug);
  if (found) return found.id;
  const res = await mapi('POST', '/stories/', { story: { name, slug, is_folder: true } });
  console.log('created folder:', slug);
  return res.story.id;
}
function isEmpty(v) {
  if (v === undefined || v === null || v === '') return true;
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === 'object' && 'filename' in v) return !v.filename; // asset field
  return false;
}

async function upsertStory(story) {
  const full = story._fullSlug || story.slug;
  delete story._fullSlug;
  const found = await findStory(full);
  if (found) {
    // Merge: fill only missing/empty fields (e.g. newly added ones) with defaults,
    // so the client can see the current value — but never overwrite existing edits.
    const cur = (await mapi('GET', `/stories/${found.id}`)).story;
    const content = cur.content || {};
    let changed = false;
    for (const k of Object.keys(story.content)) {
      if (k === 'component' || k === '_uid') continue;
      if (isEmpty(content[k]) && !isEmpty(story.content[k])) { content[k] = story.content[k]; changed = true; }
    }
    if (!content.component) content.component = story.content.component;
    if (changed) {
      await mapi('PUT', `/stories/${found.id}`, { story: { content }, publish: 1 });
      console.log('backfilled new fields:', full);
    } else {
      console.log('already complete:', full);
    }
    return;
  }
  await mapi('POST', '/stories/', { story, publish: 1 });
  console.log('created story:', full);
}

function configContent() {
  return {
    component: 'config',
    phone: c.phone, phoneHref: c.phoneHref, email: c.email, fbUrl: c.fbUrl,
    heroTrust: list(c.heroTrust), coverage: list(c.coverage), areaChips: list(c.areaChips),
    gallery: c.gallery.map((g) => img(g, 'LME project photo')),
    stats: c.stats.map((s) => ({ component: 'stat', _uid: uid(), n: String(s.n), dec: String(s.dec), suf: s.suf, l: s.l, d: s.d })),
    services: c.services.map((s) => ({ component: 'service', _uid: uid(), n: s.n, sid: s.id, title: s.title, short: s.short, body: s.body, img: img(s.img, s.title), included: list(s.included), timeline: s.timeline, priceFrom: s.priceFrom })),
    valueProps: c.valueProps.map((v) => ({ component: 'value_prop', _uid: uid(), title: v.title, body: v.body })),
    process: c.process.map((p) => ({ component: 'process_step', _uid: uid(), n: p.n, title: p.title, body: p.body })),
    testimonials: c.testimonials.map((t) => ({ component: 'testimonial', _uid: uid(), quote: t.quote, name: t.name, meta: t.meta })),
    accreditations: c.accreditations.map((a) => ({ component: 'accreditation', _uid: uid(), name: a.name, image: img('assets/img/accreditations/' + a.file, a.name) })),
    team: c.team.map((m) => ({ component: 'team_member', _uid: uid(), name: m.name, role: m.role, bio: m.bio, img: img(m.img, m.name) })),
    comingSoon: c.comingSoon.map((x) => ({ component: 'coming_soon', _uid: uid(), title: x.title, note: x.note, body: x.body })),
    faqs: c.faqs.map((f) => ({ component: 'faq', _uid: uid(), q: f.q, a: f.a })),
    fontFamily: c.design.fontFamily, colorBrand: c.design.colorBrand, colorBrandDark: c.design.colorBrandDark, colorBrandLight: c.design.colorBrandLight, radius: c.design.radius,
    blogHeroImage: img(c.siteImages.blogHero, 'Blog hero'), projectsHeroImage: img(c.siteImages.projectsHero, 'Projects hero'),
  };
}

function pageContent(name, def) {
  const content = { component: 'page_' + name };
  for (const [k, v] of Object.entries(def)) {
    if (Array.isArray(v)) content[k] = v.map((b) => ({ component: 'value_prop', _uid: uid(), title: b.title, body: b.body }));
    else if (/image$/i.test(k)) content[k] = img(v, name);
    else content[k] = v;
  }
  return content;
}

async function run() {
  console.log(`Setting up Storyblok space ${SPACE} (${REGION})…\n`);
  await upsertComponents();
  console.log('');

  // global config
  await upsertStory({ name: 'Site Config', slug: 'config', content: configContent() });

  // editable pages (home / services / about / contact) with real preview paths
  for (const [name, def] of Object.entries(c.pages)) {
    await upsertStory({
      name: 'Page: ' + name.charAt(0).toUpperCase() + name.slice(1),
      slug: name,
      path: name === 'home' ? '/' : '/' + name,
      content: pageContent(name, def),
    });
  }

  // blog
  const blogId = await ensureFolder('blog', 'Blog');
  for (const p of c.posts) {
    const m = c.postMeta[p.slug] || {};
    await upsertStory({
      name: p.title, slug: p.slug, parent_id: blogId, _fullSlug: 'blog/' + p.slug,
      content: {
        component: 'blog_post', title: p.title, cat: p.cat, date: p.date, iso: m.iso || '', read: p.read,
        img: img(p.img, p.title), excerpt: p.excerpt, body: p.body,
        tags: list(m.tags || [p.cat]), pull: m.pull || '',
        serviceLabel: (m.service && m.service.label) || 'Our Services', serviceHash: (m.service && m.service.hash) || '/services',
      },
    });
  }

  // projects
  const projId = await ensureFolder('projects', 'Projects');
  for (const pr of c.projectList) {
    await upsertStory({
      name: pr.title, slug: pr.id, parent_id: projId, _fullSlug: 'projects/' + pr.id,
      content: {
        component: 'project', title: pr.title, tag: pr.tag, location: pr.location, duration: pr.duration,
        cover: img(pr.cover, pr.title), thumbA: img(pr.thumbA, pr.title), thumbB: img(pr.thumbB, pr.title),
        short: pr.short, body: pr.body, overview: pr.overview,
        points: list(pr.points), scope: list(pr.scope),
        gallery: (pr.gallery || []).map((g) => img(g, pr.title)),
      },
    });
  }

  console.log('\n✅ Done. Open app.storyblok.com → your space → Content to edit everything.');
}

run().catch((e) => { console.error('\n❌ Setup failed:\n' + e.message); process.exit(1); });
