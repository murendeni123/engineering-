"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BUILDS } from "@/constants/builds";

export default function Builds() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredBuild, setHoveredBuild] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="builds"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-amber" style={{ background: "var(--amber)" }} />
            <span className="font-rajdhani text-sm tracking-[0.3em] uppercase font-600" style={{ color: "var(--amber)" }}>
              Featured Work
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-900 text-white leading-tight">
              The Builds
            </h2>
            <p className="font-rajdhani text-white/50 text-sm max-w-xs tracking-wide">
              Each build is a bespoke creation — engineered, tested, and trail-proven.
            </p>
          </div>
        </div>

        {/* Builds grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {BUILDS.map((build, i) => (
            <div
              key={build.id}
              className="reveal group relative overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredBuild(build.id)}
              onMouseLeave={() => setHoveredBuild(null)}
            >
              {/* Image container */}
              <div className="relative overflow-hidden" style={{ height: i === 0 ? "420px" : "320px" }}>
                <Image
                  src={build.image}
                  alt={build.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent transition-opacity duration-500" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-neon/10 to-transparent transition-opacity duration-500 ${
                    hoveredBuild === build.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Top badge */}
                <div className="absolute top-4 left-4 border border-amber/40 bg-dark/60 backdrop-blur-sm px-3 py-1">
                  <span className="font-rajdhani text-xs tracking-[0.2em] uppercase font-600" style={{ color: "var(--amber)" }}>
                    {build.subtitle}
                  </span>
                </div>

                {/* Stats overlay */}
                <div
                  className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-500 ${
                    hoveredBuild === build.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  {Object.entries(build.stats).map(([key, val]) => (
                    <div key={key} className="bg-dark/80 backdrop-blur-sm border border-neon/20 px-3 py-1.5 text-center">
                      <div className="font-orbitron text-sm font-900 text-neon">{val}</div>
                      <div className="font-rajdhani text-[10px] text-white/40 uppercase tracking-wider">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-orbitron text-xl sm:text-2xl font-900 text-white mb-2 group-hover:text-neon transition-colors duration-300">
                    {build.title}
                  </h3>
                  <p
                    className={`font-rajdhani text-white/65 text-sm leading-relaxed transition-all duration-500 max-w-md ${
                      hoveredBuild === build.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                  >
                    {build.description}
                  </p>

                  {/* Tags */}
                  <div
                    className={`flex flex-wrap gap-2 mt-4 transition-all duration-500 delay-75 ${
                      hoveredBuild === build.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                    }`}
                  >
                    {build.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-rajdhani text-xs border border-white/20 text-white/60 px-2 py-1 tracking-wider uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Neon border on hover */}
              <div
                className={`absolute inset-0 border transition-all duration-500 pointer-events-none ${
                  hoveredBuild === build.id ? "border-neon/50" : "border-transparent"
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA Row */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-metal-light/20 pt-10 reveal">
          <div>
            <h3 className="font-orbitron text-lg font-700 text-white mb-1">
              Ready for Your Custom Build?
            </h3>
            <p className="font-rajdhani text-white/50 text-sm tracking-wide">
              We&apos;ll engineer it from concept to completion.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-sm flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Start Your Build
          </button>
        </div>
      </div>
    </section>
  );
}
