import { t as __exportAll } from "./compiler_C5pihw0V.mjs";
import { C as createComponent, S as createAstro, b as unescapeHTML, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_CkRQXLzT.mjs";
import { S as getData, b as $$Base, m as projectsListHTML, r as comingHTML, x as versionFromRequest } from "./render_CAvtoo7a.mjs";
//#region src/pages/projects.astro
var projects_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Projects,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://lmebuildingcontractors.uk");
var $$Projects = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Projects;
	const d = await getData(versionFromRequest(Astro));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Our Projects | Lincolnshire Builders | LME Building Contractors",
		"description": "See recent extensions, renovations and new builds across Sleaford, Lincoln and Grantham — before-and-after photos of real Lincolnshire projects by LME Building Contractors.",
		"page": "projects",
		"ogImage": "/assets/img/projects-hero.jpg"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero hero-inner"><div class="img-slot dark fill"><img src="/assets/img/projects-hero.jpg" alt="LME builders reviewing project plans" onload="this.parentNode.classList.add('has-img')" onerror="this.remove()"><span>Drop portfolio hero photo</span></div><div class="hero-overlay" style="background:linear-gradient(95deg,rgba(8,11,15,0.86) 0%,rgba(8,11,15,0.5) 50%,rgba(8,11,15,0.16) 100%),linear-gradient(0deg,rgba(8,11,15,0.72) 0%,rgba(8,11,15,0) 55%);"></div><div class="wrap hin"><span class="eyebrow">Portfolio</span><h1 class="hero-h1">Our Premier Construction Portfolio</h1><p class="hero-isub">A range of successful builds and sympathetic renovations delivered across Lincolnshire.</p><div class="hero-proof"><div class="proof-rating"><span class="stars" style="font-size:15px;">★★★★★</span> <b>4.9/5</b> <span class="muted">· 127 reviews</span></div><span class="proof-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5cc6e8" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 L10 17.5 L19 6.5"></path></svg>250+ Completed</span><span class="proof-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5cc6e8" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 L10 17.5 L19 6.5"></path></svg>Before &amp; After</span><span class="proof-chip"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5cc6e8" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5 L10 17.5 L19 6.5"></path></svg>Lincolnshire-wide</span></div></div></section><section class="sec tex tex-dots" style="background:#fff;"><div class="wrap g-cards">${unescapeHTML(projectsListHTML(d))}</div></section><section class="sec tex tex-grid" style="background:#f5f4f1;border-top:1px solid #ececea;"><div class="wrap"><div class="reveal" style="text-align:center;max-width:640px;margin:0 auto clamp(36px,4vw,52px);"><h2 class="h2" style="margin-bottom:12px;">Upcoming Case Studies</h2><p class="lead">New project galleries are added as builds complete.</p></div><div class="g-cards">${unescapeHTML(comingHTML(d))}</div></div></section>` })}`;
}, "/home/claude/repo/src/pages/projects.astro", void 0);
var $$file = "/home/claude/repo/src/pages/projects.astro";
var $$url = "/projects";
//#endregion
//#region \0virtual:astro:page:src/pages/projects@_@astro
var page = () => projects_exports;
//#endregion
export { page };
