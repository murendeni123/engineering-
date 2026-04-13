"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SERVICES } from "@/constants/services";

const ICONS: Record<string, React.ReactNode> = {
  diagnostic: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
    </svg>
  ),
  engine: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
  suspension: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  offroad: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  electrical: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-charcoal overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(57,255,20,0.5) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(57,255,20,0.5) 60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-neon" />
            <span className="font-rajdhani text-neon text-sm tracking-[0.3em] uppercase font-600">What We Do</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-900 text-white leading-tight">
              Our Services
            </h2>
            <p className="font-rajdhani text-white/50 text-sm max-w-xs tracking-wide">
              Every service is backed by expert hands and premium parts.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              className="reveal group relative overflow-hidden border border-metal-light/20 hover:border-neon/40 transition-all duration-500 cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />

                {/* Icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 border border-neon/30 bg-charcoal/80 backdrop-blur-sm flex items-center justify-center text-neon icon-glow group-hover:bg-neon/10 transition-colors duration-300">
                  {ICONS[service.icon]}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-charcoal">
                <h3 className="font-orbitron text-base font-700 text-white mb-3 tracking-wide group-hover:text-neon transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-rajdhani text-white/60 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="font-rajdhani text-xs text-neon/70 border border-neon/20 px-2 py-1 tracking-wider uppercase group-hover:border-neon/50 transition-colors duration-300"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div
                  className={`mt-5 flex items-center gap-2 font-rajdhani text-xs font-600 tracking-widest uppercase transition-all duration-300 ${
                    activeService === service.id ? "text-neon opacity-100" : "text-white/30 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <span>Learn More</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Neon bottom border on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-neon group-hover:w-full transition-all duration-500" />
            </div>
          ))}

          {/* "All Builds" card */}
          <div
            className="reveal sm:col-span-2 lg:col-span-1 relative overflow-hidden border border-neon/20 hover:border-neon/50 transition-all duration-500 cursor-pointer group min-h-[200px] flex items-center justify-center p-8"
            style={{ transitionDelay: `${SERVICES.length * 80}ms` }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-neon/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="flex flex-col gap-[4px] w-10">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="grille-slot h-[3px] rounded-full" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
              <h3 className="font-orbitron text-lg font-700 text-neon mb-2 neon-glow tracking-wide">
                Custom Quote
              </h3>
              <p className="font-rajdhani text-white/50 text-sm tracking-wide">
                Don&apos;t see what you need? Let&apos;s build something unique.
              </p>
              <div className="mt-6 btn-primary inline-flex text-xs py-2.5 px-6">
                Get a Quote
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
