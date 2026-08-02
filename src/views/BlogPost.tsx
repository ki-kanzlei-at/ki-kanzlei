'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { NavigationHome } from "@/components/NavigationHome";
import { FooterModern } from "@/components/FooterModern";
import type { BlogPost as BlogPostType } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogPostProps {
  initialPost: BlogPostType;
  initialPosts: BlogPostType[];
}

const BlogPost = ({ initialPost, initialPosts }: BlogPostProps) => {
  const router = useRouter();
  const currentPost = initialPost;
  const blogPosts = initialPosts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen gradient-bg">
      <NavigationHome />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex justify-end mb-10 slide-up">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Zurück zur Übersicht
            </Link>
          </div>

          <article className="bg-card rounded-2xl border-2 border-border overflow-hidden slide-up">
            <div className="p-6 sm:p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20">
                  {currentPost.category}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {formatDate(currentPost.date)}
                </div>
                {currentPost.readTime && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {currentPost.readTime} Min. Lesezeit
                  </div>
                )}
              </div>

              {/* KI-Kennzeichnung nach Art. 50 EU AI Act, Badge nach EU-Vorschlag (AI GENERATED) */}
              <div className="mb-6 flex items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-background select-none">
                  AI
                  <span className="font-semibold tracking-[0.12em]">Generated</span>
                </span>
                <span className="text-xs text-muted-foreground">
                  Dieser Beitrag wurde mit KI erstellt.
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {currentPost.title}
              </h1>

              {currentPost.image && (
                <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-8">
                  <img
                    src={currentPost.image}
                    alt={currentPost.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <div className="w-20 h-1 bg-primary/20 rounded-full mb-8"></div>

              <div
                className="blog-content"
                style={{ fontSize: '1rem', lineHeight: '1.75' }}
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />
            </div>
          </article>

          <div className="mt-12 p-6 sm:p-8 bg-primary/5 rounded-2xl border-2 border-primary/20 text-center slide-up">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Interessiert an KI-Automatisierung?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie KI Ihr Unternehmen voranbringen kann.
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                router.push('/');
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 100);
              }}
            >
              Analysegespräch vereinbaren
            </Button>
          </div>

          {blogPosts.filter(p => p.slug !== currentPost.slug && p.category === currentPost.category).length > 0 && (
            <div className="mt-16 slide-up">
              <h2 className="text-2xl font-bold mb-8">Weitere Artikel</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter(p => p.slug !== currentPost.slug && p.category === currentPost.category)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group block p-6 bg-card rounded-xl border-2 border-border hover-lift transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Badge variant="outline" className="rounded-full bg-primary/10 text-primary border-primary/20 text-xs">
                          {relatedPost.category}
                        </Badge>
                        <span>{formatDate(relatedPost.date)}</span>
                      </div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Weiterlesen <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <FooterModern />
    </div>
  );
};

export default BlogPost;
