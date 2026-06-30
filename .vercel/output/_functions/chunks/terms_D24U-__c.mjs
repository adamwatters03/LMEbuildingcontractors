import { t as __exportAll } from "./compiler_C5pihw0V.mjs";
import { C as createComponent, b as unescapeHTML, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_CkRQXLzT.mjs";
import { b as $$Base, u as policyDoc } from "./render_CAvtoo7a.mjs";
//#region src/pages/terms.astro
var terms_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Terms,
	file: () => $$file,
	url: () => $$url
});
var $$Terms = createComponent(($$result, $$props, $$slots) => {
	const title = "Terms & Conditions | LME Building Contractors";
	const description = "The terms and conditions for using the LME Building Contractors website.";
	const html = policyDoc("Terms &amp; Conditions", "These terms govern your use of this website. Building works are subject to a separate written contract agreed before any project begins.", [
		{
			h: "Use of this website",
			p: "The content on this site is provided for general information about our services. While we aim to keep it accurate and up to date, it does not constitute a contractual offer or a binding quotation."
		},
		{
			h: "Quotations",
			p: "Any prices shown are indicative guide figures only. All projects are quoted individually following a site visit, and any agreed works are governed by a separate written contract."
		},
		{
			h: "Intellectual property",
			p: "The design, text and branding on this site belong to LME Building Contractors and may not be reproduced without permission."
		},
		{
			h: "Liability",
			p: "We are not liable for any loss arising from reliance on website content alone. For advice specific to your project, please contact us directly."
		}
	]);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": title,
		"description": description,
		"page": "terms"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="sec tex tex-dots" style="background:#fff;padding-top:clamp(110px,12vw,150px);"><div class="wrap" style="max-width:820px;">${unescapeHTML(html)}</div></section>` })}`;
}, "/home/claude/repo/src/pages/terms.astro", void 0);
var $$file = "/home/claude/repo/src/pages/terms.astro";
var $$url = "/terms";
//#endregion
//#region \0virtual:astro:page:src/pages/terms@_@astro
var page = () => terms_exports;
//#endregion
export { page };
