import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CourseHero from "@/components/CourseHero";
import RelatedCourses from "@/components/RelatedCourses";
import { Skeleton } from "@/components/ui/skeleton";
import { supabaseFetch } from "@/lib/supabase";
import type { Course } from "@/types/course";
import { ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const data = await supabaseFetch(
          `courses?select=*,category:course_categories(name),author:course_authors(name,avatar)&slug=eq.${slug}&limit=1`
        );
        if (data.length === 0) {
          setNotFound(true);
          return;
        }
        const c = data[0];
        setCourse({
          ...c,
          category: c.category?.name,
          author: c.author?.name,
          avatar: c.author?.avatar,
        });
      } catch {
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [slug]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 md:px-6 py-20">
          <Skeleton className="h-[50vh] w-full rounded-xl mb-8" />
          <div className="max-w-3xl mx-auto space-y-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </Layout>
    );
  }

  if (notFound || !course) {
    return (
      <Layout>
        <div className="container mx-auto px-4 md:px-6 py-32 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The course you're looking for doesn't exist or has been removed.
          </p>
          <Button variant="gold" asChild>
            <Link to="/courses">Browse All Courses</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* SEO */}
      <title>{course.seo_title || course.title} | Playoga</title>
      {course.seo_description && (
        <meta name="description" content={course.seo_description} />
      )}

      {/* Back */}
      <div className="container mx-auto px-4 md:px-6 pt-4">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Courses
        </Link>
      </div>

      {/* Hero */}
      <CourseHero course={course} />

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-foreground
                prose-p:text-muted-foreground prose-p:leading-relaxed
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-img:rounded-xl prose-img:shadow-lg"
              dangerouslySetInnerHTML={{ __html: course.content || "<p>Content coming soon.</p>" }}
            />

            {/* Tags */}
            {course.tags && course.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-8 border-t border-border"
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Share */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 pt-8 border-t border-border"
            >
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share this course
              </h3>
              <div className="flex gap-3">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(course.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  title="Copy link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <RelatedCourses currentSlug={course.slug} categoryId={course.category_id} />
    </Layout>
  );
};

export default CourseDetail;
