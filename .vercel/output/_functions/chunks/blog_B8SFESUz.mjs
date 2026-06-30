import { t as __exportAll } from "./compiler_C5pihw0V.mjs";
import { C as createComponent, S as createAstro, b as unescapeHTML, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_CkRQXLzT.mjs";
import { S as getData, b as $$Base, n as blogListHTML, x as versionFromRequest } from "./render_CAvtoo7a.mjs";
//#region src/pages/blog.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Blog,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://lmebuildingcontractors.uk");
var $$Blog = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Blog;
	const d = await getData(versionFromRequest(Astro));
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": "Blog | Building Advice & Project Stories | LME Building Contractors",
		"description": "Practical advice on extensions, renovations, planning and costs in Lincolnshire, plus stories from our recent building projects.",
		"page": "blog",
		"ogImage": "/assets/img/about-hero.jpg"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero hero-inner"><div class="img-slot dark fill"><img src="/assets/img/about-hero.jpg" alt="LME Building Contractors team" onload="this.parentNode.classList.add('has-img')" onerror="this.remove()"><span>Photo</span></div><div class="hero-overlay" style="background:linear-gradient(95deg,rgba(8,11,15,0.86) 0%,rgba(8,11,15,0.5) 50%,rgba(8,11,15,0.16) 100%),linear-gradient(0deg,rgba(8,11,15,0.72) 0%,rgba(8,11,15,0) 55%);"></div><div class="wrap hin"><span class="eyebrow">Advice &amp; Insights</span><h1 class="hero-h1">The LME Blog</h1><p class="hero-isub">Practical, jargon-free advice on extensions, renovations, planning and costs across Lincolnshire — plus stories from our recent projects.</p></div></section><section class="sec tex tex-dots" style="background:#fff;"><div class="wrap">${unescapeHTML(blogListHTML(d))}</div></section>` })}`;
}, "/home/claude/repo/src/pages/blog.astro", void 0);
var $$file = "/home/claude/repo/src/pages/blog.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog@_@astro
var page = () => blog_exports;
//#endregion
export { page };
