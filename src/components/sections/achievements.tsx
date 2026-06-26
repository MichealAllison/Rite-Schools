"use client";

import { motion } from "framer-motion";
import { Award, Users, GraduationCap, Trophy, Globe, Star } from "lucide-react";
import AnimatedCounter from "@/src/components/ui/animated-counter";
import ScrollReveal from "@/src/components/ui/scroll-reveal";

const achievements = [
  {
    icon: Award,
    label: "Years of Excellence",
    end: 20,
    suffix: "+",
    description: "Of educational leadership",
  },
  {
    icon: Users,
    label: "Students Enrolled",
    end: 1500,
    suffix: "+",
    description: "Thriving learners",
  },
  {
    icon: GraduationCap,
    label: "Graduates",
    end: 5000,
    suffix: "+",
    description: "Alumni worldwide",
  },
  {
    icon: Trophy,
    label: "Awards Won",
    end: 50,
    suffix: "+",
    description: "National & international",
  },
  {
    icon: Globe,
    label: "University Placements",
    end: 98,
    suffix: "%",
    decimals: 0,
    description: "To top universities",
  },
  {
    icon: Star,
    label: "COBIS Accredited",
    end: 2015,
    suffix: "",
    description: "Since 2015",
  },
];

export default function Achievements() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/3 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Our Achievements
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-6">
              By the Numbers
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our track record speaks for itself. Here&apos;s what we&apos;ve accomplished together
              as a community.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, i) => (
            <ScrollReveal key={achievement.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative bg-navy-900/50 border border-navy-800 rounded-2xl p-8 text-center hover:border-gold-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-500">
                    <achievement.icon size={24} className="text-gold-500" />
                  </div>

                  {/* Number */}
                  <div className="text-4xl lg:text-5xl font-bold text-white font-heading mb-2">
                    <AnimatedCounter
                      end={achievement.end}
                      suffix={achievement.suffix}
                      decimals={achievement.decimals || 0}
                    />
                  </div>

                  {/* Label */}
                  <p className="text-gray-400 font-medium mb-1">
                    {achievement.label}
                  </p>
                  <p className="text-gray-600 text-xs">{achievement.description}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
