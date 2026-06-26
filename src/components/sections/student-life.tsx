"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Music,
  FlaskConical,
  Bot,
  Palette,
  Mic2,
  Users,
  Heart,
} from "lucide-react";
import ScrollReveal from "@/src/components/ui/scroll-reveal";
import SectionHeading from "@/src/components/ui/section-heading";

const activities = [
  {
    icon: Dumbbell,
    title: "Sports",
    description: "Football, basketball, swimming, athletics & more",
    size: "large",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: Music,
    title: "Music",
    description: "Choir, band, instruments & performances",
    size: "small",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    icon: FlaskConical,
    title: "Science",
    description: "Lab experiments & research projects",
    size: "small",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    icon: Bot,
    title: "Robotics",
    description: "Coding, AI & engineering challenges",
    size: "medium",
    gradient: "from-cyan-500 to-cyan-700",
  },
  {
    icon: Palette,
    title: "Arts",
    description: "Visual arts, drama & creative expression",
    size: "medium",
    gradient: "from-rose-500 to-rose-700",
  },
  {
    icon: Mic2,
    title: "Debate",
    description: "Public speaking & critical thinking",
    size: "small",
    gradient: "from-amber-500 to-amber-700",
  },
  {
    icon: Users,
    title: "Leadership",
    description: "Student council & community service",
    size: "large",
    gradient: "from-gold-500 to-gold-700",
  },
];

const sizeClasses = {
  large: "lg:col-span-2 lg:row-span-2",
  medium: "lg:col-span-1 lg:row-span-1",
  small: "lg:col-span-1 lg:row-span-1",
};

const heights = {
  large: "h-[400px]",
  medium: "h-[280px]",
  small: "h-[280px]",
};

export default function StudentLife() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          subtitle="Student Life"
          title="Beyond the Classroom"
          description="At Start-Rite, education extends far beyond textbooks. We nurture well-rounded individuals through a rich tapestry of extracurricular experiences."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {activities.map((activity, i) => (
            <ScrollReveal key={activity.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${sizeClasses[activity.size]} ${heights[activity.size]}`}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-90`}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  {/* Icon */}
                  <div className="mb-auto">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <activity.icon size={28} className="text-white" />
                    </div>
                  </div>

                  <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {activity.description}
                    </p>
                  </div>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-lg" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
