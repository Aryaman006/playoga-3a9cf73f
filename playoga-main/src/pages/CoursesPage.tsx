import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CourseCard from "@/components/CourseCard";
import CourseCardSkeleton from "@/components/CourseCardSkeleton";
import { supabaseFetch } from "@/lib/supabase";
import type { Course } from "@/types/course";
import { BookOpen } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<{ id: string; name: string; slug: string }[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coursesData, catsData] = await Promise.all([
          supabaseFetch(
            "courses?select=*,category:course_categories(name),author:course_authors(name,avatar)&published=eq.true&order=created_at.desc"
          ),
          supabaseFetch("course_categories?select=*&order=name.asc"),
        ]);
        const mapped = coursesData.map((c: any) => ({
          ...c,
          category: c.category?.name,
          author: c.author?.name,
          avatar: c.author?.avatar,
        }));
        setCourses(mapped);
        setCategories(catsData);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredCourses =
    activeCategory === "All"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <Layout>
      {/* SEO */}
      <title>Courses | Playoga</title>
      <meta name="description" content="Explore expert-curated yoga courses for every health need — from disease management to meditation and fitness." />

      {/* Hero */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
          >
            Course Library
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Explore Our <span className="text-gradient-gold">Courses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Expert-curated programs designed for every age and every need.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      {categories.length > 0 && (
        <section className="py-4 sticky top-20 bg-background/80 backdrop-blur-lg z-40 border-b border-border/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveCategory("All")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Course Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <CourseCardSkeleton key={i} />
              ))}
            </div>
          ) : filteredCourses.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <BookOpen className="w-16 h-16 mx-auto text-muted-foreground/40 mb-4" />
              <h3 className="text-xl font-serif font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">
                {activeCategory !== "All"
                  ? "Try selecting a different category."
                  : "Courses are coming soon. Stay tuned!"}
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CoursesPage;
