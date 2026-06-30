import { t as __exportAll } from "./compiler_C5pihw0V.mjs";
import { C as createComponent, b as unescapeHTML, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_CkRQXLzT.mjs";
import { b as $$Base, u as policyDoc } from "./render_CAvtoo7a.mjs";
//#region src/pages/cookies.astro
var cookies_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Cookies,
	file: () => $$file,
	url: () => $$url
});
var $$Cookies = createComponent(($$result, $$props, $$slots) => {
	const title = "Cookie Policy | LME Building Contractors";
	const description = "How this website uses cookies and how you can control them.";
	const html = policyDoc("Cookie Policy", "This policy explains how this website uses cookies and similar technologies, and how you can control them.", [
		{
			h: "What are cookies?",
			p: "Cookies are small text files stored on your device when you visit a website. They help the site function and can provide information to the site owner."
		},
		{
			h: "Cookies we use",
			p: "We use a single essential cookie to remember your cookie preference. With your consent, we may also use analytics cookies to understand how visitors use the site so we can improve it."
		},
		{
			h: "Managing cookies",
			p: "You chose your preference using our cookie banner. You can change it at any time by clearing this site's data in your browser, which will prompt the banner to appear again. You can also block cookies through your browser settings."
		},
		{
			h: "Essential vs non-essential",
			p: "Essential cookies are required for the site to work and cannot be switched off. Non-essential (analytics) cookies are only set if you accept them."
		}
	]);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": title,
		"description": description,
		"page": "cookies"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="sec tex tex-dots" style="background:#fff;padding-top:clamp(110px,12vw,150px);"><div class="wrap" style="max-width:820px;">${unescapeHTML(html)}</div></section>` })}`;
}, "/home/claude/repo/src/pages/cookies.astro", void 0);
var $$file = "/home/claude/repo/src/pages/cookies.astro";
var $$url = "/cookies";
//#endregion
//#region \0virtual:astro:page:src/pages/cookies@_@astro
var page = () => cookies_exports;
//#endregion
export { page };
