/* =========================================================
   LME Building Contractors — site behaviour
   Data-driven rendering, hash routing, reveals, form, cookies.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- DATA (ported from the design component) ---------- */
  var heroTrust = ['Fully Insured', '15+ Years', '10-Year Guarantee'];

  var stats = [
    { n: 250, dec: 0, suf: '+', l: 'Projects Completed', d: 'Homes extended, renovated and built across Lincolnshire.' },
    { n: 15, dec: 0, suf: '', l: 'Years Experience', d: 'Hands-on building expertise on every single project.' },
    { n: 4.9, dec: 1, suf: '★', l: 'Average Rating', d: 'From 127 verified reviews by local homeowners.' },
    { n: 10, dec: 0, suf: '-Yr', l: 'Workmanship Guarantee', d: 'Every build backed long after we hand over the keys.' }
  ];

  var services = [
    { n: '01', id: 'ext', img: 'assets/img/extension.jpg', title: 'Bespoke Home Extensions', short: 'Single & double-storey, wrap-around and rear extensions that add space, light and value.', body: 'From concept design to final handover — single-storey, two-storey, wrap-around and rear extensions that add space, light and lasting value to your home. We manage structural calculations, building control and the full build so you have a single point of contact throughout.', included: ['Architectural & structural drawings', 'Building Regulations sign-off', 'Groundworks & foundations', 'Steelwork & roofing', 'Plastering, electrics & plumbing', 'Full internal finishing'], timeline: '8–16 weeks', priceFrom: '£45,000' },
    { n: '02', id: 'reno', img: 'assets/img/renovation.jpg', title: 'High-End Renovations', short: 'Complete property transformations, structural alterations and sympathetic restorations.', body: 'Complete property transformations and structural alterations — from full refurbishments to the sympathetic restoration of period features. Ideal for tired properties, dated layouts or homes that need to work harder for modern living.', included: ['Design & space planning', 'Removal of load-bearing walls', 'Kitchen & bathroom fit-out', 'Rewiring & re-plumbing', 'Joinery & bespoke storage', 'Decoration & flooring'], timeline: '6–14 weeks', priceFrom: '£30,000' },
    { n: '03', id: 'build', img: 'assets/img/newbuild.jpg', title: 'Modern New Builds', short: 'Turn-key new homes and self-build support, built to exacting modern standards.', body: 'Turn-key new homes and self-build support, blending contemporary design with proven traditional craftsmanship. We work from your plans or help develop them, delivering an energy-efficient home built to last.', included: ['Site survey & groundworks', 'Foundations & drainage', 'Full structural build', 'Energy-efficient systems', 'Bespoke joinery & glazing', 'Landscaping & handover'], timeline: '6–12 months', priceFrom: 'POA' }
  ];

  var faqs = [
    { q: 'How much does a house extension cost in Lincolnshire?', a: 'As a rough guide, a single-storey extension in Lincolnshire usually works out around £1,800–£2,800 per m² — so roughly £40,000–£70,000 for a typical 20m² build. A two-storey extension often costs a little less per m², because the foundations and roof are shared. VAT at 20% applies to most extension work, and we price every job individually after a free site visit.' },
    { q: 'Do I need planning permission for an extension?', a: 'Often you won’t. Many single-storey rear extensions fall under Permitted Development (up to 4m for a detached house, 3m for others, within the size limits), so they don’t need full planning permission — though Building Regulations approval is still required. Conservation areas and listed buildings have tighter rules. We sort the drawings, Building Control and any planning application for you.' },
    { q: 'How long does a house extension take to build?', a: 'On site, a single-storey extension typically takes 8–16 weeks and a two-storey 14–24 weeks. Before we break ground there’s usually design, structural drawings and any approvals to allow for — often another 8–12 weeks. We agree a clear programme up front and keep you posted at every stage.' },
    { q: 'Do you handle the design, drawings and building regulations?', a: 'Yes. We manage architectural and structural drawings, Building Regulations sign-off and any planning application, so you’ve got one accountable point of contact from first sketch to final handover instead of juggling separate trades and consultants.' },
    { q: 'How much does a loft or garage conversion cost?', a: 'A dormer loft conversion is usually somewhere around £30,000–£55,000 depending on type and size, while a garage conversion is a more affordable way to add a room, often £8,000–£18,000. Both are quoted individually once we’ve checked head height, structure and what you want from the space.' },
    { q: 'Are you insured, accredited and do you guarantee your work?', a: 'Yes to all three. We carry full public liability and employer’s liability insurance, hold recognised industry accreditations, and back every project with a 10-year workmanship guarantee. We’re happy to show our paperwork before you commit to anything.' },
    { q: 'What areas of Lincolnshire do you cover?', a: 'We’re based in Sleaford and work across roughly a 25-mile radius — Lincoln, Grantham, Boston, Spalding, Bourne, Newark and the surrounding villages. If your town isn’t on the list, give us a call anyway; there’s a good chance we can still help.' },
    { q: 'Do you provide free, no-obligation quotes?', a: 'Always. Every project starts with a free site visit and a proper chat about what you’re after, followed by a clear, itemised written quote with no hidden extras and no pressure to go ahead.' }
  ];

  var coverage = ['Sleaford', 'Lincoln', 'Grantham', 'Boston', 'Spalding', 'Bourne', 'Newark', 'Surrounding villages'];

  var valueProps = [
    { title: 'Fully Insured & Accredited', body: 'Comprehensive cover and recognised industry accreditations on every project.' },
    { title: 'Fixed, Transparent Quotes', body: 'Clear, itemised pricing with no hidden costs and no surprises.' },
    { title: '10-Year Workmanship Guarantee', body: 'Genuine peace of mind long after we hand over the keys.' },
    { title: 'Local, On Time, On Budget', body: 'Lincolnshire-based, with a track record of reliable delivery.' }
  ];

  var process = [
    { n: '01', title: 'Consultation', body: 'A free, no-obligation site visit to understand your vision, budget and timeline.' },
    { n: '02', title: 'Design & Quote', body: 'Detailed design proposals and a clear, itemised quotation with no surprises.' },
    { n: '03', title: 'Build', body: 'On-site delivery led personally, with regular updates and rigorous quality control.' },
    { n: '04', title: 'Handover', body: 'A finished space, signed off to the highest standard, with aftercare support.' }
  ];

  var projectList = [
    { id: 'sleaford', tag: 'Renovation', cover: 'assets/img/sleaford.jpg', thumbA: 'assets/img/renovation.jpg', thumbB: 'assets/img/sleaford.jpg', title: 'Sleaford Cottage Refurbishment', location: 'Sleaford, Lincolnshire', short: 'A sympathetic full restoration of a listed cottage using reclaimed local stone and lime mortar.', body: 'A sympathetic full restoration of a listed cottage, preserving traditional features while integrating modern amenities using reclaimed local stone and lime mortar.', points: ['Traditional stone façade restored', 'Lime mortar repointing', 'Sympathetic glazing'] },
    { id: 'lincoln', tag: 'Extension', cover: 'assets/img/lincoln.jpg', thumbA: 'assets/img/extension.jpg', thumbB: 'assets/img/lincoln.jpg', title: 'Lincoln Modern Home Extension', location: 'Lincoln, Lincolnshire', short: 'A contemporary extension maximising open-plan living and connecting the home to the garden.', body: 'A contemporary extension maximising open-plan living, seamlessly connecting the home to the garden with floor-to-ceiling bifold doors and bespoke finishes.', points: ['Open-plan living space', 'High-performance bifold doors', 'Bespoke finishes'] },
    { id: 'grantham', tag: 'New Build', cover: 'assets/img/grantham.jpg', thumbA: 'assets/img/newbuild.jpg', thumbB: 'assets/img/grantham.jpg', title: 'Grantham Contemporary New Build', location: 'Grantham, Lincolnshire', short: 'A five-bedroom turn-key family home built to exacting specifications with eco-friendly features.', body: 'A stunning five-bedroom turn-key family home built to exacting specifications with eco-friendly features and bespoke structural glazing, designed for modern luxury.', points: ['Bespoke architectural design', 'Structural glazing façade', 'Energy-efficient systems'] }
  ];

  var comingSoon = [
    { title: 'Loft Conversions', note: 'COMING SOON', body: 'Creating functional living space — from master suites to dedicated home offices.' },
    { title: 'Commercial Refurbishment', note: 'COMING SOON', body: 'Functional and aesthetic refits for retail, office and commercial spaces.' },
    { title: 'Heritage Restoration', note: 'COMING SOON', body: 'Sympathetic, compliant restoration of listed and historic structures.' }
  ];

  var testimonials = [
    { id: 't1', quote: 'From the first site visit to the final handover, LME were professional, tidy and on time. Our extension is everything we hoped for.', name: 'Sarah & Tom H.', meta: 'Two-storey extension · Sleaford' },
    { id: 't2', quote: 'The quality of workmanship is outstanding. They treated our home like their own and the finish is immaculate.', name: 'James P.', meta: 'Full renovation · Lincoln' },
    { id: 't3', quote: 'Lee and the team built our new home to an exceptional standard, on budget and ahead of schedule. Highly recommended.', name: 'The Carters', meta: 'New build · Grantham' }
  ];

  var accreditations = [
    { file: 'checkatrade.png', name: 'Checkatrade' },
    { file: 'trustmark.png', name: 'TrustMark' },
    { file: 'fmb.png', name: 'Federation of Master Builders' },
    { file: 'gas-safe.png', name: 'Gas Safe Register' },
    { file: 'nhbc.png', name: 'NHBC' },
    { file: 'which.png', name: 'Which? Trusted Trader' }
  ];

  // gallery reuses the uploaded work/location photos (no separate uploads needed)
  var gallery = [
    'assets/img/newbuild.jpg', 'assets/img/renovation.jpg', 'assets/img/extension.jpg', 'assets/img/sleaford.jpg',
    'assets/img/lincoln.jpg', 'assets/img/grantham.jpg', 'assets/img/projects-hero.jpg', 'assets/img/about-hero.jpg'
  ];

  var team = [
    { id: 'lead', img: 'assets/img/portrait.jpg', name: 'Lee', role: 'Founder & Lead Contractor', bio: 'Leads every build on-site, from first survey to final handover, with decades of hands-on experience.' },
    { id: 'site', img: 'assets/img/portrait.jpg', name: 'Site Manager', role: 'Project & Site Management', bio: 'Keeps every project on programme and on budget, coordinating trades and quality control.' },
    { id: 'joiner', img: 'assets/img/portrait.jpg', name: 'Lead Joiner', role: 'Joinery & Finishes', bio: 'Responsible for the premium finishing touches that define an LME build.' }
  ];

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  // image slot: shows the real photo when present, falls back to the labelled placeholder
  function slot(extra, label, src, alt) {
    var img = src
      ? '<img src="' + src + '" alt="' + esc(alt || label) + '" loading="lazy" onload="this.parentNode.classList.add(\'has-img\')" onerror="this.remove()">'
      : '';
    return '<div class="img-slot ' + extra + '">' + img + '<span>' + esc(label) + '</span></div>';
  }
  var CHECK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5cc6e8" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" style="flex:none;"><path d="M5 12.5 L10 17.5 L19 6.5"></path></svg>';
  var PIN = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1192bb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" style="flex:none;"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>';
  var TICK_CIRCLE = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#33b8de" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M7.5 12.5 L10.5 15.5 L16.5 8.5"></path></svg>';

  /* ---------- render: statistic blocks ---------- */
  function statsHTML() {
    return stats.map(function (st) {
      return '<div class="stat reveal">' +
        '<div class="stat-num"><span class="num" data-count="' + st.n + '" data-dec="' + st.dec + '">0</span>' +
        (st.suf ? '<span class="suf">' + esc(st.suf) + '</span>' : '') + '</div>' +
        '<div class="stat-label">' + esc(st.l) + '</div>' +
        '<div class="stat-desc">' + esc(st.d) + '</div>' +
        '</div>';
    }).join('');
  }

  function render() {
    /* hero trust chips */
    var ht = document.querySelector('.hero-trust');
    if (ht) {
      ht.parentNode.innerHTML = heroTrust.map(function (t) {
        return '<div style="display:flex;align-items:center;gap:9px;font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:13.5px;color:#eef4f7;">' + CHECK + esc(t) + '</div>';
      }).join('');
    }

    /* stats (home + about) */
    if (el('home-stats')) el('home-stats').innerHTML = statsHTML();
    if (el('about-stats')) el('about-stats').innerHTML = statsHTML();

    /* home services cards */
    el('home-services').innerHTML = services.map(function (svc) {
      return '<a class="card card-link reveal zoom-wrap" href="#services" data-nav="services" style="overflow:hidden;display:block;text-decoration:none;">' +
        '<div style="position:relative;height:210px;overflow:hidden;">' +
          slot('fill zoom', 'Drop service photo', svc.img, svc.title) +
          '<span style="position:absolute;top:14px;left:14px;font-family:\'Montserrat\',sans-serif;font-weight:800;font-size:12px;color:#06222c;background:#33b8de;padding:6px 11px;border-radius:5px;">' + esc(svc.n) + '</span>' +
        '</div>' +
        '<div style="padding:26px 26px 30px;">' +
          '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:21px;margin:0 0 10px;color:#15191f;">' + esc(svc.title) + '</h3>' +
          '<p style="font-size:15px;line-height:1.6;color:#5b6470;margin:0 0 18px;">' + esc(svc.short) + '</p>' +
          '<span style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:13px;letter-spacing:0.6px;color:#1192bb;">LEARN MORE →</span>' +
        '</div></a>';
    }).join('');

    /* value props */
    el('home-values').innerHTML = valueProps.map(function (vp) {
      return '<div class="reveal" style="text-align:center;padding:0 6px;">' +
        '<div style="display:flex;justify-content:center;margin-bottom:18px;">' + TICK_CIRCLE + '</div>' +
        '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:18px;margin:0 0 10px;color:#15191f;">' + esc(vp.title) + '</h3>' +
        '<p style="font-size:14.5px;line-height:1.6;color:#5b6470;margin:0;">' + esc(vp.body) + '</p>' +
        '</div>';
    }).join('');

    /* featured projects (home) */
    el('home-featured').innerHTML = projectList.map(function (proj) {
      return '<a class="card card-link reveal zoom-wrap" href="#projects" data-nav="projects" style="overflow:hidden;display:block;text-decoration:none;">' +
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

    /* gallery */
    el('home-gallery').innerHTML = gallery.map(function (src) {
      return slot('r8', 'Photo', src, 'LME Building Contractors project photo')
        .replace('class="img-slot r8"', 'class="img-slot r8" style="width:100%;aspect-ratio:1/1;"');
    }).join('');

    /* process */
    el('home-process').innerHTML = process.map(function (step) {
      return '<div class="reveal" style="border-top:2px solid #33b8de;padding-top:22px;">' +
        '<div style="font-family:\'Montserrat\',sans-serif;font-weight:800;font-size:15px;color:#5cc6e8;margin-bottom:14px;">/ ' + esc(step.n) + '</div>' +
        '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:20px;margin:0 0 10px;color:#fff;">' + esc(step.title) + '</h3>' +
        '<p style="font-size:14.5px;line-height:1.65;color:#aab3c0;margin:0;">' + esc(step.body) + '</p>' +
        '</div>';
    }).join('');

    /* testimonials */
    el('home-testimonials').innerHTML = testimonials.map(function (t) {
      return '<div class="card reveal" style="padding:30px 28px;display:flex;flex-direction:column;gap:16px;">' +
        '<div class="stars" style="font-size:16px;">★★★★★</div>' +
        '<p style="font-size:15.5px;line-height:1.65;color:#2c333d;margin:0;flex:1;">“' + esc(t.quote) + '”</p>' +
        '<div style="display:flex;align-items:center;gap:13px;border-top:1px solid #efeee9;padding-top:18px;">' +
          '<div class="img-slot circle" style="width:46px;height:46px;flex:none;"><span></span></div>' +
          '<div><div style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:15px;color:#15191f;">' + esc(t.name) + '</div>' +
          '<div style="font-size:13px;color:#79828f;">' + esc(t.meta) + '</div></div>' +
        '</div></div>';
    }).join('');

    /* accreditations — uniform white chips, logo contained, name as text fallback */
    el('home-acc').innerHTML = accreditations.map(function (acc) {
      return '<div class="acc-chip">' +
        '<img src="assets/img/accreditations/' + acc.file + '" alt="' + esc(acc.name) + '" loading="lazy" ' +
        'onerror="var s=document.createElement(\'span\');s.className=\'fallback\';s.textContent=this.alt;this.replaceWith(s)">' +
        '</div>';
    }).join('');

    /* services page — detailed rows */
    el('services-list').innerHTML = services.map(function (svc) {
      var inc = svc.included.map(function (i) {
        return '<div style="display:flex;align-items:flex-start;gap:10px;font-size:14.5px;color:#3a414c;font-weight:500;line-height:1.4;"><span class="diamond" style="margin-top:6px;"></span>' + esc(i) + '</div>';
      }).join('');
      return '<div class="card reveal g-svc" style="overflow:hidden;">' +
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
          '<a class="btn btn-cy" href="#contact" data-nav="contact" style="align-self:flex-start;">Enquire About ' + esc(svc.title) + '</a>' +
        '</div></div>';
    }).join('');

    /* services FAQ */
    el('services-faq').innerHTML = faqs.map(function (f) {
      return '<div class="faq-item">' +
        '<button class="faq-q" type="button" aria-expanded="false"><span>' + esc(f.q) + '</span>' +
        '<span class="faq-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1192bb" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg></span></button>' +
        '<div class="faq-a"><div class="faq-a-inner">' + esc(f.a) + '</div></div>' +
        '</div>';
    }).join('');

    /* coming soon (services + projects) */
    var comingHTML = comingSoon.map(function (cs) {
      return '<div class="reveal" style="background:#fff;border:1px dashed #cdd2c9;border-radius:10px;padding:clamp(26px,2.4vw,34px);">' +
        '<div style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:11px;letter-spacing:2px;color:#1192bb;margin-bottom:14px;">' + esc(cs.note) + '</div>' +
        '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:21px;margin:0 0 10px;color:#3a414c;">' + esc(cs.title) + '</h3>' +
        '<p style="font-size:14.5px;line-height:1.6;color:#79828f;margin:0;">' + esc(cs.body) + '</p></div>';
    }).join('');
    el('services-coming').innerHTML = comingHTML;
    el('projects-coming').innerHTML = comingHTML;

    /* coverage chips */
    el('services-coverage').innerHTML = coverage.map(function (town) {
      return '<div style="background:#fff;border:1px solid #e7e5e0;border-radius:100px;padding:11px 22px;font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:14px;color:#2c333d;display:flex;align-items:center;gap:9px;">' + PIN + esc(town) + '</div>';
    }).join('');

    /* projects page cards (with before/after) */
    el('projects-list').innerHTML = projectList.map(function (proj) {
      var pts = proj.points.map(function (pt) {
        return '<div style="display:flex;align-items:center;gap:10px;font-size:13.5px;color:#3a414c;font-weight:500;"><span class="diamond"></span>' + esc(pt) + '</div>';
      }).join('');
      return '<div class="card reveal" style="overflow:hidden;">' +
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
          '<div style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:13px;letter-spacing:0.8px;color:#1192bb;cursor:pointer;">VIEW DETAILED GALLERY →</div>' +
        '</div></div>';
    }).join('');

    /* about team */
    el('about-team').innerHTML = team.map(function (m) {
      return '<div class="card reveal" style="overflow:hidden;">' +
        '<div class="img-slot" style="width:100%;height:320px;">' +
          (m.img ? '<img src="' + m.img + '" alt="' + esc(m.name) + '" loading="lazy" onload="this.parentNode.classList.add(\'has-img\')" onerror="this.remove()">' : '') +
          '<span>Drop portrait</span></div>' +
        '<div style="padding:24px 26px 28px;">' +
          '<h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:20px;margin:0 0 4px;color:#15191f;">' + esc(m.name) + '</h3>' +
          '<div style="font-family:\'Montserrat\',sans-serif;font-weight:600;font-size:13px;letter-spacing:0.6px;color:#1192bb;margin-bottom:12px;">' + esc(m.role) + '</div>' +
          '<p style="font-size:14px;line-height:1.6;color:#5b6470;margin:0;">' + esc(m.bio) + '</p>' +
        '</div></div>';
    }).join('');

    renderPolicies();
  }

  /* ---------- policy content ---------- */
  function policyDoc(title, intro, sections) {
    var body = '<span class="eyebrow" style="margin-bottom:16px;">Legal</span>' +
      '<h1 class="h2" style="margin-bottom:18px;">' + esc(title) + '</h1>' +
      '<p style="font-size:13px;color:#79828f;margin:0 0 28px;">Last updated: June 2026</p>' +
      '<p class="lead" style="margin-bottom:30px;">' + intro + '</p>';
    body += sections.map(function (s) {
      return '<h2 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:20px;color:#15191f;margin:28px 0 10px;">' + esc(s.h) + '</h2>' +
        '<p style="font-size:15px;line-height:1.7;color:#5b6470;margin:0;">' + s.p + '</p>';
    }).join('');
    return body;
  }

  function renderPolicies() {
    var priv = document.querySelector('[data-policy="privacy"]');
    var cook = document.querySelector('[data-policy="cookies"]');
    var term = document.querySelector('[data-policy="terms"]');
    if (priv) priv.innerHTML = policyDoc('Privacy Policy',
      'This policy explains how LME Building Contractors collects, uses and protects the personal information you provide through this website, in line with the UK GDPR and Data Protection Act 2018.',
      [
        { h: 'Who we are', p: 'LME Building Contractors is a building contractor based in Sleaford, Lincolnshire. For any data queries, contact us at <a href="mailto:Lmebuildingcontractors@hotmail.com" style="color:#1192bb;">Lmebuildingcontractors@hotmail.com</a>.' },
        { h: 'What we collect', p: 'When you submit our enquiry form we collect your name, email address, phone number and the project details you choose to share. We do not collect this information unless you provide it.' },
        { h: 'How we use it', p: 'We use your details solely to respond to your enquiry, provide quotations and manage any resulting project. We do not sell your data or share it with third parties for marketing.' },
        { h: 'How long we keep it', p: 'We retain enquiry information only as long as necessary to deal with your request and any legal or accounting obligations, after which it is securely deleted.' },
        { h: 'Your rights', p: 'You have the right to access, correct or request deletion of your personal data at any time. To exercise these rights, email us and we will respond within one month.' }
      ]);
    if (cook) cook.innerHTML = policyDoc('Cookie Policy',
      'This policy explains how this website uses cookies and similar technologies, and how you can control them.',
      [
        { h: 'What are cookies?', p: 'Cookies are small text files stored on your device when you visit a website. They help the site function and can provide information to the site owner.' },
        { h: 'Cookies we use', p: 'We use a single essential cookie to remember your cookie preference. With your consent, we may also use analytics cookies to understand how visitors use the site so we can improve it.' },
        { h: 'Managing cookies', p: 'You chose your preference using our cookie banner. You can change it at any time by clearing this site\'s data in your browser, which will prompt the banner to appear again. You can also block cookies through your browser settings.' },
        { h: 'Essential vs non-essential', p: 'Essential cookies are required for the site to work and cannot be switched off. Non-essential (analytics) cookies are only set if you accept them.' }
      ]);
    if (term) term.innerHTML = policyDoc('Terms &amp; Conditions',
      'These terms govern your use of this website. Building works are subject to a separate written contract agreed before any project begins.',
      [
        { h: 'Use of this website', p: 'The content on this site is provided for general information about our services. While we aim to keep it accurate and up to date, it does not constitute a contractual offer or a binding quotation.' },
        { h: 'Quotations', p: 'Any prices shown are indicative guide figures only. All projects are quoted individually following a site visit, and any agreed works are governed by a separate written contract.' },
        { h: 'Intellectual property', p: 'The design, text and branding on this site belong to LME Building Contractors and may not be reproduced without permission.' },
        { h: 'Liability', p: 'We are not liable for any loss arising from reliance on website content alone. For advice specific to your project, please contact us directly.' }
      ]);
  }

  /* ---------- routing ---------- */
  var PAGES = ['home', 'services', 'projects', 'about', 'contact', 'privacy', 'cookies', 'terms'];
  var TITLES = {
    home: 'Builders in Sleaford & Lincolnshire | LME Building Contractors',
    services: 'Building Services in Lincolnshire | Extensions, Renovations & New Builds',
    projects: 'Our Projects | Lincolnshire Builders | LME Building Contractors',
    about: 'About Us | Sleaford & Lincolnshire Builders | LME Building Contractors',
    contact: 'Contact Us | Free Quote in Lincolnshire | LME Building Contractors',
    privacy: 'Privacy Policy | LME Building Contractors',
    cookies: 'Cookie Policy | LME Building Contractors',
    terms: 'Terms & Conditions | LME Building Contractors'
  };
  var DESCRIPTIONS = {
    home: 'Sleaford-based builders covering Lincoln, Grantham, Boston & across Lincolnshire. Home extensions, renovations & new builds — fully insured, 10-yr guarantee, free quotes.',
    services: 'Home extensions, high-end renovations, new builds and loft conversions across Lincolnshire. Fixed pricing, free site visits and a 10-year workmanship guarantee.',
    projects: 'See recent extensions, renovations and new builds across Sleaford, Lincoln and Grantham — before-and-after photos of real Lincolnshire projects by LME Building Contractors.',
    about: 'Reliable local Lincolnshire contractors with 15+ years on the tools. Fully insured and accredited, every build led on-site with a 10-year workmanship guarantee.',
    contact: 'Get a free, no-obligation quote within one working day. Extensions, renovations and new builds across Lincolnshire. Call LME Building Contractors on 07592 278032.',
    privacy: 'How LME Building Contractors collects, uses and protects your personal information, in line with UK GDPR.',
    cookies: 'How this website uses cookies and how you can control them.',
    terms: 'The terms and conditions for using the LME Building Contractors website.'
  };
  function setMeta(name, content, attr) {
    attr = attr || 'name';
    var m = document.head.querySelector('meta[' + attr + '="' + name + '"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute(attr, name); document.head.appendChild(m); }
    m.setAttribute('content', content);
  }

  function showPage(page, skipScroll) {
    if (PAGES.indexOf(page) === -1) page = 'home';
    PAGES.forEach(function (p) {
      var node = el(p);
      if (node) node.classList.toggle('active', p === page);
    });
    document.querySelectorAll('.nav-link').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-nav') === page);
    });
    var title = TITLES[page] || TITLES.home;
    var desc = DESCRIPTIONS[page] || DESCRIPTIONS.home;
    document.title = title;
    setMeta('description', desc);
    setMeta('og:title', title, 'property');
    setMeta('og:description', desc, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', desc);
    closeMenu();
    if (!skipScroll) window.scrollTo({ top: 0, behavior: 'auto' });
    observeReveals();
    updateHeader();
    parallax();
  }

  function routeFromHash(skipScroll) {
    var hash = (location.hash || '#home').replace('#', '');
    showPage(hash, skipScroll);
  }

  /* intercept data-nav clicks so we always scroll to top + close menu */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-nav]');
    if (!a) return;
    var page = a.getAttribute('data-nav');
    if (location.hash.replace('#', '') === page) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      closeMenu();
    }
    // otherwise let the hashchange handler run
  });

  window.addEventListener('hashchange', function () { routeFromHash(false); });

  /* ---------- mobile menu ---------- */
  var burger = el('burger');
  var menu = el('mobileMenu');
  var backdrop = el('navBackdrop');
  var drawerClose = el('drawerClose');
  function setMenu(open) {
    if (menu) menu.classList.toggle('open', open);
    if (backdrop) backdrop.classList.toggle('open', open);
    if (burger) { burger.classList.toggle('open', open); burger.setAttribute('aria-expanded', open ? 'true' : 'false'); }
    document.body.style.overflow = open ? 'hidden' : '';
    updateHeader();
  }
  function closeMenu() { setMenu(false); }
  if (burger) burger.addEventListener('click', function () { setMenu(!(menu && menu.classList.contains('open'))); });
  if (backdrop) backdrop.addEventListener('click', closeMenu);
  if (drawerClose) drawerClose.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------- count-up numbers ---------- */
  function countUp(node) {
    if (node.dataset.done) return;
    node.dataset.done = '1';
    var target = parseFloat(node.getAttribute('data-count')) || 0;
    var dec = parseInt(node.getAttribute('data-dec') || '0', 10);
    var dur = 1600, start = null;
    function fmt(v) { return dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-GB'); }
    function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = fmt(target * eased);
      if (p < 1) requestAnimationFrame(tick); else node.textContent = fmt(target);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- scroll reveals (IntersectionObserver) ---------- */
  var io = null;
  function observeReveals() {
    var nodes = document.querySelectorAll('.page.active .reveal:not(.in), .page.active .hin:not(.in)');
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) {
        n.classList.add('in');
        var num = n.querySelector && n.querySelector('.num[data-count]');
        if (num) countUp(num);
      });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
            var num = en.target.querySelector && en.target.querySelector('.num[data-count]');
            if (num) countUp(num);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    nodes.forEach(function (n) {
      // stagger grid children for a seamless cascade
      if (n.classList.contains('reveal') && !n.dataset.stag && n.parentNode) {
        var sibs = n.parentNode.querySelectorAll(':scope > .reveal');
        var idx = Array.prototype.indexOf.call(sibs, n);
        if (idx > 0) n.style.transitionDelay = (Math.min(idx, 6) * 0.075) + 's';
        n.dataset.stag = '1';
      }
      io.observe(n);
    });
  }

  /* ---------- scroll progress bar ---------- */
  var progress = el('progress');
  function updateProgress() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    var pct = max > 0 ? (h.scrollTop || document.body.scrollTop) / max : 0;
    progress.style.width = (pct * 100) + '%';
  }

  /* ---------- premium header: transparent over hero -> solid on scroll ---------- */
  var header = el('siteHeader');
  function activeHero() {
    var ap = document.querySelector('.page.active');
    return ap ? ap.querySelector(':scope > .hero') : null;
  }
  function updateHeader() {
    if (!header) return;
    var y = window.scrollY || document.documentElement.scrollTop || 0;
    var hero = activeHero();
    // transparent only at the very top of a hero page; fades to solid white as soon as you scroll
    var overHero = !!hero && y < 24;
    if (menu && menu.classList.contains('open')) overHero = false;
    header.classList.toggle('over-hero', overHero);
    header.classList.toggle('scrolled', y > 10 && !overHero);
  }

  /* ---------- hero parallax ---------- */
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function parallax() {
    if (reduceMotion) return;
    var img = document.querySelector('.page.active .hero-home .img-slot.fill img');
    if (img) {
      var y = window.scrollY || 0;
      img.style.transform = 'translate3d(0,' + (y * 0.15) + 'px,0) scale(1.12)';
    }
  }

  var ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () { updateProgress(); updateHeader(); parallax(); ticking = false; });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { updateProgress(); updateHeader(); });

  /* ---------- contact form ---------- */
  var form = el('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form);
      function g(k) { return (d.get(k) || '').toString().trim(); }
      var subject = 'Quote request — ' + (g('type') || 'Project') + (g('location') ? ' in ' + g('location') : '');
      var body = [
        'Name: ' + g('name'),
        'Email: ' + g('email'),
        'Phone: ' + g('phone'),
        'Location: ' + g('location'),
        'Project type: ' + g('type'),
        'Project size: ' + g('size'),
        'Budget: ' + g('budget'),
        'Preferred date: ' + g('date'),
        'Preferred time: ' + g('time'),
        '',
        'Details:',
        g('message')
      ].join('\n');
      // no backend: open the visitor's email client pre-filled to LME's inbox
      try {
        window.location.href = 'mailto:Lmebuildingcontractors@hotmail.com?subject=' +
          encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      } catch (err) { /* ignore */ }
      form.style.display = 'none';
      var thanks = el('contact-thanks');
      if (thanks) thanks.style.display = 'block';
    });
  }

  /* ---------- homepage hero estimate form ---------- */
  var heroForm = el('hero-form');
  if (heroForm) {
    heroForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(heroForm);
      function g(k) { return (d.get(k) || '').toString().trim(); }
      var subject = 'Free estimate request' + (g('type') ? ' — ' + g('type') : '');
      var body = ['Name: ' + g('name'), 'Phone/email: ' + g('contact'), 'Project: ' + g('type'), '', '(Sent from the homepage estimate form)'].join('\n');
      try {
        window.location.href = 'mailto:Lmebuildingcontractors@hotmail.com?subject=' +
          encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      } catch (err) { /* ignore */ }
      heroForm.style.display = 'none';
      var t = el('hero-thanks'); if (t) t.style.display = 'block';
    });
  }

  /* ---------- FAQ accordion ---------- */
  document.addEventListener('click', function (e) {
    var q = e.target.closest('.faq-q');
    if (!q) return;
    var item = q.closest('.faq-item');
    var ans = item.querySelector('.faq-a');
    var open = item.classList.toggle('open');
    q.setAttribute('aria-expanded', open ? 'true' : 'false');
    ans.style.maxHeight = open ? (ans.scrollHeight + 'px') : '';
  });

  /* ---------- cookie consent ---------- */
  var COOKIE_KEY = 'lme-cookie-consent';
  var banner = el('cookie-banner');
  function setConsent(val) {
    try { localStorage.setItem(COOKIE_KEY, val); } catch (e) {}
    if (banner) banner.style.display = 'none';
  }
  (function initCookies() {
    var stored = null;
    try { stored = localStorage.getItem(COOKIE_KEY); } catch (e) {}
    if (!stored && banner) banner.style.display = 'block';
  })();
  if (el('cookie-accept')) el('cookie-accept').addEventListener('click', function () { setConsent('all'); });
  if (el('cookie-reject')) el('cookie-reject').addEventListener('click', function () { setConsent('essential'); });

  /* ---------- init ---------- */
  el('year').textContent = String(new Date().getFullYear());
  render();
  routeFromHash(true);
  observeReveals();
  updateProgress();
  updateHeader();
  parallax();
})();
