"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "#",
    children: [
      { label: "Our Story", href: "#" },
      { label: "Principal's Message", href: "https://startriteschools.com.ng/principals-message/" },
      { label: "Mission & Vision", href: "#" },
      { label: "Leadership", href: "#" },
    ],
  },
  {
    label: "Academics",
    href: "#",
    children: [
      { label: "Early Years", href: "https://startriteschools.com.ng/early-years/" },
      { label: "Primary", href: "https://startriteschools.com.ng/primary/" },
      { label: "Secondary", href: "https://startriteschools.com.ng/secondary/" },
      { label: "Sixth Form", href: "#" },
    ],
  },
  { label: "Admissions", href: "https://startriteschools.com.ng/apply/" },
  { label: "News & Events", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`hidden lg:flex items-center justify-between px-6 py-2 transition-all duration-500 ${
          scrolled ? "h-0 py-0 overflow-hidden opacity-0" : "h-auto opacity-100"
        }`}
      >
        <div className="flex items-center gap-6 text-sm">
          <a href="tel:08106334006" className="text-gray-400 hover:text-gold-500 transition-colors">
            +234 810 633 4006
          </a>
          <a href="tel:07065636067" className="text-gray-400 hover:text-gold-500 transition-colors">
            +234 706 563 6067
          </a>
          <a
            href="https://startriteschools.com.ng/safeguarding/"
            className="text-gray-400 hover:text-gold-500 transition-colors"
          >
            Committed to Safeguarding
          </a>
        </div>
        <div className="flex items-center gap-4">
          {[
            { label: "FB", href: "https://www.facebook.com/startriteschools/" },
            { label: "LI", href: "https://linkedin.com/company/startriteschoolsabuja" },
            { label: "TW", href: "https://twitter.com/startriteschool" },
            { label: "IG", href: "https://www.instagram.com/startriteschool/" },
            { label: "YT", href: "https://www.youtube.com/user/startriteschools/" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold tracking-wider text-gray-400 hover:text-gold-500 transition-colors uppercase"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`flex items-center justify-between px-6 lg:px-12 transition-all duration-500 ${
          scrolled ? "py-3" : "py-4 lg:py-5"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
            <span className="text-navy-900 font-bold text-lg font-heading">SR</span>
          </div>
          <div className="hidden sm:block">
            <p className={`font-heading font-bold text-lg leading-tight transition-colors ${
              scrolled ? "text-navy-900" : "text-white"
            }`}>
              Start-Rite
            </p>
            <p className={`text-[10px] tracking-[0.15em] uppercase font-semibold transition-colors ${
              scrolled ? "text-gold-600" : "text-gold-400"
            }`}>
              International School
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                  scrolled
                    ? "text-navy-800 hover:text-gold-600 hover:bg-navy-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>
              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl shadow-black/10 border border-gray-100 py-2 overflow-hidden">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-navy-50 hover:text-navy-800 transition-colors"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://startriteschools.com.ng/apply/"
            className="px-5 py-2.5 text-sm font-semibold text-white gold-gradient rounded-lg shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-navy-900 hover:bg-navy-50" : "text-white hover:bg-white/10"
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-gray-700 hover:text-navy-800 hover:bg-navy-50 rounded-lg font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.children && (
                    <div className="ml-4 space-y-1 border-l-2 border-navy-100 pl-4">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-500 hover:text-navy-800 hover:bg-navy-50 rounded-lg transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="https://startriteschools.com.ng/apply/"
                  className="block w-full text-center px-5 py-3 text-sm font-semibold text-white gold-gradient rounded-lg shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </a>
                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
                  {["FB", "LI", "TW", "IG", "YT"].map((s) => (
                    <span key={s} className="text-xs font-semibold text-gray-400 uppercase">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
