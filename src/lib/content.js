/* =========================================================
   LME Building Contractors — site content
   Single source of truth for the static build.
   In the CMS phase this module is swapped to fetch from Storyblok.
   ========================================================= */

export const heroTrust = ['Fully Insured', '15+ Years', '10-Year Guarantee'];

export const stats = [
  { n: 250, dec: 0, suf: '+', l: 'Projects Completed', d: 'Homes extended, renovated and built across Lincolnshire.' },
  { n: 15, dec: 0, suf: '', l: 'Years Experience', d: 'Hands-on building expertise on every single project.' },
  { n: 4.9, dec: 1, suf: '★', l: 'Average Rating', d: 'From 127 verified reviews by local homeowners.' },
  { n: 10, dec: 0, suf: '-Yr', l: 'Workmanship Guarantee', d: 'Every build backed long after we hand over the keys.' }
];

export const services = [
  { n: '01', id: 'ext', img: 'assets/img/extension.jpg', title: 'Bespoke Home Extensions', short: 'Single & double-storey, wrap-around and rear extensions that add space, light and value.', body: 'From concept design to final handover — single-storey, two-storey, wrap-around and rear extensions that add space, light and lasting value to your home. We manage structural calculations, building control and the full build so you have a single point of contact throughout.', included: ['Architectural & structural drawings', 'Building Regulations sign-off', 'Groundworks & foundations', 'Steelwork & roofing', 'Plastering, electrics & plumbing', 'Full internal finishing'], timeline: '8–16 weeks', priceFrom: '£45,000' },
  { n: '02', id: 'reno', img: 'assets/img/renovation.jpg', title: 'High-End Renovations', short: 'Complete property transformations, structural alterations and sympathetic restorations.', body: 'Complete property transformations and structural alterations — from full refurbishments to the sympathetic restoration of period features. Ideal for tired properties, dated layouts or homes that need to work harder for modern living.', included: ['Design & space planning', 'Removal of load-bearing walls', 'Kitchen & bathroom fit-out', 'Rewiring & re-plumbing', 'Joinery & bespoke storage', 'Decoration & flooring'], timeline: '6–14 weeks', priceFrom: '£30,000' },
  { n: '03', id: 'build', img: 'assets/img/newbuild.jpg', title: 'Modern New Builds', short: 'Turn-key new homes and self-build support, built to exacting modern standards.', body: 'Turn-key new homes and self-build support, blending contemporary design with proven traditional craftsmanship. We work from your plans or help develop them, delivering an energy-efficient home built to last.', included: ['Site survey & groundworks', 'Foundations & drainage', 'Full structural build', 'Energy-efficient systems', 'Bespoke joinery & glazing', 'Landscaping & handover'], timeline: '6–12 months', priceFrom: 'POA' }
];

export const faqs = [
  { q: 'How much does a house extension cost in Lincolnshire?', a: 'As a rough guide, a single-storey extension in Lincolnshire usually works out around £1,800–£2,800 per m² — so roughly £40,000–£70,000 for a typical 20m² build. A two-storey extension often costs a little less per m², because the foundations and roof are shared. VAT at 20% applies to most extension work, and we price every job individually after a free site visit.' },
  { q: 'Do I need planning permission for an extension?', a: 'Often you won’t. Many single-storey rear extensions fall under Permitted Development (up to 4m for a detached house, 3m for others, within the size limits), so they don’t need full planning permission — though Building Regulations approval is still required. Conservation areas and listed buildings have tighter rules. We sort the drawings, Building Control and any planning application for you.' },
  { q: 'How long does a house extension take to build?', a: 'On site, a single-storey extension typically takes 8–16 weeks and a two-storey 14–24 weeks. Before we break ground there’s usually design, structural drawings and any approvals to allow for — often another 8–12 weeks. We agree a clear programme up front and keep you posted at every stage.' },
  { q: 'Do you handle the design, drawings and building regulations?', a: 'Yes. We manage architectural and structural drawings, Building Regulations sign-off and any planning application, so you’ve got one accountable point of contact from first sketch to final handover instead of juggling separate trades and consultants.' },
  { q: 'How much does a loft or garage conversion cost?', a: 'A dormer loft conversion is usually somewhere around £30,000–£55,000 depending on type and size, while a garage conversion is a more affordable way to add a room, often £8,000–£18,000. Both are quoted individually once we’ve checked head height, structure and what you want from the space.' },
  { q: 'Are you insured, accredited and do you guarantee your work?', a: 'Yes to all three. We carry full public liability and employer’s liability insurance, hold recognised industry accreditations, and back every project with a 10-year workmanship guarantee. We’re happy to show our paperwork before you commit to anything.' },
  { q: 'What areas of Lincolnshire do you cover?', a: 'We’re based in Sleaford and work across roughly a 25-mile radius — Lincoln, Grantham, Boston, Spalding, Bourne, Newark and the surrounding villages. If your town isn’t on the list, give us a call anyway; there’s a good chance we can still help.' },
  { q: 'Do you provide free, no-obligation quotes?', a: 'Always. Every project starts with a free site visit and a proper chat about what you’re after, followed by a clear, itemised written quote with no hidden extras and no pressure to go ahead.' }
];

export const posts = [
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

export const postMeta = {
  'house-extension-cost-lincolnshire': { iso: '2026-06-12', tags: ['Home Extensions', 'Extension Costs', 'Budgeting', 'Lincolnshire'], service: { label: 'Home Extensions', hash: '/services' }, pull: 'The biggest cause of overspend is changing your mind mid-build — nail the design down early and keep a sensible contingency.' },
  'planning-permission-extension': { iso: '2026-05-28', tags: ['Planning Permission', 'Permitted Development', 'Building Regs', 'Extensions'], service: { label: 'Home Extensions', hash: '/services' }, pull: 'Even when you don’t need planning permission, your extension almost always still needs Building Regulations approval.' },
  'how-long-does-an-extension-take': { iso: '2026-05-14', tags: ['Extensions', 'Build Timeline', 'Project Planning'], service: { label: 'Home Extensions', hash: '/services' }, pull: 'Most people picture the build and forget the eight to twelve weeks of design and approvals that come before it.' },
  'loft-vs-garage-conversion': { iso: '2026-04-30', tags: ['Loft Conversions', 'Garage Conversions', 'Adding Space', 'Costs'], service: { label: 'Loft & Garage Conversions', hash: '/services' }, pull: 'Need a cheap, fast extra room? Convert the garage. Need a bedroom that adds value? Go up into the loft.' },
  'renovating-a-period-property-lincolnshire': { iso: '2026-04-16', tags: ['Renovations', 'Period Properties', 'Listed Buildings', 'Lincolnshire'], service: { label: 'High-End Renovations', hash: '/services' }, pull: 'Older buildings need to breathe — which is exactly why we use lime, not cement, on solid-wall properties.' },
  'questions-to-ask-a-builder': { iso: '2026-04-02', tags: ['Hiring a Builder', 'Advice', 'Quotes', 'Guarantees'], service: { label: 'Our Services', hash: '/services' }, pull: 'A good builder will answer all ten of these without flinching. If someone’s cagey about any of them, take it as a sign.' }
};

export const author = { name: 'Lee', role: 'Founder, LME Building Contractors', initials: 'L', bio: 'Lee has run building projects across Lincolnshire for over 15 years — from single-storey extensions to full new builds. He leads every LME job personally, from the first site visit to final handover.' };

export const coverage = ['Sleaford', 'Lincoln', 'Grantham', 'Boston', 'Spalding', 'Bourne', 'Newark', 'Surrounding villages'];

export const areaChips = ['Sleaford', 'Lincoln', 'Grantham', 'Boston', 'Spalding', 'Bourne', 'Newark-on-Trent', 'North Hykeham', 'Ruskington', 'Heckington', 'Metheringham', 'Navenby', 'Woodhall Spa', 'Horncastle', 'Market Deeping', 'Branston'];

export const valueProps = [
  { title: 'Fully Insured & Accredited', body: 'Comprehensive cover and recognised industry accreditations on every project.' },
  { title: 'Fixed, Transparent Quotes', body: 'Clear, itemised pricing with no hidden costs and no surprises.' },
  { title: '10-Year Workmanship Guarantee', body: 'Genuine peace of mind long after we hand over the keys.' },
  { title: 'Local, On Time, On Budget', body: 'Lincolnshire-based, with a track record of reliable delivery.' }
];

export const process = [
  { n: '01', title: 'Consultation', body: 'A free, no-obligation site visit to understand your vision, budget and timeline.' },
  { n: '02', title: 'Design & Quote', body: 'Detailed design proposals and a clear, itemised quotation with no surprises.' },
  { n: '03', title: 'Build', body: 'On-site delivery led personally, with regular updates and rigorous quality control.' },
  { n: '04', title: 'Handover', body: 'A finished space, signed off to the highest standard, with aftercare support.' }
];

export const projectList = [
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

export const comingSoon = [
  { title: 'Loft Conversions', note: 'COMING SOON', body: 'Creating functional living space — from master suites to dedicated home offices.' },
  { title: 'Commercial Refurbishment', note: 'COMING SOON', body: 'Functional and aesthetic refits for retail, office and commercial spaces.' },
  { title: 'Heritage Restoration', note: 'COMING SOON', body: 'Sympathetic, compliant restoration of listed and historic structures.' }
];

export const testimonials = [
  { id: 't1', quote: 'From the first site visit to the final handover, LME were professional, tidy and on time. Our extension is everything we hoped for.', name: 'Sarah & Tom H.', meta: 'Two-storey extension · Sleaford' },
  { id: 't2', quote: 'The quality of workmanship is outstanding. They treated our home like their own and the finish is immaculate.', name: 'James P.', meta: 'Full renovation · Lincoln' },
  { id: 't3', quote: 'Lee and the team built our new home to an exceptional standard, on budget and ahead of schedule. Highly recommended.', name: 'The Carters', meta: 'New build · Grantham' }
];

export const accreditations = [
  { file: 'checkatrade.png', name: 'Checkatrade' },
  { file: 'trustmark.png', name: 'TrustMark' },
  { file: 'fmb.png', name: 'Federation of Master Builders' },
  { file: 'gas-safe.png', name: 'Gas Safe Register' },
  { file: 'nhbc.png', name: 'NHBC' },
  { file: 'which.png', name: 'Which? Trusted Trader' }
];

export const gallery = [
  'assets/img/newbuild.jpg', 'assets/img/renovation.jpg', 'assets/img/extension.jpg', 'assets/img/sleaford.jpg',
  'assets/img/lincoln.jpg', 'assets/img/grantham.jpg', 'assets/img/projects-hero.jpg', 'assets/img/about-hero.jpg'
];

export const team = [
  { id: 'lead', img: 'assets/img/portrait.jpg', name: 'Lee', role: 'Founder & Lead Contractor', bio: 'Leads every build on-site, from first survey to final handover, with decades of hands-on experience.' },
  { id: 'site', img: 'assets/img/portrait.jpg', name: 'Site Manager', role: 'Project & Site Management', bio: 'Keeps every project on programme and on budget, coordinating trades and quality control.' },
  { id: 'joiner', img: 'assets/img/portrait.jpg', name: 'Lead Joiner', role: 'Joinery & Finishes', bio: 'Responsible for the premium finishing touches that define an LME build.' }
];

export const fbUrl = 'https://www.facebook.com/p/LME-Building-Contractors-61554693284703/';
export const phone = '07592 278032';
export const phoneHref = 'tel:07592278032';
export const email = 'Lmebuildingcontractors@hotmail.com';
