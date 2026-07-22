import { getData } from '../lib/data.js';

const SITE = 'https://lmebuildingcontractors.uk';

export async function GET() {
  const d = await getData('published');
  const rows = [
    ['/', '1.0', 'monthly'],
    ['/services', '0.9', 'monthly'],
    ['/projects', '0.8', 'monthly'],
    ['/about', '0.6', 'yearly'],
    ['/contact', '0.8', 'yearly'],
    ['/blog', '0.7', 'weekly'],
    ['/privacy', '0.3', 'yearly'],
    ['/cookies', '0.3', 'yearly'],
    ['/terms', '0.3', 'yearly'],
    ...d.services.map((s) => ['/services/' + s.slug, '0.7', 'monthly']),
    ...d.posts.map((p) => ['/blog/' + p.slug, '0.6', 'yearly']),
    ...d.projectList.map((pr) => ['/projects/' + pr.id, '0.6', 'yearly']),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n`
    + `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
    + rows.map(([loc, pri, cf]) => `  <url><loc>${SITE}${loc}</loc><changefreq>${cf}</changefreq><priority>${pri}</priority></url>`).join('\n')
    + `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, s-maxage=300' } });
}
