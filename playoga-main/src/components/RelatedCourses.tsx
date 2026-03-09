import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import CourseCardSkeleton from "./CourseCardSkeleton";
import { supabaseFetch } from "@/lib/supabase";
import type { Course } from "@/types/course";

interface RelatedCoursesProps {
  currentSlug: string;
  categoryId: string | null;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const RelatedCourses = ({ currentSlug, categoryId }: RelatedCoursesProps) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelated = async () => {
      try {
        let query = `courses?select=*,category:course_categories(name),author:course_authors(name,avatar)&published=eq.true&slug=neq.${currentSlug}&limit=3&order=created_at.desc`;
        if (categoryId) {
          query += `&category_id=eq.${categoryId}`;
        }
        const data = await supabaseFetch(query);
        const mapped = data.map((c: any) => ({
          ...c,
          category: c.category?.name,
          author: c.author?.name,
          avatar: c.author?.avatar,
        }));
        setCourses(mapped);
      } catch {
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchRelated();
  }, [currentSlug, categoryId]);

  if (!loading && courses.length === 0) return null;

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl font-serif font-bold mb-8 text-center">
          Related Courses
        </h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {loading
            ? Array.from({ length: 3 }).map((_, i) => <CourseCardSkeleton key={i} />)
            : courses.map((c) => <CourseCard key={c.id} course={c} />)}
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedCourses;
