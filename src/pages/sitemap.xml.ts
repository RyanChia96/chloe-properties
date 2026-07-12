import type { APIRoute } from "astro";

export const prerender = true;

const SITE = "https://www.pjprelaunchprivatelift.com.my";

// Auto-discover every page under src/pages (.astro / .md / .mdx / .html).
// New pages get picked up automatically on the next build — no manual edits.
const pageModules = import.meta.glob("./**/*.{astro,md,mdx,html}");

const discoveredPaths = Object.keys(pageModules)
  .map((file) =>
    file
      .replace(/^\.\//, "")
      .replace(/\.(astro|md|mdx|html)$/, "")
      .replace(/\/index$/, ""),
  )
  // drop the homepage ("index"), dynamic routes ([param]), and private files (_name)
  .filter(
    (p) =>
      p !== "index" &&
      !p.includes("[") &&
      !p.split("/").some((seg) => seg.startsWith("_")),
  )
  .map((p) => `/${p}/`);

// Homepage first, then the rest alphabetically.
const paths = ["/", ...discoveredPaths.sort()];

const lastmod = new Date().toISOString().split("T")[0];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "yearly"}</changefreq>
    <priority>${path === "/" ? "1.0" : "0.5"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
