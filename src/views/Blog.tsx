'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import { BlogPost } from "@/data/blogPosts";
import { loadBlogPosts, getBlogPostsSync } from "@/data/blogPostsLoader";
import { Calendar, Clock, ArrowRight, Newspaper, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(getBlogPostsSync());

  useEffect(() => {
    document.title = "Blog | KI Kanzlei";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'KI-Insights, Best Practices und Case Studies rund um KI-Automatisierung für Unternehmen. Bleiben Sie auf dem Laufenden mit KI Kanzlei.');

    // Lade CMS-Daten asynchron
    loadBlogPosts().then((posts) => {
      // Sort by date (newest first)
      const sortedPosts = [...posts].sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setBlogPosts(sortedPosts);
    });
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const filteredPosts = blogPosts;
  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main>
        {/* HERO */}
        <section className="gradient-hero overflow-hidden pt-32 md:pt-40 pb-14 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Badge variant="outline" className="rounded-full mb-5 bg-primary/10 text-primary border-primary/20">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              KI <span className="text-primary">Insights</span>, News & Best Practices
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Wissenswertes rund um KI-Automatisierung, Case Studies und praktische Tipps für Ihr Unternehmen. Bleiben Sie auf dem Laufenden mit der KI Kanzlei.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white/50">
          <div className="container mx-auto px-4 max-w-7xl">
            {filteredPosts.length > 0 ? (
              <>
                {/* Featured Post */}
                {featuredPost && (
                  <Link href={`/blog/${featuredPost.slug}`} className="group block mb-10 md:mb-12">
                    <Card className="overflow-hidden border-2 hover-lift transition-all group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                      <div className="grid md:grid-cols-2">
                        {featuredPost.image && (
                          <div className="relative h-56 md:h-full min-h-[16rem] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                            <img
                              src={featuredPost.image}
                              alt={featuredPost.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}
                        <CardContent className="flex flex-col justify-center p-6 md:p-10">
                          <div className="flex flex-wrap items-center gap-2 mb-4">
                            <Badge className="rounded-full bg-primary text-primary-foreground">
                              Neuester Beitrag
                            </Badge>
                            <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                              {featuredPost.category}
                            </Badge>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight group-hover:text-primary transition-colors">
                            {featuredPost.title}
                          </h2>
                          <p className="text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                            {featuredPost.excerpt}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 text-primary" /> {formatDate(featuredPost.date)}
                            </span>
                            {featuredPost.readTime && (
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4 text-primary" /> {featuredPost.readTime} Min.
                              </span>
                            )}
                            <span className="inline-flex items-center gap-1 font-semibold text-primary ml-auto">
                              Artikel lesen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                )}

                {/* Blog Posts Grid */}
                {gridPosts.length > 0 && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
                    {gridPosts.map((post) => (
                      <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                        <Card className="flex h-full flex-col overflow-hidden border-2 hover-lift transition-all group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/5">
                          {/* Image */}
                          {post.image && (
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          )}

                          <CardHeader className="pb-3">
                            <Badge variant="outline" className="rounded-full mb-1 w-fit bg-primary/10 text-primary border-primary/20">
                              {post.category}
                            </Badge>
                            <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                              {post.title}
                            </CardTitle>
                          </CardHeader>

                          <CardContent className="flex flex-1 flex-col">
                            <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                              {post.excerpt}
                            </p>
                            <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5" /> {formatDate(post.date)}
                                </span>
                                {post.readTime && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5" /> {post.readTime} Min.
                                  </span>
                                )}
                              </div>
                              <ArrowRight className="w-5 h-5 text-primary transition-transform group-hover:translate-x-1" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  Keine Artikel in dieser Kategorie gefunden.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <FooterModern />
    </div>
  );
};

export default Blog;
