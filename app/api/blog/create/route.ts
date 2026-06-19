/**
 * Next.js Route Handler für n8n Blog-Post Integration
 *
 * URL: https://ki-kanzlei.at/api/blog/create
 */

import { NextRequest, NextResponse } from "next/server";
import { Octokit } from "@octokit/rest";

interface CMSBlogItem {
  id: string;
  cmsLocaleId?: string;
  lastPublished?: string | null;
  lastUpdated: string;
  createdOn: string;
  isArchived: boolean;
  isDraft: boolean;
  fieldData: {
    "create-date": string;
    "read-estimation": number;
    name: string;
    description: string;
    content: string;
    author: string;
    category: string;
    slug: string;
    thumbnail?: { fileId: string; url: string; alt: string };
  };
}

interface CMSBlogResponse {
  items: CMSBlogItem[];
}

async function updateSitemap(
  octokit: Octokit,
  owner: string,
  repo: string,
  branch: string,
  blogItems: CMSBlogItem[]
): Promise<void> {
  const sitemapPath = "public/sitemap.xml";
  const baseUrl = "https://ki-kanzlei.at";
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    { loc: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
    { loc: "/branchen/ki-loesungen-psychotherapeuten", lastmod: today, changefreq: "weekly", priority: "0.9" },
    { loc: "/branchen/ki-loesungen-hotels", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-hausverwaltung", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-immobilienmakler", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-autohaus", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-handwerker", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-rechtsanwaelte", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-aerzte", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-recruiting", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-fitness", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-ecommerce", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-oeffentliche-einrichtungen", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-steuerberater", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/branchen/ki-loesungen-versicherungsmakler", lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: "/blog", lastmod: today, changefreq: "weekly", priority: "0.7" },
    { loc: "/jobs", lastmod: today, changefreq: "monthly", priority: "0.6" },
    { loc: "/jobs/vertriebspartner-ki", lastmod: today, changefreq: "monthly", priority: "0.5" },
    { loc: "/jobs/n8n-experte-ki-entwickler", lastmod: today, changefreq: "monthly", priority: "0.5" },
    { loc: "/impressum", lastmod: "2024-12-19", changefreq: "monthly", priority: "0.3" },
    { loc: "/datenschutz", lastmod: "2024-12-19", changefreq: "monthly", priority: "0.3" },
    { loc: "/agb", lastmod: "2024-12-19", changefreq: "monthly", priority: "0.3" },
  ];

  const blogUrls = blogItems
    .filter((item) => !item.isArchived && !item.isDraft)
    .map((item) => ({
      loc: `/blog/${item.fieldData.slug}`,
      lastmod: new Date(item.fieldData["create-date"]).toISOString().split("T")[0],
      changefreq: "monthly",
      priority: "0.6",
    }));

  const allUrls = [...staticPages, ...blogUrls];
  const urlEntries = allUrls
    .map(
      (url) =>
        `  <url>\n    <loc>${baseUrl}${url.loc}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`
    )
    .join("\n");

  const sitemapXml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urlEntries +
    "\n</urlset>";

  let sha: string | undefined;
  try {
    const { data: fileData } = await octokit.repos.getContent({ owner, repo, path: sitemapPath, ref: branch });
    if ("sha" in fileData) sha = fileData.sha;
  } catch (error: any) {
    if (error.status !== 404) throw error;
  }

  await octokit.repos.createOrUpdateFileContents({
    owner, repo, path: sitemapPath,
    message: `Update sitemap: ${blogUrls.length} blog posts`,
    content: Buffer.from(sitemapXml).toString("base64"),
    branch, sha,
    committer: { name: "n8n Blog Agent", email: "info@ki-kanzlei.at" },
    author: { name: "n8n Blog Agent", email: "info@ki-kanzlei.at" },
  });
}

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  try {
    const authHeader = request.headers.get("authorization");
    const expectedToken = process.env.N8N_API_SECRET;

    if (!expectedToken) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }
    if (authHeader !== `Bearer ${expectedToken}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data: CMSBlogResponse | CMSBlogItem = await request.json();
    if (!data) {
      return NextResponse.json({ error: "No data provided" }, { status: 400 });
    }

    const items: CMSBlogItem[] =
      "items" in data && Array.isArray(data.items) ? data.items : [data as CMSBlogItem];

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    for (const item of items) {
      if (!item.fieldData) {
        return NextResponse.json({ error: "Invalid item structure", message: `Item ${item.id || "unknown"} is missing fieldData` }, { status: 400 });
      }
      if (!item.fieldData.slug || !item.fieldData.name) {
        return NextResponse.json({ error: "Invalid fieldData", message: `Item ${item.id || "unknown"} is missing required fields` }, { status: 400 });
      }
    }

    const githubToken = process.env.GITHUB_TOKEN;
    // owner/repo aren't secrets — default to the org repo so only GITHUB_TOKEN must be set
    const githubOwner = process.env.GITHUB_OWNER || "ki-kanzlei-at";
    const githubRepo = process.env.GITHUB_REPO || "ki-kanzlei";
    const githubBranch = process.env.GITHUB_BRANCH || "main";

    if (!githubToken || !githubOwner || !githubRepo) {
      return NextResponse.json({ error: "GitHub configuration missing" }, { status: 500 });
    }

    const octokit = new Octokit({ auth: githubToken });

    try {
      await octokit.repos.get({ owner: githubOwner, repo: githubRepo });
    } catch (error: any) {
      return NextResponse.json({ error: "GitHub access error", message: error.message }, { status: 500 });
    }

    // Process thumbnails
    for (const item of items) {
      if (item.fieldData.thumbnail?.url) {
        const thumbnailUrl = item.fieldData.thumbnail.url;
        const isExternal =
          (thumbnailUrl.startsWith("http://") || thumbnailUrl.startsWith("https://")) &&
          !thumbnailUrl.includes("ki-kanzlei.at") &&
          !thumbnailUrl.includes("localhost");
        if (isExternal || thumbnailUrl.includes("/img/blog/")) continue;
        try {
          const imageResponse = await fetch(thumbnailUrl);
          if (!imageResponse.ok) continue;
          const imageBuffer = Buffer.from(await imageResponse.arrayBuffer());
          const contentType = imageResponse.headers.get("content-type") || "image/jpeg";
          const ext = contentType.split("/")[1] || "jpg";
          const filename = `${item.fieldData.slug}.${ext}`;
          const imagePath = `public/img/blog/${filename}`;
          let sha: string | undefined;
          try {
            const { data: fd } = await octokit.repos.getContent({ owner: githubOwner, repo: githubRepo, path: imagePath, ref: githubBranch });
            if ("sha" in fd) sha = fd.sha;
          } catch {}
          await octokit.repos.createOrUpdateFileContents({
            owner: githubOwner, repo: githubRepo, path: imagePath,
            message: `Add blog image: ${filename}`,
            content: imageBuffer.toString("base64"),
            branch: githubBranch, sha,
            committer: { name: "n8n Blog Agent", email: "n8n@ki-kanzlei.at" },
            author: { name: "n8n Blog Agent", email: "n8n@ki-kanzlei.at" },
          });
          item.fieldData.thumbnail.url = `https://ki-kanzlei.at/img/blog/${filename}`;
        } catch {}
      }
    }

    // Load existing posts
    let existingData: CMSBlogResponse = { items: [] };
    let existingSha: string | undefined;
    try {
      const { data: fileData } = await octokit.repos.getContent({ owner: githubOwner, repo: githubRepo, path: "public/data/blogPosts.json", ref: githubBranch });
      if ("content" in fileData && fileData.content) {
        existingData = JSON.parse(Buffer.from(fileData.content, "base64").toString("utf-8"));
        existingSha = fileData.sha;
      }
    } catch (error: any) {
      if (error.status !== 404) console.warn("Error loading existing posts:", error.message);
    }

    const existingItems = existingData.items || [];
    const existingSlugs = new Set(existingItems.map((item) => item.fieldData.slug));
    const newItems = items.filter((item) => {
      if (!existingSlugs.has(item.fieldData.slug)) return true;
      const existing = existingItems.find((e) => e.fieldData.slug === item.fieldData.slug);
      return existing && new Date(item.lastUpdated) > new Date(existing.lastUpdated);
    });

    if (newItems.length === 0) {
      return NextResponse.json({ success: true, message: "No new or updated posts", skipped: items.length });
    }

    const updatedItems = existingItems.map((existing) => {
      const newItem = items.find((i) => i.fieldData.slug === existing.fieldData.slug);
      if (newItem && new Date(newItem.lastUpdated) > new Date(existing.lastUpdated)) return newItem;
      return existing;
    });
    const newItemsToAdd = newItems.filter((item) => !existingSlugs.has(item.fieldData.slug));
    const allItems = [...updatedItems, ...newItemsToAdd];

    const jsonString = JSON.stringify({ items: allItems }, null, 2);
    const commitMessage = newItems.length === 1 ? `Add blog post: ${newItems[0].fieldData.name}` : `Update blog posts: ${newItems.length} new/updated posts`;

    await octokit.repos.createOrUpdateFileContents({
      owner: githubOwner, repo: githubRepo,
      path: "public/data/blogPosts.json",
      message: commitMessage,
      content: Buffer.from(jsonString).toString("base64"),
      branch: githubBranch,
      sha: existingSha,
      committer: { name: "n8n Blog Agent", email: "n8n@ki-kanzlei.at" },
      author: { name: "n8n Blog Agent", email: "n8n@ki-kanzlei.at" },
    });

    try {
      await updateSitemap(octokit, githubOwner, githubRepo, githubBranch, allItems);
    } catch (error: any) {
      console.warn("Sitemap update failed:", error.message);
    }

    return NextResponse.json({
      success: true,
      message: commitMessage,
      added: newItems.length,
      total: allItems.length,
    });
  } catch (error: any) {
    console.error("Error creating blog post:", error);
    return NextResponse.json({ error: "Failed to create blog post", message: error.message }, { status: 500 });
  }
}
