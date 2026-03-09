import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Course } from "@/types/course";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  const formattedDate = new Date(course.created_at).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <motion.div variants={fadeInUp} layout>
      <Link
        to={`/courses/${course.slug}`}
        className="group block bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={course.featured_image || course.thumbnail || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />

          {/* Category Badge */}
          {course.category && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold uppercase tracking-wider">
                {course.category}
              </span>
            </div>
          )}

          {/* Reading Time */}
          {course.reading_time && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-background/90 backdrop-blur rounded-full text-xs font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {course.reading_time} min read
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-serif font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {course.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {course.ai_summary || course.description || "Explore this course to learn more."}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="w-3.5 h-3.5" />
              {formattedDate}
            </div>

            <Button variant="ghost" size="sm" className="text-primary font-semibold gap-1 p-0 h-auto">
              Read Course
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;
