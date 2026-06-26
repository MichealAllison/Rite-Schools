"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Baby, Backpack, GraduationCap, Award } from "lucide-react";
import SectionHeading from "@/src/components/ui/section-heading";

const stages = [
  {
    id: "early-years",
    icon: Baby,
    title: "Early Years",
    ages: "Ages 2-5",
    subtitle: "Foundation Stage",
    color: "from-amber-400 to-amber-600",
    description:
      "Children are welcomed into a safe, stimulating and nurturing environment where their foundation stage begins. Our Early Years programme focuses on holistic development through play-based learning, fostering curiosity, creativity, and social skills.",
    highlights: [
      "Montessori-inspired learning",
      "Child-to-teacher ratio of 8:1",
      "Early literacy and numeracy",
      "Outdoor exploratory play",
      "Music and movement sessions",
    ],
  },
  {
    id: "primary",
    icon: Backpack,
    title: "Primary School",
    ages: "Ages 5-11",
    subtitle: "Key Stages 1 & 2",
    color: "from-blue-400 to-blue-600",
    description:
      "Children learn the necessary skills to be successful both now and in the future. Our primary programme builds strong foundations in core subjects while nurturing creativity and critical thinking through our enriched Cambridge curriculum.",
    highlights: [
      "Cambridge Primary Curriculum",
      "STEAM integration",
      "French language instruction",
      "Swimming and PE programme",
      "Leadership opportunities",
    ],
  },
  {
    id: "secondary",
    icon: GraduationCap,
    title: "Day Secondary",
    ages: "Ages 11-16",
    subtitle: "Key Stages 3 & 4",
    color: "from-purple-400 to-purple-600",
    description:
      "Start-Rite Secondary provides a 21st-century learning environment for students. Our comprehensive programme prepares students for IGCSE examinations while developing well-rounded individuals through extensive extracurricular activities.",
    highlights: [
      "Cambridge IGCSE programme",
      "Advanced science laboratories",
      "Debating and public speaking",
      "Community service initiatives",
      "Career guidance counselling",
    ],
  },
  {
    id: "sixth-form",
    icon: Award,
    title: "Sixth Form",
    ages: "Ages 16-18",
    subtitle: "Advanced Level",
    color: "from-gold-500 to-gold-700",
    description:
      "Our Sixth Form programme prepares students for university and beyond. With a focus on academic excellence, leadership, and independent study skills, students achieve outstanding results and secure placements at top universities worldwide.",
    highlights: [
      "Cambridge International A-Levels",
      "University preparation & UCAS support",
      "Leadership and prefect system",
      "Internship opportunities",
      "Global exchange programmes",
    ],
  },
];

export default function AcademicJourney() {
  const [activeStage, setActiveStage] = useState(stages[0].id);

  const activeData = stages.find((s) => s.id === activeStage)!;

  return (
    <section className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-700 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          subtitle="Academic Journey"
          title="A Path to Excellence"
          description="From early years to sixth form, every stage of the Start-Rite journey is designed to nurture potential and inspire greatness."
          light
        />

        {/* Timeline Navigation */}
        <div className="mt-16 mb-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-0 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-navy-700 -translate-y-1/2" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full relative">
              {stages.map((stage, i) => {
                const isActive = activeStage === stage.id;
                const Icon = stage.icon;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(stage.id)}
                    className="relative z-10 group text-left"
                  >
                    <div
                      className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-br from-navy-800 to-navy-900 border-gold-500/50 shadow-lg shadow-gold-500/10"
                          : "bg-navy-900/50 border-navy-800 hover:border-navy-600"
                      }`}
                    >
                      {/* Step number */}
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold mb-4 ${
                          isActive
                            ? "gold-gradient text-navy-900"
                            : "bg-navy-800 text-gray-500"
                        }`}
                      >
                        {i + 1}
                      </span>

                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? "gold-gradient"
                              : "bg-navy-800"
                          }`}
                        >
                          <Icon
                            size={20}
                            className={
                              isActive ? "text-navy-900" : "text-gray-400"
                            }
                          />
                        </div>
                        <div>
                          <h3
                            className={`font-bold transition-colors duration-500 ${
                              isActive ? "text-white" : "text-gray-400"
                            }`}
                          >
                            {stage.title}
                          </h3>
                          <span
                            className={`text-xs ${
                              isActive ? "text-gold-500" : "text-gray-600"
                            }`}
                          >
                            {stage.ages}
                          </span>
                        </div>
                      </div>

                      <p
                        className={`text-xs uppercase tracking-wider font-medium ${
                          isActive ? "text-gold-400" : "text-gray-600"
                        }`}
                      >
                        {stage.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Expandable Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-navy-900/50 border border-navy-800 rounded-3xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Description */}
              <div>
                <div
                  className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${activeData.color} text-white text-xs font-semibold mb-6`}
                >
                  {activeData.ages}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 font-heading">
                  {activeData.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {activeData.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-medium transition-colors group"
                >
                  Learn more about {activeData.title}
                  <ChevronDown size={16} className="rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                  Programme Highlights
                </h4>
                <div className="space-y-4">
                  {activeData.highlights.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
