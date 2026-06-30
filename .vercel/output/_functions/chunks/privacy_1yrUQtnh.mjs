import { t as __exportAll } from "./compiler_C5pihw0V.mjs";
import { C as createComponent, b as unescapeHTML, d as renderTemplate, h as maybeRenderHead, i as renderComponent } from "./server_CkRQXLzT.mjs";
import { b as $$Base, u as policyDoc } from "./render_CAvtoo7a.mjs";
//#region src/pages/privacy.astro
var privacy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacy,
	file: () => $$file,
	url: () => $$url
});
var $$Privacy = createComponent(($$result, $$props, $$slots) => {
	const title = "Privacy Policy | LME Building Contractors";
	const description = "How LME Building Contractors collects, uses and protects your personal information, in line with UK GDPR.";
	const html = policyDoc("Privacy Policy", "This policy explains how LME Building Contractors collects, uses and protects the personal information you provide through this website, in line with the UK GDPR and Data Protection Act 2018.", [
		{
			h: "Who we are",
			p: "LME Building Contractors is a building contractor based in Sleaford, Lincolnshire. For any data queries, contact us at <a href=\"mailto:Lmebuildingcontractors@hotmail.com\" style=\"color:#1192bb;\">Lmebuildingcontractors@hotmail.com</a>."
		},
		{
			h: "What we collect",
			p: "When you submit our enquiry form we collect your name, email address, phone number and the project details you choose to share. We do not collect this information unless you provide it."
		},
		{
			h: "How we use it",
			p: "We use your details solely to respond to your enquiry, provide quotations and manage any resulting project. We do not sell your data or share it with third parties for marketing."
		},
		{
			h: "How long we keep it",
			p: "We retain enquiry information only as long as necessary to deal with your request and any legal or accounting obligations, after which it is securely deleted."
		},
		{
			h: "Your rights",
			p: "You have the right to access, correct or request deletion of your personal data at any time. To exercise these rights, email us and we will respond within one month."
		}
	]);
	return renderTemplate`${renderComponent($$result, "Base", $$Base, {
		"title": title,
		"description": description,
		"page": "privacy"
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="sec tex tex-dots" style="background:#fff;padding-top:clamp(110px,12vw,150px);"><div class="wrap" style="max-width:820px;">${unescapeHTML(html)}</div></section>` })}`;
}, "/home/claude/repo/src/pages/privacy.astro", void 0);
var $$file = "/home/claude/repo/src/pages/privacy.astro";
var $$url = "/privacy";
//#endregion
//#region \0virtual:astro:page:src/pages/privacy@_@astro
var page = () => privacy_exports;
//#endregion
export { page };
