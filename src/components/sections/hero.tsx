"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Award, Shield, BookOpen } from "lucide-react";

const stats = [
  { icon: Award, label: "Years of Excellence", value: "20+" },
  { icon: Shield, label: "Africa's Outstanding School of the Year", value: "Award" },
  { icon: BookOpen, label: "COBIS Member", value: "Accredited" },
  { icon: Award, label: "SAT Test Centre", value: "Recognised" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-950"
        />
        {/* Abstract decorative elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-navy-700/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-gold-500/40 rounded-full" />
        <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-gold-500/30 rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-gold-500/20 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-gold-400 text-sm font-medium tracking-wide">
                Admissions Open for 2026/2027 Session
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Shaping the
              <br />
              <span className="gold-gradient-text">Leaders</span>
              <br />
              of Tomorrow
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
            >
              Welcome to Start-Rite International School, Abuja&apos;s premier institution
              for academic excellence and character development. Where tradition meets
              innovation in a world-class learning environment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-8 py-4 gold-gradient text-navy-900 font-semibold rounded-xl shadow-2xl shadow-gold-500/25 hover:shadow-gold-500/40 transition-all duration-500 hover:scale-105"
              >
                Book a Tour
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="https://startriteschools.com.ng/apply/"
                className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-500 hover:scale-105"
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-white/10"
            >
              {stats.map((stat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <stat.icon size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                      {stat.label}
                    </p>
                    <p className="text-sm font-semibold text-gold-400 mt-0.5">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Video/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-gold-500/20">
                      <Play size={32} className="text-gold-500 ml-1" />
                    </div>
                    <p className="text-white/60 text-sm">Watch Campus Tour</p>
                  </div>
                </div>
                {/* Decorative frame */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-gold-500/30 rounded-tr-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-gold-500/30 rounded-bl-2xl" />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-navy-800/90 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                    <Award size={18} className="text-navy-900" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Africa&apos;s Outstanding</p>
                    <p className="text-gold-500 text-xs">School of the Year</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
