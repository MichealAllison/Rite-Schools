"use client";

import { motion } from "framer-motion";
import { Play, Maximize2 } from "lucide-react";
import ScrollReveal from "@/src/components/ui/scroll-reveal";

export default function VirtualTour() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Virtual Experience
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-6">
              Take a Virtual Campus Tour
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our world-class facilities from the comfort of your home.
              See why Start-Rite is the leading choice for families in Abuja.
            </p>
          </div>
        </ScrollReveal>

        {/* Video Container */}
        <ScrollReveal>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/30 group cursor-pointer"
          >
            {/* Video Background Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 relative">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(201,168,76,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.1)_1px,transparent_1px)] bg-[length:60px_60px]" />

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full bg-gold-500/30 animate-ping" />
                  <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-xl" />

                  {/* Button */}
                  <div className="relative w-24 h-24 rounded-full gold-gradient flex items-center justify-center shadow-2xl shadow-gold-500/30 group-hover:shadow-gold-500/50 transition-shadow duration-500">
                    <Play
                      size={36}
                      className="text-navy-900 ml-1.5"
                      fill="currentColor"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Top gradient text */}
              <div className="absolute top-6 left-6">
                <span className="text-white/40 text-xs font-medium tracking-wider uppercase">
                  Campus Tour
                </span>
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-white/60 text-sm">Start-Rite Schools, Abuja</span>
                </div>
                <div className="flex items-center gap-2 text-white/40 hover:text-white/60 transition-colors">
                  <Maximize2 size={14} />
                  <span className="text-xs">Fullscreen</span>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Tour highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {[
            { label: "Science Labs", sub: "Modern equipment" },
            { label: "ICT Centre", sub: "Digital learning" },
            { label: "Sports Complex", sub: "Olympic-sized" },
            { label: "Library", sub: "10,000+ volumes" },
          ].map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.08}>
              <div className="text-center p-4 rounded-xl bg-navy-900/50 border border-navy-800 hover:border-gold-500/30 transition-colors">
                <p className="text-white text-sm font-semibold">{item.label}</p>
                <p className="text-gray-500 text-xs mt-1">{item.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
