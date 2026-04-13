"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const STATS = [
  { num: "12+", label: "Years in Business" },
  { num: "500+", label: "Builds Completed" },
  { num: "50+", label: "Vehicle Models Serviced" },
  { num: "100%", label: "Passion for Off-Road" },
];

const VALUES = [
  { title: "Precision Engineering", desc: "Every bolt torqued, every weld inspected. We don't cut corners on your build." },
  { title: "Performance Focused", desc: "We build for real-world performance — trails, mud, rocks, and everything in between." },
  { title: "Trusted Expertise", desc: "Over a decade of specialized off-road experience in the heart of Pretoria." },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-neon/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-neon/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-neon" />
            <span className="font-rajdhani text-neon text-sm tracking-[0.3em] uppercase font-600">
              Who We Are
            </span>
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-900 text-white leading-tight">
            Built on Passion,
            <br />
            <span className="text-neon">Driven by Precision</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — text content */}
          <div>
            <p className="font-rajdhani text-white/70 text-lg leading-relaxed mb-6 reveal" style={{ transitionDelay: "100ms" }}>
              MJ Auto Engineering was founded on a simple belief: every off-road vehicle deserves to be built with the same care and precision as the toughest terrain it will face. Based in Pretoria West, we&apos;ve grown into one of South Africa&apos;s most trusted off-road engineering workshops.
            </p>
            <p className="font-rajdhani text-white/60 text-base leading-relaxed mb-10 reveal" style={{ transitionDelay: "200ms" }}>
              From full custom off-road builds to precision engine rebuilds, our team brings decades of combined experience to every vehicle that enters our workshop. We specialize in 4x4 platforms with a deep passion for Jeep-style engineering.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className="reveal flex gap-4"
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 border border-neon/30 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-neon rounded-full animate-pulse-glow" />
                  </div>
                  <div>
                    <h4 className="font-orbitron text-white text-sm font-700 mb-1 tracking-wide">{v.title}</h4>
                    <p className="font-rajdhani text-white/55 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 reveal" style={{ transitionDelay: "600ms" }}>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary text-sm"
              >
                Start Your Build
              </button>
            </div>
          </div>

          {/* Right — image grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 reveal" style={{ transitionDelay: "150ms" }}>
            {/* Large top image */}
            <div className="col-span-2 relative h-52 sm:h-64 overflow-hidden group">
              <div className="absolute inset-0 border border-neon/10 z-10 group-hover:border-neon/30 transition-colors duration-500" />
              <Image
                src="/images/about/main.png"
                alt="MJ Auto Engineering workshop"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent z-10" />
            </div>

            {/* Bottom row — 3 smaller images */}
            {[
              { src: "/images/about/about1.jpg", alt: "Engine rebuild" },
              { src: "/images/about/about2.jpg.avif", alt: "Off-road modification" },
              { src: "/images/about/about3.jpg", alt: "Suspension work" },
            ].map((img) => (
              <div
                key={img.src}
                className={`relative overflow-hidden group ${img.src.includes("about1") ? "col-span-1" : "col-span-1"}`}
                style={{ height: "140px" }}
              >
                <div className="absolute inset-0 border border-neon/10 z-10 group-hover:border-neon/30 transition-colors duration-500" />
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/10 transition-colors duration-500 z-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 reveal" style={{ transitionDelay: "200ms" }}>
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-6 border border-metal-light/30 hover:border-neon/30 transition-colors duration-500 group relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="stat-number text-3xl sm:text-4xl font-orbitron font-900 mb-2">
                {stat.num}
              </div>
              <div className="font-rajdhani text-white/50 text-xs tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
