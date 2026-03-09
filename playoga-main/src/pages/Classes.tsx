import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ArrowRight,
  Circle,
  Loader2,
  Flame,
  Activity,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

/* ================= CONFIG ================= */

const SUPABASE_URL = "https://xoampivltwofgecadktc.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhvYW1waXZsdHdvZmdlY2Fka3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxOTg4OTksImV4cCI6MjA4NTc3NDg5OX0.Vo2-tIrsOegAC6aYpmSwa1U6cRQUHbFxszxX2pQuKG4";

/* ================= ANIMATIONS ================= */

/* ================= ANIMATIONS ================= */

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ================= TYPES ================= */

interface LiveSession {
  id: string;
  title: string;
  description: string;
  scheduled_at: string;
  duration_minutes: number;
  thumbnail_url: string | null;
  instructor_name: string;
  stream_url: string;
  is_completed: boolean;
}

/* ================= HELPERS ================= */

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === now.toDateString()) return "Today";
  if (date.toDateString() === tomorrow.toDateString()) return "Tomorrow";

  return date.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
};

const formatTime = (dateStr: string) =>
  new Date(dateStr).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const getSessionStatus = (
  start: string,
  duration: number,
  completed: boolean
) => {
  if (completed) return "completed";

  const startTime = new Date(start).getTime();
  const endTime = startTime + duration * 60000;
  const now = Date.now();

  if (now >= startTime && now <= endTime) return "live";
  if (now < startTime) return "upcoming";

  return "completed";
};

const getCountdown = (start: string) => {
  const diff = new Date(start).getTime() - Date.now();

  if (diff <= 0) return null;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours}h ${minutes}m`;
};

/* ================= CARD COMPONENT ================= */

const SessionCard = ({ cls }: { cls: LiveSession }) => {
  const status = getSessionStatus(
    cls.scheduled_at,
    cls.duration_minutes,
    cls.is_completed
  );

  const countdown = getCountdown(cls.scheduled_at);

  return (
    <motion.div
      variants={fadeInUp}
      className="group bg-card border rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row"
    >
      {/* Thumbnail */}

      <div className="relative w-full lg:w-80 h-56 lg:h-auto overflow-hidden">

        <img
          src={
            cls.thumbnail_url ||
            "https://images.unsplash.com/photo-1554344058-2d5a5a8c0f65"
          }
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {status === "live" && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-2 animate-pulse">
            <Circle size={8} fill="currentColor" />
            LIVE NOW
          </div>
        )}

        {status === "upcoming" && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
            UPCOMING
          </div>
        )}

        {status === "completed" && (
          <div className="absolute top-4 left-4 bg-gray-700 text-white px-3 py-1 rounded-full text-xs">
            COMPLETED
          </div>
        )}
      </div>

      {/* Content */}

      <div className="flex flex-col justify-between p-6 lg:p-8 flex-grow">

        <div>

          <p className="text-sm text-primary font-medium mb-1">
            {formatDate(cls.scheduled_at)} • {formatTime(cls.scheduled_at)}
          </p>

          <h3 className="text-xl lg:text-2xl font-semibold mb-2">
            {cls.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-2">
            Instructor:{" "}
            <span className="font-medium">{cls.instructor_name}</span>
          </p>

          <p className="text-muted-foreground text-sm mb-5 line-clamp-2">
            {cls.description}
          </p>

          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">

            <span className="flex items-center gap-1">
              <Clock size={16} />
              {cls.duration_minutes} min
            </span>

            <span className="flex items-center gap-1">
              <Flame size={16} />
              Energy burn
            </span>

            <span className="flex items-center gap-1">
              <Activity size={16} />
              Full body
            </span>

          </div>

          {status === "upcoming" && countdown && (
            <div className="mt-3 text-sm text-yellow-600 font-medium">
              Starts in {countdown}
            </div>
          )}

        </div>

        {/* Action */}

        <div className="mt-6">

          {status === "live" && (
            <Button
              className="bg-red-600 hover:bg-red-700 w-full sm:w-auto"
              asChild
            >
              <a href={cls.stream_url} target="_blank">
                Join Live Class
              </a>
            </Button>
          )}

          {status === "upcoming" && (
            <Button variant="outline" className="w-full sm:w-auto">
              Upcoming Session
            </Button>
          )}

          {status === "completed" && (
            <Button disabled className="w-full sm:w-auto">
              Session Completed
            </Button>
          )}

        </div>

      </div>
    </motion.div>
  );
};

/* ================= COMPONENT ================= */

export default function Classes() {
  const [classes, setClasses] = useState<LiveSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchSessions = async () => {

      const timer = setInterval(
        () => setProgress((p) => Math.min(p + 10, 90)),
        200
      );

      try {
        const res = await fetch(
          `${SUPABASE_URL}/rest/v1/live_sessions?select=*`,
          {
            headers: {
              apikey: SUPABASE_ANON_KEY,
              Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
            },
          }
        );

        const data: LiveSession[] = await res.json();

        setClasses(data);
      } catch (err) {
        console.error(err);
      } finally {
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => setLoading(false), 300);
      }
    };

    fetchSessions();
  }, []);

  /* Categorize sessions */

  const live = classes.filter(
    (c) =>
      getSessionStatus(c.scheduled_at, c.duration_minutes, c.is_completed) ===
      "live"
  );

  const upcoming = classes.filter(
    (c) =>
      getSessionStatus(c.scheduled_at, c.duration_minutes, c.is_completed) ===
      "upcoming"
  );

  const completed = classes.filter(
    (c) =>
      getSessionStatus(c.scheduled_at, c.duration_minutes, c.is_completed) ===
      "completed"
  );

  return (
    <Layout>

      {/* HERO */}

      <section className="pt-24 pb-14 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Yoga <span className="text-gradient-gold">Live Classes</span>
        </h1>

        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Join expert-led live yoga sessions and practice from anywhere.
        </p>
      </section>

      {/* CONTENT */}

      <section className="pb-24 container mx-auto px-4">

        {loading ? (
          <div className="text-center py-20">
            <Loader2 className="animate-spin mx-auto mb-4" />
            <Progress value={progress} className="max-w-md mx-auto" />
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-14 max-w-6xl mx-auto"
          >

            {/* LIVE */}

            {live.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-6">
                  🔴 Live Now
                </h2>

                <div className="space-y-8">
                  {live.map((cls) => (
                    <SessionCard key={cls.id} cls={cls} />
                  ))}
                </div>
              </div>
            )}

            {/* UPCOMING */}

            {upcoming.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  Upcoming Classes
                </h2>

                <div className="space-y-8">
                  {upcoming.map((cls) => (
                    <SessionCard key={cls.id} cls={cls} />
                  ))}
                </div>
              </div>
            )}

            {/* COMPLETED */}

            {completed.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-muted-foreground mb-6">
                  Past Sessions
                </h2>

                <div className="space-y-8 opacity-80">
                  {completed.map((cls) => (
                    <SessionCard key={cls.id} cls={cls} />
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        )}

      </section>

      {/* CTA */}

      <section className="py-24 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Never Miss a{" "}
          <span className="text-gradient-gold">Session</span>
        </h2>

        <p className="text-muted-foreground mb-8">
          Unlock unlimited classes and full yoga library with Playoga Premium.
        </p>

        <Button size="xl" variant="hero" asChild>
          <a href="https://app.playoga.co.in" target="_blank">
            Get All-Access — ₹999/year
            <ArrowRight className="ml-2" size={18} />
          </a>
        </Button>
      </section>

    </Layout>
  );
}