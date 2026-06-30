/* =========================================================
   LME Building Contractors — HTML render helpers
   Pure functions returning HTML strings, used with Astro set:html.
   Ported from the original SPA renderer; links are real URLs.
   ========================================================= */
import {
  stats, services, faqs, posts, postMeta, author, valueProps, process,
  projectList, comingSoon, testimonials, accreditations, gallery, team, coverage
} from './content.js';

export function esc(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

// absolute asset path so it resolves from any route depth
function asset(src) {
  if (!src) return src;
  if (/^https?:\/\//.test(src) || src.charAt(0) === '/') return src;
  return '/' + src;
}

// image slot: shows the real photo, falls back to a labelled placeholder
export function slot(extra, label, src, alt) {
  var img = src
    ? '<img src="' + asset(src) + '" alt="' + esc(alt || label) + '" loading="lazy" onload="this.parentNode.classList.add(\'has-img\')" onerror="this.remove()">'
    : '';
  return '<div class="img-slot ' + extra + '">' + img + '<span>' + esc(label) + '</span></div>';
}

var CHECK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5cc6e8" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="flex:none;"><path d="M5 12.5 L10 17.5 L19 6.5"></path></svg>';
var PIN = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1192bb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="flex:none;"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>';
var TICK_CIRCLE = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#33b8de" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M7.5 12.5 L10.5 15.5 L16.5 8.5"></path></svg>';

export function statsHTML() {
  return stats.map(function (st) {
    return '<div class="stat reveal">' +
      '<div class="stat-num"><span class="num" data-count="' + st.n + '" data-dec="' + st.dec + '">0</span>' +
      (st.suf ? '<span class="suf">' + esc(st.suf) + '</span>' : '') + '</div>' +
      '<div class="stat-label">' + esc(st.l) + '</div>' +
      '<div class="stat-desc">' + esc(st.d) + '</div>' +
      '</div>';
  }).join('');
}

export function homeServicesHTML() {
  return services.map(function (svc) {
    return '<a class="card card-link reveal zoom-wrap" href="/services#svc-' + svc.id + '" style="overflow:hidden;display:block;text-decoration:none;">' +
      '<div style="position:relative;height:210px;overflow:hidden;">' +
        slot('fill zoom', 'Drop service photo', svc.img, svc.title) +
        '<span style="position:absolute;top:14px;left:14px;font-family:\'Montserrat\',sans-serif;font-weight:800;font-size:12px;color:#06222c;background:#33b8de;padding:6px 11px;border-radius:5px;">' + esc(svc.n) + '</span>' +
      '</div>' +
      '<div style="padding:26px 26px 30px;">' +
        '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:21px;margin:0 0 10px;color:#15191f;">' + esc(svc.title) + '</h3>' +
        '<p style="font-size:15px;line-height:1.6;color:#5b6470;margin:0 0 18px;">' + esc(svc.short) + '</p>' +
        '<span class="read-more">Learn more →</span>' +
      '</div></a>';
  }).join('');
}

export function valuePropsHTML() {
  return valueProps.map(function (vp) {
    return '<div class="reveal" style="text-align:center;padding:0 6px;">' +
      '<div style="display:flex;justify-content:center;margin-bottom:18px;">' + TICK_CIRCLE + '</div>' +
      '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:18px;margin:0 0 10px;color:#15191f;">' + esc(vp.title) + '</h3>' +
      '<p style="font-size:14.5px;line-height:1.6;color:#5b6470;margin:0;">' + esc(vp.body) + '</p>' +
      '</div>';
  }).join('');
}

export function featuredHTML() {
  return projectList.map(function (proj) {
    return '<a class="card card-link reveal zoom-wrap" href="/projects/' + proj.id + '" style="overflow:hidden;display:block;text-decoration:none;">' +
      '<div style="position:relative;height:230px;overflow:hidden;">' +
        slot('fill zoom', 'Drop cover photo', proj.cover, proj.title) +
        '<span style="position:absolute;top:14px;left:14px;font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:11px;letter-spacing:1px;color:#06222c;background:#33b8de;padding:6px 12px;border-radius:5px;">' + esc(proj.tag) + '</span>' +
      '</div>' +
      '<div style="padding:24px 26px 28px;">' +
        '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:20px;margin:0 0 8px;color:#15191f;line-height:1.2;">' + esc(proj.title) + '</h3>' +
        '<div style="display:flex;align-items:center;gap:7px;font-size:13px;color:#79828f;font-weight:500;margin-bottom:14px;"><span class="dot"></span>' + esc(proj.location) + '</div>' +
        '<p style="font-size:14.5px;line-height:1.6;color:#5b6470;margin:0;">' + esc(proj.short) + '</p>' +
      '</div></a>';
  }).join('');
}

export function galleryHTML() {
  return gallery.map(function (src) {
    return slot('r8', 'Photo', src, 'LME Building Contractors project photo')
      .replace('class="img-slot r8"', 'class="img-slot r8" style="width:100%;aspect-ratio:1/1;"');
  }).join('');
}

export function processHTML() {
  return process.map(function (step) {
    return '<div class="reveal" style="border-top:2px solid #33b8de;padding-top:22px;">' +
      '<div style="font-family:\'Montserrat\',sans-serif;font-weight:800;font-size:15px;color:#5cc6e8;margin-bottom:14px;">/ ' + esc(step.n) + '</div>' +
      '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:20px;margin:0 0 10px;color:#fff;">' + esc(step.title) + '</h3>' +
      '<p style="font-size:14.5px;line-height:1.65;color:#aab3c0;margin:0;">' + esc(step.body) + '</p>' +
      '</div>';
  }).join('');
}

export function testimonialsHTML() {
  return testimonials.map(function (t) {
    return '<div class="card reveal" style="padding:30px 28px;display:flex;flex-direction:column;gap:16px;">' +
      '<div class="stars" style="font-size:16px;">★★★★★</div>' +
      '<p style="font-size:15.5px;line-height:1.65;color:#2c333d;margin:0;flex:1;">“' + esc(t.quote) + '”</p>' +
      '<div style="display:flex;align-items:center;gap:13px;border-top:1px solid #efeee9;padding-top:18px;">' +
        '<div class="img-slot circle" style="width:46px;height:46px;flex:none;"><span></span></div>' +
        '<div><div style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:15px;color:#15191f;">' + esc(t.name) + '</div>' +
        '<div style="font-size:13px;color:#79828f;">' + esc(t.meta) + '</div></div>' +
      '</div></div>';
  }).join('');
}

export function accHTML() {
  return accreditations.map(function (acc) {
    return '<div class="acc-chip">' +
      '<img src="/assets/img/accreditations/' + acc.file + '" alt="' + esc(acc.name) + '" loading="lazy" ' +
      'onerror="var s=document.createElement(\'span\');s.className=\'fallback\';s.textContent=this.alt;this.replaceWith(s)">' +
      '</div>';
  }).join('');
}

export function servicesListHTML() {
  return services.map(function (svc, idx) {
    var inc = svc.included.map(function (i) {
      return '<div style="display:flex;align-items:flex-start;gap:10px;font-size:14.5px;color:#3a414c;font-weight:500;line-height:1.4;"><span class="diamond" style="margin-top:6px;"></span>' + esc(i) + '</div>';
    }).join('');
    var next = services[idx + 1];
    var nextCta = next
      ? '<a class="read-more" href="/services#svc-' + next.id + '">Up next: ' + esc(next.title) + ' →</a>'
      : '<a class="read-more" href="/contact">Ready to start? Get a free quote →</a>';
    return '<div class="card reveal g-svc" id="svc-' + svc.id + '" style="overflow:hidden;scroll-margin-top:90px;">' +
      '<div style="position:relative;min-height:340px;overflow:hidden;">' + slot('fill', 'Drop service photo', svc.img, svc.title) + '</div>' +
      '<div style="padding:clamp(30px,3.4vw,52px);display:flex;flex-direction:column;justify-content:center;">' +
        '<div style="font-family:\'Montserrat\',sans-serif;font-weight:800;font-size:14px;letter-spacing:1px;color:#1192bb;margin-bottom:14px;">/ ' + esc(svc.n) + ' — SERVICE</div>' +
        '<h2 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:clamp(24px,2.4vw,32px);margin:0 0 14px;color:#15191f;">' + esc(svc.title) + '</h2>' +
        '<p style="font-size:16px;line-height:1.7;color:#5b6470;margin:0 0 22px;">' + esc(svc.body) + '</p>' +
        '<div style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:12px;letter-spacing:1.5px;color:#15191f;text-transform:uppercase;margin-bottom:14px;">What\'s Included</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:26px;">' + inc + '</div>' +
        '<div style="display:flex;gap:30px;flex-wrap:wrap;padding:20px 0;border-top:1px solid #efeee9;border-bottom:1px solid #efeee9;margin-bottom:26px;">' +
          '<div><div style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:11px;letter-spacing:1.3px;color:#79828f;text-transform:uppercase;margin-bottom:6px;">Typical Timeline</div><div style="font-family:\'Montserrat\',sans-serif;font-weight:800;font-size:20px;color:#15191f;">' + esc(svc.timeline) + '</div></div>' +
          '<div><div style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:11px;letter-spacing:1.3px;color:#79828f;text-transform:uppercase;margin-bottom:6px;">Investment From</div><div style="font-family:\'Montserrat\',sans-serif;font-weight:800;font-size:20px;color:#15191f;">' + esc(svc.priceFrom) + '</div></div>' +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:14px 24px;align-items:center;">' +
          '<a class="btn btn-cy" href="/contact">Enquire About ' + esc(svc.title) + '</a>' + nextCta +
        '</div>' +
      '</div></div>';
  }).join('');
}

export function faqHTML() {
  return faqs.map(function (f) {
    return '<div class="faq-item">' +
      '<button class="faq-q" type="button" aria-expanded="false"><span>' + esc(f.q) + '</span>' +
      '<span class="faq-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1192bb" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg></span></button>' +
      '<div class="faq-a"><div class="faq-a-inner">' + esc(f.a) + '</div></div>' +
      '</div>';
  }).join('');
}

export function comingHTML() {
  return comingSoon.map(function (cs) {
    return '<div class="reveal" style="background:#fff;border:1px dashed #cdd2c9;border-radius:10px;padding:clamp(26px,2.4vw,34px);">' +
      '<div style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:11px;letter-spacing:2px;color:#1192bb;margin-bottom:14px;">' + esc(cs.note) + '</div>' +
      '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:21px;margin:0 0 10px;color:#3a414c;">' + esc(cs.title) + '</h3>' +
      '<p style="font-size:14.5px;line-height:1.6;color:#79828f;margin:0;">' + esc(cs.body) + '</p></div>';
  }).join('');
}

export function coverageChipsHTML() {
  return coverage.map(function (town) {
    return '<div style="background:#fff;border:1px solid #e7e5e0;border-radius:100px;padding:11px 22px;font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:14px;color:#2c333d;display:flex;align-items:center;gap:9px;">' + PIN + esc(town) + '</div>';
  }).join('');
}

export function projectsListHTML() {
  return projectList.map(function (proj) {
    var pts = proj.points.map(function (pt) {
      return '<div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:#3a414c;font-weight:500;"><span class="diamond"></span>' + esc(pt) + '</div>';
    }).join('');
    return '<a class="card card-link reveal" href="/projects/' + proj.id + '" style="overflow:hidden;display:block;text-decoration:none;">' +
      '<div class="zoom-wrap" style="position:relative;height:250px;overflow:hidden;">' +
        slot('fill zoom', 'Drop cover photo', proj.cover, proj.title) +
        '<span style="position:absolute;top:14px;left:14px;font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:11px;letter-spacing:1px;color:#06222c;background:#33b8de;padding:6px 12px;border-radius:5px;">' + esc(proj.tag) + '</span>' +
      '</div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:8px;">' +
        '<div style="position:relative;height:84px;">' + slot('r6 fill', 'Detail', proj.thumbA, proj.title + ' detail') + '</div>' +
        '<div style="position:relative;height:84px;">' + slot('r6 fill', 'Detail', proj.thumbB, proj.title + ' detail') + '</div>' +
      '</div>' +
      '<div style="padding:10px 26px 30px;">' +
        '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:21px;margin:0 0 8px;color:#15191f;line-height:1.2;">' + esc(proj.title) + '</h3>' +
        '<div style="display:flex;align-items:center;gap:7px;font-size:13px;color:#79828f;font-weight:500;margin-bottom:16px;"><span class="dot"></span>' + esc(proj.location) + '</div>' +
        '<p style="font-size:14.5px;line-height:1.6;color:#5b6470;margin:0 0 18px;">' + esc(proj.body) + '</p>' +
        '<div style="display:flex;flex-direction:column;gap:9px;margin-bottom:22px;">' + pts + '</div>' +
        '<div style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:13px;letter-spacing:0.8px;color:#1192bb;">VIEW PROJECT →</div>' +
      '</div></a>';
  }).join('');
}

export function teamHTML() {
  return team.map(function (m) {
    return '<div class="card reveal" style="overflow:hidden;">' +
      '<div class="img-slot" style="width:100%;height:320px;">' +
        (m.img ? '<img src="' + asset(m.img) + '" alt="' + esc(m.name) + '" loading="lazy" onload="this.parentNode.classList.add(\'has-img\')" onerror="this.remove()">' : '') +
        '<span>Drop portrait</span></div>' +
      '<div style="padding:24px 26px 28px;">' +
        '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:20px;margin:0 0 4px;color:#15191f;">' + esc(m.name) + '</h3>' +
        '<div style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:13px;letter-spacing:0.6px;color:#1192bb;margin-bottom:12px;">' + esc(m.role) + '</div>' +
        '<p style="font-size:14px;line-height:1.6;color:#5b6470;margin:0;">' + esc(m.bio) + '</p>' +
      '</div></div>';
  }).join('');
}

export function blogCard(p) {
  return '<a class="card card-link reveal zoom-wrap" href="/blog/' + p.slug + '" style="overflow:hidden;display:block;text-decoration:none;">' +
    '<div style="position:relative;height:200px;overflow:hidden;">' + slot('fill zoom', 'Photo', p.img, p.title) +
      '<span class="post-cat" style="position:absolute;left:14px;bottom:14px;background:rgba(255,255,255,.94);">' + esc(p.cat) + '</span></div>' +
    '<div style="padding:22px 24px 26px;">' +
      '<div class="post-meta" style="margin-bottom:8px;">' + esc(p.date) + ' · ' + esc(p.read) + '</div>' +
      '<h3 class="post-title">' + esc(p.title) + '</h3>' +
      '<p style="font-size:14.5px;line-height:1.6;color:#5b6470;margin:0 0 16px;">' + esc(p.excerpt) + '</p>' +
      '<span class="read-more">Read article →</span>' +
    '</div></a>';
}

export function blogListHTML() {
  var f = posts[0];
  var featured = '<a class="blog-featured reveal" href="/blog/' + f.slug + '">' +
    '<div class="bf-img zoom-wrap">' + slot('fill zoom', 'Photo', f.img, f.title) + '</div>' +
    '<div>' +
      '<div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;"><span class="post-cat">' + esc(f.cat) + '</span><span class="post-meta">' + esc(f.date) + '</span></div>' +
      '<h2 class="h2" style="font-size:clamp(26px,3.2vw,40px);margin:0 0 16px;">' + esc(f.title) + '</h2>' +
      '<p class="lead" style="margin:0 0 24px;">' + esc(f.excerpt) + '</p>' +
      '<span class="read-more" style="font-size:14px;">Read Article ↗</span>' +
    '</div></a>';
  var grid = '<div class="g-cards">' + posts.slice(1).map(blogCard).join('') + '</div>';
  return featured + grid;
}

export function homeBlogHTML() {
  return posts.slice(0, 3).map(blogCard).join('');
}

/* ---------- single blog post article ---------- */
export function postArticleHTML(p) {
  var m = postMeta[p.slug] || {};
  var tags = m.tags || [p.cat];
  var service = m.service || { label: 'Our Services', hash: '/services' };
  var tagsHTML = tags.map(function (t) { return '<span class="post-tag">' + esc(t) + '</span>'; }).join('');
  var sideHTML =
    '<a class="rel-service" href="' + service.hash + '"><span class="rs-label">Related service</span><span class="rs-title">' + esc(service.label) + '</span><span class="rs-link">Learn more →</span></a>' +
    (m.pull ? '<div class="pull-quote"><span class="pq-mark">“</span><p>' + esc(m.pull) + '</p></div>' : '');
  var related = posts.filter(function (x) { return x.slug !== p.slug; }).slice(0, 3);
  var relHTML = related.map(function (r) {
    return '<a class="card card-link reveal zoom-wrap" href="/blog/' + r.slug + '" style="overflow:hidden;display:block;text-decoration:none;">' +
      '<div style="position:relative;height:190px;overflow:hidden;">' + slot('fill zoom', 'Photo', r.img, r.title) +
        '<span class="post-cat" style="position:absolute;left:14px;bottom:14px;background:rgba(255,255,255,.94);">' + esc(r.cat) + '</span></div>' +
      '<div style="padding:20px 22px 24px;"><div class="post-meta" style="margin-bottom:8px;">' + esc(r.date) + ' · ' + esc(r.read) + '</div>' +
      '<h3 class="post-title" style="font-size:18px;margin:0 0 14px;">' + esc(r.title) + '</h3><span class="read-more">Read article →</span></div></a>';
  }).join('');
  return '<article>' +
      '<section class="sec" style="background:#fff;padding-top:clamp(108px,13vw,150px);padding-bottom:0;">' +
        '<div class="wrap" style="max-width:1080px;">' +
          '<div class="post-crumb"><a href="/blog">Blog</a> &nbsp;/&nbsp; ' + esc(p.title) + '</div>' +
          '<div class="post-metarow"><span class="post-cat">' + esc(p.cat) + '</span><span class="sep">·</span>' + esc(p.date) + '<span class="sep">·</span>' + esc(p.read) + '<span class="sep">·</span>By <a href="/about">' + esc(author.name) + '</a></div>' +
          '<h1 class="post-hero-title">' + esc(p.title) + '</h1>' +
          '<p class="post-standfirst">' + esc(p.excerpt) + '</p>' +
          '<div class="post-tags">' + tagsHTML + '</div>' +
        '</div>' +
      '</section>' +
      '<section style="background:#fff;padding:clamp(28px,4vw,44px) 0 0;">' +
        '<div class="wrap" style="max-width:1080px;"><div class="post-cover">' + slot('fill', 'Photo', p.img, p.title) + '</div></div>' +
      '</section>' +
      '<section class="sec" style="background:#fff;">' +
        '<div class="wrap post-layout" style="max-width:1080px;">' +
          '<aside class="post-side">' + sideHTML + '</aside>' +
          '<div><div class="prose" style="margin:0;">' + p.body +
            '<p>We handle ' + esc(service.label.toLowerCase()) + ' across Sleaford, Lincoln, Grantham and the wider Lincolnshire area — <a href="' + service.hash + '">see our services →</a></p>' +
          '</div>' +
          '<div class="author-box"><div class="author-av">' + esc(author.initials) + '</div><div><div class="ab-label">Written by</div><div class="ab-name">' + esc(author.name) + '</div><div class="ab-role">' + esc(author.role) + '</div><p class="ab-bio">' + esc(author.bio) + '</p></div></div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      (relHTML ? '<section class="sec tex tex-grid" style="background:#f5f4f1;"><div class="wrap"><div class="reveal" style="margin-bottom:clamp(30px,4vw,44px);"><span class="eyebrow" style="margin-bottom:14px;">Related Articles</span><h2 class="h2">Keep reading.</h2></div><div class="g-cards">' + relHTML + '</div></div></section>' : '') +
    '</article>';
}

/* ---------- single project detail ---------- */
export function projectDetailHTML(pr) {
  var gal = (pr.gallery || []).map(function (g) {
    return '<div class="zoom-wrap" style="position:relative;border-radius:12px;overflow:hidden;height:clamp(180px,22vw,260px);">' + slot('fill zoom', 'Photo', g, pr.title) + '</div>';
  }).join('');
  var scope = (pr.scope || []).map(function (s) {
    return '<div style="display:flex;align-items:flex-start;gap:11px;font-size:15px;color:#3a414c;line-height:1.5;margin-bottom:12px;"><span class="diamond" style="margin-top:6px;"></span>' + esc(s) + '</div>';
  }).join('');
  return '<section class="hero hero-inner">' +
      '<div class="img-slot dark fill"><img src="' + asset(pr.cover) + '" alt="' + esc(pr.title) + '" onload="this.parentNode.classList.add(\'has-img\')" onerror="this.remove()"><span>Photo</span></div>' +
      '<div class="hero-overlay" style="background:linear-gradient(0deg,rgba(8,11,15,0.8) 0%,rgba(8,11,15,0.2) 70%),linear-gradient(95deg,rgba(8,11,15,0.62),rgba(8,11,15,0.2));"></div>' +
      '<div class="wrap hin"><span class="eyebrow">' + esc(pr.tag) + '</span>' +
        '<h1 class="hero-h1">' + esc(pr.title) + '</h1>' +
        '<div class="hero-proof"><span class="proof-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5cc6e8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>' + esc(pr.location) + '</span>' +
        '<span class="proof-chip">' + esc(pr.duration) + '</span><span class="proof-chip">Completed</span></div></div>' +
    '</section>' +
    '<section class="sec" style="background:#fff;">' +
      '<div class="wrap"><a class="back-link" href="/projects">← All projects</a>' +
        '<div class="g-contact" style="margin-top:18px;">' +
          '<div class="reveal"><span class="eyebrow" style="margin-bottom:16px;">Project Overview</span>' +
            '<div style="font-size:16px;line-height:1.8;color:#3a414c;">' + pr.overview + '</div>' +
            '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:19px;margin:26px 0 16px;color:#15191f;">What we did</h3>' + scope +
          '</div>' +
          '<div class="reveal"><div class="box"><h3 class="box-title" style="margin-bottom:6px;">Project details</h3><div class="spec-list">' +
            '<div class="spec-row"><span class="k">Type</span><span class="v">' + esc(pr.tag) + '</span></div>' +
            '<div class="spec-row"><span class="k">Location</span><span class="v">' + esc(pr.location) + '</span></div>' +
            '<div class="spec-row"><span class="k">Duration</span><span class="v">' + esc(pr.duration) + '</span></div>' +
            '<div class="spec-row"><span class="k">Status</span><span class="v">Completed</span></div>' +
          '</div><a class="btn btn-cy" href="/contact" style="width:100%;margin-top:20px;">Start a similar project</a></div></div>' +
        '</div>' +
        (gal ? '<div class="reveal" style="margin-top:clamp(36px,4vw,52px);"><h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:19px;margin:0 0 18px;color:#15191f;">Gallery</h3><div class="g-cards">' + gal + '</div></div>' : '') +
      '</div>' +
    '</section>';
}

/* ---------- policy docs ---------- */
export function policyDoc(title, intro, sections) {
  var body = '<span class="eyebrow" style="margin-bottom:16px;">Legal</span>' +
    '<h1 class="h2" style="margin-bottom:18px;">' + title + '</h1>' +
    '<p style="font-size:13px;color:#79828f;margin:0 0 28px;">Last updated: June 2026</p>' +
    '<p class="lead" style="margin-bottom:30px;">' + intro + '</p>';
  body += sections.map(function (s) {
    return '<h2 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:20px;color:#15191f;margin:28px 0 10px;">' + esc(s.h) + '</h2>' +
      '<p style="font-size:15px;line-height:1.7;color:#5b6470;margin:0;">' + s.p + '</p>';
  }).join('');
  return body;
}
