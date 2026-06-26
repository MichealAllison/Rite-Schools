"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  GraduationCap,
  Building2,
  Lightbulb,
  Cpu,
  Star,
  Heart,
  BookOpen,
} from "lucide-react";
import ScrollReveal from "@/src/components/ui/scroll-reveal";
import SectionHeading from "@/src/components/ui/section-heading";

const reasons = [
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "A rigorous curriculum blending Cambridge standards with innovative STEAM education to produce globally competitive graduates.",
    color: "from-amber-50 to-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: Users,
    title: "Small Class Sizes",
    description:
      "Intimate learning environments ensuring every child receives personalised attention and support from our dedicated faculty.",
    color: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: GraduationCap,
    title: "Experienced Teachers",
    description:
      "Highly qualified educators with international experience who inspire, mentor, and nurture each student's unique potential.",
    color: "from-emerald-50 to-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Building2,
    title: "Modern Learning Environment",
    description:
      "State-of-the-art facilities including science labs, ICT centres, libraries, and sports complexes designed for 21st-century learning.",
    color: "from-purple-50 to-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Lightbulb,
    title: "Leadership Development",
    description:
      "Comprehensive programmes that build confidence, critical thinking, and leadership skills through clubs, societies, and student government.",
    color: "from-rose-50 to-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: Cpu,
    title: "Technology Integration",
    description:
      "Seamless integration of cutting-edge technology across all subjects, preparing students for a digital future with robotics and coding.",
    color: "from-cyan-50 to-cyan-100",
    iconColor: "text-cyan-600",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-gold-50 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-navy-50 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          subtitle="Why Choose Us"
          title="Why Parents Choose Start-Rite"
          description="Discover what makes us the preferred choice for families seeking world-class education in Abuja."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <reason.icon size={28} className={reason.iconColor} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-white transition-colors duration-500">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-500">
                    {reason.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-gold-600 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
