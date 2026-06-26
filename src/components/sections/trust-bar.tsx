"use client";

import { motion } from "framer-motion";
import { Award, Shield, BookOpen, Globe, Lightbulb, GraduationCap } from "lucide-react";

const awards = [
  {
    icon: Award,
    label: "Africa's Outstanding School of the Year",
    description: "Recognised for exceptional educational standards",
  },
  {
    icon: Shield,
    label: "COBIS Member",
    description: "Council of British International Schools",
  },
  {
    icon: BookOpen,
    label: "SAT Test Centre",
    description: "Authorised SAT Examination Centre",
  },
  {
    icon: Globe,
    label: "International Partnerships",
    description: "Global educational collaborations",
  },
  {
    icon: Lightbulb,
    label: "TEDx Events",
    description: "Ideas worth spreading platform",
  },
  {
    icon: GraduationCap,
    label: "Cambridge Curriculum",
    description: "World-renowned academic framework",
  },
];

export default function TrustBar() {
  return (
    <section className="relative py-20 bg-cream overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-gold-600 mb-4">
            Accreditations & Recognition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 font-heading">
            Trusted by Families Across Nigeria
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold-200 transition-all duration-500 text-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-50 to-gold-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:from-gold-100 group-hover:to-gold-200 transition-all duration-500">
                  <award.icon size={24} className="text-gold-600" />
                </div>
                <h3 className="text-sm font-bold text-navy-800 mb-2 leading-tight">
                  {award.label}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Carousel Bar */}
        <div className="mt-12 relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...awards, ...awards].map((award, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <award.icon size={20} className="text-gold-600" />
                <span className="text-sm font-medium text-navy-700 whitespace-nowrap">
                  {award.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
