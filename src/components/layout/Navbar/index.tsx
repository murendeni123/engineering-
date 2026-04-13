"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#builds", label: "Builds" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 select-none">
            <div
              className="w-8 h-8 flex items-center justify-center rounded-md"
              style={{ background: "rgba(255,98,0,0.12)", border: "1px solid rgba(255,98,0,0.25)" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#FF6200" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="leading-none">
              <div className="text-white font-bold text-base tracking-tight">
                MJ <span style={{ color: "#FF6200" }}>AUTO</span>
              </div>
              <div className="text-[9px] tracking-[0.18em] uppercase font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                Engineering
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>

          {/* Right: phone + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:0785406778"
              className="nav-link text-sm"
              style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}
            >
              078 540 6778
            </a>
            <button onClick={() => scrollTo("contact")} className="btn-orange text-sm">
              Book Your Build
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(8,8,8,0.97)", backdropFilter: "blur(24px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="px-5 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link text-base py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="divider my-1" />
          <a href="tel:0785406778" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem" }}>
            078 540 6778
          </a>
          <button onClick={() => scrollTo("contact")} className="btn-orange w-full justify-center mt-1">
            Book Your Build
          </button>
        </div>
      </div>
    </header>
  );
}
