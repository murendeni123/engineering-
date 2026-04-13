"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#builds", label: "Builds" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-[68px]">

          {/* Mobile hamburger — left */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: open ? "#0A0A0A" : "rgba(10,10,10,0.08)" }}
            aria-label="Menu"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={open ? "#fff" : "#0A0A0A"} strokeWidth={2}>
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>

          {/* Desktop left links */}
          <nav className="hidden md:flex items-center gap-8">
            {LINKS.slice(0, 2).map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>

          {/* Brand — always centred */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-center select-none">
            <div className="font-display text-lg font-black tracking-widest uppercase text-black leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", letterSpacing: "0.2em" }}>
              MJ AUTO Engineering
            </div>
          </Link>

          {/* Desktop right links + CTA */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.slice(2).map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-orange text-xs px-5 py-2.5"
            >
              Book a Build
            </button>
          </div>

          {/* Mobile phone pill — right */}
          <a
            href="tel:0785406778"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-[9px] font-bold tracking-widest text-white"
            style={{ background: "#0A0A0A" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: "rgba(244,243,238,0.98)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(10,10,10,0.08)" }}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-base font-semibold text-black tracking-wide" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <div className="divider" />
          <a href="tel:0785406778" className="text-sm font-medium" style={{ color: "#6B6B6B" }}>078 540 6778</a>
          <button onClick={() => { setOpen(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-orange justify-center">
            Book a Build
          </button>
        </div>
      </div>
    </header>
  );
}
