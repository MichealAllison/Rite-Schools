"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import ScrollReveal from "@/src/components/ui/scroll-reveal";

export default function AdmissionsCta() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <motion.div
            whileHover={{ y: -4 }}
            className="relative rounded-3xl overflow-hidden bg-navy-950 shadow-2xl shadow-navy-900/30"
          >
            {/* Background decorative elements */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-navy-700/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_25%_25%,#c9a84c_1px,transparent_1px)] bg-[length:40px_40px]" />

            <div className="relative p-8 lg:p-16 xl:p-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div>
                    <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
                      Begin Your Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight">
                      Give Your Child the
                      <br />
                      <span className="gold-gradient-text">Gift of Excellence</span>
                    </h2>
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                    Admissions are now open for the 2026/2027 academic session.
                    Join Nigeria&apos;s leading international school and give your child
                    the education they deserve.
                  </p>

                  {/* Benefits */}
                  <div className="space-y-4">
                    {[
                      "World-class Cambridge curriculum",
                      "Small class sizes with personalised attention",
                      "State-of-the-art learning facilities",
                      "Holistic development programme",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle
                          size={18}
                          className="text-gold-500 flex-shrink-0"
                        />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href="https://startriteschools.com.ng/apply/"
                      className="group inline-flex items-center gap-2 px-8 py-4 gold-gradient text-navy-900 font-semibold rounded-xl shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-500 hover:scale-105"
                    >
                      Apply Now
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-500"
                    >
                      <Calendar size={18} />
                      Schedule a Visit
                    </a>
                  </div>

                  {/* Contact */}
                  <div className="pt-6 border-t border-navy-800">
                    <p className="text-gray-500 text-sm">
                      Questions? Call us at{" "}
                      <a
                        href="tel:08106334006"
                        className="text-gold-500 hover:text-gold-400 transition-colors font-medium"
                      >
                        +234 810 633 4006
                      </a>{" "}
                      or email{" "}
                      <a
                        href="mailto:admissions@startriteschools.com.ng"
                        className="text-gold-500 hover:text-gold-400 transition-colors font-medium"
                      >
                        admissions@startriteschools.com.ng
                      </a>
                    </p>
                  </div>
                </div>

                {/* Right - Premium Badge */}
                <div className="hidden lg:flex flex-col items-center justify-center">
                  <div className="relative">
                    {/* Decorative rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-gold-500/20 animate-pulse" />
                    <div className="absolute -inset-4 rounded-full border border-gold-500/10" />
                    <div className="absolute -inset-8 rounded-full border border-gold-500/5" />

                    <div className="relative w-64 h-64 rounded-full gold-gradient flex flex-col items-center justify-center text-center p-8">
                      <span className="text-navy-900 text-6xl font-bold font-heading">
                        20+
                      </span>
                      <span className="text-navy-900/80 text-sm font-medium mt-2">
                        Years of Excellence
                      </span>
                      <div className="w-12 h-0.5 bg-navy-900/30 my-3" />
                      <span className="text-navy-900/70 text-xs uppercase tracking-wider">
                        Start-Rite International School
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-gray-500 text-sm">
                    <CheckCircle size={14} className="text-gold-500" />
                    <span>Accredited by COBIS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
