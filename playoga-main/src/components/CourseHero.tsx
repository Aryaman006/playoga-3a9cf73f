import { motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import type { Course } from "@/types/course";

interface CourseHeroProps {
  course: Course;
}

const CourseHero = ({ course }: CourseHeroProps) => {
  const formattedDate = new Date(course.created_at).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={course.featured_image || course.thumbnail || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 md:px-6 relative -mt-48 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Category */}
          {course.category && (
            <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground rounded-full text-xs font-semibold uppercase tracking-widest mb-4">
              {course.category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            {course.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {course.author && (
              <div className="flex items-center gap-2">
                {course.avatar ? (
                  <img
                    src={course.avatar}
                    alt={course.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-4 h-4" />
                )}
                <span className="font-medium text-foreground">{course.author}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </div>
            {course.reading_time && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {course.reading_time} min read
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseHero;
