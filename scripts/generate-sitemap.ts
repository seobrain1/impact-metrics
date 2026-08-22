import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://stats-bloom-sparklee.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/agencia-especializada-em-seo", changefreq: "weekly", priority: "0.8" },
];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) => {
    const loc = e.path === "/" ? `${BASE_URL}/` : `${BASE_URL}${e.path}`;
    return [
      `  <url>`,
      `    <loc>${loc}</loc>`,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n");
  });

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
