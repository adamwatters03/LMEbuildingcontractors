import { t as __exportAll } from "./compiler_C5pihw0V.mjs";
import { C as createComponent, S as createAstro, a as Fragment, b as unescapeHTML, d as renderTemplate, i as renderComponent } from "./server_CkRQXLzT.mjs";
import { S as getData, b as $$Base, p as projectDetailHTML, x as versionFromRequest } from "./render_CAvtoo7a.mjs";
//#region src/pages/projects/[id].astro
var _id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Id,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://lmebuildingcontractors.uk");
var $$Id = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Id;
	const d = await getData(versionFromRequest(Astro));
	const { id } = Astro.params;
	const pr = d.projectList.find((x) => x.id === id);
	if (!pr) return Astro.redirect("/projects");
	const title = pr.title + " | LME Building Contractors";
	const description = pr.short;
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": title,
		"description": description,
		"page": "projects",
		"ogImage": pr.cover.startsWith("http") ? pr.cover : "/" + pr.cover
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result) => renderTemplate`${unescapeHTML(projectDetailHTML(pr))}` })}` })}`;
}, "/home/claude/repo/src/pages/projects/[id].astro", void 0);
var $$file = "/home/claude/repo/src/pages/projects/[id].astro";
var $$url = "/projects/[id]";
//#endregion
//#region \0virtual:astro:page:src/pages/projects/[id]@_@astro
var page = () => _id__exports;
//#endregion
export { page };
