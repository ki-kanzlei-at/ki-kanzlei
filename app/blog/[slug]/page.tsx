import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { mapCMSResponseToBlogPosts } from "@/data/cmsBlogTypes";
import { blogPosts as staticBlogPosts } from "@/data/blogPosts";
import BlogPost from "@/views/BlogPost";

function getAllPosts() {
  const jsonPath = path.join(process.cwd(), "public/data/blogPosts.json");
  let cmsPosts: typeof staticBlogPosts = [];
  try {
    const raw = fs.readFileSync(jsonPath, "utf-8");
    const data = JSON.parse(raw);
    cmsPosts = mapCMSResponseToBlogPosts(data);
  } catch {}

  const cmsSlugs = new Set(cmsPosts.map((p) => p.slug));
  const uniqueStatic = staticBlogPosts.filter((p) => !cmsSlugs.has(p.slug));
  return [...cmsPosts, ...uniqueStatic].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Artikel nicht gefunden" };

  return {
    title: `${post.title} Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://ki-kanzlei.at/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <BlogPost initialPost={post} initialPosts={posts} />;
}
