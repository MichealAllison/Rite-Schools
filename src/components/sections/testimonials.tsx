"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import ScrollReveal from "@/src/components/ui/scroll-reveal";
import SectionHeading from "@/src/components/ui/section-heading";

const testimonials = [
  {
    name: "Mrs. Adebayo O.",
    role: "Parent of Primary 4 Student",
    avatar: "AO",
    rating: 5,
    content:
      "Start-Rite has been transformative for our daughter. The small class sizes mean she gets the attention she needs, and the STEAM programme has ignited a passion for science we never knew she had. The teachers truly care about each child's development.",
  },
  {
    name: "Dr. Emeka N.",
    role: "Parent of Secondary 2 Student",
    avatar: "EN",
    rating: 5,
    content:
      "We moved our son from a school in the UK to Start-Rite and it was the best decision we could have made. The Cambridge curriculum ensures continuity, and the leadership opportunities here have helped him grow in confidence tremendously.",
  },
  {
    name: "Mrs. Chidi I.",
    role: "Parent of Early Years Student",
    avatar: "CI",
    rating: 5,
    content:
      "The Early Years programme at Start-Rite is exceptional. Our twins have blossomed in the nurturing environment. The regular communication from teachers and the progressive learning approach gives us complete peace of mind.",
  },
  {
    name: "Mr. & Mrs. Yusuf A.",
    role: "Parents of Sixth Form Student",
    avatar: "YA",
    rating: 5,
    content:
      "The university counselling and preparation at Start-Rite Sixth Form is world-class. Our daughter received three offers from Russell Group universities. The dedication of the staff and the quality of teaching has been outstanding throughout her journey.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-cream overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading
          subtitle="Testimonials"
          title="What Parents Say"
          description="Hear from our community of parents about their children's experiences at Start-Rite International School."
        />

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 relative"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gold-200">
                  <Quote size={40} />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-8 italic relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-navy-900 font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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
