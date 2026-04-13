"use client";

import { useEffect, useRef } from "react";

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-dark overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(57,255,20,0.08) 40px, rgba(57,255,20,0.08) 80px)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
      </div>

      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 bg-amber/5 rounded-full blur-[80px] pointer-events-none" style={{ background: "rgba(255,171,0,0.05)" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Grille decoration */}
        <div className="flex justify-center mb-8 reveal">
          <div className="flex flex-col gap-[5px] w-16">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="grille-slot h-[3px] rounded-full"
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
        </div>

        <h2
          className="font-orbitron text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-900 text-white mb-6 leading-tight reveal"
          style={{ transitionDelay: "100ms" }}
        >
          Ready to Transform
          <br />
          <span className="text-neon neon-glow">Your Ride?</span>
        </h2>

        <p
          className="font-rajdhani text-white/60 text-lg max-w-xl mx-auto mb-10 leading-relaxed tracking-wide reveal"
          style={{ transitionDelay: "200ms" }}
        >
          From a single upgrade to a full custom build — our team is ready to engineer
          your vision into reality. Book your consultation today.
        </p>

        <div
          className="flex flex-col xs:flex-row gap-4 justify-center items-center reveal"
          style={{ transitionDelay: "300ms" }}
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-sm w-full xs:w-auto"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Get a Quote
          </button>

          <a
            href="tel:0785406778"
            className="btn-primary btn-amber text-sm w-full xs:w-auto"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>

        {/* Phone number display */}
        <p
          className="mt-8 font-rajdhani text-white/30 text-sm tracking-[0.2em] reveal"
          style={{ transitionDelay: "400ms" }}
        >
          078 540 6778 · Mon–Fri 6AM–5PM · Sat–Sun 9AM–4PM
        </p>
      </div>
    </section>
  );
}
