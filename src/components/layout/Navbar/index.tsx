"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Builds", href: "#builds" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-dark/95 backdrop-blur-md border-b border-neon/10"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
            {/* Mini grille icon */}
            <div className="flex flex-col gap-[3px] w-8">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="grille-slot h-[2px] rounded-full"
                  style={{ animationDelay: `${i * 0.12}s` }}
                />
              ))}
            </div>
            <div>
              <span className="font-orbitron text-sm sm:text-base font-900 text-white group-hover:text-neon transition-colors duration-300 leading-none block">
                MJ AUTO
              </span>
              <span className="font-rajdhani text-[10px] sm:text-xs text-neon/70 tracking-[0.2em] uppercase block">
                Engineering
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${
                  activeSection === link.href.replace("#", "")
                    ? "text-neon"
                    : ""
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden sm:inline-flex btn-primary text-xs py-2.5 px-5"
            >
              Book Your Build
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[5px] p-2 z-50"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ${
                  menuOpen ? "w-6 rotate-45 translate-y-[7px] bg-neon" : "w-6"
                }`}
              />
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ${
                  menuOpen ? "w-0 opacity-0" : "w-4"
                }`}
              />
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ${
                  menuOpen ? "w-6 -rotate-45 -translate-y-[7px] bg-neon" : "w-6"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-dark/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transform: menuOpen ? "translateY(0)" : "translateY(-100%)" }}
      >
        {/* Decorative grille background */}
        <div className="absolute inset-0 flex flex-col justify-center gap-6 px-8 opacity-5 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-[1px] bg-neon w-full" />
          ))}
        </div>

        {NAV_LINKS.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className="font-orbitron text-2xl font-700 text-white hover:text-neon transition-colors duration-300 tracking-widest uppercase relative"
            style={{ transitionDelay: menuOpen ? `${i * 80}ms` : "0ms" }}
          >
            {link.label}
          </button>
        ))}

        <button
          onClick={() => handleNavClick("#contact")}
          className="btn-primary mt-4 text-sm"
        >
          Book Your Build
        </button>

        <div className="mt-8 text-center">
          <p className="font-rajdhani text-white/40 text-sm tracking-widest uppercase">
            078 540 6778
          </p>
        </div>
      </div>
    </>
  );
}
