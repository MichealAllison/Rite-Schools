"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  ArrowRight,
  Clock,
  User,
} from "lucide-react";
import ScrollReveal from "@/src/components/ui/scroll-reveal";
import SectionHeading from "@/src/components/ui/section-heading";

const articles = [
  {
    title: "Start-Rite Students Shine at National Science Fair",
    excerpt:
      "Our young innovators brought home gold medals with their groundbreaking project on renewable energy solutions.",
    category: "Achievements",
    date: "June 15, 2026",
    author: "Academic Office",
    readTime: "4 min read",
    featured: true,
  },
  {
    title: "2026/2027 Admissions Now Open",
    excerpt:
      "We are pleased to announce that admissions for the 2026/2027 academic session are now open for all year groups.",
    category: "Admissions",
    date: "June 1, 2026",
    author: "Admissions Team",
    readTime: "3 min read",
    featured: false,
  },
  {
    title: "TEDxStartRite: Ideas Worth Spreading",
    excerpt:
      "Our annual TEDx event brought together thought leaders, innovators, and students for an inspiring day of ideas.",
    category: "Events",
    date: "May 20, 2026",
    author: "Events Committee",
    readTime: "5 min read",
    featured: false,
  },
];

const upcomingEvents = [
  {
    title: "Annual Sports Day",
    date: "July 15",
    time: "8:00 AM",
  },
  {
    title: "Parent-Teacher Conference",
    date: "July 22",
    time: "9:00 AM",
  },
  {
    title: "STEAM Exhibition",
    date: "Aug 5",
    time: "10:00 AM",
  },
];

export default function NewsEvents() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          subtitle="News & Events"
          title="Latest Updates"
          description="Stay informed with the latest news, achievements, and upcoming events from our school community."
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {/* Featured Article */}
          <div className="lg:col-span-2 space-y-6">
            {articles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className={`group rounded-2xl border transition-all duration-500 overflow-hidden ${
                    article.featured
                      ? "bg-gradient-to-br from-navy-900 to-navy-800 border-navy-700 hover:shadow-xl hover:shadow-navy-900/20"
                      : "bg-white border-gray-100 shadow-sm hover:shadow-xl hover:border-gold-200"
                  } ${i > 0 ? "hidden md:block" : ""}`}
                >
                  <div className="p-6 lg:p-8">
                    {/* Category */}
                    <span
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                        article.featured
                          ? "bg-gold-500/20 text-gold-400"
                          : "bg-navy-50 text-navy-700"
                      }`}
                    >
                      {article.category}
                    </span>

                    <div
                      className={`flex flex-col ${
                        article.featured ? "md:flex-row" : ""
                      } gap-6`}
                    >
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-bold mb-3 leading-snug ${
                            article.featured
                              ? "text-white"
                              : "text-navy-900 group-hover:text-gold-700"
                          } transition-colors`}
                        >
                          {article.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed mb-4 ${
                            article.featured ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {article.excerpt}
                        </p>

                        <div
                          className={`flex items-center gap-4 text-xs ${
                            article.featured ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} />
                            {article.readTime}
                          </span>
                        </div>
                      </div>

                      {article.featured && (
                        <div className="flex-shrink-0 md:w-48 h-32 rounded-xl bg-gradient-to-br from-gold-500/10 to-navy-700 flex items-center justify-center">
                          <span className="text-gold-500 text-sm font-medium">
                            Featured Story
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-navy-800/30 flex items-center justify-between">
                      <span
                        className={`text-xs flex items-center gap-1 ${
                          article.featured ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        <User size={12} />
                        {article.author}
                      </span>
                      <a
                        href="#"
                        className={`text-sm font-medium flex items-center gap-1 group/link ${
                          article.featured
                            ? "text-gold-500 hover:text-gold-400"
                            : "text-gold-600 hover:text-gold-700"
                        } transition-colors`}
                      >
                        Read more
                        <ArrowRight
                          size={14}
                          className="group-hover/link:translate-x-1 transition-transform"
                        />
                      </a>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>

          {/* Sidebar - Upcoming Events */}
          <div className="space-y-6">
            <ScrollReveal direction="right">
              <div className="bg-cream rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-navy-900 mb-6 flex items-center gap-2">
                  <Calendar size={20} className="text-gold-600" />
                  Upcoming Events
                </h3>

                <div className="space-y-4">
                  {upcomingEvents.map((event, i) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white hover:shadow-md transition-shadow cursor-pointer group"
                    >
                      {/* Date Badge */}
                      <div className="w-14 h-14 rounded-xl gold-gradient flex flex-col items-center justify-center text-navy-900 flex-shrink-0">
                        <span className="text-xs font-bold leading-none">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="text-[10px] font-semibold mt-0.5">
                          {event.date.split(" ")[1]}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-navy-900 truncate group-hover:text-gold-700 transition-colors">
                          {event.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">{event.time}</p>
                      </div>

                      <ArrowRight
                        size={16}
                        className="text-gray-300 group-hover:text-gold-600 transition-colors flex-shrink-0"
                      />
                    </motion.div>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-600 hover:text-gold-700 transition-colors group"
                >
                  View all events
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </ScrollReveal>

            {/* Quick Stats */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-navy-950 rounded-2xl p-8 text-center">
                <p className="text-gold-500 text-3xl font-bold font-heading">15+</p>
                <p className="text-gray-400 text-sm mt-1">Years of Educational Excellence</p>
                <div className="mt-4 pt-4 border-t border-navy-800">
                  <a
                    href="https://startriteschools.com.ng/apply/"
                    className="text-gold-500 hover:text-gold-400 text-sm font-medium transition-colors"
                  >
                    Apply for 2026/2027 →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
