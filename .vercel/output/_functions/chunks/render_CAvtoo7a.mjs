import { t as __exportAll } from "./compiler_C5pihw0V.mjs";
import { C as createComponent, S as createAstro, _ as addAttribute, b as unescapeHTML, c as renderSlot, d as renderTemplate, g as renderHead } from "./server_CkRQXLzT.mjs";
//#region src/lib/content.js
var content_exports = /* @__PURE__ */ __exportAll({
	accreditations: () => accreditations,
	areaChips: () => areaChips,
	author: () => author,
	comingSoon: () => comingSoon,
	coverage: () => coverage,
	email: () => email,
	faqs: () => faqs,
	fbUrl: () => fbUrl,
	gallery: () => gallery,
	heroTrust: () => heroTrust,
	pages: () => pages,
	phone: () => phone,
	phoneHref: () => phoneHref,
	postMeta: () => postMeta,
	posts: () => posts,
	process: () => process$1,
	projectList: () => projectList,
	services: () => services,
	stats: () => stats,
	team: () => team,
	testimonials: () => testimonials,
	valueProps: () => valueProps
});
var heroTrust = [
	"Fully Insured",
	"15+ Years",
	"10-Year Guarantee"
];
var stats = [
	{
		n: 250,
		dec: 0,
		suf: "+",
		l: "Projects Completed",
		d: "Homes extended, renovated and built across Lincolnshire."
	},
	{
		n: 15,
		dec: 0,
		suf: "",
		l: "Years Experience",
		d: "Hands-on building expertise on every single project."
	},
	{
		n: 4.9,
		dec: 1,
		suf: "★",
		l: "Average Rating",
		d: "From 127 verified reviews by local homeowners."
	},
	{
		n: 10,
		dec: 0,
		suf: "-Yr",
		l: "Workmanship Guarantee",
		d: "Every build backed long after we hand over the keys."
	}
];
var services = [
	{
		n: "01",
		id: "ext",
		img: "assets/img/extension.jpg",
		title: "Bespoke Home Extensions",
		short: "Single & double-storey, wrap-around and rear extensions that add space, light and value.",
		body: "From concept design to final handover — single-storey, two-storey, wrap-around and rear extensions that add space, light and lasting value to your home. We manage structural calculations, building control and the full build so you have a single point of contact throughout.",
		included: [
			"Architectural & structural drawings",
			"Building Regulations sign-off",
			"Groundworks & foundations",
			"Steelwork & roofing",
			"Plastering, electrics & plumbing",
			"Full internal finishing"
		],
		timeline: "8–16 weeks",
		priceFrom: "£45,000"
	},
	{
		n: "02",
		id: "reno",
		img: "assets/img/renovation.jpg",
		title: "High-End Renovations",
		short: "Complete property transformations, structural alterations and sympathetic restorations.",
		body: "Complete property transformations and structural alterations — from full refurbishments to the sympathetic restoration of period features. Ideal for tired properties, dated layouts or homes that need to work harder for modern living.",
		included: [
			"Design & space planning",
			"Removal of load-bearing walls",
			"Kitchen & bathroom fit-out",
			"Rewiring & re-plumbing",
			"Joinery & bespoke storage",
			"Decoration & flooring"
		],
		timeline: "6–14 weeks",
		priceFrom: "£30,000"
	},
	{
		n: "03",
		id: "build",
		img: "assets/img/newbuild.jpg",
		title: "Modern New Builds",
		short: "Turn-key new homes and self-build support, built to exacting modern standards.",
		body: "Turn-key new homes and self-build support, blending contemporary design with proven traditional craftsmanship. We work from your plans or help develop them, delivering an energy-efficient home built to last.",
		included: [
			"Site survey & groundworks",
			"Foundations & drainage",
			"Full structural build",
			"Energy-efficient systems",
			"Bespoke joinery & glazing",
			"Landscaping & handover"
		],
		timeline: "6–12 months",
		priceFrom: "POA"
	}
];
var faqs = [
	{
		q: "How much does a house extension cost in Lincolnshire?",
		a: "As a rough guide, a single-storey extension in Lincolnshire usually works out around £1,800–£2,800 per m² — so roughly £40,000–£70,000 for a typical 20m² build. A two-storey extension often costs a little less per m², because the foundations and roof are shared. VAT at 20% applies to most extension work, and we price every job individually after a free site visit."
	},
	{
		q: "Do I need planning permission for an extension?",
		a: "Often you won’t. Many single-storey rear extensions fall under Permitted Development (up to 4m for a detached house, 3m for others, within the size limits), so they don’t need full planning permission — though Building Regulations approval is still required. Conservation areas and listed buildings have tighter rules. We sort the drawings, Building Control and any planning application for you."
	},
	{
		q: "How long does a house extension take to build?",
		a: "On site, a single-storey extension typically takes 8–16 weeks and a two-storey 14–24 weeks. Before we break ground there’s usually design, structural drawings and any approvals to allow for — often another 8–12 weeks. We agree a clear programme up front and keep you posted at every stage."
	},
	{
		q: "Do you handle the design, drawings and building regulations?",
		a: "Yes. We manage architectural and structural drawings, Building Regulations sign-off and any planning application, so you’ve got one accountable point of contact from first sketch to final handover instead of juggling separate trades and consultants."
	},
	{
		q: "How much does a loft or garage conversion cost?",
		a: "A dormer loft conversion is usually somewhere around £30,000–£55,000 depending on type and size, while a garage conversion is a more affordable way to add a room, often £8,000–£18,000. Both are quoted individually once we’ve checked head height, structure and what you want from the space."
	},
	{
		q: "Are you insured, accredited and do you guarantee your work?",
		a: "Yes to all three. We carry full public liability and employer’s liability insurance, hold recognised industry accreditations, and back every project with a 10-year workmanship guarantee. We’re happy to show our paperwork before you commit to anything."
	},
	{
		q: "What areas of Lincolnshire do you cover?",
		a: "We’re based in Sleaford and work across roughly a 25-mile radius — Lincoln, Grantham, Boston, Spalding, Bourne, Newark and the surrounding villages. If your town isn’t on the list, give us a call anyway; there’s a good chance we can still help."
	},
	{
		q: "Do you provide free, no-obligation quotes?",
		a: "Always. Every project starts with a free site visit and a proper chat about what you’re after, followed by a clear, itemised written quote with no hidden extras and no pressure to go ahead."
	}
];
var posts = [
	{
		slug: "house-extension-cost-lincolnshire",
		title: "How Much Does a House Extension Cost in Lincolnshire? (2026 Guide)",
		cat: "Extensions",
		date: "12 June 2026",
		read: "5 min read",
		img: "assets/img/extension.jpg",
		excerpt: "A realistic, no-nonsense breakdown of what an extension costs in Lincolnshire in 2026 — and what actually moves the price up or down.",
		body: "<p>It’s the first question almost everyone asks us, and it’s a fair one. The honest answer is “it depends” — but that’s not very helpful when you’re trying to budget, so here are some real Lincolnshire figures to work from.</p><h2>The rough numbers</h2><p>As a guide, a single-storey extension in Lincolnshire usually works out around <strong>£1,800–£2,800 per m²</strong>. So a typical 20m² rear extension lands somewhere around <strong>£40,000–£70,000</strong>. A two-storey extension often costs a little less per square metre, because you’re getting two floors out of the same foundations and roof.</p><p>Those figures include the build itself. Don’t forget to allow for VAT (most extension work is standard-rated at 20%), plus drawings, structural calculations and any planning fees.</p><h2>What pushes the price up or down</h2><ul><li><strong>Size and storeys</strong> — the obvious one, though two-storey is more efficient per m².</li><li><strong>Groundworks</strong> — tricky access, sloping plots or deep foundations add cost before you even see a wall.</li><li><strong>Glazing</strong> — bifolds, roof lanterns and big sliding doors look stunning but aren’t cheap.</li><li><strong>Kitchens and bathrooms</strong> — fit-out spec can swing the budget by tens of thousands.</li><li><strong>Finish level</strong> — standard vs high-end materials throughout.</li></ul><h2>How to keep control of the budget</h2><p>The biggest cause of overspend is changing your mind mid-build. Nail the design down early, get a clear itemised quote, and keep a sensible contingency (we usually suggest around 10%) for the things you can’t see until you start digging.</p><p>Every project is different, so the only way to a real number is a proper look at your home. We offer a free site visit and a clear, itemised written quote — no obligation.</p>"
	},
	{
		slug: "planning-permission-extension",
		title: "Do You Need Planning Permission for an Extension?",
		cat: "Planning",
		date: "28 May 2026",
		read: "4 min read",
		img: "assets/img/services-hero.jpg",
		excerpt: "Permitted Development, Building Regs and when you actually need a planning application — explained without the jargon.",
		body: "<p>Good news: a lot of extensions don’t need full planning permission at all. Many fall under <strong>Permitted Development</strong>, which lets you extend within set limits without a formal application. But there are rules, and getting them wrong is expensive.</p><h2>Permitted Development, roughly</h2><p>For a single-storey rear extension you can usually go up to <strong>4m for a detached house</strong> and <strong>3m for a semi or terrace</strong>, within height and footprint limits. Side extensions and two-storey extensions have their own rules. It’s sensible to apply for a <strong>Lawful Development Certificate</strong> so you’ve got proof it was allowed.</p><h2>When you do need permission</h2><ul><li>You’re going beyond the Permitted Development size limits.</li><li>Your home is <strong>listed</strong> or in a <strong>conservation area</strong>.</li><li>Permitted Development rights have been removed (common on newer estates).</li><li>You’re building to the front, or significantly altering the roof.</li></ul><h2>Don’t forget Building Regulations</h2><p>This is the bit people mix up. Even when you don’t need planning permission, your extension <strong>almost always needs Building Regulations approval</strong> — that’s what covers structure, insulation, drainage and safety. They’re two different things.</p><p>It sounds like a lot, but you don’t have to manage any of it yourself. We handle the drawings, structural calculations, Building Control and any planning application as part of the job, so you’ve got one point of contact throughout.</p>"
	},
	{
		slug: "how-long-does-an-extension-take",
		title: "How Long Does a House Extension Take, Start to Finish?",
		cat: "Extensions",
		date: "14 May 2026",
		read: "4 min read",
		img: "assets/img/projects-hero.jpg",
		excerpt: "From first drawings to the final coat of paint — a realistic timeline for a Lincolnshire extension, and where the delays usually hide.",
		body: "<p>People often think about the build time and forget everything that has to happen before the diggers arrive. Here’s the whole picture so there are no surprises.</p><h2>Before we break ground (8–12 weeks)</h2><p>Design, structural drawings, Building Regs and — if needed — a planning application all take time. A straightforward project might be a few weeks; anything needing planning permission usually adds eight weeks or more while the council decides.</p><h2>On site</h2><ul><li><strong>Single-storey extension:</strong> typically 8–16 weeks.</li><li><strong>Two-storey extension:</strong> typically 14–24 weeks.</li><li><strong>Loft conversion:</strong> usually 6–10 weeks.</li></ul><p>Weather, material lead times and the condition of the existing building can all nudge those figures. A wet winter or a long lead on bespoke glazing is the kind of thing that adds a couple of weeks.</p><h2>How we keep things moving</h2><p>We agree a clear programme before we start, order long-lead items early, and keep you updated as we go. You’ll always know what’s happening this week and what’s coming next. If something does slip, you’ll hear it from us first — not find out on the day.</p>"
	},
	{
		slug: "loft-vs-garage-conversion",
		title: "Loft vs Garage Conversion: Which Adds More for Your Money?",
		cat: "Conversions",
		date: "30 April 2026",
		read: "4 min read",
		img: "assets/img/newbuild.jpg",
		excerpt: "Two of the most cost-effective ways to add a room without extending your footprint — and how to choose between them.",
		body: "<p>If you need an extra room but don’t want the cost or disruption of a full extension, converting space you already have is often the smart move. The two usual candidates are the loft and the garage.</p><h2>Garage conversion</h2><p>Usually the cheaper option — often <strong>£8,000–£18,000</strong> — and quicker, because the structure’s already there. Brilliant for a home office, snug, playroom or utility. The main things to check are head height, damp and where your boiler or consumer unit lives.</p><h2>Loft conversion</h2><p>More involved and pricier — a dormer loft conversion is typically <strong>£30,000–£55,000</strong> — but it usually adds a proper bedroom (often with an en-suite), which tends to add more value. The deciding factor is head height and roof structure: we’ll measure up and tell you honestly what’s achievable.</p><h2>So which one?</h2><ul><li>Need a cheap, fast extra room? <strong>Garage.</strong></li><li>Need another bedroom and want to add value? <strong>Loft.</strong></li><li>Not sure your loft has the height? Get it checked before you fall in love with the idea.</li></ul><p>We’re happy to look at both and give you a straight comparison for your home — no pressure either way.</p>"
	},
	{
		slug: "renovating-a-period-property-lincolnshire",
		title: "Renovating a Period or Listed Property in Lincolnshire",
		cat: "Renovations",
		date: "16 April 2026",
		read: "5 min read",
		img: "assets/img/renovation.jpg",
		excerpt: "Lincolnshire is full of beautiful older homes. Here’s how to bring one up to date without losing the character that made you fall for it.",
		body: "<p>From stone cottages to Victorian terraces, the county has some lovely older housing stock. Renovating it well is about balance — modern comfort on one hand, respecting the building on the other.</p><h2>Use the right materials</h2><p>Older buildings need to breathe. That’s why we use <strong>lime mortar and lime plaster</strong> rather than modern cement on solid-wall properties — it lets moisture escape and prevents the damp problems that the wrong materials cause. Reclaimed stone and matching brick keep repairs invisible.</p><h2>Listed building consent</h2><p>If the property is listed, you’ll likely need <strong>listed building consent</strong> for many changes — inside and out. It’s worth doing properly; unauthorised work to a listed building is a serious matter. We manage the consent process so you stay on the right side of it.</p><h2>Where to spend</h2><ul><li><strong>Fabric first</strong> — roof, damp, structure and insulation before the pretty stuff.</li><li><strong>Keep the character features</strong> — original fireplaces, beams and joinery are worth restoring.</li><li><strong>Budget a contingency</strong> — older homes love a surprise, so keep 10–15% back.</li></ul><p>Done sympathetically, a period renovation gives you the best of both worlds. Our Sleaford cottage refurbishment is a good example — have a look in our projects.</p>"
	},
	{
		slug: "questions-to-ask-a-builder",
		title: "10 Questions to Ask a Builder Before You Hire",
		cat: "Advice",
		date: "2 April 2026",
		read: "4 min read",
		img: "assets/img/about-hero.jpg",
		excerpt: "Hiring the right builder is the single biggest decision of your project. These ten questions will tell you a lot about who you’re dealing with.",
		body: "<p>A good builder will be happy to answer all of these without flinching. If someone’s cagey about any of them, take it as a sign.</p><h2>The ten to ask</h2><ul><li><strong>Are you insured?</strong> Ask to see public liability and employer’s liability cover.</li><li><strong>Can I see similar work?</strong> Photos and, ideally, a past client to speak to.</li><li><strong>Are you a member of a trade body?</strong> Look for the FMB, Checkatrade, TrustMark and similar.</li><li><strong>What guarantee do you offer?</strong> We back our work with a 10-year workmanship guarantee.</li><li><strong>Is the quote itemised?</strong> A proper breakdown beats a single scary number.</li><li><strong>Who’s actually on site?</strong> Will it be your team, or subcontractors you’ve never met?</li><li><strong>What’s the programme?</strong> Realistic start and finish dates tied to payment stages.</li><li><strong>How do you handle changes?</strong> There should be a clear process for variations.</li><li><strong>Who manages building control and planning?</strong> Ideally the builder, so it’s one point of contact.</li><li><strong>What happens if there’s a problem?</strong> How they answer this tells you the most.</li></ul><h2>One last tip</h2><p>Get at least three quotes, and be wary of the cheapest by a mile — it usually means something’s been left out. The right builder will give you confidence in the conversation, not just on paper.</p>"
	}
];
var postMeta = {
	"house-extension-cost-lincolnshire": {
		iso: "2026-06-12",
		tags: [
			"Home Extensions",
			"Extension Costs",
			"Budgeting",
			"Lincolnshire"
		],
		service: {
			label: "Home Extensions",
			hash: "/services"
		},
		pull: "The biggest cause of overspend is changing your mind mid-build — nail the design down early and keep a sensible contingency."
	},
	"planning-permission-extension": {
		iso: "2026-05-28",
		tags: [
			"Planning Permission",
			"Permitted Development",
			"Building Regs",
			"Extensions"
		],
		service: {
			label: "Home Extensions",
			hash: "/services"
		},
		pull: "Even when you don’t need planning permission, your extension almost always still needs Building Regulations approval."
	},
	"how-long-does-an-extension-take": {
		iso: "2026-05-14",
		tags: [
			"Extensions",
			"Build Timeline",
			"Project Planning"
		],
		service: {
			label: "Home Extensions",
			hash: "/services"
		},
		pull: "Most people picture the build and forget the eight to twelve weeks of design and approvals that come before it."
	},
	"loft-vs-garage-conversion": {
		iso: "2026-04-30",
		tags: [
			"Loft Conversions",
			"Garage Conversions",
			"Adding Space",
			"Costs"
		],
		service: {
			label: "Loft & Garage Conversions",
			hash: "/services"
		},
		pull: "Need a cheap, fast extra room? Convert the garage. Need a bedroom that adds value? Go up into the loft."
	},
	"renovating-a-period-property-lincolnshire": {
		iso: "2026-04-16",
		tags: [
			"Renovations",
			"Period Properties",
			"Listed Buildings",
			"Lincolnshire"
		],
		service: {
			label: "High-End Renovations",
			hash: "/services"
		},
		pull: "Older buildings need to breathe — which is exactly why we use lime, not cement, on solid-wall properties."
	},
	"questions-to-ask-a-builder": {
		iso: "2026-04-02",
		tags: [
			"Hiring a Builder",
			"Advice",
			"Quotes",
			"Guarantees"
		],
		service: {
			label: "Our Services",
			hash: "/services"
		},
		pull: "A good builder will answer all ten of these without flinching. If someone’s cagey about any of them, take it as a sign."
	}
};
var author = {
	name: "Lee",
	role: "Founder, LME Building Contractors",
	initials: "L",
	bio: "Lee has run building projects across Lincolnshire for over 15 years — from single-storey extensions to full new builds. He leads every LME job personally, from the first site visit to final handover."
};
var coverage = [
	"Sleaford",
	"Lincoln",
	"Grantham",
	"Boston",
	"Spalding",
	"Bourne",
	"Newark",
	"Surrounding villages"
];
var areaChips = [
	"Sleaford",
	"Lincoln",
	"Grantham",
	"Boston",
	"Spalding",
	"Bourne",
	"Newark-on-Trent",
	"North Hykeham",
	"Ruskington",
	"Heckington",
	"Metheringham",
	"Navenby",
	"Woodhall Spa",
	"Horncastle",
	"Market Deeping",
	"Branston"
];
var valueProps = [
	{
		title: "Fully Insured & Accredited",
		body: "Comprehensive cover and recognised industry accreditations on every project."
	},
	{
		title: "Fixed, Transparent Quotes",
		body: "Clear, itemised pricing with no hidden costs and no surprises."
	},
	{
		title: "10-Year Workmanship Guarantee",
		body: "Genuine peace of mind long after we hand over the keys."
	},
	{
		title: "Local, On Time, On Budget",
		body: "Lincolnshire-based, with a track record of reliable delivery."
	}
];
var process$1 = [
	{
		n: "01",
		title: "Consultation",
		body: "A free, no-obligation site visit to understand your vision, budget and timeline."
	},
	{
		n: "02",
		title: "Design & Quote",
		body: "Detailed design proposals and a clear, itemised quotation with no surprises."
	},
	{
		n: "03",
		title: "Build",
		body: "On-site delivery led personally, with regular updates and rigorous quality control."
	},
	{
		n: "04",
		title: "Handover",
		body: "A finished space, signed off to the highest standard, with aftercare support."
	}
];
var projectList = [
	{
		id: "sleaford",
		tag: "Renovation",
		duration: "10 weeks",
		cover: "assets/img/sleaford.jpg",
		thumbA: "assets/img/renovation.jpg",
		thumbB: "assets/img/sleaford.jpg",
		title: "Sleaford Cottage Refurbishment",
		location: "Sleaford, Lincolnshire",
		short: "A sympathetic full restoration of a listed cottage using reclaimed local stone and lime mortar.",
		body: "A sympathetic full restoration of a listed cottage, preserving traditional features while integrating modern amenities using reclaimed local stone and lime mortar.",
		points: [
			"Traditional stone façade restored",
			"Lime mortar repointing",
			"Sympathetic glazing"
		],
		gallery: [
			"assets/img/sleaford.jpg",
			"assets/img/renovation.jpg",
			"assets/img/newbuild.jpg"
		],
		overview: "<p>This Grade II cottage near Sleaford had bags of character but had been left tired and dated. The owners wanted a sensitive restoration — modern comfort throughout, without losing any of the charm that made them buy it in the first place.</p><p>We worked closely with conservation requirements, using traditional materials and methods so the building could breathe as it was designed to, while quietly bringing the services and layout into the 21st century.</p>",
		scope: [
			"Traditional stone façade carefully restored",
			"Lime mortar repointing throughout",
			"Sympathetic timber glazing to match originals",
			"Full rewire and re-plumb",
			"Restored fireplaces and joinery",
			"New kitchen and bathrooms"
		]
	},
	{
		id: "lincoln",
		tag: "Extension",
		duration: "12 weeks",
		cover: "assets/img/lincoln.jpg",
		thumbA: "assets/img/extension.jpg",
		thumbB: "assets/img/lincoln.jpg",
		title: "Lincoln Modern Home Extension",
		location: "Lincoln, Lincolnshire",
		short: "A contemporary extension maximising open-plan living and connecting the home to the garden.",
		body: "A contemporary extension maximising open-plan living, seamlessly connecting the home to the garden with floor-to-ceiling bifold doors and bespoke finishes.",
		points: [
			"Open-plan living space",
			"High-performance bifold doors",
			"Bespoke finishes"
		],
		gallery: [
			"assets/img/lincoln.jpg",
			"assets/img/extension.jpg",
			"assets/img/services-hero.jpg"
		],
		overview: "<p>This Lincoln family wanted to transform a cramped, compartmentalised ground floor into a single, light-filled open-plan kitchen, dining and living space that opened straight out to the garden.</p><p>We removed load-bearing walls, installed steelwork to open the space right up, and finished with floor-to-ceiling bifold doors and a roof lantern so the whole room floods with natural light.</p>",
		scope: [
			"Single-storey rear extension",
			"Structural steelwork and load-bearing wall removal",
			"Floor-to-ceiling bifold doors",
			"Roof lantern for natural light",
			"Underfloor heating",
			"Bespoke kitchen fit-out"
		]
	},
	{
		id: "grantham",
		tag: "New Build",
		duration: "9 months",
		cover: "assets/img/grantham.jpg",
		thumbA: "assets/img/newbuild.jpg",
		thumbB: "assets/img/grantham.jpg",
		title: "Grantham Contemporary New Build",
		location: "Grantham, Lincolnshire",
		short: "A five-bedroom turn-key family home built to exacting specifications with eco-friendly features.",
		body: "A stunning five-bedroom turn-key family home built to exacting specifications with eco-friendly features and bespoke structural glazing, designed for modern luxury.",
		points: [
			"Bespoke architectural design",
			"Structural glazing façade",
			"Energy-efficient systems"
		],
		gallery: [
			"assets/img/grantham.jpg",
			"assets/img/newbuild.jpg",
			"assets/img/projects-hero.jpg"
		],
		overview: "<p>A complete turn-key new build near Grantham — a five-bedroom family home delivered from a bare plot to finished house, ready to move into.</p><p>We managed the entire project, from groundworks and foundations through to the energy-efficient services, bespoke structural glazing and final landscaping, working to an exacting modern specification throughout.</p>",
		scope: [
			"Full groundworks and foundations",
			"Complete structural build",
			"Energy-efficient heating and insulation",
			"Bespoke structural glazing façade",
			"Five bedrooms, three bathrooms",
			"Driveway and landscaping"
		]
	}
];
var comingSoon = [
	{
		title: "Loft Conversions",
		note: "COMING SOON",
		body: "Creating functional living space — from master suites to dedicated home offices."
	},
	{
		title: "Commercial Refurbishment",
		note: "COMING SOON",
		body: "Functional and aesthetic refits for retail, office and commercial spaces."
	},
	{
		title: "Heritage Restoration",
		note: "COMING SOON",
		body: "Sympathetic, compliant restoration of listed and historic structures."
	}
];
var testimonials = [
	{
		id: "t1",
		quote: "From the first site visit to the final handover, LME were professional, tidy and on time. Our extension is everything we hoped for.",
		name: "Sarah & Tom H.",
		meta: "Two-storey extension · Sleaford"
	},
	{
		id: "t2",
		quote: "The quality of workmanship is outstanding. They treated our home like their own and the finish is immaculate.",
		name: "James P.",
		meta: "Full renovation · Lincoln"
	},
	{
		id: "t3",
		quote: "Lee and the team built our new home to an exceptional standard, on budget and ahead of schedule. Highly recommended.",
		name: "The Carters",
		meta: "New build · Grantham"
	}
];
var accreditations = [
	{
		file: "checkatrade.png",
		name: "Checkatrade"
	},
	{
		file: "trustmark.png",
		name: "TrustMark"
	},
	{
		file: "fmb.png",
		name: "Federation of Master Builders"
	},
	{
		file: "gas-safe.png",
		name: "Gas Safe Register"
	},
	{
		file: "nhbc.png",
		name: "NHBC"
	},
	{
		file: "which.png",
		name: "Which? Trusted Trader"
	}
];
var gallery = [
	"assets/img/newbuild.jpg",
	"assets/img/renovation.jpg",
	"assets/img/extension.jpg",
	"assets/img/sleaford.jpg",
	"assets/img/lincoln.jpg",
	"assets/img/grantham.jpg",
	"assets/img/projects-hero.jpg",
	"assets/img/about-hero.jpg"
];
var team = [
	{
		id: "lead",
		img: "assets/img/portrait.jpg",
		name: "Lee",
		role: "Founder & Lead Contractor",
		bio: "Leads every build on-site, from first survey to final handover, with decades of hands-on experience."
	},
	{
		id: "site",
		img: "assets/img/portrait.jpg",
		name: "Site Manager",
		role: "Project & Site Management",
		bio: "Keeps every project on programme and on budget, coordinating trades and quality control."
	},
	{
		id: "joiner",
		img: "assets/img/portrait.jpg",
		name: "Lead Joiner",
		role: "Joinery & Finishes",
		bio: "Responsible for the premium finishing touches that define an LME build."
	}
];
var fbUrl = "https://www.facebook.com/p/LME-Building-Contractors-61554693284703/";
var phone = "07592 278032";
var phoneHref = "tel:07592278032";
var email = "Lmebuildingcontractors@hotmail.com";
var pages = {
	home: {
		heroEyebrow: "Premium Lincolnshire Contractors",
		heroTitle: "Building Your Vision,",
		heroTitleHighlight: "Realised.",
		heroSub: "Bespoke extensions, renovations and new builds across Lincolnshire — designed and built by one trusted local team.",
		heroCtaPrimary: "Get a Free Quote",
		heroCtaSecondary: "View Our Work",
		formHeading: "Get a Free Estimate",
		formSub: "A quick, no-obligation quote — we'll get back to you within one working day.",
		formButton: "Get My Free Estimate",
		offerBadge: "LIMITED OFFER",
		offerText: "Book before 31 August and get a <strong>FREE design consultation + £500 off</strong> your project.",
		offerButton: "Claim Offer",
		statsEyebrow: "By The Numbers",
		statsHeading: "Our results in numbers",
		servicesEyebrow: "What We Do",
		servicesHeading: "Built to last. Finished to impress.",
		servicesLead: "We focus on three things and do them properly. From a single-storey extension to a full new build, it's the same team on site and the same standards throughout — no subbing the work out and hoping for the best.",
		whyEyebrow: "Why Choose LME",
		whyHeading: "Trusted by Lincolnshire homeowners",
		featuredEyebrow: "Recent Work",
		featuredHeading: "Featured Projects",
		galleryEyebrow: "Straight From Site",
		galleryHeading: "Our Work Gallery",
		processEyebrow: "How We Work",
		processHeading: "A clear, structured process.",
		testimonialsEyebrow: "What Our Clients Say",
		testimonialsHeading: "Rated 4.9/5 by Lincolnshire homeowners",
		areasEyebrow: "Areas We Cover",
		areasHeading: "Builders across Lincolnshire",
		areasLead: "Based in Sleaford, we take on extensions, renovations and new builds within roughly a 25-mile radius — Lincoln, Grantham, Boston, Spalding, Bourne and Newark, plus all the villages in between. Not sure if we reach you? Drop us a line and ask.",
		blogEyebrow: "From The Blog",
		blogHeading: "Advice & insights",
		fbHeading: "See our latest builds on Facebook",
		fbText: "Follow LME Building Contractors for project photos, customer reviews and behind-the-scenes updates from sites across Lincolnshire.",
		fbButton: "Follow us on Facebook",
		finalEyebrow: "Start Your Project",
		finalHeading: "Ready to build something exceptional?",
		finalLead: "Get a free, no-obligation quote and design consultation — plus £500 off projects booked this month.",
		finalCta: "Get a Free Quote",
		finalCall: "Call 07592 278032"
	},
	services: {
		heroEyebrow: "Services We Offer",
		heroTitle: "Comprehensive Construction Solutions",
		heroSub: "From a single room to a full build, every LME project is delivered with the same structural rigour and premium finish.",
		faqEyebrow: "Good To Know",
		faqHeading: "Frequently Asked Questions",
		comingHeading: "Specialist Services <span style=\"color:#1192bb;\">— Coming Soon</span>",
		comingLead: "Detailed pages for these disciplines are in development.",
		coverageEyebrow: "Where We Work",
		coverageHeading: "Proudly serving Lincolnshire",
		coverageLead: "Based in Sleaford and covering roughly a 25-mile radius. If your town isn't listed, get in touch — we may still be able to help.",
		ctaHeading: "Not sure which service you need?",
		ctaText: "Book a free consultation and we'll advise on the best approach for your project.",
		ctaButton: "Book Free Consultation"
	},
	about: {
		heroEyebrow: "About LME",
		heroTitle: "Meet the Craftsmen Behind LME",
		heroSub: "Reliable local contractors crafting premium spaces across Lincolnshire — led personally on every site, from first survey to final handover.",
		storyEyebrow: "Who We Are",
		storyHeading: "Local builders, premium standards.",
		storyP1: "We're a Sleaford-based building firm with more than 15 years on the tools across Lincolnshire. From extensions in Lincoln to new builds out towards Grantham, every job is run personally on-site — so you're dealing with the people actually doing the work, not a call centre.",
		storyP2: "We pair modern design with proper, old-fashioned craftsmanship to build spaces that genuinely last, and we'd rather do one job well than rush through three. Most of our work comes through word of mouth and repeat customers — and we'd like to keep it that way.",
		storyCta1: "Start Your Project",
		storyCta2: "See Our Work",
		storyFb: "Follow our latest work on Facebook →",
		drivesEyebrow: "What Drives Us",
		drivesHeading: "Built on craftsmanship and trust",
		drives: [
			{
				title: "Our Mission",
				body: "Crafting premium spaces from concept to completion — and building lasting trust in our community along the way."
			},
			{
				title: "Our Approach",
				body: "Modern design meets traditional craftsmanship, with every project led on-site from first survey to final handover."
			},
			{
				title: "Quality & Craftsmanship",
				body: "Premium materials and meticulous finishing on every build — all backed by our 10-year workmanship guarantee."
			},
			{
				title: "Local & Reliable",
				body: "Lincolnshire-based and proud of it — delivered on time, on budget, with a single accountable point of contact."
			}
		],
		statsEyebrow: "By The Numbers",
		statsHeading: "Our results in numbers",
		processEyebrow: "How We Work",
		processHeading: "A clear, structured process",
		teamEyebrow: "Our People",
		teamHeading: "Meet the Team",
		ctaHeading: "Let's talk about your project.",
		ctaLead: "A free consultation is the best place to start.",
		ctaButton: "Get in Touch"
	},
	contact: {
		heroEyebrow: "Get In Touch",
		heroTitle: "Let's talk about your project",
		heroSub: "Free, no-obligation quotes and design consultations — we'll get back to you within one working day.",
		formHeading: "Send us a message",
		formIntro: "Tell us a bit about your project and we'll get back to you within one working day to arrange a free site visit. The more detail you give us, the more accurate your quote.",
		callTitle: "Call us",
		callText: "Speak to us directly — happy to talk your ideas through.",
		emailTitle: "Email us",
		emailText: "Drop us a line and we'll reply within one working day.",
		whereTitle: "Where we work",
		whereText: "Based in Sleaford, covering roughly 25 miles across Lincolnshire.",
		whereTowns: "Sleaford · Lincoln · Grantham · Boston · Spalding · Bourne · Newark",
		hoursTitle: "Opening hours",
		hoursText: "Mon–Fri&nbsp;&nbsp;8am – 6pm<br>Saturday&nbsp;&nbsp;9am – 1pm<br>Sunday&nbsp;&nbsp;Closed",
		followTitle: "Follow our work",
		followText: "See recent projects, reviews and updates from our sites across Lincolnshire.",
		testimonialsEyebrow: "What Our Clients Say",
		testimonialsHeading: "Rated 4.9/5 by Lincolnshire homeowners",
		faqEyebrow: "Good To Know",
		faqHeading: "Frequently Asked Questions"
	}
};
//#endregion
//#region src/lib/storyblok.js
var TOKEN = process.env.STORYBLOK_TOKEN || "";
var DEFAULT_VERSION = process.env.STORYBLOK_VERSION || "published";
var BASE = {
	eu: "https://api.storyblok.com",
	us: "https://api-us.storyblok.com",
	ap: "https://api-ap.storyblok.com",
	ca: "https://api-ca.storyblok.com"
}[process.env.STORYBLOK_REGION || "eu"] || "https://api.storyblok.com";
var storyblokEnabled = !!TOKEN;
async function cdn(path, params = {}, version) {
	if (!TOKEN) return null;
	const v = version || DEFAULT_VERSION;
	const url = `${BASE}/v2/cdn/${path}?${new URLSearchParams({
		token: TOKEN,
		version: v,
		...v === "draft" ? { cv: String(Date.now()) } : {},
		...params
	}).toString()}`;
	try {
		const res = await fetch(url);
		if (!res.ok) {
			console.warn("[storyblok] " + res.status + " for " + path);
			return null;
		}
		return await res.json();
	} catch (e) {
		console.warn("[storyblok] fetch failed for " + path + ": " + e.message);
		return null;
	}
}
var txt = (v, d) => v === void 0 || v === null || v === "" ? d : v;
var asset$1 = (v, d) => v && v.filename ? v.filename : txt(v, d);
var lines = (v, d) => {
	if (Array.isArray(v)) return v;
	if (typeof v === "string" && v.trim()) return v.split("\n").map((s) => s.trim()).filter(Boolean);
	return d;
};
var blok = (v) => Array.isArray(v) ? v : [];
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
		dec: parseInt(txt(s.dec, "0"), 10) || 0,
		suf: txt(s.suf, ""),
		l: txt(s.l, ""),
		d: txt(s.d, "")
	}));
	if (blok(content.services).length) out.services = content.services.map((s, i) => {
		const lo = local.services[i] || {};
		return {
			n: txt(s.n, lo.n),
			id: txt(s.sid, lo.id),
			title: txt(s.title, lo.title),
			short: txt(s.short, lo.short),
			body: txt(s.body, lo.body),
			img: asset$1(s.img, lo.img),
			included: lines(s.included, lo.included || []),
			timeline: txt(s.timeline, lo.timeline),
			priceFrom: txt(s.priceFrom, lo.priceFrom)
		};
	});
	if (blok(content.faqs).length) out.faqs = content.faqs.map((f) => ({
		q: txt(f.q, ""),
		a: txt(f.a, "")
	}));
	if (blok(content.valueProps).length) out.valueProps = content.valueProps.map((v) => ({
		title: txt(v.title, ""),
		body: txt(v.body, "")
	}));
	if (blok(content.process).length) out.process = content.process.map((p) => ({
		n: txt(p.n, ""),
		title: txt(p.title, ""),
		body: txt(p.body, "")
	}));
	if (blok(content.testimonials).length) out.testimonials = content.testimonials.map((t, i) => ({
		id: "t" + i,
		quote: txt(t.quote, ""),
		name: txt(t.name, ""),
		meta: txt(t.meta, "")
	}));
	if (blok(content.accreditations).length) out.accreditations = content.accreditations.map((a) => ({
		name: txt(a.name, ""),
		file: "",
		url: asset$1(a.image, "")
	}));
	if (blok(content.team).length) out.team = content.team.map((m, i) => ({
		id: "m" + i,
		name: txt(m.name, ""),
		role: txt(m.role, ""),
		bio: txt(m.bio, ""),
		img: asset$1(m.img, "")
	}));
	if (blok(content.comingSoon).length) out.comingSoon = content.comingSoon.map((c) => ({
		title: txt(c.title, ""),
		note: txt(c.note, "COMING SOON"),
		body: txt(c.body, "")
	}));
	if (Array.isArray(content.gallery) && content.gallery.length) out.gallery = content.gallery.map((g) => asset$1(g, "")).filter(Boolean);
	return out;
}
function mapPost(story, local) {
	const c = story.content || {};
	return {
		slug: story.slug,
		title: txt(c.title, story.name),
		cat: txt(c.cat, "Advice"),
		date: txt(c.date, ""),
		read: txt(c.read, "4 min read"),
		img: asset$1(c.img, ""),
		excerpt: txt(c.excerpt, ""),
		body: txt(c.body, ""),
		_meta: {
			iso: txt(c.iso, ""),
			tags: lines(c.tags, []),
			pull: txt(c.pull, ""),
			service: {
				label: txt(c.serviceLabel, "Our Services"),
				hash: txt(c.serviceHash, "/services")
			}
		}
	};
}
function mapProject(story, local) {
	const c = story.content || {};
	return {
		id: story.slug,
		tag: txt(c.tag, ""),
		duration: txt(c.duration, ""),
		cover: asset$1(c.cover, ""),
		thumbA: asset$1(c.thumbA, ""),
		thumbB: asset$1(c.thumbB, ""),
		title: txt(c.title, story.name),
		location: txt(c.location, ""),
		short: txt(c.short, ""),
		body: txt(c.body, ""),
		points: lines(c.points, []),
		scope: lines(c.scope, []),
		overview: txt(c.overview, ""),
		gallery: Array.isArray(c.gallery) ? c.gallery.map((g) => asset$1(g, "")).filter(Boolean) : []
	};
}
function mapPage(content, def) {
	if (!content) return null;
	const out = { ...def };
	for (const k of Object.keys(def)) if (Array.isArray(def[k])) {
		if (Array.isArray(content[k]) && content[k].length) out[k] = content[k].map((b, i) => ({
			title: txt(b.title, (def[k][i] || {}).title),
			body: txt(b.body, (def[k][i] || {}).body)
		}));
	} else out[k] = txt(content[k], def[k]);
	return out;
}
async function sbPage(slug, def, version) {
	const json = await cdn("stories/" + slug, {}, version);
	if (!json || !json.story) return null;
	return mapPage(json.story.content, def);
}
async function sbConfig(local, version) {
	const json = await cdn("stories/config", {}, version);
	if (!json || !json.story) return null;
	return mapConfig(json.story.content, local);
}
async function sbPosts(local, version) {
	const json = await cdn("stories", {
		starts_with: "blog/",
		per_page: "100",
		sort_by: "content.iso:desc"
	}, version);
	if (!json || !Array.isArray(json.stories) || !json.stories.length) return null;
	return json.stories.map((s) => mapPost(s, local));
}
async function sbProjects(local, version) {
	const json = await cdn("stories", {
		starts_with: "projects/",
		per_page: "100"
	}, version);
	if (!json || !Array.isArray(json.stories) || !json.stories.length) return null;
	return json.stories.map((s) => mapProject(s, local));
}
//#endregion
//#region src/lib/data.js
var defaults = {
	heroTrust,
	stats,
	services,
	faqs,
	posts,
	postMeta,
	author,
	coverage,
	areaChips,
	valueProps,
	process: process$1,
	projectList,
	comingSoon,
	testimonials,
	accreditations,
	gallery,
	team,
	fbUrl,
	phone,
	phoneHref,
	email,
	pages
};
var _cache = {};
var TTL = 3e4;
async function getData(version = "published") {
	const cached = _cache[version];
	if (cached && version !== "draft" && Date.now() - cached.ts < TTL) return cached.data;
	const d = { ...defaults };
	if (storyblokEnabled) {
		const [config, posts, projects, home, services, about, contact] = await Promise.all([
			sbConfig(content_exports, version).catch(() => null),
			sbPosts(content_exports, version).catch(() => null),
			sbProjects(content_exports, version).catch(() => null),
			sbPage("home", pages.home, version).catch(() => null),
			sbPage("services", pages.services, version).catch(() => null),
			sbPage("about", pages.about, version).catch(() => null),
			sbPage("contact", pages.contact, version).catch(() => null)
		]);
		if (config) Object.assign(d, config);
		if (posts && posts.length) {
			d.posts = posts.map((p) => ({
				slug: p.slug,
				title: p.title,
				cat: p.cat,
				date: p.date,
				read: p.read,
				img: p.img,
				excerpt: p.excerpt,
				body: p.body
			}));
			d.postMeta = {};
			posts.forEach((p) => {
				d.postMeta[p.slug] = p._meta;
			});
		}
		if (projects && projects.length) d.projectList = projects;
		d.pages = {
			home: home || pages.home,
			services: services || pages.services,
			about: about || pages.about,
			contact: contact || pages.contact
		};
		d._diag = `storyblok(${version}) cfg:${config ? "y" : "n"} posts:${posts ? posts.length : 0} projects:${projects ? projects.length : 0} pages:${home ? "y" : "n"}`;
	} else d._diag = "fallback-NO-TOKEN (STORYBLOK_TOKEN not set)";
	_cache[version] = {
		data: d,
		ts: Date.now()
	};
	return d;
}
//#endregion
//#region src/lib/preview.js
function versionFromRequest(Astro) {
	const u = Astro.url;
	return u.searchParams.has("_storyblok") || u.searchParams.get("preview") === "1" ? "draft" : "published";
}
function setCache(Astro, version) {
	if (version === "draft") Astro.response.headers.set("Cache-Control", "no-store");
	else Astro.response.headers.set("Cache-Control", "public, max-age=0, s-maxage=60, stale-while-revalidate=600");
}
//#endregion
//#region src/layouts/Base.astro
createAstro("https://lmebuildingcontractors.uk");
var $$Base = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Base;
	const _version = versionFromRequest(Astro);
	setCache(Astro, _version);
	const _diag = (await getData(_version))._diag || "unknown";
	const { title, description, page = "", ogImage = "/assets/img/home-hero.jpg", includeFaq = false, extraJsonLd = null } = Astro.props;
	const site = "https://lmebuildingcontractors.uk";
	const canonical = new URL(Astro.url.pathname, site).href.replace(/\/$/, Astro.url.pathname === "/" ? "/" : "");
	const ogImageAbs = ogImage.startsWith("http") ? ogImage : site + ogImage;
	const nav = [
		{
			href: "/",
			key: "home",
			label: "HOME"
		},
		{
			href: "/services",
			key: "services",
			label: "SERVICES"
		},
		{
			href: "/projects",
			key: "projects",
			label: "PROJECTS"
		},
		{
			href: "/blog",
			key: "blog",
			label: "BLOG"
		},
		{
			href: "/about",
			key: "about",
			label: "ABOUT"
		},
		{
			href: "/contact",
			key: "contact",
			label: "CONTACT"
		}
	];
	const graph = [{
		"@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
		"@id": "https://lmebuildingcontractors.uk/#business",
		name: "LME Building Contractors",
		description: "Sleaford-based building contractors serving Lincolnshire — bespoke home extensions, high-end renovations and modern new builds, from concept design to final handover.",
		url: "https://lmebuildingcontractors.uk/",
		logo: "https://lmebuildingcontractors.uk/assets/favicon.svg",
		image: "https://lmebuildingcontractors.uk/assets/img/home-hero.jpg",
		telephone: "+447592278032",
		email: "Lmebuildingcontractors@hotmail.com",
		priceRange: "££",
		foundingDate: "2011",
		slogan: "Premium craftsmanship. Reliable local contractors.",
		sameAs: ["https://www.facebook.com/p/LME-Building-Contractors-61554693284703/"],
		address: {
			"@type": "PostalAddress",
			addressLocality: "Sleaford",
			addressRegion: "Lincolnshire",
			addressCountry: "GB"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: 53.0026,
			longitude: -.4096
		},
		hasMap: "https://www.google.com/maps?q=Sleaford,Lincolnshire,UK",
		areaServed: [
			{
				"@type": "City",
				name: "Sleaford"
			},
			{
				"@type": "City",
				name: "Lincoln"
			},
			{
				"@type": "City",
				name: "Grantham"
			},
			{
				"@type": "City",
				name: "Boston"
			},
			{
				"@type": "City",
				name: "Spalding"
			},
			{
				"@type": "City",
				name: "Bourne"
			},
			{
				"@type": "City",
				name: "Newark-on-Trent"
			},
			{
				"@type": "AdministrativeArea",
				name: "Lincolnshire"
			}
		],
		serviceArea: {
			"@type": "GeoCircle",
			geoMidpoint: {
				"@type": "GeoCoordinates",
				latitude: 53.0026,
				longitude: -.4096
			},
			geoRadius: "40000"
		},
		openingHoursSpecification: [{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: [
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday"
			],
			opens: "08:00",
			closes: "18:00"
		}, {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Saturday",
			opens: "09:00",
			closes: "13:00"
		}],
		aggregateRating: {
			"@type": "AggregateRating",
			ratingValue: "4.9",
			reviewCount: "127",
			bestRating: "5"
		},
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Building services",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Bespoke Home Extensions",
						description: "Single & two-storey, wrap-around, side return and kitchen extensions across Lincolnshire."
					}
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "High-End Renovations",
						description: "Full house renovations, structural alterations and sympathetic period & listed property restoration."
					}
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Modern New Builds",
						description: "Turn-key new homes and self-build support, built to exacting modern standards."
					}
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Loft & Garage Conversions",
						description: "Dormer and rooflight loft conversions and garage conversions to add usable space."
					}
				}
			]
		}
	}, {
		"@type": "WebSite",
		"@id": "https://lmebuildingcontractors.uk/#website",
		url: "https://lmebuildingcontractors.uk/",
		name: "LME Building Contractors",
		publisher: { "@id": "https://lmebuildingcontractors.uk/#business" },
		inLanguage: "en-GB"
	}];
	if (includeFaq) graph.push({
		"@type": "FAQPage",
		"@id": "https://lmebuildingcontractors.uk/#faq",
		mainEntity: faqs.map((f) => ({
			"@type": "Question",
			name: f.q,
			acceptedAnswer: {
				"@type": "Answer",
				text: f.a
			}
		}))
	});
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": graph
	};
	const FB = "https://www.facebook.com/p/LME-Building-Contractors-61554693284703/";
	return renderTemplate`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonical, "href")}><meta name="theme-color" content="#12161d"><meta name="robots" content="index, follow, max-image-preview:large"><meta name="author" content="LME Building Contractors"><meta name="geo.region" content="GB-LIN"><meta name="geo.placename" content="Sleaford, Lincolnshire"><meta name="geo.position" content="53.0026;-0.4096"><meta name="ICBM" content="53.0026, -0.4096"><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><meta property="og:site_name" content="LME Building Contractors"><meta property="og:locale" content="en_GB"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(ogImageAbs, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImageAbs, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,600&display=swap" rel="stylesheet"><link rel="stylesheet" href="/assets/css/styles.css"><script type="application/ld+json">${unescapeHTML(JSON.stringify(jsonLd))}<\/script>${extraJsonLd && renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(extraJsonLd))}<\/script>`}${renderHead($$result)}</head><body><div id="lme-diag" style="display:none;position:fixed;left:0;bottom:0;z-index:99999;background:#06222c;color:#5cf;font:13px/1.5 monospace;padding:10px 14px;max-width:100vw;word-break:break-word;">content-source: ${_diag}</div><script>if(location.search.indexOf('diag')>-1){var e=document.getElementById('lme-diag');if(e)e.style.display='block';}<\/script><div class="progress" id="progress"></div><header class="site-header over-hero" id="siteHeader"><div class="wrap header-inner"><a class="brand" href="/" aria-label="LME Building Contractors — home"><svg width="50" height="34" viewBox="0 0 70 48" fill="none" style="flex:none;" aria-hidden="true"><path d="M6 41 L33 14" stroke="#33b8de" stroke-width="6" stroke-linecap="round"></path><path d="M31 14 H41 L64 41 H45 Z" fill="#33b8de"></path><rect x="37" y="5" width="5.5" height="12" rx="1" fill="#33b8de"></rect><rect x="18" y="22.5" width="6.5" height="6.5" rx="1" fill="#33b8de"></rect><rect x="27" y="22.5" width="6.5" height="6.5" rx="1" fill="#33b8de"></rect><rect x="18" y="31.5" width="6.5" height="6.5" rx="1" fill="#33b8de"></rect><rect x="27" y="31.5" width="6.5" height="6.5" rx="1" fill="#33b8de"></rect></svg><span style="line-height:1;display:block;"><span class="brand-name">LME <span>BUILDING</span></span><span class="brand-sub" style="display:block;">CONTRACTORS</span></span></a><nav class="nav-links" aria-label="Primary">${nav.map((n) => renderTemplate`<a${addAttribute(["nav-link", { active: page === n.key }], "class:list")}${addAttribute(n.href, "href")}>${n.label}<span class="underline"></span></a>`)}<a class="btn btn-cy nav-quote" href="/contact">Get a Free Quote</a></nav><button class="burger" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="mobileMenu"><span></span><span></span><span></span></button></div></header><div class="nav-backdrop" id="navBackdrop"></div><aside class="drawer" id="mobileMenu" aria-label="Mobile navigation"><div class="drawer-head"><span style="font-family:'Montserrat',sans-serif;font-weight:800;font-size:16px;letter-spacing:.4px;color:#fff;">LME <span style="color:#5cc6e8;">BUILDING</span></span><button class="drawer-close" id="drawerClose" aria-label="Close menu"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6 L18 18 M18 6 L6 18"></path></svg></button></div><nav class="drawer-nav"><a class="drawer-link" href="/">Home</a><a class="drawer-link" href="/services">Services</a><a class="drawer-link" href="/projects">Projects</a><a class="drawer-link" href="/blog">Blog</a><a class="drawer-link" href="/about">About</a><a class="drawer-link" href="/contact">Contact</a></nav><div class="drawer-foot"><a class="btn btn-cy" href="/contact">Get a Free Quote</a><div class="drawer-contact"><a href="tel:07592278032"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5cc6e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"></path></svg>07592 278032</a><a href="mailto:Lmebuildingcontractors@hotmail.com"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5cc6e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m2 7 10 6 10-6"></path></svg>Lmebuildingcontractors@hotmail.com</a></div></div></aside><main>${renderSlot($$result, $$slots["default"])}</main><footer style="background:#0e1218;padding:clamp(56px,7vw,80px) 0 36px;"><div class="wrap g-footer"><div><div style="display:flex;align-items:center;gap:12px;margin-bottom:18px;"><svg width="46" height="32" viewBox="0 0 70 48" fill="none" style="flex:none;" aria-hidden="true"><path d="M6 41 L33 14" stroke="#5cc6e8" stroke-width="6" stroke-linecap="round"></path><path d="M31 14 H41 L64 41 H45 Z" fill="#5cc6e8"></path><rect x="37" y="5" width="5.5" height="12" rx="1" fill="#5cc6e8"></rect><rect x="18" y="22.5" width="6.5" height="6.5" rx="1" fill="#5cc6e8"></rect><rect x="27" y="22.5" width="6.5" height="6.5" rx="1" fill="#5cc6e8"></rect><rect x="18" y="31.5" width="6.5" height="6.5" rx="1" fill="#5cc6e8"></rect><rect x="27" y="31.5" width="6.5" height="6.5" rx="1" fill="#5cc6e8"></rect></svg><div style="line-height:1;"><div style="font-family:'Montserrat',sans-serif;font-weight:800;font-size:17px;letter-spacing:0.4px;color:#fff;">LME <span style="color:#5cc6e8;">BUILDING</span></div><div style="font-family:'Montserrat',sans-serif;font-weight:600;font-size:8px;letter-spacing:5px;color:#8c97a4;margin-top:3px;">CONTRACTORS</div></div></div><p style="font-size:14.5px;line-height:1.7;color:#8c97a4;max-width:300px;margin:0 0 18px;">Premium craftsmanship and reliable local construction across Lincolnshire — extensions, renovations and new builds.</p><div class="stars" style="font-size:16px;margin-bottom:20px;">★★★★★ <span style="color:#8c97a4;font-family:'Montserrat';font-size:13px;letter-spacing:0;">4.9 · 127 reviews</span></div><a class="fb-pill"${addAttribute(FB, "href")} target="_blank" rel="noopener" aria-label="Follow LME Building Contractors on Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07Z"></path></svg>Follow us on Facebook</a></div><div><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;letter-spacing:1.5px;color:#fff;margin-bottom:18px;">EXPLORE</div><div style="display:flex;flex-direction:column;gap:12px;"><a href="/" class="foot-link">Home</a><a href="/services" class="foot-link">Services</a><a href="/projects" class="foot-link">Projects</a><a href="/blog" class="foot-link">Blog</a><a href="/about" class="foot-link">About</a></div></div><div><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;letter-spacing:1.5px;color:#fff;margin-bottom:18px;">CONTACT</div><div style="display:flex;flex-direction:column;gap:12px;font-size:14.5px;color:#9aa4b1;"><a href="tel:07592278032" class="foot-link">07592 278032</a><a href="mailto:Lmebuildingcontractors@hotmail.com" class="foot-link" style="word-break:break-all;">Lmebuildingcontractors@hotmail.com</a><div>Sleaford, Lincolnshire</div><div style="color:#69737f;">Mon–Fri 8–6 · Sat 9–1</div><a${addAttribute(FB, "href")} target="_blank" rel="noopener" class="foot-link" style="display:inline-flex;align-items:center;gap:7px;"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07Z"></path></svg>Facebook</a></div></div><div><div style="font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;letter-spacing:1.5px;color:#fff;margin-bottom:18px;">START A PROJECT</div><p style="font-size:14px;color:#8c97a4;margin:0 0 16px;line-height:1.6;">Free consultation + £500 off this month.</p><a class="btn btn-cy" href="/contact" style="padding:13px 22px;font-size:13px;">Get a Free Quote</a></div></div><div class="wrap" style="margin-top:44px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.08);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:13px;color:#69737f;"><div>© <span id="year">2026</span> LME Building Contractors. All rights reserved.</div><div style="display:flex;gap:18px;flex-wrap:wrap;"><a href="/privacy" class="foot-link">Privacy</a><a href="/cookies" class="foot-link">Cookies</a><a href="/terms" class="foot-link">Terms</a></div></div></footer><div id="cookie-banner" style="display:none;position:fixed;left:clamp(14px,3vw,28px);right:clamp(14px,3vw,28px);bottom:clamp(14px,3vw,28px);z-index:300;max-width:560px;margin:0 auto;background:#12161d;color:#d3dae2;border:1px solid #2a3038;border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.4);padding:clamp(20px,3vw,26px);"><div style="font-family:'Montserrat',sans-serif;font-weight:800;font-size:16px;color:#fff;margin-bottom:8px;">We value your privacy</div><p style="font-size:14px;line-height:1.6;color:#aab3c0;margin:0 0 18px;">We use cookies to improve your experience and analyse site traffic. You can accept all cookies or reject non-essential ones. See our <a href="/cookies" style="color:#5cc6e8;">Cookie Policy</a>.</p><div style="display:flex;gap:10px;flex-wrap:wrap;"><button class="btn btn-cy" id="cookie-accept" style="padding:12px 22px;font-size:14px;">Accept all</button><button class="btn btn-gl" id="cookie-reject" style="padding:12px 22px;font-size:14px;">Reject non-essential</button></div></div><script src="/assets/js/interactions.js"><\/script><script>
  /* Storyblok visual-editor bridge: only loads inside the Storyblok editor.
     Reloads the (draft-rendering) preview as you edit, so changes show live. */
  if (location.search.includes('_storyblok')) {
    var sbb = document.createElement('script');
    sbb.src = 'https://app.storyblok.com/f/storyblok-v2-latest.js';
    sbb.onload = function () {
      if (!window.StoryblokBridge) return;
      var bridge = new window.StoryblokBridge();
      var t;
      function reload() { clearTimeout(t); t = setTimeout(function () { location.reload(); }, 700); }
      bridge.on(['input', 'change', 'published'], reload);
    };
    document.head.appendChild(sbb);
  }
<\/script></body></html>`;
}, "/home/claude/repo/src/layouts/Base.astro", void 0);
//#endregion
//#region src/lib/render.js
function esc(s) {
	return String(s).replace(/[&<>"']/g, function(c) {
		return {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			"\"": "&quot;",
			"'": "&#39;"
		}[c];
	});
}
function asset(src) {
	if (!src) return src;
	if (/^https?:\/\//.test(src) || src.charAt(0) === "/") return src;
	return "/" + src;
}
function slot(extra, label, src, alt) {
	var img = src ? "<img src=\"" + asset(src) + "\" alt=\"" + esc(alt || label) + "\" loading=\"lazy\" onload=\"this.parentNode.classList.add('has-img')\" onerror=\"this.remove()\">" : "";
	return "<div class=\"img-slot " + extra + "\">" + img + "<span>" + esc(label) + "</span></div>";
}
function statsHTML(d) {
	return d.stats.map(function(st) {
		return "<div class=\"stat reveal\"><div class=\"stat-num\"><span class=\"num\" data-count=\"" + st.n + "\" data-dec=\"" + st.dec + "\">0</span>" + (st.suf ? "<span class=\"suf\">" + esc(st.suf) + "</span>" : "") + "</div><div class=\"stat-label\">" + esc(st.l) + "</div><div class=\"stat-desc\">" + esc(st.d) + "</div></div>";
	}).join("");
}
function homeServicesHTML(d) {
	return d.services.map(function(svc) {
		return "<a class=\"card card-link reveal zoom-wrap\" href=\"/services#svc-" + svc.id + "\" style=\"overflow:hidden;display:block;text-decoration:none;\"><div style=\"position:relative;height:210px;overflow:hidden;\">" + slot("fill zoom", "Drop service photo", svc.img, svc.title) + "<span style=\"position:absolute;top:14px;left:14px;font-family:'Montserrat',sans-serif;font-weight:800;font-size:12px;color:#06222c;background:#33b8de;padding:6px 11px;border-radius:5px;\">" + esc(svc.n) + "</span></div><div style=\"padding:26px 26px 30px;\"><h3 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;margin:0 0 10px;color:#15191f;\">" + esc(svc.title) + "</h3><p style=\"font-size:15px;line-height:1.6;color:#5b6470;margin:0 0 18px;\">" + esc(svc.short) + "</p><span class=\"read-more\">Learn more →</span></div></a>";
	}).join("");
}
function valuePropsHTML(d) {
	return d.valueProps.map(function(vp) {
		return "<div class=\"reveal\" style=\"text-align:center;padding:0 6px;\"><div style=\"display:flex;justify-content:center;margin-bottom:18px;\"><svg width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#33b8de\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><path d=\"M7.5 12.5 L10.5 15.5 L16.5 8.5\"></path></svg></div><h3 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:18px;margin:0 0 10px;color:#15191f;\">" + esc(vp.title) + "</h3><p style=\"font-size:14.5px;line-height:1.6;color:#5b6470;margin:0;\">" + esc(vp.body) + "</p></div>";
	}).join("");
}
function featuredHTML(d) {
	return d.projectList.map(function(proj) {
		return "<a class=\"card card-link reveal zoom-wrap\" href=\"/projects/" + proj.id + "\" style=\"overflow:hidden;display:block;text-decoration:none;\"><div style=\"position:relative;height:230px;overflow:hidden;\">" + slot("fill zoom", "Drop cover photo", proj.cover, proj.title) + "<span style=\"position:absolute;top:14px;left:14px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:11px;letter-spacing:1px;color:#06222c;background:#33b8de;padding:6px 12px;border-radius:5px;\">" + esc(proj.tag) + "</span></div><div style=\"padding:24px 26px 28px;\"><h3 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:20px;margin:0 0 8px;color:#15191f;line-height:1.2;\">" + esc(proj.title) + "</h3><div style=\"display:flex;align-items:center;gap:7px;font-size:13px;color:#79828f;font-weight:500;margin-bottom:14px;\"><span class=\"dot\"></span>" + esc(proj.location) + "</div><p style=\"font-size:14.5px;line-height:1.6;color:#5b6470;margin:0;\">" + esc(proj.short) + "</p></div></a>";
	}).join("");
}
function galleryHTML(d) {
	return d.gallery.map(function(src) {
		return slot("r8", "Photo", src, "LME Building Contractors project photo").replace("class=\"img-slot r8\"", "class=\"img-slot r8\" style=\"width:100%;aspect-ratio:1/1;\"");
	}).join("");
}
function processHTML(d) {
	return d.process.map(function(step) {
		return "<div class=\"reveal\" style=\"border-top:2px solid #33b8de;padding-top:22px;\"><div style=\"font-family:'Montserrat',sans-serif;font-weight:800;font-size:15px;color:#5cc6e8;margin-bottom:14px;\">/ " + esc(step.n) + "</div><h3 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:20px;margin:0 0 10px;color:#fff;\">" + esc(step.title) + "</h3><p style=\"font-size:14.5px;line-height:1.65;color:#aab3c0;margin:0;\">" + esc(step.body) + "</p></div>";
	}).join("");
}
function testimonialsHTML(d) {
	return d.testimonials.map(function(t) {
		return "<div class=\"card reveal\" style=\"padding:30px 28px;display:flex;flex-direction:column;gap:16px;\"><div class=\"stars\" style=\"font-size:16px;\">★★★★★</div><p style=\"font-size:15.5px;line-height:1.65;color:#2c333d;margin:0;flex:1;\">“" + esc(t.quote) + "”</p><div style=\"display:flex;align-items:center;gap:13px;border-top:1px solid #efeee9;padding-top:18px;\"><div class=\"img-slot circle\" style=\"width:46px;height:46px;flex:none;\"><span></span></div><div><div style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:15px;color:#15191f;\">" + esc(t.name) + "</div><div style=\"font-size:13px;color:#79828f;\">" + esc(t.meta) + "</div></div></div></div>";
	}).join("");
}
function accHTML(d) {
	return d.accreditations.map(function(acc) {
		return "<div class=\"acc-chip\"><img src=\"" + (acc.url ? acc.url : "/assets/img/accreditations/" + acc.file) + "\" alt=\"" + esc(acc.name) + "\" loading=\"lazy\" onerror=\"var s=document.createElement('span');s.className='fallback';s.textContent=this.alt;this.replaceWith(s)\"></div>";
	}).join("");
}
function servicesListHTML(d) {
	return d.services.map(function(svc, idx) {
		var inc = (svc.included || []).map(function(i) {
			return "<div style=\"display:flex;align-items:flex-start;gap:10px;font-size:14.5px;color:#3a414c;font-weight:500;line-height:1.4;\"><span class=\"diamond\" style=\"margin-top:6px;\"></span>" + esc(i) + "</div>";
		}).join("");
		var next = d.services[idx + 1];
		var nextCta = next ? "<a class=\"read-more\" href=\"/services#svc-" + next.id + "\">Up next: " + esc(next.title) + " →</a>" : "<a class=\"read-more\" href=\"/contact\">Ready to start? Get a free quote →</a>";
		return "<div class=\"card reveal g-svc\" id=\"svc-" + svc.id + "\" style=\"overflow:hidden;scroll-margin-top:90px;\"><div style=\"position:relative;min-height:340px;overflow:hidden;\">" + slot("fill", "Drop service photo", svc.img, svc.title) + "</div><div style=\"padding:clamp(30px,3.4vw,52px);display:flex;flex-direction:column;justify-content:center;\"><div style=\"font-family:'Montserrat',sans-serif;font-weight:800;font-size:14px;letter-spacing:1px;color:#1192bb;margin-bottom:14px;\">/ " + esc(svc.n) + " — SERVICE</div><h2 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:clamp(24px,2.4vw,32px);margin:0 0 14px;color:#15191f;\">" + esc(svc.title) + "</h2><p style=\"font-size:16px;line-height:1.7;color:#5b6470;margin:0 0 22px;\">" + esc(svc.body) + "</p><div style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:12px;letter-spacing:1.5px;color:#15191f;text-transform:uppercase;margin-bottom:14px;\">What's Included</div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:26px;\">" + inc + "</div><div style=\"display:flex;gap:30px;flex-wrap:wrap;padding:20px 0;border-top:1px solid #efeee9;border-bottom:1px solid #efeee9;margin-bottom:26px;\"><div><div style=\"font-family:'Montserrat',sans-serif;font-weight:600;font-size:11px;letter-spacing:1.3px;color:#79828f;text-transform:uppercase;margin-bottom:6px;\">Typical Timeline</div><div style=\"font-family:'Montserrat',sans-serif;font-weight:800;font-size:20px;color:#15191f;\">" + esc(svc.timeline) + "</div></div><div><div style=\"font-family:'Montserrat',sans-serif;font-weight:600;font-size:11px;letter-spacing:1.3px;color:#79828f;text-transform:uppercase;margin-bottom:6px;\">Investment From</div><div style=\"font-family:'Montserrat',sans-serif;font-weight:800;font-size:20px;color:#15191f;\">" + esc(svc.priceFrom) + "</div></div></div><div style=\"display:flex;flex-wrap:wrap;gap:14px 24px;align-items:center;\"><a class=\"btn btn-cy\" href=\"/contact\">Enquire About " + esc(svc.title) + "</a>" + nextCta + "</div></div></div>";
	}).join("");
}
function faqHTML(d) {
	return d.faqs.map(function(f) {
		return "<div class=\"faq-item\"><button class=\"faq-q\" type=\"button\" aria-expanded=\"false\"><span>" + esc(f.q) + "</span><span class=\"faq-ico\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#1192bb\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6 6-6\"></path></svg></span></button><div class=\"faq-a\"><div class=\"faq-a-inner\">" + esc(f.a) + "</div></div></div>";
	}).join("");
}
function comingHTML(d) {
	return d.comingSoon.map(function(cs) {
		return "<div class=\"reveal\" style=\"background:#fff;border:1px dashed #cdd2c9;border-radius:10px;padding:clamp(26px,2.4vw,34px);\"><div style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:11px;letter-spacing:2px;color:#1192bb;margin-bottom:14px;\">" + esc(cs.note) + "</div><h3 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;margin:0 0 10px;color:#3a414c;\">" + esc(cs.title) + "</h3><p style=\"font-size:14.5px;line-height:1.6;color:#79828f;margin:0;\">" + esc(cs.body) + "</p></div>";
	}).join("");
}
function coverageChipsHTML(d) {
	return d.coverage.map(function(town) {
		return "<div style=\"background:#fff;border:1px solid #e7e5e0;border-radius:100px;padding:11px 22px;font-family:'Montserrat',sans-serif;font-weight:600;font-size:14px;color:#2c333d;display:flex;align-items:center;gap:9px;\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#1192bb\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"flex:none;\"><path d=\"M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z\"></path><circle cx=\"12\" cy=\"10\" r=\"2.4\"></circle></svg>" + esc(town) + "</div>";
	}).join("");
}
function projectsListHTML(d) {
	return d.projectList.map(function(proj) {
		var pts = (proj.points || []).map(function(pt) {
			return "<div style=\"display:flex;align-items:center;gap:10px;font-size:13.5px;color:#3a414c;font-weight:500;\"><span class=\"diamond\"></span>" + esc(pt) + "</div>";
		}).join("");
		return "<a class=\"card card-link reveal\" href=\"/projects/" + proj.id + "\" style=\"overflow:hidden;display:block;text-decoration:none;\"><div class=\"zoom-wrap\" style=\"position:relative;height:250px;overflow:hidden;\">" + slot("fill zoom", "Drop cover photo", proj.cover, proj.title) + "<span style=\"position:absolute;top:14px;left:14px;font-family:'Montserrat',sans-serif;font-weight:700;font-size:11px;letter-spacing:1px;color:#06222c;background:#33b8de;padding:6px 12px;border-radius:5px;\">" + esc(proj.tag) + "</span></div><div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:8px;\"><div style=\"position:relative;height:84px;\">" + slot("r6 fill", "Detail", proj.thumbA, proj.title + " detail") + "</div><div style=\"position:relative;height:84px;\">" + slot("r6 fill", "Detail", proj.thumbB, proj.title + " detail") + "</div></div><div style=\"padding:10px 26px 30px;\"><h3 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:21px;margin:0 0 8px;color:#15191f;line-height:1.2;\">" + esc(proj.title) + "</h3><div style=\"display:flex;align-items:center;gap:7px;font-size:13px;color:#79828f;font-weight:500;margin-bottom:16px;\"><span class=\"dot\"></span>" + esc(proj.location) + "</div><p style=\"font-size:14.5px;line-height:1.6;color:#5b6470;margin:0 0 18px;\">" + esc(proj.body) + "</p><div style=\"display:flex;flex-direction:column;gap:9px;margin-bottom:22px;\">" + pts + "</div><div style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:13px;letter-spacing:0.8px;color:#1192bb;\">VIEW PROJECT →</div></div></a>";
	}).join("");
}
function teamHTML(d) {
	return d.team.map(function(m) {
		return "<div class=\"card reveal\" style=\"overflow:hidden;\"><div class=\"img-slot\" style=\"width:100%;height:320px;\">" + (m.img ? "<img src=\"" + asset(m.img) + "\" alt=\"" + esc(m.name) + "\" loading=\"lazy\" onload=\"this.parentNode.classList.add('has-img')\" onerror=\"this.remove()\">" : "") + "<span>Drop portrait</span></div><div style=\"padding:24px 26px 28px;\"><h3 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:20px;margin:0 0 4px;color:#15191f;\">" + esc(m.name) + "</h3><div style=\"font-family:'Montserrat',sans-serif;font-weight:600;font-size:13px;letter-spacing:0.6px;color:#1192bb;margin-bottom:12px;\">" + esc(m.role) + "</div><p style=\"font-size:14px;line-height:1.6;color:#5b6470;margin:0;\">" + esc(m.bio) + "</p></div></div>";
	}).join("");
}
function blogCard(p) {
	return "<a class=\"card card-link reveal zoom-wrap\" href=\"/blog/" + p.slug + "\" style=\"overflow:hidden;display:block;text-decoration:none;\"><div style=\"position:relative;height:200px;overflow:hidden;\">" + slot("fill zoom", "Photo", p.img, p.title) + "<span class=\"post-cat\" style=\"position:absolute;left:14px;bottom:14px;background:rgba(255,255,255,.94);\">" + esc(p.cat) + "</span></div><div style=\"padding:22px 24px 26px;\"><div class=\"post-meta\" style=\"margin-bottom:8px;\">" + esc(p.date) + " · " + esc(p.read) + "</div><h3 class=\"post-title\">" + esc(p.title) + "</h3><p style=\"font-size:14.5px;line-height:1.6;color:#5b6470;margin:0 0 16px;\">" + esc(p.excerpt) + "</p><span class=\"read-more\">Read article →</span></div></a>";
}
function blogListHTML(d) {
	var posts = d.posts;
	var f = posts[0];
	return "<a class=\"blog-featured reveal\" href=\"/blog/" + f.slug + "\"><div class=\"bf-img zoom-wrap\">" + slot("fill zoom", "Photo", f.img, f.title) + "</div><div><div style=\"display:flex;align-items:center;gap:14px;margin-bottom:16px;\"><span class=\"post-cat\">" + esc(f.cat) + "</span><span class=\"post-meta\">" + esc(f.date) + "</span></div><h2 class=\"h2\" style=\"font-size:clamp(26px,3.2vw,40px);margin:0 0 16px;\">" + esc(f.title) + "</h2><p class=\"lead\" style=\"margin:0 0 24px;\">" + esc(f.excerpt) + "</p><span class=\"read-more\" style=\"font-size:14px;\">Read Article ↗</span></div></a>" + ("<div class=\"g-cards\">" + posts.slice(1).map(blogCard).join("") + "</div>");
}
function homeBlogHTML(d) {
	return d.posts.slice(0, 3).map(blogCard).join("");
}
function postArticleHTML(p, d) {
	var m = d.postMeta && d.postMeta[p.slug] || {};
	var tags = m.tags || [p.cat];
	var author = d.author;
	var service = m.service || {
		label: "Our Services",
		hash: "/services"
	};
	var tagsHTML = tags.map(function(t) {
		return "<span class=\"post-tag\">" + esc(t) + "</span>";
	}).join("");
	var sideHTML = "<a class=\"rel-service\" href=\"" + service.hash + "\"><span class=\"rs-label\">Related service</span><span class=\"rs-title\">" + esc(service.label) + "</span><span class=\"rs-link\">Learn more →</span></a>" + (m.pull ? "<div class=\"pull-quote\"><span class=\"pq-mark\">“</span><p>" + esc(m.pull) + "</p></div>" : "");
	var relHTML = d.posts.filter(function(x) {
		return x.slug !== p.slug;
	}).slice(0, 3).map(function(r) {
		return "<a class=\"card card-link reveal zoom-wrap\" href=\"/blog/" + r.slug + "\" style=\"overflow:hidden;display:block;text-decoration:none;\"><div style=\"position:relative;height:190px;overflow:hidden;\">" + slot("fill zoom", "Photo", r.img, r.title) + "<span class=\"post-cat\" style=\"position:absolute;left:14px;bottom:14px;background:rgba(255,255,255,.94);\">" + esc(r.cat) + "</span></div><div style=\"padding:20px 22px 24px;\"><div class=\"post-meta\" style=\"margin-bottom:8px;\">" + esc(r.date) + " · " + esc(r.read) + "</div><h3 class=\"post-title\" style=\"font-size:18px;margin:0 0 14px;\">" + esc(r.title) + "</h3><span class=\"read-more\">Read article →</span></div></a>";
	}).join("");
	return "<article><section class=\"sec\" style=\"background:#fff;padding-top:clamp(108px,13vw,150px);padding-bottom:0;\"><div class=\"wrap\" style=\"max-width:1080px;\"><div class=\"post-crumb\"><a href=\"/blog\">Blog</a> &nbsp;/&nbsp; " + esc(p.title) + "</div><div class=\"post-metarow\"><span class=\"post-cat\">" + esc(p.cat) + "</span><span class=\"sep\">·</span>" + esc(p.date) + "<span class=\"sep\">·</span>" + esc(p.read) + "<span class=\"sep\">·</span>By <a href=\"/about\">" + esc(author.name) + "</a></div><h1 class=\"post-hero-title\">" + esc(p.title) + "</h1><p class=\"post-standfirst\">" + esc(p.excerpt) + "</p><div class=\"post-tags\">" + tagsHTML + "</div></div></section><section style=\"background:#fff;padding:clamp(28px,4vw,44px) 0 0;\"><div class=\"wrap\" style=\"max-width:1080px;\"><div class=\"post-cover\">" + slot("fill", "Photo", p.img, p.title) + "</div></div></section><section class=\"sec\" style=\"background:#fff;\"><div class=\"wrap post-layout\" style=\"max-width:1080px;\"><aside class=\"post-side\">" + sideHTML + "</aside><div><div class=\"prose\" style=\"margin:0;\">" + p.body + "<p>We handle " + esc(service.label.toLowerCase()) + " across Sleaford, Lincoln, Grantham and the wider Lincolnshire area — <a href=\"" + service.hash + "\">see our services →</a></p></div><div class=\"author-box\"><div class=\"author-av\">" + esc(author.initials) + "</div><div><div class=\"ab-label\">Written by</div><div class=\"ab-name\">" + esc(author.name) + "</div><div class=\"ab-role\">" + esc(author.role) + "</div><p class=\"ab-bio\">" + esc(author.bio) + "</p></div></div></div></div></section>" + (relHTML ? "<section class=\"sec tex tex-grid\" style=\"background:#f5f4f1;\"><div class=\"wrap\"><div class=\"reveal\" style=\"margin-bottom:clamp(30px,4vw,44px);\"><span class=\"eyebrow\" style=\"margin-bottom:14px;\">Related Articles</span><h2 class=\"h2\">Keep reading.</h2></div><div class=\"g-cards\">" + relHTML + "</div></div></section>" : "") + "</article>";
}
function projectDetailHTML(pr) {
	var gal = (pr.gallery || []).map(function(g) {
		return "<div class=\"zoom-wrap\" style=\"position:relative;border-radius:12px;overflow:hidden;height:clamp(180px,22vw,260px);\">" + slot("fill zoom", "Photo", g, pr.title) + "</div>";
	}).join("");
	var scope = (pr.scope || []).map(function(s) {
		return "<div style=\"display:flex;align-items:flex-start;gap:11px;font-size:15px;color:#3a414c;line-height:1.5;margin-bottom:12px;\"><span class=\"diamond\" style=\"margin-top:6px;\"></span>" + esc(s) + "</div>";
	}).join("");
	return "<section class=\"hero hero-inner\"><div class=\"img-slot dark fill\"><img src=\"" + asset(pr.cover) + "\" alt=\"" + esc(pr.title) + "\" onload=\"this.parentNode.classList.add('has-img')\" onerror=\"this.remove()\"><span>Photo</span></div><div class=\"hero-overlay\" style=\"background:linear-gradient(0deg,rgba(8,11,15,0.8) 0%,rgba(8,11,15,0.2) 70%),linear-gradient(95deg,rgba(8,11,15,0.62),rgba(8,11,15,0.2));\"></div><div class=\"wrap hin\"><span class=\"eyebrow\">" + esc(pr.tag) + "</span><h1 class=\"hero-h1\">" + esc(pr.title) + "</h1><div class=\"hero-proof\"><span class=\"proof-chip\"><svg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#5cc6e8\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z\"></path><circle cx=\"12\" cy=\"10\" r=\"2.4\"></circle></svg>" + esc(pr.location) + "</span><span class=\"proof-chip\">" + esc(pr.duration) + "</span><span class=\"proof-chip\">Completed</span></div></div></section><section class=\"sec\" style=\"background:#fff;\"><div class=\"wrap\"><a class=\"back-link\" href=\"/projects\">← All projects</a><div class=\"g-contact\" style=\"margin-top:18px;\"><div class=\"reveal\"><span class=\"eyebrow\" style=\"margin-bottom:16px;\">Project Overview</span><div style=\"font-size:16px;line-height:1.8;color:#3a414c;\">" + pr.overview + "</div><h3 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:19px;margin:26px 0 16px;color:#15191f;\">What we did</h3>" + scope + "</div><div class=\"reveal\"><div class=\"box\"><h3 class=\"box-title\" style=\"margin-bottom:6px;\">Project details</h3><div class=\"spec-list\"><div class=\"spec-row\"><span class=\"k\">Type</span><span class=\"v\">" + esc(pr.tag) + "</span></div><div class=\"spec-row\"><span class=\"k\">Location</span><span class=\"v\">" + esc(pr.location) + "</span></div><div class=\"spec-row\"><span class=\"k\">Duration</span><span class=\"v\">" + esc(pr.duration) + "</span></div><div class=\"spec-row\"><span class=\"k\">Status</span><span class=\"v\">Completed</span></div></div><a class=\"btn btn-cy\" href=\"/contact\" style=\"width:100%;margin-top:20px;\">Start a similar project</a></div></div></div>" + (gal ? "<div class=\"reveal\" style=\"margin-top:clamp(36px,4vw,52px);\"><h3 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:19px;margin:0 0 18px;color:#15191f;\">Gallery</h3><div class=\"g-cards\">" + gal + "</div></div>" : "") + "</div></section>";
}
function policyDoc(title, intro, sections) {
	var body = "<span class=\"eyebrow\" style=\"margin-bottom:16px;\">Legal</span><h1 class=\"h2\" style=\"margin-bottom:18px;\">" + title + "</h1><p style=\"font-size:13px;color:#79828f;margin:0 0 28px;\">Last updated: June 2026</p><p class=\"lead\" style=\"margin-bottom:30px;\">" + intro + "</p>";
	body += sections.map(function(s) {
		return "<h2 style=\"font-family:'Montserrat',sans-serif;font-weight:700;font-size:20px;color:#15191f;margin:28px 0 10px;\">" + esc(s.h) + "</h2><p style=\"font-size:15px;line-height:1.7;color:#5b6470;margin:0;\">" + s.p + "</p>";
	}).join("");
	return body;
}
//#endregion
export { getData as S, teamHTML as _, faqHTML as a, $$Base as b, homeBlogHTML as c, postArticleHTML as d, processHTML as f, statsHTML as g, servicesListHTML as h, coverageChipsHTML as i, homeServicesHTML as l, projectsListHTML as m, blogListHTML as n, featuredHTML as o, projectDetailHTML as p, comingHTML as r, galleryHTML as s, accHTML as t, policyDoc as u, testimonialsHTML as v, versionFromRequest as x, valuePropsHTML as y };
