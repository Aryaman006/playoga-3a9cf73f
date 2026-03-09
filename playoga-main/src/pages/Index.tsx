import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Play, Users, Heart, Sparkles, Video, Calendar, ArrowRight, Quote, ChevronLeft, ChevronRight, ChevronDown, X, Gift } from "lucide-react";
import { useState, useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImage from "@/assets/hero2.png";
import bungeeYoga from "@/assets/bungee-yoga.jpg";
import aquaYoga from "@/assets/aqua-yoga.jpg";
import pranayama from "@/assets/pranayama.jpg";
import therapyYoga from "@/assets/therapy-yoga.jpg";
import liveClass from "@/assets/live-class.jpg";
import kidsYogaDm from "@/assets/kids-yoga-dm.png";
import teenYogaDm from "@/assets/teen-yoga-dm.png";
import adultYogaDm from "@/assets/adult-yoga-dm.png";
import seniorYogaDm from "@/assets/senior-yoga-dm.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Index = () => {
  const stats = [
    { number: "18+", label: "Categories" },
    { number: "100+", label: "Specialized Courses" },
    { number: "16+", label: "Years Experience" },
    { number: "100K+", label: "Global Members" },
  ];

  const focusAreas = [
    { title: "Kids Yoga", age: "3-12 years", image: kidsYogaDm },
    { title: "Teen Wellness", age: "13-19 years", image: teenYogaDm },
    { title: "Adult Programs", age: "20-50 years", image: adultYogaDm },
    { title: "Senior Care", age: "50+ years", image: seniorYogaDm },
  ];

  const categories = [
    "Pranayama", "Aqua Fitness", "Bungee Yoga", "Yoga Therapy",
    "Meditation", "Power Yoga", "Prenatal Yoga", "Kids Yoga",
    "Senior Wellness", "Weight Management", "Stress Relief", "Sleep Yoga"
  ];

  return (
    <Layout>
      {/* Floating Pricing Popup */}
      <FloatingPricingPopup />
      {/* WhatsApp Button */}
      <WhatsAppButton />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Yoga meditation at sunrise"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeInUp}
                className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
              >
                Welcome to Playoga
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6"
              >
                Reshape your{" "}
                <span className="text-gradient-gold">mind, body,</span>
                {" "}and spirit—one breath at a time.
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground mb-8 max-w-lg"
              >
                Join Dr. Bhavika Choradia and discover scientifically-backed yoga therapy
                designed for all ages and health conditions.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button variant="hero" size="xl" asChild>
                  <a href="https://app.playoga.co.in" target="_blank" rel="noopener noreferrer">
                    Start Your Journey
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </Button>
                {/* <Button variant="hero-outline" size="xl" asChild>
                  <Link to="/courses">
                    <Play className="mr-2" size={20} />
                    Explore Courses
                  </Link>
                </Button> */}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-serif font-bold text-gradient-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Disease Management Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Yoga Therapy
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Disease Management for <span className="text-gradient-gold">All Ages</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              Scientifically designed programs addressing specific health conditions,
              from PCOD and diabetes to stress management and chronic pain relief.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-gold-light text-sm mb-1">{area.age}</p>
                  <h3 className="text-xl font-serif font-semibold text-[hsl(40,33%,98%)]">
                    {area.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dual Mode Feature */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Learn Your Way
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Two Paths, One <span className="text-gradient-gold">Transformation</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* VOD Library */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-3xl p-8 shadow-soft"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Recorded VOD Library</h3>
              <p className="text-muted-foreground mb-6">
                Access 100+ on-demand courses anytime, anywhere. Perfect for busy schedules—
                pause, rewind, and practice at your own pace.
              </p>
              <ul className="space-y-3">
                {["Unlimited LIVE Sessions", "Curated playlists", "1-1 Yoga therapy couns" , "Progress tracking", "Yogic points"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Sparkles className="w-4 h-4 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Live Sessions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <img
                src={liveClass}
                alt="Live yoga class"
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="w-14 h-14 rounded-2xl bg-[hsl(40,33%,98%)]/20 backdrop-blur flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-[hsl(40,33%,98%)]" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[hsl(40,33%,98%)] mb-4">
                  Scheduled Live Sessions
                </h3>
                <p className="text-[hsl(40,33%,98%)]/80 mb-6">
                  Join real-time classes with personal guidance. Get instant feedback,
                  ask questions, and connect with our global community.
                </p>
                <Button variant="gold" asChild>
                  <Link to="/classes">View Schedule</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Explore <span className="text-gradient-gold">18+ Categories</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground">
              From ancient wisdom to modern techniques
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="px-5 py-2.5 bg-card rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
              >
                <span className="text-sm font-medium">{category}</span>
              </motion.div>
            ))}
            <motion.div variants={fadeInUp}>
              <Link
                to="/courses"
                className="px-5 py-2.5 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all inline-flex items-center gap-2 text-sm font-medium"
              >
                View All
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <TestimonialsSection />

      {/* Video Testimonials Section - Hidden for now */}
      {/* <VideoTestimonialsSection /> */}

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-sage/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Begin Your Wellness Journey <span className="text-gradient-gold">Today</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join thousands of practitioners worldwide who have transformed their lives
              through the science and art of yoga with Playoga.
            </p>
           <div className="flex flex-col items-center gap-2">
  <Button variant="hero" size="xl" asChild>
    <a
      href="https://app.playoga.co.in"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
    >
      Get Started — <span className="ml-1 font-semibold">₹999/year</span>
      <ArrowRight className="ml-2" size={20} />
    </a>
  </Button>

  {/* GST Notice below button */}
  <p className="text-xs text-muted-foreground">
    * Additional GST will be applied at checkout
  </p>
</div>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

// Testimonials Slider Component
const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "Playoga completely transformed my approach to wellness. After struggling with PCOD for years, the targeted yoga therapy sessions helped me manage symptoms naturally. The live classes with Dt. Bhavika are life-changing!",
    avatar: "PS",
  },
  {
    name: "Rajesh Mehta",
    location: "Dubai, UAE",
    rating: 5,
    text: "As a 55-year-old with chronic back pain, I was skeptical. But the senior wellness programs are perfectly designed. Three months in, my pain has reduced by 80%. The VOD library lets me practice anytime!",
    avatar: "RM",
  },
  {
    name: "Ananya Patel",
    location: "London, UK",
    rating: 5,
    text: "The kids yoga program for my daughter has been amazing! She's more focused at school and sleeps better. The app is so user-friendly, and the instructors make it fun and engaging.",
    avatar: "AP",
  },
  {
    name: "Dr. Sanjay Kumar",
    location: "Bangalore, India",
    rating: 5,
    text: "As a physician, I recommend Playoga to my patients for stress management and diabetes control. The scientific approach combined with traditional yoga makes it truly effective.",
    avatar: "SK",
  },
  {
    name: "Meera Joshi",
    location: "New York, USA",
    rating: 5,
    text: "The prenatal yoga sessions prepared me beautifully for childbirth. The breathing techniques and gentle stretches were exactly what I needed. Forever grateful to the Playoga team!",
    avatar: "MJ",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Success Stories
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our <span className="text-gradient-gold">Members Say</span>
          </motion.h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden relative min-h-[300px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-card rounded-3xl p-8 md:p-12 shadow-soft"
              >
                <Quote className="w-12 h-12 text-primary/30 mb-6" />
                <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].location}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Sparkles key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? "bg-primary" : "bg-border"
                    }`}
                />
              ))}
            </div>
            <button
              onClick={() => navigate(1)}
              className="w-12 h-12 rounded-full bg-card border border-border hover:border-primary transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Video Testimonials Component - Hidden for now
/* 
const videoTestimonials = [
  {
    name: "Sunita Verma",
    condition: "Thyroid Management",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=250&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Arun Krishnan",
    condition: "Stress & Anxiety Relief",
    thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Kavitha Nair",
    condition: "Weight Management",
    thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=250&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Vikram Singh",
    condition: "Back Pain Recovery",
    thumbnail: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=400&h=250&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const VideoTestimonialsSection = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Real Transformations
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Watch Their <span className="text-gradient-gold">Journeys</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from our members about how Playoga has transformed their health and wellbeing
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {videoTestimonials.map((video, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer"
              onClick={() => setPlayingVideo(playingVideo === index ? null : index)}
            >
              {playingVideo === index ? (
                <div className="aspect-video">
                  <iframe
                    src={video.videoUrl + "?autoplay=1"}
                    title={video.name}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <>
                  <img
                    src={video.thumbnail}
                    alt={video.name}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 text-primary-foreground fill-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/90 to-transparent">
                    <p className="text-[hsl(40,33%,98%)] font-medium">{video.name}</p>
                    <p className="text-[hsl(40,33%,98%)]/70 text-sm">{video.condition}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
*/

// FAQ Data
const faqs = [
  {
    question: "What is Playoga and how does it work?",
    answer: "Playoga is a comprehensive yoga and wellness platform offering both recorded video-on-demand (VOD) classes and live scheduled sessions. Simply download the app, subscribe to our All-Access plan, and start practicing anytime, anywhere with expert guidance from Dt. Bhavika Choradia and our certified instructors."
  },
  {
    question: "What health conditions can Playoga help manage?",
    answer: "Playoga offers specialized yoga therapy programs for 33+ health conditions including diabetes, thyroid disorders, PCOD/PCOS, back pain, arthritis, stress, anxiety, insomnia, blood pressure, obesity, and many more. Each program is scientifically designed and backed by research."
  },
  {
    question: "Is Playoga suitable for beginners?",
    answer: "Absolutely! Playoga welcomes practitioners of all levels. Our courses are categorized by difficulty level (Beginner, Intermediate, Advanced), and our instructors provide modifications for every pose. Start with our beginner-friendly sessions and progress at your own pace."
  },
  {
    question: "What's included in the ₹999/year All-Access plan?",
    answer: "The All-Access plan includes unlimited access to 100+ VOD courses, live scheduled classes, disease management programs, teacher training access, progress tracking, and access to our global wellness community—all for just ₹999 per year."
  },
  {
    question: "Can I practice with my family on one subscription?",
    answer: "Yes! With Playoga, your subscription covers practices for all age groups—from kids yoga (3-12 years) to senior wellness (50+ years). The entire family can benefit from our diverse programs designed for different ages and needs."
  },
  {
    question: "Are the live classes interactive?",
    answer: "Yes, our live scheduled sessions are fully interactive. You can ask questions in real-time, receive personal guidance and corrections from instructors, and connect with fellow practitioners from around the world."
  },
  {
    question: "How can I access the content?",
    answer: "You can access all content through our web app or mobile app. Simply log in with your credentials and start practicing. All videos are available for streaming anytime, anywhere with an internet connection."
  },
  {
    question: "Who is Dt. Bhavika Choradia?",
    answer: "Dt. Bhavika Choradia is the founder of Playoga with 16+ years of yoga expertise. She is a Yoga Acharya, Biochemist, PhD Research Scholar, and Mrs. India Top 10. She pioneered the first global yoga app for universal practice, combining scientific knowledge with traditional yoga wisdom."
  },
];

// FAQ Section Component
const FAQSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Got Questions?
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Playoga and your wellness journey
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="mailto:care@playoga.co.in"
            className="text-primary font-medium hover:underline"
          >
            Contact us at care@playoga.co.in
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Floating Pricing Popup Component
const FloatingPricingPopup = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-4 bottom-24 z-50"
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.div
            key="expanded"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-card border border-primary/20 rounded-2xl shadow-xl p-6 w-72 relative"
          >
            {/* Close */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground"
            >
              <X size={18} />
            </button>

            <div className="text-center">
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-serif font-bold text-lg mb-2">
                All-Access Plan
              </h3>

              {/* Price */}
              <div className="mb-4 flex flex-col items-center">
                <div>
                  <span className="text-3xl font-bold text-gradient-gold">
                    ₹999
                  </span>
                  <span className="text-sm text-muted-foreground ml-1">
                    / year
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="text-sm text-left space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>100+ VOD Courses</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Live Scheduled Classes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>33+ Disease Programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Global Community</span>
                </li>
              </ul>

              {/* CTA */}
              <Button variant="hero" size="sm" className="w-full" asChild>
                <a
                  href="https://app.playoga.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Now
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>

              {/* GST Notice */}
              <div className="mt-4 pt-3 border-t border-primary/10 text-center">
                <p className="text-xs text-muted-foreground">
                  * Additional GST will be applied at checkout
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={() => setIsExpanded(true)}
            className="bg-gradient-to-r from-primary to-gold-dark text-primary-foreground rounded-full px-5 py-3 shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-3 group"
          >
            <Gift className="w-5 h-5" />
            <span className="font-semibold">₹999</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


export default Index;
