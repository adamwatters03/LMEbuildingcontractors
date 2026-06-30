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

  var posts = [
    {
      slug: 'house-extension-cost-lincolnshire',
      title: 'How Much Does a House Extension Cost in Lincolnshire? (2026 Guide)',
      cat: 'Extensions', date: '12 June 2026', read: '5 min read',
      img: 'assets/img/extension.jpg',
      excerpt: 'A realistic, no-nonsense breakdown of what an extension costs in Lincolnshire in 2026 — and what actually moves the price up or down.',
      body:
        '<p>It’s the first question almost everyone asks us, and it’s a fair one. The honest answer is “it depends” — but that’s not very helpful when you’re trying to budget, so here are some real Lincolnshire figures to work from.</p>' +
        '<h2>The rough numbers</h2>' +
        '<p>As a guide, a single-storey extension in Lincolnshire usually works out around <strong>£1,800–£2,800 per m²</strong>. So a typical 20m² rear extension lands somewhere around <strong>£40,000–£70,000</strong>. A two-storey extension often costs a little less per square metre, because you’re getting two floors out of the same foundations and roof.</p>' +
        '<p>Those figures include the build itself. Don’t forget to allow for VAT (most extension work is standard-rated at 20%), plus drawings, structural calculations and any planning fees.</p>' +
        '<h2>What pushes the price up or down</h2>' +
        '<ul><li><strong>Size and storeys</strong> — the obvious one, though two-storey is more efficient per m².</li><li><strong>Groundworks</strong> — tricky access, sloping plots or deep foundations add cost before you even see a wall.</li><li><strong>Glazing</strong> — bifolds, roof lanterns and big sliding doors look stunning but aren’t cheap.</li><li><strong>Kitchens and bathrooms</strong> — fit-out spec can swing the budget by tens of thousands.</li><li><strong>Finish level</strong> — standard vs high-end materials throughout.</li></ul>' +
        '<h2>How to keep control of the budget</h2>' +
        '<p>The biggest cause of overspend is changing your mind mid-build. Nail the design down early, get a clear itemised quote, and keep a sensible contingency (we usually suggest around 10%) for the things you can’t see until you start digging.</p>' +
        '<p>Every project is different, so the only way to a real number is a proper look at your home. We offer a free site visit and a clear, itemised written quote — no obligation.</p>'
    },
    {
      slug: 'planning-permission-extension',
      title: 'Do You Need Planning Permission for an Extension?',
      cat: 'Planning', date: '28 May 2026', read: '4 min read',
      img: 'assets/img/services-hero.jpg',
      excerpt: 'Permitted Development, Building Regs and when you actually need a planning application — explained without the jargon.',
      body:
        '<p>Good news: a lot of extensions don’t need full planning permission at all. Many fall under <strong>Permitted Development</strong>, which lets you extend within set limits without a formal application. But there are rules, and getting them wrong is expensive.</p>' +
        '<h2>Permitted Development, roughly</h2>' +
        '<p>For a single-storey rear extension you can usually go up to <strong>4m for a detached house</strong> and <strong>3m for a semi or terrace</strong>, within height and footprint limits. Side extensions and two-storey extensions have their own rules. It’s sensible to apply for a <strong>Lawful Development Certificate</strong> so you’ve got proof it was allowed.</p>' +
        '<h2>When you do need permission</h2>' +
        '<ul><li>You’re going beyond the Permitted Development size limits.</li><li>Your home is <strong>listed</strong> or in a <strong>conservation area</strong>.</li><li>Permitted Development rights have been removed (common on newer estates).</li><li>You’re building to the front, or significantly altering the roof.</li></ul>' +
        '<h2>Don’t forget Building Regulations</h2>' +
        '<p>This is the bit people mix up. Even when you don’t need planning permission, your extension <strong>almost always needs Building Regulations approval</strong> — that’s what covers structure, insulation, drainage and safety. They’re two different things.</p>' +
        '<p>It sounds like a lot, but you don’t have to manage any of it yourself. We handle the drawings, structural calculations, Building Control and any planning application as part of the job, so you’ve got one point of contact throughout.</p>'
    },
    {
      slug: 'how-long-does-an-extension-take',
      title: 'How Long Does a House Extension Take, Start to Finish?',
      cat: 'Extensions', date: '14 May 2026', read: '4 min read',
      img: 'assets/img/projects-hero.jpg',
      excerpt: 'From first drawings to the final coat of paint — a realistic timeline for a Lincolnshire extension, and where the delays usually hide.',
      body:
        '<p>People often think about the build time and forget everything that has to happen before the diggers arrive. Here’s the whole picture so there are no surprises.</p>' +
        '<h2>Before we break ground (8–12 weeks)</h2>' +
        '<p>Design, structural drawings, Building Regs and — if needed — a planning application all take time. A straightforward project might be a few weeks; anything needing planning permission usually adds eight weeks or more while the council decides.</p>' +
        '<h2>On site</h2>' +
        '<ul><li><strong>Single-storey extension:</strong> typically 8–16 weeks.</li><li><strong>Two-storey extension:</strong> typically 14–24 weeks.</li><li><strong>Loft conversion:</strong> usually 6–10 weeks.</li></ul>' +
        '<p>Weather, material lead times and the condition of the existing building can all nudge those figures. A wet winter or a long lead on bespoke glazing is the kind of thing that adds a couple of weeks.</p>' +
        '<h2>How we keep things moving</h2>' +
        '<p>We agree a clear programme before we start, order long-lead items early, and keep you updated as we go. You’ll always know what’s happening this week and what’s coming next. If something does slip, you’ll hear it from us first — not find out on the day.</p>'
    },
    {
      slug: 'loft-vs-garage-conversion',
      title: 'Loft vs Garage Conversion: Which Adds More for Your Money?',
      cat: 'Conversions', date: '30 April 2026', read: '4 min read',
      img: 'assets/img/newbuild.jpg',
      excerpt: 'Two of the most cost-effective ways to add a room without extending your footprint — and how to choose between them.',
      body:
        '<p>If you need an extra room but don’t want the cost or disruption of a full extension, converting space you already have is often the smart move. The two usual candidates are the loft and the garage.</p>' +
        '<h2>Garage conversion</h2>' +
        '<p>Usually the cheaper option — often <strong>£8,000–£18,000</strong> — and quicker, because the structure’s already there. Brilliant for a home office, snug, playroom or utility. The main things to check are head height, damp and where your boiler or consumer unit lives.</p>' +
        '<h2>Loft conversion</h2>' +
        '<p>More involved and pricier — a dormer loft conversion is typically <strong>£30,000–£55,000</strong> — but it usually adds a proper bedroom (often with an en-suite), which tends to add more value. The deciding factor is head height and roof structure: we’ll measure up and tell you honestly what’s achievable.</p>' +
        '<h2>So which one?</h2>' +
        '<ul><li>Need a cheap, fast extra room? <strong>Garage.</strong></li><li>Need another bedroom and want to add value? <strong>Loft.</strong></li><li>Not sure your loft has the height? Get it checked before you fall in love with the idea.</li></ul>' +
        '<p>We’re happy to look at both and give you a straight comparison for your home — no pressure either way.</p>'
    },
    {
      slug: 'renovating-a-period-property-lincolnshire',
      title: 'Renovating a Period or Listed Property in Lincolnshire',
      cat: 'Renovations', date: '16 April 2026', read: '5 min read',
      img: 'assets/img/renovation.jpg',
      excerpt: 'Lincolnshire is full of beautiful older homes. Here’s how to bring one up to date without losing the character that made you fall for it.',
      body:
        '<p>From stone cottages to Victorian terraces, the county has some lovely older housing stock. Renovating it well is about balance — modern comfort on one hand, respecting the building on the other.</p>' +
        '<h2>Use the right materials</h2>' +
        '<p>Older buildings need to breathe. That’s why we use <strong>lime mortar and lime plaster</strong> rather than modern cement on solid-wall properties — it lets moisture escape and prevents the damp problems that the wrong materials cause. Reclaimed stone and matching brick keep repairs invisible.</p>' +
        '<h2>Listed building consent</h2>' +
        '<p>If the property is listed, you’ll likely need <strong>listed building consent</strong> for many changes — inside and out. It’s worth doing properly; unauthorised work to a listed building is a serious matter. We manage the consent process so you stay on the right side of it.</p>' +
        '<h2>Where to spend</h2>' +
        '<ul><li><strong>Fabric first</strong> — roof, damp, structure and insulation before the pretty stuff.</li><li><strong>Keep the character features</strong> — original fireplaces, beams and joinery are worth restoring.</li><li><strong>Budget a contingency</strong> — older homes love a surprise, so keep 10–15% back.</li></ul>' +
        '<p>Done sympathetically, a period renovation gives you the best of both worlds. Our Sleaford cottage refurbishment is a good example — have a look in our projects.</p>'
    },
    {
      slug: 'questions-to-ask-a-builder',
      title: '10 Questions to Ask a Builder Before You Hire',
      cat: 'Advice', date: '2 April 2026', read: '4 min read',
      img: 'assets/img/about-hero.jpg',
      excerpt: 'Hiring the right builder is the single biggest decision of your project. These ten questions will tell you a lot about who you’re dealing with.',
      body:
        '<p>A good builder will be happy to answer all of these without flinching. If someone’s cagey about any of them, take it as a sign.</p>' +
        '<h2>The ten to ask</h2>' +
        '<ul><li><strong>Are you insured?</strong> Ask to see public liability and employer’s liability cover.</li><li><strong>Can I see similar work?</strong> Photos and, ideally, a past client to speak to.</li><li><strong>Are you a member of a trade body?</strong> Look for the FMB, Checkatrade, TrustMark and similar.</li><li><strong>What guarantee do you offer?</strong> We back our work with a 10-year workmanship guarantee.</li><li><strong>Is the quote itemised?</strong> A proper breakdown beats a single scary number.</li><li><strong>Who’s actually on site?</strong> Will it be your team, or subcontractors you’ve never met?</li><li><strong>What’s the programme?</strong> Realistic start and finish dates tied to payment stages.</li><li><strong>How do you handle changes?</strong> There should be a clear process for variations.</li><li><strong>Who manages building control and planning?</strong> Ideally the builder, so it’s one point of contact.</li><li><strong>What happens if there’s a problem?</strong> How they answer this tells you the most.</li></ul>' +
        '<h2>One last tip</h2>' +
        '<p>Get at least three quotes, and be wary of the cheapest by a mile — it usually means something’s been left out. The right builder will give you confidence in the conversation, not just on paper.</p>'
    }
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
    { id: 'sleaford', tag: 'Renovation', duration: '10 weeks', cover: 'assets/img/sleaford.jpg', thumbA: 'assets/img/renovation.jpg', thumbB: 'assets/img/sleaford.jpg', title: 'Sleaford Cottage Refurbishment', location: 'Sleaford, Lincolnshire', short: 'A sympathetic full restoration of a listed cottage using reclaimed local stone and lime mortar.', body: 'A sympathetic full restoration of a listed cottage, preserving traditional features while integrating modern amenities using reclaimed local stone and lime mortar.', points: ['Traditional stone façade restored', 'Lime mortar repointing', 'Sympathetic glazing'],
      gallery: ['assets/img/sleaford.jpg', 'assets/img/renovation.jpg', 'assets/img/newbuild.jpg'],
      overview: '<p>This Grade II cottage near Sleaford had bags of character but had been left tired and dated. The owners wanted a sensitive restoration — modern comfort throughout, without losing any of the charm that made them buy it in the first place.</p><p>We worked closely with conservation requirements, using traditional materials and methods so the building could breathe as it was designed to, while quietly bringing the services and layout into the 21st century.</p>',
      scope: ['Traditional stone façade carefully restored', 'Lime mortar repointing throughout', 'Sympathetic timber glazing to match originals', 'Full rewire and re-plumb', 'Restored fireplaces and joinery', 'New kitchen and bathrooms']
    },
    { id: 'lincoln', tag: 'Extension', duration: '12 weeks', cover: 'assets/img/lincoln.jpg', thumbA: 'assets/img/extension.jpg', thumbB: 'assets/img/lincoln.jpg', title: 'Lincoln Modern Home Extension', location: 'Lincoln, Lincolnshire', short: 'A contemporary extension maximising open-plan living and connecting the home to the garden.', body: 'A contemporary extension maximising open-plan living, seamlessly connecting the home to the garden with floor-to-ceiling bifold doors and bespoke finishes.', points: ['Open-plan living space', 'High-performance bifold doors', 'Bespoke finishes'],
      gallery: ['assets/img/lincoln.jpg', 'assets/img/extension.jpg', 'assets/img/services-hero.jpg'],
      overview: '<p>This Lincoln family wanted to transform a cramped, compartmentalised ground floor into a single, light-filled open-plan kitchen, dining and living space that opened straight out to the garden.</p><p>We removed load-bearing walls, installed steelwork to open the space right up, and finished with floor-to-ceiling bifold doors and a roof lantern so the whole room floods with natural light.</p>',
      scope: ['Single-storey rear extension', 'Structural steelwork and load-bearing wall removal', 'Floor-to-ceiling bifold doors', 'Roof lantern for natural light', 'Underfloor heating', 'Bespoke kitchen fit-out']
    },
    { id: 'grantham', tag: 'New Build', duration: '9 months', cover: 'assets/img/grantham.jpg', thumbA: 'assets/img/newbuild.jpg', thumbB: 'assets/img/grantham.jpg', title: 'Grantham Contemporary New Build', location: 'Grantham, Lincolnshire', short: 'A five-bedroom turn-key family home built to exacting specifications with eco-friendly features.', body: 'A stunning five-bedroom turn-key family home built to exacting specifications with eco-friendly features and bespoke structural glazing, designed for modern luxury.', points: ['Bespoke architectural design', 'Structural glazing façade', 'Energy-efficient systems'],
      gallery: ['assets/img/grantham.jpg', 'assets/img/newbuild.jpg', 'assets/img/projects-hero.jpg'],
      overview: '<p>A complete turn-key new build near Grantham — a five-bedroom family home delivered from a bare plot to finished house, ready to move into.</p><p>We managed the entire project, from groundworks and foundations through to the energy-efficient services, bespoke structural glazing and final landscaping, working to an exacting modern specification throughout.</p>',
      scope: ['Full groundworks and foundations', 'Complete structural build', 'Energy-efficient heating and insulation', 'Bespoke structural glazing façade', 'Five bedrooms, three bathrooms', 'Driveway and landscaping']
    }
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
      return '<a class="card card-link reveal zoom-wrap" href="#services/svc-' + svc.id + '" style="overflow:hidden;display:block;text-decoration:none;">' +
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
      return '<a class="card card-link reveal zoom-wrap" href="#project/' + proj.id + '" style="overflow:hidden;display:block;text-decoration:none;">' +
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
    var testimonialsHTML = testimonials.map(function (t) {
      return '<div class="card reveal" style="padding:30px 28px;display:flex;flex-direction:column;gap:16px;">' +
        '<div class="stars" style="font-size:16px;">★★★★★</div>' +
        '<p style="font-size:15.5px;line-height:1.65;color:#2c333d;margin:0;flex:1;">“' + esc(t.quote) + '”</p>' +
        '<div style="display:flex;align-items:center;gap:13px;border-top:1px solid #efeee9;padding-top:18px;">' +
          '<div class="img-slot circle" style="width:46px;height:46px;flex:none;"><span></span></div>' +
          '<div><div style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:15px;color:#15191f;">' + esc(t.name) + '</div>' +
          '<div style="font-size:13px;color:#79828f;">' + esc(t.meta) + '</div></div>' +
        '</div></div>';
    }).join('');
    el('home-testimonials').innerHTML = testimonialsHTML;
    if (el('contact-testimonials')) el('contact-testimonials').innerHTML = testimonialsHTML;

    /* accreditations — uniform white chips, logo contained, name as text fallback */
    el('home-acc').innerHTML = accreditations.map(function (acc) {
      return '<div class="acc-chip">' +
        '<img src="assets/img/accreditations/' + acc.file + '" alt="' + esc(acc.name) + '" loading="lazy" ' +
        'onerror="var s=document.createElement(\'span\');s.className=\'fallback\';s.textContent=this.alt;this.replaceWith(s)">' +
        '</div>';
    }).join('');

    /* services page — detailed rows */
    el('services-list').innerHTML = services.map(function (svc, idx) {
      var inc = svc.included.map(function (i) {
        return '<div style="display:flex;align-items:flex-start;gap:10px;font-size:14.5px;color:#3a414c;font-weight:500;line-height:1.4;"><span class="diamond" style="margin-top:6px;"></span>' + esc(i) + '</div>';
      }).join('');
      var next = services[idx + 1];
      var nextCta = next
        ? '<a class="read-more" href="#services/svc-' + next.id + '">Up next: ' + esc(next.title) + ' →</a>'
        : '<a class="read-more" href="#contact" data-nav="contact">Ready to start? Get a free quote →</a>';
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
            '<a class="btn btn-cy" href="#contact" data-nav="contact">Enquire About ' + esc(svc.title) + '</a>' + nextCta +
          '</div>' +
        '</div></div>';
    }).join('');

    /* FAQ accordion (services + contact) */
    var faqHTML = faqs.map(function (f) {
      return '<div class="faq-item">' +
        '<button class="faq-q" type="button" aria-expanded="false"><span>' + esc(f.q) + '</span>' +
        '<span class="faq-ico"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1192bb" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg></span></button>' +
        '<div class="faq-a"><div class="faq-a-inner">' + esc(f.a) + '</div></div>' +
        '</div>';
    }).join('');
    el('services-faq').innerHTML = faqHTML;
    if (el('contact-faq')) el('contact-faq').innerHTML = faqHTML;

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
      return '<a class="card card-link reveal" href="#project/' + proj.id + '" style="overflow:hidden;display:block;text-decoration:none;">' +
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

    /* blog listing — featured post + grid */
    if (el('blog-list')) {
      var f = posts[0];
      var featured = '<a class="blog-featured reveal" href="#blog/' + f.slug + '">' +
        '<div class="bf-img zoom-wrap">' + slot('fill zoom', 'Photo', f.img, f.title) + '</div>' +
        '<div>' +
          '<div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;"><span class="post-cat">' + esc(f.cat) + '</span><span class="post-meta">' + esc(f.date) + '</span></div>' +
          '<h2 class="h2" style="font-size:clamp(26px,3.2vw,40px);margin:0 0 16px;">' + esc(f.title) + '</h2>' +
          '<p class="lead" style="margin:0 0 24px;">' + esc(f.excerpt) + '</p>' +
          '<span class="read-more" style="font-size:14px;">Read Article ↗</span>' +
        '</div></a>';
      var grid = '<div class="g-cards">' + posts.slice(1).map(blogCard).join('') + '</div>';
      el('blog-list').innerHTML = featured + grid;
    }

    /* latest posts on the homepage */
    if (el('home-blog')) el('home-blog').innerHTML = posts.slice(0, 3).map(blogCard).join('');

    renderPolicies();
  }

  /* ---------- single blog post ---------- */
  var author = { name: 'Lee', role: 'Founder, LME Building Contractors', initials: 'L', bio: 'Lee has run building projects across Lincolnshire for over 15 years — from single-storey extensions to full new builds. He leads every LME job personally, from the first site visit to final handover.' };
  var postMeta = {
    'house-extension-cost-lincolnshire': { iso: '2026-06-12', tags: ['Home Extensions', 'Extension Costs', 'Budgeting', 'Lincolnshire'], service: { label: 'Home Extensions', hash: '#services' }, pull: 'The biggest cause of overspend is changing your mind mid-build — nail the design down early and keep a sensible contingency.' },
    'planning-permission-extension': { iso: '2026-05-28', tags: ['Planning Permission', 'Permitted Development', 'Building Regs', 'Extensions'], service: { label: 'Home Extensions', hash: '#services' }, pull: 'Even when you don’t need planning permission, your extension almost always still needs Building Regulations approval.' },
    'how-long-does-an-extension-take': { iso: '2026-05-14', tags: ['Extensions', 'Build Timeline', 'Project Planning'], service: { label: 'Home Extensions', hash: '#services' }, pull: 'Most people picture the build and forget the eight to twelve weeks of design and approvals that come before it.' },
    'loft-vs-garage-conversion': { iso: '2026-04-30', tags: ['Loft Conversions', 'Garage Conversions', 'Adding Space', 'Costs'], service: { label: 'Loft & Garage Conversions', hash: '#services' }, pull: 'Need a cheap, fast extra room? Convert the garage. Need a bedroom that adds value? Go up into the loft.' },
    'renovating-a-period-property-lincolnshire': { iso: '2026-04-16', tags: ['Renovations', 'Period Properties', 'Listed Buildings', 'Lincolnshire'], service: { label: 'High-End Renovations', hash: '#services' }, pull: 'Older buildings need to breathe — which is exactly why we use lime, not cement, on solid-wall properties.' },
    'questions-to-ask-a-builder': { iso: '2026-04-02', tags: ['Hiring a Builder', 'Advice', 'Quotes', 'Guarantees'], service: { label: 'Our Services', hash: '#services' }, pull: 'A good builder will answer all ten of these without flinching. If someone’s cagey about any of them, take it as a sign.' }
  };

  function blogCard(p) {
    return '<a class="card card-link reveal zoom-wrap" href="#blog/' + p.slug + '" style="overflow:hidden;display:block;text-decoration:none;">' +
      '<div style="position:relative;height:200px;overflow:hidden;">' + slot('fill zoom', 'Photo', p.img, p.title) +
        '<span class="post-cat" style="position:absolute;left:14px;bottom:14px;background:rgba(255,255,255,.94);">' + esc(p.cat) + '</span></div>' +
      '<div style="padding:22px 24px 26px;">' +
        '<div class="post-meta" style="margin-bottom:8px;">' + esc(p.date) + ' · ' + esc(p.read) + '</div>' +
        '<h3 class="post-title">' + esc(p.title) + '</h3>' +
        '<p style="font-size:14.5px;line-height:1.6;color:#5b6470;margin:0 0 16px;">' + esc(p.excerpt) + '</p>' +
        '<span class="read-more">Read article →</span>' +
      '</div></a>';
  }

  function injectPostJsonLd(p, m, tags) {
    var s = document.getElementById('post-jsonld');
    if (!s) { s = document.createElement('script'); s.type = 'application/ld+json'; s.id = 'post-jsonld'; document.head.appendChild(s); }
    var base = 'https://www.lmebuildingcontractors.uk/';
    s.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BlogPosting',
      headline: p.title, description: p.excerpt, image: base + p.img,
      datePublished: m.iso, dateModified: m.iso,
      author: { '@type': 'Person', name: author.name },
      publisher: { '@type': 'Organization', name: 'LME Building Contractors', logo: { '@type': 'ImageObject', url: base + 'assets/favicon.svg' } },
      keywords: (tags || []).join(', '),
      mainEntityOfPage: base + '#blog/' + p.slug
    });
  }

  function renderPost(slug) {
    var p = null;
    for (var i = 0; i < posts.length; i++) { if (posts[i].slug === slug) { p = posts[i]; break; } }
    if (!p) return null;
    var m = postMeta[slug] || {};
    var tags = m.tags || [p.cat];
    var service = m.service || { label: 'Our Services', hash: '#services' };
    var tagsHTML = tags.map(function (t) { return '<span class="post-tag">' + esc(t) + '</span>'; }).join('');
    var sideHTML =
      '<a class="rel-service" href="' + service.hash + '" data-nav="services"><span class="rs-label">Related service</span><span class="rs-title">' + esc(service.label) + '</span><span class="rs-link">Learn more →</span></a>' +
      (m.pull ? '<div class="pull-quote"><span class="pq-mark">“</span><p>' + esc(m.pull) + '</p></div>' : '');
    var related = posts.filter(function (x) { return x.slug !== p.slug; }).slice(0, 3);
    var relHTML = related.map(function (r) {
      return '<a class="card card-link reveal zoom-wrap" href="#blog/' + r.slug + '" style="overflow:hidden;display:block;text-decoration:none;">' +
        '<div style="position:relative;height:190px;overflow:hidden;">' + slot('fill zoom', 'Photo', r.img, r.title) +
          '<span class="post-cat" style="position:absolute;left:14px;bottom:14px;background:rgba(255,255,255,.94);">' + esc(r.cat) + '</span></div>' +
        '<div style="padding:20px 22px 24px;"><div class="post-meta" style="margin-bottom:8px;">' + esc(r.date) + ' · ' + esc(r.read) + '</div>' +
        '<h3 class="post-title" style="font-size:18px;margin:0 0 14px;">' + esc(r.title) + '</h3><span class="read-more">Read article →</span></div></a>';
    }).join('');
    el('post').innerHTML =
      '<article>' +
        '<section class="sec" style="background:#fff;padding-top:clamp(108px,13vw,150px);padding-bottom:0;">' +
          '<div class="wrap" style="max-width:1080px;">' +
            '<div class="post-crumb"><a href="#blog">Blog</a> &nbsp;/&nbsp; ' + esc(p.title) + '</div>' +
            '<div class="post-metarow"><span class="post-cat">' + esc(p.cat) + '</span><span class="sep">·</span>' + esc(p.date) + '<span class="sep">·</span>' + esc(p.read) + '<span class="sep">·</span>By <a href="#about" data-nav="about">' + esc(author.name) + '</a></div>' +
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
              '<p>We handle ' + esc(service.label.toLowerCase()) + ' across Sleaford, Lincoln, Grantham and the wider Lincolnshire area — <a href="' + service.hash + '" data-nav="services">see our services →</a></p>' +
            '</div>' +
            '<div class="author-box"><div class="author-av">' + esc(author.initials) + '</div><div><div class="ab-label">Written by</div><div class="ab-name">' + esc(author.name) + '</div><div class="ab-role">' + esc(author.role) + '</div><p class="ab-bio">' + esc(author.bio) + '</p></div></div>' +
            '</div>' +
          '</div>' +
        '</section>' +
        (relHTML ? '<section class="sec tex tex-grid" style="background:#f5f4f1;"><div class="wrap"><div class="reveal" style="margin-bottom:clamp(30px,4vw,44px);"><span class="eyebrow" style="margin-bottom:14px;">Related Articles</span><h2 class="h2">Keep reading.</h2></div><div class="g-cards">' + relHTML + '</div></div></section>' : '') +
      '</article>';
    injectPostJsonLd(p, m, tags);
    return p;
  }

  /* ---------- single project detail ---------- */
  function renderProjectDetail(id) {
    var pr = null;
    for (var i = 0; i < projectList.length; i++) { if (projectList[i].id === id) { pr = projectList[i]; break; } }
    if (!pr) return null;
    var gal = (pr.gallery || []).map(function (g) {
      return '<div class="zoom-wrap" style="position:relative;border-radius:12px;overflow:hidden;height:clamp(180px,22vw,260px);">' + slot('fill zoom', 'Photo', g, pr.title) + '</div>';
    }).join('');
    var scope = (pr.scope || []).map(function (s) {
      return '<div style="display:flex;align-items:flex-start;gap:11px;font-size:15px;color:#3a414c;line-height:1.5;margin-bottom:12px;"><span class="diamond" style="margin-top:6px;"></span>' + esc(s) + '</div>';
    }).join('');
    el('project').innerHTML =
      '<section class="hero hero-inner">' +
        '<div class="img-slot dark fill"><img src="' + pr.cover + '" alt="' + esc(pr.title) + '" onload="this.parentNode.classList.add(\'has-img\')" onerror="this.remove()"><span>Photo</span></div>' +
        '<div class="hero-overlay" style="background:linear-gradient(0deg,rgba(8,11,15,0.8) 0%,rgba(8,11,15,0.2) 70%),linear-gradient(95deg,rgba(8,11,15,0.62),rgba(8,11,15,0.2));"></div>' +
        '<div class="wrap hin"><span class="eyebrow">' + esc(pr.tag) + '</span>' +
          '<h1 class="hero-h1">' + esc(pr.title) + '</h1>' +
          '<div class="hero-proof"><span class="proof-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5cc6e8" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>' + esc(pr.location) + '</span>' +
          '<span class="proof-chip">' + esc(pr.duration) + '</span><span class="proof-chip">Completed</span></div></div>' +
      '</section>' +
      '<section class="sec" style="background:#fff;">' +
        '<div class="wrap"><a class="back-link" href="#projects">← All projects</a>' +
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
            '</div><a class="btn btn-cy" href="#contact" data-nav="contact" style="width:100%;margin-top:20px;">Start a similar project</a></div></div>' +
          '</div>' +
          (gal ? '<div class="reveal" style="margin-top:clamp(36px,4vw,52px);"><h3 style="font-family:\'Montserrat\',sans-serif;font-weight:700;font-size:19px;margin:0 0 18px;color:#15191f;">Gallery</h3><div class="g-cards">' + gal + '</div></div>' : '') +
        '</div>' +
      '</section>';
    return pr;
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
  var PAGES = ['home', 'services', 'projects', 'about', 'contact', 'blog', 'post', 'project', 'privacy', 'cookies', 'terms'];
  var TITLES = {
    home: 'Builders in Sleaford & Lincolnshire | LME Building Contractors',
    services: 'Building Services in Lincolnshire | Extensions, Renovations & New Builds',
    projects: 'Our Projects | Lincolnshire Builders | LME Building Contractors',
    about: 'About Us | Sleaford & Lincolnshire Builders | LME Building Contractors',
    contact: 'Contact Us | Free Quote in Lincolnshire | LME Building Contractors',
    blog: 'Blog | Building Advice & Project Stories | LME Building Contractors',
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
    blog: 'Practical advice on extensions, renovations, planning and costs in Lincolnshire, plus stories from our recent building projects.',
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
    if (page !== 'post') { var pj = document.getElementById('post-jsonld'); if (pj) pj.remove(); }
    PAGES.forEach(function (p) {
      var node = el(p);
      if (node) node.classList.toggle('active', p === page);
    });
    var navPage = page === 'post' ? 'blog' : (page === 'project' ? 'projects' : page);
    document.querySelectorAll('.nav-link').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('data-nav') === navPage);
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
    var raw = (location.hash || '#home').replace(/^#/, '');
    var parts = raw.split('/').filter(Boolean);
    var page = parts[0] || 'home';
    var slug = parts.slice(1).join('/');
    if (page === 'blog' && slug) {
      var post = renderPost(slug);
      if (!post) { location.hash = '#blog'; return; }
      showPage('post', skipScroll);
      var pt = post.title + ' | LME Building Contractors';
      document.title = pt;
      setMeta('description', post.excerpt);
      setMeta('og:title', pt, 'property');
      setMeta('og:description', post.excerpt, 'property');
    } else if (page === 'project' && slug) {
      var pr = renderProjectDetail(slug);
      if (!pr) { location.hash = '#projects'; return; }
      showPage('project', skipScroll);
      var qt = pr.title + ' | LME Building Contractors';
      document.title = qt;
      setMeta('description', pr.short);
      setMeta('og:title', qt, 'property');
      setMeta('og:description', pr.short, 'property');
    } else {
      showPage(page, skipScroll);
      if (slug) {
        var target = document.getElementById(slug);
        if (target) setTimeout(function () {
          var y = target.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - 84;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 90);
      }
    }
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
