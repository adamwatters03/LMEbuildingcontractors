import { t as __exportAll } from "./compiler_C5pihw0V.mjs";
import { C as createComponent, S as createAstro, a as Fragment, b as unescapeHTML, d as renderTemplate, i as renderComponent } from "./server_CkRQXLzT.mjs";
import { S as getData, b as $$Base, d as postArticleHTML, x as versionFromRequest } from "./render_CAvtoo7a.mjs";
//#region src/pages/blog/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://lmebuildingcontractors.uk");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const d = await getData(versionFromRequest(Astro));
	const { slug } = Astro.params;
	const p = d.posts.find((x) => x.slug === slug);
	if (!p) return Astro.redirect("/blog");
	const m = d.postMeta && d.postMeta[p.slug] || {};
	const tags = m.tags || [p.cat];
	const title = p.title + " | LME Building Contractors";
	const description = p.excerpt;
	const imgAbs = p.img.startsWith("http") ? p.img : "https://lmebuildingcontractors.uk/" + p.img;
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: p.title,
		description: p.excerpt,
		image: imgAbs,
		datePublished: m.iso,
		dateModified: m.iso,
		author: {
			"@type": "Person",
			name: d.author.name
		},
		publisher: {
			"@type": "Organization",
			name: "LME Building Contractors",
			logo: {
				"@type": "ImageObject",
				url: "https://lmebuildingcontractors.uk/assets/favicon.svg"
			}
		},
		keywords: tags.join(", "),
		mainEntityOfPage: "https://lmebuildingcontractors.uk/blog/" + p.slug
	};
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": title,
		"description": description,
		"page": "blog",
		"ogImage": p.img.startsWith("http") ? p.img : "/" + p.img,
		"extraJsonLd": jsonLd
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(postArticleHTML(p, d))}` })}` })}`;
}, "/home/claude/repo/src/pages/blog/[slug].astro", void 0);
var $$file = "/home/claude/repo/src/pages/blog/[slug].astro";
var $$url = "/blog/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
