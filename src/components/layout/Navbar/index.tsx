"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#builds", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-black/25 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-[72px] md:h-[88px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20">
              <Image
                src="/images/logo/LOGO_2.png"
                alt="MJ Motor Mechanics"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span
              className={`hidden sm:block font-bold text-lg ${
                scrolled ? "text-primary" : "text-white"
              }`}
              style={scrolled ? undefined : { textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
            >
              MJ Motor Mechanics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white/95 hover:text-white"
                }`}
                style={scrolled ? undefined : { textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary text-white px-5 py-2.5 rounded font-semibold text-sm hover:bg-secondary transition-colors"
            >
              Book a Service
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors ${
              scrolled
                ? "bg-gray-100 hover:bg-gray-200"
                : "bg-white/15 hover:bg-white/25"
            }`}
            aria-label="Menu"
          >
            <svg
              className={`w-5 h-5 ${scrolled ? "text-primary" : "text-white"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium py-2 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <hr className="border-gray-200" />
          <a href="tel:0785406778" className="text-gray-500 text-sm">078 540 6778</a>
          <button
            onClick={() => { setOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="bg-primary text-white py-3 rounded font-semibold text-center hover:bg-secondary transition-colors"
          >
            Book a Service
          </button>
        </div>
      </motion.div>
    </header>
  );
}
