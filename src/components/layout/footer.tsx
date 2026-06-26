"use client";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  GraduationCap,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import ScrollReveal from "@/src/components/ui/scroll-reveal";

const quickLinks = [
  { label: "About Us", href: "#" },
  { label: "Our Mission", href: "#" },
  { label: "Academic Excellence", href: "#" },
  { label: "School Calendar", href: "#" },
  { label: "News & Events", href: "#" },
  { label: "Careers", href: "#" },
];

const admissions = [
  { label: "Admissions Process", href: "https://startriteschools.com.ng/apply/" },
  { label: "Fee Structure", href: "#" },
  { label: "Scholarships", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Book a Tour", href: "#" },
];

const academics = [
  { label: "Early Years", href: "https://startriteschools.com.ng/early-years/" },
  { label: "Primary School", href: "https://startriteschools.com.ng/primary/" },
  { label: "Secondary School", href: "https://startriteschools.com.ng/secondary/" },
  { label: "Sixth Form", href: "#" },
  { label: "STEAM Programme", href: "#" },
];

const socialLinks = [
  { icon: Globe, href: "https://www.facebook.com/startriteschools/", label: "Facebook" },
  { icon: Globe, href: "https://linkedin.com/company/startriteschoolsabuja", label: "LinkedIn" },
  { icon: Globe, href: "https://twitter.com/startriteschool", label: "Twitter" },
  { icon: Globe, href: "https://www.instagram.com/startriteschool/", label: "Instagram" },
  { icon: Globe, href: "https://www.youtube.com/user/startriteschools/", label: "YouTube" },
];

const footerSections = [
  { title: "Quick Links", links: quickLinks },
  { title: "Admissions", links: admissions },
  { title: "Academics", links: academics },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_25%_25%,#c9a84c_1px,transparent_1px),radial-gradient(circle_at_75%_75%,#c9a84c_1px,transparent_1px)] bg-[length:60px_60px]" />

      {/* Top Border Accent */}
      <div className="h-1 gold-gradient" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                  <GraduationCap className="text-navy-900" size={24} />
                </div>
                <div>
                  <p className="font-heading font-bold text-xl text-white">Start-Rite</p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-gold-500 font-semibold">
                    International School
                  </p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                Nurturing capable, compassionate, and creative individuals through a
                world-class STEAM education in Abuja, Nigeria.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <a
                  href="tel:08106334006"
                  className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-navy-800/50 flex items-center justify-center group-hover:bg-navy-800 transition-colors">
                    <Phone size={16} className="text-gold-500" />
                  </span>
                  <span className="text-sm">+234 810 633 4006</span>
                </a>
                <a
                  href="mailto:admissions@startriteschools.com.ng"
                  className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors group"
                >
                  <span className="w-10 h-10 rounded-lg bg-navy-800/50 flex items-center justify-center group-hover:bg-navy-800 transition-colors">
                    <Mail size={16} className="text-gold-500" />
                  </span>
                  <span className="text-sm">admissions@startriteschools.com.ng</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <span className="w-10 h-10 rounded-lg bg-navy-800/50 flex items-center justify-center">
                    <MapPin size={16} className="text-gold-500" />
                  </span>
                  <span className="text-sm">Abuja, Nigeria</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-8">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.label}`}
                    className="w-10 h-10 rounded-lg bg-navy-800/50 flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <ScrollReveal delay={0.1 * footerSections.indexOf(section)}>
                <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-gold-500 transition-colors text-sm flex items-center gap-1 group"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={12}
                          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          ))}
        </div>

        {/* Newsletter + Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 p-8 rounded-2xl bg-navy-900/50 border border-navy-800/50">
          <ScrollReveal direction="left">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 font-heading">
                Stay Connected
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Subscribe to our newsletter for the latest updates on school events,
                academic achievements, and admissions.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-3"
              >
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-navy-800/50 border border-navy-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 gold-gradient text-navy-900 font-semibold rounded-xl hover:scale-105 transition-transform duration-300 flex items-center gap-2 text-sm"
                >
                  <Send size={16} />
                  Subscribe
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Google Maps Placeholder */}
          <ScrollReveal direction="right">
            <div className="rounded-xl overflow-hidden h-[200px] bg-navy-800/50 relative group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-gold-500 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Start-Rite Schools, Abuja</p>
                  <p className="text-gray-500 text-xs mt-1">View on Google Maps</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-medium">Open in Google Maps →</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Start-Rite International School. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gold-500 transition-colors">
              Terms of Use
            </a>
            <a href="https://startriteschools.com.ng/safeguarding/" className="text-gray-500 hover:text-gold-500 transition-colors">
              Safeguarding
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
